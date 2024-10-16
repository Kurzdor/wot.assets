var e = Object.defineProperty,
    t = (t, n, r) =>
        ((t, n, r) => (n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[n] = r)))(
            t,
            'symbol' != typeof n ? n + '' : n,
            r,
        );
function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var r = { exports: {} },
    a = {},
    l = { exports: {} },
    o = {},
    i = Symbol.for('react.element'),
    u = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    d = Symbol.for('react.provider'),
    p = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    y = Symbol.iterator;
var b = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    w = Object.assign,
    k = {};
function S(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = k), (this.updater = n || b);
}
function x() {}
function E(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = k), (this.updater = n || b);
}
(S.prototype.isReactComponent = {}),
    (S.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            );
        this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (S.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (x.prototype = S.prototype);
var _ = (E.prototype = new x());
(_.constructor = E), w(_, S.prototype), (_.isPureReactComponent = !0);
var C = Array.isArray,
    P = Object.prototype.hasOwnProperty,
    N = { current: null },
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
function T(e, t, n) {
    var r,
        a = {},
        l = null,
        o = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (l = '' + t.key), t))
            P.call(t, r) && !z.hasOwnProperty(r) && (a[r] = t[r]);
    var u = arguments.length - 2;
    if (1 === u) a.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        a.children = s;
    }
    if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
    return { $$typeof: i, type: e, key: l, ref: o, props: a, _owner: N.current };
}
function O(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === i;
}
var R = /\/+/g;
function L(e, t) {
    return 'object' == typeof e && null !== e && null != e.key
        ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                      return t[e];
                  })
              );
          })('' + e.key)
        : t.toString(36);
}
function F(e, t, n, r, a) {
    var l = typeof e;
    ('undefined' !== l && 'boolean' !== l) || (e = null);
    var o = !1;
    if (null === e) o = !0;
    else
        switch (l) {
            case 'string':
            case 'number':
                o = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case i:
                    case u:
                        o = !0;
                }
        }
    if (o)
        return (
            (a = a((o = e))),
            (e = '' === r ? '.' + L(o, 0) : r),
            C(a)
                ? ((n = ''),
                  null != e && (n = e.replace(R, '$&/') + '/'),
                  F(a, t, n, '', function (e) {
                      return e;
                  }))
                : null != a &&
                  (O(a) &&
                      (a = (function (e, t) {
                          return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(a, n + (!a.key || (o && o.key === a.key) ? '' : ('' + a.key).replace(R, '$&/') + '/') + e)),
                  t.push(a)),
            1
        );
    if (((o = 0), (r = '' === r ? '.' : r + ':'), C(e)))
        for (var s = 0; s < e.length; s++) {
            var c = r + L((l = e[s]), s);
            o += F(l, t, n, c, a);
        }
    else if (
        ((c = (function (e) {
            return null === e || 'object' != typeof e
                ? null
                : 'function' == typeof (e = (y && e[y]) || e['@@iterator'])
                  ? e
                  : null;
        })(e)),
        'function' == typeof c)
    )
        for (e = c.call(e), s = 0; !(l = e.next()).done; ) o += F((l = l.value), t, n, (c = r + L(l, s++)), a);
    else if ('object' === l)
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                    '). If you meant to render a collection of children, use an array instead.',
            ))
        );
    return o;
}
function M(e, t, n) {
    if (null == e) return e;
    var r = [],
        a = 0;
    return (
        F(e, r, '', '', function (e) {
            return t.call(n, e, a++);
        }),
        r
    );
}
function I(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
            function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
            },
            function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
            },
        ),
            -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var A = { current: null },
    D = { transition: null },
    j = { ReactCurrentDispatcher: A, ReactCurrentBatchConfig: D, ReactCurrentOwner: N };
function U() {
    throw Error('act(...) is not supported in production builds of React.');
}
(o.Children = {
    map: M,
    forEach: function (e, t, n) {
        M(
            e,
            function () {
                t.apply(this, arguments);
            },
            n,
        );
    },
    count: function (e) {
        var t = 0;
        return (
            M(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            M(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!O(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
}),
    (o.Component = S),
    (o.Fragment = s),
    (o.Profiler = f),
    (o.PureComponent = E),
    (o.StrictMode = c),
    (o.Suspense = m),
    (o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
    (o.act = U),
    (o.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = w({}, e.props),
            a = e.key,
            l = e.ref,
            o = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((l = t.ref), (o = N.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var u = e.type.defaultProps;
            for (s in t) P.call(t, s) && !z.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
            r.children = u;
        }
        return { $$typeof: i, type: e.type, key: a, ref: l, props: r, _owner: o };
    }),
    (o.createContext = function (e) {
        return (
            ((e = {
                $$typeof: p,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
            }).Provider = { $$typeof: d, _context: e }),
            (e.Consumer = e)
        );
    }),
    (o.createElement = T),
    (o.createFactory = function (e) {
        var t = T.bind(null, e);
        return (t.type = e), t;
    }),
    (o.createRef = function () {
        return { current: null };
    }),
    (o.forwardRef = function (e) {
        return { $$typeof: h, render: e };
    }),
    (o.isValidElement = O),
    (o.lazy = function (e) {
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: I };
    }),
    (o.memo = function (e, t) {
        return { $$typeof: g, type: e, compare: void 0 === t ? null : t };
    }),
    (o.startTransition = function (e) {
        var t = D.transition;
        D.transition = {};
        try {
            e();
        } finally {
            D.transition = t;
        }
    }),
    (o.unstable_act = U),
    (o.useCallback = function (e, t) {
        return A.current.useCallback(e, t);
    }),
    (o.useContext = function (e) {
        return A.current.useContext(e);
    }),
    (o.useDebugValue = function () {}),
    (o.useDeferredValue = function (e) {
        return A.current.useDeferredValue(e);
    }),
    (o.useEffect = function (e, t) {
        return A.current.useEffect(e, t);
    }),
    (o.useId = function () {
        return A.current.useId();
    }),
    (o.useImperativeHandle = function (e, t, n) {
        return A.current.useImperativeHandle(e, t, n);
    }),
    (o.useInsertionEffect = function (e, t) {
        return A.current.useInsertionEffect(e, t);
    }),
    (o.useLayoutEffect = function (e, t) {
        return A.current.useLayoutEffect(e, t);
    }),
    (o.useMemo = function (e, t) {
        return A.current.useMemo(e, t);
    }),
    (o.useReducer = function (e, t, n) {
        return A.current.useReducer(e, t, n);
    }),
    (o.useRef = function (e) {
        return A.current.useRef(e);
    }),
    (o.useState = function (e) {
        return A.current.useState(e);
    }),
    (o.useSyncExternalStore = function (e, t, n) {
        return A.current.useSyncExternalStore(e, t, n);
    }),
    (o.useTransition = function () {
        return A.current.useTransition();
    }),
    (o.version = '18.3.1'),
    (l.exports = o);
var $ = l.exports;
const V = n($);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B = $,
    H = Symbol.for('react.element'),
    W = Symbol.for('react.fragment'),
    Q = Object.prototype.hasOwnProperty,
    q = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    K = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y(e, t, n) {
    var r,
        a = {},
        l = null,
        o = null;
    for (r in (void 0 !== n && (l = '' + n), void 0 !== t.key && (l = '' + t.key), void 0 !== t.ref && (o = t.ref), t))
        Q.call(t, r) && !K.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return { $$typeof: H, type: e, key: l, ref: o, props: a, _owner: q.current };
}
(a.Fragment = W), (a.jsx = Y), (a.jsxs = Y), (r.exports = a);
var X = r.exports,
    G = function (e, t) {
        return (G =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };
function Z(e, t) {
    if ('function' != typeof t && null !== t)
        throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    G(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var J = function () {
    return (
        (J =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
            }),
        J.apply(this, arguments)
    );
};
function ee(e, t) {
    var n,
        r,
        a,
        l,
        o = {
            label: 0,
            sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (l = { next: i(0), throw: i(1), return: i(2) }),
        'function' == typeof Symbol &&
            (l[Symbol.iterator] = function () {
                return this;
            }),
        l
    );
    function i(i) {
        return function (u) {
            return (function (i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; l && ((l = 0), i[0] && (o = 0)), o; )
                    try {
                        if (
                            ((n = 1),
                            r &&
                                (a =
                                    2 & i[0]
                                        ? r.return
                                        : i[0]
                                          ? r.throw || ((a = r.return) && a.call(r), 0)
                                          : r.next) &&
                                !(a = a.call(r, i[1])).done)
                        )
                            return a;
                        switch (((r = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, { value: i[1], done: !1 };
                            case 5:
                                o.label++, (r = i[1]), (i = [0]);
                                continue;
                            case 7:
                                (i = o.ops.pop()), o.trys.pop();
                                continue;
                            default:
                                if (
                                    !((a = o.trys), (a = a.length > 0 && a[a.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                                ) {
                                    o = 0;
                                    continue;
                                }
                                if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                    o.label = i[1];
                                    break;
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    (o.label = a[1]), (a = i);
                                    break;
                                }
                                if (a && o.label < a[2]) {
                                    (o.label = a[2]), o.ops.push(i);
                                    break;
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue;
                        }
                        i = t.call(e, o);
                    } catch (u) {
                        (i = [6, u]), (r = 0);
                    } finally {
                        n = a = 0;
                    }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, u]);
        };
    }
}
function te(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, a = 0, l = t.length; a < l; a++)
            (!r && a in t) || (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
    return e.concat(r || Array.prototype.slice.call(t));
}
'function' == typeof SuppressedError && SuppressedError;
var ne = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return Z(t, e), t;
    })(
        (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return (
                    Object.defineProperty(n, 'message', { enumerable: !1, value: t }),
                    Object.defineProperty(n, 'name', { enumerable: !1, value: n.constructor.name }),
                    'captureStackTrace' in Error
                        ? Error.captureStackTrace(n, n.constructor)
                        : Object.defineProperty(n, 'stack', {
                              enumerable: !1,
                              value: Error(t).stack,
                              writable: !0,
                              configurable: !0,
                          }),
                    n
                );
            }
            return Z(t, e), t;
        })(Error),
    ),
    re = (function (e) {
        function t(t, n, r, a) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(a, '.')) ||
                this
            );
        }
        return (
            Z(t, e),
            (t.assert = function (e, n, r, a, l) {
                if (!e) throw new t(n, r, a, l);
                return e;
            }),
            t
        );
    })(ne),
    ae = (function (e) {
        function t(t, n, r) {
            var a = t.toString(),
                l = n.map(function (e) {
                    return e.name.toString();
                });
            l.push(a);
            var o = l.join(' -> '),
                i = "Could not resolve '".concat(a, "'.");
            return (
                r && (i += ' '.concat(r)), (i += '\n\n'), (i += 'Resolution path: '.concat(o)), e.call(this, i) || this
            );
        }
        return Z(t, e), t;
    })(ne),
    le = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                a = "Could not register '".concat(r, "'.");
            return n && (a += ' '.concat(n)), e.call(this, a) || this;
        }
        return Z(t, e), t;
    })(ne),
    oe = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    ie = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function ue(e) {
    var t = e.length,
        n = 0,
        r = 'EOF',
        a = '',
        l = 0,
        o = 0,
        i = 0;
    return {
        next: function (e) {
            void 0 === e && (e = 0);
            return (l = e), u(), d();
        },
        done: function () {
            return 'EOF' === r;
        },
    };
    function u() {
        for (a = '', r = 'EOF'; ; ) {
            if (n >= t) return (r = 'EOF');
            var u = e.charAt(n);
            if (se(u)) n++;
            else
                switch (u) {
                    case '(':
                        return n++, o++, (r = u);
                    case ')':
                        return n++, i++, (r = u);
                    case '*':
                    case ',':
                        return n++, (r = u);
                    case '=':
                        return (
                            n++,
                            0 == (1 & l) &&
                                c(function (e) {
                                    var t = o === i + 1;
                                    return !(',' !== e || !t) || ('(' === e ? (o++, !1) : !(')' !== e || (i++, !t)));
                                }),
                            (r = u)
                        );
                    case '/':
                        n++;
                        var f = e.charAt(n);
                        '/' === f &&
                            (c(function (e) {
                                return '\n' === e;
                            }, !0),
                            n++),
                            '*' === f &&
                                (c(function (t) {
                                    var r = e.charAt(n + 1);
                                    return '*' === t && '/' === r;
                                }, !0),
                                n++);
                        continue;
                    default:
                        if (pe(u)) return s(), r;
                        n++;
                }
        }
    }
    function s() {
        for (var t, l = e.charAt(n), o = ++n; (t = e.charAt(n)), de.test(t); ) n++;
        return (
            (a = '' + l + e.substring(o, n)),
            'ident' !== (r = 'function' === a || 'class' === a ? a : 'ident') && (a = ''),
            a
        );
    }
    function c(t, r) {
        for (void 0 === r && (r = !1); n < e.length; ) {
            var a = e.charAt(n);
            if (t(a)) return;
            if (!r) {
                if (se(a)) {
                    n++;
                    continue;
                }
                if (ce(a)) {
                    f();
                    continue;
                }
            }
            n++;
        }
    }
    function f() {
        var t = e.charAt(n);
        for (n++; n < e.length; ) {
            var r = e.charAt(n),
                a = e.charAt(n - 1);
            if (r === t && '\\' !== a) return void n++;
            if ('`' === t)
                if ('$' === e.charAt(n + 1))
                    '{' === e.charAt(n + 2) &&
                        ((n += 2),
                        c(function (e) {
                            return '}' === e;
                        }));
            n++;
        }
    }
    function d() {
        return a ? { value: a, type: r } : { type: r };
    }
}
function se(e) {
    switch (e) {
        case '\r':
        case '\n':
        case ' ':
            return !0;
    }
    return !1;
}
function ce(e) {
    switch (e) {
        case "'":
        case '"':
        case '`':
            return !0;
    }
    return !1;
}
var fe = /^[_$a-zA-Z\xA0-\uFFFF]$/,
    de = /^[._$a-zA-Z0-9\xA0-\uFFFF]$/;
function pe(e) {
    return fe.test(e);
}
function he(e) {
    if ('function' != typeof e) return !1;
    var t = ue(e.toString()),
        n = t.next();
    if ('class' === n.type) return !0;
    var r = t.next();
    return !('function' !== n.type || !r.value || r.value[0] !== r.value[0].toUpperCase());
}
function me(e) {
    return 'function' == typeof e;
}
var ge = Symbol('Awilix Resolver Config');
function ve(e, t) {
    if (!me(e)) throw new re('asFunction', 'fn', 'function', e);
    t = Se({ lifetime: ie.TRANSIENT }, t, e[ge]);
    var n = _e(e);
    return we(be(J({ resolve: n }, t)));
}
function ye(e, t) {
    if (!me(e)) throw new re('asClass', 'Type', 'class', e);
    t = Se({ lifetime: ie.TRANSIENT }, t, e[ge]);
    var n = _e(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return we(be(J(J({}, t), { resolve: n })));
}
function be(e) {
    function t(e) {
        return be(J(J({}, this), { lifetime: e }));
    }
    function n(e) {
        return be(J(J({}, this), { injectionMode: e }));
    }
    return xe(e, {
        setLifetime: t,
        inject: function (e) {
            return be(J(J({}, this), { injector: e }));
        },
        transient: ke(t, ie.TRANSIENT),
        scoped: ke(t, ie.SCOPED),
        singleton: ke(t, ie.SINGLETON),
        setInjectionMode: n,
        proxy: ke(n, oe.PROXY),
        classic: ke(n, oe.CLASSIC),
    });
}
function we(e) {
    return xe(e, {
        disposer: function (e) {
            return we(J(J({}, this), { dispose: e }));
        },
    });
}
function ke(e, t) {
    return function () {
        return e.call(this, t);
    };
}
function Se(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return Object.assign.apply(Object, te([{}, e], t, !1));
}
function xe(e, t) {
    return J(J({}, e), t);
}
function Ee(e, t) {
    var n,
        r = t(e),
        a = ((n = te(te([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, a, l, o, i, u, s;
                          return ee(this, function (c) {
                              switch (c.label) {
                                  case 0:
                                      for (a in ((t = e.cradle), (n = []), t)) n.push(a);
                                      (l = 0), (c.label = 1);
                                  case 1:
                                      return l < n.length ? ((a = n[l]) in t ? [4, a] : [3, 3]) : [3, 4];
                                  case 2:
                                      c.sent(), (c.label = 3);
                                  case 3:
                                      return l++, [3, 1];
                                  case 4:
                                      for (u in ((i = []), (o = r))) i.push(u);
                                      (s = 0), (c.label = 5);
                                  case 5:
                                      return s < i.length ? ((u = i[s]) in o ? [4, u] : [3, 7]) : [3, 8];
                                  case 6:
                                      c.sent(), (c.label = 7);
                                  case 7:
                                      return s++, [3, 5];
                                  case 8:
                                      return [2];
                              }
                          });
                      }
                    : n in r
                      ? r[n]
                      : e.resolve(n);
            },
            ownKeys: function () {
                return a;
            },
            getOwnPropertyDescriptor: function (e, t) {
                if (a.indexOf(t) > -1) return { enumerable: !0, configurable: !0 };
            },
        },
    );
}
function _e(e, t) {
    t || (t = e);
    var n = Ce(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || oe.PROXY) !== oe.CLASSIC) {
            var r = this.injector ? Ee(t, this.injector) : t.cradle;
            return e(r);
        }
        if (n.length > 0) {
            var a = this.injector
                    ? (function (e, t) {
                          return function (n, r) {
                              return n in t ? t[n] : e.resolve(n, r);
                          };
                      })(t, this.injector(t))
                    : t.resolve,
                l = n.map(function (e) {
                    return a(e.name, { allowUnregistered: e.optional });
                });
            return e.apply(void 0, l);
        }
        return e();
    };
}
function Ce(e) {
    var t = (function (e) {
        var t = ue(e),
            n = t.next,
            r = t.done,
            a = [],
            l = null;
        for (f(); !r(); )
            switch (l.type) {
                case 'class':
                    if ((s(), !c())) return null;
                    f();
                    break;
                case 'function':
                    ('ident' !== (o = f()).type && '*' !== o.type) || f();
                    break;
                case '(':
                    u();
                    break;
                case ')':
                    return a;
                case 'ident':
                    var o,
                        i = { name: l.value, optional: !1 };
                    if ('async' === l.value && (o = f()) && '=' !== o.type) break;
                    return a.push(i), a;
                default:
                    throw d();
            }
        return a;
        function u() {
            for (var e = { name: '', optional: !1 }; !r(); )
                switch ((f(), l.type)) {
                    case 'ident':
                        e.name = l.value;
                        break;
                    case '=':
                        e.optional = !0;
                        break;
                    case ',':
                        a.push(e), (e = { name: '', optional: !1 });
                        break;
                    case ')':
                        return void (e.name && a.push(e));
                    default:
                        throw d();
                }
        }
        function s() {
            for (; !c() && !r(); ) f(1);
        }
        function c() {
            return 'ident' === l.type && 'constructor' === l.value;
        }
        function f(e) {
            return void 0 === e && (e = 0), (l = n(e));
        }
        function d() {
            return new SyntaxError(
                'Parsing parameter list, did not expect '
                    .concat(l.type, ' token')
                    .concat(l.value ? ' ('.concat(l.value, ')') : ''),
            );
        }
    })(e.toString());
    if (!t) {
        var n = Object.getPrototypeOf(e);
        return 'function' == typeof n && n !== Function.prototype ? Ce(n) : [];
    }
    return t;
}
var Pe = Symbol('familyTree'),
    Ne = Symbol('rollUpRegistrations'),
    ze = 'AwilixContainerCradle';
function Te(e) {
    return void 0 === e && (e = {}), Oe(e);
}
function Oe(e, t, n) {
    var r;
    e = J({ injectionMode: oe.PROXY, strict: !1 }, e);
    var a = null != n ? n : [],
        l = {},
        o = new Proxy(
            {},
            {
                get: function (e, t) {
                    return m(t);
                },
                set: function (e, t) {
                    throw new Error(
                        'Attempted setting property "'.concat(t, '" on container cradle - this is not allowed.'),
                    );
                },
                ownKeys: function () {
                    return Array.from(o);
                },
                getOwnPropertyDescriptor: function (e, t) {
                    var n = f();
                    if (Object.getOwnPropertyDescriptor(n, t)) return { enumerable: !0, configurable: !0 };
                },
            },
        ),
        i =
            (((r = {
                options: e,
                cradle: o,
                inspect: function () {
                    return '[AwilixContainer ('
                        .concat(t ? 'scoped, ' : '', 'registrations: ')
                        .concat(Object.keys(i.registrations).length, ')]');
                },
                cache: new Map(),
                loadModules: function () {
                    throw new Error('loadModules is not supported in the browser.');
                },
                createScope: function () {
                    return Oe(e, i, a);
                },
                register: function (n, r) {
                    for (
                        var a = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            o = te(te([], Object.keys(a), !0), Object.getOwnPropertySymbols(a), !0),
                            u = 0,
                            s = o;
                        u < s.length;
                        u++
                    ) {
                        var c = s[u],
                            f = a[c];
                        if (e.strict && f.lifetime === ie.SINGLETON && t)
                            throw new le(c, 'Cannot register a singleton on a scoped container.');
                        l[c] = f;
                    }
                    return i;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(i);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        re.assert(e, n, r, 'a registration, function or class', e),
                        re.assert('function' == typeof e, n, r, 'a function or class', e),
                        (he(e) ? ye(e, t) : ve(e, t)).resolve(i)
                    );
                },
                resolve: m,
                hasRegistration: function (e) {
                    return !!h(e);
                },
                dispose: function () {
                    var e = Array.from(i.cache.entries());
                    return (
                        i.cache.clear(),
                        Promise.all(
                            e.map(function (e) {
                                var t = e[1],
                                    n = t.resolver,
                                    r = t.value,
                                    a = n;
                                return a.dispose
                                    ? Promise.resolve().then(function () {
                                          return a.dispose(r);
                                      })
                                    : Promise.resolve();
                            }),
                        ).then(function () {})
                    );
                },
                getRegistration: h,
            })[Ne] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [i].concat(t[Pe]) : [i];
    i[Pe] = u;
    var s,
        c = (s = u)[s.length - 1];
    return i;
    function f() {
        return J(J({}, t && t[Ne]()), l);
    }
    function d() {
        var e, t, n, r, a;
        return ee(this, function (l) {
            switch (l.label) {
                case 0:
                    for (r in ((e = f()), (n = []), (t = e))) n.push(r);
                    (a = 0), (l.label = 1);
                case 1:
                    return a < n.length ? ((r = n[a]) in t ? [4, r] : [3, 3]) : [3, 4];
                case 2:
                    l.sent(), (l.label = 3);
                case 3:
                    return a++, [3, 1];
                case 4:
                    return [2];
            }
        });
    }
    function p() {
        return Object.prototype.toString.call(o);
    }
    function h(e) {
        var n = l[e];
        return n || (t ? t.getRegistration(e) : null);
    }
    function m(t, n) {
        n = n || {};
        try {
            var r = h(t);
            if (
                a.some(function (e) {
                    return e.name === t;
                })
            )
                throw new ae(t, a, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return p;
            if ('constructor' === t) return Te;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return p;
                    case Symbol.toStringTag:
                        return ze;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return d;
                }
                if (n.allowUnregistered) return;
                throw new ae(t, a);
            }
            var l = r.lifetime || ie.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var o = a.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = l),
                        ((t = r) === ie.SINGLETON && n !== ie.SINGLETON) || (t === ie.SCOPED && n === ie.TRANSIENT)
                    );
                });
                if (o > -1)
                    throw new ae(
                        t,
                        a,
                        "Dependency '"
                            .concat(t.toString(), "' has a shorter lifetime than its ancestor: '")
                            .concat(a[o].name.toString(), "'"),
                    );
            }
            a.push({ name: t, lifetime: l });
            var u = void 0,
                s = void 0;
            switch (l) {
                case ie.TRANSIENT:
                    s = r.resolve(i);
                    break;
                case ie.SINGLETON:
                    (u = c.cache.get(t))
                        ? (s = u.value)
                        : ((s = r.resolve(e.strict ? c : i)), c.cache.set(t, { resolver: r, value: s }));
                    break;
                case ie.SCOPED:
                    if (void 0 !== (u = i.cache.get(t))) {
                        s = u.value;
                        break;
                    }
                    (s = r.resolve(i)), i.cache.set(t, { resolver: r, value: s });
                    break;
                default:
                    throw new ae(t, a, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return a.pop(), s;
        } catch (f) {
            throw ((a.length = 0), f);
        }
    }
}
const Re = Te();
function Le(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function Fe(e, t) {
    switch (t) {
        case 'error':
            console.error(e);
            break;
        case 'warn':
            console.warn(e);
            break;
        case 'info':
            console.info(e);
            break;
        case 'debug':
            console.debug(e);
            break;
        default:
            console.warn('Unknown severity log type:', t);
    }
}
class Me {
    constructor(e, t) {
        (this.root = e), (this.prefix = t);
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = Le(this.prefix, e),
            a = (function (e, t) {
                const n = t.split('.');
                if (window.R && window.R.images) {
                    const t = n[n.length - 1];
                    if (!t) return;
                    const r = n.slice(0, -1).reduce((e, t) => {
                        if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                    }, e);
                    if (!r) return;
                    return 'function' == typeof r[t] ? r[t]() : void 0;
                }
                throw new Error('R class with images field is not defined');
            })(this.root, r);
        return void 0 === a ? ('silent' !== n && Fe(`Resource not found: ${r}`, n), t()) : a;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = this.read(e);
        if (void 0 === t) throw new Error(`Resource not found: ${this.prefix} ${e}`);
        return t;
    }
    has(e) {
        return void 0 !== this.read(e);
    }
}
class Ie {
    play(e) {
        const t = window.R.sounds[e];
        'function' == typeof t ? t.apply(window.R.sounds) : Fe(`Sound not found: ${e}`, 'warn');
    }
}
function Ae(e) {
    const t = e.split('.');
    if (window.R && window.R.strings) {
        const e = t[t.length - 1];
        if (!e) return;
        const n = window.R.strings,
            r = t.slice(0, -1).reduce((e, t) => {
                if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
            }, n);
        if (!r) return;
        return 'function' == typeof r[e] ? r[e]() : void 0;
    }
    throw new Error('R class with strings field is not defined');
}
class De {
    constructor(e) {
        this.prefix = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = Le(this.prefix, e),
            a = Ae(r);
        return void 0 === a ? ('silent' !== n && Fe(`Resource not found: ${r}`, n), t()) : a;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = Le(this.prefix, e),
            n = Ae(t);
        if (void 0 === n) throw new Error(`Resource not found: ${t}`);
        return n;
    }
}
class je {
    constructor(e = window.R.videos) {
        this.root = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, n = 'silent') {
        const r = (function (e, t) {
            const n = t.split('.');
            if (window.R && window.R.videos) {
                const t = n[n.length - 1];
                if (!t) return;
                const r = n.slice(0, -1).reduce((e, t) => {
                    if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                }, e);
                if (!r) return;
                return 'function' == typeof r[t] ? r[t]() : void 0;
            }
            throw new Error('R class with videos field is not defined');
        })(this.root, e);
        return void 0 === r ? ('silent' !== n && Fe(`Resource not found: ${e}`, n), t()) : r;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = this.read(e);
        if (void 0 === t) throw new Error(`Resource not found: ${e}`);
        return t;
    }
    has(e) {
        return void 0 !== this.read(e);
    }
}
class Ue {
    read(e) {
        return e(window.R.views);
    }
}
var $e = {},
    Ve = { exports: {} },
    Be = {},
    He = { exports: {} },
    We = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!(function (e) {
    function t(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
                l = e[r];
            if (!(0 < a(l, t))) break e;
            (e[r] = t), (e[n] = l), (n = r);
        }
    }
    function n(e) {
        return 0 === e.length ? null : e[0];
    }
    function r(e) {
        if (0 === e.length) return null;
        var t = e[0],
            n = e.pop();
        if (n !== t) {
            e[0] = n;
            e: for (var r = 0, l = e.length, o = l >>> 1; r < o; ) {
                var i = 2 * (r + 1) - 1,
                    u = e[i],
                    s = i + 1,
                    c = e[s];
                if (0 > a(u, n))
                    s < l && 0 > a(c, u) ? ((e[r] = c), (e[s] = n), (r = s)) : ((e[r] = u), (e[i] = n), (r = i));
                else {
                    if (!(s < l && 0 > a(c, n))) break e;
                    (e[r] = c), (e[s] = n), (r = s);
                }
            }
        }
        return t;
    }
    function a(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
    }
    if ('object' == typeof performance && 'function' == typeof performance.now) {
        var l = performance;
        e.unstable_now = function () {
            return l.now();
        };
    } else {
        var o = Date,
            i = o.now();
        e.unstable_now = function () {
            return o.now() - i;
        };
    }
    var u = [],
        s = [],
        c = 1,
        f = null,
        d = 3,
        p = !1,
        h = !1,
        m = !1,
        g = 'function' == typeof setTimeout ? setTimeout : null,
        v = 'function' == typeof clearTimeout ? clearTimeout : null,
        y = 'undefined' != typeof setImmediate ? setImmediate : null;
    function b(e) {
        for (var a = n(s); null !== a; ) {
            if (null === a.callback) r(s);
            else {
                if (!(a.startTime <= e)) break;
                r(s), (a.sortIndex = a.expirationTime), t(u, a);
            }
            a = n(s);
        }
    }
    function w(e) {
        if (((m = !1), b(e), !h))
            if (null !== n(u)) (h = !0), R(k);
            else {
                var t = n(s);
                null !== t && L(w, t.startTime - e);
            }
    }
    function k(t, a) {
        (h = !1), m && ((m = !1), v(_), (_ = -1)), (p = !0);
        var l = d;
        try {
            for (b(a), f = n(u); null !== f && (!(f.expirationTime > a) || (t && !N())); ) {
                var o = f.callback;
                if ('function' == typeof o) {
                    (f.callback = null), (d = f.priorityLevel);
                    var i = o(f.expirationTime <= a);
                    (a = e.unstable_now()), 'function' == typeof i ? (f.callback = i) : f === n(u) && r(u), b(a);
                } else r(u);
                f = n(u);
            }
            if (null !== f) var c = !0;
            else {
                var g = n(s);
                null !== g && L(w, g.startTime - a), (c = !1);
            }
            return c;
        } finally {
            (f = null), (d = l), (p = !1);
        }
    }
    'undefined' != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var S,
        x = !1,
        E = null,
        _ = -1,
        C = 5,
        P = -1;
    function N() {
        return !(e.unstable_now() - P < C);
    }
    function z() {
        if (null !== E) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
                n = E(!0, t);
            } finally {
                n ? S() : ((x = !1), (E = null));
            }
        } else x = !1;
    }
    if ('function' == typeof y)
        S = function () {
            y(z);
        };
    else if ('undefined' != typeof MessageChannel) {
        var T = new MessageChannel(),
            O = T.port2;
        (T.port1.onmessage = z),
            (S = function () {
                O.postMessage(null);
            });
    } else
        S = function () {
            g(z, 0);
        };
    function R(e) {
        (E = e), x || ((x = !0), S());
    }
    function L(t, n) {
        _ = g(function () {
            t(e.unstable_now());
        }, n);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (e) {
            e.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            h || p || ((h = !0), R(k));
        }),
        (e.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (C = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (e) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = d;
            }
            var n = d;
            d = t;
            try {
                return e();
            } finally {
                d = n;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3;
            }
            var n = d;
            d = e;
            try {
                return t();
            } finally {
                d = n;
            }
        }),
        (e.unstable_scheduleCallback = function (r, a, l) {
            var o = e.unstable_now();
            switch (
                ('object' == typeof l && null !== l
                    ? (l = 'number' == typeof (l = l.delay) && 0 < l ? o + l : o)
                    : (l = o),
                r)
            ) {
                case 1:
                    var i = -1;
                    break;
                case 2:
                    i = 250;
                    break;
                case 5:
                    i = 1073741823;
                    break;
                case 4:
                    i = 1e4;
                    break;
                default:
                    i = 5e3;
            }
            return (
                (r = {
                    id: c++,
                    callback: a,
                    priorityLevel: r,
                    startTime: l,
                    expirationTime: (i = l + i),
                    sortIndex: -1,
                }),
                l > o
                    ? ((r.sortIndex = l),
                      t(s, r),
                      null === n(u) && r === n(s) && (m ? (v(_), (_ = -1)) : (m = !0), L(w, l - o)))
                    : ((r.sortIndex = i), t(u, r), h || p || ((h = !0), R(k))),
                r
            );
        }),
        (e.unstable_shouldYield = N),
        (e.unstable_wrapCallback = function (e) {
            var t = d;
            return function () {
                var n = d;
                d = t;
                try {
                    return e.apply(this, arguments);
                } finally {
                    d = n;
                }
            };
        });
})(We),
    (He.exports = We);
var Qe = He.exports,
    qe = $,
    Ke = Qe;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Ye(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var Xe = new Set(),
    Ge = {};
function Ze(e, t) {
    Je(e, t), Je(e + 'Capture', t);
}
function Je(e, t) {
    for (Ge[e] = t, e = 0; e < t.length; e++) Xe.add(t[e]);
}
var et = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    tt = Object.prototype.hasOwnProperty,
    nt =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    rt = {},
    at = {};
function lt(e, t, n, r, a, l, o) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l),
        (this.removeEmptyString = o);
}
var ot = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        ot[e] = new lt(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        ot[t] = new lt(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        ot[e] = new lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        ot[e] = new lt(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            ot[e] = new lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        ot[e] = new lt(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        ot[e] = new lt(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        ot[e] = new lt(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        ot[e] = new lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
var it = /[\-:]([a-z])/g;
function ut(e) {
    return e[1].toUpperCase();
}
function st(e, t, n, r) {
    var a = ot.hasOwnProperty(t) ? ot[t] : null;
    (null !== a
        ? 0 !== a.type
        : r || !(2 < t.length) || ('o' !== t[0] && 'O' !== t[0]) || ('n' !== t[1] && 'N' !== t[1])) &&
        ((function (e, t, n, r) {
            if (
                null == t ||
                (function (e, t, n, r) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof t) {
                        case 'function':
                        case 'symbol':
                            return !0;
                        case 'boolean':
                            return (
                                !r &&
                                (null !== n
                                    ? !n.acceptsBooleans
                                    : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                            );
                        default:
                            return !1;
                    }
                })(e, t, n, r)
            )
                return !0;
            if (r) return !1;
            if (null !== n)
                switch (n.type) {
                    case 3:
                        return !t;
                    case 4:
                        return !1 === t;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || 1 > t;
                }
            return !1;
        })(t, n, a, r) && (n = null),
        r || null === a
            ? (function (e) {
                  return !!tt.call(at, e) || (!tt.call(rt, e) && (nt.test(e) ? (at[e] = !0) : ((rt[e] = !0), !1)));
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                    ? e.removeAttribute(t)
                    : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(it, ut);
        ot[t] = new lt(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(it, ut);
        ot[t] = new lt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(it, ut);
        ot[t] = new lt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        ot[e] = new lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (ot.xlinkHref = new lt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        ot[e] = new lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
var ct = qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ft = Symbol.for('react.element'),
    dt = Symbol.for('react.portal'),
    pt = Symbol.for('react.fragment'),
    ht = Symbol.for('react.strict_mode'),
    mt = Symbol.for('react.profiler'),
    gt = Symbol.for('react.provider'),
    vt = Symbol.for('react.context'),
    yt = Symbol.for('react.forward_ref'),
    bt = Symbol.for('react.suspense'),
    wt = Symbol.for('react.suspense_list'),
    kt = Symbol.for('react.memo'),
    St = Symbol.for('react.lazy'),
    xt = Symbol.for('react.offscreen'),
    Et = Symbol.iterator;
function _t(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (Et && e[Et]) || e['@@iterator'])
          ? e
          : null;
}
var Ct,
    Pt = Object.assign;
function Nt(e) {
    if (void 0 === Ct)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ct = (t && t[1]) || '';
        }
    return '\n' + Ct + e;
}
var zt = !1;
function Tt(e, t) {
    if (!e || zt) return '';
    zt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                'object' == typeof Reflect && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (s) {
                    r = s;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (s) {
                r = s;
            }
            e();
        }
    } catch (s) {
        if (s && r && 'string' == typeof s.stack) {
            for (
                var a = s.stack.split('\n'), l = r.stack.split('\n'), o = a.length - 1, i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

            )
                i--;
            for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                    if (1 !== o || 1 !== i)
                        do {
                            if ((o--, 0 > --i || a[o] !== l[i])) {
                                var u = '\n' + a[o].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        u.includes('<anonymous>') &&
                                        (u = u.replace('<anonymous>', e.displayName)),
                                    u
                                );
                            }
                        } while (1 <= o && 0 <= i);
                    break;
                }
        }
    } finally {
        (zt = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? Nt(e) : '';
}
function Ot(e) {
    switch (e.tag) {
        case 5:
            return Nt(e.type);
        case 16:
            return Nt('Lazy');
        case 13:
            return Nt('Suspense');
        case 19:
            return Nt('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = Tt(e.type, !1));
        case 11:
            return (e = Tt(e.type.render, !1));
        case 1:
            return (e = Tt(e.type, !0));
        default:
            return '';
    }
}
function Rt(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case pt:
            return 'Fragment';
        case dt:
            return 'Portal';
        case mt:
            return 'Profiler';
        case ht:
            return 'StrictMode';
        case bt:
            return 'Suspense';
        case wt:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case vt:
                return (e.displayName || 'Context') + '.Consumer';
            case gt:
                return (e._context.displayName || 'Context') + '.Provider';
            case yt:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case kt:
                return null !== (t = e.displayName || null) ? t : Rt(e.type) || 'Memo';
            case St:
                (t = e._payload), (e = e._init);
                try {
                    return Rt(e(t));
                } catch (n) {}
        }
    return null;
}
function Lt(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (t.displayName || 'Context') + '.Consumer';
        case 10:
            return (t._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return t;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return Rt(t);
        case 8:
            return t === ht ? 'StrictMode' : 'Mode';
        case 22:
            return 'Offscreen';
        case 12:
            return 'Profiler';
        case 21:
            return 'Scope';
        case 13:
            return 'Suspense';
        case 19:
            return 'SuspenseList';
        case 25:
            return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if ('function' == typeof t) return t.displayName || t.name || null;
            if ('string' == typeof t) return t;
    }
    return null;
}
function Ft(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
        case 'object':
            return e;
        default:
            return '';
    }
}
function Mt(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function It(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = Mt(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
                var a = n.get,
                    l = n.set;
                return (
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                            return a.call(this);
                        },
                        set: function (e) {
                            (r = '' + e), l.call(this, e);
                        },
                    }),
                    Object.defineProperty(e, t, { enumerable: n.enumerable }),
                    {
                        getValue: function () {
                            return r;
                        },
                        setValue: function (e) {
                            r = '' + e;
                        },
                        stopTracking: function () {
                            (e._valueTracker = null), delete e[t];
                        },
                    }
                );
            }
        })(e));
}
function At(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return e && (r = Mt(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function Dt(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function jt(e, t) {
    var n = t.checked;
    return Pt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function Ut(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    (n = Ft(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        });
}
function $t(e, t) {
    null != (t = t.checked) && st(e, 'checked', t, !1);
}
function Vt(e, t) {
    $t(e, t);
    var n = Ft(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    t.hasOwnProperty('value')
        ? Ht(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Ht(e, t.type, Ft(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
}
function Bt(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    '' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n);
}
function Ht(e, t, n) {
    ('number' === t && Dt(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Wt = Array.isArray;
function Qt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
        for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + Ft(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
            null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
    }
}
function qt(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Ye(91));
    return Pt({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Kt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Ye(92));
            if (Wt(n)) {
                if (1 < n.length) throw Error(Ye(93));
                n = n[0];
            }
            t = n;
        }
        null == t && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: Ft(n) };
}
function Yt(e, t) {
    var n = Ft(t.value),
        r = Ft(t.defaultValue);
    null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r);
}
function Xt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function Gt(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function Zt(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Gt(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var Jt,
    en,
    tn =
        ((en = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (Jt = Jt || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = Jt.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return en(e, t);
                  });
              }
            : en);
function nn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var rn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    an = ['Webkit', 'ms', 'Moz', 'O'];
function ln(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (rn.hasOwnProperty(e) && rn[e])
          ? ('' + t).trim()
          : t + 'px';
}
function on(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                a = ln(n, t[n], r);
            'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
        }
}
Object.keys(rn).forEach(function (e) {
    an.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (rn[t] = rn[e]);
    });
});
var un = Pt(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    },
);
function sn(e, t) {
    if (t) {
        if (un[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(Ye(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(Ye(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(Ye(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(Ye(62));
    }
}
function cn(e, t) {
    if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var fn = null;
function dn(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var pn = null,
    hn = null,
    mn = null;
function gn(e) {
    if ((e = so(e))) {
        if ('function' != typeof pn) throw Error(Ye(280));
        var t = e.stateNode;
        t && ((t = fo(t)), pn(e.stateNode, e.type, t));
    }
}
function vn(e) {
    hn ? (mn ? mn.push(e) : (mn = [e])) : (hn = e);
}
function yn() {
    if (hn) {
        var e = hn,
            t = mn;
        if (((mn = hn = null), gn(e), t)) for (e = 0; e < t.length; e++) gn(t[e]);
    }
}
function bn(e, t) {
    return e(t);
}
function wn() {}
var kn = !1;
function Sn(e, t, n) {
    if (kn) return e(t, n);
    kn = !0;
    try {
        return bn(e, t, n);
    } finally {
        (kn = !1), (null !== hn || null !== mn) && (wn(), yn());
    }
}
function xn(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = fo(n);
    if (null === r) return null;
    n = r[t];
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (r = !r.disabled) ||
                (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && 'function' != typeof n) throw Error(Ye(231, t, typeof n));
    return n;
}
var En = !1;
if (et)
    try {
        var _n = {};
        Object.defineProperty(_n, 'passive', {
            get: function () {
                En = !0;
            },
        }),
            window.addEventListener('test', _n, _n),
            window.removeEventListener('test', _n, _n);
    } catch (en) {
        En = !1;
    }
function Cn(e, t, n, r, a, l, o, i, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var Pn = !1,
    Nn = null,
    zn = !1,
    Tn = null,
    On = {
        onError: function (e) {
            (Pn = !0), (Nn = e);
        },
    };
function Rn(e, t, n, r, a, l, o, i, u) {
    (Pn = !1), (Nn = null), Cn.apply(On, arguments);
}
function Ln(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do {
            0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
        } while (e);
    }
    return 3 === t.tag ? n : null;
}
function Fn(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function Mn(e) {
    if (Ln(e) !== e) throw Error(Ye(188));
}
function In(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = Ln(e))) throw Error(Ye(188));
                return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                    if (null !== (r = a.return)) {
                        n = r;
                        continue;
                    }
                    break;
                }
                if (a.child === l.child) {
                    for (l = a.child; l; ) {
                        if (l === n) return Mn(a), e;
                        if (l === r) return Mn(a), t;
                        l = l.sibling;
                    }
                    throw Error(Ye(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                    for (var o = !1, i = a.child; i; ) {
                        if (i === n) {
                            (o = !0), (n = a), (r = l);
                            break;
                        }
                        if (i === r) {
                            (o = !0), (r = a), (n = l);
                            break;
                        }
                        i = i.sibling;
                    }
                    if (!o) {
                        for (i = l.child; i; ) {
                            if (i === n) {
                                (o = !0), (n = l), (r = a);
                                break;
                            }
                            if (i === r) {
                                (o = !0), (r = l), (n = a);
                                break;
                            }
                            i = i.sibling;
                        }
                        if (!o) throw Error(Ye(189));
                    }
                }
                if (n.alternate !== r) throw Error(Ye(190));
            }
            if (3 !== n.tag) throw Error(Ye(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? An(e)
        : null;
}
function An(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = An(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var Dn = Ke.unstable_scheduleCallback,
    jn = Ke.unstable_cancelCallback,
    Un = Ke.unstable_shouldYield,
    $n = Ke.unstable_requestPaint,
    Vn = Ke.unstable_now,
    Bn = Ke.unstable_getCurrentPriorityLevel,
    Hn = Ke.unstable_ImmediatePriority,
    Wn = Ke.unstable_UserBlockingPriority,
    Qn = Ke.unstable_NormalPriority,
    qn = Ke.unstable_LowPriority,
    Kn = Ke.unstable_IdlePriority,
    Yn = null,
    Xn = null;
var Gn = Math.clz32
        ? Math.clz32
        : function (e) {
              return (e >>>= 0), 0 === e ? 32 : (31 - ((Zn(e) / Jn) | 0)) | 0;
          },
    Zn = Math.log,
    Jn = Math.LN2;
var er = 64,
    tr = 4194304;
function nr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return 130023424 & e;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function rr(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        a = e.suspendedLanes,
        l = e.pingedLanes,
        o = 268435455 & n;
    if (0 !== o) {
        var i = o & ~a;
        0 !== i ? (r = nr(i)) : 0 !== (l &= o) && (r = nr(l));
    } else 0 !== (o = n & ~a) ? (r = nr(o)) : 0 !== l && (r = nr(l));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) (a = 1 << (n = 31 - Gn(t))), (r |= e[n]), (t &= ~a);
    return r;
}
function ar(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        default:
            return -1;
    }
}
function lr(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function or() {
    var e = er;
    return 0 == (4194240 & (er <<= 1)) && (er = 64), e;
}
function ir(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function ur(e, t, n) {
    (e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - Gn(t))] = n);
}
function sr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Gn(n),
            a = 1 << r;
        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
    }
}
var cr = 0;
function fr(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var dr,
    pr,
    hr,
    mr,
    gr,
    vr = !1,
    yr = [],
    br = null,
    wr = null,
    kr = null,
    Sr = new Map(),
    xr = new Map(),
    Er = [],
    _r =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function Cr(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            br = null;
            break;
        case 'dragenter':
        case 'dragleave':
            wr = null;
            break;
        case 'mouseover':
        case 'mouseout':
            kr = null;
            break;
        case 'pointerover':
        case 'pointerout':
            Sr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            xr.delete(t.pointerId);
    }
}
function Pr(e, t, n, r, a, l) {
    return null === e || e.nativeEvent !== l
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }),
          null !== t && null !== (t = so(t)) && pr(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
}
function Nr(e) {
    var t = uo(e.target);
    if (null !== t) {
        var n = Ln(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Fn(n)))
                    return (
                        (e.blockedOn = t),
                        void gr(e.priority, function () {
                            hr(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function zr(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ur(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = so(n)) && pr(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (fn = r), n.target.dispatchEvent(r), (fn = null), t.shift();
    }
    return !0;
}
function Tr(e, t, n) {
    zr(e) && n.delete(t);
}
function Or() {
    (vr = !1),
        null !== br && zr(br) && (br = null),
        null !== wr && zr(wr) && (wr = null),
        null !== kr && zr(kr) && (kr = null),
        Sr.forEach(Tr),
        xr.forEach(Tr);
}
function Rr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), vr || ((vr = !0), Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Or)));
}
function Lr(e) {
    function t(t) {
        return Rr(t, e);
    }
    if (0 < yr.length) {
        Rr(yr[0], e);
        for (var n = 1; n < yr.length; n++) {
            var r = yr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== br && Rr(br, e),
            null !== wr && Rr(wr, e),
            null !== kr && Rr(kr, e),
            Sr.forEach(t),
            xr.forEach(t),
            n = 0;
        n < Er.length;
        n++
    )
        (r = Er[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Er.length && null === (n = Er[0]).blockedOn; ) Nr(n), null === n.blockedOn && Er.shift();
}
var Fr = ct.ReactCurrentBatchConfig,
    Mr = !0;
function Ir(e, t, n, r) {
    var a = cr,
        l = Fr.transition;
    Fr.transition = null;
    try {
        (cr = 1), Dr(e, t, n, r);
    } finally {
        (cr = a), (Fr.transition = l);
    }
}
function Ar(e, t, n, r) {
    var a = cr,
        l = Fr.transition;
    Fr.transition = null;
    try {
        (cr = 4), Dr(e, t, n, r);
    } finally {
        (cr = a), (Fr.transition = l);
    }
}
function Dr(e, t, n, r) {
    if (Mr) {
        var a = Ur(e, t, n, r);
        if (null === a) Fl(e, t, r, jr, n), Cr(e, r);
        else if (
            (function (e, t, n, r, a) {
                switch (t) {
                    case 'focusin':
                        return (br = Pr(br, e, t, n, r, a)), !0;
                    case 'dragenter':
                        return (wr = Pr(wr, e, t, n, r, a)), !0;
                    case 'mouseover':
                        return (kr = Pr(kr, e, t, n, r, a)), !0;
                    case 'pointerover':
                        var l = a.pointerId;
                        return Sr.set(l, Pr(Sr.get(l) || null, e, t, n, r, a)), !0;
                    case 'gotpointercapture':
                        return (l = a.pointerId), xr.set(l, Pr(xr.get(l) || null, e, t, n, r, a)), !0;
                }
                return !1;
            })(a, e, t, n, r)
        )
            r.stopPropagation();
        else if ((Cr(e, r), 4 & t && -1 < _r.indexOf(e))) {
            for (; null !== a; ) {
                var l = so(a);
                if ((null !== l && dr(l), null === (l = Ur(e, t, n, r)) && Fl(e, t, r, jr, n), l === a)) break;
                a = l;
            }
            null !== a && r.stopPropagation();
        } else Fl(e, t, r, null, n);
    }
}
var jr = null;
function Ur(e, t, n, r) {
    if (((jr = null), null !== (e = uo((e = dn(r))))))
        if (null === (t = Ln(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Fn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (jr = e), null;
}
function $r(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4;
        case 'message':
            switch (Bn()) {
                case Hn:
                    return 1;
                case Wn:
                    return 4;
                case Qn:
                case qn:
                    return 16;
                case Kn:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Vr = null,
    Br = null,
    Hr = null;
function Wr() {
    if (Hr) return Hr;
    var e,
        t,
        n = Br,
        r = n.length,
        a = 'value' in Vr ? Vr.value : Vr.textContent,
        l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
    return (Hr = a.slice(e, 1 < t ? 1 - t : void 0));
}
function Qr(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function qr() {
    return !0;
}
function Kr() {
    return !1;
}
function Yr(e) {
    function t(t, n, r, a, l) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = a),
        (this.target = l),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
        return (
            (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue)
                ? qr
                : Kr),
            (this.isPropagationStopped = Kr),
            this
        );
    }
    return (
        Pt(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = qr));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = qr));
            },
            persist: function () {},
            isPersistent: qr,
        }),
        t
    );
}
var Xr,
    Gr,
    Zr,
    Jr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    ea = Yr(Jr),
    ta = Pt({}, Jr, { view: 0, detail: 0 }),
    na = Yr(ta),
    ra = Pt({}, ta, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ma,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== Zr &&
                      (Zr && 'mousemove' === e.type
                          ? ((Xr = e.screenX - Zr.screenX), (Gr = e.screenY - Zr.screenY))
                          : (Gr = Xr = 0),
                      (Zr = e)),
                  Xr);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Gr;
        },
    }),
    aa = Yr(ra),
    la = Yr(Pt({}, ra, { dataTransfer: 0 })),
    oa = Yr(Pt({}, ta, { relatedTarget: 0 })),
    ia = Yr(Pt({}, Jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ua = Pt({}, Jr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    sa = Yr(ua),
    ca = Yr(Pt({}, Jr, { data: 0 })),
    fa = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    da = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    pa = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function ha(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = pa[e]) && !!t[e];
}
function ma() {
    return ha;
}
var ga = Pt({}, ta, {
        key: function (e) {
            if (e.key) {
                var t = fa[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Qr(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? da[e.keyCode] || 'Unidentified'
                  : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ma,
        charCode: function (e) {
            return 'keypress' === e.type ? Qr(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Qr(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    va = Yr(ga),
    ya = Yr(
        Pt({}, ra, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
    ),
    ba = Yr(
        Pt({}, ta, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ma,
        }),
    ),
    wa = Yr(Pt({}, Jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ka = Pt({}, ra, {
        deltaX: function (e) {
            return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Sa = Yr(ka),
    xa = [9, 13, 27, 32],
    Ea = et && 'CompositionEvent' in window,
    _a = null;
et && 'documentMode' in document && (_a = document.documentMode);
var Ca = et && 'TextEvent' in window && !_a,
    Pa = et && (!Ea || (_a && 8 < _a && 11 >= _a)),
    Na = String.fromCharCode(32),
    za = !1;
function Ta(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== xa.indexOf(t.keyCode);
        case 'keydown':
            return 229 !== t.keyCode;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function Oa(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Ra = !1;
var La = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Fa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!La[e.type] : 'textarea' === t;
}
function Ma(e, t, n, r) {
    vn(r),
        0 < (t = Il(t, 'onChange')).length &&
            ((n = new ea('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Ia = null,
    Aa = null;
function Da(e) {
    Nl(e, 0);
}
function ja(e) {
    if (At(co(e))) return e;
}
function Ua(e, t) {
    if ('change' === e) return t;
}
var $a = !1;
if (et) {
    var Va;
    if (et) {
        var Ba = 'oninput' in document;
        if (!Ba) {
            var Ha = document.createElement('div');
            Ha.setAttribute('oninput', 'return;'), (Ba = 'function' == typeof Ha.oninput);
        }
        Va = Ba;
    } else Va = !1;
    $a = Va && (!document.documentMode || 9 < document.documentMode);
}
function Wa() {
    Ia && (Ia.detachEvent('onpropertychange', Qa), (Aa = Ia = null));
}
function Qa(e) {
    if ('value' === e.propertyName && ja(Aa)) {
        var t = [];
        Ma(t, Aa, e, dn(e)), Sn(Da, t);
    }
}
function qa(e, t, n) {
    'focusin' === e ? (Wa(), (Aa = n), (Ia = t).attachEvent('onpropertychange', Qa)) : 'focusout' === e && Wa();
}
function Ka(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return ja(Aa);
}
function Ya(e, t) {
    if ('click' === e) return ja(t);
}
function Xa(e, t) {
    if ('input' === e || 'change' === e) return ja(t);
}
var Ga =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function Za(e, t) {
    if (Ga(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!tt.call(t, a) || !Ga(e[a], t[a])) return !1;
    }
    return !0;
}
function Ja(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function el(e, t) {
    var n,
        r = Ja(e);
    for (e = 0; r; ) {
        if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
            e = n;
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e;
                }
                r = r.parentNode;
            }
            r = void 0;
        }
        r = Ja(r);
    }
}
function tl(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? tl(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function nl() {
    for (var e = window, t = Dt(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = Dt((e = t.contentWindow).document);
    }
    return t;
}
function rl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        (('input' === t &&
            ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
    );
}
function al(e) {
    var t = nl(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && tl(n.ownerDocument.documentElement, n)) {
        if (null !== r && rl(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var a = n.textContent.length,
                    l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                    !e.extend && l > r && ((a = r), (r = l), (l = a)),
                    (a = el(n, l));
                var o = el(n, r);
                a &&
                    o &&
                    (1 !== e.rangeCount ||
                        e.anchorNode !== a.node ||
                        e.anchorOffset !== a.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()).setStart(a.node, a.offset),
                    e.removeAllRanges(),
                    l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
            ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var ll = et && 'documentMode' in document && 11 >= document.documentMode,
    ol = null,
    il = null,
    ul = null,
    sl = !1;
function cl(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    sl ||
        null == ol ||
        ol !== Dt(r) ||
        ('selectionStart' in (r = ol) && rl(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (ul && Za(ul, r)) ||
            ((ul = r),
            0 < (r = Il(il, 'onSelect')).length &&
                ((t = new ea('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = ol))));
}
function fl(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var dl = {
        animationend: fl('Animation', 'AnimationEnd'),
        animationiteration: fl('Animation', 'AnimationIteration'),
        animationstart: fl('Animation', 'AnimationStart'),
        transitionend: fl('Transition', 'TransitionEnd'),
    },
    pl = {},
    hl = {};
function ml(e) {
    if (pl[e]) return pl[e];
    if (!dl[e]) return e;
    var t,
        n = dl[e];
    for (t in n) if (n.hasOwnProperty(t) && t in hl) return (pl[e] = n[t]);
    return e;
}
et &&
    ((hl = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete dl.animationend.animation, delete dl.animationiteration.animation, delete dl.animationstart.animation),
    'TransitionEvent' in window || delete dl.transitionend.transition);
var gl = ml('animationend'),
    vl = ml('animationiteration'),
    yl = ml('animationstart'),
    bl = ml('transitionend'),
    wl = new Map(),
    kl =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function Sl(e, t) {
    wl.set(e, t), Ze(t, [e]);
}
for (var xl = 0; xl < kl.length; xl++) {
    var El = kl[xl];
    Sl(El.toLowerCase(), 'on' + (El[0].toUpperCase() + El.slice(1)));
}
Sl(gl, 'onAnimationEnd'),
    Sl(vl, 'onAnimationIteration'),
    Sl(yl, 'onAnimationStart'),
    Sl('dblclick', 'onDoubleClick'),
    Sl('focusin', 'onFocus'),
    Sl('focusout', 'onBlur'),
    Sl(bl, 'onTransitionEnd'),
    Je('onMouseEnter', ['mouseout', 'mouseover']),
    Je('onMouseLeave', ['mouseout', 'mouseover']),
    Je('onPointerEnter', ['pointerout', 'pointerover']),
    Je('onPointerLeave', ['pointerout', 'pointerover']),
    Ze('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ze('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Ze('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ze('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ze('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Ze('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var _l =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    Cl = new Set('cancel close invalid load scroll toggle'.split(' ').concat(_l));
function Pl(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n),
        (function (e, t, n, r, a, l, o, i, u) {
            if ((Rn.apply(this, arguments), Pn)) {
                if (!Pn) throw Error(Ye(198));
                var s = Nn;
                (Pn = !1), (Nn = null), zn || ((zn = !0), (Tn = s));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null);
}
function Nl(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            a = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var i = r[o],
                        u = i.instance,
                        s = i.currentTarget;
                    if (((i = i.listener), u !== l && a.isPropagationStopped())) break e;
                    Pl(a, i, s), (l = u);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((u = (i = r[o]).instance),
                        (s = i.currentTarget),
                        (i = i.listener),
                        u !== l && a.isPropagationStopped())
                    )
                        break e;
                    Pl(a, i, s), (l = u);
                }
        }
    }
    if (zn) throw ((e = Tn), (zn = !1), (Tn = null), e);
}
function zl(e, t) {
    var n = t[lo];
    void 0 === n && (n = t[lo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ll(t, e, 2, !1), n.add(r));
}
function Tl(e, t, n) {
    var r = 0;
    t && (r |= 4), Ll(n, e, r, t);
}
var Ol = '_reactListening' + Math.random().toString(36).slice(2);
function Rl(e) {
    if (!e[Ol]) {
        (e[Ol] = !0),
            Xe.forEach(function (t) {
                'selectionchange' !== t && (Cl.has(t) || Tl(t, !1, e), Tl(t, !0, e));
            });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[Ol] || ((t[Ol] = !0), Tl('selectionchange', !1, t));
    }
}
function Ll(e, t, n, r) {
    switch ($r(t)) {
        case 1:
            var a = Ir;
            break;
        case 4:
            a = Ar;
            break;
        default:
            a = Dr;
    }
    (n = a.bind(null, t, n, e)),
        (a = void 0),
        !En || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
        r
            ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
            : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, a) {
    var l = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                    for (o = r.return; null !== o; ) {
                        var u = o.tag;
                        if (
                            (3 === u || 4 === u) &&
                            ((u = o.stateNode.containerInfo) === a || (8 === u.nodeType && u.parentNode === a))
                        )
                            return;
                        o = o.return;
                    }
                for (; null !== i; ) {
                    if (null === (o = uo(i))) return;
                    if (5 === (u = o.tag) || 6 === u) {
                        r = l = o;
                        continue e;
                    }
                    i = i.parentNode;
                }
            }
            r = r.return;
        }
    Sn(function () {
        var r = l,
            a = dn(n),
            o = [];
        e: {
            var i = wl.get(e);
            if (void 0 !== i) {
                var u = ea,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Qr(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = va;
                        break;
                    case 'focusin':
                        (s = 'focus'), (u = oa);
                        break;
                    case 'focusout':
                        (s = 'blur'), (u = oa);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = oa;
                        break;
                    case 'click':
                        if (2 === n.button) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        u = aa;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        u = la;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        u = ba;
                        break;
                    case gl:
                    case vl:
                    case yl:
                        u = ia;
                        break;
                    case bl:
                        u = wa;
                        break;
                    case 'scroll':
                        u = na;
                        break;
                    case 'wheel':
                        u = Sa;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = sa;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = ya;
                }
                var c = 0 != (4 & t),
                    f = !c && 'scroll' === e,
                    d = c ? (null !== i ? i + 'Capture' : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                    var m = (p = h).stateNode;
                    if (
                        (5 === p.tag &&
                            null !== m &&
                            ((p = m), null !== d && null != (m = xn(h, d)) && c.push(Ml(h, m, p))),
                        f)
                    )
                        break;
                    h = h.return;
                }
                0 < c.length && ((i = new u(i, s, null, n, a)), o.push({ event: i, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                    n === fn ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!uo(s) && !s[ao])) &&
                    (u || i) &&
                    ((i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? uo(s) : null) &&
                              (s !== (f = Ln(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = aa),
                    (m = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = ya), (m = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == u ? i : co(u)),
                    (p = null == s ? i : co(s)),
                    ((i = new c(m, h + 'leave', u, n, a)).target = f),
                    (i.relatedTarget = p),
                    (m = null),
                    uo(a) === r && (((c = new c(d, h + 'enter', s, n, a)).target = p), (c.relatedTarget = f), (m = c)),
                    (f = m),
                    u && s)
                )
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = Al(p)) h++;
                        for (p = 0, m = d; m; m = Al(m)) p++;
                        for (; 0 < h - p; ) (c = Al(c)), h--;
                        for (; 0 < p - h; ) (d = Al(d)), p--;
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            (c = Al(c)), (d = Al(d));
                        }
                        c = null;
                    }
                else c = null;
                null !== u && Dl(o, i, u, c, !1), null !== s && null !== f && Dl(o, f, s, c, !0);
            }
            if (
                'select' === (u = (i = r ? co(r) : window).nodeName && i.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === i.type)
            )
                var g = Ua;
            else if (Fa(i))
                if ($a) g = Xa;
                else {
                    g = Ka;
                    var v = qa;
                }
            else
                (u = i.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === i.type || 'radio' === i.type) &&
                    (g = Ya);
            switch (
                (g && (g = g(e, r))
                    ? Ma(o, g, n, a)
                    : (v && v(e, i, r),
                      'focusout' === e &&
                          (v = i._wrapperState) &&
                          v.controlled &&
                          'number' === i.type &&
                          Ht(i, 'number', i.value)),
                (v = r ? co(r) : window),
                e)
            ) {
                case 'focusin':
                    (Fa(v) || 'true' === v.contentEditable) && ((ol = v), (il = r), (ul = null));
                    break;
                case 'focusout':
                    ul = il = ol = null;
                    break;
                case 'mousedown':
                    sl = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (sl = !1), cl(o, n, a);
                    break;
                case 'selectionchange':
                    if (ll) break;
                case 'keydown':
                case 'keyup':
                    cl(o, n, a);
            }
            var y;
            if (Ea)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var b = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            b = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            b = 'onCompositionUpdate';
                            break e;
                    }
                    b = void 0;
                }
            else
                Ra
                    ? Ta(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            b &&
                (Pa &&
                    'ko' !== n.locale &&
                    (Ra || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Ra && (y = Wr())
                        : ((Br = 'value' in (Vr = a) ? Vr.value : Vr.textContent), (Ra = !0))),
                0 < (v = Il(r, b)).length &&
                    ((b = new ca(b, e, null, n, a)),
                    o.push({ event: b, listeners: v }),
                    y ? (b.data = y) : null !== (y = Oa(n)) && (b.data = y))),
                (y = Ca
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return Oa(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((za = !0), Na);
                              case 'textInput':
                                  return (e = t.data) === Na && za ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Ra)
                              return 'compositionend' === e || (!Ea && Ta(e, t))
                                  ? ((e = Wr()), (Hr = Br = Vr = null), (Ra = !1), e)
                                  : null;
                          switch (e) {
                              case 'paste':
                              default:
                                  return null;
                              case 'keypress':
                                  if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                                      if (t.char && 1 < t.char.length) return t.char;
                                      if (t.which) return String.fromCharCode(t.which);
                                  }
                                  return null;
                              case 'compositionend':
                                  return Pa && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Il(r, 'onBeforeInput')).length &&
                    ((a = new ca('onBeforeInput', 'beforeinput', null, n, a)),
                    o.push({ event: a, listeners: r }),
                    (a.data = y));
        }
        Nl(o, t);
    });
}
function Ml(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Il(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var a = e,
            l = a.stateNode;
        5 === a.tag &&
            null !== l &&
            ((a = l), null != (l = xn(e, n)) && r.unshift(Ml(e, l, a)), null != (l = xn(e, t)) && r.push(Ml(e, l, a))),
            (e = e.return);
    }
    return r;
}
function Al(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function Dl(e, t, n, r, a) {
    for (var l = t._reactName, o = []; null !== n && n !== r; ) {
        var i = n,
            u = i.alternate,
            s = i.stateNode;
        if (null !== u && u === r) break;
        5 === i.tag &&
            null !== s &&
            ((i = s),
            a
                ? null != (u = xn(n, l)) && o.unshift(Ml(n, u, i))
                : a || (null != (u = xn(n, l)) && o.push(Ml(n, u, i)))),
            (n = n.return);
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var jl = /\r\n?/g,
    Ul = /\u0000|\uFFFD/g;
function $l(e) {
    return ('string' == typeof e ? e : '' + e).replace(jl, '\n').replace(Ul, '');
}
function Vl(e, t, n) {
    if (((t = $l(t)), $l(e) !== t && n)) throw Error(Ye(425));
}
function Bl() {}
var Hl = null,
    Wl = null;
function Ql(e, t) {
    return (
        'textarea' === e ||
        'noscript' === e ||
        'string' == typeof t.children ||
        'number' == typeof t.children ||
        ('object' == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
    );
}
var ql = 'function' == typeof setTimeout ? setTimeout : void 0,
    Kl = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Yl = 'function' == typeof Promise ? Promise : void 0,
    Xl =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Yl
              ? function (e) {
                    return Yl.resolve(null).then(e).catch(Gl);
                }
              : ql;
function Gl(e) {
    setTimeout(function () {
        throw e;
    });
}
function Zl(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Lr(t);
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = a;
    } while (n);
    Lr(t);
}
function Jl(e) {
    for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
            if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
            if ('/$' === t) return null;
        }
    }
    return e;
}
function eo(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
            } else '/$' === n && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var to = Math.random().toString(36).slice(2),
    no = '__reactFiber$' + to,
    ro = '__reactProps$' + to,
    ao = '__reactContainer$' + to,
    lo = '__reactEvents$' + to,
    oo = '__reactListeners$' + to,
    io = '__reactHandles$' + to;
function uo(e) {
    var t = e[no];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[ao] || n[no])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = eo(e); null !== e; ) {
                    if ((n = e[no])) return n;
                    e = eo(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function so(e) {
    return !(e = e[no] || e[ao]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function co(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Ye(33));
}
function fo(e) {
    return e[ro] || null;
}
var po = [],
    ho = -1;
function mo(e) {
    return { current: e };
}
function go(e) {
    0 > ho || ((e.current = po[ho]), (po[ho] = null), ho--);
}
function vo(e, t) {
    ho++, (po[ho] = e.current), (e.current = t);
}
var yo = {},
    bo = mo(yo),
    wo = mo(!1),
    ko = yo;
function So(e, t) {
    var n = e.type.contextTypes;
    if (!n) return yo;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a,
        l = {};
    for (a in n) l[a] = t[a];
    return (
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function xo(e) {
    return null != (e = e.childContextTypes);
}
function Eo() {
    go(wo), go(bo);
}
function _o(e, t, n) {
    if (bo.current !== yo) throw Error(Ye(168));
    vo(bo, t), vo(wo, n);
}
function Co(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(Ye(108, Lt(e) || 'Unknown', a));
    return Pt({}, n, r);
}
function Po(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yo),
        (ko = bo.current),
        vo(bo, e),
        vo(wo, wo.current),
        !0
    );
}
function No(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Ye(169));
    n ? ((e = Co(e, t, ko)), (r.__reactInternalMemoizedMergedChildContext = e), go(wo), go(bo), vo(bo, e)) : go(wo),
        vo(wo, n);
}
var zo = null,
    To = !1,
    Oo = !1;
function Ro(e) {
    null === zo ? (zo = [e]) : zo.push(e);
}
function Lo() {
    if (!Oo && null !== zo) {
        Oo = !0;
        var e = 0,
            t = cr;
        try {
            var n = zo;
            for (cr = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            (zo = null), (To = !1);
        } catch (a) {
            throw (null !== zo && (zo = zo.slice(e + 1)), Dn(Hn, Lo), a);
        } finally {
            (cr = t), (Oo = !1);
        }
    }
    return null;
}
var Fo = [],
    Mo = 0,
    Io = null,
    Ao = 0,
    Do = [],
    jo = 0,
    Uo = null,
    $o = 1,
    Vo = '';
function Bo(e, t) {
    (Fo[Mo++] = Ao), (Fo[Mo++] = Io), (Io = e), (Ao = t);
}
function Ho(e, t, n) {
    (Do[jo++] = $o), (Do[jo++] = Vo), (Do[jo++] = Uo), (Uo = e);
    var r = $o;
    e = Vo;
    var a = 32 - Gn(r) - 1;
    (r &= ~(1 << a)), (n += 1);
    var l = 32 - Gn(t) + a;
    if (30 < l) {
        var o = a - (a % 5);
        (l = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (a -= o),
            ($o = (1 << (32 - Gn(t) + a)) | (n << a) | r),
            (Vo = l + e);
    } else ($o = (1 << l) | (n << a) | r), (Vo = e);
}
function Wo(e) {
    null !== e.return && (Bo(e, 1), Ho(e, 1, 0));
}
function Qo(e) {
    for (; e === Io; ) (Io = Fo[--Mo]), (Fo[Mo] = null), (Ao = Fo[--Mo]), (Fo[Mo] = null);
    for (; e === Uo; )
        (Uo = Do[--jo]), (Do[jo] = null), (Vo = Do[--jo]), (Do[jo] = null), ($o = Do[--jo]), (Do[jo] = null);
}
var qo = null,
    Ko = null,
    Yo = !1,
    Xo = null;
function Go(e, t) {
    var n = Sf(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zo(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (qo = e), (Ko = Jl(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (qo = e), (Ko = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Uo ? { id: $o, overflow: Vo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Sf(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (qo = e),
                (Ko = null),
                !0)
            );
        default:
            return !1;
    }
}
function Jo(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function ei(e) {
    if (Yo) {
        var t = Ko;
        if (t) {
            var n = t;
            if (!Zo(e, t)) {
                if (Jo(e)) throw Error(Ye(418));
                t = Jl(n.nextSibling);
                var r = qo;
                t && Zo(e, t) ? Go(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Yo = !1), (qo = e));
            }
        } else {
            if (Jo(e)) throw Error(Ye(418));
            (e.flags = (-4097 & e.flags) | 2), (Yo = !1), (qo = e);
        }
    }
}
function ti(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    qo = e;
}
function ni(e) {
    if (e !== qo) return !1;
    if (!Yo) return ti(e), (Yo = !0), !1;
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Ql(e.type, e.memoizedProps)),
        t && (t = Ko))
    ) {
        if (Jo(e)) throw (ri(), Error(Ye(418)));
        for (; t; ) Go(e, t), (t = Jl(t.nextSibling));
    }
    if ((ti(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Ye(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Ko = Jl(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Ko = null;
        }
    } else Ko = qo ? Jl(e.stateNode.nextSibling) : null;
    return !0;
}
function ri() {
    for (var e = Ko; e; ) e = Jl(e.nextSibling);
}
function ai() {
    (Ko = qo = null), (Yo = !1);
}
function li(e) {
    null === Xo ? (Xo = [e]) : Xo.push(e);
}
var oi = ct.ReactCurrentBatchConfig;
function ii(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Ye(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Ye(147, e));
            var a = r,
                l = '' + e;
            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === l
                ? t.ref
                : (((t = function (e) {
                      var t = a.refs;
                      null === e ? delete t[l] : (t[l] = e);
                  })._stringRef = l),
                  t);
        }
        if ('string' != typeof e) throw Error(Ye(284));
        if (!n._owner) throw Error(Ye(290, e));
    }
    return e;
}
function ui(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(Ye(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
}
function si(e) {
    return (0, e._init)(e._payload);
}
function ci(e) {
    function t(t, n) {
        if (e) {
            var r = t.deletions;
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
    }
    function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
    }
    function r(e, t) {
        for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
    }
    function a(e, t) {
        return ((e = Ef(e, t)).index = 0), (e.sibling = null), e;
    }
    function l(t, n, r) {
        return (
            (t.index = r),
            e
                ? null !== (r = t.alternate)
                    ? (r = r.index) < n
                        ? ((t.flags |= 2), n)
                        : r
                    : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
        );
    }
    function o(t) {
        return e && null === t.alternate && (t.flags |= 2), t;
    }
    function i(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = Nf(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var l = n.type;
        return l === pt
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === l || ('object' == typeof l && null !== l && l.$$typeof === St && si(l) === t.type))
              ? (((r = a(t, n.props)).ref = ii(e, t, n)), (r.return = e), r)
              : (((r = _f(n.type, n.key, n.props, null, e.mode, r)).ref = ii(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = zf(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, l) {
        return null === t || 7 !== t.tag
            ? (((t = Cf(n, e.mode, r, l)).return = e), t)
            : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return ((t = Nf('' + t, e.mode, n)).return = e), t;
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case ft:
                    return ((n = _f(t.type, t.key, t.props, null, e.mode, n)).ref = ii(e, null, t)), (n.return = e), n;
                case dt:
                    return ((t = zf(t, e.mode, n)).return = e), t;
                case St:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Wt(t) || _t(t)) return ((t = Cf(t, e.mode, n, null)).return = e), t;
            ui(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== a ? null : i(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case ft:
                    return n.key === a ? u(e, t, n, r) : null;
                case dt:
                    return n.key === a ? s(e, t, n, r) : null;
                case St:
                    return d(e, t, (a = n._init)(n._payload), r);
            }
            if (Wt(n) || _t(n)) return null !== a ? null : c(e, t, n, r, null);
            ui(e, n);
        }
        return null;
    }
    function p(e, t, n, r, a) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return i(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case ft:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case dt:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case St:
                    return p(e, t, n, (0, r._init)(r._payload), a);
            }
            if (Wt(r) || _t(r)) return c(t, (e = e.get(n) || null), r, a, null);
            ui(t, r);
        }
        return null;
    }
    return function i(u, s, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === pt && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case ft:
                    e: {
                        for (var m = c.key, g = s; null !== g; ) {
                            if (g.key === m) {
                                if ((m = c.type) === pt) {
                                    if (7 === g.tag) {
                                        n(u, g.sibling), ((s = a(g, c.props.children)).return = u), (u = s);
                                        break e;
                                    }
                                } else if (
                                    g.elementType === m ||
                                    ('object' == typeof m && null !== m && m.$$typeof === St && si(m) === g.type)
                                ) {
                                    n(u, g.sibling), ((s = a(g, c.props)).ref = ii(u, g, c)), (s.return = u), (u = s);
                                    break e;
                                }
                                n(u, g);
                                break;
                            }
                            t(u, g), (g = g.sibling);
                        }
                        c.type === pt
                            ? (((s = Cf(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = _f(c.type, c.key, c.props, null, u.mode, h)).ref = ii(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return o(u);
                case dt:
                    e: {
                        for (g = c.key; null !== s; ) {
                            if (s.key === g) {
                                if (
                                    4 === s.tag &&
                                    s.stateNode.containerInfo === c.containerInfo &&
                                    s.stateNode.implementation === c.implementation
                                ) {
                                    n(u, s.sibling), ((s = a(s, c.children || [])).return = u), (u = s);
                                    break e;
                                }
                                n(u, s);
                                break;
                            }
                            t(u, s), (s = s.sibling);
                        }
                        ((s = zf(c, u.mode, h)).return = u), (u = s);
                    }
                    return o(u);
                case St:
                    return i(u, s, (g = c._init)(c._payload), h);
            }
            if (Wt(c))
                return (function (a, o, i, u) {
                    for (var s = null, c = null, h = o, m = (o = 0), g = null; null !== h && m < i.length; m++) {
                        h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                        var v = d(a, h, i[m], u);
                        if (null === v) {
                            null === h && (h = g);
                            break;
                        }
                        e && h && null === v.alternate && t(a, h),
                            (o = l(v, o, m)),
                            null === c ? (s = v) : (c.sibling = v),
                            (c = v),
                            (h = g);
                    }
                    if (m === i.length) return n(a, h), Yo && Bo(a, m), s;
                    if (null === h) {
                        for (; m < i.length; m++)
                            null !== (h = f(a, i[m], u)) &&
                                ((o = l(h, o, m)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return Yo && Bo(a, m), s;
                    }
                    for (h = r(a, h); m < i.length; m++)
                        null !== (g = p(h, a, m, i[m], u)) &&
                            (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
                            (o = l(g, o, m)),
                            null === c ? (s = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(a, e);
                            }),
                        Yo && Bo(a, m),
                        s
                    );
                })(u, s, c, h);
            if (_t(c))
                return (function (a, o, i, u) {
                    var s = _t(i);
                    if ('function' != typeof s) throw Error(Ye(150));
                    if (null == (i = s.call(i))) throw Error(Ye(151));
                    for (
                        var c = (s = null), h = o, m = (o = 0), g = null, v = i.next();
                        null !== h && !v.done;
                        m++, v = i.next()
                    ) {
                        h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                        var y = d(a, h, v.value, u);
                        if (null === y) {
                            null === h && (h = g);
                            break;
                        }
                        e && h && null === y.alternate && t(a, h),
                            (o = l(y, o, m)),
                            null === c ? (s = y) : (c.sibling = y),
                            (c = y),
                            (h = g);
                    }
                    if (v.done) return n(a, h), Yo && Bo(a, m), s;
                    if (null === h) {
                        for (; !v.done; m++, v = i.next())
                            null !== (v = f(a, v.value, u)) &&
                                ((o = l(v, o, m)), null === c ? (s = v) : (c.sibling = v), (c = v));
                        return Yo && Bo(a, m), s;
                    }
                    for (h = r(a, h); !v.done; m++, v = i.next())
                        null !== (v = p(h, a, m, v.value, u)) &&
                            (e && null !== v.alternate && h.delete(null === v.key ? m : v.key),
                            (o = l(v, o, m)),
                            null === c ? (s = v) : (c.sibling = v),
                            (c = v));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(a, e);
                            }),
                        Yo && Bo(a, m),
                        s
                    );
                })(u, s, c, h);
            ui(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = a(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = Nf(c, u.mode, h)).return = u), (u = s)),
              o(u))
            : n(u, s);
    };
}
var fi = ci(!0),
    di = ci(!1),
    pi = mo(null),
    hi = null,
    mi = null,
    gi = null;
function vi() {
    gi = mi = hi = null;
}
function yi(e) {
    var t = pi.current;
    go(pi), (e._currentValue = t);
}
function bi(e, t, n) {
    for (; null !== e; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function wi(e, t) {
    (hi = e),
        (gi = mi = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (ss = !0), (e.firstContext = null));
}
function ki(e) {
    var t = e._currentValue;
    if (gi !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === mi)) {
            if (null === hi) throw Error(Ye(308));
            (mi = e), (hi.dependencies = { lanes: 0, firstContext: e });
        } else mi = mi.next = e;
    return t;
}
var Si = null;
function xi(e) {
    null === Si ? (Si = [e]) : Si.push(e);
}
function Ei(e, t, n, r) {
    var a = t.interleaved;
    return null === a ? ((n.next = n), xi(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), _i(e, r);
}
function _i(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
}
var Ci = !1;
function Pi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Ni(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function zi(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ti(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & yc))) {
        var a = r.pending;
        return null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), _i(e, n);
    }
    return (
        null === (a = r.interleaved) ? ((t.next = t), xi(r)) : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        _i(e, n)
    );
}
function Oi(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), sr(e, n);
    }
}
function Ri(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var a = null,
            l = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
            } while (null !== n);
            null === l ? (a = l = t) : (l = l.next = t);
        } else a = l = t;
        return (
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
            }),
            void (e.updateQueue = n)
        );
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Li(e, t, n, r) {
    var a = e.updateQueue;
    Ci = !1;
    var l = a.firstBaseUpdate,
        o = a.lastBaseUpdate,
        i = a.shared.pending;
    if (null !== i) {
        a.shared.pending = null;
        var u = i,
            s = u.next;
        (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
        var c = e.alternate;
        null !== c &&
            (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
            (null === i ? (c.firstBaseUpdate = s) : (i.next = s), (c.lastBaseUpdate = u));
    }
    if (null !== l) {
        var f = a.baseState;
        for (o = 0, c = s = u = null, i = l; ; ) {
            var d = i.lane,
                p = i.eventTime;
            if ((r & d) === d) {
                null !== c &&
                    (c = c.next =
                        { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                e: {
                    var h = e,
                        m = i;
                    switch (((d = t), (p = n), m.tag)) {
                        case 1:
                            if ('function' == typeof (h = m.payload)) {
                                f = h.call(p, f, d);
                                break e;
                            }
                            f = h;
                            break e;
                        case 3:
                            h.flags = (-65537 & h.flags) | 128;
                        case 0:
                            if (null == (d = 'function' == typeof (h = m.payload) ? h.call(p, f, d) : h)) break e;
                            f = Pt({}, f, d);
                            break e;
                        case 2:
                            Ci = !0;
                    }
                }
                null !== i.callback &&
                    0 !== i.lane &&
                    ((e.flags |= 64), null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
            } else
                (p = { eventTime: p, lane: d, tag: i.tag, payload: i.payload, callback: i.callback, next: null }),
                    null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                    (o |= d);
            if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next), (d.next = null), (a.lastBaseUpdate = d), (a.shared.pending = null);
            }
        }
        if (
            (null === c && (u = f),
            (a.baseState = u),
            (a.firstBaseUpdate = s),
            (a.lastBaseUpdate = c),
            null !== (t = a.shared.interleaved))
        ) {
            a = t;
            do {
                (o |= a.lane), (a = a.next);
            } while (a !== t);
        } else null === l && (a.shared.lanes = 0);
        (Cc |= o), (e.lanes = o), (e.memoizedState = f);
    }
}
function Fi(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                a = r.callback;
            if (null !== a) {
                if (((r.callback = null), (r = n), 'function' != typeof a)) throw Error(Ye(191, a));
                a.call(r);
            }
        }
}
var Mi = {},
    Ii = mo(Mi),
    Ai = mo(Mi),
    Di = mo(Mi);
function ji(e) {
    if (e === Mi) throw Error(Ye(174));
    return e;
}
function Ui(e, t) {
    switch ((vo(Di, t), vo(Ai, e), vo(Ii, Mi), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Zt(null, '');
            break;
        default:
            t = Zt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    go(Ii), vo(Ii, t);
}
function $i() {
    go(Ii), go(Ai), go(Di);
}
function Vi(e) {
    ji(Di.current);
    var t = ji(Ii.current),
        n = Zt(t, e.type);
    t !== n && (vo(Ai, e), vo(Ii, n));
}
function Bi(e) {
    Ai.current === e && (go(Ii), go(Ai));
}
var Hi = mo(0);
function Wi(e) {
    for (var t = e; null !== t; ) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Qi = [];
function qi() {
    for (var e = 0; e < Qi.length; e++) Qi[e]._workInProgressVersionPrimary = null;
    Qi.length = 0;
}
var Ki = ct.ReactCurrentDispatcher,
    Yi = ct.ReactCurrentBatchConfig,
    Xi = 0,
    Gi = null,
    Zi = null,
    Ji = null,
    eu = !1,
    tu = !1,
    nu = 0,
    ru = 0;
function au() {
    throw Error(Ye(321));
}
function lu(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ga(e[n], t[n])) return !1;
    return !0;
}
function ou(e, t, n, r, a, l) {
    if (
        ((Xi = l),
        (Gi = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ki.current = null === e || null === e.memoizedState ? Bu : Hu),
        (e = n(r, a)),
        tu)
    ) {
        l = 0;
        do {
            if (((tu = !1), (nu = 0), 25 <= l)) throw Error(Ye(301));
            (l += 1), (Ji = Zi = null), (t.updateQueue = null), (Ki.current = Wu), (e = n(r, a));
        } while (tu);
    }
    if (((Ki.current = Vu), (t = null !== Zi && null !== Zi.next), (Xi = 0), (Ji = Zi = Gi = null), (eu = !1), t))
        throw Error(Ye(300));
    return e;
}
function iu() {
    var e = 0 !== nu;
    return (nu = 0), e;
}
function uu() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return null === Ji ? (Gi.memoizedState = Ji = e) : (Ji = Ji.next = e), Ji;
}
function su() {
    if (null === Zi) {
        var e = Gi.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = Zi.next;
    var t = null === Ji ? Gi.memoizedState : Ji.next;
    if (null !== t) (Ji = t), (Zi = e);
    else {
        if (null === e) throw Error(Ye(310));
        (e = {
            memoizedState: (Zi = e).memoizedState,
            baseState: Zi.baseState,
            baseQueue: Zi.baseQueue,
            queue: Zi.queue,
            next: null,
        }),
            null === Ji ? (Gi.memoizedState = Ji = e) : (Ji = Ji.next = e);
    }
    return Ji;
}
function cu(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function fu(e) {
    var t = su(),
        n = t.queue;
    if (null === n) throw Error(Ye(311));
    n.lastRenderedReducer = e;
    var r = Zi,
        a = r.baseQueue,
        l = n.pending;
    if (null !== l) {
        if (null !== a) {
            var o = a.next;
            (a.next = l.next), (l.next = o);
        }
        (r.baseQueue = a = l), (n.pending = null);
    }
    if (null !== a) {
        (l = a.next), (r = r.baseState);
        var i = (o = null),
            u = null,
            s = l;
        do {
            var c = s.lane;
            if ((Xi & c) === c)
                null !== u &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: s.action,
                            hasEagerState: s.hasEagerState,
                            eagerState: s.eagerState,
                            next: null,
                        }),
                    (r = s.hasEagerState ? s.eagerState : e(r, s.action));
            else {
                var f = {
                    lane: c,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                };
                null === u ? ((i = u = f), (o = r)) : (u = u.next = f), (Gi.lanes |= c), (Cc |= c);
            }
            s = s.next;
        } while (null !== s && s !== l);
        null === u ? (o = r) : (u.next = i),
            Ga(r, t.memoizedState) || (ss = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (null !== (e = n.interleaved)) {
        a = e;
        do {
            (l = a.lane), (Gi.lanes |= l), (Cc |= l), (a = a.next);
        } while (a !== e);
    } else null === a && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function du(e) {
    var t = su(),
        n = t.queue;
    if (null === n) throw Error(Ye(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        a = n.pending,
        l = t.memoizedState;
    if (null !== a) {
        n.pending = null;
        var o = (a = a.next);
        do {
            (l = e(l, o.action)), (o = o.next);
        } while (o !== a);
        Ga(l, t.memoizedState) || (ss = !0),
            (t.memoizedState = l),
            null === t.baseQueue && (t.baseState = l),
            (n.lastRenderedState = l);
    }
    return [l, r];
}
function pu() {}
function hu(e, t) {
    var n = Gi,
        r = su(),
        a = t(),
        l = !Ga(r.memoizedState, a);
    if (
        (l && ((r.memoizedState = a), (ss = !0)),
        (r = r.queue),
        Cu(vu.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || (null !== Ji && 1 & Ji.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), ku(9, gu.bind(null, n, r, a, t), void 0, null), null === bc)) throw Error(Ye(349));
        0 != (30 & Xi) || mu(n, t, a);
    }
    return a;
}
function mu(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Gi.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Gi.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
}
function gu(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), yu(t) && bu(e);
}
function vu(e, t, n) {
    return n(function () {
        yu(t) && bu(e);
    });
}
function yu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ga(e, n);
    } catch (r) {
        return !0;
    }
}
function bu(e) {
    var t = _i(e, 1);
    null !== t && Qc(t, e, 1, -1);
}
function wu(e) {
    var t = uu();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: cu,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Du.bind(null, Gi, e)),
        [t.memoizedState, e]
    );
}
function ku(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Gi.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Gi.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function Su() {
    return su().memoizedState;
}
function xu(e, t, n, r) {
    var a = uu();
    (Gi.flags |= e), (a.memoizedState = ku(1 | t, n, void 0, void 0 === r ? null : r));
}
function Eu(e, t, n, r) {
    var a = su();
    r = void 0 === r ? null : r;
    var l = void 0;
    if (null !== Zi) {
        var o = Zi.memoizedState;
        if (((l = o.destroy), null !== r && lu(r, o.deps))) return void (a.memoizedState = ku(t, n, l, r));
    }
    (Gi.flags |= e), (a.memoizedState = ku(1 | t, n, l, r));
}
function _u(e, t) {
    return xu(8390656, 8, e, t);
}
function Cu(e, t) {
    return Eu(2048, 8, e, t);
}
function Pu(e, t) {
    return Eu(4, 2, e, t);
}
function Nu(e, t) {
    return Eu(4, 4, e, t);
}
function zu(e, t) {
    return 'function' == typeof t
        ? ((e = e()),
          t(e),
          function () {
              t(null);
          })
        : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
                t.current = null;
            })
          : void 0;
}
function Tu(e, t, n) {
    return (n = null != n ? n.concat([e]) : null), Eu(4, 4, zu.bind(null, t, e), n);
}
function Ou() {}
function Ru(e, t) {
    var n = su();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && lu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Lu(e, t) {
    var n = su();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && lu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fu(e, t, n) {
    return 0 == (21 & Xi)
        ? (e.baseState && ((e.baseState = !1), (ss = !0)), (e.memoizedState = n))
        : (Ga(n, t) || ((n = or()), (Gi.lanes |= n), (Cc |= n), (e.baseState = !0)), t);
}
function Mu(e, t) {
    var n = cr;
    (cr = 0 !== n && 4 > n ? n : 4), e(!0);
    var r = Yi.transition;
    Yi.transition = {};
    try {
        e(!1), t();
    } finally {
        (cr = n), (Yi.transition = r);
    }
}
function Iu() {
    return su().memoizedState;
}
function Au(e, t, n) {
    var r = Wc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ju(e))) Uu(t, n);
    else if (null !== (n = Ei(e, t, n, r))) {
        Qc(n, e, r, Hc()), $u(n, t, r);
    }
}
function Du(e, t, n) {
    var r = Wc(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ju(e)) Uu(t, a);
    else {
        var l = e.alternate;
        if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), Ga(i, o))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((a.next = a), xi(t)) : ((a.next = u.next), (u.next = a)), void (t.interleaved = a)
                    );
                }
            } catch (s) {}
        null !== (n = Ei(e, t, a, r)) && (Qc(n, e, r, (a = Hc())), $u(n, t, r));
    }
}
function ju(e) {
    var t = e.alternate;
    return e === Gi || (null !== t && t === Gi);
}
function Uu(e, t) {
    tu = eu = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function $u(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), sr(e, n);
    }
}
var Vu = {
        readContext: ki,
        useCallback: au,
        useContext: au,
        useEffect: au,
        useImperativeHandle: au,
        useInsertionEffect: au,
        useLayoutEffect: au,
        useMemo: au,
        useReducer: au,
        useRef: au,
        useState: au,
        useDebugValue: au,
        useDeferredValue: au,
        useTransition: au,
        useMutableSource: au,
        useSyncExternalStore: au,
        useId: au,
        unstable_isNewReconciler: !1,
    },
    Bu = {
        readContext: ki,
        useCallback: function (e, t) {
            return (uu().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: ki,
        useEffect: _u,
        useImperativeHandle: function (e, t, n) {
            return (n = null != n ? n.concat([e]) : null), xu(4194308, 4, zu.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return xu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return xu(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = uu();
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = uu();
            return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Au.bind(null, Gi, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return (e = { current: e }), (uu().memoizedState = e);
        },
        useState: wu,
        useDebugValue: Ou,
        useDeferredValue: function (e) {
            return (uu().memoizedState = e);
        },
        useTransition: function () {
            var e = wu(!1),
                t = e[0];
            return (e = Mu.bind(null, e[1])), (uu().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Gi,
                a = uu();
            if (Yo) {
                if (void 0 === n) throw Error(Ye(407));
                n = n();
            } else {
                if (((n = t()), null === bc)) throw Error(Ye(349));
                0 != (30 & Xi) || mu(r, t, n);
            }
            a.memoizedState = n;
            var l = { value: n, getSnapshot: t };
            return (
                (a.queue = l),
                _u(vu.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                ku(9, gu.bind(null, r, l, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = uu(),
                t = bc.identifierPrefix;
            if (Yo) {
                var n = Vo;
                (t = ':' + t + 'R' + (n = ($o & ~(1 << (32 - Gn($o) - 1))).toString(32) + n)),
                    0 < (n = nu++) && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else t = ':' + t + 'r' + (n = ru++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Hu = {
        readContext: ki,
        useCallback: Ru,
        useContext: ki,
        useEffect: Cu,
        useImperativeHandle: Tu,
        useInsertionEffect: Pu,
        useLayoutEffect: Nu,
        useMemo: Lu,
        useReducer: fu,
        useRef: Su,
        useState: function () {
            return fu(cu);
        },
        useDebugValue: Ou,
        useDeferredValue: function (e) {
            return Fu(su(), Zi.memoizedState, e);
        },
        useTransition: function () {
            return [fu(cu)[0], su().memoizedState];
        },
        useMutableSource: pu,
        useSyncExternalStore: hu,
        useId: Iu,
        unstable_isNewReconciler: !1,
    },
    Wu = {
        readContext: ki,
        useCallback: Ru,
        useContext: ki,
        useEffect: Cu,
        useImperativeHandle: Tu,
        useInsertionEffect: Pu,
        useLayoutEffect: Nu,
        useMemo: Lu,
        useReducer: du,
        useRef: Su,
        useState: function () {
            return du(cu);
        },
        useDebugValue: Ou,
        useDeferredValue: function (e) {
            var t = su();
            return null === Zi ? (t.memoizedState = e) : Fu(t, Zi.memoizedState, e);
        },
        useTransition: function () {
            return [du(cu)[0], su().memoizedState];
        },
        useMutableSource: pu,
        useSyncExternalStore: hu,
        useId: Iu,
        unstable_isNewReconciler: !1,
    };
function Qu(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = Pt({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function qu(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : Pt({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
}
var Ku = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && Ln(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Hc(),
            a = Wc(e),
            l = zi(r, a);
        (l.payload = t), null != n && (l.callback = n), null !== (t = Ti(e, l, a)) && (Qc(t, e, a, r), Oi(t, e, a));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Hc(),
            a = Wc(e),
            l = zi(r, a);
        (l.tag = 1),
            (l.payload = t),
            null != n && (l.callback = n),
            null !== (t = Ti(e, l, a)) && (Qc(t, e, a, r), Oi(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Hc(),
            r = Wc(e),
            a = zi(n, r);
        (a.tag = 2), null != t && (a.callback = t), null !== (t = Ti(e, a, r)) && (Qc(t, e, r, n), Oi(t, e, r));
    },
};
function Yu(e, t, n, r, a, l, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, l, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !Za(n, r) || !Za(a, l);
}
function Xu(e, t, n) {
    var r = !1,
        a = yo,
        l = t.contextType;
    return (
        'object' == typeof l && null !== l
            ? (l = ki(l))
            : ((a = xo(t) ? ko : bo.current), (l = (r = null != (r = t.contextTypes)) ? So(e, a) : yo)),
        (t = new t(n, l)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Ku),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
    );
}
function Gu(e, t, n, r) {
    (e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ku.enqueueReplaceState(t, t.state, null);
}
function Zu(e, t, n, r) {
    var a = e.stateNode;
    (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Pi(e);
    var l = t.contextType;
    'object' == typeof l && null !== l ? (a.context = ki(l)) : ((l = xo(t) ? ko : bo.current), (a.context = So(e, l))),
        (a.state = e.memoizedState),
        'function' == typeof (l = t.getDerivedStateFromProps) && (qu(e, t, l, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof a.getSnapshotBeforeUpdate ||
            ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
            ((t = a.state),
            'function' == typeof a.componentWillMount && a.componentWillMount(),
            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
            t !== a.state && Ku.enqueueReplaceState(a, a.state, null),
            Li(e, n, a, r),
            (a.state = e.memoizedState)),
        'function' == typeof a.componentDidMount && (e.flags |= 4194308);
}
function Ju(e, t) {
    try {
        var n = '',
            r = t;
        do {
            (n += Ot(r)), (r = r.return);
        } while (r);
        var a = n;
    } catch (l) {
        a = '\nError generating stack: ' + l.message + '\n' + l.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
}
function es(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function ts(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var ns = 'function' == typeof WeakMap ? WeakMap : Map;
function rs(e, t, n) {
    ((n = zi(-1, n)).tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Fc || ((Fc = !0), (Mc = r)), ts(0, t);
        }),
        n
    );
}
function as(e, t, n) {
    (n = zi(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var a = t.value;
        (n.payload = function () {
            return r(a);
        }),
            (n.callback = function () {
                ts(0, t);
            });
    }
    var l = e.stateNode;
    return (
        null !== l &&
            'function' == typeof l.componentDidCatch &&
            (n.callback = function () {
                ts(0, t), 'function' != typeof r && (null === Ic ? (Ic = new Set([this])) : Ic.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function ls(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new ns();
        var a = new Set();
        r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = gf.bind(null, e, t, n)), t.then(e, e));
}
function os(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function is(e, t, n, r, a) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = zi(-1, 1)).tag = 2), Ti(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = a), e);
}
var us = ct.ReactCurrentOwner,
    ss = !1;
function cs(e, t, n, r) {
    t.child = null === e ? di(t, null, n, r) : fi(t, e.child, n, r);
}
function fs(e, t, n, r, a) {
    n = n.render;
    var l = t.ref;
    return (
        wi(t, a),
        (r = ou(e, t, n, r, l, a)),
        (n = iu()),
        null === e || ss
            ? (Yo && n && Wo(t), (t.flags |= 1), cs(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Fs(e, t, a))
    );
}
function ds(e, t, n, r, a) {
    if (null === e) {
        var l = n.type;
        return 'function' != typeof l ||
            xf(l) ||
            void 0 !== l.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = _f(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = l), ps(e, t, l, r, a));
    }
    if (((l = e.child), 0 == (e.lanes & a))) {
        var o = l.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Za)(o, r) && e.ref === t.ref) return Fs(e, t, a);
    }
    return (t.flags |= 1), ((e = Ef(l, r)).ref = t.ref), (e.return = t), (t.child = e);
}
function ps(e, t, n, r, a) {
    if (null !== e) {
        var l = e.memoizedProps;
        if (Za(l, r) && e.ref === t.ref) {
            if (((ss = !1), (t.pendingProps = r = l), 0 == (e.lanes & a))) return (t.lanes = e.lanes), Fs(e, t, a);
            0 != (131072 & e.flags) && (ss = !0);
        }
    }
    return gs(e, t, n, r, a);
}
function hs(e, t, n) {
    var r = t.pendingProps,
        a = r.children,
        l = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), vo(xc, Sc), (Sc |= n);
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== l ? l.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    vo(xc, Sc),
                    (Sc |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== l ? l.baseLanes : n),
                vo(xc, Sc),
                (Sc |= r);
        }
    else null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), vo(xc, Sc), (Sc |= r);
    return cs(e, t, a, n), t.child;
}
function ms(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function gs(e, t, n, r, a) {
    var l = xo(n) ? ko : bo.current;
    return (
        (l = So(t, l)),
        wi(t, a),
        (n = ou(e, t, n, r, l, a)),
        (r = iu()),
        null === e || ss
            ? (Yo && r && Wo(t), (t.flags |= 1), cs(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Fs(e, t, a))
    );
}
function vs(e, t, n, r, a) {
    if (xo(n)) {
        var l = !0;
        Po(t);
    } else l = !1;
    if ((wi(t, a), null === t.stateNode)) Ls(e, t), Xu(t, n, r), Zu(t, n, r, a), (r = !0);
    else if (null === e) {
        var o = t.stateNode,
            i = t.memoizedProps;
        o.props = i;
        var u = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = ki(s)) : (s = So(t, (s = xo(n) ? ko : bo.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((i !== r || u !== s) && Gu(t, o, r, s)),
            (Ci = !1);
        var d = t.memoizedState;
        (o.state = d),
            Li(t, r, o, a),
            (u = t.memoizedState),
            i !== r || d !== u || wo.current || Ci
                ? ('function' == typeof c && (qu(t, n, c, r), (u = t.memoizedState)),
                  (i = Ci || Yu(t, n, i, r, d, u, s))
                      ? (f ||
                            ('function' != typeof o.UNSAFE_componentWillMount &&
                                'function' != typeof o.componentWillMount) ||
                            ('function' == typeof o.componentWillMount && o.componentWillMount(),
                            'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                        'function' == typeof o.componentDidMount && (t.flags |= 4194308))
                      : ('function' == typeof o.componentDidMount && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ('function' == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1));
    } else {
        (o = t.stateNode),
            Ni(e, t),
            (i = t.memoizedProps),
            (s = t.type === t.elementType ? i : Qu(t.type, i)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = ki(u))
                : (u = So(t, (u = xo(n) ? ko : bo.current)));
        var p = n.getDerivedStateFromProps;
        (c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((i !== f || d !== u) && Gu(t, o, r, u)),
            (Ci = !1),
            (d = t.memoizedState),
            (o.state = d),
            Li(t, r, o, a);
        var h = t.memoizedState;
        i !== f || d !== h || wo.current || Ci
            ? ('function' == typeof p && (qu(t, n, p, r), (h = t.memoizedState)),
              (s = Ci || Yu(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                        ('function' != typeof o.UNSAFE_componentWillUpdate &&
                            'function' != typeof o.componentWillUpdate) ||
                        ('function' == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u),
                        'function' == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)),
                    'function' == typeof o.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' != typeof o.componentDidUpdate ||
                        (i === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    'function' != typeof o.getSnapshotBeforeUpdate ||
                        (i === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
              (o.props = r),
              (o.state = h),
              (o.context = u),
              (r = s))
            : ('function' != typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              'function' != typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return ys(e, t, n, r, l, a);
}
function ys(e, t, n, r, a, l) {
    ms(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return a && No(t, n, !1), Fs(e, t, l);
    (r = t.stateNode), (us.current = t);
    var i = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = fi(t, e.child, null, l)), (t.child = fi(t, null, i, l))) : cs(e, t, i, l),
        (t.memoizedState = r.state),
        a && No(t, n, !0),
        t.child
    );
}
function bs(e) {
    var t = e.stateNode;
    t.pendingContext ? _o(0, t.pendingContext, t.pendingContext !== t.context) : t.context && _o(0, t.context, !1),
        Ui(e, t.containerInfo);
}
function ws(e, t, n, r, a) {
    return ai(), li(a), (t.flags |= 256), cs(e, t, n, r), t.child;
}
var ks,
    Ss,
    xs,
    Es,
    _s = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Ps(e, t, n) {
    var r,
        a = t.pendingProps,
        l = Hi.current,
        o = !1,
        i = 0 != (128 & t.flags);
    if (
        ((r = i) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (l |= 1),
        vo(Hi, 1 & l),
        null === e)
    )
        return (
            ei(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
                : ((i = a.children),
                  (e = a.fallback),
                  o
                      ? ((a = t.mode),
                        (o = t.child),
                        (i = { mode: 'hidden', children: i }),
                        0 == (1 & a) && null !== o
                            ? ((o.childLanes = 0), (o.pendingProps = i))
                            : (o = Pf(i, a, 0, null)),
                        (e = Cf(e, a, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Cs(n)),
                        (t.memoizedState = _s),
                        e)
                      : Ns(t, i))
        );
    if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
        return (function (e, t, n, r, a, l, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), zs(e, t, o, (r = es(Error(Ye(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((l = r.fallback),
                        (a = t.mode),
                        (r = Pf({ mode: 'visible', children: r.children }, a, 0, null)),
                        ((l = Cf(l, a, o, null)).flags |= 2),
                        (r.return = t),
                        (l.return = t),
                        (r.sibling = l),
                        (t.child = r),
                        0 != (1 & t.mode) && fi(t, e.child, null, o),
                        (t.child.memoizedState = Cs(o)),
                        (t.memoizedState = _s),
                        l);
            if (0 == (1 & t.mode)) return zs(e, t, o, null);
            if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var i = r.dgst;
                return (r = i), zs(e, t, o, (r = es((l = Error(Ye(419))), r, void 0)));
            }
            if (((i = 0 != (o & e.childLanes)), ss || i)) {
                if (null !== (r = bc)) {
                    switch (o & -o) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default:
                            a = 0;
                    }
                    0 !== (a = 0 != (a & (r.suspendedLanes | o)) ? 0 : a) &&
                        a !== l.retryLane &&
                        ((l.retryLane = a), _i(e, a), Qc(r, e, a, -1));
                }
                return lf(), zs(e, t, o, (r = es(Error(Ye(421)))));
            }
            return '$?' === a.data
                ? ((t.flags |= 128), (t.child = e.child), (t = yf.bind(null, e)), (a._reactRetry = t), null)
                : ((e = l.treeContext),
                  (Ko = Jl(a.nextSibling)),
                  (qo = t),
                  (Yo = !0),
                  (Xo = null),
                  null !== e &&
                      ((Do[jo++] = $o), (Do[jo++] = Vo), (Do[jo++] = Uo), ($o = e.id), (Vo = e.overflow), (Uo = t)),
                  (t = Ns(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, i, a, r, l, n);
    if (o) {
        (o = a.fallback), (i = t.mode), (r = (l = e.child).sibling);
        var u = { mode: 'hidden', children: a.children };
        return (
            0 == (1 & i) && t.child !== l
                ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
                : ((a = Ef(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
            null !== r ? (o = Ef(r, o)) : ((o = Cf(o, i, n, null)).flags |= 2),
            (o.return = t),
            (a.return = t),
            (a.sibling = o),
            (t.child = a),
            (a = o),
            (o = t.child),
            (i =
                null === (i = e.child.memoizedState)
                    ? Cs(n)
                    : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = _s),
            a
        );
    }
    return (
        (e = (o = e.child).sibling),
        (a = Ef(o, { mode: 'visible', children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
    );
}
function Ns(e, t) {
    return ((t = Pf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t);
}
function zs(e, t, n, r) {
    return (
        null !== r && li(r),
        fi(t, e.child, null, n),
        ((e = Ns(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Ts(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), bi(e.return, t, n);
}
function Os(e, t, n, r, a) {
    var l = e.memoizedState;
    null === l
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a })
        : ((l.isBackwards = t),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = n),
          (l.tailMode = a));
}
function Rs(e, t, n) {
    var r = t.pendingProps,
        a = r.revealOrder,
        l = r.tail;
    if ((cs(e, t, r.children, n), 0 != (2 & (r = Hi.current)))) (r = (1 & r) | 2), (t.flags |= 128);
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ts(e, n, t);
                else if (19 === e.tag) Ts(e, n, t);
                else if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((vo(Hi, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (a) {
            case 'forwards':
                for (n = t.child, a = null; null !== n; )
                    null !== (e = n.alternate) && null === Wi(e) && (a = n), (n = n.sibling);
                null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                    Os(t, !1, a, n, l);
                break;
            case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === Wi(e)) {
                        t.child = a;
                        break;
                    }
                    (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Os(t, !0, n, null, l);
                break;
            case 'together':
                Os(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Ls(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Fs(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (Cc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Ye(153));
    if (null !== t.child) {
        for (n = Ef((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = Ef(e, e.pendingProps)).return = t);
        n.sibling = null;
    }
    return t.child;
}
function Ms(e, t) {
    if (!Yo)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function Is(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var a = e.child; null !== a; )
            (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
    else
        for (a = e.child; null !== a; )
            (n |= a.lanes | a.childLanes), (r |= a.subtreeFlags), (r |= a.flags), (a.return = e), (a = a.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function As(e, t, n) {
    var r = t.pendingProps;
    switch ((Qo(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Is(t), null;
        case 1:
        case 17:
            return xo(t.type) && Eo(), Is(t), null;
        case 3:
            return (
                (r = t.stateNode),
                $i(),
                go(wo),
                go(bo),
                qi(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (ni(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== Xo && (Xc(Xo), (Xo = null)))),
                Ss(e, t),
                Is(t),
                null
            );
        case 5:
            Bi(t);
            var a = ji(Di.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                xs(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Ye(166));
                    return Is(t), null;
                }
                if (((e = ji(Ii.current)), ni(t))) {
                    (r = t.stateNode), (n = t.type);
                    var l = t.memoizedProps;
                    switch (((r[no] = t), (r[ro] = l), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            zl('cancel', r), zl('close', r);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            zl('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (a = 0; a < _l.length; a++) zl(_l[a], r);
                            break;
                        case 'source':
                            zl('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            zl('error', r), zl('load', r);
                            break;
                        case 'details':
                            zl('toggle', r);
                            break;
                        case 'input':
                            Ut(r, l), zl('invalid', r);
                            break;
                        case 'select':
                            (r._wrapperState = { wasMultiple: !!l.multiple }), zl('invalid', r);
                            break;
                        case 'textarea':
                            Kt(r, l), zl('invalid', r);
                    }
                    for (var o in (sn(n, l), (a = null), l))
                        if (l.hasOwnProperty(o)) {
                            var i = l[o];
                            'children' === o
                                ? 'string' == typeof i
                                    ? r.textContent !== i &&
                                      (!0 !== l.suppressHydrationWarning && Vl(r.textContent, i, e),
                                      (a = ['children', i]))
                                    : 'number' == typeof i &&
                                      r.textContent !== '' + i &&
                                      (!0 !== l.suppressHydrationWarning && Vl(r.textContent, i, e),
                                      (a = ['children', '' + i]))
                                : Ge.hasOwnProperty(o) && null != i && 'onScroll' === o && zl('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            It(r), Bt(r, l, !0);
                            break;
                        case 'textarea':
                            It(r), Xt(r);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof l.onClick && (r.onclick = Bl);
                    }
                    (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                    (o = 9 === a.nodeType ? a : a.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = Gt(n)),
                        'http://www.w3.org/1999/xhtml' === e
                            ? 'script' === n
                                ? (((e = o.createElement('div')).innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : 'string' == typeof r.is
                                  ? (e = o.createElement(n, { is: r.is }))
                                  : ((e = o.createElement(n)),
                                    'select' === n &&
                                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[no] = t),
                        (e[ro] = r),
                        ks(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = cn(n, r)), n)) {
                            case 'dialog':
                                zl('cancel', e), zl('close', e), (a = r);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                zl('load', e), (a = r);
                                break;
                            case 'video':
                            case 'audio':
                                for (a = 0; a < _l.length; a++) zl(_l[a], e);
                                a = r;
                                break;
                            case 'source':
                                zl('error', e), (a = r);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                zl('error', e), zl('load', e), (a = r);
                                break;
                            case 'details':
                                zl('toggle', e), (a = r);
                                break;
                            case 'input':
                                Ut(e, r), (a = jt(e, r)), zl('invalid', e);
                                break;
                            case 'option':
                            default:
                                a = r;
                                break;
                            case 'select':
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (a = Pt({}, r, { value: void 0 })),
                                    zl('invalid', e);
                                break;
                            case 'textarea':
                                Kt(e, r), (a = qt(e, r)), zl('invalid', e);
                        }
                        for (l in (sn(n, a), (i = a)))
                            if (i.hasOwnProperty(l)) {
                                var u = i[l];
                                'style' === l
                                    ? on(e, u)
                                    : 'dangerouslySetInnerHTML' === l
                                      ? null != (u = u ? u.__html : void 0) && tn(e, u)
                                      : 'children' === l
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && nn(e, u)
                                            : 'number' == typeof u && nn(e, '' + u)
                                        : 'suppressContentEditableWarning' !== l &&
                                          'suppressHydrationWarning' !== l &&
                                          'autoFocus' !== l &&
                                          (Ge.hasOwnProperty(l)
                                              ? null != u && 'onScroll' === l && zl('scroll', e)
                                              : null != u && st(e, l, u, o));
                            }
                        switch (n) {
                            case 'input':
                                It(e), Bt(e, r, !1);
                                break;
                            case 'textarea':
                                It(e), Xt(e);
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Ft(r.value));
                                break;
                            case 'select':
                                (e.multiple = !!r.multiple),
                                    null != (l = r.value)
                                        ? Qt(e, !!r.multiple, l, !1)
                                        : null != r.defaultValue && Qt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                'function' == typeof a.onClick && (e.onclick = Bl);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                r = !!r.autoFocus;
                                break e;
                            case 'img':
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Is(t), null;
        case 6:
            if (e && null != t.stateNode) Es(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Ye(166));
                if (((n = ji(Di.current)), ji(Ii.current), ni(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[no] = t),
                        (l = r.nodeValue !== n) && null !== (e = qo))
                    )
                        switch (e.tag) {
                            case 3:
                                Vl(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Vl(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    l && (t.flags |= 4);
                } else ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[no] = t), (t.stateNode = r);
            }
            return Is(t), null;
        case 13:
            if (
                (go(Hi),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Yo && null !== Ko && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    ri(), ai(), (t.flags |= 98560), (l = !1);
                else if (((l = ni(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!l) throw Error(Ye(318));
                        if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(Ye(317));
                        l[no] = t;
                    } else ai(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                    Is(t), (l = !1);
                } else null !== Xo && (Xc(Xo), (Xo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Hi.current) ? 0 === Ec && (Ec = 3) : lf())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Is(t),
                  null);
        case 4:
            return $i(), Ss(e, t), null === e && Rl(t.stateNode.containerInfo), Is(t), null;
        case 10:
            return yi(t.type._context), Is(t), null;
        case 19:
            if ((go(Hi), null === (l = t.memoizedState))) return Is(t), null;
            if (((r = 0 != (128 & t.flags)), null === (o = l.rendering)))
                if (r) Ms(l, !1);
                else {
                    if (0 !== Ec || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = Wi(e))) {
                                for (
                                    t.flags |= 128,
                                        Ms(l, !1),
                                        null !== (r = o.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    null !== n;

                                )
                                    (e = r),
                                        ((l = n).flags &= 14680066),
                                        null === (o = l.alternate)
                                            ? ((l.childLanes = 0),
                                              (l.lanes = e),
                                              (l.child = null),
                                              (l.subtreeFlags = 0),
                                              (l.memoizedProps = null),
                                              (l.memoizedState = null),
                                              (l.updateQueue = null),
                                              (l.dependencies = null),
                                              (l.stateNode = null))
                                            : ((l.childLanes = o.childLanes),
                                              (l.lanes = o.lanes),
                                              (l.child = o.child),
                                              (l.subtreeFlags = 0),
                                              (l.deletions = null),
                                              (l.memoizedProps = o.memoizedProps),
                                              (l.memoizedState = o.memoizedState),
                                              (l.updateQueue = o.updateQueue),
                                              (l.type = o.type),
                                              (e = o.dependencies),
                                              (l.dependencies =
                                                  null === e
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return vo(Hi, (1 & Hi.current) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    null !== l.tail && Vn() > Rc && ((t.flags |= 128), (r = !0), Ms(l, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Wi(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Ms(l, !0),
                            null === l.tail && 'hidden' === l.tailMode && !o.alternate && !Yo)
                        )
                            return Is(t), null;
                    } else
                        2 * Vn() - l.renderingStartTime > Rc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Ms(l, !1), (t.lanes = 4194304));
                l.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = l.last) ? (n.sibling = o) : (t.child = o), (l.last = o));
            }
            return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Vn()),
                  (t.sibling = null),
                  (n = Hi.current),
                  vo(Hi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Is(t), null);
        case 22:
        case 23:
            return (
                tf(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & Sc) && (Is(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Is(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Ye(156, t.tag));
}
function Ds(e, t) {
    switch ((Qo(t), t.tag)) {
        case 1:
            return xo(t.type) && Eo(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 3:
            return (
                $i(),
                go(wo),
                go(bo),
                qi(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return Bi(t), null;
        case 13:
            if ((go(Hi), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Ye(340));
                ai();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return go(Hi), null;
        case 4:
            return $i(), null;
        case 10:
            return yi(t.type._context), null;
        case 22:
        case 23:
            return tf(), null;
        default:
            return null;
    }
}
(ks = function (e, t) {
    for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
}),
    (Ss = function () {}),
    (xs = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
            (e = t.stateNode), ji(Ii.current);
            var l,
                o = null;
            switch (n) {
                case 'input':
                    (a = jt(e, a)), (r = jt(e, r)), (o = []);
                    break;
                case 'select':
                    (a = Pt({}, a, { value: void 0 })), (r = Pt({}, r, { value: void 0 })), (o = []);
                    break;
                case 'textarea':
                    (a = qt(e, a)), (r = qt(e, r)), (o = []);
                    break;
                default:
                    'function' != typeof a.onClick && 'function' == typeof r.onClick && (e.onclick = Bl);
            }
            for (s in (sn(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                    if ('style' === s) {
                        var i = a[s];
                        for (l in i) i.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== s &&
                            'children' !== s &&
                            'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (Ge.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
            for (s in r) {
                var u = r[s];
                if (((i = null != a ? a[s] : void 0), r.hasOwnProperty(s) && u !== i && (null != u || null != i)))
                    if ('style' === s)
                        if (i) {
                            for (l in i)
                                !i.hasOwnProperty(l) || (u && u.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
                            for (l in u) u.hasOwnProperty(l) && i[l] !== u[l] && (n || (n = {}), (n[l] = u[l]));
                        } else n || (o || (o = []), o.push(s, n)), (n = u);
                    else
                        'dangerouslySetInnerHTML' === s
                            ? ((u = u ? u.__html : void 0),
                              (i = i ? i.__html : void 0),
                              null != u && i !== u && (o = o || []).push(s, u))
                            : 'children' === s
                              ? ('string' != typeof u && 'number' != typeof u) || (o = o || []).push(s, '' + u)
                              : 'suppressContentEditableWarning' !== s &&
                                'suppressHydrationWarning' !== s &&
                                (Ge.hasOwnProperty(s)
                                    ? (null != u && 'onScroll' === s && zl('scroll', e), o || i === u || (o = []))
                                    : (o = o || []).push(s, u));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (Es = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    });
var js = !1,
    Us = !1,
    $s = 'function' == typeof WeakSet ? WeakSet : Set,
    Vs = null;
function Bs(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                mf(e, t, r);
            }
        else n.current = null;
}
function Hs(e, t, n) {
    try {
        n();
    } catch (r) {
        mf(e, t, r);
    }
}
var Ws = !1;
function Qs(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
            if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && Hs(t, n, l);
            }
            a = a.next;
        } while (a !== r);
    }
}
function qs(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Ks(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
    }
}
function Ys(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), Ys(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[no], delete t[ro], delete t[lo], delete t[oo], delete t[io]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Xs(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Gs(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || Xs(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
    }
}
function Zs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        (e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Bl));
    else if (4 !== r && null !== (e = e.child))
        for (Zs(e, t, n), e = e.sibling; null !== e; ) Zs(e, t, n), (e = e.sibling);
}
function Js(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
        for (Js(e, t, n), e = e.sibling; null !== e; ) Js(e, t, n), (e = e.sibling);
}
var ec = null,
    tc = !1;
function nc(e, t, n) {
    for (n = n.child; null !== n; ) rc(e, t, n), (n = n.sibling);
}
function rc(e, t, n) {
    if (Xn && 'function' == typeof Xn.onCommitFiberUnmount)
        try {
            Xn.onCommitFiberUnmount(Yn, n);
        } catch (i) {}
    switch (n.tag) {
        case 5:
            Us || Bs(n, t);
        case 6:
            var r = ec,
                a = tc;
            (ec = null),
                nc(e, t, n),
                (tc = a),
                null !== (ec = r) &&
                    (tc
                        ? ((e = ec),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : ec.removeChild(n.stateNode));
            break;
        case 18:
            null !== ec &&
                (tc
                    ? ((e = ec),
                      (n = n.stateNode),
                      8 === e.nodeType ? Zl(e.parentNode, n) : 1 === e.nodeType && Zl(e, n),
                      Lr(e))
                    : Zl(ec, n.stateNode));
            break;
        case 4:
            (r = ec), (a = tc), (ec = n.stateNode.containerInfo), (tc = !0), nc(e, t, n), (ec = r), (tc = a);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Us && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                    var l = a,
                        o = l.destroy;
                    (l = l.tag), void 0 !== o && (0 != (2 & l) || 0 != (4 & l)) && Hs(n, t, o), (a = a.next);
                } while (a !== r);
            }
            nc(e, t, n);
            break;
        case 1:
            if (!Us && (Bs(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (i) {
                    mf(n, t, i);
                }
            nc(e, t, n);
            break;
        case 21:
            nc(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Us = (r = Us) || null !== n.memoizedState), nc(e, t, n), (Us = r)) : nc(e, t, n);
            break;
        default:
            nc(e, t, n);
    }
}
function ac(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new $s()),
            t.forEach(function (t) {
                var r = bf.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            });
    }
}
function lc(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            try {
                var l = e,
                    o = t,
                    i = o;
                e: for (; null !== i; ) {
                    switch (i.tag) {
                        case 5:
                            (ec = i.stateNode), (tc = !1);
                            break e;
                        case 3:
                        case 4:
                            (ec = i.stateNode.containerInfo), (tc = !0);
                            break e;
                    }
                    i = i.return;
                }
                if (null === ec) throw Error(Ye(160));
                rc(l, o, a), (ec = null), (tc = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
            } catch (s) {
                mf(a, t, s);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) oc(t, e), (t = t.sibling);
}
function oc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((lc(t, e), ic(e), 4 & r)) {
                try {
                    Qs(3, e, e.return), qs(3, e);
                } catch (m) {
                    mf(e, e.return, m);
                }
                try {
                    Qs(5, e, e.return);
                } catch (m) {
                    mf(e, e.return, m);
                }
            }
            break;
        case 1:
            lc(t, e), ic(e), 512 & r && null !== n && Bs(n, n.return);
            break;
        case 5:
            if ((lc(t, e), ic(e), 512 & r && null !== n && Bs(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                    nn(a, '');
                } catch (m) {
                    mf(e, e.return, m);
                }
            }
            if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : l,
                    i = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        'input' === i && 'radio' === l.type && null != l.name && $t(a, l), cn(i, o);
                        var s = cn(i, l);
                        for (o = 0; o < u.length; o += 2) {
                            var c = u[o],
                                f = u[o + 1];
                            'style' === c
                                ? on(a, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? tn(a, f)
                                  : 'children' === c
                                    ? nn(a, f)
                                    : st(a, c, f, s);
                        }
                        switch (i) {
                            case 'input':
                                Vt(a, l);
                                break;
                            case 'textarea':
                                Yt(a, l);
                                break;
                            case 'select':
                                var d = a._wrapperState.wasMultiple;
                                a._wrapperState.wasMultiple = !!l.multiple;
                                var p = l.value;
                                null != p
                                    ? Qt(a, !!l.multiple, p, !1)
                                    : d !== !!l.multiple &&
                                      (null != l.defaultValue
                                          ? Qt(a, !!l.multiple, l.defaultValue, !0)
                                          : Qt(a, !!l.multiple, l.multiple ? [] : '', !1));
                        }
                        a[ro] = l;
                    } catch (m) {
                        mf(e, e.return, m);
                    }
            }
            break;
        case 6:
            if ((lc(t, e), ic(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Ye(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                    a.nodeValue = l;
                } catch (m) {
                    mf(e, e.return, m);
                }
            }
            break;
        case 3:
            if ((lc(t, e), ic(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Lr(t.containerInfo);
                } catch (m) {
                    mf(e, e.return, m);
                }
            break;
        case 4:
        default:
            lc(t, e), ic(e);
            break;
        case 13:
            lc(t, e),
                ic(e),
                8192 & (a = e.child).flags &&
                    ((l = null !== a.memoizedState),
                    (a.stateNode.isHidden = l),
                    !l || (null !== a.alternate && null !== a.alternate.memoizedState) || (Oc = Vn())),
                4 & r && ac(e);
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Us = (s = Us) || c), lc(t, e), (Us = s)) : lc(t, e),
                ic(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (Vs = e, c = e.child; null !== c; ) {
                        for (f = Vs = c; null !== Vs; ) {
                            switch (((p = (d = Vs).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Qs(4, d, d.return);
                                    break;
                                case 1:
                                    Bs(d, d.return);
                                    var h = d.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        (r = d), (n = d.return);
                                        try {
                                            (t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount();
                                        } catch (m) {
                                            mf(r, n, m);
                                        }
                                    }
                                    break;
                                case 5:
                                    Bs(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        fc(f);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = d), (Vs = p)) : fc(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (5 === f.tag) {
                        if (null === c) {
                            c = f;
                            try {
                                (a = f.stateNode),
                                    s
                                        ? 'function' == typeof (l = a.style).setProperty
                                            ? l.setProperty('display', 'none', 'important')
                                            : (l.display = 'none')
                                        : ((i = f.stateNode),
                                          (o =
                                              null != (u = f.memoizedProps.style) && u.hasOwnProperty('display')
                                                  ? u.display
                                                  : null),
                                          (i.style.display = ln('display', o)));
                            } catch (m) {
                                mf(e, e.return, m);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = s ? '' : f.memoizedProps;
                            } catch (m) {
                                mf(e, e.return, m);
                            }
                    } else if (
                        ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                        null !== f.child
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; null === f.sibling; ) {
                        if (null === f.return || f.return === e) break e;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            lc(t, e), ic(e), 4 & r && ac(e);
        case 21:
    }
}
function ic(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (Xs(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(Ye(160));
            }
            switch (r.tag) {
                case 5:
                    var a = r.stateNode;
                    32 & r.flags && (nn(a, ''), (r.flags &= -33)), Js(e, Gs(e), a);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo;
                    Zs(e, Gs(e), l);
                    break;
                default:
                    throw Error(Ye(161));
            }
        } catch (o) {
            mf(e, e.return, o);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function uc(e, t, n) {
    (Vs = e), sc(e);
}
function sc(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Vs; ) {
        var a = Vs,
            l = a.child;
        if (22 === a.tag && r) {
            var o = null !== a.memoizedState || js;
            if (!o) {
                var i = a.alternate,
                    u = (null !== i && null !== i.memoizedState) || Us;
                i = js;
                var s = Us;
                if (((js = o), (Us = u) && !s))
                    for (Vs = a; null !== Vs; )
                        (u = (o = Vs).child),
                            22 === o.tag && null !== o.memoizedState
                                ? dc(a)
                                : null !== u
                                  ? ((u.return = o), (Vs = u))
                                  : dc(a);
                for (; null !== l; ) (Vs = l), sc(l), (l = l.sibling);
                (Vs = a), (js = i), (Us = s);
            }
            cc(e);
        } else 0 != (8772 & a.subtreeFlags) && null !== l ? ((l.return = a), (Vs = l)) : cc(e);
    }
}
function cc(e) {
    for (; null !== Vs; ) {
        var t = Vs;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Us || qs(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Us)
                                if (null === n) r.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : Qu(t.type, n.memoizedProps);
                                    r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var l = t.updateQueue;
                            null !== l && Fi(t, l, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (null !== o) {
                                if (((n = null), null !== t.child))
                                    switch (t.child.tag) {
                                        case 5:
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Fi(t, o, n);
                            }
                            break;
                        case 5:
                            var i = t.stateNode;
                            if (null === n && 4 & t.flags) {
                                n = i;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        u.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        u.src && (n.src = u.src);
                                }
                            }
                            break;
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        case 13:
                            if (null === t.memoizedState) {
                                var s = t.alternate;
                                if (null !== s) {
                                    var c = s.memoizedState;
                                    if (null !== c) {
                                        var f = c.dehydrated;
                                        null !== f && Lr(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(Ye(163));
                    }
                Us || (512 & t.flags && Ks(t));
            } catch (d) {
                mf(t, t.return, d);
            }
        }
        if (t === e) {
            Vs = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            (n.return = t.return), (Vs = n);
            break;
        }
        Vs = t.return;
    }
}
function fc(e) {
    for (; null !== Vs; ) {
        var t = Vs;
        if (t === e) {
            Vs = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            (n.return = t.return), (Vs = n);
            break;
        }
        Vs = t.return;
    }
}
function dc(e) {
    for (; null !== Vs; ) {
        var t = Vs;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        qs(4, t);
                    } catch (u) {
                        mf(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var a = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            mf(t, a, u);
                        }
                    }
                    var l = t.return;
                    try {
                        Ks(t);
                    } catch (u) {
                        mf(t, l, u);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Ks(t);
                    } catch (u) {
                        mf(t, o, u);
                    }
            }
        } catch (u) {
            mf(t, t.return, u);
        }
        if (t === e) {
            Vs = null;
            break;
        }
        var i = t.sibling;
        if (null !== i) {
            (i.return = t.return), (Vs = i);
            break;
        }
        Vs = t.return;
    }
}
var pc,
    hc = Math.ceil,
    mc = ct.ReactCurrentDispatcher,
    gc = ct.ReactCurrentOwner,
    vc = ct.ReactCurrentBatchConfig,
    yc = 0,
    bc = null,
    wc = null,
    kc = 0,
    Sc = 0,
    xc = mo(0),
    Ec = 0,
    _c = null,
    Cc = 0,
    Pc = 0,
    Nc = 0,
    zc = null,
    Tc = null,
    Oc = 0,
    Rc = 1 / 0,
    Lc = null,
    Fc = !1,
    Mc = null,
    Ic = null,
    Ac = !1,
    Dc = null,
    jc = 0,
    Uc = 0,
    $c = null,
    Vc = -1,
    Bc = 0;
function Hc() {
    return 0 != (6 & yc) ? Vn() : -1 !== Vc ? Vc : (Vc = Vn());
}
function Wc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & yc) && 0 !== kc
          ? kc & -kc
          : null !== oi.transition
            ? (0 === Bc && (Bc = or()), Bc)
            : 0 !== (e = cr)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : $r(e.type));
}
function Qc(e, t, n, r) {
    if (50 < Uc) throw ((Uc = 0), ($c = null), Error(Ye(185)));
    ur(e, n, r),
        (0 != (2 & yc) && e === bc) ||
            (e === bc && (0 == (2 & yc) && (Pc |= n), 4 === Ec && Gc(e, kc)),
            qc(e, r),
            1 === n && 0 === yc && 0 == (1 & t.mode) && ((Rc = Vn() + 500), To && Lo()));
}
function qc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
            var o = 31 - Gn(l),
                i = 1 << o,
                u = a[o];
            -1 === u ? (0 != (i & n) && 0 == (i & r)) || (a[o] = ar(i, t)) : u <= t && (e.expiredLanes |= i), (l &= ~i);
        }
    })(e, t);
    var r = rr(e, e === bc ? kc : 0);
    if (0 === r) null !== n && jn(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && jn(n), 1 === t))
            0 === e.tag
                ? (function (e) {
                      (To = !0), Ro(e);
                  })(Zc.bind(null, e))
                : Ro(Zc.bind(null, e)),
                Xl(function () {
                    0 == (6 & yc) && Lo();
                }),
                (n = null);
        else {
            switch (fr(r)) {
                case 1:
                    n = Hn;
                    break;
                case 4:
                    n = Wn;
                    break;
                case 16:
                default:
                    n = Qn;
                    break;
                case 536870912:
                    n = Kn;
            }
            n = wf(n, Kc.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Kc(e, t) {
    if (((Vc = -1), (Bc = 0), 0 != (6 & yc))) throw Error(Ye(327));
    var n = e.callbackNode;
    if (pf() && e.callbackNode !== n) return null;
    var r = rr(e, e === bc ? kc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = of(e, r);
    else {
        t = r;
        var a = yc;
        yc |= 2;
        var l = af();
        for ((bc === e && kc === t) || ((Lc = null), (Rc = Vn() + 500), nf(e, t)); ; )
            try {
                sf();
                break;
            } catch (i) {
                rf(e, i);
            }
        vi(), (mc.current = l), (yc = a), null !== wc ? (t = 0) : ((bc = null), (kc = 0), (t = Ec));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (a = lr(e)) && ((r = a), (t = Yc(e, a))), 1 === t))
            throw ((n = _c), nf(e, 0), Gc(e, r), qc(e, Vn()), n);
        if (6 === t) Gc(e, r);
        else {
            if (
                ((a = e.current.alternate),
                0 == (30 & r) &&
                    !(function (e) {
                        for (var t = e; ; ) {
                            if (16384 & t.flags) {
                                var n = t.updateQueue;
                                if (null !== n && null !== (n = n.stores))
                                    for (var r = 0; r < n.length; r++) {
                                        var a = n[r],
                                            l = a.getSnapshot;
                                        a = a.value;
                                        try {
                                            if (!Ga(l(), a)) return !1;
                                        } catch (o) {
                                            return !1;
                                        }
                                    }
                            }
                            if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
                            else {
                                if (t === e) break;
                                for (; null === t.sibling; ) {
                                    if (null === t.return || t.return === e) return !0;
                                    t = t.return;
                                }
                                (t.sibling.return = t.return), (t = t.sibling);
                            }
                        }
                        return !0;
                    })(a) &&
                    (2 === (t = of(e, r)) && 0 !== (l = lr(e)) && ((r = l), (t = Yc(e, l))), 1 === t))
            )
                throw ((n = _c), nf(e, 0), Gc(e, r), qc(e, Vn()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Ye(345));
                case 2:
                case 5:
                    df(e, Tc, Lc);
                    break;
                case 3:
                    if ((Gc(e, r), (130023424 & r) === r && 10 < (t = Oc + 500 - Vn()))) {
                        if (0 !== rr(e, 0)) break;
                        if (((a = e.suspendedLanes) & r) !== r) {
                            Hc(), (e.pingedLanes |= e.suspendedLanes & a);
                            break;
                        }
                        e.timeoutHandle = ql(df.bind(null, e, Tc, Lc), t);
                        break;
                    }
                    df(e, Tc, Lc);
                    break;
                case 4:
                    if ((Gc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                        var o = 31 - Gn(r);
                        (l = 1 << o), (o = t[o]) > a && (a = o), (r &= ~l);
                    }
                    if (
                        ((r = a),
                        10 <
                            (r =
                                (120 > (r = Vn() - r)
                                    ? 120
                                    : 480 > r
                                      ? 480
                                      : 1080 > r
                                        ? 1080
                                        : 1920 > r
                                          ? 1920
                                          : 3e3 > r
                                            ? 3e3
                                            : 4320 > r
                                              ? 4320
                                              : 1960 * hc(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = ql(df.bind(null, e, Tc, Lc), r);
                        break;
                    }
                    df(e, Tc, Lc);
                    break;
                default:
                    throw Error(Ye(329));
            }
        }
    }
    return qc(e, Vn()), e.callbackNode === n ? Kc.bind(null, e) : null;
}
function Yc(e, t) {
    var n = zc;
    return (
        e.current.memoizedState.isDehydrated && (nf(e, t).flags |= 256),
        2 !== (e = of(e, t)) && ((t = Tc), (Tc = n), null !== t && Xc(t)),
        e
    );
}
function Xc(e) {
    null === Tc ? (Tc = e) : Tc.push.apply(Tc, e);
}
function Gc(e, t) {
    for (t &= ~Nc, t &= ~Pc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Gn(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Zc(e) {
    if (0 != (6 & yc)) throw Error(Ye(327));
    pf();
    var t = rr(e, 0);
    if (0 == (1 & t)) return qc(e, Vn()), null;
    var n = of(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = lr(e);
        0 !== r && ((t = r), (n = Yc(e, r)));
    }
    if (1 === n) throw ((n = _c), nf(e, 0), Gc(e, t), qc(e, Vn()), n);
    if (6 === n) throw Error(Ye(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), df(e, Tc, Lc), qc(e, Vn()), null;
}
function Jc(e, t) {
    var n = yc;
    yc |= 1;
    try {
        return e(t);
    } finally {
        0 === (yc = n) && ((Rc = Vn() + 500), To && Lo());
    }
}
function ef(e) {
    null !== Dc && 0 === Dc.tag && 0 == (6 & yc) && pf();
    var t = yc;
    yc |= 1;
    var n = vc.transition,
        r = cr;
    try {
        if (((vc.transition = null), (cr = 1), e)) return e();
    } finally {
        (cr = r), (vc.transition = n), 0 == (6 & (yc = t)) && Lo();
    }
}
function tf() {
    (Sc = xc.current), go(xc);
}
function nf(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Kl(n)), null !== wc))
        for (n = wc.return; null !== n; ) {
            var r = n;
            switch ((Qo(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && Eo();
                    break;
                case 3:
                    $i(), go(wo), go(bo), qi();
                    break;
                case 5:
                    Bi(r);
                    break;
                case 4:
                    $i();
                    break;
                case 13:
                case 19:
                    go(Hi);
                    break;
                case 10:
                    yi(r.type._context);
                    break;
                case 22:
                case 23:
                    tf();
            }
            n = n.return;
        }
    if (
        ((bc = e),
        (wc = e = Ef(e.current, null)),
        (kc = Sc = t),
        (Ec = 0),
        (_c = null),
        (Nc = Pc = Cc = 0),
        (Tc = zc = null),
        null !== Si)
    ) {
        for (t = 0; t < Si.length; t++)
            if (null !== (r = (n = Si[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                    l = n.pending;
                if (null !== l) {
                    var o = l.next;
                    (l.next = a), (r.next = o);
                }
                n.pending = r;
            }
        Si = null;
    }
    return e;
}
function rf(e, t) {
    for (;;) {
        var n = wc;
        try {
            if ((vi(), (Ki.current = Vu), eu)) {
                for (var r = Gi.memoizedState; null !== r; ) {
                    var a = r.queue;
                    null !== a && (a.pending = null), (r = r.next);
                }
                eu = !1;
            }
            if (
                ((Xi = 0),
                (Ji = Zi = Gi = null),
                (tu = !1),
                (nu = 0),
                (gc.current = null),
                null === n || null === n.return)
            ) {
                (Ec = 1), (_c = t), (wc = null);
                break;
            }
            e: {
                var l = e,
                    o = n.return,
                    i = n,
                    u = t;
                if (((t = kc), (i.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
                    var s = u,
                        c = i,
                        f = c.tag;
                    if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                              (c.memoizedState = d.memoizedState),
                              (c.lanes = d.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var p = os(o);
                    if (null !== p) {
                        (p.flags &= -257), is(p, o, i, 0, t), 1 & p.mode && ls(l, s, t), (u = s);
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var m = new Set();
                            m.add(u), (t.updateQueue = m);
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        ls(l, s, t), lf();
                        break e;
                    }
                    u = Error(Ye(426));
                } else if (Yo && 1 & i.mode) {
                    var g = os(o);
                    if (null !== g) {
                        0 == (65536 & g.flags) && (g.flags |= 256), is(g, o, i, 0, t), li(Ju(u, i));
                        break e;
                    }
                }
                (l = u = Ju(u, i)), 4 !== Ec && (Ec = 2), null === zc ? (zc = [l]) : zc.push(l), (l = o);
                do {
                    switch (l.tag) {
                        case 3:
                            (l.flags |= 65536), (t &= -t), (l.lanes |= t), Ri(l, rs(0, u, t));
                            break e;
                        case 1:
                            i = u;
                            var v = l.type,
                                y = l.stateNode;
                            if (
                                0 == (128 & l.flags) &&
                                ('function' == typeof v.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Ic || !Ic.has(y))))
                            ) {
                                (l.flags |= 65536), (t &= -t), (l.lanes |= t), Ri(l, as(l, i, t));
                                break e;
                            }
                    }
                    l = l.return;
                } while (null !== l);
            }
            ff(n);
        } catch (b) {
            (t = b), wc === n && null !== n && (wc = n = n.return);
            continue;
        }
        break;
    }
}
function af() {
    var e = mc.current;
    return (mc.current = Vu), null === e ? Vu : e;
}
function lf() {
    (0 !== Ec && 3 !== Ec && 2 !== Ec) || (Ec = 4),
        null === bc || (0 == (268435455 & Cc) && 0 == (268435455 & Pc)) || Gc(bc, kc);
}
function of(e, t) {
    var n = yc;
    yc |= 2;
    var r = af();
    for ((bc === e && kc === t) || ((Lc = null), nf(e, t)); ; )
        try {
            uf();
            break;
        } catch (a) {
            rf(e, a);
        }
    if ((vi(), (yc = n), (mc.current = r), null !== wc)) throw Error(Ye(261));
    return (bc = null), (kc = 0), Ec;
}
function uf() {
    for (; null !== wc; ) cf(wc);
}
function sf() {
    for (; null !== wc && !Un(); ) cf(wc);
}
function cf(e) {
    var t = pc(e.alternate, e, Sc);
    (e.memoizedProps = e.pendingProps), null === t ? ff(e) : (wc = t), (gc.current = null);
}
function ff(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = As(n, t, Sc))) return void (wc = n);
        } else {
            if (null !== (n = Ds(n, t))) return (n.flags &= 32767), void (wc = n);
            if (null === e) return (Ec = 6), void (wc = null);
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        }
        if (null !== (t = t.sibling)) return void (wc = t);
        wc = t = e;
    } while (null !== t);
    0 === Ec && (Ec = 5);
}
function df(e, t, n) {
    var r = cr,
        a = vc.transition;
    try {
        (vc.transition = null),
            (cr = 1),
            (function (e, t, n, r) {
                do {
                    pf();
                } while (null !== Dc);
                if (0 != (6 & yc)) throw Error(Ye(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Ye(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                    ((function (e, t) {
                        var n = e.pendingLanes & ~t;
                        (e.pendingLanes = t),
                            (e.suspendedLanes = 0),
                            (e.pingedLanes = 0),
                            (e.expiredLanes &= t),
                            (e.mutableReadLanes &= t),
                            (e.entangledLanes &= t),
                            (t = e.entanglements);
                        var r = e.eventTimes;
                        for (e = e.expirationTimes; 0 < n; ) {
                            var a = 31 - Gn(n),
                                l = 1 << a;
                            (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                        }
                    })(e, l),
                    e === bc && ((wc = bc = null), (kc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Ac ||
                        ((Ac = !0),
                        wf(Qn, function () {
                            return pf(), null;
                        })),
                    (l = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || l)
                ) {
                    (l = vc.transition), (vc.transition = null);
                    var o = cr;
                    cr = 1;
                    var i = yc;
                    (yc |= 4),
                        (gc.current = null),
                        (function (e, t) {
                            if (((Hl = Mr), rl((e = nl())))) {
                                if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                else
                                    e: {
                                        var r =
                                            (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                                            n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var a = r.anchorOffset,
                                                l = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType, l.nodeType;
                                            } catch (w) {
                                                n = null;
                                                break e;
                                            }
                                            var o = 0,
                                                i = -1,
                                                u = -1,
                                                s = 0,
                                                c = 0,
                                                f = e,
                                                d = null;
                                            t: for (;;) {
                                                for (
                                                    var p;
                                                    f !== n || (0 !== a && 3 !== f.nodeType) || (i = o + a),
                                                        f !== l || (0 !== r && 3 !== f.nodeType) || (u = o + r),
                                                        3 === f.nodeType && (o += f.nodeValue.length),
                                                        null !== (p = f.firstChild);

                                                )
                                                    (d = f), (f = p);
                                                for (;;) {
                                                    if (f === e) break t;
                                                    if (
                                                        (d === n && ++s === a && (i = o),
                                                        d === l && ++c === r && (u = o),
                                                        null !== (p = f.nextSibling))
                                                    )
                                                        break;
                                                    d = (f = d).parentNode;
                                                }
                                                f = p;
                                            }
                                            n = -1 === i || -1 === u ? null : { start: i, end: u };
                                        } else n = null;
                                    }
                                n = n || { start: 0, end: 0 };
                            } else n = null;
                            for (Wl = { focusedElem: e, selectionRange: n }, Mr = !1, Vs = t; null !== Vs; )
                                if (((e = (t = Vs).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    (e.return = t), (Vs = e);
                                else
                                    for (; null !== Vs; ) {
                                        t = Vs;
                                        try {
                                            var h = t.alternate;
                                            if (0 != (1024 & t.flags))
                                                switch (t.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== h) {
                                                            var m = h.memoizedProps,
                                                                g = h.memoizedState,
                                                                v = t.stateNode,
                                                                y = v.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? m : Qu(t.type, m),
                                                                    g,
                                                                );
                                                            v.__reactInternalSnapshotBeforeUpdate = y;
                                                        }
                                                        break;
                                                    case 3:
                                                        var b = t.stateNode.containerInfo;
                                                        1 === b.nodeType
                                                            ? (b.textContent = '')
                                                            : 9 === b.nodeType &&
                                                              b.documentElement &&
                                                              b.removeChild(b.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(Ye(163));
                                                }
                                        } catch (w) {
                                            mf(t, t.return, w);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            (e.return = t.return), (Vs = e);
                                            break;
                                        }
                                        Vs = t.return;
                                    }
                            (h = Ws), (Ws = !1);
                        })(e, n),
                        oc(n, e),
                        al(Wl),
                        (Mr = !!Hl),
                        (Wl = Hl = null),
                        (e.current = n),
                        uc(n),
                        $n(),
                        (yc = i),
                        (cr = o),
                        (vc.transition = l);
                } else e.current = n;
                if (
                    (Ac && ((Ac = !1), (Dc = e), (jc = a)),
                    (l = e.pendingLanes),
                    0 === l && (Ic = null),
                    (function (e) {
                        if (Xn && 'function' == typeof Xn.onCommitFiberRoot)
                            try {
                                Xn.onCommitFiberRoot(Yn, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    qc(e, Vn()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Fc) throw ((Fc = !1), (e = Mc), (Mc = null), e);
                0 != (1 & jc) && 0 !== e.tag && pf(),
                    (l = e.pendingLanes),
                    0 != (1 & l) ? (e === $c ? Uc++ : ((Uc = 0), ($c = e))) : (Uc = 0),
                    Lo();
            })(e, t, n, r);
    } finally {
        (vc.transition = a), (cr = r);
    }
    return null;
}
function pf() {
    if (null !== Dc) {
        var e = fr(jc),
            t = vc.transition,
            n = cr;
        try {
            if (((vc.transition = null), (cr = 16 > e ? 16 : e), null === Dc)) var r = !1;
            else {
                if (((e = Dc), (Dc = null), (jc = 0), 0 != (6 & yc))) throw Error(Ye(331));
                var a = yc;
                for (yc |= 4, Vs = e.current; null !== Vs; ) {
                    var l = Vs,
                        o = l.child;
                    if (0 != (16 & Vs.flags)) {
                        var i = l.deletions;
                        if (null !== i) {
                            for (var u = 0; u < i.length; u++) {
                                var s = i[u];
                                for (Vs = s; null !== Vs; ) {
                                    var c = Vs;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Qs(8, c, l);
                                    }
                                    var f = c.child;
                                    if (null !== f) (f.return = c), (Vs = f);
                                    else
                                        for (; null !== Vs; ) {
                                            var d = (c = Vs).sibling,
                                                p = c.return;
                                            if ((Ys(c), c === s)) {
                                                Vs = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                (d.return = p), (Vs = d);
                                                break;
                                            }
                                            Vs = p;
                                        }
                                }
                            }
                            var h = l.alternate;
                            if (null !== h) {
                                var m = h.child;
                                if (null !== m) {
                                    h.child = null;
                                    do {
                                        var g = m.sibling;
                                        (m.sibling = null), (m = g);
                                    } while (null !== m);
                                }
                            }
                            Vs = l;
                        }
                    }
                    if (0 != (2064 & l.subtreeFlags) && null !== o) (o.return = l), (Vs = o);
                    else
                        e: for (; null !== Vs; ) {
                            if (0 != (2048 & (l = Vs).flags))
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Qs(9, l, l.return);
                                }
                            var v = l.sibling;
                            if (null !== v) {
                                (v.return = l.return), (Vs = v);
                                break e;
                            }
                            Vs = l.return;
                        }
                }
                var y = e.current;
                for (Vs = y; null !== Vs; ) {
                    var b = (o = Vs).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== b) (b.return = o), (Vs = b);
                    else
                        e: for (o = y; null !== Vs; ) {
                            if (0 != (2048 & (i = Vs).flags))
                                try {
                                    switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qs(9, i);
                                    }
                                } catch (k) {
                                    mf(i, i.return, k);
                                }
                            if (i === o) {
                                Vs = null;
                                break e;
                            }
                            var w = i.sibling;
                            if (null !== w) {
                                (w.return = i.return), (Vs = w);
                                break e;
                            }
                            Vs = i.return;
                        }
                }
                if (((yc = a), Lo(), Xn && 'function' == typeof Xn.onPostCommitFiberRoot))
                    try {
                        Xn.onPostCommitFiberRoot(Yn, e);
                    } catch (k) {}
                r = !0;
            }
            return r;
        } finally {
            (cr = n), (vc.transition = t);
        }
    }
    return !1;
}
function hf(e, t, n) {
    (e = Ti(e, (t = rs(0, (t = Ju(n, t)), 1)), 1)), (t = Hc()), null !== e && (ur(e, 1, t), qc(e, t));
}
function mf(e, t, n) {
    if (3 === e.tag) hf(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                hf(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Ic || !Ic.has(r)))
                ) {
                    (t = Ti(t, (e = as(t, (e = Ju(n, e)), 1)), 1)), (e = Hc()), null !== t && (ur(t, 1, e), qc(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function gf(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
        (t = Hc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        bc === e &&
            (kc & n) === n &&
            (4 === Ec || (3 === Ec && (130023424 & kc) === kc && 500 > Vn() - Oc) ? nf(e, 0) : (Nc |= n)),
        qc(e, t);
}
function vf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = tr), 0 == (130023424 & (tr <<= 1)) && (tr = 4194304)));
    var n = Hc();
    null !== (e = _i(e, t)) && (ur(e, t, n), qc(e, n));
}
function yf(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), vf(e, n);
}
function bf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                a = e.memoizedState;
            null !== a && (n = a.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(Ye(314));
    }
    null !== r && r.delete(t), vf(e, n);
}
function wf(e, t) {
    return Dn(e, t);
}
function kf(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Sf(e, t, n, r) {
    return new kf(e, t, n, r);
}
function xf(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function Ef(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = Sf(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = 14680064 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function _f(e, t, n, r, a, l) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) xf(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case pt:
                return Cf(n.children, a, l, t);
            case ht:
                (o = 8), (a |= 8);
                break;
            case mt:
                return ((e = Sf(12, n, t, 2 | a)).elementType = mt), (e.lanes = l), e;
            case bt:
                return ((e = Sf(13, n, t, a)).elementType = bt), (e.lanes = l), e;
            case wt:
                return ((e = Sf(19, n, t, a)).elementType = wt), (e.lanes = l), e;
            case xt:
                return Pf(n, a, l, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case gt:
                            o = 10;
                            break e;
                        case vt:
                            o = 9;
                            break e;
                        case yt:
                            o = 11;
                            break e;
                        case kt:
                            o = 14;
                            break e;
                        case St:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(Ye(130, null == e ? e : typeof e, ''));
        }
    return ((t = Sf(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t;
}
function Cf(e, t, n, r) {
    return ((e = Sf(7, e, r, t)).lanes = n), e;
}
function Pf(e, t, n, r) {
    return ((e = Sf(22, e, r, t)).elementType = xt), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Nf(e, t, n) {
    return ((e = Sf(6, e, null, t)).lanes = n), e;
}
function zf(e, t, n) {
    return (
        ((t = Sf(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function Tf(e, t, n, r, a) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = ir(0)),
        (this.expirationTimes = ir(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = ir(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
}
function Of(e, t, n, r, a, l, o, i, u) {
    return (
        (e = new Tf(e, t, n, i, u)),
        1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
        (l = Sf(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Pi(l),
        e
    );
}
function Rf(e) {
    if (!e) return yo;
    e: {
        if (Ln((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ye(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (xo(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(Ye(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (xo(n)) return Co(e, n, t);
    }
    return t;
}
function Lf(e, t, n, r, a, l, o, i, u) {
    return (
        ((e = Of(n, r, !0, e, 0, l, 0, i, u)).context = Rf(null)),
        (n = e.current),
        ((l = zi((r = Hc()), (a = Wc(n)))).callback = null != t ? t : null),
        Ti(n, l, a),
        (e.current.lanes = a),
        ur(e, a, r),
        qc(e, r),
        e
    );
}
function Ff(e, t, n, r) {
    var a = t.current,
        l = Hc(),
        o = Wc(a);
    return (
        (n = Rf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = zi(l, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = Ti(a, t, o)) && (Qc(e, a, o, l), Oi(e, a, o)),
        o
    );
}
function Mf(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function If(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Af(e, t) {
    If(e, t), (e = e.alternate) && If(e, t);
}
pc = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || wo.current) ss = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (ss = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                bs(t), ai();
                                break;
                            case 5:
                                Vi(t);
                                break;
                            case 1:
                                xo(t.type) && Po(t);
                                break;
                            case 4:
                                Ui(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    a = t.memoizedProps.value;
                                vo(pi, r._currentValue), (r._currentValue = a);
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (vo(Hi, 1 & Hi.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? Ps(e, t, n)
                                          : (vo(Hi, 1 & Hi.current), null !== (e = Fs(e, t, n)) ? e.sibling : null);
                                vo(Hi, 1 & Hi.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Rs(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (a = t.memoizedState) &&
                                        ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                                    vo(Hi, Hi.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return (t.lanes = 0), hs(e, t, n);
                        }
                        return Fs(e, t, n);
                    })(e, t, n)
                );
            ss = 0 != (131072 & e.flags);
        }
    else (ss = !1), Yo && 0 != (1048576 & t.flags) && Ho(t, Ao, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Ls(e, t), (e = t.pendingProps);
            var a = So(t, bo.current);
            wi(t, n), (a = ou(null, t, r, e, a, n));
            var l = iu();
            return (
                (t.flags |= 1),
                'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      xo(r) ? ((l = !0), Po(t)) : (l = !1),
                      (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                      Pi(t),
                      (a.updater = Ku),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      Zu(t, r, e, n),
                      (t = ys(null, t, r, !0, l, n)))
                    : ((t.tag = 0), Yo && l && Wo(t), cs(null, t, a, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Ls(e, t),
                    (e = t.pendingProps),
                    (r = (a = r._init)(r._payload)),
                    (t.type = r),
                    (a = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return xf(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === yt) return 11;
                                if (e === kt) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Qu(r, e)),
                    a)
                ) {
                    case 0:
                        t = gs(null, t, r, e, n);
                        break e;
                    case 1:
                        t = vs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = fs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ds(null, t, r, Qu(r.type, e), n);
                        break e;
                }
                throw Error(Ye(306, r, ''));
            }
            return t;
        case 0:
            return (r = t.type), (a = t.pendingProps), gs(e, t, r, (a = t.elementType === r ? a : Qu(r, a)), n);
        case 1:
            return (r = t.type), (a = t.pendingProps), vs(e, t, r, (a = t.elementType === r ? a : Qu(r, a)), n);
        case 3:
            e: {
                if ((bs(t), null === e)) throw Error(Ye(387));
                (r = t.pendingProps), (a = (l = t.memoizedState).element), Ni(e, t), Li(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), l.isDehydrated)) {
                    if (
                        ((l = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = l),
                        (t.memoizedState = l),
                        256 & t.flags)
                    ) {
                        t = ws(e, t, r, n, (a = Ju(Error(Ye(423)), t)));
                        break e;
                    }
                    if (r !== a) {
                        t = ws(e, t, r, n, (a = Ju(Error(Ye(424)), t)));
                        break e;
                    }
                    for (
                        Ko = Jl(t.stateNode.containerInfo.firstChild),
                            qo = t,
                            Yo = !0,
                            Xo = null,
                            n = di(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                    if ((ai(), r === a)) {
                        t = Fs(e, t, n);
                        break e;
                    }
                    cs(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Vi(t),
                null === e && ei(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (o = a.children),
                Ql(r, a) ? (o = null) : null !== l && Ql(r, l) && (t.flags |= 32),
                ms(e, t),
                cs(e, t, o, n),
                t.child
            );
        case 6:
            return null === e && ei(t), null;
        case 13:
            return Ps(e, t, n);
        case 4:
            return (
                Ui(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = fi(t, null, r, n)) : cs(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (a = t.pendingProps), fs(e, t, r, (a = t.elementType === r ? a : Qu(r, a)), n);
        case 7:
            return cs(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return cs(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (a = t.pendingProps),
                    (l = t.memoizedProps),
                    (o = a.value),
                    vo(pi, r._currentValue),
                    (r._currentValue = o),
                    null !== l)
                )
                    if (Ga(l.value, o)) {
                        if (l.children === a.children && !wo.current) {
                            t = Fs(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                            var i = l.dependencies;
                            if (null !== i) {
                                o = l.child;
                                for (var u = i.firstContext; null !== u; ) {
                                    if (u.context === r) {
                                        if (1 === l.tag) {
                                            (u = zi(-1, n & -n)).tag = 2;
                                            var s = l.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u);
                                            }
                                        }
                                        (l.lanes |= n),
                                            null !== (u = l.alternate) && (u.lanes |= n),
                                            bi(l.return, n, t),
                                            (i.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === l.tag) o = l.type === t.type ? null : l.child;
                            else if (18 === l.tag) {
                                if (null === (o = l.return)) throw Error(Ye(341));
                                (o.lanes |= n),
                                    null !== (i = o.alternate) && (i.lanes |= n),
                                    bi(o, n, t),
                                    (o = l.sibling);
                            } else o = l.child;
                            if (null !== o) o.return = l;
                            else
                                for (o = l; null !== o; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (null !== (l = o.sibling)) {
                                        (l.return = o.return), (o = l);
                                        break;
                                    }
                                    o = o.return;
                                }
                            l = o;
                        }
                cs(e, t, a.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (a = t.type),
                (r = t.pendingProps.children),
                wi(t, n),
                (r = r((a = ki(a)))),
                (t.flags |= 1),
                cs(e, t, r, n),
                t.child
            );
        case 14:
            return (a = Qu((r = t.type), t.pendingProps)), ds(e, t, r, (a = Qu(r.type, a)), n);
        case 15:
            return ps(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Qu(r, a)),
                Ls(e, t),
                (t.tag = 1),
                xo(r) ? ((e = !0), Po(t)) : (e = !1),
                wi(t, n),
                Xu(t, r, a),
                Zu(t, r, a, n),
                ys(null, t, r, !0, e, n)
            );
        case 19:
            return Rs(e, t, n);
        case 22:
            return hs(e, t, n);
    }
    throw Error(Ye(156, t.tag));
};
var Df =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function jf(e) {
    this._internalRoot = e;
}
function Uf(e) {
    this._internalRoot = e;
}
function $f(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Vf(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function Bf() {}
function Hf(e, t, n, r, a) {
    var l = n._reactRootContainer;
    if (l) {
        var o = l;
        if ('function' == typeof a) {
            var i = a;
            a = function () {
                var e = Mf(o);
                i.call(e);
            };
        }
        Ff(t, o, e, a);
    } else
        o = (function (e, t, n, r, a) {
            if (a) {
                if ('function' == typeof r) {
                    var l = r;
                    r = function () {
                        var e = Mf(o);
                        l.call(e);
                    };
                }
                var o = Lf(t, r, e, 0, null, !1, 0, '', Bf);
                return (
                    (e._reactRootContainer = o), (e[ao] = o.current), Rl(8 === e.nodeType ? e.parentNode : e), ef(), o
                );
            }
            for (; (a = e.lastChild); ) e.removeChild(a);
            if ('function' == typeof r) {
                var i = r;
                r = function () {
                    var e = Mf(u);
                    i.call(e);
                };
            }
            var u = Of(e, 0, !1, null, 0, !1, 0, '', Bf);
            return (
                (e._reactRootContainer = u),
                (e[ao] = u.current),
                Rl(8 === e.nodeType ? e.parentNode : e),
                ef(function () {
                    Ff(t, u, n, r);
                }),
                u
            );
        })(n, t, e, a, r);
    return Mf(o);
}
(Uf.prototype.render = jf.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Ye(409));
        Ff(e, t, null, null);
    }),
    (Uf.prototype.unmount = jf.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ef(function () {
                    Ff(null, e, null, null);
                }),
                    (t[ao] = null);
            }
        }),
    (Uf.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = mr();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Er.length && 0 !== t && t < Er[n].priority; n++);
            Er.splice(n, 0, e), 0 === n && Nr(e);
        }
    }),
    (dr = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = nr(t.pendingLanes);
                    0 !== n && (sr(t, 1 | n), qc(t, Vn()), 0 == (6 & yc) && ((Rc = Vn() + 500), Lo()));
                }
                break;
            case 13:
                ef(function () {
                    var t = _i(e, 1);
                    if (null !== t) {
                        var n = Hc();
                        Qc(t, e, 1, n);
                    }
                }),
                    Af(e, 1);
        }
    }),
    (pr = function (e) {
        if (13 === e.tag) {
            var t = _i(e, 134217728);
            if (null !== t) Qc(t, e, 134217728, Hc());
            Af(e, 134217728);
        }
    }),
    (hr = function (e) {
        if (13 === e.tag) {
            var t = Wc(e),
                n = _i(e, t);
            if (null !== n) Qc(n, e, t, Hc());
            Af(e, t);
        }
    }),
    (mr = function () {
        return cr;
    }),
    (gr = function (e, t) {
        var n = cr;
        try {
            return (cr = e), t();
        } finally {
            cr = n;
        }
    }),
    (pn = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((Vt(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = fo(r);
                            if (!a) throw Error(Ye(90));
                            At(r), Vt(r, a);
                        }
                    }
                }
                break;
            case 'textarea':
                Yt(e, n);
                break;
            case 'select':
                null != (t = n.value) && Qt(e, !!n.multiple, t, !1);
        }
    }),
    (bn = Jc),
    (wn = ef);
var Wf = { usingClientEntryPoint: !1, Events: [so, co, fo, vn, yn, Jc] },
    Qf = { findFiberByHostInstance: uo, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    qf = {
        bundleType: Qf.bundleType,
        version: Qf.version,
        rendererPackageName: Qf.rendererPackageName,
        rendererConfig: Qf.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ct.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = In(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            Qf.findFiberByHostInstance ||
            function () {
                return null;
            },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var Kf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kf.isDisabled && Kf.supportsFiber)
        try {
            (Yn = Kf.inject(qf)), (Xn = Kf);
        } catch (en) {}
}
(Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wf),
    (Be.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!$f(t)) throw Error(Ye(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: dt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Be.createRoot = function (e, t) {
        if (!$f(e)) throw Error(Ye(299));
        var n = !1,
            r = '',
            a = Df;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
            (t = Of(e, 1, !1, null, 0, n, 0, r, a)),
            (e[ao] = t.current),
            Rl(8 === e.nodeType ? e.parentNode : e),
            new jf(t)
        );
    }),
    (Be.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Ye(188));
            throw ((e = Object.keys(e).join(',')), Error(Ye(268, e)));
        }
        return (e = null === (e = In(t)) ? null : e.stateNode);
    }),
    (Be.flushSync = function (e) {
        return ef(e);
    }),
    (Be.hydrate = function (e, t, n) {
        if (!Vf(t)) throw Error(Ye(200));
        return Hf(null, e, t, !0, n);
    }),
    (Be.hydrateRoot = function (e, t, n) {
        if (!$f(e)) throw Error(Ye(405));
        var r = (null != n && n.hydratedSources) || null,
            a = !1,
            l = '',
            o = Df;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
            (t = Lf(t, null, e, 1, null != n ? n : null, a, 0, l, o)),
            (e[ao] = t.current),
            Rl(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, a])
                        : t.mutableSourceEagerHydrationData.push(n, a);
        return new Uf(t);
    }),
    (Be.render = function (e, t, n) {
        if (!Vf(t)) throw Error(Ye(200));
        return Hf(null, e, t, !1, n);
    }),
    (Be.unmountComponentAtNode = function (e) {
        if (!Vf(e)) throw Error(Ye(40));
        return (
            !!e._reactRootContainer &&
            (ef(function () {
                Hf(null, null, e, !1, function () {
                    (e._reactRootContainer = null), (e[ao] = null);
                });
            }),
            !0)
        );
    }),
    (Be.unstable_batchedUpdates = Jc),
    (Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Vf(n)) throw Error(Ye(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Ye(38));
        return Hf(e, t, n, !1, r);
    }),
    (Be.version = '18.3.1-next-f1338f8080-20240426'),
    (function e() {
        if (
            'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
                console.error(t);
            }
    })(),
    (Ve.exports = Be);
var Yf = Ve.exports,
    Xf = Yf;
($e.createRoot = Xf.createRoot), ($e.hydrateRoot = Xf.hydrateRoot);
var Gf,
    Zf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (Gf = Zf),
    (function () {
        var e = {}.hasOwnProperty;
        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                var a = arguments[r];
                if (a) {
                    var l = typeof a;
                    if ('string' === l || 'number' === l) n.push(a);
                    else if (Array.isArray(a)) {
                        if (a.length) {
                            var o = t.apply(null, a);
                            o && n.push(o);
                        }
                    } else if ('object' === l) {
                        if (
                            a.toString !== Object.prototype.toString &&
                            !a.toString.toString().includes('[native code]')
                        ) {
                            n.push(a.toString());
                            continue;
                        }
                        for (var i in a) e.call(a, i) && a[i] && n.push(i);
                    }
                }
            }
            return n.join(' ');
        }
        Gf.exports ? ((t.default = t), (Gf.exports = t)) : (window.classNames = t);
    })();
const Jf = n(Zf.exports);
function ed(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function td(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const nd = ed('clientResized'),
    rd = ed('self.onScaleUpdated'),
    ad = { down: ed('mousedown'), up: ed('mouseup'), move: ed('mousemove') };
function ld(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
!(function () {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && td(!1);
    }
    function n() {
        e.enabled && td(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', n))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', n))
            : td(!1);
    }
    ['down', 'up', 'move'].reduce(
        (t, n) => (
            (t[n] = (function (t) {
                return (n) => {
                    e.listeners += 1;
                    const a = `mouse${t}`,
                        l = ad[t]((e) => n([e, 'outside']));
                    function o(e) {
                        n([e, 'inside']);
                    }
                    return (
                        window.addEventListener(a, o),
                        r(),
                        () => {
                            l(), window.removeEventListener(a, o), (e.listeners -= 1), r();
                        }
                    );
                };
            })(n)),
            t
        ),
        {},
    );
})();
const od = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    id =
        (Object.keys(od).reduce(
            (e, t) => (
                (e[t] = () =>
                    (function (e) {
                        engine.call('PlaySound', e);
                    })(od[t])),
                e
            ),
            {},
        ),
        { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 }),
    ud = {
        onTextureFrozen: ed('self.onTextureFrozen'),
        onTextureReady: ed('self.onTextureReady'),
        onDomBuilt: ed('self.onDomBuilt'),
        onLoaded: ed('self.onLoaded'),
        onHitTest: (() => {
            const e = new Set(),
                t = (t, n) => {
                    for (const r of e.values())
                        if (r(t)) {
                            n.value = !1;
                            break;
                        }
                };
            return (n) => (
                e.add(n),
                1 === e.size && (viewEnv.setHitTestEnabled(!0), engine.on('self.onHitTest', t)),
                () => {
                    e.delete(n), 0 === e.size && (viewEnv.setHitTestEnabled(!1), engine.off('self.onHitTest', t));
                }
            );
        })(),
        onDisplayChanged: ed('self.onShowingStatusChanged'),
        onFocusUpdated: ed('self.onFocusChanged'),
        children: {
            onAdded: ed('children.onAdded'),
            onLoaded: ed('children.onLoaded'),
            onRemoved: ed('children.onRemoved'),
            onAttached: ed('children.onAttached'),
            onTextureReady: ed('children.onTextureReady'),
            onRequestPosition: ed('children.requestPosition'),
        },
    };
function sd() {
    return !1;
}
Object.keys(id).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === id[t]), e), {});
const cd = -1;
class fd {
    constructor() {
        t(this, 'items', []);
    }
    get length() {
        return this.items.length;
    }
    push(e) {
        this.items.push(e);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    clear() {
        this.items = [];
    }
    includes(e) {
        return this.items.includes(e);
    }
    some(e) {
        return this.items.some(e);
    }
    remove(e) {
        const t = this.items.indexOf(e);
        return -1 !== t && (this.items.splice(t, 1), !0);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    toArray() {
        return this.items.slice();
    }
}
const dd = $.createContext(void 0);
function pd({ children: e }) {
    const [t, n] = $.useState(() => ld('rem'));
    return (
        $.useEffect(() => {
            function e() {
                n(ld('rem'));
            }
            const t = nd(e),
                r = rd(e);
            return () => {
                t(), r();
            };
        }, []),
        X.jsx(dd.Provider, { value: t, children: e })
    );
}
const hd = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    md = [
        { weight: 1, name: hd.small, className: 'mediaSmall', width: 1366, height: 610 },
        { weight: 2, name: hd.medium, className: 'mediaMedium', width: 1600, height: 740 },
        { weight: 3, name: hd.large, className: 'mediaLarge', width: 1920, height: 920 },
        { weight: 4, name: hd.extraLarge, className: 'mediaExtraLarge', width: 2200, height: 1070 },
        { weight: 5, name: hd.xxl, className: 'mediaXXL', width: 2560, height: 1310 },
    ];
function gd() {
    const { width: e, height: t } = (function () {
            const e = $.useContext(dd);
            if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
            return e;
        })(),
        n = $.useMemo(
            () =>
                (function (e, t) {
                    const n = md.reduce(
                            (n, r) => (
                                r.width <= e &&
                                    (n.width.classes.push(r.className),
                                    n.width.names.push(r.name),
                                    (n.width.weight += 1)),
                                r.height <= t &&
                                    (n.height.classes.push(r.className),
                                    n.height.names.push(r.name),
                                    (n.height.weight += 1)),
                                n
                            ),
                            {
                                width: { classes: [], names: [], weight: 0 },
                                height: { classes: [], names: [], weight: 0 },
                            },
                        ),
                        r = n[n.width.weight <= n.height.weight ? 'width' : 'height'],
                        a = r.names[r.names.length - 1] ?? hd.extraSmall;
                    return { className: r.classes.join(' '), breakpoint: { name: a, weight: r.weight } };
                })(e, t),
            [e, t],
        );
    return { mediaClass: n.className, breakpoint: n.breakpoint, screenWidthRem: e, screenHeightRem: t };
}
function vd({ children: e, className: t, ...n }) {
    const { mediaClass: r } = gd();
    return X.jsx('div', { className: Jf(t, 'media-wrapper', r), ...n, children: e });
}
function yd({ children: e, ...t }) {
    return X.jsx(pd, { children: X.jsx(vd, { ...t, children: e }) });
}
const bd = () => {
        const e = new Map();
        function t(t) {
            const n = e.get(t);
            if (n) return n;
            const r = new fd();
            return e.set(t, r), r;
        }
        function n(t, n) {
            const r = e.get(t);
            return !!r && r.remove(n);
        }
        return {
            handlers: e,
            obtain: t,
            register: function (e, r) {
                if (e === cd) return sd;
                const a = t(e);
                return a.includes(r) || a.push(r), () => n(e, r);
            },
            unregister: n,
            takeCurrent: function (t) {
                const n = e.get(t);
                if (!n) return;
                const r = n.peek();
                return r || void 0;
            },
        };
    },
    wd = $.createContext(void 0);
function kd(e) {
    const t = $.useMemo(bd, []);
    $.useEffect(() => {
        function e(e) {
            const n = t.takeCurrent(e.keyCode);
            n && n(e);
        }
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    });
    const n = $.useMemo(() => ({ keydown: { register: t.register, unregister: t.unregister } }), [t]);
    return X.jsx(wd.Provider, { value: n, children: e.children });
}
$.createContext({ mode: 'real' });
var Sd = Dd(),
    xd = (e) => Fd(e, Sd),
    Ed = Dd();
xd.write = (e) => Fd(e, Ed);
var _d = Dd();
xd.onStart = (e) => Fd(e, _d);
var Cd = Dd();
xd.onFrame = (e) => Fd(e, Cd);
var Pd = Dd();
xd.onFinish = (e) => Fd(e, Pd);
var Nd = [];
xd.setTimeout = (e, t) => {
    const n = xd.now() + t,
        r = () => {
            const e = Nd.findIndex((e) => e.cancel == r);
            ~e && Nd.splice(e, 1), (Rd -= ~e ? 1 : 0);
        },
        a = { time: n, handler: e, cancel: r };
    return Nd.splice(zd(n), 0, a), (Rd += 1), Md(), a;
};
var zd = (e) => ~(~Nd.findIndex((t) => t.time > e) || ~Nd.length);
(xd.cancel = (e) => {
    _d.delete(e), Cd.delete(e), Pd.delete(e), Sd.delete(e), Ed.delete(e);
}),
    (xd.sync = (e) => {
        (Ld = !0), xd.batchedUpdates(e), (Ld = !1);
    }),
    (xd.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            (t = e), xd.onStart(n);
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                _d.delete(n), (t = null);
            }),
            r
        );
    });
var Td = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
(xd.use = (e) => (Td = e)),
    (xd.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (xd.batchedUpdates = (e) => e()),
    (xd.catch = console.error),
    (xd.frameLoop = 'always'),
    (xd.advance = () => {
        'demand' !== xd.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Ad();
    });
var Od = -1,
    Rd = 0,
    Ld = !1;
function Fd(e, t) {
    Ld ? (t.delete(e), e(0)) : (t.add(e), Md());
}
function Md() {
    Od < 0 && ((Od = 0), 'demand' !== xd.frameLoop && Td(Id));
}
function Id() {
    ~Od && (Td(Id), xd.batchedUpdates(Ad));
}
function Ad() {
    const e = Od;
    Od = xd.now();
    const t = zd(Od);
    t && (jd(Nd.splice(0, t), (e) => e.handler()), (Rd -= t)),
        Rd ? (_d.flush(), Sd.flush(e ? Math.min(64, Od - e) : 16.667), Cd.flush(), Ed.flush(), Pd.flush()) : (Od = -1);
}
function Dd() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            (Rd += t != e || e.has(n) ? 0 : 1), e.add(n);
        },
        delete: (n) => ((Rd -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Rd -= t.size), jd(t, (t) => t(n) && e.add(t)), (Rd += e.size), (t = e));
        },
    };
}
function jd(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            xd.catch(n);
        }
    });
}
var Ud = Object.defineProperty,
    $d = {};
((e, t) => {
    for (var n in t) Ud(e, n, { get: t[n], enumerable: !0 });
})($d, {
    assign: () => Zd,
    colors: () => Yd,
    createStringInterpolator: () => Wd,
    skipAnimation: () => Xd,
    to: () => Qd,
    willAdvance: () => Gd,
});
var Vd = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var Bd = (e, t) => e.forEach(t);
function Hd(e, t, n) {
    if (Vd.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Wd,
    Qd,
    qd = (e) => (Vd.und(e) ? [] : Vd.arr(e) ? e : [e]),
    Kd = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Yd = null,
    Xd = !1,
    Gd = function () {},
    Zd = (e) => {
        e.to && (Qd = e.to),
            e.now && (xd.now = e.now),
            void 0 !== e.colors && (Yd = e.colors),
            null != e.skipAnimation && (Xd = e.skipAnimation),
            e.createStringInterpolator && (Wd = e.createStringInterpolator),
            e.requestAnimationFrame && xd.use(e.requestAnimationFrame),
            e.batchedUpdates && (xd.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Gd = e.willAdvance),
            e.frameLoop && (xd.frameLoop = e.frameLoop);
    },
    Jd = new Set(),
    ep = [],
    tp = [],
    np = 0,
    rp = {
        get idle() {
            return !Jd.size && !ep.length;
        },
        start(e) {
            np > e.priority ? (Jd.add(e), xd.onStart(ap)) : (lp(e), xd(ip));
        },
        advance: ip,
        sort(e) {
            if (np) xd.onFrame(() => rp.sort(e));
            else {
                const t = ep.indexOf(e);
                ~t && (ep.splice(t, 1), op(e));
            }
        },
        clear() {
            (ep = []), Jd.clear();
        },
    };
function ap() {
    Jd.forEach(lp), Jd.clear(), xd(ip);
}
function lp(e) {
    ep.includes(e) || op(e);
}
function op(e) {
    ep.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(ep, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function ip(e) {
    const t = tp;
    for (let n = 0; n < ep.length; n++) {
        const r = ep[n];
        (np = r.priority), r.idle || (Gd(r), r.advance(e), r.idle || t.push(r));
    }
    return (np = 0), ((tp = ep).length = 0), (ep = t).length > 0;
}
var up = '[-+]?\\d*\\.?\\d+',
    sp = up + '%';
function cp(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var fp = new RegExp('rgb' + cp(up, up, up)),
    dp = new RegExp('rgba' + cp(up, up, up, up)),
    pp = new RegExp('hsl' + cp(up, sp, sp)),
    hp = new RegExp('hsla' + cp(up, sp, sp, up)),
    mp = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    gp = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    vp = /^#([0-9a-fA-F]{6})$/,
    yp = /^#([0-9a-fA-F]{8})$/;
function bp(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function wp(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r,
        l = bp(a, r, e + 1 / 3),
        o = bp(a, r, e),
        i = bp(a, r, e - 1 / 3);
    return (Math.round(255 * l) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * i) << 8);
}
function kp(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Sp(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function xp(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function Ep(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function _p(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = vp.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Yd && void 0 !== Yd[e]
                ? Yd[e]
                : (t = fp.exec(e))
                  ? ((kp(t[1]) << 24) | (kp(t[2]) << 16) | (kp(t[3]) << 8) | 255) >>> 0
                  : (t = dp.exec(e))
                    ? ((kp(t[1]) << 24) | (kp(t[2]) << 16) | (kp(t[3]) << 8) | xp(t[4])) >>> 0
                    : (t = mp.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = yp.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = gp.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = pp.exec(e))
                            ? (255 | wp(Sp(t[1]), Ep(t[2]), Ep(t[3]))) >>> 0
                            : (t = hp.exec(e))
                              ? (wp(Sp(t[1]), Ep(t[2]), Ep(t[3])) | xp(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var Cp = (e, t, n) => {
    if (Vd.fun(e)) return e;
    if (Vd.arr(e)) return Cp({ range: e, output: t, extrapolate: n });
    if (Vd.str(e.output[0])) return Wd(e);
    const r = e,
        a = r.output,
        l = r.range || [0, 1],
        o = r.extrapolateLeft || r.extrapolate || 'extend',
        i = r.extrapolateRight || r.extrapolate || 'extend',
        u = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, l);
        return (function (e, t, n, r, a, l, o, i, u) {
            let s = u ? u(e) : e;
            if (s < t) {
                if ('identity' === o) return s;
                'clamp' === o && (s = t);
            }
            if (s > n) {
                if ('identity' === i) return s;
                'clamp' === i && (s = n);
            }
            if (r === a) return r;
            if (t === n) return e <= t ? r : a;
            t === -1 / 0 ? (s = -s) : n === 1 / 0 ? (s -= t) : (s = (s - t) / (n - t));
            (s = l(s)), r === -1 / 0 ? (s = -s) : a === 1 / 0 ? (s += r) : (s = s * (a - r) + r);
            return s;
        })(e, l[t], l[t + 1], a[t], a[t + 1], u, o, i, r.map);
    };
};
var Pp = Symbol.for('FluidValue.get'),
    Np = Symbol.for('FluidValue.observers'),
    zp = (e) => Boolean(e && e[Pp]),
    Tp = (e) => (e && e[Pp] ? e[Pp]() : e);
function Op(e, t) {
    const n = e[Np];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Rp = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            Lp(this, e);
        }
    },
    Lp = (e, t) => Ap(e, Pp, t);
function Fp(e, t) {
    if (e[Pp]) {
        let n = e[Np];
        n || Ap(e, Np, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
    }
    return t;
}
function Mp(e, t) {
    const n = e[Np];
    if (n && n.has(t)) {
        const r = n.size - 1;
        r ? n.delete(t) : (e[Np] = null), e.observerRemoved && e.observerRemoved(r, t);
    }
}
var Ip,
    Ap = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Dp = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    jp = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Up = new RegExp(`(${Dp.source})(%|[a-z]+)`, 'i'),
    $p = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Vp = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Bp = (e) => {
        const [t, n] = Hp(e);
        if (!t || Kd()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Vp.test(n) ? Bp(n) : n || e;
    },
    Hp = (e) => {
        const t = Vp.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Wp = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
    Qp = (e) => {
        Ip || (Ip = Yd ? new RegExp(`(${Object.keys(Yd).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Tp(e).replace(Vp, Bp).replace(jp, _p).replace(Ip, _p)),
            n = t.map((e) => e.match(Dp).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => Cp({ ...e, output: t }));
        return (e) => {
            var n;
            const a = !Up.test(t[0]) && (null == (n = t.find((e) => Up.test(e))) ? void 0 : n.replace(Dp, ''));
            let l = 0;
            return t[0].replace(Dp, () => `${r[l++](e)}${a || ''}`).replace($p, Wp);
        };
    },
    qp = 'react-spring: ',
    Kp = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${qp}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Yp = Kp(console.warn);
function Xp(e) {
    return Vd.str(e) && ('#' == e[0] || /\d/.test(e) || (!Kd() && Vp.test(e)) || e in (Yd || {}));
}
Kp(console.warn);
var Gp = Kd() ? $.useEffect : $.useLayoutEffect;
function Zp() {
    const e = $.useState()[1],
        t = (() => {
            const e = $.useRef(!1);
            return (
                Gp(
                    () => (
                        (e.current = !0),
                        () => {
                            e.current = !1;
                        }
                    ),
                    [],
                ),
                e
            );
        })();
    return () => {
        t.current && e(Math.random());
    };
}
var Jp = [],
    eh = Symbol.for('Animated:node'),
    th = (e) => e && e[eh],
    nh = (e, t) => {
        return (n = e), (r = eh), (a = t), Object.defineProperty(n, r, { value: a, writable: !0, configurable: !0 });
        var n, r, a;
    },
    rh = (e) => e && e[eh] && e[eh].getPayload(),
    ah = class {
        constructor() {
            nh(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    lh = class extends ah {
        constructor(e) {
            super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Vd.num(this._value) && (this.lastPosition = this._value);
        }
        static create(e) {
            return new lh(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Vd.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            (this.done = !1),
                Vd.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null));
        }
    },
    oh = class extends lh {
        constructor(e) {
            super(0), (this._string = null), (this._toString = Cp({ output: [e, e] }));
        }
        static create(e) {
            return new oh(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Vd.str(e)) {
                if (e == this._string) return !1;
                (this._string = e), (this._value = 1);
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            e && (this._toString = Cp({ output: [this.getValue(), e] })), (this._value = 0), super.reset();
        }
    },
    ih = { dependencies: null },
    uh = class extends ah {
        constructor(e) {
            super(), (this.source = e), this.setValue(e);
        }
        getValue(e) {
            const t = {};
            return (
                Hd(this.source, (n, r) => {
                    var a;
                    (a = n) && a[eh] === a ? (t[r] = n.getValue(e)) : zp(n) ? (t[r] = Tp(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            (this.source = e), (this.payload = this._makePayload(e));
        }
        reset() {
            this.payload && Bd(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return Hd(e, this._addToPayload, t), Array.from(t);
            }
        }
        _addToPayload(e) {
            ih.dependencies && zp(e) && ih.dependencies.add(e);
            const t = rh(e);
            t && Bd(t, (e) => this.add(e));
        }
    },
    sh = class extends uh {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new sh(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(ch)), !0);
        }
    };
function ch(e) {
    return (Xp(e) ? oh : lh).create(e);
}
var fh = (e, t) => {
        const n = !Vd.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return $.forwardRef((r, a) => {
            const l = $.useRef(null),
                o =
                    n &&
                    $.useCallback(
                        (e) => {
                            l.current = (function (e, t) {
                                e && (Vd.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(a, e);
                        },
                        [a],
                    ),
                [i, u] = (function (e, t) {
                    const n = new Set();
                    (ih.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) });
                    return (e = new uh(e)), (ih.dependencies = null), [e, n];
                })(r, t),
                s = Zp(),
                c = () => {
                    const e = l.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && s();
                },
                f = new dh(c, u),
                d = $.useRef();
            var p;
            Gp(
                () => (
                    (d.current = f),
                    Bd(u, (e) => Fp(e, f)),
                    () => {
                        d.current && (Bd(d.current.deps, (e) => Mp(e, d.current)), xd.cancel(d.current.update));
                    }
                ),
            ),
                $.useEffect(c, []),
                (p = () => () => {
                    const e = d.current;
                    Bd(e.deps, (t) => Mp(t, e));
                }),
                $.useEffect(p, Jp);
            const h = t.getComponentProps(i.getValue());
            return $.createElement(e, { ...h, ref: o });
        });
    },
    dh = class {
        constructor(e, t) {
            (this.update = e), (this.deps = t);
        }
        eventObserved(e) {
            'change' == e.type && xd.write(this.update);
        }
    };
var ph,
    hh,
    mh = Symbol.for('AnimatedComponent'),
    gh = (e) => (Vd.str(e) ? e : e && Vd.str(e.displayName) ? e.displayName : (Vd.fun(e) && e.name) || null),
    vh = (e) => e instanceof bh,
    yh = 1,
    bh = class extends Rp {
        constructor() {
            super(...arguments), (this.id = yh++), (this._priority = 0);
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = th(this);
            return e && e.getValue();
        }
        to(...e) {
            return $d.to(this, e);
        }
        interpolate(...e) {
            return Yp(`${qp}The "interpolate" function is deprecated in v9 (use "to" instead)`), $d.to(this, e);
        }
        toJSON() {
            return this.get();
        }
        observerAdded(e) {
            1 == e && this._attach();
        }
        observerRemoved(e) {
            0 == e && this._detach();
        }
        _attach() {}
        _detach() {}
        _onChange(e, t = !1) {
            Op(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            this.idle || rp.sort(this), Op(this, { type: 'priority', parent: this, priority: e });
        }
    },
    wh = ({ children: e, ...t }) => {
        const n = $.useContext(kh),
            r = t.pause || !!n.pause,
            a = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = $.useState(() => ({ inputs: t, result: e() })),
                r = $.useRef(),
                a = r.current;
            let l = a;
            l
                ? Boolean(
                      t &&
                          l.inputs &&
                          (function (e, t) {
                              if (e.length !== t.length) return !1;
                              for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                              return !0;
                          })(t, l.inputs),
                  ) || (l = { inputs: t, result: e() })
                : (l = n);
            return (
                $.useEffect(() => {
                    (r.current = l), a == n && (n.inputs = n.result = void 0);
                }, [l]),
                l.result
            );
        })(() => ({ pause: r, immediate: a }), [r, a]);
        const { Provider: l } = kh;
        return $.createElement(l, { value: t }, e);
    },
    kh =
        ((ph = wh),
        (hh = {}),
        Object.assign(ph, $.createContext(hh)),
        (ph.Provider._context = ph),
        (ph.Consumer._context = ph),
        ph);
(wh.Provider = kh.Provider), (wh.Consumer = kh.Consumer);
var Sh = class extends bh {
    constructor(e, t) {
        super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Cp(...t));
        const n = this._get(),
            r = (function (e) {
                const t = th(e);
                return t ? t.constructor : Vd.arr(e) ? sh : Xp(e) ? oh : lh;
            })(n);
        nh(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (function (e, t) {
            if (Vd.arr(e)) {
                if (!Vd.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || (th(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Eh(this._active) && _h(this);
    }
    _get() {
        const e = Vd.arr(this.source) ? this.source.map(Tp) : qd(Tp(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Eh(this._active) &&
            ((this.idle = !1),
            Bd(rh(this), (e) => {
                e.done = !1;
            }),
            $d.skipAnimation ? (xd.batchedUpdates(() => this.advance()), _h(this)) : rp.start(this));
    }
    _attach() {
        let e = 1;
        Bd(qd(this.source), (t) => {
            zp(t) && Fp(t, this), vh(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
        }),
            (this.priority = e),
            this._start();
    }
    _detach() {
        Bd(qd(this.source), (e) => {
            zp(e) && Mp(e, this);
        }),
            this._active.clear(),
            _h(this);
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = qd(this.source).reduce((e, t) => Math.max(e, (vh(t) ? t.priority : 0) + 1), 0));
    }
};
function xh(e) {
    return !1 !== e.idle;
}
function Eh(e) {
    return !e.size || Array.from(e).every(xh);
}
function _h(e) {
    e.idle ||
        ((e.idle = !0),
        Bd(rh(e), (e) => {
            e.done = !0;
        }),
        Op(e, { type: 'idle', parent: e }));
}
$d.assign({ createStringInterpolator: Qp, to: (e, t) => new Sh(e, t) });
var Ch = /^--/;
function Ph(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Ch.test(e) || (zh.hasOwnProperty(e) && zh[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Nh = {};
var zh = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Th = ['Webkit', 'Ms', 'Moz', 'O'];
zh = Object.keys(zh).reduce(
    (e, t) => (Th.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    zh,
);
var Oh = /^(matrix|translate|scale|rotate|skew)/,
    Rh = /^(translate)/,
    Lh = /^(rotate|skew)/,
    Fh = (e, t) => (Vd.num(e) && 0 !== e ? e + t : e),
    Mh = (e, t) => (Vd.arr(e) ? e.every((e) => Mh(e, t)) : Vd.num(e) ? e === t : parseFloat(e) === t),
    Ih = class extends uh {
        constructor({ x: e, y: t, z: n, ...r }) {
            const a = [],
                l = [];
            (e || t || n) &&
                (a.push([e || 0, t || 0, n || 0]),
                l.push((e) => [`translate3d(${e.map((e) => Fh(e, 'px')).join(',')})`, Mh(e, 0)])),
                Hd(r, (e, t) => {
                    if ('transform' === t) a.push([e || '']), l.push((e) => [e, '' === e]);
                    else if (Oh.test(t)) {
                        if ((delete r[t], Vd.und(e))) return;
                        const n = Rh.test(t) ? 'px' : Lh.test(t) ? 'deg' : '';
                        a.push(qd(e)),
                            l.push(
                                'rotate3d' === t
                                    ? ([e, t, r, a]) => [`rotate3d(${e},${t},${r},${Fh(a, n)})`, Mh(a, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Fh(e, n)).join(',')})`,
                                          Mh(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            );
                    }
                }),
                a.length && (r.transform = new Ah(a, l)),
                super(r);
        }
    },
    Ah = class extends Rp {
        constructor(e, t) {
            super(), (this.inputs = e), (this.transforms = t), (this._value = null);
        }
        get() {
            return this._value || (this._value = this._get());
        }
        _get() {
            let e = '',
                t = !0;
            return (
                Bd(this.inputs, (n, r) => {
                    const a = Tp(n[0]),
                        [l, o] = this.transforms[r](Vd.arr(a) ? a : n.map(Tp));
                    (e += ' ' + l), (t = t && o);
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Bd(this.inputs, (e) => Bd(e, (e) => zp(e) && Fp(e, this)));
        }
        observerRemoved(e) {
            0 == e && Bd(this.inputs, (e) => Bd(e, (e) => zp(e) && Mp(e, this)));
        }
        eventObserved(e) {
            'change' == e.type && (this._value = null), Op(this, e);
        }
    };
$d.assign({
    batchedUpdates: Yf.unstable_batchedUpdates,
    createStringInterpolator: Qp,
    colors: {
        transparent: 0,
        aliceblue: 4042850303,
        antiquewhite: 4209760255,
        aqua: 16777215,
        aquamarine: 2147472639,
        azure: 4043309055,
        beige: 4126530815,
        bisque: 4293182719,
        black: 255,
        blanchedalmond: 4293643775,
        blue: 65535,
        blueviolet: 2318131967,
        brown: 2771004159,
        burlywood: 3736635391,
        burntsienna: 3934150143,
        cadetblue: 1604231423,
        chartreuse: 2147418367,
        chocolate: 3530104575,
        coral: 4286533887,
        cornflowerblue: 1687547391,
        cornsilk: 4294499583,
        crimson: 3692313855,
        cyan: 16777215,
        darkblue: 35839,
        darkcyan: 9145343,
        darkgoldenrod: 3095792639,
        darkgray: 2846468607,
        darkgreen: 6553855,
        darkgrey: 2846468607,
        darkkhaki: 3182914559,
        darkmagenta: 2332068863,
        darkolivegreen: 1433087999,
        darkorange: 4287365375,
        darkorchid: 2570243327,
        darkred: 2332033279,
        darksalmon: 3918953215,
        darkseagreen: 2411499519,
        darkslateblue: 1211993087,
        darkslategray: 793726975,
        darkslategrey: 793726975,
        darkturquoise: 13554175,
        darkviolet: 2483082239,
        deeppink: 4279538687,
        deepskyblue: 12582911,
        dimgray: 1768516095,
        dimgrey: 1768516095,
        dodgerblue: 512819199,
        firebrick: 2988581631,
        floralwhite: 4294635775,
        forestgreen: 579543807,
        fuchsia: 4278255615,
        gainsboro: 3705462015,
        ghostwhite: 4177068031,
        gold: 4292280575,
        goldenrod: 3668254975,
        gray: 2155905279,
        green: 8388863,
        greenyellow: 2919182335,
        grey: 2155905279,
        honeydew: 4043305215,
        hotpink: 4285117695,
        indianred: 3445382399,
        indigo: 1258324735,
        ivory: 4294963455,
        khaki: 4041641215,
        lavender: 3873897215,
        lavenderblush: 4293981695,
        lawngreen: 2096890111,
        lemonchiffon: 4294626815,
        lightblue: 2916673279,
        lightcoral: 4034953471,
        lightcyan: 3774873599,
        lightgoldenrodyellow: 4210742015,
        lightgray: 3553874943,
        lightgreen: 2431553791,
        lightgrey: 3553874943,
        lightpink: 4290167295,
        lightsalmon: 4288707327,
        lightseagreen: 548580095,
        lightskyblue: 2278488831,
        lightslategray: 2005441023,
        lightslategrey: 2005441023,
        lightsteelblue: 2965692159,
        lightyellow: 4294959359,
        lime: 16711935,
        limegreen: 852308735,
        linen: 4210091775,
        magenta: 4278255615,
        maroon: 2147483903,
        mediumaquamarine: 1724754687,
        mediumblue: 52735,
        mediumorchid: 3126187007,
        mediumpurple: 2473647103,
        mediumseagreen: 1018393087,
        mediumslateblue: 2070474495,
        mediumspringgreen: 16423679,
        mediumturquoise: 1221709055,
        mediumvioletred: 3340076543,
        midnightblue: 421097727,
        mintcream: 4127193855,
        mistyrose: 4293190143,
        moccasin: 4293178879,
        navajowhite: 4292783615,
        navy: 33023,
        oldlace: 4260751103,
        olive: 2155872511,
        olivedrab: 1804477439,
        orange: 4289003775,
        orangered: 4282712319,
        orchid: 3664828159,
        palegoldenrod: 4008225535,
        palegreen: 2566625535,
        paleturquoise: 2951671551,
        palevioletred: 3681588223,
        papayawhip: 4293907967,
        peachpuff: 4292524543,
        peru: 3448061951,
        pink: 4290825215,
        plum: 3718307327,
        powderblue: 2967529215,
        purple: 2147516671,
        rebeccapurple: 1714657791,
        red: 4278190335,
        rosybrown: 3163525119,
        royalblue: 1097458175,
        saddlebrown: 2336560127,
        salmon: 4202722047,
        sandybrown: 4104413439,
        seagreen: 780883967,
        seashell: 4294307583,
        sienna: 2689740287,
        silver: 3233857791,
        skyblue: 2278484991,
        slateblue: 1784335871,
        slategray: 1887473919,
        slategrey: 1887473919,
        snow: 4294638335,
        springgreen: 16744447,
        steelblue: 1182971135,
        tan: 3535047935,
        teal: 8421631,
        thistle: 3636451583,
        tomato: 4284696575,
        turquoise: 1088475391,
        violet: 4001558271,
        wheat: 4125012991,
        white: 4294967295,
        whitesmoke: 4126537215,
        yellow: 4294902015,
        yellowgreen: 2597139199,
    },
}),
    ((
        e,
        {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: n = (e) => new uh(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const a = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            l = (e) => {
                const t = gh(e) || 'Anonymous';
                return (
                    ((e = Vd.str(e) ? l[e] || (l[e] = fh(e, a)) : e[mh] || (e[mh] = fh(e, a))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        Hd(e, (t, n) => {
            Vd.arr(e) && (n = gh(t)), (l[n] = l(t));
        });
    })(
        [
            'a',
            'abbr',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'base',
            'bdi',
            'bdo',
            'big',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'col',
            'colgroup',
            'data',
            'datalist',
            'dd',
            'del',
            'details',
            'dfn',
            'dialog',
            'div',
            'dl',
            'dt',
            'em',
            'embed',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'keygen',
            'label',
            'legend',
            'li',
            'link',
            'main',
            'map',
            'mark',
            'menu',
            'menuitem',
            'meta',
            'meter',
            'nav',
            'noscript',
            'object',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'param',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'script',
            'section',
            'select',
            'small',
            'source',
            'span',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'title',
            'tr',
            'track',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
            'circle',
            'clipPath',
            'defs',
            'ellipse',
            'foreignObject',
            'g',
            'image',
            'line',
            'linearGradient',
            'mask',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'stop',
            'svg',
            'text',
            'tspan',
        ],
        {
            applyAnimatedValues: function (e, t) {
                if (!e.nodeType || !e.setAttribute) return !1;
                const n = 'filter' === e.nodeName || (e.parentNode && 'filter' === e.parentNode.nodeName),
                    { style: r, children: a, scrollTop: l, scrollLeft: o, viewBox: i, ...u } = t,
                    s = Object.values(u),
                    c = Object.keys(u).map((t) =>
                        n || e.hasAttribute(t)
                            ? t
                            : Nh[t] || (Nh[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = Ph(f, r[f]);
                        Ch.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== l && (e.scrollTop = l),
                    void 0 !== o && (e.scrollLeft = o),
                    void 0 !== i && e.setAttribute('viewBox', i);
            },
            createAnimatedStyle: (e) => new Ih(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    );
$.forwardRef(function (e, t) {
    const n = $.useRef(null);
    return (
        $.useEffect(() => {
            const e = n.current;
            if (null !== e)
                return ud.onHitTest((t) => {
                    const n = e.getBoundingClientRect();
                    return n.left <= t.x && t.x <= n.right && n.top <= t.y && t.y <= n.bottom;
                });
        }, []),
        X.jsx('div', {
            ...e,
            ref:
                ((r = [t, n]),
                (e) => {
                    r.forEach((t) =>
                        ((e, t) => {
                            e && ('function' == typeof e ? e(t) : (e.current = t));
                        })(t, e),
                    );
                }),
        })
    );
    var r;
}),
    Re.register({
        strings: ve(() => new De()).singleton(),
        images: ve(() => new Me(window.R.images.gui.maps.icons)).singleton(),
        atlases: ve(() => new Me(window.R.atlases)).singleton(),
        videos: ye(je).singleton(),
        views: ye(Ue).singleton(),
        sounds: ye(Ie).singleton(),
    });
const Dh = { root: '_root_kkglp_1', card: '_card_kkglp_8', 'read-the-docs': '_read-the-docs_kkglp_12' };
function jh() {
    const [e, t] = $.useState(0);
    return X.jsxs('div', {
        className: Dh.base,
        children: [
            X.jsx('div', { children: 'Template' }),
            X.jsxs('button', { onClick: () => t((e) => e + 1), children: ['count is ', e, '!'] }),
        ],
    });
}
!(function (e, { root: t = document.getElementById('root'), withMedia: n = !0 } = {}) {
    var r;
    const a = (null == (r = null == window ? void 0 : window.engine) ? void 0 : r.whenReady) ?? Promise.resolve();
    !(function () {
        const e = (t = window.model, { depth: n = 16, convertArrays: r = !0 } = {}) => {
            var a;
            if (n < 0)
                return (
                    console.warn(
                        'Depth limit has been reached.\n                You can change the limit with second argument.\n                Use _showModel(model, { depth = <number> }) for this. 16 is default.',
                    ),
                    'Depth limit has been reached'
                );
            if (null === t) return null;
            switch (typeof t) {
                case 'number':
                case 'string':
                case 'boolean':
                case 'bigint':
                case 'undefined':
                    return t;
                case 'function':
                    return 'function';
                case 'object': {
                    const l = { depth: n - 1, convertArrays: r },
                        o = (null == (a = t.constructor) ? void 0 : a.name) ?? 'UNKNOWN';
                    switch (!0) {
                        case o.includes('CoherentArrayProxy'):
                            return [...t.values()].map((t) => e(l.convertArrays ? t.value : t, l));
                        case 'UNKNOWN' === o:
                            return 'UNKNOWN_TYPE';
                        case o.includes('ViewModel'):
                        default: {
                            const n = {};
                            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = e(t[r], l));
                            return n;
                        }
                    }
                }
                default:
                    return `Unknown: ${String(t)}`;
            }
        };
        window._showModel = e;
    })();
    const l = n ? yd : V.Fragment;
    a.then(() => {
        $e.createRoot(t).render(X.jsx(l, { children: X.jsx(kd, { children: e }) }));
    });
})(X.jsx(jh, {}));
