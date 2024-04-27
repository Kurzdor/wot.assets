(() => {
    'use strict';
    var e,
        r = {
            5394: (e, r, t) => {
                t.d(r, { i: () => c });
                var a = t(6483),
                    o = t.n(a),
                    i = t(6179),
                    s = t.n(i);
                const n = {
                    base: 'Divider_base_0f',
                    base__dots: 'Divider_base__dots_be',
                    base__dashed: 'Divider_base__dashed_d5',
                    base__short: 'Divider_base__short_92',
                };
                var d;
                !(function (e) {
                    (e.Dots = 'dots'), (e.Dashed = 'dashed'), (e.Short = 'short');
                })(d || (d = {}));
                const c = s().memo(({ type: e = d.Dashed, classMix: r }) =>
                    s().createElement('div', { className: o()(n.base, n[`base__${e}`], r) }),
                );
            },
            7945: (e, r, t) => {
                var a = t(6483),
                    o = t.n(a),
                    i = t(6179),
                    s = t.n(i),
                    n = t(5394);
                const d = 'GradientDecorator_base_c4',
                    c = 'GradientDecorator_child_ee',
                    l = 'GradientDecorator_divider_e3',
                    _ = 'GradientDecorator_divider__bottom_47';
                (0, i.memo)(({ classMix: e, children: r, topDivider: t = !0, bottomDivider: a = !0 }) =>
                    s().createElement(
                        'div',
                        { className: o()(d, e) },
                        t && s().createElement(n.i, { classMix: l }),
                        s().createElement('div', { className: c }, r),
                        a && s().createElement(n.i, { classMix: o()(l, _) }),
                    ),
                );
            },
        },
        t = {};
    function a(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var i = (t[e] = { exports: {} });
        return r[e](i, i.exports, a), i.exports;
    }
    (a.m = r),
        (e = []),
        (a.O = (r, t, o, i) => {
            if (!t) {
                var s = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, o, i] = e[l], n = !0, d = 0; d < t.length; d++)
                        (!1 & i || s >= i) && Object.keys(a.O).every((e) => a.O[e](t[d]))
                            ? t.splice(d--, 1)
                            : ((n = !1), i < s && (s = i));
                    if (n) {
                        e.splice(l--, 1);
                        var c = o();
                        void 0 !== c && (r = c);
                    }
                }
                return r;
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
            e[l] = [t, o, i];
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
        (a.j = 283),
        (() => {
            var e = { 283: 0, 942: 0 };
            a.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var o,
                        i,
                        [s, n, d] = t,
                        c = 0;
                    if (s.some((r) => 0 !== e[r])) {
                        for (o in n) a.o(n, o) && (a.m[o] = n[o]);
                        if (d) var l = d(a);
                    }
                    for (r && r(t); c < s.length; c++) (i = s[c]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return a.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
        })();
    var o = a.O(void 0, [705], () => a(7945));
    o = a.O(o);
})();
