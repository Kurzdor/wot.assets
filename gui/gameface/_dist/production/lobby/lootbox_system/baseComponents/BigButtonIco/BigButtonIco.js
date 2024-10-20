(() => {
    'use strict';
    var e,
        t = {
            3457: (e, t, a) => {
                var n = a(6483),
                    s = a.n(n),
                    o = a(7727),
                    r = a(6179),
                    i = a.n(r),
                    _ = a(6880),
                    u = a(2106);
                const l = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: n,
                    disabled: l,
                    mixClass: c,
                    soundHover: m,
                    soundClick: d,
                    onMouseEnter: b,
                    onMouseMove: f,
                    onMouseDown: h,
                    onMouseUp: g,
                    onMouseLeave: p,
                    onClick: v,
                }) => {
                    const y = (0, r.useRef)(null),
                        C = (0, r.useState)(a),
                        B = C[0],
                        E = C[1],
                        Z = (0, r.useState)(!1),
                        M = Z[0],
                        k = Z[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                B && null !== y.current && !y.current.contains(e.target) && E(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, r.useEffect)(() => {
                            E(a);
                        }, [a]),
                        i().createElement(
                            'div',
                            {
                                ref: y,
                                className: s()(
                                    _.Z.base,
                                    _.Z[`base__${n}`],
                                    l && _.Z.base__disabled,
                                    t && _.Z[`base__${t}`],
                                    B && _.Z.base__focus,
                                    M && _.Z.base__highlightActive,
                                    c,
                                ),
                                onMouseEnter: function (e) {
                                    l || (null !== m && (0, o.G)(m), b && b(e));
                                },
                                onMouseMove: function (e) {
                                    f && f(e);
                                },
                                onMouseUp: function (e) {
                                    l || (g && g(e), k(!1));
                                },
                                onMouseDown: function (e) {
                                    l ||
                                        (null !== d && (0, o.G)(d),
                                        h && h(e),
                                        a && (l || (y.current && (y.current.focus(), E(!0)))),
                                        k(!0));
                                },
                                onMouseLeave: function (e) {
                                    l || (p && p(e), k(!1));
                                },
                                onClick: function (e) {
                                    l || (v && v(e));
                                },
                            },
                            n !== u.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: _.Z.back }),
                                    i().createElement('span', { className: _.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: s()(_.Z.state, _.Z.state__default) },
                                i().createElement('span', { className: _.Z.stateDisabled }),
                                i().createElement('span', { className: _.Z.stateHighlightHover }),
                                i().createElement('span', { className: _.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: _.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                l.defaultProps = { type: u.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            },
            2106: (e, t, a) => {
                let n, s;
                a.d(t, { L: () => n }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(s || (s = {}));
            },
            7727: (e, t, a) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { G: () => n });
            },
            4037: (e, t, a) => {
                a(3457), a(2106), a(6179);
            },
            6880: (e, t, a) => {
                a.d(t, { Z: () => n });
                const n = {
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
                    base__large: 'CButton_base__large_5c',
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
        },
        a = {};
    function n(e) {
        var s = a[e];
        if (void 0 !== s) return s.exports;
        var o = (a[e] = { exports: {} });
        return t[e](o, o.exports, n), o.exports;
    }
    (n.m = t),
        (e = []),
        (n.O = (t, a, s, o) => {
            if (!a) {
                var r = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [a, s, o] = e[l], i = !0, _ = 0; _ < a.length; _++)
                        (!1 & o || r >= o) && Object.keys(n.O).every((e) => n.O[e](a[_]))
                            ? a.splice(_--, 1)
                            : ((i = !1), o < r && (r = o));
                    if (i) {
                        e.splice(l--, 1);
                        var u = s();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
            e[l] = [a, s, o];
        }),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
        }),
        (n.d = (e, t) => {
            for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (n.j = 212),
        (() => {
            var e = { 212: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var s,
                        o,
                        [r, i, _] = a,
                        u = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (s in i) n.o(i, s) && (n.m[s] = i[s]);
                        if (_) var l = _(n);
                    }
                    for (t && t(a); u < r.length; u++) (o = r[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return n.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var s = n.O(void 0, [866], () => n(4037));
    s = n.O(s);
})();
