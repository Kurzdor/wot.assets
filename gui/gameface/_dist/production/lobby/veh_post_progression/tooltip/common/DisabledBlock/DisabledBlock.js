(() => {
    'use strict';
    var e,
        r = {
            3266: (e, r, t) => {
                t(6179);
                R.strings.veh_post_progression.tooltips.feature.disabled;
            },
        },
        t = {};
    function o(e) {
        var n = t[e];
        if (void 0 !== n) return n.exports;
        var i = (t[e] = { exports: {} });
        return r[e](i, i.exports, o), i.exports;
    }
    (o.m = r),
        (e = []),
        (o.O = (r, t, n, i) => {
            if (!t) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, n, i] = e[u], s = !0, f = 0; f < t.length; f++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[f]))
                            ? t.splice(f--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var l = n();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [t, n, i];
        }),
        (o.n = (e) => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return o.d(r, { a: r }), r;
        }),
        (o.d = (e, r) => {
            for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (o.j = 760),
        (() => {
            var e = { 760: 0 };
            o.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var n,
                        i,
                        [a, s, f] = t,
                        l = 0;
                    if (a.some((r) => 0 !== e[r])) {
                        for (n in s) o.o(s, n) && (o.m[n] = s[n]);
                        if (f) var u = f(o);
                    }
                    for (r && r(t); l < a.length; l++) (i = a[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return o.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
        })();
    var n = o.O(void 0, [428], () => o(3266));
    n = o.O(n);
})();
