(() => {
    'use strict';
    var e,
        t = {
            910: (e, t, n) => {
                var a = n(179),
                    r = n.n(a),
                    o = n(493),
                    s = n.n(o),
                    i = n(483),
                    l = n.n(i);
                const c = [];
                function u(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), c)
                    );
                }
                const d = (e, t) => {
                    let n;
                    const a = setTimeout(() => {
                        n = e();
                    }, t);
                    return () => {
                        'function' == typeof n && n(), clearTimeout(a);
                    };
                };
                let g, _, m, f;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'),
                        (e[(e.In = 1)] = 'In'),
                        (e[(e.Visible = 2)] = 'Visible'),
                        (e[(e.Out = 3)] = 'Out');
                })(g || (g = {})),
                    (function (e) {
                        (e[(e.Logo = 1)] = 'Logo'), (e[(e.FairPlayMessage = 2)] = 'FairPlayMessage');
                    })(_ || (_ = {})),
                    (function (e) {
                        (e[(e.Invisible = 0)] = 'Invisible'), (e[(e.Visible = 1)] = 'Visible');
                    })(m || (m = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Korea = 'korea'), (e.China = 'china');
                    })(f || (f = {}));
                const b = 'Background_base_a7',
                    p = 'Background_bg_42',
                    v = 'Background_image_78';
                var h;
                !(function (e) {
                    (e[(e.NotLoaded = 0)] = 'NotLoaded'),
                        (e[(e.Loading = 1)] = 'Loading'),
                        (e[(e.Waiting = 2)] = 'Waiting'),
                        (e[(e.Loaded = 3)] = 'Loaded'),
                        (e[(e.Failed = 4)] = 'Failed');
                })(h || (h = {}));
                const E = ({ backgroundPath: e, preloadPath: t = '', onLoaded: n, className: o }) => {
                        const s = (0, a.useRef)(h.NotLoaded),
                            i = (0, a.useState)(!1),
                            c = i[0],
                            u = i[1],
                            d = t || e;
                        (0, a.useEffect)(() => {
                            if (!e) return;
                            const t = s.current === h.Failed;
                            u(t),
                                [h.Failed, h.Loaded].includes(s.current) ? null == n || n(t) : (s.current = h.Waiting);
                        }, [e, n]),
                            (0, a.useEffect)(() => {
                                s.current !== h.Waiting && (s.current = h.Loading);
                            }, [d]);
                        const g = (0, a.useCallback)(() => {
                            s.current === h.Waiting && (u(!1), null == n || n()), (s.current = h.Loaded);
                        }, [n]);
                        return r().createElement(
                            'div',
                            { className: l()(b, o) },
                            e && r().createElement('div', { className: p, style: { backgroundImage: `url(${e})` } }),
                            r().createElement('img', {
                                className: v,
                                src: d,
                                onLoad: g,
                                onError: () => {
                                    s.current === h.Waiting && (u(!0), null == n || n(!0)), (s.current = h.Failed);
                                },
                            }),
                            c &&
                                r().createElement('div', {
                                    className: p,
                                    style: { backgroundImage: 'url(img://gui/maps/loading/defaults/loading_09.png)' },
                                }),
                        );
                    },
                    y = 'Progress_base_40',
                    N = 'Progress_back_22',
                    k = 'Progress_fore_5c',
                    C = 'setProgress',
                    P = ({ className: e }) => {
                        const t = (0, a.useState)({ progress: 0, progressMax: 1 }),
                            n = t[0],
                            o = t[1],
                            s = 100 * ((null == n ? void 0 : n.progress) / (null == n ? void 0 : n.progressMax));
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e, t) => {
                                    const n = Math.max(0, t),
                                        a = Math.min(e, n);
                                    o((e) =>
                                        e.progress === a && e.progressMax === n ? e : { progress: a, progressMax: n },
                                    );
                                };
                                return engine.on(C, e), () => engine.off(C, e);
                            }, []),
                            r().createElement(
                                'div',
                                { className: l()(y, e) },
                                r().createElement('div', { className: N }),
                                r().createElement('div', { className: k, style: { width: `${s}%` } }),
                            )
                        );
                    },
                    x = 'ContentFooter_base_66',
                    F = 'ContentFooter_title_60',
                    L = 'ContentFooter_title__only_63',
                    O = 'ContentFooter_description_cb',
                    T = 'ContentFooter_progressBar_e3',
                    w = 'ContentFooter_progressBar__alwaysOnTop_c5',
                    S = 'ContentFooter_statusText_7b',
                    I = 'ContentFooter_statusText__alwaysOnTop_90',
                    R = ({ progressAlwaysOnTop: e, statusText: t, description: n, title: a, className: o, style: s }) =>
                        r().createElement(
                            'div',
                            { className: l()(x, o), style: s },
                            r().createElement(P, { className: l()(T, e && w) }),
                            r().createElement('div', { className: l()(S, e && I) }, t),
                            n && r().createElement('div', { className: O }, n),
                            r().createElement('div', { className: l()(F, !n && L) }, a),
                        ),
                    M = /(.*){open}(.*){close}(.*)/g,
                    j = ({ text: e }) => {
                        if (null === e) return null;
                        const t = e.split('\n');
                        return r().createElement(
                            a.Fragment,
                            null,
                            t.map((e, t) => {
                                const n = e
                                    .split(' ')
                                    .map((e, t) => {
                                        const n = M.exec(e);
                                        return n && n.length > 1
                                            ? r().createElement(
                                                  r().Fragment,
                                                  null,
                                                  n[1] && r().createElement('div', null, n[1]),
                                                  r().createElement('div', { style: { color: '#03953f' } }, n[2]),
                                                  n[3] && r().createElement('div', null, n[3]),
                                              )
                                            : r().createElement('div', { key: t }, e);
                                    })
                                    .map((e) => [e, ' '])
                                    .flat()
                                    .slice(0, -1);
                                return r().createElement(
                                    'div',
                                    { key: t, style: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } },
                                    n,
                                );
                            }),
                        );
                    },
                    A = 'LogoSlide_base_66',
                    B = 'LogoSlide_backLogo_ed',
                    V = 'LogoSlide_logo_80',
                    W = 'LogoSlide_awards_62',
                    D = () =>
                        r().createElement(
                            'div',
                            { className: A },
                            r().createElement('div', { className: B }),
                            r().createElement('div', { className: V }),
                            r().createElement('div', { className: W }),
                        ),
                    $ = {
                        base: 'Content_base_64',
                        background: 'Content_background_e4',
                        label: 'Content_label_0c',
                        version: 'Content_version_39',
                        copyright: 'Content_copyright_bf',
                        ageRating: 'Content_ageRating_a0',
                        contentFooter: 'Content_contentFooter_f1',
                        fairPlayMessage: 'Content_fairPlayMessage_23',
                        vignette: 'Content_vignette_14',
                        vignette__invisible: 'Content_vignette__invisible_9d',
                        info: 'Content_info_22',
                        info__default: 'Content_info__default_1a',
                        info__korea: 'Content_info__korea_f1',
                        info__china: 'Content_info__china_7b',
                        fadeIn: 'Content_fadeIn_e5',
                    },
                    K = 'setStatusText',
                    q = ({ data: e, nextBackgroundPath: t, onContentChanged: n, className: o }) => {
                        const s = (0, a.useState)(),
                            i = s[0],
                            c = s[1],
                            d = (0, a.useState)(!1),
                            g = d[0],
                            b = d[1],
                            p = (0, a.useRef)(!1),
                            v = (0, a.useRef)(),
                            h = (0, a.useRef)(!0);
                        (0, a.useEffect)(() => {
                            const e = (e) => c(e);
                            return engine.on(K, e), () => engine.off(K, e);
                        }, []);
                        const y = u((t = !1) => {
                            e && (b(t), (h.current = !e.backgroundPath), n(), (p.current = !0));
                        });
                        if (
                            ((0, a.useEffect)(() => {
                                if (!e) return;
                                const t = v.current,
                                    a = !t || t !== e,
                                    r = !t || t.backgroundPath !== e.backgroundPath;
                                a && ((e.backgroundPath && r) || n(), (v.current = e));
                            }, [e, y, n]),
                            !e)
                        )
                            return null;
                        const N =
                                e.infoStyle === f.Default
                                    ? ((e) => {
                                          const t = e.split('\n');
                                          return t.length <= 1 ? e : [t[0], t.slice(1).join(' ')].join('\n');
                                      })(e.info)
                                    : e.info,
                            k = e.backgroundPath || t,
                            C = g ? '' : e.text,
                            P = g ? '' : e.description;
                        return r().createElement(
                            'div',
                            { className: l()($.base, o) },
                            k &&
                                r().createElement(E, {
                                    className: $.background,
                                    backgroundPath: e.backgroundPath,
                                    preloadPath: t,
                                    onLoaded: y,
                                }),
                            r().createElement('div', {
                                className: l()($.vignette, h.current && $.vignette__invisible),
                            }),
                            e.contentState !== m.Invisible &&
                                r().createElement(R, {
                                    title: C,
                                    description: P,
                                    statusText: i,
                                    progressAlwaysOnTop: p.current,
                                    className: $.contentFooter,
                                }),
                            (() => {
                                switch (e.logoType) {
                                    case _.Logo:
                                        return r().createElement(D, null);
                                    case _.FairPlayMessage:
                                        return r().createElement('div', { className: $.fairPlayMessage });
                                }
                            })(),
                            r().createElement('div', { className: l()($.label, $.version) }, e.version),
                            r().createElement('div', { className: l()($.label, $.copyright) }, e.copyright),
                            e.ageRatingPath &&
                                r().createElement('div', {
                                    className: $.ageRating,
                                    style: { backgroundImage: `url('img://${e.ageRatingPath}')` },
                                }),
                            r().createElement(
                                'div',
                                { className: l()($.info, $[`info__${e.infoStyle}`]) },
                                r().createElement(j, { text: N }),
                            ),
                        );
                    },
                    z = 'App_base_8c',
                    G = 'App_content_ab',
                    H = 'App_dimmer_28',
                    J = 'App_dimmer__visible_38',
                    Q = 'App_dimmer__fadeOut_3b',
                    U = 'App_dimmer__fadeIn_c3',
                    X = 'setData',
                    Y = 'onTransitionStart',
                    Z = 'onTransitionEnd',
                    ee = { [g.Out]: Q, [g.In]: U, [g.Visible]: J },
                    te = () => {
                        const e = (0, a.useState)(),
                            t = e[0],
                            n = e[1],
                            o = (0, a.useState)(),
                            s = o[0],
                            i = o[1],
                            c = (0, a.useState)(''),
                            _ = c[0],
                            m = c[1],
                            f = (0, a.useState)(g.None),
                            b = f[0],
                            p = f[1],
                            v = (0, a.useRef)(),
                            h = (0, a.useRef)(!0);
                        (0, a.useEffect)(() => {
                            const e = (e) => n(e);
                            return engine.on(X, e), engine.trigger('onViewReady'), () => engine.off(X, e);
                        }, []),
                            (0, a.useEffect)(() => {
                                const e = v.current !== (null == t ? void 0 : t.backgroundPath);
                                if (!t || (!e && t.backgroundPath)) i(t);
                                else {
                                    (v.current = t.backgroundPath), engine.trigger(Y);
                                    const e = () => {
                                        p(g.Visible), i(t);
                                    };
                                    if (!h.current) return p(g.In), m(t.backgroundPath), d(e, t.transitionTime);
                                    (h.current = !1), e();
                                }
                            }, [t]);
                        const E = u(() => {
                            b === g.Visible && p(g.Out);
                        });
                        return (
                            (0, a.useEffect)(() => {
                                if (s && b === g.Out)
                                    return d(() => {
                                        p(g.None), engine.trigger(Z);
                                    }, s.transitionTime);
                            }, [s, b]),
                            r().createElement(
                                'div',
                                { className: z },
                                r().createElement(q, {
                                    data: s,
                                    nextBackgroundPath: _,
                                    onContentChanged: E,
                                    className: G,
                                }),
                                b !== g.None &&
                                    r().createElement('div', {
                                        className: l()(H, ee[b]),
                                        style: { animationDuration: (t ? t.transitionTime / 1e3 : 0) + 's' },
                                    }),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    s().render(r().createElement(te, null), document.getElementById('root'));
                });
            },
        },
        n = {};
    function a(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var o = (n[e] = { exports: {} });
        return t[e](o, o.exports, a), o.exports;
    }
    (a.m = t),
        (e = []),
        (a.O = (t, n, r, o) => {
            if (!n) {
                var s = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, r, o] = e[u], i = !0, l = 0; l < n.length; l++)
                        (!1 & o || s >= o) && Object.keys(a.O).every((e) => a.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((i = !1), o < s && (s = o));
                    if (i) {
                        e.splice(u--, 1);
                        var c = r();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
            e[u] = [n, r, o];
        }),
        (a.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return a.d(t, { a: t }), t;
        }),
        (a.d = (e, t) => {
            for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (a.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            var e = { 808: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [s, i, l] = n,
                        c = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (r in i) a.o(i, r) && (a.m[r] = i[r]);
                        if (l) var u = l(a);
                    }
                    for (t && t(n); c < s.length; c++) (o = s[c]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return a.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var r = a.O(void 0, [501], () => a(910));
    r = a.O(r);
})();
