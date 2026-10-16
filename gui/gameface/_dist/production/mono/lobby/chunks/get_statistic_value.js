import { Lr as e, ds as r } from './lib.js';
var t = 0,
    s = 1,
    a = (a, i, n) => {
        const o = Number.isInteger(a) || Number.isInteger(10 * a) ? r(a, s) : r(parseFloat(a.toFixed(n)), t);
        return i ? e(R.strings.comp7_ext.percentage(), { percentageValue: o }) : o;
    },
    i = ({ value: e, isPercentage: r = !1, fractionDigits: t = 2 }) =>
        -1 === e ? R.strings.comp7_ext.dash() : a(e, r, t);
export { i as n, a as t };
