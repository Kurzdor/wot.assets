(() => {
    'use strict';
    var e,
        r = {
            5394: (e, r, t) => {
                var a = t(6483),
                    o = t.n(a),
                    s = t(6179),
                    n = t.n(s);
                const i = {
                    base: 'Divider_base_0f',
                    base__dots: 'Divider_base__dots_be',
                    base__dashed: 'Divider_base__dashed_d5',
                    base__short: 'Divider_base__short_92',
                };
                var d;
                !(function (e) {
                    (e.Dots = 'dots'), (e.Dashed = 'dashed'), (e.Short = 'short');
                })(d || (d = {}));
                n().memo(({ type: e = d.Dashed, classMix: r }) =>
                    n().createElement('div', { className: o()(i.base, i[`base__${e}`], r) }),
                );
            },
        },
        t = {};
    function a(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var s = (t[e] = { exports: {} });
        return r[e](s, s.exports, a), s.exports;
    }
    (a.m = r),
        (e = []),
        (a.O = (r, t, o, s) => {
            if (!t) {
                var n = 1 / 0;
                for (v = 0; v < e.length; v++) {
                    for (var [t, o, s] = e[v], i = !0, d = 0; d < t.length; d++)
                        (!1 & s || n >= s) && Object.keys(a.O).every((e) => a.O[e](t[d]))
                            ? t.splice(d--, 1)
                            : ((i = !1), s < n && (n = s));
                    if (i) {
                        e.splice(v--, 1);
                        var f = o();
                        void 0 !== f && (r = f);
                    }
                }
                return r;
            }
            s = s || 0;
            for (var v = e.length; v > 0 && e[v - 1][2] > s; v--) e[v] = e[v - 1];
            e[v] = [t, o, s];
        }),
        (a.n = (e) => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return a.d(r, { a: r }), r;
        }),
        (a.d = (e, r) => {
            for (var t in r) a.o(r, t) && !a.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        }),
        (a.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (a.j = 942),
        (() => {
            var e = { 942: 0 };
            a.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var o,
                        s,
                        [n, i, d] = t,
                        f = 0;
                    if (n.some((r) => 0 !== e[r])) {
                        for (o in i) a.o(i, o) && (a.m[o] = i[o]);
                        if (d) var v = d(a);
                    }
                    for (r && r(t); f < n.length; f++) (s = n[f]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return a.O(v);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
        })();
    var o = a.O(void 0, [705], () => a(5394));
    o = a.O(o);
})();
