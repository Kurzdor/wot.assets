(() => {
    'use strict';
    var e,
        t = {
            7568: (e, t, r) => {
                var n = r(6179),
                    o = r.n(n);
                const a = [
                    'width',
                    'height',
                    'getSrcByFrame',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'loop',
                    'state',
                    'onAnimationComplete',
                ];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const c = () => {};
                (0, n.memo)((e) => {
                    let t = e.width,
                        r = e.height,
                        l = e.getSrcByFrame,
                        s = e.frameCount,
                        u = e.onAnimate,
                        f = void 0 === u ? c : u,
                        v = e.frameTime,
                        d = void 0 === v ? 33 : v,
                        h = e.initialFrameIndex,
                        m = void 0 === h ? 0 : h,
                        p = e.loop,
                        g = void 0 === p || p,
                        b = e.state,
                        w = void 0 === b ? 'play' : b,
                        O = e.onAnimationComplete,
                        y = void 0 === O ? c : O,
                        j = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                o = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o;
                        })(e, a);
                    const x = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            const e = x.current;
                            if (!e) return;
                            const n = s - 1,
                                o = e.getContext('2d'),
                                a = (n) => {
                                    o.clearRect(0, 0, e.width, e.height), o.drawImage(n, 0, 0, t, r);
                                };
                            if ('stop' === w) {
                                const e = l(0),
                                    t = new Image();
                                t.src = e;
                                const r = () => a(t);
                                return t.addEventListener('load', r), () => t.removeEventListener('load', r);
                            }
                            const i = ((e, t) => {
                                    const r = [];
                                    for (let n = 0; n < e; n++) {
                                        const e = new Image();
                                        (e.src = t(n)), r.push(e);
                                    }
                                    return r;
                                })(s, l),
                                c = ((e, t = 0) => {
                                    let r = t;
                                    return () => {
                                        const t = r;
                                        return (r += 1), r > e && (r = 0), t;
                                    };
                                })(n, m),
                                u = setInterval(() => {
                                    const e = c(),
                                        t = i[e];
                                    a(i[e]), f(e, t), e === n && (y(), g || clearInterval(u));
                                }, d);
                            return () => clearInterval(u);
                        }, [s, d, l, r, m, g, f, y, w, t]),
                        o().createElement('canvas', i({}, j, { width: t, height: r, ref: x }))
                    );
                });
            },
        },
        r = {};
    function n(e) {
        var o = r[e];
        if (void 0 !== o) return o.exports;
        var a = (r[e] = { exports: {} });
        return t[e](a, a.exports, n), a.exports;
    }
    (n.m = t),
        (e = []),
        (n.O = (t, r, o, a) => {
            if (!r) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r, o, a] = e[u], c = !0, l = 0; l < r.length; l++)
                        (!1 & a || i >= a) && Object.keys(n.O).every((e) => n.O[e](r[l]))
                            ? r.splice(l--, 1)
                            : ((c = !1), a < i && (i = a));
                    if (c) {
                        e.splice(u--, 1);
                        var s = o();
                        void 0 !== s && (t = s);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
            e[u] = [r, o, a];
        }),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
        }),
        (n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.j = 802),
        (() => {
            var e = { 802: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var o,
                        a,
                        [i, c, l] = r,
                        s = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in c) n.o(c, o) && (n.m[o] = c[o]);
                        if (l) var u = l(n);
                    }
                    for (t && t(r); s < i.length; s++) (a = i[s]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return n.O(u);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var o = n.O(void 0, [503], () => n(7568));
    o = n.O(o);
})();
