(() => {
    'use strict';
    var e,
        n = {
            906: (e, n, o) => {
                var t = o(6179),
                    r = o.n(t),
                    i = o(6483),
                    a = o.n(i);
                const _ = {
                    base: 'Bonus_base_dd',
                    base__fitting: 'Bonus_base__fitting_d1',
                    icon: 'Bonus_icon_3b',
                    icon__battleBooster: 'Bonus_icon__battleBooster_66',
                    icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                    icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                    icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                    icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                    icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                    icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                };
                r().memo(({ isTemporary: e, overlayType: n, overlaySource: o }) => {
                    const i = a()(_.base, e && _.base__fitting),
                        s = a()(_.icon, _[`icon__${n}`]),
                        u = (0, t.useMemo)(() => ({ backgroundImage: `url(${o})` }), [o]);
                    return r().createElement(
                        'div',
                        { className: i },
                        r().createElement('div', { className: s, style: u }),
                    );
                });
            },
            3141: (e, n, o) => {
                o(6483), o(6179), o(906), o(4105);
            },
            4105: (e, n, o) => {
                o(6179), o(6483);
            },
        },
        o = {};
    function t(e) {
        var r = o[e];
        if (void 0 !== r) return r.exports;
        var i = (o[e] = { exports: {} });
        return n[e](i, i.exports, t), i.exports;
    }
    (t.m = n),
        (e = []),
        (t.O = (n, o, r, i) => {
            if (!o) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [o, r, i] = e[c], _ = !0, s = 0; s < o.length; s++)
                        (!1 & i || a >= i) && Object.keys(t.O).every((e) => t.O[e](o[s]))
                            ? o.splice(s--, 1)
                            : ((_ = !1), i < a && (a = i));
                    if (_) {
                        e.splice(c--, 1);
                        var u = r();
                        void 0 !== u && (n = u);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [o, r, i];
        }),
        (t.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return t.d(n, { a: n }), n;
        }),
        (t.d = (e, n) => {
            for (var o in n) t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
        }),
        (t.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (t.j = 833),
        (() => {
            var e = { 833: 0, 754: 0, 795: 0 };
            t.O.j = (n) => 0 === e[n];
            var n = (n, o) => {
                    var r,
                        i,
                        [a, _, s] = o,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in _) t.o(_, r) && (t.m[r] = _[r]);
                        if (s) var c = s(t);
                    }
                    for (n && n(o); u < a.length; u++) (i = a[u]), t.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return t.O(c);
                },
                o = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            o.forEach(n.bind(null, 0)), (o.push = n.bind(null, o.push.bind(o)));
        })();
    var r = t.O(void 0, [727], () => t(3141));
    r = t.O(r);
})();
