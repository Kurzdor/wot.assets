(() => {
    'use strict';
    var e,
        r = {
            7727: (e, r, t) => {},
            9605: (e, r, t) => {
                t(6179), t(6483);
                let n;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(n || (n = {}));
            },
            9344: (e, r, t) => {
                t(6483), t(7727), t(6179), t(9605);
            },
        },
        t = {};
    function n(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var a = (t[e] = { exports: {} });
        return r[e](a, a.exports, n), a.exports;
    }
    (n.m = r),
        (e = []),
        (n.O = (r, t, o, a) => {
            if (!t) {
                var i = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, o, a] = e[c], f = !0, u = 0; u < t.length; u++)
                        (!1 & a || i >= a) && Object.keys(n.O).every((e) => n.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((f = !1), a < i && (i = a));
                    if (f) {
                        e.splice(c--, 1);
                        var l = o();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            a = a || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
            e[c] = [t, o, a];
        }),
        (n.n = (e) => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return n.d(r, { a: r }), r;
        }),
        (n.d = (e, r) => {
            for (var t in r) n.o(r, t) && !n.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (n.j = 975),
        (() => {
            var e = { 975: 0, 287: 0 };
            n.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var o,
                        a,
                        [i, f, u] = t,
                        l = 0;
                    if (i.some((r) => 0 !== e[r])) {
                        for (o in f) n.o(f, o) && (n.m[o] = f[o]);
                        if (u) var c = u(n);
                    }
                    for (r && r(t); l < i.length; l++) (a = i[l]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return n.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
        })();
    var o = n.O(void 0, [727], () => n(9344));
    o = n.O(o);
})();
