(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = t(6483),
                    a = t.n(n),
                    i = t(7727),
                    s = t(6179),
                    r = t.n(s),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: E,
                    onMouseEnter: m,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: b,
                    onMouseLeave: D,
                    onClick: g,
                }) => {
                    const p = (0, s.useRef)(null),
                        C = (0, s.useState)(t),
                        B = C[0],
                        h = C[1],
                        f = (0, s.useState)(!1),
                        v = f[0],
                        S = f[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                B && null !== p.current && !p.current.contains(e.target) && h(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, s.useEffect)(() => {
                            h(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: a()(
                                    o.Z.base,
                                    o.Z[`base__${n}`],
                                    c && o.Z.base__disabled,
                                    u && o.Z[`base__${u}`],
                                    B && o.Z.base__focus,
                                    v && o.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, i.G)(d), m && m(e));
                                },
                                onMouseMove: function (e) {
                                    A && A(e);
                                },
                                onMouseUp: function (e) {
                                    c || (b && b(e), S(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== E && (0, i.G)(E),
                                        F && F(e),
                                        t && (c || (p.current && (p.current.focus(), h(!0)))),
                                        S(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (D && D(e), S(!1));
                                },
                                onClick: function (e) {
                                    c || (g && g(e));
                                },
                            },
                            n !== l.L.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: o.Z.back }),
                                    r().createElement('span', { className: o.Z.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: a()(o.Z.state, o.Z.state__default) },
                                r().createElement('span', { className: o.Z.stateDisabled }),
                                r().createElement('span', { className: o.Z.stateHighlightHover }),
                                r().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = c;
            },
            2106: (e, u, t) => {
                let n, a;
                t.d(u, { L: () => n, q: () => a }),
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
            3495: (e, u, t) => {
                t.d(u, { Y: () => _ });
                var n = t(3138),
                    a = t(6179),
                    i = t(1043),
                    s = t(5262);
                const r = n.O.client.getSize('rem'),
                    o = r.width,
                    l = r.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, i.j)),
                    _ = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                t(3138), t(6536), t(6179), t(3495), t(1043), t(5262);
            },
            6010: (e, u, t) => {
                var n = t(6179),
                    a = t(7382),
                    i = t(3495);
                const s = ['children'];
                const r = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, s);
                    const r = (0, n.useContext)(i.Y),
                        o = r.extraLarge,
                        l = r.large,
                        c = r.medium,
                        _ = r.small,
                        d = r.extraSmall,
                        E = r.extraLargeWidth,
                        m = r.largeWidth,
                        A = r.mediumWidth,
                        F = r.smallWidth,
                        b = r.extraSmallWidth,
                        D = r.extraLargeHeight,
                        g = r.largeHeight,
                        p = r.mediumHeight,
                        C = r.smallHeight,
                        B = r.extraSmallHeight,
                        h = { extraLarge: D, large: g, medium: p, small: C, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, a.H)(u, t, h);
                        if (t.largeWidth && m) return (0, a.H)(u, t, h);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, h);
                        if (t.smallWidth && F) return (0, a.H)(u, t, h);
                        if (t.extraSmallWidth && b) return (0, a.H)(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                r.defaultProps = {
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
                (0, n.memo)(r);
            },
            7382: (e, u, t) => {
                t.d(u, { H: () => n });
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                t.d(u, { YN: () => n.Y });
                t(6010), t(1039);
                var n = t(3495);
            },
            1043: (e, u, t) => {
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                var n;
                function a(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        a = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => a, u: () => n }),
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
            8089: (e, u, t) => {
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i),
                    r = t(7727),
                    o = t(7476);
                const l = [
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
                function c() {
                    return (
                        (c = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        c.apply(null, arguments)
                    );
                }
                class _ extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, r.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, r.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            i = e.side,
                            r = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            E = e.onMouseLeave,
                            m = e.onMouseDown,
                            A = e.onMouseUp,
                            F =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, l)),
                            b = s()(o.Z.base, o.Z[`base__${r}`], o.Z[`base__${i}`], null == _ ? void 0 : _.base),
                            D = s()(o.Z.icon, o.Z[`icon__${r}`], o.Z[`icon__${i}`], null == _ ? void 0 : _.icon),
                            g = s()(o.Z.glow, null == _ ? void 0 : _.glow),
                            p = s()(o.Z.caption, o.Z[`caption__${r}`], null == _ ? void 0 : _.caption),
                            C = s()(o.Z.goto, null == _ ? void 0 : _.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: b,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(E),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== r && a().createElement('div', { className: o.Z.shine }),
                            a().createElement('div', { className: D }, a().createElement('div', { className: g })),
                            a().createElement('div', { className: p }, u),
                            n && a().createElement('div', { className: C }, n),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => o });
                var n = t(6179),
                    a = t.n(n),
                    i = t(2056);
                const s = ['children'];
                function r() {
                    return (
                        (r = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        r.apply(null, arguments)
                    );
                }
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, s);
                    return a().createElement(
                        i.u,
                        r(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(9916),
                    i = t(6179);
                const s = [
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
                function r(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const o = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            E = e.ignoreShowDelay,
                            m = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            b = e.decoratorId,
                            D = void 0 === b ? 0 : b,
                            g = e.isEnabled,
                            p = void 0 === g || g,
                            C = e.targetId,
                            B = void 0 === C ? 0 : C,
                            h = e.onShow,
                            f = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, s);
                        const S = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, i.useMemo)(() => B || (0, n.F)().resId, [B]),
                            x = (0, i.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (o(t, D, { isMouseEvent: !0, on: !0, arguments: r(a) }, w),
                                    h && h(),
                                    (S.current.isVisible = !0));
                            }, [t, D, a, w, h]),
                            y = (0, i.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        o(t, D, { on: !1 }, w),
                                        S.current.isVisible && f && f(),
                                        (S.current.isVisible = !1);
                                }
                            }, [t, D, w, f]),
                            I = (0, i.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(S.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = S.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', I, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', I, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === p && y();
                            }, [p, y]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return p
                            ? (0, i.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((S.current.timeoutId = window.setTimeout(x, m ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              y(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && y(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && y(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : u;
                        var T;
                    };
            },
            8246: (e, u, t) => {
                t.d(u, { U: () => r });
                var n = t(3138);
                function a(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return i(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? i(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function r({ initializer: e = !0, rootId: u = 0, getRoot: t = s, context: i = 'model' } = {}) {
                    const r = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? r.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = r.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            a = i.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const s = 'string' == typeof a ? `${i}.${a}` : i,
                                o = n.O.view.addModelObserver(s, u, !0);
                            return r.set(o, t), e && t(l(a)), o;
                        },
                        readByPath: l,
                        createCallback: (e, u) => {
                            const t = l(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = l(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (var e, t = a(r.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q: () => o });
                var n = t(4598),
                    a = t(9174),
                    i = t(6179),
                    s = t.n(i),
                    r = t(8246);
                const o = () => (e, u) => {
                    const t = (0, i.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, i.useRef)([]),
                                E = (t, i, s) => {
                                    var o;
                                    const l = r.U(i),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        E = (e) => d.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const i = null != u ? u : _(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const i = null != u ? u : _(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = _(u);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            s = Object.entries(i),
                                                            r = s.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            r[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: E };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, i.useRef)(!1),
                                A = (0, i.useState)(o),
                                F = A[0],
                                b = A[1],
                                D = (0, i.useState)(() => E(o, l, _)),
                                g = D[0],
                                p = D[1];
                            return (
                                (0, i.useEffect)(() => {
                                    m.current ? p(E(F, l, _)) : (m.current = !0);
                                }, [_, F, l]),
                                (0, i.useEffect)(() => {
                                    b(o);
                                }, [o]),
                                (0, i.useEffect)(
                                    () => () => {
                                        g.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [g],
                                ),
                                s().createElement(t.Provider, { value: g }, c)
                            );
                        },
                        () => (0, i.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => r, onResize: () => i, onScaleUpdated: () => s });
                var n = t(2472),
                    a = t(1176);
                const i = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    r = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, a.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function r(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, r),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, r),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
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
            5959: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => i,
                        graphicsQuality: () => r,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            2472: (e, u, t) => {
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                t.d(u, { O: () => i });
                var n = t(5959),
                    a = t(514);
                const i = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => s });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    s = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => a });
                var n = t(2472);
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
            7641: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => S,
                        events: () => i.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getScale: () => b,
                        getSize: () => E,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    });
                var n = t(3722),
                    a = t(6112),
                    i = t(6538),
                    s = t(8566);
                const r = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, r);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, r);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    s = 32,
                    r = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const i = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(r);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                t.d(u, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: u, resId: n }
                    );
                };
            },
            6536: (e, u, t) => {
                t.d(u, { Z: () => a });
                var n = t(6179);
                const a = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3815: (e, u, t) => {
                t.d(u, { z: () => i });
                var n = t(6179);
                const a = [];
                function i(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), a)
                    );
                }
            },
            8526: (e, u, t) => {
                t.d(u, { gd: () => r });
                var n = t(3138),
                    a = t(5521),
                    i = (t(9916), t(6179));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function r(e = a.n.NONE, u = s, t = !1, r = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== a.n.NONE)
                            return (
                                window.addEventListener('keydown', i, t),
                                () => {
                                    window.removeEventListener('keydown', i, t);
                                }
                            );
                        function i(a) {
                            if (a.keyCode === e) {
                                if (!r && n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, r]);
                }
            },
            2039: (e, u, t) => {
                t.d(u, { k: () => a });
                var n = t(6179);
                const a = (e) => {
                    (0, n.useEffect)(() => e, []);
                };
            },
            1396: (e, u, t) => {
                t.d(u, { K: () => s });
                var n = t(6179),
                    a = t(2039);
                const i = 0;
                function s() {
                    const e = (0, n.useRef)(i);
                    return (
                        (0, a.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = i), u();
                                        }, t));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = i);
                                },
                                get isRunning() {
                                    return e.current !== i;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, u, t) => {
                let n, a;
                t.d(u, { n: () => n }),
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
            9480: (e, u, t) => {
                t.d(u, { G: () => r, MH: () => i, U2: () => a, UI: () => s, hX: () => o, u4: () => c, v: () => l });
                var n = t(8968);
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const i = a;
                function s(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function r(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(i(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function o(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const i = null == (n = e[a]) ? void 0 : n.value;
                        u(i, a, e) && t.push(i);
                    }
                    return t;
                }
                function l(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const s = i(e, a);
                            u(s, a, e) && n.push(t(s, a, e));
                        }
                        return n;
                    })(e, n.C, u);
                }
                function c(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, i(e, t), t, e);
                    }
                    return n;
                }
            },
            8968: (e, u, t) => {
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                t.d(u, { C: () => n });
            },
            7727: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => a, G: () => n });
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
            1358: (e, u, t) => {
                t.d(u, { Z: () => i });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, t, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
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
            9916: (e, u, t) => {
                t.d(u, { Sw: () => i.Z, B0: () => r, c9: () => D, ry: () => b });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var i = t(1358);
                var s = t(8613);
                let r;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(r || (r = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    E = t(3138);
                const m = ['args'];
                function A(e, u, t, n, a, i, s) {
                    try {
                        var r = e[i](s),
                            o = r.value;
                    } catch (e) {
                        return void t(e);
                    }
                    r.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, a) {
                                        var i = e.apply(u, t);
                                        function s(e) {
                                            A(i, n, a, s, r, 'next', e);
                                        }
                                        function r(e) {
                                            A(i, n, a, s, r, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => D(r.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var C = t(7572);
                const B = a.instance,
                    h = {
                        DataTracker: i.Z,
                        ViewModel: C.Z,
                        ViewEventType: r,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => D(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), i) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(d),
                                };
                            D(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, g);
                        },
                        handleViewEvent: D,
                        onBindingsReady: b,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(r.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(r.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(r.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, u, t) => {
                t.d(u, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            3521: (e, u, t) => {
                function n(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return a(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? a(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                t.d(u, { WL: () => r, aR: () => o, jZ: () => i, yG: () => s });
                const i = (e, u = []) => {
                        const t = document.getElementById('root');
                        t && (t.style.cursor = e ? 'grabbing' : 'default');
                        for (var a, i = n(u); !(a = i()).done; ) {
                            const u = a.value,
                                t = document.getElementById(u);
                            t && (t.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    s = (e, u, t, n) => {
                        const a = t + u,
                            i = n - u;
                        return e < a ? a : e > i ? i : e;
                    },
                    r = (e, u, t) => {
                        let a = '',
                            i = 8e3;
                        for (var s, r = n(t); !(s = r()).done; ) {
                            const e = s.value,
                                t = Math.abs(e.centerX - u);
                            t < i && ((a = e.id), (i = t));
                        }
                        return a;
                    },
                    o = (e, u) => {
                        const t = u.find((u) => u.id === e);
                        return t ? t.centerX : 0;
                    };
            },
            1820: (e, u, t) => {
                let n, a;
                t.d(u, { m: () => a }),
                    (function (e) {
                        (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(a || (a = {}));
            },
            4301: (e, u, t) => {
                t.d(u, { iN: () => i, j2: () => a, s$: () => s });
                var n = t(4231);
                const a = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    i = (e) => e === n.w.Battle || e === n.w.Prebattle,
                    s = (e) => i(e) || e === n.w.Respawn;
            },
            7626: (e, u, t) => {
                t.d(u, { YR: () => o, UW: () => c, Tu: () => l });
                var n = t(6179),
                    a = t(9152),
                    i = t(7727),
                    s = t(3521),
                    r = t(1820);
                const o = (e) => `panel-${e}-section`,
                    l = (e, u) => {
                        const t = o(e),
                            n = u.filter((e) => e !== t);
                        return { selfId: t, blockOnGrabIds: [a.y, ...n] };
                    },
                    c = ({ baseId: e, slotsLength: u, handleSwap: t, setIsExitBlocked: a, syncInitiator: o }) => {
                        const l = ((e, u, t) => {
                                const a = (0, n.useRef)([]),
                                    o = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    l = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    c = l[0],
                                    _ = l[1],
                                    d = (0, n.useCallback)((e) => {
                                        o.current.dropId ||
                                            o.current.prevPotentialDropId ||
                                            ((o.current.prevPotentialDropId = e),
                                            _({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    E = (0, n.useCallback)((e, u) => {
                                        if (a.current) {
                                            const t = (0, s.WL)(e, u, a.current);
                                            t !== o.current.prevPotentialDropId &&
                                                ((o.current.prevPotentialDropId = t),
                                                _({ activeDragId: e, potentialDropId: t }));
                                        }
                                    }, []),
                                    m = (0, n.useCallback)((e, u) => {
                                        if (a.current && u) {
                                            const t = o.current,
                                                n = (0, s.WL)(e, u, a.current);
                                            (t.dropId = n),
                                                (t.dragId = e),
                                                (t.prevPotentialDropId = ''),
                                                _({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && (0, i.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    A = (0, n.useCallback)(() => {
                                        const e = o.current,
                                            u = e.dragId,
                                            t = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (u || t || n) &&
                                            ((o.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            _({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    F = (0, n.useCallback)(
                                        (e) => {
                                            const u = o.current.dropId;
                                            u && u !== e ? t(e, u) : A();
                                        },
                                        [A, t],
                                    ),
                                    b = (0, n.useCallback)((e, u) => {
                                        const t = a.current.find((u) => u.id === e);
                                        t && u && (t.centerX = u);
                                    }, []),
                                    D = (0, n.useCallback)(
                                        (e, u) => {
                                            const t = u.dragId,
                                                n = u.currentCenterX;
                                            switch (e) {
                                                case r.m.Ready:
                                                    return b(t, n);
                                                case r.m.DragStart:
                                                    return d(t);
                                                case r.m.Drag:
                                                    return E(t, n);
                                                case r.m.Drop:
                                                    return m(t, n);
                                                case r.m.DropExit:
                                                    return F(t);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [d, E, m, F, b],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const t = new Array(e).fill(null);
                                            a.current = t.map((e, t) => ({ id: `${u}-${t}`, centerX: 0 }));
                                        }
                                    }, [e, u]),
                                    {
                                        dragState: c,
                                        handleGrabberAction: D,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const u = o.current,
                                                t = u.dragId,
                                                n = u.dropId;
                                            return e === t
                                                ? (0, s.aR)(n, a.current)
                                                : e === n
                                                  ? (0, s.aR)(t, a.current)
                                                  : 0;
                                        }, []),
                                        resetDragResults: A,
                                    }
                                );
                            })(u, e, t),
                            c = l.dragState,
                            _ = l.handleGrabberAction,
                            d = l.getForceCenterX,
                            E = l.resetDragResults,
                            m = (0, n.useCallback)(
                                (e, u) => {
                                    if (a)
                                        switch (e) {
                                            case r.m.DragStart:
                                            case r.m.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    _(e, u);
                                },
                                [_, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => E, [o, E]),
                            { handleGrabberAction: m, dragState: c, getForceCenterX: d }
                        );
                    };
            },
            4231: (e, u, t) => {
                let n;
                t.d(u, { w: () => n }),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.Setup = 'setup'),
                            (e.Compare = 'compare'),
                            (e.Battle = 'battle'),
                            (e.Respawn = 'respawn'),
                            (e.Prebattle = 'prebattle');
                    })(n || (n = {}));
            },
            3220: (e, u, t) => {
                t.d(u, { k: () => c, t: () => _ });
                var n = t(3215),
                    a = t(9480),
                    i = t(3946),
                    s = t(4598),
                    r = t(4301),
                    o = t(7626);
                const l = (0, n.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                t = (0, i.Om)(() => u.sectionGroups.get().length),
                                n = (0, i.Om)(
                                    (e) => {
                                        const t = a.U2(u.sectionGroups.get(), e);
                                        if (!t) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, t, {
                                            sections: a.UI(t.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: a.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, t.setupSelector, {
                                                states: a.UI(t.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: s.jv },
                                ),
                                l = (0, i.Om)(() => a.u4(u.sectionGroups.get(), (e, u) => e + u.sections.length, 0)),
                                c = (0, i.Om)((e) => n(e).sections.length),
                                _ = (0, i.Om)(
                                    (e, u) => {
                                        const t = n(e),
                                            i = a.U2(t.sections, u);
                                        if (!i) throw Error(`No ammunition section found with index: ${u}`);
                                        return i;
                                    },
                                    { equals: s.jv },
                                ),
                                d = (0, i.Om)((e, u) => _(e, u).slots.length),
                                E = (0, i.Om)((e, u) => {
                                    const t = _(e, u).slots;
                                    return a.hX(t, (e) => Boolean(e) && !(0, r.j2)(e)).length;
                                }),
                                m = (0, i.Om)((e, u) => {
                                    const t = _(e, u).slots;
                                    return a.G(t, (e) => e.intCD > 0);
                                }),
                                A = (0, i.Om)(
                                    (e, u, t) => {
                                        const n = _(e, u),
                                            i = a.U2(n.slots, t);
                                        if (!i) throw Error(`No ammunition slot found with index: ${t}`);
                                        return i;
                                    },
                                    { equals: s.jv },
                                ),
                                F = (0, i.Om)(
                                    (e) => {
                                        const u = n(e).sections;
                                        return a.v(u, (e) => (0, o.YR)(e.type));
                                    },
                                    { equals: s.jv },
                                ),
                                b = (0, i.Om)(
                                    (e, u, t) => {
                                        const n = A(e, u, t);
                                        if (!n) throw Error(`No ammunition slot found with index: ${t}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: a.UI(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: s.jv },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    groups: { length: t, group: n },
                                    sections: { allSectionsLength: l, length: c, section: _, IDs: F },
                                    slots: { length: d, filteredLength: E, slot: A, existFilled: m },
                                    specializations: b,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    c = l[0],
                    _ = l[1];
            },
            1922: (e, u, t) => {
                t.d(u, { cJ: () => n });
                t(6483), t(7739), t(6179), t(1960);
                let n;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(n || (n = {}));
            },
            7386: (e, u, t) => {
                var n = t(6179),
                    a = t.n(n),
                    i = t(493),
                    s = t.n(i),
                    r = t(3220),
                    o = t(8526),
                    l = t(5521),
                    c = t(3403),
                    _ = t(6483),
                    d = t.n(_),
                    E = t(3138),
                    m = t(3815),
                    A = t(2039);
                const F = (0, n.createContext)(null);
                const b = (e) => {
                    let u,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                (t = null), (u = e());
                            });
                        })),
                        () => {
                            'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                        }
                    );
                };
                var D = t(7739),
                    g = t(5262),
                    p = t(1281);
                let C;
                function B(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function h(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(C || (C = {}));
                const f = (e) => e.replace(/&nbsp;/g, ' '),
                    v = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    S = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    w = (e, u, t = C.left) => e.split(u).reduce(t === C.left ? v : S, []),
                    x = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    y = ['zh_cn', 'zh_sg', 'zh_tw'],
                    I = (e, u = C.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (y.includes(t)) return x(e);
                        if ('ja' === t) {
                            return (0, p.D4)()
                                .parse(e)
                                .map((e) => f(e));
                        }
                        return ((e, u = C.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = f(e);
                            return w(a, /( )/, u).forEach((e) => (t = t.concat(w(e, n, C.left)))), t;
                        })(e, u);
                    };
                function T(e, u, t) {
                    const a = (0, n.useContext)(D.YN);
                    let i = Object.entries(a).filter(([e, u]) => !0 === u && e in g.u);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = i.map((e) =>
                                d()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + h(u))(t, e[0])]),
                            );
                            return (e[t] = d()(u[t], ...n)), e;
                        }, {})
                    );
                }
                const k = (e, u, t, a = []) => {
                        const i = ((e, u = []) => {
                            const t = (0, n.useRef)(),
                                a = (0, n.useCallback)((...u) => {
                                    t.current && t.current(), (t.current = e(...u));
                                }, u);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        t.current && t.current();
                                    },
                                    [a],
                                ),
                                a
                            );
                        })(
                            () =>
                                b(() =>
                                    b(() => {
                                        if (e.current) {
                                            const t = e.current.getBoundingClientRect(),
                                                n = {
                                                    width: E.O.view.pxToRem(t.width),
                                                    height: E.O.view.pxToRem(t.height),
                                                    offsetX: E.O.view.pxToRem(t.left),
                                                    offsetY: E.O.view.pxToRem(t.top),
                                                };
                                            window.tutorialApi.updateComponents(), u(n);
                                        }
                                    }),
                                ),
                            [u, e],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                i();
                            }, [i, ...a]),
                            (0, n.useEffect)(() => {
                                if (t)
                                    return (
                                        engine.on('clientResized', i),
                                        () => {
                                            engine.off('clientResized', i);
                                        }
                                    );
                            }, [t, i]),
                            i
                        );
                    },
                    O = {
                        base: 'AmmoPanel_base_8d',
                        base__locked: 'AmmoPanel_base__locked_f8',
                        base__disabled: 'AmmoPanel_base__disabled_13',
                        base__hidden: 'AmmoPanel_base__hidden_14',
                        border: 'AmmoPanel_border_e6',
                        border__hidden: 'AmmoPanel_border__hidden_b1',
                        roleSkillSlot: 'AmmoPanel_roleSkillSlot_20',
                        roleSkillSlot__battle: 'AmmoPanel_roleSkillSlot__battle_b0',
                        roleSkillSlot__small: 'AmmoPanel_roleSkillSlot__small_a1',
                        roleSkillSlot__extraSmall: 'AmmoPanel_roleSkillSlot__extraSmall_a9',
                        roleSkillSlot__prebattle: 'AmmoPanel_roleSkillSlot__prebattle_b5',
                    },
                    L = 'Border_base_f9',
                    N = 'Border_border_83',
                    M = 'Border_wrapper_17',
                    P = 'Border_active_e8',
                    $ = (0, n.memo)(({ slotOffset: e, slotWidth: u, onAnimationEnd: t }) => {
                        const i = (0, n.useRef)(null),
                            s = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => {
                            s.current = !0;
                        }, [e, u]);
                        const r = (0, n.useCallback)(() => {
                            s.current && t(), (s.current = !1);
                        }, [t]);
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const o = (0, n.useMemo)(() => ({ left: e }), [e]),
                            l = (0, n.useMemo)(() => ({ width: u }), [u]);
                        return a().createElement(
                            'div',
                            { className: L },
                            a().createElement(
                                'div',
                                { ref: i, className: N, style: o },
                                a().createElement(
                                    'div',
                                    { className: M },
                                    a().createElement('div', { className: P, style: l }),
                                ),
                            ),
                        );
                    }),
                    H = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    };
                var j = t(2056);
                const G = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function z() {
                    return (
                        (z = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        z.apply(null, arguments)
                    );
                }
                const W = R.views.common.tooltip_window.simple_tooltip_content,
                    U = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            s = e.note,
                            r = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, G);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: i, note: s, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, i, s, o]);
                        return a().createElement(
                            j.u,
                            z(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? W.SimpleTooltipHtmlContent('resId') : W.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                var q = t(9344),
                    V = t(2558),
                    X = t(8934);
                const Z = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    K = 'up',
                    Y = 'down',
                    J = ({ children: e, index: u, setSetupSwitching: t, disabled: i = !1 }) => {
                        const s = (0, n.useRef)(1 - u),
                            r = (0, n.useMemo)(() => {
                                const e = ((t = u), (n = s.current), t === n ? '' : t > n ? Y : K);
                                var t, n;
                                const a = e && h(e);
                                return i ? {} : { enter: Z[`base__enter${a}`], exit: Z[`base__exit${a}`] };
                            }, [u, i]);
                        return (
                            (s.current = u),
                            a().createElement(
                                V.Z,
                                { className: Z.base },
                                a().createElement(
                                    X.Z,
                                    {
                                        timeout: 300,
                                        key: u,
                                        classNames: r,
                                        onEnter: () => t(!0),
                                        onExited: () => t(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                var Q = t(4301),
                    ee = t(7383);
                const ue = {
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
                    },
                    te = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ne() {
                    return (
                        (ne = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ne.apply(null, arguments)
                    );
                }
                const ae = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        i = e.fadeInAnimation,
                        s = e.hide,
                        r = e.maximumNumber,
                        o = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, te);
                    const c = n ? null : t,
                        _ = 'string' == typeof c;
                    if ((c && !_ && c < 0) || 0 === c) return null;
                    const E = c && !_ && c > r,
                        m = d()(
                            ue.base,
                            ue[`base__${u}`],
                            i && ue.base__animated,
                            s && ue.base__hidden,
                            !c && ue.base__pattern,
                            n && ue.base__empty,
                            o,
                        );
                    return a().createElement(
                        'div',
                        ne({ className: m }, l),
                        a().createElement('div', { className: ue.bg }),
                        a().createElement('div', { className: ue.pattern }),
                        a().createElement(
                            'div',
                            { className: d()(ue.value, _ && ue.value__text) },
                            E ? r : c,
                            E && a().createElement('span', { className: ue.plus }, '+'),
                        ),
                    );
                };
                ae.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const ie = 'FormatText_base_d0',
                    se = ({ binding: e, text: u = '', classMix: t, alignment: i = C.left, formatWithBrackets: s }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const r = s && e ? B(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            r.split('\n').map((u, s) =>
                                a().createElement(
                                    'div',
                                    { className: d()(ie, t), key: `${u}-${s}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : I(e, u))))(
                                        u,
                                        i,
                                        e,
                                    ).map((e, u) => a().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                var re = t(7902);
                const oe = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
                var le = t(6536),
                    ce = t(9916);
                const _e = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    de = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    Ee = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = oe(`${e}.${t}`, window);
                                return _e(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    me = (e) => {
                        const u = ((e) => {
                                const u = (0, re.F)(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: de(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = oe(de(t, `${u}.${n}`), window);
                                    return _e(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    Ae = ce.Sw.instance;
                let Fe;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Fe || (Fe = {}));
                const be = (e = 'model', u = Fe.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            i = (0, n.useMemo)(() => (0, re.F)(), []),
                            s = i.caller,
                            r = i.resId,
                            o = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            l = (0, n.useState)(() =>
                                ((e) => {
                                    const u = oe(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return _e(u) ? u.value : u;
                                })(Ee(o)),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, n.useRef)(-1);
                        return (
                            (0, le.Z)(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? Fe.Deep : Fe.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== Fe.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === Fe.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = me(e);
                                    d.current = Ae.addCallback(n, t, r, u === Fe.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== Fe.None)
                                    return () => {
                                        Ae.removeCallback(d.current, r);
                                    };
                            }, [r, u]),
                            c
                        );
                    },
                    De = 'visible_change',
                    ge = De;
                var pe = t(4231);
                const Ce = 'TopLabel_base_7f',
                    Be = 'TopLabel_base__ready_00',
                    he = 'TopLabel_text_d0',
                    fe = 'TopLabel_text__hangar_36',
                    ve = 'TopLabel_text__shown_25',
                    Se = 'TopLabel_text__hidden_79',
                    we = 'TopLabel_text__truncated_29',
                    xe = (0, n.memo)(({ panelType: e, text: u, parentRef: t, isTruncated: i = !1, show: s = !1 }) => {
                        const r = (0, n.useRef)(!1),
                            o = (0, n.useState)(!1),
                            l = o[0],
                            c = o[1];
                        (0, n.useEffect)(() => {
                            t || (s && !r.current && (r.current = !0), c(s));
                        }, [s, t]);
                        const _ = (0, n.useCallback)(() => {
                                (r.current = !0), c(!0);
                            }, []),
                            E = (0, n.useCallback)(() => {
                                c(!1);
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = t && t.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', _),
                                        e.addEventListener('mouseleave', E),
                                        () => {
                                            e.removeEventListener('mouseenter', _),
                                                e.removeEventListener('mouseleave', E);
                                        }
                                    );
                            }, [t, _, E]),
                            a().createElement(
                                'div',
                                { className: d()(Ce, r.current && Be) },
                                a().createElement(
                                    'div',
                                    { className: d()(he, e !== pe.w.Setup && fe, i && we, s && l ? ve : Se) },
                                    u,
                                ),
                            )
                        );
                    }),
                    ye = 'notUsableSection';
                var Ie = t(7626);
                const Te = 'Section_base_8a',
                    ke = 'Section_label_73',
                    Oe = 'Section_counter_8a',
                    Re = 'Section_configLabel_c9',
                    Le = 'Section_configText_eb',
                    Ne = 'Section_configVehicleIcon_20';
                let Me;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Me || (Me = {}));
                const Pe = 'tooltip_watched';
                let $e;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })($e || ($e = {}));
                let He, je, Ge;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(He || (He = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(je || (je = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Ge || (Ge = {}));
                const ze = 'metrics',
                    We = () => Date.now(),
                    Ue = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    qe = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = Me.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    Ve = (e, u) => {
                        const t = qe(e, u),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            s = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    (void 0 !== u && u > 0) || a.current.set(e, We());
                                },
                                [a],
                            ),
                            r = (0, n.useCallback)(() => {
                                a.current.clear(), i.current.clear();
                            }, [a, i]),
                            o = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, We());
                                },
                                [a, i],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    const t = i.current.get(e);
                                    if (void 0 === t) return;
                                    i.current.delete(e);
                                    const n = We() - t;
                                    a.current.set(e, u + n);
                                },
                                [a, i],
                            ),
                            c = (0, n.useCallback)(
                                (e, u = 0, n, s) => {
                                    const r = a.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== i.current.get(e) && l(e), a.current.delete(e);
                                    const o = (We() - r) / 1e3;
                                    o <= u ||
                                        ((s = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(s, o)),
                                        t(e, n, s));
                                },
                                [a, i, t, l],
                            );
                        return [(e) => s(e), (e, u, t, n) => c(e, u, t, n), () => r(), (e) => o(e), (e) => l(e)];
                    },
                    Xe = (e) => {
                        const u = Ve(e, ze),
                            t = u[0],
                            a = u[1],
                            i = u[2],
                            s = u[3],
                            r = u[4],
                            o = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    a(u, t, n, Ue(e));
                                },
                                [a],
                            );
                        return [(e) => t(e), (e) => o(e), () => i(), (e) => s(e), (e) => r(e)];
                    },
                    Ze = a().memo(function ({ className: e, children: u }) {
                        const t = ((e, u, t, a) => {
                                const i = Xe('epic_battle'),
                                    s = i[0],
                                    r = i[1];
                                return [
                                    (0, n.useCallback)(() => s(Pe), [s]),
                                    (0, n.useCallback)(
                                        () =>
                                            r({
                                                action: Pe,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: u,
                                                itemState: t,
                                                info: a,
                                            }),
                                        [r, e, u, t, a],
                                    ),
                                ];
                            })(je.SkillOrderTooltip, He.SetupView),
                            i = t[0],
                            s = t[1];
                        return a().createElement(
                            j.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: i,
                                onMouseLeave: s,
                            },
                            a().createElement('div', { className: e }, u),
                        );
                    });
                var Ke = t(7727);
                const Ye = 'SlotDivider_base_60',
                    Je = () => a().createElement('div', { className: Ye });
                var Qe = t(3267),
                    eu = t(8253),
                    uu = t(3141);
                var tu = t(1043);
                let nu, au, iu;
                !(function (e) {
                    (e[(e.ExtraSmall = tu.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = tu.j.small.width)] = 'Small'),
                        (e[(e.Medium = tu.j.medium.width)] = 'Medium'),
                        (e[(e.Large = tu.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = tu.j.extraLarge.width)] = 'ExtraLarge');
                })(nu || (nu = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = tu.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = tu.j.small.width)] = 'Small'),
                            (e[(e.Medium = tu.j.medium.width)] = 'Medium'),
                            (e[(e.Large = tu.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = tu.j.extraLarge.width)] = 'ExtraLarge');
                    })(au || (au = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = tu.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = tu.j.small.height)] = 'Small'),
                            (e[(e.Medium = tu.j.medium.height)] = 'Medium'),
                            (e[(e.Large = tu.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = tu.j.extraLarge.height)] = 'ExtraLarge');
                    })(iu || (iu = {}));
                const su = () => {
                        const e = (0, n.useContext)(D.YN),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return nu.ExtraLarge;
                                    case e.large:
                                        return nu.Large;
                                    case e.medium:
                                        return nu.Medium;
                                    case e.small:
                                        return nu.Small;
                                    case e.extraSmall:
                                        return nu.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), nu.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return au.ExtraLarge;
                                    case e.largeWidth:
                                        return au.Large;
                                    case e.mediumWidth:
                                        return au.Medium;
                                    case e.smallWidth:
                                        return au.Small;
                                    case e.extraSmallWidth:
                                        return au.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), au.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return iu.ExtraLarge;
                                    case e.largeHeight:
                                        return iu.Large;
                                    case e.mediumHeight:
                                        return iu.Medium;
                                    case e.smallHeight:
                                        return iu.Small;
                                    case e.extraSmallHeight:
                                        return iu.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), iu.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    ru = 'Grabber_base_cf',
                    ou = 'Grabber_base__enabled_b0',
                    lu = 'Grabber_base__waitingUpdate_1d',
                    cu = 'Grabber_base__updating_f1',
                    _u = 'Grabber_base__active_71',
                    du = 'Grabber_base__exit_1f',
                    Eu = 'Grabber_base__showAnimation_d9';
                var mu = t(3521),
                    Au = t(1820);
                const Fu = ({
                    children: e,
                    id: u,
                    containerRef: t,
                    isEnabled: i = !0,
                    onClick: s,
                    forceCenterX: r,
                    isUpdateAvailable: c,
                    handleAction: _,
                    blockOnGrabIds: F = [],
                }) => {
                    const D = su().mediaSize,
                        g = (0, n.useRef)({
                            actualX: 0,
                            clickCenterOffset: 0,
                            dropCenterX: 0,
                            grabActivationPassed: !1,
                            isDragActive: !1,
                            id: u,
                        }),
                        p = (0, n.useRef)({
                            isValid: !1,
                            startX: 0,
                            startCenterX: 0,
                            minXRestriction: 0,
                            maxXRestriction: 8e3,
                        }),
                        C = (0, n.useRef)(null),
                        B = (0, n.useState)(!1),
                        h = B[0],
                        f = B[1],
                        v = (0, n.useState)(0),
                        S = v[0],
                        w = v[1],
                        x = (function () {
                            const e = (0, n.useRef)(0);
                            return (
                                (0, A.k)(() => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, n.useMemo)(
                                    () => ({
                                        run: (u) => {
                                            window.cancelAnimationFrame(e.current),
                                                (e.current = window.requestAnimationFrame(() => {
                                                    e.current = window.requestAnimationFrame(() => {
                                                        u(), (e.current = 0);
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
                        })(),
                        y = 0 !== r && i,
                        I = r ? r - p.current.startCenterX : S;
                    (0, n.useEffect)(() => {
                        if (((p.current.isValid = !1), u))
                            return b(() => {
                                const e = C.current,
                                    n = t.current;
                                if (n && e) {
                                    const t = e.getBoundingClientRect(),
                                        a = n.getBoundingClientRect(),
                                        i = t.left + 0.5 * t.width;
                                    (p.current = {
                                        isValid: !0,
                                        minXRestriction: a.left,
                                        maxXRestriction: a.left + a.width,
                                        startX: t.left,
                                        startCenterX: i,
                                    }),
                                        _(Au.m.Ready, { dragId: u, currentCenterX: i });
                                }
                            });
                    }, [D]);
                    const T = (0, n.useCallback)(
                            (e) => {
                                (g.current.isDragActive = e),
                                    f(e),
                                    g.current.grabActivationPassed && !e && (0, mu.jZ)(!1, F);
                            },
                            [F],
                        ),
                        k = (0, n.useCallback)(() => {
                            _(Au.m.DragStart, { dragId: g.current.id }),
                                (g.current.grabActivationPassed = !0),
                                (0, mu.jZ)(!0, F);
                        }, [_, F]),
                        O = (0, n.useCallback)((e) => {
                            const u = g.current,
                                t = p.current,
                                n = t.startX,
                                a = t.startCenterX,
                                i = t.minXRestriction,
                                s = t.maxXRestriction,
                                r = a - n,
                                o = e - u.clickCenterOffset;
                            u.dropCenterX = (0, mu.yG)(o, r, i, s);
                        }, []),
                        R = (0, n.useCallback)(
                            (e) => {
                                const u = g.current,
                                    t = p.current;
                                0 === e.button &&
                                    !u.isDragActive &&
                                    t.isValid &&
                                    i &&
                                    !c &&
                                    C.current &&
                                    ((u.actualX = e.clientX),
                                    (u.clickCenterOffset = u.actualX - t.startCenterX),
                                    T(!0));
                            },
                            [i, c, T],
                        ),
                        L = (0, n.useCallback)(() => {
                            !s || (i && p.current.isValid) || s();
                        }, [i, s]);
                    (0, o.gd)(
                        h ? l.n.ESCAPE : l.n.NONE,
                        (0, m.z)(() => T(!1)),
                    ),
                        (0, n.useEffect)(() => {
                            i && r && w(0);
                        }, [r, i]);
                    const N = !h && g.current.grabActivationPassed;
                    (0, n.useLayoutEffect)(() => {
                        g.current.id = u;
                    }, [u]),
                        (0, n.useEffect)(() => {
                            if (N) {
                                const e = g.current;
                                _(Au.m.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                    r === e.dropCenterX &&
                                        ((e.grabActivationPassed = !1),
                                        x.run(() => _(Au.m.DropExit, { dragId: e.id })));
                            }
                        }, [N, x, r, _]),
                        (0, n.useEffect)(() => {
                            if (i && h && g.current.id) {
                                const e = E.O.client.events.mouse.up(([e, u]) => {
                                        if ('outside' === u) return T(!1);
                                        const t = g.current,
                                            n = e.clientX;
                                        n === t.actualX && 0 === e.button && !g.current.grabActivationPassed
                                            ? s && s()
                                            : g.current.grabActivationPassed && O(n),
                                            g.current.isDragActive && T(!1);
                                    }),
                                    u = E.O.client.events.mouse.move(([e]) => {
                                        const u = g.current;
                                        if ((0 === e.clientX && 0 === e.clientY) || !u.isDragActive) return;
                                        const t = e.clientX,
                                            n = u.grabActivationPassed;
                                        !n && k(),
                                            t !== u.actualX &&
                                                ((u.actualX = t),
                                                O(t),
                                                n && _(Au.m.Drag, { dragId: u.id, currentCenterX: u.dropCenterX }),
                                                w(u.dropCenterX - p.current.startCenterX));
                                    });
                                return () => {
                                    u(), e();
                                };
                            }
                        }, [k, _, h, i, s, T, O]);
                    const M = i ? d()(ru, ou, h && _u, N && du, y && lu, r && cu) : d()(ru, r && Eu);
                    return a().createElement(
                        'div',
                        {
                            id: u,
                            ref: C,
                            onClick: L,
                            onMouseDown: R,
                            onTransitionEnd: (e) => {
                                const u = g.current;
                                e.target === C.current &&
                                    u.grabActivationPassed &&
                                    ((u.grabActivationPassed = !1), x.run(() => _(Au.m.DropExit, { dragId: u.id })));
                            },
                            className: M,
                            style: { left: I },
                        },
                        e,
                    );
                };
                let bu;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(bu || (bu = {}));
                const Du = 'KeyLabel_base_ec',
                    gu = 'KeyLabel_base__current_c2',
                    pu = 'KeyLabel_base__next_fa',
                    Cu = ({ text: e, show: u, panelType: t, shellState: n, className: i }) => {
                        if (!e) return null;
                        const s = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return a().createElement(
                            'div',
                            { className: d()(Du, n === bu.Current && gu, n === bu.Next && pu, i) },
                            a().createElement(xe, { isTruncated: !0, text: s, show: u, panelType: t }),
                        );
                    };
                var Bu = t(7078);
                const hu = ({ children: e, slotType: u, slotId: t, panelType: i, isEnabled: s = !0 }) => {
                        const r = (0, n.useMemo)(() => ({ slotType: u, slotId: t }), [u, t]);
                        return a().createElement(
                            Bu.t,
                            {
                                isEnabled: s,
                                args: r,
                                decoratorId: [pe.w.Battle, pe.w.Prebattle].includes(i)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            a().createElement('div', null, e),
                        );
                    },
                    fu = 'Close_base_f3',
                    vu = 'Close_base__invisible_0e',
                    Su = 'Close_base__shown_a2',
                    wu = 'Close_base__hover_6d',
                    xu = 'Close_base__down_2b',
                    yu = (0, n.memo)(
                        ({ id: e, show: u = !0, onClick: t, soundHover: i = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, n.useState)(!1),
                                o = r[0],
                                l = r[1],
                                c = (0, n.useState)(!1),
                                _ = c[0],
                                E = c[1],
                                m = (0, n.useState)(!1),
                                A = m[0],
                                F = m[1],
                                D = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                g = (0, n.useCallback)(() => {
                                    E(!0), i && (0, Ke.G)(i);
                                }, [i]),
                                p = (0, n.useCallback)(() => {
                                    l(!1), E(!1);
                                }, []),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && (l(!0), s && (0, Ke.G)(s));
                                    },
                                    [u, s],
                                ),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && t && t();
                                    },
                                    [u, t],
                                );
                            (0, n.useEffect)(
                                () =>
                                    b(() => {
                                        F(!0);
                                    }),
                                [],
                            );
                            const h = d()(fu, !A && vu, A && u && Su, o && xu, _ && wu);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: g,
                                onMouseLeave: p,
                                onMouseDown: C,
                                onMouseUp: B,
                                className: h,
                                onClick: D,
                            });
                        },
                    ),
                    Iu = 'Slot_base_3a',
                    Tu = 'Slot_label_e6',
                    ku = 'Slot_close_bb',
                    Ou = 'Slot_disabled_5d',
                    Ru = 'Slot_shadow_a7',
                    Lu = 'Slot_category_2c';
                let Nu;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Nu || (Nu = {}));
                const Mu = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, ce.c9)(ce.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    Ke.$.playYes();
                            }, [i, u, t, a]),
                            l = (0, n.useCallback)(() => {
                                (0, ce.c9)(ce.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === Nu.RIGHT)(e) && o();
                                },
                                [r, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Pu = ['children'];
                function $u() {
                    return (
                        ($u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        $u.apply(null, arguments)
                    );
                }
                const Hu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Pu);
                    return a().createElement(
                        Mu,
                        $u({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        u,
                    );
                };
                var ju = t(1396),
                    Gu = t(5918);
                const zu = (0, c.Pi)(
                        ({
                            intCD: e,
                            id: u,
                            itemInstalledSetupIdx: t,
                            isMountedMoreThanOne: i,
                            isInstalled: s,
                            isDisabled: o,
                            imageSource: l,
                            isEmpty: c,
                            slotIndex: _,
                            slotType: d,
                            contextMenuDisabled: E,
                            isSetupSwitching: m,
                            children: A,
                        }) => {
                            const F = (0, r.t)().model.root.get().vehicleCD,
                                b = (0, n.useState)(!0),
                                D = b[0],
                                g = b[1],
                                p = (0, ju.K)();
                            (0, n.useEffect)(() => {
                                g(!1), p.run(() => g(!0), 100);
                            }, [F]);
                            const C = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: d,
                                    installedSlotId: u,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: t,
                                    itemInstalledSetupSlotIdx: u,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, d, u, t, s, i],
                            );
                            return D
                                ? a().createElement(
                                      Gu.y,
                                      {
                                          uniqueKey: e,
                                          isEmpty: c,
                                          slotIndex: _,
                                          slotType: d,
                                          imageSource: l,
                                          itemInstalledSetupIndex: t,
                                      },
                                      a().createElement(
                                          Hu,
                                          { isEnabled: !(m || E || o || c), args: C },
                                          a().createElement('div', null, A),
                                      ),
                                  )
                                : a().createElement('div', null, A);
                        },
                    ),
                    Wu = (0, c.Pi)(
                        ({
                            slotType: e,
                            slotIndex: u,
                            level: t,
                            isSelected: i,
                            isSetupSwitching: s,
                            isSectionSelected: o,
                            onActiveSlotChanged: l,
                            onSlotSelected: c,
                            onActiveSlotRefChanged: _,
                            onSlotClear: d,
                            panelType: E,
                            isDisabled: m = !1,
                            isBorderActive: A,
                            isIncompatible: F = !1,
                            grabberId: D,
                            containerRef: g,
                            activeDragId: p,
                            handleGrabberAction: C,
                            forceLeftUpdate: B,
                            potentialDropId: h,
                            blockOnGrabIds: f,
                            contextMenuDisabled: v,
                            groupIndex: S,
                            sectionIndex: w,
                        }) => {
                            const x = (0, r.t)().model.computes.slots.slot(S, w, u),
                                y = x.imageSource,
                                I = x.isInstalled,
                                T = x.itemInstalledSetupIdx,
                                k = x.isMountedMoreThanOne,
                                O = x.overlayType,
                                R = x.keyName,
                                L = x.categoryImgSource,
                                N = x.withAttention,
                                M = x.id,
                                P = x.intCD,
                                $ = E === pe.w.Setup,
                                H = !(0, Q.s$)(E),
                                j = !(0, Q.iN)(E),
                                G = E === pe.w.Compare,
                                z = $ && o && H,
                                W = (0, n.useRef)(!1),
                                U = (0, n.useRef)(null),
                                q = -1 === P;
                            (0, n.useEffect)(() => {
                                if (!W.current && o && i)
                                    return b(() => {
                                        l && l(U, e, M), (W.current = !0);
                                    });
                                W.current = !0;
                            }, [M, o, i, l, e]),
                                (0, n.useEffect)(() => {
                                    i && _(U);
                                }, [i, _]);
                            const V = ((e) => {
                                    const u = (0, n.useRef)(-1),
                                        t = (0, n.useCallback)(
                                            (t) => {
                                                if (-1 === u.current) {
                                                    const n = e(t);
                                                    n &&
                                                        (u.current = window.setTimeout(() => {
                                                            u.current = -1;
                                                        }, n));
                                                }
                                            },
                                            [e],
                                        );
                                    return (0, n.useEffect)(() => () => clearTimeout(u.current), []), t;
                                })((0, n.useCallback)(() => (!i && H && !s && c(e, M), 500), [M, H, i, s, c, e])),
                                X = (0, n.useCallback)(() => {
                                    m || V('');
                                }, [V, m]),
                                Z = (0, n.useCallback)(() => {
                                    j && !i && !p && !m && Ke.$.playHighlight();
                                }, [i, p, m, j]);
                            (0, n.useEffect)(() => {
                                h && Ke.$.playHighlight();
                            }, [h]);
                            const K = (0, n.useCallback)(() => {
                                    null == d || d(M, e);
                                }, [M, d, e]),
                                Y = $ && !I,
                                J = Boolean(D && h === D),
                                ee = D && (z || G),
                                ue = `${e}-slot-${M}`,
                                te = L && L.length > 0,
                                ne = te ? { backgroundImage: `url(${L})` } : {},
                                ae = {
                                    id: D,
                                    containerRef: g,
                                    isEnabled: !q,
                                    onClick: X,
                                    isUpdateAvailable: Boolean(p),
                                    handleAction: C,
                                    forceCenterX: B,
                                    blockOnGrabIds: f,
                                },
                                ie = {
                                    isEmpty: q,
                                    intCD: P,
                                    slotType: e,
                                    slotIndex: u,
                                    imageSource: y,
                                    isDisabled: m,
                                    isInstalled: I,
                                    id: M,
                                    itemInstalledSetupIdx: T,
                                    isMountedMoreThanOne: k,
                                    contextMenuDisabled: v,
                                    isSetupSwitching: s,
                                };
                            return a().createElement(
                                'div',
                                { className: Iu, onMouseEnter: Z, id: ue },
                                (o || G) &&
                                    !I &&
                                    a().createElement(
                                        'div',
                                        { className: ku },
                                        a().createElement(yu, { id: `close-${ue}`, show: !p, onClick: K }),
                                    ),
                                a().createElement(
                                    hu,
                                    { slotType: e, slotId: M, isEnabled: !p, panelType: E },
                                    a().createElement(
                                        'div',
                                        { ref: U },
                                        a().createElement(
                                            eu.W,
                                            {
                                                activeDragId: p,
                                                slotType: e,
                                                isSelected: i,
                                                isBorderActive: Boolean(A),
                                                panelType: E,
                                                isDisabled: m,
                                                isPotentialDrop: J,
                                                onClick: ee ? void 0 : X,
                                            },
                                            H &&
                                                a().createElement(
                                                    'div',
                                                    { className: Tu },
                                                    a().createElement(Cu, { text: R, show: Boolean(o), panelType: E }),
                                                ),
                                            a().createElement(
                                                Qe.J,
                                                { when: Boolean(ee), wrapper: Fu, withProps: ae },
                                                a().createElement(
                                                    Qe.J,
                                                    { when: H, wrapper: zu, withProps: ie },
                                                    a().createElement(uu.c, {
                                                        imageSource: y,
                                                        isIncompatible: F,
                                                        overlayType: O,
                                                        level: t,
                                                        isTemporary: Y,
                                                        withAttention: N,
                                                    }),
                                                ),
                                            ),
                                            te &&
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('span', { className: Ru }),
                                                    a().createElement('span', { className: Lu, style: ne }),
                                                ),
                                            m && a().createElement('div', { className: Ou }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Uu = 'BattleAbilitySlot_base_74',
                    qu = 'BattleAbilitySlot_rank_01',
                    Vu = ['rank'];
                const Xu = (e) => {
                    let u = e.rank,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Vu);
                    return a().createElement(
                        'div',
                        { className: Uu },
                        a().createElement(Wu, t),
                        u && a().createElement('div', { className: qu, style: { backgroundImage: `url(${u})` } }),
                    );
                };
                var Zu = t(4814);
                const Ku = 'OptDeviceSlot_base_14',
                    Yu = 'OptDeviceSlot_specializations_c3',
                    Ju = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function Qu() {
                    return (
                        (Qu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Qu.apply(null, arguments)
                    );
                }
                const et = (0, c.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.activeSpecsMask,
                            s = e.isChangeSetupIndex,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Ju);
                        const l = (0, r.t)(),
                            c = l.controls,
                            _ = l.model.computes.specializations(u, t, n),
                            E = _.specializations.length,
                            m = o.panelType === pe.w.Setup || o.panelType === pe.w.Compare,
                            A = !(0, Q.s$)(o.panelType),
                            F = _.isDynamic;
                        return a().createElement(
                            'div',
                            { className: d()(Ku, E && !F && !s && 'specializationsSlot') },
                            A &&
                                a().createElement(
                                    'div',
                                    { className: Yu },
                                    a().createElement(Zu.G, {
                                        specializations: _.specializations,
                                        isDynamic: F,
                                        activeSpecsMask: i,
                                        isSpecializationActive: m,
                                        onSpecializationClick: (e) => {
                                            c.specializationSelect({ slotId: o.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(Wu, Qu({}, o, { groupIndex: u, sectionIndex: t, slotIndex: n })),
                        );
                    }),
                    ut = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    tt = ({ id: e, isSelected: u, isLocked: t, onSlotSelected: i, panelType: s }) => {
                        const r = ee.yZ,
                            o = (0, n.useCallback)(() => {
                                i(r, e);
                            }, [e, i, r]),
                            l = d()(ut.base, ut[`base__${s}`], t && ut.base__disabled, u && ut.base__toggle),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            _ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            ),
                            E = `toggle-camouflage-slot-${e}`;
                        return a().createElement(
                            hu,
                            { slotType: r, slotId: e, panelType: s },
                            a().createElement(
                                'div',
                                { id: E, className: l, onClick: o, onMouseEnter: Ke.$.playHighlight },
                                u && a().createElement('div', { className: ut.glow }),
                                a().createElement('div', { className: ut.image, style: c }),
                                a().createElement('div', { className: ut.toggle, style: _ }),
                            ),
                        );
                    },
                    nt = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function at() {
                    return (
                        (at = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        at.apply(null, arguments)
                    );
                }
                const it = (0, c.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.sectionType,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, nt);
                        const o = (0, r.t)().model,
                            l = o.computes.slots.slot(u, t, n),
                            c = o.ammunitionPanel.get(),
                            _ = c.selectedSection,
                            d = c.selectedSlot,
                            E = (_ === i ? d : -1) === l.id;
                        switch (i) {
                            case ee.zn: {
                                const e = l;
                                return a().createElement(
                                    et,
                                    at({}, e, s, { groupIndex: u, sectionIndex: t, slotIndex: n, isSelected: E }),
                                );
                            }
                            case ee.yZ: {
                                const e = l;
                                return a().createElement(
                                    tt,
                                    at({}, s, e, { groupIndex: u, sectionIndex: t, slotIndex: n }),
                                );
                            }
                            case ee.YN: {
                                const e = l;
                                return a().createElement(
                                    Xu,
                                    at({}, s, e, { groupIndex: u, sectionIndex: t, slotIndex: n, isSelected: E }),
                                );
                            }
                            default:
                                return a().createElement(
                                    Wu,
                                    at({}, s, { isSelected: E, groupIndex: u, sectionIndex: t, slotIndex: n }),
                                );
                        }
                    }),
                    st = 'Slots_base_27',
                    rt = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function ot() {
                    return (
                        (ot = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ot.apply(null, arguments)
                    );
                }
                const lt = (0, c.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            i = e.sectionType,
                            s = e.onActiveSlotChanged,
                            o = e.isDisabled,
                            l = e.blockOnGrabIds,
                            c = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, rt);
                        const m = (0, n.useRef)(null),
                            A = (0, n.useRef)(null),
                            F = (0, r.t)(),
                            b = F.model,
                            D = F.controls,
                            g = b.computes.slots.length(u, t),
                            p = b.ammunitionPanel.get(),
                            C = p.selectedSection,
                            B = p.selectedSlot,
                            h = p.syncInitiator,
                            f = (0, n.useCallback)(
                                (e, u) => {
                                    D.dragDropSwap({
                                        sectionType: i,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(u[u.length - 1]),
                                    });
                                },
                                [D, i],
                            ),
                            v = C === i,
                            S = i === ee.YN,
                            w = v ? B : -1,
                            x = `${i}-${g}slots`,
                            y = (0, Ie.UW)({
                                baseId: x,
                                slotsLength: g,
                                handleSwap: f,
                                setIsExitBlocked: _,
                                syncInitiator: h,
                            }),
                            I = y.handleGrabberAction,
                            T = y.dragState,
                            k = y.getForceCenterX;
                        (0, n.useEffect)(() => {
                            v && -1 !== w && m.current && s(m, C, w);
                        }, [s, v, C, w]);
                        const O = (e, u) => {
                                if ((o || Ke.$.playClick(), 'number' != typeof u))
                                    return console.warn('selectedSlot is not a number');
                                D.sectionSelect({ selectedSlot: u, selectedSection: e });
                            },
                            R = (e) => {
                                m.current = e ? e.current : null;
                            },
                            L = (e, u) => {
                                D.slotClear({ slotId: e, sectionType: u });
                            };
                        return a().createElement(
                            'div',
                            { id: x, ref: A, className: d()(st, i) },
                            H(g, (e) => {
                                const r = !S && g > 1 ? `${x}-${e}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `slot ${u}-${t}-${e}` },
                                    e > 0 && a().createElement(Je, null),
                                    a().createElement(
                                        it,
                                        ot(
                                            {
                                                groupIndex: u,
                                                sectionIndex: t,
                                                slotIndex: e,
                                                sectionType: i,
                                                isSectionSelected: v,
                                                isDisabled: o,
                                                contextMenuDisabled: S,
                                                slotType: i,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: O,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: L,
                                                grabberId: r,
                                                containerRef: A,
                                                forceLeftUpdate: k(r),
                                                activeDragId: T.activeDragId,
                                                handleGrabberAction: I,
                                                potentialDropId: T.potentialDropId,
                                                blockOnGrabIds: l,
                                                isSetupSwitching: c,
                                                isChangeSetupIndex: c,
                                            },
                                            E,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    ct = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'vehicle',
                        'vehicleType',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function _t() {
                    return (
                        (_t = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        _t.apply(null, arguments)
                    );
                }
                const dt = (0, c.Pi)((e) => {
                    let u = e.groupIndex,
                        t = e.sectionIndex,
                        i = e.type,
                        s = e.newItemsCount,
                        o = e.panelType,
                        l = e.sectionsIds,
                        c = e.vehicle,
                        _ = e.vehicleType,
                        E = e.isSetupSwitching,
                        m = e.classMix,
                        A = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, ct);
                    const F = (0, r.t)().model,
                        b = (0, n.useRef)(null),
                        D = F.ammunitionPanel.get(),
                        g = D.selectedSection,
                        p = D.syncInitiator,
                        C = F.computes.slots.length(u, t),
                        B = F.computes.slots.existFilled(u, t),
                        h = ((e, u) => {
                            const t = be('tutorialModel.triggers.items').filter((t) => {
                                if (!t) return !1;
                                const n = t.value,
                                    a = n.triggers.filter((e) => e.value === u);
                                return n.componentId === e && a.length > 0;
                            });
                            return 0 === t.length
                                ? null
                                : window.tutorialModel.foundComponents.items.some((u) => u.value.componentId === e)
                                  ? {
                                        trigger: t[0].value,
                                        runTrigger: (t) => {
                                            window.tutorialModel.onTriggerActivated({
                                                componentId: e,
                                                triggerType: u,
                                                state: t,
                                            });
                                        },
                                    }
                                  : null;
                        })('AmmunitionPanelBattleAbilities', ge);
                    (0, n.useEffect)(() => {
                        null == h || h.runTrigger(!0);
                    }, [h]);
                    const f = g === i,
                        v = (0, Ie.Tu)(i, l),
                        S = v.selfId,
                        w = v.blockOnGrabIds,
                        x = ((c && c.length > 0) || (_ && _.length > 0)) && o !== pe.w.Battle && o !== pe.w.Respawn,
                        y = (0, n.useMemo)(
                            () => ({
                                icon: a().createElement('span', {
                                    className: Ne,
                                    style: {
                                        backgroundImage: _
                                            ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(_)})`
                                            : '',
                                    },
                                }),
                                vehicle: c,
                            }),
                            [c, _],
                        ),
                        I = C > 0 && o !== pe.w.Compare && o !== pe.w.Battle && o !== pe.w.Respawn,
                        T = R.strings.tank_setup.section.$dyn(i);
                    if ('string' != typeof T)
                        throw new Error(`No top label text for section type ${i} or it's not a string`);
                    return a().createElement(
                        'div',
                        {
                            id: E ? ye : S,
                            ref: b,
                            className: d()(
                                Te,
                                m,
                                f && 'sectionSelected',
                                C > 1 && 'multiSlot',
                                p >= 0 && B && 'existFilledSlots',
                            ),
                        },
                        x &&
                            a().createElement(
                                Ze,
                                { className: Re },
                                a().createElement(se, {
                                    classMix: Le,
                                    text: R.strings.tank_setup.categories.reserves.config(),
                                    binding: y,
                                }),
                            ),
                        I &&
                            a().createElement(
                                'div',
                                { className: ke },
                                a().createElement(xe, { text: T, parentRef: b, show: !f, panelType: o }),
                            ),
                        a().createElement(
                            lt,
                            _t({ groupIndex: u, sectionIndex: t, sectionType: i, panelType: o, blockOnGrabIds: w }, A),
                        ),
                        Boolean(s) &&
                            a().createElement(
                                'div',
                                { className: Oe },
                                a().createElement(ae, { value: s, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var Et = t(8598);
                const mt = {
                        base: 'ShellsSlot_base_05',
                        base__grabbing: 'ShellsSlot_base__grabbing_2f',
                        shell: 'ShellsSlot_shell_ab',
                        shell__grabbing: 'ShellsSlot_shell__grabbing_98',
                        shell__active: 'ShellsSlot_shell__active_7e',
                        shell__potential: 'ShellsSlot_shell__potential_30',
                        label: 'ShellsSlot_label_da',
                        image: 'ShellsSlot_image_3f',
                        infinity: 'ShellsSlot_infinity_19',
                    },
                    At = ({
                        id: e,
                        itemInstalledSetupIdx: u,
                        isMountedMoreThanOne: t,
                        imageSource: i,
                        count: s,
                        isInfinity: r,
                        isSelected: o,
                        keyName: l,
                        panelType: c,
                        intCD: _,
                        slotIndex: E,
                        grabberId: m,
                        isSetupSwitching: A,
                        containerRef: F,
                        activeDragId: b,
                        handleGrabberAction: D,
                        forceLeftUpdate: g,
                        potentialDropId: p,
                        blockOnGrabIds: C,
                        shellState: B,
                        isDisabled: h,
                    }) => {
                        const f = !(0, Q.s$)(c),
                            v = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            S = m && m === p,
                            w = m && m === b,
                            x = (0, n.useMemo)(() => {
                                const n = { slotType: ee.g9, slotId: e, fieldType: 1, intCD: _ };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: u,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: t,
                                    }),
                                ];
                            }, [_, e, u, t]),
                            y = x[0],
                            I = x[1],
                            T = (0, n.useMemo)(
                                () => ({
                                    id: m,
                                    containerRef: F,
                                    isEnabled: Boolean(m) && o,
                                    isUpdateAvailable: Boolean(b),
                                    handleAction: D,
                                    forceCenterX: g,
                                    blockOnGrabIds: C,
                                }),
                                [b, C, F, g, m, D, o],
                            ),
                            k = (0, n.useMemo)(
                                () => ({ slotIndex: E, uniqueKey: _, slotType: ee.g9, imageSource: null }),
                                [_, E],
                            );
                        return a().createElement(
                            Hu,
                            { isEnabled: f && !A && !h, args: I },
                            a().createElement(
                                Bu.t,
                                {
                                    args: y,
                                    decoratorId: [pe.w.Battle, pe.w.Prebattle].includes(c)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !b,
                                },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${E}`, className: mt.base },
                                    l &&
                                        a().createElement(
                                            'div',
                                            { className: mt.label },
                                            a().createElement(Cu, {
                                                text: l,
                                                show: o || c === pe.w.Battle || c === pe.w.Respawn,
                                                shellState: B,
                                                panelType: c,
                                                className: d()(
                                                    0 === E && mt.topLabel__first,
                                                    2 === E && mt.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: d()(
                                                mt.shell,
                                                !b && f && !h && mt.shell__active,
                                                w && mt.shell__grabbing,
                                                !w && S && mt.shell__potential,
                                            ),
                                        },
                                        a().createElement(
                                            Qe.J,
                                            { when: f, wrapper: Fu, withProps: T },
                                            a().createElement(
                                                Qe.J,
                                                { when: f, wrapper: Gu.y, withProps: k },
                                                a().createElement('div', { className: mt.image, style: v }),
                                                !r && a().createElement(Et.X, { count: s }),
                                                r && a().createElement('div', { className: mt.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ft = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    bt = ({ id: e, isSelected: u, imageSource: t, onSlotSelected: i, panelType: s }) => {
                        const r = (0, n.useCallback)(() => {
                                !u && i(e);
                            }, [e, u, i]),
                            o = d()(Ft.slot, !u && Ft.slot__active, Ft.slot__compare),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            );
                        return a().createElement(
                            hu,
                            { slotType: ee.WI, slotId: e, panelType: s },
                            a().createElement(
                                'div',
                                { className: Ft.base },
                                a().createElement(
                                    'div',
                                    { className: o, onClick: r, id: `shell-slot-${e}` },
                                    u && a().createElement('div', { className: Ft.glow }),
                                    a().createElement('div', { className: Ft.image, style: l }),
                                    a().createElement('div', { className: Ft.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    Dt = 'ShellContainer_base_46',
                    gt = 'ShellContainer_base__compressed_13',
                    pt = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
                function Ct() {
                    return (
                        (Ct = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ct.apply(null, arguments)
                    );
                }
                const Bt = (0, c.Pi)((e) => {
                        let u = e.groupIndex,
                            t = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.isCompare,
                            s = e.handleSlotSelected,
                            o = e.baseId,
                            l = e.grabber,
                            c = e.panelType,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, pt);
                        const E = l.handleGrabberAction,
                            m = l.dragState,
                            A = l.getForceCenterX,
                            F = (0, r.t)().model,
                            b = F.computes.slots.length(u, t),
                            D = F.computes.slots.slot(u, t, n),
                            g = !i && b > 1 ? `${o}-${D.id}` : '';
                        return (0, Q.j2)(D)
                            ? null
                            : a().createElement(
                                  'div',
                                  { key: D.id, className: d()(Dt, !i && 0 !== n && gt) },
                                  i
                                      ? a().createElement(bt, Ct({}, D, { onSlotSelected: s, panelType: c }))
                                      : a().createElement(
                                            At,
                                            Ct(
                                                {},
                                                D,
                                                {
                                                    slotIndex: n,
                                                    grabberId: g,
                                                    forceLeftUpdate: A(g),
                                                    activeDragId: m.activeDragId,
                                                    handleGrabberAction: E,
                                                    potentialDropId: m.potentialDropId,
                                                    panelType: c,
                                                },
                                                _,
                                            ),
                                        ),
                              );
                    }),
                    ht = 'Shells_base_f9',
                    ft = (0, c.Pi)(
                        ({
                            panelType: e,
                            onSelected: u,
                            isCompare: t,
                            isSelected: i,
                            syncInitiator: s,
                            blockOnGrabIds: o,
                            isDisabled: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: _,
                            groupIndex: d,
                            sectionIndex: E,
                        }) => {
                            const m = (0, r.t)(),
                                A = m.model,
                                F = m.controls,
                                D = A.computes.slots.length(d, E),
                                g = (0, n.useRef)(!1),
                                p = (0, n.useRef)(null),
                                C = t ? ee.WI : ee.g9,
                                B = `${C}-${D}shells`,
                                h = !(0, Q.iN)(e),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        F.sectionSelect({ selectedSlot: e, selectedSection: C }), h && Ke.$.playClick();
                                    },
                                    [F, C, h],
                                ),
                                v = (0, n.useCallback)(() => {
                                    i || t || l || c || f(0);
                                }, [i, t, c, l, f]),
                                S = (0, n.useCallback)(
                                    (e, u) => {
                                        F.dragDropSwap({
                                            sectionType: C,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(u[u.length - 1]),
                                        });
                                    },
                                    [F, C],
                                ),
                                w = (0, Ie.UW)({
                                    baseId: B,
                                    slotsLength: D,
                                    handleSwap: S,
                                    setIsExitBlocked: _,
                                    syncInitiator: s,
                                });
                            return (
                                (0, n.useEffect)(
                                    () =>
                                        b(() => {
                                            g.current = !0;
                                        }),
                                    [],
                                ),
                                (0, n.useEffect)(() => {
                                    if (i && e === pe.w.Setup) {
                                        if (!g.current)
                                            return b(() => {
                                                u();
                                            });
                                        u();
                                    }
                                }, [i, e, u]),
                                a().createElement(
                                    'div',
                                    {
                                        id: B,
                                        ref: p,
                                        className: ht,
                                        onClick: v,
                                        onMouseEnter: () => {
                                            !l && h && Ke.$.playHighlight();
                                        },
                                    },
                                    H(D, (u) =>
                                        a().createElement(Bt, {
                                            key: `${d} ${E} ${u}`,
                                            groupIndex: d,
                                            sectionIndex: E,
                                            slotIndex: u,
                                            isCompare: t,
                                            containerRef: p,
                                            handleSlotSelected: f,
                                            panelType: e,
                                            blockOnGrabIds: o,
                                            isSelected: i,
                                            isDisabled: l,
                                            isSetupSwitching: c,
                                            grabber: w,
                                            baseId: B,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    vt = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    St = [pe.w.Hangar, pe.w.Battle, pe.w.Prebattle, pe.w.Respawn],
                    wt = (0, c.Pi)(
                        ({
                            type: e,
                            sectionsIds: u,
                            panelType: t,
                            onActiveSlotChanged: i,
                            isDisabled: s,
                            isBorderActive: o,
                            classMix: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: _,
                            newItemsCount: E,
                            groupIndex: m,
                            sectionIndex: A,
                        }) => {
                            const F = (0, r.t)().model,
                                b = F.ammunitionPanel.get(),
                                D = b.ammoNotFull,
                                g = b.selectedSection,
                                p = b.syncInitiator,
                                C = (0, n.useRef)(null),
                                B = t === pe.w.Compare,
                                h = t === pe.w.Prebattle && e === ee.g9,
                                f = g === e || h,
                                v = (0, n.useCallback)(() => {
                                    i(C, g, 0);
                                }, [i, g]),
                                S = (0, Ie.Tu)(e, u),
                                w = S.selfId,
                                x = S.blockOnGrabIds,
                                y = ((e) => St.includes(e))(t) && !s && D,
                                I = F.computes.slots.filteredLength(m, A),
                                T = !B && t !== pe.w.Battle && t !== pe.w.Respawn;
                            return a().createElement(
                                'div',
                                {
                                    id: c ? ye : w,
                                    className: d()(
                                        vt.base,
                                        l,
                                        vt[`base__${t}`],
                                        !o && f && vt.base__selected,
                                        B && vt.base__compare,
                                        s && vt.base__disabled,
                                    ),
                                    ref: C,
                                },
                                y && a().createElement('div', { className: vt.attention }),
                                T &&
                                    a().createElement(
                                        'div',
                                        { className: vt.label },
                                        a().createElement(xe, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: C,
                                            show: !f,
                                            panelType: t,
                                        }),
                                    ),
                                y &&
                                    a().createElement('div', {
                                        className: d()(
                                            vt.border,
                                            2 === I && vt.border__double,
                                            3 === I && vt.border__triple,
                                        ),
                                    }),
                                a().createElement(ft, {
                                    groupIndex: m,
                                    sectionIndex: A,
                                    panelType: t,
                                    onSelected: v,
                                    isSelected: f,
                                    isCompare: B,
                                    syncInitiator: p,
                                    blockOnGrabIds: x,
                                    isDisabled: s,
                                    isSetupSwitching: c,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(E) &&
                                    a().createElement(
                                        'div',
                                        { className: vt.counter },
                                        a().createElement(ae, { value: E, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && a().createElement('div', { className: vt.disabled }),
                            );
                        },
                    ),
                    xt = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function yt() {
                    return (
                        (yt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        yt.apply(null, arguments)
                    );
                }
                const It = (0, c.Pi)(
                        ({
                            groupIndex: e,
                            panelType: u,
                            isDisabled: t = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: i,
                            isChangeSetupIndex: s,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, r.t)().model,
                                c = T(['section'], xt),
                                _ = l.computes.sections.IDs(e),
                                E = {
                                    panelType: u,
                                    isDisabled: t,
                                    onActiveSlotChanged: n,
                                    isBorderActive: i,
                                    sectionsIds: _,
                                    isChangeSetupIndex: s,
                                    setIsExitBlocked: o,
                                };
                            return a().createElement(
                                'div',
                                { className: xt.base },
                                H(l.computes.sections.length(e), (t) => {
                                    const n = l.computes.sections.section(e, t);
                                    if (!n.slots || !n.slots.length) return null;
                                    const i = d()(
                                        c.section,
                                        0 !== t && (0, Q.s$)(u) && xt.section__battle,
                                        0 === t && xt.section__first,
                                    );
                                    if (n.type === ee.g9 || n.type === ee.WI) {
                                        const u = n;
                                        return a().createElement(
                                            wt,
                                            yt({}, u, E, {
                                                groupIndex: e,
                                                sectionIndex: t,
                                                isSetupSwitching: s,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: i,
                                            }),
                                        );
                                    }
                                    return a().createElement(
                                        dt,
                                        yt({}, n, E, {
                                            groupIndex: e,
                                            sectionIndex: t,
                                            isSetupSwitching: s,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: i,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    Tt = 'KeyboardKey_base_57',
                    kt = 'KeyboardKey_back_43',
                    Ot = a().memo(({ text: e }) =>
                        a().createElement('div', { className: Tt }, a().createElement('div', { className: kt }, e)),
                    ),
                    Rt = 'SetupSwitchHotkey_base_4c',
                    Lt = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    Nt = 'SetupSwitchHotkey_plusWrapper_f0',
                    Mt = 'SetupSwitchHotkey_plus_f0',
                    Pt = 'SetupSwitchHotkey_plus__horizontal_e0',
                    $t = 'SetupSwitchHotkey_plus__vertical_5b',
                    Ht = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: Rt },
                            e.map((e, u) => {
                                if (!e) return null;
                                const t = e.value;
                                return 0 === u
                                    ? a().createElement(Ot, { key: u, text: t })
                                    : a().createElement(
                                          'div',
                                          { key: u, className: Lt },
                                          a().createElement(
                                              'div',
                                              { className: Nt },
                                              a().createElement('div', { className: `${Mt} ${Pt}` }),
                                              a().createElement('div', { className: `${Mt} ${$t}` }),
                                          ),
                                          a().createElement(Ot, { text: t }),
                                      );
                            }),
                        ),
                    ),
                    jt = {
                        base: 'Group_base_70',
                        wrapper: 'Group_wrapper_07',
                        switch: 'Group_switch_ff',
                        switch__battle: 'Group_switch__battle_c0',
                        switch__small: 'Group_switch__small_5e',
                        switch__extraSmall: 'Group_switch__extraSmall_ec',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_2e',
                        hint: 'Group_hint_99',
                        hint__disabled: 'Group_hint__disabled_6a',
                    };
                function Gt() {
                    return (
                        (Gt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Gt.apply(null, arguments)
                    );
                }
                const zt = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    Wt = (e) => e.setupSelector.hotKeys,
                    Ut = (0, c.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: u,
                            isSetupSwitching: t,
                            setSetupSwitching: n,
                            handleSetupSwitching: i,
                        }) => {
                            const s = T(['switch'], jt),
                                o = (0, r.t)().model,
                                l = o.root.get().isDisabled,
                                c = o.computes.groups.group(e);
                            return a().createElement(
                                'div',
                                { key: c.groupId, className: jt.base },
                                a().createElement(
                                    'div',
                                    { className: jt.wrapper },
                                    a().createElement(
                                        J,
                                        ((e, u) => ({ index: e.currentIndex, setSetupSwitching: u }))(c, n),
                                        a().createElement(It, Gt({}, u, { groupIndex: e, isChangeSetupIndex: t })),
                                    ),
                                    c.setupSelector.isSwitchEnabled &&
                                        a().createElement(
                                            'div',
                                            { className: d()(s.switch, (0, Q.iN)(u.panelType) && jt.switch__battle) },
                                            a().createElement(q._, {
                                                states: c.setupSelector.states,
                                                onClick: i,
                                                totalCount: c.totalCount,
                                                currentIndex: c.currentIndex,
                                                groupId: c.groupId,
                                                isDisabled: u.isDisabled,
                                            }),
                                            c.setupSelector.isPrebattleSwitchDisabled &&
                                                a().createElement(
                                                    U,
                                                    {
                                                        header: zt.title(),
                                                        body: String(zt.desc.$dyn(`c_${c.groupId}`)),
                                                    },
                                                    a().createElement('div', {
                                                        className: jt.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((_ = c),
                                ((E = u.panelType) === pe.w.Battle || E === pe.w.Respawn) &&
                                    _.setupSelector.isSwitchEnabled &&
                                    Wt(_) &&
                                    a().createElement(
                                        'div',
                                        { className: d()(jt.hint, l && jt.hint__disabled) },
                                        a().createElement(Ht, { hotKeys: Wt(c) }),
                                    )),
                            );
                            var _, E;
                        },
                    ),
                    qt = 'Groups_base_de',
                    Vt = (0, c.Pi)(
                        ({ sectionProps: e, isSetupSwitching: u, isReady: t, setSetupSwitching: i, children: s }) => {
                            const o = (0, r.t)(),
                                l = o.model,
                                c = o.controls,
                                _ = l.vehicleInfo.get(),
                                d = c.changeSetupIndex,
                                E = null == _ ? void 0 : _.vehicleName;
                            (0, n.useEffect)(() => {
                                (e.panelType !== pe.w.Hangar && e.panelType !== pe.w.Setup) || !t || i(!1);
                            }, [t, e.panelType, i]),
                                (0, n.useEffect)(() => {
                                    e.panelType === pe.w.Respawn && i(!1);
                                }, [E, e.panelType, i]);
                            const m = (0, n.useCallback)(
                                (u) => {
                                    e.panelType === pe.w.Respawn && i(!0), d(u);
                                },
                                [d, e.panelType, i],
                            );
                            return a().createElement(
                                'div',
                                { className: qt },
                                H(l.computes.groups.length(), (t) =>
                                    a().createElement(Ut, {
                                        key: `group-${t}`,
                                        sectionProps: e,
                                        groupIndex: t,
                                        isSetupSwitching: u,
                                        setSetupSwitching: i,
                                        handleSetupSwitching: m,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function Xt() {
                    return (
                        (Xt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Xt.apply(null, arguments)
                    );
                }
                const Zt = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(U, u, n);
                        const i = u.contentId;
                        return i
                            ? a().createElement(j.u, Xt({}, u, { contentId: i }), n)
                            : a().createElement(Bu.t, u, n);
                    },
                    Kt = 'RoleSkillSlot_base_c4',
                    Yt = 'RoleSkillSlot_icon_79',
                    Jt = ({ roleSkill: e, tooltipId: u, tooltipHeader: t, tooltipBody: i, className: s }) => {
                        const r = (0, n.useMemo)(
                            () => ({
                                args: { tooltipId: u, roleSkill: e, header: t, body: i, hasHtmlContent: !0 },
                                header: t,
                                body: i,
                                ignoreShowDelay: !0,
                            }),
                            [e, t, i, u],
                        );
                        return a().createElement(
                            Zt,
                            { tooltipArgs: r, className: d()(Kt, s) },
                            a().createElement('div', {
                                className: Yt,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Qt = 'SlotGlow_base_40',
                    en = 'SlotGlow_glow_a9',
                    un = 'SlotGlow_glow__initialized_8d',
                    tn = 'SlotGlow_glow__shown_f2',
                    nn = 'SlotGlow_glow__hidden_94',
                    an = (0, n.memo)(({ slotOffset: e, slotWidth: u, isAnimationRunning: t }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: u }),
                            s = i[0],
                            r = i[1],
                            o = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: u });
                        (0, n.useEffect)(() => {
                            let t = o.current.initialized;
                            !t && e && ((t = !0), r({ offset: e, slotWidth: u })),
                                (o.current = { initialized: t, offset: e, slotWidth: u });
                        }, [e, u]),
                            (0, n.useEffect)(() => {
                                t || r(o.current);
                            }, [t]);
                        const l = (0, n.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${E.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            c = !t && s.offset === o.current.offset,
                            _ = d()(en, o.current.initialized && un, c ? tn : nn);
                        return a().createElement(
                            'div',
                            { className: Qt },
                            a().createElement('div', { className: _, style: l }),
                        );
                    }),
                    sn = (0, c.Pi)(
                        ({
                            show: e = !0,
                            isReady: u = !0,
                            panelType: t,
                            isDisabled: i = !1,
                            onResize: s,
                            setIsExitBlocked: o,
                        }) => {
                            const l = (0, r.t)(),
                                c = l.model,
                                _ = l.controls,
                                E = c.ammunitionPanel.get(),
                                m = E.isSetupSwitchInProgress,
                                A = E.syncInitiator,
                                D = c.roleSkillSlot.get(),
                                g = (0, n.useState)(!1),
                                p = g[0],
                                C = g[1],
                                B = (0, n.useRef)(!1),
                                h = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                                f = h[0],
                                v = h[1],
                                S = (0, n.useState)(!1),
                                w = S[0],
                                x = S[1],
                                y = (0, n.useRef)(null),
                                I = (0, n.useContext)(F),
                                R = (0, n.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                L = (0, n.useCallback)(
                                    (e, u) => {
                                        if (p || m || t !== pe.w.Hangar) return;
                                        const n = u || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        _.sectionResized(Object.assign({ sectionType: e }, n)),
                                            I && (I.freeze(), I.resize());
                                    },
                                    [p, m, t, _, I],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        L('main', e);
                                    },
                                    [L],
                                );
                            k(y, N, !0, [A]), (0, n.useEffect)(() => () => N(), [N]);
                            const M = (0, n.useCallback)(() => {
                                    x(!1);
                                }, []),
                                P = (0, n.useCallback)(() => {
                                    if (R.current.element && y.current) {
                                        const e = R.current.element.getBoundingClientRect(),
                                            u = y.current.getBoundingClientRect();
                                        v({ slotWidth: e.width, slotOffset: e.left - u.left + 0.5 * e.width });
                                    }
                                }, []),
                                H = (0, n.useCallback)(
                                    (e, u, t) => {
                                        if (e.current && y.current) {
                                            const n = ((e, u, t) =>
                                                e !== t.current.slotIndex || u !== t.current.sectionIndex)(t, u, R);
                                            (R.current.element = e.current),
                                                (R.current.slotIndex = t),
                                                (R.current.sectionIndex = u),
                                                B.current && n ? x(!0) : (B.current = !0),
                                                R.current.generation && P();
                                        }
                                    },
                                    [P],
                                ),
                                j = (0, n.useCallback)(
                                    () =>
                                        b(() => {
                                            (R.current.generation += 1), P();
                                        }),
                                    [R, P],
                                );
                            (0, n.useEffect)(() => b(j), [j]),
                                (0, n.useEffect)(
                                    () => (
                                        engine.on('clientResized', j),
                                        () => {
                                            engine.off('clientResized', j);
                                        }
                                    ),
                                    [j],
                                );
                            const G = f.slotWidth,
                                z = f.slotOffset,
                                W = d()(O.base, !u && O.base__locked, !e && O.base__hidden, i && O.base__disabled),
                                U = d()(O.border, !w && O.border__hidden),
                                q = t === pe.w.Setup || t === pe.w.Compare,
                                V = {
                                    panelType: t,
                                    isDisabled: i,
                                    onActiveSlotChanged: H,
                                    isBorderActive: w,
                                    setIsExitBlocked: o,
                                };
                            (0, n.useEffect)(() => {
                                null == s || s();
                            }, [s, D.roleSkill]);
                            const X = T(['roleSkillSlot'], O);
                            return a().createElement(
                                'div',
                                { ref: y, className: W },
                                q &&
                                    a().createElement(an, {
                                        key: R.current.generation,
                                        slotOffset: z,
                                        slotWidth: G,
                                        isAnimationRunning: w,
                                    }),
                                a().createElement(
                                    Vt,
                                    { isSetupSwitching: m || p, sectionProps: V, isReady: u, setSetupSwitching: C },
                                    D.roleSkill &&
                                        a().createElement(Jt, {
                                            roleSkill: D.roleSkill,
                                            tooltipId: D.tooltipId,
                                            tooltipHeader: D.tooltipHeader,
                                            tooltipBody: D.tooltipBody,
                                            className: d()(O.roleSkillSlot, O[`roleSkillSlot__${t}`], X.roleSkillSlot),
                                        }),
                                ),
                                q &&
                                    a().createElement(
                                        'div',
                                        { className: U },
                                        a().createElement($, { slotWidth: G, slotOffset: z, onAnimationEnd: M }),
                                    ),
                            );
                        },
                    ),
                    rn = 'App_base_43',
                    on = 'App_title_0e',
                    ln = 'App_panel_2c',
                    cn = (0, c.Pi)(() => {
                        const e = (0, r.t)().controls;
                        return (
                            (0, o.gd)(l.n.ESCAPE, e.escKeyDown),
                            a().createElement(
                                'div',
                                { className: rn },
                                a().createElement('span', { className: on }, R.strings.veh_compare.vehConf.equipment()),
                                a().createElement(
                                    'div',
                                    { className: ln },
                                    a().createElement(sn, { panelType: pe.w.Compare }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    s().render(
                        a().createElement(r.k, null, a().createElement(cn, null)),
                        document.getElementById('root'),
                    );
                });
            },
            3267: (e, u, t) => {
                t.d(u, { J: () => i });
                var n = t(6179),
                    a = t.n(n);
                const i = ({ wrapper: e, children: u, when: t, withProps: n }) =>
                    t ? a().createElement(e, n, u) : a().createElement(a().Fragment, null, u);
            },
            9152: (e, u, t) => {
                t.d(u, { y: () => n });
                t(6483), t(8089), t(4598), t(3815), t(8526), t(5521), t(7727), t(6179), t(1922);
                const n = 'setup-content';
            },
            906: (e, u, t) => {
                t.d(u, { r: () => o });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                const r = {
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
                    },
                    o = a().memo(({ isTemporary: e, overlayType: u, overlaySource: t }) => {
                        const i = s()(r.base, e && r.base__fitting),
                            o = s()(r.icon, r[`icon__${u}`]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: o, style: l }),
                        );
                    });
            },
            8253: (e, u, t) => {
                t.d(u, { W: () => o });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                const r = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    o = ({
                        activeDragId: e,
                        slotType: u,
                        isSelected: t,
                        isBorderActive: n,
                        children: i,
                        panelType: o,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = s()(
                            r.base,
                            !e && r[`base__${o}`],
                            u && r[`base__${u}`],
                            t && !c && !n && r.base__selected,
                            c && r['base__dragIn' + (t ? 'Active' : '')],
                            l && r.base__disabled,
                        );
                        return a().createElement('div', { className: d, onClick: _ }, i);
                    };
            },
            8598: (e, u, t) => {
                t.d(u, { X: () => l });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                const r = 'Count_base_e4',
                    o = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const u = s()(r, !e && o);
                        return a().createElement('div', { className: u }, e);
                    };
            },
            3141: (e, u, t) => {
                t.d(u, { c: () => m });
                var n = t(6483),
                    a = t.n(n),
                    i = t(3977),
                    s = t(6179),
                    r = t.n(s),
                    o = t(906),
                    l = t(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    E = 'Inside_change_5a',
                    m = ({
                        level: e,
                        overlayType: u,
                        isTemporary: t,
                        withAttention: n,
                        imageSource: m,
                        isIncompatible: A,
                    }) => {
                        const F = (0, s.useMemo)(() => {
                                const t = u === i.qm ? `${u}_${e}_overlay` : `${u}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(t);
                            }, [u, e]),
                            b = (0, s.useMemo)(() => ({ backgroundImage: `url(${m})` }), [m]),
                            D = !F && Boolean(u) && e;
                        return r().createElement(
                            'div',
                            null,
                            D && r().createElement(l.a, { level: e }),
                            r().createElement('div', { className: a()(c, (t || n) && _), style: b }),
                            n && r().createElement('div', { className: d }),
                            A && r().createElement('div', { className: E }),
                            F && r().createElement(o.r, { isTemporary: t, overlaySource: F, overlayType: u }),
                        );
                    };
            },
            4105: (e, u, t) => {
                t.d(u, { a: () => o });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                const r = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    o = ({ level: e }) => {
                        const u = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            t = s()(r.base, r[`base__level${e}`]);
                        return a().createElement('div', { style: u, className: t });
                    };
            },
            4814: (e, u, t) => {
                t.d(u, { G: () => A });
                var n = t(9480),
                    a = t(6179),
                    i = t.n(a),
                    s = t(1922),
                    r = t(6483),
                    o = t.n(r),
                    l = t(3457),
                    c = t(7078);
                const _ = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    d = ({
                        name: e,
                        isCorrect: u,
                        isSpecializationActive: t = !0,
                        isDynamic: n,
                        mediaSize: r,
                        isClickable: d,
                        onSpecializationClick: E,
                        index: m,
                    }) => {
                        const A = r !== s.cJ.None,
                            F = (0, a.useCallback)(() => {
                                d && t && E && E(m);
                            }, [m, d, t, E]),
                            b = (0, a.useMemo)(() => {
                                let t = '';
                                A && (t = (r === s.cJ.Large || r === s.cJ.Huge ? s.cJ.Large : s.cJ.Medium) + '_');
                                const n = `${t}${e}_${u ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, u, r, A]),
                            D = (0, a.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!b) return null;
                        const g = o()(
                                `specialization-${e}`,
                                _.base,
                                A && _[`base__${r}`],
                                t && _.base__setup,
                                u && _.base__correct,
                            ),
                            p = o()(_.icon, A && _[`icon__${r}`]),
                            C = A ? '' : _.specializationWrapper,
                            B = i().createElement(
                                'div',
                                { key: e, className: g },
                                i().createElement('div', { className: _.glow }),
                                i().createElement('div', { className: p, style: b }),
                            );
                        return i().createElement(
                            c.t,
                            { args: D },
                            d && t
                                ? i().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: F,
                                      },
                                      B,
                                  )
                                : i().createElement('div', { className: C }, B),
                        );
                    },
                    E = 'Specializations_base_ab';
                function m() {
                    return (
                        (m = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        m.apply(null, arguments)
                    );
                }
                const A = ({
                    specializations: e,
                    isSpecializationActive: u = !0,
                    isDynamic: t,
                    mediaSize: a = s.cJ.None,
                    activeSpecsMask: r,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? i().createElement(
                              'div',
                              { className: E, key: r },
                              n.UI(e, (e, n) =>
                                  i().createElement(
                                      d,
                                      m({ index: n, key: e.name }, e, {
                                          isSpecializationActive: u,
                                          isDynamic: t,
                                          mediaSize: a,
                                          onSpecializationClick: o,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            9605: (e, u, t) => {
                t.d(u, { U: () => D });
                var n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    s = t.n(i);
                let r;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(r || (r = {}));
                const o = 'SwitchButton_base_23',
                    l = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    E = 'SwitchButton_base__hovered_b4',
                    m = 'SwitchButton_buttonGlow_4c',
                    A = 'SwitchButton_buttonIcon_d3',
                    F = 'SwitchButton_buttonWarning_3f',
                    b = 'SwitchButton_number_8a',
                    D = ({ id: e, state: u, currentIndex: t, isHovered: i }) => {
                        const D = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            g = e === t,
                            p = !g && u === r.WARNING;
                        return a().createElement(
                            'div',
                            { className: s()(o, { [l]: g, [c]: p, [E]: i }) },
                            a().createElement('div', { className: _ }),
                            a().createElement('div', { className: d }),
                            a().createElement('div', { className: A }),
                            a().createElement('div', { className: m }),
                            a().createElement('div', { className: F }),
                            a().createElement('div', { style: D, className: b }),
                        );
                    };
            },
            9344: (e, u, t) => {
                t.d(u, { _: () => E });
                var n = t(6483),
                    a = t.n(n),
                    i = t(9480),
                    s = t(7727),
                    r = t(6179),
                    o = t.n(r),
                    l = t(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    E = ({ onClick: e, totalCount: u, currentIndex: t, states: n, isDisabled: E, groupId: m }) => {
                        const A = (0, r.useRef)(null),
                            F = (0, r.useState)(!1),
                            b = F[0],
                            D = F[1],
                            g = (t + 1) % u,
                            p = (0, r.useCallback)(() => {
                                E || e({ groupId: m, currentIndex: g });
                            }, [m, E, g, e]),
                            C = (0, r.useCallback)(() => {
                                E || (D(!0), s.$.playHighlight());
                            }, [E]),
                            B = (0, r.useCallback)(() => {
                                E || D(!1);
                            }, [E]),
                            h = a()(c, E && _);
                        return o().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${m}`,
                                className: h,
                                onClick: p,
                                onMouseEnter: C,
                                onMouseLeave: B,
                                ref: A,
                            },
                            Array.from({ length: u }, (e, u) =>
                                o().createElement(l.U, {
                                    key: u,
                                    id: u,
                                    state: i.MH(n, u),
                                    currentIndex: t,
                                    isHovered: b,
                                }),
                            ),
                            E && o().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, u, t) => {
                t.d(u, { y: () => x });
                var n = t(4888),
                    a = t(7383),
                    i = t(1396),
                    s = t(3403),
                    r = t(6179),
                    o = t.n(r),
                    l = t(2558),
                    c = t(8934),
                    _ = t(3220),
                    d = t(5958);
                const E = 'BackEffects_shine_f6',
                    m = 'BackEffects_sparks_55',
                    A = 'BackEffects_nut_79',
                    F = 'BackEffects_wrench_5a',
                    b = { enterActive: 'BackEffects_shine__enterActive_54' },
                    D = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    g = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    p = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    C = [n.dZ, n.sH],
                    B = o().memo(({ in: e, actionType: u }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.Dp, classNames: b },
                                o().createElement('div', { className: E }),
                            ),
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.IG, classNames: D },
                                o().createElement('div', { className: m }),
                            ),
                            C.includes(u) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: g },
                                        o().createElement('div', { className: A }),
                                    ),
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: p },
                                        o().createElement('div', { className: F }),
                                    ),
                                ),
                        ),
                    ),
                    h = 'ColorMask_base_60',
                    f = 'ColorMask_base__enterActive_62',
                    v = ({ inProp: e, maskImage: u }) =>
                        o().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: f } },
                            o().createElement('div', { className: h, style: { maskImage: `url(${u})` } }),
                        ),
                    S = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    w = { enter: S.base__enter, exit: S.base__enter },
                    x = (0, s.Pi)(
                        ({
                            children: e,
                            slotIndex: u,
                            uniqueKey: t,
                            slotType: s,
                            isEmpty: E = !1,
                            imageSource: m,
                            itemInstalledSetupIndex: A,
                        }) => {
                            const F = (0, _.t)().model.lastSlotAction.get(),
                                b = F.leftID,
                                D = F.rightID,
                                g = F.leftIntCD,
                                p = F.rightIntCD,
                                C = F.actionType,
                                h = F.intCD,
                                f = (0, r.useState)(!0),
                                x = f[0],
                                y = f[1],
                                I = (0, r.useState)(!0),
                                T = I[0],
                                k = I[1],
                                O = (0, r.useState)(m),
                                R = O[0],
                                L = O[1],
                                N = (0, r.useState)(t),
                                M = N[0],
                                P = N[1],
                                $ = (0, r.useState)(A),
                                H = $[0],
                                j = $[1],
                                G = (0, i.K)(),
                                z = (0, i.K)(),
                                W = [n._2, n.dZ, n.sH],
                                U = (h === t || h === M) && H !== A && W.includes(C),
                                q = -1 === g || -1 === p,
                                V = s ? `base${s[0].toUpperCase() + s.slice(1)}` : 'base',
                                X = d.Sr[C] || 0;
                            (0, r.useEffect)(() => {
                                E || L(m);
                            }, [E, m]);
                            const Z = (0, r.useCallback)(
                                    (e) => {
                                        const t = Object.assign({}, w);
                                        switch (C) {
                                            case n.Xo: {
                                                const e = b === u ? d.mI.RIGHT : d.mI.LEFT,
                                                    n = D - b != 1 ? d.mI.SWAP : '';
                                                (t.enterDone = S[`${V}__enter${e}${n}`]),
                                                    (t.exit = S[`${V}__exit${e}${n}`]),
                                                    q &&
                                                        (E
                                                            ? (t.enterDone = S[`${V}__enter${d.mI.FADE}`])
                                                            : (t.exit = S[`${V}__exit${d.mI.FADE}`]));
                                                break;
                                            }
                                            case n._2:
                                                (t.enterDone = S[`${V}__enter${d.mI.DESTROY}`]),
                                                    (t.exit = S[`${V}__exit${d.mI.DESTROY}`]),
                                                    G.run(() => y(!0), d.YJ),
                                                    k(!0);
                                                break;
                                            case n.sH:
                                            case n.dZ:
                                                (t.enter = S[`${V}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                    (t.exit = S[`${V}__exit${d.mI.DEMOUNT}`]),
                                                    G.run(() => y(!0), d.Ij);
                                                break;
                                            case n.eC:
                                            case n.FR:
                                                if (s !== a.g9) {
                                                    const e = C === n.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                    (t.enter = S[`${V}__enter${e}`]),
                                                        (t.exit = S[`${V}__exit${e}`]),
                                                        (t.exitActive = S[`${V}__exitActive${d.mI.FITTING}`]);
                                                } else
                                                    (t.enterDone = S[`${V}__enter${d.mI.FADE}`]),
                                                        (t.exit = S[`${V}__exit${d.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return o().cloneElement(e, { classNames: t, timeout: X });
                                    },
                                    [C, X, b, u, D, V, q, E, G, s],
                                ),
                                K = (0, r.useCallback)(
                                    (e) => {
                                        z.run(() => {
                                            (e.className = ''), e.classList.add(S.base), P(t), j(A);
                                        }, X);
                                    },
                                    [z, X, t, A],
                                ),
                                Y = (0, r.useCallback)(() => {
                                    y(!1), k(!1);
                                }, []);
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    l.Z,
                                    { component: null, childFactory: Z },
                                    o().createElement(
                                        c.Z,
                                        {
                                            key: t,
                                            timeout: X,
                                            classNames: w,
                                            onEntered: K,
                                            onExiting: Y,
                                            unmountOnExit: !0,
                                        },
                                        o().createElement('div', { className: S.base }, e),
                                    ),
                                ),
                                U &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(B, { in: x, actionType: C }),
                                        o().createElement(v, { inProp: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, u, t) => {
                t.d(u, {
                    Dp: () => r,
                    IG: () => o,
                    Ij: () => i,
                    Kz: () => c,
                    Qj: () => _,
                    Sr: () => E,
                    YJ: () => s,
                    mI: () => d,
                    wx: () => l,
                });
                var n = t(4888);
                const a = 1600,
                    i = 900,
                    s = 900,
                    r = 200,
                    o = 400,
                    l = 600,
                    c = 600,
                    _ = 1200;
                let d;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(d || (d = {}));
                const E = { [n.Xo]: 200, [n.FR]: 250, [n.eC]: 250, [n._2]: 1400, [n.dZ]: a, [n.sH]: a, [n.Fd]: a };
            },
            3977: (e, u, t) => {
                t.d(u, { qm: () => n });
                const n = 'equipmentModernized';
            },
            4888: (e, u, t) => {
                t.d(u, { FR: () => a, Fd: () => r, Xo: () => i, _2: () => l, dZ: () => s, eC: () => n, sH: () => o });
                const n = 'select',
                    a = 'undo',
                    i = 'swap',
                    s = 'demount',
                    r = 'demount_from_setup',
                    o = 'demount_from_setups',
                    l = 'destroy';
            },
            7383: (e, u, t) => {
                t.d(u, { WI: () => s, YN: () => i, g9: () => a, yZ: () => r, zn: () => n });
                const n = 'optDevices',
                    a = 'shells',
                    i = 'battleAbilities',
                    s = 'toggleShells',
                    r = 'toggleCamouflage';
            },
            6880: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            7476: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
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
                };
            },
            1960: () => {},
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], i = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var r = t();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 736),
        (() => {
            var e = { 736: 0, 927: 0, 490: 0, 754: 0, 803: 0, 761: 0, 833: 0, 795: 0, 723: 0, 287: 0, 975: 0, 197: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [i, s, r] = t,
                        o = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (u && u(t); o < i.length; o++)
                        (a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(7386));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
