(() => {
    'use strict';
    var r,
        e = {
            7024: (r, e, t) => {
                t(6179);
                R.strings.veh_post_progression.tooltips.notEnoughCredits;
            },
        },
        t = {};
    function o(r) {
        var n = t[r];
        if (void 0 !== n) return n.exports;
        var i = (t[r] = { exports: {} });
        return e[r](i, i.exports, o), i.exports;
    }
    (o.m = e),
        (r = []),
        (o.O = (e, t, n, i) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < r.length; l++) {
                    for (var [t, n, i] = r[l], s = !0, f = 0; f < t.length; f++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((r) => o.O[r](t[f]))
                            ? t.splice(f--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        r.splice(l--, 1);
                        var u = n();
                        void 0 !== u && (e = u);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = r.length; l > 0 && r[l - 1][2] > i; l--) r[l] = r[l - 1];
            r[l] = [t, n, i];
        }),
        (o.n = (r) => {
            var e = r && r.__esModule ? () => r.default : () => r;
            return o.d(e, { a: e }), e;
        }),
        (o.d = (r, e) => {
            for (var t in e) o.o(e, t) && !o.o(r, t) && Object.defineProperty(r, t, { enumerable: !0, get: e[t] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (r) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
        (o.j = 547),
        (() => {
            var r = { 547: 0 };
            o.O.j = (e) => 0 === r[e];
            var e = (e, t) => {
                    var n,
                        i,
                        [a, s, f] = t,
                        u = 0;
                    if (a.some((e) => 0 !== r[e])) {
                        for (n in s) o.o(s, n) && (o.m[n] = s[n]);
                        if (f) var l = f(o);
                    }
                    for (e && e(t); u < a.length; u++) (i = a[u]), o.o(r, i) && r[i] && r[i][0](), (r[i] = 0);
                    return o.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var n = o.O(void 0, [428], () => o(7024));
    n = o.O(n);
})();
