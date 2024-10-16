'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [554],
    {
        7701: (e, t, n) => {
            n.d(t, { Nm: () => s.Nm, c4: () => r });
            var s = n(7308);
            const r = (0, s.EO)({
                getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                getContainerSize: (e) => e.scrollHeight,
                getWrapperSize: (e) => e.offsetHeight,
                setScrollPosition: (e, t) => {
                    e.scrollTop = t.value.scrollPosition;
                },
                getDirection: (e) => (e.deltaY > 1 ? s.Nm.Next : s.Nm.Prev),
            });
        },
        7308: (e, t, n) => {
            n.d(t, { EO: () => g, Nm: () => m, he: () => p });
            var s = n(7515),
                r = n(1856),
                a = n(3138),
                o = n(4532),
                l = n(9653),
                c = n(3815),
                i = n(4489),
                u = n(6179),
                d = n(7030);
            let m;
            !(function (e) {
                (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
            })(m || (m = {}));
            const p = {
                    step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                    animationConfig: { tension: 170, friction: 26 },
                },
                g = ({
                    getContainerSize: e,
                    getBounds: t,
                    setScrollPosition: n,
                    getDirection: m,
                    getWrapperSize: g,
                    triggerMouseMoveOnUpdate: f = !1,
                }) => {
                    const _ = (e, n) => {
                        const r = t(e),
                            a = r[0],
                            o = r[1];
                        return o <= a ? 0 : (0, s.u)(a, o, n);
                    };
                    return (s = {}) => {
                        const b = s.settings,
                            v = void 0 === b ? p : b,
                            h = (0, u.useRef)(null),
                            y = (0, u.useRef)(null),
                            E = (0, l.q)(),
                            C = (0, i.f)(
                                () => {
                                    a.O.view.forceTriggerMouseMove();
                                },
                                [],
                                150,
                            ),
                            N = (0, d.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (e) => {
                                    const t = h.current;
                                    t && (n(t, e), E.trigger('change', e), f && C());
                                },
                                onRest: (e) => E.trigger('rest', e),
                                onStart: (e) => E.trigger('start', e),
                                onPause: (e) => E.trigger('pause', e),
                            })),
                            w = N[0],
                            S = N[1],
                            R = (0, u.useCallback)(
                                (e, t, n) => {
                                    var s;
                                    const r = w.scrollPosition.get(),
                                        a = (null != (s = w.scrollPosition.goal) ? s : 0) - r;
                                    return _(e, t * n + a + r);
                                },
                                [w.scrollPosition],
                            ),
                            B = (0, u.useCallback)(
                                (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                    const s = h.current;
                                    s &&
                                        S.start({
                                            scrollPosition: _(s, e),
                                            immediate: t,
                                            reset: n,
                                            config: v.animationConfig,
                                            from: { scrollPosition: _(s, w.scrollPosition.get()) },
                                        });
                                },
                                [S, v.animationConfig, w.scrollPosition],
                            ),
                            x = (0, u.useCallback)(
                                (e) => {
                                    const t = h.current,
                                        n = y.current;
                                    if (!t || !n) return;
                                    const s = ((e, t) => {
                                            switch (t.type) {
                                                case 'proportional':
                                                    return g(e) / t.factor;
                                                case 'fixed':
                                                    return t.value;
                                            }
                                        })(n, v.step),
                                        r = R(t, e, s);
                                    B(r);
                                },
                                [B, R, v.step],
                            ),
                            P = (0, u.useCallback)(
                                (e) => {
                                    0 !== e.deltaY && x(m(e)),
                                        h.current && E.trigger('mouseWheel', e, w.scrollPosition, t(h.current));
                                },
                                [w.scrollPosition, x, E],
                            ),
                            T = (0, o.M)(
                                () =>
                                    (0, r.v)(() => {
                                        const e = h.current;
                                        e &&
                                            (B(_(e, w.scrollPosition.goal), { immediate: !0 }),
                                            E.trigger('resizeHandled'));
                                    }),
                                [B, w.scrollPosition.goal],
                            ),
                            k = (0, c.z)(() => {
                                const e = h.current;
                                if (!e) return;
                                const t = _(e, w.scrollPosition.goal);
                                t !== w.scrollPosition.goal && B(t, { immediate: !0 }), E.trigger('recalculateContent');
                            });
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('resize', T),
                                () => {
                                    window.removeEventListener('resize', T);
                                }
                            ),
                            [T],
                        );
                        return (0, u.useMemo)(
                            () => ({
                                getWrapperSize: () => (y.current ? g(y.current) : void 0),
                                getContainerSize: () => (h.current ? e(h.current) : void 0),
                                getBounds: () =>
                                    h.current
                                        ? t(h.current)
                                        : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                stepTimeout: v.step.clampedArrowStepTimeout,
                                clampPosition: _,
                                handleMouseWheel: P,
                                applyScroll: B,
                                applyStepTo: x,
                                contentRef: h,
                                wrapperRef: y,
                                scrollPosition: S,
                                animationScroll: w,
                                recalculateContent: k,
                                events: { on: E.on, off: E.off },
                            }),
                            [w.scrollPosition, B, x, E.off, E.on, k, P, S, v.step.clampedArrowStepTimeout],
                        );
                    };
                };
        },
        4532: (e, t, n) => {
            n.d(t, { M: () => r });
            var s = n(6179);
            const r = (e, t = []) => {
                const n = (0, s.useRef)(),
                    r = (0, s.useCallback)((...t) => {
                        n.current && n.current(), (n.current = e(...t));
                    }, t);
                return (
                    (0, s.useEffect)(
                        () => () => {
                            n.current && n.current();
                        },
                        [r],
                    ),
                    r
                );
            };
        },
        9653: (e, t, n) => {
            n.d(t, { q: () => o });
            var s = n(6179);
            function r(e, t) {
                var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return a(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === n && e.constructor && (n = e.constructor.name),
                                'Map' === n || 'Set' === n
                                    ? Array.from(e)
                                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                      ? a(e, t)
                                      : void 0
                            );
                        }
                    })(e)) ||
                    (t && e && 'number' == typeof e.length)
                ) {
                    n && (e = n);
                    var s = 0;
                    return function () {
                        return s >= e.length ? { done: !0 } : { done: !1, value: e[s++] };
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, s = Array(t); n < t; n++) s[n] = e[n];
                return s;
            }
            const o = () => {
                const e = (0, s.useMemo)(() => ({}), []),
                    t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                    n = (e, n) => {
                        t(e).set(n, n);
                    },
                    a = (e, n) => {
                        t(e).delete(n);
                    },
                    o = (e, ...n) => {
                        for (var s, a = r(t(e).values()); !(s = a()).done; ) {
                            (0, s.value)(...n);
                        }
                    };
                return (0, s.useMemo)(() => ({ on: n, off: a, trigger: o }), []);
            };
        },
        3815: (e, t, n) => {
            n.d(t, { z: () => a });
            var s = n(6179);
            const r = [];
            function a(e) {
                const t = (0, s.useRef)(e);
                return (
                    (0, s.useLayoutEffect)(() => {
                        t.current = e;
                    }),
                    (0, s.useCallback)((...e) => (0, t.current)(...e), r)
                );
            }
        },
        7509: (e, t, n) => {
            n.d(t, { t: () => m });
            var s = n(6483),
                r = n.n(s),
                a = n(6179),
                o = n.n(a);
            const l = 'GuaranteedNumber_base_73',
                c = 'GuaranteedNumber_countBg_cd',
                i = 'GuaranteedNumber_count_e3',
                u = 'GuaranteedNumber_glow_85',
                d = 'GuaranteedNumber_glow__reverse_7b',
                m = ({
                    boxesCountToGuaranteed: e,
                    glowIcon: t,
                    strongGlowIcon: n,
                    accentCount: s,
                    className: a = '',
                }) =>
                    o().createElement(
                        'div',
                        { className: r()(l, a) },
                        o().createElement('div', { className: c, style: { backgroundImage: `url(${n})` } }),
                        e <= s &&
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement('div', { className: u, style: { backgroundImage: `url(${t})` } }),
                                o().createElement('div', {
                                    className: r()(u, d),
                                    style: { backgroundImage: `url(${t})` },
                                }),
                            ),
                        o().createElement('div', { className: i }, e),
                    );
        },
        4707: (e, t, n) => {
            n.d(t, { z: () => v });
            var s = n(6483),
                r = n.n(s),
                a = n(6179),
                o = n.n(a),
                l = n(8457),
                c = n(4598);
            const i = 'ImageLayer_base_ea',
                u = ({ src: e, className: t, onLoaded: n = c.ZT }) => (
                    ((e, t) => {
                        (0, a.useEffect)(() => {
                            const n = new Image();
                            return (
                                n.addEventListener('load', t),
                                (n.src = e),
                                () => {
                                    n.removeEventListener('load', t);
                                }
                            );
                        }, [e, t]);
                    })(e, n),
                    o().createElement('div', { className: r()(i, t), style: { backgroundImage: `url(${e})` } })
                );
            var d = n(6366);
            var m = n(3905),
                p = n(1354);
            const g = ({
                    src: e,
                    className: t,
                    loop: n = !1,
                    onLoaded: s,
                    onEnded: r,
                    playVideo: l,
                    autoplay: c = !1,
                    onPlay: i,
                }) => {
                    const u = (0, a.useRef)(null),
                        g = (0, p._)(m.p6);
                    (0, a.useEffect)(() => {
                        const e = u.current;
                        e && l && e.goToAndPlay(0);
                    }, [l]);
                    const f = ((e) => {
                            const t = (0, a.useRef)(0);
                            return (
                                (0, a.useEffect)(() => () => cancelAnimationFrame(t.current), []),
                                [
                                    () => {
                                        const n = () => {
                                            e() && (t.current = requestAnimationFrame(n));
                                        };
                                        n();
                                    },
                                    () => cancelAnimationFrame(t.current),
                                ]
                            );
                        })(() => {
                            var e;
                            const t = null == (e = u.current) ? void 0 : e.getCachedKeyframes();
                            return null == t || !t.length || (null == s || s(), !1);
                        }),
                        _ = f[0],
                        b = f[1];
                    return (
                        (0, a.useEffect)(() => (_(), b), []),
                        o().createElement(d.n, {
                            ref: u,
                            className: t,
                            style: g,
                            src: e,
                            autoplay: c,
                            loop: n,
                            onEnded: r,
                            onPlay: i,
                        })
                    );
                },
                f = 'ResourceLayer_base_fe',
                _ = 'ResourceLayer_layer_59',
                b = 'ResourceLayer_layer__video_6a',
                v = ({
                    layer: e,
                    className: t,
                    onLoaded: n,
                    onVideoEnded: s,
                    playVideo: a,
                    loop: c,
                    autoplay: i,
                    onVideoPlay: d,
                }) =>
                    o().createElement(
                        'div',
                        { className: r()(f, t) },
                        e.type === l.U.video &&
                            o().createElement(g, {
                                className: r()(_, b),
                                src: e.src,
                                onLoaded: n,
                                onEnded: s,
                                loop: c,
                                autoplay: i,
                                playVideo: a,
                                onPlay: d,
                            }),
                        e.type === l.U.image && o().createElement(u, { src: e.src, className: _, onLoaded: n }),
                    );
        },
        3727: (e, t, n) => {
            n.d(t, { g: () => d });
            var s = n(6483),
                r = n.n(s),
                a = n(514),
                o = n(6179),
                l = n.n(o);
            const c = 'StatisticsButton_base_30',
                i = 'StatisticsButton_text_34',
                u = 'StatisticsButton_icon_06',
                d = ({ icon: e, label: t, onClick: n, className: s = '' }) =>
                    l().createElement(
                        'div',
                        {
                            className: r()(c, s),
                            onMouseEnter: () => {
                                a.hY.highlight();
                            },
                            onClick: () => {
                                a.hY.yes1(), n();
                            },
                        },
                        l().createElement('div', { className: u, style: { backgroundImage: `url(${e})` } }),
                        l().createElement('div', { className: i }, t),
                    );
        },
        3720: (e, t, n) => {
            n.d(t, { g: () => Te });
            var s = n(6179),
                r = n.n(s),
                a = n(6483),
                o = n.n(a),
                l = n(1856),
                c = n(122),
                i = n(514),
                u = n(9916),
                d = n(3403),
                m = n(9674),
                p = n(3215),
                g = n(4598),
                f = n(3946),
                _ = n(7366);
            const b = {
                    images: {
                        statsIcon: 'statistics.stats',
                        noiseBackground: 'statistics.noise',
                        closeIcon: 'statistics.close_white',
                        infoIcon: 'common.info',
                        scrollLipTop: 'statistics.lipBig',
                    },
                    texts: {
                        header: 'common.statistics.header',
                        emptyHeader: 'common.statistics.emptyHeader',
                        tooltipTitle: 'common.statistics.tooltip.title',
                        tooltipDescription: 'common.statistics.tooltip.body',
                        currency: 'statisticsRewards.count.currency',
                        resetButton: 'statisticsRewards.resetButton.text',
                        resetTooltipDescription: 'statisticsRewards.resetButton.tooltipText',
                    },
                },
                v = {
                    dynamicTexts: {
                        category: 'statisticsRewards.label',
                        defaultCount: 'statisticsRewards.count.default',
                        days: 'statisticsRewards.count.days',
                    },
                },
                h = (0, p.q)()(
                    ({ observableModel: e }) => {
                        const t = Object.assign(
                                { root: e.object(), categories: e.array('categories') },
                                e.primitives(['eventName', 'openedCount']),
                            ),
                            n = (0, f.Om)(() => (0, _.jh)(b, t.eventName.get()), { equals: g.jv }),
                            s = (0, f.Om)(() => (0, _.kC)(v, t.eventName.get()), { equals: g.jv }),
                            r = (0, f.Om)(() => (0, _.jh)(b, ''), { equals: g.jv }),
                            a = (0, f.Om)(() => t.categories.get(), { equals: g.jv });
                        return Object.assign({}, t, {
                            computes: { resources: n, dynamicResources: s, defaultResources: r, categories: a },
                        });
                    },
                    ({ externalModel: e }) => ({
                        reset: e.createCallbackNoArgs('onReset'),
                        updateResetState: e.createCallbackNoArgs('onUpdateResetState'),
                    }),
                ),
                y = h[0],
                E = h[1],
                C = 'Background_base_41',
                N = 'Background_border_ae',
                w = 'Background_noise_95',
                S = ({ className: e = '', background: t }) =>
                    r().createElement(
                        'div',
                        { className: o()(C, e) },
                        r().createElement('div', { className: w, style: { backgroundImage: `url(${t})` } }),
                        r().createElement('div', { className: N }),
                    );
            var B = n(2862),
                x = n(7701),
                P = n(5415),
                T = n(9480),
                k = n(3958),
                I = n(9766),
                M = n(2056);
            const z = ['children'];
            function L() {
                return (
                    (L = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var s in n) ({}).hasOwnProperty.call(n, s) && (e[s] = n[s]);
                              }
                              return e;
                          }),
                    L.apply(null, arguments)
                );
            }
            const O = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var s in e)
                                if ({}.hasOwnProperty.call(e, s)) {
                                    if (t.indexOf(s) >= 0) continue;
                                    n[s] = e[s];
                                }
                            return n;
                        })(e, z);
                    return r().createElement(
                        M.u,
                        L(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                },
                W = ['children', 'body', 'header', 'note', 'alert', 'args'];
            function G() {
                return (
                    (G = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var s in n) ({}).hasOwnProperty.call(n, s) && (e[s] = n[s]);
                              }
                              return e;
                          }),
                    G.apply(null, arguments)
                );
            }
            const D = R.views.common.tooltip_window.simple_tooltip_content,
                H = (e) => {
                    let t = e.children,
                        n = e.body,
                        a = e.header,
                        o = e.note,
                        l = e.alert,
                        c = e.args,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var s in e)
                                if ({}.hasOwnProperty.call(e, s)) {
                                    if (t.indexOf(s) >= 0) continue;
                                    n[s] = e[s];
                                }
                            return n;
                        })(e, W);
                    const u = (0, s.useMemo)(() => {
                        const e = Object.assign({}, c, { body: n, header: a, note: o, alert: l });
                        for (const t in e) void 0 === e[t] && delete e[t];
                        return e;
                    }, [l, n, a, o, c]);
                    return r().createElement(
                        M.u,
                        G(
                            {
                                contentId:
                                    ((d = null == c ? void 0 : c.hasHtmlContent),
                                    d ? D.SimpleTooltipHtmlContent('resId') : D.SimpleTooltipContent('resId')),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                args: u,
                            },
                            i,
                        ),
                        t,
                    );
                    var d;
                };
            function q() {
                return (
                    (q = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var s in n) ({}).hasOwnProperty.call(n, s) && (e[s] = n[s]);
                              }
                              return e;
                          }),
                    q.apply(null, arguments)
                );
            }
            const A = ({ children: e, tooltipArgs: t, className: n }) => {
                if (!t) return e;
                const s = r().createElement('div', { className: n }, e);
                if (t.header || t.body) return r().createElement(H, t, s);
                const a = t.contentId;
                return a ? r().createElement(M.u, q({}, t, { contentId: a }), s) : r().createElement(O, t, s);
            };
            let $;
            !(function (e) {
                (e.LootBox = 'lootBox'),
                    (e.Vehicles = 'vehicles'),
                    (e.Style = 'style'),
                    (e.Style3D = 'style_3d'),
                    (e.CrewMember = 'tmanToken'),
                    (e.PremiumPlus = 'premium_plus'),
                    (e.Credits = 'credits'),
                    (e.Gold = 'gold'),
                    (e.Crystal = 'crystal'),
                    (e.FreeXP = 'freeXP'),
                    (e.Customizations = 'customizations'),
                    (e.ExperimentalEquipment = 'experimental_equipment'),
                    (e.Components = 'equipCoin'),
                    (e.ImprovedEquipment = 'improved_equipment'),
                    (e.BountyEquipment = 'trophy_equipment'),
                    (e.StandardEquipment = 'standard_equipment'),
                    (e.Directives = 'battleBooster_gift'),
                    (e.TrainingMaterials = 'training_materials'),
                    (e.Blueprints = 'blueprints'),
                    (e.BattleBonusX5 = 'battle_bonus_x5'),
                    (e.CrewBonusX3 = 'crew_bonus_x3'),
                    (e.PersonalReserves = 'personal_reserves'),
                    (e.Consumables = 'consumables'),
                    (e.Rations = 'rations');
            })($ || ($ = {}));
            var X = n(2691);
            const j = {
                    [$.LootBox]: 'lootBox_default',
                    [$.Vehicles]: 'vehicles',
                    [$.Style]: 'style',
                    [$.Style3D]: 'style_3d',
                    [$.CrewMember]: 'tankman',
                    [$.PremiumPlus]: 'premium_plus_universal',
                    [$.Gold]: 'gold',
                    [$.Crystal]: 'crystal',
                    [$.Credits]: 'credits',
                    [$.FreeXP]: 'freeXP',
                    [$.Customizations]: 'customizations',
                    [$.ExperimentalEquipment]: 'expequipments_gift',
                    [$.Components]: 'equipCoin',
                    [$.ImprovedEquipment]: 'deluxe_gift',
                    [$.BountyEquipment]: 'trophy_gift',
                    [$.StandardEquipment]: 'new_device_mi_gift',
                    [$.Directives]: 'battle_booster_gift',
                    [$.TrainingMaterials]: 'training_materials',
                    [$.Blueprints]: 'blueprint_tube',
                    [$.BattleBonusX5]: 'battle_bonus_x5',
                    [$.CrewBonusX3]: 'crew_bonus_x3',
                    [$.PersonalReserves]: 'personal_reserves',
                    [$.Consumables]: 'consumables',
                    [$.Rations]: 'rations',
                },
                V = [$.Vehicles, $.Style, $.Style3D, $.QuestsChain],
                Y = [
                    $.CrewMember,
                    $.Customizations,
                    $.ExperimentalEquipment,
                    $.ImprovedEquipment,
                    $.BountyEquipment,
                    $.StandardEquipment,
                    $.Directives,
                    $.TrainingMaterials,
                    $.Blueprints,
                    $.PersonalReserves,
                    $.Consumables,
                    $.Rations,
                ],
                F = (e, t) => {
                    const n = j[e] || e;
                    return R.images.gui.maps.icons.quests.bonuses.$dyn(t).$dyn(n);
                },
                U = R.strings.tooltips.awardItem,
                Z = (e) => {
                    if (e.startsWith($.LootBox)) {
                        const t = e.split('_')[1];
                        return {
                            contentId: R.views.lobby.lootbox_system.tooltips.BoxTooltip('resId'),
                            args: { boxCategory: t },
                        };
                    }
                    if (V.includes(e) || Y.includes(e))
                        return {
                            contentId: R.views.lobby.lootbox_system.tooltips.StatisticsCategoryTooltipView('resId'),
                            args: { bonusesCategory: e },
                        };
                    switch (e) {
                        case $.PremiumPlus:
                            return { header: U.premium_plus.header(), body: U.premium_plus.body() };
                        case $.Credits:
                            return { header: U.credits.header(), body: U.credits.body() };
                        case $.Gold:
                            return { header: U.gold.header(), body: U.gold.body() };
                        case $.Crystal:
                            return { header: U.crystal.header(), body: U.crystal.body() };
                        case $.FreeXP:
                            return { header: U.freeXP.header(), body: U.freeXP.body() };
                        case $.Components:
                            return { header: U.equipCoin.header(), body: U.equipCoin.body() };
                        case $.BattleBonusX5:
                            return {
                                header: R.strings.tooltips.quests.bonuses.token.battle_bonus_x5.header(),
                                body: R.strings.tooltips.quests.bonuses.token.battle_bonus_x5.body(),
                            };
                        case $.CrewBonusX3:
                            return {
                                header: R.strings.tooltips.quests.bonuses.token.crew_bonus_x3.header(),
                                body: R.strings.tooltips.quests.bonuses.token.crew_bonus_x3.body(),
                            };
                        default:
                            return {
                                header: (0, X.R)(R.strings, `${U}.${e}.header`),
                                body: (0, X.R)(R.strings, `${U}.${e}.body`),
                            };
                    }
                };
            var Q = n(4401);
            const J = {
                    base: 'RewardsCategory_base_89',
                    base__big: 'RewardsCategory_base__big_9e',
                    icon: 'RewardsCategory_icon_5b',
                    description: 'RewardsCategory_description_19',
                    name: 'RewardsCategory_name_c3',
                    count: 'RewardsCategory_count_91',
                    count__premium_plus: 'RewardsCategory_count__premium_plus_22',
                    count__gold: 'RewardsCategory_count__gold_38',
                    count__credits: 'RewardsCategory_count__credits_ef',
                    count__freeXP: 'RewardsCategory_count__freeXP_3e',
                    count__crystal: 'RewardsCategory_count__crystal_49',
                },
                K = (0, d.Pi)(({ category: e, imageSize: t, className: n }) => {
                    const s = E().model.computes,
                        a = s.resources().texts,
                        l = s.dynamicResources().dynamicTexts,
                        c = e.type,
                        i = e.count,
                        u = ((e, t, n) => {
                            switch (n.type) {
                                case $.PremiumPlus:
                                    return t.days.plural('days', n.count);
                                case $.Gold:
                                case $.Credits:
                                case $.Crystal:
                                case $.FreeXP:
                                case $.Components:
                                    return e.currency;
                                default:
                                    return t.defaultCount.plural('default', n.count);
                            }
                        })(a, l, e),
                        d = l.category.dyn(((e) => j[e] || e)(c));
                    return r().createElement(
                        A,
                        { tooltipArgs: Z(c) },
                        r().createElement(
                            'div',
                            { className: o()(J.base, J[`base__${t}`], n) },
                            r().createElement('div', {
                                className: J.icon,
                                style: { backgroundImage: `url(${F(e.type, t)})` },
                            }),
                            r().createElement(
                                'div',
                                { className: J.description },
                                r().createElement('div', { className: J.name }, d),
                                r().createElement(
                                    'div',
                                    { className: o()(J.count, J[`count__${c}`]) },
                                    r().createElement(I.z, {
                                        text: u,
                                        binding: {
                                            count: i,
                                            currency: r().createElement(I.z, { text: (0, Q.QH)(`${i}`) }),
                                        },
                                    }),
                                ),
                            ),
                        ),
                    );
                }),
                ee = 'CategoriesList_base_fb',
                te = 'CategoriesList_empty_90',
                ne = 'CategoriesList_area_76',
                se = 'CategoriesList_base__wide_57',
                re = 'CategoriesList_scroll_9f',
                ae = 'CategoriesList_scrollContent_43',
                oe = 'CategoriesList_scrollBar_02',
                le = 'CategoriesList_lip_25',
                ce = 'CategoriesList_reward_0a',
                ie = 'CategoriesList_reward__odd_1a',
                ue = (0, d.Pi)(({ className: e }) => {
                    const t = E().model.computes,
                        n = t.resources(),
                        s = n.texts,
                        a = n.images,
                        l = t.categories(),
                        c = (0, P.GS)().mediaSize,
                        i = (0, x.c4)();
                    return r().createElement(
                        'div',
                        { className: o()(ee, l.length > 7 && se, e) },
                        r().createElement(
                            k.z,
                            {
                                scrollApi: i,
                                lipImage: a.scrollLipTop,
                                classNames: { base: re, scrollContent: ae, scrollBar: oe, lip: le },
                            },
                            r().createElement(
                                'div',
                                { className: ne },
                                0 === l.length && r().createElement('div', { className: te }, s.emptyHeader),
                                T.UI(l, (e, t) =>
                                    r().createElement(K, {
                                        key: t,
                                        category: e,
                                        imageSize: c < P.cJ.Medium ? B.h2.Small : B.h2.Big,
                                        className: o()(ce, !(t % 2) && ie),
                                    }),
                                ),
                            ),
                        ),
                    );
                }),
                de = 'Header_base_e8',
                me = 'Header_text_6a',
                pe = 'Header_count_5b',
                ge = 'Header_icon_50',
                fe = (0, d.Pi)(({ className: e = '' }) => {
                    const t = E().model,
                        n = t.computes,
                        s = t.openedCount,
                        a = n.resources(),
                        l = a.texts,
                        c = a.images;
                    return r().createElement(
                        'div',
                        { className: o()(de, e) },
                        r().createElement(I.z, {
                            text: l.header,
                            binding: { count: r().createElement('span', { className: pe }, s.get()) },
                            classMix: me,
                        }),
                        r().createElement(
                            H,
                            { header: l.tooltipTitle, body: l.tooltipDescription },
                            r().createElement('div', {
                                className: ge,
                                style: { backgroundImage: `url(${c.infoIcon})` },
                            }),
                        ),
                    );
                });
            var _e = n(3457),
                be = n(2106);
            const ve = { base: 'ResetButton_base_d6' },
                he = (0, d.Pi)(({ className: e = '' }) => {
                    const t = E(),
                        n = t.model,
                        s = n.computes,
                        a = n.openedCount,
                        l = t.controls,
                        c = s.categories(),
                        i = s.resources().texts;
                    return r().createElement(
                        'div',
                        { className: o()(ve.base, e) },
                        r().createElement(
                            H,
                            { body: i.resetTooltipDescription },
                            r().createElement(
                                _e.u5,
                                {
                                    type: be.L.ghost,
                                    size: _e.qE.medium,
                                    disabled: 0 === c.length && 0 === a.get(),
                                    onClick: l.reset,
                                    mixClass: ve.button,
                                },
                                i.resetButton,
                            ),
                        ),
                    );
                }),
                ye = 'Content_base_5f',
                Ee = 'Content_header_2f',
                Ce = 'Content_rewards_c0',
                Ne = 'Content_reset_e1',
                we = ({ className: e }) =>
                    r().createElement(
                        'div',
                        { className: o()(ye, e) },
                        r().createElement(fe, { className: Ee }),
                        r().createElement(ue, { className: Ce }),
                        r().createElement(he, { className: Ne }),
                    ),
                Se = {
                    base: 'Popover_base_6b',
                    base__show: 'Popover_base__show_a5',
                    wrapper: 'Popover_wrapper_20',
                    close: 'Popover_close_2a',
                    background: 'Popover_background_94',
                    content: 'Popover_content_c3',
                    shadow: 'Popover_shadow_f7',
                },
                Re = 'show',
                Be = 'hide',
                xe = (0, d.Pi)(({ onHidden: e, isStatsEnabled: t, className: n }) => {
                    const a = (0, s.useState)(Be),
                        d = a[0],
                        p = a[1],
                        g = E(),
                        f = g.model,
                        _ = f.computes,
                        b = f.root,
                        v = g.controls,
                        h = b.get().isResetCompleted,
                        y = _.resources().images,
                        C = () => {
                            p(Be), i.hY.sound(m.Q.statsClose);
                        },
                        N = (0, s.useRef)(null);
                    (0, s.useEffect)(() => {
                        const e = N.current;
                        if (e && d === Re) return u.c1.register(e, C), () => u.c1.unregister(e, C);
                    }, [d, N, p]),
                        (0, s.useEffect)(() => {
                            h && (C(), v.updateResetState());
                        }, [h]),
                        (0, s.useEffect)(
                            () =>
                                (0, l.v)(() => {
                                    p(Re), i.hY.sound(m.Q.statsOpen);
                                }),
                            [p],
                        ),
                        (0, s.useEffect)(() => {
                            if (d === Be)
                                return (0, c.F)(() => {
                                    e();
                                }, 300);
                        }, [e, d]),
                        (0, s.useEffect)(() => {
                            t || C();
                        }, [t]);
                    return r().createElement(
                        'div',
                        { className: o()(Se.base, Se[`base__${d}`], n), ref: N },
                        r().createElement(
                            'div',
                            { className: Se.wrapper },
                            r().createElement(S, { className: Se.background, background: `${y.noiseBackground}` }),
                            r().createElement(we, { className: Se.content }),
                            r().createElement('div', {
                                className: Se.close,
                                style: { backgroundImage: `url(${y.closeIcon})` },
                                onClick: () => {
                                    i.hY.yes1(), C();
                                },
                                onMouseEnter: () => {
                                    i.hY.highlight();
                                },
                            }),
                        ),
                        r().createElement('div', { className: Se.shadow }),
                    );
                }),
                Pe = { context: 'model.hasBoxes.statistics' },
                Te = (e) => r().createElement(y, { options: e.options || Pe }, r().createElement(xe, e));
        },
        8455: (e, t, n) => {
            n.d(t, { mQ: () => W });
            var s = n(6483),
                r = n.n(s),
                a = n(7522),
                o = n(514),
                l = n(4598),
                c = n(9480),
                i = n(6179),
                u = n.n(i),
                d = n(7030),
                m = n(9674),
                p = n(4401),
                g = n(9182),
                f = n(2056),
                _ = n(9766),
                b = n(122),
                v = n(7509);
            const h = 'GuaranteedTip_base_07',
                y = 'GuaranteedTip_base__hover_ed',
                E = 'GuaranteedTip_bg_a1',
                C = 'GuaranteedTip_glow_fd',
                N = 'GuaranteedTip_content_7c',
                w = 'GuaranteedTip_image_86',
                S = 'GuaranteedTip_text_e0',
                B = 'GuaranteedTip_description_21',
                x = 'GuaranteedTip_number_42',
                P = ({ icons: e, texts: t, show: n, boxesCountToGuaranteed: s, setTriggerShown: a, className: l }) => {
                    const c = (0, i.useState)(!1),
                        d = c[0],
                        p = c[1],
                        g = (0, i.useState)(!0),
                        f = g[0],
                        R = g[1],
                        P = d || n,
                        T = !f && P;
                    (0, i.useEffect)(
                        () =>
                            (0, b.F)(() => {
                                R(!1);
                            }, 1050),
                        [],
                    ),
                        (0, i.useEffect)(() => {
                            a(P);
                        }, [P, a]);
                    return u().createElement(
                        'div',
                        {
                            className: r()(h, T && y, l),
                            onMouseEnter: () => {
                                !n && o.hY.sound(m.Q.entryHover), p(!0);
                            },
                            onMouseLeave: () => p(!1),
                        },
                        u().createElement(
                            'div',
                            { className: N },
                            u().createElement('div', { className: E }),
                            u().createElement('div', {
                                className: w,
                                style: { backgroundImage: `url(${e.guaranteedIco})` },
                            }),
                            u().createElement(
                                'div',
                                { className: S },
                                u().createElement(_.z, {
                                    text: t,
                                    classMix: B,
                                    binding: {
                                        count: u().createElement(v.t, {
                                            boxesCountToGuaranteed: s,
                                            glowIcon: e.glowIcon,
                                            strongGlowIcon: e.numberGlow,
                                            accentCount: 0,
                                            className: x,
                                        }),
                                    },
                                }),
                            ),
                        ),
                        u().createElement('div', { className: C, style: { backgroundImage: `url(${e.slotGlow})` } }),
                    );
                },
                T = {
                    base: 'Tab_base_0c',
                    wrapper: 'Tab_wrapper_11',
                    base__active: 'Tab_base__active_af',
                    base__disable: 'Tab_base__disable_1a',
                    base__default: 'Tab_base__default_7e',
                    shadow: 'Tab_shadow_1b',
                    image: 'Tab_image_4e',
                    image__hovered: 'Tab_image__hovered_08',
                    counter: 'Tab_counter_c4',
                    counter__hovered: 'Tab_counter__hovered_7b',
                    guaranteedTip: 'Tab_guaranteedTip_d9',
                },
                k = R.images.gui.maps.icons.quests.bonuses.s180x135,
                I = ({
                    tab: e,
                    onClick: t,
                    texts: n,
                    readyTipAnimation: s,
                    tabsGuaranteedCount: a,
                    icons: l,
                    state: c,
                    className: d = '',
                }) => {
                    const g = (0, i.useState)(!1),
                        _ = g[0],
                        b = g[1],
                        v = (0, i.useState)(!1),
                        h = v[0],
                        y = v[1],
                        E = s && e.boxesCountToGuaranteed <= a;
                    (0, i.useEffect)(() => {
                        h || (_ && E && o.hY.sound(m.Q.entryHover));
                    }, [_, E, h]);
                    return u().createElement(
                        'div',
                        { className: r()(T.base, T[`base__${c}`], d) },
                        u().createElement(
                            f.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.lootbox_system.tooltips.BoxTooltip('resId'),
                                args: { boxCategory: e.boxCategory },
                                key: e.boxCategory,
                            },
                            u().createElement(
                                'div',
                                {
                                    className: r()(T.wrapper),
                                    onClick: () => {
                                        c !== p.ZM.Disable && t();
                                    },
                                    onMouseEnter: () => {
                                        c === p.ZM.Default && o.hY.highlight(), b(!0);
                                    },
                                    onMouseLeave: () => {
                                        b(!1);
                                    },
                                },
                                _ && c === p.ZM.Default && u().createElement('div', { className: T.shadow }),
                                u().createElement('div', {
                                    className: r()(T.image, _ && c === p.ZM.Default && T.image__hovered),
                                    style: { backgroundImage: `url(${k.$dyn(`lootBox_${e.boxCategory}`)})` },
                                }),
                                e.boxesCount >= 0 &&
                                    u().createElement(
                                        'div',
                                        { className: r()(T.counter, _ && c === p.ZM.Default && T.counter__hovered) },
                                        `×${e.boxesCount}`,
                                    ),
                            ),
                        ),
                        E &&
                            u().createElement(P, {
                                boxesCountToGuaranteed: e.boxesCountToGuaranteed,
                                icons: l,
                                texts: n.plural('tabText', e.boxesCountToGuaranteed),
                                show: _,
                                setTriggerShown: (e) => y(e),
                                className: T.guaranteedTip,
                            }),
                    );
                },
                M = 'Tabs_base_47',
                z = 'Tabs_tab_73',
                L = 'Tabs_tab__isFirst_d7',
                O = { opacity: 0, transform: 'translateX(-20rem)' },
                W = ({
                    tabs: e,
                    changeTab: t = l.ZT,
                    texts: n,
                    icons: s,
                    tabsGuaranteedCount: f,
                    active: _ = -1,
                    className: b = '',
                    startAnimation: v = !0,
                }) => {
                    const h = (0, i.useState)(!1),
                        y = h[0],
                        E = h[1],
                        C = ((N = e.length), (w = O), (0, i.useMemo)(() => (0, g.Nj)(N, w), [N, w]));
                    var N, w;
                    const S = (t) => {
                        C[t].start({
                            to: { opacity: 1, transform: 'translateX(0)' },
                            config: { duration: 160, easing: a.Z.easeOutCubic },
                            onRest: () =>
                                ((t) => {
                                    t !== e.length - 1 ? S(t + 1) : E(!0);
                                })(t),
                        });
                    };
                    (0, i.useEffect)(() => {
                        v && S(0);
                    }, [v]);
                    return u().createElement(
                        'div',
                        { className: r()(M, b) },
                        c.UI(e, (e, a) =>
                            u().createElement(
                                d.animated.div,
                                { style: C[a].springs, className: r()(z, 0 === a && L), key: e.boxCategory },
                                u().createElement(I, {
                                    tab: e,
                                    state: (0, p.y0)(a, _, e.boxesCount),
                                    onClick: () =>
                                        ((e) => {
                                            o.hY.sound(m.Q.switch), t(e);
                                        })(a),
                                    texts: n,
                                    icons: s,
                                    readyTipAnimation: y,
                                    tabsGuaranteedCount: f,
                                }),
                            ),
                        ),
                    );
                };
        },
        8457: (e, t, n) => {
            n.d(t, { U: () => s });
            const s = { image: 'img', video: 'video' };
        },
        3958: (e, t, n) => {
            n.d(t, { z: () => oe });
            var s = {};
            n.r(s),
                n.d(s, {
                    Area: () => I,
                    Bar: () => P,
                    DefaultScroll: () => k,
                    Direction: () => f.Nm,
                    defaultSettings: () => f.he,
                    useHorizontalScrollApi: () => _,
                });
            var r = {};
            n.r(r), n.d(r, { Area: () => Z, Bar: () => Y, Default: () => U, useVerticalScrollApi: () => M.c4 });
            var a = n(6483),
                o = n.n(a),
                l = n(1856),
                c = n(6179),
                i = n.n(c),
                u = n(7515),
                d = n(3138),
                m = n(3815);
            function p(e, t, n = []) {
                const s = (0, c.useRef)(0),
                    r = (0, c.useCallback)(() => window.clearInterval(s.current), n || []);
                (0, c.useEffect)(() => r, [r]);
                const a = (null != n ? n : []).concat([t]);
                return [
                    (0, c.useCallback)((n) => {
                        (s.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                    }, a),
                    r,
                ];
            }
            var g = n(7727),
                f = n(7308);
            const _ = (0, f.EO)({
                    getBounds: (e) => {
                        var t, n;
                        return [
                            0,
                            e.offsetWidth -
                                (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                        ];
                    },
                    getContainerSize: (e) => e.offsetWidth,
                    getWrapperSize: (e) => e.offsetWidth,
                    setScrollPosition: (e, t) => {
                        e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? f.Nm.Next : f.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                }),
                b = 'HorizontalBar_base_49',
                v = 'HorizontalBar_base__nonActive_82',
                h = 'HorizontalBar_leftButton_5f',
                y = 'HorizontalBar_rightButton_03',
                E = 'HorizontalBar_track_0d',
                C = 'HorizontalBar_thumb_fd',
                N = 'HorizontalBar_rail_32',
                w = 'disable',
                S = { pending: !1, offset: 0 },
                R = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                B = () => {},
                x = (e, t) => Math.max(20, e.offsetWidth * t),
                P = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = R, onDrag: s = B }) => {
                    const r = (0, c.useRef)(null),
                        a = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        P = (0, c.useRef)(null),
                        T = (0, c.useRef)(null),
                        k = e.stepTimeout || 100,
                        I = (0, c.useState)(S),
                        M = I[0],
                        z = I[1],
                        L = (0, c.useCallback)(
                            (e) => {
                                z(e), T.current && s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: T.current });
                            },
                            [s],
                        ),
                        O = () => {
                            const t = P.current,
                                n = T.current,
                                s = e.getWrapperSize(),
                                r = e.getContainerSize();
                            if (!(s && t && n && r)) return;
                            const o = e.animationScroll.scrollPosition.get(),
                                l = Math.min(1, s / r),
                                c = (0, u.u)(0, 1, o / (r - s)),
                                i = (t.offsetWidth - x(t, l)) * c;
                            (n.style.transform = `translateX(${0 | i}px)`),
                                ((e) => {
                                    if (a.current && _.current && P.current && T.current) {
                                        if (0 === e)
                                            return a.current.classList.add(w), void _.current.classList.remove(w);
                                        if (
                                            ((t = P.current),
                                            (n = T.current),
                                            e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                        )
                                            return a.current.classList.remove(w), void _.current.classList.add(w);
                                        var t, n;
                                        a.current.classList.remove(w), _.current.classList.remove(w);
                                    }
                                })(i);
                        },
                        W = (0, m.z)(() => {
                            (() => {
                                const t = T.current,
                                    n = P.current,
                                    s = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(a && t && s && n)) return;
                                const o = Math.min(1, s / a);
                                (t.style.width = `${x(n, o)}px`),
                                    (t.style.display = 'flex'),
                                    r.current && (1 === o ? r.current.classList.add(v) : r.current.classList.remove(v));
                            })(),
                                O();
                        });
                    (0, c.useEffect)(() => (0, l.v)(W)),
                        (0, c.useEffect)(
                            () =>
                                (0, l.v)(() => {
                                    const t = () => {
                                        O();
                                    };
                                    let n = B;
                                    const s = () => {
                                        n(), (n = (0, l.v)(W));
                                    };
                                    return (
                                        e.events.on('recalculateContent', W),
                                        e.events.on('rest', t),
                                        e.events.on('change', t),
                                        e.events.on('resizeHandled', s),
                                        () => {
                                            n(),
                                                e.events.off('recalculateContent', W),
                                                e.events.off('rest', t),
                                                e.events.off('change', t),
                                                e.events.off('resizeHandled', s);
                                        }
                                    );
                                }),
                            [e],
                        ),
                        (0, c.useEffect)(() => {
                            if (!M.pending) return;
                            const t = d.O.client.events.mouse.move(([t, n]) => {
                                    var r;
                                    const a = e.contentRef.current,
                                        o = e.wrapperRef.current;
                                    if (!a || !o) return;
                                    const l = P.current,
                                        c = T.current;
                                    if (!l || !c) return;
                                    if ('inside' === n && t.clientX < 0) return;
                                    const i = t.clientX - M.offset - l.getBoundingClientRect().x,
                                        u = (i / l.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                    e.scrollPosition.start({
                                        scrollPosition: e.clampPosition(a, u),
                                        reset: !0,
                                        immediate: !0,
                                        from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                    }),
                                        s({ type: 'dragging', thumb: c, thumbOffset: i, contentOffset: u });
                                }),
                                n = d.O.client.events.mouse.up(() => {
                                    t(), L(S);
                                });
                            return () => {
                                t(), n();
                            };
                        }, [e, M.offset, M.pending, s, L]);
                    const G = p((t) => e.applyStepTo(t), k, [e]),
                        D = G[0],
                        H = G[1];
                    (0, c.useEffect)(
                        () => (
                            document.addEventListener('mouseup', H, !0),
                            () => document.removeEventListener('mouseup', H, !0)
                        ),
                        [H],
                    );
                    const q = (e) => {
                        e.target.classList.contains(w) || (0, g.G)('highlight');
                    };
                    return i().createElement(
                        'div',
                        { className: o()(b, t.base), ref: r, onWheel: e.handleMouseWheel },
                        i().createElement('div', {
                            className: o()(h, t.leftButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(w) || 0 !== e.button || ((0, g.G)('play'), D(f.Nm.Next));
                            },
                            onMouseUp: H,
                            ref: a,
                            onMouseEnter: q,
                        }),
                        i().createElement(
                            'div',
                            {
                                className: o()(E, t.track),
                                onMouseDown: (t) => {
                                    const s = T.current;
                                    if (s && 0 === t.button)
                                        if (((0, g.G)('play'), t.target === s))
                                            L({ pending: !0, offset: t.screenX - s.getBoundingClientRect().x });
                                        else {
                                            ((t) => {
                                                const s = T.current,
                                                    r = e.contentRef.current;
                                                if (!s || !r) return;
                                                const a = n(e);
                                                e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                            })(t.screenX > s.getBoundingClientRect().x ? f.Nm.Prev : f.Nm.Next);
                                        }
                                },
                                ref: P,
                                onMouseEnter: q,
                            },
                            i().createElement('div', { ref: T, className: o()(C, t.thumb) }),
                            i().createElement('div', { className: o()(N, t.rail) }),
                        ),
                        i().createElement('div', {
                            className: o()(y, t.rightButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(w) || 0 !== e.button || ((0, g.G)('play'), D(f.Nm.Prev));
                            },
                            onMouseUp: H,
                            ref: _,
                            onMouseEnter: q,
                        }),
                    );
                }),
                T = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                },
                k = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: s,
                    areaClassName: r,
                    classNames: a,
                    scrollClassName: l,
                    getStepByRailClick: u,
                    onDrag: d,
                }) => {
                    const m = (0, c.useMemo)(() => {
                            const e = s || {};
                            return Object.assign({}, e, { base: o()(T.base, e.base) });
                        }, [s]),
                        p = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: o()(T.defaultScroll, n), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(T.defaultScrollArea, r) },
                            i().createElement(I, { className: l, api: p, classNames: a }, e),
                        ),
                        i().createElement(P, { getStepByRailClick: u, api: t, onDrag: d, classNames: m }),
                    );
                },
                I = ({ api: e, className: t, classNames: n, children: s }) => (
                    (0, c.useEffect)(() => (0, l.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: o()(T.base, t) },
                        i().createElement(
                            'div',
                            {
                                className: o()(T.wrapper, null == n ? void 0 : n.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: o()(T.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                s,
                            ),
                        ),
                    )
                );
            (I.Bar = P), (I.Default = k);
            var M = n(7701);
            const z = 'VerticalBar_base_f3',
                L = 'VerticalBar_base__nonActive_42',
                O = 'VerticalBar_topButton_d7',
                W = 'VerticalBar_bottomButton_06',
                G = 'VerticalBar_track_df',
                D = 'VerticalBar_thumb_32',
                H = 'VerticalBar_rail_43',
                q = 'disable',
                A = () => {},
                $ = { pending: !1, offset: 0 },
                X = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                j = (e, t) => {
                    e.contentRef.current && t(e.contentRef.current);
                },
                V = (e, t) => Math.max(20, e.offsetHeight * t),
                Y = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = X, onDrag: s = A }) => {
                    const r = (0, c.useRef)(null),
                        a = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        b = (0, c.useRef)(null),
                        v = e.stepTimeout || 100,
                        h = (0, c.useState)($),
                        y = h[0],
                        E = h[1],
                        C = (0, c.useCallback)(
                            (e) => {
                                E(e), b.current && s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current });
                            },
                            [s],
                        ),
                        N = (0, m.z)(() => {
                            const t = b.current,
                                n = _.current,
                                s = e.getWrapperSize(),
                                a = e.getContainerSize();
                            if (!(s && a && t && n)) return;
                            const o = Math.min(1, s / a);
                            return (
                                (t.style.height = `${V(n, o)}px`),
                                (t.style.display = 'flex'),
                                r.current && (1 === o ? r.current.classList.add(L) : r.current.classList.remove(L)),
                                o
                            );
                        }),
                        w = (0, m.z)(() => {
                            const t = _.current,
                                n = b.current,
                                s = e.getWrapperSize(),
                                r = e.getContainerSize();
                            if (!(s && t && n && r)) return;
                            const o = e.animationScroll.scrollPosition.get(),
                                l = Math.min(1, s / r),
                                c = (0, u.u)(0, 1, o / (r - s)),
                                i = (t.offsetHeight - V(t, l)) * c;
                            (n.style.transform = `translateY(${0 | i}px)`),
                                ((e) => {
                                    if (a.current && f.current && _.current && b.current) {
                                        if (0 === Math.round(e))
                                            return a.current.classList.add(q), void f.current.classList.remove(q);
                                        if (
                                            ((t = _.current),
                                            (n = b.current),
                                            e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                        )
                                            return a.current.classList.remove(q), void f.current.classList.add(q);
                                        var t, n;
                                        a.current.classList.remove(q), f.current.classList.remove(q);
                                    }
                                })(i);
                        }),
                        S = (0, m.z)(() => {
                            j(e, () => {
                                N(), w();
                            });
                        });
                    (0, c.useEffect)(() => (0, l.v)(S)),
                        (0, c.useEffect)(() => {
                            const t = () => {
                                j(e, () => {
                                    w();
                                });
                            };
                            let n = A;
                            const s = () => {
                                n(), (n = (0, l.v)(S));
                            };
                            return (
                                e.events.on('recalculateContent', S),
                                e.events.on('rest', t),
                                e.events.on('change', t),
                                e.events.on('resizeHandled', s),
                                () => {
                                    n(),
                                        e.events.off('recalculateContent', S),
                                        e.events.off('rest', t),
                                        e.events.off('change', t),
                                        e.events.off('resizeHandled', s);
                                }
                            );
                        }, [e]),
                        (0, c.useEffect)(() => {
                            if (!y.pending) return;
                            const t = d.O.client.events.mouse.up(() => {
                                    C($);
                                }),
                                n = d.O.client.events.mouse.move(([t]) => {
                                    j(e, (n) => {
                                        const r = _.current,
                                            a = b.current,
                                            o = e.getContainerSize();
                                        if (!r || !a || !o) return;
                                        const l = t.screenY - y.offset - r.getBoundingClientRect().y,
                                            c = (l / r.offsetHeight) * o;
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: n.scrollTop },
                                        }),
                                            s({ type: 'dragging', thumb: a, thumbOffset: l, contentOffset: c });
                                    });
                                });
                            return () => {
                                t(), n();
                            };
                        }, [e, y.offset, y.pending, s, C]);
                    const R = p((t) => e.applyStepTo(t), v, [e]),
                        B = R[0],
                        x = R[1];
                    (0, c.useEffect)(
                        () => (
                            document.addEventListener('mouseup', x, !0),
                            () => document.removeEventListener('mouseup', x, !0)
                        ),
                        [x],
                    );
                    const P = (e) => {
                        e.target.classList.contains(q) || (0, g.G)('highlight');
                    };
                    return i().createElement(
                        'div',
                        { className: o()(z, t.base), ref: r, onWheel: e.handleMouseWheel },
                        i().createElement('div', {
                            className: o()(O, t.topButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(q) || 0 !== e.button || ((0, g.G)('play'), B(M.Nm.Next));
                            },
                            ref: a,
                            onMouseEnter: P,
                        }),
                        i().createElement(
                            'div',
                            {
                                className: o()(G, t.track),
                                onMouseDown: (t) => {
                                    const s = b.current;
                                    if (s && 0 === t.button)
                                        if (((0, g.G)('play'), t.target === s))
                                            C({ pending: !0, offset: t.screenY - s.getBoundingClientRect().y });
                                        else {
                                            ((t) => {
                                                b.current &&
                                                    j(e, (s) => {
                                                        if (!s) return;
                                                        const r = n(e),
                                                            a = e.clampPosition(s, s.scrollTop + r * t);
                                                        e.applyScroll(a);
                                                    });
                                            })(t.screenY > s.getBoundingClientRect().y ? M.Nm.Prev : M.Nm.Next);
                                        }
                                },
                                ref: _,
                                onMouseEnter: P,
                            },
                            i().createElement('div', { ref: b, className: o()(D, t.thumb) }),
                            i().createElement('div', { className: o()(H, t.rail) }),
                        ),
                        i().createElement('div', {
                            className: o()(W, t.bottomButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(q) || 0 !== e.button || ((0, g.G)('play'), B(M.Nm.Prev));
                            },
                            onMouseUp: x,
                            ref: f,
                            onMouseEnter: P,
                        }),
                    );
                }),
                F = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                },
                U = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: s,
                    areaClassName: r,
                    scrollClassName: a,
                    scrollClassNames: l,
                    getStepByRailClick: u,
                    onDrag: d,
                }) => {
                    const m = (0, c.useMemo)(() => {
                            const e = s || {};
                            return Object.assign({}, e, { base: o()(F.base, e.base) });
                        }, [s]),
                        p = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: o()(F.defaultScroll, n), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(F.area, r) },
                            i().createElement(Z, { className: a, classNames: l, api: p }, e),
                        ),
                        i().createElement(Y, { getStepByRailClick: u, api: t, onDrag: d, classNames: m }),
                    );
                },
                Z = ({ className: e, classNames: t, children: n, api: s }) => (
                    (0, c.useEffect)(() => (0, l.v)(s.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: o()(F.base, e), ref: s.wrapperRef, onWheel: s.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(F.content, null == t ? void 0 : t.content), ref: s.contentRef },
                            n,
                        ),
                    )
                );
            Z.Default = U;
            const Q = { Vertical: r, Horizontal: s };
            let J;
            !(function (e) {
                (e[(e.Idle = 0)] = 'Idle'),
                    (e[(e.Start = 1)] = 'Start'),
                    (e[(e.Between = 2)] = 'Between'),
                    (e[(e.End = 3)] = 'End');
            })(J || (J = {}));
            const K = 'ScrollWithLips_base_25',
                ee = 'ScrollWithLips_lip_da',
                te = 'ScrollWithLips_lip__top_34',
                ne = 'ScrollWithLips_lip__bottom_13',
                se = 'ScrollWithLips_scroll_70',
                re = 'ScrollWithLips_scroll__loaded_12',
                ae = 'ScrollWithLips_scrollContent_1e',
                oe = ({ scrollApi: e, classNames: t, children: n, lipImage: s }) => {
                    const r = (0, c.useState)(J.Between),
                        a = r[0],
                        l = r[1],
                        u = a !== J.Idle,
                        d = (0, m.z)(() => {
                            const t = e.getBounds(),
                                n = t[0],
                                s = t[1],
                                r = e.animationScroll.scrollPosition.goal,
                                a = e.getContainerSize(),
                                o = e.getWrapperSize();
                            if (a && o)
                                if (a !== o)
                                    switch (r) {
                                        case n:
                                            l(J.Start);
                                            break;
                                        case s:
                                            l(J.End);
                                            break;
                                        default:
                                            l(J.Between);
                                    }
                                else l(J.Idle);
                        });
                    return (
                        (0, c.useEffect)(
                            () => (
                                e.events.on('change', d),
                                e.events.on('recalculateContent', d),
                                e.events.on('resizeHandled', d),
                                () => {
                                    e.events.off('change', d),
                                        e.events.off('recalculateContent', d),
                                        e.events.off('resizeHandled', d);
                                }
                            ),
                            [e.events, d],
                        ),
                        i().createElement(
                            'div',
                            { className: o()(K, (null == t ? void 0 : t.base) || '') },
                            a !== J.Start &&
                                a !== J.Idle &&
                                i().createElement('div', {
                                    className: o()(ee, te, (null == t ? void 0 : t.lip) || ''),
                                    style: { backgroundImage: `url(${s})` },
                                }),
                            a !== J.End &&
                                a !== J.Idle &&
                                i().createElement('div', {
                                    className: o()(ee, ne, (null == t ? void 0 : t.lip) || ''),
                                    style: { backgroundImage: `url(${s})` },
                                }),
                            i().createElement(
                                Q.Vertical.Area,
                                { api: e, className: o()(ae, (null == t ? void 0 : t.scrollContent) || '') },
                                n,
                            ),
                            i().createElement(Q.Vertical.Bar, {
                                api: e,
                                classNames: { base: o()(se, u && re, null == t ? void 0 : t.scrollBar) },
                            }),
                        )
                    );
                };
        },
        8043: (e, t, n) => {
            n.d(t, { e: () => s });
            const s = {
                icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
                shine: { opacityCustom: 0.15, opacityCustomNewBox: 0.4, opacityDiff: 0.15, animationDuration: '40s' },
            };
        },
        1717: (e, t, n) => {
            n.d(t, { X: () => s });
            const s = {
                hasIdle: !0,
                vignette: { isEnabled: !0, opacity: 0.4 },
                tabsGuaranteedCount: 10,
                accentCount: 5,
                hoverZone: { width: '38%', height: '39%', horizontalOffset: '30.8%', verticalOffset: '39%' },
                backgroundColor: '#111',
            };
        },
        4201: (e, t, n) => {
            n.d(t, { g: () => l });
            var s = n(8043),
                r = n(1717),
                a = n(5696),
                o = n(5e3);
            const l = { ENTRY_POINT: s.e, HAS_BOXES_VIEW: r.X, INFO_PAGE: a.q, REWARDS: o.O };
        },
        5696: (e, t, n) => {
            n.d(t, { q: () => s });
            const s = { hasDescription: !0 };
        },
        5e3: (e, t, n) => {
            n.d(t, { O: () => s });
            const s = { accentCount: 5 };
        },
        9606: (e, t, n) => {
            n.d(t, { e: () => s });
            const s = { icon: { emptyIconBrightness: 0.2 } };
        },
        2735: (e, t, n) => {
            n.d(t, { X: () => s });
            const s = { hasIdle: !1, tabsGuaranteedCount: 5 };
        },
        5096: (e, t, n) => {
            n.d(t, { j: () => o });
            var s = n(9606),
                r = n(2735),
                a = n(4607);
            const o = { ENTRY_POINT: s.e, HAS_BOXES_VIEW: r.X, INFO_PAGE: a.q };
        },
        4607: (e, t, n) => {
            n.d(t, { q: () => s });
            const s = { hasDescription: !0 };
        },
        3460: (e, t, n) => {
            n.d(t, { v: () => r });
            var s = n(5096);
            const r = { DEFAULT_CONFIG: n(4201).g, anniversaryCN: s.j };
        },
        9217: (e, t, n) => {
            n.d(t, { k: () => r });
            var s = n(2065);
            const r = (e, t) => {
                const n = (0, s.$)(e, t),
                    r = n.split(':')[0];
                return { src: n, type: r };
            };
        },
        1440: (e, t, n) => {
            n.d(t, { i: () => o });
            var s = n(3649),
                r = n(3460),
                a = n(4201);
            const o = (e, t) => {
                const n = r.v[(0, s.TD)(e)];
                return n
                    ? ((e, t) => {
                          const n = (e, t) => {
                              const s = Object.assign({}, e);
                              for (const e in s) {
                                  var r, a;
                                  t &&
                                      e in t &&
                                      ('object' == typeof s[e]
                                          ? (s[e] = n(s[e], null != (r = t[e]) ? r : s[e]))
                                          : (s[e] = null != (a = t[e]) ? a : s[e]));
                              }
                              return s;
                          };
                          return n(e, t);
                      })(a.g[t], n[t])
                    : a.g[t];
            };
        },
        2065: (e, t, n) => {
            n.d(t, { $: () => r, H: () => a });
            var s = n(3905);
            const r = (e, t) => o(e, t),
                a = (e, t) => o(e, t),
                o = (e, t) => {
                    const n = t && !t.includes(s.TP),
                        r = e && !e.includes(s.TP);
                    return n ? t : r ? e : t || e;
                };
        },
    },
]);
