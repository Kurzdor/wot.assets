(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    o = u(6179),
                    s = u.n(o),
                    i = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: p,
                    onClick: h,
                }) => {
                    const v = (0, o.useRef)(null),
                        C = (0, o.useState)(u),
                        f = C[0],
                        D = C[1],
                        B = (0, o.useState)(!1),
                        b = B[0],
                        w = B[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                f && null !== v.current && !v.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [f]),
                        (0, o.useEffect)(() => {
                            D(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: v,
                                className: a()(
                                    i.Z.base,
                                    i.Z[`base__${n}`],
                                    c && i.Z.base__disabled,
                                    t && i.Z[`base__${t}`],
                                    f && i.Z.base__focus,
                                    b && i.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== m && (0, r.G)(m), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    g && g(e);
                                },
                                onMouseUp: function (e) {
                                    c || (F && F(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== _ && (0, r.G)(_),
                                        A && A(e),
                                        u && (c || (v.current && (v.current.focus(), D(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (p && p(e), w(!1));
                                },
                                onClick: function (e) {
                                    c || (h && h(e));
                                },
                            },
                            n !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: i.Z.back }),
                                    s().createElement('span', { className: i.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: a()(i.Z.state, i.Z.state__default) },
                                s().createElement('span', { className: i.Z.stateDisabled }),
                                s().createElement('span', { className: i.Z.stateHighlightHover }),
                                s().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
            },
            2106: (e, t, u) => {
                let n, a;
                u.d(t, { L: () => n, q: () => a }),
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
                    })(a || (a = {}));
            },
            9987: (e, t, u) => {
                u.d(t, { A: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    o = u.n(r),
                    s = u(8055);
                const i = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        u = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, i);
                    const E = n ? null : u,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const A = E && !g && E > d,
                        F = a()(
                            s.Z.base,
                            s.Z[`base__${t}`],
                            r && s.Z.base__animated,
                            c && s.Z.base__hidden,
                            !E && s.Z.base__pattern,
                            n && s.Z.base__empty,
                            m,
                        );
                    return o().createElement(
                        'div',
                        l({ className: F }, _),
                        o().createElement('div', { className: s.Z.bg }),
                        o().createElement('div', { className: s.Z.pattern }),
                        o().createElement(
                            'div',
                            { className: a()(s.Z.value, g && s.Z.value__text) },
                            A ? d : E,
                            A && o().createElement('span', { className: s.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, u) => {
                u.d(t, { Y: () => d });
                var n = u(3138),
                    a = u(6179),
                    r = u(1043),
                    o = u(5262);
                const s = n.O.client.getSize('rem'),
                    i = s.width,
                    l = s.height,
                    c = Object.assign({ width: i, height: l }, (0, o.T)(i, l, r.j)),
                    d = (0, a.createContext)(c);
            },
            1039: (e, t, u) => {
                u(3138), u(6536), u(6179), u(3495), u(1043), u(5262);
            },
            6010: (e, t, u) => {
                var n = u(6179),
                    a = u(7382),
                    r = u(3495);
                const o = ['children'];
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, o);
                    const s = (0, n.useContext)(r.Y),
                        i = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        d = s.small,
                        m = s.extraSmall,
                        _ = s.extraLargeWidth,
                        E = s.largeWidth,
                        g = s.mediumWidth,
                        A = s.smallWidth,
                        F = s.extraSmallWidth,
                        p = s.extraLargeHeight,
                        h = s.largeHeight,
                        v = s.mediumHeight,
                        C = s.smallHeight,
                        f = s.extraSmallHeight,
                        D = { extraLarge: p, large: h, medium: v, small: C, extraSmall: f };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && m) return t;
                    } else {
                        if (u.extraLargeWidth && _) return (0, a.H)(t, u, D);
                        if (u.largeWidth && E) return (0, a.H)(t, u, D);
                        if (u.mediumWidth && g) return (0, a.H)(t, u, D);
                        if (u.smallWidth && A) return (0, a.H)(t, u, D);
                        if (u.extraSmallWidth && F) return (0, a.H)(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && h) return t;
                            if (u.mediumHeight && v) return t;
                            if (u.smallHeight && C) return t;
                            if (u.extraSmallHeight && f) return t;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                (0, n.memo)(s);
            },
            7382: (e, t, u) => {
                u.d(t, { H: () => n });
                const n = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, u) => {
                u.d(t, { YN: () => n.Y });
                u(6010), u(1039);
                var n = u(3495);
            },
            1043: (e, t, u) => {
                u.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                var n;
                function a(e, t, u) {
                    const n = (function (e, t) {
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
                        })(e, u),
                        a = (function (e, t) {
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
                        })(t, u),
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
                    };
                }
                u.d(t, { T: () => a }),
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
                    })(n || (n = {}));
            },
            1037: (e, t, u) => {
                u.d(t, { IC: () => n });
                var n,
                    a = u(6483),
                    r = u.n(a),
                    o = u(6373),
                    s = u(3138),
                    i = u(2039),
                    l = u(5099),
                    c = u(7727),
                    d = u(9916),
                    m = u(6179),
                    _ = u.n(m),
                    E = u(4769),
                    g = u(8475);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const A = ['__left', '__right', '__top', '__bottom'];
                (0, m.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: n = {} }, a) => {
                        const F = (0, m.useRef)(null),
                            p = (0, m.useRef)(null),
                            h = (0, m.useRef)(null),
                            v = (0, m.useState)(window.decorator && window.decorator.directionType),
                            C = v[0],
                            f = v[1],
                            D = (0, m.useCallback)(() => {
                                c.$.playClick(), s.O.view.sendEvent.close();
                            }, []),
                            B = (0, m.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            b = r()(E.Z.arrow, E.Z[`arrow${A[C]}`]);
                        (0, i.b)(
                            () => (
                                s.O.client.events.mouse.enableOutside(),
                                s.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (u ? u() : s.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const w = (0, m.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === F.current || t === h.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = s.O.client.getMouseGlobalPosition(),
                                            t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            u =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (t && !u) return;
                                    }
                                    u ? u() : s.O.view.sendEvent.close('popover');
                                },
                                [F, h, u],
                            ),
                            y = (0, g.w)(),
                            S = (0, m.useCallback)(() => {
                                const e = p.current;
                                if (e)
                                    return (
                                        s.O.view.freezeTextureBeforeResize(),
                                        y.run(() => {
                                            const t = e.scrollWidth,
                                                u = e.scrollHeight;
                                            s.O.view.resize(t, u), f(window.decorator.directionType);
                                        })
                                    );
                            }, [y]);
                        return (
                            (0, m.useImperativeHandle)(a, () => ({ updateSize: S })),
                            (0, i.b)(() => {
                                s.O.view.setInputPaddingsRem(58);
                            }),
                            (0, m.useEffect)(() => {
                                document.addEventListener('mousedown', w, { capture: !0 });
                                const e = (0, l.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => S()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', w);
                                    }
                                );
                            }, [S, w, t]),
                            _().createElement(
                                'div',
                                { className: E.Z.base, ref: p },
                                _().createElement(
                                    'div',
                                    { className: E.Z.decorator },
                                    _().createElement(
                                        'div',
                                        { className: E.Z.content, ref: F },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            _().createElement(
                                                o.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                _().createElement('div', {
                                                    className: E.Z.closeBtn,
                                                    onClick: D,
                                                    onMouseEnter: B,
                                                    ref: h,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: b, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, u) => {
                u.d(t, { Z: () => l });
                var n = u(1037),
                    a = u(9916),
                    r = u(6179),
                    o = u.n(r);
                const s = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.contentId,
                        u = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        A = void 0 === g || g,
                        F = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, s);
                    const p = (0, r.useRef)(null),
                        h = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            p.current && (0, a.P3)(t, c, p.current, u, d, m);
                        }, [t, c, m, u, d]);
                    return o().createElement(
                        'div',
                        i(
                            {
                                ref: p,
                                onMouseDown:
                                    ((v = E.props.onClick),
                                    (e) => {
                                        A && (h(), _ && _(e), v && v(e));
                                    }),
                            },
                            F,
                        ),
                        E,
                    );
                    var v;
                };
            },
            2773: (e, t, u) => {
                u.d(t, { $Q: () => v });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7515),
                    o = u(1856),
                    s = u(3138),
                    i = u(3815),
                    l = u(560),
                    c = u(7727),
                    d = u(6179),
                    m = u.n(d),
                    _ = u(6358),
                    E = u(372);
                const g = 'disable',
                    A = { pending: !1, offset: 0 },
                    F = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    p = () => {},
                    h = (e, t) => Math.max(20, e.offsetWidth * t),
                    v = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = F, onDrag: n = p }) => {
                        const v = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            f = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            b = e.stepTimeout || 100,
                            w = (0, d.useState)(A),
                            y = w[0],
                            S = w[1],
                            x = (0, d.useCallback)(
                                (e) => {
                                    S(e),
                                        B.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: B.current });
                                },
                                [n],
                            ),
                            N = () => {
                                const t = D.current,
                                    u = B.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    i = (0, r.u)(0, 1, o / (a - n)),
                                    l = (t.offsetWidth - h(t, s)) * i;
                                (u.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && f.current && D.current && B.current) {
                                            if (0 === e)
                                                return C.current.classList.add(g), void f.current.classList.remove(g);
                                            if (
                                                ((t = D.current),
                                                (u = B.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return C.current.classList.remove(g), void f.current.classList.add(g);
                                            var t, u;
                                            C.current.classList.remove(g), f.current.classList.remove(g);
                                        }
                                    })(l);
                            },
                            k = (0, i.z)(() => {
                                (() => {
                                    const t = B.current,
                                        u = D.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const r = Math.min(1, n / a);
                                    (t.style.width = `${h(u, r)}px`),
                                        (t.style.display = 'flex'),
                                        v.current &&
                                            (1 === r
                                                ? v.current.classList.add(E.Z.base__nonActive)
                                                : v.current.classList.remove(E.Z.base__nonActive));
                                })(),
                                    N();
                            });
                        (0, d.useEffect)(() => (0, o.v)(k)),
                            (0, d.useEffect)(
                                () =>
                                    (0, o.v)(() => {
                                        const t = () => {
                                            N();
                                        };
                                        let u = p;
                                        const n = () => {
                                            u(), (u = (0, o.v)(k));
                                        };
                                        return (
                                            e.events.on('recalculateContent', k),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', k),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!y.pending) return;
                                const t = s.O.client.events.mouse.move(([t, u]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!r || !o) return;
                                        const s = D.current,
                                            i = B.current;
                                        if (!s || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - y.offset - s.getBoundingClientRect().x,
                                            c = (l / s.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c });
                                    }),
                                    u = s.O.client.events.mouse.up(() => {
                                        t(), x(A);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, y.offset, y.pending, n, x]);
                        const R = (0, l.B)((t) => e.applyStepTo(t), b, [e]),
                            T = R[0],
                            P = R[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', P, !0),
                                () => document.removeEventListener('mouseup', P, !0)
                            ),
                            [P],
                        );
                        const O = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: a()(E.Z.base, t.base), ref: v, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: a()(E.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), T(_.Nm.Next));
                                },
                                onMouseUp: P,
                                ref: C,
                                onMouseEnter: O,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: a()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = B.current;
                                        if (n && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === n))
                                                x({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = B.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: D,
                                    onMouseEnter: O,
                                },
                                m().createElement('div', { ref: B, className: a()(E.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: a()(E.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: a()(E.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), T(_.Nm.Prev));
                                },
                                onMouseUp: P,
                                ref: f,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            2840: (e, t, u) => {
                u.d(t, { K: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    o = u.n(r),
                    s = u(2773),
                    i = u(7950),
                    l = u(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: m,
                    getStepByRailClick: _,
                    onDrag: E,
                }) => {
                    const g = (0, r.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: a()(l.Z.base, e.base) });
                        }, [n]),
                        A = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return o().createElement(
                        'div',
                        { className: a()(l.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: a()(l.Z.defaultScrollArea, c) },
                            o().createElement(i.Area, { className: m, api: A, classNames: d }, e),
                        ),
                        o().createElement(s.$Q, { getStepByRailClick: _, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            7950: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        Area: () => m,
                        Bar: () => i.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var n = u(6483),
                    a = u.n(n),
                    r = u(1856),
                    o = u(6179),
                    s = u.n(o),
                    i = u(2773),
                    l = u(2840),
                    c = u(4682),
                    d = u(6358);
                const m = ({ api: e, className: t, classNames: u, children: n }) => (
                    (0, o.useEffect)(() => (0, r.v)(e.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: a()(c.Z.base, t) },
                        s().createElement(
                            'div',
                            {
                                className: a()(c.Z.wrapper, null == u ? void 0 : u.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            s().createElement(
                                'div',
                                { className: a()(c.Z.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (m.Bar = i.$Q), (m.Default = l.K);
            },
            6358: (e, t, u) => {
                u.d(t, { Nm: () => n.Nm, T5: () => a, he: () => n.he });
                var n = u(7308);
                const a = (0, n.EO)({
                    getBounds: (e) => {
                        var t, u;
                        return [
                            0,
                            e.offsetWidth -
                                (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                        ];
                    },
                    getContainerSize: (e) => e.offsetWidth,
                    getWrapperSize: (e) => e.offsetWidth,
                    setScrollPosition: (e, t) => {
                        e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, t, u) => {
                u.d(t, { $Q: () => C });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7515),
                    o = u(1856),
                    s = u(3138),
                    i = u(3815),
                    l = u(560),
                    c = u(7727),
                    d = u(6179),
                    m = u.n(d),
                    _ = u(7701),
                    E = u(9168);
                const g = 'disable',
                    A = () => {},
                    F = { pending: !1, offset: 0 },
                    p = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    v = (e, t) => Math.max(20, e.offsetHeight * t),
                    C = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = p, onDrag: n = A }) => {
                        const C = (0, d.useRef)(null),
                            f = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(F),
                            S = y[0],
                            x = y[1],
                            N = (0, d.useCallback)(
                                (e) => {
                                    x(e),
                                        b.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current });
                                },
                                [n],
                            ),
                            k = (0, i.z)(() => {
                                const t = b.current,
                                    u = B.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const r = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${v(u, r)}px`),
                                    (t.style.display = 'flex'),
                                    C.current &&
                                        (1 === r
                                            ? C.current.classList.add(E.Z.base__nonActive)
                                            : C.current.classList.remove(E.Z.base__nonActive)),
                                    r
                                );
                            }),
                            R = (0, i.z)(() => {
                                const t = B.current,
                                    u = b.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    i = (0, r.u)(0, 1, o / (a - n)),
                                    l = (t.offsetHeight - v(t, s)) * i;
                                (u.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (f.current && D.current && B.current && b.current) {
                                            if (0 === Math.round(e))
                                                return f.current.classList.add(g), void D.current.classList.remove(g);
                                            if (
                                                ((t = B.current),
                                                (u = b.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return f.current.classList.remove(g), void D.current.classList.add(g);
                                            var t, u;
                                            f.current.classList.remove(g), D.current.classList.remove(g);
                                        }
                                    })(l);
                            }),
                            T = (0, i.z)(() => {
                                h(e, () => {
                                    k(), R();
                                });
                            });
                        (0, d.useEffect)(() => (0, o.v)(T)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    h(e, () => {
                                        R();
                                    });
                                };
                                let u = A;
                                const n = () => {
                                    u(), (u = (0, o.v)(T));
                                };
                                return (
                                    e.events.on('recalculateContent', T),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', T),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!S.pending) return;
                                const t = s.O.client.events.mouse.up(() => {
                                        N(F);
                                    }),
                                    u = s.O.client.events.mouse.move(([t]) => {
                                        h(e, (u) => {
                                            const a = B.current,
                                                r = b.current,
                                                o = e.getContainerSize();
                                            if (!a || !r || !o) return;
                                            const s = t.screenY - S.offset - a.getBoundingClientRect().y,
                                                i = (s / a.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, S.offset, S.pending, n, N]);
                        const P = (0, l.B)((t) => e.applyStepTo(t), w, [e]),
                            O = P[0],
                            L = P[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const M = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: a()(E.Z.base, t.base), ref: C, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: a()(E.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), O(_.Nm.Next));
                                },
                                ref: f,
                                onMouseEnter: M,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: a()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = b.current;
                                        if (n && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === n))
                                                N({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    b.current &&
                                                        h(e, (n) => {
                                                            if (!n) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: B,
                                    onMouseEnter: M,
                                },
                                m().createElement('div', { ref: b, className: a()(E.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: a()(E.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: a()(E.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), O(_.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: D,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            1158: (e, t, u) => {
                u.d(t, { K: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    o = u.n(r),
                    s = u(6225),
                    i = u(9605),
                    l = u(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: m,
                    getStepByRailClick: _,
                    onDrag: E,
                }) => {
                    const g = (0, r.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: a()(l.Z.base, e.base) });
                        }, [n]),
                        A = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return o().createElement(
                        'div',
                        { className: a()(l.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: a()(l.Z.area, c) },
                            o().createElement(i.Area, { className: d, classNames: m, api: A }, e),
                        ),
                        o().createElement(s.$Q, { getStepByRailClick: _, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            9605: (e, t, u) => {
                u.r(t),
                    u.d(t, { Area: () => m, Bar: () => i.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 });
                var n = u(6483),
                    a = u.n(n),
                    r = u(1856),
                    o = u(6179),
                    s = u.n(o),
                    i = u(6225),
                    l = u(1158),
                    c = u(7701),
                    d = u(5636);
                const m = ({ className: e, classNames: t, children: u, api: n }) => (
                    (0, o.useEffect)(() => (0, r.v)(n.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: a()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: a()(d.Z.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            u,
                        ),
                    )
                );
                m.Default = l.K;
            },
            7701: (e, t, u) => {
                u.d(t, { Nm: () => n.Nm, c4: () => a });
                var n = u(7308);
                const a = (0, n.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                });
            },
            7308: (e, t, u) => {
                u.d(t, { EO: () => E, Nm: () => m, he: () => _ });
                var n = u(7515),
                    a = u(1856),
                    r = u(3138),
                    o = u(4532),
                    s = u(9653),
                    i = u(3815),
                    l = u(4489),
                    c = u(6179),
                    d = u(7030);
                let m;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(m || (m = {}));
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    E = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: m,
                        getWrapperSize: E,
                        triggerMouseMoveOnUpdate: g = !1,
                    }) => {
                        const A = (e, u) => {
                            const a = t(e),
                                r = a[0],
                                o = a[1];
                            return o <= r ? 0 : (0, n.u)(r, o, u);
                        };
                        return (n = {}) => {
                            const F = n.settings,
                                p = void 0 === F ? _ : F,
                                h = (0, c.useRef)(null),
                                v = (0, c.useRef)(null),
                                C = (0, s.q)(),
                                f = (0, l.f)(
                                    () => {
                                        r.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = h.current;
                                        t && (u(t, e), C.trigger('change', e), g && f());
                                    },
                                    onRest: (e) => C.trigger('rest', e),
                                    onStart: (e) => C.trigger('start', e),
                                    onPause: (e) => C.trigger('pause', e),
                                })),
                                B = D[0],
                                b = D[1],
                                w = (0, c.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = B.scrollPosition.get(),
                                            r = (null != (n = B.scrollPosition.goal) ? n : 0) - a;
                                        return A(e, t * u + r + a);
                                    },
                                    [B.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = h.current;
                                        n &&
                                            b.start({
                                                scrollPosition: A(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: p.animationConfig,
                                                from: { scrollPosition: A(n, B.scrollPosition.get()) },
                                            });
                                    },
                                    [b, p.animationConfig, B.scrollPosition],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        const t = h.current,
                                            u = v.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return E(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, p.step),
                                            a = w(t, e, n);
                                        y(a);
                                    },
                                    [y, w, p.step],
                                ),
                                x = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && S(m(e)),
                                            h.current && C.trigger('mouseWheel', e, B.scrollPosition, t(h.current));
                                    },
                                    [B.scrollPosition, S, C],
                                ),
                                N = (0, o.M)(
                                    () =>
                                        (0, a.v)(() => {
                                            const e = h.current;
                                            e &&
                                                (y(A(e, B.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [y, B.scrollPosition.goal],
                                ),
                                k = (0, i.z)(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const t = A(e, B.scrollPosition.goal);
                                    t !== B.scrollPosition.goal && y(t, { immediate: !0 }),
                                        C.trigger('recalculateContent');
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
                                    getWrapperSize: () => (v.current ? E(v.current) : void 0),
                                    getContainerSize: () => (h.current ? e(h.current) : void 0),
                                    getBounds: () =>
                                        h.current
                                            ? t(h.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: p.step.clampedArrowStepTimeout,
                                    clampPosition: A,
                                    handleMouseWheel: x,
                                    applyScroll: y,
                                    applyStepTo: S,
                                    contentRef: h,
                                    wrapperRef: v,
                                    scrollPosition: b,
                                    animationScroll: B,
                                    recalculateContent: k,
                                    events: { on: C.on, off: C.off },
                                }),
                                [B.scrollPosition, y, S, C.off, C.on, k, x, b, p.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, u) => {
                u.d(t, { X: () => a });
                var n = u(7950);
                const a = { Vertical: u(9605), Horizontal: n };
            },
            7078: (e, t, u) => {
                u.d(t, { t: () => i });
                var n = u(6179),
                    a = u.n(n),
                    r = u(2056);
                const o = ['children'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, o);
                    return a().createElement(
                        r.u,
                        s(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, u) => {
                u.d(t, { l: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(7078),
                    o = u(6373),
                    s = u(2056);
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(o.i, t, n);
                    const l = t.contentId;
                    return l ? a().createElement(s.u, i({}, t, { contentId: l }), n) : a().createElement(r.t, t, n);
                };
            },
            6373: (e, t, u) => {
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(6179),
                    r = u.n(a);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, o);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, m]);
                        return r().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                _,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                u.d(t, { u: () => l });
                var n = u(7902),
                    a = u(9916),
                    r = u(6179);
                const o = [
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
                function s(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const i = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            F = e.decoratorId,
                            p = void 0 === F ? 0 : F,
                            h = e.isEnabled,
                            v = void 0 === h || h,
                            C = e.targetId,
                            f = void 0 === C ? 0 : C,
                            D = e.onShow,
                            B = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, o);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => f || (0, n.F)().resId, [f]),
                            S = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(u, p, { isMouseEvent: !0, on: !0, arguments: s(a) }, y),
                                    D && D(),
                                    (w.current.isVisible = !0));
                            }, [u, p, a, y, D]),
                            x = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, p, { on: !1 }, y),
                                        w.current.isVisible && B && B(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, p, y, B]),
                            N = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === v && x();
                            }, [v, x]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return v
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(S, E ? 100 : 400)),
                                                      l && l(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              x(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === A && x(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === A && x(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var k;
                    };
            },
            7515: (e, t, u) => {
                u.d(t, { u: () => n });
                const n = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            1856: (e, t, u) => {
                u.d(t, { v: () => n });
                const n = (e) => {
                    let t,
                        u = null;
                    return (
                        (u = requestAnimationFrame(() => {
                            u = requestAnimationFrame(() => {
                                (u = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                        }
                    );
                };
            },
            8246: (e, t, u) => {
                u.d(t, { U: () => s });
                var n = u(3138);
                function a(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return r(e, t);
                                var u = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === u && e.constructor && (u = e.constructor.name),
                                    'Map' === u || 'Set' === u
                                        ? Array.from(e)
                                        : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                          ? r(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = o, context: r = 'model' } = {}) {
                    const s = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = s.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            a = r.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, a);
                    };
                    return {
                        subscribe: (u, a) => {
                            const o = 'string' == typeof a ? `${r}.${a}` : r,
                                i = n.O.view.addModelObserver(o, t, !0);
                            return s.set(i, u), e && u(l(a)), i;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const u = l(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, u = a(s.keys()); !(e = u()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, u) => {
                u.d(t, { q: () => i });
                var n = u(4598),
                    a = u(9174),
                    r = u(6179),
                    o = u.n(r),
                    s = u(8246);
                const i = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, r.useRef)([]),
                                _ = (u, r, o) => {
                                    var i;
                                    const l = s.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == o ? void 0 : o.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        o = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        o = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            o = Object.entries(r),
                                                            s = o.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        o.forEach(([t, u]) => {
                                                                            s[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && o ? o.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(i),
                                A = g[0],
                                F = g[1],
                                p = (0, r.useState)(() => _(i, l, d)),
                                h = p[0],
                                v = p[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? v(_(A, l, d)) : (E.current = !0);
                                }, [d, A, l]),
                                (0, r.useEffect)(() => {
                                    F(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        h.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [h],
                                ),
                                o().createElement(u.Provider, { value: h }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => i, on: () => s, onResize: () => r, onScaleUpdated: () => o });
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        o = l[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = u(527),
                    a = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, u) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                u.d(t, { O: () => r });
                var n = u(5959),
                    a = u(514);
                const r = { view: u(7641), client: n, sound: a.ZP };
            },
            514: (e, t, u) => {
                u.d(t, { ZP: () => o });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    o = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                u.d(t, { U: () => a });
                var n = u(2472);
                const a = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => D,
                        isFocused: () => C,
                        pxToRem: () => p,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => S,
                    });
                var n = u(3722),
                    a = u(6112),
                    r = u(6538),
                    o = u(8566);
                const s = 15;
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function d(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    s = 64,
                    i = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? a : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                u.d(t, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
                u.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let u,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (n = window.subViews[u].id)),
                        { caller: u, stack: t, resId: n }
                    );
                };
            },
            6536: (e, t, u) => {
                u(6179);
            },
            4532: (e, t, u) => {
                u.d(t, { M: () => a });
                var n = u(6179);
                const a = (e, t = []) => {
                    const u = (0, n.useRef)(),
                        a = (0, n.useCallback)((...t) => {
                            u.current && u.current(), (u.current = e(...t));
                        }, t);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                u.current && u.current();
                            },
                            [a],
                        ),
                        a
                    );
                };
            },
            9653: (e, t, u) => {
                u.d(t, { q: () => o });
                var n = u(6179);
                function a(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return r(e, t);
                                var u = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === u && e.constructor && (u = e.constructor.name),
                                    'Map' === u || 'Set' === u
                                        ? Array.from(e)
                                        : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                          ? r(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const o = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        r = (e, u) => {
                            t(e).delete(u);
                        },
                        o = (e, ...u) => {
                            for (var n, r = a(t(e).values()); !(n = r()).done; ) {
                                (0, n.value)(...u);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: u, off: r, trigger: o }), []);
                };
            },
            3815: (e, t, u) => {
                u.d(t, { z: () => r });
                var n = u(6179);
                const a = [];
                function r(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), a)
                    );
                }
            },
            5415: (e, t, u) => {
                u.d(t, { Aq: () => i, GS: () => l });
                var n = u(6179),
                    a = u(7739),
                    r = u(1043);
                let o, s, i;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        t = e.width,
                        u = e.height,
                        r = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return o.ExtraLarge;
                                case e.large:
                                    return o.Large;
                                case e.medium:
                                    return o.Medium;
                                case e.small:
                                    return o.Small;
                                case e.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return s.ExtraLarge;
                                case e.largeWidth:
                                    return s.Large;
                                case e.mediumWidth:
                                    return s.Medium;
                                case e.smallWidth:
                                    return s.Small;
                                case e.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return i.ExtraLarge;
                                case e.largeHeight:
                                    return i.Large;
                                case e.mediumHeight:
                                    return i.Medium;
                                case e.smallHeight:
                                    return i.Small;
                                case e.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            2039: (e, t, u) => {
                u.d(t, { b: () => a, k: () => r });
                var n = u(6179);
                const a = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    r = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
            },
            560: (e, t, u) => {
                u.d(t, { B: () => a });
                var n = u(6179);
                function a(e, t, u = []) {
                    const a = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, n.useEffect)(() => r, [r]);
                    const o = (null != u ? u : []).concat([t]);
                    return [
                        (0, n.useCallback)((u) => {
                            (a.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, o),
                        r,
                    ];
                }
            },
            8475: (e, t, u) => {
                u.d(t, { w: () => o });
                var n = u(6179),
                    a = u(2039);
                const r = 0;
                function o() {
                    const e = (0, n.useRef)(r);
                    return (
                        (0, a.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = r);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = r);
                                },
                                get isRunning() {
                                    return e.current !== r;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            4489: (e, t, u) => {
                u.d(t, { f: () => r });
                var n = u(5139),
                    a = u(6179);
                function r(e, t, u) {
                    const r = (0, a.useMemo)(() => (0, n.Z)(u, e), t);
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
            },
            5521: (e, t, u) => {
                let n, a;
                u.d(t, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {}));
            },
            9480: (e, t, u) => {
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { U2: () => n, UI: () => o, tP: () => s, v_: () => i });
                const a = n;
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function s(e, t = 0, u = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(t, 0);
                            const a = Math.min(
                                u,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (n > a) return { done: !0, value: null };
                                    const t = e[n++];
                                    return t ? { value: r(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function i(e, t = ',') {
                    let u = '';
                    for (let n = 0; n < e.length; n++) {
                        n > 0 && (u += t);
                        const r = a(e, n);
                        u += null == r ? '' : String(r);
                    }
                    return u;
                }
            },
            5099: (e, t, u) => {
                u.d(t, { B: () => n });
                const n = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((u, n) => {
                            e.then((e) => !t && u(e)).catch((e) => !t && n(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            4385: (e, t, u) => {
                u.d(t, { K: () => n });
                const n = (e, t) => {
                    const u = [];
                    for (let n = 0; n < e; n++) u.push(t(n));
                    return u;
                };
            },
            9690: (e, t, u) => {
                u.d(t, { HG: () => o });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) =>
                        r
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) (t += n[u]), (e -= a[u]);
                                  return t;
                              })(e);
            },
            7727: (e, t, u) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                u.d(t, { $: () => a, G: () => n });
                const a = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
            },
            3649: (e, t, u) => {
                u.d(t, { e: () => r, uF: () => a });
                u(1281);
                let n;
                function a(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function r(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(n || (n = {}));
                (() => {
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
                })();
            },
            5139: (e, t, u) => {
                function n(e, t, u, n) {
                    let a,
                        r = !1,
                        o = 0;
                    function s() {
                        a && clearTimeout(a);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - o;
                        function d() {
                            (o = Date.now()), u.apply(l, i);
                        }
                        r ||
                            (n && !a && d(),
                            s(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (i.cancel = function () {
                            s(), (r = !0);
                        }),
                        i
                    );
                }
                u.d(t, { Z: () => n });
            },
            1358: (e, t, u) => {
                u.d(t, { Z: () => r });
                var n = u(3138);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            9916: (e, t, u) => {
                u.d(t, { B0: () => s, wU: () => D, ry: () => F, Eu: () => p, SW: () => C, P3: () => f });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                n.__instance = void 0;
                const a = n;
                var r = u(1358);
                var o = u(8613);
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    _ = u(3138);
                const E = ['args'];
                function g(e, t, u, n, a, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                        u = arguments;
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function o(e) {
                                            g(r, n, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(r, n, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    v = () => h(s.CLOSE),
                    C = () => h(s.POP_OVER, { on: !1 }),
                    f = (e, t, u, n, a = R.invalid('resId'), r) => {
                        const o = _.O.view.getViewGlobalPosition(),
                            i = u.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            m = i.height,
                            E = {
                                x: _.O.view.pxToRem(l) + o.x,
                                y: _.O.view.pxToRem(c) + o.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        h(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: t,
                            bbox: A(E),
                            on: !0,
                            args: r,
                        });
                    },
                    D = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    B = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var b = u(7572);
                const w = a.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: C,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: f,
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, v);
                        },
                        handleViewEvent: h,
                        onBindingsReady: F,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: D,
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, u) => {
                u.d(t, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
            },
            9367: (e, t, u) => {
                u.d(t, { Q: () => d });
                var n = u(6483),
                    a = u.n(n),
                    r = u(9987),
                    o = u(6179),
                    s = u.n(o);
                const i = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        s().createElement(
                            'div',
                            { className: a()(i, t) },
                            s().createElement(r.A, { value: e, className: l }),
                            !e && s().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            5640: (e, t, u) => {
                u.d(t, { $: () => i, U: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    o = u.n(r),
                    s = u(8236);
                let i;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(i || (i = {}));
                const l = {
                        [i.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [i.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [i.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    c = o().memo(({ nation: e, size: t, className: u }) =>
                        o().createElement('div', {
                            className: a()(s.Z.base, s.Z[`base__${t}`], u),
                            style: { backgroundImage: `url('${l[t].$dyn(e)}')` },
                        }),
                    );
            },
            9197: (e, t, u) => {
                u.d(t, { C: () => F });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    o = u.n(r);
                const s = 'NumberRange_base_5e',
                    i = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = o().memo(function ({ from: e, to: t, className: u }) {
                        return o().createElement(
                            'div',
                            { className: a()(s, e <= 0 && i, u) },
                            o().createElement('div', { className: a()(l, e <= 0 && t > 0 && c) }, e),
                            e !== t &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: d }, '/'),
                                    o().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    E = 'NumberRangeWithLabel_title_94',
                    g = 'NumberRangeWithLabel_counter_00',
                    A = 'NumberRangeWithLabel_counterGlow_1f',
                    F = ({ title: e, isGlowVisible: t = !1, className: u, classNames: n, from: s, to: i }) => {
                        const l = (0, r.useMemo)(
                            () => ({
                                left: s !== i ? 7 * String(s).length + 4 : Math.round((7 * String(s).length) / 2),
                            }),
                            [s, i],
                        );
                        return o().createElement(
                            'div',
                            { className: a()(_, u) },
                            o().createElement('div', { className: E }, e),
                            o().createElement(
                                'div',
                                { className: g },
                                o().createElement(m, { from: s, to: i }),
                                t &&
                                    o().createElement('div', {
                                        style: l,
                                        className: a()(A, null == n ? void 0 : n.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            9631: (e, t, u) => {
                u.d(t, { C: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3457),
                    o = u(2106),
                    s = u(9987),
                    i = u(6179),
                    l = u.n(i),
                    c = u(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        m.apply(null, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        u = e.counter,
                        n = e.className,
                        i = e.children,
                        _ = e.type,
                        E = void 0 === _ ? o.L.secondary : _,
                        g = e.size,
                        A = void 0 === g ? o.q.small : g,
                        F = e.hasIndicator,
                        p = void 0 === F || F,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: a()(c.Z.base, n, t && c.Z.base__active) },
                        l().createElement(r.u5, m({ type: E, size: A, mixClass: c.Z.button }, h), i),
                        l().createElement('div', { className: c.Z.overlay }),
                        p && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(u) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(s.A, { value: u, size: 'small' }),
                            ),
                    );
                });
            },
            8018: (e, t, u) => {
                u.d(t, { Xd: () => a });
                u(771), u(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let n;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(n || (n = {}));
                const a = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let r;
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
                })(r || (r = {}));
                let o;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(o || (o = {}));
            },
            1401: (e, t, u) => {
                var n = u(6179),
                    a = u.n(n),
                    r = u(1037),
                    o = u(5415),
                    s = u(6483),
                    i = u.n(s);
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
                const d = ({ title: e, theme: t = c.Barracks, className: u, children: n }) =>
                    a().createElement(
                        'div',
                        { className: i()(l.base, l[`base__${t}`], u) },
                        a().createElement('div', { className: l.title }, e),
                        n,
                    );
                var m = u(5801),
                    _ = u(2106),
                    E = u(3403),
                    g = u(3457),
                    A = u(6373),
                    F = u(8018);
                const p = 'WarningText_base_13',
                    h = 'WarningText_icon_5d',
                    v = 'WarningText_label_c6',
                    C = a().memo(function ({ label: e }) {
                        return a().createElement(
                            'div',
                            { className: p },
                            a().createElement('div', { className: h }),
                            a().createElement('div', { className: v }, e),
                        );
                    }),
                    f = 'ListEmptyState_base_ae',
                    D = 'ListEmptyState_content_1e',
                    B = 'ListEmptyState_shadow_ae',
                    b = 'ListEmptyState_buttonWrapper_78',
                    w = 'ListEmptyState_button_f1',
                    y = a().memo(function ({
                        warningText: e,
                        buttonType: t = g.L$.secondary,
                        tooltipArgs: u = F.Xd,
                        isBtnDisabled: n = !1,
                        className: r,
                        onClick: o,
                        children: s,
                    }) {
                        return a().createElement(
                            'div',
                            { className: i()(f, r) },
                            a().createElement(
                                'div',
                                { className: D },
                                a().createElement('div', { className: B }),
                                a().createElement(C, { label: e }),
                                s &&
                                    a().createElement(
                                        'div',
                                        { className: b },
                                        a().createElement(
                                            A.i,
                                            u,
                                            a().createElement(
                                                'div',
                                                null,
                                                a().createElement(
                                                    g.u5,
                                                    { size: g.qE.small, type: t, disabled: n, onClick: o, mixClass: w },
                                                    s,
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var S = u(794),
                    x = u(9653);
                var N = u(3138),
                    k = u(4385);
                const T = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: u,
                        paddingBottom: n,
                        amount: a,
                        itemsAmountPerRow: r,
                        visibleRowsAmount: o,
                    }) => {
                        const s = Math.ceil(a / r) * t,
                            i = o * t,
                            l = e * t;
                        return { paddingTop: `${l + u}rem`, paddingBottom: `${Math.max(s - l - i, 0) + n}rem` };
                    },
                    P = (e) => {
                        const t = e.className,
                            u = e.children,
                            n = e.itemsAmountPerRow,
                            r = e.visibleRowsAmount,
                            o = e.startRowIndex,
                            s = e.amount,
                            i = o * n,
                            l = Math.min(r * n, s - i);
                        return a().createElement(
                            'div',
                            { className: t, style: T(e) },
                            (0, k.K)(l, (e) => u(i + e)),
                        );
                    },
                    O = 'VirtualGrid_base_52',
                    L = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: u,
                        children: r,
                        api: o,
                        classNames: s,
                        preloadedRows: l = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = o.scrollApi,
                            _ = (0, n.useRef)(0),
                            E = (0, n.useState)(0),
                            g = E[0],
                            A = E[1],
                            F = (0, n.useState)(null),
                            p = F[0],
                            h = F[1],
                            v = (0, n.useState)(null),
                            C = v[0],
                            f = v[1];
                        return (
                            (0, n.useEffect)(() => {
                                const t = (t) => {
                                    if (!p) return;
                                    const n = Math.floor((N.O.view.pxToRem(t.value.scrollPosition) - c) / u + 1),
                                        a = Math.ceil(e / p),
                                        r = Math.max(0, Math.min(n - l, a));
                                    A(r), o.startRowIndexChanged(r);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [o, m, u, c, p, e, l]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                n = m.contentRef.current.getBoundingClientRect(),
                                                a =
                                                    N.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                r = Math.floor(a / t),
                                                s = Math.ceil(N.O.view.pxToRem(n.height) / u) + 2 * l;
                                            (_.current = r), h(r), f(s), o.layoutCalculated(r, s);
                                        }
                                    },
                                    n = () => {
                                        const t = _.current;
                                        e(), o.scrollToIndex(g * t);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', n),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', n);
                                    }
                                );
                            }, [o, m, u, t, l, g]),
                            (0, n.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    p && m.applyScroll(Math.floor(e / p) * u + c, { immediate: t });
                                };
                                return o.events.on('scrollToIndex', e), () => o.events.off('scrollToIndex', e);
                            }, [o, u, p, c, m]),
                            a().createElement(
                                S.X.Vertical.Default,
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
                                null !== p &&
                                    null !== C &&
                                    a().createElement(
                                        P,
                                        {
                                            className: i()(O, null == s ? void 0 : s.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: p,
                                            visibleRowsAmount: C,
                                            startRowIndex: g,
                                            cellHeight: u,
                                        },
                                        r,
                                    ),
                            )
                        );
                    },
                    M = 'VirtualGridWithFade_scrollAreaFade_94',
                    I = ['api', 'children', 'classNames'];
                function H() {
                    return (
                        (H = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        H.apply(null, arguments)
                    );
                }
                const W = (e) => {
                    let t = e.api,
                        u = e.children,
                        r = e.classNames,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, I);
                    const s = (0, n.useState)(!0),
                        l = s[0],
                        c = s[1],
                        d = t.scrollApi;
                    return (
                        (0, n.useEffect)(() => {
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
                        a().createElement(
                            L,
                            H(
                                {
                                    api: t,
                                    classNames: Object.assign({}, r, {
                                        scrollClassName: i()(null == r ? void 0 : r.scrollClassName, l && M),
                                    }),
                                },
                                o,
                            ),
                            u,
                        )
                    );
                };
                var z = u(3215),
                    Z = u(9480),
                    j = u(3946);
                const V = (0, z.q)()(
                        ({ observableModel: e }) => {
                            const t = e.array('cardList'),
                                u = (0, j.Om)((e) => {
                                    const u = Z.U2(t.get(), e);
                                    if (u) return Object.assign({}, u, { restrictions: [...Z.tP(u.restrictions)] });
                                });
                            return Object.assign({ cardList: t }, e.primitives(['isCardsLocked']), {
                                computes: { getCard: u },
                            });
                        },
                        ({ externalModel: e }) => ({
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                            selectCard: e.createCallback((e, t) => ({ cardID: e, isSkin: t }), 'onCardSelected'),
                            markAsViewed: e.createCallback((e) => ({ cardID: e }), 'onNewCardViewed'),
                        }),
                    ),
                    G = V[0],
                    U = V[1];
                let $, q, K;
                !(function (e) {
                    (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                })($ || ($ = {})),
                    (function (e) {
                        (e.Document = 'document'), (e.Skin = 'skin');
                    })(q || (q = {})),
                    (function (e) {
                        (e.Document = 'document'), (e.SuitableSkin = 'suitableSkin');
                    })(K || (K = {}));
                var Y = u(7727),
                    X = u(3649),
                    Q = u(5640);
                const J = 'ListCardAlert_base_52',
                    ee = 'ListCardAlert_glow_1c',
                    te = 'ListCardAlert_icon_d2',
                    ue = ({ className: e, tooltipArgs: t }) =>
                        a().createElement(
                            'div',
                            { className: i()(J, e) },
                            a().createElement('div', { className: ee }),
                            t
                                ? a().createElement(A.i, t, a().createElement('div', { className: te }))
                                : a().createElement('div', { className: te }),
                        ),
                    ne = {
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
                let ae;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.CardLocked = 'cardLocked');
                })(ae || (ae = {}));
                const re = ({ icon: e, typeIcon: t, name: u, nation: n, cardState: r, children: o, alertType: s }) =>
                        a().createElement(
                            'div',
                            {
                                onMouseEnter: Y.$.playHighlight,
                                className: i()(ne.base, ne[`base__${r}`], ne[`base__alert${(0, X.e)(s)}`]),
                            },
                            r === $.Selected && a().createElement('div', { className: ne.selectedFrame }),
                            n && a().createElement(Q.U, { nation: n, size: Q.$.c240x118, className: ne.flag }),
                            a().createElement('div', { className: ne.icon, style: { backgroundImage: `url(${e})` } }),
                            a().createElement('div', { className: ne.separator }),
                            a().createElement(
                                'div',
                                { className: i()(ne.cardInfo, Boolean(o) && ne.cardInfo__withAdditionalInfo) },
                                a().createElement('div', { className: ne.name }, u),
                                o,
                            ),
                            a().createElement('div', {
                                className: ne.typeIcon,
                                style: { backgroundImage: `url(${t})` },
                            }),
                            s !== ae.None &&
                                a().createElement(ue, {
                                    className: ne.alertIcon,
                                    tooltipArgs: {
                                        header: R.strings.crew.personalData.card.tooltip.locked.title(),
                                        body: R.strings.crew.personalData.card.tooltip.locked.body(),
                                        isEnabled: s === ae.CardLocked,
                                    },
                                }),
                        ),
                    oe = (0, E.Pi)(({ icon: e, name: t, cardState: u, className: n, onClick: r }) => {
                        const o = U().model.isCardsLocked.get();
                        return a().createElement(
                            A.i,
                            {
                                header: R.strings.crew.personalData.card.tooltip.document.title(),
                                body: R.strings.crew.personalData.card.tooltip.document.body(),
                                isEnabled: !o,
                            },
                            a().createElement(
                                'div',
                                { className: n, onClick: r },
                                a().createElement(re, {
                                    icon: e,
                                    typeIcon: R.images.gui.maps.icons.crew.personalData.c_24x24.document(),
                                    name: t,
                                    cardState: u,
                                    alertType: o ? ae.CardLocked : ae.None,
                                }),
                            ),
                        );
                    });
                var se = u(7078),
                    ie = u(2603),
                    le = u(9367);
                const ce = 'InventoryInfo_base_c4',
                    de = 'InventoryInfo_icon_f6',
                    me = 'InventoryInfo_amount_59',
                    _e = a().memo(function ({ amount: e, className: t }) {
                        return a().createElement(
                            'div',
                            { className: i()(ce, t) },
                            a().createElement('div', { className: de }),
                            a().createElement('div', { className: me }, e),
                        );
                    }),
                    Ee = 'ResetButton_base_f1',
                    ge = 'ResetButton_iconWrapper_20',
                    Ae = 'ResetButton_icon_a2',
                    Fe = 'ResetButton_label_f8',
                    pe = ({ className: e }) =>
                        a().createElement(
                            'div',
                            { className: i()(Ee, e) },
                            a().createElement('div', { className: ge }, a().createElement('div', { className: Ae })),
                            a().createElement('div', { className: Fe }, R.strings.crew.personalData.card.remove()),
                        ),
                    he = ({ restrictions: e, className: t }) =>
                        a().createElement(
                            'div',
                            { className: t },
                            (0, X.uF)(R.strings.crew.personalData.card.restrictions(), { restrictions: Z.v_(e, ', ') }),
                        ),
                    ve = 'SkinCard_base_bb',
                    Ce = 'SkinCard_resetButton_ff',
                    fe = 'SkinCard_restrictions_e8',
                    De = 'SkinCard_inventoryInfo_62',
                    Be = 'SkinCard_newSkinMark_16',
                    be = (e, t) => (e ? ae.CardLocked : t ? ae.Default : ae.None),
                    we = (0, E.Pi)(
                        ({
                            id: e,
                            nation: t,
                            icon: u,
                            name: n,
                            restrictions: r,
                            inventoryCount: o,
                            cardState: s,
                            newAmount: l,
                            className: c,
                            onClick: d,
                        }) => {
                            const m = U(),
                                _ = m.model,
                                E = m.controls,
                                g = r.length > 0,
                                A = l > 0;
                            return a().createElement(
                                se.t,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                                    args: { tooltipId: ie.lu, skinId: e },
                                },
                                a().createElement(
                                    'div',
                                    { className: i()(ve, c), onClick: d, onMouseEnter: () => A && E.markAsViewed(e) },
                                    a().createElement(
                                        re,
                                        {
                                            icon: u,
                                            typeIcon: R.images.gui.maps.icons.crew.personalData.c_24x24.skin(),
                                            name: n,
                                            nation: t,
                                            cardState: s,
                                            alertType: be(_.isCardsLocked.get(), g),
                                        },
                                        s === $.Selected && a().createElement(pe, { className: Ce }),
                                        g && a().createElement(he, { restrictions: r, className: fe }),
                                    ),
                                    a().createElement(_e, { amount: o, className: De }),
                                    A && a().createElement(le.Q, { value: l > 1 ? l : void 0, className: Be }),
                                ),
                            );
                        },
                    );
                function ye() {
                    return (
                        (ye = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        ye.apply(null, arguments)
                    );
                }
                const Se = { [q.Skin]: we, [q.Document]: oe },
                    xe = (0, E.Pi)(({ index: e, className: t }) => {
                        const u = U(),
                            n = u.model,
                            r = u.controls,
                            o = n.computes.getCard(e);
                        if (!o) throw Error(`Index ${e} is out of data card list range`);
                        const s = o.cardState !== $.Disabled && !n.isCardsLocked.get(),
                            i = Se[o.cardType];
                        return a().createElement(
                            i,
                            ye({}, o, { className: t, onClick: () => s && r.selectCard(o.id, o.cardType === q.Skin) }),
                        );
                    }),
                    Ne = 'DataCardList_base_0a',
                    ke = 'DataCardList_grid_63',
                    Re = 'DataCardList_gridWrapper_44',
                    Te = 'DataCardList_emptyState_f2',
                    Pe = 'DataCardList_item_b1',
                    Oe = (0, E.Pi)(() => {
                        const e = (() => {
                                const e = S.X.Vertical.useVerticalScrollApi(),
                                    t = (0, x.q)(),
                                    u = (0, n.useCallback)((e, u = !0) => t.trigger('scrollToIndex', e, u), [t]),
                                    a = (0, n.useCallback)((e, u) => t.trigger('layoutCalculated', e, u), [t]),
                                    r = (0, n.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, n.useMemo)(
                                    () => ({
                                        scrollToIndex: u,
                                        layoutCalculated: a,
                                        startRowIndexChanged: r,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [u, a, r, e, t.off, t.on],
                                );
                            })(),
                            t = U(),
                            u = t.model,
                            r = t.controls,
                            o = u.cardList.get().length;
                        return a().createElement(
                            'div',
                            { className: i()(Ne) },
                            a().createElement(
                                'div',
                                { className: Re },
                                o > 0
                                    ? a().createElement(
                                          W,
                                          {
                                              amount: o,
                                              cellWidth: 318,
                                              cellHeight: 208,
                                              paddingTop: 11,
                                              paddingBottom: 11,
                                              classNames: { content: ke },
                                              api: e,
                                          },
                                          (e) => a().createElement(xe, { key: e, index: e, className: Pe }),
                                      )
                                    : a().createElement(
                                          y,
                                          {
                                              warningText: R.strings.crew.personalData.emptyState.noFilteredItems(),
                                              buttonType: _.L.primary,
                                              onClick: r.resetFilters,
                                              className: Te,
                                          },
                                          R.strings.crew.filter.reset(),
                                      ),
                            ),
                        );
                    }),
                    Le = 'PersonalDataApp_base_61',
                    Me = 'PersonalDataApp_content_36',
                    Ie = () => {
                        const e = (0, o.GS)().mediaHeight;
                        return a().createElement(
                            'div',
                            { className: Le },
                            a().createElement(
                                'div',
                                { className: Me },
                                a().createElement(d, {
                                    title: R.strings.crew.personalData.title(),
                                    theme: c.PersonalData,
                                }),
                                a().createElement(m.p, { popoverDirection: e < o.Aq.Medium ? r.IC.Left : r.IC.Bottom }),
                                a().createElement(Oe, null),
                            ),
                        );
                    },
                    He = R.views.lobby.crew.personal_case.PersonalDataView('resId');
                a().memo(
                    ({ setTTCVisibility: e }) => (
                        e(!1), a().createElement(G, { options: { rootId: He } }, a().createElement(Ie, null))
                    ),
                );
            },
            5801: (e, t, u) => {
                u.d(t, { p: () => ke });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    o = u.n(r),
                    s = u(2106),
                    i = u(6373);
                let l;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(l || (l = {}));
                var c = u(3403),
                    d = u(3415),
                    m = u(9480),
                    _ = u(9631);
                const E = 'FilterTitle_base_a7',
                    g = 'FilterTitle_label_05',
                    A = 'FilterTitle_discount_42',
                    F = 'FilterTitle_discountIcon_30',
                    p = ({ label: e, hasDiscount: t, className: u }) =>
                        a().createElement(
                            'div',
                            { className: o()(E, u) },
                            a().createElement('div', { className: g }, e),
                            t && a().createElement('div', { className: A }, a().createElement('div', { className: F })),
                        );
                let h;
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
                })(h || (h = {}));
                var v = u(3649);
                const C = 'ToggleIcon_base_59',
                    f = 'ToggleIcon_base__small_3e',
                    D = 'ToggleIcon_icon_e7',
                    B = a().memo(function ({ icon: e, isSmall: t = !1, classNames: u }) {
                        return a().createElement(
                            'div',
                            { className: o()(C, t && f) },
                            a().createElement('div', {
                                className: o()(D, null == u ? void 0 : u.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var b = u(9690);
                const w = 'VehicleTier_base_9c',
                    y = 'VehicleTier_base__small_fc',
                    S = ({ level: e, isSmall: t = !1 }) =>
                        a().createElement('div', { className: o()(w, t && y) }, (0, b.HG)(e)),
                    x = {
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
                    N = ({ id: e, icon: t, type: u, isSmall: n = !0, isSelected: r = !1 }) =>
                        u === h.VehicleTier
                            ? a().createElement(S, { isSmall: n, level: Number(e) })
                            : a().createElement(B, {
                                  icon: t,
                                  isSmall: n,
                                  classNames: {
                                      icon: o()(x[`icon__${u}`], x[`icon__${u}${(0, v.e)(e)}`], r && x.icon__selected),
                                  },
                              }),
                    k = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function T() {
                    return (
                        (T = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        T.apply(null, arguments)
                    );
                }
                let P;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(P || (P = {}));
                const O = ({ header: e, body: t, contentId: u, targetId: n }) =>
                        u
                            ? { contentId: u, targetId: n }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    L = ({
                        id: e,
                        type: t,
                        label: u,
                        hasDiscount: n,
                        filters: r,
                        onClick: s,
                        className: i,
                        toggleProps: l,
                        theme: c = P.Default,
                    }) => {
                        const E = c === P.InPopup;
                        return a().createElement(
                            'div',
                            { className: o()(k.base, k[`base__${c}`], i) },
                            E && a().createElement(p, { className: k.title, label: u, hasDiscount: n }),
                            a().createElement(
                                'div',
                                { className: k.content },
                                m.UI(r, ({ id: u, isSelected: n, tooltip: r, icon: i, counter: c }) =>
                                    a().createElement(
                                        d.l,
                                        { key: u, tooltipArgs: O(r), className: k.toggle },
                                        a().createElement(
                                            _.C,
                                            T({}, l, {
                                                className: o()(k.toggle, null == l ? void 0 : l.className),
                                                isActive: n,
                                                onClick: () => (null == s ? void 0 : s(e, u)),
                                                counter: c,
                                            }),
                                            a().createElement(N, {
                                                id: u,
                                                icon: i,
                                                type: t,
                                                isSmall: E,
                                                isSelected: n,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var M = u(9197);
                const I = (0, u(3215).q)()(
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
                    H = I[0],
                    W = I[1];
                var z = u(3457),
                    Z = u(3616),
                    j = u(1037),
                    V = u(9367);
                const G = 'PopupButton_base_7c',
                    U = 'PopupButton_popupButtonLabel_ed',
                    $ = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    K = 'PopupButton_buttonIcon__isHighlighted_84',
                    Y = 'PopupButton_discountAlert_c8',
                    X = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: u = j.IC.Bottom }) =>
                        a().createElement(
                            'div',
                            { className: G },
                            a().createElement('div', { className: U }, R.strings.crew.filter.popup.button.title()),
                            a().createElement(
                                Z.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: u,
                                },
                                a().createElement(
                                    'div',
                                    { id: 'popup_btn', className: $ },
                                    a().createElement(
                                        _.C,
                                        { type: z.L$.ghost, size: z.qE.small, isActive: e, hasIndicator: !1 },
                                        a().createElement('div', { className: o()(q, e && K) }),
                                    ),
                                    t && a().createElement(V.Q, { className: Y }),
                                ),
                            ),
                        );
                var Q = u(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ue = ({ onClick: e }) =>
                        a().createElement(
                            'div',
                            { className: J },
                            a().createElement(
                                i.i,
                                Q.Xd,
                                a().createElement(
                                    z.u5,
                                    { mixClass: ee, onClick: e, type: z.L$.ghost, size: z.qE.small },
                                    a().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ne = 'default',
                    ae = 'search',
                    re = 'email',
                    oe = 'password',
                    se = 'normal',
                    ie = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ne]: '',
                        [re]: R.strings.common.input.placeholder.email(),
                        [ae]: R.strings.common.input.placeholder.search(),
                        [oe]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ne]: 'text', [re]: 'text', [ae]: 'text', [oe]: 'password' },
                    Ee = { [ne]: '', [re]: 'Invalid email', [ae]: '', [oe]: '' },
                    ge = R.images.gui.maps.icons.components.input;
                function Ae(e, t) {
                    return (
                        t !== re ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                var Fe = u(7727);
                const pe = {
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
                    he = a().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: u = ne,
                            size: r = de,
                            variant: s = se,
                            placeholder: i = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: m,
                            iconSource: _,
                            classMix: E,
                            onMouseEnter: g,
                            onMouseLeave: A,
                            onMouseDown: F,
                            onMouseUp: p,
                            onClick: h,
                            onChange: v,
                            onClear: C,
                            onFocus: f,
                            onBlur: D,
                        }) => {
                            const B = (0, n.useState)(!1),
                                b = B[0],
                                w = B[1],
                                y = (0, n.useRef)(null),
                                S = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                x = s !== ie,
                                N = (0, n.useCallback)(
                                    (e) => {
                                        x && (w(!0), f && f(e));
                                    },
                                    [x, f],
                                ),
                                k = (0, n.useCallback)(
                                    (e) => {
                                        x && !S.current.mouseOver && (w(!1), D && D(e));
                                    },
                                    [x, D],
                                );
                            (0, n.useEffect)(() => {
                                x && b && d && y.current && y.current.select();
                            }, [d, b, x]);
                            const R = (0, n.useCallback)(
                                    (e) => {
                                        x && v && v(e.target.value);
                                    },
                                    [x, v],
                                ),
                                T = (0, n.useCallback)(
                                    (e) => {
                                        x && ((S.current.mouseOver = !0), g && g(e));
                                    },
                                    [x, g],
                                ),
                                P = (0, n.useCallback)(
                                    (e) => {
                                        x &&
                                            y.current &&
                                            (S.current.mouseDown && y.current.focus(),
                                            (S.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [x, A],
                                ),
                                O = (0, n.useCallback)(
                                    (e) => {
                                        x && ((S.current.mouseDown = !0), F && F(e));
                                    },
                                    [x, F],
                                ),
                                L = (0, n.useCallback)(
                                    (e) => {
                                        x && ((S.current.mouseDown = !1), p && p(e));
                                    },
                                    [x, p],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        if (x && y.current) {
                                            (!b || (b && e.target !== y.current)) && y.current.focus(), h && h(e);
                                        }
                                    },
                                    [b, x, h],
                                ),
                                I = i || me[u],
                                H = Boolean(_),
                                W = o()(
                                    pe.base,
                                    pe[`base__${r}`],
                                    l && pe[`base__${s}`],
                                    b && pe.base__focused,
                                    H && pe.base__withIcon,
                                    E,
                                ),
                                z = (0, n.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                Z = o()(pe.input, pe[`input__${u}`]),
                                j = o()(pe.icon, pe[`icon__${u}`]),
                                V = o()(pe.placeholder, pe[`placeholder__${u}`]);
                            return a().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: T,
                                    onMouseDown: O,
                                    onMouseUp: L,
                                    onMouseLeave: P,
                                    onClick: M,
                                },
                                !x && a().createElement('div', { className: pe.disabled }),
                                z && a().createElement('div', { style: z, className: j }),
                                a().createElement('input', {
                                    ref: y,
                                    className: Z,
                                    type: _e[u],
                                    value: t,
                                    onChange: R,
                                    disabled: !x,
                                    onFocus: N,
                                    onBlur: k,
                                    maxLength: m,
                                }),
                                I && !t && !b && a().createElement('div', { className: V }, I),
                                c &&
                                    a().createElement('div', {
                                        className: pe.clear,
                                        onClick: (e) => {
                                            Fe.$.playClick(), C && C(e);
                                        },
                                        onMouseEnter: Fe.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    ve = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Ce = ({ variant: e, show: t = !0, helperText: u, helperIcon: r, classMix: s }) => {
                        const i = (0, n.useMemo)(() => {
                                const t =
                                    r ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [r, e]),
                            l = o()(ve.base, t && ve.base__shown),
                            c = o()(ve.message, ve[`message__${e}`], s);
                        return a().createElement(
                            'div',
                            { className: l },
                            i && a().createElement('div', { className: ve.icon, style: i }),
                            a().createElement('div', { className: c }, u),
                        );
                    },
                    fe = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    De = [
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
                function Be() {
                    return (
                        (Be = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        Be.apply(null, arguments)
                    );
                }
                const be = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    we = (e) => {
                        let t = e.componentId,
                            u = e.type,
                            r = void 0 === u ? ne : u,
                            s = e.variant,
                            i = void 0 === s ? se : s,
                            l = e.size,
                            c = void 0 === l ? de : l,
                            m = e.value,
                            _ = e.tooltipArgs,
                            E = e.helperText,
                            g = void 0 === E ? '' : E,
                            A = e.isValidated,
                            F = void 0 === A || A,
                            p = e.showHelper,
                            h = void 0 === p || p,
                            v = e.error,
                            C = e.options,
                            f = e.onFocus,
                            D = e.onMouseEnter,
                            B = e.onMouseLeave,
                            b = e.onMouseUp,
                            w = e.onMouseDown,
                            y = e.onChange,
                            S = e.classMix,
                            x = e.controlClassMix,
                            N = e.helperClassMix,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, De);
                        const R = (0, n.useState)(m),
                            T = R[0],
                            P = R[1],
                            O = (0, n.useState)(F),
                            L = O[0],
                            M = O[1],
                            I = (0, n.useMemo)(() => Object.assign({}, be, C), [C]),
                            H = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: r }),
                            W = (0, n.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), P(e));
                            }, []),
                            z = (0, n.useCallback)(
                                (e) => {
                                    let t = !0;
                                    I.performChangeValidation &&
                                        (t = I.changesValidator ? I.changesValidator(e) : Ae(e, H.current.type)),
                                        y && y(e, t);
                                },
                                [y, I],
                            ),
                            Z = (0, n.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            j = (0, n.useCallback)(() => W(''), [W]);
                        (0, n.useEffect)(() => () => Z(), [Z]);
                        const V = (0, n.useCallback)(
                            (e) => {
                                Z(),
                                    I.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              z(e);
                                          }, I.debounceTime))
                                        : z(e);
                            },
                            [z, Z, I.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== T ||
                                (V(H.current.value), (H.current.isChangeHandled = !0));
                        }, [T, V]),
                            (0, n.useEffect)(() => {
                                H.current.isChangeHandled && m !== H.current.value && ((H.current.value = m), P(m)),
                                    (H.current.type = r);
                            }, [m, r]),
                            (0, n.useEffect)(() => {
                                M(F);
                            }, [F, i]);
                        const G = (0, n.useCallback)((e) => D && D(e), [D]),
                            U = (0, n.useCallback)(
                                (e) => {
                                    I.disableHighlightOnFocus && L && M(!1), f && f(e);
                                },
                                [L, f, I.disableHighlightOnFocus],
                            ),
                            $ = (0, n.useCallback)((e) => b && b(e), [b]),
                            q = (0, n.useCallback)((e) => w && w(e), [w]),
                            K = (0, n.useCallback)((e) => B && B(e), [B]),
                            Y = (0, n.useMemo)(
                                () =>
                                    I.withTypeIcon
                                        ? (function (e, t) {
                                              return e === ae ? ge.$dyn(`search_${t}`) : '';
                                          })(r, c)
                                        : '',
                                [r, c, I.withTypeIcon],
                            ),
                            X = g || Ee[r],
                            Q = Boolean(T),
                            J = v ? ce : i,
                            ee = Boolean(v) || L,
                            te = (0, n.useMemo)(
                                () => ('boolean' == typeof I.withClear ? Q && I.withClear : Q && r === ae),
                                [r, Q, I],
                            ),
                            ue = o()(fe.base, fe[`base__${c}`], fe[`base__${i}`], S);
                        return a().createElement(
                            'div',
                            { id: t, className: ue, onMouseEnter: G, onMouseDown: q, onMouseUp: $, onMouseLeave: K },
                            a().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                a().createElement(
                                    he,
                                    Be(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: Y,
                                            size: c,
                                            type: r,
                                            variant: J,
                                            value: T,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: I.selectOnFocus,
                                            maxLength: I.maxLength,
                                            classMix: x,
                                            onFocus: U,
                                            onChange: W,
                                            onClear: j,
                                        },
                                        k,
                                    ),
                                ),
                            ),
                            X &&
                                a().createElement(
                                    'div',
                                    { className: fe.helper },
                                    a().createElement(Ce, {
                                        variant: J,
                                        show: h && (I.isPermanentHelper || ee),
                                        helperText: v || X,
                                        helperIcon: I.helperIconSource,
                                        classMix: N,
                                    }),
                                ),
                        );
                    },
                    ye = ({ value: e, placeholder: t, tooltipHeader: u, onChange: n, className: r, tooltipBody: o }) =>
                        a().createElement(
                            i.i,
                            { header: null != u ? u : void 0, body: o, isEnabled: Boolean(u || o) },
                            a().createElement(we, {
                                type: ae,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: r,
                                onChange: n,
                            }),
                        ),
                    Se = {
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
                    xe = (0, c.Pi)(({ popoverDirection: e }) => {
                        const t = W(),
                            u = t.model,
                            n = t.controls,
                            r = u.amountInfo.get(),
                            c = r.from,
                            d = r.to,
                            m = u.panelType.get(),
                            _ = u.filter.get(),
                            E = u.hasAppliedFilters.get(),
                            g = E || (0 === c && 0 === d),
                            A = u.popoverTooltipHeader.get(),
                            F = u.popoverTooltipBody.get();
                        return a().createElement(
                            'div',
                            { className: o()(Se.base, Se[`base__${m}`]) },
                            a().createElement(
                                'div',
                                { className: Se.titleWrapper },
                                a().createElement(M.C, {
                                    title: u.title.get(),
                                    isGlowVisible: g,
                                    from: c,
                                    to: d,
                                    className: Se.title,
                                    classNames: { counterGlow: Se.counterGlow },
                                }),
                                E && a().createElement(ue, { onClick: n.resetFilter }),
                            ),
                            a().createElement(
                                'div',
                                { className: Se.filters },
                                u.isSearchEnabled.get() &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(ye, {
                                            value: u.searchString.get(),
                                            onChange: n.search,
                                            className: Se.search,
                                            placeholder: u.searchPlaceholder.get(),
                                            tooltipHeader: u.searchTooltipHeader.get(),
                                            tooltipBody: u.searchTooltipBody.get(),
                                        }),
                                        m === l.Barracks && a().createElement('div', { className: Se.separator }),
                                    ),
                                _.label && a().createElement('div', { className: Se.filterLabel }, _.label),
                                a().createElement(L, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: u.filters.get(),
                                    toggleProps: { type: s.L.ghost },
                                    onClick: n.updateFilter,
                                }),
                                u.isPopoverEnabled.get() &&
                                    a().createElement(
                                        i.i,
                                        {
                                            header: null != A ? A : void 0,
                                            body: null != F ? F : void 0,
                                            isEnabled: Boolean(A || F),
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Se.popupButtonWrapper },
                                            a().createElement(X, {
                                                isHighlighted: u.isPopoverHighlighted.get(),
                                                hasDiscountAlert: u.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ne = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') },
                    ke = a().memo(function ({ popoverDirection: e }) {
                        return a().createElement(H, { options: Ne }, a().createElement(xe, { popoverDirection: e }));
                    });
            },
            2603: (e, t, u) => {
                u.d(t, { lu: () => n });
                const n = 'crewSkin';
            },
            771: (e, t, u) => {
                let n;
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
                })(n || (n = {}));
            },
            6880: (e, t, u) => {
                u.d(t, { Z: () => n });
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
            8055: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
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
            4769: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
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
            372: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalBar_base_49',
                    base__nonActive: 'HorizontalBar_base__nonActive_82',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'VerticalBar_base_f3',
                    base__nonActive: 'VerticalBar_base__nonActive_42',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            8236: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'FlagIcon_base_25',
                    base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                    base__c_240x118: 'FlagIcon_base__c_240x118_92',
                    base__c_155x31: 'FlagIcon_base__c_155x31_41',
                };
            },
            4723: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], r = !0, o = 0; o < t.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 1105),
        (() => {
            var e = { 1105: 0, 3595: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, o, s] = u,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); i < r.length; i++)
                        (a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(1401));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
