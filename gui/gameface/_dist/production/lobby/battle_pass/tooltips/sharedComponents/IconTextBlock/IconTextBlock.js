(() => {
    'use strict';
    var e,
        r = {
            8487: (e, r, t) => {
                var n = t(6179),
                    o = t.n(n),
                    a = t(6483),
                    c = t.n(a);
                const i = 'IconTextBlock_base_46',
                    l = 'IconTextBlock_icon_c9',
                    s = 'IconTextBlock_text_89';
                (0, n.memo)(({ icon: e, text: r, mixClass: t }) => {
                    const a = (0, n.useMemo)(() => ({ backgroundImage: `url(${e})` }), [e]),
                        u = c()(i, t);
                    return o().createElement(
                        'div',
                        { className: u },
                        o().createElement('div', { className: l, style: a }),
                        o().createElement('div', { className: s }, r),
                    );
                });
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
                var c = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, o, a] = e[u], i = !0, l = 0; l < t.length; l++)
                        (!1 & a || c >= a) && Object.keys(n.O).every((e) => n.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((i = !1), a < c && (c = a));
                    if (i) {
                        e.splice(u--, 1);
                        var s = o();
                        void 0 !== s && (r = s);
                    }
                }
                return r;
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
            e[u] = [t, o, a];
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
        (n.j = 109),
        (() => {
            var e = { 109: 0 };
            n.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var o,
                        a,
                        [c, i, l] = t,
                        s = 0;
                    if (c.some((r) => 0 !== e[r])) {
                        for (o in i) n.o(i, o) && (n.m[o] = i[o]);
                        if (l) var u = l(n);
                    }
                    for (r && r(t); s < c.length; s++) (a = c[s]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return n.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
        })();
    var o = n.O(void 0, [519], () => n(8487));
    o = n.O(o);
})();
