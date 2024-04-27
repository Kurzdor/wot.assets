(() => {
    'use strict';
    var e,
        t = {
            3457: (e, t, a) => {
                var s = a(6483),
                    n = a.n(s),
                    r = a(7727),
                    o = a(6179),
                    l = a.n(o),
                    _ = a(6880),
                    i = a(2106);
                const u = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: s,
                    disabled: u,
                    mixClass: c,
                    soundHover: b,
                    soundClick: m,
                    onMouseEnter: d,
                    onMouseMove: f,
                    onMouseDown: h,
                    onMouseUp: g,
                    onMouseLeave: p,
                    onClick: v,
                }) => {
                    const C = (0, o.useRef)(null),
                        y = (0, o.useState)(a),
                        B = y[0],
                        k = y[1],
                        E = (0, o.useState)(!1),
                        Z = E[0],
                        H = E[1],
                        w = (0, o.useState)(!1),
                        M = w[0],
                        x = w[1],
                        O = (0, o.useCallback)(() => {
                            u || (C.current && (C.current.focus(), k(!0)));
                        }, [u]),
                        G = (0, o.useCallback)(
                            (e) => {
                                B && null !== C.current && !C.current.contains(e.target) && k(!1);
                            },
                            [B],
                        ),
                        N = (0, o.useCallback)(
                            (e) => {
                                u || (v && v(e));
                            },
                            [u, v],
                        ),
                        A = (0, o.useCallback)(
                            (e) => {
                                u || (null !== b && (0, r.G)(b), d && d(e), x(!0));
                            },
                            [u, b, d],
                        ),
                        L = (0, o.useCallback)(
                            (e) => {
                                f && f(e);
                            },
                            [f],
                        ),
                        S = (0, o.useCallback)(
                            (e) => {
                                u || (g && g(e), H(!1));
                            },
                            [u, g],
                        ),
                        j = (0, o.useCallback)(
                            (e) => {
                                u || (null !== m && (0, r.G)(m), h && h(e), a && O(), H(!0));
                            },
                            [u, m, h, O, a],
                        ),
                        D = (0, o.useCallback)(
                            (e) => {
                                u || (p && p(e), H(!1));
                            },
                            [u, p],
                        ),
                        P = n()(
                            _.Z.base,
                            _.Z[`base__${s}`],
                            {
                                [_.Z.base__disabled]: u,
                                [_.Z[`base__${t}`]]: t,
                                [_.Z.base__focus]: B,
                                [_.Z.base__highlightActive]: Z,
                                [_.Z.base__firstHover]: M,
                            },
                            c,
                        ),
                        F = n()(_.Z.state, _.Z.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', G),
                                () => {
                                    document.removeEventListener('mousedown', G);
                                }
                            ),
                            [G],
                        ),
                        (0, o.useEffect)(() => {
                            k(a);
                        }, [a]),
                        l().createElement(
                            'div',
                            {
                                ref: C,
                                className: P,
                                onMouseEnter: A,
                                onMouseMove: L,
                                onMouseUp: S,
                                onMouseDown: j,
                                onMouseLeave: D,
                                onClick: N,
                            },
                            s !== i.L.ghost &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: _.Z.back }),
                                    l().createElement('span', { className: _.Z.texture }),
                                ),
                            l().createElement(
                                'span',
                                { className: F },
                                l().createElement('span', { className: _.Z.stateDisabled }),
                                l().createElement('span', { className: _.Z.stateHighlightHover }),
                                l().createElement('span', { className: _.Z.stateHighlightActive }),
                            ),
                            l().createElement(
                                'span',
                                { className: _.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                u.defaultProps = { type: i.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                (0, o.memo)(u);
            },
            2106: (e, t, a) => {
                let s, n;
                a.d(t, { L: () => s }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(s || (s = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(n || (n = {}));
            },
            7727: (e, t, a) => {
                function s(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { G: () => s });
            },
            9525: (e, t, a) => {
                a(6483), a(3457), a(6179);
                R.strings.battle_pass.battlePassBuyView;
            },
            6880: (e, t, a) => {
                a.d(t, { Z: () => s });
                const s = {
                    base: 'CButton_base_40',
                    base__main: 'CButton_base__main_42',
                    base__primary: 'CButton_base__primary_7f',
                    base__primaryGreen: 'CButton_base__primaryGreen_6f',
                    base__primaryRed: 'CButton_base__primaryRed_ec',
                    base__secondary: 'CButton_base__secondary_50',
                    base__ghost: 'CButton_base__ghost_ed',
                    base__extraSmall: 'CButton_base__extraSmall_27',
                    base__small: 'CButton_base__small_df',
                    base__medium: 'CButton_base__medium_74',
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
        },
        a = {};
    function s(e) {
        var n = a[e];
        if (void 0 !== n) return n.exports;
        var r = (a[e] = { exports: {} });
        return t[e](r, r.exports, s), r.exports;
    }
    (s.m = t),
        (e = []),
        (s.O = (t, a, n, r) => {
            if (!a) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a, n, r] = e[u], l = !0, _ = 0; _ < a.length; _++)
                        (!1 & r || o >= r) && Object.keys(s.O).every((e) => s.O[e](a[_]))
                            ? a.splice(_--, 1)
                            : ((l = !1), r < o && (o = r));
                    if (l) {
                        e.splice(u--, 1);
                        var i = n();
                        void 0 !== i && (t = i);
                    }
                }
                return t;
            }
            r = r || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
            e[u] = [a, n, r];
        }),
        (s.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return s.d(t, { a: t }), t;
        }),
        (s.d = (e, t) => {
            for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (s.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (s.j = 523),
        (() => {
            var e = { 523: 0 };
            s.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [o, l, _] = a,
                        i = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (n in l) s.o(l, n) && (s.m[n] = l[n]);
                        if (_) var u = _(s);
                    }
                    for (t && t(a); i < o.length; i++) (r = o[i]), s.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return s.O(u);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var n = s.O(void 0, [519], () => s(9525));
    n = s.O(n);
})();
