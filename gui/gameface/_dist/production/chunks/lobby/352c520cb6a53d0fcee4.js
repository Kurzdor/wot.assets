'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [133],
    {
        5461: (e, a, t) => {
            t.d(a, { XZ: () => _, yB: () => l.yB, Rh: () => l.Rh });
            var s = t(6179),
                n = t.n(s),
                i = t(6483),
                o = t.n(i),
                r = t(7727);
            let c;
            !(function (e) {
                (e[(e.LEFT = 0)] = 'LEFT'),
                    (e[(e.WHEEL = 1)] = 'WHEEL'),
                    (e[(e.RIGHT = 2)] = 'RIGHT'),
                    (e[(e.FOURTH = 3)] = 'FOURTH'),
                    (e[(e.FIFTH = 4)] = 'FIFTH');
            })(c || (c = {}));
            var l = t(8844);
            const u = {
                    base: 'Checkbox_base_36',
                    base__disabled: 'Checkbox_base__disabled_08',
                    base__center: 'Checkbox_base__center_52',
                    base__bottom: 'Checkbox_base__bottom_28',
                    input: 'Checkbox_input_37',
                    base__mouseDown: 'Checkbox_base__mouseDown_45',
                    base__small: 'Checkbox_base__small_18',
                    base__medium: 'Checkbox_base__medium_12',
                    base__large: 'Checkbox_base__large_f7',
                    base__extraLarge: 'Checkbox_base__extraLarge_c9',
                    alertOverlay: 'Checkbox_alertOverlay_52',
                    base__alert: 'Checkbox_base__alert_b7',
                    blink: 'Checkbox_blink_5e',
                    base__checked: 'Checkbox_base__checked_a2',
                    inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                    highlight: 'Checkbox_highlight_b8',
                    base__main: 'Checkbox_base__main_3a',
                    base__primary: 'Checkbox_base__primary_ab',
                    checkmark: 'Checkbox_checkmark_60',
                    fadeIn: 'Checkbox_fadeIn_1a',
                    label: 'Checkbox_label_bc',
                    labelContent: 'Checkbox_labelContent_64',
                },
                m = [
                    'id',
                    'isChecked',
                    'isDisabled',
                    'isAlert',
                    'size',
                    'type',
                    'soundHover',
                    'soundClick',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseUp',
                    'onMouseDown',
                    'onClick',
                    'onChange',
                    'onFocus',
                    'onBlur',
                    'text',
                    'contentStyles',
                    'children',
                    'alignment',
                ];
            function d() {
                return (
                    (d = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                              }
                              return e;
                          }),
                    d.apply(null, arguments)
                );
            }
            const _ = (e) => {
                let a = e.id,
                    t = e.isChecked,
                    i = void 0 !== t && t,
                    _ = e.isDisabled,
                    g = void 0 !== _ && _,
                    b = e.isAlert,
                    p = void 0 !== b && b,
                    v = e.size,
                    h = void 0 === v ? l.yB.medium : v,
                    y = e.type,
                    k = void 0 === y ? l.Rh.primary : y,
                    E = e.soundHover,
                    f = void 0 === E ? 'highlight' : E,
                    C = e.soundClick,
                    x = void 0 === C ? 'play' : C,
                    R = e.onMouseEnter,
                    w = e.onMouseLeave,
                    N = e.onMouseUp,
                    B = e.onMouseDown,
                    $ = e.onClick,
                    O = e.onChange,
                    S = e.onFocus,
                    T = e.onBlur,
                    P = e.text,
                    A = e.contentStyles,
                    z = e.children,
                    L = e.alignment,
                    I = (function (e, a) {
                        if (null == e) return {};
                        var t = {};
                        for (var s in e)
                            if ({}.hasOwnProperty.call(e, s)) {
                                if (a.indexOf(s) >= 0) continue;
                                t[s] = e[s];
                            }
                        return t;
                    })(e, m);
                const q = (0, s.useState)(!1),
                    H = q[0],
                    D = q[1],
                    F = (0, s.useState)(!1),
                    G = (F[0], F[1]),
                    M = (0, s.useCallback)(
                        (e) => {
                            g || (O && O(), $ && $(e));
                        },
                        [g, O, $],
                    ),
                    Q = (0, s.useCallback)(
                        (e) => {
                            const a = e.button === c.LEFT;
                            g || (a && D(!0), a && B && B(e), x && (0, r.G)(x));
                        },
                        [g, B, x],
                    ),
                    K = (0, s.useCallback)(
                        (e) => {
                            g || (D(!1), N && N(e));
                        },
                        [g, N],
                    ),
                    V = (0, s.useCallback)(
                        (e) => {
                            g || (R && R(e), f && (0, r.G)(f));
                        },
                        [g, R, f],
                    ),
                    X = (0, s.useCallback)(
                        (e) => {
                            g || (D(!1), w && w(e));
                        },
                        [g, w],
                    ),
                    W = (0, s.useCallback)(
                        (e) => {
                            g || (G(!0), S && S(e));
                        },
                        [g, S],
                    ),
                    j = (0, s.useCallback)(
                        (e) => {
                            g || (G(!1), T && T(e));
                        },
                        [g, T],
                    ),
                    U = n().createElement(
                        'div',
                        { className: u.label },
                        n().createElement(
                            'div',
                            { className: o()(u.labelContent, 's-labelContent'), style: A },
                            P || z,
                        ),
                    );
                return n().createElement(
                    'div',
                    d(
                        {
                            id: a,
                            className: o()(u.base, u[`base__${h}`], u[`base__${k}`], {
                                [u.base__checked]: i,
                                [u.base__disabled]: g,
                                [u.base__mouseDown]: H,
                                [u.base__alert]: p,
                                [u.base__center]: L === l.N3.Center,
                                [u.base__bottom]: L === l.N3.Bottom,
                            }),
                            onClick: M,
                            onMouseEnter: V,
                            onMouseLeave: X,
                            onMouseDown: Q,
                            onMouseUp: K,
                            onFocus: W,
                            onBlur: j,
                        },
                        I,
                    ),
                    n().createElement(
                        'div',
                        { className: u.input },
                        n().createElement('div', { className: u.alertOverlay }),
                        n().createElement('div', { className: u.inputHoverOverlay }),
                        n().createElement('div', { className: u.highlight }),
                    ),
                    n().createElement('div', { className: u.checkmark }),
                    ((P || z) && U) || null,
                );
            };
        },
        8844: (e, a, t) => {
            let s, n, i;
            t.d(a, { N3: () => i, Rh: () => n, yB: () => s }),
                (function (e) {
                    (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(s || (s = {})),
                (function (e) {
                    (e.primary = 'primary'), (e.main = 'main');
                })(n || (n = {})),
                (function (e) {
                    (e.Center = 'center'), (e.Bottom = 'bottom');
                })(i || (i = {}));
        },
        9690: (e, a, t) => {
            t.d(a, { HG: () => r, cg: () => i });
            const s = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
            function i(e) {
                let a = '';
                for (let t = n.length - 1; t >= 0; t--) for (; e >= n[t]; ) (a += s[t]), (e -= n[t]);
                return a;
            }
            const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                r = (e) => (o ? `${e}` : i(e));
        },
        5834: (e, a, t) => {
            function s(e, a = '-') {
                if ('string' == typeof e) return e;
                const t = Object.entries(e)[0];
                return [t[0], s(t[1], a)].join(a);
            }
            t.d(a, { P: () => s });
        },
        198: (e, a, t) => {
            t.d(a, { A_: () => d, Az: () => m, B1: () => o, Kg: () => b, QK: () => _, mB: () => u });
            var s = t(9762),
                n = t(6457),
                i = t(8869);
            const o = {
                    initial: 'initial',
                    waiting: 'waiting',
                    preparation: 'preparation',
                    open: 'open',
                    rewards: 'rewards',
                    page: 'page',
                    extra: 'extra',
                    skip: 'skip',
                },
                r = 'initial',
                c = 'complex',
                l = 'simple',
                u = `${o.open}-${r}`,
                m = `${o.open}-${l}`,
                d = `${o.open}-${c}`,
                _ = {
                    toExtra: 'toExtra',
                    toRewards: 'toRewards',
                    toPage: 'toPage',
                    toInitial: 'toInitial',
                    toPreparation: 'toStart',
                    toWaiting: 'toWaiting',
                    toOpen: 'toOpen',
                    toSkip: 'toSkip',
                    setAnimationActive: 'setAnimationActive',
                    next: 'next',
                },
                g = (0, s.C)({
                    id: 'animation',
                    initial: o.initial,
                    context: { isAnimationActive: !0 },
                    on: {
                        [_.setAnimationActive]: {
                            actions: (0, n.f0)({ isAnimationActive: (e, a) => a.isAnimationActive }),
                        },
                    },
                    states: {
                        [o.initial]: {
                            on: { [_.toSkip]: o.skip, [_.toPreparation]: o.preparation, [_.toOpen]: o.open },
                        },
                        [o.skip]: { after: { 100: { target: o.initial } } },
                        [o.preparation]: { on: { [_.toWaiting]: { target: o.waiting } } },
                        [o.waiting]: { on: { [_.toOpen]: o.open } },
                        [o.open]: {
                            initial: o.initial,
                            states: {
                                [r]: {
                                    after: { 100: [{ target: c, cond: (e) => e.isAnimationActive }, { target: l }] },
                                },
                                [c]: { on: { [_.toRewards]: '#animation.rewards' } },
                                [l]: { on: { [_.toRewards]: '#animation.rewards' } },
                            },
                        },
                        [o.rewards]: { on: { [_.toPage]: o.page, [_.toExtra]: o.extra } },
                        [o.extra]: { on: { [_.toPage]: o.page } },
                        [o.page]: { on: { [_.toInitial]: o.initial } },
                    },
                }),
                b = (0, i.kJ)(g);
        },
        4561: (e, a, t) => {
            t.d(a, { Z: () => f });
            var s = t(295),
                n = t(6483),
                i = t.n(n),
                o = t(3457),
                r = t(9766),
                c = t(8526),
                l = t(4489),
                u = t(5521),
                m = t(6179),
                d = t.n(m),
                _ = t(2984),
                g = t(2333),
                b = t(198);
            const p = 'Controls_base_1b',
                v = 'Controls_buttons_c3',
                h = 'Controls_button_61',
                y = 'Controls_button__first_66',
                k = 'Controls_quantity_8a',
                E = 'Controls_purchase_bb',
                f = ({ actions: e, boxesCount: a, useExternal: t, texts: n, images: m, openingCount: f = 0 }) => {
                    const C = (0, l.f)(e.openNext, [], 1100),
                        x = (0, s.v)(b.Kg, (e) => e.value),
                        R = () => {
                            x === b.B1.initial && a && C();
                        };
                    return (
                        (0, c.gd)(u.n.SPACE, R, !0),
                        d().createElement(
                            'div',
                            { className: p },
                            d().createElement(
                                'div',
                                { className: v },
                                Boolean(a) &&
                                    d().createElement(
                                        o.u5,
                                        { type: o.L$.main, size: o.qE.medium, mixClass: i()(h, y), onClick: R },
                                        d().createElement(r.z, {
                                            text: n.footerOpenNextButton,
                                            binding: { count: Math.min(a, f) },
                                        }),
                                    ),
                                d().createElement(
                                    o.u5,
                                    {
                                        type: o.L$.primary,
                                        size: o.qE.medium,
                                        mixClass: h,
                                        onClick: () => {
                                            x === b.B1.initial && e.goBack();
                                        },
                                    },
                                    n.footerBackButton,
                                ),
                            ),
                            d().createElement(
                                'div',
                                { className: k },
                                d().createElement(g.q, {
                                    text: a ? n.quantityAvailableTitle : n.quantityNoBoxesTitle,
                                    boxesCount: a,
                                }),
                            ),
                            0 === a &&
                                d().createElement(_.i, {
                                    text: t ? n.footerPurchaseButtonTextCn : n.footerPurchaseButtonText,
                                    image: m.iconEmpty,
                                    icon: t ? m.externalLink : void 0,
                                    className: E,
                                    onClick: () => {
                                        x === b.B1.initial && e.buyBoxes();
                                    },
                                }),
                        )
                    );
                };
        },
        2369: (e, a, t) => {
            t.d(a, { H: () => Q, k: () => M });
            var s = t(6483),
                n = t.n(s),
                i = t(3457),
                o = t(8089),
                r = t(6366),
                c = t(122),
                l = t(5959),
                u = t(514),
                m = t(8526),
                d = t(5521),
                _ = t(6179),
                g = t.n(_),
                b = t(3905),
                p = t(9674),
                v = t(1354),
                h = t(5888),
                y = t(9768),
                k = t(9766),
                E = t(2374);
            const f = 'Customization_base_5c',
                C = 'Customization_styleTitle_a0',
                x = 'Customization_styleDescription_ae',
                R = 'Customization_vehicleInfoStyle_03',
                w = 'Customization_vehicleTypeStyle_db',
                N = ({ rareBonus: e, texts: a }) =>
                    e
                        ? g().createElement(
                              'div',
                              { className: f },
                              g().createElement(k.z, {
                                  text: a.rareOverlayStyleTitle,
                                  binding: { style: e.label },
                                  classMix: C,
                              }),
                              g().createElement(k.z, {
                                  text: a.rareOverlayStyleDescription,
                                  binding: {
                                      vehicleInfo: g().createElement(E.e, {
                                          vehicleName: e.vehicle3DStyleName,
                                          vehicleLvl: e.level,
                                          isElite: e.isElite,
                                          vehicleType: e.type,
                                          classNames: { base: R, type: w },
                                      }),
                                  },
                                  classMix: x,
                              }),
                          )
                        : null,
                B = 'Lootbox_base_88',
                $ = ({ rareBonus: e }) => (e ? g().createElement('div', { className: B }, e.label) : null),
                O = 'Vehicle_base_ee',
                S = 'Vehicle_vehicleInfo_8d',
                T = 'Vehicle_vehicleType_2a',
                P = ({ rareBonus: e }) =>
                    e
                        ? g().createElement(
                              'div',
                              { className: O },
                              g().createElement(E.e, {
                                  vehicleName: e.label,
                                  vehicleLvl: e.level,
                                  isElite: e.isElite,
                                  vehicleType: e.type,
                                  classNames: { base: S, type: T },
                              }),
                          )
                        : null,
                A = 'RewardDescription_base_b3',
                z = ({ rareBonus: e, texts: a }) =>
                    e
                        ? g().createElement(
                              'div',
                              { className: A },
                              (() => {
                                  switch (e.name) {
                                      case M.vehicle:
                                          return g().createElement(P, { rareBonus: e });
                                      case M.lootbox:
                                          return g().createElement($, { rareBonus: e });
                                      case M.customizations:
                                          return g().createElement(N, { rareBonus: e, texts: a });
                                      default:
                                          return console.warn(`Unsupported bonus: ${e.name}`), null;
                                  }
                              })(),
                          )
                        : null,
                L = 'RareRewardOverlay_base_8d',
                I = 'RareRewardOverlay_rewardDescription_ff',
                q = 'RareRewardOverlay_title_c3',
                H = 'RareRewardOverlay_continueButton_8f',
                D = 'RareRewardOverlay_closeButton_2d',
                F = 'RareRewardOverlay_media_1f',
                G = 'RareRewardOverlay_media__image_56';
            let M;
            !(function (e) {
                (e.vehicle = 'vehicles'), (e.lootbox = 'lootBox'), (e.customizations = 'customizations');
            })(M || (M = {}));
            const Q = ({
                res: e,
                rareBonus: a,
                texts: t,
                minimized: s,
                controls: { onClose: k, onPlay: E, onEnded: f },
            }) => {
                const C = (0, _.useState)(!1),
                    x = C[0],
                    R = C[1],
                    w = (0, _.useState)(!1),
                    N = w[0],
                    B = w[1],
                    $ = (0, _.useRef)(null);
                (0, _.useEffect)(() => {
                    a && l.graphicsQuality.isHigh() && (u.hY.sound(p.Q.overlayRareVideo), B(!0), E());
                }, [a]);
                (0, m.gd)(
                    d.n.ESCAPE,
                    () => {
                        x && k();
                    },
                    !0,
                    !0,
                );
                const O = (0, v._)(b.p6);
                return (
                    (0, h.L)($),
                    (0, y.G)($, N, s),
                    (0, _.useEffect)(() => {
                        if (l.graphicsQuality.isLow()) return (0, c.F)(() => R(!0), 300);
                    }, []),
                    g().createElement(
                        'div',
                        { className: L },
                        l.graphicsQuality.isHigh()
                            ? g().createElement(r.n, {
                                  style: O,
                                  src: e.video,
                                  ref: $,
                                  autoplay: !0,
                                  onEnded: () => {
                                      B(!1), R(!0), f();
                                  },
                                  className: F,
                              })
                            : g().createElement('div', {
                                  className: n()(F, G),
                                  style: { backgroundImage: `url(${e.image})` },
                              }),
                        x &&
                            g().createElement(
                                g().Fragment,
                                null,
                                g().createElement(
                                    'div',
                                    { className: I },
                                    g().createElement('div', { className: q }, t.rareOverlayTitle),
                                    g().createElement(z, { rareBonus: a, texts: t }),
                                    g().createElement(
                                        i.u5,
                                        { type: i.L$.primary, size: i.qE.medium, mixClass: H, onClick: k },
                                        t.rareOverlayButtonContinue,
                                    ),
                                ),
                                g().createElement(
                                    'div',
                                    { className: D },
                                    g().createElement(o.A, {
                                        caption: t.closeButton,
                                        type: 'close',
                                        side: 'right',
                                        onClick: k,
                                    }),
                                ),
                            ),
                    )
                );
            };
        },
        7039: (e, a, t) => {
            t.d(a, { s: () => b });
            var s = t(6483),
                n = t.n(s),
                i = t(6366),
                o = t(4736),
                r = t(514),
                c = t(6179),
                l = t.n(c),
                u = t(9674),
                m = t(5888);
            const d = 'RareRewardVideo_base_43',
                _ = 'RareRewardVideo_video_09',
                g = 'RareRewardVideo_video__show_e9',
                b = ({ className: e, style: a = {}, src: t, rarity: s, show: b, timer: p, onEnded: v }) => {
                    const h = (0, c.useRef)(null),
                        y = (0, c.useRef)(!1);
                    return (
                        (0, m.L)(h),
                        (0, c.useEffect)(() => {
                            var e;
                            b &&
                                ((y.current = !1),
                                null == (e = h.current) || e.play(),
                                r.hY.sound(s === o.G.Rare ? u.Q.rareAnimation : u.Q.epicAnimation));
                        }, [b]),
                        (0, c.useEffect)(() => {
                            var e, a;
                            const t = (null == (e = h.current) ? void 0 : e.getDuration()) || 0;
                            null == (a = h.current) ||
                                a.onChangeTime((e) => {
                                    if (y && !y.current) {
                                        const a = e.currentTime;
                                        if (t && a && t - a <= p.remainder) return (y.current = !0), void p.next();
                                    }
                                });
                        }, [h.current, b]),
                        l().createElement(
                            'div',
                            { className: n()(d, e), style: a },
                            l().createElement(i.n, { className: n()(_, b && g), src: t, ref: h, onEnded: v }),
                        )
                    );
                };
        },
        6328: (e, a, t) => {
            t.d(a, { F: () => O });
            var s = t(6483),
                n = t.n(s),
                i = t(6179),
                o = t.n(i),
                r = t(295),
                c = t(6366),
                l = t(514),
                u = t(5834),
                m = t(3905),
                d = t(1354),
                _ = t(5888),
                g = t(9768),
                b = t(198);
            const p = 'RewardBackground_base_41',
                v = 'RewardBackground_image_f9',
                h = 'RewardBackground_image__show_1f',
                y = 'RewardBackground_video_e4',
                k = 'RewardBackground_video__show_f7',
                E = 'RewardBackground_video__hide_ba',
                f = 'initial',
                C = 'video',
                x = 'image',
                R = ({ className: e, res: a, enabled: t, minimized: s, onPlay: R, onEnded: w }) => {
                    const N = (0, i.useState)(f),
                        B = N[0],
                        $ = N[1],
                        O = (0, i.useRef)(null),
                        S = (0, r.v)(b.Kg, (e) => e.value),
                        T = (0, u.P)(S),
                        P = (0, d._)(m.p6),
                        A = () => {
                            B !== x && $(x), b.Kg.send({ type: b.QK.toRewards });
                        };
                    return (
                        (0, i.useEffect)(() => {
                            switch (T) {
                                case b.B1.skip:
                                    $(x);
                                    break;
                                case b.A_:
                                    $(C),
                                        t &&
                                            (() => {
                                                const e = O.current;
                                                null == e || e.play(), l.hY.sound(a.sound);
                                            })();
                                    break;
                                case b.Az:
                                    $(x),
                                        t &&
                                            (() => {
                                                const e = setTimeout(A, 400);
                                            })();
                            }
                        }, [T]),
                        (0, g.G)(O, t && B === C, s),
                        (0, _.L)(O),
                        o().createElement(
                            'div',
                            { className: n()(p, e) },
                            o().createElement('div', {
                                className: n()(v, B === x && h),
                                style: { backgroundImage: `url(${a.image})` },
                            }),
                            o().createElement(c.n, {
                                ref: O,
                                className: n()(y, B === C && k, B === x && E),
                                style: P,
                                src: a.video,
                                onEnded: () => {
                                    A(), w();
                                },
                                onPlay: R,
                            }),
                        )
                    );
                },
                w = 'RewardBackgroundsSwitch_base_dd',
                N = 'RewardBackgroundsSwitch_background_02',
                B = 'RewardBackgroundsSwitch_background__show_9d',
                $ = 'RewardBackgroundsSwitch_background__hide_13',
                O = ({ minimized: e, activeType: a, res: t, onEnded: s, onPlay: i, className: r }) =>
                    o().createElement(
                        'div',
                        { className: n()(w, r) },
                        Object.keys(t).map((r) => {
                            const c = a === r;
                            return o().createElement(R, {
                                key: r,
                                className: n()(N, c ? B : $),
                                enabled: c,
                                minimized: e,
                                res: Object.assign({}, t[r]),
                                onPlay: i,
                                onEnded: s,
                            });
                        }),
                    );
        },
        9108: (e, a, t) => {
            t.d(a, { _: () => c });
            var s = t(6483),
                n = t.n(s),
                i = t(6179),
                o = t.n(i);
            const r = 'RewardIcon_base_f2',
                c = ({ icon: e, sizes: a, className: t = '' }) =>
                    o().createElement('div', {
                        className: n()(r, t),
                        style: { backgroundImage: `url(${e})`, width: a.width, height: a.height },
                    });
        },
        46: (e, a, t) => {
            t.d(a, { Q: () => _ });
            var s = t(6483),
                n = t.n(s),
                i = t(2862),
                o = t(3649),
                r = t(6179),
                c = t.n(r),
                l = t(114),
                u = t(9108);
            const m = {
                    base: 'Reward_base_d1',
                    icon: 'Reward_icon_b2',
                    count: 'Reward_count_ee',
                    count__tokenOffset: 'Reward_count__tokenOffset_49',
                    overlay: 'Reward_overlay_5b',
                    overlay__big: 'Reward_overlay__big_9a',
                },
                d = (e, a) => {
                    const t = e.name,
                        s = e.isRent;
                    return t === i.E4.Vehicles && a === i.h2.Big
                        ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles' + (s ? '_rent' : '')
                        : t === i.E4.Customizations && a === i.h2.Big
                          ? (0, l.r)(Object.assign({}, e, { id: 0 }), a)
                          : (0, l.r)(e, a);
                },
                _ = ({ reward: e, sizes: a, countText: t, className: s = '' }) => {
                    const r = e.count,
                        l = e.overlayType,
                        _ =
                            e.name === i.E4.PremiumPlus
                                ? {
                                      height: a.premDaysHeight || a.rewardHeight,
                                      width: a.premDaysWidth || a.rewardWidth,
                                  }
                                : { height: a.rewardHeight, width: a.rewardWidth };
                    return c().createElement(
                        'div',
                        { className: n()(m.base, s) },
                        c().createElement(u._, { className: m.icon, icon: d(e, a.imageSize), sizes: _ }),
                        r > 1 &&
                            c().createElement(
                                'div',
                                {
                                    className: n()(m.count, e.name === i.E4.Tokens && m.count__tokenOffset),
                                    style: { fontSize: a.countHeight },
                                },
                                (0, o.uF)(t, { count: r }),
                            ),
                        l &&
                            c().createElement('div', {
                                className: n()(m.overlay, m[`overlay__${a.imageSize}`]),
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a.imageSize}.${l}_overlay)`,
                                },
                            }),
                    );
                };
        },
        7672: (e, a, t) => {
            t.d(a, { u: () => o, y: () => i });
            var s = t(4736);
            const n = [s.G.Rare, s.G.Epic],
                i = (e) => !e.isCompensation && n.includes(e.rarity),
                o = () => new Date().getTime();
        },
        9744: (e, a, t) => {
            t.d(a, { H: () => m });
            var s = t(7522),
                n = t(5834),
                i = t(6179),
                o = t(7030),
                r = t(198);
            const c = { opacity: 1, display: 'flex', config: { duration: 100, easing: s.Z.easeInOutCubic } },
                l = { opacity: 0, config: { duration: 200, easing: s.Z.easeOutCubic } },
                u = { opacity: 1, immediate: !0 },
                m = (e, a) => {
                    const t = (0, o.useSpring)(() => ({ from: { opacity: 0, display: 'none' } })),
                        s = t[0],
                        m = t[1],
                        d = (0, o.useSpring)(() => ({ from: { opacity: 1 } })),
                        _ = d[0],
                        g = d[1];
                    return (
                        (0, i.useEffect)(() => {
                            switch ((0, n.P)(e)) {
                                case r.B1.preparation:
                                    g.start(Object.assign({}, l, { onRest: a }));
                                    break;
                                case r.B1.waiting:
                                    m.start(c);
                                    break;
                                case r.Az:
                                case r.A_:
                                    g.start(u);
                            }
                        }, [e]),
                        (0, i.useMemo)(() => ({ loadingStyle: s, contentStyle: _ }), [])
                    );
                };
        },
        9210: (e, a, t) => {
            t.d(a, { s: () => i });
            var s = t(6179),
                n = t(198);
            const i = (e, a, t) => {
                (0, s.useEffect)(() => {
                    t === n.B1.preparation && a
                        ? n.Kg.send({ type: n.QK.toWaiting })
                        : t !== n.B1.waiting || a || n.Kg.send({ type: n.QK.toOpen });
                }, [a, t]),
                    (0, s.useEffect)(() => {
                        e ? n.Kg.send({ type: n.QK.toSkip }) : n.Kg.send({ type: n.QK.toOpen });
                    }, []);
            };
        },
        6486: (e, a, t) => {
            t.d(a, { e: () => n });
            var s = t(4736);
            const n = { [s.G.Common]: s.G.Common, [s.G.Rare]: s.G.Rare };
        },
        2333: (e, a, t) => {
            t.d(a, { q: () => u });
            var s = t(6483),
                n = t.n(s),
                i = t(9766),
                o = t(6179),
                r = t.n(o);
            const c = 'QuantityTitle_base_06',
                l = 'QuantityTitle_count_a9',
                u = ({ text: e, boxesCount: a = 0, className: t }) =>
                    r().createElement(
                        'div',
                        { className: n()(c, t) },
                        a > 0
                            ? r().createElement(i.z, {
                                  text: e,
                                  binding: { boxesCount: r().createElement('span', { className: l }, a) },
                              })
                            : e,
                    );
        },
        8821: (e, a, t) => {
            t.d(a, { o: () => m });
            var s = t(6483),
                n = t.n(s),
                i = t(5461),
                o = t(6179),
                r = t.n(o);
            const c = 'AnimationCheckbox_base_53',
                l = 'AnimationCheckbox_base__disabled_22',
                u = 'AnimationCheckbox_text_28',
                m = ({ className: e, isActive: a, text: t, size: s = i.yB.large, disable: o = !1, onClick: m }) =>
                    r().createElement(
                        'div',
                        { className: n()(c, o && l, e) },
                        r().createElement(
                            i.XZ,
                            {
                                isDisabled: o,
                                size: s,
                                isChecked: a,
                                onClick: m,
                                type: i.Rh.main,
                                contentStyles: { paddingTop: s === i.yB.extraLarge ? '4rem' : '0' },
                            },
                            r().createElement('span', { className: u }, t),
                        ),
                    );
        },
        3597: (e, a, t) => {
            t.d(a, { a: () => u });
            var s = t(6483),
                n = t.n(s),
                i = t(6179),
                o = t.n(i);
            const r = 'Loader_base_ed',
                c = 'Loader_icon_d2',
                l = 'Loader_text_c4',
                u = ({ img: e, text: a, className: t }) =>
                    o().createElement(
                        'div',
                        { className: n()(r, t) },
                        o().createElement('div', { className: c, style: { backgroundImage: `url(${e})` } }),
                        o().createElement('div', { className: l }, a),
                    );
        },
        3633: (e, a, t) => {
            t.d(a, { k: () => u });
            var s = t(6483),
                n = t.n(s),
                i = t(514),
                o = t(6179),
                r = t.n(o);
            const c = 'LoupeButton_base_bb',
                l = 'LoupeButton_icon_07',
                u = ({ onClick: e, icon: a, className: t = '' }) =>
                    r().createElement(
                        'div',
                        {
                            className: n()(c, t),
                            onMouseEnter: () => {
                                i.hY.highlight();
                            },
                            onClick: e,
                        },
                        r().createElement('div', {
                            className: n()(l, a.className),
                            style: { backgroundImage: `url(${a.img})` },
                        }),
                    );
        },
        2984: (e, a, t) => {
            t.d(a, { i: () => b });
            var s = t(6483),
                n = t.n(s),
                i = t(514),
                o = t(6179),
                r = t.n(o),
                c = t(9674);
            const l = 'PurchaseButton_base_86',
                u = 'PurchaseButton_wrapper_5d',
                m = 'PurchaseButton_image_46',
                d = 'PurchaseButton_textBlock_52',
                _ = 'PurchaseButton_text_56',
                g = 'PurchaseButton_icon_a3',
                b = ({ text: e, image: a, icon: t, onClick: s, className: o }) =>
                    r().createElement(
                        'div',
                        {
                            className: n()(l, o),
                            onClick: () => {
                                i.hY.click(), i.hY.sound(c.Q.purchaseClick), s();
                            },
                        },
                        r().createElement(
                            'div',
                            {
                                className: u,
                                onMouseEnter: () => {
                                    i.hY.sound(c.Q.purchaseHover);
                                },
                            },
                            r().createElement('div', { className: m, style: { backgroundImage: `url(${a})` } }),
                            r().createElement(
                                'div',
                                { className: d },
                                r().createElement('div', { className: _ }, e),
                                t &&
                                    r().createElement('div', { className: g, style: { backgroundImage: `url(${t})` } }),
                            ),
                        ),
                    );
        },
        2374: (e, a, t) => {
            t.d(a, { e: () => m });
            var s = t(6483),
                n = t.n(s),
                i = t(9690),
                o = t(3649),
                r = t(6179),
                c = t.n(r);
            const l = 'VehicleInfo_base_18',
                u = 'VehicleInfo_type_05',
                m = ({ vehicleLvl: e, vehicleName: a, vehicleType: t, isElite: s, classNames: r }) =>
                    c().createElement(
                        'div',
                        { className: n()(l, null == r ? void 0 : r.base) },
                        (0, i.cg)(e),
                        c().createElement('div', {
                            className: n()(u, null == r ? void 0 : r.type),
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.large.$dyn(`${(0, o.BN)(t)}${s ? '_elite' : ''}`)})`,
                            },
                        }),
                        a,
                    );
        },
        114: (e, a, t) => {
            t.d(a, { r: () => o });
            var s = t(2862),
                n = t(2691);
            const i = (e) => {
                    switch (e) {
                        case s.h2.S600x450:
                            return 'c_600x450';
                        case s.h2.S180x135:
                            return 'c_180x135';
                        default:
                            return e;
                    }
                },
                o = (e, a = s.h2.S180x135, t = !1) => {
                    const o = t ? e.compensation : e,
                        r = o.name,
                        c = o.icon,
                        l = o.value,
                        u = e.id,
                        m = e.isRent;
                    switch (r) {
                        case 'vehicles':
                            return m
                                ? `R.images.gui.maps.icons.quests.bonuses.${a}.vehicles_rent`
                                : c
                                  ? `R.images.gui.maps.shop.vehicles.${i(a)}.${c}`
                                  : `R.images.gui.maps.icons.quests.bonuses.${a}.vehicles`;
                        case 'customizations': {
                            const e = (0, n.R)(
                                R.images,
                                `R.images.gui.maps.icons.quests.bonuses.${a}.${c}${u ? '_' + u : ''}`,
                            );
                            return e || `R.images.gui.maps.icons.quests.bonuses.${a}.${c}`;
                        }
                        case 'basic':
                        case 'plus':
                        case 'premium':
                        case 'premium_plus':
                        case 'items':
                        case 'tokens':
                        case 'styleProgress':
                        case 'crewSkins':
                        case 'goodies':
                        case 'groups':
                        default:
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.${c}`;
                        case 'blueprints':
                        case 'blueprintsAny':
                        case 'finalBlueprints':
                        case 'randomNationalBlueprint':
                            return `R.images.gui.maps.icons.blueprints.fragment.${a}.${c}`;
                        case 'crewBooks':
                        case 'randomNationalBrochure':
                        case 'randomNationalGuide':
                        case 'randomNationalCrewBook':
                            return `R.images.gui.maps.icons.crewBooks.books.${a}.${c}`;
                        case 'dossier_badge':
                            return `R.images.gui.maps.icons.quests.bonuses.badges.${i(a)}.${c}`;
                        case 'dossier_achievement':
                            return `R.images.gui.maps.icons.achievement.${i(a)}.${c}`;
                        case 'xp':
                        case 'xpFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.exp`;
                        case 'creditsFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.credits`;
                        case 'crystal':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.crystal`;
                        case 'tankmenXPFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.tankmenXP`;
                        case 'dailyXPFactor':
                        case 'freeXPFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.freeXP`;
                        case 'tmanToken':
                        case 'battlePassSelectToken': {
                            const e = (0, n.R)(R.images, `gui.maps.icons.quests.bonuses.${a}.${c}_${l}`);
                            return e || `R.images.gui.maps.icons.quests.bonuses.${a}.${c}`;
                        }
                        case 'premiumTank':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.vehicles`;
                        case 'styleProgressToken':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.style_3d`;
                        case 'lootBox': {
                            const e = (0, n.R)(R.images, `gui.maps.icons.quests.bonuses.${a}.lootBox_${c}`);
                            return e || `R.images.gui.maps.icons.quests.bonuses.${a}.lootBox_default`;
                        }
                        case 'collectionItem':
                            return `R.images.gui.maps.icons.collectionItems.${i(a)}.${c}`;
                    }
                };
        },
        9605: (e, a, t) => {
            t.d(a, { C: () => i, D: () => n });
            var s = t(2691);
            const n = (e, a = '') => {
                    if (!a) return { video: '', image: '' };
                    const t = `lootbox.events.${e}.rarityOverlay.${a}`,
                        n = `gui.maps.icons.lootBoxSystem.events.${e}.rarityOverlay.${a}`;
                    return { video: (0, s.R)(R.videos, t), image: (0, s.R)(R.images, n) };
                },
                i = (e, a = '') => '' !== n(e, a).video;
        },
        5888: (e, a, t) => {
            t.d(a, { L: () => n });
            var s = t(6179);
            const n = (e) => {
                (0, s.useEffect)(() => {
                    const a = e.current;
                    return () => {
                        a && (a.domRef.src = '');
                    };
                }, [e]);
            };
        },
        9768: (e, a, t) => {
            t.d(a, { G: () => n });
            var s = t(6179);
            const n = (e, a = !0, t) => {
                (0, s.useEffect)(() => {
                    const s = e.current;
                    if (a && s) return t ? s.pause() : s.play();
                }, [t, e]);
            };
        },
        4736: (e, a, t) => {
            let s, n;
            t.d(a, { G: () => n }),
                (function (e) {
                    (e.Heavy = 'heavyTank'),
                        (e.Medium = 'mediumTank'),
                        (e.Light = 'lightTank'),
                        (e.Spg = 'SPG'),
                        (e.AtSpg = 'AT-SPG');
                })(s || (s = {})),
                (function (e) {
                    (e.Common = 'common'), (e.Rare = 'rare'), (e.Epic = 'epic');
                })(n || (n = {}));
        },
    },
]);
