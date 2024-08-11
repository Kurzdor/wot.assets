(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var a = n(6483),
                    r = n.n(a),
                    s = n(7727),
                    i = n(6179),
                    o = n.n(i),
                    u = n(6880),
                    l = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: g,
                    onMouseMove: p,
                    onMouseDown: E,
                    onMouseUp: b,
                    onMouseLeave: h,
                    onClick: v,
                }) => {
                    const f = (0, i.useRef)(null),
                        C = (0, i.useState)(n),
                        A = C[0],
                        k = C[1],
                        w = (0, i.useState)(!1),
                        y = w[0],
                        F = w[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                A && null !== f.current && !f.current.contains(e.target) && k(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [A]),
                        (0, i.useEffect)(() => {
                            k(n);
                        }, [n]),
                        o().createElement(
                            'div',
                            {
                                ref: f,
                                className: r()(
                                    u.Z.base,
                                    u.Z[`base__${a}`],
                                    c && u.Z.base__disabled,
                                    t && u.Z[`base__${t}`],
                                    A && u.Z.base__focus,
                                    y && u.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== m && (0, s.G)(m), g && g(e));
                                },
                                onMouseMove: function (e) {
                                    p && p(e);
                                },
                                onMouseUp: function (e) {
                                    c || (b && b(e), F(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== _ && (0, s.G)(_),
                                        E && E(e),
                                        n && (c || (f.current && (f.current.focus(), k(!0)))),
                                        F(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (h && h(e), F(!1));
                                },
                                onClick: function (e) {
                                    c || (v && v(e));
                                },
                            },
                            a !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: u.Z.back }),
                                    o().createElement('span', { className: u.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: r()(u.Z.state, u.Z.state__default) },
                                o().createElement('span', { className: u.Z.stateDisabled }),
                                o().createElement('span', { className: u.Z.stateHighlightHover }),
                                o().createElement('span', { className: u.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: u.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
            },
            2106: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { L: () => a, q: () => r }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(a || (a = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(r || (r = {}));
            },
            2686: (e, t, n) => {
                'use strict';
                n.d(t, { At: () => u });
                var a = n(6179),
                    r = n.n(a),
                    s = n(3458);
                n(2902);
                const i = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const u = (0, a.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            u = e.getImageSource,
                            m = e.frameCount,
                            _ = e.onAnimate,
                            g = e.frameTime,
                            p = void 0 === g ? s.O.FRAME_TIME : g,
                            E = e.initialFrameIndex,
                            b = void 0 === E ? s.O.INITIAL_FRAME_INDEX : E,
                            h = e.lastFrameIndex,
                            v = void 0 === h ? m - 1 : h,
                            f = e.loop,
                            C = void 0 === f ? s.O.LOOP : f,
                            A = e.state,
                            k = void 0 === A ? s.O.STATE : A,
                            w = e.onAnimationDone,
                            y = e.onAnimationComplete,
                            F = e.poster,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, i);
                        const B = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = B.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (k) {
                                    case 'play':
                                        return (function () {
                                            const e = d(b, v, u),
                                                t = l(b, v),
                                                a = window.setInterval(() => {
                                                    const r = t(),
                                                        s = e.get(r);
                                                    s
                                                        ? (null == _ || _(r, s),
                                                          n(s),
                                                          r === v &&
                                                              (null == y || y(),
                                                              C || (null == w || w(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, p);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === b && F ? { path: F, x: 0, y: 0 } : u(b),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => n(c(e, t));
                                            return (
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [p, u, b, v, C, _, y, w, F, k]),
                            r().createElement('canvas', o({}, D, { width: t, height: n, ref: B }))
                        );
                    }),
                    l = (e, t) => {
                        let n = e;
                        return () => {
                            const a = n;
                            return (n += 1), n > t && (n = e), a;
                        };
                    },
                    c = (e, t) => Object.assign({}, e, { img: t }),
                    d = (e, t, n) => {
                        const a = new Map(),
                            r = {};
                        for (let s = e; s <= t; s++) {
                            const e = n(s),
                                t = r[e.path];
                            if (t) a.set(s, c(e, t));
                            else {
                                const t = new Image();
                                (r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${s})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(s, c(e, t));
                            }
                        }
                        return a;
                    };
            },
            3458: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => a });
                const a = { FRAME_TIME: 33, INITIAL_FRAME_INDEX: 0, LOOP: !0, STATE: 'play' };
            },
            126: (e, t, n) => {
                'use strict';
                function a(e) {
                    const t = e.chunk,
                        n = t.rows * t.columns;
                    return (a) => {
                        const r = a % n,
                            s = (r % t.columns) * e.width,
                            i = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / n)), x: s, y: i };
                    };
                }
                function r(e) {
                    return (t) => `${e}${t}`;
                }
                n.d(t, { V: () => r, q: () => a });
            },
            2902: (e, t, n) => {
                'use strict';
                n(6179), n(3458);
            },
            9987: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c });
                var a = n(6483),
                    r = n.n(a),
                    s = n(6179),
                    i = n.n(s),
                    o = n(8055);
                const u = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        s = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, u);
                    const g = a ? null : n,
                        p = 'string' == typeof g;
                    if ((g && !p && g < 0) || 0 === g) return null;
                    const E = g && !p && g > d,
                        b = r()(
                            o.Z.base,
                            o.Z[`base__${t}`],
                            s && o.Z.base__animated,
                            c && o.Z.base__hidden,
                            !g && o.Z.base__pattern,
                            a && o.Z.base__empty,
                            m,
                        );
                    return i().createElement(
                        'div',
                        l({ className: b }, _),
                        i().createElement('div', { className: o.Z.bg }),
                        i().createElement('div', { className: o.Z.pattern }),
                        i().createElement(
                            'div',
                            { className: r()(o.Z.value, p && o.Z.value__text) },
                            E ? d : g,
                            E && i().createElement('span', { className: o.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => d });
                var a = n(3138),
                    r = n(6179),
                    s = n(1043),
                    i = n(5262);
                const o = a.O.client.getSize('rem'),
                    u = o.width,
                    l = o.height,
                    c = Object.assign({ width: u, height: l }, (0, i.T)(u, l, s.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3138),
                    r = n(6536),
                    s = n(6179),
                    i = n.n(s),
                    o = n(3495),
                    u = n(1043),
                    l = n(5262);
                const c = ({ children: e }) => {
                    const t = (0, s.useContext)(o.Y),
                        n = (0, s.useState)(t),
                        c = n[0],
                        d = n[1],
                        m = (0, s.useCallback)((e, t) => {
                            const n = a.O.view.pxToRem(e),
                                r = a.O.view.pxToRem(t);
                            d(Object.assign({ width: n, height: r }, (0, l.T)(n, r, u.j)));
                        }, []),
                        _ = (0, s.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, r.Z)(() => {
                        a.O.client.events.on('clientResized', m), a.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, s.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', m),
                                    a.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [m, _],
                        );
                    const g = (0, s.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(o.Y.Provider, { value: g }, e);
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    r = n(7382),
                    s = n(3495);
                const i = ['children'];
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, i);
                    const o = (0, a.useContext)(s.Y),
                        u = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        d = o.small,
                        m = o.extraSmall,
                        _ = o.extraLargeWidth,
                        g = o.largeWidth,
                        p = o.mediumWidth,
                        E = o.smallWidth,
                        b = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        v = o.largeHeight,
                        f = o.mediumHeight,
                        C = o.smallHeight,
                        A = o.extraSmallHeight,
                        k = { extraLarge: h, large: v, medium: f, small: C, extraSmall: A };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && u) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && m) return t;
                    } else {
                        if (n.extraLargeWidth && _) return (0, r.H)(t, n, k);
                        if (n.largeWidth && g) return (0, r.H)(t, n, k);
                        if (n.mediumWidth && p) return (0, r.H)(t, n, k);
                        if (n.smallWidth && E) return (0, r.H)(t, n, k);
                        if (n.extraSmallWidth && b) return (0, r.H)(t, n, k);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && h) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && C) return t;
                            if (n.extraSmallHeight && A) return t;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                };
                (0, a.memo)(o);
            },
            7382: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                'use strict';
                n.d(t, { YN: () => r.Y, ZN: () => a.Z });
                n(6010);
                var a = n(1039),
                    r = n(3495);
            },
            1043: (e, t, n) => {
                'use strict';
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                'use strict';
                var a;
                function r(e, t, n) {
                    const a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, n),
                        r = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, n),
                        s = Math.min(a, r);
                    return {
                        extraLarge: s === n.extraLarge.weight,
                        large: s === n.large.weight,
                        medium: s === n.medium.weight,
                        small: s === n.small.weight,
                        extraSmall: s === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
                    };
                }
                n.d(t, { T: () => r }),
                    (function (e) {
                        (e.extraLarge = 'extraLarge'),
                            (e.large = 'large'),
                            (e.medium = 'medium'),
                            (e.small = 'small'),
                            (e.extraSmall = 'extraSmall'),
                            (e.extraLargeWidth = 'extraLargeWidth'),
                            (e.largeWidth = 'largeWidth'),
                            (e.mediumWidth = 'mediumWidth'),
                            (e.smallWidth = 'smallWidth'),
                            (e.extraSmallWidth = 'extraSmallWidth'),
                            (e.extraLargeHeight = 'extraLargeHeight'),
                            (e.largeHeight = 'largeHeight'),
                            (e.mediumHeight = 'mediumHeight'),
                            (e.smallHeight = 'smallHeight'),
                            (e.extraSmallHeight = 'extraSmallHeight');
                    })(a || (a = {}));
            },
            1037: (e, t, n) => {
                'use strict';
                n.d(t, { IC: () => a });
                var a,
                    r = n(6483),
                    s = n.n(r),
                    i = n(6373),
                    o = n(3138),
                    u = n(2039),
                    l = n(5099),
                    c = n(7727),
                    d = n(9916),
                    m = n(6179),
                    _ = n.n(m),
                    g = n(4769),
                    p = n(8475);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(a || (a = {}));
                const E = ['__left', '__right', '__top', '__bottom'];
                (0, m.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, r) => {
                        const b = (0, m.useRef)(null),
                            h = (0, m.useRef)(null),
                            v = (0, m.useRef)(null),
                            f = (0, m.useState)(window.decorator && window.decorator.directionType),
                            C = f[0],
                            A = f[1],
                            k = (0, m.useCallback)(() => {
                                c.$.playClick(), o.O.view.sendEvent.close();
                            }, []),
                            w = (0, m.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            y = s()(g.Z.arrow, g.Z[`arrow${E[C]}`]);
                        (0, u.b)(
                            () => (
                                o.O.client.events.mouse.enableOutside(),
                                o.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : o.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const F = (0, m.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === b.current || t === v.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const a = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = o.O.client.getMouseGlobalPosition(),
                                            t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(void 0),
                                            n =
                                                e.x < a.boundX ||
                                                e.x > a.boundX + a.boundWidth ||
                                                e.y > a.boundY + a.boundHeight ||
                                                e.y < a.boundY;
                                        if (t && !n) return;
                                    }
                                    n ? n() : o.O.view.sendEvent.close('popover');
                                },
                                [b, v, n],
                            ),
                            D = (0, p.w)(),
                            B = (0, m.useCallback)(() => {
                                const e = h.current;
                                if (e)
                                    return (
                                        o.O.view.freezeTextureBeforeResize(),
                                        D.run(() => {
                                            const t = e.scrollWidth,
                                                n = e.scrollHeight;
                                            o.O.view.resize(t, n), A(window.decorator.directionType);
                                        })
                                    );
                            }, [D]);
                        return (
                            (0, m.useImperativeHandle)(r, () => ({ updateSize: B })),
                            (0, u.b)(() => {
                                o.O.view.setInputPaddingsRem(58);
                            }),
                            (0, m.useEffect)(() => {
                                document.addEventListener('mousedown', F, { capture: !0 });
                                const e = (0, l.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => B()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', F);
                                    }
                                );
                            }, [B, F, t]),
                            _().createElement(
                                'div',
                                { className: g.Z.base, ref: h },
                                _().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    _().createElement(
                                        'div',
                                        { className: g.Z.content, ref: b },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            _().createElement(
                                                i.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                _().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: k,
                                                    onMouseEnter: w,
                                                    ref: v,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: y, style: a.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => l });
                var a = n(1037),
                    r = n(9916),
                    s = n(6179),
                    i = n.n(s);
                const o = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.contentId,
                        n = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? a.IC.Top : l,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        g = e.children,
                        p = e.isEnabled,
                        E = void 0 === p || p,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, o);
                    const h = (0, s.useRef)(null),
                        v = (0, s.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            h.current && (0, r.P3)(t, c, h.current, n, d, m);
                        }, [t, c, m, n, d]);
                    return i().createElement(
                        'div',
                        u(
                            {
                                ref: h,
                                onMouseDown:
                                    ((f = g.props.onClick),
                                    (e) => {
                                        E && (v(), _ && _(e), f && f(e));
                                    }),
                            },
                            b,
                        ),
                        g,
                    );
                    var f;
                };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => u });
                var a = n(6179),
                    r = n.n(a),
                    s = n(2056);
                const i = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const u = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, i);
                    return r().createElement(
                        s.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => l });
                var a = n(6179),
                    r = n.n(a),
                    s = n(7078),
                    i = n(6373),
                    o = n(2056);
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = r().createElement('div', { className: n }, e);
                    if (t.header || t.body) return r().createElement(i.i, t, a);
                    const l = t.contentId;
                    return l ? r().createElement(o.u, u({}, t, { contentId: l }), a) : r().createElement(s.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    r = n(6179),
                    s = n.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const u = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, i);
                        const g = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: n, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, l, c, m]);
                        return s().createElement(
                            a.u,
                            o(
                                {
                                    contentId:
                                        ((p = null == m ? void 0 : m.hasHtmlContent),
                                        p ? u.SimpleTooltipHtmlContent('resId') : u.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: g,
                                },
                                _,
                            ),
                            t,
                        );
                        var p;
                    };
            },
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    r = n(9916),
                    s = n(6179);
                const i = [
                    'children',
                    'contentId',
                    'args',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onClick',
                    'ignoreShowDelay',
                    'ignoreMouseClick',
                    'decoratorId',
                    'isEnabled',
                    'targetId',
                    'onShow',
                    'onHide',
                ];
                function o(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const u = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            g = void 0 !== _ && _,
                            p = e.ignoreMouseClick,
                            E = void 0 !== p && p,
                            b = e.decoratorId,
                            h = void 0 === b ? 0 : b,
                            v = e.isEnabled,
                            f = void 0 === v || v,
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            k = e.onShow,
                            w = e.onHide,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, i);
                        const F = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, s.useMemo)(() => A || (0, a.F)().resId, [A]),
                            B = (0, s.useCallback)(() => {
                                (F.current.isVisible && F.current.timeoutId) ||
                                    (u(n, h, { isMouseEvent: !0, on: !0, arguments: o(r) }, D),
                                    k && k(),
                                    (F.current.isVisible = !0));
                            }, [n, h, r, D, k]),
                            S = (0, s.useCallback)(() => {
                                if (F.current.isVisible || F.current.timeoutId) {
                                    const e = F.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (F.current.timeoutId = 0)),
                                        u(n, h, { on: !1 }, D),
                                        F.current.isVisible && w && w(),
                                        (F.current.isVisible = !1);
                                }
                            }, [n, h, D, w]),
                            T = (0, s.useCallback)((e) => {
                                F.current.isVisible &&
                                    ((F.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (F.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(F.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = F.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === f && S();
                            }, [f, S]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return f
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((I = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((F.current.timeoutId = window.setTimeout(B, g ? 100 : 400)),
                                                      l && l(e),
                                                      I && I(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === E && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === E && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      y,
                                  ),
                              )
                            : t;
                        var I;
                    };
            },
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => o });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: n = i, context: s = 'model' } = {}) {
                    const o = new Map();
                    function u(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = o.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = n(t),
                            r = s.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const i = 'string' == typeof r ? `${s}.${r}` : s,
                                u = a.O.view.addModelObserver(i, t, !0);
                            return o.set(u, n), e && n(l(r)), u;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const n = l(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = r(o.keys()); !(e = n()).done; ) {
                                u(e.value, t);
                            }
                        },
                        unsubscribe: u,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => u });
                var a = n(4598),
                    r = n(9174),
                    s = n(6179),
                    i = n.n(s),
                    o = n(8246);
                const u = () => (e, t) => {
                    const n = (0, s.createContext)({});
                    return [
                        function ({ mode: u = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, s.useRef)([]),
                                _ = (n, s, i) => {
                                    var u;
                                    const l = o.U(s),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (u = null == i ? void 0 : i.getter) ? u : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        g = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const s = null != t ? t : d(e),
                                                        i = r.LO.box(s, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const s = null != t ? t : d(e),
                                                        i = r.LO.box(s, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = d(t);
                                                    if (Array.isArray(e)) {
                                                        const s = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            s[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                    {
                                                        const s = e,
                                                            i = Object.entries(s),
                                                            o = i.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([t, n]) => {
                                                                            o[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        p = { mode: n, model: g, externalModel: c, cleanup: _ };
                                    return {
                                        model: g,
                                        controls: 'mocks' === n && i ? i.controls(p) : t(p),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                g = (0, s.useRef)(!1),
                                p = (0, s.useState)(u),
                                E = p[0],
                                b = p[1],
                                h = (0, s.useState)(() => _(u, l, d)),
                                v = h[0],
                                f = h[1];
                            return (
                                (0, s.useEffect)(() => {
                                    g.current ? f(_(E, l, d)) : (g.current = !0);
                                }, [d, E, l]),
                                (0, s.useEffect)(() => {
                                    b(u);
                                }, [u]),
                                (0, s.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                i().createElement(n.Provider, { value: v }, c)
                            );
                        },
                        () => (0, s.useContext)(n),
                    ];
                };
            },
            7044: (e, t, n) => {
                'use strict';
                n.d(t, { f8: () => u, s_: () => r, yR: () => s });
                n(3649), n(9916);
                var a = n(8613);
                const r = 1e3,
                    s = 60,
                    i = 60 * s,
                    o = 24 * i;
                Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime;
                function u(e = 0) {
                    let t = e;
                    const n = Math.trunc(t / o);
                    t -= n * o;
                    const a = Math.trunc(t / i);
                    t -= a * i;
                    const r = Math.trunc(t / s);
                    return (t -= r * s), { days: n, hours: a, minutes: r, seconds: t };
                }
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => u, on: () => o, onResize: () => s, onScaleUpdated: () => i });
                var a = n(2472),
                    r = n(1176);
                const s = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    u = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${t}`,
                                        i = l[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, o),
                                        a(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(s, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => s });
                var a = n(5959),
                    r = n(514);
                const s = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => i });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    i = { play: Object.assign({}, s, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(2472);
                const r = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => s.U,
                        extraSize: () => F,
                        forceTriggerMouseMove: () => k,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => A,
                        isFocused: () => f,
                        pxToRem: () => b,
                        remToPx: () => h,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => u,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => D,
                    });
                var a = n(3722),
                    r = n(6112),
                    s = n(6538),
                    i = n(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function A() {
                    return viewEnv.isEventHandled();
                }
                function k() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    F = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    D = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    s = 16,
                    i = 32,
                    o = 64,
                    u = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, a);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = s),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            u('popover' === e ? r : i);
                        },
                        minimize() {
                            u(o);
                        },
                        move(e) {
                            u(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                'use strict';
                n.d(t, { jv: () => r, yR: () => a });
                function a(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (a = window.subViews[n].id)),
                        { caller: n, stack: t, resId: a }
                    );
                };
            },
            2344: (e, t, n) => {
                'use strict';
                n.d(t, { D9: () => s, au: () => i });
                var a = n(2790),
                    r = n(3469);
                n(2133), n(579), n(5360), n(9056);
                const s = a.Z,
                    i = r.Z;
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(6179);
                const r = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var a = n(7044),
                    r = n(6179);
                const s = () => {},
                    i = (e = 0, t, n = 0, i = s) => {
                        const o = (0, r.useState)(e),
                            u = o[0],
                            l = o[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const r = Date.now(),
                                        s = t || (e > 2 * a.yR ? a.yR : 1),
                                        o = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - r) / a.s_);
                                            null !== n && t <= n ? (l(n), i && i(), clearInterval(o)) : l(t);
                                        }, s * a.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, t, n, i]),
                            u
                        );
                    };
            },
            2133: (e, t, n) => {
                'use strict';
                n(6179);
            },
            5415: (e, t, n) => {
                'use strict';
                n.d(t, { Aq: () => u, GS: () => l, cJ: () => i, fd: () => o });
                var a = n(6179),
                    r = n(7739),
                    s = n(1043);
                let i, o, u;
                !(function (e) {
                    (e[(e.ExtraSmall = s.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.j.small.width)] = 'Small'),
                        (e[(e.Medium = s.j.medium.width)] = 'Medium'),
                        (e[(e.Large = s.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.j.small.width)] = 'Small'),
                            (e[(e.Medium = s.j.medium.width)] = 'Medium'),
                            (e[(e.Large = s.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.j.small.height)] = 'Small'),
                            (e[(e.Medium = s.j.medium.height)] = 'Medium'),
                            (e[(e.Large = s.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.j.extraLarge.height)] = 'ExtraLarge');
                    })(u || (u = {}));
                const l = () => {
                    const e = (0, a.useContext)(r.YN),
                        t = e.width,
                        n = e.height,
                        s = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return i.ExtraLarge;
                                case e.large:
                                    return i.Large;
                                case e.medium:
                                    return i.Medium;
                                case e.small:
                                    return i.Small;
                                case e.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return u.ExtraLarge;
                                case e.largeHeight:
                                    return u.Large;
                                case e.mediumHeight:
                                    return u.Medium;
                                case e.smallHeight:
                                    return u.Small;
                                case e.extraSmallHeight:
                                    return u.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), u.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: s, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
                };
            },
            5360: (e, t, n) => {
                'use strict';
                n(6536);
                var a = n(9916);
                n(6179);
                a.Sw.instance;
                let r;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(r || (r = {}));
            },
            9056: (e, t, n) => {
                'use strict';
                var a = n(9916);
                n(6179);
                a.Sw.instance;
            },
            2039: (e, t, n) => {
                'use strict';
                n.d(t, { b: () => r, k: () => s });
                var a = n(6179);
                const r = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    s = (e) => {
                        (0, a.useEffect)(() => e, []);
                    };
            },
            2790: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(6179);
                const r = (e, t) => {
                    const n = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (t && !t(e)) || (n.current = e);
                        }, [t, e]),
                        n.current
                    );
                };
            },
            3112: (e, t, n) => {
                'use strict';
                n.d(t, { V: () => s });
                var a = n(6179),
                    r = n(3138);
                const s = () => {
                    const e = (0, a.useState)(r.O.view.getScale()),
                        t = e[0],
                        n = e[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = () => {
                                n(r.O.view.getScale());
                            };
                            return (
                                window.addEventListener('resize', e),
                                () => {
                                    window.removeEventListener('resize', e);
                                }
                            );
                        }, []),
                        t
                    );
                };
            },
            579: (e, t, n) => {
                'use strict';
                n(3138), n(6179);
            },
            8475: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => s });
                var a = n(6179),
                    r = n(2039);
                function s() {
                    const e = (0, a.useRef)(0);
                    return (
                        (0, r.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            4489: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => s });
                var a = n(5139),
                    r = n(6179);
                function s(e, t, n) {
                    const s = (0, r.useMemo)(() => (0, a.Z)(n, e), t);
                    return (0, r.useEffect)(() => s.cancel, [s]), s;
                }
            },
            5521: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { n: () => a }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(a || (a = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(r || (r = {}));
            },
            9480: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                n.d(t, { U2: () => a, UI: () => s, dF: () => o, lN: () => i, sE: () => u });
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function s(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function i(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function o(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function u(e, t) {
                    for (let n = 0; n < e.length; n++) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
            },
            5099: (e, t, n) => {
                'use strict';
                n.d(t, { B: () => a });
                const a = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((n, a) => {
                            e.then((e) => !t && n(e)).catch((e) => !t && a(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            4385: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => a });
                const a = (e, t) => {
                    const n = [];
                    for (let a = 0; a < e; a++) n.push(t(a));
                    return n;
                };
            },
            9690: (e, t, n) => {
                'use strict';
                n.d(t, { HG: () => i });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) =>
                        s
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) (t += a[n]), (e -= r[n]);
                                  return t;
                              })(e);
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { $: () => r, G: () => a });
                const r = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            3649: (e, t, n) => {
                'use strict';
                n.d(t, { BN: () => i, Eg: () => l, WU: () => r, dL: () => c, e: () => o, uF: () => s, z4: () => u });
                n(1281);
                let a;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function s(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const u = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    c =
                        ((() => {
                            const e = new RegExp(
                                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                    '|' +
                                    /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                        .source +
                                    '|' +
                                    /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                        .source +
                                    '|' +
                                    /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                        .source,
                                'gum',
                            );
                        })(),
                        (e) => r(R.strings.common.percentValue(), { value: e }));
            },
            5139: (e, t, n) => {
                'use strict';
                function a(e, t, n, a) {
                    let r,
                        s = !1,
                        i = 0;
                    function o() {
                        r && clearTimeout(r);
                    }
                    function u(...u) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), n.apply(l, u);
                        }
                        s ||
                            (a && !r && d(),
                            o(),
                            void 0 === a && c > e
                                ? d()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      a
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === a ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                        (u.cancel = function () {
                            o(), (s = !0);
                        }),
                        u
                    );
                }
                n.d(t, { Z: () => a });
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => s });
                var a = n(3138);
                class r {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = a.O.view.addModelObserver(e, n, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(s) : (this._views[n] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const s = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => s.Z,
                    B3: () => u,
                    Z5: () => i.Z5,
                    B0: () => o,
                    c9: () => v,
                    wU: () => k,
                    ry: () => b,
                    Eu: () => h,
                    SW: () => C,
                    P3: () => A,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
                            this.removeMouseListener();
                    }
                    addMouseListener() {
                        this._listenMouse ||
                            (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                    }
                    removeMouseListener() {
                        this._listenMouse &&
                            0 === this.entries.length &&
                            (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                    }
                }
                a.__instance = void 0;
                const r = a;
                var s = n(1358);
                var i = n(8613);
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    _ = n(3138);
                const g = ['args'];
                function p(e, t, n, a, r, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(a, r);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        n = arguments;
                                    return new Promise(function (a, r) {
                                        var s = e.apply(t, n);
                                        function i(e) {
                                            p(s, a, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            p(s, a, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    v = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    f = () => v(o.CLOSE),
                    C = () => v(o.POP_OVER, { on: !1 }),
                    A = (e, t, n, a, r = R.invalid('resId'), s) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            u = n.getBoundingClientRect(),
                            l = u.x,
                            c = u.y,
                            d = u.width,
                            m = u.height,
                            g = {
                                x: _.O.view.pxToRem(l) + i.x,
                                y: _.O.view.pxToRem(c) + i.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        v(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: E(g),
                            on: !0,
                            args: s,
                        });
                    },
                    k = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    w = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var y = n(7572);
                const F = r.instance,
                    D = {
                        DataTracker: s.Z,
                        ViewModel: y.Z,
                        ViewEventType: o,
                        NumberFormatType: u,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: C,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: A,
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: b,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: k,
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < r.length; t++) n[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = D;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => s, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    },
                    s = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            1504: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => u });
                var a = n(7739),
                    r = n(6179),
                    s = n.n(r),
                    i = n(2849);
                const o = ['children'];
                const u = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, o);
                    return s().createElement(a.ZN, null, s().createElement(i.l, n, t));
                };
            },
            2849: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => p });
                var a = n(6483),
                    r = n.n(a),
                    s = n(926),
                    i = n.n(s),
                    o = n(6179),
                    u = n.n(o),
                    l = n(5415);
                const c = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = {
                        [l.fd.ExtraSmall]: '',
                        [l.fd.Small]: i().SMALL_WIDTH,
                        [l.fd.Medium]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH}`,
                        [l.fd.Large]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH}`,
                        [l.fd.ExtraLarge]:
                            `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH} ${i().EXTRA_LARGE_WIDTH}`,
                    },
                    _ = {
                        [l.Aq.ExtraSmall]: '',
                        [l.Aq.Small]: i().SMALL_HEIGHT,
                        [l.Aq.Medium]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT}`,
                        [l.Aq.Large]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT}`,
                        [l.Aq.ExtraLarge]:
                            `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT} ${i().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [l.cJ.ExtraSmall]: '',
                        [l.cJ.Small]: i().SMALL,
                        [l.cJ.Medium]: `${i().SMALL} ${i().MEDIUM}`,
                        [l.cJ.Large]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE}`,
                        [l.cJ.ExtraLarge]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE} ${i().EXTRA_LARGE}`,
                    },
                    p = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, c);
                        const s = (0, l.GS)(),
                            i = s.mediaWidth,
                            o = s.mediaHeight,
                            p = s.mediaSize;
                        return u().createElement('div', d({ className: r()(n, m[i], _[o], g[p]) }, a), t);
                    };
            },
            4029: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => a.z });
                var a = n(1504);
            },
            7493: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { Z0: () => r, in: () => a, sx: () => s }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(a || (a = {}));
                const r = 'tooltip_watched',
                    s = 2;
                let i;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(i || (i = {}));
            },
            4828: (e, t, n) => {
                'use strict';
                n.d(t, { AB: () => _, D9: () => a, eX: () => s, sC: () => i, tL: () => r, x3: () => l });
                const a = 'crew',
                    r = 2e3;
                let s, i, o, u, l, c, d, m;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(s || (s = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(i || (i = {})),
                    (function (e) {
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(o || (o = {})),
                    (function (e) {
                        e.PremiumTooltip = 'personal_file_view_premium_tooltip';
                    })(u || (u = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(l || (l = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(c || (c = {})),
                    (function (e) {
                        (e.Checkbox = 'retrain_single_dialog_checkbox'),
                            (e.RoleButton = 'retrain_single_dialog_role_button');
                    })(d || (d = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(m || (m = {}));
                const _ = {
                    [R.views.lobby.crew.personal_case.PersonalFileView('resId')]: i.PersonalFile,
                    [R.views.lobby.crew.personal_case.PersonalDataView('resId')]: i.PersonalData,
                    [R.views.lobby.crew.personal_case.ServiceRecordView('resId')]: i.ServiceRecord,
                    [R.views.lobby.crew.BarracksView('resId')]: i.Barracks,
                    [R.views.lobby.crew.HangarCrewWidget('resId')]: i.Hangar,
                    [R.views.lobby.crew.MemberChangeView('resId')]: i.MemberChange,
                    [R.views.lobby.crew.TankChangeView('resId')]: i.TankChange,
                    [R.views.lobby.crew.QuickTrainingView('resId')]: i.QuickTraining,
                };
            },
            1943: (e, t, n) => {
                'use strict';
                n.d(t, { Jp: () => d, Sr: () => m });
                var a = n(6179),
                    r = n(7493);
                const s = ['action', 'timeLimit'];
                const i = 'metrics',
                    o = () => Date.now(),
                    u = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    l = (e, t) => {
                        const n = (0, a.useCallback)(
                            (n, a = r.in.Info, s) => {
                                s || (s = {}),
                                    Object.keys(s).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(s),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    c = (e, t) => {
                        const n = l(e, t),
                            r = (0, a.useRef)(new Map()),
                            s = (0, a.useRef)(new Map()),
                            i = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    (void 0 !== t && t > 0) || r.current.set(e, o());
                                },
                                [r],
                            ),
                            u = (0, a.useCallback)(() => {
                                r.current.clear(), s.current.clear();
                            }, [r, s]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === s.current.get(e) &&
                                        s.current.set(e, o());
                                },
                                [r, s],
                            ),
                            d = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    const n = s.current.get(e);
                                    if (void 0 === n) return;
                                    s.current.delete(e);
                                    const a = o() - n;
                                    r.current.set(e, t + a);
                                },
                                [r, s],
                            ),
                            m = (0, a.useCallback)(
                                (e, t = 0, a, i) => {
                                    const u = r.current.get(e);
                                    if (void 0 === u) return;
                                    void 0 !== s.current.get(e) && d(e), r.current.delete(e);
                                    const l = (o() - u) / 1e3;
                                    l <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, l)),
                                        n(e, a, i));
                                },
                                [r, s, n, d],
                            );
                        return [(e) => i(e), (e, t, n, a) => m(e, t, n, a), () => u(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const t = l(e, i),
                            n = (0, a.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, u(e));
                                },
                                [t],
                            );
                        return (e) => n(e);
                    },
                    m = (e, t) => {
                        const n = ((e) => {
                                const t = c(e, i),
                                    n = t[0],
                                    r = t[1],
                                    s = t[2],
                                    o = t[3],
                                    l = t[4],
                                    d = (0, a.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                n = e.timeLimit,
                                                a = e.logLevel;
                                            r(t, n, a, u(e));
                                        },
                                        [r],
                                    );
                                return [(e) => n(e), (e) => d(e), () => s(), (e) => o(e), (e) => l(e)];
                            })(e),
                            o = n[0],
                            l = n[1],
                            d = t.action,
                            m = t.timeLimit,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(t, s);
                        return (0, a.useMemo)(
                            () => ({
                                onShow: () => o(d || r.Z0),
                                onHide: () => l(Object.assign({ action: d || r.Z0, timeLimit: m || r.sx }, _)),
                            }),
                            [d, m, _, o, l],
                        );
                    };
            },
            2582: (e, t, n) => {
                'use strict';
                n.d(t, { yZ: () => o });
                var a = n(6179),
                    r = n.n(a);
                const s = [
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
                    'revers',
                ];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                let o;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(o || (o = {}));
                const u = (e, t, n) => {
                    const a = new Image();
                    (a.src = n(t)), e.push(a);
                };
                (0, a.memo)((e) => {
                    let t = e.width,
                        n = e.height,
                        l = e.getSrcByFrame,
                        c = e.frameCount,
                        d = e.onAnimate,
                        m = void 0 === d ? () => {} : d,
                        _ = e.frameTime,
                        g = void 0 === _ ? 33 : _,
                        p = e.initialFrameIndex,
                        E = void 0 === p ? 0 : p,
                        b = e.loop,
                        h = void 0 === b || b,
                        v = e.state,
                        f = void 0 === v ? o.Play : v,
                        C = e.onAnimationComplete,
                        A = void 0 === C ? () => {} : C,
                        k = e.revers,
                        w = void 0 !== k && k,
                        y = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, s);
                    const F = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            const e = F.current;
                            if (!e) return;
                            const a = c - 1,
                                r = e.getContext('2d'),
                                s = (a) => {
                                    r.clearRect(0, 0, e.width, e.height), r.drawImage(a, 0, 0, t, n);
                                };
                            if ('stop' === f) {
                                const e = l(0),
                                    t = new Image();
                                t.src = e;
                                const n = () => s(t);
                                return t.addEventListener('load', n), () => t.removeEventListener('load', n);
                            }
                            const i = ((e, t, n) => {
                                    const a = [];
                                    if (n) for (let n = e; n >= 0; n--) u(a, n, t);
                                    else for (let n = 0; n < e; n++) u(a, n, t);
                                    return a;
                                })(c, l, w),
                                o = ((e, t = 0) => {
                                    let n = t;
                                    return () => {
                                        const t = n;
                                        return (n += 1), n > e && (n = 0), t;
                                    };
                                })(a, E),
                                d = setInterval(() => {
                                    const e = o(),
                                        t = i[e];
                                    s(i[e]), m(e, t), e === a && (A(), h || clearInterval(d));
                                }, g);
                            return () => clearInterval(d);
                        }, [c, g, l, n, E, h, m, A, f, t, w]),
                        r().createElement('canvas', i({}, y, { width: t, height: n, ref: F }))
                    );
                });
            },
            1096: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => se,
                        Bar: () => ne,
                        DefaultScroll: () => re,
                        Direction: () => W,
                        defaultSettings: () => j,
                        useHorizontalScrollApi: () => G,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => ke, Bar: () => fe, Default: () => Ae, useVerticalScrollApi: () => ie });
                var s = n(4029),
                    i = n(6179),
                    o = n.n(i),
                    u = n(493),
                    l = n.n(u),
                    c = n(6483),
                    d = n.n(c),
                    m = n(1037),
                    _ = n(3138),
                    g = n(5521);
                n(9916);
                const p = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function E(e = g.n.NONE, t = p, n = !1, a = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== g.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && _.O.view.isEventHandled()) return;
                                _.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                var b = n(5415),
                    h = n(3649),
                    v = n(3403),
                    f = n(3215);
                let C, A, k, w;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded');
                })(C || (C = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed');
                    })(A || (A = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(k || (k = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(w || (w = {}));
                C.Initialization, A.Initialization;
                const y = (0, f.q)()(
                        ({ observableModel: e }) => {
                            const t = { groups: e.array('groups', []) };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick'),
                        }),
                    ),
                    F = y[0],
                    D = y[1],
                    B = (e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    (n = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                            }
                        );
                    },
                    S = (e, t, n) => (n < e ? e : n > t ? t : n),
                    T = [];
                function I(e) {
                    const t = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, t.current)(...e), T)
                    );
                }
                function N(e, t, n = []) {
                    const a = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, i.useEffect)(() => r, [r]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, i.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, s),
                        r,
                    ];
                }
                var L = n(7727);
                function x(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return O(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function O(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const M = () => {
                    const e = (0, i.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        a = (e, n) => {
                            t(e).delete(n);
                        },
                        r = (e, ...n) => {
                            for (var a, r = x(t(e).values()); !(a = r()).done; ) {
                                (0, a.value)(...n);
                            }
                        };
                    return (0, i.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                };
                var P = n(4489),
                    H = n(7030);
                let W;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(W || (W = {}));
                const j = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    z = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                s = a[1];
                            return s <= r ? 0 : S(r, s, n);
                        };
                        return (u = {}) => {
                            const l = u.settings,
                                c = void 0 === l ? j : l,
                                d = (0, i.useRef)(null),
                                m = (0, i.useRef)(null),
                                g = M(),
                                p = (0, P.f)(
                                    () => {
                                        _.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, H.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), g.trigger('change', e), s && p());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                b = E[0],
                                h = E[1],
                                v = (0, i.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = b.scrollPosition.get(),
                                            s = (null != (a = b.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * n + s + r);
                                    },
                                    [b.scrollPosition],
                                ),
                                f = (0, i.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            h.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(a, b.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, b.scrollPosition],
                                ),
                                C = (0, i.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            s = v(t, e, a);
                                        f(s);
                                    },
                                    [f, v, c.step],
                                ),
                                A = (0, i.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(a(e)),
                                            d.current && g.trigger('mouseWheel', e, b.scrollPosition, t(d.current));
                                    },
                                    [b.scrollPosition, C, g],
                                ),
                                k = ((e, t = []) => {
                                    const n = (0, i.useRef)(),
                                        a = (0, i.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
                                        }, t);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        B(() => {
                                            const e = d.current;
                                            e &&
                                                (f(o(e, b.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [f, b.scrollPosition.goal],
                                ),
                                w = I(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, b.scrollPosition.goal);
                                    t !== b.scrollPosition.goal && f(t, { immediate: !0 }),
                                        g.trigger('recalculateContent');
                                });
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', k),
                                    () => {
                                        window.removeEventListener('resize', k);
                                    }
                                ),
                                [k],
                            );
                            return (0, i.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: A,
                                    applyScroll: f,
                                    applyStepTo: C,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: h,
                                    animationScroll: b,
                                    recalculateContent: w,
                                    events: { on: g.on, off: g.off },
                                }),
                                [b.scrollPosition, f, C, g.off, g.on, w, A, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    G = z({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? W.Next : W.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    $ = 'HorizontalBar_base_49',
                    V = 'HorizontalBar_base__nonActive_82',
                    U = 'HorizontalBar_leftButton_5f',
                    Z = 'HorizontalBar_rightButton_03',
                    q = 'HorizontalBar_track_0d',
                    Y = 'HorizontalBar_thumb_fd',
                    X = 'HorizontalBar_rail_32',
                    K = 'disable',
                    Q = { pending: !1, offset: 0 },
                    J = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ee = () => {},
                    te = (e, t) => Math.max(20, e.offsetWidth * t),
                    ne = (0, i.memo)(
                        ({
                            api: e,
                            classNames: t = {},
                            getStepByRailClick: n = J,
                            onDrag: a = ee,
                            onClick: r = ee,
                        }) => {
                            const s = (0, i.useRef)(null),
                                u = (0, i.useRef)(null),
                                l = (0, i.useRef)(null),
                                c = (0, i.useRef)(null),
                                m = (0, i.useRef)(null),
                                g = e.stepTimeout || 100,
                                p = (0, i.useState)(Q),
                                E = p[0],
                                b = p[1],
                                h = (0, i.useCallback)(
                                    (e) => {
                                        b(e),
                                            m.current &&
                                                a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                    },
                                    [a],
                                ),
                                v = () => {
                                    const t = c.current,
                                        n = m.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(a && t && n && r)) return;
                                    const s = e.animationScroll.scrollPosition.get(),
                                        i = Math.min(1, a / r),
                                        o = S(0, 1, s / (r - a)),
                                        d = (t.offsetWidth - te(t, i)) * o;
                                    (n.style.transform = `translateX(${0 | d}px)`),
                                        ((e) => {
                                            if (u.current && l.current && c.current && m.current) {
                                                if (0 === e)
                                                    return (
                                                        u.current.classList.add(K), void l.current.classList.remove(K)
                                                    );
                                                if (
                                                    ((t = c.current),
                                                    (n = m.current),
                                                    e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                                )
                                                    return (
                                                        u.current.classList.remove(K), void l.current.classList.add(K)
                                                    );
                                                var t, n;
                                                u.current.classList.remove(K), l.current.classList.remove(K);
                                            }
                                        })(d);
                                },
                                f = I(() => {
                                    (() => {
                                        const t = m.current,
                                            n = c.current,
                                            a = e.getWrapperSize(),
                                            r = e.getContainerSize();
                                        if (!(r && t && a && n)) return;
                                        const i = Math.min(1, a / r);
                                        (t.style.width = `${te(n, i)}px`),
                                            (t.style.display = 'flex'),
                                            s.current &&
                                                (1 === i ? s.current.classList.add(V) : s.current.classList.remove(V));
                                    })(),
                                        v();
                                });
                            (0, i.useEffect)(() => B(f)),
                                (0, i.useEffect)(
                                    () =>
                                        B(() => {
                                            const t = () => {
                                                v();
                                            };
                                            let n = ee;
                                            const a = () => {
                                                n(), (n = B(f));
                                            };
                                            return (
                                                e.events.on('recalculateContent', f),
                                                e.events.on('rest', t),
                                                e.events.on('change', t),
                                                e.events.on('resizeHandled', a),
                                                () => {
                                                    n(),
                                                        e.events.off('recalculateContent', f),
                                                        e.events.off('rest', t),
                                                        e.events.off('change', t),
                                                        e.events.off('resizeHandled', a);
                                                }
                                            );
                                        }),
                                    [e],
                                ),
                                (0, i.useEffect)(() => {
                                    if (!E.pending) return;
                                    const t = _.O.client.events.mouse.move(([t, n]) => {
                                            var r;
                                            const s = e.contentRef.current,
                                                i = e.wrapperRef.current;
                                            if (!s || !i) return;
                                            const o = c.current,
                                                u = m.current;
                                            if (!o || !u) return;
                                            if ('inside' === n && t.clientX < 0) return;
                                            const l = t.clientX - E.offset - o.getBoundingClientRect().x,
                                                d = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(s, d),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: l, contentOffset: d });
                                        }),
                                        n = _.O.client.events.mouse.up(() => {
                                            t(), h(Q);
                                        });
                                    return () => {
                                        t(), n();
                                    };
                                }, [e, E.offset, E.pending, a, h]);
                            const C = N(
                                    (t) => {
                                        e.applyStepTo(t), r(t);
                                    },
                                    g,
                                    [e],
                                ),
                                A = C[0],
                                k = C[1];
                            (0, i.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', k, !0),
                                    () => document.removeEventListener('mouseup', k, !0)
                                ),
                                [k],
                            );
                            const w = (e) => {
                                e.target.classList.contains(K) || (0, L.G)('highlight');
                            };
                            return o().createElement(
                                'div',
                                { className: d()($, t.base), ref: s, onWheel: e.handleMouseWheel },
                                o().createElement('div', {
                                    className: d()(U, t.leftButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(K) ||
                                            0 !== e.button ||
                                            ((0, L.G)('play'), A(W.Next));
                                    },
                                    onMouseUp: k,
                                    ref: u,
                                    onMouseEnter: w,
                                }),
                                o().createElement(
                                    'div',
                                    {
                                        className: d()(q, t.track),
                                        onMouseDown: (t) => {
                                            const a = m.current;
                                            if (a && 0 === t.button)
                                                if (((0, L.G)('play'), t.target === a))
                                                    h({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                                else {
                                                    ((t) => {
                                                        const a = m.current,
                                                            r = e.contentRef.current;
                                                        if (!a || !r) return;
                                                        const s = n(e);
                                                        e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                    })(t.screenX > a.getBoundingClientRect().x ? W.Prev : W.Next);
                                                }
                                        },
                                        ref: c,
                                        onMouseEnter: w,
                                    },
                                    o().createElement('div', { ref: m, className: d()(Y, t.thumb) }),
                                    o().createElement('div', { className: d()(X, t.rail) }),
                                ),
                                o().createElement('div', {
                                    className: d()(Z, t.rightButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(K) ||
                                            0 !== e.button ||
                                            ((0, L.G)('play'), A(W.Prev));
                                    },
                                    onMouseUp: k,
                                    ref: l,
                                    onMouseEnter: w,
                                }),
                            );
                        },
                    ),
                    ae = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    re = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: u,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: d()(ae.base, e.base) });
                            }, [a]),
                            _ = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: d()(ae.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: d()(ae.defaultScrollArea, r) },
                                o().createElement(se, { className: u, api: _, classNames: s }, e),
                            ),
                            o().createElement(ne, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    se = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, i.useEffect)(() => B(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: d()(ae.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: d()(ae.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: d()(ae.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (se.Bar = ne), (se.Default = re);
                const ie = z({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? W.Next : W.Prev),
                    }),
                    oe = 'VerticalBar_base_f3',
                    ue = 'VerticalBar_base__nonActive_42',
                    le = 'VerticalBar_topButton_d7',
                    ce = 'VerticalBar_bottomButton_06',
                    de = 'VerticalBar_track_df',
                    me = 'VerticalBar_thumb_32',
                    _e = 'VerticalBar_rail_43',
                    ge = 'disable',
                    pe = () => {},
                    Ee = { pending: !1, offset: 0 },
                    be = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    he = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ve = (e, t) => Math.max(20, e.offsetHeight * t),
                    fe = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = be, onDrag: a = pe }) => {
                        const r = (0, i.useRef)(null),
                            s = (0, i.useRef)(null),
                            u = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            g = (0, i.useState)(Ee),
                            p = g[0],
                            E = g[1],
                            b = (0, i.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            h = I(() => {
                                const t = c.current,
                                    n = l.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && s && t && n)) return;
                                const i = Math.min(1, a / s);
                                return (
                                    (t.style.height = `${ve(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(ue) : r.current.classList.remove(ue)),
                                    i
                                );
                            }),
                            v = I(() => {
                                const t = l.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    d = S(0, 1, i / (r - a)),
                                    m = (t.offsetHeight - ve(t, o)) * d;
                                (n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && u.current && l.current && c.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(ge), void u.current.classList.remove(ge);
                                            if (
                                                ((t = l.current),
                                                (n = c.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(ge), void u.current.classList.add(ge);
                                            var t, n;
                                            s.current.classList.remove(ge), u.current.classList.remove(ge);
                                        }
                                    })(m);
                            }),
                            f = I(() => {
                                he(e, () => {
                                    h(), v();
                                });
                            });
                        (0, i.useEffect)(() => B(f)),
                            (0, i.useEffect)(() => {
                                const t = () => {
                                    he(e, () => {
                                        v();
                                    });
                                };
                                let n = pe;
                                const a = () => {
                                    n(), (n = B(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!p.pending) return;
                                const t = _.O.client.events.mouse.up(() => {
                                        b(Ee);
                                    }),
                                    n = _.O.client.events.mouse.move(([t]) => {
                                        he(e, (n) => {
                                            const r = l.current,
                                                s = c.current,
                                                i = e.getContainerSize();
                                            if (!r || !s || !i) return;
                                            const o = t.screenY - p.offset - r.getBoundingClientRect().y,
                                                u = (o / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: u });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, p.offset, p.pending, a, b]);
                        const C = N((t) => e.applyStepTo(t), m, [e]),
                            A = C[0],
                            k = C[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', k, !0),
                                () => document.removeEventListener('mouseup', k, !0)
                            ),
                            [k],
                        );
                        const w = (e) => {
                            e.target.classList.contains(ge) || (0, L.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: d()(oe, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: d()(le, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ge) || 0 !== e.button || ((0, L.G)('play'), A(W.Next));
                                },
                                ref: s,
                                onMouseEnter: w,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: d()(de, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (((0, L.G)('play'), t.target === a))
                                                b({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        he(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                s = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? W.Prev : W.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: w,
                                },
                                o().createElement('div', { ref: c, className: d()(me, t.thumb) }),
                                o().createElement('div', { className: d()(_e, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: d()(ce, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ge) || 0 !== e.button || ((0, L.G)('play'), A(W.Prev));
                                },
                                onMouseUp: k,
                                ref: u,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    Ce = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ae = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: u,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: d()(Ce.base, e.base) });
                            }, [a]),
                            _ = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: d()(Ce.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: d()(Ce.area, r) },
                                o().createElement(ke, { className: s, classNames: u, api: _ }, e),
                            ),
                            o().createElement(fe, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    ke = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, i.useEffect)(() => B(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: d()(Ce.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: d()(Ce.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                ke.Default = Ae;
                const we = { Vertical: r, Horizontal: a };
                var ye = n(9480),
                    Fe = n(7078),
                    De = n(3415),
                    Be = n(8045);
                const Se = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let Te, Ie, Ne;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Te || (Te = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Ie || (Ie = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Ne || (Ne = {}));
                const Le = { [Ne.NBSP]: Te.NoBreakSymbol, [Ne.ZWNBSP]: Te.NoBreakSymbol, [Ne.NEW_LINE]: Te.LineBreak },
                    xe = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Re = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    Oe = 'renderers_noBreakWrapper_10',
                    Me = 'renderers_lineBreak_b5',
                    Pe = 'renderers_newLine_bd',
                    He = 'renderers_word_f3',
                    We = (e) => ({ color: `#${e}` }),
                    je = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? Re[a]
                                ? o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: d()(He, Re[a]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: He, style: We(a) },
                                      e,
                                  )
                            : o().createElement('span', { key: n, 'data-block-type': t.blockType, className: He }, e);
                    },
                    ze = {
                        [Te.Word]: je,
                        [Te.NoBreakSymbol]: je,
                        [Te.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            o().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: n }, e)),
                            ),
                        [Te.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': Te.LineBreak, className: Me }),
                        [Te.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': Te.NewLine, className: Pe }, e),
                        [Te.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': Te.NoBreakWrapper, className: Oe },
                                e,
                            ),
                    },
                    Ge = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, s) => {
                                const i = `${n}_${s}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = Ge(e, ze[t], i);
                                    a.push(...n);
                                } else a.push(t({ elementList: [r], textBlock: e, key: i }));
                            }),
                            a
                        );
                    },
                    $e = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            r = ze[a],
                                            s = Ge(e, r, t);
                                        return (
                                            a === Te.NoBreakWrapper
                                                ? n.push(r({ elementList: s, textBlock: e, key: `${t}` }))
                                                : n.push(...s),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    Ve = (e, t, n, a) => {
                        let r = t.exec(e),
                            s = 0;
                        for (; r; ) s !== r.index && n(e.slice(s, r.index)), a(r), (s = t.lastIndex), (r = t.exec(e));
                        s !== e.length && n(e.slice(s));
                    },
                    Ue = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    Ze = (e) => {
                        const t = [];
                        return (
                            Ve(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((n = e), n.match(Ue) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    qe = xe
                        ? (e) => {
                              const t = [];
                              return (
                                  Ve(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...Ze(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const n = /[\s\u002d]/g;
                              let a = n.exec(e);
                              if (!a) return [e];
                              const r = [];
                              let s = 0;
                              for (; a; ) {
                                  const i = t.justifyContent === Ie.FlexEnd ? a.index : n.lastIndex;
                                  r.push(e.slice(s, i)), (s = i), (a = n.exec(e));
                              }
                              return s !== e.length && r.push(e.slice(s)), r;
                          },
                    Ye = (e, t = '', n) => {
                        const a = [];
                        return (
                            Ve(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: Te.Word, colorTag: t, childList: qe(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = Le[n.charAt(0)];
                                    r === Te.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Te.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Te.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : a.push({ blockType: r, colorTag: t, childList: [n] });
                                },
                            ),
                            a
                        );
                    },
                    Xe = (e, t, n = '', a) => {
                        const r = [];
                        return (
                            Ve(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...Ye(e, n, a));
                                },
                                (e) => {
                                    const s = e[1],
                                        i = void 0 === t[s] ? e[0] : t[s];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...Ye(String(i), n, a))
                                        : r.push({ blockType: Te.Binding, colorTag: n, childList: [i] });
                                },
                            ),
                            r
                        );
                    },
                    Ke = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Te.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Te.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    Qe = (e, t = {}, n) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Te.NoBreakSymbol
                                        ? ((n = !0), t.push(...Ke(t.pop(), e)))
                                        : (n ? t.push(...Ke(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    Ve(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...Xe(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...Xe(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })((0, h.Eg)((0, h.z4)(e)), t, n),
                        );
                        return $e(a);
                    },
                    Je = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    et = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    tt = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = et(e, t),
                            r = e.textContent.length,
                            s = e.offsetWidth / r,
                            i = Math.ceil(a / s);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / s);
                            return a >= n ? [!0, n + i] : [!1, a];
                        }
                        const o = Math.max(n + i, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    nt = (e, t, n, a, r, s) => {
                        let i = -1,
                            u = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Te.LineBreak || c === Te.NewLine || c === Te.Binding) continue;
                            const d = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = tt(n, a, r),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (r -= m);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - m) + s,
                                    g = t[l];
                                (u = o().cloneElement(g, g.props, _)), (i = l);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    m = c.props.children,
                                    _ = nt(e, m, e.length - 1, a, r, s),
                                    g = _[0],
                                    p = _[1];
                                if (!(g < 0)) {
                                    const e = m.slice(0, g);
                                    (u = o().cloneElement(c, c.props, e, p)), (i = l);
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [i, u];
                    },
                    at = (e, t, n, a = '...') => {
                        const r = [...t],
                            s = e.current;
                        if (!s) return [r, !1];
                        const i = n.height,
                            o = n.width,
                            u = s.lastElementChild;
                        if (!Je(u, i) && et(u, o) <= 0) return [r, !1];
                        const l = s.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    Je(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(l, i);
                        if (c < 0) return [r, !1];
                        const d = nt(l, r, c, o, a.length, a),
                            m = d[0],
                            _ = d[1];
                        return _ && (r.splice(m, 1, _), r.splice(m + 1)), [r, !0];
                    },
                    rt = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: u,
                            targetId: l,
                            justifyContent: c = Ie.FlexStart,
                            alignContent: m = Ie.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const g = (0, i.useRef)(null),
                                p = (0, i.useRef)({ height: 0, width: 0 }),
                                E = (0, i.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                b = E[0],
                                h = E[1],
                                v = (0, i.useMemo)(() => Qe(e, a, { justifyContent: c }), [a, c, e]),
                                f = (0, i.useMemo)(() => {
                                    if (
                                        r &&
                                        b.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, u, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, r, l, e, u, b.isTruncated]),
                                C = (0, i.useCallback)(
                                    (e) => {
                                        (p.current.width = e.contentRect.width),
                                            (p.current.height = e.contentRect.height);
                                        const t = at(g, v, p.current, _),
                                            a = t[0],
                                            r = t[1];
                                        h({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), n && n(r);
                                    },
                                    [n, _, v],
                                ),
                                A = (0, i.useMemo)(() => ({ justifyContent: c, alignContent: m }), [m, c]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, i.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, i.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new Be.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(g, C, s),
                                o().createElement(
                                    'div',
                                    {
                                        className: d()(
                                            Se.base,
                                            t,
                                            Se.base__zeroPadding,
                                            s && Se.base__isTruncationAvailable,
                                        ),
                                        style: A,
                                    },
                                    o().createElement('div', { className: Se.unTruncated, ref: g }, v),
                                    o().createElement(
                                        De.l,
                                        {
                                            tooltipArgs: f,
                                            className: d()(
                                                Se.tooltip,
                                                Se[`tooltip__justify-${c}`],
                                                Se[`tooltip__align-${m}`],
                                            ),
                                        },
                                        o().createElement(
                                            'div',
                                            {
                                                className: d()(
                                                    Se.truncated,
                                                    !b.isTruncateFinished && s && Se.truncated__hide,
                                                ),
                                                style: A,
                                            },
                                            b.isTruncateFinished && s ? b.elementList : v,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let st;
                !(function (e) {
                    (e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed');
                })(st || (st = {}));
                const it = {
                        base: 'BuffIcon_base_c8',
                        base__increase: 'BuffIcon_base__increase_60',
                        base__decrease: 'BuffIcon_base__decrease_31',
                        base__mixed: 'BuffIcon_base__mixed_23',
                    },
                    ot = o().memo(function ({ buffIconType: e, className: t }) {
                        return e === st.none
                            ? null
                            : o().createElement('div', { className: d()(it.base, it[`base__${st[e]}`], t) });
                    }),
                    ut = 'Delta_base_3e',
                    lt = 'Delta_base__positive_82',
                    ct = 'Delta_base__negative_86',
                    dt = o().memo(function ({ isPositive: e, width: t, shift: n, isUseAnim: a }) {
                        const r = (0, H.useSpring)({
                                from: { left: 0, width: 0 },
                                left: e ? 0 : t,
                                width: e ? 0 : Math.abs(t),
                                config: { duration: ft },
                                delay: e ? 0 : ft,
                                immediate: !a,
                            }),
                            s = (0, H.useSpring)({
                                from: { left: 2, width: 0 },
                                left: 2 + n,
                                width: e ? t : 0,
                                config: { duration: ft },
                                delay: e || 0 === t ? ft : 0,
                                immediate: !a,
                            });
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(H.animated.div, { className: d()(ut, ct), style: r }),
                            o().createElement(H.animated.div, { className: d()(ut, lt), style: s }),
                        );
                    }),
                    mt = 'Indicator_base_b9',
                    _t = 'Indicator_progress_ce',
                    gt = 'Indicator_progressMarker_b4',
                    pt = 'Indicator_indicator_bc',
                    Et = 'Indicator_indicator__start_80',
                    bt = 'Indicator_indicator__end_3b',
                    ht = 'Indicator_marker_f7',
                    vt = 'Indicator_valueLine_1d',
                    ft = 300,
                    Ct = o().memo(function ({
                        minValue: e,
                        maxValue: t,
                        value: n,
                        markerValue: a,
                        delta: r,
                        isUseAnim: s,
                    }) {
                        const i = a === e ? 2 : (a / t) * 254,
                            u = (n / t) * 254,
                            l = (r / t) * 254,
                            c = r > 0,
                            m = { config: { duration: ft }, immediate: !s },
                            _ = (0, H.useSpring)(Object.assign({ from: { left: 2 }, to: { left: i }, delay: ft }, m)),
                            g = (0, H.useSpring)(Object.assign({ from: { width: e }, to: { width: u }, delay: ft }, m));
                        return o().createElement(
                            'div',
                            { className: mt },
                            o().createElement(
                                'div',
                                { className: _t },
                                o().createElement('div', { className: d()(pt, Et) }),
                                o().createElement(H.animated.div, { className: vt, style: g }),
                                o().createElement(
                                    'div',
                                    { className: gt },
                                    o().createElement(
                                        H.animated.div,
                                        { className: ht, style: _ },
                                        o().createElement(dt, {
                                            isPositive: c,
                                            width: l,
                                            shift: u - l - i,
                                            isUseAnim: s,
                                        }),
                                    ),
                                ),
                                o().createElement('div', { className: d()(pt, bt) }),
                            ),
                        );
                    });
                let At;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Increase = 'increase'),
                        (e.Decrease = 'decrease'),
                        (e.Situational = 'situational');
                })(At || (At = {}));
                var kt = n(7160);
                const wt = {
                        base: 'Param_base_51',
                        valueWrapper: 'Param_valueWrapper_85',
                        value: 'Param_value_51',
                        icon: 'Param_icon_37',
                        name: 'Param_name_82',
                        highlight: 'Param_highlight_81',
                        highlight__increase: 'Param_highlight__increase_35',
                        highlight__decrease: 'Param_highlight__decrease_ec',
                        highlight__situational: 'Param_highlight__situational_db',
                    },
                    yt = o().memo(function ({
                        id: e,
                        value: t,
                        tooltipID: n,
                        isEnabled: a,
                        highlightType: r,
                        localizedName: s,
                    }) {
                        const u = (0, H.useSpring)(() => ({ from: { opacity: 0 } })),
                            l = u[0],
                            c = u[1],
                            m = r !== At.None;
                        return (
                            (0, i.useEffect)(() => {
                                m &&
                                    c.start({
                                        from: { opacity: 0 },
                                        to: [{ opacity: 1 }, { opacity: 0 }],
                                        delay: 100,
                                        config: { duration: 300, easing: kt.Fs },
                                    });
                            }, [t, c, m]),
                            o().createElement(
                                Fe.t,
                                {
                                    args: { tooltipId: n, paramId: e },
                                    targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    isEnabled: a,
                                },
                                o().createElement(
                                    'div',
                                    { className: wt.base },
                                    o().createElement(
                                        'div',
                                        { className: wt.valueWrapper },
                                        o().createElement(rt, {
                                            justifyContent: Ie.FlexEnd,
                                            classMix: wt.value,
                                            text: t,
                                        }),
                                    ),
                                    o().createElement('div', {
                                        className: wt.icon,
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${e}')`,
                                        },
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: wt.name },
                                        s || R.strings.menu.tank_params.$dyn(e),
                                    ),
                                    m &&
                                        o().createElement(H.animated.div, {
                                            className: d()(wt.highlight, wt[`highlight__${r}`]),
                                            style: l,
                                        }),
                                ),
                            )
                        );
                    }),
                    Ft = 'Group_base_66',
                    Dt = 'Group_group_07',
                    Bt = 'Group_hoverBg_97',
                    St = 'Group_hoverBg__scrollable_2a',
                    Tt = 'Group_groupHeader_f5',
                    It = 'Group_name_21',
                    Nt = 'Group_arrow_96',
                    Lt = 'Group_arrow__opened_47',
                    xt = 'Group_params_88',
                    Rt = 'Group_params__opened_9a',
                    Ot = 'Group_separator_b5',
                    Mt = 'Group_right_13',
                    Pt = 'Group_situational_55',
                    Ht = 'Group_buff_fa',
                    Wt = 'Group_value_00',
                    jt = 'Group_value__additional_81';
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const Gt = (0, v.Pi)(
                        ({
                            id: e,
                            isOpen: t,
                            params: n,
                            extraParams: a,
                            tooltipID: r,
                            indicator: s,
                            value: i,
                            additionalValue: u,
                            buffIconType: l,
                            isEnabled: c,
                            isScrollable: m,
                            isSituational: _,
                        }) => {
                            const g = D().controls,
                                p = a && a.length > 0;
                            return o().createElement(
                                'div',
                                { className: Ft },
                                o().createElement(
                                    Fe.t,
                                    {
                                        args: { tooltipId: r, paramId: e },
                                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        isEnabled: c,
                                    },
                                    o().createElement(
                                        'div',
                                        {
                                            className: Dt,
                                            onClick: () => g.onGroupClick(e),
                                            onMouseEnter: L.$.playHighlight,
                                        },
                                        o().createElement('div', { className: d()(Bt, m && St) }),
                                        o().createElement(
                                            'div',
                                            { className: Tt },
                                            o().createElement('div', { className: d()(Nt, t && Lt) }),
                                            o().createElement(
                                                'div',
                                                { className: It },
                                                R.strings.menu.tank_params.$dyn(e),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Mt },
                                                _ && o().createElement('div', { className: Pt }),
                                                o().createElement(ot, { buffIconType: l, className: Ht }),
                                                u && o().createElement(rt, { classMix: d()(Wt, jt), text: u }),
                                                o().createElement(rt, { classMix: Wt, text: i }),
                                            ),
                                        ),
                                        o().createElement(Ct, s),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: d()(xt, t && Rt) },
                                    ye.UI(n, (e) => o().createElement(yt, zt({ key: e.id }, e))),
                                    p && o().createElement('div', { className: Ot }),
                                    ye.UI(a, (e) => o().createElement(yt, zt({ key: e.id }, e))),
                                ),
                            );
                        },
                    ),
                    $t = {
                        base: 'VehicleParams_base_3b',
                        base__bg: 'VehicleParams_base__bg_c4',
                        scroll: 'VehicleParams_scroll_59',
                        content: 'VehicleParams_content_09',
                        barBase: 'VehicleParams_barBase_6f',
                    };
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const Ut = {
                        settings: {
                            step: { type: 'fixed', value: 48, clampedArrowStepTimeout: 0 },
                            animationConfig: { tension: 0, friction: 0 },
                        },
                    },
                    Zt = (0, v.Pi)(({ showBackground: e = !0, className: t }) => {
                        const n = D().model,
                            a = (0, i.useState)(!1),
                            r = a[0],
                            s = a[1],
                            u = n.groups.get(),
                            l = ie(Ut);
                        return (
                            (0, i.useEffect)(() => {
                                const e = () => {
                                    const e = l.getContainerSize(),
                                        t = l.getWrapperSize();
                                    e && t && s(e > t);
                                };
                                return (
                                    l.events.on('recalculateContent', e),
                                    () => {
                                        l.events.off('recalculateContent', e);
                                    }
                                );
                            }, [l]),
                            o().createElement(
                                'div',
                                { className: d()($t.base, e && $t.base__bg, t) },
                                o().createElement(
                                    we.Vertical.Area.Default,
                                    {
                                        api: l,
                                        barClassNames: { base: $t.barBase },
                                        scrollClassName: $t.scroll,
                                        scrollClassNames: { content: $t.content },
                                    },
                                    o().createElement(
                                        'div',
                                        { className: $t.groups },
                                        ye.UI(u, (e) =>
                                            o().createElement(Gt, Vt({ key: e.id }, e, { isScrollable: r })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    qt = (0, i.memo)(function (e) {
                        const t = (0, i.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return o().createElement(F, { options: t }, o().createElement(Zt, e));
                    }),
                    Yt = {
                        base: 'FlagIcon_base_25',
                        base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                        base__c_240x118: 'FlagIcon_base__c_240x118_92',
                        base__c_155x31: 'FlagIcon_base__c_155x31_41',
                    };
                let Xt;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(Xt || (Xt = {}));
                const Kt = {
                        [Xt.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [Xt.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [Xt.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    Qt = o().memo(({ nation: e, size: t, className: n }) =>
                        o().createElement('div', {
                            className: d()(Yt.base, Yt[`base__${t}`], n),
                            style: { backgroundImage: `url('${Kt[t].$dyn(e)}')` },
                        }),
                    ),
                    Jt = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    en = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function tn() {
                    return (
                        (tn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        tn.apply(this, arguments)
                    );
                }
                class nn extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, L.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, L.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            n = e.onClick,
                            a = e.goto,
                            r = e.side,
                            s = e.type,
                            i = e.classNames,
                            u = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, en)),
                            g = d()(Jt.base, Jt[`base__${s}`], Jt[`base__${r}`], null == i ? void 0 : i.base),
                            p = d()(Jt.icon, Jt[`icon__${s}`], Jt[`icon__${r}`], null == i ? void 0 : i.icon),
                            E = d()(Jt.glow, null == i ? void 0 : i.glow),
                            b = d()(Jt.caption, Jt[`caption__${s}`], null == i ? void 0 : i.caption),
                            h = d()(Jt.goto, null == i ? void 0 : i.goto);
                        return o().createElement(
                            'div',
                            tn(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(u),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== s && o().createElement('div', { className: Jt.shine }),
                            o().createElement('div', { className: p }, o().createElement('div', { className: E })),
                            o().createElement('div', { className: b }, t),
                            a && o().createElement('div', { className: h }, a),
                        );
                    }
                }
                nn.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const an = ({ onClick: e }) =>
                        o().createElement(nn, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    rn = 'common_close_0e',
                    sn = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        o().createElement(nn, {
                            onClick: e,
                            classNames: { base: rn },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    on = 'TopButtons_base_ef',
                    un = 'TopButtons_leftButtons_9e',
                    ln = 'TopButtons_rightButtons_33',
                    cn = o().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: n,
                        onAboutClick: a,
                        onCloseClick: r,
                        className: s,
                        classNames: i,
                    }) {
                        return o().createElement(
                            'div',
                            { className: d()(on, s) },
                            e &&
                                n &&
                                o().createElement(
                                    'div',
                                    { className: d()(un, null == i ? void 0 : i.leftButtons) },
                                    o().createElement(nn, { onClick: n, caption: e, type: 'back' }),
                                ),
                            o().createElement(
                                'div',
                                { className: d()(ln, null == i ? void 0 : i.rightButtons) },
                                a && o().createElement(an, { onClick: a }),
                                r && o().createElement(sn, { onClick: r, label: t }),
                            ),
                        );
                    });
                var dn = n(9690);
                const mn = (e, t) => e.split(',').includes(t),
                    _n = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let gn, pn;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(gn || (gn = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(pn || (pn = {}));
                const En = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: r,
                        tags: s = '',
                        size: i = gn.extraSmall,
                        type: u = pn.colored,
                        className: l,
                        classNames: c,
                        isShortName: m = !1,
                    }) => {
                        const _ = `${(0, h.BN)(a)}${e ? '_elite' : ''}`,
                            g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return o().createElement(
                            'div',
                            {
                                className: d()(
                                    _n.base,
                                    _n[`base__size${(0, h.e)(i)}`],
                                    _n[`base__type${(0, h.e)(u)}`],
                                    l,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: d()(_n.level, null == c ? void 0 : c.level) },
                                (0, dn.HG)(r),
                            ),
                            o().createElement('div', {
                                className: d()(
                                    _n.type,
                                    e && _n[`type__elite${(0, h.e)(i)}`],
                                    _n[`type__${i}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: a ? { backgroundImage: `url(${g})` } : void 0,
                            }),
                            mn(s, 'premiumIGR') && o().createElement('div', { className: _n.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: d()(_n.name, null == c ? void 0 : c.name) },
                                m ? n : t,
                            ),
                        );
                    },
                    bn = 'VehicleParamsDecorator_base_32',
                    hn = 'VehicleParamsDecorator_vehicleInfo_02',
                    vn = 'VehicleParamsDecorator_tankName_ac',
                    fn = 'VehicleParamsDecorator_tankLvl_26',
                    Cn = 'VehicleParamsDecorator_type_e7',
                    An = 'VehicleParamsDecorator_tip_6c',
                    kn = ['className', 'children', 'isPerkTipShown', 'tipText'];
                function wn() {
                    return (
                        (wn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        wn.apply(this, arguments)
                    );
                }
                const yn = (e) => {
                    let t = e.className,
                        n = e.children,
                        a = e.isPerkTipShown,
                        r = e.tipText,
                        s = void 0 === r ? R.strings.crew.vehicleParamsDecorator.perkTip() : r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, kn);
                    return o().createElement(
                        'div',
                        { className: d()(bn, t) },
                        o().createElement(
                            En,
                            wn({ className: hn, classNames: { name: vn, level: fn, typeIcon: Cn } }, i, {
                                isShortName: !0,
                            }),
                        ),
                        n,
                        a && o().createElement('div', { className: An }, s),
                    );
                };
                var Fn = n(4119),
                    Dn = n(5801),
                    Bn = n(3946);
                const Sn = (e) => ({ tankmanID: e }),
                    Tn = (e) => ({ recruitID: e }),
                    In = (0, f.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    { tankmanList: e.array('tankmanList'), vehicleInfo: e.object('vehicleInfo') },
                                    e.primitives([
                                        'requiredRole',
                                        'vehicle',
                                        'nation',
                                        'hasCrew',
                                        'hasFilters',
                                        'backButtonLabel',
                                        'isButtonBarVisible',
                                        'roleChangeDiscountPercent',
                                        'itemsOffset',
                                        'itemsAmount',
                                        'isRecruitDisabled',
                                    ]),
                                ),
                                n = (0, Bn.Om)((e) => {
                                    const n = e - t.itemsOffset.get(),
                                        a = t.tankmanList.get();
                                    if (n >= 0 && n < a.length) return ye.U2(a, n);
                                }),
                                a = (0, Bn.Om)(() => (t.hasCrew.get() ? t.backButtonLabel.get() : R.invalid()));
                            return Object.assign({}, t, { computes: { backButtonLabel: a, getItem: n } });
                        },
                        ({ externalModel: e }) => ({
                            closeWithEsc: e.createCallback(() => ({ isFromEscape: !0 }), 'onClose'),
                            back: e.createCallbackNoArgs('onBack'),
                            hangar: e.createCallbackNoArgs('onHangar'),
                            selectTankman: e.createCallback(Sn, 'onTankmanSelected'),
                            selectRecruit: e.createCallback((e) => ({ recruitID: e }), 'onRecruitSelected'),
                            restoreTankman: e.createCallback(Sn, 'onTankmanRestore'),
                            recruitNewTankman: e.createCallbackNoArgs('onRecruitNewTankman'),
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                            playRecruitVoiceover: e.createCallback(Tn, 'onPlayRecruitVoiceover'),
                            loadCards: e.createCallback((e, t) => ({ limit: e, offset: t }), 'onLoadCards'),
                        }),
                    ),
                    Nn = In[0],
                    Ln = In[1];
                var xn = n(3457),
                    Rn = n(6373);
                const On = {
                    base: 'ListHeader_base_ad',
                    title: 'ListHeader_title_a8',
                    base__memberChange: 'ListHeader_base__memberChange_c2',
                    base__tankChange: 'ListHeader_base__tankChange_fb',
                    base__personalData: 'ListHeader_base__personalData_aa',
                };
                let Mn;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(Mn || (Mn = {}));
                const Pn = ({ title: e, theme: t = Mn.Barracks, className: n, children: a }) =>
                        o().createElement(
                            'div',
                            { className: d()(On.base, On[`base__${t}`], n) },
                            o().createElement('div', { className: On.title }, e),
                            a,
                        ),
                    Hn = 'Header_base_4c',
                    Wn = 'Header_button_fa',
                    jn = (0, v.Pi)(() => {
                        const e = Ln(),
                            t = e.model,
                            n = e.controls,
                            a = t.requiredRole.get(),
                            r = t.isRecruitDisabled.get();
                        return o().createElement(
                            Pn,
                            {
                                theme: Mn.MemberChange,
                                title: (0, h.uF)(R.strings.crew.memberChange.title(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.upperCase.$dyn(a),
                                    vehicle: t.vehicle.get(),
                                }),
                            },
                            o().createElement(
                                'div',
                                { className: Hn },
                                o().createElement(
                                    Rn.i,
                                    {
                                        body: r
                                            ? R.strings.crew.tankmanList.tooltip.can_not_recruit.body()
                                            : R.strings.crew.tankmanList.tooltip.recruit.body(),
                                    },
                                    o().createElement(
                                        'div',
                                        null,
                                        o().createElement(
                                            xn.u5,
                                            {
                                                onClick: n.recruitNewTankman,
                                                type: xn.L$.secondary,
                                                size: xn.qE.small,
                                                mixClass: Wn,
                                                disabled: r,
                                            },
                                            (0, h.uF)(R.strings.crew.memberChange.action.recruit(), {
                                                role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(a),
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var zn = n(2106),
                    Gn = n(8018);
                const $n = 'WarningText_base_13',
                    Vn = 'WarningText_icon_5d',
                    Un = 'WarningText_label_c6',
                    Zn = o().memo(function ({ label: e }) {
                        return o().createElement(
                            'div',
                            { className: $n },
                            o().createElement('div', { className: Vn }),
                            o().createElement('div', { className: Un }, e),
                        );
                    }),
                    qn = 'ListEmptyState_base_ae',
                    Yn = 'ListEmptyState_content_1e',
                    Xn = 'ListEmptyState_shadow_ae',
                    Kn = 'ListEmptyState_buttonWrapper_78',
                    Qn = 'ListEmptyState_button_f1',
                    Jn = o().memo(function ({
                        warningText: e,
                        buttonType: t = xn.L$.secondary,
                        tooltipArgs: n = Gn.Xd,
                        isBtnDisabled: a = !1,
                        className: r,
                        onClick: s,
                        children: i,
                    }) {
                        return o().createElement(
                            'div',
                            { className: d()(qn, r) },
                            o().createElement(
                                'div',
                                { className: Yn },
                                o().createElement('div', { className: Xn }),
                                o().createElement(Zn, { label: e }),
                                i &&
                                    o().createElement(
                                        'div',
                                        { className: Kn },
                                        o().createElement(
                                            Rn.i,
                                            n,
                                            o().createElement(
                                                'div',
                                                null,
                                                o().createElement(
                                                    xn.u5,
                                                    {
                                                        size: xn.qE.small,
                                                        type: t,
                                                        disabled: a,
                                                        onClick: s,
                                                        mixClass: Qn,
                                                    },
                                                    i,
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var ea = n(2603);
                let ta, na, aa, ra, sa;
                !(function (e) {
                    (e.Any = 'any'),
                        (e.Commander = 'commander'),
                        (e.Radioman = 'radioman'),
                        (e.Driver = 'driver'),
                        (e.Gunner = 'gunner'),
                        (e.Loader = 'loader');
                })(ta || (ta = {})),
                    (function (e) {
                        (e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed');
                    })(na || (na = {})),
                    (function (e) {
                        (e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed');
                    })(aa || (aa = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                    })(ra || (ra = {})),
                    (function (e) {
                        (e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole');
                    })(sa || (sa = {}));
                var ia = n(8617),
                    oa = n(5855);
                const ua = 'Content_base_48',
                    la = 'Content_base__disabled_e3',
                    ca = 'Content_content_cb',
                    da = 'Content_name_7b',
                    ma = 'Content_name__postProgression_f9',
                    _a = 'Content_specializationInfo_ac',
                    ga = 'Content_recruitLabel_17';
                function pa() {
                    return (
                        (pa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        pa.apply(this, arguments)
                    );
                }
                const Ea = o().memo(({ tankman: e, isRecruit: t, isDisabled: n = !1, withBonusSkills: a = !1 }) =>
                        o().createElement(
                            'div',
                            { className: d()(ua, n && la) },
                            o().createElement(
                                'div',
                                { className: ca },
                                o().createElement(
                                    'div',
                                    { className: d()(da, e.hasPostProgression && ma) },
                                    e.fullUserName,
                                ),
                                o().createElement(
                                    'div',
                                    { className: _a },
                                    t
                                        ? o().createElement('div', { className: ga }, R.strings.crew.tankman.recruit())
                                        : o().createElement(
                                              En,
                                              pa({}, e.tankmanVehicleInfo, { type: pn.whiteSpanish, isShortName: !0 }),
                                          ),
                                ),
                            ),
                            o().createElement(ia.n, {
                                data: e.skills,
                                collapseType: oa.t6.Overlap,
                                isBonusSkillsVisible: a,
                            }),
                        ),
                    ),
                    ba = 'DisabledLayer_base_1b',
                    ha = 'DisabledLayer_disabledContent_81',
                    va = 'DisabledLayer_disabledIcon_21',
                    fa = 'DisabledLayer_disabledTitle_a4',
                    Ca = o().memo(({ disableReason: e, disableIcon: t, className: n }) =>
                        o().createElement(
                            'div',
                            { className: d()(ba, n) },
                            o().createElement(
                                'div',
                                { className: ha },
                                t &&
                                    o().createElement('div', {
                                        className: va,
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                o().createElement('div', { className: fa }, e),
                            ),
                        ),
                    );
                var Aa = n(7077);
                const ka = 'Icon_base_93',
                    wa = 'Icon_base__disabled_54',
                    ya = 'Icon_flag_ac',
                    Fa = (e, t) => {
                        if (e && t) return { backgroundImage: `url(${e})` };
                    },
                    Da = o().memo(
                        ({
                            nation: e,
                            tankmanIcon: t,
                            recruitGlowImage: n,
                            isTankmanInSkin: a,
                            isRecruit: r,
                            isDisabled: s,
                            className: i,
                            children: u,
                        }) =>
                            o().createElement(
                                'div',
                                { className: d()(ka, s && wa, i), style: Fa(n, r) },
                                '' !== e && o().createElement(Qt, { nation: e, size: Xt.c240x118, className: ya }),
                                o().createElement(Aa.G, { name: t, size: Aa.U.c158x118, isSkin: a }),
                                u,
                            ),
                    );
                var Ba = n(7044);
                const Sa = (0, i.memo)(({ duration: e }) => {
                    const t =
                        e >= 0
                            ? (n = (0, Ba.f8)(e)).days > 0
                                ? (0, h.WU)(R.strings.common.duration.days(), { days: n.days })
                                : n.hours > 0
                                  ? (0, h.WU)(R.strings.common.duration.hours(), { hours: n.hours })
                                  : n.minutes > 0
                                    ? (0, h.WU)(R.strings.common.duration.minutes(), { minutes: n.minutes })
                                    : (0, h.WU)(R.strings.common.duration.seconds(), { seconds: n.seconds })
                            : R.strings.common.duration.unlimited();
                    var n;
                    return o().createElement('span', null, t);
                });
                var Ta = n(2344);
                const Ia = 'DismissedCountdown_base_12',
                    Na = 'DismissedCountdown_icon_e6',
                    La = 'DismissedCountdown_label_92',
                    xa = o().memo(({ duration: e }) =>
                        o().createElement(
                            'div',
                            { className: Ia },
                            o().createElement('div', { className: Na }),
                            o().createElement(
                                'div',
                                { className: La },
                                o().createElement(Sa, { duration: (0, Ta.au)(e, 1) }),
                            ),
                        ),
                    ),
                    Ra = 'Location_base_4d',
                    Oa = 'Location_icon_eb',
                    Ma = o().memo(({ location: e, timeToDismiss: t, className: n }) =>
                        o().createElement(
                            'div',
                            { className: d()(Ra, n) },
                            e === na.Dismissed && o().createElement(xa, { duration: t }),
                            e !== na.InBarracks &&
                                o().createElement('div', {
                                    className: Oa,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.tankmen.card.location.${e})`,
                                    },
                                }),
                        ),
                    ),
                    Pa = 'Role_base_68',
                    Ha = 'Role_base__disabled_8c';
                var Wa;
                !(function (e) {
                    (e.White = 'white'), (e.Red = 'red');
                })(Wa || (Wa = {}));
                const ja = o().memo(({ role: e, withPenalty: t, className: n, isDisabled: a = !1 }) =>
                        e !== ta.Any
                            ? o().createElement('div', {
                                  className: d()(Pa, a && Ha, n),
                                  style: {
                                      backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${t ? Wa.Red : Wa.White}.${e})`,
                                  },
                              })
                            : null,
                    ),
                    za = {
                        base: 'TankmanCard_base_dd',
                        base__default: 'TankmanCard_base__default_72',
                        base__disabled: 'TankmanCard_base__disabled_1f',
                        icon: 'TankmanCard_icon_a5',
                        disabledLayer: 'TankmanCard_disabledLayer_25',
                        role: 'TankmanCard_role_02',
                        location: 'TankmanCard_location_3f',
                        separatorWrapper: 'TankmanCard_separatorWrapper_fe',
                        separator: 'TankmanCard_separator_73',
                        separator__top: 'TankmanCard_separator__top_72',
                        actions: 'TankmanCard_actions_b5',
                    },
                    Ga = (0, i.memo)(
                        ({
                            tankman: e,
                            Icon: t = Da,
                            actions: n,
                            isTooltipEnabled: a = !0,
                            withBonusSkills: r = !1,
                            className: s,
                            classNames: i,
                            onHover: u,
                            onMouseDown: l,
                            onClick: c,
                        }) => {
                            const m = e.tankmanKind === aa.Recruit,
                                _ = e.cardState === ra.Disabled;
                            return o().createElement(
                                Fe.t,
                                {
                                    args: { tooltipId: m ? ea.XG : ea.v$, targetId: m ? e.recruitID : e.tankmanID },
                                    isEnabled: a,
                                    ignoreShowDelay: !1,
                                },
                                o().createElement(
                                    'div',
                                    {
                                        className: d()(za.base, za[`base__${e.cardState}`], s),
                                        onMouseEnter: u,
                                        onMouseDown: l,
                                        onClick: c,
                                    },
                                    _ &&
                                        o().createElement(Ca, {
                                            disableReason: e.disableReason,
                                            disableIcon: e.disableIcon,
                                            className: za.disabledLayer,
                                        }),
                                    o().createElement(ja, {
                                        isDisabled: _,
                                        role: e.role,
                                        withPenalty: e.hasRolePenalty,
                                        className: za.role,
                                    }),
                                    o().createElement(Ma, {
                                        location: e.location,
                                        timeToDismiss: e.timeToDismiss,
                                        className: za.location,
                                    }),
                                    o().createElement(t, {
                                        nation: e.nation,
                                        tankmanIcon: e.iconName,
                                        recruitGlowImage: e.recruitGlowImage,
                                        isTankmanInSkin: e.isInSkin,
                                        isRecruit: m,
                                        isDisabled: _,
                                        className: d()(za.icon, null == i ? void 0 : i.icon),
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: d()(za.separatorWrapper, null == i ? void 0 : i.separator) },
                                        o().createElement('div', { className: d()(za.separator, za.separator__top) }),
                                        o().createElement('div', { className: za.separator }),
                                    ),
                                    o().createElement(Ea, {
                                        tankman: e,
                                        isRecruit: m,
                                        isDisabled: _,
                                        withBonusSkills: r,
                                    }),
                                    !_ && n && o().createElement('div', { className: d()(za.actions) }, n),
                                ),
                            );
                        },
                    );
                var $a = n(4385);
                const Va = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: n,
                        paddingBottom: a,
                        amount: r,
                        itemsAmountPerRow: s,
                        visibleRowsAmount: i,
                    }) => {
                        const o = Math.ceil(r / s) * t,
                            u = i * t,
                            l = e * t;
                        return { paddingTop: `${l + n}rem`, paddingBottom: `${Math.max(o - l - u, 0) + a}rem` };
                    },
                    Ua = (e) => {
                        const t = e.className,
                            n = e.children,
                            a = e.itemsAmountPerRow,
                            r = e.visibleRowsAmount,
                            s = e.startRowIndex,
                            i = e.amount,
                            u = s * a,
                            l = Math.min(r * a, i - u);
                        return o().createElement(
                            'div',
                            { className: t, style: Va(e) },
                            (0, $a.K)(l, (e) => n(u + e)),
                        );
                    },
                    Za = 'VirtualGrid_base_52',
                    qa = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: n,
                        children: a,
                        api: r,
                        classNames: s,
                        preloadedRows: u = 1,
                        paddingTop: l = 0,
                        paddingBottom: c = 0,
                    }) => {
                        const m = r.scrollApi,
                            g = (0, i.useRef)(0),
                            p = (0, i.useState)(0),
                            E = p[0],
                            b = p[1],
                            h = (0, i.useState)(null),
                            v = h[0],
                            f = h[1],
                            C = (0, i.useState)(null),
                            A = C[0],
                            k = C[1];
                        return (
                            (0, i.useEffect)(() => {
                                const t = (t) => {
                                    if (!v) return;
                                    const a = Math.floor((_.O.view.pxToRem(t.value.scrollPosition) - l) / n + 1),
                                        s = Math.ceil(e / v),
                                        i = Math.max(0, Math.min(a - u, s));
                                    b(i), r.startRowIndexChanged(i);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [r, m, n, l, v, e, u]),
                            (0, i.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                a = m.contentRef.current.getBoundingClientRect(),
                                                s =
                                                    _.O.view.pxToRem(a.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                i = Math.floor(s / t),
                                                o = Math.ceil(_.O.view.pxToRem(a.height) / n) + 2 * u;
                                            (g.current = i), f(i), k(o), r.layoutCalculated(i, o);
                                        }
                                    },
                                    a = () => {
                                        const t = g.current;
                                        e(), r.scrollToIndex(E * t);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', a),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', a);
                                    }
                                );
                            }, [r, m, n, t, u, E]),
                            (0, i.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    v && m.applyScroll(Math.floor(e / v) * n + l, { immediate: t });
                                };
                                return r.events.on('scrollToIndex', e), () => r.events.off('scrollToIndex', e);
                            }, [r, n, v, l, m]),
                            o().createElement(
                                we.Vertical.Default,
                                {
                                    api: m,
                                    className: null == s ? void 0 : s.scroll,
                                    areaClassName: null == s ? void 0 : s.areaClassName,
                                    scrollClassName: null == s ? void 0 : s.scrollClassName,
                                    scrollClassNames: {
                                        content: null == s ? void 0 : s.content,
                                        wrapper: null == s ? void 0 : s.wrapper,
                                    },
                                },
                                null !== v &&
                                    null !== A &&
                                    o().createElement(
                                        Ua,
                                        {
                                            className: d()(Za, null == s ? void 0 : s.inner),
                                            paddingBottom: c,
                                            paddingTop: l,
                                            amount: e,
                                            itemsAmountPerRow: v,
                                            visibleRowsAmount: A,
                                            startRowIndex: E,
                                            cellHeight: n,
                                        },
                                        a,
                                    ),
                            )
                        );
                    },
                    Ya = 'VirtualGridWithFade_scrollAreaFade_94',
                    Xa = ['api', 'children', 'classNames'];
                function Ka() {
                    return (
                        (Ka =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ka.apply(this, arguments)
                    );
                }
                const Qa = (e) => {
                        let t = e.api,
                            n = e.children,
                            a = e.classNames,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Xa);
                        const s = (0, i.useState)(!0),
                            u = s[0],
                            l = s[1],
                            c = t.scrollApi;
                        return (
                            (0, i.useEffect)(() => {
                                const e = () => {
                                    const e = c.getBounds()[1];
                                    l(Math.abs(e - c.animationScroll.scrollPosition.goal) > 0.1);
                                };
                                return (
                                    c.events.on('change', e),
                                    c.events.on('recalculateContent', e),
                                    () => {
                                        c.events.off('change', e), c.events.off('recalculateContent', e);
                                    }
                                );
                            }, [c]),
                            o().createElement(
                                qa,
                                Ka(
                                    {
                                        api: t,
                                        classNames: Object.assign({}, a, {
                                            scrollClassName: d()(null == a ? void 0 : a.scrollClassName, u && Ya),
                                        }),
                                    },
                                    r,
                                ),
                                n,
                            )
                        );
                    },
                    Ja = 'TankmanVirtualList_grid_41',
                    er = ({
                        amount: e,
                        paddingTop: t = 11,
                        paddingBottom: n = 11,
                        api: a,
                        classNames: r,
                        children: s,
                    }) =>
                        o().createElement(
                            Qa,
                            {
                                amount: e,
                                classNames: Object.assign({}, r, { content: d()(Ja, null == r ? void 0 : r.content) }),
                                cellWidth: 318,
                                cellHeight: 265,
                                paddingTop: t,
                                paddingBottom: n,
                                api: a,
                            },
                            s,
                        );
                var tr = n(5139);
                function nr(e, t, n, a = !1) {
                    const r = (0, i.useMemo)(
                        () =>
                            (function (e, t, n) {
                                return void 0 === n ? (0, tr.Z)(e, t, !1) : (0, tr.Z)(e, n, !1 !== t);
                            })(n, a, e),
                        t,
                    );
                    return (0, i.useEffect)(() => r.cancel, [r]), r;
                }
                const ar = 'VoiceOverButton_base_f9',
                    rr = 'VoiceOverButton_soundIcon_c9',
                    sr = o().memo(({ onClick: e }) =>
                        o().createElement(
                            Rn.i,
                            {
                                header: R.strings.crew.tankman.action.voiceover.tooltip.title(),
                                body: R.strings.crew.tankman.action.voiceover.tooltip.body(),
                            },
                            o().createElement(
                                xn.u5,
                                {
                                    size: xn.qE.small,
                                    mixClass: ar,
                                    type: xn.L$.secondary,
                                    onClick: (t) => {
                                        e && (t.stopPropagation(), e(t));
                                    },
                                },
                                o().createElement('div', { className: rr }),
                            ),
                        ),
                    ),
                    ir = ({ className: e }) => o().createElement('div', { className: d()(za.base, e) }),
                    or = {
                        base__selected: 'MemberChangeTankman_base__selected_fa',
                        base__error: 'MemberChangeTankman_base__error_e3',
                        base__default: 'MemberChangeTankman_base__default_a0',
                        sameVehicle: 'MemberChangeTankman_sameVehicle_1b',
                        iconBackground: 'MemberChangeTankman_iconBackground_0f',
                    },
                    ur = (e) =>
                        (0, i.memo)((t) =>
                            o().createElement(Da, t, !e && o().createElement('div', { className: or.iconBackground })),
                        ),
                    lr = (0, v.Pi)(({ index: e, className: t, onLazyLoad: n }) => {
                        const a = Ln(),
                            r = a.model,
                            s = a.controls,
                            u = r.computes.getItem(e);
                        if (
                            ((0, i.useEffect)(() => {
                                u || n();
                            }, [n, u]),
                            !u)
                        )
                            return o().createElement(ir, { className: t });
                        const l = u.tankmanKind === aa.Recruit,
                            c = u.cardState === ra.Selected,
                            m = !(c || u.cardState === ra.Disabled);
                        return o().createElement(Ga, {
                            withBonusSkills: !0,
                            tankman: u,
                            Icon: ur(l),
                            actions:
                                u.hasVoiceover &&
                                u.tankmanKind === aa.Recruit &&
                                o().createElement(sr, { onClick: () => s.playRecruitVoiceover(u.recruitID) }),
                            className: d()(
                                or[`base__${u.cardState}`],
                                c && or.base__selected,
                                u.isInSameVehicle && or.sameVehicle,
                                (0, Gn.Y4)(u.skills.skillsEfficiency) === Gn.H$.Untrained && !c && or.base__error,
                                t,
                            ),
                            onHover: () => m && L.$.playHighlight(),
                            onClick: () => {
                                m &&
                                    (L.$.playClick(),
                                    l
                                        ? s.selectRecruit(u.recruitID)
                                        : u.location === na.Dismissed
                                          ? s.restoreTankman(u.tankmanID)
                                          : s.selectTankman(u.tankmanID));
                            },
                        });
                    }),
                    cr = 'MemberChangeTankmanList_base_66',
                    dr = 'MemberChangeTankmanList_gridWrapper_99',
                    mr = 'MemberChangeTankmanList_gridWrapper__qHDWidth_14',
                    _r = 'MemberChangeTankmanList_emptyState_4a',
                    gr = 'MemberChangeTankmanList_item_35',
                    pr = 'MemberChangeTankmanList_item__withoutTopMargin_c6',
                    Er = R.strings.crew.tankmanList.emptyState,
                    br = (e, t) => {
                        const n = e ? Gn.Xd : { body: R.strings.crew.tankmanList.tooltip.recruit.body() };
                        return t ? { body: R.strings.crew.tankmanList.tooltip.can_not_recruit.body() } : n;
                    },
                    hr = (0, v.Pi)(function ({ isQHD: e, hasTopPadding: t = !0 }) {
                        const n = Ln(),
                            a = n.model,
                            r = n.controls,
                            s = (() => {
                                const e = we.Vertical.useVerticalScrollApi(),
                                    t = M(),
                                    n = (0, i.useCallback)((e, n = !0) => t.trigger('scrollToIndex', e, n), [t]),
                                    a = (0, i.useCallback)((e, n) => t.trigger('layoutCalculated', e, n), [t]),
                                    r = (0, i.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, i.useMemo)(
                                    () => ({
                                        scrollToIndex: n,
                                        layoutCalculated: a,
                                        startRowIndexChanged: r,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [n, a, r, e, t.off, t.on],
                                );
                            })(),
                            u = a.hasFilters.get(),
                            l = a.itemsAmount.get(),
                            c = a.isRecruitDisabled.get(),
                            m = ((e, t) => {
                                const n = (0, i.useRef)([0, 0]),
                                    a = (0, i.useRef)(0),
                                    r = (0, i.useRef)([0, !0]);
                                return (
                                    (0, i.useEffect)(() => {
                                        const e = (e, t) => {
                                                n.current = [e, t];
                                            },
                                            s = (e) => {
                                                a.current = e;
                                            },
                                            i = (e) => {
                                                const t = r.current[0];
                                                r.current = [e.value.scrollPosition, t < e.value.scrollPosition];
                                            };
                                        return (
                                            t.scrollApi.events.on('change', i),
                                            t.events.on('layoutCalculated', e),
                                            t.events.on('startRowIndexChanged', s),
                                            () => {
                                                t.scrollApi.events.off('change', i),
                                                    t.events.off('layoutCalculated', e),
                                                    t.events.off('startRowIndexChanged', s);
                                            }
                                        );
                                    }, [t]),
                                    nr(
                                        () => {
                                            const t = n.current,
                                                s = t[0],
                                                i = t[1],
                                                o = a.current * s,
                                                u = s * i;
                                            e(2 * u, r.current[1] ? o : Math.max(o - 1 * u, 0));
                                        },
                                        [],
                                        10,
                                    )
                                );
                            })(r.loadCards, s);
                        return o().createElement(
                            'div',
                            { className: cr },
                            l > 0
                                ? o().createElement(
                                      'div',
                                      { className: d()(dr, e && mr) },
                                      o().createElement(
                                          er,
                                          { amount: l, paddingTop: t ? 11 : 0, paddingBottom: t ? 11 : 2, api: s },
                                          (e) =>
                                              o().createElement(lr, {
                                                  className: d()(gr, !t && pr),
                                                  key: e,
                                                  index: e,
                                                  onLazyLoad: m,
                                              }),
                                      ),
                                  )
                                : o().createElement(
                                      Jn,
                                      {
                                          warningText: u ? Er.noFilteredItems() : Er.noItems(),
                                          buttonType: zn.L.primary,
                                          tooltipArgs: br(u, c),
                                          isBtnDisabled: c,
                                          onClick: u ? r.resetFilters : r.recruitNewTankman,
                                          className: _r,
                                      },
                                      u
                                          ? Er.button.resetFilers()
                                          : (0, h.uF)(R.strings.crew.memberChange.action.recruit(), {
                                                role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(
                                                    a.requiredRole.get(),
                                                ),
                                            }),
                                  ),
                        );
                    }),
                    vr = 'MemberChangeApp_base_05',
                    fr = 'MemberChangeApp_flagIcon_02',
                    Cr = 'MemberChangeApp_widget_30',
                    Ar = 'MemberChangeApp_ttc_4a',
                    kr = 'MemberChangeApp_topButtons_88',
                    wr = 'MemberChangeApp_base__qHDWidth_f9',
                    yr = 'MemberChangeApp_discount_83',
                    Fr = 'MemberChangeApp_content_dc',
                    Dr = (0, v.Pi)(() => {
                        const e = Ln(),
                            t = e.model,
                            n = e.controls,
                            a = t.roleChangeDiscountPercent.get(),
                            r = a > 0,
                            s = (0, b.GS)(),
                            i = s.mediaWidth,
                            u = s.mediaHeight,
                            l = (0, b.GS)().remScreenWidth >= 2560;
                        var c;
                        return (
                            (c = n.closeWithEsc),
                            E(g.n.ESCAPE, c),
                            o().createElement(
                                'div',
                                { className: d()(vr, l && wr) },
                                o().createElement(Qt, { className: fr, nation: t.nation.get(), size: Xt.c1080x454 }),
                                o().createElement(
                                    'div',
                                    { className: Fr },
                                    o().createElement(jn, null),
                                    o().createElement(Dn.p, {
                                        popoverDirection: u < b.Aq.Medium ? m.IC.Left : m.IC.Bottom,
                                    }),
                                    r &&
                                        o().createElement(
                                            'div',
                                            { className: yr },
                                            (0, h.uF)(R.strings.crew.memberChange.discount(), { discountAmount: a }),
                                        ),
                                    o().createElement(hr, { isQHD: l, hasTopPadding: !r }),
                                ),
                                o().createElement('div', { className: Cr }, o().createElement(Fn.O, null)),
                                i >= b.fd.Large &&
                                    o().createElement(
                                        'div',
                                        { className: Ar },
                                        o().createElement(
                                            yn,
                                            t.vehicleInfo.get(),
                                            o().createElement(qt, {
                                                showBackground: !1,
                                                resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                            }),
                                        ),
                                    ),
                                o().createElement(cn, {
                                    backButtonLabel: t.computes.backButtonLabel(),
                                    onBackClick: n.back,
                                    closeButtonLabel: R.strings.crew.common.navigation.toGarage(),
                                    onCloseClick: n.hangar,
                                    className: t.isButtonBarVisible.get() && kr,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    l().render(
                        o().createElement(Nn, null, o().createElement(s.z, null, o().createElement(Dr, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2857: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => l });
                var a = n(6483),
                    r = n.n(a),
                    s = n(6373),
                    i = n(6179),
                    o = n.n(i),
                    u = n(8699);
                const l = (0, i.memo)(({ classMix: e, targetId: t }) =>
                    o().createElement(
                        s.i,
                        {
                            header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                            body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            targetId: t,
                        },
                        o().createElement(
                            'div',
                            { className: r()(u.Z.base, e) },
                            o().createElement('div', { className: u.Z.icon }),
                        ),
                    ),
                );
            },
            9367: (e, t, n) => {
                'use strict';
                n.d(t, { Q: () => d });
                var a = n(6483),
                    r = n.n(a),
                    s = n(9987),
                    i = n(6179),
                    o = n.n(i);
                const u = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        o().createElement(
                            'div',
                            { className: r()(u, t) },
                            o().createElement(s.A, { value: e, className: l }),
                            !e && o().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            5563: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => g, r: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    s = n(7078),
                    i = n(2603),
                    o = n(771),
                    u = n(3649),
                    l = n(9916),
                    c = n(6179),
                    d = n.n(c),
                    m = n(130);
                let _;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(_ || (_ = {}));
                const g = (0, c.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = o.y$,
                        className: n,
                        targetId: a = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: c = _.Normal,
                    }) => {
                        const g = e === o.sU,
                            p = g ? { tooltipId: i.M4 } : { tooltipId: i.Br, skillEfficiency: e, tankmanID: t };
                        return d().createElement(
                            s.t,
                            { targetId: a, args: p, isEnabled: t !== o.y$ },
                            d().createElement(
                                'div',
                                { className: r()(m.Z.base, m.Z[`base__${c}`], g && m.Z.base__untrained, n) },
                                g
                                    ? d().createElement('div', { className: m.Z.icon })
                                    : d().createElement(
                                          'div',
                                          { className: r()(m.Z.percent, e === o.yb && m.Z.percent__full) },
                                          (0, u.dL)(l.Z5.getNumberFormat(100 * e, l.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
            },
            9197: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => b });
                var a = n(6483),
                    r = n.n(a),
                    s = n(6179),
                    i = n.n(s);
                const o = 'NumberRange_base_5e',
                    u = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = i().memo(function ({ from: e, to: t, className: n }) {
                        return i().createElement(
                            'div',
                            { className: r()(o, e <= 0 && u, n) },
                            i().createElement('div', { className: r()(l, e <= 0 && t > 0 && c) }, e),
                            e !== t &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: d }, '/'),
                                    i().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    g = 'NumberRangeWithLabel_title_94',
                    p = 'NumberRangeWithLabel_counter_00',
                    E = 'NumberRangeWithLabel_counterGlow_1f',
                    b = ({ title: e, isGlowVisible: t = !1, className: n, classNames: a, from: o, to: u }) => {
                        const l = (0, s.useMemo)(
                            () => ({
                                left: o !== u ? 7 * String(o).length + 4 : Math.round((7 * String(o).length) / 2),
                            }),
                            [o, u],
                        );
                        return i().createElement(
                            'div',
                            { className: r()(_, n) },
                            i().createElement('div', { className: g }, e),
                            i().createElement(
                                'div',
                                { className: p },
                                i().createElement(m, { from: o, to: u }),
                                t &&
                                    i().createElement('div', {
                                        style: l,
                                        className: r()(E, null == a ? void 0 : a.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            2768: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => u, y: () => l });
                var a = n(6483),
                    r = n.n(a),
                    s = n(6179),
                    i = n.n(s),
                    o = n(4458);
                let u;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(u || (u = {}));
                const l = i().memo(function ({ iconName: e, size: t = u.c24x24, className: n }) {
                    var a;
                    const s = null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e);
                    return i().createElement('div', {
                        style: null !== s ? { backgroundImage: `url(${s})` } : void 0,
                        className: r()(o.Z.base, o.Z[`base__${t}`], n),
                    });
                });
            },
            8617: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => h });
                var a = n(6483),
                    r = n.n(a),
                    s = n(771),
                    i = n(9480),
                    o = n(6179),
                    u = n.n(o),
                    l = n(5563),
                    c = n(8018),
                    d = n(5108),
                    m = n(4091),
                    _ = n(552),
                    g = n(8326),
                    p = n(5855),
                    E = n(3591);
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const h = ({
                    data: e,
                    dataToCompare: t,
                    classes: n,
                    tankmanID: a = s.y$,
                    size: o = p.Ow.c24x24,
                    collapseType: h = p.t6.None,
                    isSkillTooltipEnabled: v = !1,
                    isAcceleratedTrainingVisible: f = !1,
                    isNewSkillAnimated: C = !1,
                    isEfficiencyVisible: A = !1,
                    isBonusSkillsVisible: k = !0,
                    tooltipsTargetId: w = R.invalid('resId'),
                    tooltipArgs: y,
                    blinkStyle: F,
                    children: D,
                }) => {
                    const B = e.majorSkills,
                        S = e.bonusSkills,
                        T = e.skillsEfficiency,
                        I = (null == t ? void 0 : t.skillsEfficiency) || T,
                        N = (0, c.Y4)(T),
                        L = void 0 !== t && t.skillsEfficiency !== T,
                        x = N !== c.H$.Normal || A || L,
                        O = null == t ? void 0 : t.majorSkills,
                        M = null == t ? void 0 : t.bonusSkills,
                        P = M || S,
                        H = i.lN(P),
                        W = k && P.length > 0,
                        j = C || void 0 !== t,
                        z = (null == O ? void 0 : O.length) === s.GT,
                        G = (0, E.Ld)(h, P.length, x, N !== c.H$.Low && void 0 !== H && H.level < s.I),
                        $ = {
                            size: o,
                            efficiencyState: N,
                            tooltipData: { targetId: w, isEnabled: v, tankmanID: a, args: y },
                        };
                    return u().createElement(
                        'div',
                        { className: r()(g.Z.base, g.Z[`base__${o}`], null == n ? void 0 : n.base) },
                        x &&
                            u().createElement(
                                d.r,
                                { blinkStyle: F, isEnabled: L && j },
                                u().createElement(l.A, {
                                    efficiencyValue: I,
                                    tankmanID: a,
                                    className: g.Z.efficiency,
                                    size: (0, E.h7)(o, W),
                                    targetId: w,
                                }),
                            ),
                        D,
                        u().createElement(
                            'div',
                            { className: g.Z.rows },
                            j
                                ? u().createElement(
                                      u().Fragment,
                                      null,
                                      u().createElement(
                                          m.s,
                                          b(
                                              {
                                                  skills: B,
                                                  possibleSkills: O,
                                                  blinkStyle: F,
                                                  isAcceleratedTrainingVisible: f,
                                                  isNewSkillAnimated: C,
                                                  isSkillsEfficiencyLearning: L,
                                              },
                                              $,
                                          ),
                                      ),
                                      W &&
                                          u().createElement(
                                              m.s,
                                              b(
                                                  {
                                                      skills: S,
                                                      skillType: p.W.Bonus,
                                                      possibleSkills: M,
                                                      className: g.Z.bonusRow,
                                                      collapseLayout: G,
                                                      blinkStyle: F,
                                                      isNewSkillAnimated: C,
                                                      isAllMajorSkillsLearned: z,
                                                  },
                                                  $,
                                              ),
                                          ),
                                  )
                                : u().createElement(
                                      u().Fragment,
                                      null,
                                      u().createElement(_.X, b({ skills: B, isAcceleratedTrainingVisible: f }, $)),
                                      W &&
                                          u().createElement(
                                              _.X,
                                              b(
                                                  {
                                                      skills: S,
                                                      skillType: p.W.Bonus,
                                                      className: g.Z.bonusRow,
                                                      collapseLayout: G,
                                                  },
                                                  $,
                                              ),
                                          ),
                                  ),
                        ),
                    );
                };
            },
            6177: (e, t, n) => {
                'use strict';
                n.d(t, { I: () => b });
                var a = n(6483),
                    r = n.n(a),
                    s = n(2686),
                    i = n(126),
                    o = n(6373),
                    u = n(3138),
                    l = n(3112),
                    c = n(6179),
                    d = n.n(c),
                    m = n(7030),
                    _ = n(2582),
                    g = n(7160),
                    p = n(5855),
                    E = n(1890);
                const b = d().memo(function ({ type: e, index: t, totalAmount: n, className: a, size: b }) {
                    const h = (0, c.useState)(_.yZ.Stop),
                        v = h[0],
                        f = h[1],
                        C = (0, l.V)(),
                        A =
                            b === p.Ow.c44x44
                                ? ((e) => ({
                                      width: 96,
                                      height: 96,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 2, columns: 21 },
                                      getChunkPath: (0, i.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                      ),
                                  }))(e)
                                : ((e) => ({
                                      width: 64,
                                      height: 64,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 1, columns: 24 },
                                      getChunkPath: (0, i.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                      ),
                                  }))(e),
                        k = (0, i.q)(A),
                        w = b === p.Ow.c44x44 ? 60 : 36,
                        y = (0, m.useSpring)(
                            () => ({
                                from: { x: 0 },
                                to: { x: u.O.view.remToPx(w) },
                                config: { duration: 300, easing: g.qb },
                                delay: 600 - 100 * t,
                            }),
                            [t, w, C],
                        )[0];
                    return (
                        (0, c.useEffect)(() => {
                            const e = setTimeout(() => f(_.yZ.Play), 100 * (n - 1) - 100 * t);
                            return () => clearTimeout(e);
                        }, [t, n]),
                        d().createElement(
                            o.i,
                            { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                            d().createElement(
                                m.animated.div,
                                { style: y, className: r()(E.Z.base, E.Z[`base__${b}`], a) },
                                d().createElement(
                                    'div',
                                    { className: E.Z.icon },
                                    d().createElement(s.At, {
                                        width: A.width,
                                        height: A.height,
                                        frameCount: A.frameCount,
                                        getImageSource: k,
                                        loop: !1,
                                        state: v,
                                        style: { transform: `scale(${C})` },
                                    }),
                                ),
                            ),
                        )
                    );
                });
            },
            9152: (e, t, n) => {
                'use strict';
                n.d(t, { E: () => c });
                var a = n(2686),
                    r = n(126),
                    s = n(6179),
                    i = n.n(s),
                    o = n(2582),
                    u = n(6253),
                    l = n(5147);
                const c = ({ type: e, state: t }) => {
                    const n = ((e, t) => ({
                            width: 24,
                            height: 24,
                            frameCount: 42,
                            chunk: { count: 1, columns: 42, rows: 1 },
                            getChunkPath: (0, r.V)(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                        }))(e, t),
                        c = (0, r.q)(n),
                        d = (0, s.useState)(o.yZ.Stop),
                        m = d[0],
                        _ = d[1];
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                _(o.yZ.Play);
                            };
                            return (0, l.L)(e), () => (0, l.r)(e);
                        }, []),
                        i().createElement(a.At, {
                            width: n.width,
                            height: n.height,
                            frameCount: n.frameCount,
                            getImageSource: c,
                            loop: !1,
                            state: m,
                            onAnimationDone: () => {
                                _(o.yZ.Stop);
                            },
                            className: u.Z.base,
                        })
                    );
                };
            },
            5147: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                n.d(t, { L: () => u, r: () => l });
                const s = new Map();
                let i = null;
                const o = () => {
                        s.size
                            ? i ||
                              (i = window.setInterval(() => {
                                  for (var e, t = a(s.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : i && (clearInterval(i), (i = null));
                    },
                    u = (e) => {
                        s.set(e, e), o();
                    },
                    l = (e) => {
                        s.delete(e), o();
                    };
            },
            3413: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => u, r: () => o });
                var a = n(6179),
                    r = n.n(a),
                    s = n(8147),
                    i = n(9108);
                let o;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(o || (o = {}));
                const u = r().memo(function ({
                    size: e,
                    skillsSignature: t,
                    animationType: n,
                    className: a,
                    children: u,
                }) {
                    return n === o.Scale
                        ? r().createElement(i.Y, { isEnabled: !0, className: a }, u)
                        : n === o.FadeIn
                          ? r().createElement(s.U, { size: e, key: t, className: a }, u)
                          : r().createElement('div', { className: a }, u);
                });
            },
            5108: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => i });
                var a = n(6179),
                    r = n.n(a),
                    s = n(7030);
                const i = r().memo(function ({ blinkStyle: e, isEnabled: t, children: n }) {
                    return r().createElement(s.animated.div, { style: t && e ? e : void 0 }, n);
                });
            },
            8147: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => l });
                var a = n(3112),
                    r = n(6179),
                    s = n.n(r),
                    i = n(7030),
                    o = n(7160),
                    u = n(5855);
                const l = ({ size: e, children: t, className: n }) => {
                    const r = (0, a.V)(),
                        l = e === u.Ow.c44x44 ? 48 : 26,
                        c = (0, i.useSpring)({
                            from: { opacity: 0, marginRight: -l * r },
                            to: [{ marginRight: 0 }, { opacity: 1 }],
                            config: { duration: 400, easing: o.Fs },
                            delay: 800,
                        });
                    return s().createElement(i.animated.div, { style: c, className: n }, t);
                };
            },
            7765: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => m });
                var a = n(6483),
                    r = n.n(a),
                    s = n(3138),
                    i = n(3649),
                    o = n(6179),
                    u = n.n(o),
                    l = n(7030),
                    c = n(7160),
                    d = n(8110);
                const m = u().memo(function ({ size: e, level: t, withSlideOut: n = !0 }) {
                    const a = (0, l.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        o = (0, l.useSpring)(() => ({
                            from: { x: s.O.view.remToPx(-5), opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            config: { duration: 300, easing: c.qb },
                            delay: 700,
                        }))[0],
                        m = (0, l.useSpring)(
                            () => ({
                                from: { opacity: 0 },
                                to: [{ opacity: 1 }, { opacity: 0 }],
                                config: { duration: 150, easing: c.qb },
                            }),
                            [t],
                        )[0];
                    return u().createElement(
                        'div',
                        { className: r()(d.Z.base, d.Z[`base__${e}`]) },
                        u().createElement(
                            l.animated.div,
                            { style: n ? o : void 0, className: r()(d.Z.level, d.Z.level__skillLost) },
                            a.val.to((e) => (0, i.dL)(Math.floor(e))),
                        ),
                        u().createElement(
                            l.animated.div,
                            { style: n ? Object.assign({}, o, m) : m, className: r()(d.Z.level, d.Z.level__skillBlur) },
                            a.val.to((e) => (0, i.dL)(Math.floor(e))),
                        ),
                    );
                });
            },
            9108: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => o });
                var a = n(6179),
                    r = n.n(a),
                    s = n(7030),
                    i = n(7160);
                const o = r().memo(function ({ isEnabled: e, className: t, children: n }) {
                    const o = (0, s.useSpring)(() => ({ from: { scale: 1 } })),
                        u = o[0],
                        l = o[1];
                    return (
                        (0, a.useEffect)(() => {
                            e &&
                                l.start({
                                    from: { scale: 1 },
                                    to: [{ scale: 1.2 }, { scale: 1 }],
                                    delay: 200,
                                    config: { duration: 400, easing: i.Fs },
                                });
                        }, [e, l]),
                        r().createElement(s.animated.div, { style: e ? u : void 0, className: t }, n)
                    );
                });
            },
            4055: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => l });
                var a = n(3112),
                    r = n(6179),
                    s = n.n(r),
                    i = n(7030),
                    o = n(7160),
                    u = n(5855);
                const l = s().memo(function ({ size: e, className: t, children: n }) {
                    const r = e === u.Ow.c44x44 ? 48 : 26,
                        l = (0, a.V)(),
                        c = (0, i.useSpring)(
                            () => ({
                                from: { opacity: 1, marginRight: 0 },
                                to: [{ opacity: 0 }, { marginRight: -r * l }],
                                config: { duration: 400, easing: o.Fs },
                            }),
                            [l, r],
                        )[0];
                    return s().createElement(i.animated.div, { style: c, className: t }, n);
                });
            },
            4091: (e, t, n) => {
                'use strict';
                n.d(t, { s: () => v });
                var a = n(6483),
                    r = n.n(a),
                    s = n(2344),
                    i = n(9480),
                    o = n(4385),
                    u = n(3649),
                    l = n(6179),
                    c = n.n(l),
                    d = n(2857),
                    m = n(8018),
                    _ = n(5855),
                    g = n(3591),
                    p = n(6177),
                    E = n(7713),
                    b = n(9772),
                    h = n(4722);
                const v = ({
                    skills: e,
                    skillType: t = _.W.Major,
                    possibleSkills: n,
                    isAcceleratedTrainingVisible: a = !1,
                    collapseLayout: l = _.hj.None,
                    efficiencyState: v,
                    size: f,
                    tooltipData: C,
                    blinkStyle: A,
                    isSkillsEfficiencyLearning: k = !1,
                    isAllMajorSkillsLearned: w = !1,
                    isNewSkillAnimated: y = !1,
                    className: F,
                }) => {
                    const D = void 0 === n ? e : n,
                        B = (0, s.D9)(e),
                        S = (0, s.D9)(D),
                        T = B && i.lN(B),
                        I = i.lN(e),
                        N = (0, g.dv)(D),
                        L = i.lN(D),
                        x = n ? e.length - n.length : 0,
                        R = v !== m.H$.Low || k,
                        O = (0, g.Nn)(D);
                    return c().createElement(
                        'div',
                        { className: r()(h.Z.base, h.Z[`base__${f}`], h.Z[`base__collapse${(0, u.e)(l)}`], F) },
                        (0, g.oo)(e, B, D, S, (e, n, a) => {
                            const s = (0, g.mg)(e);
                            return c().createElement(E.k, {
                                key: a,
                                index: a,
                                skill: e,
                                skillState: s,
                                skillType: t,
                                previousSkill: S && i.U2(S, a),
                                skillAnimationType: n,
                                size: f,
                                skillsSignature: O,
                                efficiencyState: v,
                                tooltipData: C,
                                blinkStyle: A,
                                isNewSkillAnimated: y,
                                className: r()(
                                    h.Z.skill,
                                    h.Z[`skill__state${(0, u.e)(s)}`],
                                    e === L && h.Z.skill__last,
                                    e === N && h.Z.skill__lastLearnedSkill,
                                ),
                            });
                        }),
                        R &&
                            c().createElement(b.H, {
                                skillsAmountDiff: x,
                                size: f,
                                wasLearned: T && I && T.level !== I.level,
                                skillType: t,
                                isAllMajorSkillsLearned: w,
                                skill: I,
                                possibleSkill: L,
                                blinkStyle: A,
                                className: h.Z.level,
                            }),
                        a &&
                            c().createElement(d.L, {
                                classMix: h.Z.acceleratedTrainingIcon,
                                targetId: null == C ? void 0 : C.targetId,
                            }),
                        x > 0 &&
                            (0, o.K)(x, (e) =>
                                c().createElement(p.I, {
                                    key: e,
                                    index: e,
                                    totalAmount: x,
                                    type: t,
                                    className: h.Z.lostSkill,
                                    size: f,
                                }),
                            ),
                    );
                };
            },
            552: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => v });
                var a = n(6483),
                    r = n.n(a),
                    s = n(771),
                    i = n(9480),
                    o = n(3649),
                    u = n(6179),
                    l = n.n(u),
                    c = n(2857),
                    d = n(8018),
                    m = n(5855),
                    _ = n(3591),
                    g = n(1606),
                    p = n(9561),
                    E = n(2202),
                    b = n(4722);
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const v = ({
                    skills: e,
                    collapseLayout: t = m.hj.None,
                    skillType: n = m.W.Major,
                    efficiencyState: a,
                    size: u,
                    tooltipData: v,
                    className: f,
                    isAcceleratedTrainingVisible: C,
                }) => {
                    const A = i.lN(e),
                        k = (0, _.dv)(e),
                        w = a !== d.H$.Low && (null == A ? void 0 : A.level) !== s.I;
                    return l().createElement(
                        'div',
                        { className: r()(b.Z.base, b.Z[`base__${u}`], b.Z[`base__collapse${(0, o.e)(t)}`], f) },
                        i.UI(e, (e, t) => {
                            const s = (0, _.mg)(e);
                            return l().createElement(
                                E.O,
                                {
                                    key: t,
                                    skillIndex: t,
                                    name: e.name,
                                    customName: e.customName,
                                    level: e.level,
                                    tooltipData: v,
                                    skillType: n,
                                    className: r()(
                                        b.Z.skill,
                                        b.Z[`skill__state${(0, o.e)(s)}`],
                                        e === A && b.Z.skill__last,
                                        e === k && b.Z.skill__lastLearnedSkill,
                                    ),
                                },
                                l().createElement(g.U, h({ size: u, type: n, efficiencyState: a, skillState: s }, e)),
                            );
                        }),
                        w && A && l().createElement(p.T, { skillLevel: A.level, className: b.Z.level }),
                        C &&
                            l().createElement(c.L, {
                                classMix: b.Z.acceleratedTrainingIcon,
                                targetId: null == v ? void 0 : v.targetId,
                            }),
                    );
                };
            },
            9772: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => d });
                var a = n(771),
                    r = n(6179),
                    s = n.n(r),
                    i = n(5855),
                    o = n(5108),
                    u = n(7765),
                    l = n(9108),
                    c = n(9561);
                const d = ({
                    skillsAmountDiff: e,
                    size: t,
                    skillType: n,
                    wasLearned: r,
                    isAllMajorSkillsLearned: d,
                    skill: m,
                    possibleSkill: _,
                    blinkStyle: g,
                    className: p,
                }) => {
                    const E = _ || m,
                        b = void 0 !== m && void 0 !== _ ? _.level - m.level : 0,
                        h = e > 0,
                        v = e < 0 || b > 0;
                    return !E ||
                        (E.level === a.I && 0 === b) ||
                        ((null == _ ? void 0 : _.level) === a.I && n === i.W.Bonus && b > 0 && !d)
                        ? null
                        : h || (b < 0 && 0 === e)
                          ? s().createElement(u.G, { size: t, level: E.level, withSlideOut: h })
                          : s().createElement(
                                l.Y,
                                { isEnabled: Boolean(r) },
                                s().createElement(
                                    o.r,
                                    { blinkStyle: g, isEnabled: v },
                                    s().createElement(c.T, { skillLevel: E.level, isHighlighted: v, className: p }),
                                ),
                            );
                };
            },
            9561: (e, t, n) => {
                'use strict';
                n.d(t, { T: () => c });
                var a = n(6483),
                    r = n.n(a),
                    s = n(3649),
                    i = n(6179),
                    o = n.n(i),
                    u = n(3591),
                    l = n(872);
                const c = ({ skillLevel: e, isHighlighted: t = !1, className: n }) =>
                    o().createElement(
                        'div',
                        { className: r()(l.Z.base, t && l.Z.base__highlighted, n) },
                        (0, s.dL)(e > 0 && e < 0.01 ? 0.01 : (0, u.iv)(e)),
                    );
            },
            2202: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => u });
                var a = n(3415),
                    r = n(6179),
                    s = n.n(r),
                    i = n(3591);
                const o = ['className', 'children'];
                const u = (e) => {
                    let t = e.className,
                        n = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, o);
                    return s().createElement(a.l, { tooltipArgs: (0, i.iR)(r), className: t }, n);
                };
            },
            7713: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => p });
                var a = n(771),
                    r = n(6179),
                    s = n.n(r),
                    i = n(5855),
                    o = n(9152),
                    u = n(3413),
                    l = n(5108),
                    c = n(4055),
                    d = n(2202),
                    m = n(1606);
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const g = (e, t) => (e ? u.r.Scale : t ? u.r.FadeIn : u.r.None),
                    p = ({
                        index: e,
                        skill: t,
                        previousSkill: n,
                        skillState: r,
                        skillType: p,
                        size: E,
                        efficiencyState: b,
                        tooltipData: h,
                        skillsSignature: v,
                        blinkStyle: f,
                        isNewSkillAnimated: C = !1,
                        skillAnimationType: A = i.Qm.None,
                        className: k,
                    }) => {
                        const w = A === i.Qm.Blink || A === i.Qm.SlideOutAndBlink,
                            y = A === i.Qm.SlideOutAndBlink || A === i.Qm.SlideOut,
                            F = A === i.Qm.FadeIn,
                            D = {
                                skillIndex: e,
                                name: t.name,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: h,
                                skillType: p,
                            };
                        return C && t.name === a.jw && E === i.Ow.c24x24
                            ? s().createElement(
                                  d.O,
                                  _({}, D, { className: k }),
                                  s().createElement(o.E, { type: p, state: r }),
                              )
                            : s().createElement(
                                  s().Fragment,
                                  null,
                                  n &&
                                      y &&
                                      s().createElement(
                                          c.w,
                                          { size: E, className: k, key: n.name },
                                          s().createElement(
                                              l.r,
                                              { blinkStyle: f, isEnabled: w },
                                              s().createElement(
                                                  m.U,
                                                  _({ size: E, type: p, efficiencyState: b, skillState: r }, n),
                                              ),
                                          ),
                                      ),
                                  s().createElement(
                                      u.L,
                                      {
                                          size: E,
                                          skillsSignature: v,
                                          className: k,
                                          animationType: g(A === i.Qm.ScaleUp, F),
                                      },
                                      s().createElement(
                                          d.O,
                                          D,
                                          s().createElement(
                                              l.r,
                                              { blinkStyle: f, isEnabled: w },
                                              s().createElement(
                                                  m.U,
                                                  _({ size: E, type: p, efficiencyState: b, skillState: r }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    };
            },
            1606: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => p });
                var a = n(6483),
                    r = n.n(a),
                    s = n(771),
                    i = n(3649),
                    o = n(6179),
                    u = n.n(o),
                    l = n(2768),
                    c = n(8018),
                    d = n(5855),
                    m = n(3591),
                    _ = n(699);
                const g = { [d.Ow.c24x24]: l.F.c22x22, [d.Ow.c44x44]: l.F.c52x52 },
                    p = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: n,
                        type: a,
                        icon: o,
                        name: p,
                        skillState: E,
                        hasInstruction: b,
                        className: h,
                    }) => {
                        const v = (0, m.Ot)(p, E, b, t, n),
                            f = (!b && n === c.H$.Untrained) || t,
                            C = o === s.jw;
                        return u().createElement(
                            'div',
                            {
                                className: r()(
                                    _.Z.base,
                                    _.Z[`base__type${(0, i.e)(a)}`],
                                    _.Z[`base__state${(0, i.e)(E)}`],
                                    _.Z[`base__border${(0, i.e)(v)}`],
                                    _.Z[`base__${e}`],
                                    f && _.Z.base__disabled,
                                    h,
                                ),
                            },
                            u().createElement('div', {
                                className: _.Z.background,
                                style:
                                    a === d.W.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${v}')`,
                                          }
                                        : void 0,
                            }),
                            C && E === d.Lm.Learned && u().createElement('div', { className: _.Z.newSkillHighLight }),
                            u().createElement(l.y, { iconName: o, size: g[e], className: _.Z.icon }),
                            f && u().createElement('div', { className: _.Z.disabledOverlay }),
                        );
                    };
            },
            5855: (e, t, n) => {
                'use strict';
                let a, r, s, i, o, u, l;
                n.d(t, { Lm: () => l, Ow: () => o, Qm: () => r, W: () => u, hj: () => s, t6: () => a, u0: () => i }),
                    (function (e) {
                        (e.None = 'none'),
                            (e.Default = 'default'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap');
                    })(a || (a = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(r || (r = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(i || (i = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(o || (o = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(u || (u = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(l || (l = {}));
            },
            3591: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Ld: () => p,
                    Nn: () => l,
                    Ot: () => m,
                    dv: () => d,
                    h7: () => g,
                    iR: () => _,
                    iv: () => v,
                    mg: () => c,
                    oo: () => h,
                });
                var a = n(2603),
                    r = n(771),
                    s = n(9480),
                    i = n(5563),
                    o = n(8018),
                    u = n(5855);
                const l = (e) => s.UI(e, (e) => e.name).join(),
                    c = (e) => (e.level < r.I ? u.Lm.Learning : u.Lm.Learned),
                    d = (e) => s.dF(e, (e) => e.level === r.I),
                    m = (e, t, n, a, s = o.H$.Normal) =>
                        e === r.jw
                            ? u.u0.LightYellow
                            : s === o.H$.Untrained || a
                              ? t === u.Lm.Learning
                                  ? u.u0.Yellow
                                  : u.u0.Grey
                              : s === o.H$.Low
                                ? n
                                    ? u.u0.Grey
                                    : u.u0.Red
                                : t === u.Lm.Learning
                                  ? u.u0.Yellow
                                  : u.u0.Grey,
                    _ = ({ name: e, level: t, customName: n, skillType: s, skillIndex: i, tooltipData: o }) => {
                        const l = { targetId: o.targetId, isEnabled: o.isEnabled };
                        return e === r.jw
                            ? s === u.W.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: o.tankmanID, skillIndex: i }, o.args),
                                      },
                                      l,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      l,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: a.HZ,
                                              tankmanID: o.tankmanID,
                                              skillName: e,
                                              isBonus: s === u.W.Bonus,
                                              level: t,
                                              customName: n,
                                          },
                                          o.args,
                                      ),
                                  },
                                  l,
                              );
                    },
                    g = (e, t) => (e === u.Ow.c44x44 ? i.r.Large : t ? i.r.Big : i.r.Normal),
                    p = (e, t, n, a) => {
                        if (t !== r.vA) return u.hj.None;
                        switch (e) {
                            case u.t6.Default:
                                if (n && a) return u.hj.NoMargins;
                                break;
                            case u.t6.Overlap:
                                if (n) return a ? u.hj.Overlap : u.hj.ReducedMargins;
                                if (a) return u.hj.OnlyLearningOverlap;
                                break;
                            case u.t6.ExtraOverlap:
                                return n && a
                                    ? u.hj.ExtraOverlapWithLevelAndEfficiency
                                    : n
                                      ? u.hj.ExtraOverlapWithEfficiency
                                      : a
                                        ? u.hj.ExtraOverlapWithLevel
                                        : u.hj.ExtraOverlap;
                        }
                        return u.hj.None;
                    },
                    E = (e, t) => {
                        const n = s.U2(e, t);
                        return null == n ? void 0 : n.name;
                    },
                    b = (e, t) => {
                        const n = s.U2(e, t);
                        return null == n ? void 0 : n.level;
                    },
                    h = (e, t, n, a, i) => {
                        if (!a || !t) return s.UI(n, (e, t) => i(e, u.Qm.None, t));
                        const o = new Map(s.UI(t, ({ name: e, level: t }) => [e, t])),
                            l = new Map(s.UI(e, ({ name: e, level: t }) => [e, t]));
                        let c = !1;
                        return s.UI(n, (s, d) => {
                            const m = s.name,
                                _ = s.level,
                                g = m === r.jw,
                                p = E(e, d),
                                h = g ? b(e, d) : l.get(m),
                                v = g ? b(t, d) : o.get(m),
                                f = E(n, d - 1),
                                C = E(a, d),
                                A = E(a, d + 1);
                            let k = u.Qm.None;
                            return (
                                c || m !== A || f === C || g || p !== r.jw
                                    ? g && d === n.length - 1 && c
                                        ? (k = u.Qm.FadeIn)
                                        : (!g && !l.has(m)) || (void 0 === p && g) || (h !== _ && _ === r.I)
                                          ? (k = u.Qm.Blink)
                                          : v !== h && (k = u.Qm.ScaleUp)
                                    : ((c = !0), (k = l.has(m) ? u.Qm.SlideOut : u.Qm.SlideOutAndBlink)),
                                i(s, k, d)
                            );
                        });
                    },
                    v = (e, t = 2) => {
                        const n = Math.pow(10, t);
                        return e % 1 > 0 ? Math.round(e * n) / n : e;
                    };
            },
            7077: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => c, U: () => l });
                var a = n(6483),
                    r = n.n(a),
                    s = n(3649),
                    i = n(6179),
                    o = n.n(i),
                    u = n(3938);
                let l;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(l || (l = {}));
                const c = ({ name: e, size: t = l.c100x60, classMix: n, isSkin: a = !1 }) => {
                    const c = (0, i.useMemo)(() => {
                        try {
                            let n = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                            a && (n = n.$dyn('crewSkins'));
                            const r = n.$dyn((0, s.BN)(e));
                            if (!r) throw Error;
                            return { backgroundImage: `url(${r})` };
                        } catch (t) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, t, a]);
                    return o().createElement('div', { style: c, className: r()(u.Z.base, u.Z[`base__${t}`], n) });
                };
            },
            9631: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    s = n(3457),
                    i = n(2106),
                    o = n(9987),
                    u = n(6179),
                    l = n.n(u),
                    c = n(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        n = e.counter,
                        a = e.className,
                        u = e.children,
                        _ = e.type,
                        g = void 0 === _ ? i.L.secondary : _,
                        p = e.size,
                        E = void 0 === p ? i.q.small : p,
                        b = e.hasIndicator,
                        h = void 0 === b || b,
                        v = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: r()(c.Z.base, a, t && c.Z.base__active) },
                        l().createElement(s.u5, m({ type: g, size: E, mixClass: c.Z.button }, v), u),
                        l().createElement('div', { className: c.Z.overlay }),
                        h && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(n) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(o.A, { value: n, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, n) => {
                'use strict';
                n.d(t, { BH: () => s, Fs: () => i, ei: () => a, qb: () => r });
                const a = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    r = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    s = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    i = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, n) => {
                'use strict';
                n.d(t, { Gc: () => o, H$: () => u, Xd: () => s, Y4: () => l, gO: () => i, wP: () => r });
                var a = n(771);
                n(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let r;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(r || (r = {}));
                const s = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let i;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(i || (i = {}));
                const o = (e, t = !1, n = null) => {
                    const a = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (n ? a.$dyn(`${n}Case`) : a).$dyn(e);
                };
                let u;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(u || (u = {}));
                const l = (e) => (e === a.sU ? u.Untrained : e < a.yb ? u.Low : u.Normal);
            },
            4119: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => sn });
                var a = n(4029),
                    r = n(6179),
                    s = n.n(r),
                    i = n(5415),
                    o = n(3403),
                    u = n(3215),
                    l = n(4598),
                    c = n(9480),
                    d = n(3946),
                    m = n(4828);
                const _ = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    g = (0, u.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'selectedSlotIdx',
                                        'isDisabled',
                                        'hasDog',
                                        'vehicleName',
                                        'vehicleType',
                                        'currentLayoutID',
                                        'previousLayoutID',
                                        'isCrewLocked',
                                        'nation',
                                    ]),
                                    {
                                        slots: e.array('slots', []),
                                        buttonsBar: e.object('buttonsBar'),
                                        crewOperations: e.object('buttonsBar.crewOperations'),
                                        crewBooks: e.object('buttonsBar.crewBooks'),
                                        acceleratedTraining: e.object('buttonsBar.acceleratedTraining'),
                                        wotPlus: e.object('buttonsBar.wotPlus'),
                                    },
                                ),
                                n = (0, d.Om)(
                                    () =>
                                        c.UI(t.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: c.UI(e.roles, l.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: c.UI(e.tankman.roles, l.yR),
                                                    skills: {
                                                        skillsEfficiency: e.tankman.skills.skillsEfficiency,
                                                        majorSkills: c.UI(e.tankman.skills.majorSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                        bonusSkills: c.UI(e.tankman.skills.bonusSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                    },
                                                    possibleSkills: {
                                                        skillsEfficiency: e.tankman.possibleSkills.skillsEfficiency,
                                                        majorSkills: c.UI(e.tankman.possibleSkills.majorSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                        bonusSkills: c.UI(e.tankman.possibleSkills.bonusSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                    },
                                                }),
                                            }),
                                        ),
                                    { equals: l.jv },
                                ),
                                a = (0, d.Om)(() => Boolean(c.sE(n(), (e) => -1 === e.tankman.tankmanID))),
                                r = (0, d.Om)(() => 1 === t.slots.get().length),
                                s = (0, d.Om)((e) => t.selectedSlotIdx.get() === e),
                                i = (0, d.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                o = (0, d.Om)((e) => {
                                    var t;
                                    return null == (t = c.U2(n(), e)) ? void 0 : t.tankman;
                                }),
                                u = (0, d.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (n = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: _.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isCurrentLayoutSkillsTraining:
                                                e === R.views.lobby.crew.SkillsTrainingView('resId'),
                                            isPreviousLayoutHangar: n === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: _.includes(n),
                                            isPreviousLayoutQuickTraining:
                                                n === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                n === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: n === R.views.lobby.crew.BarracksView('resId'),
                                        }
                                    );
                                    var e, n;
                                }),
                                g = (0, d.Om)(() => {
                                    const e = u(),
                                        t = e.isCurrentLayoutHangar,
                                        n = e.isCurrentLayoutQuickTraining,
                                        a = e.isCurrentLayoutSkillsTraining;
                                    return !(r() || t || n || a);
                                }),
                                p = (0, d.Om)(() => !r() && t.buttonsBar.get().isVisible),
                                E = (0, d.Om)(() => {
                                    return (e = t.currentLayoutID.get()), m.AB[e] || m.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: n,
                                    isSlotSelected: s,
                                    isAnySlotSelected: i,
                                    getSlotTankman: o,
                                    isAnyEmptySlots: a,
                                    isTankmanMode: r,
                                    isChangeCrewButtonVisible: g,
                                    isButtonBarVisible: p,
                                    getLayoutInfo: u,
                                    getUiLoggingParentScreen: E,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onSlotClick: e.createCallback((e, t) => ({ slotIdx: e, tankmanID: t }), 'onSlotClick'),
                            onChangeCrewClick: e.createCallback(
                                (e, t) => ({ slotIdx: e, tankmanID: t }),
                                'onChangeCrewClick',
                            ),
                            onCrewBooksClick: e.createCallbackNoArgs('buttonsBar.onCrewBooksClick'),
                            onAcceleratedTrainingClick: e.createCallbackNoArgs('buttonsBar.onAcceleratedTrainingClick'),
                            onWotPlusClick: e.createCallbackNoArgs('buttonsBar.onWotPlusClick'),
                            onDogClick: e.createCallbackNoArgs('onDogClick'),
                            onDogMoreInfoClick: e.createCallbackNoArgs('onDogMoreInfoClick'),
                        }),
                    ),
                    p = g[0],
                    E = g[1];
                var b = n(6483),
                    h = n.n(b),
                    v = n(6373),
                    f = n(2056);
                let C;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(C || (C = {}));
                const A = 'ButtonsBar_base_9c',
                    k = 'ButtonsBar_button_d1',
                    w = 'ButtonsBar_button__crewOperaions_70',
                    y = 'ButtonsBar_button__crewBooks_b4',
                    F = 'ButtonsBar_button__toggle_64';
                var D = n(3457),
                    B = n(9987),
                    S = n(3649);
                const T = 'CrewBookButton_base_da',
                    I = 'CrewBookButton_button_ee',
                    N = 'CrewBookButton_icon_11',
                    L = 'CrewBookButton_discount_6b',
                    x = 'CrewBookButton_counter_5d',
                    O = (0, o.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = E(),
                            a = n.model,
                            r = n.controls,
                            i = a.crewBooks.get(),
                            o = r.onCrewBooksClick,
                            u = i.isDisabled || t;
                        return s().createElement(
                            v.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, S.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: i.totalAmount,
                                }),
                            },
                            s().createElement(
                                'div',
                                { id: 'crew_book_button', className: h()(T, e) },
                                s().createElement(
                                    D.u5,
                                    { type: D.L$.primary, mixClass: I, disabled: u, onClick: o },
                                    s().createElement('div', { className: N }),
                                ),
                                !u &&
                                    '0' !== i.newAmount &&
                                    s().createElement(
                                        'div',
                                        { className: x },
                                        s().createElement(B.A, { value: i.newAmount }),
                                    ),
                                !u && i.hasDiscount && s().createElement('div', { className: L }),
                            ),
                        );
                    });
                var M = n(3616);
                const P = ['children'];
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const W = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, P);
                    return s().createElement(
                        M.Z,
                        H(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            n,
                        ),
                        t,
                    );
                };
                var j = n(4489);
                let z;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(z || (z = {}));
                var G = n(1943);
                const $ = 'CrewOperationsButton_base_e3',
                    V = 'CrewOperationsButton_button_8e',
                    U = 'CrewOperationsButton_icon_0c',
                    Z = 'CrewOperationsButton_autoReturnIcon_f0',
                    q = (0, o.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = E().model,
                            a = ((e) => {
                                const t = (0, G.Jp)(m.D9);
                                return (n) => t({ action: m.eX.Click, parentScreen: e, item: n });
                            })(n.computes.getUiLoggingParentScreen()),
                            r = n.crewOperations.get();
                        return s().createElement(
                            'div',
                            { id: 'crew_operations_button', className: h()($, e) },
                            s().createElement(
                                W,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => a(m.x3.CrewOperationsButton),
                                },
                                s().createElement(
                                    v.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(
                                            D.u5,
                                            { type: D.L$.primary, mixClass: V, disabled: t },
                                            s().createElement('div', { className: U }),
                                        ),
                                        r.isAutoReturnOn && s().createElement('div', { className: Z }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Y = n(9631);
                const X = 'CrewToggleButton_base_03',
                    K = 'CrewToggleButton_button_89',
                    Q = 'CrewToggleButton_iconContainer_f9',
                    J = 'CrewToggleButton_icon_a7';
                let ee;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(ee || (ee = {}));
                const te = (0, r.memo)(({ type: e, state: t, isDisabled: n, onClick: a, classMix: i }) => {
                        const o = (0, r.useMemo)(() => {
                            const n = t === C.Disabled ? C.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${n})`,
                            };
                        }, [e, t]);
                        return s().createElement(
                            'div',
                            { className: h()(X, i) },
                            s().createElement(
                                Y.C,
                                {
                                    type: D.L$.primary,
                                    isActive: t === C.On,
                                    disabled: n || t === C.Disabled,
                                    className: K,
                                    onClick: a,
                                },
                                s().createElement(
                                    'div',
                                    { className: Q },
                                    s().createElement('div', { className: J, style: o }),
                                ),
                            ),
                        );
                    }),
                    ne = {
                        [C.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [C.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [C.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [C.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    ae = (0, o.Pi)(({ isWidgetDisabled: e }) => {
                        const t = E(),
                            n = t.model,
                            a = t.controls,
                            r = n.acceleratedTraining.get(),
                            i = n.wotPlus.get(),
                            o = a.onAcceleratedTrainingClick,
                            u = a.onWotPlusClick,
                            l = ne[r.state];
                        return s().createElement(
                            'div',
                            { className: A },
                            s().createElement(q, { classMix: h()(k, w), isWidgetDisabled: e }),
                            s().createElement(O, { classMix: h()(k, y), isWidgetDisabled: e }),
                            r.state !== C.Hidden &&
                                s().createElement(
                                    v.i,
                                    { header: l.header(), body: l.body() },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(te, {
                                            type: ee.AcceleratedTraining,
                                            state: r.state,
                                            isDisabled: e || r.isDisabled,
                                            onClick: o,
                                            classMix: h()(k, F),
                                        }),
                                    ),
                                ),
                            i.state !== C.Hidden &&
                                s().createElement(
                                    f.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(te, {
                                            type: ee.WotPlus,
                                            state: i.state,
                                            isDisabled: e || i.isDisabled,
                                            onClick: u,
                                            classMix: h()(k, F),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    re = 'CrewWidgetApp_base_cc',
                    se = 'CrewWidgetApp_buttonsBar_e5',
                    ie = 'CrewWidgetApp_slotsList_ee';
                var oe = n(7727),
                    ue = n(7030),
                    le = n(8018),
                    ce = n(7160),
                    de = n(7077);
                const me = 'WidgetTankmanIcon_icon_0f',
                    _e = 'WidgetTankmanIcon_icon__small_24',
                    ge = 'WidgetTankmanIcon_icon__cropped_bd',
                    pe = ({ name: e, isSkin: t = !1, isCropped: n = !1, className: a }) => {
                        const r = (0, i.GS)().mediaSize < i.cJ.Large;
                        return s().createElement(de.G, {
                            name: e,
                            size: r && n ? de.U.c100x60Barracks : de.U.c158x118,
                            isSkin: t,
                            classMix: h()(me, r && n && _e, !r && n && ge, a),
                        });
                    },
                    Ee = {
                        base: 'Layer_base_ff',
                        base__hoverGlow: 'Layer_base__hoverGlow_11',
                        base__selectedGlow: 'Layer_base__selectedGlow_b7',
                        base__hoverGlowHigh: 'Layer_base__hoverGlowHigh_0e',
                        base__selectedGlowHigh: 'Layer_base__selectedGlowHigh_2f',
                        base__disabledLayer: 'Layer_base__disabledLayer_75',
                        base__disabledLayerHigh: 'Layer_base__disabledLayerHigh_51',
                        base__selectedTankmanHighlight: 'Layer_base__selectedTankmanHighlight_15',
                        base__selectedTankmanHighlight2: 'Layer_base__selectedTankmanHighlight2_36',
                        base__untrainedTankmanHighlight: 'Layer_base__untrainedTankmanHighlight_db',
                        base__selectedTankmanHighlightHigh: 'Layer_base__selectedTankmanHighlightHigh_47',
                        base__selectedTankmanHighlightHigh2: 'Layer_base__selectedTankmanHighlightHigh2_4f',
                        base__untrainedTankmanHighlightHigh: 'Layer_base__untrainedTankmanHighlightHigh_20',
                        base__tankmanSlotHover: 'Layer_base__tankmanSlotHover_a9',
                        base__tankmanSlotHoverHigh: 'Layer_base__tankmanSlotHoverHigh_4e',
                        base__visible: 'Layer_base__visible_fb',
                    };
                let be;
                !(function (e) {
                    (e.HoverGlow = 'hoverGlow'),
                        (e.SelectedGlow = 'selectedGlow'),
                        (e.Disabled = 'disabledLayer'),
                        (e.SelectedHighlight = 'selectedTankmanHighlight'),
                        (e.SelectedHighlight2 = 'selectedTankmanHighlight2'),
                        (e.TankmanSlotHover = 'tankmanSlotHover'),
                        (e.UntrainedTankmanHighlight = 'untrainedTankmanHighlight');
                })(be || (be = {}));
                const he = ({ type: e, size: t, isHigh: n, className: a, isVisible: r = !0 }) => {
                        const i = n ? e + 'High' : e;
                        return s().createElement('div', {
                            className: h()(Ee.base, Ee[`base__${i}`], r && Ee.base__visible, a),
                            style: { backgroundImage: `url(R.images.gui.maps.icons.crewWidget.slot.${t}.${i})` },
                        });
                    },
                    ve = 'BaseSlot_base_97',
                    fe = 'BaseSlot_base__hovered_61',
                    Ce = 'BaseSlot_base__inactive_7e',
                    Ae = 'BaseSlot_base__high_2c',
                    ke = 'BaseSlot_delimiter_f8',
                    we = 'BaseSlot_layer_cb',
                    ye = ({
                        isHigh: e,
                        size: t,
                        onClick: n,
                        children: a,
                        isSelected: i = !1,
                        isDisabled: o,
                        isEnabledForMouse: u,
                        isEmpty: l = !1,
                        layoutInfo: c,
                    }) => {
                        const d = (0, r.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            g = m && (!i || (!l && c.isCurrentLayoutMemberChange)),
                            p = g && !l && !c.isCurrentLayoutHangar;
                        return s().createElement(
                            'div',
                            {
                                className: h()(
                                    ve,
                                    e && Ae,
                                    (m || i) && !c.isCurrentLayoutHangar && fe,
                                    (i || !u) && Ce,
                                ),
                                onClick: n,
                                onMouseEnter: () => {
                                    u && !i && (oe.$.playHighlight(), _(!0));
                                },
                                onMouseLeave: () => {
                                    _(!1);
                                },
                            },
                            !c.isCurrentLayoutMemberChange &&
                                s().createElement(he, {
                                    type: be.SelectedGlow,
                                    size: t,
                                    isHigh: e,
                                    isVisible: i,
                                    className: we,
                                }),
                            s().createElement(he, {
                                type: be.HoverGlow,
                                size: t,
                                isHigh: e,
                                isVisible: p,
                                className: we,
                            }),
                            s().createElement(he, {
                                type: be.TankmanSlotHover,
                                size: t,
                                isHigh: e,
                                isVisible: g,
                                className: we,
                            }),
                            o &&
                                s().createElement(he, {
                                    type: be.Disabled,
                                    size: t,
                                    isHigh: e,
                                    isVisible: !0,
                                    className: we,
                                }),
                            a,
                            s().createElement('div', { className: ke }),
                        );
                    },
                    Fe = ({
                        startState: e,
                        endState: t,
                        layoutInfo: n,
                        isPaused: a = !1,
                        children: i,
                        className: o,
                        isTankmanMode: u,
                    }) => {
                        const l = (0, ue.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: ce.qb }, pause: a }),
                                [a],
                            )[0],
                            c = (0, r.useMemo)(
                                () =>
                                    n.isCurrentLayoutHangar ||
                                    n.isCurrentLayoutQuickTraining ||
                                    n.isCurrentLayoutSkillsTraining ||
                                    u
                                        ? e
                                        : (!n.isPreviousLayoutHangar && !n.isPreviousLayoutBarrack) || a
                                          ? t
                                          : l,
                                [n, a, l, e, t, u],
                            );
                        return s().createElement(ue.animated.div, { className: o, style: c }, i);
                    },
                    De = 'DogSlot_base_8f',
                    Be = 'DogSlot_icon_ba',
                    Se = 'DogSlot_container_63',
                    Te = 'DogSlot_roleAndName_c9',
                    Ie = 'DogSlot_role_5c',
                    Ne = 'DogSlot_name_9c',
                    Le = 'DogSlot_btnDetails_b7',
                    xe = { transform: 'translateX(0rem)' },
                    Re = (0, o.Pi)(({ isDisabled: e, layoutInfo: t, size: n }) => {
                        const a = E(),
                            i = a.model,
                            o = a.controls,
                            u = i.nation.get(),
                            l = o.onDogMoreInfoClick,
                            c = (0, r.useCallback)(() => {
                                !e && (0, oe.G)(le.gO.RUDY);
                            }, [e]),
                            d = (0, r.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && l();
                                },
                                [l, e],
                            ),
                            m = (0, ue.useSpring)(
                                () => ({
                                    from: xe,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: ce.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            _ = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(u);
                        return s().createElement(
                            v.i,
                            { header: _.header(), body: _.body() },
                            s().createElement(
                                'div',
                                null,
                                s().createElement(
                                    ye,
                                    {
                                        onClick: c,
                                        isDisabled: e,
                                        isEnabledForMouse: !1,
                                        layoutInfo: t,
                                        isHigh: !1,
                                        size: n,
                                    },
                                    s().createElement(
                                        Fe,
                                        {
                                            startState: xe,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            className: De,
                                            isTankmanMode: !1,
                                        },
                                        s().createElement(
                                            ue.animated.div,
                                            { style: m },
                                            s().createElement(pe, { name: 'ussr_dog_1', isCropped: !0, className: Be }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Se },
                                            s().createElement(
                                                'div',
                                                { className: Te },
                                                s().createElement('div', { className: Ie }),
                                                s().createElement(
                                                    'div',
                                                    { className: Ne },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(u).name(),
                                                ),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: Le },
                                                s().createElement(
                                                    D.u5,
                                                    { onClick: d },
                                                    R.strings.crew_widget.btnDetails(),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var Oe = n(9916);
                const Me = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: s,
                        isEnabled: i = !0,
                        onMouseDown: o,
                    }) => {
                        const u = (0, r.useCallback)(() => {
                                (0, Oe.c9)(Oe.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    oe.$.playYes();
                            }, [s, t, n, a]),
                            l = (0, r.useCallback)(() => {
                                (0, Oe.c9)(Oe.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    o && o(e), ((e) => e.button === z.RIGHT)(e) && u();
                                },
                                [o, u],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === i && l();
                            }, [i, l]),
                            i ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Pe = ['children'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const We = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Pe);
                        return s().createElement(
                            Me,
                            He({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    je = 'ChangeCrewButton_base_0f',
                    ze = 'ChangeCrewButton_base__inactive_77',
                    Ge = 'ChangeCrewButton_normalState_07',
                    $e = 'ChangeCrewButton_normalState__hide_db',
                    Ve = 'ChangeCrewButton_hoverState_68',
                    Ue = 'ChangeCrewButton_hoverState__show_89',
                    Ze = (0, o.Pi)(({ isSelected: e, isLocked: t, mainRole: n, isFemale: a }) => {
                        const i = E().model,
                            o = (0, r.useState)(!1),
                            u = o[0],
                            l = o[1],
                            c = (0, G.Sr)(m.D9, {
                                item: m.x3.ChangeButtonTooltip,
                                action: m.eX.Viewed,
                                parentScreen: i.computes.getUiLoggingParentScreen(),
                            }),
                            d = (0, r.useMemo)(
                                () =>
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, S.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, le.Gc)(n, a, le.wP.Objective),
                                              }),
                                          ],
                                [t, a, n],
                            ),
                            _ = d[0],
                            g = d[1];
                        return s().createElement(
                            v.i,
                            {
                                header: _,
                                body: g,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            s().createElement(
                                'div',
                                {
                                    className: h()(je, (t || e) && ze),
                                    onMouseEnter: () => {
                                        c.onShow(), t || e || (oe.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        c.onHide(), l(!1);
                                    },
                                },
                                s().createElement('div', { className: h()(Ge, u && $e) }),
                                s().createElement('div', { className: h()(Ve, (e || u) && Ue) }),
                            ),
                        );
                    }),
                    qe = 'CrewSlot_base_ac',
                    Ye = 'CrewSlot_changeCrew_02',
                    Xe = 'CrewSlot_content_5b',
                    Ke = 'CrewSlot_content__withChangeCrewButton_4e',
                    Qe = 'CrewSlot_layer_49';
                var Je = n(7078),
                    et = n(2603),
                    tt = n(771);
                const nt = 'SpecializationAndName_base_ef',
                    at = 'SpecializationAndName_roleWrapper_87',
                    rt = 'SpecializationAndName_role_55',
                    st = 'SpecializationAndName_role__withGap_35',
                    it = 'SpecializationAndName_name_aa',
                    ot = 'SpecializationAndName_name__highlighted_1b',
                    ut = ({ roles: e, tankmanID: t = tt.y$, slotIdx: n, name: a, hasPostProgression: r = !1 }) =>
                        s().createElement(
                            'div',
                            { className: nt },
                            s().createElement(
                                Je.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: et.rs, slotIdx: n, tankmanID: t },
                                },
                                s().createElement(
                                    'div',
                                    { className: at },
                                    c.UI(e, (e, t) =>
                                        s().createElement('div', {
                                            key: `role__${e}`,
                                            className: h()(rt, t > 0 && st),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: h()(it, r && ot) }, a),
                        ),
                    lt = 'EmptySlotContent_base_77',
                    ct = 'EmptySlotContent_base__high_d7',
                    dt = 'EmptySlotContent_tankmanIcon_07',
                    mt = 'EmptySlotContent_icon_a8',
                    _t = 'EmptySlotContent_iconContainer_25',
                    gt = 'EmptySlotContent_specialization_1f',
                    pt = 'EmptySlotContent_specialization__disabled_3d',
                    Et = 'EmptySlotContent_vehicle_55',
                    bt = { transform: 'translateX(0rem)', opacity: 1 },
                    ht = { transform: 'translateX(-70rem)', opacity: 0 },
                    vt = (0, r.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: n,
                            vehicleType: a,
                            isDisabled: i,
                            isSelected: o,
                            slotIdx: u,
                            blinkStyle: l,
                            qtTankmanIconStyle: d,
                            isHigh: m,
                        }) => {
                            const _ = (0, ue.useSpring)(
                                    () => ({
                                        from: bt,
                                        to: ht,
                                        config: { duration: 200, easing: ce.ei },
                                        immediate: !0,
                                        pause: o,
                                    }),
                                    [o],
                                ),
                                g = _[0],
                                p = _[1],
                                E = (0, r.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || p.start({ reset: !0, reverse: !0 });
                                }, [p, t]),
                                b = c.U2(e, 0) || '',
                                v = R.strings.crew_widget.vehicleWithName.$dyn((0, S.BN)(a)),
                                f = (0, S.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(b),
                                });
                            return s().createElement(
                                'div',
                                { className: h()(lt, m && ct), onMouseEnter: E, onMouseLeave: E },
                                s().createElement(
                                    'div',
                                    { className: dt },
                                    s().createElement(
                                        ue.animated.div,
                                        { className: _t, style: d },
                                        s().createElement(pe, { name: 'empty', className: mt, isCropped: !m }),
                                        s().createElement(
                                            ue.animated.div,
                                            { className: _t, style: i ? void 0 : l },
                                            s().createElement(pe, { name: 'emptyRed', className: mt, isCropped: !m }),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: h()(gt, i && pt) },
                                    s().createElement(ut, { slotIdx: u, roles: e, name: f }),
                                ),
                                s().createElement(
                                    ue.animated.div,
                                    { className: Et, style: o ? void 0 : g },
                                    (0, S.uF)(v, { name: n }),
                                ),
                            );
                        },
                    );
                var ft = n(8617),
                    Ct = n(5855);
                const At = 'TankmanInfo_base_69',
                    kt = 'TankmanInfo_base__disabled_36',
                    wt = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    yt = 'TankmanInfo_specialization_77',
                    Ft = 'TankmanInfo_specialization__withBonusSkills_b1',
                    Dt = 'TankmanInfo_skillsContainer_17',
                    Bt = 'TankmanInfo_skillsContainer__withBonusSkills_83',
                    St = (e, t) => (e ? Ct.t6.None : t < i.cJ.Large ? Ct.t6.ExtraOverlap : Ct.t6.Overlap),
                    Tt = ({ slotIdx: e, tankman: t, isDisabled: n, layoutInfo: a, blinkStyle: r }) => {
                        const o = t.skills.bonusSkills.length > 0,
                            u = (0, i.GS)().mediaSize;
                        return s().createElement(
                            'div',
                            { className: h()(At, n && kt) },
                            s().createElement(
                                Je.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: et.v$, tankmanID: t.tankmanID },
                                },
                                s().createElement('div', { className: wt }),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(yt, o && Ft) },
                                s().createElement(ut, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                    hasPostProgression: t.hasPostProgression,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(Dt, o && Bt) },
                                s().createElement(ft.n, {
                                    tankmanID: t.tankmanID,
                                    size: Ct.Ow.c24x24,
                                    data: t.skills,
                                    dataToCompare:
                                        a.isCurrentLayoutQuickTraining || a.isCurrentLayoutSkillsTraining
                                            ? t.possibleSkills
                                            : void 0,
                                    tooltipsTargetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isSkillTooltipEnabled: !0,
                                    blinkStyle: r,
                                    isNewSkillAnimated: a.isCurrentLayoutHangar,
                                    isAcceleratedTrainingVisible:
                                        !a.isCurrentLayoutQuickTraining && -1 !== t.tankmanID && t.isLessMastered,
                                    collapseType: St(a.isCurrentLayoutHangar, u),
                                }),
                            ),
                        );
                    },
                    It = 'QuickTrainingTankmanSlotContent_base_8d',
                    Nt = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    Lt = 'QuickTrainingTankmanSlotContent_iconContainer_f1',
                    xt = 'QuickTrainingTankmanSlotContent_icon_7c',
                    Rt = 'QuickTrainingTankmanSlotContent_layer_10',
                    Ot = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    Mt = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    Pt = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    Ht = { opacity: 0 },
                    Wt = [{ opacity: 1 }, { opacity: 0 }],
                    jt = (0, r.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: n,
                            qtTankmanIconStyle: a,
                            layoutInfo: i,
                            isDisabled: o,
                            size: u,
                        }) => {
                            const l = (0, r.useRef)(t.lastSkillLevelFull),
                                c = (0, r.useRef)(t.skills.majorSkills.length),
                                d = (0, ue.useSpring)(() => ({ from: Ot })),
                                m = d[0],
                                _ = d[1],
                                g = (0, ue.useSpring)(() => ({ from: Ht })),
                                p = g[0],
                                E = g[1],
                                b = (0, r.useRef)(!1);
                            return (
                                (0, r.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? b.current ||
                                          (_.start({
                                              from: Ot,
                                              to: Mt,
                                              reverse: false,
                                              config: { duration: 300, easing: ce.BH },
                                          }),
                                          (b.current = !0))
                                        : b.current
                                          ? (t.skills.majorSkills.length > c.current || t.lastSkillLevelFull > l.current
                                                ? (_.start({
                                                      from: Mt,
                                                      to: Pt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ce.BH },
                                                  }),
                                                  (l.current = t.lastSkillLevelFull),
                                                  (c.current = t.skills.majorSkills.length),
                                                  E.start({
                                                      from: Ht,
                                                      to: Wt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ce.BH },
                                                  }))
                                                : _.start({ reset: !0, reverse: !0 }),
                                            (b.current = !1))
                                          : ((l.current = t.lastSkillLevelFull),
                                            (c.current = t.skills.majorSkills.length));
                                }, [_, E, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.majorSkills.length]),
                                s().createElement(
                                    'div',
                                    { className: It },
                                    s().createElement(
                                        ue.animated.div,
                                        { style: p },
                                        s().createElement(he, {
                                            type: be.SelectedHighlight,
                                            size: u,
                                            isHigh: t.roles.length > 1,
                                            className: Rt,
                                        }),
                                    ),
                                    s().createElement(
                                        ue.animated.div,
                                        { className: Lt, style: a },
                                        s().createElement(pe, {
                                            name: t.icon,
                                            isSkin: t.isInSkin,
                                            isCropped: 0 === t.skills.bonusSkills.length,
                                            className: xt,
                                        }),
                                    ),
                                    s().createElement(ue.animated.div, { className: Nt, style: m }),
                                    s().createElement(Tt, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: i,
                                        blinkStyle: n,
                                        isDisabled: o,
                                    }),
                                )
                            );
                        },
                        (e, t) => {
                            const n = e.tankman,
                                a = t.tankman;
                            return (
                                n.hasPossibleProgress === a.hasPossibleProgress &&
                                ((e, t) => {
                                    if (e.length !== t.length) return !1;
                                    const n = e.length;
                                    for (let s = 0; s < n; s++) {
                                        var a, r;
                                        if (
                                            (null == (a = c.U2(e, s)) ? void 0 : a.name) !==
                                            (null == (r = c.U2(t, s)) ? void 0 : r.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(n.skills.majorSkills, a.skills.majorSkills) &&
                                n.lastSkillLevelFull === a.lastSkillLevelFull &&
                                n.possibleSkillsAmount === a.possibleSkillsAmount &&
                                n.lastPossibleSkillLevel === a.lastPossibleSkillLevel &&
                                n.skillsEfficiency === a.skillsEfficiency &&
                                n.possibleSkillsEfficiency === a.possibleSkillsEfficiency
                            );
                        },
                    ),
                    zt = 'TankmanSlotContent_base_00',
                    Gt = 'TankmanSlotContent_icon_ef',
                    $t = (0, r.memo)(({ slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a, blinkStyle: r }) =>
                        s().createElement(
                            'div',
                            { className: zt },
                            s().createElement(pe, {
                                name: t.icon,
                                isCropped: 0 === t.skills.bonusSkills.length,
                                isSkin: t.isInSkin,
                                className: Gt,
                            }),
                            s().createElement(Tt, {
                                slotIdx: e,
                                tankman: t,
                                layoutInfo: n,
                                isDisabled: a,
                                blinkStyle: r,
                            }),
                        ),
                    ),
                    Vt = (0, r.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            vehicleName: r,
                            vehicleType: i,
                            isDisabled: o,
                            isSelected: u,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                            size: m,
                            isHigh: _,
                        }) =>
                            -1 === n.tankmanID
                                ? s().createElement(vt, {
                                      roles: t,
                                      layoutInfo: a,
                                      vehicleName: r,
                                      vehicleType: i,
                                      isDisabled: o,
                                      isSelected: u,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                      isHigh: _,
                                  })
                                : a.isCurrentLayoutQuickTraining
                                  ? s().createElement(jt, {
                                        slotIdx: e,
                                        tankman: n,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: a,
                                        isDisabled: o,
                                        size: m,
                                    })
                                  : s().createElement($t, {
                                        slotIdx: e,
                                        tankman: n,
                                        layoutInfo: a,
                                        isDisabled: o,
                                        blinkStyle: l,
                                    }),
                    ),
                    Ut = { transform: 'translateX(0rem)' },
                    Zt = { transform: 'translateX(41rem)' },
                    qt = { opacity: 0 },
                    Yt = { opacity: 1 },
                    Xt = (0, o.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            isSelected: i,
                            isAnySlotSelected: o,
                            isDisabled: u,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: d,
                            qtTankmanIconStyle: _,
                            size: g,
                        }) => {
                            const p = E(),
                                b = p.model,
                                v = p.controls,
                                f = ((e, t) => {
                                    const n = (0, G.Jp)(m.D9),
                                        a = (0, j.f)(
                                            () => n({ action: m.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            m.tL,
                                        );
                                    return (e) => {
                                        e.button === z.RIGHT && a();
                                    };
                                })(b.computes.getUiLoggingParentScreen(), m.x3.SlotContextMenu),
                                C = v.onSlotClick,
                                A = v.onChangeCrewClick,
                                k = b.computes.isChangeCrewButtonVisible(),
                                w = b.computes.isTankmanMode(),
                                y = b.isCrewLocked.get(),
                                F = b.vehicleName.get(),
                                D = b.vehicleType.get(),
                                B = -1 === n.tankmanID ? t.length > 1 : n.skills.bonusSkills.length > 0,
                                S = !u && n.isInteractive && (!a.isCurrentLayoutQuickTraining || o),
                                T = (0, r.useCallback)(() => {
                                    S && !w && ((0, oe.G)(R.sounds.yes1()), C(e, n.tankmanID));
                                }, [e, n, C, w, S]),
                                I = (0, r.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), y || ((0, oe.G)(R.sounds.yes1()), A(e, n.tankmanID));
                                    },
                                    [e, n, A, y],
                                ),
                                N = (0, r.useMemo)(() => ({ tankmanID: n.tankmanID, slotIdx: e }), [n, e]);
                            return s().createElement(
                                We,
                                {
                                    args: N,
                                    isEnabled: !u && !a.isCurrentLayoutSkillsTraining,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: f,
                                },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(
                                        ye,
                                        {
                                            isHigh: B,
                                            onClick: T,
                                            isSelected: i,
                                            isDisabled: u,
                                            isEmpty: -1 === n.tankmanID,
                                            layoutInfo: a,
                                            isEnabledForMouse: S,
                                            size: g,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: qe },
                                            n.hasWarning &&
                                                s().createElement(he, {
                                                    type: be.UntrainedTankmanHighlight,
                                                    size: g,
                                                    isHigh: B,
                                                    className: Qe,
                                                }),
                                            i &&
                                                s().createElement(he, {
                                                    type: w ? be.SelectedHighlight2 : be.SelectedHighlight,
                                                    size: g,
                                                    isHigh: B,
                                                    className: Qe,
                                                }),
                                            s().createElement(
                                                Fe,
                                                {
                                                    startState: Ut,
                                                    endState: Zt,
                                                    layoutInfo: a,
                                                    isPaused: !k,
                                                    className: h()(Xe, k && Ke),
                                                    isTankmanMode: w,
                                                },
                                                s().createElement(Vt, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: n,
                                                    layoutInfo: a,
                                                    isDisabled: u,
                                                    vehicleName: F,
                                                    vehicleType: D,
                                                    blinkSlotStyle: l,
                                                    blinkTankmanStyle: d,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: i,
                                                    size: g,
                                                    isHigh: B,
                                                }),
                                            ),
                                            k &&
                                                s().createElement(
                                                    'div',
                                                    { onClick: I },
                                                    s().createElement(
                                                        Fe,
                                                        {
                                                            startState: qt,
                                                            endState: Yt,
                                                            layoutInfo: a,
                                                            className: Ye,
                                                            isTankmanMode: w,
                                                        },
                                                        s().createElement(Ze, {
                                                            isSelected: a.isCurrentLayoutMemberChange && i,
                                                            isLocked: y,
                                                            mainRole: c.U2(t, 0) || '',
                                                            isFemale: -1 !== n.tankmanID && n.isFemale,
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Kt = 'SlotsList_base_5f',
                    Qt = 'SlotsList_base__hangar_8b';
                function Jt() {
                    return (
                        (Jt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Jt.apply(this, arguments)
                    );
                }
                const en = { transform: 'translateX(0rem)' },
                    tn = { transform: 'translateX(15rem)' },
                    nn = (0, o.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: n, size: a }) => {
                        const i = E().model,
                            o = i.computes.isAnyEmptySlots(),
                            u = (0, ue.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: ce.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            l = u[0],
                            c = u[1];
                        (0, r.useEffect)(() => {
                            o ? c.resume() : c.pause();
                        }, [c, o]);
                        const d = (0, ue.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: ce.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            m = d[0],
                            _ = d[1];
                        (0, r.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining || e.isCurrentLayoutSkillsTraining ? _.resume() : _.pause();
                        }, [_, e.isCurrentLayoutQuickTraining, e.isCurrentLayoutSkillsTraining]);
                        const g = (0, ue.useSpring)(() => ({
                                from: en,
                                to: tn,
                                delay: 200,
                                config: { duration: 300, easing: ce.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            p = (0, r.useCallback)(
                                (n) => t || (e.isCurrentLayoutQuickTraining && -1 === n),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return s().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: h()(Kt, e.isCurrentLayoutHangar && Qt, n) },
                            i.computes
                                .getSlots()
                                .map((t, n) =>
                                    s().createElement(
                                        Xt,
                                        Jt({}, t, {
                                            layoutInfo: e,
                                            key: `slot_${n}_${t.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (i.computes.isSlotSelected(t.slotIdx) || i.computes.isTankmanMode()),
                                            isAnySlotSelected: i.computes.isAnySlotSelected(),
                                            isDisabled: p(t.tankman.tankmanID),
                                            blinkSlotStyle: m,
                                            blinkTankmanStyle: l,
                                            qtTankmanIconStyle: g,
                                            size: a,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    an = (0, o.Pi)(() => {
                        const e = E().model,
                            t = e.isDisabled.get(),
                            n = e.hasDog.get(),
                            a = e.computes.getLayoutInfo(),
                            r = (0, i.GS)().mediaSize < i.cJ.Large ? 'small' : 'big';
                        return s().createElement(
                            'div',
                            { className: re },
                            e.computes.isButtonBarVisible() &&
                                s().createElement(
                                    'div',
                                    { className: se },
                                    s().createElement(ae, { isWidgetDisabled: t }),
                                ),
                            s().createElement(nn, { layoutInfo: a, isWidgetDisabled: t, className: ie, size: r }),
                            n && s().createElement(Re, { layoutInfo: a, isDisabled: t, size: r }),
                        );
                    }),
                    rn = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    sn = (0, r.memo)(() =>
                        s().createElement(
                            a.z,
                            null,
                            s().createElement(p, { options: rn }, s().createElement(an, null)),
                        ),
                    );
            },
            5801: (e, t, n) => {
                'use strict';
                n.d(t, { p: () => Ie });
                var a = n(6179),
                    r = n.n(a),
                    s = n(6483),
                    i = n.n(s),
                    o = n(2106),
                    u = n(6373);
                let l;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(l || (l = {}));
                var c = n(3403),
                    d = n(3415),
                    m = n(9480),
                    _ = n(9631);
                const g = 'FilterTitle_base_a7',
                    p = 'FilterTitle_label_05',
                    E = 'FilterTitle_discount_42',
                    b = 'FilterTitle_discountIcon_30',
                    h = ({ label: e, hasDiscount: t, className: n }) =>
                        r().createElement(
                            'div',
                            { className: i()(g, n) },
                            r().createElement('div', { className: p }, e),
                            t && r().createElement('div', { className: E }, r().createElement('div', { className: b })),
                        );
                let v;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Nation = 'nation'),
                        (e.Location = 'location'),
                        (e.TankmanRole = 'tankmanRole'),
                        (e.TankmanKind = 'tankmanKind'),
                        (e.VehicleGrade = 'vehicleGrade'),
                        (e.VehicleTier = 'vehicleTier'),
                        (e.VehicleType = 'vehicleType'),
                        (e.PersonalDataType = 'personalDataType'),
                        (e.VehicleCD = 'vehicle');
                })(v || (v = {}));
                var f = n(3649);
                const C = 'ToggleIcon_base_59',
                    A = 'ToggleIcon_base__small_3e',
                    k = 'ToggleIcon_icon_e7',
                    w = r().memo(function ({ icon: e, isSmall: t = !1, classNames: n }) {
                        return r().createElement(
                            'div',
                            { className: i()(C, t && A) },
                            r().createElement('div', {
                                className: i()(k, null == n ? void 0 : n.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var y = n(9690);
                const F = 'VehicleTier_base_9c',
                    D = 'VehicleTier_base__small_fc',
                    B = ({ level: e, isSmall: t = !1 }) =>
                        r().createElement('div', { className: i()(F, t && D) }, (0, y.HG)(e)),
                    S = {
                        icon__vehicleType: 'ToggleButtonIcon_icon__vehicleType_83',
                        icon__nation: 'ToggleButtonIcon_icon__nation_c1',
                        icon__vehicleGradePrimary: 'ToggleButtonIcon_icon__vehicleGradePrimary_d6',
                        icon__tankmanRole: 'ToggleButtonIcon_icon__tankmanRole_4b',
                        icon__selected: 'ToggleButtonIcon_icon__selected_ca',
                        icon__tankmanKind: 'ToggleButtonIcon_icon__tankmanKind_5e',
                        icon__vehicleGradeElite: 'ToggleButtonIcon_icon__vehicleGradeElite_26',
                        icon__locationRecruit: 'ToggleButtonIcon_icon__locationRecruit_3b',
                        icon__locationTankman: 'ToggleButtonIcon_icon__locationTankman_f6',
                        icon__personalDataType: 'ToggleButtonIcon_icon__personalDataType_a8',
                        icon__tankmanKindDismissed: 'ToggleButtonIcon_icon__tankmanKindDismissed_86',
                        icon__vehicleGradePremium: 'ToggleButtonIcon_icon__vehicleGradePremium_11',
                    },
                    T = ({ id: e, icon: t, type: n, isSmall: a = !0, isSelected: s = !1 }) =>
                        n === v.VehicleTier
                            ? r().createElement(B, { isSmall: a, level: Number(e) })
                            : r().createElement(w, {
                                  icon: t,
                                  isSmall: a,
                                  classNames: {
                                      icon: i()(S[`icon__${n}`], S[`icon__${n}${(0, f.e)(e)}`], s && S.icon__selected),
                                  },
                              }),
                    I = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                let L;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(L || (L = {}));
                const x = ({ header: e, body: t, contentId: n, targetId: a }) =>
                        n
                            ? { contentId: n, targetId: a }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    O = ({
                        id: e,
                        type: t,
                        label: n,
                        hasDiscount: a,
                        filters: s,
                        onClick: o,
                        className: u,
                        toggleProps: l,
                        theme: c = L.Default,
                    }) => {
                        const g = c === L.InPopup;
                        return r().createElement(
                            'div',
                            { className: i()(I.base, I[`base__${c}`], u) },
                            g && r().createElement(h, { className: I.title, label: n, hasDiscount: a }),
                            r().createElement(
                                'div',
                                { className: I.content },
                                m.UI(s, ({ id: n, isSelected: a, tooltip: s, icon: u, counter: c }) =>
                                    r().createElement(
                                        d.l,
                                        { key: n, tooltipArgs: x(s), className: I.toggle },
                                        r().createElement(
                                            _.C,
                                            N({}, l, {
                                                className: i()(I.toggle, null == l ? void 0 : l.className),
                                                isActive: a,
                                                onClick: () => (null == o ? void 0 : o(e, n)),
                                                counter: c,
                                            }),
                                            r().createElement(T, {
                                                id: n,
                                                icon: u,
                                                type: t,
                                                isSmall: g,
                                                isSelected: a,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var M = n(9197);
                const P = (0, n(3215).q)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'isSearchEnabled',
                                    'searchString',
                                    'searchPlaceholder',
                                    'searchTooltipHeader',
                                    'searchTooltipBody',
                                    'isPopoverEnabled',
                                    'isPopoverHighlighted',
                                    'hasAppliedFilters',
                                    'panelType',
                                    'title',
                                    'popoverTooltipHeader',
                                    'popoverTooltipBody',
                                    'hasDiscountAlert',
                                ]),
                                {
                                    amountInfo: e.object('amountInfo'),
                                    filter: e.object('filter'),
                                    filters: e.array('filter.filters'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            search: e.createCallback((e) => ({ value: e }), 'onSearch'),
                            updateFilter: e.createCallback((e, t) => ({ groupID: e, toggleID: t }), 'onUpdateFilter'),
                            resetFilter: e.createCallbackNoArgs('onResetFilter'),
                        }),
                    ),
                    H = P[0],
                    W = P[1];
                var j = n(3457),
                    z = n(3616),
                    G = n(1037),
                    $ = n(9367);
                const V = 'PopupButton_base_7c',
                    U = 'PopupButton_popupButtonLabel_ed',
                    Z = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    Y = 'PopupButton_buttonIcon__isHighlighted_84',
                    X = 'PopupButton_discountAlert_c8',
                    K = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: n = G.IC.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: V },
                            r().createElement('div', { className: U }, R.strings.crew.filter.popup.button.title()),
                            r().createElement(
                                z.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: n,
                                },
                                r().createElement(
                                    'div',
                                    { id: 'popup_btn', className: Z },
                                    r().createElement(
                                        _.C,
                                        { type: j.L$.ghost, size: j.qE.small, isActive: e, hasIndicator: !1 },
                                        r().createElement('div', { className: i()(q, e && Y) }),
                                    ),
                                    t && r().createElement($.Q, { className: X }),
                                ),
                            ),
                        );
                var Q = n(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ne = ({ onClick: e }) =>
                        r().createElement(
                            'div',
                            { className: J },
                            r().createElement(
                                u.i,
                                Q.Xd,
                                r().createElement(
                                    j.u5,
                                    { mixClass: ee, onClick: e, type: j.L$.ghost, size: j.qE.small },
                                    r().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ae = 'default',
                    re = 'search',
                    se = 'email',
                    ie = 'password',
                    oe = 'normal',
                    ue = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ae]: '',
                        [se]: R.strings.common.input.placeholder.email(),
                        [re]: R.strings.common.input.placeholder.search(),
                        [ie]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ae]: 'text', [se]: 'text', [re]: 'text', [ie]: 'password' },
                    ge = { [ae]: '', [se]: 'Invalid email', [re]: '', [ie]: '' },
                    pe = R.images.gui.maps.icons.components.input;
                function Ee(e, t) {
                    return (
                        t !== se ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                var be = n(7727);
                const he = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    ve = r().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: n = ae,
                            size: s = de,
                            variant: o = oe,
                            placeholder: u = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: m,
                            iconSource: _,
                            classMix: g,
                            onMouseEnter: p,
                            onMouseLeave: E,
                            onMouseDown: b,
                            onMouseUp: h,
                            onClick: v,
                            onChange: f,
                            onClear: C,
                            onFocus: A,
                            onBlur: k,
                        }) => {
                            const w = (0, a.useState)(!1),
                                y = w[0],
                                F = w[1],
                                D = (0, a.useRef)(null),
                                B = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = o !== ue,
                                T = (0, a.useCallback)(
                                    (e) => {
                                        S && (F(!0), A && A(e));
                                    },
                                    [S, A],
                                ),
                                I = (0, a.useCallback)(
                                    (e) => {
                                        S && !B.current.mouseOver && (F(!1), k && k(e));
                                    },
                                    [S, k],
                                );
                            (0, a.useEffect)(() => {
                                S && y && d && D.current && D.current.select();
                            }, [d, y, S]);
                            const N = (0, a.useCallback)(
                                    (e) => {
                                        S && f && f(e.target.value);
                                    },
                                    [S, f],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        S && ((B.current.mouseOver = !0), p && p(e));
                                    },
                                    [S, p],
                                ),
                                x = (0, a.useCallback)(
                                    (e) => {
                                        S &&
                                            D.current &&
                                            (B.current.mouseDown && D.current.focus(),
                                            (B.current.mouseOver = !1),
                                            E && E(e));
                                    },
                                    [S, E],
                                ),
                                R = (0, a.useCallback)(
                                    (e) => {
                                        S && ((B.current.mouseDown = !0), b && b(e));
                                    },
                                    [S, b],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        S && ((B.current.mouseDown = !1), h && h(e));
                                    },
                                    [S, h],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        if (S && D.current) {
                                            (!y || (y && e.target !== D.current)) && D.current.focus(), v && v(e);
                                        }
                                    },
                                    [y, S, v],
                                ),
                                P = u || me[n],
                                H = Boolean(_),
                                W = i()(
                                    he.base,
                                    he[`base__${s}`],
                                    l && he[`base__${o}`],
                                    y && he.base__focused,
                                    H && he.base__withIcon,
                                    g,
                                ),
                                j = (0, a.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                z = i()(he.input, he[`input__${n}`]),
                                G = i()(he.icon, he[`icon__${n}`]),
                                $ = i()(he.placeholder, he[`placeholder__${n}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: L,
                                    onMouseDown: R,
                                    onMouseUp: O,
                                    onMouseLeave: x,
                                    onClick: M,
                                },
                                !S && r().createElement('div', { className: he.disabled }),
                                j && r().createElement('div', { style: j, className: G }),
                                r().createElement('input', {
                                    ref: D,
                                    className: z,
                                    type: _e[n],
                                    value: t,
                                    onChange: N,
                                    disabled: !S,
                                    onFocus: T,
                                    onBlur: I,
                                    maxLength: m,
                                }),
                                P && !t && !y && r().createElement('div', { className: $ }, P),
                                c &&
                                    r().createElement('div', {
                                        className: he.clear,
                                        onClick: (e) => {
                                            be.$.playClick(), C && C(e);
                                        },
                                        onMouseEnter: be.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    fe = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Ce = ({ variant: e, show: t = !0, helperText: n, helperIcon: s, classMix: o }) => {
                        const u = (0, a.useMemo)(() => {
                                const t =
                                    s ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [s, e]),
                            l = i()(fe.base, t && fe.base__shown),
                            c = i()(fe.message, fe[`message__${e}`], o);
                        return r().createElement(
                            'div',
                            { className: l },
                            u && r().createElement('div', { className: fe.icon, style: u }),
                            r().createElement('div', { className: c }, n),
                        );
                    },
                    Ae = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    ke = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const ye = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Fe = (e) => {
                        let t = e.componentId,
                            n = e.type,
                            s = void 0 === n ? ae : n,
                            o = e.variant,
                            u = void 0 === o ? oe : o,
                            l = e.size,
                            c = void 0 === l ? de : l,
                            m = e.value,
                            _ = e.tooltipArgs,
                            g = e.helperText,
                            p = void 0 === g ? '' : g,
                            E = e.isValidated,
                            b = void 0 === E || E,
                            h = e.showHelper,
                            v = void 0 === h || h,
                            f = e.error,
                            C = e.options,
                            A = e.onFocus,
                            k = e.onMouseEnter,
                            w = e.onMouseLeave,
                            y = e.onMouseUp,
                            F = e.onMouseDown,
                            D = e.onChange,
                            B = e.classMix,
                            S = e.controlClassMix,
                            T = e.helperClassMix,
                            I = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, ke);
                        const N = (0, a.useState)(m),
                            L = N[0],
                            x = N[1],
                            R = (0, a.useState)(b),
                            O = R[0],
                            M = R[1],
                            P = (0, a.useMemo)(() => Object.assign({}, ye, C), [C]),
                            H = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: s }),
                            W = (0, a.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), x(e));
                            }, []),
                            j = (0, a.useCallback)(
                                (e) => {
                                    let t = !0;
                                    P.performChangeValidation &&
                                        (t = P.changesValidator ? P.changesValidator(e) : Ee(e, H.current.type)),
                                        D && D(e, t);
                                },
                                [D, P],
                            ),
                            z = (0, a.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            G = (0, a.useCallback)(() => W(''), [W]);
                        (0, a.useEffect)(() => () => z(), [z]);
                        const $ = (0, a.useCallback)(
                            (e) => {
                                z(),
                                    P.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              j(e);
                                          }, P.debounceTime))
                                        : j(e);
                            },
                            [j, z, P.debounceTime],
                        );
                        (0, a.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== L ||
                                ($(H.current.value), (H.current.isChangeHandled = !0));
                        }, [L, $]),
                            (0, a.useEffect)(() => {
                                H.current.isChangeHandled && m !== H.current.value && ((H.current.value = m), x(m)),
                                    (H.current.type = s);
                            }, [m, s]),
                            (0, a.useEffect)(() => {
                                M(b);
                            }, [b, u]);
                        const V = (0, a.useCallback)((e) => k && k(e), [k]),
                            U = (0, a.useCallback)(
                                (e) => {
                                    P.disableHighlightOnFocus && O && M(!1), A && A(e);
                                },
                                [O, A, P.disableHighlightOnFocus],
                            ),
                            Z = (0, a.useCallback)((e) => y && y(e), [y]),
                            q = (0, a.useCallback)((e) => F && F(e), [F]),
                            Y = (0, a.useCallback)((e) => w && w(e), [w]),
                            X = (0, a.useMemo)(
                                () =>
                                    P.withTypeIcon
                                        ? (function (e, t) {
                                              return e === re ? pe.$dyn(`search_${t}`) : '';
                                          })(s, c)
                                        : '',
                                [s, c, P.withTypeIcon],
                            ),
                            K = p || ge[s],
                            Q = Boolean(L),
                            J = f ? ce : u,
                            ee = Boolean(f) || O,
                            te = (0, a.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Q && P.withClear : Q && s === re),
                                [s, Q, P],
                            ),
                            ne = i()(Ae.base, Ae[`base__${c}`], Ae[`base__${u}`], B);
                        return r().createElement(
                            'div',
                            { id: t, className: ne, onMouseEnter: V, onMouseDown: q, onMouseUp: Z, onMouseLeave: Y },
                            r().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                r().createElement(
                                    ve,
                                    we(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: X,
                                            size: c,
                                            type: s,
                                            variant: J,
                                            value: L,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: P.selectOnFocus,
                                            maxLength: P.maxLength,
                                            classMix: S,
                                            onFocus: U,
                                            onChange: W,
                                            onClear: G,
                                        },
                                        I,
                                    ),
                                ),
                            ),
                            K &&
                                r().createElement(
                                    'div',
                                    { className: Ae.helper },
                                    r().createElement(Ce, {
                                        variant: J,
                                        show: v && (P.isPermanentHelper || ee),
                                        helperText: f || K,
                                        helperIcon: P.helperIconSource,
                                        classMix: T,
                                    }),
                                ),
                        );
                    },
                    De = ({ value: e, placeholder: t, tooltipHeader: n, onChange: a, className: s, tooltipBody: i }) =>
                        r().createElement(
                            u.i,
                            { header: null != n ? n : void 0, body: i, isEnabled: Boolean(n || i) },
                            r().createElement(Fe, {
                                type: re,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: s,
                                onChange: a,
                            }),
                        ),
                    Be = {
                        base: 'FilterPanelWidgetApp_base_1c',
                        titleWrapper: 'FilterPanelWidgetApp_titleWrapper_1b',
                        title: 'FilterPanelWidgetApp_title_ad',
                        filters: 'FilterPanelWidgetApp_filters_0d',
                        counterGlow: 'FilterPanelWidgetApp_counterGlow_df',
                        separator: 'FilterPanelWidgetApp_separator_9e',
                        filterLabel: 'FilterPanelWidgetApp_filterLabel_5b',
                        base__tankChange: 'FilterPanelWidgetApp_base__tankChange_ff',
                        base__memberChange: 'FilterPanelWidgetApp_base__memberChange_18',
                        popupButtonWrapper: 'FilterPanelWidgetApp_popupButtonWrapper_4c',
                        base__personalData: 'FilterPanelWidgetApp_base__personalData_1d',
                        search: 'FilterPanelWidgetApp_search_0e',
                    },
                    Se = (0, c.Pi)(({ popoverDirection: e }) => {
                        const t = W(),
                            n = t.model,
                            a = t.controls,
                            s = n.amountInfo.get(),
                            c = s.from,
                            d = s.to,
                            m = n.panelType.get(),
                            _ = n.filter.get(),
                            g = n.hasAppliedFilters.get(),
                            p = g || (0 === c && 0 === d),
                            E = n.popoverTooltipHeader.get(),
                            b = n.popoverTooltipBody.get();
                        return r().createElement(
                            'div',
                            { className: i()(Be.base, Be[`base__${m}`]) },
                            r().createElement(
                                'div',
                                { className: Be.titleWrapper },
                                r().createElement(M.C, {
                                    title: n.title.get(),
                                    isGlowVisible: p,
                                    from: c,
                                    to: d,
                                    className: Be.title,
                                    classNames: { counterGlow: Be.counterGlow },
                                }),
                                g && r().createElement(ne, { onClick: a.resetFilter }),
                            ),
                            r().createElement(
                                'div',
                                { className: Be.filters },
                                n.isSearchEnabled.get() &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(De, {
                                            value: n.searchString.get(),
                                            onChange: a.search,
                                            className: Be.search,
                                            placeholder: n.searchPlaceholder.get(),
                                            tooltipHeader: n.searchTooltipHeader.get(),
                                            tooltipBody: n.searchTooltipBody.get(),
                                        }),
                                        m === l.Barracks && r().createElement('div', { className: Be.separator }),
                                    ),
                                _.label && r().createElement('div', { className: Be.filterLabel }, _.label),
                                r().createElement(O, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: n.filters.get(),
                                    toggleProps: { type: o.L.ghost },
                                    onClick: a.updateFilter,
                                }),
                                n.isPopoverEnabled.get() &&
                                    r().createElement(
                                        u.i,
                                        {
                                            header: null != E ? E : void 0,
                                            body: null != b ? b : void 0,
                                            isEnabled: Boolean(E || b),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Be.popupButtonWrapper },
                                            r().createElement(K, {
                                                isHighlighted: n.isPopoverHighlighted.get(),
                                                hasDiscountAlert: n.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Te = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') },
                    Ie = r().memo(function ({ popoverDirection: e }) {
                        return r().createElement(H, { options: Te }, r().createElement(Se, { popoverDirection: e }));
                    });
            },
            2603: (e, t, n) => {
                'use strict';
                n.d(t, { Br: () => i, HZ: () => a, M4: () => o, XG: () => s, rs: () => u, v$: () => r });
                const a = 'crewPerkGf',
                    r = 'tankman',
                    s = 'tankmanNotRecruited',
                    i = 'skillsEfficiency',
                    o = 'crewSkillUntrained',
                    u = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { GT: () => u, I: () => s, jw: () => i, sU: () => a, vA: () => o, y$: () => l, yb: () => r });
                const a = -1,
                    r = 1,
                    s = 100,
                    i = 'new_skill',
                    o = 9,
                    u = 6,
                    l = -1;
                let c;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom');
                })(c || (c = {}));
            },
            6880: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            8055: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Counter_base_9e',
                    show: 'Counter_show_be',
                    base__big: 'Counter_base__big_19',
                    base__small: 'Counter_base__small_3b',
                    base__empty: 'Counter_base__empty_98',
                    base__animated: 'Counter_base__animated_40',
                    base__hidden: 'Counter_base__hidden_56',
                    hide: 'Counter_hide_b6',
                    bg: 'Counter_bg_74',
                    value: 'Counter_value_3e',
                    value__text: 'Counter_value__text_d6',
                    base__pattern: 'Counter_base__pattern_71',
                    plus: 'Counter_plus_15',
                    pattern: 'Counter_pattern_83',
                };
            },
            4769: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'PopoverDecorator_base_ed',
                    decorator: 'PopoverDecorator_decorator_d3',
                    arrow: 'PopoverDecorator_arrow_8a',
                    arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                    arrow__top: 'PopoverDecorator_arrow__top_6e',
                    arrow__left: 'PopoverDecorator_arrow__left_7a',
                    arrow__right: 'PopoverDecorator_arrow__right_b6',
                    closeBtn: 'PopoverDecorator_closeBtn_32',
                    content: 'PopoverDecorator_content_f0',
                };
            },
            8699: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'AcceleratedTrainingIcon_base_4f', icon: 'AcceleratedTrainingIcon_icon_45' };
            },
            130: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
            },
            4458: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
            },
            8326: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Skills_base_ec',
                    efficiency: 'Skills_efficiency_d0',
                    base__c_44x44: 'Skills_base__c_44x44_c0',
                    rows: 'Skills_rows_e8',
                    bonusRow: 'Skills_bonusRow_4a',
                };
            },
            1890: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'AnimatedLostSkill_base_55',
                    base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                    base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                    icon: 'AnimatedLostSkill_icon_d4',
                };
            },
            6253: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'AnimatedNewSkill_base_0f' };
            },
            8110: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'LostLevelAnimation_base_f6',
                    level: 'LostLevelAnimation_level_f0',
                    level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                    level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                    base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                    base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                };
            },
            4722: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Row_base_bb',
                    skill: 'Row_skill_fb',
                    base__c_44x44: 'Row_base__c_44x44_4f',
                    base__c_24x24: 'Row_base__c_24x24_16',
                    base__collapseNoMargins: 'Row_base__collapseNoMargins_13',
                    base__collapseOverlap: 'Row_base__collapseOverlap_2c',
                    base__collapseReducedMargins: 'Row_base__collapseReducedMargins_3b',
                    skill__last: 'Row_skill__last_0a',
                    skill__lastLearnedSkill: 'Row_skill__lastLearnedSkill_6c',
                    base__collapseOnlyLearningOverlap: 'Row_base__collapseOnlyLearningOverlap_19',
                    skill__stateLearning: 'Row_skill__stateLearning_5d',
                    base__collapseExtraOverlap: 'Row_base__collapseExtraOverlap_10',
                    base__collapseExtraOverlapWithLevel: 'Row_base__collapseExtraOverlapWithLevel_90',
                    base__collapseExtraOverlapWithEfficiency: 'Row_base__collapseExtraOverlapWithEfficiency_90',
                    base__collapseExtraOverlapWithLevelAndEfficiency:
                        'Row_base__collapseExtraOverlapWithLevelAndEfficiency_4e',
                    level: 'Row_level_56',
                    acceleratedTrainingIcon: 'Row_acceleratedTrainingIcon_c7',
                    lostSkill: 'Row_lostSkill_32',
                };
            },
            872: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'SkillLevel_base_d2', base__highlighted: 'SkillLevel_base__highlighted_e3' };
            },
            699: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Skill_base_1f',
                    base__c_24x24: 'Skill_base__c_24x24_29',
                    base__c_44x44: 'Skill_base__c_44x44_5a',
                    background: 'Skill_background_02',
                    base__borderLightYellow: 'Skill_base__borderLightYellow_09',
                    base__borderYellow: 'Skill_base__borderYellow_3e',
                    base__borderRed: 'Skill_base__borderRed_d2',
                    base__typeBonus: 'Skill_base__typeBonus_23',
                    base__disabled: 'Skill_base__disabled_85',
                    newSkillHighLight: 'Skill_newSkillHighLight_44',
                    icon: 'Skill_icon_b0',
                    disabledOverlay: 'Skill_disabledOverlay_3b',
                };
            },
            3938: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                };
            },
            4723: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'ToggleButton_base_09',
                    overlay: 'ToggleButton_overlay_76',
                    base__active: 'ToggleButton_base__active_05',
                    button: 'ToggleButton_button_14',
                    indicator: 'ToggleButton_indicator_c2',
                    counter: 'ToggleButton_counter_86',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var r = 1 / 0;
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, n, a] = deferred[u], s = !0, i = 0; i < t.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((s = !1), a < r && (r = a));
                    if (s) {
                        deferred.splice(u--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var u = deferred.length; u > 0 && deferred[u - 1][2] > a; u--) deferred[u] = deferred[u - 1];
            deferred[u] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 1906),
        (() => {
            var e = { 1906: 0, 8003: 0, 3595: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [s, i, o] = n,
                        u = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); u < s.length; u++)
                        (r = s[u]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(1096));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
