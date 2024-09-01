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
                    onMouseMove: E,
                    onMouseDown: p,
                    onMouseUp: b,
                    onMouseLeave: h,
                    onClick: v,
                }) => {
                    const f = (0, i.useRef)(null),
                        A = (0, i.useState)(n),
                        C = A[0],
                        F = A[1],
                        y = (0, i.useState)(!1),
                        k = y[0],
                        D = y[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                C && null !== f.current && !f.current.contains(e.target) && F(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, i.useEffect)(() => {
                            F(n);
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
                                    C && u.Z.base__focus,
                                    k && u.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== m && (0, s.G)(m), g && g(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    c || (b && b(e), D(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== _ && (0, s.G)(_),
                                        p && p(e),
                                        n && (c || (f.current && (f.current.focus(), F(!0)))),
                                        D(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (h && h(e), D(!1));
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
                            E = void 0 === g ? s.O.FRAME_TIME : g,
                            p = e.initialFrameIndex,
                            b = void 0 === p ? s.O.INITIAL_FRAME_INDEX : p,
                            h = e.lastFrameIndex,
                            v = void 0 === h ? m - 1 : h,
                            f = e.loop,
                            A = void 0 === f ? s.O.LOOP : f,
                            C = e.state,
                            F = void 0 === C ? s.O.STATE : C,
                            y = e.onAnimationDone,
                            k = e.onAnimationComplete,
                            D = e.poster,
                            w = (function (e, t) {
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
                                switch (F) {
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
                                                              (null == k || k(),
                                                              A || (null == y || y(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, E);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === b && D ? { path: D, x: 0, y: 0 } : u(b),
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
                            }, [E, u, b, v, A, _, k, y, D, F]),
                            r().createElement('canvas', o({}, w, { width: t, height: n, ref: B }))
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
                        E = 'string' == typeof g;
                    if ((g && !E && g < 0) || 0 === g) return null;
                    const p = g && !E && g > d,
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
                            { className: r()(o.Z.value, E && o.Z.value__text) },
                            p ? d : g,
                            p && i().createElement('span', { className: o.Z.plus }, '+'),
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
                        E = o.mediumWidth,
                        p = o.smallWidth,
                        b = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        v = o.largeHeight,
                        f = o.mediumHeight,
                        A = o.smallHeight,
                        C = o.extraSmallHeight,
                        F = { extraLarge: h, large: v, medium: f, small: A, extraSmall: C };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && u) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && m) return t;
                    } else {
                        if (n.extraLargeWidth && _) return (0, r.H)(t, n, F);
                        if (n.largeWidth && g) return (0, r.H)(t, n, F);
                        if (n.mediumWidth && E) return (0, r.H)(t, n, F);
                        if (n.smallWidth && p) return (0, r.H)(t, n, F);
                        if (n.extraSmallWidth && b) return (0, r.H)(t, n, F);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && h) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && A) return t;
                            if (n.extraSmallHeight && C) return t;
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
                    E = n(8475);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(a || (a = {}));
                const p = ['__left', '__right', '__top', '__bottom'];
                (0, m.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, r) => {
                        const b = (0, m.useRef)(null),
                            h = (0, m.useRef)(null),
                            v = (0, m.useRef)(null),
                            f = (0, m.useState)(window.decorator && window.decorator.directionType),
                            A = f[0],
                            C = f[1],
                            F = (0, m.useCallback)(() => {
                                c.$.playClick(), o.O.view.sendEvent.close();
                            }, []),
                            y = (0, m.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            k = s()(g.Z.arrow, g.Z[`arrow${p[A]}`]);
                        (0, u.b)(
                            () => (
                                o.O.client.events.mouse.enableOutside(),
                                o.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : o.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const D = (0, m.useCallback)(
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
                            w = (0, E.w)(),
                            B = (0, m.useCallback)(() => {
                                const e = h.current;
                                if (e)
                                    return (
                                        o.O.view.freezeTextureBeforeResize(),
                                        w.run(() => {
                                            const t = e.scrollWidth,
                                                n = e.scrollHeight;
                                            o.O.view.resize(t, n), C(window.decorator.directionType);
                                        })
                                    );
                            }, [w]);
                        return (
                            (0, m.useImperativeHandle)(r, () => ({ updateSize: B })),
                            (0, u.b)(() => {
                                o.O.view.setInputPaddingsRem(58);
                            }),
                            (0, m.useEffect)(() => {
                                document.addEventListener('mousedown', D, { capture: !0 });
                                const e = (0, l.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => B()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', D);
                                    }
                                );
                            }, [B, D, t]),
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
                                                    onClick: F,
                                                    onMouseEnter: y,
                                                    ref: v,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: k, style: a.arrow }),
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
                        E = e.isEnabled,
                        p = void 0 === E || E,
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
                                        p && (v(), _ && _(e), f && f(e));
                                    }),
                            },
                            b,
                        ),
                        g,
                    );
                    var f;
                };
            },
            2773: (e, t, n) => {
                'use strict';
                n.d(t, { $Q: () => f });
                var a = n(6483),
                    r = n.n(a),
                    s = n(7515),
                    i = n(1856),
                    o = n(3138),
                    u = n(3815),
                    l = n(560),
                    c = n(7727),
                    d = n(6179),
                    m = n.n(d),
                    _ = n(6358),
                    g = n(372);
                const E = 'disable',
                    p = { pending: !1, offset: 0 },
                    b = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = () => {},
                    v = (e, t) => Math.max(20, e.offsetWidth * t),
                    f = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = b, onDrag: a = h }) => {
                        const f = (0, d.useRef)(null),
                            A = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            F = (0, d.useRef)(null),
                            y = (0, d.useRef)(null),
                            k = e.stepTimeout || 100,
                            D = (0, d.useState)(p),
                            w = D[0],
                            B = D[1],
                            S = (0, d.useCallback)(
                                (e) => {
                                    B(e),
                                        y.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: y.current });
                                },
                                [a],
                            ),
                            N = () => {
                                const t = F.current,
                                    n = y.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    u = (0, s.u)(0, 1, i / (r - a)),
                                    l = (t.offsetWidth - v(t, o)) * u;
                                (n.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (A.current && C.current && F.current && y.current) {
                                            if (0 === e)
                                                return A.current.classList.add(E), void C.current.classList.remove(E);
                                            if (
                                                ((t = F.current),
                                                (n = y.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return A.current.classList.remove(E), void C.current.classList.add(E);
                                            var t, n;
                                            A.current.classList.remove(E), C.current.classList.remove(E);
                                        }
                                    })(l);
                            },
                            I = (0, u.z)(() => {
                                (() => {
                                    const t = y.current,
                                        n = F.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && n)) return;
                                    const s = Math.min(1, a / r);
                                    (t.style.width = `${v(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        f.current &&
                                            (1 === s
                                                ? f.current.classList.add(g.Z.base__nonActive)
                                                : f.current.classList.remove(g.Z.base__nonActive));
                                })(),
                                    N();
                            });
                        (0, d.useEffect)(() => (0, i.v)(I)),
                            (0, d.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            N();
                                        };
                                        let n = h;
                                        const a = () => {
                                            n(), (n = (0, i.v)(I));
                                        };
                                        return (
                                            e.events.on('recalculateContent', I),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', I),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!w.pending) return;
                                const t = o.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const s = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!s || !i) return;
                                        const o = F.current,
                                            u = y.current;
                                        if (!o || !u) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - w.offset - o.getBoundingClientRect().x,
                                            c = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: u, thumbOffset: l, contentOffset: c });
                                    }),
                                    n = o.O.client.events.mouse.up(() => {
                                        t(), S(p);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, w.offset, w.pending, a, S]);
                        const T = (0, l.B)((t) => e.applyStepTo(t), k, [e]),
                            x = T[0],
                            L = T[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const R = (e) => {
                            e.target.classList.contains(E) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(g.Z.base, t.base), ref: f, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(g.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), x(_.Nm.Next));
                                },
                                onMouseUp: L,
                                ref: A,
                                onMouseEnter: R,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(g.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const a = y.current;
                                        if (a && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === a))
                                                S({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = y.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const s = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: F,
                                    onMouseEnter: R,
                                },
                                m().createElement('div', { ref: y, className: r()(g.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: r()(g.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(g.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), x(_.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: C,
                                onMouseEnter: R,
                            }),
                        );
                    });
            },
            2840: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => c });
                var a = n(6483),
                    r = n.n(a),
                    s = n(6179),
                    i = n.n(s),
                    o = n(2773),
                    u = n(7950),
                    l = n(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: a,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: m,
                    getStepByRailClick: _,
                    onDrag: g,
                }) => {
                    const E = (0, s.useMemo)(() => {
                            const e = a || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [a]),
                        p = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            i().createElement(u.Area, { className: m, api: p, classNames: d }, e),
                        ),
                        i().createElement(o.$Q, { getStepByRailClick: _, api: t, onDrag: g, classNames: E }),
                    );
                };
            },
            7950: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        Area: () => m,
                        Bar: () => u.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var a = n(6483),
                    r = n.n(a),
                    s = n(1856),
                    i = n(6179),
                    o = n.n(i),
                    u = n(2773),
                    l = n(2840),
                    c = n(4682),
                    d = n(6358);
                const m = ({ api: e, className: t, classNames: n, children: a }) => (
                    (0, i.useEffect)(() => (0, s.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(c.Z.base, t) },
                        o().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == n ? void 0 : n.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            o().createElement(
                                'div',
                                { className: r()(c.Z.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                a,
                            ),
                        ),
                    )
                );
                (m.Bar = u.$Q), (m.Default = l.K);
            },
            6358: (e, t, n) => {
                'use strict';
                n.d(t, { Nm: () => a.Nm, T5: () => r, he: () => a.he });
                var a = n(7308);
                const r = (0, a.EO)({
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
                    getDirection: (e) => (e.deltaY > 1 ? a.Nm.Next : a.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, t, n) => {
                'use strict';
                n.d(t, { $Q: () => A });
                var a = n(6483),
                    r = n.n(a),
                    s = n(7515),
                    i = n(1856),
                    o = n(3138),
                    u = n(3815),
                    l = n(560),
                    c = n(7727),
                    d = n(6179),
                    m = n.n(d),
                    _ = n(7701),
                    g = n(9168);
                const E = 'disable',
                    p = () => {},
                    b = { pending: !1, offset: 0 },
                    h = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    v = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    f = (e, t) => Math.max(20, e.offsetHeight * t),
                    A = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = h, onDrag: a = p }) => {
                        const A = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            F = (0, d.useRef)(null),
                            y = (0, d.useRef)(null),
                            k = (0, d.useRef)(null),
                            D = e.stepTimeout || 100,
                            w = (0, d.useState)(b),
                            B = w[0],
                            S = w[1],
                            N = (0, d.useCallback)(
                                (e) => {
                                    S(e),
                                        k.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: k.current });
                                },
                                [a],
                            ),
                            I = (0, u.z)(() => {
                                const t = k.current,
                                    n = y.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && n)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${f(n, s)}px`),
                                    (t.style.display = 'flex'),
                                    A.current &&
                                        (1 === s
                                            ? A.current.classList.add(g.Z.base__nonActive)
                                            : A.current.classList.remove(g.Z.base__nonActive)),
                                    s
                                );
                            }),
                            T = (0, u.z)(() => {
                                const t = y.current,
                                    n = k.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    u = (0, s.u)(0, 1, i / (r - a)),
                                    l = (t.offsetHeight - f(t, o)) * u;
                                (n.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && F.current && y.current && k.current) {
                                            if (0 === Math.round(e))
                                                return C.current.classList.add(E), void F.current.classList.remove(E);
                                            if (
                                                ((t = y.current),
                                                (n = k.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return C.current.classList.remove(E), void F.current.classList.add(E);
                                            var t, n;
                                            C.current.classList.remove(E), F.current.classList.remove(E);
                                        }
                                    })(l);
                            }),
                            x = (0, u.z)(() => {
                                v(e, () => {
                                    I(), T();
                                });
                            });
                        (0, d.useEffect)(() => (0, i.v)(x)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    v(e, () => {
                                        T();
                                    });
                                };
                                let n = p;
                                const a = () => {
                                    n(), (n = (0, i.v)(x));
                                };
                                return (
                                    e.events.on('recalculateContent', x),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', x),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!B.pending) return;
                                const t = o.O.client.events.mouse.up(() => {
                                        N(b);
                                    }),
                                    n = o.O.client.events.mouse.move(([t]) => {
                                        v(e, (n) => {
                                            const r = y.current,
                                                s = k.current,
                                                i = e.getContainerSize();
                                            if (!r || !s || !i) return;
                                            const o = t.screenY - B.offset - r.getBoundingClientRect().y,
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
                            }, [e, B.offset, B.pending, a, N]);
                        const L = (0, l.B)((t) => e.applyStepTo(t), D, [e]),
                            R = L[0],
                            O = L[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', O, !0),
                                () => document.removeEventListener('mouseup', O, !0)
                            ),
                            [O],
                        );
                        const P = (e) => {
                            e.target.classList.contains(E) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(g.Z.base, t.base), ref: A, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(g.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), R(_.Nm.Next));
                                },
                                ref: C,
                                onMouseEnter: P,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(g.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const a = k.current;
                                        if (a && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === a))
                                                N({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    k.current &&
                                                        v(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                s = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: y,
                                    onMouseEnter: P,
                                },
                                m().createElement('div', { ref: k, className: r()(g.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: r()(g.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(g.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), R(_.Nm.Prev));
                                },
                                onMouseUp: O,
                                ref: F,
                                onMouseEnter: P,
                            }),
                        );
                    });
            },
            1158: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => c });
                var a = n(6483),
                    r = n.n(a),
                    s = n(6179),
                    i = n.n(s),
                    o = n(6225),
                    u = n(9605),
                    l = n(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: a,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: m,
                    getStepByRailClick: _,
                    onDrag: g,
                }) => {
                    const E = (0, s.useMemo)(() => {
                            const e = a || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [a]),
                        p = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.area, c) },
                            i().createElement(u.Area, { className: d, classNames: m, api: p }, e),
                        ),
                        i().createElement(o.$Q, { getStepByRailClick: _, api: t, onDrag: g, classNames: E }),
                    );
                };
            },
            9605: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { Area: () => m, Bar: () => u.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 });
                var a = n(6483),
                    r = n.n(a),
                    s = n(1856),
                    i = n(6179),
                    o = n.n(i),
                    u = n(6225),
                    l = n(1158),
                    c = n(7701),
                    d = n(5636);
                const m = ({ className: e, classNames: t, children: n, api: a }) => (
                    (0, i.useEffect)(() => (0, s.v)(a.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(d.Z.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: r()(d.Z.content, null == t ? void 0 : t.content), ref: a.contentRef },
                            n,
                        ),
                    )
                );
                m.Default = l.K;
            },
            7701: (e, t, n) => {
                'use strict';
                n.d(t, { Nm: () => a.Nm, c4: () => r });
                var a = n(7308);
                const r = (0, a.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? a.Nm.Next : a.Nm.Prev),
                });
            },
            7308: (e, t, n) => {
                'use strict';
                n.d(t, { EO: () => g, Nm: () => m, he: () => _ });
                var a = n(7515),
                    r = n(1856),
                    s = n(3138),
                    i = n(4532),
                    o = n(9653),
                    u = n(3815),
                    l = n(4489),
                    c = n(6179),
                    d = n(7030);
                let m;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(m || (m = {}));
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    g = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: m,
                        getWrapperSize: g,
                        triggerMouseMoveOnUpdate: E = !1,
                    }) => {
                        const p = (e, n) => {
                            const r = t(e),
                                s = r[0],
                                i = r[1];
                            return i <= s ? 0 : (0, a.u)(s, i, n);
                        };
                        return (a = {}) => {
                            const b = a.settings,
                                h = void 0 === b ? _ : b,
                                v = (0, c.useRef)(null),
                                f = (0, c.useRef)(null),
                                A = (0, o.q)(),
                                C = (0, l.f)(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = v.current;
                                        t && (n(t, e), A.trigger('change', e), E && C());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                y = F[0],
                                k = F[1],
                                D = (0, c.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = y.scrollPosition.get(),
                                            s = (null != (a = y.scrollPosition.goal) ? a : 0) - r;
                                        return p(e, t * n + s + r);
                                    },
                                    [y.scrollPosition],
                                ),
                                w = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = v.current;
                                        a &&
                                            k.start({
                                                scrollPosition: p(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: h.animationConfig,
                                                from: { scrollPosition: p(a, y.scrollPosition.get()) },
                                            });
                                    },
                                    [k, h.animationConfig, y.scrollPosition],
                                ),
                                B = (0, c.useCallback)(
                                    (e) => {
                                        const t = v.current,
                                            n = f.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return g(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, h.step),
                                            r = D(t, e, a);
                                        w(r);
                                    },
                                    [w, D, h.step],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(m(e)),
                                            v.current && A.trigger('mouseWheel', e, y.scrollPosition, t(v.current));
                                    },
                                    [y.scrollPosition, B, A],
                                ),
                                N = (0, i.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = v.current;
                                            e &&
                                                (w(p(e, y.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [w, y.scrollPosition.goal],
                                ),
                                I = (0, u.z)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const t = p(e, y.scrollPosition.goal);
                                    t !== y.scrollPosition.goal && w(t, { immediate: !0 }),
                                        A.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', N),
                                    () => {
                                        window.removeEventListener('resize', N);
                                    }
                                ),
                                [N],
                            );
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (f.current ? g(f.current) : void 0),
                                    getContainerSize: () => (v.current ? e(v.current) : void 0),
                                    getBounds: () =>
                                        v.current
                                            ? t(v.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: h.step.clampedArrowStepTimeout,
                                    clampPosition: p,
                                    handleMouseWheel: S,
                                    applyScroll: w,
                                    applyStepTo: B,
                                    contentRef: v,
                                    wrapperRef: f,
                                    scrollPosition: k,
                                    animationScroll: y,
                                    recalculateContent: I,
                                    events: { on: A.on, off: A.off },
                                }),
                                [y.scrollPosition, w, B, A.off, A.on, I, S, k, h.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => r });
                var a = n(7950);
                const r = { Vertical: n(9605), Horizontal: a };
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
                                        ((E = null == m ? void 0 : m.hasHtmlContent),
                                        E ? u.SimpleTooltipHtmlContent('resId') : u.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: g,
                                },
                                _,
                            ),
                            t,
                        );
                        var E;
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
                            E = e.ignoreMouseClick,
                            p = void 0 !== E && E,
                            b = e.decoratorId,
                            h = void 0 === b ? 0 : b,
                            v = e.isEnabled,
                            f = void 0 === v || v,
                            A = e.targetId,
                            C = void 0 === A ? 0 : A,
                            F = e.onShow,
                            y = e.onHide,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, i);
                        const D = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, s.useMemo)(() => C || (0, a.F)().resId, [C]),
                            B = (0, s.useCallback)(() => {
                                (D.current.isVisible && D.current.timeoutId) ||
                                    (u(n, h, { isMouseEvent: !0, on: !0, arguments: o(r) }, w),
                                    F && F(),
                                    (D.current.isVisible = !0));
                            }, [n, h, r, w, F]),
                            S = (0, s.useCallback)(() => {
                                if (D.current.isVisible || D.current.timeoutId) {
                                    const e = D.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (D.current.timeoutId = 0)),
                                        u(n, h, { on: !1 }, w),
                                        D.current.isVisible && y && y(),
                                        (D.current.isVisible = !1);
                                }
                            }, [n, h, w, y]),
                            N = (0, s.useCallback)((e) => {
                                D.current.isVisible &&
                                    ((D.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (D.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(D.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = D.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', N, { capture: !0 }),
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
                                                      ((D.current.timeoutId = window.setTimeout(B, g ? 100 : 400)),
                                                      l && l(e),
                                                      I && I(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === p && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === p && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      k,
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
            7515: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => a });
                const a = (e, t, n) => (n < e ? e : n > t ? t : n);
            },
            1856: (e, t, n) => {
                'use strict';
                n.d(t, { v: () => a });
                const a = (e) => {
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
                };
            },
            122: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e, t) => {
                    let n;
                    const a = setTimeout(() => {
                        n = e();
                    }, t);
                    return () => {
                        'function' == typeof n && n(), clearTimeout(a);
                    };
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
                                        E = { mode: n, model: g, externalModel: c, cleanup: _ };
                                    return {
                                        model: g,
                                        controls: 'mocks' === n && i ? i.controls(E) : t(E),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                g = (0, s.useRef)(!1),
                                E = (0, s.useState)(u),
                                p = E[0],
                                b = E[1],
                                h = (0, s.useState)(() => _(u, l, d)),
                                v = h[0],
                                f = h[1];
                            return (
                                (0, s.useEffect)(() => {
                                    g.current ? f(_(p, l, d)) : (g.current = !0);
                                }, [d, p, l]),
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
                n.d(t, { f8: () => l, s_: () => s, wB: () => c, yR: () => i });
                var a = n(3649),
                    r = (n(9916), n(8613));
                const s = 1e3,
                    i = 60,
                    o = 60 * i,
                    u = 24 * o;
                Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime;
                function l(e = 0) {
                    let t = e;
                    const n = Math.trunc(t / u);
                    t -= n * u;
                    const a = Math.trunc(t / o);
                    t -= a * o;
                    const r = Math.trunc(t / i);
                    return (t -= r * i), { days: n, hours: a, minutes: r, seconds: t };
                }
                const c = (e, t = !0) =>
                    e.days > 7 && t
                        ? (0, a.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, a.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, a.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, a.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, a.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, a.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, a.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, a.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
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
                n.d(t, { ZP: () => o, hY: () => i });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    i = Object.assign({}, s, { sound: a.playSound }),
                    o = { play: i, setRTPC: a.setRTPC };
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
                        displayStatusIs: () => k,
                        events: () => s.U,
                        extraSize: () => D,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => y,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => b,
                        remToPx: () => h,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => u,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => w,
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
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
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
                function A() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const k = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    D = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    w = Promise.all([
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
                function a() {}
                n.d(t, { ZT: () => a, jv: () => s, yR: () => r });
                function r(e) {
                    return e;
                }
                function s() {
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
            4532: (e, t, n) => {
                'use strict';
                n.d(t, { M: () => r });
                var a = n(6179);
                const r = (e, t = []) => {
                    const n = (0, a.useRef)(),
                        r = (0, a.useCallback)((...t) => {
                            n.current && n.current(), (n.current = e(...t));
                        }, t);
                    return (
                        (0, a.useEffect)(
                            () => () => {
                                n.current && n.current();
                            },
                            [r],
                        ),
                        r
                    );
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
            9653: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => i });
                var a = n(6179);
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
                const i = () => {
                    const e = (0, a.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        s = (e, n) => {
                            t(e).delete(n);
                        },
                        i = (e, ...n) => {
                            for (var a, s = r(t(e).values()); !(a = s()).done; ) {
                                (0, a.value)(...n);
                            }
                        };
                    return (0, a.useMemo)(() => ({ on: n, off: s, trigger: i }), []);
                };
            },
            3815: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => s });
                var a = n(6179);
                const r = [];
                function s(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), r)
                    );
                }
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
            560: (e, t, n) => {
                'use strict';
                n.d(t, { B: () => r });
                var a = n(6179);
                function r(e, t, n = []) {
                    const r = (0, a.useRef)(0),
                        s = (0, a.useCallback)(() => window.clearInterval(r.current), n || []);
                    (0, a.useEffect)(() => s, [s]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, a.useCallback)((n) => {
                            (r.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, i),
                        s,
                    ];
                }
            },
            4419: (e, t, n) => {
                'use strict';
                n.d(t, { y: () => s });
                var a = n(8045),
                    r = n(6179);
                const s = (e, t, n = !0) => {
                    const s = (0, r.useCallback)(
                        (e) => {
                            const n = e[0];
                            t && t(n);
                        },
                        [t],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !n) return;
                        const t = new a.Z((e) => s(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [s, n, e]);
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
                n.d(t, { U2: () => a, UI: () => i, dF: () => l, lN: () => o, sE: () => c, tP: () => u, v_: () => d });
                const r = a;
                function s(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function i(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function o(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function u(e, t = 0, n = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let a = Math.max(t, 0);
                            const r = Math.min(
                                n,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (a > r) return { done: !0, value: null };
                                    const t = e[a++];
                                    return t ? { value: s(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function l(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = s(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function c(e, t) {
                    for (let n = 0; n < e.length; n++) {
                        const a = s(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function d(e, t = ',') {
                    let n = '';
                    for (let a = 0; a < e.length; a++) {
                        a > 0 && (n += t);
                        const s = r(e, a);
                        n += null == s ? '' : String(s);
                    }
                    return n;
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
            1612: (e, t, n) => {
                'use strict';
                n.d(t, { h: () => r });
                var a = n(9174);
                function r(e) {
                    const t = {};
                    for (const n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            const r = e[n];
                            t[n] = (0, a.aD)(r);
                        }
                    return t;
                }
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
                n.d(t, {
                    BN: () => o,
                    Eg: () => c,
                    Uw: () => b,
                    WU: () => s,
                    dL: () => h,
                    e: () => u,
                    uF: () => i,
                    v2: () => r,
                    z4: () => l,
                });
                var a = n(1281);
                let r;
                function s(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function i(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function u(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(r || (r = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    d = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    m = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    _ = (e, t, n = r.left) => e.split(t).reduce(n === r.left ? d : m, []),
                    g = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    p = (e, t = r.left) => {
                        const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(n)) return g(e);
                        if ('ja' === n) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = r.left) => {
                            let n = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                s = l(e);
                            return _(s, /( )/, t).forEach((e) => (n = n.concat(_(e, a, r.left)))), n;
                        })(e, t);
                    },
                    b = (e, t, n) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (n && e in n ? n[e] : p(e, t))),
                    h = (e) => s(R.strings.common.percentValue(), { value: e });
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
                    wU: () => F,
                    ry: () => b,
                    Eu: () => h,
                    SW: () => A,
                    P3: () => C,
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
                function E(e, t, n, a, r, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(a, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                            E(s, a, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(s, a, r, i, o, 'throw', e);
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
                    A = () => v(o.POP_OVER, { on: !1 }),
                    C = (e, t, n, a, r = R.invalid('resId'), s) => {
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
                            bbox: p(g),
                            on: !0,
                            args: s,
                        });
                    },
                    F = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    y = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var k = n(7572);
                const D = r.instance,
                    w = {
                        DataTracker: s.Z,
                        ViewModel: k.Z,
                        ViewEventType: o,
                        NumberFormatType: u,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: A,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: C,
                        addEscapeListener: (e) => {
                            const t = (t) => y(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            y(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: b,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: F,
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
                        ClickOutsideManager: D,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = w;
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
                n.d(t, { l: () => E });
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
                    E = (e) => {
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
                            E = s.mediaSize;
                        return u().createElement('div', d({ className: r()(n, m[i], _[o], g[E]) }, a), t);
                    };
            },
            4029: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => a.z });
                var a = n(1504);
            },
            3618: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    s = n(3415),
                    i = n(4419),
                    o = n(6179),
                    u = n.n(o),
                    l = n(6143),
                    c = n(3310),
                    d = n(131),
                    m = n(9053);
                const _ = u().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: n,
                        binding: a,
                        isTooltipEnable: _ = !1,
                        isTruncationAvailable: g = !1,
                        customTooltipArgs: E,
                        targetId: p,
                        justifyContent: b = m.v2.FlexStart,
                        alignContent: h = m.v2.FlexStart,
                        truncateIdentify: v = m.YA,
                    }) => {
                        const f = (0, o.useRef)(null),
                            A = (0, o.useRef)({ height: 0, width: 0 }),
                            C = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            F = C[0],
                            y = C[1],
                            k = (0, o.useMemo)(() => (0, c.s)(e, a, { justifyContent: b }), [a, b, e]),
                            D = (0, o.useMemo)(() => {
                                if (_ && F.isTruncated && (!a || !Object.values(a).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, E, {
                                            stringifyKwargs: a ? JSON.stringify(a) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: p,
                                    };
                            }, [a, _, p, e, E, F.isTruncated]),
                            w = (0, o.useCallback)(
                                (e) => {
                                    (A.current.width = e.contentRect.width), (A.current.height = e.contentRect.height);
                                    const t = (0, d.T)(f, k, A.current, v),
                                        a = t[0],
                                        r = t[1];
                                    y({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), n && n(r);
                                },
                                [n, v, k],
                            ),
                            B = (0, o.useMemo)(() => ({ justifyContent: b, alignContent: h }), [h, b]);
                        return (
                            (0, i.y)(f, w, g),
                            u().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        t,
                                        l.Z.base__zeroPadding,
                                        g && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: B,
                                },
                                u().createElement('div', { className: l.Z.unTruncated, ref: f }, k),
                                u().createElement(
                                    s.l,
                                    {
                                        tooltipArgs: D,
                                        className: r()(
                                            l.Z.tooltip,
                                            l.Z[`tooltip__justify-${b}`],
                                            l.Z[`tooltip__align-${h}`],
                                        ),
                                    },
                                    u().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !F.isTruncateFinished && g && l.Z.truncated__hide,
                                            ),
                                            style: B,
                                        },
                                        F.isTruncateFinished && g ? F.elementList : k,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, n) => {
                'use strict';
                n.d(t, { s: () => _ });
                var a = n(3649),
                    r = n(6799),
                    s = n(6960),
                    i = n(9053);
                const o = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    u = (e) => {
                        const t = [];
                        return (
                            (0, s.Z)(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === i.Co
                                        ? t.push(...((n = e), n.match(o) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    l = i.u6
                        ? (e) => {
                              const t = [];
                              return (
                                  (0, s.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...u(e[0]));
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
                                  const o = t.justifyContent === i.v2.FlexEnd ? a.index : n.lastIndex;
                                  r.push(e.slice(s, o)), (s = o), (a = n.exec(e));
                              }
                              return s !== e.length && r.push(e.slice(s)), r;
                          },
                    c = (e, t = '', n) => {
                        const a = [];
                        return (
                            (0, s.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: i.kH.Word, colorTag: t, childList: l(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = i.aF[n.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: i.kH.NewLine,
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
                    d = (e, t, n = '', a) => {
                        const r = [];
                        return (
                            (0, s.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...c(e, n, a));
                                },
                                (e) => {
                                    const s = e[1],
                                        o = void 0 === t[s] ? e[0] : t[s];
                                    'string' == typeof o || 'number' == typeof o
                                        ? r.push(...c(String(o), n, a))
                                        : r.push({ blockType: i.kH.Binding, colorTag: n, childList: [o] });
                                },
                            ),
                            r
                        );
                    },
                    m = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === i.kH.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    _ = (e, t = {}, n) => {
                        if (!e) return [];
                        const o = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((n = !0), t.push(...m(t.pop(), e)))
                                        : (n ? t.push(...m(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    (0, s.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...d(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...d(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })((0, a.Eg)((0, a.z4)(e)), t, n),
                        );
                        return (0, r.w)(o);
                    };
            },
            6799: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => i });
                var a = n(597),
                    r = n(9053);
                const s = (e, t, n) => {
                        const i = [];
                        return (
                            e.childList.forEach((o, u) => {
                                const l = `${n}_${u}`;
                                if ((0, r.dz)(o)) {
                                    const e = o,
                                        t = e.blockType,
                                        n = a.IY[t],
                                        r = s(e, n, l);
                                    i.push(...r);
                                } else i.push(t({ elementList: [o], textBlock: e, key: l }));
                            }),
                            i
                        );
                    },
                    i = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            i = e.blockType,
                                            o = a.IY[i],
                                            u = s(e, o, t);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? n.push(o({ elementList: u, textBlock: e, key: `${t}` }))
                                                : n.push(...u),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    };
            },
            6960: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = (e, t, n, a) => {
                    let r = t.exec(e),
                        s = 0;
                    for (; r; ) s !== r.index && n(e.slice(s, r.index)), a(r), (s = t.lastIndex), (r = t.exec(e));
                    s !== e.length && n(e.slice(s));
                };
            },
            131: (e, t, n) => {
                'use strict';
                n.d(t, { T: () => c });
                var a = n(6179),
                    r = n.n(a),
                    s = n(9053);
                const i = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    o = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    u = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = o(e, t),
                            r = e.textContent.length,
                            s = e.offsetWidth / r,
                            i = Math.ceil(a / s);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / s);
                            return a >= n ? [!0, n + i] : [!1, a];
                        }
                        const u = Math.max(n + i, 0);
                        return r < u ? [!1, 0] : [!0, u];
                    },
                    l = (e, t, n, a, i, o) => {
                        let c = -1,
                            d = null;
                        for (let m = n; m >= 0; m--) {
                            const n = e[m],
                                _ = Number(e[m].getAttribute(s.bF));
                            if (_ === s.kH.LineBreak || _ === s.kH.NewLine || _ === s.kH.Binding) continue;
                            const g = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = u(n, a, i),
                                    s = e[0],
                                    l = e[1];
                                if (!s) {
                                    l > 0 && (i -= l);
                                    continue;
                                }
                                const _ = g.slice(0, g.length - l) + o,
                                    E = t[m];
                                (d = r().cloneElement(E, E.props, _)), (c = m);
                                break;
                            }
                            {
                                const e = n.children,
                                    s = t[m],
                                    u = s.props.children,
                                    _ = l(e, u, e.length - 1, a, i, o),
                                    E = _[0],
                                    p = _[1];
                                if (!(E < 0)) {
                                    const e = u.slice(0, E);
                                    (d = r().cloneElement(s, s.props, e, p)), (c = m);
                                    break;
                                }
                                i -= g.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, t, n, a = s.YA) => {
                        const r = [...t],
                            u = e.current;
                        if (!u) return [r, !1];
                        const c = n.height,
                            d = n.width,
                            m = u.lastElementChild;
                        if (!i(m, c) && o(m, d) <= 0) return [r, !1];
                        const _ = u.children,
                            g = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    i(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(_, c);
                        if (g < 0) return [r, !1];
                        const E = l(_, r, g, d, a.length, a),
                            p = E[0],
                            b = E[1];
                        return b && (r.splice(p, 1, b), r.splice(p + 1)), [r, !0];
                    };
            },
            9053: (e, t, n) => {
                'use strict';
                let a, r, s;
                n.d(t, {
                    Co: () => c,
                    YA: () => o,
                    aF: () => l,
                    bF: () => u,
                    dz: () => i,
                    kH: () => a,
                    u6: () => d,
                    v2: () => r,
                }),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(a || (a = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(r || (r = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(s || (s = {}));
                const i = (e) => void 0 !== e.childList,
                    o = '...',
                    u = 'data-block-type',
                    l = { [s.NBSP]: a.NoBreakSymbol, [s.ZWNBSP]: a.NoBreakSymbol, [s.NEW_LINE]: a.LineBreak },
                    c = 'th',
                    d = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, t, n) => {
                'use strict';
                n.d(t, { IY: () => m });
                var a = n(6483),
                    r = n.n(a),
                    s = n(6179),
                    i = n.n(s),
                    o = n(9053),
                    u = n(9627),
                    l = n(7629);
                const c = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? u.Z[a]
                                ? i().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: r()(l.Z.word, u.Z[a]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: l.Z.word, style: c(a) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: n, 'data-block-type': t.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    m = {
                        [o.kH.Word]: d,
                        [o.kH.NoBreakSymbol]: d,
                        [o.kH.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            i().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: n }, e)),
                            ),
                        [o.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': o.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [o.kH.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': o.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [o.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': o.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
                                e,
                            ),
                    };
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
                n.d(t, { AB: () => _, D9: () => a, eX: () => s, sC: () => i, sk: () => u, tL: () => r, x3: () => l });
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
                        E = e.initialFrameIndex,
                        p = void 0 === E ? 0 : E,
                        b = e.loop,
                        h = void 0 === b || b,
                        v = e.state,
                        f = void 0 === v ? o.Play : v,
                        A = e.onAnimationComplete,
                        C = void 0 === A ? () => {} : A,
                        F = e.revers,
                        y = void 0 !== F && F,
                        k = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, s);
                    const D = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            const e = D.current;
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
                                })(c, l, y),
                                o = ((e, t = 0) => {
                                    let n = t;
                                    return () => {
                                        const t = n;
                                        return (n += 1), n > e && (n = 0), t;
                                    };
                                })(a, p),
                                d = setInterval(() => {
                                    const e = o(),
                                        t = i[e];
                                    s(i[e]), m(e, t), e === a && (C(), h || clearInterval(d));
                                }, g);
                            return () => clearInterval(d);
                        }, [c, g, l, n, p, h, m, C, f, t, y]),
                        r().createElement('canvas', i({}, k, { width: t, height: n, ref: D }))
                    );
                });
            },
            8032: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => a });
                const a = (e, t) => e.split(',').includes(t);
            },
            1982: (e, t, n) => {
                'use strict';
                var a = n(4029),
                    r = n(6179),
                    s = n.n(r),
                    i = n(493),
                    o = n.n(i),
                    u = n(6483),
                    l = n.n(u),
                    c = n(7727);
                const d = s().memo;
                const m = {
                        base: 'HorizontalTabs_base_92',
                        tab: 'HorizontalTabs_tab_ca',
                        tab__medium: 'HorizontalTabs_tab__medium_88',
                        tab__active: 'HorizontalTabs_tab__active_3e',
                        tab__nonInteractive: 'HorizontalTabs_tab__nonInteractive_ce',
                        state: 'HorizontalTabs_state_3d',
                        highlight: 'HorizontalTabs_highlight_9e',
                        border: 'HorizontalTabs_border_08',
                        border__left: 'HorizontalTabs_border__left_64',
                        border__right: 'HorizontalTabs_border__right_45',
                        divider: 'HorizontalTabs_divider_6f',
                        title: 'HorizontalTabs_title_10',
                        notification: 'HorizontalTabs_notification_89',
                        notification__symbol: 'HorizontalTabs_notification__symbol_8b',
                        notification__small: 'HorizontalTabs_notification__small_7c',
                        notification__large: 'HorizontalTabs_notification__large_a2',
                        notification__dot: 'HorizontalTabs_notification__dot_d7',
                        notification__medium: 'HorizontalTabs_notification__medium_19',
                    },
                    _ = { mouseEnter: 'highlight', click: 'play' },
                    g = (e, { active: t, enableInteractiveActiveTab: n = !1 }) => !!n || e !== t,
                    E = d(function (e) {
                        const t = e.active,
                            n = e.tabs,
                            a = e.onClick,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.className,
                            u = e.classNames,
                            d = e.sounds,
                            E = void 0 === d ? _ : d,
                            p = (t) => () => {
                                g(t, e) && (E.click && (0, c.G)(E.click), null == a || a(t));
                            },
                            b = (t) => () => {
                                g(t, e) && (E.mouseEnter && (0, c.G)(E.mouseEnter), null == r || r(t));
                            },
                            h = (t) => () => {
                                g(t, e) && (E.mouseLeave && (0, c.G)(E.mouseLeave), null == i || i(t));
                            };
                        return s().createElement(
                            'div',
                            { className: l()(m.base, o) },
                            n.map(({ id: a, title: r, notification: i }, o) => {
                                var c;
                                return s().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            m.tab,
                                            a === t && l()(m.tab__active, null == u ? void 0 : u.activeTab),
                                            !g(a, e) && m.tab__nonInteractive,
                                            null == u ? void 0 : u.tab,
                                        ),
                                        key: a,
                                        onClick: p(a),
                                        onMouseEnter: b(a),
                                        onMouseLeave: h(a),
                                    },
                                    ((e, t) => !((e, t) => e.length - 1 === t)(e, t))(n, o) &&
                                        s().createElement('div', {
                                            className: l()(m.divider, null == u ? void 0 : u.divider),
                                        }),
                                    s().createElement(
                                        'div',
                                        { className: l()(m.state, null == u ? void 0 : u.state) },
                                        s().createElement('div', {
                                            className: l()(m.highlight, null == u ? void 0 : u.highlight),
                                        }),
                                        s().createElement('div', {
                                            className: l()(
                                                m.border,
                                                m.border__left,
                                                null == u ? void 0 : u.border,
                                                null == u ? void 0 : u.borderLeft,
                                            ),
                                        }),
                                        s().createElement('div', {
                                            className: l()(
                                                m.border,
                                                m.border__right,
                                                null == u ? void 0 : u.border,
                                                null == u ? void 0 : u.borderRight,
                                            ),
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: l()(m.title, null == u ? void 0 : u.title) },
                                        r,
                                    ),
                                    void 0 !== i &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    m.notification,
                                                    m[`notification__${i.type}`],
                                                    m[`notification__${null != (c = i.size) ? c : 'medium'}`],
                                                    null == u ? void 0 : u.notification,
                                                ),
                                            },
                                            'dot' !== i.type && i.value,
                                        ),
                                );
                            }),
                        );
                    });
                var p = n(3138),
                    b = n(5521);
                n(9916);
                const h = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function v(e = b.n.NONE, t = h, n = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== b.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && p.O.view.isEventHandled()) return;
                                p.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                var f = n(3403),
                    A = n(3215);
                let C, F, y, k;
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
                    })(F || (F = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(y || (y = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(k || (k = {}));
                C.Initialization, F.Initialization;
                const D = (0, A.q)()(
                        ({ observableModel: e }) => {
                            const t = { groups: e.array('groups', []) };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick'),
                        }),
                    ),
                    w = D[0],
                    B = D[1];
                var S = n(794),
                    N = n(7701),
                    I = n(9480),
                    T = n(7078),
                    x = n(3618);
                let L;
                !(function (e) {
                    (e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed');
                })(L || (L = {}));
                const O = {
                        base: 'BuffIcon_base_c8',
                        base__increase: 'BuffIcon_base__increase_60',
                        base__decrease: 'BuffIcon_base__decrease_31',
                        base__mixed: 'BuffIcon_base__mixed_23',
                    },
                    P = s().memo(function ({ buffIconType: e, className: t }) {
                        return e === L.none
                            ? null
                            : s().createElement('div', { className: l()(O.base, O[`base__${L[e]}`], t) });
                    });
                var M = n(7030);
                const H = 'Delta_base_3e',
                    W = 'Delta_base__positive_82',
                    z = 'Delta_base__negative_86',
                    $ = s().memo(function ({ isPositive: e, width: t, shift: n, isUseAnim: a }) {
                        const r = (0, M.useSpring)({
                                from: { left: 0, width: 0 },
                                left: e ? 0 : t,
                                width: e ? 0 : Math.abs(t),
                                config: { duration: Q },
                                delay: e ? 0 : Q,
                                immediate: !a,
                            }),
                            i = (0, M.useSpring)({
                                from: { left: 2, width: 0 },
                                left: 2 + n,
                                width: e ? t : 0,
                                config: { duration: Q },
                                delay: e || 0 === t ? Q : 0,
                                immediate: !a,
                            });
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(M.animated.div, { className: l()(H, z), style: r }),
                            s().createElement(M.animated.div, { className: l()(H, W), style: i }),
                        );
                    }),
                    j = 'Indicator_base_b9',
                    V = 'Indicator_progress_ce',
                    G = 'Indicator_progressMarker_b4',
                    Z = 'Indicator_indicator_bc',
                    U = 'Indicator_indicator__start_80',
                    K = 'Indicator_indicator__end_3b',
                    q = 'Indicator_marker_f7',
                    Y = 'Indicator_valueLine_1d',
                    Q = 300,
                    X = s().memo(function ({
                        minValue: e,
                        maxValue: t,
                        value: n,
                        markerValue: a,
                        delta: r,
                        isUseAnim: i,
                    }) {
                        const o = a === e ? 2 : (a / t) * 254,
                            u = (n / t) * 254,
                            c = (r / t) * 254,
                            d = r > 0,
                            m = { config: { duration: Q }, immediate: !i },
                            _ = (0, M.useSpring)(Object.assign({ from: { left: 2 }, to: { left: o }, delay: Q }, m)),
                            g = (0, M.useSpring)(Object.assign({ from: { width: e }, to: { width: u }, delay: Q }, m));
                        return s().createElement(
                            'div',
                            { className: j },
                            s().createElement(
                                'div',
                                { className: V },
                                s().createElement('div', { className: l()(Z, U) }),
                                s().createElement(M.animated.div, { className: Y, style: g }),
                                s().createElement(
                                    'div',
                                    { className: G },
                                    s().createElement(
                                        M.animated.div,
                                        { className: q, style: _ },
                                        s().createElement($, {
                                            isPositive: d,
                                            width: c,
                                            shift: u - c - o,
                                            isUseAnim: i,
                                        }),
                                    ),
                                ),
                                s().createElement('div', { className: l()(Z, K) }),
                            ),
                        );
                    });
                let J;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Increase = 'increase'),
                        (e.Decrease = 'decrease'),
                        (e.Situational = 'situational');
                })(J || (J = {}));
                var ee = n(9053),
                    te = n(7160);
                const ne = {
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
                    ae = s().memo(function ({
                        id: e,
                        value: t,
                        tooltipID: n,
                        isEnabled: a,
                        highlightType: i,
                        localizedName: o,
                    }) {
                        const u = (0, M.useSpring)(() => ({ from: { opacity: 0 } })),
                            c = u[0],
                            d = u[1],
                            m = i !== J.None;
                        return (
                            (0, r.useEffect)(() => {
                                m &&
                                    d.start({
                                        from: { opacity: 0 },
                                        to: [{ opacity: 1 }, { opacity: 0 }],
                                        delay: 100,
                                        config: { duration: 300, easing: te.Fs },
                                    });
                            }, [t, d, m]),
                            s().createElement(
                                T.t,
                                {
                                    args: { tooltipId: n, paramId: e },
                                    targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    isEnabled: a,
                                },
                                s().createElement(
                                    'div',
                                    { className: ne.base },
                                    s().createElement(
                                        'div',
                                        { className: ne.valueWrapper },
                                        s().createElement(x.w, {
                                            justifyContent: ee.v2.FlexEnd,
                                            classMix: ne.value,
                                            text: t,
                                        }),
                                    ),
                                    s().createElement('div', {
                                        className: ne.icon,
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${e}')`,
                                        },
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: ne.name },
                                        o || R.strings.menu.tank_params.$dyn(e),
                                    ),
                                    m &&
                                        s().createElement(M.animated.div, {
                                            className: l()(ne.highlight, ne[`highlight__${i}`]),
                                            style: c,
                                        }),
                                ),
                            )
                        );
                    }),
                    re = 'Group_base_66',
                    se = 'Group_group_07',
                    ie = 'Group_hoverBg_97',
                    oe = 'Group_hoverBg__scrollable_2a',
                    ue = 'Group_groupHeader_f5',
                    le = 'Group_name_21',
                    ce = 'Group_arrow_96',
                    de = 'Group_arrow__opened_47',
                    me = 'Group_params_88',
                    _e = 'Group_params__opened_9a',
                    ge = 'Group_separator_b5',
                    Ee = 'Group_right_13',
                    pe = 'Group_situational_55',
                    be = 'Group_buff_fa',
                    he = 'Group_value_00',
                    ve = 'Group_value__additional_81';
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const Ae = (0, f.Pi)(
                        ({
                            id: e,
                            isOpen: t,
                            params: n,
                            extraParams: a,
                            tooltipID: r,
                            indicator: i,
                            value: o,
                            additionalValue: u,
                            buffIconType: d,
                            isEnabled: m,
                            isScrollable: _,
                            isSituational: g,
                        }) => {
                            const E = B().controls,
                                p = a && a.length > 0;
                            return s().createElement(
                                'div',
                                { className: re },
                                s().createElement(
                                    T.t,
                                    {
                                        args: { tooltipId: r, paramId: e },
                                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        isEnabled: m,
                                    },
                                    s().createElement(
                                        'div',
                                        {
                                            className: se,
                                            onClick: () => E.onGroupClick(e),
                                            onMouseEnter: c.$.playHighlight,
                                        },
                                        s().createElement('div', { className: l()(ie, _ && oe) }),
                                        s().createElement(
                                            'div',
                                            { className: ue },
                                            s().createElement('div', { className: l()(ce, t && de) }),
                                            s().createElement(
                                                'div',
                                                { className: le },
                                                R.strings.menu.tank_params.$dyn(e),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: Ee },
                                                g && s().createElement('div', { className: pe }),
                                                s().createElement(P, { buffIconType: d, className: be }),
                                                u && s().createElement(x.w, { classMix: l()(he, ve), text: u }),
                                                s().createElement(x.w, { classMix: he, text: o }),
                                            ),
                                        ),
                                        s().createElement(X, i),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: l()(me, t && _e) },
                                    I.UI(n, (e) => s().createElement(ae, fe({ key: e.id }, e))),
                                    p && s().createElement('div', { className: ge }),
                                    I.UI(a, (e) => s().createElement(ae, fe({ key: e.id }, e))),
                                ),
                            );
                        },
                    ),
                    Ce = {
                        base: 'VehicleParams_base_3b',
                        base__bg: 'VehicleParams_base__bg_c4',
                        scroll: 'VehicleParams_scroll_59',
                        content: 'VehicleParams_content_09',
                        barBase: 'VehicleParams_barBase_6f',
                    };
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const ye = {
                        settings: {
                            step: { type: 'fixed', value: 48, clampedArrowStepTimeout: 0 },
                            animationConfig: { tension: 0, friction: 0 },
                        },
                    },
                    ke = (0, f.Pi)(({ showBackground: e = !0, className: t }) => {
                        const n = B().model,
                            a = (0, r.useState)(!1),
                            i = a[0],
                            o = a[1],
                            u = n.groups.get(),
                            c = (0, N.c4)(ye);
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    const e = c.getContainerSize(),
                                        t = c.getWrapperSize();
                                    e && t && o(e > t);
                                };
                                return (
                                    c.events.on('recalculateContent', e),
                                    () => {
                                        c.events.off('recalculateContent', e);
                                    }
                                );
                            }, [c]),
                            s().createElement(
                                'div',
                                { className: l()(Ce.base, e && Ce.base__bg, t) },
                                s().createElement(
                                    S.X.Vertical.Area.Default,
                                    {
                                        api: c,
                                        barClassNames: { base: Ce.barBase },
                                        scrollClassName: Ce.scroll,
                                        scrollClassNames: { content: Ce.content },
                                    },
                                    s().createElement(
                                        'div',
                                        { className: Ce.groups },
                                        I.UI(u, (e) =>
                                            s().createElement(Ae, Fe({ key: e.id }, e, { isScrollable: i })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    De = (0, r.memo)(function (e) {
                        const t = (0, r.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return s().createElement(w, { options: t }, s().createElement(ke, e));
                    }),
                    we = {
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
                    Be = [
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
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                class Ne extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, c.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, c.G)(this.props.soundClick);
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
                            i = e.type,
                            o = e.classNames,
                            u = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
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
                                })(e, Be)),
                            g = l()(we.base, we[`base__${i}`], we[`base__${r}`], null == o ? void 0 : o.base),
                            E = l()(we.icon, we[`icon__${i}`], we[`icon__${r}`], null == o ? void 0 : o.icon),
                            p = l()(we.glow, null == o ? void 0 : o.glow),
                            b = l()(we.caption, we[`caption__${i}`], null == o ? void 0 : o.caption),
                            h = l()(we.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Se(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(u),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== i && s().createElement('div', { className: we.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: p })),
                            s().createElement('div', { className: b }, t),
                            a && s().createElement('div', { className: h }, a),
                        );
                    }
                }
                Ne.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ie = ({ onClick: e }) =>
                        s().createElement(Ne, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    Te = 'common_close_0e',
                    xe = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        s().createElement(Ne, {
                            onClick: e,
                            classNames: { base: Te },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    Le = 'TopButtons_base_ef',
                    Re = 'TopButtons_leftButtons_9e',
                    Oe = 'TopButtons_rightButtons_33',
                    Pe = s().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: n,
                        onAboutClick: a,
                        onCloseClick: r,
                        className: i,
                        classNames: o,
                    }) {
                        return s().createElement(
                            'div',
                            { className: l()(Le, i) },
                            e &&
                                n &&
                                s().createElement(
                                    'div',
                                    { className: l()(Re, null == o ? void 0 : o.leftButtons) },
                                    s().createElement(Ne, { onClick: n, caption: e, type: 'back' }),
                                ),
                            s().createElement(
                                'div',
                                { className: l()(Oe, null == o ? void 0 : o.rightButtons) },
                                a && s().createElement(Ie, { onClick: a }),
                                r && s().createElement(xe, { onClick: r, label: t }),
                            ),
                        );
                    });
                var Me = n(5716),
                    He = n(9690),
                    We = n(3649),
                    ze = n(8032);
                const $e = {
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
                let je, Ve;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(je || (je = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(Ve || (Ve = {}));
                const Ge = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: r,
                        tags: i = '',
                        size: o = je.extraSmall,
                        type: u = Ve.colored,
                        className: c,
                        classNames: d,
                        isShortName: m = !1,
                    }) => {
                        const _ = `${(0, We.BN)(a)}${e ? '_elite' : ''}`,
                            g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return s().createElement(
                            'div',
                            {
                                className: l()(
                                    $e.base,
                                    $e[`base__size${(0, We.e)(o)}`],
                                    $e[`base__type${(0, We.e)(u)}`],
                                    c,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: l()($e.level, null == d ? void 0 : d.level) },
                                (0, He.HG)(r),
                            ),
                            s().createElement('div', {
                                className: l()(
                                    $e.type,
                                    e && $e[`type__elite${(0, We.e)(o)}`],
                                    $e[`type__${o}`],
                                    null == d ? void 0 : d.typeIcon,
                                ),
                                style: a ? { backgroundImage: `url(${g})` } : void 0,
                            }),
                            (0, ze.f)(i, Me.f3) && s().createElement('div', { className: $e.premiumIGR }),
                            s().createElement(
                                'div',
                                { className: l()($e.name, null == d ? void 0 : d.name) },
                                m ? n : t,
                            ),
                        );
                    },
                    Ze = 'VehicleParamsDecorator_base_32',
                    Ue = 'VehicleParamsDecorator_vehicleInfo_02',
                    Ke = 'VehicleParamsDecorator_tankName_ac',
                    qe = 'VehicleParamsDecorator_tankLvl_26',
                    Ye = 'VehicleParamsDecorator_type_e7',
                    Qe = 'VehicleParamsDecorator_tip_6c',
                    Xe = ['className', 'children', 'isPerkTipShown', 'tipText'];
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                const et = (e) => {
                    let t = e.className,
                        n = e.children,
                        a = e.isPerkTipShown,
                        r = e.tipText,
                        i = void 0 === r ? R.strings.crew.vehicleParamsDecorator.perkTip() : r,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, Xe);
                    return s().createElement(
                        'div',
                        { className: l()(Ze, t) },
                        s().createElement(
                            Ge,
                            Je({ className: Ue, classNames: { name: Ke, level: qe, typeIcon: Ye } }, o, {
                                isShortName: !0,
                            }),
                        ),
                        n,
                        a && s().createElement('div', { className: Qe }, i),
                    );
                };
                var tt = n(4119),
                    nt = n(4598),
                    at = n(1612),
                    rt = n(9174),
                    st = n(3946);
                const it = (0, A.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'currentTabId',
                                        'background',
                                        'nation',
                                        'backButtonLabel',
                                        'isContentVisible',
                                    ]),
                                    {
                                        tabs: e.array('tabs'),
                                        vehicleInfo: e.object('vehicleInfo'),
                                        isTankmanContainerTTCVisible: rt.LO.box(!1),
                                    },
                                ),
                                n = (0, st.Om)(() => I.UI(t.tabs.get(), nt.yR)),
                                a = (0, st.Om)(() => {
                                    const e = n();
                                    return Boolean(e.length) && t.currentTabId.get() === e[0].id;
                                });
                            return Object.assign({}, t, { computes: { getTabs: n, isTTCPerkTipShown: a } });
                        },
                        ({ externalModel: e, model: t }) =>
                            Object.assign(
                                {
                                    close: e.createCallbackNoArgs('onClose'),
                                    closeWithEsc: e.createCallback(() => ({ isFromEscape: !0 }), 'onClose'),
                                    back: e.createCallbackNoArgs('onBack'),
                                    hangar: e.createCallbackNoArgs('onHangar'),
                                    tabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
                                    aboutCrew: e.createCallbackNoArgs('onAbout'),
                                },
                                (0, at.h)({
                                    setTankmanContainerTTCVisible: (e) => t.isTankmanContainerTTCVisible.set(e),
                                }),
                            ),
                    ),
                    ot = it[0],
                    ut = it[1],
                    lt = 'Spinner_base_87',
                    ct = 'Spinner_caption_cf',
                    dt = 'Spinner_gear_c4',
                    mt = 'Spinner_logo_bf',
                    _t = ({ message: e, className: t, classNames: n }) =>
                        s().createElement(
                            'div',
                            { className: l()(lt, t) },
                            e && s().createElement('div', { className: l()(ct, null == n ? void 0 : n.caption) }, e),
                            s().createElement('div', { className: l()(dt, null == n ? void 0 : n.gear) }),
                            s().createElement('div', { className: l()(mt, null == n ? void 0 : n.logo) }),
                        );
                var gt = n(3457);
                const Et = 'Error_base_46',
                    pt = 'Error_alertIcon_04',
                    bt = 'Error_errorCaption_f2',
                    ht = 'Error_button_cd',
                    vt = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: n }) =>
                        s().createElement(
                            'div',
                            { className: Et },
                            s().createElement('div', { className: pt }),
                            s().createElement('div', { className: bt }, n),
                            s().createElement(gt.u5, { size: gt.qE.medium, mixClass: ht, onClick: t }, e),
                        );
                vt.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const ft = 'Waiting_base_c5',
                    At = 'Waiting_blackOverlay_55',
                    Ct = ({
                        message: e,
                        isError: t,
                        errorMessage: n,
                        errorBtnLabel: a,
                        errorBtnClickHandler: i,
                        overlayAlpha: o,
                    }) => {
                        const u = s().createRef();
                        return (
                            (0, r.useEffect)(() => {
                                const e = u.current;
                                e && o && (e.style.opacity = o);
                            }, [u, o]),
                            s().createElement(
                                'div',
                                { className: ft },
                                s().createElement('div', { className: At, ref: u }),
                                t
                                    ? s().createElement(vt, {
                                          errorBtnLabel: a,
                                          errorMessage: n,
                                          errorBtnClickHandler: i,
                                      })
                                    : s().createElement(_t, { message: e }),
                            )
                        );
                    };
                Ct.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                var Ft = n(1401),
                    yt = n(4591),
                    kt = n(2418);
                const Dt = 'ViewMapper_base_42',
                    wt = {
                        [yt.PERSONAL_FILE_VIEW_RES_ID]: s().lazy(() => Promise.resolve().then(n.bind(n, 4591))),
                        [Ft.PERSONAL_DATA_RES_ID]: s().lazy(() => Promise.resolve().then(n.bind(n, 1401))),
                        [kt.SERVICE_RECORD_RES_ID]: s().lazy(() => Promise.resolve().then(n.bind(n, 2418))),
                    },
                    Bt = ({ id: e, setTTCVisibility: t, className: n }) => {
                        const a = wt[e];
                        return s().createElement(
                            'div',
                            { className: l()(Dt, n) },
                            s().createElement(
                                r.Suspense,
                                {
                                    fallback: s().createElement(Ct, {
                                        errorBtnClickHandler: nt.ZT,
                                        message: R.strings.waiting.loading(),
                                        overlayAlpha: '0.5',
                                    }),
                                },
                                s().createElement(a, { setTTCVisibility: t }),
                            ),
                        );
                    },
                    St = 'TankmanContainerApp_base_42',
                    Nt = 'TankmanContainerApp_fadeOutOverlay_8d',
                    It = 'TankmanContainerApp_fadeOutOverlay__hidden_2a',
                    Tt = 'TankmanContainerApp_content_e4',
                    xt = 'TankmanContainerApp_tabs_59',
                    Lt = 'TankmanContainerApp_widget_f9',
                    Rt = 'TankmanContainerApp_ttc_a4',
                    Ot = 'TankmanContainerApp_ttc__withPerk_39',
                    Pt = 'TankmanContainerApp_flag_88';
                function Mt() {
                    return (
                        (Mt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Mt.apply(this, arguments)
                    );
                }
                const Ht = (0, f.Pi)(() => {
                    const e = ut(),
                        t = e.model,
                        n = e.controls,
                        a = t.currentTabId.get(),
                        i = t.background.get(),
                        o = t.computes.getTabs(),
                        u = t.computes.isTTCPerkTipShown();
                    var c;
                    (c = n.closeWithEsc), v(b.n.ESCAPE, c);
                    const d = (0, r.useMemo)(
                            () =>
                                o.map(({ counter: e, title: t, id: n }) =>
                                    Object.assign(
                                        { id: n, title: t },
                                        e > 0 ? { notification: { type: 'value', value: e > 99 ? '99+' : e } } : {},
                                    ),
                                ),
                            [o],
                        ),
                        m = { backgroundImage: i && `url('${i}')` };
                    return s().createElement(
                        'div',
                        { style: m, className: St },
                        s().createElement(
                            'div',
                            { className: Tt },
                            s().createElement('div', {
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.crew.flags.$dyn(t.nation.get())})`,
                                },
                                className: Pt,
                            }),
                            s().createElement(Bt, { id: a, setTTCVisibility: n.setTankmanContainerTTCVisible }),
                            s().createElement('div', { className: Lt }, s().createElement(tt.O, null)),
                            t.isTankmanContainerTTCVisible.get() &&
                                s().createElement(
                                    'div',
                                    { className: l()(Rt, u && Ot) },
                                    s().createElement(
                                        et,
                                        Mt({}, t.vehicleInfo.get(), { isPerkTipShown: u }),
                                        s().createElement(De, {
                                            showBackground: !1,
                                            resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        }),
                                    ),
                                ),
                            s().createElement(E, { onClick: n.tabChange, tabs: d, active: a, className: xt }),
                            s().createElement(Pe, {
                                onBackClick: n.back,
                                backButtonLabel: t.backButtonLabel.get(),
                                onAboutClick: n.aboutCrew,
                                onCloseClick: n.hangar,
                                closeButtonLabel: R.strings.crew.common.navigation.toGarage(),
                            }),
                        ),
                        s().createElement('div', { style: m, className: l()(Nt, t.isContentVisible.get() && It) }),
                    );
                });
                engine.whenReady.then(() => {
                    o().render(
                        s().createElement(a.z, null, s().createElement(ot, null, s().createElement(Ht, null))),
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
                            E = g ? { tooltipId: i.M4 } : { tooltipId: i.Br, skillEfficiency: e, tankmanID: t };
                        return d().createElement(
                            s.t,
                            { targetId: a, args: E, isEnabled: t !== o.y$ },
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
            5640: (e, t, n) => {
                'use strict';
                n.d(t, { $: () => u, U: () => c });
                var a = n(6483),
                    r = n.n(a),
                    s = n(6179),
                    i = n.n(s),
                    o = n(8236);
                let u;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(u || (u = {}));
                const l = {
                        [u.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [u.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [u.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    c = i().memo(({ nation: e, size: t, className: n }) =>
                        i().createElement('div', {
                            className: r()(o.Z.base, o.Z[`base__${t}`], n),
                            style: { backgroundImage: `url('${l[t].$dyn(e)}')` },
                        }),
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
                    E = 'NumberRangeWithLabel_counter_00',
                    p = 'NumberRangeWithLabel_counterGlow_1f',
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
                                { className: E },
                                i().createElement(m, { from: o, to: u }),
                                t &&
                                    i().createElement('div', {
                                        style: l,
                                        className: r()(p, null == a ? void 0 : a.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            1530: (e, t, n) => {
                'use strict';
                n.d(t, { M: () => c, S: () => l });
                var a = n(6483),
                    r = n.n(a),
                    s = n(3649),
                    i = n(6179),
                    o = n.n(i),
                    u = n(8386);
                let l;
                !(function (e) {
                    (e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big');
                })(l || (l = {}));
                const c = o().memo(function ({ role: e, size: t = l.c30x30, className: n }) {
                    const a = (0, i.useMemo)(() => {
                        try {
                            var n;
                            const a =
                                null == (n = R.images.gui.maps.icons.tankmen.roles.$dyn(t))
                                    ? void 0
                                    : n.$dyn((0, s.BN)(e));
                            if (!a) throw Error;
                            return { backgroundImage: `url(${a})` };
                        } catch (t) {
                            console.error('Cant find resource in RoleIcon: ', e);
                        }
                    }, [e, t]);
                    return o().createElement('div', { style: a, className: r()(u.Z.base, u.Z[`base__${t}`], n) });
                });
            },
            9216: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => d });
                var a = n(6483),
                    r = n.n(a),
                    s = n(794),
                    i = n(7701),
                    o = n(6179),
                    u = n.n(o),
                    l = n(7734);
                let c;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(c || (c = {}));
                const d = ({ children: e, className: t, classNames: n }) => {
                    const a = (0, o.useState)(c.None),
                        d = a[0],
                        m = a[1],
                        _ = d === c.Both,
                        g = (0, i.c4)();
                    return (
                        (0, o.useEffect)(() => {
                            const e = () => {
                                const e = g.getBounds()[1],
                                    t = g.animationScroll.scrollPosition.get();
                                0 === e
                                    ? m(c.None)
                                    : t > 1 && t < e - 21
                                      ? m(c.Both)
                                      : t <= 1
                                        ? m(c.Bottom)
                                        : t >= e - 21 && m(c.Top);
                            };
                            return (
                                g.events.on('change', e),
                                g.events.on('resizeHandled', e),
                                g.events.on('recalculateContent', e),
                                () => {
                                    g.events.off('change', e),
                                        g.events.off('resizeHandled', e),
                                        g.events.off('recalculateContent', e);
                                }
                            );
                        }, [g]),
                        u().createElement(
                            'div',
                            { className: r()(l.Z.base, t) },
                            u().createElement(
                                s.X.Vertical.Default,
                                {
                                    api: g,
                                    barClassNames: { base: r()(l.Z.bar, null == n ? void 0 : n.bar) },
                                    scrollClassNames: { content: r()(l.Z.content, null == n ? void 0 : n.content) },
                                },
                                e,
                            ),
                            (d === c.Top || _) &&
                                u().createElement(
                                    'div',
                                    { className: r()(l.Z.fadeContainerTop, null == n ? void 0 : n.lips) },
                                    u().createElement('div', { className: l.Z.fade }),
                                ),
                            (d === c.Bottom || _) &&
                                u().createElement(
                                    'div',
                                    { className: r()(l.Z.fadeContainerBottom, null == n ? void 0 : n.lips) },
                                    u().createElement('div', { className: l.Z.fade }),
                                ),
                        )
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
                    E = n(5855),
                    p = n(3591);
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
                    size: o = E.Ow.c24x24,
                    collapseType: h = E.t6.None,
                    isSkillTooltipEnabled: v = !1,
                    isAcceleratedTrainingVisible: f = !1,
                    isNewSkillAnimated: A = !1,
                    isEfficiencyVisible: C = !1,
                    isBonusSkillsVisible: F = !0,
                    tooltipsTargetId: y = R.invalid('resId'),
                    tooltipArgs: k,
                    blinkStyle: D,
                    children: w,
                }) => {
                    const B = e.majorSkills,
                        S = e.bonusSkills,
                        N = e.skillsEfficiency,
                        I = (null == t ? void 0 : t.skillsEfficiency) || N,
                        T = (0, c.Y4)(N),
                        x = void 0 !== t && t.skillsEfficiency !== N,
                        L = T !== c.H$.Normal || C || x,
                        O = null == t ? void 0 : t.majorSkills,
                        P = null == t ? void 0 : t.bonusSkills,
                        M = P || S,
                        H = i.lN(M),
                        W = F && M.length > 0,
                        z = A || void 0 !== t,
                        $ = (null == O ? void 0 : O.length) === s.GT,
                        j = (0, p.Ld)(h, M.length, L, T !== c.H$.Low && void 0 !== H && H.level < s.I),
                        V = {
                            size: o,
                            efficiencyState: T,
                            tooltipData: { targetId: y, isEnabled: v, tankmanID: a, args: k },
                        };
                    return u().createElement(
                        'div',
                        { className: r()(g.Z.base, g.Z[`base__${o}`], null == n ? void 0 : n.base) },
                        L &&
                            u().createElement(
                                d.r,
                                { blinkStyle: D, isEnabled: x && z },
                                u().createElement(l.A, {
                                    efficiencyValue: I,
                                    tankmanID: a,
                                    className: g.Z.efficiency,
                                    size: (0, p.h7)(o, W),
                                    targetId: y,
                                }),
                            ),
                        w,
                        u().createElement(
                            'div',
                            { className: g.Z.rows },
                            z
                                ? u().createElement(
                                      u().Fragment,
                                      null,
                                      u().createElement(
                                          m.s,
                                          b(
                                              {
                                                  skills: B,
                                                  possibleSkills: O,
                                                  blinkStyle: D,
                                                  isAcceleratedTrainingVisible: f,
                                                  isNewSkillAnimated: A,
                                                  isSkillsEfficiencyLearning: x,
                                              },
                                              V,
                                          ),
                                      ),
                                      W &&
                                          u().createElement(
                                              m.s,
                                              b(
                                                  {
                                                      skills: S,
                                                      skillType: E.W.Bonus,
                                                      possibleSkills: P,
                                                      className: g.Z.bonusRow,
                                                      collapseLayout: j,
                                                      blinkStyle: D,
                                                      isNewSkillAnimated: A,
                                                      isAllMajorSkillsLearned: $,
                                                  },
                                                  V,
                                              ),
                                          ),
                                  )
                                : u().createElement(
                                      u().Fragment,
                                      null,
                                      u().createElement(_.X, b({ skills: B, isAcceleratedTrainingVisible: f }, V)),
                                      W &&
                                          u().createElement(
                                              _.X,
                                              b(
                                                  {
                                                      skills: S,
                                                      skillType: E.W.Bonus,
                                                      className: g.Z.bonusRow,
                                                      collapseLayout: j,
                                                  },
                                                  V,
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
                    E = n(5855),
                    p = n(1890);
                const b = d().memo(function ({ type: e, index: t, totalAmount: n, className: a, size: b }) {
                    const h = (0, c.useState)(_.yZ.Stop),
                        v = h[0],
                        f = h[1],
                        A = (0, l.V)(),
                        C =
                            b === E.Ow.c44x44
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
                        F = (0, i.q)(C),
                        y = b === E.Ow.c44x44 ? 60 : 36,
                        k = (0, m.useSpring)(
                            () => ({
                                from: { x: 0 },
                                to: { x: u.O.view.remToPx(y) },
                                config: { duration: 300, easing: g.qb },
                                delay: 600 - 100 * t,
                            }),
                            [t, y, A],
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
                                { style: k, className: r()(p.Z.base, p.Z[`base__${b}`], a) },
                                d().createElement(
                                    'div',
                                    { className: p.Z.icon },
                                    d().createElement(s.At, {
                                        width: C.width,
                                        height: C.height,
                                        frameCount: C.frameCount,
                                        getImageSource: F,
                                        loop: !1,
                                        state: v,
                                        style: { transform: `scale(${A})` },
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
                    E = n(6177),
                    p = n(7713),
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
                    tooltipData: A,
                    blinkStyle: C,
                    isSkillsEfficiencyLearning: F = !1,
                    isAllMajorSkillsLearned: y = !1,
                    isNewSkillAnimated: k = !1,
                    className: D,
                }) => {
                    const w = void 0 === n ? e : n,
                        B = (0, s.D9)(e),
                        S = (0, s.D9)(w),
                        N = B && i.lN(B),
                        I = i.lN(e),
                        T = (0, g.dv)(w),
                        x = i.lN(w),
                        L = n ? e.length - n.length : 0,
                        R = v !== m.H$.Low || F,
                        O = (0, g.Nn)(w);
                    return c().createElement(
                        'div',
                        { className: r()(h.Z.base, h.Z[`base__${f}`], h.Z[`base__collapse${(0, u.e)(l)}`], D) },
                        (0, g.oo)(e, B, w, S, (e, n, a) => {
                            const s = (0, g.mg)(e);
                            return c().createElement(p.k, {
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
                                tooltipData: A,
                                blinkStyle: C,
                                isNewSkillAnimated: k,
                                className: r()(
                                    h.Z.skill,
                                    h.Z[`skill__state${(0, u.e)(s)}`],
                                    e === x && h.Z.skill__last,
                                    e === T && h.Z.skill__lastLearnedSkill,
                                ),
                            });
                        }),
                        R &&
                            c().createElement(b.H, {
                                skillsAmountDiff: L,
                                size: f,
                                wasLearned: N && I && N.level !== I.level,
                                skillType: t,
                                isAllMajorSkillsLearned: y,
                                skill: I,
                                possibleSkill: x,
                                blinkStyle: C,
                                className: h.Z.level,
                            }),
                        a &&
                            c().createElement(d.L, {
                                classMix: h.Z.acceleratedTrainingIcon,
                                targetId: null == A ? void 0 : A.targetId,
                            }),
                        L > 0 &&
                            (0, o.K)(L, (e) =>
                                c().createElement(E.I, {
                                    key: e,
                                    index: e,
                                    totalAmount: L,
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
                    E = n(9561),
                    p = n(2202),
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
                    isAcceleratedTrainingVisible: A,
                }) => {
                    const C = i.lN(e),
                        F = (0, _.dv)(e),
                        y = a !== d.H$.Low && (null == C ? void 0 : C.level) !== s.I;
                    return l().createElement(
                        'div',
                        { className: r()(b.Z.base, b.Z[`base__${u}`], b.Z[`base__collapse${(0, o.e)(t)}`], f) },
                        i.UI(e, (e, t) => {
                            const s = (0, _.mg)(e);
                            return l().createElement(
                                p.O,
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
                                        e === C && b.Z.skill__last,
                                        e === F && b.Z.skill__lastLearnedSkill,
                                    ),
                                },
                                l().createElement(g.U, h({ size: u, type: n, efficiencyState: a, skillState: s }, e)),
                            );
                        }),
                        y && C && l().createElement(E.T, { skillLevel: C.level, className: b.Z.level }),
                        A &&
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
                    className: E,
                }) => {
                    const p = _ || m,
                        b = void 0 !== m && void 0 !== _ ? _.level - m.level : 0,
                        h = e > 0,
                        v = e < 0 || b > 0;
                    return !p ||
                        (p.level === a.I && 0 === b) ||
                        ((null == _ ? void 0 : _.level) === a.I && n === i.W.Bonus && b > 0 && !d)
                        ? null
                        : h || (b < 0 && 0 === e)
                          ? s().createElement(u.G, { size: t, level: p.level, withSlideOut: h })
                          : s().createElement(
                                l.Y,
                                { isEnabled: Boolean(r) },
                                s().createElement(
                                    o.r,
                                    { blinkStyle: g, isEnabled: v },
                                    s().createElement(c.T, { skillLevel: p.level, isHighlighted: v, className: E }),
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
                n.d(t, { k: () => E });
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
                    E = ({
                        index: e,
                        skill: t,
                        previousSkill: n,
                        skillState: r,
                        skillType: E,
                        size: p,
                        efficiencyState: b,
                        tooltipData: h,
                        skillsSignature: v,
                        blinkStyle: f,
                        isNewSkillAnimated: A = !1,
                        skillAnimationType: C = i.Qm.None,
                        className: F,
                    }) => {
                        const y = C === i.Qm.Blink || C === i.Qm.SlideOutAndBlink,
                            k = C === i.Qm.SlideOutAndBlink || C === i.Qm.SlideOut,
                            D = C === i.Qm.FadeIn,
                            w = {
                                skillIndex: e,
                                name: t.name,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: h,
                                skillType: E,
                            };
                        return A && t.name === a.jw && p === i.Ow.c24x24
                            ? s().createElement(
                                  d.O,
                                  _({}, w, { className: F }),
                                  s().createElement(o.E, { type: E, state: r }),
                              )
                            : s().createElement(
                                  s().Fragment,
                                  null,
                                  n &&
                                      k &&
                                      s().createElement(
                                          c.w,
                                          { size: p, className: F, key: n.name },
                                          s().createElement(
                                              l.r,
                                              { blinkStyle: f, isEnabled: y },
                                              s().createElement(
                                                  m.U,
                                                  _({ size: p, type: E, efficiencyState: b, skillState: r }, n),
                                              ),
                                          ),
                                      ),
                                  s().createElement(
                                      u.L,
                                      {
                                          size: p,
                                          skillsSignature: v,
                                          className: F,
                                          animationType: g(C === i.Qm.ScaleUp, D),
                                      },
                                      s().createElement(
                                          d.O,
                                          w,
                                          s().createElement(
                                              l.r,
                                              { blinkStyle: f, isEnabled: y },
                                              s().createElement(
                                                  m.U,
                                                  _({ size: p, type: E, efficiencyState: b, skillState: r }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    };
            },
            1606: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => E });
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
                    E = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: n,
                        type: a,
                        icon: o,
                        name: E,
                        skillState: p,
                        hasInstruction: b,
                        className: h,
                    }) => {
                        const v = (0, m.Ot)(E, p, b, t, n),
                            f = (!b && n === c.H$.Untrained) || t,
                            A = o === s.jw;
                        return u().createElement(
                            'div',
                            {
                                className: r()(
                                    _.Z.base,
                                    _.Z[`base__type${(0, i.e)(a)}`],
                                    _.Z[`base__state${(0, i.e)(p)}`],
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
                            A && p === d.Lm.Learned && u().createElement('div', { className: _.Z.newSkillHighLight }),
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
                    Ld: () => E,
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
                    E = (e, t, n, a) => {
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
                    p = (e, t) => {
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
                                E = p(e, d),
                                h = g ? b(e, d) : l.get(m),
                                v = g ? b(t, d) : o.get(m),
                                f = p(n, d - 1),
                                A = p(a, d),
                                C = p(a, d + 1);
                            let F = u.Qm.None;
                            return (
                                c || m !== C || f === A || g || E !== r.jw
                                    ? g && d === n.length - 1 && c
                                        ? (F = u.Qm.FadeIn)
                                        : (!g && !l.has(m)) || (void 0 === E && g) || (h !== _ && _ === r.I)
                                          ? (F = u.Qm.Blink)
                                          : v !== h && (F = u.Qm.ScaleUp)
                                    : ((c = !0), (F = l.has(m) ? u.Qm.SlideOut : u.Qm.SlideOutAndBlink)),
                                i(s, F, d)
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
                        E = e.size,
                        p = void 0 === E ? i.q.small : E,
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
                        l().createElement(s.u5, m({ type: g, size: p, mixClass: c.Z.button }, v), u),
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
                n.d(t, { BH: () => i, Fs: () => o, ei: () => a, qb: () => r, to: () => s });
                const a = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    r = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    s = (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2),
                    i = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    o = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
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
            1401: (e, t, n) => {
                'use strict';
                n.r(t), n.d(t, { PERSONAL_DATA_RES_ID: () => He, default: () => We });
                var a = n(6179),
                    r = n.n(a),
                    s = n(1037),
                    i = n(5415),
                    o = n(6483),
                    u = n.n(o);
                const l = {
                    base: 'ListHeader_base_ad',
                    title: 'ListHeader_title_a8',
                    base__memberChange: 'ListHeader_base__memberChange_c2',
                    base__tankChange: 'ListHeader_base__tankChange_fb',
                    base__personalData: 'ListHeader_base__personalData_aa',
                };
                let c;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(c || (c = {}));
                const d = ({ title: e, theme: t = c.Barracks, className: n, children: a }) =>
                    r().createElement(
                        'div',
                        { className: u()(l.base, l[`base__${t}`], n) },
                        r().createElement('div', { className: l.title }, e),
                        a,
                    );
                var m = n(5801),
                    _ = n(2106),
                    g = n(3403),
                    E = n(3457),
                    p = n(6373),
                    b = n(8018);
                const h = 'WarningText_base_13',
                    v = 'WarningText_icon_5d',
                    f = 'WarningText_label_c6',
                    A = r().memo(function ({ label: e }) {
                        return r().createElement(
                            'div',
                            { className: h },
                            r().createElement('div', { className: v }),
                            r().createElement('div', { className: f }, e),
                        );
                    }),
                    C = 'ListEmptyState_base_ae',
                    F = 'ListEmptyState_content_1e',
                    y = 'ListEmptyState_shadow_ae',
                    k = 'ListEmptyState_buttonWrapper_78',
                    D = 'ListEmptyState_button_f1',
                    w = r().memo(function ({
                        warningText: e,
                        buttonType: t = E.L$.secondary,
                        tooltipArgs: n = b.Xd,
                        isBtnDisabled: a = !1,
                        className: s,
                        onClick: i,
                        children: o,
                    }) {
                        return r().createElement(
                            'div',
                            { className: u()(C, s) },
                            r().createElement(
                                'div',
                                { className: F },
                                r().createElement('div', { className: y }),
                                r().createElement(A, { label: e }),
                                o &&
                                    r().createElement(
                                        'div',
                                        { className: k },
                                        r().createElement(
                                            p.i,
                                            n,
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    E.u5,
                                                    { size: E.qE.small, type: t, disabled: a, onClick: i, mixClass: D },
                                                    o,
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var B = n(794),
                    S = n(9653);
                var N = n(3138),
                    I = n(4385);
                const T = ({
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
                    x = (e) => {
                        const t = e.className,
                            n = e.children,
                            a = e.itemsAmountPerRow,
                            s = e.visibleRowsAmount,
                            i = e.startRowIndex,
                            o = e.amount,
                            u = i * a,
                            l = Math.min(s * a, o - u);
                        return r().createElement(
                            'div',
                            { className: t, style: T(e) },
                            (0, I.K)(l, (e) => n(u + e)),
                        );
                    },
                    L = 'VirtualGrid_base_52',
                    O = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: n,
                        children: s,
                        api: i,
                        classNames: o,
                        preloadedRows: l = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = i.scrollApi,
                            _ = (0, a.useRef)(0),
                            g = (0, a.useState)(0),
                            E = g[0],
                            p = g[1],
                            b = (0, a.useState)(null),
                            h = b[0],
                            v = b[1],
                            f = (0, a.useState)(null),
                            A = f[0],
                            C = f[1];
                        return (
                            (0, a.useEffect)(() => {
                                const t = (t) => {
                                    if (!h) return;
                                    const a = Math.floor((N.O.view.pxToRem(t.value.scrollPosition) - c) / n + 1),
                                        r = Math.ceil(e / h),
                                        s = Math.max(0, Math.min(a - l, r));
                                    p(s), i.startRowIndexChanged(s);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [i, m, n, c, h, e, l]),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                a = m.contentRef.current.getBoundingClientRect(),
                                                r =
                                                    N.O.view.pxToRem(a.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                s = Math.floor(r / t),
                                                o = Math.ceil(N.O.view.pxToRem(a.height) / n) + 2 * l;
                                            (_.current = s), v(s), C(o), i.layoutCalculated(s, o);
                                        }
                                    },
                                    a = () => {
                                        const t = _.current;
                                        e(), i.scrollToIndex(E * t);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', a),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', a);
                                    }
                                );
                            }, [i, m, n, t, l, E]),
                            (0, a.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    h && m.applyScroll(Math.floor(e / h) * n + c, { immediate: t });
                                };
                                return i.events.on('scrollToIndex', e), () => i.events.off('scrollToIndex', e);
                            }, [i, n, h, c, m]),
                            r().createElement(
                                B.X.Vertical.Default,
                                {
                                    api: m,
                                    className: null == o ? void 0 : o.scroll,
                                    areaClassName: null == o ? void 0 : o.areaClassName,
                                    scrollClassName: null == o ? void 0 : o.scrollClassName,
                                    scrollClassNames: {
                                        content: null == o ? void 0 : o.content,
                                        wrapper: null == o ? void 0 : o.wrapper,
                                    },
                                },
                                null !== h &&
                                    null !== A &&
                                    r().createElement(
                                        x,
                                        {
                                            className: u()(L, null == o ? void 0 : o.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: h,
                                            visibleRowsAmount: A,
                                            startRowIndex: E,
                                            cellHeight: n,
                                        },
                                        s,
                                    ),
                            )
                        );
                    },
                    P = 'VirtualGridWithFade_scrollAreaFade_94',
                    M = ['api', 'children', 'classNames'];
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
                    let t = e.api,
                        n = e.children,
                        s = e.classNames,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, M);
                    const o = (0, a.useState)(!0),
                        l = o[0],
                        c = o[1],
                        d = t.scrollApi;
                    return (
                        (0, a.useEffect)(() => {
                            const e = () => {
                                const e = d.getBounds()[1];
                                c(Math.abs(e - d.animationScroll.scrollPosition.goal) > 0.1);
                            };
                            return (
                                d.events.on('change', e),
                                d.events.on('recalculateContent', e),
                                () => {
                                    d.events.off('change', e), d.events.off('recalculateContent', e);
                                }
                            );
                        }, [d]),
                        r().createElement(
                            O,
                            H(
                                {
                                    api: t,
                                    classNames: Object.assign({}, s, {
                                        scrollClassName: u()(null == s ? void 0 : s.scrollClassName, l && P),
                                    }),
                                },
                                i,
                            ),
                            n,
                        )
                    );
                };
                var z = n(3215),
                    $ = n(9480),
                    j = n(3946);
                const V = (0, z.q)()(
                        ({ observableModel: e }) => {
                            const t = e.array('cardList'),
                                n = (0, j.Om)((e) => {
                                    const n = $.U2(t.get(), e);
                                    if (n) return Object.assign({}, n, { restrictions: [...$.tP(n.restrictions)] });
                                });
                            return Object.assign({ cardList: t }, e.primitives(['isCardsLocked']), {
                                computes: { getCard: n },
                            });
                        },
                        ({ externalModel: e }) => ({
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                            selectCard: e.createCallback((e, t) => ({ cardID: e, isSkin: t }), 'onCardSelected'),
                            markAsViewed: e.createCallback((e) => ({ cardID: e }), 'onNewCardViewed'),
                        }),
                    ),
                    G = V[0],
                    Z = V[1];
                let U, K, q;
                !(function (e) {
                    (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                })(U || (U = {})),
                    (function (e) {
                        (e.Document = 'document'), (e.Skin = 'skin');
                    })(K || (K = {})),
                    (function (e) {
                        (e.Document = 'document'), (e.SuitableSkin = 'suitableSkin');
                    })(q || (q = {}));
                var Y = n(7727),
                    Q = n(3649),
                    X = n(5640);
                const J = 'ListCardAlert_base_52',
                    ee = 'ListCardAlert_glow_1c',
                    te = 'ListCardAlert_icon_d2',
                    ne = ({ className: e, tooltipArgs: t }) =>
                        r().createElement(
                            'div',
                            { className: u()(J, e) },
                            r().createElement('div', { className: ee }),
                            t
                                ? r().createElement(p.i, t, r().createElement('div', { className: te }))
                                : r().createElement('div', { className: te }),
                        ),
                    ae = {
                        base: 'BaseCard_base_b0',
                        base__default: 'BaseCard_base__default_2d',
                        base__selected: 'BaseCard_base__selected_45',
                        base__disabled: 'BaseCard_base__disabled_47',
                        base__alertCardLocked: 'BaseCard_base__alertCardLocked_df',
                        selectedFrame: 'BaseCard_selectedFrame_0a',
                        flag: 'BaseCard_flag_b5',
                        icon: 'BaseCard_icon_f4',
                        separator: 'BaseCard_separator_02',
                        cardInfo: 'BaseCard_cardInfo_a6',
                        cardInfo__withAdditionalInfo: 'BaseCard_cardInfo__withAdditionalInfo_cf',
                        name: 'BaseCard_name_17',
                        typeIcon: 'BaseCard_typeIcon_71',
                        alertIcon: 'BaseCard_alertIcon_67',
                    };
                let re;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.CardLocked = 'cardLocked');
                })(re || (re = {}));
                const se = ({ icon: e, typeIcon: t, name: n, nation: a, cardState: s, children: i, alertType: o }) =>
                        r().createElement(
                            'div',
                            {
                                onMouseEnter: Y.$.playHighlight,
                                className: u()(ae.base, ae[`base__${s}`], ae[`base__alert${(0, Q.e)(o)}`]),
                            },
                            s === U.Selected && r().createElement('div', { className: ae.selectedFrame }),
                            a && r().createElement(X.U, { nation: a, size: X.$.c240x118, className: ae.flag }),
                            r().createElement('div', { className: ae.icon, style: { backgroundImage: `url(${e})` } }),
                            r().createElement('div', { className: ae.separator }),
                            r().createElement(
                                'div',
                                { className: u()(ae.cardInfo, Boolean(i) && ae.cardInfo__withAdditionalInfo) },
                                r().createElement('div', { className: ae.name }, n),
                                i,
                            ),
                            r().createElement('div', {
                                className: ae.typeIcon,
                                style: { backgroundImage: `url(${t})` },
                            }),
                            o !== re.None &&
                                r().createElement(ne, {
                                    className: ae.alertIcon,
                                    tooltipArgs: {
                                        header: R.strings.crew.personalData.card.tooltip.locked.title(),
                                        body: R.strings.crew.personalData.card.tooltip.locked.body(),
                                        isEnabled: o === re.CardLocked,
                                    },
                                }),
                        ),
                    ie = (0, g.Pi)(({ icon: e, name: t, cardState: n, className: a, onClick: s }) => {
                        const i = Z().model.isCardsLocked.get();
                        return r().createElement(
                            p.i,
                            {
                                header: R.strings.crew.personalData.card.tooltip.document.title(),
                                body: R.strings.crew.personalData.card.tooltip.document.body(),
                                isEnabled: !i,
                            },
                            r().createElement(
                                'div',
                                { className: a, onClick: s },
                                r().createElement(se, {
                                    icon: e,
                                    typeIcon: R.images.gui.maps.icons.crew.personalData.c_24x24.document(),
                                    name: t,
                                    cardState: n,
                                    alertType: i ? re.CardLocked : re.None,
                                }),
                            ),
                        );
                    });
                var oe = n(7078),
                    ue = n(2603),
                    le = n(9367);
                const ce = 'InventoryInfo_base_c4',
                    de = 'InventoryInfo_icon_f6',
                    me = 'InventoryInfo_amount_59',
                    _e = r().memo(function ({ amount: e, className: t }) {
                        return r().createElement(
                            'div',
                            { className: u()(ce, t) },
                            r().createElement('div', { className: de }),
                            r().createElement('div', { className: me }, e),
                        );
                    }),
                    ge = 'ResetButton_base_f1',
                    Ee = 'ResetButton_iconWrapper_20',
                    pe = 'ResetButton_icon_a2',
                    be = 'ResetButton_label_f8',
                    he = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: u()(ge, e) },
                            r().createElement('div', { className: Ee }, r().createElement('div', { className: pe })),
                            r().createElement('div', { className: be }, R.strings.crew.personalData.card.remove()),
                        ),
                    ve = ({ restrictions: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: t },
                            (0, Q.uF)(R.strings.crew.personalData.card.restrictions(), { restrictions: $.v_(e, ', ') }),
                        ),
                    fe = 'SkinCard_base_bb',
                    Ae = 'SkinCard_resetButton_ff',
                    Ce = 'SkinCard_restrictions_e8',
                    Fe = 'SkinCard_inventoryInfo_62',
                    ye = 'SkinCard_newSkinMark_16',
                    ke = (e, t) => (e ? re.CardLocked : t ? re.Default : re.None),
                    De = (0, g.Pi)(
                        ({
                            id: e,
                            nation: t,
                            icon: n,
                            name: a,
                            restrictions: s,
                            inventoryCount: i,
                            cardState: o,
                            newAmount: l,
                            className: c,
                            onClick: d,
                        }) => {
                            const m = Z(),
                                _ = m.model,
                                g = m.controls,
                                E = s.length > 0,
                                p = l > 0;
                            return r().createElement(
                                oe.t,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                                    args: { tooltipId: ue.lu, skinId: e },
                                },
                                r().createElement(
                                    'div',
                                    { className: u()(fe, c), onClick: d, onMouseEnter: () => p && g.markAsViewed(e) },
                                    r().createElement(
                                        se,
                                        {
                                            icon: n,
                                            typeIcon: R.images.gui.maps.icons.crew.personalData.c_24x24.skin(),
                                            name: a,
                                            nation: t,
                                            cardState: o,
                                            alertType: ke(_.isCardsLocked.get(), E),
                                        },
                                        o === U.Selected && r().createElement(he, { className: Ae }),
                                        E && r().createElement(ve, { restrictions: s, className: Ce }),
                                    ),
                                    r().createElement(_e, { amount: i, className: Fe }),
                                    p && r().createElement(le.Q, { value: l > 1 ? l : void 0, className: ye }),
                                ),
                            );
                        },
                    );
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
                const Be = { [K.Skin]: De, [K.Document]: ie },
                    Se = (0, g.Pi)(({ index: e, className: t }) => {
                        const n = Z(),
                            a = n.model,
                            s = n.controls,
                            i = a.computes.getCard(e);
                        if (!i) throw Error(`Index ${e} is out of data card list range`);
                        const o = i.cardState !== U.Disabled && !a.isCardsLocked.get(),
                            u = Be[i.cardType];
                        return r().createElement(
                            u,
                            we({}, i, { className: t, onClick: () => o && s.selectCard(i.id, i.cardType === K.Skin) }),
                        );
                    }),
                    Ne = 'DataCardList_base_0a',
                    Ie = 'DataCardList_grid_63',
                    Te = 'DataCardList_gridWrapper_44',
                    xe = 'DataCardList_emptyState_f2',
                    Le = 'DataCardList_item_b1',
                    Re = (0, g.Pi)(() => {
                        const e = (() => {
                                const e = B.X.Vertical.useVerticalScrollApi(),
                                    t = (0, S.q)(),
                                    n = (0, a.useCallback)((e, n = !0) => t.trigger('scrollToIndex', e, n), [t]),
                                    r = (0, a.useCallback)((e, n) => t.trigger('layoutCalculated', e, n), [t]),
                                    s = (0, a.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, a.useMemo)(
                                    () => ({
                                        scrollToIndex: n,
                                        layoutCalculated: r,
                                        startRowIndexChanged: s,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [n, r, s, e, t.off, t.on],
                                );
                            })(),
                            t = Z(),
                            n = t.model,
                            s = t.controls,
                            i = n.cardList.get().length;
                        return r().createElement(
                            'div',
                            { className: u()(Ne) },
                            r().createElement(
                                'div',
                                { className: Te },
                                i > 0
                                    ? r().createElement(
                                          W,
                                          {
                                              amount: i,
                                              cellWidth: 318,
                                              cellHeight: 208,
                                              paddingTop: 11,
                                              paddingBottom: 11,
                                              classNames: { content: Ie },
                                              api: e,
                                          },
                                          (e) => r().createElement(Se, { key: e, index: e, className: Le }),
                                      )
                                    : r().createElement(
                                          w,
                                          {
                                              warningText: R.strings.crew.personalData.emptyState.noFilteredItems(),
                                              buttonType: _.L.primary,
                                              onClick: s.resetFilters,
                                              className: xe,
                                          },
                                          R.strings.crew.filter.reset(),
                                      ),
                            ),
                        );
                    }),
                    Oe = 'PersonalDataApp_base_61',
                    Pe = 'PersonalDataApp_content_36',
                    Me = () => {
                        const e = (0, i.GS)().mediaHeight;
                        return r().createElement(
                            'div',
                            { className: Oe },
                            r().createElement(
                                'div',
                                { className: Pe },
                                r().createElement(d, {
                                    title: R.strings.crew.personalData.title(),
                                    theme: c.PersonalData,
                                }),
                                r().createElement(m.p, { popoverDirection: e < i.Aq.Medium ? s.IC.Left : s.IC.Bottom }),
                                r().createElement(Re, null),
                            ),
                        );
                    },
                    He = R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    We = r().memo(
                        ({ setTTCVisibility: e }) => (
                            e(!1), r().createElement(G, { options: { rootId: He } }, r().createElement(Me, null))
                        ),
                    );
            },
            4591: (e, t, n) => {
                'use strict';
                n.r(t), n.d(t, { PERSONAL_FILE_VIEW_RES_ID: () => aa, default: () => ra });
                var a = n(6179),
                    r = n.n(a),
                    s = n(5415),
                    i = n(3403),
                    o = n(6035),
                    u = n(771),
                    l = n(3215),
                    c = n(4598),
                    d = n(9480),
                    m = n(1612),
                    _ = n(9174),
                    g = n(3946);
                const E = (0, l.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'tankmanId',
                                        'skillsEfficiency',
                                        'isTankmanInVehicle',
                                        'hasPostProgression',
                                        'isPostProgressionAnimated',
                                    ]),
                                    {
                                        isTTCVisible: _.LO.box(!1),
                                        skillsMatrix: Object.assign(
                                            {},
                                            e.primitives(
                                                [
                                                    'componentKey',
                                                    'isResetDisable',
                                                    'hasResetDiscount',
                                                    'hasIncreaseDiscount',
                                                    'resetGracePeriodLeft',
                                                ],
                                                'skills',
                                            ),
                                            {
                                                main: Object.assign(
                                                    {},
                                                    e.primitives(
                                                        ['role', 'directiveId', 'directiveName', 'selectedSkillsCount'],
                                                        'skills.mainSkills',
                                                    ),
                                                    { skills: e.array('skills.mainSkills.skills') },
                                                ),
                                                bonus: e.array('skills.bonusSkills'),
                                            },
                                        ),
                                        postProgression: Object.assign(
                                            {},
                                            e.primitives(
                                                [
                                                    'componentKey',
                                                    'icon',
                                                    'progressCurrent',
                                                    'progressMax',
                                                    'hasWarning',
                                                ],
                                                'postProgression',
                                            ),
                                        ),
                                    },
                                ),
                                n = (e) => d.UI(e, (e) => Object.assign({}, e)),
                                a = (0, g.Om)(
                                    () => ({
                                        role: t.skillsMatrix.main.role.get(),
                                        selectedSkillsCount: t.skillsMatrix.main.selectedSkillsCount.get(),
                                        directiveId: t.skillsMatrix.main.directiveId.get(),
                                        directiveName: t.skillsMatrix.main.directiveName.get(),
                                        skills: n(t.skillsMatrix.main.skills.get()),
                                    }),
                                    { equals: c.jv },
                                ),
                                r = (0, g.Om)(
                                    () =>
                                        d.UI(t.skillsMatrix.bonus.get(), (e) =>
                                            Object.assign({}, e, {
                                                directiveId: e.directiveId,
                                                directiveName: e.directiveName,
                                                skills: n(e.skills),
                                            }),
                                        ),
                                    { equals: c.jv },
                                ),
                                s = (0, g.Om)(() => t.isTankmanInVehicle.get() && t.isTTCVisible.get()),
                                i = (0, g.Om)(() => t.skillsEfficiency.get() === u.sU, !0),
                                o = (0, g.Om)(() => t.skillsEfficiency.get() < u.yb);
                            return Object.assign({}, t, {
                                computes: {
                                    isUntrained: i,
                                    isTTCVisible: s,
                                    mainSkills: a,
                                    bonusSkills: r,
                                    isLowPerksEfficiency: o,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) =>
                            Object.assign(
                                {
                                    reset: e.createCallbackNoArgs('skills.onReset'),
                                    increase: e.createCallbackNoArgs('skills.onIncrease'),
                                    setAnimationInProgress: e.createCallback(
                                        (e) => ({ isEnabled: e }),
                                        'skills.onSetAnimationInProgress',
                                    ),
                                    clickSkill: e.createCallback((e) => ({ role: e }), 'skills.onSkillClick'),
                                    openPostProgression: e.createCallbackNoArgs('postProgression.onWidgetClick'),
                                },
                                (0, m.h)({ setTTCVisible: (e) => t.isTTCVisible.set(e) }),
                            ),
                    ),
                    p = E[0],
                    b = E[1];
                var h = n(6483),
                    v = n.n(h);
                const f = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let A, C;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(A || (A = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(C || (C = {}));
                const F = ({ size: e = A.Default }) => {
                        const t = v()(f.background, f[`background__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    y = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    k = ({ size: e }) => {
                        const t = v()(y.base, y[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    D = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    w = (0, a.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: a, isComplete: s, withoutBounce: i }) => {
                            const o = v()(
                                    D.base,
                                    D[`base__${e}`],
                                    n && D.base__disabled,
                                    s && D.base__finished,
                                    i && D.base__withoutBounce,
                                ),
                                u = !n && !s;
                            return r().createElement(
                                'div',
                                { className: o, style: a, ref: t },
                                r().createElement('div', { className: D.pattern }),
                                r().createElement('div', { className: D.gradient }),
                                u && r().createElement(k, { size: e }),
                            );
                        },
                    ),
                    B = ({ size: e, value: t, lineRef: n, disabled: s, onComplete: i }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            u = 100 === t;
                        return (
                            (0, a.useEffect)(() => {
                                u && i && i();
                            }, [u, i]),
                            r().createElement(w, { size: e, disabled: s, baseStyles: o, isComplete: u, lineRef: n })
                        );
                    };
                var S = n(122);
                let N, I;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(N || (N = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(I || (I = {}));
                const T = 'ProgressBarDeltaSimple_base_6c',
                    x = 'ProgressBarDeltaSimple_delta_99',
                    L = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: s,
                            size: i,
                            to: o,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < s,
                                d = (0, a.useState)(I.Idle),
                                m = d[0],
                                _ = d[1],
                                g = m === I.In,
                                E = m === I.End,
                                p = m === I.Idle,
                                b = (0, a.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (p && !n) {
                                    const e = t;
                                    return (0, S.F)(() => {
                                        b(I.In);
                                    }, e);
                                }
                            }, [b, n, p, t]),
                                (0, a.useEffect)(() => {
                                    if (g) {
                                        const n = e + t;
                                        return (0, S.F)(() => {
                                            u && u(), b(I.End);
                                        }, n);
                                    }
                                }, [b, g, u, t, e]);
                            const h = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                v = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(s - o)}%`, left: `${c ? o : s}%` }),
                                    [s, c, o],
                                );
                            return E
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: T, style: f },
                                      r().createElement(
                                          'div',
                                          { style: p ? h : v, className: x },
                                          r().createElement(k, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    O = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: s,
                            disabled: i,
                            isComplete: o,
                            animationSettings: u,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${u.line.duration}ms`,
                                    transitionDelay: `${u.line.delay}ms`,
                                }),
                                [u.line.delay, u.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(w, {
                                    size: t,
                                    lineRef: s,
                                    disabled: i,
                                    isComplete: o,
                                    baseStyles: d,
                                }),
                                n >= 0 &&
                                    r().createElement(L, {
                                        transitionDuration: u.delta.duration,
                                        transitionDelay: u.delta.delay,
                                        freezed: u.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    P = 'ProgressBarDeltaGrow_base_7e',
                    M = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    H = 'ProgressBarDeltaGrow_glow_68',
                    W = (e) => (e ? { left: 0 } : { right: 0 }),
                    z = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    $ = (e) => ({ transitionDuration: `${e}ms` }),
                    j = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: s,
                            size: i,
                            to: o,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = o < s,
                                m = (0, a.useState)(N.Idle),
                                _ = m[0],
                                g = m[1],
                                E = _ === N.End,
                                p = _ === N.Idle,
                                b = _ === N.Grow,
                                h = _ === N.Shrink,
                                f = (0, a.useCallback)(
                                    (e) => {
                                        g(e), l && l(e);
                                    },
                                    [l],
                                ),
                                A = (0, a.useCallback)(
                                    (e, t) =>
                                        (0, S.F)(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, a.useEffect)(() => {
                                if (!n)
                                    return p
                                        ? A(N.Grow, t)
                                        : b
                                          ? A(N.Shrink, e)
                                          : h
                                            ? A(N.End, e)
                                            : void (E && u && u());
                            }, [A, n, E, b, p, h, u, t, e]);
                            const C = (0, a.useMemo)(() => Object.assign({ width: '100%' }, $(e), W(d)), [d, e]),
                                F = (0, a.useMemo)(() => Object.assign({ width: '0%' }, $(e), W(d)), [d, e]),
                                y = (0, a.useMemo)(() => Object.assign({ width: '0%' }, z(d, s), $(e)), [s, d, e]),
                                D = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - s)}%` }, z(d, s), $(e)),
                                    [s, d, o, e],
                                );
                            if (E) return null;
                            const w = v()(P, c, d && 0 === o && M);
                            return r().createElement(
                                'div',
                                { style: p ? y : D, className: w },
                                r().createElement(
                                    'div',
                                    { style: h ? F : C, className: H },
                                    r().createElement(k, { size: i }),
                                ),
                            );
                        },
                    ),
                    V = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: s,
                            disabled: i,
                            isComplete: o,
                            animationSettings: u,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < n,
                                m = (0, a.useState)(!1),
                                _ = m[0],
                                g = m[1],
                                E = (0, a.useCallback)(
                                    (e) => {
                                        e === N.Shrink && g(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                p = (0, a.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                b = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${u.line.duration}ms` }),
                                    [u.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(w, {
                                    size: t,
                                    lineRef: s,
                                    disabled: i,
                                    isComplete: o,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? b : p,
                                }),
                                n >= 0 &&
                                    r().createElement(j, {
                                        transitionDuration: u.delta.duration,
                                        transitionDelay: u.delta.delay,
                                        onChangeAnimationState: E,
                                        freezed: u.freezed,
                                        onEndAnimation: l,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: u.delta.className,
                                    }),
                            );
                        },
                    ),
                    G = ['onComplete', 'onEndAnimation'];
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                const U = (0, a.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, G);
                        const i = (0, a.useState)(!1),
                            o = i[0],
                            u = i[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === s.to;
                                e !== o && u(e), e && t && t(), n && n();
                            }, [o, t, n, s.to]);
                        switch (s.animationSettings.type) {
                            case C.Simple:
                                return r().createElement(O, Z({}, s, { onEndAnimation: l, isComplete: o }));
                            case C.Growing:
                                return r().createElement(V, Z({}, s, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    K = ['onEndAnimation'];
                function q() {
                    return (
                        (q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        q.apply(this, arguments)
                    );
                }
                const Y = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, K);
                    const s = (0, a.useRef)({}),
                        i = (0, a.useCallback)(() => {
                            (s.current.from = void 0), t && t();
                        }, [t]),
                        o = 'number' == typeof s.current.from ? s.current.from : n.from;
                    return (
                        (s.current.from = o),
                        r().createElement(U, q({}, n, { onEndAnimation: i, key: `${o}-${n.to}`, from: o }))
                    );
                });
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const X = (0, a.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: a,
                            deltaFrom: s,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: u,
                            onComplete: l,
                        }) => {
                            if (s === t)
                                return r().createElement(B, {
                                    key: `${s}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: s,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: a,
                                animationSettings: i,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: u,
                            };
                            return i.withStack
                                ? r().createElement(Y, c)
                                : r().createElement(U, Q({ key: `${s}-${t}` }, c));
                        },
                    ),
                    J = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    });
                var ee = n(7515);
                const te = (e, t, n) => {
                        if ('number' == typeof n) {
                            return ((0, ee.u)(0, t, n) / t) * 100;
                        }
                        return e;
                    },
                    ne = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    ae = {
                        freezed: !1,
                        withStack: !1,
                        type: C.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    re = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ne,
                            size: n = A.Default,
                            animationSettings: s = ae,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            value: u,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const g = ((e, t, n) =>
                                (0, a.useMemo)(() => {
                                    const a = ((0, ee.u)(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: te(a, t, n) };
                                }, [n, t, e]))(u, e, l);
                            return r().createElement(
                                'div',
                                { className: v()(f.base, f[`base__${n}`]), style: J(t) },
                                !o && r().createElement(F, { size: n }),
                                r().createElement(X, {
                                    size: n,
                                    lineRef: c,
                                    disabled: i,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: s,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: _,
                                }),
                            );
                        },
                    );
                var se = n(2056),
                    ie = n(3138),
                    oe = n(9916),
                    ue = n(7030),
                    le = n(3649);
                const ce = 'FormatText_base_d0',
                    de = ({
                        binding: e,
                        text: t = '',
                        classMix: n,
                        alignment: s = le.v2.left,
                        formatWithBrackets: i,
                    }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && e ? (0, le.WU)(t, e) : t;
                        return r().createElement(
                            a.Fragment,
                            null,
                            o.split('\n').map((t, i) =>
                                r().createElement(
                                    'div',
                                    { className: v()(ce, n), key: `${t}-${i}` },
                                    (0, le.Uw)(t, s, e).map((e, t) =>
                                        r().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    me = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    _e = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    ge = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ee = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    pe = (0, a.memo)(({ text: e, binding: t, classMix: n }) => {
                        const s = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, a.useMemo)(() => t || {}, [t]);
                        let o = _e.exec(e),
                            u = e,
                            l = 0;
                        for (; o; ) {
                            const n = o[0],
                                a = ge.exec(n),
                                c = Ee.exec(n),
                                d = o[1];
                            if (a && c) {
                                const e = a[0],
                                    o = e + l++ + e;
                                (u = u.replace(n, `%(${o})`)),
                                    (i[o] = me[e]
                                        ? r().createElement(
                                              'span',
                                              { className: me[e] },
                                              r().createElement(de, { text: d, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: s(e) },
                                              r().createElement(de, { text: d, binding: t }),
                                          ));
                            }
                            o = _e.exec(e);
                        }
                        return r().createElement(de, { text: u, classMix: n, binding: i });
                    });
                var be = n(7160),
                    he = n(8018);
                const ve = 'PostProgressionWidget_base_6f',
                    fe = 'PostProgressionWidget_animationGlow_13',
                    Ae = 'PostProgressionWidget_animationReflectionWrapper_cd',
                    Ce = 'PostProgressionWidget_animationReflection_05',
                    Fe = 'PostProgressionWidget_progress_64',
                    ye = 'PostProgressionWidget_label_80',
                    ke = 'PostProgressionWidget_xpIcon_ab',
                    De = 'PostProgressionWidget_progressBar_f6',
                    we = 'PostProgressionWidget_icon_34',
                    Be = 'PostProgressionWidget_warning_6d',
                    Se = 'PostProgressionWidget_warningGlow_d3',
                    Ne = 'PostProgressionWidget_warningIcon_b5',
                    Ie = 1800,
                    Te = (0, i.Pi)(function () {
                        const e = b(),
                            t = e.model,
                            n = t.postProgression,
                            s = t.isPostProgressionAnimated,
                            i = e.controls,
                            o = s.get(),
                            u = n.progressCurrent.get(),
                            l = n.progressMax.get(),
                            c = (0, a.useState)(u),
                            d = c[0],
                            m = c[1],
                            _ = (0, a.useCallback)(() => m(u), [u]),
                            g = (0, ue.useSpring)(
                                () => ({
                                    from: { opacity: 0, x: ie.O.view.remToPx(60) },
                                    to: [
                                        {
                                            opacity: 0.9,
                                            x: ie.O.view.remToPx(-10),
                                            delay: Ie,
                                            config: { duration: 500 },
                                        },
                                        { opacity: 1, x: 0, config: { duration: 250 } },
                                    ],
                                    config: { easing: be.to },
                                }),
                                [],
                            )[0],
                            E = (0, ue.useSpring)({
                                from: { opacity: 0 },
                                to: [
                                    { opacity: 0.8, delay: Ie, config: { duration: 500 } },
                                    { opacity: 0, config: { duration: 2e3 } },
                                ],
                                config: { easing: be.to },
                            }),
                            p = (0, ue.useSpring)({
                                from: { x: 0 },
                                to: [{ x: ie.O.view.remToPx(600) }],
                                delay: 2700,
                                config: { easing: be.to, duration: 1700 },
                            });
                        return (
                            (0, a.useEffect)(() => {
                                if (o) return (0, S.F)(() => ie.O.sound.play.sound(he.gO.CREW_POSTPROG_WIDGET), Ie);
                            }, [o]),
                            r().createElement(
                                se.u,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.PostProgressionTooltip('resId'),
                                    args: { componentKey: n.componentKey.get() },
                                },
                                r().createElement(
                                    ue.animated.div,
                                    {
                                        style: o ? g : void 0,
                                        className: ve,
                                        onMouseEnter: () => {
                                            ie.O.sound.play.highlight();
                                        },
                                        onClick: () => {
                                            ie.O.sound.play.click(), i.openPostProgression();
                                        },
                                    },
                                    o &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement(ue.animated.div, { style: E, className: fe }),
                                            r().createElement(
                                                'div',
                                                { className: Ae },
                                                r().createElement(ue.animated.div, { style: p, className: Ce }),
                                            ),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: Fe },
                                        r().createElement(pe, {
                                            text: R.strings.crew.postProgression.progress(),
                                            binding: {
                                                currentValue: oe.Z5.getNumberFormat(u, oe.B3.INTEGRAL),
                                                maxValue: oe.Z5.getNumberFormat(l, oe.B3.INTEGRAL),
                                                icon: r().createElement('div', { className: ke }),
                                            },
                                            classMix: ye,
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: De },
                                            r().createElement(re, {
                                                value: u,
                                                deltaFrom: d,
                                                maxValue: l,
                                                onEndAnimation: _,
                                                size: A.Small,
                                            }),
                                        ),
                                    ),
                                    r().createElement('div', {
                                        className: we,
                                        style: { backgroundImage: `url(${n.icon.get()})` },
                                    }),
                                    n.hasWarning.get() &&
                                        r().createElement(
                                            'div',
                                            { className: Be },
                                            r().createElement('div', { className: Se }),
                                            r().createElement('div', { className: Ne }),
                                        ),
                                ),
                            )
                        );
                    });
                let xe;
                !(function (e) {
                    (e.None = 'none'), (e.Unlocked = 'unlocked'), (e.Selected = 'selected');
                })(xe || (xe = {}));
                var Le = n(9216),
                    Re = n(2106),
                    Oe = n(7044),
                    Pe = n(2344),
                    Me = n(3112);
                const He = 'Countdown_base_fe',
                    We = 'Countdown_icon_8b',
                    ze = 'Countdown_description_8d';
                let $e, je;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })($e || ($e = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(je || (je = {}));
                const Ve = (e) => e.toString().padStart(2, '0'),
                    Ge = R.images.gui.maps.icons.components.countdown,
                    Ze = (e, t) => {
                        const n = 2 === t ? Ge.big : Ge;
                        switch (e) {
                            case $e.Timer:
                                return n.clock();
                            case $e.Countdown:
                                return n.hourglass();
                            case $e.Cooldown:
                                return n.lock();
                        }
                    },
                    Ue = (0, a.memo)(
                        ({
                            duration: e,
                            icon: t = $e.Timer,
                            style: n = je.Description,
                            onTimeReached: a,
                            className: s = '',
                            classNames: i = {},
                        }) => {
                            const o = n !== je.Description ? 1 : void 0,
                                u = (0, Pe.au)(e, o),
                                l = (0, Me.V)();
                            a && a[u] && a[u]();
                            const c = ((e, t) => {
                                switch (t) {
                                    case je.Description:
                                        return (0, Oe.wB)(e);
                                    case je.Short:
                                        return `${Ve(e.minutes)}:${Ve(e.seconds)}`;
                                    case je.Long:
                                        return `${Ve(e.hours)}:${Ve(e.minutes)}:${Ve(e.seconds)}`;
                                    case je.Extended:
                                        return `${(0, le.WU)(R.strings.common.duration.days(), { days: e.days })} | ${Ve(e.hours)}:${Ve(e.minutes)}:${Ve(e.seconds)}`;
                                }
                            })((0, Oe.f8)(u), n);
                            return r().createElement(
                                'div',
                                { className: v()(He, s) },
                                t !== $e.None &&
                                    r().createElement('div', {
                                        className: v()(We, i.icon),
                                        style: { backgroundImage: `url('${Ze(t, l)}')` },
                                    }),
                                r().createElement('div', { className: v()(ze, i.text) }, c),
                            );
                        },
                    );
                var Ke = n(6373),
                    qe = n(3457);
                const Ye = 'ButtonWithDiscountIndicator_base_6c',
                    Qe = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    Xe = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    Je = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const et = r().memo(function (e) {
                        let t = e.hasDiscount,
                            n = e.className,
                            a = e.children,
                            s = e.wrapperId,
                            i = e.isSmall,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Je);
                        return r().createElement(
                            'div',
                            { id: s, className: v()(Ye, n) },
                            r().createElement(qe.u5, o, a),
                            t && r().createElement('div', { className: v()(Qe, i && Xe) }),
                        );
                    }),
                    tt = 'ButtonsSection_base_9a',
                    nt = 'ButtonsSection_base__withBonusRoles_e6',
                    at = 'ButtonsSection_increaseBtnContainer_6b',
                    rt = 'ButtonsSection_resetBtnContainer_6f',
                    st = 'ButtonsSection_increaseButton_6b',
                    it = 'ButtonsSection_resetButton_f2',
                    ot = 'ButtonsSection_increaseButton__accented_a2',
                    ut = 'ButtonsSection_resetButton__accented_57',
                    lt = 'ButtonsSection_resetButton__disabled_da',
                    ct = 'ButtonsSection_countdown_df',
                    dt = 'ButtonsSection_countdownIcon_ff',
                    mt = 'ButtonsSection_countdownText_a0',
                    _t = (e) => Math.floor(Date.now() / Oe.s_ + e),
                    gt = (0, a.memo)(
                        ({
                            mediaSize: e,
                            bonusSkillsCount: t,
                            resetGracePeriodLeft: n,
                            isResetDisable: i,
                            hasResetDiscount: o,
                            hasIncreaseDiscount: u,
                            hasPostProgression: l,
                            allSkillsLearned: c,
                            onIncreaseClick: d,
                            onResetClick: m,
                        }) => {
                            const _ = e <= s.cJ.Small,
                                g = (e < s.cJ.Large && t >= 2) || (e >= s.cJ.Large && t >= 3),
                                E = (e <= s.cJ.Small && t >= 1) || (e === s.cJ.Medium && t >= 2),
                                p = i
                                    ? R.strings.crew.matrix.resetTooltip.disable
                                    : R.strings.crew.matrix.resetTooltip.enable,
                                b = l
                                    ? R.strings.crew.matrix.increaseTooltip.disable
                                    : R.strings.crew.matrix.increaseTooltip.enable,
                                h = (0, a.useRef)(_t(n)),
                                f = (0, a.useState)(n),
                                A = f[0],
                                C = f[1];
                            return (
                                (0, a.useEffect)(() => {
                                    h.current = _t(n);
                                }, [n]),
                                (0, a.useEffect)(() => {
                                    C(h.current - Math.floor(Date.now() / Oe.s_));
                                }, [n, h]),
                                r().createElement(
                                    'div',
                                    { className: v()(tt, g && nt) },
                                    r().createElement(
                                        Ke.i,
                                        { header: b.header(), body: b.body() },
                                        r().createElement(
                                            'div',
                                            { className: at },
                                            r().createElement(
                                                et,
                                                {
                                                    type: Re.L.ghost,
                                                    isSmall: _,
                                                    disabled: l,
                                                    hasDiscount: u,
                                                    mixClass: v()(st, !(c || o) && ot),
                                                    onClick: d,
                                                },
                                                R.strings.crew.matrix.increaseButton(),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: rt },
                                        r().createElement(
                                            Ke.i,
                                            { header: p.header(), body: p.body(), ignoreMouseClick: i },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    et,
                                                    {
                                                        type: Re.L.ghost,
                                                        isSmall: _,
                                                        disabled: i,
                                                        hasDiscount: o,
                                                        wrapperId: i ? void 0 : 'matrix_drop_skills_btn',
                                                        mixClass: v()(it, o && ut, i && lt),
                                                        onClick: m,
                                                    },
                                                    o
                                                        ? R.strings.crew.matrix.freeResetButton()
                                                        : R.strings.crew.matrix.resetButton(),
                                                ),
                                            ),
                                        ),
                                        !(E || i) &&
                                            A > 0 &&
                                            r().createElement(Ue, {
                                                className: ct,
                                                classNames: { icon: dt, text: mt },
                                                duration: A,
                                            }),
                                    ),
                                )
                            );
                        },
                    );
                var Et = n(7078),
                    pt = n(2603);
                let bt;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'),
                        (e[(e.Started = 1)] = 'Started'),
                        (e[(e.DisplayActualState = 2)] = 'DisplayActualState'),
                        (e[(e.Finished = 3)] = 'Finished');
                })(bt || (bt = {}));
                const ht = 1300,
                    vt = {
                        [xe.Unlocked]: {
                            [bt.Started]: [0, 0],
                            [bt.DisplayActualState]: [700, 700],
                            [bt.Finished]: [600, 1900],
                        },
                        [xe.Selected]: {
                            [bt.Started]: [0, 0],
                            [bt.DisplayActualState]: [1e3, 1e3],
                            [bt.Finished]: [700, 700],
                        },
                    },
                    ft = {
                        [xe.Unlocked]: { isLocked: !0, skillIcon: '' },
                        [xe.Selected]: { isLocked: !1, skillIcon: '' },
                    },
                    At = (e, t, n) => {
                        var a;
                        const r = null == (a = vt[e]) ? void 0 : a[t];
                        return n ? (null == r ? void 0 : r[1]) : null == r ? void 0 : r[0];
                    },
                    Ct = (e, t) => (e === xe.Unlocked ? (t ? 2600 : ht) : t ? 400 : 200),
                    Ft = (e, t, n, a, r) => {
                        let s = 0;
                        const i = e.length - 1;
                        return e.map((e, o) => {
                            let u;
                            return (
                                e.animationType !== xe.None &&
                                    ((u = ((e, t, n, a, r) => {
                                        let s = 300;
                                        const i = Ct(e, n);
                                        return (
                                            e === xe.Selected ? (s += 100 * a) : n && r && r % 2 == 1 && (s += ht),
                                            t * i + s
                                        );
                                    })(e.animationType, s, t, n, a)),
                                    s++),
                                r(e, o, u, i !== o)
                            );
                        });
                    },
                    yt = (e, t, n, a, r, s, i) => {
                        return a
                            ? {
                                  targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                  args: { componentKey: e, tooltipId: pt.HZ, skillName: t, isBonus: r, level: i },
                              }
                            : r
                              ? s
                                  ? {
                                        header: R.strings.crew.matrix.skillTooltip.bonus.unavailable.header(),
                                        body:
                                            null ==
                                            (o = R.strings.crew.matrix.skillTooltip.bonus.unavailable.text.$dyn(
                                                `c_${n + 1}`,
                                            ))
                                                ? void 0
                                                : o.toString(),
                                    }
                                  : {
                                        header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                        body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                    }
                              : {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                    args: { skillIndex: n, componentKey: e },
                                };
                        var o;
                    };
                var kt = n(3618),
                    Dt = n(9053),
                    wt = n(1530);
                const Bt = 'QualificationIcon_base_54',
                    St = 'QualificationIcon_base__main_a0',
                    Nt = 'QualificationIcon_icon_10',
                    It = 'QualificationIcon_counters_3a',
                    Tt = 'QualificationIcon_current_cd',
                    xt = (0, a.memo)(
                        ({
                            role: e,
                            componentKey: t,
                            totalPerksCount: n,
                            currentPerksCount: a,
                            qualificationIndex: i,
                            isBonusQualification: o,
                        }) => {
                            const u = (0, s.GS)().mediaSize;
                            return r().createElement(
                                se.u,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.QualificationTooltip('resId'),
                                    args: { role: e, componentKey: t, isBonusQualification: o, index: i },
                                },
                                r().createElement(
                                    'div',
                                    { className: v()(Bt, !o && St) },
                                    r().createElement(wt.M, {
                                        role: e,
                                        size: u === s.cJ.ExtraLarge ? wt.S.c40x40 : wt.S.c30x30,
                                        className: Nt,
                                    }),
                                    r().createElement(kt.w, {
                                        classMix: It,
                                        text: R.strings.crew.matrix.skills.counters(),
                                        justifyContent: Dt.v2.Center,
                                        binding: {
                                            currentCount: r().createElement('div', { className: Tt }, a),
                                            totalCount: n,
                                        },
                                    }),
                                ),
                            );
                        },
                    );
                var Lt = n(3415);
                const Rt = 'AvailableSkill_base_70',
                    Ot = () => r().createElement('div', { className: Rt }),
                    Pt = 'Animations_base_45',
                    Mt = 'Animations_childrenWrapper_01',
                    Ht = 'Animations_unlockAnimationWrapper_e5',
                    Wt = 'Animations_glow_89',
                    zt = 'Animations_base__bonus_34',
                    $t = ({ children: e, isAnimationStarted: t, isBonus: n, animationDelay: a }) => {
                        const s = (0, ue.useSpring)(
                                () => ({
                                    from: { y: ie.O.view.remToPx(-10), opacity: 0 },
                                    to: [{ y: 0, opacity: 1, config: { duration: 250 }, delay: 550 + a }],
                                }),
                                [a],
                            )[0],
                            i = (0, ue.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 0.8, config: { duration: 500 }, delay: 200 + a },
                                        { opacity: 0, config: { duration: 300 } },
                                    ],
                                }),
                                [a],
                            )[0],
                            o = (0, ue.useSpring)(
                                () => ({
                                    from: { scale: 1, opacity: 1 },
                                    to: [{ scale: 2.2, opacity: 0, config: { duration: 900 }, delay: a }],
                                }),
                                [a],
                            )[0];
                        return r().createElement(
                            'div',
                            { className: v()(Pt, n && zt) },
                            t &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(ue.animated.div, { style: s, className: Mt }, e),
                                    r().createElement(ue.animated.div, { style: i, className: Wt }),
                                ),
                            r().createElement(ue.animated.div, { style: o }, r().createElement(Ot, null)),
                        );
                    };
                var jt = n(2686),
                    Vt = n(126);
                const Gt = 'EmptySkill_base_38',
                    Zt = () => r().createElement('div', { className: Gt });
                var Ut;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Ut || (Ut = {}));
                const Kt = ({ animationDelay: e, isAnimationStarted: t, isBonus: n }) => {
                        const i = (0, a.useState)(null),
                            o = i[0],
                            u = i[1],
                            l = (0, Me.V)(),
                            c = (0, s.GS)().mediaSize >= s.cJ.ExtraLarge,
                            d = (0, a.useMemo)(
                                () =>
                                    ((e) => ({
                                        width: 72,
                                        height: 72,
                                        frameCount: 39,
                                        chunk: { count: 1, columns: 28, rows: 2 },
                                        getChunkPath: (0, Vt.V)(
                                            `R.images.gui.maps.icons.sequence.unlock.${e ? 'big' : 'small'}_`,
                                        ),
                                    }))(c),
                                [c],
                            ),
                            m = (0, a.useMemo)(() => (0, Vt.q)(d), [d]),
                            _ = (0, a.useCallback)(() => u(Ut.Stop), []),
                            g = (0, ue.useSpring)(
                                () => ({
                                    from: { scale: 2, opacity: 0 },
                                    to: [
                                        { scale: 2.2, opacity: 0.3, config: { duration: 150 }, delay: 1e3 + e },
                                        { scale: 1, opacity: 1, config: { duration: 500 } },
                                    ],
                                }),
                                [e],
                            )[0],
                            E = (0, ue.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 1, config: { duration: 150 }, delay: 1e3 + e },
                                        { opacity: 0, config: { duration: 500 } },
                                    ],
                                }),
                                [e],
                            )[0];
                        return (
                            (0, a.useEffect)(() => (0, S.F)(() => u(Ut.Play), e), [e]),
                            r().createElement(
                                'div',
                                { className: v()(Pt, n && zt) },
                                !o && r().createElement('div', { className: Mt }, r().createElement(Zt, null)),
                                o === Ut.Play &&
                                    r().createElement(
                                        'div',
                                        { className: Ht },
                                        r().createElement(jt.At, {
                                            width: d.width,
                                            height: d.height,
                                            frameCount: d.frameCount,
                                            getImageSource: m,
                                            loop: !1,
                                            state: o,
                                            onAnimationDone: _,
                                            style: { transform: `scale(${l})` },
                                        }),
                                    ),
                                t &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(ue.animated.div, { style: E, className: Wt }),
                                        r().createElement(ue.animated.div, { style: g }, r().createElement(Ot, null)),
                                    ),
                            )
                        );
                    },
                    qt = ['children', 'animationType'];
                const Yt = (e) => {
                    let t = e.children,
                        n = e.animationType,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, qt);
                    return n === xe.Selected
                        ? r().createElement($t, a, t)
                        : n === xe.Unlocked
                          ? r().createElement(Kt, a)
                          : t;
                };
                var Qt = n(2768);
                const Xt = 'SelectedSkill_base_53',
                    Jt = 'SelectedSkill_base__main_dc',
                    en = 'SelectedSkill_name_79',
                    tn = 'SelectedSkill_name__progress_64',
                    nn = ({ icon: e, name: t, isInProgress: n, mediaSize: a, isBonus: i }) =>
                        r().createElement(
                            'div',
                            { className: v()(Xt, !i && Jt) },
                            r().createElement(Qt.y, {
                                size: a >= s.cJ.ExtraLarge ? Qt.F.c80x80 : Qt.F.c52x52,
                                iconName: e,
                            }),
                            !i && a >= s.cJ.Medium && r().createElement('div', { className: v()(en, n && tn) }, t),
                        ),
                    an = 'SkillContent_base_7b',
                    rn = 'SkillContent_base__disabled_34',
                    sn = (0, a.memo)(
                        ({
                            name: e,
                            icon: t,
                            mediaSize: n,
                            isBonus: a,
                            isLocked: s,
                            isDisabled: i,
                            isInProgress: o,
                        }) => {
                            let u;
                            return (
                                (u = t
                                    ? r().createElement(nn, {
                                          name: e,
                                          mediaSize: n,
                                          isBonus: a,
                                          icon: t,
                                          isInProgress: o,
                                      })
                                    : s
                                      ? r().createElement(Zt, null)
                                      : r().createElement(Ot, null)),
                                r().createElement('div', { className: v()(an, i && rn) }, u)
                            );
                        },
                    ),
                    on = 'Skill_base_8e',
                    un = 'Skill_base__bonus_8a',
                    ln = 'Skill_bonusBorder_4e',
                    cn = 'Skill_base__withAnimation_38',
                    dn = 'Skill_base__progress_1f',
                    mn = 'Skill_base__selected_d2',
                    _n = 'Skill_base__disabled_9d',
                    gn = 'Skill_base__enabled_fd',
                    En = 'Skill_base__full_33',
                    pn = 'Skill_base__inefficient_2d',
                    bn = 'Skill_bonusBorder__progress_12',
                    hn = 'Skill_bonusBorder__inefficient_27',
                    vn = 'Skill_progressLayer_5b',
                    fn = 'Skill_progressLayer__inefficient_dd',
                    An = 'Skill_progressLayer__disabled_0a',
                    Cn = 'Skill_progressLayer__full_5a',
                    Fn = 'Skill_disabledLayer_76',
                    yn = 'Skill_topContent_d1',
                    kn = 'Skill_levelLabel_07',
                    Dn = 'Skill_levelLabel__full_58',
                    wn = 'Skill_levelLabel__inefficient_58',
                    Bn = 'Skill_zeroIcon_2a',
                    Sn = 'Skill_zeroIcon__disabled_68',
                    Nn = 'Skill_directiveIcon_4f',
                    In = 'Skill_directiveIcon__progress_f6',
                    Tn = (0, a.memo)(
                        ({
                            role: e,
                            skillIndex: t,
                            mediaSize: n,
                            componentKey: s,
                            skillId: i,
                            skillUserName: o,
                            skillIcon: l,
                            skillProgress: c,
                            isZero: d,
                            isLocked: m,
                            isDisabled: _,
                            isIrrelevant: g,
                            isUntrained: E,
                            isLowEfficiency: p,
                            withDirective: b,
                            isFullDirective: h,
                            isBonusSkill: f = !1,
                            animationType: A,
                            animationDelay: C = 0,
                            onSkillClick: F,
                        }) => {
                            const y = ft[A],
                                k = (0, a.useState)(bt.None),
                                D = k[0],
                                w = k[1],
                                B = D < bt.DisplayActualState,
                                N = y && B ? y : { isLocked: m, skillIcon: l },
                                I = Boolean(N.skillIcon),
                                T = c === u.I,
                                x = g || ((_ || E) && !(N.isLocked || b)),
                                L = !(x || b) && p && I,
                                R = !(N.isLocked || (T && I)),
                                O = D === bt.Finished ? xe.None : A;
                            (0, a.useEffect)(() => {
                                const e = ((e, t, n) => {
                                    if (t === bt.Finished) return;
                                    let a = t + 1,
                                        r = At(e, a, n);
                                    for (; a < bt.Finished && void 0 === r; ) a++, (r = At(e, a, n));
                                    return void 0 !== r ? { nextStage: a, delay: r } : void 0;
                                })(A, D, f);
                                if (e) {
                                    const t = (D === bt.None ? C : 0) + e.delay,
                                        n = () => {
                                            f || A !== xe.Unlocked
                                                ? A === xe.Selected &&
                                                  e.nextStage === bt.Started &&
                                                  (0, S.F)(
                                                      () => ie.O.sound.play.sound(he.gO.CREW_SETTING_UP_MAJOR_PERK),
                                                      300,
                                                  )
                                                : (e.nextStage === bt.Started &&
                                                      ie.O.sound.play.sound(he.gO.CREW_UNLOCK_MAJOR_PERK_START),
                                                  e.nextStage === bt.Finished &&
                                                      ie.O.sound.play.sound(he.gO.CREW_UNLOCK_MAJOR_PERK_STOP)),
                                                w(e.nextStage);
                                        };
                                    if (t > 0) return (0, S.F)(n, t);
                                    n();
                                }
                            }, [A, D, C, f]);
                            const P = (0, ue.useSpring)(() => {
                                    const e = {
                                        from: { opacity: 0, x: ie.O.view.remToPx(-10) },
                                        to: { opacity: 1, x: 0 },
                                    };
                                    return A !== xe.None && T
                                        ? A === xe.Selected
                                            ? {
                                                  from: { opacity: 1 },
                                                  to: { opacity: 0 },
                                                  config: { duration: 250 },
                                                  delay: 800 + C,
                                              }
                                            : Object.assign({}, e, { config: { duration: 200 }, delay: 1300 + C })
                                        : Object.assign({}, e, { immediate: !0 });
                                }, [A])[0],
                                M = (0, ue.useSpring)(() => {
                                    const e = { from: { val: 0 }, to: { val: c } };
                                    return A !== xe.Unlocked
                                        ? Object.assign({}, e, { immediate: !0 })
                                        : Object.assign({}, e, {
                                              config: { duration: ((t = c), (n = f), t / (n ? 0.05 : 0.15)) },
                                              delay: 900 + C,
                                          });
                                    var t, n;
                                }, [c, A, C])[0];
                            return r().createElement(
                                Lt.l,
                                { tooltipArgs: yt(s, i, t, Boolean(l), f, m, c) },
                                r().createElement(
                                    'div',
                                    {
                                        className: v()(
                                            on,
                                            O !== xe.None && cn,
                                            f && un,
                                            !(N.isLocked || x) && gn,
                                            x && _n,
                                            R && dn,
                                            (T || d) && En,
                                            I && mn,
                                            L && pn,
                                        ),
                                        onClick: () => {
                                            m || (ie.O.sound.play.click(), F(e));
                                        },
                                        onMouseEnter: () => !x && ie.O.sound.play.highlight(),
                                    },
                                    f && r().createElement('div', { className: v()(ln, R && bn, L && hn) }),
                                    x && r().createElement('div', { className: Fn }),
                                    R &&
                                        r().createElement(ue.animated.div, {
                                            style: { width: d ? '100%' : M.val.to((e) => `${e}%`) },
                                            className: v()(vn, (T || d) && Cn, x && An, L && fn),
                                        }),
                                    r().createElement(
                                        Yt,
                                        {
                                            animationType: O,
                                            animationDelay: C,
                                            isAnimationStarted: D > bt.None,
                                            isBonus: f,
                                        },
                                        r().createElement(sn, {
                                            name: o,
                                            icon: l,
                                            mediaSize: n,
                                            isBonus: f,
                                            isLocked: m,
                                            isDisabled: x,
                                            isInProgress: R,
                                        }),
                                    ),
                                    (R || d) &&
                                        r().createElement(
                                            'div',
                                            { className: yn },
                                            d
                                                ? r().createElement('div', { className: v()(Bn, x && Sn) })
                                                : r().createElement(
                                                      ue.animated.div,
                                                      { style: P, className: v()(kn, T && Dn, L && wn) },
                                                      (0, le.dL)(c),
                                                  ),
                                        ),
                                    !(g || _) && b && r().createElement('div', { className: v()(Nn, !h && In) }),
                                ),
                            );
                        },
                    ),
                    xn = 'SkillsGroup_base_1e',
                    Ln = 'SkillsGroup_base__main_7d',
                    Rn = 'SkillsGroup_base__untrained_b4',
                    On = 'SkillsGroup_base__bonus_9f',
                    Pn = 'SkillsGroup_skillsRow_02',
                    Mn = 'SkillsGroup_untrainedLayer_fb',
                    Hn = 'SkillsGroup_connectorLine_4b',
                    Wn = 'SkillsGroup_connectorLine__long_92',
                    zn = 'SkillsGroup_directive_7c',
                    $n = (0, a.memo)(
                        ({
                            role: e,
                            directiveId: t,
                            directiveName: n,
                            componentKey: a,
                            mediaSize: s,
                            selectedSkillsCount: i,
                            skills: o,
                            isUntrained: u,
                            isLowEfficiency: l,
                            qualificationIndex: c = 0,
                            isBonusQualification: d = !1,
                            tankmanId: m,
                            selectedMajorSkillsAmount: _,
                            onSkillClick: g,
                        }) => {
                            const E = !d && u;
                            return r().createElement(
                                'div',
                                { className: v()(xn, d ? On : Ln, E && Rn) },
                                E && r().createElement('div', { className: Mn }),
                                r().createElement(xt, {
                                    role: e,
                                    componentKey: a,
                                    totalPerksCount: o.length,
                                    currentPerksCount: i,
                                    qualificationIndex: c,
                                    isBonusQualification: d,
                                }),
                                r().createElement(
                                    'div',
                                    { className: Pn },
                                    Ft(o, d, c, _, (t, n, i, o) =>
                                        r().createElement(
                                            r().Fragment,
                                            { key: n },
                                            r().createElement(Tn, {
                                                role: e,
                                                skillIndex: n,
                                                mediaSize: s,
                                                componentKey: a,
                                                isBonusSkill: d,
                                                isUntrained: u,
                                                isLowEfficiency: l,
                                                skillId: t.skillId,
                                                skillIcon: t.skillIcon,
                                                skillUserName: t.skillUserName,
                                                skillProgress: t.skillProgress,
                                                isZero: t.isZero,
                                                isLocked: t.isLocked,
                                                isDisabled: t.isDisabled,
                                                isIrrelevant: t.isIrrelevant,
                                                isInProgress: t.isInProgress,
                                                isFullDirective: t.isFullDirective,
                                                withDirective: t.withDirective,
                                                animationType: t.animationType,
                                                onSkillClick: g,
                                                animationDelay: i,
                                                key: `${m}-${t.animationType}`,
                                            }),
                                            o && r().createElement('div', { className: v()(Hn, d && Wn) }),
                                        ),
                                    ),
                                    0 !== t &&
                                        '' !== n &&
                                        r().createElement(
                                            Et.t,
                                            {
                                                targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                                args: { tooltipId: pt.OU, intCD: t, componentKey: a },
                                            },
                                            r().createElement('div', {
                                                className: zn,
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.quests.bonuses.big.$dyn(n)})`,
                                                },
                                            }),
                                        ),
                                ),
                            );
                        },
                    ),
                    jn = 'SkillsGroupTitle_base_e4',
                    Vn = 'SkillsGroupTitle_base__withBonus_b1',
                    Gn = 'SkillsGroupTitle_titleText_06',
                    Zn = 'SkillsGroupTitle_titleText__untrained_a7',
                    Un = 'SkillsGroupTitle_infoIcon_b4',
                    Kn = (0, a.memo)(({ title: e, componentKey: t, isUntrained: n, isBonusQualifications: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: v()(jn, a && Vn) },
                            r().createElement('div', { className: v()(Gn, n && Zn) }, e),
                            a &&
                                r().createElement(
                                    se.u,
                                    {
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        contentId: R.views.lobby.crew.tooltips.BonusPerksTooltip('resId'),
                                        args: { componentKey: t },
                                    },
                                    r().createElement('div', { className: Un }),
                                ),
                        ),
                    ),
                    qn = 'SkillsMatrix_base_2a',
                    Yn = 'SkillsMatrix_scrollableSection_24',
                    Qn = 'SkillsMatrix_bonusScrollBar_b7',
                    Xn = 'SkillsMatrix_bonusScrollContent_06',
                    Jn = (0, i.Pi)(() => {
                        const e = (0, s.GS)().mediaSize,
                            t = b(),
                            n = t.model,
                            i = t.controls,
                            o = n.tankmanId.get(),
                            l = n.skillsMatrix.componentKey.get(),
                            c = n.computes.mainSkills(),
                            d = n.computes.bonusSkills(),
                            m = n.computes.isUntrained(),
                            _ = n.computes.isLowPerksEfficiency(),
                            g = c.skills.reduce((e, t) => (t.skillProgress === u.I ? ++e : e), 0),
                            E = c.skills.findIndex((e) => e.animationType !== xe.None),
                            p =
                                ((h = [c.skills, ...d.map((e) => e.skills)]),
                                (v = E),
                                Math.max(
                                    ...h.map((e, t) => {
                                        const n = t > 0;
                                        return Math.max(
                                            ...Ft(e, n, t, v, (e, t, a) =>
                                                void 0 === a ? 0 : a + Ct(e.animationType, n),
                                            ),
                                        );
                                    }),
                                ));
                        var h, v;
                        (0, a.useEffect)(() => {
                            if (p > 0) {
                                i.setAnimationInProgress(!0);
                                const e = (0, S.F)(() => i.setAnimationInProgress(!1), p);
                                return () => {
                                    i.setAnimationInProgress(!1), e();
                                };
                            }
                        }, [p, o, i]);
                        const f = (0, a.useCallback)((e) => i.clickSkill(e), [i]);
                        return r().createElement(
                            'div',
                            { className: qn },
                            r().createElement(Kn, {
                                title: m
                                    ? R.strings.crew.matrix.skills.main.disabled()
                                    : R.strings.crew.matrix.skills.main.enabled(),
                                componentKey: l,
                                isUntrained: m,
                            }),
                            r().createElement($n, {
                                mediaSize: e,
                                componentKey: l,
                                isUntrained: m,
                                isLowEfficiency: _,
                                role: c.role,
                                directiveId: c.directiveId,
                                directiveName: c.directiveName,
                                selectedSkillsCount: c.selectedSkillsCount,
                                skills: c.skills,
                                onSkillClick: f,
                                tankmanId: o,
                            }),
                            n.isTankmanInVehicle.get() &&
                                d.length > 0 &&
                                r().createElement(
                                    Le.z,
                                    { className: Yn, classNames: { bar: Qn, content: Xn } },
                                    r().createElement(Kn, {
                                        isBonusQualifications: !0,
                                        title: R.strings.crew.matrix.skills.bonus(),
                                        componentKey: l,
                                        isUntrained: m,
                                    }),
                                    d.map((t, n) =>
                                        r().createElement($n, {
                                            isBonusQualification: !0,
                                            key: `${t.role}-${n}`,
                                            mediaSize: e,
                                            componentKey: l,
                                            isUntrained: m,
                                            isLowEfficiency: _,
                                            qualificationIndex: n + 1,
                                            role: t.role,
                                            directiveId: t.directiveId,
                                            directiveName: t.directiveName,
                                            selectedSkillsCount: t.selectedSkillsCount,
                                            skills: t.skills,
                                            onSkillClick: f,
                                            selectedMajorSkillsAmount: E,
                                            tankmanId: o,
                                        }),
                                    ),
                                ),
                            r().createElement(gt, {
                                mediaSize: e,
                                bonusSkillsCount: d.length,
                                hasPostProgression: n.hasPostProgression.get(),
                                resetGracePeriodLeft: n.skillsMatrix.resetGracePeriodLeft.get(),
                                isResetDisable: n.skillsMatrix.isResetDisable.get(),
                                hasResetDiscount: n.skillsMatrix.hasResetDiscount.get(),
                                hasIncreaseDiscount: n.skillsMatrix.hasIncreaseDiscount.get(),
                                onIncreaseClick: i.increase,
                                onResetClick: i.reset,
                                allSkillsLearned: g === c.skills.length,
                            }),
                        );
                    }),
                    ea = 'PersonalFileViewApp_base_23',
                    ta = 'PersonalFileViewApp_content_ad',
                    na = (0, i.Pi)(({ setTTCVisibility: e }) => {
                        const t = (0, s.GS)().mediaSize,
                            n = b(),
                            i = n.model,
                            u = n.controls,
                            l = i.computes.isTTCVisible();
                        (0, a.useEffect)(() => {
                            u.setTTCVisible(t >= s.cJ.Small), e && e(l);
                        }, [u, l, t, e]);
                        const c = i.tankmanId.get();
                        return (
                            (0, a.useEffect)(() => {
                                window.tutorialApi.updateComponents();
                            }, [c]),
                            r().createElement(
                                'div',
                                { className: ea },
                                r().createElement(
                                    'div',
                                    { className: ta },
                                    r().createElement(o.J, {
                                        withLogging: !0,
                                        rootId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    }),
                                    i.hasPostProgression.get() && r().createElement(Te, null),
                                    r().createElement(Jn, null),
                                ),
                            )
                        );
                    }),
                    aa = R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    ra = r().memo(({ setTTCVisibility: e }) =>
                        r().createElement(
                            p,
                            { options: { rootId: aa } },
                            r().createElement(na, { setTTCVisibility: e }),
                        ),
                    );
            },
            2418: (e, t, n) => {
                'use strict';
                n.r(t), n.d(t, { SERVICE_RECORD_RES_ID: () => re, default: () => se });
                var a = n(6179),
                    r = n.n(a),
                    s = n(3403),
                    i = n(6035),
                    o = n(3215),
                    u = n(4598),
                    l = n(9480),
                    c = n(3946);
                const d = (0, o.q)()(({ observableModel: e }) => {
                        const t = Object.assign(
                            {},
                            e.primitives(['rankName', 'rankIcon', 'battlesCount', 'averageXP', 'isTankmanInVehicle']),
                            { achievementsList: e.array('achievementsList') },
                        );
                        return Object.assign({}, t, {
                            computes: {
                                getAchievementsList: (0, c.Om)(() => l.UI(t.achievementsList.get(), u.yR)),
                                hasAchievements: (0, c.Om)(() => t.achievementsList.get().length > 0),
                            },
                        });
                    }, u.ZT),
                    m = d[0],
                    _ = d[1];
                var g = n(5415),
                    E = n(9216);
                const p = 'AchievementsList_base_90',
                    b = 'AchievementsList_scrollableContent_5c',
                    h = 'AchievementsList_title_f4',
                    v = 'AchievementsList_container_a7',
                    f = 'AchievementsList_item_10',
                    A = 'AchievementsList_bar_4a';
                var C = n(6483),
                    F = n.n(C),
                    y = n(7078),
                    k = n(2603);
                const D = {
                    base: 'AchievementItem_base_45',
                    base__small: 'AchievementItem_base__small_b4',
                    icon: 'AchievementItem_icon_91',
                    amountBG: 'AchievementItem_amountBG_46',
                    amount: 'AchievementItem_amount_65',
                };
                let w;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(w || (w = {}));
                const B = ({ name: e, amount: t, block: n, isRare: a, size: s, className: i }) => {
                        const o =
                            s === w.Small
                                ? R.images.gui.maps.icons.achievement
                                : R.images.gui.maps.icons.achievement.big;
                        return r().createElement(
                            y.t,
                            {
                                args: { tooltipId: k.Th, name: e, block: n, isRare: a },
                                targetId: R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                            },
                            r().createElement(
                                'div',
                                { className: F()(D.base, D[`base__${s}`], i) },
                                r().createElement('div', {
                                    className: D.icon,
                                    style: { backgroundImage: `url(${o.$dyn(e)})` },
                                }),
                                t > 1 &&
                                    r().createElement(
                                        'div',
                                        { className: D.amountBG },
                                        r().createElement('div', { className: D.amount }, t),
                                    ),
                            ),
                        );
                    },
                    S = (0, a.memo)(({ achievements: e }) => {
                        const t = (0, g.GS)().mediaSize,
                            n = t === g.cJ.Small || t === g.cJ.ExtraSmall ? w.Small : w.Big;
                        return r().createElement(
                            'div',
                            { className: p },
                            r().createElement(
                                E.z,
                                { className: b, classNames: { bar: A } },
                                r().createElement(
                                    'div',
                                    { className: h },
                                    R.strings.crew.serviceRecord.achievementsList.title(),
                                ),
                                r().createElement(
                                    'div',
                                    { className: v },
                                    e.map((e, t) =>
                                        r().createElement(B, {
                                            key: `achievement_${t}`,
                                            size: n,
                                            name: e.name,
                                            amount: e.amount,
                                            block: e.block,
                                            isRare: e.isRare,
                                            className: f,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                var N = n(6373);
                const I = 'BattlesInfo_base_25',
                    T = 'BattlesInfo_container_da',
                    x = 'Item_base_e0',
                    L = 'Item_icon_81',
                    O = 'Item_value_28',
                    P = 'Item_name_35',
                    M = ({ name: e, icon: t, value: n }) =>
                        r().createElement(
                            'div',
                            { className: x },
                            r().createElement('div', { className: L, style: { backgroundImage: `url(${t})` } }),
                            r().createElement('div', { className: O }, n),
                            r().createElement('div', { className: P }, e),
                        );
                var H = n(3649);
                const W = {
                    base: 'RankIcon_base_a6',
                    base__big: 'RankIcon_base__big_51',
                    base__small: 'RankIcon_base__small_26',
                };
                let z;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(z || (z = {}));
                const $ = (e, t) => R.images.gui.maps.icons.tankmen.ranks.$dyn(t).$dyn((0, H.BN)(e)),
                    j = ({ icon: e, size: t, className: n }) =>
                        r().createElement('div', {
                            className: F()(W.base, W[`base__${t}`], n),
                            style: { backgroundImage: `url(${$(e, t)})` },
                        }),
                    V = 'RankItem_base_19',
                    G = 'RankItem_icon_10',
                    Z = 'RankItem_name_9d',
                    U = ({ name: e, icon: t }) =>
                        r().createElement(
                            N.i,
                            {
                                header: R.strings.crew.serviceRecord.tooltip.rank.header(),
                                body: R.strings.crew.serviceRecord.tooltip.rank.body(),
                            },
                            r().createElement(
                                'div',
                                { className: V },
                                r().createElement(j, { icon: t, size: z.Big, className: G }),
                                r().createElement('div', { className: Z }, e),
                            ),
                        ),
                    K = (0, a.memo)(({ rankName: e, rankIcon: t, battlesCount: n, averageXP: a, className: s }) =>
                        r().createElement(
                            'div',
                            { className: F()(I, s) },
                            r().createElement(
                                'div',
                                { className: T },
                                r().createElement(U, { name: e, icon: t }),
                                r().createElement(
                                    N.i,
                                    {
                                        header: R.strings.tooltips.battlesDetails.header(),
                                        body: R.strings.tooltips.battlesDetails.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(M, {
                                            name: R.strings.crew.serviceRecord.battlesCounter(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.battlesCountIcon(),
                                            value: n,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    N.i,
                                    {
                                        header: R.strings.crew.serviceRecord.tooltip.averageXP.header(),
                                        body: R.strings.crew.serviceRecord.tooltip.averageXP.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(M, {
                                            name: R.strings.crew.serviceRecord.averageXP(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.averageXPIcon(),
                                            value: a,
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    q = 'NoAchievements_base_a5',
                    Y = 'NoAchievements_icon_c7',
                    Q = 'NoAchievements_text_34',
                    X = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: F()(q, e) },
                            r().createElement('div', { className: Y }),
                            r().createElement('div', { className: Q }, R.strings.crew.serviceRecord.noAchievements()),
                        ),
                    J = 'ServiceRecordApp_base_3d',
                    ee = 'ServiceRecordApp_content_08',
                    te = 'ServiceRecordApp_battlesInfo_ff',
                    ne = 'ServiceRecordApp_noAchievements_07',
                    ae = (0, s.Pi)(({ setTTCVisibility: e }) => {
                        e(!1);
                        const t = _().model,
                            n = t.computes.hasAchievements();
                        return r().createElement(
                            'div',
                            { className: J },
                            r().createElement(
                                'div',
                                { className: ee },
                                r().createElement(i.J, {
                                    rootId: R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                                }),
                                r().createElement(K, {
                                    rankName: t.rankName.get(),
                                    rankIcon: t.rankIcon.get(),
                                    battlesCount: t.battlesCount.get(),
                                    averageXP: t.averageXP.get(),
                                    className: te,
                                }),
                                n
                                    ? r().createElement(S, { achievements: t.computes.getAchievementsList() })
                                    : r().createElement(X, { className: ne }),
                            ),
                        );
                    }),
                    re = R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    se = r().memo(({ setTTCVisibility: e }) =>
                        r().createElement(
                            m,
                            { options: { rootId: re } },
                            r().createElement(ae, { setTTCVisibility: e }),
                        ),
                    );
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
                                E = (0, d.Om)(() => !r() && t.buttonsBar.get().isVisible),
                                p = (0, d.Om)(() => {
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
                                    isButtonBarVisible: E,
                                    getLayoutInfo: u,
                                    getUiLoggingParentScreen: p,
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
                    E = g[0],
                    p = g[1];
                var b = n(6483),
                    h = n.n(b),
                    v = n(6373),
                    f = n(2056);
                let A;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(A || (A = {}));
                const C = 'ButtonsBar_base_9c',
                    F = 'ButtonsBar_button_d1',
                    y = 'ButtonsBar_button__crewOperaions_70',
                    k = 'ButtonsBar_button__crewBooks_b4',
                    D = 'ButtonsBar_button__toggle_64';
                var w = n(3457),
                    B = n(9987),
                    S = n(3649);
                const N = 'CrewBookButton_base_da',
                    I = 'CrewBookButton_button_ee',
                    T = 'CrewBookButton_icon_11',
                    x = 'CrewBookButton_discount_6b',
                    L = 'CrewBookButton_counter_5d',
                    O = (0, o.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = p(),
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
                                { id: 'crew_book_button', className: h()(N, e) },
                                s().createElement(
                                    w.u5,
                                    { type: w.L$.primary, mixClass: I, disabled: u, onClick: o },
                                    s().createElement('div', { className: T }),
                                ),
                                !u &&
                                    '0' !== i.newAmount &&
                                    s().createElement(
                                        'div',
                                        { className: L },
                                        s().createElement(B.A, { value: i.newAmount }),
                                    ),
                                !u && i.hasDiscount && s().createElement('div', { className: x }),
                            ),
                        );
                    });
                var P = n(3616);
                const M = ['children'];
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
                        })(e, M);
                    return s().createElement(
                        P.Z,
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
                var z = n(4489);
                let $;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })($ || ($ = {}));
                var j = n(1943);
                const V = 'CrewOperationsButton_base_e3',
                    G = 'CrewOperationsButton_button_8e',
                    Z = 'CrewOperationsButton_icon_0c',
                    U = 'CrewOperationsButton_autoReturnIcon_f0',
                    K = (0, o.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = p().model,
                            a = ((e) => {
                                const t = (0, j.Jp)(m.D9);
                                return (n) => t({ action: m.eX.Click, parentScreen: e, item: n });
                            })(n.computes.getUiLoggingParentScreen()),
                            r = n.crewOperations.get();
                        return s().createElement(
                            'div',
                            { id: 'crew_operations_button', className: h()(V, e) },
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
                                            w.u5,
                                            { type: w.L$.primary, mixClass: G, disabled: t },
                                            s().createElement('div', { className: Z }),
                                        ),
                                        r.isAutoReturnOn && s().createElement('div', { className: U }),
                                    ),
                                ),
                            ),
                        );
                    });
                var q = n(9631);
                const Y = 'CrewToggleButton_base_03',
                    Q = 'CrewToggleButton_button_89',
                    X = 'CrewToggleButton_iconContainer_f9',
                    J = 'CrewToggleButton_icon_a7';
                let ee;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(ee || (ee = {}));
                const te = (0, r.memo)(({ type: e, state: t, isDisabled: n, onClick: a, classMix: i }) => {
                        const o = (0, r.useMemo)(() => {
                            const n = t === A.Disabled ? A.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${n})`,
                            };
                        }, [e, t]);
                        return s().createElement(
                            'div',
                            { className: h()(Y, i) },
                            s().createElement(
                                q.C,
                                {
                                    type: w.L$.primary,
                                    isActive: t === A.On,
                                    disabled: n || t === A.Disabled,
                                    className: Q,
                                    onClick: a,
                                },
                                s().createElement(
                                    'div',
                                    { className: X },
                                    s().createElement('div', { className: J, style: o }),
                                ),
                            ),
                        );
                    }),
                    ne = {
                        [A.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [A.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [A.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [A.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    ae = (0, o.Pi)(({ isWidgetDisabled: e }) => {
                        const t = p(),
                            n = t.model,
                            a = t.controls,
                            r = n.acceleratedTraining.get(),
                            i = n.wotPlus.get(),
                            o = a.onAcceleratedTrainingClick,
                            u = a.onWotPlusClick,
                            l = ne[r.state];
                        return s().createElement(
                            'div',
                            { className: C },
                            s().createElement(K, { classMix: h()(F, y), isWidgetDisabled: e }),
                            s().createElement(O, { classMix: h()(F, k), isWidgetDisabled: e }),
                            r.state !== A.Hidden &&
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
                                            classMix: h()(F, D),
                                        }),
                                    ),
                                ),
                            i.state !== A.Hidden &&
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
                                            classMix: h()(F, D),
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
                    Ee = ({ name: e, isSkin: t = !1, isCropped: n = !1, className: a }) => {
                        const r = (0, i.GS)().mediaSize < i.cJ.Large;
                        return s().createElement(de.G, {
                            name: e,
                            size: r && n ? de.U.c100x60Barracks : de.U.c158x118,
                            isSkin: t,
                            classMix: h()(me, r && n && _e, !r && n && ge, a),
                        });
                    },
                    pe = {
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
                            className: h()(pe.base, pe[`base__${i}`], r && pe.base__visible, a),
                            style: { backgroundImage: `url(R.images.gui.maps.icons.crewWidget.slot.${t}.${i})` },
                        });
                    },
                    ve = 'BaseSlot_base_97',
                    fe = 'BaseSlot_base__hovered_61',
                    Ae = 'BaseSlot_base__inactive_7e',
                    Ce = 'BaseSlot_base__high_2c',
                    Fe = 'BaseSlot_delimiter_f8',
                    ye = 'BaseSlot_layer_cb',
                    ke = ({
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
                            E = g && !l && !c.isCurrentLayoutHangar;
                        return s().createElement(
                            'div',
                            {
                                className: h()(
                                    ve,
                                    e && Ce,
                                    (m || i) && !c.isCurrentLayoutHangar && fe,
                                    (i || !u) && Ae,
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
                                    className: ye,
                                }),
                            s().createElement(he, {
                                type: be.HoverGlow,
                                size: t,
                                isHigh: e,
                                isVisible: E,
                                className: ye,
                            }),
                            s().createElement(he, {
                                type: be.TankmanSlotHover,
                                size: t,
                                isHigh: e,
                                isVisible: g,
                                className: ye,
                            }),
                            o &&
                                s().createElement(he, {
                                    type: be.Disabled,
                                    size: t,
                                    isHigh: e,
                                    isVisible: !0,
                                    className: ye,
                                }),
                            a,
                            s().createElement('div', { className: Fe }),
                        );
                    },
                    De = ({
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
                    we = 'DogSlot_base_8f',
                    Be = 'DogSlot_icon_ba',
                    Se = 'DogSlot_container_63',
                    Ne = 'DogSlot_roleAndName_c9',
                    Ie = 'DogSlot_role_5c',
                    Te = 'DogSlot_name_9c',
                    xe = 'DogSlot_btnDetails_b7',
                    Le = { transform: 'translateX(0rem)' },
                    Re = (0, o.Pi)(({ isDisabled: e, layoutInfo: t, size: n }) => {
                        const a = p(),
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
                                    from: Le,
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
                                    ke,
                                    {
                                        onClick: c,
                                        isDisabled: e,
                                        isEnabledForMouse: !1,
                                        layoutInfo: t,
                                        isHigh: !1,
                                        size: n,
                                    },
                                    s().createElement(
                                        De,
                                        {
                                            startState: Le,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            className: we,
                                            isTankmanMode: !1,
                                        },
                                        s().createElement(
                                            ue.animated.div,
                                            { style: m },
                                            s().createElement(Ee, { name: 'ussr_dog_1', isCropped: !0, className: Be }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Se },
                                            s().createElement(
                                                'div',
                                                { className: Ne },
                                                s().createElement('div', { className: Ie }),
                                                s().createElement(
                                                    'div',
                                                    { className: Te },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(u).name(),
                                                ),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: xe },
                                                s().createElement(
                                                    w.u5,
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
                const Pe = ({
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
                                    o && o(e), ((e) => e.button === $.RIGHT)(e) && u();
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
                    Me = ['children'];
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
                            })(e, Me);
                        return s().createElement(
                            Pe,
                            He({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    ze = 'ChangeCrewButton_base_0f',
                    $e = 'ChangeCrewButton_base__inactive_77',
                    je = 'ChangeCrewButton_normalState_07',
                    Ve = 'ChangeCrewButton_normalState__hide_db',
                    Ge = 'ChangeCrewButton_hoverState_68',
                    Ze = 'ChangeCrewButton_hoverState__show_89',
                    Ue = (0, o.Pi)(({ isSelected: e, isLocked: t, mainRole: n, isFemale: a }) => {
                        const i = p().model,
                            o = (0, r.useState)(!1),
                            u = o[0],
                            l = o[1],
                            c = (0, j.Sr)(m.D9, {
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
                                    className: h()(ze, (t || e) && $e),
                                    onMouseEnter: () => {
                                        c.onShow(), t || e || (oe.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        c.onHide(), l(!1);
                                    },
                                },
                                s().createElement('div', { className: h()(je, u && Ve) }),
                                s().createElement('div', { className: h()(Ge, (e || u) && Ze) }),
                            ),
                        );
                    }),
                    Ke = 'CrewSlot_base_ac',
                    qe = 'CrewSlot_changeCrew_02',
                    Ye = 'CrewSlot_content_5b',
                    Qe = 'CrewSlot_content__withChangeCrewButton_4e',
                    Xe = 'CrewSlot_layer_49';
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
                    Et = 'EmptySlotContent_specialization__disabled_3d',
                    pt = 'EmptySlotContent_vehicle_55',
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
                                E = _[1],
                                p = (0, r.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || E.start({ reset: !0, reverse: !0 });
                                }, [E, t]),
                                b = c.U2(e, 0) || '',
                                v = R.strings.crew_widget.vehicleWithName.$dyn((0, S.BN)(a)),
                                f = (0, S.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(b),
                                });
                            return s().createElement(
                                'div',
                                { className: h()(lt, m && ct), onMouseEnter: p, onMouseLeave: p },
                                s().createElement(
                                    'div',
                                    { className: dt },
                                    s().createElement(
                                        ue.animated.div,
                                        { className: _t, style: d },
                                        s().createElement(Ee, { name: 'empty', className: mt, isCropped: !m }),
                                        s().createElement(
                                            ue.animated.div,
                                            { className: _t, style: i ? void 0 : l },
                                            s().createElement(Ee, { name: 'emptyRed', className: mt, isCropped: !m }),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: h()(gt, i && Et) },
                                    s().createElement(ut, { slotIdx: u, roles: e, name: f }),
                                ),
                                s().createElement(
                                    ue.animated.div,
                                    { className: pt, style: o ? void 0 : g },
                                    (0, S.uF)(v, { name: n }),
                                ),
                            );
                        },
                    );
                var ft = n(8617),
                    At = n(5855);
                const Ct = 'TankmanInfo_base_69',
                    Ft = 'TankmanInfo_base__disabled_36',
                    yt = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    kt = 'TankmanInfo_specialization_77',
                    Dt = 'TankmanInfo_specialization__withBonusSkills_b1',
                    wt = 'TankmanInfo_skillsContainer_17',
                    Bt = 'TankmanInfo_skillsContainer__withBonusSkills_83',
                    St = (e, t) => (e ? At.t6.None : t < i.cJ.Large ? At.t6.ExtraOverlap : At.t6.Overlap),
                    Nt = ({ slotIdx: e, tankman: t, isDisabled: n, layoutInfo: a, blinkStyle: r }) => {
                        const o = t.skills.bonusSkills.length > 0,
                            u = (0, i.GS)().mediaSize;
                        return s().createElement(
                            'div',
                            { className: h()(Ct, n && Ft) },
                            s().createElement(
                                Je.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: et.v$, tankmanID: t.tankmanID },
                                },
                                s().createElement('div', { className: yt }),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(kt, o && Dt) },
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
                                { className: h()(wt, o && Bt) },
                                s().createElement(ft.n, {
                                    tankmanID: t.tankmanID,
                                    size: At.Ow.c24x24,
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
                    Tt = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    xt = 'QuickTrainingTankmanSlotContent_iconContainer_f1',
                    Lt = 'QuickTrainingTankmanSlotContent_icon_7c',
                    Rt = 'QuickTrainingTankmanSlotContent_layer_10',
                    Ot = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    Pt = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    Mt = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    Ht = { opacity: 0 },
                    Wt = [{ opacity: 1 }, { opacity: 0 }],
                    zt = (0, r.memo)(
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
                                E = g[0],
                                p = g[1],
                                b = (0, r.useRef)(!1);
                            return (
                                (0, r.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? b.current ||
                                          (_.start({
                                              from: Ot,
                                              to: Pt,
                                              reverse: false,
                                              config: { duration: 300, easing: ce.BH },
                                          }),
                                          (b.current = !0))
                                        : b.current
                                          ? (t.skills.majorSkills.length > c.current || t.lastSkillLevelFull > l.current
                                                ? (_.start({
                                                      from: Pt,
                                                      to: Mt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ce.BH },
                                                  }),
                                                  (l.current = t.lastSkillLevelFull),
                                                  (c.current = t.skills.majorSkills.length),
                                                  p.start({
                                                      from: Ht,
                                                      to: Wt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ce.BH },
                                                  }))
                                                : _.start({ reset: !0, reverse: !0 }),
                                            (b.current = !1))
                                          : ((l.current = t.lastSkillLevelFull),
                                            (c.current = t.skills.majorSkills.length));
                                }, [_, p, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.majorSkills.length]),
                                s().createElement(
                                    'div',
                                    { className: It },
                                    s().createElement(
                                        ue.animated.div,
                                        { style: E },
                                        s().createElement(he, {
                                            type: be.SelectedHighlight,
                                            size: u,
                                            isHigh: t.roles.length > 1,
                                            className: Rt,
                                        }),
                                    ),
                                    s().createElement(
                                        ue.animated.div,
                                        { className: xt, style: a },
                                        s().createElement(Ee, {
                                            name: t.icon,
                                            isSkin: t.isInSkin,
                                            isCropped: 0 === t.skills.bonusSkills.length,
                                            className: Lt,
                                        }),
                                    ),
                                    s().createElement(ue.animated.div, { className: Tt, style: m }),
                                    s().createElement(Nt, {
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
                    $t = 'TankmanSlotContent_base_00',
                    jt = 'TankmanSlotContent_icon_ef',
                    Vt = (0, r.memo)(({ slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a, blinkStyle: r }) =>
                        s().createElement(
                            'div',
                            { className: $t },
                            s().createElement(Ee, {
                                name: t.icon,
                                isCropped: 0 === t.skills.bonusSkills.length,
                                isSkin: t.isInSkin,
                                className: jt,
                            }),
                            s().createElement(Nt, {
                                slotIdx: e,
                                tankman: t,
                                layoutInfo: n,
                                isDisabled: a,
                                blinkStyle: r,
                            }),
                        ),
                    ),
                    Gt = (0, r.memo)(
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
                                  ? s().createElement(zt, {
                                        slotIdx: e,
                                        tankman: n,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: a,
                                        isDisabled: o,
                                        size: m,
                                    })
                                  : s().createElement(Vt, {
                                        slotIdx: e,
                                        tankman: n,
                                        layoutInfo: a,
                                        isDisabled: o,
                                        blinkStyle: l,
                                    }),
                    ),
                    Zt = { transform: 'translateX(0rem)' },
                    Ut = { transform: 'translateX(41rem)' },
                    Kt = { opacity: 0 },
                    qt = { opacity: 1 },
                    Yt = (0, o.Pi)(
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
                            const E = p(),
                                b = E.model,
                                v = E.controls,
                                f = ((e, t) => {
                                    const n = (0, j.Jp)(m.D9),
                                        a = (0, z.f)(
                                            () => n({ action: m.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            m.tL,
                                        );
                                    return (e) => {
                                        e.button === $.RIGHT && a();
                                    };
                                })(b.computes.getUiLoggingParentScreen(), m.x3.SlotContextMenu),
                                A = v.onSlotClick,
                                C = v.onChangeCrewClick,
                                F = b.computes.isChangeCrewButtonVisible(),
                                y = b.computes.isTankmanMode(),
                                k = b.isCrewLocked.get(),
                                D = b.vehicleName.get(),
                                w = b.vehicleType.get(),
                                B = -1 === n.tankmanID ? t.length > 1 : n.skills.bonusSkills.length > 0,
                                S = !u && n.isInteractive && (!a.isCurrentLayoutQuickTraining || o),
                                N = (0, r.useCallback)(() => {
                                    S && !y && ((0, oe.G)(R.sounds.yes1()), A(e, n.tankmanID));
                                }, [e, n, A, y, S]),
                                I = (0, r.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), k || ((0, oe.G)(R.sounds.yes1()), C(e, n.tankmanID));
                                    },
                                    [e, n, C, k],
                                ),
                                T = (0, r.useMemo)(() => ({ tankmanID: n.tankmanID, slotIdx: e }), [n, e]);
                            return s().createElement(
                                We,
                                {
                                    args: T,
                                    isEnabled: !u && !a.isCurrentLayoutSkillsTraining,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: f,
                                },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(
                                        ke,
                                        {
                                            isHigh: B,
                                            onClick: N,
                                            isSelected: i,
                                            isDisabled: u,
                                            isEmpty: -1 === n.tankmanID,
                                            layoutInfo: a,
                                            isEnabledForMouse: S,
                                            size: g,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: Ke },
                                            n.hasWarning &&
                                                s().createElement(he, {
                                                    type: be.UntrainedTankmanHighlight,
                                                    size: g,
                                                    isHigh: B,
                                                    className: Xe,
                                                }),
                                            i &&
                                                s().createElement(he, {
                                                    type: y ? be.SelectedHighlight2 : be.SelectedHighlight,
                                                    size: g,
                                                    isHigh: B,
                                                    className: Xe,
                                                }),
                                            s().createElement(
                                                De,
                                                {
                                                    startState: Zt,
                                                    endState: Ut,
                                                    layoutInfo: a,
                                                    isPaused: !F,
                                                    className: h()(Ye, F && Qe),
                                                    isTankmanMode: y,
                                                },
                                                s().createElement(Gt, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: n,
                                                    layoutInfo: a,
                                                    isDisabled: u,
                                                    vehicleName: D,
                                                    vehicleType: w,
                                                    blinkSlotStyle: l,
                                                    blinkTankmanStyle: d,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: i,
                                                    size: g,
                                                    isHigh: B,
                                                }),
                                            ),
                                            F &&
                                                s().createElement(
                                                    'div',
                                                    { onClick: I },
                                                    s().createElement(
                                                        De,
                                                        {
                                                            startState: Kt,
                                                            endState: qt,
                                                            layoutInfo: a,
                                                            className: qe,
                                                            isTankmanMode: y,
                                                        },
                                                        s().createElement(Ue, {
                                                            isSelected: a.isCurrentLayoutMemberChange && i,
                                                            isLocked: k,
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
                    Qt = 'SlotsList_base_5f',
                    Xt = 'SlotsList_base__hangar_8b';
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
                        const i = p().model,
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
                            E = (0, r.useCallback)(
                                (n) => t || (e.isCurrentLayoutQuickTraining && -1 === n),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return s().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: h()(Qt, e.isCurrentLayoutHangar && Xt, n) },
                            i.computes
                                .getSlots()
                                .map((t, n) =>
                                    s().createElement(
                                        Yt,
                                        Jt({}, t, {
                                            layoutInfo: e,
                                            key: `slot_${n}_${t.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (i.computes.isSlotSelected(t.slotIdx) || i.computes.isTankmanMode()),
                                            isAnySlotSelected: i.computes.isAnySlotSelected(),
                                            isDisabled: E(t.tankman.tankmanID),
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
                        const e = p().model,
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
                            s().createElement(E, { options: rn }, s().createElement(an, null)),
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
                    E = 'FilterTitle_label_05',
                    p = 'FilterTitle_discount_42',
                    b = 'FilterTitle_discountIcon_30',
                    h = ({ label: e, hasDiscount: t, className: n }) =>
                        r().createElement(
                            'div',
                            { className: i()(g, n) },
                            r().createElement('div', { className: E }, e),
                            t && r().createElement('div', { className: p }, r().createElement('div', { className: b })),
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
                const A = 'ToggleIcon_base_59',
                    C = 'ToggleIcon_base__small_3e',
                    F = 'ToggleIcon_icon_e7',
                    y = r().memo(function ({ icon: e, isSmall: t = !1, classNames: n }) {
                        return r().createElement(
                            'div',
                            { className: i()(A, t && C) },
                            r().createElement('div', {
                                className: i()(F, null == n ? void 0 : n.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var k = n(9690);
                const D = 'VehicleTier_base_9c',
                    w = 'VehicleTier_base__small_fc',
                    B = ({ level: e, isSmall: t = !1 }) =>
                        r().createElement('div', { className: i()(D, t && w) }, (0, k.HG)(e)),
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
                    N = ({ id: e, icon: t, type: n, isSmall: a = !0, isSelected: s = !1 }) =>
                        n === v.VehicleTier
                            ? r().createElement(B, { isSmall: a, level: Number(e) })
                            : r().createElement(y, {
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
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                let x;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(x || (x = {}));
                const L = ({ header: e, body: t, contentId: n, targetId: a }) =>
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
                        theme: c = x.Default,
                    }) => {
                        const g = c === x.InPopup;
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
                                        { key: n, tooltipArgs: L(s), className: I.toggle },
                                        r().createElement(
                                            _.C,
                                            T({}, l, {
                                                className: i()(I.toggle, null == l ? void 0 : l.className),
                                                isActive: a,
                                                onClick: () => (null == o ? void 0 : o(e, n)),
                                                counter: c,
                                            }),
                                            r().createElement(N, {
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
                var P = n(9197);
                const M = (0, n(3215).q)()(
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
                    H = M[0],
                    W = M[1];
                var z = n(3457),
                    $ = n(3616),
                    j = n(1037),
                    V = n(9367);
                const G = 'PopupButton_base_7c',
                    Z = 'PopupButton_popupButtonLabel_ed',
                    U = 'PopupButton_buttonIconWrapper_d7',
                    K = 'PopupButton_buttonIcon_e0',
                    q = 'PopupButton_buttonIcon__isHighlighted_84',
                    Y = 'PopupButton_discountAlert_c8',
                    Q = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: n = j.IC.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: G },
                            r().createElement('div', { className: Z }, R.strings.crew.filter.popup.button.title()),
                            r().createElement(
                                $.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: n,
                                },
                                r().createElement(
                                    'div',
                                    { id: 'popup_btn', className: U },
                                    r().createElement(
                                        _.C,
                                        { type: z.L$.ghost, size: z.qE.small, isActive: e, hasIndicator: !1 },
                                        r().createElement('div', { className: i()(K, e && q) }),
                                    ),
                                    t && r().createElement(V.Q, { className: Y }),
                                ),
                            ),
                        );
                var X = n(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ne = ({ onClick: e }) =>
                        r().createElement(
                            'div',
                            { className: J },
                            r().createElement(
                                u.i,
                                X.Xd,
                                r().createElement(
                                    z.u5,
                                    { mixClass: ee, onClick: e, type: z.L$.ghost, size: z.qE.small },
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
                    Ee = R.images.gui.maps.icons.components.input;
                function pe(e, t) {
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
                            onMouseEnter: E,
                            onMouseLeave: p,
                            onMouseDown: b,
                            onMouseUp: h,
                            onClick: v,
                            onChange: f,
                            onClear: A,
                            onFocus: C,
                            onBlur: F,
                        }) => {
                            const y = (0, a.useState)(!1),
                                k = y[0],
                                D = y[1],
                                w = (0, a.useRef)(null),
                                B = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = o !== ue,
                                N = (0, a.useCallback)(
                                    (e) => {
                                        S && (D(!0), C && C(e));
                                    },
                                    [S, C],
                                ),
                                I = (0, a.useCallback)(
                                    (e) => {
                                        S && !B.current.mouseOver && (D(!1), F && F(e));
                                    },
                                    [S, F],
                                );
                            (0, a.useEffect)(() => {
                                S && k && d && w.current && w.current.select();
                            }, [d, k, S]);
                            const T = (0, a.useCallback)(
                                    (e) => {
                                        S && f && f(e.target.value);
                                    },
                                    [S, f],
                                ),
                                x = (0, a.useCallback)(
                                    (e) => {
                                        S && ((B.current.mouseOver = !0), E && E(e));
                                    },
                                    [S, E],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        S &&
                                            w.current &&
                                            (B.current.mouseDown && w.current.focus(),
                                            (B.current.mouseOver = !1),
                                            p && p(e));
                                    },
                                    [S, p],
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
                                P = (0, a.useCallback)(
                                    (e) => {
                                        if (S && w.current) {
                                            (!k || (k && e.target !== w.current)) && w.current.focus(), v && v(e);
                                        }
                                    },
                                    [k, S, v],
                                ),
                                M = u || me[n],
                                H = Boolean(_),
                                W = i()(
                                    he.base,
                                    he[`base__${s}`],
                                    l && he[`base__${o}`],
                                    k && he.base__focused,
                                    H && he.base__withIcon,
                                    g,
                                ),
                                z = (0, a.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                $ = i()(he.input, he[`input__${n}`]),
                                j = i()(he.icon, he[`icon__${n}`]),
                                V = i()(he.placeholder, he[`placeholder__${n}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: x,
                                    onMouseDown: R,
                                    onMouseUp: O,
                                    onMouseLeave: L,
                                    onClick: P,
                                },
                                !S && r().createElement('div', { className: he.disabled }),
                                z && r().createElement('div', { style: z, className: j }),
                                r().createElement('input', {
                                    ref: w,
                                    className: $,
                                    type: _e[n],
                                    value: t,
                                    onChange: T,
                                    disabled: !S,
                                    onFocus: N,
                                    onBlur: I,
                                    maxLength: m,
                                }),
                                M && !t && !k && r().createElement('div', { className: V }, M),
                                c &&
                                    r().createElement('div', {
                                        className: he.clear,
                                        onClick: (e) => {
                                            be.$.playClick(), A && A(e);
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
                    Ae = ({ variant: e, show: t = !0, helperText: n, helperIcon: s, classMix: o }) => {
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
                    Ce = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Fe = [
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
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const ke = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    De = (e) => {
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
                            E = void 0 === g ? '' : g,
                            p = e.isValidated,
                            b = void 0 === p || p,
                            h = e.showHelper,
                            v = void 0 === h || h,
                            f = e.error,
                            A = e.options,
                            C = e.onFocus,
                            F = e.onMouseEnter,
                            y = e.onMouseLeave,
                            k = e.onMouseUp,
                            D = e.onMouseDown,
                            w = e.onChange,
                            B = e.classMix,
                            S = e.controlClassMix,
                            N = e.helperClassMix,
                            I = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Fe);
                        const T = (0, a.useState)(m),
                            x = T[0],
                            L = T[1],
                            R = (0, a.useState)(b),
                            O = R[0],
                            P = R[1],
                            M = (0, a.useMemo)(() => Object.assign({}, ke, A), [A]),
                            H = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: s }),
                            W = (0, a.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), L(e));
                            }, []),
                            z = (0, a.useCallback)(
                                (e) => {
                                    let t = !0;
                                    M.performChangeValidation &&
                                        (t = M.changesValidator ? M.changesValidator(e) : pe(e, H.current.type)),
                                        w && w(e, t);
                                },
                                [w, M],
                            ),
                            $ = (0, a.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            j = (0, a.useCallback)(() => W(''), [W]);
                        (0, a.useEffect)(() => () => $(), [$]);
                        const V = (0, a.useCallback)(
                            (e) => {
                                $(),
                                    M.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              z(e);
                                          }, M.debounceTime))
                                        : z(e);
                            },
                            [z, $, M.debounceTime],
                        );
                        (0, a.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== x ||
                                (V(H.current.value), (H.current.isChangeHandled = !0));
                        }, [x, V]),
                            (0, a.useEffect)(() => {
                                H.current.isChangeHandled && m !== H.current.value && ((H.current.value = m), L(m)),
                                    (H.current.type = s);
                            }, [m, s]),
                            (0, a.useEffect)(() => {
                                P(b);
                            }, [b, u]);
                        const G = (0, a.useCallback)((e) => F && F(e), [F]),
                            Z = (0, a.useCallback)(
                                (e) => {
                                    M.disableHighlightOnFocus && O && P(!1), C && C(e);
                                },
                                [O, C, M.disableHighlightOnFocus],
                            ),
                            U = (0, a.useCallback)((e) => k && k(e), [k]),
                            K = (0, a.useCallback)((e) => D && D(e), [D]),
                            q = (0, a.useCallback)((e) => y && y(e), [y]),
                            Y = (0, a.useMemo)(
                                () =>
                                    M.withTypeIcon
                                        ? (function (e, t) {
                                              return e === re ? Ee.$dyn(`search_${t}`) : '';
                                          })(s, c)
                                        : '',
                                [s, c, M.withTypeIcon],
                            ),
                            Q = E || ge[s],
                            X = Boolean(x),
                            J = f ? ce : u,
                            ee = Boolean(f) || O,
                            te = (0, a.useMemo)(
                                () => ('boolean' == typeof M.withClear ? X && M.withClear : X && s === re),
                                [s, X, M],
                            ),
                            ne = i()(Ce.base, Ce[`base__${c}`], Ce[`base__${u}`], B);
                        return r().createElement(
                            'div',
                            { id: t, className: ne, onMouseEnter: G, onMouseDown: K, onMouseUp: U, onMouseLeave: q },
                            r().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                r().createElement(
                                    ve,
                                    ye(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: Y,
                                            size: c,
                                            type: s,
                                            variant: J,
                                            value: x,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: M.selectOnFocus,
                                            maxLength: M.maxLength,
                                            classMix: S,
                                            onFocus: Z,
                                            onChange: W,
                                            onClear: j,
                                        },
                                        I,
                                    ),
                                ),
                            ),
                            Q &&
                                r().createElement(
                                    'div',
                                    { className: Ce.helper },
                                    r().createElement(Ae, {
                                        variant: J,
                                        show: v && (M.isPermanentHelper || ee),
                                        helperText: f || Q,
                                        helperIcon: M.helperIconSource,
                                        classMix: N,
                                    }),
                                ),
                        );
                    },
                    we = ({ value: e, placeholder: t, tooltipHeader: n, onChange: a, className: s, tooltipBody: i }) =>
                        r().createElement(
                            u.i,
                            { header: null != n ? n : void 0, body: i, isEnabled: Boolean(n || i) },
                            r().createElement(De, {
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
                            E = g || (0 === c && 0 === d),
                            p = n.popoverTooltipHeader.get(),
                            b = n.popoverTooltipBody.get();
                        return r().createElement(
                            'div',
                            { className: i()(Be.base, Be[`base__${m}`]) },
                            r().createElement(
                                'div',
                                { className: Be.titleWrapper },
                                r().createElement(P.C, {
                                    title: n.title.get(),
                                    isGlowVisible: E,
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
                                        r().createElement(we, {
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
                                            header: null != p ? p : void 0,
                                            body: null != b ? b : void 0,
                                            isEnabled: Boolean(p || b),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Be.popupButtonWrapper },
                                            r().createElement(Q, {
                                                isHighlighted: n.isPopoverHighlighted.get(),
                                                hasDiscountAlert: n.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ne = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') },
                    Ie = r().memo(function ({ popoverDirection: e }) {
                        return r().createElement(H, { options: Ne }, r().createElement(Se, { popoverDirection: e }));
                    });
            },
            6035: (e, t, n) => {
                'use strict';
                n.d(t, { J: () => ft });
                var a = n(4029),
                    r = n(6179),
                    s = n.n(r),
                    i = n(6483),
                    o = n.n(i),
                    u = n(3403),
                    l = n(3618),
                    c = n(7515),
                    d = n(1856),
                    m = n(3138),
                    _ = n(6112),
                    g = n(4598);
                var E = n(2039);
                const p = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
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
                const h = (0, r.forwardRef)(function (e, t) {
                        let n = e.src,
                            a = e.className,
                            i = e.autoplay,
                            o = void 0 !== i && i,
                            u = e.style,
                            l = e.loop,
                            h = void 0 !== l && l,
                            v = e.isPrebufferKeyframes,
                            f = e.keyframesNameConfig,
                            A = e.onClick,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, p);
                        const F = t,
                            y = (0, r.useRef)(null);
                        return (
                            (0, E.b)(() =>
                                m.O.view.events.onDisplayChanged((e, t) => {
                                    var n, a;
                                    t === _.W.hidden && (null == (n = y.current) || n.pause());
                                    t === _.W.shown && (null == (a = y.current) || a.play());
                                }),
                            ),
                            (0, r.useEffect)(
                                () =>
                                    (0, d.v)(() => {
                                        const e = y.current;
                                        if (!F || !e || !v)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [v, F],
                            ),
                            (0, r.useEffect)(() => {
                                if (F && y.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: g.ZT,
                                        },
                                        t = () => {
                                            let t = 0;
                                            const n = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function n() {
                                                            e(), (t = requestAnimationFrame(n));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (y.current) {
                                                        const n = y.current,
                                                            a = n.currentTime,
                                                            r = n.duration;
                                                        if (
                                                            (t !== a &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: a, duration: r }),
                                                                ),
                                                                (t = a)),
                                                            y.current.paused || !F || !v)
                                                        )
                                                            return;
                                                        const s = y.current.cohGetKeyframeTimestamps();
                                                        s.forEach((t, n) => {
                                                            a > s[n] - 0.02 &&
                                                                a < s[n] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const a = Object.keys(null != f ? f : {})[n];
                                                                    return e({
                                                                        time: t,
                                                                        name: `${f ? a : `Point_${n}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                a = n[0],
                                                r = n[1];
                                            return a(), r;
                                        };
                                    e.changeTimeLoop = t();
                                    const n = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const n = e.changeTimeHandlers,
                                                    a = n.indexOf(t);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : n.splice(a, 1);
                                            }
                                        ),
                                        a = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const n = e.changeKeyframeHandlers,
                                                    a = n.indexOf(t);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : n.splice(a, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = y.current) ? void 0 : e.currentTime;
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = y.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            y.current && (y.current.currentTime = (0, c.u)(0, y.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = y.current) ? void 0 : e.play();
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = y.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            u(), i(0);
                                        },
                                        d = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = y.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        m = (e) => {
                                            i(e), o();
                                        },
                                        _ = (e) => {
                                            i(e), u();
                                        },
                                        E = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        p = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = y.current) || n.addEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = y.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        b = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = y.current) || n.removeEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = y.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (F.current = {
                                            on: p,
                                            off: b,
                                            play: o,
                                            pause: u,
                                            stop: l,
                                            cleanup: E,
                                            getCurrentTime: r,
                                            getDuration: s,
                                            getCachedKeyframes: d,
                                            goToAndPlay: m,
                                            goToAndStop: _,
                                            setCurrentTime: i,
                                            domRef: y.current,
                                            onChangeTime: n,
                                            onKeyframes: a,
                                        }),
                                        () => {
                                            E(), (F.current = null);
                                        }
                                    );
                                }
                            }, [f, F, v]),
                            (0, r.useEffect)(() => {
                                y.current && o && y.current.play();
                            }, [o, h]),
                            (0, r.useEffect)(() => {
                                if (y.current)
                                    return () => {
                                        y.current && y.current.pause();
                                    };
                            }, []),
                            s().createElement(
                                'video',
                                b({ src: n, className: a, style: u, loop: h, ref: y, onClick: A }, C),
                            )
                        );
                    }),
                    v = (0, r.memo)(h);
                var f = n(122),
                    A = n(514),
                    C = n(7641),
                    F = n(3649),
                    y = n(7030),
                    k = n(7160),
                    D = n(7077),
                    w = n(8018);
                const B = 'TankmanFolder_base_00',
                    S = 'TankmanFolder_folder_f5',
                    N = 'TankmanFolder_folder__postProgression_07',
                    I = 'TankmanFolder_photoFrame_ae',
                    T = 'TankmanFolder_base__big_60',
                    x = 'TankmanFolder_veteranBlick_14',
                    L = 'TankmanFolder_veteranFrame_9c',
                    O = 'TankmanFolder_icon_74',
                    P = 'TankmanFolder_innerShadow_44',
                    M = R.images.gui.maps.icons.tankmen.icons.c_204x256,
                    H = (0, C.remToPx)(50),
                    W = s().memo(function ({
                        name: e,
                        isSkin: t = !1,
                        hasPostProgression: n = !1,
                        isPostProgressionAnimated: a = !1,
                        className: i,
                    }) {
                        const u = (0, r.useState)(n && !a),
                            l = u[0],
                            c = u[1],
                            d = (0, r.useMemo)(() => {
                                const n = (0, F.BN)(String(e));
                                return null !== (t ? M.$dyn('crewSkins') : M).$dyn(n) ? D.U.c204x256 : D.U.c158x118;
                            }, [e, t]),
                            m = d === D.U.c204x256,
                            _ = (0, y.useSpring)({
                                from: { opacity: 1, y: 0 },
                                to: { opacity: 0, y: H },
                                config: { duration: 700, easing: k.to },
                                delay: 300,
                            }),
                            g = (0, y.useSpring)({
                                from: { opacity: 0, y: H },
                                to: { opacity: 1, y: 0 },
                                config: { duration: 700, easing: k.to },
                                delay: 1100,
                            });
                        return (
                            (0, r.useEffect)(() => {
                                if (a) {
                                    const e = (0, f.F)(() => A.hY.sound(w.gO.CREW_PROFILE_UPGRADE), 300),
                                        t = (0, f.F)(() => c(!0), 1400);
                                    return () => {
                                        e(), t();
                                    };
                                }
                            }, [a]),
                            s().createElement(
                                'div',
                                { className: o()(B, m && T, i) },
                                a && s().createElement(y.animated.div, { style: _, className: S }),
                                s().createElement(y.animated.div, { style: a ? g : void 0, className: o()(S, n && N) }),
                                l &&
                                    s().createElement(v, {
                                        src: R.videos.crew.profile.veteran_blick(),
                                        className: x,
                                        loop: !0,
                                        autoplay: !0,
                                    }),
                                s().createElement(
                                    'div',
                                    { className: I },
                                    s().createElement(D.G, { name: e, size: d, isSkin: t, classMix: O }),
                                    m && s().createElement('div', { className: P }),
                                ),
                                l &&
                                    s().createElement(v, {
                                        src: m
                                            ? R.videos.crew.profile.veteran_frame_big()
                                            : R.videos.crew.profile.veteran_frame_small(),
                                        className: L,
                                        loop: !0,
                                        autoplay: !0,
                                    }),
                            )
                        );
                    });
                var z = n(5716),
                    $ = n(771),
                    j = n(3215),
                    V = n(3946),
                    G = n(8032);
                const Z = (0, j.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'invId',
                                        'iconName',
                                        'fullName',
                                        'description',
                                        'role',
                                        'skillsEfficiency',
                                        'isInSkin',
                                        'isFemale',
                                        'isCrewLocked',
                                        'isPostProgressionAnimated',
                                        'hasPostProgression',
                                        'hasUniqueSound',
                                        'hasRetrainDiscount',
                                        'componentKey',
                                    ]),
                                    {
                                        currentVehicle: e.object('currentVehicle'),
                                        nativeVehicle: e.object('nativeVehicle'),
                                    },
                                ),
                                n = (0, V.Om)(() => t.skillsEfficiency.get() === $.sU, !0),
                                a = (0, V.Om)(() => t.skillsEfficiency.get() < $.yb),
                                r = (0, V.Om)(() => {
                                    const e = t.currentVehicle.get(),
                                        n = t.nativeVehicle.get();
                                    if (void 0 === e && void 0 === n)
                                        return { isWrongVehicleType: !0, isWrongVehicle: !0 };
                                    const a = Boolean(e.name);
                                    return {
                                        isWrongVehicleType: a && e.type !== n.type && !(0, G.f)(e.tags, z.Yl),
                                        isWrongVehicle: a && e.name !== n.name && !e.isPremium,
                                    };
                                }),
                                s = (0, V.Om)(() =>
                                    t.hasRetrainDiscount.get()
                                        ? {
                                              args: { tooltipId: 'actionPrice', componentKey: t.componentKey.get() },
                                              targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          }
                                        : {
                                              contentId:
                                                  R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                              decoratorId:
                                                  R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                              targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                              args: { componentKey: t.componentKey.get() },
                                              body: n()
                                                  ? R.strings.tooltips.buttons.retrain.body()
                                                  : R.strings.tooltips.buttons.increase.body(),
                                          },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    isUntrained: n,
                                    isLowPerksEfficiency: a,
                                    vehicleValidator: r,
                                    discountTooltipArgs: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            playUniqueVoice: e.createCallbackNoArgs('onPlayUniqueVoice'),
                            changeVehicle: e.createCallbackNoArgs('onChangeVehicle'),
                            retrain: e.createCallbackNoArgs('onRetrain'),
                        }),
                    ),
                    U = Z[0],
                    K = Z[1];
                var q = n(3457),
                    Y = n(3415),
                    Q = n(5415),
                    X = n(7078),
                    J = n(2603),
                    ee = n(9916);
                const te = 'RetrainAndEfficiency_base_71',
                    ne = 'RetrainAndEfficiency_canNotRetrainIcon_82',
                    ae = 'RetrainAndEfficiency_retrainWarningLabel_af',
                    re = 'RetrainAndEfficiency_skillsEfficiencyLabel_45',
                    se = 'RetrainAndEfficiency_skillsEfficiencyLabel__red_e9',
                    ie = 'RetrainAndEfficiency_skillsEfficiencyRateContainer_5c',
                    oe = 'RetrainAndEfficiency_skillsEfficiencyNumber_9a',
                    ue = 'RetrainAndEfficiency_skillsEfficiencyNumber__red_a1',
                    le = 'RetrainAndEfficiency_skillsEfficiencyInfoIcon_76',
                    ce = s().memo(
                        ({
                            tankmanID: e,
                            efficiencyValue: t,
                            componentKey: n,
                            isWrongVehicle: a,
                            isPenaltyActive: r,
                            isWrongVehicleType: i,
                        }) =>
                            a || i
                                ? s().createElement(
                                      X.t,
                                      {
                                          targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          args: { componentKey: n, tooltipId: J.M4 },
                                      },
                                      s().createElement(
                                          'div',
                                          { className: te },
                                          s().createElement('div', { className: ne }),
                                          s().createElement(
                                              'div',
                                              { className: ae },
                                              R.strings.crew.personalFile.isUntrained(),
                                          ),
                                      ),
                                  )
                                : s().createElement(
                                      X.t,
                                      {
                                          targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          args: { tankmanID: e, componentKey: n, tooltipId: J.Br },
                                      },
                                      s().createElement(
                                          'div',
                                          { className: te },
                                          s().createElement(
                                              'div',
                                              { className: o()(re, r && se) },
                                              R.strings.crew.personalFile.skillsEfficiency(),
                                          ),
                                          s().createElement(
                                              'div',
                                              { className: ie },
                                              s().createElement(
                                                  'div',
                                                  { className: o()(oe, r && ue) },
                                                  (0, F.dL)(ee.Z5.getNumberFormat(t * $.I, ee.B3.INTEGRAL)),
                                              ),
                                              !r && s().createElement('div', { className: le }),
                                          ),
                                      ),
                                  ),
                    ),
                    de = 'CurrentVehicleTrain_base_22',
                    me = 'CurrentVehicleTrain_currentVehicle_9d',
                    _e = 'CurrentVehicleTrain_currentVehicleName_19',
                    ge = 'CurrentVehicleTrain_currentVehicleName__isPremium_86',
                    Ee = 'CurrentVehicleTrain_retrainContainer_6a',
                    pe = 'CurrentVehicleTrain_retrainBtnContainer_00',
                    be = 'CurrentVehicleTrain_retrainBtn_3e',
                    he = 'CurrentVehicleTrain_discountContainer_24',
                    ve = 'CurrentVehicleTrain_discountText_45',
                    fe = 'CurrentVehicleTrain_retrainDiscountIcon_91',
                    Ae = 'CurrentVehicleTrain_penaltyDiscountIcon_33',
                    Ce = (0, r.memo)(
                        ({
                            tankmanId: e,
                            skillsEfficiency: t,
                            componentKey: n,
                            isUntrained: a,
                            isLowPerksEfficiency: r,
                            isWrongVehicle: i,
                            isWrongVehicleType: u,
                            hasRetrainDiscount: c,
                            currentVehicle: d,
                            tooltipArgs: m,
                            onRetrainClick: _,
                        }) => {
                            const g = (0, Q.GS)().mediaSize;
                            return s().createElement(
                                'div',
                                { className: de },
                                s().createElement(
                                    'div',
                                    { className: me },
                                    s().createElement(l.w, {
                                        text: d.name
                                            ? R.strings.crew.personalFile.inVehicle()
                                            : R.strings.crew.common.inBarracks(),
                                        binding: {
                                            vehicle: s().createElement(
                                                'div',
                                                { className: o()(_e, d.isPremium && ge) },
                                                d.name,
                                            ),
                                        },
                                    }),
                                ),
                                s().createElement(ce, {
                                    isWrongVehicle: i,
                                    isPenaltyActive: r,
                                    isWrongVehicleType: u,
                                    tankmanID: e,
                                    efficiencyValue: t,
                                    componentKey: n,
                                }),
                                r &&
                                    s().createElement(
                                        Y.l,
                                        { tooltipArgs: m },
                                        s().createElement(
                                            'div',
                                            { className: Ee },
                                            s().createElement(
                                                'div',
                                                { className: pe },
                                                s().createElement(
                                                    q.u5,
                                                    { onClick: _, type: q.L$.secondary, mixClass: be },
                                                    a
                                                        ? R.strings.crew.personalFile.retrain()
                                                        : R.strings.crew.personalFile.increase(),
                                                ),
                                            ),
                                            c && s().createElement('div', { className: Ae }),
                                        ),
                                    ),
                                c &&
                                    !r &&
                                    s().createElement(
                                        Y.l,
                                        { tooltipArgs: m },
                                        s().createElement(
                                            'div',
                                            { className: he },
                                            s().createElement(
                                                'div',
                                                { className: ve },
                                                g < Q.cJ.Large
                                                    ? R.strings.crew.personalFile.discount.short()
                                                    : R.strings.crew.personalFile.discount.full(),
                                            ),
                                            s().createElement('div', { className: fe }),
                                        ),
                                    ),
                            );
                        },
                    );
                var Fe = n(6373);
                const ye = 'Name_base_2d',
                    ke = 'Name_labelWrapper_a0',
                    De = 'Name_labelHiglight_7d',
                    we = 'Name_voiceButton_00',
                    Be = 'Name_soundIcon_2a',
                    Se = 'Name_animationGlow_08',
                    Ne = (0, r.memo)(
                        ({
                            fullName: e,
                            hasUniqueSound: t,
                            hasPostProgression: n,
                            isPostProgressionAnimated: a,
                            onVoiceBtnClick: r,
                        }) => {
                            const i = (0, y.useSpring)({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 0.5, config: { duration: 600 } },
                                        { opacity: 0, config: { duration: 300 } },
                                    ],
                                    delay: 1100,
                                    config: { easing: k.to },
                                }),
                                o = (0, y.useSpring)({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 1, config: { duration: 600 } },
                                        { opacity: 0.8, config: { duration: 300 } },
                                    ],
                                    delay: 1100,
                                    config: { easing: k.to },
                                });
                            return s().createElement(
                                'div',
                                { className: ye },
                                s().createElement(
                                    'div',
                                    { className: ke },
                                    n && s().createElement(y.animated.div, { style: a ? o : void 0, className: De }, e),
                                    s().createElement('div', null, e),
                                    a && s().createElement(y.animated.div, { style: i, className: Se }),
                                    t &&
                                        s().createElement(
                                            Fe.i,
                                            {
                                                header: R.strings.crew.personalFile.voiceTooltip.header(),
                                                body: R.strings.crew.personalFile.voiceTooltip.body(),
                                            },
                                            s().createElement(
                                                q.u5,
                                                { size: q.qE.extraSmall, type: q.L$.ghost, mixClass: we, onClick: r },
                                                s().createElement('div', { className: Be }),
                                            ),
                                        ),
                                ),
                            );
                        },
                    );
                var Ie = n(1530);
                const Te = 'Role_base_e0',
                    xe = 'Role_role_2a',
                    Le = 'Role_roleName_79',
                    Re = 'Role_commanderFeature_e2',
                    Oe = 'Role_sense_21',
                    Pe = 'Role_commanderBonus_99',
                    Me = (0, r.memo)(({ role: e, componentKey: t, isFemale: n }) => {
                        const a = (0, Q.GS)().mediaSize;
                        return s().createElement(
                            'div',
                            { className: Te },
                            s().createElement(
                                X.t,
                                {
                                    args: { componentKey: t, tooltipId: J.v$ },
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                },
                                s().createElement(
                                    'div',
                                    { className: xe },
                                    s().createElement(Ie.M, {
                                        role: e,
                                        size: a === Q.cJ.ExtraLarge ? Ie.S.c30x30 : Ie.S.c18x18,
                                    }),
                                    s().createElement('div', { className: Le }, (0, w.Gc)(e, n)),
                                ),
                            ),
                            'commander' === e &&
                                s().createElement(
                                    'div',
                                    { className: Re },
                                    s().createElement(
                                        X.t,
                                        {
                                            args: {
                                                componentKey: t,
                                                skillName: 'commander_sixthSense',
                                                tooltipId: J.HZ,
                                                level: 100,
                                            },
                                            targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        },
                                        s().createElement('div', { className: Oe }),
                                    ),
                                    s().createElement(
                                        X.t,
                                        {
                                            args: { componentKey: t, tooltipId: J.uN },
                                            targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        },
                                        s().createElement('div', { className: Pe }),
                                    ),
                                ),
                        );
                    });
                var He = n(2056),
                    We = n(9690),
                    ze = n(9053),
                    $e = n(4828),
                    je = n(1943),
                    Ve = n(5640);
                const Ge = {
                    base: 'VehicleTypeIcon_base_80',
                    base__big: 'VehicleTypeIcon_base__big_01',
                    base__c_44x44: 'VehicleTypeIcon_base__c_44x44_80',
                    base__c_48x48_specSlot: 'VehicleTypeIcon_base__c_48x48_specSlot_c4',
                    base__c_60x54: 'VehicleTypeIcon_base__c_60x54_08',
                };
                let Ze;
                !(function (e) {
                    (e.c83x74 = 'big'),
                        (e.c60x54 = 'c_60x54'),
                        (e.c44x44 = 'c_44x44'),
                        (e.c48x48_specSlot = 'c_48x48_specSlot');
                })(Ze || (Ze = {}));
                const Ue = s().memo(function ({ vehicleType: e, isElite: t, className: n, iconSize: a = Ze.c44x44 }) {
                        const r = `${(0, F.BN)(e)}${t ? '_elite' : ''}`,
                            i = R.images.gui.maps.icons.vehicleTypes.$dyn(a);
                        return s().createElement('div', {
                            className: o()(Ge.base, Ge[`base__${a}`], n),
                            style: { backgroundImage: `url(${null == i ? void 0 : i.$dyn(r)})` },
                        });
                    }),
                    Ke = 'SpecializationSlots_base_1a',
                    qe = 'SpecializationSlots_frame_85',
                    Ye = 'SpecializationSlots_frameChange_c6',
                    Qe = 'SpecializationSlots_darkFrame_34',
                    Xe = 'SpecializationSlots_shadow_4a',
                    Je = 'SpecializationSlots_arrows_6e',
                    et = 'SpecializationSlots_info_7c',
                    tt = 'SpecializationSlots_arrowsIcon_fc',
                    nt = 'SpecializationSlots_changeVehicle_58',
                    at = 'SpecializationSlots_tier_68',
                    rt = 'SpecializationSlots_vehicle_b6',
                    st = 'SpecializationSlots_vehicleTypeIcon_77',
                    it = 'SpecializationSlots_flag_84',
                    ot = 'SpecializationSlots_vehicleIcon_ec',
                    ut = 'SpecializationSlots_premVehicle_c3',
                    lt = 'SpecializationSlots_premVehicleTypeIcon_c9';
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ct.apply(this, arguments)
                    );
                }
                const dt = (0, u.Pi)(({ componentKey: e }) => {
                        const t = K(),
                            n = t.model,
                            a = t.controls,
                            r = n.isCrewLocked.get(),
                            i = n.nativeVehicle.get();
                        return s().createElement(
                            'div',
                            { className: Ke },
                            s().createElement(
                                Fe.i,
                                {
                                    header: r
                                        ? R.strings.crew.personalFile.crewLockedTooltip.header()
                                        : R.strings.crew.personalFile.vehicleTooltip.header(),
                                    body: r ? R.strings.crew.personalFile.crewLockedTooltip.body() : i.name,
                                    ignoreMouseClick: r,
                                },
                                s().createElement(
                                    'div',
                                    {
                                        id: 'retraining_btn',
                                        onMouseEnter: () => !r && A.hY.highlight(),
                                        onClick: () => {
                                            r || (A.hY.click(), a.changeVehicle());
                                        },
                                        className: o()(r ? qe : Ye),
                                    },
                                    s().createElement('div', { className: Qe }),
                                    s().createElement(Ve.U, { size: Ve.$.c155x31, nation: i.nation, className: it }),
                                    s().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.small.$dyn((0, F.BN)(`${i.nation}-${i.techName}`))})`,
                                        },
                                        className: ot,
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: et },
                                        s().createElement('div', { className: at }, (0, We.HG)(i.tier)),
                                        s().createElement(Ue, {
                                            isElite: i.isPremium,
                                            vehicleType: i.type,
                                            className: st,
                                            iconSize: i.isPremium ? Ze.c44x44 : Ze.c48x48_specSlot,
                                        }),
                                        s().createElement('div', { className: rt }, i.name),
                                    ),
                                    s().createElement('div', { className: Xe }),
                                    s().createElement(
                                        'div',
                                        { className: Je },
                                        s().createElement('div', { className: tt }),
                                        s().createElement(
                                            'div',
                                            { className: nt },
                                            R.strings.crew.personalFile.changeVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                He.u,
                                ct(
                                    {
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        contentId: R.views.lobby.crew.tooltips.PremiumVehicleTooltip('resId'),
                                        args: { componentKey: e },
                                    },
                                    (0, je.Sr)($e.D9, {
                                        item: $e.sk.PremiumTooltip,
                                        action: $e.eX.Viewed,
                                        parentScreen: $e.sC.PersonalFile,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: qe },
                                    s().createElement(Ve.U, { size: Ve.$.c155x31, nation: i.nation, className: it }),
                                    s().createElement(
                                        'div',
                                        { className: et },
                                        s().createElement(l.w, {
                                            alignContent: ze.v2.Center,
                                            justifyContent: ze.v2.Center,
                                            classMix: ut,
                                            text: R.strings.crew.personalFile.premiumVehicle(),
                                            binding: {
                                                icon: s().createElement(Ue, {
                                                    isElite: !0,
                                                    vehicleType: i.type,
                                                    className: lt,
                                                }),
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    mt = 'TankmanInfoApp_base_bc',
                    _t = 'TankmanInfoApp_tankmanFolder_6d',
                    gt = 'TankmanInfoApp_descriptionBlock_00',
                    Et = 'TankmanInfoApp_description_3c',
                    pt = 'TankmanInfoApp_specializationLabel_a3',
                    bt = 'TankmanInfoApp_specializationLabel__withDescription_2e',
                    ht = (0, u.Pi)(() => {
                        const e = K(),
                            t = e.model,
                            n = e.controls,
                            a = t.invId.get(),
                            r = t.description.get(),
                            i = t.componentKey.get(),
                            u = t.hasPostProgression.get(),
                            c = t.isPostProgressionAnimated.get(),
                            d = t.computes.vehicleValidator(),
                            m = d.isWrongVehicle,
                            _ = d.isWrongVehicleType,
                            g = Boolean(r);
                        return s().createElement(
                            'div',
                            { className: mt },
                            s().createElement(W, {
                                key: `${[a, u, c].join()}`,
                                name: t.iconName.get(),
                                isSkin: t.isInSkin.get(),
                                hasPostProgression: u,
                                isPostProgressionAnimated: c,
                                className: _t,
                            }),
                            s().createElement(
                                'div',
                                { className: gt },
                                s().createElement(Me, {
                                    role: t.role.get(),
                                    componentKey: i,
                                    isFemale: t.isFemale.get(),
                                }),
                                s().createElement(Ne, {
                                    key: a,
                                    fullName: t.fullName.get(),
                                    hasUniqueSound: t.hasUniqueSound.get(),
                                    hasPostProgression: u,
                                    isPostProgressionAnimated: c,
                                    onVoiceBtnClick: n.playUniqueVoice,
                                }),
                                g &&
                                    s().createElement(l.w, {
                                        isTooltipEnable: !0,
                                        isTruncationAvailable: !0,
                                        text: r,
                                        customTooltipArgs: { componentKey: i },
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        classMix: Et,
                                    }),
                                s().createElement(
                                    'div',
                                    { className: o()(pt, g && bt) },
                                    R.strings.crew.personalFile.specialization(),
                                ),
                                s().createElement(dt, { componentKey: i }),
                                s().createElement(Ce, {
                                    tankmanId: a,
                                    skillsEfficiency: t.skillsEfficiency.get(),
                                    componentKey: i,
                                    isUntrained: t.computes.isUntrained(),
                                    isLowPerksEfficiency: t.computes.isLowPerksEfficiency(),
                                    isWrongVehicle: m,
                                    isWrongVehicleType: _,
                                    hasRetrainDiscount: t.hasRetrainDiscount.get(),
                                    currentVehicle: t.currentVehicle.get(),
                                    tooltipArgs: t.computes.discountTooltipArgs(),
                                    onRetrainClick: n.retrain,
                                }),
                            ),
                        );
                    }),
                    vt = (0, r.createContext)(!1),
                    ft = (0, r.memo)(({ rootId: e, withLogging: t = !1 }) =>
                        s().createElement(
                            a.z,
                            null,
                            s().createElement(
                                U,
                                { options: { rootId: e, context: 'model.tankmanInfo' } },
                                s().createElement(vt.Provider, { value: t }, s().createElement(ht, null)),
                            ),
                        ),
                    );
            },
            5716: (e, t, n) => {
                'use strict';
                n.d(t, { Yl: () => r, f3: () => a });
                const a = 'premiumIGR',
                    r = 'wotPlus';
            },
            2603: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Br: () => l,
                    HZ: () => a,
                    M4: () => c,
                    OU: () => o,
                    Th: () => s,
                    lu: () => i,
                    rs: () => d,
                    uN: () => r,
                    v$: () => u,
                });
                const a = 'crewPerkGf',
                    r = 'commanderBonus',
                    s = 'achievement',
                    i = 'crewSkin',
                    o = 'directive',
                    u = 'tankman',
                    l = 'skillsEfficiency',
                    c = 'crewSkillUntrained',
                    d = 'vehicleCrewMemberInHangar';
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
            372: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'HorizontalBar_base_49',
                    base__nonActive: 'HorizontalBar_base__nonActive_82',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'VerticalBar_base_f3',
                    base__nonActive: 'VerticalBar_base__nonActive_42',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            6143: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            },
            9627: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                };
            },
            7629: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
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
            8236: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'FlagIcon_base_25',
                    base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                    base__c_240x118: 'FlagIcon_base__c_240x118_92',
                    base__c_155x31: 'FlagIcon_base__c_155x31_41',
                };
            },
            8386: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'RoleIcon_base_51',
                    base__small: 'RoleIcon_base__small_68',
                    base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                    base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                    base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                    base__c_24x24: 'RoleIcon_base__c_24x24_52',
                    base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                    base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                    base__c_40x40: 'RoleIcon_base__c_40x40_99',
                    base__medium: 'RoleIcon_base__medium_5d',
                    base__white: 'RoleIcon_base__white_2a',
                    base__big: 'RoleIcon_base__big_b4',
                };
            },
            7734: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'ScrollWithLips_base_a2',
                    bar: 'ScrollWithLips_bar_67',
                    content: 'ScrollWithLips_content_6d',
                    fadeContainerTop: 'ScrollWithLips_fadeContainerTop_6d',
                    fadeContainerBottom: 'ScrollWithLips_fadeContainerBottom_43',
                    fade: 'ScrollWithLips_fade_5e',
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
        (__webpack_require__.j = 9904),
        (() => {
            var e = { 9904: 0, 1105: 0, 8640: 0, 1002: 0, 8003: 0, 3595: 0, 2695: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(1982));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
