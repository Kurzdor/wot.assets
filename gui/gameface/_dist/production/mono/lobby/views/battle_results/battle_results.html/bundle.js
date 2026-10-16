import { r as e, o as s, h as a, E as t, j as r, f as l, F as i, x as n, R as o } from '../../../chunks/vendor.js';
import {
    m as c,
    i as d,
    S as m,
    L as u,
    A as _,
    M as b,
    H as g,
    a as p,
    b as h,
    c as v,
    g as x,
    s as f,
    r as N,
    f as j,
    d as y,
    e as T,
    h as S,
    j as w,
    k as I,
    l as P,
    O as C,
    n as A,
    o as E,
    u as D,
    B as F,
    F as k,
    p as $,
    D as V,
    q,
    C as M,
    T as G,
    t as O,
    v as U,
    w as L,
    x as z,
    y as B,
    z as K,
    E as W,
    G as H,
    I as X,
    J as Z,
    K as J,
    N as Q,
    P as Y,
    Q as ee,
    R as se,
    U as ae,
    V as te,
    W as re,
    X as le,
    Y as ie,
    Z as ne,
    _ as oe,
    $ as ce,
    a0 as de,
    a1 as me,
    a2 as ue,
    a3 as _e,
    a4 as be,
    a5 as ge,
    a6 as pe,
    a7 as he,
} from '../../../chunks/lib.js';
import { g as ve, a as xe, b as fe, c as Ne } from '../../../chunks/readResource.js';
import { P as je, s as ye } from '../../../chunks/profit.js';
const Te = 'squad',
    Se = 'player',
    we = 'damage',
    Ie = 'frag',
    Pe = 'xp',
    Ce = 'tank';
var Re = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), e))(Re || {}),
    Ae = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(Ae || {}),
    Ee = ((e) => ((e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING'), e))(Ee || {});
const De = (e) => (s) => (a, t) => e.call(null, a, t) * s,
    Fe =
        (...e) =>
        (s, a) => {
            for (let t = 0; t < e.length; t++) {
                const r = e[t].call(null, s, a);
                if (0 !== r) return r;
            }
            return 0;
        },
    ke = (e, s) => {
        const a = e.toUpperCase(),
            t = s.toUpperCase();
        return a === t ? 0 : a > t ? 1 : -1;
    },
    $e = (e) => (s, a) => {
        const t = s[e],
            r = a[e];
        return 'string' == typeof t && 'string' == typeof r
            ? ke(t, r)
            : 'number' == typeof t && 'number' == typeof r
              ? t - r
              : 0;
    };
function Ve(e, s, a) {
    const t = e.parameters.get(s);
    return t
        ? (function (e) {
              return e.paramValueType === Re.Float ? e.value : Math.trunc(e.value);
          })(t)
        : a;
}
const qe = { [Ae.Asc]: Ee.ASCENDING, [Ae.Desc]: Ee.DESCENDING },
    Me = { [g]: 4, [b]: 3, [_]: 2, [u]: 1, [m]: 0 };
function Ge({ userNames: e }, { userNames: s }) {
    return ke(e.userName, s.userName);
}
function Oe(e) {
    return ({ efficiencyValues: s }, { efficiencyValues: a }) => {
        const t = Ve(s, e),
            r = Ve(a, e);
        return void 0 === t || void 0 === r ? 0 : t - r;
    };
}
function Ue(e) {
    const s = $e(e);
    return ({ vehicle: e }, { vehicle: a }) => s(e, a);
}
const Le =
        (e, ...s) =>
        (a, t) => {
            for (let r = 0; r < s.length; r++) {
                const l = e[r] ?? 0,
                    i = (0 !== l ? l : Ee.ASCENDING) * s[r].call(null, a, t);
                if (0 !== i) return i;
            }
            return 0;
        },
    ze = {
        [we]: De(Fe(Oe('damage'), Ge)),
        [Ie]: De(Fe(Oe('frag'), Ge)),
        [Pe]: De(Fe(Oe('xp'), Ge)),
        [Te]: De(
            Fe(
                (function (e) {
                    const s = $e(e);
                    return (e, a) => s(e, a);
                })('squadIndex'),
                Ge,
            ),
        ),
        [Ce]: De(
            Le(
                [0, 0, Ee.DESCENDING, Ee.DESCENDING],
                Ue('tier'),
                function (e, s) {
                    return (function (e, s) {
                        const a = Me[e],
                            t = Me[s];
                        return void 0 === a || void 0 === t
                            ? (console.error(`Unexpected type of vehicle A: ${e} B: ${s}`), 0)
                            : a === t
                              ? 0
                              : a > t
                                ? 1
                                : -1;
                    })(e.vehicle.type, s.vehicle.type);
                },
                Ue('name'),
                Ge,
            ),
        ),
        [Se]: De(Ge),
    };
function Be(e, s, a, t = ze, r = Se) {
    const l = qe[a],
        i = t[s] ?? t[r];
    return i ? c(e, d).sort(i(l)) : (console.error(`Unexpected sortType: ${s}`), e);
}
const Ke = 'allies',
    We = 'enemies',
    He = 'empty',
    Xe = e.createContext(null),
    Ze = () => {
        const s = e.useContext(Xe);
        if (!s)
            throw Error(
                'TeamTable Context not found. Make sure your component is wrapped in TeamTableConfigContext.Provider.',
            );
        return s;
    },
    Je = e.createContext(null),
    Qe = '1',
    Ye = '2',
    [es, ss] = p()(
        ({ observableModel: e }) => {
            const t = {
                    root: e.object(),
                    userStatus: e.object('userStatus'),
                    user: e.object('userNames'),
                    killer: e.object('userStatus.killer'),
                    battleInfo: e.object('battleInfo'),
                    efficiency: e.array('efficiency'),
                    rewards: e.array('rewards'),
                    premiumPlus: e.object('premiumPlus'),
                    detailsColumns: e.array('teamStats.shownValueColumns'),
                    allies: e.array('teamStats.allies'),
                    enemies: e.array('teamStats.enemies'),
                    progressRewards: e.array('progress.rewards'),
                    stageRequiredCounters: e.array('progress.stageRequiredCounters'),
                    progress: e.object('progress'),
                    ...e.primitives(
                        {
                            isSingleTeamPostbattle: 'singleTeamMode',
                            sortingColumn: 'sortType',
                            sortingOrder: 'sortDirection',
                        },
                        'teamStats',
                    ),
                    selectedTeam: s.box(He),
                    selectedPlayerId: s.box(-1),
                    currentTabId: s.box(Qe),
                    animationStatus: s.box(!0),
                },
                r = a(() => {
                    const e = f(t.allies.get(), (e) => void 0 !== e.squadIndex && e.squadIndex > 0),
                        s = f(t.enemies.get(), (e) => void 0 !== e.squadIndex && e.squadIndex > 0);
                    return e || s;
                }),
                l = a(() => {
                    const e = t.sortType.get();
                    return e !== Te || r() ? e : Pe;
                }),
                i = a(() => {
                    const e = j(t.allies.get(), (e) => e.isPersonal);
                    return e ? e.squadIndex : -1;
                }),
                n = a((e, s) => Be(t.enemies.get(), l(), t.sortDirection.get(), e, s)),
                o = a((e, s) => Be(t.allies.get(), l(), t.sortDirection.get(), e, s)),
                d = a(() => {
                    const e = t.selectedTeam.get() === Ke,
                        s = t.selectedPlayerId.get(),
                        a = e ? t.allies.get() : t.enemies.get();
                    return j(a, (e) => e.playerIndex === s);
                }),
                m = a(() => {
                    const e = t.singleTeamMode.get() ? t.enemies.get() : t.allies.get();
                    return j(e, (e) => e.isPersonal);
                }),
                u = a((e) => {
                    const s = d();
                    if (s) {
                        return N(s.detailedStatistics, (e, s) => e + 1 + s.details.length, 0) > e;
                    }
                    return !1;
                }),
                _ = a(
                    () =>
                        c(t.progressRewards.get(), (e) => ({
                            name: e.name,
                            image: S(e),
                            value: e.value,
                            special: e.overlayType,
                            valueType: T(e.name),
                            tooltipArgs: y({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                        })),
                    { equals: v },
                ),
                b = a((e) => {
                    const { previousPoints: s, maximumPoints: a, isInUnlimitedProgression: r } = t.progress.get();
                    let l = a;
                    if (!1 === r) {
                        const s = t.stageRequiredCounters.get(),
                            a = x(s, e - 1),
                            r = x(s, e - 2) ?? 0;
                        void 0 === a || a < 0
                            ? console.warn(
                                  `Progression stage's required points have a value ${a} for stage number ${e}`,
                              )
                            : (l = a - r);
                    }
                    return {
                        previous: { value: l, deltaFrom: s, maxValue: l },
                        fromZeroToEnd: { value: l, deltaFrom: 0, maxValue: l },
                    };
                }),
                g = a(() => {
                    const { maximumPoints: e, currentPoints: s, earnedPoints: a } = t.progress.get();
                    return {
                        current: { value: s, deltaFrom: s - a < 0 ? 0 : s - a, maxValue: e },
                        withoutAnimation: { value: s, deltaFrom: s, maxValue: e },
                    };
                });
            return {
                ...t,
                computes: {
                    personalSquadIndex: i,
                    enemiesSorted: n,
                    alliesSorted: o,
                    selectedPlayer: d,
                    currentPlayer: m,
                    hasDetailedInfoScroll: u,
                    hasSquads: r,
                    activeSortingType: l,
                    progressionValues: g,
                    progressionValuesWithStageMaximum: b,
                    rewards: _,
                },
            };
        },
        ({
            externalModel: e,
            model: {
                currentTabId: s,
                sortType: a,
                sortDirection: t,
                selectedTeam: r,
                selectedPlayerId: l,
                animationStatus: i,
            },
        }) => ({
            closeWindow: e.createCallbackNoArgs('onClose'),
            riseRewards: e.createCallbackNoArgs('premiumPlus.onPremiumXpBonusApplied'),
            updateNextBonusTime: e.createCallback((e) => ({ isUpdate: e }), 'premiumPlus.onNextBonusTimeUpdate'),
            saveStatsSorting: e.createCallback((e, s) => ({ column: e, sortDirection: s }), 'teamStats.onStatsSorted'),
            ...h({
                updateTeamTableSelectedPlayer: (e, s) => {
                    (r.set(e), l.set(s));
                },
                updateTeamTableSorting: (e, s) => {
                    (a.set(e), t.set(s));
                },
                updateCurrentTabId: (e) => {
                    s.set(e);
                },
                setAnimationEnabled: (e) => {
                    i.set(e);
                },
            }),
        }),
    ),
    as = { [Te]: 'platoon', [Ie]: 'kills', [Pe]: 'xp', [Ce]: 'vehicle', [we]: 'damage' },
    ts = [Te, Se, we, Ie, Pe, Ce],
    rs = [Te, Ce, Se],
    ls = {
        tableWidth: [498, 770],
        fixedCells: { [Te]: [34, 34], [Se]: [178, 273], [Ce]: [142, 283] },
        configurableCells: [144, 180],
        playerCellOffset: 16,
    },
    is = [w.Large, w.ExtraLarge],
    ns = R.images.gui.maps.icons.vehicle,
    os = (e) => e.toString().padStart(2, '0');
function cs(e) {
    const s = ns.c_420x307.$dyn(e.toLowerCase());
    return s ? { backgroundImage: `url(${s})` } : { backgroundImage: `url(${ns.c_420x307.default_image()})` };
}
function ds(e, s) {
    const a = ns.$dyn(
        (function (e, s) {
            return `${e}_${s}`.replace('-', '_');
        })(s, e),
    );
    return a ? { backgroundImage: `url(${a})` } : { backgroundImage: `url(${ns.noImage()})` };
}
function ms(e, s) {
    const a = ve(s, !0)?.battle_results,
        t = ve(e)?.library;
    return us(a, t, 'battle_results_bg');
}
function us(e, s, a = '') {
    return a && '' !== a ? (e?.$dyn(a) ?? s.$dyn(a)) : null;
}
function _s(e, s = '{minutes}:{seconds}.{milliseconds}', a = 0, t = '-') {
    if (e <= a) return t;
    let r = 10 * Math.round((e * P) / 10);
    const l = Math.trunc(r / (C * P));
    r -= l * (C * P);
    const i = Math.trunc(r / P);
    r -= i * P;
    const n = Math.round(r / 10);
    return I(s, { minutes: os(l), seconds: os(i), milliseconds: os(n) });
}
const bs = e.createContext(void 0);
function gs() {
    const s = e.useContext(bs);
    return (A(void 0 !== s, 'useRace must be used under raceContext.Provider'), s);
}
const ps = 'Background_6fcc2e9b',
    hs = 'Background_base__team_33e27723',
    vs = 'Background_overlay_3abad625',
    xs = 'Background_shine_faa4c143',
    fs = E.resolve('images'),
    Ns = t(function () {
        const { model: e } = ss(),
            { position: s, topPlace: a } = gs(),
            { assetsPointer: t, subModeAssetsPointer: i } = e.battleInfo.get(),
            n = e.currentTabId.get(),
            o = `${xe(t, !0)}.battle_results.personal`,
            c = ms(t, i);
        return r.jsxs('div', {
            className: l(ps, n === Ye && hs),
            style: { backgroundImage: `url('${c}')` },
            children: [
                n === Ye && r.jsx('div', { className: vs }),
                a &&
                    n === Qe &&
                    r.jsx('div', {
                        className: xs,
                        style: { backgroundImage: `url('${fs.readOrEmpty(`${o}.bigShine${s}`)}')` },
                    }),
            ],
        });
    }),
    js = E.resolve('strings'),
    ys = t(function ({ ...e }) {
        const { size: s } = D({ size: F.sizes.medium }, { large: { size: F.sizes.large } });
        return r.jsx(F, {
            theme: F.themes.primary,
            size: s,
            ...e,
            children: r.jsx(k, { text: js.readOrEmpty('R.strings.fun_battle_results.continueBtn') }),
        });
    }),
    Ts = 'Footer_f51bab46',
    Ss = 'Footer_content_d9781467',
    ws = 'Footer_date_d0687d01',
    Is = 'Footer_left_4308958a',
    Ps = 'Footer_right_4e012daf',
    Cs = 'Footer_top_38bf7305',
    Rs = 'Footer_bottom_53b70510',
    As = 'Footer_dot_b5c004a2',
    Es = 'Footer_player_9943fab5',
    Ds = 'Footer_button_43641369',
    Fs = 'Footer_base__teams_4308958a',
    ks = E.resolve('strings');
function $s(e, s) {
    return e
        ? ks.readOrEmpty('R.strings.fun_battle_results.resultRace.footerSubtitle.inTop')
        : ks.readOrEmpty(`R.strings.fun_battle_results.resultRace.footerSubtitle.${s}`);
}
const Vs = t(function () {
        const { model: e, controls: s } = ss(),
            { topPlace: a } = gs(),
            t = e.battleInfo.get(),
            l = e.currentTabId.get(),
            n = e.computes.currentPlayer();
        return (
            $(s.closeWindow),
            r.jsxs('div', {
                className: i(Ts, l === Ye && Fs),
                children: [
                    r.jsxs('div', {
                        className: Ss,
                        children: [
                            r.jsxs('div', {
                                className: Is,
                                children: [
                                    r.jsxs('div', {
                                        className: Cs,
                                        children: [
                                            t.modeName,
                                            r.jsx('div', { className: As }),
                                            t.arenaName,
                                            r.jsx('div', { className: As }),
                                            n?.vehicle.name,
                                        ],
                                    }),
                                    r.jsx('div', {
                                        className: Rs,
                                        children: r.jsx(k, {
                                            text: ks.readOrEmpty(
                                                'R.strings.fun_battle_results.resultRace.footerSubtitle.battleEnded',
                                            ),
                                            params: {
                                                time: r.jsx('div', {
                                                    className: ws,
                                                    children: r.jsx(V, {
                                                        datetime: t.battleStartTime + t.battleDuration,
                                                        format: q.ShortDateTime,
                                                    }),
                                                }),
                                            },
                                        }),
                                    }),
                                ],
                            }),
                            r.jsxs('div', {
                                className: Ps,
                                children: [
                                    t.finishReason && r.jsx('div', { className: Cs, children: t.finishReason }),
                                    r.jsxs('div', {
                                        className: Rs,
                                        children: [
                                            $s(a, t.winStatus),
                                            r.jsx('div', { className: As }),
                                            r.jsx('div', {
                                                className: Es,
                                                children: r.jsx(M, { ...n?.userNames, isKilled: !1, isTeamKiller: !1 }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    r.jsx('div', { className: Ds, children: r.jsx(ys, { onClick: s.closeWindow }) }),
                ],
            })
        );
    }),
    qs = E.resolve('strings'),
    Ms = t(() => {
        const { model: e } = ss(),
            { subModeAssetsPointer: s } = e.battleInfo.get(),
            a = fe({ assetsPointer: s, isSubMode: !0, poFileName: 'fun_battle_results', path: 'navigation' }),
            t = [
                { id: Qe, label: qs.readOrEmpty(`${a}.battleResults`) },
                { id: Ye, label: qs.readOrEmpty(`${a}.teamEfficiency`) },
            ];
        return r.jsx(G.Switcher, {
            children: t.map(({ id: e, label: s }) => r.jsx(G.Tab, { tabId: e, children: r.jsx(O, { text: s }) }, e)),
        });
    }),
    Gs = 'LifeStatus_ac2cf2c3',
    Os = 'LifeStatus_killer_cac4dca7',
    Us = E.resolve('strings'),
    Ls = 'R.strings.battle_results.common.vehicleState',
    zs = ({ player: s }) => {
        const { isLeftBattle: a, deathReason: t, killer: l } = s.userStatus,
            { userName: i, isKilled: n } = s.userNames,
            o = Us.readOrEmpty(`${Ls}.${a && s.isPersonal ? 'prematureLeave' : 'alive'}`);
        return r.jsx('div', {
            className: Gs,
            children:
                !a && n
                    ? r.jsxs('div', {
                          className: Os,
                          children: [
                              Us.readOrEmpty(`${Ls}.dead${t}`),
                              l.userName !== i &&
                                  r.jsxs(e.Fragment, {
                                      children: [
                                          r.jsx(U, { text: R.strings.common.common.nbsp() }),
                                          r.jsx(M, { ...l }),
                                      ],
                                  }),
                          ],
                      })
                    : r.jsx('div', { className: Os, children: o }),
        });
    },
    Bs = 'PlayerVehicleInfo_6f34f0a1',
    Ks = 'PlayerVehicleInfo_level_a033807d',
    Ws = 'PlayerVehicleInfo_level__left_5e2bb270',
    Hs = 'PlayerVehicleInfo_type_23375252',
    Xs = 'PlayerVehicleInfo_vehicleName_55830539',
    Zs = 'PlayerVehicleInfo_igr_3f08d9b9';
var Js = ((e) => ((e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT'), e))(Js || {});
const Qs = (e, s) => {
        const a = e.replace(':', '_').replace(/-/g, '_');
        return {
            maskImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.types.$dyn(a)})`,
            backgroundColor: s,
        };
    },
    Ys = e.memo(
        ({
            vehicleLevel: e,
            vehicleType: s,
            vehicleShortName: a,
            userNames: t,
            isPersonal: l = !1,
            isSameSquad: n = !1,
            killed: o = !1,
            isIGR: c = !1,
            alignment: d = 1,
        }) => {
            const { isTeamKiller: m } = t,
                u = L({ isTeamKiller: m, isKilled: o, isPersonal: l, isSameSquad: n }),
                _ = z(e);
            return r.jsxs('div', {
                className: Bs,
                style: { color: u },
                children: [
                    r.jsx('div', { className: i(Ks, 0 === d && Ws), children: _ }),
                    r.jsx('div', { className: Hs, style: Qs(s, u) }),
                    r.jsx('div', { className: Xs, children: a }),
                    c && r.jsx('div', { className: Zs }),
                ],
            });
        },
    );
var ea = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
    ea || {},
);
const sa = {
        row: 'StatisticsInfoRow_row_e48b601d',
        row__subgroup: 'StatisticsInfoRow_row__subgroup_a9c1f556',
        separator: 'StatisticsInfoRow_separator_919051ba',
    },
    aa = ({ label: e, value: s, paramValueType: a, isSubgroup: t = !1 }) => {
        const l = c(s, (e) =>
                ((e, s) => {
                    switch (e) {
                        case ea.Integer:
                            return window.systemLocale.getNumberFormat(s, 0);
                        case ea.Float:
                            return window.systemLocale.getRealFormat(s, 0, 2);
                        case ea.Time:
                            return window.systemLocale.getTimeFormat(s, 1);
                        default:
                            return s;
                    }
                })(a, e),
            ).join(' / '),
            n = i(sa.row, t && sa.row__subgroup);
        return r.jsxs('div', {
            className: n,
            children: [
                e,
                r.jsx('span', { className: sa.separator }),
                r.jsx('span', { className: sa.value, children: l }),
            ],
        });
    },
    ta = {},
    ra = ({ item: e }) =>
        r.jsxs('div', {
            className: ta.group,
            children: [
                r.jsx(aa, { isSubgroup: !1, ...e }),
                e.details.length > 0 && c(e.details, (e, s) => r.jsx(aa, { isSubgroup: !0, ...e }, s)),
            ],
        }),
    la = 'StatisticsInfoRows_4ea1e421',
    ia = t(() => {
        const { model: e } = ss(),
            s = e.computes.selectedPlayer();
        return r.jsx('div', { className: la, children: c(s.detailedStatistics, (e, s) => r.jsx(ra, { item: e }, s)) });
    }),
    na = 'StatisticsInfo_eb64394d',
    oa = 'StatisticsInfo_content_85855757',
    ca = t(() => {
        const { model: e } = ss(),
            s = B(),
            a = e.computes.hasDetailedInfoScroll(23);
        return r.jsx('div', {
            className: na,
            children: a
                ? r.jsx(K.Vertical.Area.Default, { className: oa, api: s, children: r.jsx(ia, {}) })
                : r.jsx(ia, {}),
        });
    }),
    da = 'DetailedStats_3607b852',
    ma = 'DetailedStats_header_1b47cff5',
    ua = 'DetailedStats_vehicleInfo_c9968f40',
    _a = 'DetailedStats_playerName_3407b29',
    ba = 'DetailedStats_vehicleIcon_8467dc55',
    ga = 'DetailedStats_playerSummary_851053c5',
    pa = 'DetailedStats_close_5f15f38e',
    ha = 'DetailedStats_closeText_4153511a',
    va = 'DetailedStats_stats_e5faaeef',
    xa = t(() => {
        const { model: e, controls: s } = ss(),
            a = e.computes.personalSquadIndex(),
            t = e.computes.selectedPlayer(),
            { userNames: l, squadIndex: i, isPersonal: n, vehicle: o } = t,
            { isKilled: c } = l,
            { tier: d, type: m, name: u, techName: _, tags: b } = o,
            g = a === i && a > 0,
            p = b.indexOf('premiumIGR') > -1,
            h = () => {
                (H.sound('play'), s.updateTeamTableSelectedPlayer(He, -1));
            };
        return (
            W(X.ESCAPE, h),
            r.jsxs('div', {
                className: da,
                children: [
                    r.jsxs('div', {
                        className: ma,
                        children: [
                            r.jsx('div', { className: ba, style: cs(_) }),
                            r.jsxs('div', {
                                className: ua,
                                children: [
                                    r.jsx('div', {
                                        className: _a,
                                        children: r.jsx(M, {
                                            ...t.userNames,
                                            isTeamKiller: !1,
                                            isAnonymizerShown: !0,
                                            isKilled: c,
                                            isSameSquad: g,
                                        }),
                                    }),
                                    r.jsxs('div', {
                                        className: ga,
                                        children: [
                                            r.jsx(Ys, {
                                                vehicleLevel: d,
                                                vehicleType: m,
                                                vehicleShortName: u,
                                                userNames: l,
                                                alignment: Js.LEFT,
                                                isIGR: p,
                                                isPersonal: n,
                                                killed: c,
                                            }),
                                            r.jsx(zs, { player: t }),
                                        ],
                                    }),
                                ],
                            }),
                            r.jsx('div', {
                                className: pa,
                                onClick: h,
                                children: r.jsx('div', {
                                    className: ha,
                                    children: R.strings.fun_battle_results.closeBtn(),
                                }),
                            }),
                        ],
                    }),
                    r.jsx('div', { className: va, children: r.jsx(ca, {}) }),
                ],
            })
        );
    }),
    fa = {
        base: 'TeamTable_7973965b',
        hidden: 'TeamTable_hidden_7e320031',
        head: 'TeamTable_head_d503f690',
        body: 'TeamTable_body_976ffc47',
        bodyWrapper: 'TeamTable_bodyWrapper_898ea6ec',
        bodyWrapper__shortened: 'TeamTable_bodyWrapper__shortened_4587e7bb',
        content: 'TeamTable_content_31ae96b3',
        headRow: 'TeamTable_headRow_eb7842b9',
        bodyRow: 'TeamTable_bodyRow_f643f443',
        bodyRow__isFirst: 'TeamTable_bodyRow__isFirst_579fa0dc',
        bodyRow__isActive: 'TeamTable_bodyRow__isActive_40ba5989',
        bodyRow__nonSelectable: 'TeamTable_bodyRow__nonSelectable_40ba5989',
        bodyRow__isKilled: 'TeamTable_bodyRow__isKilled_a1a8f21',
        cell: 'TeamTable_cell_d39a1c9c',
        headCell: 'TeamTable_headCell_591d9f66',
        cell__icon: 'TeamTable_cell__icon_6c06c7d9',
        cell__vehicle: 'TeamTable_cell__vehicle_e2b6abd1',
        headCell__sortDisabled: 'TeamTable_headCell__sortDisabled_c127801c',
        headHover: 'TeamTable_headHover_804bd167',
        headCell__active: 'TeamTable_headCell__active_40ba5989',
        headIcon: 'TeamTable_headIcon_add6e715',
        headDivider: 'TeamTable_headDivider_6ba5350a',
        glow: 'TeamTable_glow_5bf95861',
        activeArrow: 'TeamTable_activeArrow_81a0419c',
        activeArrow__last: 'TeamTable_activeArrow__last_2c45bf3d',
    },
    Na = t(({ alias: e, shortened: s = !1 }) => {
        const { model: a } = ss(),
            t = a.selectedPlayerId.get(),
            l = a.selectedTeam.get() === e,
            { comparatorsMap: n, defaultColumn: o, TableRowComponent: d } = Ze(),
            m = e === Ke ? a.computes.alliesSorted(n, o) : a.computes.enemiesSorted(n, o);
        return r.jsx('div', {
            className: fa.body,
            children: r.jsx('div', {
                className: i(fa.bodyWrapper, s && fa.bodyWrapper__shortened),
                children: c(m, (s, a) =>
                    r.jsx(d, { player: s, selected: l && t === s.playerIndex, alias: e, first: 0 === a }, a),
                ),
            }),
        });
    }),
    ja = t(({ alias: e }) => {
        const { model: s } = ss(),
            a = (e === Ke ? s.allies.get().length : s.enemies.get().length) > 15,
            t = B();
        return r.jsx('div', {
            className: fa.body,
            children: a
                ? r.jsx(K.Vertical.Area.Default, { className: fa.content, api: t, children: r.jsx(Na, { alias: e }) })
                : r.jsx(Na, { alias: e, shortened: !0 }),
        });
    });
function ya(e, s = ls, a = 3) {
    return s.fixedCells[e] ? s.fixedCells[e] : [s.configurableCells[0] / a, s.configurableCells[1] / a];
}
function Ta(e, s = ls, a, t = 3) {
    const r = ya(e, s, t);
    return { width: `${is.includes(a) ? r[1] : r[0]}rem` };
}
const Sa = {
        root: 'ActiveArrow_root_ad9aed6d',
        base: 'ActiveArrow_87750771',
        line: 'ActiveArrow_line_c4e4aa4a',
        arrow: 'ActiveArrow_arrow_90c1aa1d',
        arrow__top: 'ActiveArrow_arrow__top_d5e0eb11',
    },
    wa = 'top',
    Ia = 'bottom',
    Pa = e.memo(({ direction: e }) =>
        r.jsxs('div', {
            className: Sa.base,
            children: [
                r.jsx('div', { className: Sa.line }),
                r.jsx('div', { className: i(Sa.arrow, Sa[`arrow__${e}`]) }),
                r.jsx('div', { className: Sa.line }),
            ],
        }),
    ),
    Ca = ({
        className: e,
        children: s,
        onSort: a,
        sortType: t,
        tooltip: l,
        reversed: n = !1,
        active: o = !1,
        last: c = !1,
        sortDisabled: d = !1,
        columnWidthSmall: m = 0,
        columnWidthLarge: u = 0,
    }) => {
        const { mediaSize: _ } = Z();
        return r.jsx(J, {
            ...l,
            children: r.jsxs('div', {
                className: i(
                    fa.headCell,
                    e,
                    o && fa.headCell__active,
                    n && fa.headCell__reverse,
                    d && fa.headCell__sortDisabled,
                ),
                style: { width: `${is.includes(_) ? u : m}rem` },
                onClick: () => {
                    d || (H.sound('play'), a(t));
                },
                onMouseEnter: () => H.sound('highlight'),
                children: [
                    s,
                    o &&
                        r.jsx('div', {
                            className: i(fa.activeArrow, c && fa.activeArrow__last),
                            children: r.jsx(Pa, { direction: n ? wa : Ia }),
                        }),
                ],
            }),
        });
    },
    Ra = R.strings.battle_results.team,
    Aa = R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.header;
function Ea(e, s) {
    const a = `${e}Header`,
        t = s?.team?.$dyn(a) ?? Ra.$dyn(a);
    return { header: t?.$dyn('header'), body: t?.$dyn('body') };
}
const Da = t(({ isAllies: e = !0, onSort: s }) => {
        const { model: a } = ss(),
            { subModeAssetsPointer: t } = a.battleInfo.get(),
            l = a.detailsColumns.get(),
            i = a.sortDirection.get(),
            n = a.computes.activeSortingType(),
            o = a.singleTeamMode.get(),
            c = a.computes.hasSquads(),
            d = i === Ae.Asc,
            { dynamicTexts: m } = Ne(null, { poFileName: 'fun_battle_results', assetsPointer: t, isSubMode: !0 }),
            u = ve(t, !0)?.battle_results?.team_table?.header,
            { columnsOrder: _, headerIconMapping: b, tableCellsConfig: g } = Ze();
        return r.jsx('div', {
            className: fa.head,
            children: r.jsx('div', {
                className: fa.headRow,
                children: _.map((a, t, i) => {
                    const _ = rs.findIndex((e) => e === a),
                        p = Q(l, (e) => e === a);
                    if (-1 === _ && (-1 === p || void 0 === p)) return;
                    const h = a === Se,
                        v = o ? m.team.singleTeam() : Ra.stats.$dyn(e ? 'ownTeam' : 'enemyTeam'),
                        x = 0 === l.length ? 3 : l.length,
                        f = h
                            ? fa.headCell__name
                            : (function (e) {
                                  switch (e) {
                                      case Ce:
                                          return fa.headCell__vehicle;
                                      case Te:
                                          return fa.headCell__squad;
                                      default:
                                          return fa.headCell__icon;
                                  }
                              })(a),
                        N = !h && b[a],
                        j = us(u, Aa, N),
                        y = ya(a, g, x);
                    return r.jsxs(
                        Ca,
                        {
                            className: f,
                            active: n === a,
                            reversed: d,
                            last: t === i.length - 1,
                            sortType: a,
                            onSort: s,
                            tooltip: Ea(a, m),
                            sortDisabled: a === Te && !c,
                            columnWidthSmall: y[0],
                            columnWidthLarge: y[1],
                            children: [
                                h
                                    ? r.jsx('span', { className: fa.playerName, children: v })
                                    : r.jsx('div', {
                                          className: fa.headIcon,
                                          style: { backgroundImage: `url('${j}')` },
                                      }),
                                r.jsx('div', { className: fa.headHover }),
                                t < i.length - 1 && r.jsx('div', { className: fa.headDivider }),
                            ],
                        },
                        a,
                    );
                }),
            }),
        });
    }),
    Fa = t(({ onSort: e, alias: s = Ke }) => {
        const { model: a } = ss(),
            t = a.selectedTeam.get(),
            l = t !== He && s !== t;
        return r.jsx('div', {
            className: l ? fa.hidden : '',
            children: r.jsxs('div', {
                className: fa.base,
                children: [r.jsx(Da, { isAllies: s === Ke, onSort: e }), r.jsx(ja, { alias: s })],
            }),
        });
    }),
    ka = 'TeamTab_9d7f5559',
    $a = 'TeamTab_teams_740ba01b',
    Va = 'TeamTab_teams__single_3318c8af',
    qa = 'TeamTab_detailsWrapper_11a9f895',
    Ma = 'TeamTab_detailsWrapper__extra_fc556740',
    Ga = t(() => {
        const { model: s, controls: a } = ss(),
            t = s.sortDirection.get(),
            l = s.computes.activeSortingType(),
            n = s.singleTeamMode.get(),
            o = s.selectedTeam.get(),
            c = o !== He,
            d = o === Ke && s.allies.get().length <= 15,
            { tableCellsConfig: m } = Ze(),
            u = e.useCallback(
                (e) => {
                    if (e === l) {
                        const e = t === Ae.Desc ? Ae.Asc : Ae.Desc;
                        (a.saveStatsSorting(l, e), a.updateTeamTableSorting(l, e));
                    } else (a.saveStatsSorting(e, Ae.Desc), a.updateTeamTableSorting(e, Ae.Desc));
                },
                [t, l, a],
            );
        return r.jsx('div', {
            className: ka,
            style: { '--tableWidthSmall': `${m.tableWidth[0]}rem`, '--tableWidthLarge': `${m.tableWidth[1]}rem` },
            children: r.jsxs('div', {
                className: i($a, n && Va),
                children: [
                    r.jsx(Fa, { alias: n ? We : Ke, onSort: u }),
                    c && r.jsx('div', { className: i(qa, d && Ma), children: r.jsx(xa, {}) }),
                    !n && r.jsx(Fa, { alias: We, onSort: u }),
                ],
            }),
        });
    }),
    Oa = 'finishTime',
    Ua = 'finishPosition';
function La(e) {
    return ({ efficiencyValues: s }, { efficiencyValues: a }) => {
        const t = Ve(s, e),
            r = Ve(a, e);
        if (void 0 === t || void 0 === r) return 0;
        return (0 === t ? Number.MAX_SAFE_INTEGER : t) - (0 === r ? Number.MAX_SAFE_INTEGER : r);
    };
}
const za = [Te, Ua, Se, Oa, Ie, Ce],
    Ba = { ...as, [Ua]: 'finishPosition', [Oa]: 'finishTime' },
    Ka = {
        ...ze,
        [Ua]: De(Le([0, Ee.DESCENDING, 0], La('finishPosition'), Oe('checkpoints'), Ge)),
        [Oa]: De(Le([0, Ee.DESCENDING, 0], La('finishTime'), Oe('checkpoints'), Ge)),
    },
    Wa = {
        freezed: !1,
        withStack: !1,
        type: Y.Growing,
        delta: { duration: 2e3, delay: 100 },
        line: { duration: 2e3, delay: 100 },
    },
    Ha = 'Rewards_a1e37c96',
    Xa = 'Rewards_reward_36fbe6b0',
    Za = 'Rewards_checkmark_4cbfb56a',
    Ja = 'Rewards_item_405577a5',
    Qa = 'Rewards_image_74754faa',
    Ya = ({
        data: s,
        size: a = ee.Big,
        count: t,
        classMix: l,
        rewardItemClassMix: n,
        boxRewardTooltip: o,
        boxRewardValue: c,
    }) => {
        const d = e.useMemo(
                () => (t && t < s.length ? `R.images.gui.maps.icons.quests.bonuses.${a}.default` : ''),
                [t, s.length, a],
            ),
            m = c || se(R.strings.tooltips.quests.awards.additional.bottom(), { count: s.length - (t || 0) }),
            u = i(Ha, l),
            _ = i(Xa, n);
        return r.jsx('div', {
            className: u,
            children: d
                ? r.jsxs(r.Fragment, {
                      children: [
                          s.slice(0, t).map((e, s) =>
                              r.jsxs(
                                  'div',
                                  {
                                      className: _,
                                      children: [r.jsx(ae, { size: a, ...e }), r.jsx('div', { className: Za })],
                                  },
                                  s,
                              ),
                          ),
                          r.jsxs('div', {
                              className: _,
                              children: [
                                  r.jsx(ae, {
                                      name: 'more',
                                      image: d,
                                      size: a,
                                      value: m,
                                      tooltipArgs: o,
                                      className: Ja,
                                      classNames: { image: Qa },
                                  }),
                                  r.jsx('div', { className: Za }),
                              ],
                          }),
                      ],
                  })
                : s.map((e, s) =>
                      r.jsxs(
                          'div',
                          { className: _, children: [r.jsx(ae, { size: a, ...e }), r.jsx('div', { className: Za })] },
                          s,
                      ),
                  ),
        });
    },
    et = {
        base: 'Progress_46abf1c9',
        title: 'Progress_title_a730a8ff',
        description: 'Progress_description_f6a90e07',
        bar: 'Progress_bar_eeecd640',
        counter: 'Progress_counter_841fbc89',
        slash: 'Progress_slash_2c5daf65',
        value: 'Progress_value_4851965d',
        total: 'Progress_total_312110e0',
        footer: 'Progress_footer_483cab9a',
        rewards: 'Progress_rewards_47548fa3',
        header: 'Progress_header_4a424b58',
    },
    st = E.resolve('strings'),
    at = t(function () {
        const { model: s, controls: a } = ss(),
            t = s.progress.get(),
            l = t.currentStage !== t.previousStage,
            i = l
                ? s.computes.progressionValuesWithStageMaximum(t.previousStage).previous
                : s.computes.progressionValues().current,
            o = te(),
            c = s.animationStatus.get(),
            [d, m] = e.useState(c ? i : s.computes.progressionValues().withoutAnimation),
            [u, _] = e.useState(l ? t.previousStage : t.currentStage);
        return (
            e.useEffect(() => {
                if ((c && H.sound('ev_fep_pb_start'), o)) return;
                return n(() => {
                    u < t.currentStage
                        ? m(s.computes.progressionValuesWithStageMaximum(u).fromZeroToEnd)
                        : m(s.computes.progressionValues().current);
                });
            }, [t.currentStage, s.computes, u, c, o]),
            r.jsxs('div', {
                className: et.base,
                children: [
                    r.jsxs('div', {
                        className: et.header,
                        children: [
                            r.jsx('div', {
                                className: et.title,
                                children: r.jsx(re, {
                                    text: st.readOrEmpty(
                                        'R.strings.fun_battle_results.progress.' +
                                            (t.isInUnlimitedProgression ? 'unlimitedProgression.title' : 'title'),
                                    ),
                                    binding: {
                                        modeName: st.readOrEmpty(
                                            fe({ assetsPointer: t.assetsPointer, path: 'userName' }),
                                        ),
                                        done: c ? u : t.currentStage,
                                        total: t.isInUnlimitedProgression ? '' : t.maximumStage,
                                    },
                                }),
                            }),
                            r.jsx('div', { className: et.description, children: t.description }),
                        ],
                    }),
                    r.jsx('div', {
                        className: et.bar,
                        children: r.jsx(le, {
                            animationSettings: Wa,
                            size: ie.Default,
                            deltaFrom: d.deltaFrom,
                            value: d.value,
                            maxValue: d.maxValue,
                            additionalKey: u,
                            onChangeAnimationState: function (e) {
                                e === ne.End &&
                                    (H.sound('ev_fep_pb_stop'),
                                    u < t.currentStage ? _(u + 1) : a.setAnimationEnabled(!1));
                            },
                        }),
                    }),
                    r.jsxs('div', {
                        className: et.footer,
                        children: [
                            r.jsxs('div', {
                                className: et.counter,
                                children: [
                                    r.jsx('div', { className: et.currentCount, children: d.value }),
                                    r.jsx('div', {
                                        className: et.slash,
                                        children: r.jsx(U, { text: R.strings.common.common.slash() }),
                                    }),
                                    r.jsx('div', { className: et.total, children: d.maxValue }),
                                ],
                            }),
                            r.jsx(Ya, {
                                classMix: et.rewards,
                                data: s.computes.rewards(),
                                size: ee.Small,
                                count: s.computes.rewards().length > 4 ? 3 : void 0,
                                boxRewardTooltip: {
                                    contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                    args: { showCount: 4 },
                                },
                            }),
                            r.jsx('div', {
                                className: et.value,
                                children:
                                    t.earnedPoints > 0
                                        ? se(R.strings.common.plusValue(), { value: t.earnedPoints })
                                        : t.earnedPoints,
                            }),
                        ],
                    }),
                ],
            })
        );
    });
var tt = ((e) => (
    (e[(e.Integer = 0)] = 'Integer'),
    (e[(e.Time = 1)] = 'Time'),
    (e[(e.Non_Negative_Integer = 2)] = 'Non_Negative_Integer'),
    e
))(tt || {});
const rt = 'StatItem_4c88a770',
    lt = 'StatItem_statImage_916e4aa0',
    it = 'StatItem_statText_dd3996ee',
    nt = 'StatItem_titleText_a4ec9dcb',
    ot = 'StatItem_text_501ab7da',
    ct = R.images.fun_random.gui.maps.icons.feature.battle_results.stat_list.big;
function dt(e, s, a, t) {
    switch (a) {
        case tt.Integer:
            return window.systemLocale.getNumberFormat(s, 0);
        case tt.Non_Negative_Integer:
            return s > 0 ? window.systemLocale.getNumberFormat(s, 0) : t.empty();
        case tt.Time:
            return _s(s, t.timeFormat(), 0, t.empty());
        default:
            return s;
    }
}
const mt = ({ paramType: e, value: s, valueType: a, assetsPointer: t }) => {
        const { staticTexts: l, dynamicTexts: i } = Ne('efficiency', {
                poFileName: 'fun_battle_results',
                assetsPointer: t,
                isSubMode: !0,
            }),
            n = ve(t, !0).battle_results?.stat_list?.big;
        return r.jsx(oe, {
            contentId: R.views.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            args: { paramType: e },
            children: r.jsxs('div', {
                className: rt,
                children: [
                    r.jsx('div', { className: lt, style: { backgroundImage: `url(${us(n, ct, e)})` } }),
                    r.jsx('div', { className: it, children: dt(0, s, a, l) }),
                    r.jsx('div', { className: nt, children: r.jsx(U, { classMix: ot, text: us(i, l, e) }) }),
                ],
            }),
        });
    },
    ut = 'StatList_d1b2121c',
    _t = 'StatList_item_6d8b38b0',
    bt = t(() => {
        const { model: e } = ss(),
            s = e.efficiency.get(),
            { subModeAssetsPointer: a } = e.battleInfo.get();
        return r.jsx('div', {
            className: ut,
            children: c(s, (e, s) =>
                r.jsx('div', { className: _t, children: r.jsx(mt, { ...e, assetsPointer: a }) }, s),
            ),
        });
    }),
    gt = {
        root: 'TopPlace_root_aeac1b2b',
        base: 'TopPlace_b5160de',
        ribbon: 'TopPlace_ribbon_b2ccd440',
        position: 'TopPlace_position_f43b6154',
        subtitle: 'TopPlace_subtitle_67c35a31',
        positionOverlay: 'TopPlace_positionOverlay_71026f03',
        subtitleOverlay: 'TopPlace_subtitleOverlay_16732cb0',
        base__place1: 'TopPlace_base__place1_aeac1b2b',
        gradientBase: 'TopPlace_gradientBase_c893527b',
        base__place2: 'TopPlace_base__place2_aeac1b2b',
        base__place3: 'TopPlace_base__place3_aeac1b2b',
        gradientOverlay: 'TopPlace_gradientOverlay_64b14dc3',
        shine: 'TopPlace_shine_95f54b64',
    },
    pt = E.resolve('images'),
    ht = E.resolve('strings'),
    vt = t(function () {
        const { model: e } = ss(),
            { assetsPointer: s } = e.battleInfo.get(),
            { position: a } = gs(),
            t = ht.readOrEmpty('R.strings.fun_battle_results.resultRace.battleStatus.inTop'),
            l = `${xe(s, !0)}.battle_results.personal`;
        return r.jsxs('div', {
            className: i(gt.base, gt[`base__place${a}`]),
            children: [
                r.jsx('div', {
                    className: gt.ribbon,
                    style: { backgroundImage: `url(${pt.readOrEmpty(`${l}.wreath${a}`)})` },
                }),
                r.jsx('div', { className: i(gt.position, gt.gradientBase), children: a }),
                r.jsx('div', { className: i(gt.position, gt.positionOverlay, gt.gradientOverlay), children: a }),
                r.jsx('div', { className: i(gt.subtitle, gt.gradientBase), children: t }),
                r.jsx('div', { className: i(gt.subtitle, gt.subtitleOverlay, gt.gradientOverlay), children: t }),
                r.jsx('div', {
                    className: gt.shine,
                    style: { backgroundImage: `url(${pt.readOrEmpty(`${l}.shineLine${a}`)})` },
                }),
            ],
        });
    }),
    xt = 'PersonalTab_76def6be',
    ft = 'PersonalTab_content_33af9',
    Nt = 'PersonalTab_topPlace_49073c3d',
    jt = 'PersonalTab_header_99c46a82',
    yt = 'PersonalTab_statistics_e08ea9ac',
    Tt = 'PersonalTab_progress_644ac635',
    St = 'PersonalTab_title_33c9b722',
    wt = E.resolve('strings'),
    It = E.resolve('images'),
    Pt = t(function () {
        const { model: e } = ss(),
            { topPlace: s } = gs(),
            a = e.battleInfo.get(),
            t = e.efficiency.get(),
            { hasProgress: l } = e.progress.get(),
            i = It.readOrEmpty(`${xe(a.assetsPointer, !0)}.battle_results.personal.mask`);
        return r.jsx('div', {
            className: xt,
            children: r.jsxs('div', {
                className: ft,
                children: [
                    s
                        ? r.jsx('div', { className: Nt, children: r.jsx(vt, {}) })
                        : r.jsx('div', {
                              className: jt,
                              children: r.jsx(k, {
                                  text: wt.readOrEmpty(
                                      `R.strings.fun_battle_results.resultRace.battleStatus.${a.winStatus}`,
                                  ),
                                  className: St,
                                  style: { maskImage: `url(${i})` },
                              }),
                          }),
                    t.length >= 3 && r.jsx('div', { className: yt, children: r.jsx(bt, {}) }),
                    l && r.jsx('div', { className: Tt, children: r.jsx(at, {}) }),
                ],
            }),
        });
    }),
    Ct = 'TableRendererSquad_13d7a80b',
    Rt = 'TableRendererSquad_base__highlighted_28f558d3',
    At = ({ squadIndex: e, currentSquadIndex: s }) => r.jsx('div', { className: i(Ct, s === e && Rt), children: e }),
    Et = 'TableRendererVehicleInfo_7ccead71',
    Dt = 'TableRendererVehicleInfo_vehicleImage_1b8490ec',
    Ft = 'TableRendererVehicleInfo_vehicleImage__isKilled_d9be918a',
    kt = ({ vehicle: e, userNames: s, isPersonal: a = !1, isSameSquad: t = !1, killed: l = !1 }) => {
        const { techName: n, name: o, tier: c, type: d, nation: m, tags: u } = e,
            _ = u.indexOf('premiumIGR') > -1;
        return r.jsxs('div', {
            className: Et,
            children: [
                r.jsx('div', { className: i(Dt, l && Ft), style: ds(n, m) }),
                r.jsx(Ys, {
                    vehicleLevel: c,
                    vehicleType: d,
                    vehicleShortName: o,
                    userNames: s,
                    isPersonal: a,
                    isSameSquad: t,
                    isIGR: _,
                    killed: l,
                }),
            ],
        });
    },
    $t = {
        root: 'ActiveGlow_root_d4e7590f',
        base: 'ActiveGlow_e7257611',
        base__active: 'ActiveGlow_base__active_f573add8',
        activeGlow: 'ActiveGlow_activeGlow_5a648f5d',
        activeGlow__left: 'ActiveGlow_activeGlow__left_9977f203',
        activeGlow__right: 'ActiveGlow_activeGlow__right_de1a4cc8',
    },
    Vt = 'right',
    qt = 'left',
    Mt = ({ position: e = qt, isActive: s = !1 }) =>
        r.jsx('div', {
            className: i($t.base, s && $t.base__active),
            children: r.jsx('div', { className: i($t.activeGlow, $t[`activeGlow__${e}`]) }),
        }),
    Gt = ({ userNames: e, isPersonal: s, isKilled: a, isSameSquad: t, cellsConfig: l }) => {
        const { mediaSize: i } = Z(),
            n = ya(Se, l),
            o = is.includes(i) ? n[1] : n[0];
        return r.jsx('div', {
            className: fa.cell,
            style: { width: `${o}rem` },
            children: r.jsx('div', {
                style: { width: o - l.playerCellOffset + 'rem', marginLeft: `${l.playerCellOffset}rem` },
                children: r.jsx(M, { ...e, isAnonymizerShown: s, isPersonal: s, isKilled: a, isSameSquad: t }),
            }),
        });
    },
    Ot = ({ baseStyles: e, columnName: s, value: a, columnsCount: t, cellsConfig: l }) => {
        const { mediaSize: i } = Z();
        return r.jsx('div', {
            className: e,
            style: Ta(s, l, i, t),
            children: r.jsx('div', { className: fa.value, children: a }),
        });
    },
    Ut = E.resolve('strings'),
    Lt = E.resolve('sounds'),
    zt = t(function ({ player: e, selected: s, alias: a, first: t = !1 }) {
        const { model: i, controls: n } = ss(),
            o = i.selectedPlayerId.get(),
            c = i.computes.personalSquadIndex(),
            d = i.detailsColumns.get(),
            m = Ve(e.efficiencyValues, 'finishPosition', 0),
            { vehicleCD: u } = e.vehicle,
            { isKilled: _, isTeamKiller: b } = e.userNames,
            g = m <= 0,
            p = c === e.squadIndex && c > 0,
            h = i.singleTeamMode.get(),
            { mediaSize: v } = Z(),
            { tableCellsConfig: x } = Ze(),
            f = 0 === d.length ? 3 : d.length;
        const N = L({ isTeamKiller: b, isKilled: g, isPersonal: e.isPersonal, isSameSquad: p });
        return r.jsx(ce, {
            args: { databaseID: e.databaseID, vehicleCD: u },
            children: r.jsxs('div', {
                className: l(
                    fa.bodyRow,
                    s && fa.bodyRow__isActive,
                    h && fa.bodyRow__nonSelectable,
                    t && fa.bodyRow__isFirst,
                    _ && fa.bodyRow__isKilled,
                ),
                style: { color: N },
                onClick: function () {
                    if (h) return;
                    Lt.play('yes1');
                    const s = o === e.playerIndex;
                    n.updateTeamTableSelectedPlayer(s ? He : a, s ? -1 : e.playerIndex);
                },
                onMouseEnter: function () {
                    h || Lt.play('highlight');
                },
                children: [
                    za.map((s, a) => {
                        const t = rs.includes(s),
                            i = de(d, s);
                        if (t || i)
                            switch (s) {
                                case Te:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: l(fa.cell, fa.cell__icon),
                                            style: Ta(Te, x, v),
                                            children:
                                                e.squadIndex > 0 &&
                                                r.jsx(At, { squadIndex: e.squadIndex, currentSquadIndex: c }),
                                        },
                                        a,
                                    );
                                case Ce:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: l(fa.cell, fa.cell__vehicle),
                                            style: Ta(Ce, x, v),
                                            children: r.jsx(kt, { ...e, isSameSquad: p, killed: g }),
                                        },
                                        a,
                                    );
                                case Se:
                                    return r.jsx(
                                        Gt,
                                        {
                                            userNames: e.userNames,
                                            isPersonal: e.isPersonal,
                                            isKilled: g,
                                            isSameSquad: p,
                                            cellsConfig: x,
                                        },
                                        a,
                                    );
                                case Oa:
                                    return r.jsx(
                                        Ot,
                                        {
                                            columnName: s,
                                            baseStyles: l(fa.cell, fa.cell__icon),
                                            value: _s(
                                                Ve(e.efficiencyValues, 'finishTime') ?? 0,
                                                Ut.readOrEmpty('R.strings.fun_battle_results.team.format.finishTime'),
                                                0,
                                                Ut.readOrEmpty('R.strings.fun_battle_results.team.empty.finishTime'),
                                            ),
                                            columnsCount: f,
                                            cellsConfig: x,
                                        },
                                        a,
                                    );
                                case Ua:
                                    return r.jsx(
                                        Ot,
                                        {
                                            columnName: s,
                                            baseStyles: l(fa.cell, fa.cell__icon),
                                            value: m > 0 ? m : '',
                                            columnsCount: f,
                                            cellsConfig: x,
                                        },
                                        a,
                                    );
                                default:
                                    return r.jsx(
                                        Ot,
                                        {
                                            columnName: s,
                                            baseStyles: l(fa.cell, fa.cell__icon),
                                            value: Ve(e.efficiencyValues, s, ''),
                                            columnsCount: f,
                                            cellsConfig: x,
                                        },
                                        a,
                                    );
                            }
                    }),
                    r.jsx('div', {
                        className: fa.glow,
                        children: r.jsx(Mt, { position: a === We ? qt : Vt, isActive: s }),
                    }),
                ],
            }),
        });
    }),
    Bt = {
        comparatorsMap: Ka,
        defaultColumn: Oa,
        columnsOrder: za,
        headerIconMapping: Ba,
        TableRowComponent: zt,
        tableCellsConfig: ls,
    };
function Kt() {
    return r.jsx(G.Content, {
        children: (e) => {
            switch (e) {
                case Qe:
                    return r.jsx(Pt, {});
                case Ye:
                    return r.jsx(Xe.Provider, { value: Bt, children: r.jsx(Ga, {}) });
                default:
                    return (console.error('Unreachable branch in tabs'), null);
            }
        },
    });
}
const Wt = t(function () {
        const { model: e, controls: s } = ss(),
            a = e.currentTabId.get(),
            t = D({ size: ue.small }, { large: { size: ue.medium }, extraLarge: { size: ue.large } });
        return r.jsxs(G, {
            active: a,
            theme: me.primary,
            size: t.size,
            onActiveChange: (e) => {
                (s.updateCurrentTabId(e), s.updateNextBonusTime(e === Qe));
            },
            children: [r.jsx(Ms, {}), r.jsx(Kt, {})],
        });
    }),
    Ht = 'Race_73cde25e',
    Xt = 'Race_wrapper_ced7b360',
    Zt = 'Race_footer_5621ab7e',
    Jt = t(function () {
        const { model: s, controls: a } = ss(),
            { closeWindow: t } = a,
            l = s.battleInfo.get(),
            i = s.computes.currentPlayer(),
            n = i ? Ve(i?.efficiencyValues, 'finishPosition', 0) : 0,
            o = 'finished' === l.winStatus && n <= 3,
            c = e.useMemo(() => ({ position: n, topPlace: o }), [n, o]);
        return (
            $(t),
            r.jsx(bs.Provider, {
                value: c,
                children: r.jsxs('div', {
                    className: Ht,
                    children: [
                        r.jsx(Ns, {}),
                        r.jsxs('div', {
                            className: Xt,
                            children: [r.jsx(Wt, {}), r.jsx('div', { className: Zt, children: r.jsx(Vs, {}) })],
                        }),
                    ],
                }),
            })
        );
    }),
    Qt = 'Footer_f51bab46',
    Yt = 'Footer_content_d9781467',
    er = 'Footer_battleStatus_c26aefc7',
    sr = 'Footer_date_2b3cc51d',
    ar = 'Footer_left_4308958a',
    tr = 'Footer_right_4e012daf',
    rr = 'Footer_top_eae2c791',
    lr = 'Footer_bottom_6191fafd',
    ir = 'Footer_player_9943fab5',
    nr = 'Footer_killer_7b5d6a6a',
    or = 'Footer_dot_6bee0c4e',
    cr = 'Footer_button_43641369',
    dr = 'Footer_base__teams_4308958a',
    mr = E.resolve('strings'),
    ur = E.resolve('intl'),
    _r = 'R.strings.battle_results.common.vehicleState',
    br = t(function () {
        const { model: e, controls: s } = ss(),
            { closeWindow: a } = s,
            t = e.currentTabId.get() === Ye,
            {
                subModeAssetsPointer: l,
                arenaName: n,
                battleStartTime: o,
                battleDuration: c,
                finishReason: d,
            } = e.battleInfo.get(),
            { deathReason: m, isLeftBattle: u } = e.userStatus.get(),
            _ = e.user.get(),
            b = e.killer.get(),
            g = e.computes.currentPlayer(),
            p = !u && _.isKilled;
        return (
            $(a),
            r.jsxs('div', {
                className: i(Qt, t && dr),
                children: [
                    r.jsxs('div', {
                        className: Yt,
                        children: [
                            r.jsxs('div', {
                                className: ar,
                                children: [
                                    r.jsxs('div', {
                                        className: rr,
                                        children: [
                                            mr.readOrEmpty(
                                                fe({ assetsPointer: l, isSubMode: !0, path: 'capsUserName' }),
                                            ),
                                            r.jsx('div', { className: or }),
                                            window.systemLocale.toUpperCase(n),
                                            g?.vehicle?.name &&
                                                r.jsxs(r.Fragment, {
                                                    children: [r.jsx('div', { className: or }), g.vehicle.name],
                                                }),
                                        ],
                                    }),
                                    r.jsxs('div', {
                                        className: lr,
                                        children: [
                                            r.jsx('div', {
                                                className: er,
                                                children: mr.readOrEmpty('R.strings.fun_battle_results.finish'),
                                            }),
                                            r.jsx('div', {
                                                className: sr,
                                                children: r.jsx(V, { datetime: o + c, format: q.ShortDateTime }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.jsxs('div', {
                                className: tr,
                                children: [
                                    d && r.jsx('div', { className: rr, children: ur.toUpperCase(d) }),
                                    r.jsxs('div', {
                                        className: lr,
                                        children: [
                                            p
                                                ? r.jsxs('div', {
                                                      className: nr,
                                                      children: [
                                                          mr.readOrEmpty(`${_r}.dead${m}`),
                                                          b.userName !== _.userName &&
                                                              r.jsxs(r.Fragment, {
                                                                  children: [
                                                                      r.jsx(k, {
                                                                          text: R.strings.common.common.nbsp(),
                                                                          upgradeLegacy: !0,
                                                                      }),
                                                                      r.jsx(M, { ...b }),
                                                                  ],
                                                              }),
                                                      ],
                                                  })
                                                : r.jsx('div', {
                                                      className: nr,
                                                      children: mr.readOrEmpty(
                                                          `${_r}.${u ? 'prematureLeave' : 'alive'}`,
                                                      ),
                                                  }),
                                            r.jsx('div', { className: or }),
                                            r.jsx('div', { className: ir, children: r.jsx(M, { ..._ }) }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    r.jsx('div', { className: cr, children: r.jsx(ys, { onClick: a }) }),
                ],
            })
        );
    }),
    gr = 'Reward_75ac811a',
    pr = ({ type: e, value: s }) => {
        const a = Z();
        return r.jsx(oe, {
            contentId: R.views.fun_random.mono.lobby.tooltips.battle_results_economic_tooltip('resId'),
            args: { currencyType: e },
            children: r.jsx('div', {
                className: gr,
                children: r.jsx(je, {
                    type: e,
                    value: s,
                    size: [w.Large, w.ExtraLarge].includes(a.mediaSize) ? ye.large : ye.big,
                }),
            }),
        });
    },
    hr = { base: 'RewardsList_55dd2b32' },
    vr = t(() => {
        const { model: e } = ss(),
            s = e.rewards.get();
        return r.jsx('div', {
            className: hr.base,
            children: c(s, (e, s) => r.jsx('div', { className: hr.item, children: r.jsx(pr, { ...e }) }, s)),
        });
    });
var xr = ((e) => (
    (e[(e.NoRestriction = 0)] = 'NoRestriction'),
    (e[(e.IsApplied = 1)] = 'IsApplied'),
    (e[(e.InvalidBattleType = 2)] = 'InvalidBattleType'),
    (e[(e.IsNotVictory = 3)] = 'IsNotVictory'),
    (e[(e.DeprecatedResults = 4)] = 'DeprecatedResults'),
    (e[(e.NoVehicle = 5)] = 'NoVehicle'),
    (e[(e.NoCrew = 6)] = 'NoCrew'),
    (e[(e.FasterEducationCrewNotActive = 7)] = 'FasterEducationCrewNotActive'),
    (e[(e.FasterEducationCrewActive = 8)] = 'FasterEducationCrewActive'),
    (e[(e.NotApplyingError = 9)] = 'NotApplyingError'),
    e
))(xr || {});
const fr = 'Upgrade_2e7e2718',
    Nr = 'Upgrade_base__column_1622ced3',
    jr = 'Upgrade_button_91e54d61',
    yr = 'Upgrade_button__cursor_75e0f40',
    Tr = 'Upgrade_content_edb0dfb3',
    Sr = 'Upgrade_content__normal_65496994',
    wr = 'Upgrade_defaultState_4bc6295c',
    Ir = 'Upgrade_state_df1359d',
    Pr = 'Upgrade_state__timer_d790c44d',
    Cr = 'Upgrade_icon_72093064',
    Rr = 'Upgrade_icon__attention_8300ebb1',
    Ar = 'Upgrade_icon__timer_c71ba0d1',
    Er = 'Upgrade_icon__information_77b3acf5',
    Dr = 'Upgrade_xpIcon_f7fac657',
    Fr = 'Upgrade_usesLeft_2492d3ad',
    kr = 'Upgrade_applied_17432717',
    $r = 'Upgrade_timerWrapper_f8112dfa',
    Vr = 'Upgrade_timerText_2448f58e',
    qr = 'Upgrade_timer_14e1c1e7',
    Mr = 'Upgrade_error_d3f6c96d',
    Gr = 'Upgrade_accepter_19aae422',
    Or = 'Upgrade_devider_69f53309',
    Ur = 'Upgrade_points_df43930d',
    Lr = 'Upgrade_highlight_76562a3b',
    zr = 'Upgrade_flash_2383c62e',
    Br = 'Upgrade_multiplier_9c357f74';
var Kr,
    Wr =
        (((Kr = Wr || {})[(Kr.IsNotVictory = xr.IsNotVictory)] = 'IsNotVictory'),
        (Kr[(Kr.DeprecatedResults = xr.DeprecatedResults)] = 'DeprecatedResults'),
        (Kr[(Kr.NoVehicle = xr.NoVehicle)] = 'NoVehicle'),
        (Kr[(Kr.NoCrew = xr.NoCrew)] = 'NoCrew'),
        (Kr[(Kr.FasterEducationCrewNotActive = xr.FasterEducationCrewNotActive)] = 'FasterEducationCrewNotActive'),
        (Kr[(Kr.FasterEducationCrewActive = xr.FasterEducationCrewActive)] = 'FasterEducationCrewActive'),
        Kr);
const Hr = R.strings.fun_battle_results.ribbon,
    Xr = [xr.IsApplied, xr.NotApplyingError, xr.IsNotVictory],
    Zr = E.resolve('intl'),
    Jr = [xr.IsApplied, xr.NoRestriction],
    Qr = t(() => {
        const { model: e, controls: s } = ss(),
            {
                nextBonusTime: a,
                xpDiff: t,
                restriction: l,
                bonusMultiplier: n,
                leftBonusCount: c,
                isUndefinedLeftBonusCount: d,
            } = e.premiumPlus.get(),
            m = !Xr.includes(l),
            u = Jr.includes(l),
            _ = l === xr.IsNotVictory,
            b = l === xr.NoRestriction && (c > 0 || d),
            g = () => {
                b && s.riseRewards();
            };
        return r.jsxs('div', {
            className: i(fr, b && Nr),
            children: [
                r.jsx('div', { className: Lr }),
                b &&
                    r.jsxs(o.Fragment, {
                        children: [
                            r.jsx('div', { className: zr }),
                            r.jsx('div', {
                                className: Br,
                                style: {
                                    backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.ribbon.multiplaers.$dyn('x' + String(n))})`,
                                },
                            }),
                        ],
                    }),
                a > 0 && !_
                    ? r.jsxs('div', {
                          className: $r,
                          children: [
                              r.jsx('div', { className: Vr, children: Hr.timeLeft() }),
                              r.jsxs('div', {
                                  className: i(Ir, Pr),
                                  children: [
                                      r.jsx('div', { className: i(Cr, Ar) }),
                                      r.jsx(_e, {
                                          startingSeconds: a,
                                          refreshRate: 1,
                                          targetTime: 0,
                                          hourFormat: '%HH:%MM:%SS',
                                          className: qr,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : r.jsx(o.Fragment, {
                          children: (() => {
                              switch (l) {
                                  case xr.NotApplyingError:
                                      return r.jsxs('div', {
                                          className: Mr,
                                          children: [
                                              r.jsx('div', { className: i(Cr, Rr) }),
                                              r.jsx('span', { children: Hr.errorState() }),
                                          ],
                                      });
                                  case xr.IsApplied:
                                      return r.jsxs(o.Fragment, {
                                          children: [
                                              r.jsx('div', { className: Gr }),
                                              r.jsx('div', { className: kr, children: Hr.applied() }),
                                          ],
                                      });
                                  case xr.NoRestriction:
                                      return r.jsx('div', {
                                          className: i(jr, m && yr),
                                          onClick: g,
                                          children: r.jsx('div', {
                                              className: i(Tr, Sr),
                                              children: r.jsx(U, {
                                                  text: Hr.expBonus(),
                                                  classMix: wr,
                                                  binding: {
                                                      count: Zr.formatNumber('integral', t),
                                                      icon: r.jsx('img', {
                                                          className: Dr,
                                                          src: 'R.images.gui.maps.icons.library.XpIcon_1',
                                                          alt: 'bubble',
                                                      }),
                                                  },
                                              }),
                                          }),
                                      });
                                  default:
                                      return r.jsxs('div', {
                                          className: Mr,
                                          children: [
                                              r.jsx('div', { className: i(Cr, Er) }),
                                              r.jsx('span', {
                                                  children: R.strings.fun_battle_results.premiumBonus.$dyn(Wr[l]),
                                              }),
                                          ],
                                      });
                              }
                          })(),
                      }),
                c >= 0 &&
                    u &&
                    r.jsxs(o.Fragment, {
                        children: [
                            !b && r.jsx('div', { className: Or }),
                            r.jsx('div', {
                                className: Fr,
                                children: r.jsx(U, {
                                    text: Hr.usesLeft(),
                                    binding: {
                                        count: r.jsx('div', {
                                            className: Ur,
                                            children:
                                                l === xr.NotApplyingError || d ? R.strings.common.common.dash() : c,
                                        }),
                                    },
                                }),
                            }),
                        ],
                    }),
            ],
        });
    }),
    Yr = {
        base: 'Ribbon_a8d129f2',
        base__upgradable: 'Ribbon_base__upgradable_89eadbbd',
        ribbon: 'Ribbon_b7270139',
        ribbon__win: 'Ribbon_ribbon__win_27fcdb21',
        ribbon__prem: 'Ribbon_ribbon__prem_b78ce1cb',
        ribbon__lose: 'Ribbon_ribbon__lose_7a0392af',
        ribbon__lose_prem: 'Ribbon_ribbon__lose_prem_e901ebb9',
        upgrade: 'Ribbon_upgrade_274f7f02',
    },
    el = t(() => {
        const { model: e } = ss(),
            { winStatus: s } = e.battleInfo.get(),
            { hasPremium: a, isXpBonusEnabled: t } = e.premiumPlus.get(),
            l = 'win' === s;
        return r.jsxs('div', {
            className: i(Yr.base, t && Yr.base__upgradable),
            children: [
                r.jsx('div', {
                    className: i(
                        Yr.ribbon,
                        l && (a ? Yr.ribbon__prem : Yr.ribbon__win),
                        !l && (a ? Yr.ribbon__lose_prem : Yr.ribbon__lose),
                    ),
                }),
                r.jsx(vr, {}),
                r.jsx('div', { className: Yr.shadow }),
                t && r.jsx('div', { className: Yr.upgrade, children: r.jsx(Qr, {}) }),
            ],
        });
    }),
    sl = {
        root: 'PersonalTab_root_522a4c67',
        base: 'PersonalTab_16574f7c',
        content: 'PersonalTab_content_33af9',
        header: 'PersonalTab_header_beef70b5',
        ribbon: 'PersonalTab_ribbon_9a7c8b17',
        statistics: 'PersonalTab_statistics_e08ea9ac',
        progress: 'PersonalTab_progress_644ac635',
        title: 'PersonalTab_title_cd6db133',
    },
    al = E.resolve('strings'),
    tl = t(() => {
        const { model: e } = ss(),
            { winStatus: s } = e.battleInfo.get(),
            a = e.efficiency.get(),
            t = e.rewards.get(),
            { hasProgress: l } = e.progress.get();
        return r.jsx('div', {
            className: sl.base,
            children: r.jsxs('div', {
                className: sl.content,
                children: [
                    r.jsx('div', {
                        className: i(sl.header, sl[`header__${s}`]),
                        children: r.jsx('div', {
                            className: sl.title,
                            children: al.readOrEmpty(`R.strings.fun_battle_results.result.${s}`),
                        }),
                    }),
                    a.length >= 3 && r.jsx('div', { className: sl.statistics, children: r.jsx(bt, {}) }),
                    t.length > 0 && r.jsx('div', { className: sl.ribbon, children: r.jsx(el, {}) }),
                    l && r.jsx('div', { className: sl.progress, children: r.jsx(at, {}) }),
                ],
            }),
        });
    }),
    rl = t(({ player: e, selected: s, alias: a, first: t = !1 }) => {
        const { model: l, controls: n } = ss(),
            o = l.selectedPlayerId.get(),
            c = l.computes.personalSquadIndex(),
            d = l.detailsColumns.get(),
            { userNames: m, squadIndex: u, playerIndex: _, isPersonal: b, databaseID: g, vehicle: p } = e,
            { vehicleCD: h } = p,
            { isKilled: v, isTeamKiller: x } = m,
            f = c === u && c > 0,
            N = l.singleTeamMode.get(),
            { mediaSize: j } = Z();
        const y = i(
                fa.bodyRow,
                s && fa.bodyRow__isActive,
                N && fa.bodyRow__nonSelectable,
                t && fa.bodyRow__isFirst,
                v && fa.bodyRow__isKilled,
            ),
            T = L({ isTeamKiller: x, isKilled: v, isPersonal: b, isSameSquad: f }),
            S = 0 === d.length ? 3 : d.length;
        return r.jsx(ce, {
            args: { databaseID: g, vehicleCD: h },
            children: r.jsxs('div', {
                className: y,
                style: { color: T },
                onClick: function () {
                    if (N) return;
                    H.sound('yes1');
                    const e = o === _;
                    n.updateTeamTableSelectedPlayer(e ? He : a, e ? -1 : _);
                },
                onMouseEnter: function () {
                    N || H.sound('highlight');
                },
                children: [
                    ts.map((s, a) => {
                        const t = rs.findIndex((e) => e === s),
                            l = Q(d, (e) => e === s);
                        if (-1 !== t || (-1 !== l && void 0 !== l))
                            switch (s) {
                                case Te:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: i(fa.cell, fa.cell__icon),
                                            style: Ta(Te, ls, j),
                                            children:
                                                e.squadIndex > 0 &&
                                                r.jsx(At, { squadIndex: e.squadIndex, currentSquadIndex: c }),
                                        },
                                        a,
                                    );
                                case Se:
                                    return r.jsx(
                                        Gt,
                                        { userNames: m, isPersonal: b, isKilled: v, isSameSquad: f, cellsConfig: ls },
                                        a,
                                    );
                                case Ce:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: i(fa.cell, fa.cell__vehicle),
                                            style: Ta(Ce, ls, j),
                                            children: r.jsx(kt, { ...e, isSameSquad: f, killed: v }),
                                        },
                                        a,
                                    );
                                default:
                                    return r.jsx(
                                        Ot,
                                        {
                                            columnName: s,
                                            baseStyles: i(fa.cell, fa.cell__icon),
                                            value: Ve(e.efficiencyValues, s, ''),
                                            columnsCount: S,
                                            cellsConfig: ls,
                                        },
                                        a,
                                    );
                            }
                    }),
                    r.jsx('div', {
                        className: fa.glow,
                        children: r.jsx(Mt, { position: a === We ? qt : Vt, isActive: s }),
                    }),
                ],
            }),
        });
    }),
    ll = {},
    il = {
        comparatorsMap: ze,
        defaultColumn: Se,
        columnsOrder: ts,
        headerIconMapping: as,
        TableRowComponent: rl,
        tableCellsConfig: ls,
    },
    nl = () =>
        r.jsx(G.Content, {
            children: (e) => {
                switch (e) {
                    case Qe:
                        return r.jsx(Je.Provider, { value: ll, children: r.jsx(tl, {}) });
                    case Ye:
                        return r.jsx(Xe.Provider, { value: il, children: r.jsx(Ga, {}) });
                    default:
                        return (console.error('Unreachable branch in tabs'), null);
                }
            },
        });
E.resolve('strings');
const ol = t(() => {
        const { model: e, controls: s } = ss(),
            a = e.currentTabId.get(),
            t = D({ size: ue.small }, { large: { size: ue.medium }, extraLarge: { size: ue.large } });
        return r.jsxs(G, {
            active: a,
            theme: me.primary,
            size: t.size,
            onActiveChange: (e) => {
                (s.updateCurrentTabId(e), s.updateNextBonusTime(e === Qe));
            },
            children: [r.jsx(Ms, {}), r.jsx(nl, {})],
        });
    }),
    cl = {
        root: 'Standard_root_63852eab',
        base: 'Standard_54ec693d',
        background: 'Standard_background_99b1ea54',
        background__team: 'Standard_background__team_b8773bdf',
        bgDarken: 'Standard_bgDarken_d741e1e',
        bgDarken__personal: 'Standard_bgDarken__personal_7feadd66',
        bgGlow: 'Standard_bgGlow_3f685885',
        bgGlow__tie: 'Standard_bgGlow__tie_fab45286',
        bgGlow__win: 'Standard_bgGlow__win_c77d4945',
        bgGlow__lose: 'Standard_bgGlow__lose_12a8eec',
        wrapper: 'Standard_wrapper_c32583e9',
        content: 'Standard_content_8fa14a71',
        footer: 'Standard_footer_5df2ff9b',
        navigation: 'Standard_navigation_e6a025b6',
        navigationItem: 'Standard_navigationItem_4e353400',
    };
E.resolve('images');
const dl = t(function () {
        const { model: e, controls: s } = ss(),
            { assetsPointer: a, subModeAssetsPointer: t, winStatus: l } = e.battleInfo.get(),
            n = e.currentTabId.get(),
            o = ms(a, t);
        return (
            $(s.closeWindow),
            r.jsxs('div', {
                className: cl.base,
                children: [
                    r.jsx('div', {
                        className: i(cl.background, n === Ye && cl.background__team),
                        style: { backgroundImage: `url('${o}')` },
                    }),
                    r.jsx('div', { className: i(cl.bgDarken, n !== Ye && cl.bgDarken__personal) }),
                    n === Ye && r.jsx('div', { className: i(cl.bgGlow, cl[`bgGlow__${l}`]) }),
                    r.jsxs('div', {
                        className: cl.wrapper,
                        children: [r.jsx(ol, {}), r.jsx('div', { className: cl.footer, children: r.jsx(br, {}) })],
                    }),
                ],
            })
        );
    }),
    ml = t(function () {
        const { model: e } = ss(),
            { battleType: s } = e.battleInfo.get();
        switch (s) {
            case 'standard':
            default:
                return r.jsx(dl, {});
            case 'race':
                return r.jsx(Jt, {});
        }
    });
pe(new be().add(ge).add(es).render(r.jsx(ml, {})), { fullScreen: !0 }).then(() => he(document.getElementById('root')));
