(() => {
    'use strict';
    var e,
        n = {
            527: (e, n, t) => {
                var o = t(2472),
                    i = t(1176);
                (0, o.E)('clientResized'), (0, o.E)('self.onScaleUpdated');
                const r = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') };
                !(function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && (0, i.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, i.R)(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, i.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const a = `mouse${n}`,
                                        s = r[n]((e) => t([e, 'outside']));
                                    function d(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, d),
                                        o(),
                                        () => {
                                            i &&
                                                (s(),
                                                window.removeEventListener(a, d),
                                                (e.listeners -= 1),
                                                o(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
                        },
                        enableOutside() {
                            e.enabled && (0, i.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, i.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, n, t) => {
                t.d(n, { playSound: () => o.G, setRTPC: () => o.E });
                t(527);
                var o = t(2493);
            },
            1176: (e, n, t) => {
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(n, { R: () => o });
            },
            2493: (e, n, t) => {
                function o(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function i(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                t.d(n, { E: () => i, G: () => o });
            },
            2472: (e, n, t) => {
                function o(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                t.d(n, { E: () => o });
            },
            514: (e, n, t) => {
                var o = t(5959);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(i).reduce((e, n) => ((e[n] = () => (0, o.playSound)(i[n])), e), {});
                Object.assign({}, r, { sound: o.playSound }), o.setRTPC;
            },
            3633: (e, n, t) => {
                t(6483), t(514), t(6179);
            },
        },
        t = {};
    function o(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var r = (t[e] = { exports: {} });
        return n[e](r, r.exports, o), r.exports;
    }
    (o.m = n),
        (e = []),
        (o.O = (n, t, i, r) => {
            if (!t) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, i, r] = e[u], s = !0, d = 0; d < t.length; d++)
                        (!1 & r || a >= r) && Object.keys(o.O).every((e) => o.O[e](t[d]))
                            ? t.splice(d--, 1)
                            : ((s = !1), r < a && (a = r));
                    if (s) {
                        e.splice(u--, 1);
                        var l = i();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            r = r || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
            e[u] = [t, i, r];
        }),
        (o.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return o.d(n, { a: n }), n;
        }),
        (o.d = (e, n) => {
            for (var t in n) o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (o.j = 79),
        (() => {
            var e = { 79: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        r,
                        [a, s, d] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) o.o(s, i) && (o.m[i] = s[i]);
                        if (d) var u = d(o);
                    }
                    for (n && n(t); l < a.length; l++) (r = a[l]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return o.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var i = o.O(void 0, [866], () => o(3633));
    i = o.O(i);
})();
