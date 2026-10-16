import { Lr as r } from './lib.js';
import { r as s } from './enums.js';
var t = {
        [s.First]: 'first',
        [s.Second]: 'second',
        [s.Third]: 'third',
        [s.Fourth]: 'fourth',
        [s.Fifth]: 'fifth',
        [s.Sixth]: 'sixth',
    },
    e = (r, s) => `${r.$dyn(t[s])}`,
    p = (r, s = { upperCase: !1 }) => e(s.upperCase ? R.strings.comp7_ext.rankUpper : R.strings.comp7_ext.rank, r),
    a = (s, t = { upperCase: !1 }) =>
        r(t.upperCase ? R.strings.comp7_ext.rankUpper.text() : R.strings.comp7_ext.rank.text(), { rank: p(s, t) });
export { p as i, a as n, e as r, t };
