import { r as e } from './rolldown-runtime.js';
import {
    $n as t,
    $t as r,
    Ar as s,
    At as a,
    Ci as i,
    Cr as o,
    Fi as n,
    G as d,
    Ii as u,
    In as l,
    Ir as c,
    It as g,
    Lt as m,
    On as _,
    Or as p,
    Qn as f,
    Ri as h,
    Rn as v,
    Sn as C,
    Sr as w,
    Tn as y,
    Un as b,
    Vi as x,
    Wn as I,
    Zn as k,
    Zt as j,
    _r as P,
    en as A,
    hi as N,
    j as M,
    jn as B,
    jt as S,
    k as q,
    kn as L,
    li as z,
    mi as G,
    mr as H,
    nr as Q,
    ri as V,
    ui as E,
    vr as K,
    yi as T,
    yr as $,
} from './lib.js';
import { n as W } from './vendor.js';
import { b as D, v as O, y as F } from './sound.js';
import { n as U, o as Z, r as X } from './utils.js';
import { t as Y } from './number_animation.js';
import { n as J, t as ee } from './key_icon.js';
var te = e(h(), 1),
    re = K(),
    se = {
        umg_widget_quest_progress: 'umg_widget_quest_progress',
        umg_widget_quest_complete: 'umg_widget_quest_complete',
        umg_widget_quest_reward: 'umg_widget_quest_reward',
        umg_widget_quest_disappear: 'umg_widget_quest_disappear',
        umg_widget_block_move: 'umg_widget_block_move',
        umg_widget_block_stop: 'umg_widget_block_stop',
        umg_widget_quest_complete_secondary: 'umg_widget_quest_complete_secondary',
        umg_widget_quest_reward_secondary: 'umg_widget_quest_reward_secondary',
        umg_widget_quest_disappear_secondary: 'umg_widget_quest_disappear_secondary',
        umg_widget_quest_complete_all: 'umg_widget_quest_complete_all',
        umg_widget_quest_progress_secondary: 'umg_widget_quest_progress_secondary',
        umg_widget_quest_backlog: 'umg_widget_quest_backlog',
        umg_widget_event_appear: 'umg_widget_event_appear',
        umg_widget_event_hover_loop: 'umg_widget_event_hover_loop',
        umg_widget_event_hover_loop_stop: 'umg_widget_event_hover_loop_stop',
        umg_widget_event_timer: 'umg_widget_event_timer',
        umg_widget_event_inactive: 'umg_widget_event_inactive',
        umg_widget_event_reward: 'umg_widget_event_reward',
        umg_widget_event_timer_simple: 'umg_widget_event_timer_simple',
    },
    ae = Object.values(se).reduce((e, t) => ({ ...e, [t]: B(t) }), {}),
    ie = (0, te.createContext)(null);
function oe(e, t, r = e) {
    return e + '+' + t + '+' + r;
}
function ne(e, t, ...r) {
    let s = e.current;
    if (0 == r.length) return !1;
    for (let a = 0; a < r.length - 1; a++) {
        const e = r[a];
        ((s[e] = s[e] ?? {}), (s = s[e]));
    }
    return ((s[r[r.length - 1]] = t), !0);
}
function de(e, ...t) {
    const r = (e, s) => {
        if (s === t.length) return M(e);
        const a = t[s];
        return a in e && ((s === t.length - 1 || r(e[a], s + 1)) && delete e[a], M(e));
    };
    return r(e.current, 0);
}
function ue(e, ...t) {
    let r = e.current;
    return t.reduce((e, t) => e?.[t], r);
}
function le(e, ...t) {
    let r = e.current;
    return void 0 !== t.reduce((e, t) => e?.[t], r);
}
function ce(e, t, r, s) {
    Object.entries(t).forEach(([t, a]) => {
        M(a)
            ? le(r, e, t, e) && s(t, e)
            : Object.entries(a).forEach(([a, i]) => {
                  const o = a || e;
                  le(r, e, t, o) && s(t, o, i);
              });
    });
}
function ge({ storage: e, id: t, emitter: r, providerCfg: s }) {
    le(e, t) || me({ id: t, emitter: r, providerCfg: s });
}
function me({ id: e, emitter: t, providerCfg: r }) {
    const s = r?.triggerId || e;
    (t.trigger(s, { id: e, ...r?.triggerParams }), r?.triggerCallback?.({ id: e, ...r?.triggerParams }));
}
function _e({ sound: e, soundCfg: t }) {
    e && t && ('string' == typeof t ? e.play(t) : e.play(t.eventName, t?.event));
}
function pe({ children: e }) {
    const r = t(),
        s = (0, te.useRef)({}),
        a = (0, te.useRef)({}),
        i = (0, te.useRef)({}),
        o = L(),
        n = Q(({ id: e, animName: t, elementId: r = e }) => le(s, e, t, r)),
        d = Q((e, t, r = e) => {
            de(s, e, t, r);
        }),
        u = Q(({ id: e, animName: t, config: r, elementId: a = e }) => (ne(s, r, e, t, a), () => d(e, t, a))),
        l = Q(({ id: e, animName: t, elementId: r = e, animCallParams: a, providerCfg: i, soundCfg: n }) => {
            const d = ue(s, e, t, r);
            (d && (i?.skip ? d.skip({ ...a, ...i?.animCallParams }) : d.start({ ...a, ...i?.animCallParams })),
                _e({ sound: o, soundCfg: n }));
        }),
        c = Q(({ id: e, animName: t, elementId: s = e, providerCfg: i = {} }) => {
            const o = r.on(oe(e, t, s), () => {
                (de(a, e, t, s), ge({ storage: a, id: e, emitter: r, providerCfg: i }), o());
            });
            ne(a, !0, e, t, s);
        }),
        g = Q(({ complexId: e, id: t, animName: s, elementId: a = t, providerCfg: o }) => {
            const n = r.on(oe(t, s, a), function () {
                    (!(function ({
                        storage: e,
                        complexId: t,
                        groupId: r,
                        animName: s,
                        elementId: a,
                        emitter: i,
                        providerCfg: o,
                    }) {
                        let n = ue(e, t, r, s);
                        n &&
                            (n.delete(a),
                            n.size || de(e, t, r, s),
                            ge({ storage: e, id: t, emitter: i, providerCfg: o }));
                    })({ storage: i, complexId: e, groupId: t, animName: s, elementId: a, emitter: r, providerCfg: o }),
                        n());
                }),
                d = ue(i, e, t, s);
            d ? d.add(a) : ne(i, new Set().add(a), e, t, s);
        }),
        m = Q(({ groupId: e, groupCfg: t, providerCfg: i, soundCfg: n }) => {
            (de(a, e),
                i?.skip ||
                    i?.skipTrigger ||
                    ce(e, t, s, (t, r) => {
                        c({ id: e, animName: t, elementId: r, providerCfg: i });
                    }),
                ce(e, t, s, (t, r, s) => {
                    l({ id: e, animName: t, elementId: r, animCallParams: s, providerCfg: i });
                }),
                _e({ sound: o, soundCfg: n }),
                i?.skip && !i?.skipTrigger && me({ id: e, emitter: r, providerCfg: i }));
        }),
        _ = Q(({ complexId: e, complexCfg: t, providerCfg: a, soundCfg: n }) => {
            if ((de(i, e), !a?.skip && !a?.skipTrigger))
                for (let [r, i] of Object.entries(t))
                    ce(r, i, s, (t, s) => {
                        g({ complexId: e, id: r, animName: t, elementId: s, providerCfg: a });
                    });
            for (let [r, i] of Object.entries(t))
                ce(r, i, s, (e, t, s) => {
                    l({ id: r, animName: e, elementId: t, animCallParams: s, providerCfg: a });
                });
            (_e({ sound: o, soundCfg: n }), a?.skip && !a?.skipTrigger && me({ id: e, emitter: r, providerCfg: a }));
        }),
        p = (0, te.useMemo)(
            () => ({
                registerAnimation: u,
                unRegistrateAnimation: d,
                startAnimation: l,
                startGroupAnimation: m,
                startComplexAnimation: _,
                checkRegisteredInStorage: n,
                emitter: r,
            }),
            [n, r, u, l, _, m, d],
        );
    return (0, re.jsx)(ie.Provider, { value: p, children: e });
}
var fe = te.createContext(void 0);
function he() {
    const e = (0, te.useContext)(fe);
    return (s(void 0 !== e, 'WidgetAnimationContext is undefined'), e);
}
var ve = { small: 'small', medium: 'medium', big: 'big' },
    Ce = 'full',
    we = 'medium',
    ye = 'small',
    be = { appear: 'appear', fadeIn: 'fadeIn', slideUpIn: 'slideUpIn' },
    xe = { battlePass: 'battlePass', events: 'events', missions: 'missions' },
    Ie = { from: { y: 0, x: 0, opacity: 0, height: 0, width: 0 } },
    ke = { duration: 400, easing: je };
function Re(e) {
    const t = new Map();
    for (let r = 0; r <= e.length; r++) {
        const s = e[r];
        t.set(s, { rowIndex: r, columnIndex: 0, size: Ce });
    }
    return t;
}
function je(e) {
    return -(Math.cos(Math.PI * e) - 1) / 2;
}
function Pe(e, t, r, s = !0) {
    const a = r.getCardAnimationProps(e),
        i = r.getCardRow(e),
        o = r.getMaxCardRow(t),
        n = r.getVisibleRowsAmount(),
        d = s ? ke.duration : 0,
        u = t.includes(e);
    return {
        from: u ? { ...a, opacity: 0 } : {},
        to: a,
        delay: u ? d + Math.max(100 * (n - o), 0) : Math.max(100 * (n - o - i), 0),
        config: ke,
    };
}
function Ae(e) {
    return { to: { x: E(z(e) + 100), opacity: 0 }, config: { duration: 500, easing: n.easeInCubic } };
}
function Ne(e, t, r) {
    const s = e.dataset.id,
        a = t.getCard(s),
        i = t.getCardHeight(s);
    if (!a || !i) return '';
    const o = z(a.getPropValue('opacity')),
        n = z(a.getPropValue('height'));
    if (n < i || 0 === o) return '';
    const d = z(a.getPropValue('width')),
        u = z(a.getPropValue('y')),
        l = z(a.getPropValue('x')),
        c = t.getCardSize(s) !== Ce,
        g = Math.round(l),
        m = Math.round(l + d) - 1,
        _ = Math.round(u),
        p = { top: `H${g}x${_}`, bottom: `H${g}x${Math.round(u + n) - 1}`, left: `V${_}x${g}`, right: `V${_}x${m}` },
        f = {};
    return (
        Object.keys(p).forEach((e) => {
            const t = !r.has(p[e]) || (c && ('top' === e || 'bottom' === e));
            (t && r.add(p[e]), (f[e] = t));
        }),
        (function (e) {
            return [e?.top, e?.right, e?.bottom, e?.left].map((e) => (void 0 === e || e ? '1rem' : '0')).join(' ');
        })(f)
    );
}
var Me = {
        [ve.small]: { gap: 0, cardWidth: 241, cardHeight: 54 },
        [ve.medium]: { gap: 0, cardWidth: 319, cardHeight: 74 },
        [ve.big]: { gap: 0, cardWidth: 401, cardHeight: 92 },
    },
    Be = { [Ce]: 1, [we]: 0.5, [ye]: 1 / 3 };
function Se(e, t) {
    return { ...Me[e], ...t?.[e] };
}
function qe(e) {
    return Array.from(e.entries()).sort((e, t) => e[1].position - t[1].position);
}
var Le = class {
        _widgetConfig;
        _sortedGroups;
        _cards = new Map();
        _cachedLayout;
        constructor(e) {
            ((this._widgetConfig = e), (this._sortedGroups = qe(this._widgetConfig.groups)));
        }
        get _layout() {
            return (void 0 === this._cachedLayout && (this._cachedLayout = this._buildLayout()), this._cachedLayout);
        }
        _buildLayout() {
            const e = {
                sortedCards: [],
                animationProps: new Map(),
                groupCardIds: new Map(),
                cardToRow: new Map(),
                cardSizes: new Map(),
                rowsAmountByGroup: new Map(),
                visibleRowsAmount: 0,
            };
            var t;
            ((e.sortedCards = qe(this._cards)),
                (t = e.groupCardIds),
                e.sortedCards.forEach(([e, { groupId: r }]) => {
                    (t.has(r) || t.set(r, []), t.get(r)?.push(e));
                }));
            let r = 0,
                s = 0;
            return (
                this._sortedGroups.forEach(([t, a]) => {
                    const i = e.groupCardIds.get(t);
                    if (!i) return;
                    const {
                        gap: o,
                        cardHeight: n,
                        cardWidth: d,
                        maxRowsAmount: u,
                    } = Se(this._widgetConfig.size, a.adaptive);
                    r > 0 && o && (r += E(o));
                    const l = E(n),
                        c = i.filter((e) => this._cards.get(e)?.visible),
                        g = (a.layoutCreator || Re)(c);
                    let m = 0;
                    for (const _ of i) {
                        const t = g.get(_);
                        if (!t) {
                            e.animationProps.set(_, Ie);
                            continue;
                        }
                        const { rowIndex: a, columnIndex: i, size: o } = t,
                            n = Math.ceil(d * Be[o]),
                            c = a + 1,
                            p = s + c,
                            f = void 0 === u || c <= u;
                        (e.cardToRow.set(_, p),
                            e.cardSizes.set(_, o),
                            e.animationProps.set(_, {
                                height: l,
                                width: E(n),
                                opacity: f && this._widgetConfig.visibleRowsAmount >= p ? 1 : 0,
                                x: E(i * (n - 1)),
                                y: r + a * (l - 1),
                            }),
                            f && (m = Math.max(c, m)));
                    }
                    ((r += (l - 1) * m), (s += m), e.rowsAmountByGroup.set(t, m));
                }),
                (e.visibleRowsAmount = s),
                e
            );
        }
        clearCachedLayout() {
            this._cachedLayout = void 0;
        }
        register(e, t) {
            (this._cards.set(e, t), this.clearCachedLayout());
        }
        updateCard(e, t) {
            const r = this._cards.get(e);
            r && (Object.assign(r, t), this.clearCachedLayout());
        }
        unregister(e) {
            (this._cards.delete(e), this.clearCachedLayout());
        }
        updateWidgetConfig(e) {
            (Object.assign(this._widgetConfig, e),
                void 0 !== e.groups && (this._sortedGroups = qe(this._widgetConfig.groups)),
                this.clearCachedLayout());
        }
        getCard(e) {
            return this._cards.get(e);
        }
        getCardAnimationProps(e) {
            return this._layout.animationProps.get(e) || Ie;
        }
        getCardRow(e) {
            return this._layout.cardToRow.get(e) || 0;
        }
        getCardSize(e) {
            return this._layout.cardSizes.get(e) || Ce;
        }
        getCardHeight(e) {
            const t = this.getCard(e)?.groupId;
            if (!t) return;
            const r = this._widgetConfig.groups.get(t);
            return Se(this._widgetConfig.size, r?.adaptive).cardHeight;
        }
        getMaxCardRow(e) {
            return Math.max(...e.map((e) => this.getCardRow(e)));
        }
        getVisibleRowsAmount() {
            return this._layout.visibleRowsAmount;
        }
        getGroupCardIds(e) {
            return this._layout.groupCardIds.get(e) || [];
        }
        findMaxVisibleRowsInGroup(e) {
            const t = this._widgetConfig.groups.get(e);
            if (!t) return 0;
            let r = 0;
            for (let s = 0; s < this._sortedGroups.length; s++) {
                const [a] = this._sortedGroups[s];
                if (a === e) {
                    const { maxRowsAmount: e } = Se(this._widgetConfig.size, t.adaptive),
                        s = this._widgetConfig.visibleRowsAmount - r;
                    return e ? Math.min(s, e) : s;
                }
                const i = this._layout.rowsAmountByGroup.get(a);
                i && (r += i);
            }
            return 0;
        }
        isCardDisplaying(e) {
            return void 0 !== this._layout.cardToRow.get(e);
        }
        async runCardAnimations(e) {
            await Promise.all(
                this._layout.sortedCards.map(async ([t, r]) => {
                    const s = e(t, r);
                    s && (await r.startLayoutAnimation(s));
                }),
            );
        }
    },
    ze = {
        base: 'Card_34b46b55',
        base__hovered: 'Card_base__hovered_5ff6e07e',
        base__active: 'Card_base__active_2ce4949c',
        bg: 'Card_bg_3146d9e8',
        base__extraLarge: 'Card_base__extraLarge_f4c22d1c',
        base__fullBorder: 'Card_base__fullBorder_f4c22d1c',
        bgHover: 'Card_bgHover_d78b3595',
    },
    Ge = {
        [be.appear]: function (e, t, r) {
            const s = Pe(e, t, r, !1);
            return { ...s, from: t.includes(e) ? { ...s.from, height: 0 } : s.from };
        },
        [be.fadeIn]: Pe,
        [be.slideUpIn]: function (e, t, r) {
            const s = Pe(e, t, r, !1);
            if (t.includes(e)) {
                const t = r.getCardAnimationProps(e).y + E(r.getCardHeight(e));
                return { ...s, from: { ...s.from, y: t } };
            }
            return s;
        },
    };
function He({ children: e, groups: t, maxVisibleRowsAmount: r }) {
    const s = H({ size: ve.small }, { large: { size: ve.medium }, extraLarge: { size: ve.big } }),
        { screenHeightRem: a } = P(),
        i =
            r ??
            (function (e) {
                return e > 900 ? (e > 1016 ? 7 : 6) : 5;
            })(a),
        { enqueue: o, runDequeue: n } = (function () {
            const e = (0, te.useRef)([]),
                t = (0, te.useRef)(!1),
                r = (0, te.useRef)(!1),
                s = Q(() => {
                    if (t.current || !r.current) return;
                    const a = e.current.shift();
                    a &&
                        ((t.current = !0),
                        a
                            .promise()
                            .then(() => {
                                ((t.current = !1), a.resolve(), s());
                            })
                            .catch(() => {
                                ((t.current = !1), a.reject(), s());
                            }));
                });
            return {
                enqueue: Q(
                    (t) =>
                        new Promise((r, a) => {
                            (e.current.push({ promise: t, resolve: r, reject: a }), s());
                        }),
                ),
                runDequeue: Q(() => {
                    ((r.current = !0), s());
                }),
            };
        })(),
        d = (0, te.useRef)(null),
        u = (0, te.useRef)(!1),
        l = (0, te.useRef)(new Le({ size: s.size, visibleRowsAmount: i, groups: t })),
        c = Q((e) => {
            const t = d.current?.querySelectorAll(`.${ze.borderHelper}`);
            t &&
                (function (e, t, r) {
                    const s = new Set();
                    r && (r.style.borderImageWidth = Ne(r, t, s));
                    for (let a = e.length - 1; a >= 0; a--) {
                        const i = e[a];
                        i !== r && (i.style.borderImageWidth = Ne(i, t, s));
                    }
                })(t, l.current, e);
        }),
        g = Q(async (e) => {
            (c(),
                await l.current.runCardAnimations((t, r) => {
                    const s = e({ id: t, settings: r });
                    if (void 0 !== s) return { ...s, onChange: () => c() };
                }),
                c());
        }),
        m = Q(async (e = !0) => {
            let t = 0,
                r = 0;
            await g(({ id: s, settings: a }) => {
                const i = l.current.getCardAnimationProps(s),
                    o = i.y,
                    n = a.getPropGoalValue('y');
                let d = 0;
                return (
                    n !== o && (0 === a.getPropGoalValue('x') && (n > o ? t++ : r++), (d = n > o ? t : r)),
                    { delay: e ? 0 : 100 * d, to: i, immediate: e, config: ke }
                );
            });
        }),
        _ = Q(async (e, t = be.appear) => {
            const r = e.filter((e) => {
                const t = l.current.getCard(e);
                return void 0 !== t && !t.visible;
            });
            if (!r.length) return;
            r.forEach((e) => {
                l.current.updateCard(e, { visible: !0 });
            });
            const s = Ge[t];
            await g((e) => s(e.id, r, l.current));
        }),
        p = Q((e, t = !0) => !(t && !l.current.getCard(e)?.visible) && l.current.isCardDisplaying(e)),
        f = (0, te.useMemo)(
            () => ({
                registerCard: (e, t) => {
                    l.current.register(e, t);
                },
                unregisterCard: (e) => {
                    l.current.unregister(e);
                },
                updateCard: (e, t) => {
                    l.current.updateCard(e, t);
                },
                isVisible: (e) => Boolean(l.current.getCard(e)?.visible),
                isUnmounting: (e) => Boolean(l.current.getCard(e)?.unmounting),
                isDisplaying: p,
                findMaxVisibleRowsInGroup: (e) => l.current.findMaxVisibleRowsInGroup(e),
                applyLayout: m,
                appear: _,
                disappear: async (e) => {
                    (l.current.updateCard(e, { visible: !1 }),
                        await g((t) => {
                            if (e === t.id) return Ae(t.settings.getPropGoalValue('x'));
                        }));
                },
                disappearGroups: async (e) => {
                    const t = [];
                    (e.forEach((e) => {
                        for (const r of l.current.getGroupCardIds(e)) t.push(r);
                    }),
                        t.forEach((e) => l.current.updateCard(e, { visible: !1, unmounting: !0 })),
                        await g((e) => {
                            const r = t.indexOf(e.id);
                            if (-1 !== r)
                                return { ...Ae(e.settings.getPropGoalValue('x')), delay: 100 * (t.length - r) };
                        }));
                },
                updateBorders: c,
                readyForAnimations: u,
                enqueue: o,
            }),
            [p, m, _, c, o, g],
        );
    return (
        (0, te.useEffect)(() => {
            (l.current.updateWidgetConfig({ size: s.size, visibleRowsAmount: i }), m());
        }, [m, s, i]),
        (0, te.useEffect)(() => {
            u.current || ((u.current = !0), n());
        }),
        (0, te.useEffect)(
            () =>
                T(() => {
                    (l.current.clearCachedLayout(), m());
                }),
            [m],
        ),
        (0, re.jsx)(fe.Provider, { value: f, children: (0, re.jsx)('div', { ref: d, children: e }) })
    );
}
var Qe = { rewardPath: 'rewardPath', quests: 'quests', keys: 'keys', shop: 'shop' },
    Ve = new Map([
        [Qe.rewardPath, { position: 0 }],
        [Qe.quests, { position: 1 }],
        [
            Qe.keys,
            { position: 2, adaptive: { [ve.small]: { gap: 18 }, [ve.medium]: { gap: 28 }, [ve.big]: { gap: 38 } } },
        ],
        [Qe.shop, { position: 3 }],
    ]),
    Ee = new Map([
        [
            Qe.rewardPath,
            {
                position: 0,
                adaptive: {
                    [ve.small]: { cardHeight: 107 },
                    [ve.medium]: { cardHeight: 147 },
                    [ve.big]: { cardHeight: 184 },
                },
            },
        ],
        [Qe.quests, { position: 1 }],
        [
            Qe.keys,
            { position: 2, adaptive: { [ve.small]: { gap: 18 }, [ve.medium]: { gap: 28 }, [ve.big]: { gap: 38 } } },
        ],
        [Qe.shop, { position: 3 }],
    ]),
    Ke = (e) => {
        const t = e?.showDelay || 400,
            r = (0, te.useRef)({ ...e.args }),
            s = (0, te.useRef)(null),
            a = v(),
            i = l({ ...e, showDelay: 0, args: r.current });
        return {
            containerRef: s,
            tooltipProps: {
                ...i,
                onMouseEnter: (o) => {
                    a.run(() => {
                        if (s.current) {
                            const t = s.current.getBoundingClientRect(),
                                a = s.current.parentElement?.getBoundingClientRect();
                            (Object.assign(r.current, e.args),
                                (r.current.positionY = Math.floor(z(t.y)) - 16),
                                (r.current.positionX = Math.floor(z(a?.x || t.x)) - 10));
                        }
                        i.onMouseEnter(o);
                    }, t);
                },
                onMouseLeave: () => {
                    (a.clear(), i.onMouseLeave());
                },
            },
        };
    };
function Te(e) {
    const t = he(),
        r = (0, te.useRef)([]),
        s = (0, te.useRef)(!1),
        [a, i] = (0, te.useState)(e);
    return (
        (0, te.useEffect)(() => {
            w.shallow(a, e) || r.current.push(e);
        }),
        (0, te.useEffect)(() => {
            if (s.current) return;
            const e = r.current.shift();
            if (!e) return;
            s.current = !0;
            const o = c(
                Object.entries(e),
                ([e, t]) => a[e] && !t,
                ([e]) => e,
            );
            t.enqueue(async () => {
                o.length && (await t.disappearGroups(o), await t.applyLayout(!1));
            }).then(() => {
                ((s.current = !1), i(e));
            });
        }),
        a
    );
}
var $e = (0, te.forwardRef)(function (
        {
            children: e,
            id: t,
            groupId: r,
            position: s,
            isDisabled: a = !1,
            visible: i = !0,
            hovered: o = !1,
            active: n = !0,
            extraLarge: d = !1,
            hasFullBorder: l = !1,
            leaveSound: c,
            hoverSound: g = N.highlight,
            clickSound: m = N.click,
            className: _,
            onClick: p,
            onHover: h,
            onActive: v,
            onMouseEnter: w,
            onMouseLeave: y,
            ...x
        },
        R,
    ) {
        const j = he(),
            [P, A] = I(() => Ie, []),
            M = (0, te.useRef)(null),
            B = (0, te.useRef)(V),
            S = Q((e) => P[e].get()),
            q = Q((e) => P[e].goal),
            L = Q(async (e) => {
                await new Promise((t) => {
                    ((B.current = t),
                        Promise.all(A.start(e)).then(() => {
                            (t(), (B.current = V));
                        }));
                });
            });
        return (
            k(() => {
                j.registerCard(t, {
                    position: s,
                    groupId: r,
                    getPropValue: S,
                    getPropGoalValue: q,
                    startLayoutAnimation: L,
                    visible: i,
                });
            }),
            f(() => {
                (B.current?.(), j.unregisterCard(t));
            }),
            (0, re.jsxs)(b.div, {
                ...x,
                style: { ...P, pointerEvents: P.opacity.to((e) => (1 === e ? 'auto' : 'none')) },
                className: u(
                    ze.base,
                    l && ze.base__fullBorder,
                    o && ze.base__hovered,
                    n && ze.base__active,
                    d && ze.base__extraLarge,
                    _,
                ),
                ref: C([R, M]),
                onClick: () => {
                    a || (G.sound(m), p());
                },
                onMouseUp: () => v && v(!1),
                onMouseEnter: (e) => {
                    (w?.(e), a || (g && G.sound(g), h && h(!0)));
                },
                onMouseLeave: () => {
                    (y?.(), a || (c && G.sound(c), h && h(!1), v && v(!1)));
                },
                onMouseDown: () => {
                    a || (v && v(!0));
                },
                children: [(0, re.jsx)('div', { className: ze.bg }), (0, re.jsx)('div', { className: ze.bgHover }), e],
            })
        );
    }),
    [We, De] = y()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ click: e.createCallbackNoArgs('onClick') }),
    ),
    Oe = {
        progressBar: 'KeyCard_progressBar_967bcc0c',
        progressBarBackgroundPattern: 'KeyCard_progressBarBackgroundPattern_268e2181',
        progressBarFillStart: 'KeyCard_progressBarFillStart_cb068963',
        progressBarBackground: 'KeyCard_progressBarBackground_e4b45087',
        base: 'KeyCard_c2a58c77',
        bg: 'KeyCard_bg_5a16d953',
        text: 'KeyCard_text_94b2676c',
        blink__anim: 'KeyCard_blink__anim_95a06489',
        blinkAnim: 'KeyCard_blinkAnim_43595af7',
        blink__hoverAnim: 'KeyCard_blink__hoverAnim_7f29eedd',
        hoverBlinkAnim: 'KeyCard_hoverBlinkAnim_43595af7',
        blink__unhoverAnim: 'KeyCard_blink__unhoverAnim_c4bd604d',
        unHoverBlinkAnim: 'KeyCard_unHoverBlinkAnim_43595af7',
        keyText: 'KeyCard_keyText_bc5b9444',
        key: 'KeyCard_key_84788ae6',
        keyIcon: 'KeyCard_keyIcon_e3907da8',
    },
    Fe = W(({ hasFullBorder: e, withBackground: t, className: r }) => {
        const { model: s, controls: o } = De(),
            { keys: n, isCompleted: d, isDisabled: l } = s.root.get(),
            { breakpoint: c } = P(),
            [g, m] = (0, te.useState)(!1),
            [_, p] = (0, te.useState)(!1),
            f = he();
        (0, te.useEffect)(() => {
            f.applyLayout();
        }, [f]);
        const h = (0, te.useRef)(n),
            v = n > 9999,
            w = v ? `${i(9999, 0)}+` : i(n, 0);
        ((0, te.useEffect)(() => {
            h.current !== n && (h.current = n);
        }, [n]),
            (0, te.useEffect)(() => {
                let e, t;
                return (
                    d ||
                        _ ||
                        g ||
                        (e = setTimeout(() => {
                            (G.sound(O),
                                (t = setInterval(() => {
                                    G.sound(O);
                                }, 25e3)));
                        }, 5e3)),
                    () => {
                        (clearTimeout(e), clearInterval(t));
                    }
                );
            }, [_, d, g]));
        const y = H({ value: J.C24x24 }, { large: { value: J.C70x70 }, extraLarge: { value: J.C86x86 } }),
            { containerRef: b, tooltipProps: x } = Ke({
                args: {
                    header: R.strings.halloween_lobby.keyCard.name(),
                    body: R.strings.halloween_tooltips.keyCard.body(),
                },
                resId: R.aliases.halloween.shared.Keys('resId'),
                contentId: R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            }),
            { containerRef: I, tooltipProps: k } = Ke({
                resId: R.aliases.halloween.shared.Keys('resId'),
                contentId: R.views.halloween.mono.lobby.tooltips.key_tooltip('resId'),
            });
        return (0, re.jsx)($e, {
            ref: C([b, I]),
            ...x,
            id: 'keys',
            groupId: Qe.keys,
            position: 0,
            onActive: (e) => p(e),
            onHover: (e) => m(e),
            hovered: g,
            active: _,
            onClick: l ? V : o.click,
            className: r,
            hasFullBorder: e,
            isDisabled: l,
            hoverSound: F,
            leaveSound: D,
            children: (0, re.jsxs)('div', {
                className: Oe.base,
                children: [
                    t && (0, re.jsx)('div', { className: Oe.bg }),
                    (0, re.jsx)(
                        a,
                        { className: Oe.text, text: R.strings.halloween_lobby.keyCard.name() },
                        `keys${c.name}`,
                    ),
                    (0, re.jsx)('div', {
                        ...k,
                        className: Oe.key,
                        children: (0, re.jsx)('div', {
                            className: u(Oe.blink, !_ && !g && n > 0 && Oe.blink__anim),
                            children: (0, re.jsxs)('div', {
                                className: u(Oe.blink, g ? Oe.blink__hoverAnim : Oe.blink__unhoverAnim),
                                children: [
                                    (0, re.jsx)('div', {
                                        className: Oe.keyText,
                                        children: v
                                            ? w
                                            : (0, re.jsx)(Y, {
                                                  isFormatted: !0,
                                                  previousNumber: h.current,
                                                  currentNumber: n,
                                              }),
                                    }),
                                    (0, re.jsx)('div', {
                                        className: Oe.keyIcon,
                                        children: (0, re.jsx)(ee, { size: y.value }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
        });
    });
function Ue(e) {
    const t = R.aliases.halloween.shared.Keys('resId');
    return (0, re.jsx)(d, {
        id: t,
        children: (0, re.jsx)(We, {
            options: (0, te.useMemo)(() => ({ rootId: t }), [t]),
            children: (0, re.jsx)(Fe, { ...e }),
        }),
    });
}
var [Ze, Xe] = y()(({ observableModel: e }) => ({ quests: e.arrayClone('quests') }), V),
    Ye = { from: { opacity: 0 }, config: { duration: 200, easing: je } },
    Je = { to: { scale: 1, opacity: 0.8 }, config: { duration: 300, easing: je } },
    et = { to: { scale: 0, opacity: 0 }, config: { duration: 300, easing: je } };
var tt = 'QuestsCard_icon_aa7c2d27',
    rt = 'QuestsCard_checkIcon_a7e06da5',
    st = 'QuestsCard_progressBar_276fd1c4',
    at = 'QuestsCard_progressBarBackgroundPattern_65cb92b3',
    it = 'QuestsCard_progressBarFillStart_89de8888',
    ot = 'QuestsCard_progressBarBackground_a0f1e9b5',
    nt = 'QuestsCard_8d427604',
    dt = 'QuestsCard_content_ab78c215',
    ut = 'QuestsCard_completedBg_b737ae28',
    lt = 'QuestsCard_bg_bbd1bff3',
    ct = 'QuestsCard_iconWrapper_80251bbc',
    gt = 'QuestsCard_description_8b4dcbff',
    mt = 'QuestsCard_progressDescription_3c939f32',
    _t = 'QuestsCard_progressValue_4d73518a',
    pt = 'QuestsCard_progress_67c003f9',
    ft = 'QuestsCard_progressTextsBlock_eee8f0d1',
    ht = 'QuestsCard_currentProgress_482c8d7e',
    vt = 'QuestsCard_delta_30b150db',
    Ct = 'QuestsCard_glow_6baa2b09',
    wt = 'QuestsCard_reward_28bd9040',
    yt = x.resolve('intl'),
    bt = (e, t, r) => {
        let s;
        return (
            (s = t === $.extraLarge ? 'c_48x48' : r ? 'c_72x72' : 'c_36x36'),
            `R.images.halloween.gui.maps.icons.gsw.conditions.${s}.${e}`
        );
    },
    xt = (0, te.forwardRef)(function (
        {
            index: e,
            id: t,
            name: s,
            conditionName: a,
            currentProgress: i,
            maximumProgress: n,
            earned: d,
            bonus: l,
            isHangar: c = !1,
            hasFullBorder: f = !1,
            className: h,
        },
        v,
    ) {
        const C = P(),
            w = H({ iconSize: 36, rewardSize: m.Small }, { extraLarge: { iconSize: 48, rewardSize: m.Big } }),
            {
                iconStyle: y,
                completedIconStyle: x,
                progressStyle: k,
                deltaGlowStyle: N,
                actualProgress: M,
            } = (function (e, t, r, s) {
                const a = t - r,
                    [i, n] = (0, te.useState)(a),
                    { play: d } = _(),
                    [u, l] = I(() => ({
                        to: { currentProgress: a, deltaLeft: 0, deltaWidth: 0 },
                        config: { duration: 1e3, easing: je },
                    })),
                    [c, g] = I(() => Ye),
                    [m, f] = I(() => Je),
                    [h, v] = I(() => et),
                    C = Q(async (t) => {
                        if (e > 0) {
                            (g.start({ opacity: 1 }), d(se.umg_widget_quest_progress));
                            const r = t < i,
                                s = o(r ? t : i, e);
                            (await Promise.all(
                                l.start({
                                    from: { currentProgress: i, deltaLeft: s, deltaWidth: r ? o(i - t, e) : 0 },
                                    to: { currentProgress: t, deltaWidth: r ? 0 : o(t, e) - s, deltaLeft: s },
                                    [r ? 'onStart' : 'onRest']: () => n(t),
                                }),
                            ),
                                g.start({ opacity: 0 }));
                        }
                    }),
                    w = Q(async () => {
                        t !== i && (await C(t));
                    }),
                    y = Q(async (t, r = !1) => {
                        if (r) return (f.start({ ...et.to, immediate: !0 }), void v.start({ ...Je.to, immediate: !0 }));
                        (C(e),
                            t && (await p(1e3)),
                            await Promise.all(f.start(et.to)),
                            d(se.umg_widget_quest_complete),
                            await Promise.all(v.start(Je.to)),
                            d(se.umg_widget_quest_reward));
                    });
                return (
                    (0, te.useImperativeHandle)(s, () => ({ playProgressAnimation: w, playCompletedAnimation: y })),
                    { progressStyle: u, actualProgress: i, deltaGlowStyle: c, iconStyle: m, completedIconStyle: h }
                );
            })(n, i, d, v),
            { containerRef: B, tooltipProps: L } = Ke({
                resId: R.aliases.halloween.shared.Quests('resId'),
                contentId: R.views.halloween.mono.lobby.tooltips.daily_quests_tooltip('resId'),
                args: { questId: t },
            });
        return (0, re.jsx)($e, {
            id: t,
            groupId: Qe.quests,
            position: e,
            ref: B,
            ...L,
            hasFullBorder: f,
            isDisabled: !0,
            className: u(nt, h),
            active: !1,
            children: (0, re.jsxs)('div', {
                className: dt,
                children: [
                    (0, re.jsx)(b.div, { style: { opacity: x.opacity }, className: ut }),
                    !c && (0, re.jsx)('div', { className: lt }),
                    (0, re.jsxs)('div', {
                        className: ct,
                        children: [
                            (0, re.jsx)(b.div, {
                                style: y,
                                className: tt,
                                children: (0, re.jsx)(A, {
                                    path: bt(a, C.breakpoint.name, C.upscale),
                                    width: w.iconSize,
                                    height: w.iconSize,
                                }),
                            }),
                            (0, re.jsx)(b.div, { style: x, className: rt }),
                        ],
                    }),
                    n > 0
                        ? (0, re.jsxs)('div', {
                              className: pt,
                              children: [
                                  (0, re.jsxs)('div', {
                                      className: ft,
                                      children: [
                                          (0, re.jsx)(j, { text: s, tooltipDisabled: !0, className: mt }),
                                          (0, re.jsx)(r, {
                                              className: _t,
                                              text: R.strings.halloween_lobby.common.progress(),
                                              params: {
                                                  value: (0, re.jsx)(b.div, {
                                                      className: ht,
                                                      children: k.currentProgress.to((e) =>
                                                          yt.formatNumber('integral', Math.ceil(e)),
                                                      ),
                                                  }),
                                                  maxValue: n,
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, re.jsxs)(q, {
                                      size: 'small',
                                      className: st,
                                      classNames: { background: ot, backgroundPattern: at },
                                      filledClassNames: { pattern: at },
                                      value: M,
                                      maxValue: n,
                                      children: [
                                          (0, re.jsx)('div', { className: it }),
                                          (0, re.jsx)(b.div, {
                                              style: {
                                                  width: k.deltaWidth.to((e) => `${e}%`),
                                                  left: k.deltaLeft.to((e) => `${e}%`),
                                              },
                                              className: vt,
                                              children: (0, re.jsx)(b.div, { style: N, className: Ct }),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, re.jsx)(j, { text: s, tooltipDisabled: !0, className: gt }),
                    (0, re.jsx)(S, {
                        name: l.name,
                        value: Z(l),
                        className: wt,
                        size: w.rewardSize,
                        special: l.overlayType,
                        image: X(l, w.rewardSize),
                        valueType: g(l.name),
                        tooltipArgs: U(l, t, R.aliases.halloween.shared.Quests('resId')),
                    }),
                ],
            }),
        });
    });
function It({ children: e }) {
    const t = R.aliases.halloween.shared.Quests('resId');
    return (0, re.jsx)(d, {
        id: t,
        children: (0, re.jsx)(Ze, { options: (0, te.useMemo)(() => ({ rootId: t }), [t]), children: e }),
    });
}
export {
    se as _,
    $e as a,
    Ee as c,
    He as d,
    be as f,
    pe as g,
    he as h,
    Ue as i,
    Ve as l,
    ve as m,
    xt as n,
    Te as o,
    xe as p,
    Xe as r,
    Ke as s,
    It as t,
    Qe as u,
    ae as v,
};
