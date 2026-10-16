import { b as e } from './readResource.js';
import { dA as s, dB as a, db as i, dc as r, de as m, dm as l, dg as o } from './lib.js';
const u = 4,
    n = [
        s.Gold,
        s.Credits,
        s.Crystal,
        s.FreeXp,
        s.BattlePassPoints,
        s.Premium,
        s.PremiumPlus,
        s.BattlePassTaler,
        s.BpCoin,
        s.EquipCoin,
        s.BrCoin,
    ],
    t = [s.Premium, s.PremiumPlus],
    d = [1, 2, 3, 7, 14, 30, 90, 180, 360],
    p = (a, i, r) => {
        const { name: l, icon: o, value: u } = i;
        if ('' !== a && l === s.Vehicles) {
            const s = e(a)?.rewards,
                i = s?.$dyn(`vehicle_${o.toLowerCase()}_${r}`);
            return i || R.images.fun_random.gui.maps.icons.feature.rewards.bonuses.$dyn(`vehicle_default_${r}`);
        }
        return l !== s.PremiumPlus || d.includes(Number(u))
            ? m(i, r)
            : `R.images.gui.maps.icons.quests.bonuses.${r}.premium_plus_1`;
    },
    c = (e, m, l = !0, o = '', u = !0) => {
        const { name: c, value: P, label: b } = e,
            v = c === s.PremiumPlus && !d.includes(Number(P)),
            g = t.includes(c),
            C = n.includes(c),
            x = v ? a.PremiumUniversal : c,
            S = u || !C,
            f = !g && '1' !== P;
        let _;
        return (
            g || (_ = S ? b : f ? P : void 0),
            {
                name: v ? a.PremiumUniversal : c || e.item,
                image: p(o, e, m),
                value: f && S ? P : void 0,
                special: e.overlayType,
                valueType: r(x),
                tooltipArgs: l ? i({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)) : { isEnabled: !1 },
                label: _,
                isCompensation: e.isCompensation,
            }
        );
    },
    P = (e, s) =>
        s >= l.Large
            ? e < 3
                ? o.S600x450
                : o.S400x300
            : 1 === e && s === l.Medium
              ? o.S600x450
              : s >= l.Small
                ? e <= 3
                    ? o.S400x300
                    : o.S296x222
                : e <= 3
                  ? o.S296x222
                  : o.S232x174,
    b = 1300,
    v = (e, s = 0) => ({ appear: s + 400 + 200 * e, enter: 600 }),
    g = (e) => 1300 + 400 * e;
export { u as M, b as R, v as a, P as b, c as f, g };
