(() => {
    'use strict';
    var e,
        t = {
            3638: (e, t, a) => {
                var s = a(6483),
                    n = a.n(s),
                    r = a(7727),
                    o = a(6179),
                    _ = a.n(o);
                const l = {
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
                var i = a(2106);
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
                    onMouseUp: v,
                    onMouseLeave: g,
                    onClick: p,
                }) => {
                    const C = (0, o.useRef)(null),
                        y = (0, o.useState)(a),
                        B = y[0],
                        k = y[1],
                        E = (0, o.useState)(!1),
                        w = E[0],
                        H = E[1],
                        M = (0, o.useState)(!1),
                        x = M[0],
                        O = M[1],
                        G = (0, o.useCallback)(() => {
                            u || (C.current && (C.current.focus(), k(!0)));
                        }, [u]),
                        N = (0, o.useCallback)(
                            (e) => {
                                B && null !== C.current && !C.current.contains(e.target) && k(!1);
                            },
                            [B],
                        ),
                        A = (0, o.useCallback)(
                            (e) => {
                                u || (p && p(e));
                            },
                            [u, p],
                        ),
                        L = (0, o.useCallback)(
                            (e) => {
                                u || (null !== b && (0, r.G)(b), d && d(e), O(!0));
                            },
                            [u, b, d],
                        ),
                        S = (0, o.useCallback)(
                            (e) => {
                                f && f(e);
                            },
                            [f],
                        ),
                        j = (0, o.useCallback)(
                            (e) => {
                                u || (v && v(e), H(!1));
                            },
                            [u, v],
                        ),
                        D = (0, o.useCallback)(
                            (e) => {
                                u || (null !== m && (0, r.G)(m), h && h(e), a && G(), H(!0));
                            },
                            [u, m, h, G, a],
                        ),
                        F = (0, o.useCallback)(
                            (e) => {
                                u || (g && g(e), H(!1));
                            },
                            [u, g],
                        ),
                        P = n()(
                            l.base,
                            l[`base__${s}`],
                            {
                                [l.base__disabled]: u,
                                [l[`base__${t}`]]: t,
                                [l.base__focus]: B,
                                [l.base__highlightActive]: w,
                                [l.base__firstHover]: x,
                            },
                            c,
                        ),
                        U = n()(l.state, l.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, o.useEffect)(() => {
                            k(a);
                        }, [a]),
                        _().createElement(
                            'div',
                            {
                                ref: C,
                                className: P,
                                onMouseEnter: L,
                                onMouseMove: S,
                                onMouseUp: j,
                                onMouseDown: D,
                                onMouseLeave: F,
                                onClick: A,
                            },
                            s !== i.L.ghost &&
                                _().createElement(
                                    _().Fragment,
                                    null,
                                    _().createElement('div', { className: l.back }),
                                    _().createElement('span', { className: l.texture }),
                                ),
                            _().createElement(
                                'span',
                                { className: U },
                                _().createElement('span', { className: l.stateDisabled }),
                                _().createElement('span', { className: l.stateHighlightHover }),
                                _().createElement('span', { className: l.stateHighlightActive }),
                            ),
                            _().createElement(
                                'span',
                                { className: l.content, lang: R.strings.settings.LANGUAGE_CODE() },
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
            5611: (e, t, a) => {
                a(3638), a(2106), a(6179);
                R.strings.seniority_awards.rewardsView;
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
                    for (var [a, n, r] = e[u], _ = !0, l = 0; l < a.length; l++)
                        (!1 & r || o >= r) && Object.keys(s.O).every((e) => s.O[e](a[l]))
                            ? a.splice(l--, 1)
                            : ((_ = !1), r < o && (o = r));
                    if (_) {
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
        (s.j = 521),
        (() => {
            var e = { 521: 0 };
            s.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [o, _, l] = a,
                        i = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (n in _) s.o(_, n) && (s.m[n] = _[n]);
                        if (l) var u = l(s);
                    }
                    for (t && t(a); i < o.length; i++) (r = o[i]), s.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return s.O(u);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var n = s.O(void 0, [851], () => s(5611));
    n = s.O(n);
})();
