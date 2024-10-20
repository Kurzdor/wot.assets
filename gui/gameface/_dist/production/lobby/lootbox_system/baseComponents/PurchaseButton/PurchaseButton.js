(() => {
    'use strict';
    var e,
        n = {
            527: (e, n, i) => {
                var o = i(2472),
                    t = i(1176);
                (0, o.E)('clientResized'), (0, o.E)('self.onScaleUpdated');
                const r = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') };
                !(function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && (0, t.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, t.R)(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, t.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (n, i) => (
                            (n[i] = (function (n) {
                                return (i) => {
                                    e.listeners += 1;
                                    let t = !0;
                                    const a = `mouse${n}`,
                                        l = r[n]((e) => i([e, 'outside']));
                                    function s(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        o(),
                                        () => {
                                            t &&
                                                (l(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (t = !1));
                                        }
                                    );
                                };
                            })(i)),
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
                            e.enabled && (0, t.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, t.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, n, i) => {
                i.d(n, { playSound: () => o.G, setRTPC: () => o.E });
                i(527);
                var o = i(2493);
            },
            1176: (e, n, i) => {
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(n, { R: () => o });
            },
            2493: (e, n, i) => {
                function o(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function t(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((i) => {
                        console.error(`setRTPC('${e}', '${n}'): `, i);
                    });
                }
                i.d(n, { E: () => t, G: () => o });
            },
            2472: (e, n, i) => {
                function o(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                i.d(n, { E: () => o });
            },
            514: (e, n, i) => {
                var o = i(5959);
                const t = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(t).reduce((e, n) => ((e[n] = () => (0, o.playSound)(t[n])), e), {});
                Object.assign({}, r, { sound: o.playSound }), o.setRTPC;
            },
            2984: (e, n, i) => {
                i(6483), i(514), i(6179), i(9674);
            },
            9674: (e, n, i) => {
                const o = {
                        entryHover: 'gui_lb_icon_hover',
                        boxMouseEnter: 'gui_lb_highlight_on',
                        boxMouseLeave: 'gui_lb_highlight_off',
                        boxAppear: 'gui_lb_appear',
                        purchaseHover: 'gui_lb_buy_more',
                        purchaseClick: 'gui_lb_ingame_shop_box_buy',
                        rareAnimation: 'gui_lb_rare_reward_fx',
                        epicAnimation: 'gui_lb_epic_reward_fx',
                        rewardAppear: 'gui_lb_reward_item_default',
                        multiRewardAppear: 'gui_random_reward_appear',
                        compensationAppear: 'gui_reward_screen_compensation',
                        open: 'gui_lb_video_default_open',
                        openRare: 'gui_lb_video_default_rare_open',
                        switch: 'gui_lb_type_switch',
                        statsOpen: 'gui_lb_stats_open',
                        statsClose: 'gui_lb_stats_close',
                        infoPageTabHover: 'gui_lb_infopage_box_highlight',
                        infoPageTabClick: 'gui_lb_infopage_box_click',
                    },
                    t = {
                        overlayRareVideo: 'gui_lb_video_special_appear',
                        open: 'gui_lb_video_special_open',
                        openRare: 'gui_lb_video_special_rare_open',
                    };
                Object.assign({}, o, t);
            },
        },
        i = {};
    function o(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var r = (i[e] = { exports: {} });
        return n[e](r, r.exports, o), r.exports;
    }
    (o.m = n),
        (e = []),
        (o.O = (n, i, t, r) => {
            if (!i) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [i, t, r] = e[d], l = !0, s = 0; s < i.length; s++)
                        (!1 & r || a >= r) && Object.keys(o.O).every((e) => o.O[e](i[s]))
                            ? i.splice(s--, 1)
                            : ((l = !1), r < a && (a = r));
                    if (l) {
                        e.splice(d--, 1);
                        var u = t();
                        void 0 !== u && (n = u);
                    }
                }
                return n;
            }
            r = r || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
            e[d] = [i, t, r];
        }),
        (o.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return o.d(n, { a: n }), n;
        }),
        (o.d = (e, n) => {
            for (var i in n) o.o(n, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: n[i] });
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
        (o.j = 894),
        (() => {
            var e = { 894: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, i) => {
                    var t,
                        r,
                        [a, l, s] = i,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (t in l) o.o(l, t) && (o.m[t] = l[t]);
                        if (s) var d = s(o);
                    }
                    for (n && n(i); u < a.length; u++) (r = a[u]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return o.O(d);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(n.bind(null, 0)), (i.push = n.bind(null, i.push.bind(i)));
        })();
    var t = o.O(void 0, [866], () => o(2984));
    t = o.O(t);
})();
