(() => {
    'use strict';
    var e,
        r = {
            6254: (e, r, t) => {
                t(6483), t(6179);
                let o;
                !(function (e) {
                    (e.PROGRESSION = 'progression'), (e.CHAPTER_CHOICE = 'chapter_choice');
                })(o || (o = {}));
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
                for (l = 0; l < e.length; l++) {
                    for (var [t, n, i] = e[l], f = !0, c = 0; c < t.length; c++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[c]))
                            ? t.splice(c--, 1)
                            : ((f = !1), i < a && (a = i));
                    if (f) {
                        e.splice(l--, 1);
                        var u = n();
                        void 0 !== u && (r = u);
                    }
                }
                return r;
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
            e[l] = [t, n, i];
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
        (o.j = 1937),
        (() => {
            var e = { 1937: 0 };
            o.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var n,
                        i,
                        [a, f, c] = t,
                        u = 0;
                    if (a.some((r) => 0 !== e[r])) {
                        for (n in f) o.o(f, n) && (o.m[n] = f[n]);
                        if (c) var l = c(o);
                    }
                    for (r && r(t); u < a.length; u++) (i = a[u]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return o.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
        })();
    var n = o.O(void 0, [1519], () => o(6254));
    n = o.O(n);
})();
