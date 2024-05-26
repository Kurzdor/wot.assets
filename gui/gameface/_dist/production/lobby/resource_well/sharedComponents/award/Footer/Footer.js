(() => {
    'use strict';
    var e,
        t = {
            7727: (e, t, a) => {
                function s(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { G: () => s });
            },
            984: (e, t, a) => {
                var s = a(6483),
                    n = a.n(s),
                    r = a(7727),
                    o = a(6179),
                    l = a.n(o);
                const _ = {
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
                let i, u;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(i || (i = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(u || (u = {}));
                const c = ({
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
                    onMouseLeave: v,
                    onClick: p,
                }) => {
                    const C = (0, o.useRef)(null),
                        y = (0, o.useState)(a),
                        B = y[0],
                        k = y[1],
                        E = (0, o.useState)(!1),
                        H = E[0],
                        w = E[1],
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
                        S = (0, o.useCallback)(
                            (e) => {
                                u || (null !== b && (0, r.G)(b), d && d(e), O(!0));
                            },
                            [u, b, d],
                        ),
                        j = (0, o.useCallback)(
                            (e) => {
                                f && f(e);
                            },
                            [f],
                        ),
                        D = (0, o.useCallback)(
                            (e) => {
                                u || (g && g(e), w(!1));
                            },
                            [u, g],
                        ),
                        L = (0, o.useCallback)(
                            (e) => {
                                u || (null !== m && (0, r.G)(m), h && h(e), a && G(), w(!0));
                            },
                            [u, m, h, G, a],
                        ),
                        F = (0, o.useCallback)(
                            (e) => {
                                u || (v && v(e), w(!1));
                            },
                            [u, v],
                        ),
                        P = n()(
                            _.base,
                            _[`base__${s}`],
                            {
                                [_.base__disabled]: u,
                                [_[`base__${t}`]]: t,
                                [_.base__focus]: B,
                                [_.base__highlightActive]: H,
                                [_.base__firstHover]: x,
                            },
                            c,
                        ),
                        U = n()(_.state, _.state__default);
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
                        l().createElement(
                            'div',
                            {
                                ref: C,
                                className: P,
                                onMouseEnter: S,
                                onMouseMove: j,
                                onMouseUp: D,
                                onMouseDown: L,
                                onMouseLeave: F,
                                onClick: A,
                            },
                            s !== i.ghost &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: _.back }),
                                    l().createElement('span', { className: _.texture }),
                                ),
                            l().createElement(
                                'span',
                                { className: U },
                                l().createElement('span', { className: _.stateDisabled }),
                                l().createElement('span', { className: _.stateHighlightHover }),
                                l().createElement('span', { className: _.stateHighlightActive }),
                            ),
                            l().createElement(
                                'span',
                                { className: _.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: i.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                (0, o.memo)(c), R.strings.resource_well;
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
        (s.j = 815),
        (() => {
            var e = { 815: 0 };
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
    var n = s.O(void 0, [52], () => s(984));
    n = s.O(n);
})();
