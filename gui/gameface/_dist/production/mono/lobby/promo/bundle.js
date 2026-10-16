import { r as e } from '../chunks/rolldown-runtime.js';
import {
    $r as a,
    Bn as o,
    Jn as s,
    Kn as t,
    Ri as i,
    Si as n,
    Tn as r,
    Un as c,
    Wn as d,
    _i as l,
    bi as m,
    bn as p,
    gi as h,
    h as u,
    m as f,
    mi as _,
    p as g,
    vr as v,
    yi as j,
    zt as y,
} from '../chunks/lib.js';
import '../chunks/_wg-global-styles.js';
import { n as b, t as x } from '../chunks/vendor.js';
import { n as w } from '../chunks/spring_wrapper.js';
import { M as A, N, j as W, t as C } from '../chunks/sound.js';
import { i as S, r as P } from '../chunks/text.js';
import { n as E, r as k, t as T } from '../chunks/button.js';
import { t as D } from '../chunks/close_button.js';
import { n as B, r as L, t as H } from '../chunks/vehicle_type.js';
import { t as U } from '../chunks/format_text_with_paragraphs.js';
var M = e(i(), 1),
    $ = e(x(), 1),
    [z, O] = r()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    I = 1920,
    J = 1080,
    K = I / J,
    q = { width: 300, height: 150 },
    F = { y: 0, opacity: 1 },
    G = (function (e) {
        return ((e.HEADER = 'header'), (e.SUBHEADER = 'subheader'), (e.BUTTON = 'button'), e);
    })({}),
    Q = {
        header: { from: { y: -10, opacity: 0 }, to: F, delay: 1e3, duration: 500 },
        subheader: { from: { y: -10, opacity: 0 }, to: F, delay: 1150, duration: 500 },
        button: { from: { y: -10, opacity: 0 }, to: F, delay: 1450, duration: 1e3 },
    },
    V = 'ContainerAnimation_dc99b0bc',
    X = 'ContainerAnimation_content_9f9d6eae',
    Y = 'ContainerAnimation_img_fdd89cbc',
    Z = 'ContainerAnimation_videoLoop_906f1a50',
    ee = 'ContainerAnimation_frame_ad065ff6',
    ae = 'ContainerAnimation_base__animationStarted_448f44b3',
    oe = v(),
    se = (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
    te = (e, a, o, s) => (o ? s.width / e : s.height / a),
    ie = (0, M.memo)(function ({
        animationStarted: e,
        scaleCover: a,
        screenWidth: o,
        screenHeight: s,
        scaleState: t,
        isCoverWidth: i,
        className: n,
    }) {
        const r = (0, M.useRef)(null),
            [m, p] = d(() => ({ transform: 'scale(1)', x: 0, y: 0, opacity: 1 }));
        function h() {
            e || _.sound(N);
        }
        return (
            (0, M.useEffect)(() => {
                e &&
                    p.start({
                        to: [
                            {
                                transform: `scale(${te(o, s, i, { width: s * K * 0.6, height: (o / K) * 0.6 })})`,
                                x: 0,
                                y: 0,
                                opacity: 1,
                                config: { duration: 800 },
                            },
                            {
                                transform: `scale(${te(o, s, i, q)})})`,
                                x: ((o / 2 - 200) / a) * t,
                                y: ((-s / 2 + 180) / a) * t,
                                opacity: 0,
                                config: { duration: 1e3 },
                            },
                        ],
                        config: { easing: se },
                    });
            }, [p, i, e, t, s, a, o]),
            (0, M.useEffect)(() => {
                const a = r.current;
                a && (e ? a.pause() : a.play());
            }, [e]),
            (0, oe.jsx)('div', {
                className: (0, $.default)(V, e && ae, n),
                children: (0, oe.jsxs)(c.div, {
                    className: X,
                    style: m,
                    children: [
                        l.isLow()
                            ? (0, oe.jsx)('div', { className: Y })
                            : (0, oe.jsx)(y, {
                                  ref: r,
                                  src: R.videos.halloween.promo_loop(),
                                  className: Z,
                                  loop: !0,
                                  autoplay: !0,
                                  onPlay: h,
                                  onTimeUpdate: h,
                              }),
                        (0, oe.jsx)('div', { className: ee }),
                    ],
                }),
            })
        );
    }),
    ne = 'SimpleBackground_img_fe3ffb43',
    re = (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1);
function ce({ closeAnimationStarted: e }) {
    const [a, o] = d(() => ({ x: 0, y: 0, opacity: 1 }));
    return (
        (0, M.useEffect)(() => {
            e &&
                o.start({
                    to: [
                        { opacity: 1, config: { duration: 800 } },
                        { opacity: 0, config: { duration: 1e3 } },
                    ],
                    config: { easing: re },
                });
        }, [o, e]),
        (0, oe.jsx)(c.div, { style: a, className: ne })
    );
}
var de = 'Background_571e6f5c';
function le({ closeAnimationStarted: e }) {
    const a = o(),
        [s, t] = (0, M.useState)({ width: 0, height: 0, scaleCover: 1, isCoverWidth: !1 }),
        i = () => {
            const e = h('rem');
            t(
                ((e, a) => {
                    let o = 1,
                        s = !1;
                    return (
                        e >= a * K ? ((o = e / I), (s = !0)) : a >= e / K && ((o = a / J), (s = !1)),
                        { width: e, height: a, scaleCover: o, isCoverWidth: s }
                    );
                })(e.width, e.height),
            );
        };
    return (
        (0, M.useEffect)(() => {
            (_.sound(W), i(), m(i), j(i));
        }, []),
        0 === s.width || 0 === s.height
            ? (0, oe.jsx)(ce, { closeAnimationStarted: e })
            : (0, oe.jsx)('div', {
                  className: de,
                  style: { width: I * a, height: J * a, transform: `scale(${s.scaleCover})` },
                  children: (0, oe.jsx)(ie, {
                      animationStarted: e,
                      scaleCover: s.scaleCover,
                      screenHeight: s.height,
                      screenWidth: s.width,
                      scaleState: a,
                      isCoverWidth: s.isCoverWidth,
                  }),
              })
    );
}
var me = 'PromoWindowApp_27b45ae4',
    pe = 'PromoWindowApp_vignetteBg_e12d4817',
    he = 'PromoWindowApp_base__animationStarted_d0c9e9d5',
    ue = 'PromoWindowApp_header_70ca1c0f',
    fe = 'PromoWindowApp_subheader_a4aeef50',
    _e = 'PromoWindowApp_paragraph_b28486c9',
    ge = 'PromoWindowApp_gradient_ca9b3b84',
    ve = 'PromoWindowApp_date_f69f7230',
    je = 'PromoWindowApp_userName_d0c9e9d5',
    ye = 'PromoWindowApp_level_8df5dafc',
    be = 'PromoWindowApp_base__elite_d0c9e9d5',
    xe = 'PromoWindowApp_icon_c71e31ab',
    we = 'PromoWindowApp_bottomContainer_79340d5d',
    Ae = 'PromoWindowApp_topContainer_1bcc42e5',
    Ne = 'PromoWindowApp_btn_e26da9f4',
    We = 'PromoWindowApp_closeBtn_a8c6a65a',
    Ce = b(() => {
        const { model: e, controls: o } = O(),
            {
                vehicleType: i,
                vehicleUserName: r,
                vehicleLevel: c,
                vehicleIsPremium: d,
                startDate: l,
                endDate: m,
                regularArtefactsLength: p,
            } = e.root.get(),
            [h, v] = (0, M.useState)(!1),
            j = () => {
                v(!0);
            };
        return (
            (0, M.useEffect)(() => {
                if (h) {
                    _.sound(A);
                    const e = setTimeout(o.close, 1800);
                    return () => clearTimeout(e);
                }
            }, [o.close, h]),
            t(j),
            s(a.ENTER, j),
            (0, oe.jsxs)('div', {
                className: (0, $.default)(me, h && he, d && be),
                children: [
                    (0, oe.jsx)(D, { className: We, onClose: j }),
                    (0, oe.jsx)(le, { closeAnimationStarted: h }),
                    (0, oe.jsx)('div', { className: pe }),
                    (0, oe.jsx)('div', { className: ge }),
                    (0, oe.jsx)(w, {
                        className: Ae,
                        ...Q[G.HEADER],
                        children: (0, oe.jsx)(P, {
                            text: R.strings.halloween_lobby.promoWindow.header(),
                            className: ue,
                            type: S.MetaHeading,
                            shadow: !0,
                        }),
                    }),
                    (0, oe.jsx)(w, {
                        className: Ae,
                        ...Q[G.SUBHEADER],
                        children: (0, oe.jsx)(U, {
                            className: fe,
                            paragraphClassName: _e,
                            text: R.strings.halloween_lobby.promoWindow.subheader(),
                            params: {
                                dateRange: (0, oe.jsx)('div', {
                                    className: ve,
                                    children: (0, oe.jsx)(g, {
                                        start: l,
                                        end: m,
                                        rangeType: u.Date,
                                        rangeDividerType: f.DashDivider,
                                        isConvertedToLocal: !0,
                                    }),
                                }),
                                regularArtefactsLength: p,
                                tierLevel: c,
                                level: (0, oe.jsx)('div', { className: ye, children: c }),
                                icon: (0, oe.jsx)(H, {
                                    className: xe,
                                    type: n(i),
                                    size: L.C48x48,
                                    color: d ? B.Elite : B.Silver,
                                }),
                                userName: (0, oe.jsx)('div', { className: je, children: r }),
                            },
                            upgradeLegacy: !0,
                            split: !0,
                        }),
                    }),
                    (0, oe.jsx)(w, {
                        className: we,
                        onStart: () => {
                            h || _.sound(C);
                        },
                        ...Q[G.BUTTON],
                        children: (0, oe.jsx)('div', {
                            className: Ne,
                            children: (0, oe.jsx)(T, {
                                type: k.Secondary,
                                caption: R.strings.halloween_lobby.promoWindow.btn(),
                                size: E.ExtraLarge,
                                onClick: j,
                            }),
                        }),
                    }),
                ],
            })
        );
    });
p((0, oe.jsx)(z, { children: (0, oe.jsx)(Ce, {}) }));
