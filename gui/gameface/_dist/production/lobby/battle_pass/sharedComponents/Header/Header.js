(() => {
    'use strict';
    var e,
        r = {
            801: (e, r, t) => {
                t(6179);
            },
        },
        t = {};
    function o(e) {
        var n = t[e];
        if (void 0 !== n) return n.exports;
        var a = (t[e] = { exports: {} });
        return r[e](a, a.exports, o), a.exports;
    }
    (o.m = r),
        (e = []),
        (o.O = (r, t, n, a) => {
            if (!t) {
                var i = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    for (var [t, n, a] = e[s], f = !0, u = 0; u < t.length; u++)
                        (!1 & a || i >= a) && Object.keys(o.O).every((e) => o.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((f = !1), a < i && (i = a));
                    if (f) {
                        e.splice(s--, 1);
                        var l = n();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            a = a || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
            e[s] = [t, n, a];
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
        (o.j = 2286),
        (() => {
            var e = { 2286: 0 };
            o.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var n,
                        a,
                        [i, f, u] = t,
                        l = 0;
                    if (i.some((r) => 0 !== e[r])) {
                        for (n in f) o.o(f, n) && (o.m[n] = f[n]);
                        if (u) var s = u(o);
                    }
                    for (r && r(t); l < i.length; l++) (a = i[l]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return o.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
        })();
    var n = o.O(void 0, [1519], () => o(801));
    n = o.O(n);
})();
