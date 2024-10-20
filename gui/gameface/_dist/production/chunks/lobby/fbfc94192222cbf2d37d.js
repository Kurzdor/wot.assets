'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [231],
    {
        5461: (e, t, o) => {
            o.d(t, { XZ: () => m, yB: () => c.yB, Rh: () => c.Rh });
            var a = o(6179),
                n = o.n(a),
                s = o(6483),
                r = o.n(s),
                i = o(7727);
            let l;
            !(function (e) {
                (e[(e.LEFT = 0)] = 'LEFT'),
                    (e[(e.WHEEL = 1)] = 'WHEEL'),
                    (e[(e.RIGHT = 2)] = 'RIGHT'),
                    (e[(e.FOURTH = 3)] = 'FOURTH'),
                    (e[(e.FIFTH = 4)] = 'FIFTH');
            })(l || (l = {}));
            var c = o(8844);
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
                d = [
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
            function _() {
                return (
                    (_ = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var o = arguments[t];
                                  for (var a in o) ({}).hasOwnProperty.call(o, a) && (e[a] = o[a]);
                              }
                              return e;
                          }),
                    _.apply(null, arguments)
                );
            }
            const m = (e) => {
                let t = e.id,
                    o = e.isChecked,
                    s = void 0 !== o && o,
                    m = e.isDisabled,
                    b = void 0 !== m && m,
                    g = e.isAlert,
                    p = void 0 !== g && g,
                    x = e.size,
                    h = void 0 === x ? c.yB.medium : x,
                    y = e.type,
                    v = void 0 === y ? c.Rh.primary : y,
                    B = e.soundHover,
                    k = void 0 === B ? 'highlight' : B,
                    C = e.soundClick,
                    f = void 0 === C ? 'play' : C,
                    E = e.onMouseEnter,
                    w = e.onMouseLeave,
                    N = e.onMouseUp,
                    T = e.onMouseDown,
                    A = e.onClick,
                    L = e.onChange,
                    I = e.onFocus,
                    O = e.onBlur,
                    V = e.text,
                    H = e.contentStyles,
                    M = e.children,
                    G = e.alignment,
                    S = (function (e, t) {
                        if (null == e) return {};
                        var o = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (t.indexOf(a) >= 0) continue;
                                o[a] = e[a];
                            }
                        return o;
                    })(e, d);
                const P = (0, a.useState)(!1),
                    R = P[0],
                    D = P[1],
                    z = (0, a.useState)(!1),
                    F = (z[0], z[1]),
                    Q = (0, a.useCallback)(
                        (e) => {
                            b || (L && L(), A && A(e));
                        },
                        [b, L, A],
                    ),
                    U = (0, a.useCallback)(
                        (e) => {
                            const t = e.button === l.LEFT;
                            b || (t && D(!0), t && T && T(e), f && (0, i.G)(f));
                        },
                        [b, T, f],
                    ),
                    Y = (0, a.useCallback)(
                        (e) => {
                            b || (D(!1), N && N(e));
                        },
                        [b, N],
                    ),
                    $ = (0, a.useCallback)(
                        (e) => {
                            b || (E && E(e), k && (0, i.G)(k));
                        },
                        [b, E, k],
                    ),
                    q = (0, a.useCallback)(
                        (e) => {
                            b || (D(!1), w && w(e));
                        },
                        [b, w],
                    ),
                    j = (0, a.useCallback)(
                        (e) => {
                            b || (F(!0), I && I(e));
                        },
                        [b, I],
                    ),
                    W = (0, a.useCallback)(
                        (e) => {
                            b || (F(!1), O && O(e));
                        },
                        [b, O],
                    ),
                    Z = n().createElement(
                        'div',
                        { className: u.label },
                        n().createElement(
                            'div',
                            { className: r()(u.labelContent, 's-labelContent'), style: H },
                            V || M,
                        ),
                    );
                return n().createElement(
                    'div',
                    _(
                        {
                            id: t,
                            className: r()(u.base, u[`base__${h}`], u[`base__${v}`], {
                                [u.base__checked]: s,
                                [u.base__disabled]: b,
                                [u.base__mouseDown]: R,
                                [u.base__alert]: p,
                                [u.base__center]: G === c.N3.Center,
                                [u.base__bottom]: G === c.N3.Bottom,
                            }),
                            onClick: Q,
                            onMouseEnter: $,
                            onMouseLeave: q,
                            onMouseDown: U,
                            onMouseUp: Y,
                            onFocus: j,
                            onBlur: W,
                        },
                        S,
                    ),
                    n().createElement(
                        'div',
                        { className: u.input },
                        n().createElement('div', { className: u.alertOverlay }),
                        n().createElement('div', { className: u.inputHoverOverlay }),
                        n().createElement('div', { className: u.highlight }),
                    ),
                    n().createElement('div', { className: u.checkmark }),
                    ((V || M) && Z) || null,
                );
            };
        },
        8844: (e, t, o) => {
            let a, n, s;
            o.d(t, { N3: () => s, Rh: () => n, yB: () => a }),
                (function (e) {
                    (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(a || (a = {})),
                (function (e) {
                    (e.primary = 'primary'), (e.main = 'main');
                })(n || (n = {})),
                (function (e) {
                    (e.Center = 'center'), (e.Bottom = 'bottom');
                })(s || (s = {}));
        },
        5998: (e, t, o) => {
            o.r(t), o.d(t, { default: () => Ue });
            var a = o(6179),
                n = o.n(a),
                s = o(8958),
                r = o(6483),
                i = o.n(r),
                l = o(5461),
                c = o(8089),
                u = o(122),
                d = o(5959),
                _ = o(514),
                m = o(8526),
                b = o(5415),
                g = o(4489),
                p = o(3403),
                x = o(7030),
                h = o(8821),
                y = o(3597),
                v = o(2984),
                B = o(9674),
                k = o(5149),
                C = o(6974),
                f = o(3727),
                E = o(3720),
                w = o(8455);
            const N = { from: { opacity: 0, transform: 'translateY(-15rem)' }, delay: 100, config: { duration: 250 } },
                T = { from: { opacity: 0, transform: 'translateY(15rem)' }, delay: 100, config: { duration: 250 } },
                A = { to: { opacity: 1, transform: 'translateY(0rem)' } },
                L = (e) => ({ to: { opacity: 0 }, config: { duration: 0 }, onRest: e }),
                I = { to: { opacity: 1 }, config: { duration: 250 } };
            var O = o(3215),
                V = o(9480),
                H = o(9174),
                M = o(3946),
                G = o(3905),
                S = o(1440),
                P = o(7366);
            const R = {
                    videos: {
                        hover: 'hasBoxesView.hover',
                        idle: 'hasBoxesView.idle',
                        background: 'hasBoxesView.background',
                        box: 'hasBoxesView.box',
                    },
                    images: {
                        hover: 'hasBoxesView.hover',
                        idle: 'hasBoxesView.idle',
                        background: 'hasBoxesView.background',
                        box: 'hasBoxesView.box',
                        iconEmpty: 'entry_point.lootboxEmpty',
                        externalLink: 'common.externalLinkOrange',
                        glowIcon: 'awardViews.glow',
                        infoIcon: 'common.info',
                        guaranteedGlowIcon: 'awardViews.guaranteedGlow',
                        slotGlow: 'hasBoxesView.guaranteed.slotGlow',
                        guaranteedIco: 'hasBoxesView.guaranteed.guaranteedIco',
                        loader: 'common.waiting',
                        statsIcon: 'statistics.stats',
                    },
                    texts: {
                        infoButton: 'common.infoButton',
                        closeButton: 'common.closeButton',
                        statsButton: 'common.statsButton',
                        guaranteedTitle: 'awardViews.guaranteedTitle.text',
                        guaranteedNextBox: 'awardViews.guaranteedTitle.nextBox',
                        quantityAvailableTitle: 'hasBoxesView.quantityTitle.boxesAvailable',
                        quantityNoBoxesTitle: 'hasBoxesView.quantityTitle.noBoxes',
                        footerPurchaseButtonText: 'hasBoxesView.purchaseButtonText',
                        footerPurchaseButtonTextCn: 'hasBoxesView.purchaseButtonTextCn',
                        openButtonText: 'hasBoxesView.openButtonText',
                        animationCheckbox: 'awardViews.footer.checkbox',
                        loader: 'common.loader',
                    },
                },
                D = {
                    dynamicVideos: {
                        box: 'hasBoxesView.layers.box',
                        idle: 'hasBoxesView.layers.idle',
                        hover: 'hasBoxesView.layers.hover',
                        background: 'hasBoxesView.layers.background',
                    },
                    dynamicImages: {
                        box: 'hasBoxesView.layers.box',
                        idle: 'hasBoxesView.layers.idle',
                        hover: 'hasBoxesView.layers.hover',
                        background: 'hasBoxesView.layers.background',
                    },
                    dynamicTexts: {
                        boxCategory: 'common.boxCategory.upperCase',
                        tabText: 'hasBoxesView.guaranteedTitle.tabText',
                        numberOfBoxesToOpen: 'hasBoxesView.numberOfBoxesToOpen',
                    },
                },
                z = (0, O.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                openingOptions: e.array('openingOptions'),
                                boxesInfo: e.array('boxesInfo'),
                                isBoxHovered: H.LO.box(!1),
                                showAdditionalLayers: H.LO.box(!1),
                            },
                            o = (0, M.Om)(() => V.MH(t.boxesInfo.get(), t.root.get().selectedBoxOption)),
                            a = (0, M.Om)(() => (0, P.jh)(R, t.root.get().eventName)),
                            n = (0, M.Om)(() => (0, P.kC)(D, t.root.get().eventName)),
                            s = (0, M.Om)(() => (0, S.i)(t.root.get().eventName, G.N7.HasBoxesView)),
                            r = (0, M.Om)(() => V.U2(t.openingOptions.get(), t.root.get().selectedOpeningOption) || 1);
                        return Object.assign({}, t, {
                            computes: {
                                resources: a,
                                dynamicResources: n,
                                viewConfig: s,
                                openBoxesCount: r,
                                boxesInfo: o,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => {
                        const o = e.createCallback((e) => ({ count: e }), 'onBoxesOpen'),
                            a = e.createCallback((e) => ({ isAnimationActive: e }), 'onAnimationStateChanged');
                        return {
                            setIsBoxHovered: (0, H.aD)((e) => t.isBoxHovered.set(e)),
                            setShowAdditionalLayers: (0, H.aD)((e) => t.showAdditionalLayers.set(e)),
                            openBoxes: (0, H.aD)(() => {
                                o(t.computes.openBoxesCount());
                            }),
                            setAnimationState: (0, H.aD)((e) => {
                                a(e);
                            }),
                            changeAnimationState: (0, H.aD)(() => {
                                a(!t.root.get().isAnimationActive);
                            }),
                            openInfoPage: e.createCallbackNoArgs('onInfoOpen'),
                            close: e.createCallbackNoArgs('onClose'),
                            openingOptionChange: e.createCallback(
                                (e) => ({ openingOption: e }),
                                'onOpeningOptionChanged',
                            ),
                            buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                            resetError: e.createCallbackNoArgs('onResetError'),
                            onBoxOptionChanged: e.createCallback((e) => ({ boxOption: e }), 'onBoxOptionChanged'),
                        };
                    },
                ),
                F = z[0],
                Q = z[1];
            var U = o(1856),
                Y = o(9217),
                $ = o(2065),
                q = o(1354),
                j = o(9182),
                W = o(4707),
                Z = o(8457);
            const X = ({ layer: e, onLoaded: t, onVideoEnded: o, playVideo: s, onVideoPlay: r }) => (
                    (0, a.useEffect)(() => {
                        s && _.hY.sound(B.Q.boxAppear);
                    }, [s]),
                    n().createElement(W.z, { layer: e, onLoaded: t, onVideoEnded: o, playVideo: s, onVideoPlay: r })
                ),
                J = 'HoverTrigger_base_21',
                K = 'HoverTrigger_hoverTrigger_6c',
                ee = ({ className: e, settings: t, wrapperSize: o, onMouseEnter: a, onMouseLeave: s, onClick: r }) =>
                    n().createElement(
                        'div',
                        { className: i()(J, e), style: o },
                        n().createElement('div', {
                            className: K,
                            style: {
                                width: t.width,
                                height: t.height,
                                top: t.verticalOffset,
                                left: t.horizontalOffset,
                            },
                            onMouseEnter: a,
                            onMouseLeave: s,
                            onClick: r,
                        }),
                    ),
                te = 'BoxLayout_base_40',
                oe = 'BoxLayout_layer_11',
                ae = 'BoxLayout_glow_35',
                ne = 'BoxLayout_glow__show_14',
                se = 'BoxLayout_idle_2f',
                re = 'BoxLayout_idle__show_63',
                ie = 'BoxLayout_hoverTrigger_7e',
                le = 'BoxLayout_box_1a',
                ce = 'BoxLayout_box__show_fd',
                ue = 'BoxLayout_base__graphicsHigh_49',
                de = 'BoxLayout_vignette_a4',
                _e = { idle: 'idle', background: 'background', box: 'box', hover: 'hover' },
                me = Object.values(_e),
                be = (0, p.Pi)(({ onClick: e, className: t, onLoaded: o }) => {
                    const s = Q(),
                        r = s.model,
                        l = s.controls,
                        c = (0, k.t)().model,
                        u = (0, q._)(G.p6),
                        m = r.computes.viewConfig(),
                        b = m.hasIdle,
                        g = m.vignette,
                        p = m.hoverZone,
                        x = m.backgroundColor,
                        h = r.computes.resources(),
                        y = h.images,
                        v = h.videos,
                        C = r.computes.dynamicResources(),
                        f = C.dynamicImages,
                        E = C.dynamicVideos,
                        w = r.computes.boxesInfo(),
                        N = r.boxesInfo.get(),
                        T = r.showAdditionalLayers.get(),
                        A = r.isBoxHovered.get(),
                        L = c.subViewIDs.get(),
                        I = (0, j.Hl)(L),
                        O = d.graphicsQuality.isHigh(),
                        H = (0, a.useState)(!1),
                        M = H[0],
                        S = H[1],
                        R = ((e, t) => {
                            const o = (0, a.useState)(0),
                                n = o[0],
                                s = o[1],
                                r = (0, a.useCallback)(() => {
                                    s((e) => e + 1);
                                }, []);
                            return (
                                (0, a.useEffect)(() => {
                                    n === e && t();
                                }, [n, e]),
                                r
                            );
                        })(me.length - Number(!b || !O) + 2 * (N.length - 1), () => {
                            S(!0), o();
                        }),
                        D = () => l.setShowAdditionalLayers(!0),
                        z = () => l.setShowAdditionalLayers(!1),
                        F = () => {
                            _.hY.sound(B.Q.boxMouseLeave), l.setIsBoxHovered(!1);
                        },
                        J = (e, t = P.c1) => {
                            const o = (0, $.H)(y[e], f[e].dynOpt(t)),
                                a = O ? (0, $.H)(v[e], E[e].dynOpt(t)) : '';
                            return (0, Y.k)(o, a);
                        };
                    return (
                        (0, a.useEffect)(() => {
                            const e = J(_e.box, w.boxCategory);
                            return (0, U.v)(() => {
                                l.setShowAdditionalLayers(e.type !== Z.U.video);
                            });
                        }, [w.boxCategory]),
                        n().createElement(
                            'div',
                            { className: i()(te, O && ue, t), style: { backgroundColor: x } },
                            n().createElement(W.z, {
                                key: _e.background,
                                className: oe,
                                layer: J(_e.background),
                                loop: !0,
                                onLoaded: R,
                                playVideo: M,
                            }),
                            V.UI(N, (e) => {
                                const t = e.boxCategory,
                                    o = t === w.boxCategory,
                                    a = J(_e.box, t);
                                return n().createElement(
                                    'div',
                                    { className: i()(le, o && ce), key: _e.box + t },
                                    n().createElement(X, {
                                        layer: a,
                                        onLoaded: R,
                                        onVideoEnded: D,
                                        playVideo: M && a.type === Z.U.video && o,
                                        onVideoPlay: z,
                                    }),
                                );
                            }),
                            V.UI(N, (e) => {
                                const t = e.boxCategory,
                                    o = t === w.boxCategory,
                                    a = J(_e.hover, t);
                                return n().createElement(W.z, {
                                    key: _e.hover + t,
                                    className: i()(ae, T && o && A && ne),
                                    layer: a,
                                    onLoaded: R,
                                    playVideo: M && a.type === Z.U.video && o,
                                    loop: !0,
                                });
                            }),
                            b &&
                                O &&
                                n().createElement(W.z, {
                                    key: _e.idle,
                                    className: i()(se, T && re),
                                    playVideo: M,
                                    layer: J(_e.idle),
                                    onLoaded: R,
                                    loop: !0,
                                }),
                            g.isEnabled && n().createElement('div', { className: de, style: { opacity: g.opacity } }),
                            T &&
                                n().createElement(ee, {
                                    className: ie,
                                    settings: p,
                                    wrapperSize: u,
                                    onMouseEnter: () => {
                                        _.hY.sound(B.Q.boxMouseEnter), l.setIsBoxHovered(!0);
                                    },
                                    onMouseLeave: F,
                                    onClick: () => {
                                        I || (F(), _.hY.click(), e());
                                    },
                                }),
                        )
                    );
                });
            var ge = o(3457),
                pe = o(9766),
                xe = o(7727),
                he = o(2106);
            const ye = {
                base: 'ToggleButton_base_2c',
                base__button: 'ToggleButton_base__button_cb',
                base__active: 'ToggleButton_base__active_a6',
                base__slot: 'ToggleButton_base__slot_98',
                base__disabled: 'ToggleButton_base__disabled_19',
                texture: 'ToggleButton_texture_f1',
                background: 'ToggleButton_background_ef',
                background__main: 'ToggleButton_background__main_68',
                background__primary: 'ToggleButton_background__primary_a9',
                background__primaryGreen: 'ToggleButton_background__primaryGreen_4f',
                background__primaryRed: 'ToggleButton_background__primaryRed_ca',
                background__secondary: 'ToggleButton_background__secondary_b2',
                background__ghost: 'ToggleButton_background__ghost_d6',
                content: 'ToggleButton_content_63',
                overlay: 'ToggleButton_overlay_23',
                indicator: 'ToggleButton_indicator_a7',
            };
            let ve;
            !(function (e) {
                (e.Button = 'button'), (e.Slot = 'slot');
            })(ve || (ve = {}));
            const Be = () => {},
                ke = n().memo(
                    ({
                        active: e = !1,
                        className: t,
                        children: o,
                        toggleType: s = ve.Button,
                        toggleButtonType: r = he.L.secondary,
                        onClick: l,
                        disabled: c,
                        soundClick: u = 'play',
                        soundHover: d = 'highlight',
                        onMouseEnter: _ = Be,
                        onMouseDown: m = Be,
                        onMouseUp: b = Be,
                        onMouseLeave: g = Be,
                    }) => {
                        const p = (0, a.useCallback)(
                                (t) => {
                                    c || ((0, xe.G)(u), l && l(t, e));
                                },
                                [l, c, e, u],
                            ),
                            x = (0, a.useCallback)(
                                (e) => {
                                    c || ((0, xe.G)(d), _ && _(e));
                                },
                                [c, d, _],
                            ),
                            h = (0, a.useCallback)(
                                (e) => {
                                    c ||
                                        ((1 !== e.button && 2 !== e.button) || (null !== u && (0, xe.G)(u)), m && m(e));
                                },
                                [m, c, u],
                            ),
                            y = i()(ye.base, t, ye[`base__${s}`], e && ye.base__active, c && ye.base__disabled);
                        return n().createElement(
                            'div',
                            {
                                className: y,
                                onClick: p,
                                onMouseEnter: x,
                                onMouseUp: c ? Be : b,
                                onMouseDown: h,
                                onMouseLeave: c ? Be : g,
                            },
                            n().createElement('div', { className: ye.content }, o),
                            s === ve.Button &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: i()(ye.background, ye[`background__${r}`]) }),
                                    n().createElement('div', { className: ye.texture }),
                                ),
                            n().createElement('div', { className: ye.overlay }),
                            n().createElement('div', { className: ye.indicator }),
                        );
                    },
                );
            var Ce = o(4598),
                fe = o(5521),
                Ee = o(9221),
                we = o(2333);
            const Ne = 'Content_base_45',
                Te = 'Content_guaranteedTitle_32',
                Ae = 'Content_buttons_af',
                Le = 'Content_button_ca',
                Ie = 'Content_toggleButton_53',
                Oe = 'Content_toggleButton__normal_a7',
                Ve = 'Content_toggleButton__notFirst_30',
                He = 'Content_toggleButton__active_a1',
                Me = (0, p.Pi)(({ openClick: e, className: t }) => {
                    const o = Q(),
                        s = o.model,
                        r = o.controls,
                        l = (0, k.t)().model,
                        c = s.computes.resources(),
                        u = c.texts,
                        d = c.images,
                        b = s.computes.dynamicResources().dynamicTexts,
                        p = s.computes.viewConfig().accentCount,
                        x = s.computes.boxesInfo(),
                        h = x.boxesCount,
                        y = x.boxesCountToGuaranteed,
                        v = x.boxCategory,
                        C = s.openingOptions.get(),
                        f = s.computes.openBoxesCount(),
                        E = l.subViewIDs.get(),
                        w = (0, j.Hl)(E),
                        N = { boxesToGuaranteed: y, accent: p },
                        T = { title: u.guaranteedTitle, nextBox: u.guaranteedNextBox },
                        A = { glow: d.glowIcon, info: d.infoIcon, strongGlow: d.guaranteedGlowIcon },
                        L = () => {
                            _.hY.sound(B.Q.boxMouseLeave), r.setIsBoxHovered(!1);
                        },
                        I = (0, g.f)(w ? Ce.ZT : e, [w], 1100);
                    (0, m.gd)(fe.n.SPACE, I);
                    return (
                        (0, a.useEffect)(() => {
                            f > h && r.openingOptionChange(0);
                        }, [h, r, f]),
                        n().createElement(
                            'div',
                            { className: i()(Ne, t) },
                            n().createElement(Ee.r, { texts: T, icons: A, counts: N, category: v, className: Te }),
                            n().createElement(
                                'div',
                                { className: Ae },
                                V.UI(C, (e, t) =>
                                    n().createElement(
                                        ke,
                                        {
                                            key: t + e,
                                            toggleType: ve.Slot,
                                            active: e === f,
                                            disabled: e > h,
                                            className: i()(Ie, t > 0 && Ve, e === f && He, e <= h && Oe),
                                            onClick: () =>
                                                ((e) => {
                                                    r.openingOptionChange(e);
                                                })(t),
                                        },
                                        n().createElement(pe.z, {
                                            text: b.numberOfBoxesToOpen.plural('numberOfBoxesToOpen', e),
                                            binding: { count: e },
                                        }),
                                    ),
                                ),
                                n().createElement(
                                    ge.u5,
                                    {
                                        size: ge.qE.medium,
                                        type: ge.L$.main,
                                        onClick: () => {
                                            w || (L(), e());
                                        },
                                        soundHover: B.Q.boxMouseEnter,
                                        mixClass: Le,
                                        onMouseEnter: () => r.setIsBoxHovered(!0),
                                        onMouseLeave: L,
                                    },
                                    u.openButtonText,
                                ),
                            ),
                            n().createElement(we.q, {
                                text: h ? u.quantityAvailableTitle : u.quantityNoBoxesTitle,
                                boxesCount: h,
                            }),
                        )
                    );
                }),
                Ge = {
                    base: 'App_base_f3',
                    boxLayout: 'App_boxLayout_73',
                    base__prepareAnimation: 'App_base__prepareAnimation_d3',
                    base__openViewAnimation: 'App_base__openViewAnimation_67',
                    fadeIn: 'App_fadeIn_bc',
                    infoButtons: 'App_infoButtons_25',
                    base__waitAnimation: 'App_base__waitAnimation_9f',
                    fadeOut: 'App_fadeOut_f5',
                    base__backAnimation: 'App_base__backAnimation_47',
                    statsButton: 'App_statsButton_e3',
                    closeButton: 'App_closeButton_2b',
                    header: 'App_header_20',
                    footer: 'App_footer_78',
                    checkbox: 'App_checkbox_7b',
                    purchaseButton: 'App_purchaseButton_79',
                    loader: 'App_loader_16',
                    fadeInWait: 'App_fadeInWait_27',
                    tabs: 'App_tabs_9c',
                    popover: 'App_popover_43',
                    contentWrapper: 'App_contentWrapper_11',
                    shiftTop: 'App_shiftTop_3a',
                    shiftBottom: 'App_shiftBottom_ff',
                },
                Se = { context: 'model.hasBoxes.statistics' },
                Pe = 'initial',
                Re = 'prepare',
                De = 'back',
                ze = 'wait',
                Fe = 'openView',
                Qe = (0, p.Pi)(() => {
                    const e = Q(),
                        t = e.model,
                        o = e.controls,
                        s = (0, k.t)().model,
                        r = t.root.get(),
                        p = r.isAnimationActive,
                        O = r.isError,
                        V = r.useExternal,
                        H = r.useStats,
                        M = r.isAwaitingResponse,
                        G = r.selectedBoxOption,
                        S = s.overlayClosed.get(),
                        P = t.computes.resources(),
                        R = P.texts,
                        D = P.images,
                        z = t.computes.dynamicResources().dynamicTexts,
                        F = t.boxesInfo.get(),
                        U = t.computes.boxesInfo(),
                        Y = t.computes.viewConfig().tabsGuaranteedCount,
                        $ = U.boxesCount,
                        q = U.boxCategory,
                        j = (0, a.useState)(!1),
                        W = j[0],
                        Z = j[1],
                        X = (0, a.useState)(!1),
                        J = X[0],
                        K = X[1],
                        ee = (0, a.useState)(Pe),
                        te = ee[0],
                        oe = ee[1],
                        ae = (0, b.GS)().mediaSize,
                        ne = (0, g.f)(o.openBoxes, [], 1100),
                        se = (0, x.useSpring)(() => N),
                        re = se[0],
                        ie = se[1],
                        le = (0, x.useSpring)(() => T),
                        ce = le[0],
                        ue = le[1],
                        de = () => {
                            t.isBoxHovered.get() && _.hY.sound(B.Q.boxMouseLeave), M || J || o.close();
                        };
                    (0, m.I9)(de);
                    const _e = () => {
                            K(!0), o.setShowAdditionalLayers(!1), ie.start(L()), ue.start(L()), oe(ze);
                        },
                        me = () => {
                            ie.start(I), ue.start(I);
                        };
                    return (
                        (0, a.useEffect)(() => {
                            te === ze && (0, u.F)(ne, 250);
                        }, [te, ne]),
                        (0, a.useEffect)(() => {
                            J && K(M);
                        }, [M]),
                        (0, a.useEffect)(() => {
                            O && (K(!1), oe(De), me(), o.resetError());
                        }, [O]),
                        (0, a.useEffect)(() => {
                            S && (oe(De), me(), o.setShowAdditionalLayers(!0));
                        }, [S]),
                        (0, a.useEffect)(() => {
                            d.graphicsQuality.isLow() && o.setAnimationState(!1);
                        }, [o]),
                        (0, a.useEffect)(() => {
                            oe(Re), K(!1);
                        }, []),
                        n().createElement(
                            'div',
                            { className: i()(Ge.base, Ge[`base__${te}Animation`]) },
                            n().createElement(be, {
                                onClick: _e,
                                onLoaded: () => {
                                    oe(Fe), ie.start(A), ue.start(A);
                                },
                                className: Ge.boxLayout,
                            }),
                            n().createElement(
                                'div',
                                { className: Ge.infoButtons },
                                H &&
                                    n().createElement(f.g, {
                                        onClick: () => Z(!0),
                                        className: Ge.statsButton,
                                        label: R.statsButton,
                                        icon: D.statsIcon,
                                    }),
                                n().createElement(c.A, {
                                    caption: R.infoButton,
                                    type: 'info',
                                    side: 'left',
                                    onClick: () => {
                                        J || o.openInfoPage();
                                    },
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: Ge.closeButton },
                                n().createElement(c.A, {
                                    caption: R.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: de,
                                }),
                            ),
                            n().createElement(
                                x.animated.div,
                                { style: re, className: Ge.header },
                                n().createElement(C.h, { title: z.boxCategory.dynOpt(q) }),
                            ),
                            n().createElement(
                                'div',
                                { className: Ge.footer },
                                n().createElement(
                                    x.animated.div,
                                    { style: ce },
                                    n().createElement(Me, { openClick: _e }),
                                ),
                                J && n().createElement(y.a, { className: Ge.loader, text: R.loader, img: D.loader }),
                            ),
                            d.graphicsQuality.isHigh() &&
                                n().createElement(h.o, {
                                    isActive: p,
                                    onClick: o.changeAnimationState,
                                    className: Ge.checkbox,
                                    text: R.animationCheckbox,
                                    size: ae >= b.cJ.Medium ? l.yB.extraLarge : l.yB.large,
                                }),
                            $ > 0 &&
                                n().createElement(v.i, {
                                    text: V ? R.footerPurchaseButtonTextCn : R.footerPurchaseButtonText,
                                    image: D.iconEmpty,
                                    icon: V ? D.externalLink : void 0,
                                    onClick: o.buyBoxes,
                                    className: Ge.purchaseButton,
                                }),
                            F.length > 1 &&
                                n().createElement(
                                    'div',
                                    { className: Ge.tabs },
                                    n().createElement(w.mQ, {
                                        tabs: F,
                                        changeTab: (e) => {
                                            J ||
                                                (e !== G &&
                                                    (o.onBoxOptionChanged(e),
                                                    ie.start(L(() => ie.start(I))),
                                                    ue.start(L(() => ue.start(I)))));
                                        },
                                        active: G,
                                        texts: z.tabText,
                                        icons: {
                                            slotGlow: D.slotGlow,
                                            numberGlow: D.guaranteedGlowIcon,
                                            glowIcon: D.glowIcon,
                                            guaranteedIco: D.guaranteedIco,
                                        },
                                        tabsGuaranteedCount: Y,
                                        startAnimation: te === Fe,
                                    }),
                                ),
                            W &&
                                n().createElement(E.g, {
                                    options: Se,
                                    onHidden: () => Z(!1),
                                    isStatsEnabled: H,
                                    className: Ge.popover,
                                }),
                        )
                    );
                }),
                Ue = () => n().createElement(F, { options: s.f.HAS_BOXES }, n().createElement(Qe, null));
        },
        9221: (e, t, o) => {
            o.d(t, { r: () => p });
            var a = o(6483),
                n = o.n(a),
                s = o(9766),
                r = o(2056),
                i = o(6179),
                l = o.n(i),
                c = o(7509);
            const u = 'GuaranteedTitle_base_28',
                d = 'GuaranteedTitle_wrapper_36',
                _ = 'GuaranteedTitle_nextGuaranteedBox_31',
                m = 'GuaranteedTitle_countBg_b7',
                b = 'GuaranteedTitle_info_49',
                g = R.views.lobby.lootbox_system,
                p = ({ counts: e, texts: t, icons: o, category: a, className: i }) =>
                    l().createElement(
                        'div',
                        { className: n()(u, i) },
                        l().createElement(
                            r.u,
                            { contentId: g.tooltips.GuaranteedRewardInfoTooltip('resId'), args: { category: a } },
                            l().createElement(
                                'div',
                                { className: d },
                                e.boxesToGuaranteed > 1
                                    ? l().createElement(s.z, {
                                          text: t.title,
                                          binding: {
                                              count: l().createElement(c.t, {
                                                  boxesCountToGuaranteed: e.boxesToGuaranteed,
                                                  glowIcon: o.glow,
                                                  strongGlowIcon: o.strongGlow,
                                                  accentCount: e.accent,
                                              }),
                                          },
                                      })
                                    : l().createElement(
                                          'div',
                                          { className: _ },
                                          l().createElement('div', {
                                              className: m,
                                              style: { backgroundImage: `url(${o.strongGlow})` },
                                          }),
                                          t.nextBox,
                                      ),
                                l().createElement('div', {
                                    className: b,
                                    style: { backgroundImage: `url(${o.info})` },
                                }),
                            ),
                        ),
                    );
        },
        2333: (e, t, o) => {
            o.d(t, { q: () => u });
            var a = o(6483),
                n = o.n(a),
                s = o(9766),
                r = o(6179),
                i = o.n(r);
            const l = 'QuantityTitle_base_06',
                c = 'QuantityTitle_count_a9',
                u = ({ text: e, boxesCount: t = 0, className: o }) =>
                    i().createElement(
                        'div',
                        { className: n()(l, o) },
                        t > 0
                            ? i().createElement(s.z, {
                                  text: e,
                                  binding: { boxesCount: i().createElement('span', { className: c }, t) },
                              })
                            : e,
                    );
        },
        8821: (e, t, o) => {
            o.d(t, { o: () => d });
            var a = o(6483),
                n = o.n(a),
                s = o(5461),
                r = o(6179),
                i = o.n(r);
            const l = 'AnimationCheckbox_base_53',
                c = 'AnimationCheckbox_base__disabled_22',
                u = 'AnimationCheckbox_text_28',
                d = ({ className: e, isActive: t, text: o, size: a = s.yB.large, disable: r = !1, onClick: d }) =>
                    i().createElement(
                        'div',
                        { className: n()(l, r && c, e) },
                        i().createElement(
                            s.XZ,
                            {
                                isDisabled: r,
                                size: a,
                                isChecked: t,
                                onClick: d,
                                type: s.Rh.main,
                                contentStyles: { paddingTop: a === s.yB.extraLarge ? '4rem' : '0' },
                            },
                            i().createElement('span', { className: u }, o),
                        ),
                    );
        },
        3597: (e, t, o) => {
            o.d(t, { a: () => u });
            var a = o(6483),
                n = o.n(a),
                s = o(6179),
                r = o.n(s);
            const i = 'Loader_base_ed',
                l = 'Loader_icon_d2',
                c = 'Loader_text_c4',
                u = ({ img: e, text: t, className: o }) =>
                    r().createElement(
                        'div',
                        { className: n()(i, o) },
                        r().createElement('div', { className: l, style: { backgroundImage: `url(${e})` } }),
                        r().createElement('div', { className: c }, t),
                    );
        },
        2984: (e, t, o) => {
            o.d(t, { i: () => g });
            var a = o(6483),
                n = o.n(a),
                s = o(514),
                r = o(6179),
                i = o.n(r),
                l = o(9674);
            const c = 'PurchaseButton_base_86',
                u = 'PurchaseButton_wrapper_5d',
                d = 'PurchaseButton_image_46',
                _ = 'PurchaseButton_textBlock_52',
                m = 'PurchaseButton_text_56',
                b = 'PurchaseButton_icon_a3',
                g = ({ text: e, image: t, icon: o, onClick: a, className: r }) =>
                    i().createElement(
                        'div',
                        {
                            className: n()(c, r),
                            onClick: () => {
                                s.hY.click(), s.hY.sound(l.Q.purchaseClick), a();
                            },
                        },
                        i().createElement(
                            'div',
                            {
                                className: u,
                                onMouseEnter: () => {
                                    s.hY.sound(l.Q.purchaseHover);
                                },
                            },
                            i().createElement('div', { className: d, style: { backgroundImage: `url(${t})` } }),
                            i().createElement(
                                'div',
                                { className: _ },
                                i().createElement('div', { className: m }, e),
                                o &&
                                    i().createElement('div', { className: b, style: { backgroundImage: `url(${o})` } }),
                            ),
                        ),
                    );
        },
    },
]);
