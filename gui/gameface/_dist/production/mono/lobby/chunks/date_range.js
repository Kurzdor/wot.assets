import { r as a } from './rolldown-runtime.js';
import { Cs as s, Es as e, Na as i, Nr as t, Ts as l, is as m, lr as r, rr as n } from './lib.js';
var o = a(s(), 1),
    d = a(t(), 1),
    u = { small: 'small', big: 'big' },
    c = { full: 'full', medium: 'medium', small: 'small' },
    p = { appear: 'appear', fadeIn: 'fadeIn', slideUpIn: 'slideUpIn' },
    f = {
        battlePass: 'battlePass',
        events: 'events',
        missionsSlider: 'missionsSlider',
        missions: 'missions',
        personalMissions: 'personalMissions',
    },
    h = 'DateRange_8756cb54',
    g = 'DateRange_label_a9603586',
    x = 'DateRange_image_6a8d9b5e',
    D = a(i(), 1),
    b = e.resolve('strings'),
    v = { full: 'full', numeric: 'numeric', compact: 'compact' },
    _ = { [v.full]: l.DayMonthFull, [v.numeric]: l.DayMonthNumeric };
function N({ startDate: a, endDate: s, className: e, size: i, isAdaptive: t, isMode: l }) {
    const u = m,
        p = i === c.medium,
        f = i === c.small,
        M = (0, o.useMemo)(
            () => (f || (t && p && l) ? N.format.compact : t || p ? N.format.numeric : N.format.full),
            [t, p, l, f],
        );
    return (0, D.jsxs)('div', {
        className: (0, d.default)(h, e),
        children: [
            (0, D.jsx)(n, {
                className: x,
                path: 'ui_kit.datetime.x16x16.cooldown',
                width: 18,
                height: 17,
                adaptive: { medium: { path: 'ui_kit.datetime.x24x24.cooldown', width: 24, height: 24 } },
            }),
            M !== v.compact
                ? (0, D.jsx)(r, {
                      className: g,
                      text: b.readOrEmpty('user_missions.common.daterange.divider'),
                      split: !0,
                      params: { startDate: u(a, _[M]), endDate: u(s, _[M]) },
                  })
                : null,
        ],
    });
}
N.format = v;
export { u as a, c as i, p as n, f as r, N as t };
