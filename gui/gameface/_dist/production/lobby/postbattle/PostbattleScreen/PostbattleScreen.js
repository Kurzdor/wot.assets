/*! For license information please see PostbattleScreen.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
            8380: (e) => {
                'use strict';
                function t(e) {
                    return getComputedStyle(e);
                }
                function a(e, t) {
                    for (var a in t) {
                        var n = t[a];
                        'number' == typeof n && (n += 'px'), (e.style[a] = n);
                    }
                    return e;
                }
                function n(e) {
                    var t = document.createElement('div');
                    return (t.className = e), t;
                }
                var r =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function u(e, t) {
                    if (!r) throw new Error('No element matching method supported');
                    return r.call(e, t);
                }
                function s(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function i(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return u(e, t);
                    });
                }
                var l = function (e) {
                        return 'ps__thumb-' + e;
                    },
                    o = function (e) {
                        return 'ps__rail-' + e;
                    },
                    c = function (e) {
                        return 'ps__button-start-' + e;
                    },
                    _ = function (e) {
                        return 'ps__track_' + e;
                    },
                    m = function (e) {
                        return 'ps__button-end-' + e;
                    },
                    d = 'ps__child--consume',
                    E = 'ps--focus',
                    p = 'ps--clicking',
                    b = function (e) {
                        return 'ps--active-' + e;
                    },
                    h = function (e) {
                        return 'ps--scrolling-' + e;
                    },
                    g = { x: null, y: null },
                    v = { immediately: !1 };
                function A(e, t, a) {
                    void 0 === a && (a = {});
                    var n = e.element.classList,
                        r = h(t);
                    n.contains(r) ? clearTimeout(g[t]) : n.add(r);
                }
                function f(e, t, a) {
                    void 0 === a && (a = {}),
                        Object.assign(v, a).immediately
                            ? e.isAlive && e.element.classList.remove(h(t))
                            : (g[t] = setTimeout(function () {
                                  return e.isAlive && e.element.classList.remove(h(t));
                              }, e.settings.scrollingThreshold));
                }
                var D = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    C = { isEmpty: { configurable: !0 } };
                (D.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (D.prototype.unbind = function (e, t) {
                        var a = this;
                        this.handlers[e] = this.handlers[e].filter(function (n) {
                            return !(!t || n === t) || (a.element.removeEventListener(e, n, !1), !1);
                        });
                    }),
                    (D.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (C.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(D.prototype, C);
                var F = function () {
                    this.eventElements = [];
                };
                function B(e) {
                    return parseInt(e, 10) || 0;
                }
                (F.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new D(e)), this.eventElements.push(t)), t;
                }),
                    (F.prototype.bind = function (e, t, a) {
                        this.eventElement(e).bind(t, a);
                    }),
                    (F.prototype.unbind = function (e, t, a) {
                        var n = this.eventElement(e);
                        n.unbind(t, a), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
                    }),
                    (F.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (F.prototype.once = function (e, t, a) {
                        var n = this.eventElement(e);
                        n.bind(t, function e(r) {
                            n.unbind(t, e), a(r);
                        });
                    });
                var w = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function y() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function S(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var T = function (e, t, a, n, r, u) {
                        var s;
                        if ((void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === u && (u = !1), 'top' === t))
                            s = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                        else {
                            if ('left' !== t) throw new Error('A proper axis should be provided');
                            s = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                        }
                        !(function (e, t, a, n, r, u) {
                            var s = a[0],
                                i = a[1],
                                l = a[2],
                                o = a[3],
                                c = a[4],
                                _ = a[5];
                            void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === u && (u = !1);
                            var m = e.element;
                            e.reach &&
                                ((e.reach[o] = null),
                                m[l] < 1 && (e.reach[o] = 'start'),
                                m[l] > e[s] - e[i] - 1 && (e.reach[o] = 'end'),
                                t &&
                                    !r &&
                                    (m.dispatchEvent(S('ps-scroll-' + o)),
                                    t < 0
                                        ? m.dispatchEvent(S('ps-scroll-' + c))
                                        : t > 0 && m.dispatchEvent(S('ps-scroll-' + _)),
                                    n &&
                                        (function (e, t) {
                                            A(e, t), f(e, t);
                                        })(e, o)),
                                e.reach[o] && (t || u) && m.dispatchEvent(S('ps-' + o + '-reach-' + e.reach[o])));
                        })(e, a, s, n, r, u);
                    },
                    R = function (e, t, n, r) {
                        void 0 === t && (t = !1), void 0 === n && (n = 0), void 0 === r && (r = !1);
                        var u = e.element;
                        if (u) {
                            if (
                                ((e.containerWidth = Math.round(u.getBoundingClientRect().width)),
                                (e.containerHeight = Math.round(u.getBoundingClientRect().height)),
                                (e.contentWidth = Math.round(u.scrollWidth) - 2 * n),
                                (e.contentHeight = Math.round(u.scrollHeight)),
                                !r)
                            ) {
                                e.contentWidth = Math.round(u.scrollWidth) - 2 * n;
                                var l = e.contentWidth - e.containerWidth + n;
                                u.scrollLeft < n ? (u.scrollLeft = n) : u.scrollLeft > l && (u.scrollLeft = l);
                            }
                            var c = Math.floor(u.scrollTop),
                                _ = Math.floor(u.scrollLeft) - n,
                                m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                            u.contains(e.scrollbarXRail) ||
                                (i(u, o('x')).forEach(function (e) {
                                    return s(e);
                                }),
                                u.appendChild(e.scrollbarXRail)),
                                u.contains(e.scrollbarYRail) ||
                                    (i(u, o('y')).forEach(function (e) {
                                        return s(e);
                                    }),
                                    u.appendChild(e.scrollbarYRail)),
                                !e.settings.suppressScrollX &&
                                e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                    ? ((e.scrollbarXActive = !0),
                                      (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                      (e.railXRatio = e.containerWidth / e.railXWidth),
                                      (e.scrollbarXWidth = x(e, B((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                      (e.scrollbarXLeft = B(
                                          ((e.negativeScrollAdjustment + _) * (e.railXWidth - e.scrollbarXWidth)) /
                                              (e.contentWidth - e.containerWidth),
                                      )),
                                      e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                    : (e.scrollbarXActive = !1),
                                !e.settings.suppressScrollY &&
                                e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                    ? ((e.scrollbarYActive = !0),
                                      (e.railYHeight = e.containerHeight - e.railYMarginHeight * m - 15 * m),
                                      (e.railYRatio = e.containerHeight / e.railYHeight),
                                      (e.scrollbarYHeight = x(
                                          e,
                                          B((e.railYHeight * e.containerHeight) / e.contentHeight),
                                      )),
                                      (e.scrollbarYTop = B(
                                          (c * (e.railYHeight - e.scrollbarYHeight)) /
                                              (e.contentHeight - e.containerHeight),
                                      )))
                                    : (e.scrollbarYActive = !1),
                                e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                    (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                                e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                    (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                                (function (e, t, n) {
                                    var r = { width: t.railXWidth },
                                        u = Math.floor(e.scrollTop);
                                    t.isRtl
                                        ? (r.left =
                                              t.negativeScrollAdjustment +
                                              e.scrollLeft +
                                              t.containerWidth -
                                              t.contentWidth)
                                        : (r.left = e.scrollLeft),
                                        t.isScrollbarXUsingBottom
                                            ? (r.bottom = t.scrollbarXBottom - u)
                                            : (r.top = t.scrollbarXTop + u),
                                        a(t.scrollbarXRail, r);
                                    var s = { top: u, height: t.railYHeight };
                                    t.isScrollbarYUsingRight
                                        ? t.isRtl
                                            ? (s.right =
                                                  t.contentWidth -
                                                  (t.negativeScrollAdjustment + e.scrollLeft) -
                                                  t.scrollbarYRight -
                                                  t.scrollbarYOuterWidth)
                                            : (s.right = t.scrollbarYRight - e.scrollLeft)
                                        : t.isRtl
                                          ? (s.left =
                                                t.negativeScrollAdjustment +
                                                e.scrollLeft +
                                                2 * t.containerWidth -
                                                t.contentWidth -
                                                t.scrollbarYLeft -
                                                t.scrollbarYOuterWidth)
                                          : (s.left = t.scrollbarYLeft + e.scrollLeft),
                                        a(t.scrollbarYRail, s),
                                        a(t.scrollbarX, {
                                            left: t.scrollbarXLeft,
                                            width: t.scrollbarXWidth - t.railBorderXWidth * n,
                                        }),
                                        a(t.scrollbarY, {
                                            top: t.scrollbarYTop,
                                            height: t.scrollbarYHeight - t.railBorderYWidth * n,
                                        });
                                })(u, e, m),
                                e.scrollbarXButtonStart.classList.toggle('disabled', _ < 1),
                                e.scrollbarXButtonEnd.classList.toggle(
                                    'disabled',
                                    _ + e.containerWidth >= e.contentWidth,
                                ),
                                e.scrollbarYButtonStart.classList.toggle('disabled', u.scrollTop < 1),
                                e.scrollbarYButtonEnd.classList.toggle(
                                    'disabled',
                                    u.scrollTop + e.containerHeight >= e.contentHeight,
                                ),
                                e.scrollbarXActive
                                    ? (u.classList.add(b('x')), T(e, 'left', _ - e.lastScrollLeft, !0, t))
                                    : (u.classList.remove(b('x')),
                                      (e.scrollbarXWidth = 0),
                                      (e.scrollbarXLeft = 0),
                                      (u.scrollLeft = 0)),
                                e.scrollbarYActive
                                    ? (u.classList.add(b('y')), T(e, 'top', u.scrollTop - e.lastScrollTop, !0, t))
                                    : (u.classList.remove(b('y')),
                                      (e.scrollbarYHeight = 0),
                                      (e.scrollbarYTop = 0),
                                      (u.scrollTop = 0)),
                                (e.lastScrollTop = c),
                                (e.lastScrollLeft = _),
                                (e.scrollTopPercent = u.scrollTop / u.scrollHeight),
                                (e.scrollLeftPercent = u.scrollLeft / u.scrollWidth);
                        }
                    };
                function x(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
                    );
                }
                var N = {
                        linear: function (e) {
                            return e;
                        },
                        easeInQuad: function (e) {
                            return e * e;
                        },
                        easeOutQuad: function (e) {
                            return e * (2 - e);
                        },
                        easeInOutQuad: function (e) {
                            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
                        },
                        easeInCubic: function (e) {
                            return e * e * e;
                        },
                        easeOutCubic: function (e) {
                            return --e * e * e + 1;
                        },
                        easeInOutCubic: function (e) {
                            return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                        },
                        easeInQuart: function (e) {
                            return e * e * e * e;
                        },
                        easeOutQuart: function (e) {
                            return 1 - --e * e * e * e;
                        },
                        easeInOutQuart: function (e) {
                            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
                        },
                        easeInQuint: function (e) {
                            return e * e * e * e * e;
                        },
                        easeOutQuint: function (e) {
                            return 1 + --e * e * e * e * e;
                        },
                        easeInOutQuint: function (e) {
                            return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
                        },
                    },
                    L = { breakBounds: !1, startBound: 0, endBound: 0 },
                    P = function (e) {
                        var t = e.scrollableDomEle,
                            a = e.onAnimationCompleteCallback,
                            n = e.direction,
                            r = e.onRefUpdateCallback,
                            u = e.duration,
                            s = e.cubicBezierPoints,
                            i = e.easingPreset,
                            l = e.scrollAmount,
                            o = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = L);
                        var _ = null,
                            m = null,
                            d = null,
                            E = null,
                            p = t === window,
                            b = ['left', 'right'].indexOf(n) > -1,
                            h = ['right', 'bottom'].indexOf(n) > -1;
                        b
                            ? ((m = p ? 'scrollX' : 'scrollLeft'),
                              (E = p ? 'innerWidth' : 'width'),
                              (d = 'scrollWidth'))
                            : ((m = p ? 'scrollY' : 'scrollTop'),
                              (E = p ? 'innerHeight' : 'height'),
                              (d = 'scrollHeight'));
                        var g = t[m],
                            v = (function (e) {
                                var t,
                                    a = e.scrollableDomEle,
                                    n = e.elementLengthProp,
                                    r = e.initialScrollPosition,
                                    u = e.isHorizontalDirection,
                                    s = e.scrollLengthProp,
                                    i = e.direction;
                                if (e.isWindow) {
                                    var l = document.documentElement;
                                    t = u ? l.offsetWidth : l.offsetHeight;
                                } else t = (a[s] - a.getBoundingClientRect()[n]) | 0;
                                return ['left', 'top'].includes(i) ? r : t - r;
                            })({
                                isWindow: p,
                                scrollableDomEle: t,
                                elementLengthProp: E,
                                initialScrollPosition: g,
                                isHorizontalDirection: b,
                                scrollLengthProp: d,
                                direction: n,
                            });
                        !isNaN(l) && l < v && (v = l);
                        var A = function e(n) {
                            if (!o || !o()) {
                                var l = n - _,
                                    d = (function (e) {
                                        var t = e.easingPreset,
                                            a = e.cubicBezierPoints,
                                            n = e.runTime / e.duration;
                                        if (N.hasOwnProperty(t)) return N[t](n);
                                        if (
                                            a &&
                                            !isNaN(a.x1) &&
                                            !isNaN(a.y1) &&
                                            !isNaN(a.x2) &&
                                            !isNaN(a.y2) &&
                                            a.x1 >= 0 &&
                                            a.x2 >= 0
                                        )
                                            return (function (e) {
                                                var t,
                                                    a = e.percentTimeElapsed,
                                                    n = e.x1,
                                                    r = e.y1,
                                                    u = e.x2,
                                                    s = e.y2;
                                                return (
                                                    1 -
                                                    (n * ((t = a), Math.pow(t, 3)) +
                                                        r *
                                                            (function (e) {
                                                                return 3 * e * e * (1 - e);
                                                            })(a) +
                                                        u *
                                                            (function (e) {
                                                                return 3 * e * Math.pow(1 - e, 2);
                                                            })(a) +
                                                        s *
                                                            (function (e) {
                                                                return Math.pow(1 - e, 3);
                                                            })(a))
                                                );
                                            })({ percentTimeElapsed: n, x1: a.x1, x2: a.x2, y1: a.y1, y2: a.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: i, cubicBezierPoints: s, runTime: l, duration: u });
                                if (!isNaN(d)) {
                                    var E = Math.round(d * v),
                                        A = h ? E + g : v - E;
                                    if (
                                        (c.breakBounds &&
                                            (A < c.startBound
                                                ? (A = c.startBound)
                                                : A > c.endBound && (A = c.endBound)),
                                        l < u)
                                    ) {
                                        if (p) {
                                            var f = b ? A : 0,
                                                D = b ? 0 : A;
                                            window.scrollTo(f, D);
                                        } else t[m] = A;
                                        r && r(A), requestAnimationFrame(e);
                                    } else a && a();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (_ = e), A(e);
                        });
                    },
                    k = function (e, t, a) {
                        return function (n) {
                            t = t.toLowerCase();
                            var r = null,
                                u = function () {
                                    if (1 === n.buttons) {
                                        if (
                                            !n.target.closest('.ps__rail-' + t) ||
                                            !n.target.closest('.ps__track_' + t)
                                        ) {
                                            var u = (function (e) {
                                                    var t = e.e,
                                                        a = e.i;
                                                    return 'y' === e.axis
                                                        ? {
                                                              cursorPosition: t.screenY,
                                                              windowScrolled: window.pageYOffset,
                                                              elementPosition:
                                                                  a.scrollbarYRail.getBoundingClientRect().top,
                                                          }
                                                        : {
                                                              cursorPosition: t.screenX,
                                                              windowScrolled: window.pageXOffset,
                                                              elementPosition:
                                                                  a.scrollbarXRail.getBoundingClientRect().left,
                                                          };
                                                })({ axis: t, e: n, i: e }),
                                                s = u.cursorPosition - u.windowScrolled - u.elementPosition,
                                                i = (function (e) {
                                                    var t = e.i;
                                                    return e.cursorPositionOnRail >
                                                        ('y' === e.axis ? t.scrollbarYTop : t.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: s, i: e });
                                            (function (e) {
                                                var t = e.axis,
                                                    a = e.cursorPositionOnRail,
                                                    n = e.direction,
                                                    r = e.i,
                                                    u = (function (e) {
                                                        var t = e.i,
                                                            a = e.cursorPositionOnRail;
                                                        if ('y' === e.axis) {
                                                            var n = t.scrollbarY.offsetTop,
                                                                r = n + t.scrollbarYHeight;
                                                            return a >= n && a <= r;
                                                        }
                                                        var u = t.scrollbarX.offsetLeft,
                                                            s = u + t.scrollbarXWidth;
                                                        return a >= u && a <= s;
                                                    })({ axis: t, i: r, cursorPositionOnRail: a });
                                                return u
                                                    ? ((function (e) {
                                                          var t = e.axis,
                                                              a = e.i,
                                                              n = e.cursorPositionOnRail,
                                                              r = (function (e, t) {
                                                                  if ('y' === e) {
                                                                      var a = t.contentHeight - t.containerHeight;
                                                                      return {
                                                                          rail: t.railYHeight,
                                                                          content: t.contentHeight,
                                                                          scrollbar: t.scrollbarYHeight,
                                                                          maxScroll: a,
                                                                      };
                                                                  }
                                                                  var n = t.contentWidth - t.containerWidth;
                                                                  return {
                                                                      rail: t.railXWidth,
                                                                      content: t.contentWidth,
                                                                      scrollbar: t.scrollbarXWidth,
                                                                      maxScroll: n,
                                                                  };
                                                              })(t, a),
                                                              u = (n - r.scrollbar / 2) / r.rail,
                                                              s = Math.round(
                                                                  Math.min(r.maxScroll, Math.max(0, r.content * u)),
                                                              );
                                                          'y' === t
                                                              ? (a.element.scrollTop = s)
                                                              : (a.element.scrollLeft = s);
                                                      })({ axis: t, i: r, cursorPositionOnRail: a }),
                                                      !0)
                                                    : ('y' === t
                                                          ? (r.element.scrollTop += n * r.containerHeight)
                                                          : (r.element.scrollLeft += n * r.containerWidth),
                                                      !1);
                                            })({ axis: t, cursorPositionOnRail: s, direction: i, i: e }) &&
                                                clearTimeout(r),
                                                R(e, !1, a);
                                        }
                                        n.stopPropagation();
                                    }
                                };
                            u(),
                                (r = setInterval(u, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(r);
                                });
                        };
                    };
                function I(e, t, a) {
                    var n = a[0],
                        r = a[1],
                        u = a[2],
                        s = a[3],
                        i = a[4],
                        l = a[5],
                        o = a[6],
                        c = a[7],
                        _ = a[8],
                        m = e.element,
                        d = null,
                        E = null,
                        b = null;
                    function h(a) {
                        (m[o] = B(d + b * (a[u] - E))), A(e, c), R(e, !1, t), a.stopPropagation(), a.preventDefault();
                    }
                    function g() {
                        f(e, c), e[_].classList.remove(p), e.event.unbind(e.ownerDocument, 'mousemove', h);
                    }
                    e.event.bind(e[i], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((d = m[o]),
                            (E = t[u]),
                            (b = (e[r] - e[n]) / (e[s] - e[l])),
                            e.event.bind(e.ownerDocument, 'mousemove', h),
                            e.event.once(e.ownerDocument, 'mouseup', g),
                            e[_].classList.add(p),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var M = 1e3,
                    O = {
                        'click-rail': function (e, t) {
                            e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', k(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', k(e, 'x', t));
                        },
                        'drag-thumb': function (e, t) {
                            I(e, t, [
                                'containerWidth',
                                'contentWidth',
                                'screenX',
                                'railXWidth',
                                'scrollbarX',
                                'scrollbarXWidth',
                                'scrollLeft',
                                'x',
                                'scrollbarXRail',
                            ]),
                                I(e, t, [
                                    'containerHeight',
                                    'contentHeight',
                                    'screenY',
                                    'railYHeight',
                                    'scrollbarY',
                                    'scrollbarYHeight',
                                    'scrollTop',
                                    'y',
                                    'scrollbarYRail',
                                ]);
                        },
                        keyboard: function (e, t) {
                            var a = e.element;
                            e.event.bind(e.ownerDocument, 'keydown', function (n) {
                                if (
                                    !((n.isDefaultPrevented && n.isDefaultPrevented()) || n.defaultPrevented) &&
                                    u(a, ':hover')
                                ) {
                                    var r,
                                        s = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (s) {
                                        if ('IFRAME' === s.tagName) s = s.contentDocument.activeElement;
                                        else for (; s.shadowRoot; ) s = s.shadowRoot.activeElement;
                                        if (
                                            u((r = s), 'input,[contenteditable]') ||
                                            u(r, 'select,[contenteditable]') ||
                                            u(r, 'textarea,[contenteditable]') ||
                                            u(r, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var i = 0,
                                        l = 0;
                                    switch (n.which) {
                                        case 37:
                                            i = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            l = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            i = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            l = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            l = n.shiftKey ? e.containerHeight : -e.containerHeight;
                                            break;
                                        case 33:
                                            l = e.containerHeight;
                                            break;
                                        case 34:
                                            l = -e.containerHeight;
                                            break;
                                        case 36:
                                            l = e.contentHeight;
                                            break;
                                        case 35:
                                            l = -e.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.settings.suppressScrollX && 0 !== i) ||
                                        (e.settings.suppressScrollY && 0 !== l) ||
                                        ((a.scrollTop -= l),
                                        (a.scrollLeft += i),
                                        R(e, !1, t),
                                        (function (t, n) {
                                            var r = Math.floor(a.scrollTop);
                                            if (0 === t) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === r && n > 0) ||
                                                    (r >= e.contentHeight - e.containerHeight && n < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var u = a.scrollLeft;
                                            if (0 === n) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === u && t < 0) ||
                                                    (u >= e.contentWidth - e.containerWidth && t > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(i, l) && n.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, a) {
                            var n = e.element;
                            function r(r) {
                                var u = (function (e) {
                                        var t = -1 * e.deltaX,
                                            a = e.deltaY;
                                        return (
                                            (void 0 !== t && void 0 !== a) ||
                                                ((t = (-1 * e.wheelDeltaX) / 6), (a = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (a *= 10)),
                                            t != t && a != a && ((t = 0), (a = e.wheelDelta)),
                                            e.shiftKey ? [-a, -t] : [t, a]
                                        );
                                    })(r),
                                    s = u[0],
                                    i = u[1];
                                if (
                                    !(function (e, a, r) {
                                        if (!w.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(e)) return !1;
                                        for (var u = e; u && u !== n; ) {
                                            if (u.classList.contains(d)) return !0;
                                            var s = t(u);
                                            if (
                                                [s.overflow, s.overflowX, s.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var i = u.scrollHeight - u.clientHeight;
                                                if (
                                                    i > 0 &&
                                                    !((0 === u.scrollTop && r > 0) || (u.scrollTop === i && r < 0))
                                                )
                                                    return !0;
                                                var l = u.scrollWidth - u.clientWidth;
                                                if (
                                                    l > 0 &&
                                                    !((0 === u.scrollLeft && a < 0) || (u.scrollLeft === l && a > 0))
                                                )
                                                    return !0;
                                            }
                                            u = u.parentNode;
                                        }
                                        return !1;
                                    })(r.target, s, i)
                                ) {
                                    var l = !1,
                                        o = (s * e.settings.wheelSpeed) | 0,
                                        c = (i * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (i ? (n.scrollTop -= c) : (n.scrollTop += o), (l = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (s ? (n.scrollLeft += o) : (n.scrollLeft -= c), (l = !0))
                                        : ((n.scrollTop -= c), (n.scrollLeft += o)),
                                        R(e, !1, a),
                                        (l =
                                            l ||
                                            (function (t, a) {
                                                var r = Math.floor(n.scrollTop),
                                                    u = 0 === n.scrollTop,
                                                    s = r + n.offsetHeight === n.scrollHeight,
                                                    i = 0 === n.scrollLeft,
                                                    l = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                                return (
                                                    !(Math.abs(a) > Math.abs(t) ? u || s : i || l) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(s, i)),
                                        l && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
                                }
                            }
                            e.event.bind(n, 'wheel', r),
                                void 0 !== window.onmousewheel && e.event.bind(n, 'mousewheel', r);
                        },
                        touch: function (e, a) {
                            if (w.supportsTouch || w.supportsIePointer) {
                                var n = e.element,
                                    r = {},
                                    u = 0,
                                    s = {},
                                    i = null;
                                w.supportsTouch
                                    ? (e.event.bind(n, 'touchstart', _),
                                      e.event.bind(n, 'touchmove', m),
                                      e.event.bind(n, 'touchend', E))
                                    : w.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(n, 'pointerdown', _),
                                            e.event.bind(n, 'pointermove', m),
                                            e.event.bind(n, 'pointerup', E))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(n, 'MSPointerDown', _),
                                            e.event.bind(n, 'MSPointerMove', m),
                                            e.event.bind(n, 'MSPointerUp', E)));
                            }
                            function l(t, r) {
                                (n.scrollTop -= r), (n.scrollLeft -= t), R(e, !1, a);
                            }
                            function o(e) {
                                return e.targetTouches ? e.targetTouches[0] : e;
                            }
                            function c(e) {
                                return !(
                                    (e.pointerType && 'pen' === e.pointerType && 0 === e.buttons) ||
                                    ((!e.targetTouches || 1 !== e.targetTouches.length) &&
                                        (!e.pointerType ||
                                            'mouse' === e.pointerType ||
                                            e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                                );
                            }
                            function _(e) {
                                if (c(e)) {
                                    var t = o(e);
                                    (r.pageX = t.pageX),
                                        (r.pageY = t.pageY),
                                        (u = new Date().getTime()),
                                        null !== i && clearInterval(i);
                                }
                            }
                            function m(a) {
                                if (c(a)) {
                                    var i = o(a),
                                        _ = { pageX: i.pageX, pageY: i.pageY },
                                        m = _.pageX - r.pageX,
                                        E = _.pageY - r.pageY;
                                    if (
                                        (function (e, a, r) {
                                            if (!n.contains(e)) return !1;
                                            for (var u = e; u && u !== n; ) {
                                                if (u.classList.contains(d)) return !0;
                                                var s = t(u);
                                                if (
                                                    [s.overflow, s.overflowX, s.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var i = u.scrollHeight - u.clientHeight;
                                                    if (
                                                        i > 0 &&
                                                        !((0 === u.scrollTop && r > 0) || (u.scrollTop === i && r < 0))
                                                    )
                                                        return !0;
                                                    var l = u.scrollLeft - u.clientWidth;
                                                    if (
                                                        l > 0 &&
                                                        !(
                                                            (0 === u.scrollLeft && a < 0) ||
                                                            (u.scrollLeft === l && a > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                u = u.parentNode;
                                            }
                                            return !1;
                                        })(a.target, m, E)
                                    )
                                        return;
                                    l(m, E), (r = _);
                                    var p = new Date().getTime(),
                                        b = p - u;
                                    b > 0 && ((s.x = m / b), (s.y = E / b), (u = p)),
                                        (function (t, a) {
                                            var r = Math.floor(n.scrollTop),
                                                u = n.scrollLeft,
                                                s = Math.abs(t),
                                                i = Math.abs(a);
                                            if (i > s) {
                                                if (
                                                    (a < 0 && r === e.contentHeight - e.containerHeight) ||
                                                    (a > 0 && 0 === r)
                                                )
                                                    return 0 === window.scrollY && a > 0 && w.isChrome;
                                            } else if (
                                                s > i &&
                                                ((t < 0 && u === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === u))
                                            )
                                                return !0;
                                            return !0;
                                        })(m, E) && a.preventDefault();
                                }
                            }
                            function E() {
                                e.settings.swipeEasing &&
                                    (clearInterval(i),
                                    (i = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(i)
                                            : s.x || s.y
                                              ? Math.abs(s.x) < 0.01 && Math.abs(s.y) < 0.01
                                                  ? clearInterval(i)
                                                  : (l(30 * s.x, 30 * s.y), (s.x *= 0.8), (s.y *= 0.8))
                                              : clearInterval(i);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var a = e.element,
                                n = null,
                                r = !1,
                                u = 0,
                                s = 0,
                                i = 0;
                            function l() {
                                e.onScroll();
                            }
                            function o(n, r, u, s) {
                                void 0 === u && (u = null),
                                    void 0 === s && (s = !1),
                                    P({
                                        scrollableDomEle: a,
                                        direction: 'right',
                                        onRefUpdateCallback: l,
                                        duration: r,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: n,
                                        onCheckForBreakCallback: u,
                                        boundsInfo: {
                                            breakBounds: s,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    });
                            }
                            function c() {
                                if (r) return r;
                            }
                            function _() {
                                i = 0;
                            }
                            function m(r) {
                                if (e.scrollbarXActive) {
                                    var l = n - r.screenX;
                                    (a.scrollLeft += l), (n = r.screenX);
                                    var o = new Date().getTime();
                                    if (((u = (l / (o - s)) * 1e3), (s = o), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === a.scrollLeft || a.scrollLeft === c
                                            ? 0 === i && (i = window.setTimeout(_, 250))
                                            : 0 !== i && (window.clearTimeout(i), (i = 0));
                                    }
                                    A(e, 'x'),
                                        A(e, 'dragging', { immediately: !0 }),
                                        r.stopPropagation(),
                                        r.preventDefault();
                                }
                            }
                            function d(e) {
                                (n = e.screenX),
                                    (r = !0),
                                    requestAnimationFrame(function () {
                                        r = !1;
                                    }),
                                    (s = new Date().getTime());
                            }
                            function E(n) {
                                var r = e.contentWidth - e.containerWidth + t;
                                a.scrollLeft < t
                                    ? o(t - a.scrollLeft, M, c)
                                    : a.scrollLeft > r
                                      ? o(r - a.scrollLeft, M, c)
                                      : new Date().getTime() - s < 100 && o(u / 4, M, c, !0),
                                    f(e, 'x'),
                                    f(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(p),
                                    e.event.unbind(e.ownerDocument, 'mousemove', m);
                            }
                            function b() {
                                r = !0;
                            }
                            a.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((n = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', m),
                                        e.event.once(e.ownerDocument, 'mouseup', E),
                                        e.event.once(e.ownerDocument, 'mousedown', d),
                                        e.event.once(a, 'wheel', b),
                                        e.scrollbarXRail.classList.add(p),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    H = function (e, r) {
                        var u = this;
                        if (
                            (void 0 === r && (r = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var s in ((this.element = e),
                        e.classList.add('ps'),
                        (this.settings = {
                            handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch', 'drag-move'],
                            maxScrollbarLength: null,
                            minScrollbarLength: null,
                            scrollingThreshold: 1e3,
                            scrollXMarginOffset: 0,
                            scrollYMarginOffset: 0,
                            suppressScrollX: !1,
                            suppressScrollY: !1,
                            swipeEasing: !0,
                            useBothWheelAxes: !1,
                            wheelPropagation: !0,
                            wheelSpeed: 10,
                            enableHorizontalScroll: !1,
                            animationDuration: 1e3,
                            animationEasingPreset: 'easeInOutQuint',
                            isDisableScrollToLastPositionOnResize: !1,
                            overScrollWidth: 0,
                        }),
                        r))
                            u.settings[s] = r[s];
                        (this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null);
                        var i,
                            d,
                            p = function () {
                                return e.classList.add(E);
                            },
                            b = function () {
                                return e.classList.remove(E);
                            };
                        (this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((d = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (i = e.scrollLeft < 0),
                                (e.scrollLeft = d),
                                i)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new F()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = n(o('x'))),
                            (this.scrollbarXButtonStart = n(c('x'))),
                            (this.scrollbarXButtonEnd = n(m('x'))),
                            (this.scrollbarXTrack = n(_('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = n(l('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', p),
                            this.event.bind(this.scrollbarX, 'blur', b),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = n(o('y'))),
                            (this.scrollbarYButtonStart = n(c('y'))),
                            (this.scrollbarYButtonEnd = n(m('y'))),
                            (this.scrollbarYTrack = n(_('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = n(l('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', p),
                            this.event.bind(this.scrollbarY, 'blur', b),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            y().then(function () {
                                var n = t(u.scrollbarXRail);
                                (u.scrollbarXBottom = parseInt(n.bottom, 10)),
                                    isNaN(u.scrollbarXBottom)
                                        ? ((u.isScrollbarXUsingBottom = !1), (u.scrollbarXTop = B(n.top)))
                                        : (u.isScrollbarXUsingBottom = !0),
                                    (u.railBorderXWidth = B(n.borderLeftWidth) + B(n.borderRightWidth)),
                                    a(u.scrollbarXRail, { display: 'block' }),
                                    (u.railXMarginWidth = B(n.marginLeft) + B(n.marginRight)),
                                    a(u.scrollbarXRail, { display: '' }),
                                    (u.railXWidth = null),
                                    (u.railXRatio = null);
                                var r = t(u.scrollbarYRail);
                                (u.scrollbarYRight = parseInt(r.right, 10)),
                                    isNaN(u.scrollbarYRight)
                                        ? ((u.isScrollbarYUsingRight = !1), (u.scrollbarYLeft = B(r.left)))
                                        : (u.isScrollbarYUsingRight = !0),
                                    (u.scrollbarYOuterWidth = u.isRtl
                                        ? (function (e) {
                                              var a = t(e);
                                              return (
                                                  B(a.width) +
                                                  B(a.paddingLeft) +
                                                  B(a.paddingRight) +
                                                  B(a.borderLeftWidth) +
                                                  B(a.borderRightWidth)
                                              );
                                          })(u.scrollbarY)
                                        : null),
                                    (u.railBorderYWidth = B(r.borderTopWidth) + B(r.borderBottomWidth)),
                                    a(u.scrollbarYRail, { display: 'block' }),
                                    (u.railYMarginHeight = B(r.marginTop) + B(r.marginBottom)),
                                    a(u.scrollbarXRail, { display: '' }),
                                    a(u.scrollbarYRail, { display: '' }),
                                    (u.railYHeight = null),
                                    (u.railYRatio = null),
                                    (u.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= u.contentWidth - u.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= u.contentHeight - u.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (u.isAlive = !0),
                                    u.settings.handlers.forEach(function (e) {
                                        return O[e](u, u.settings.overScrollWidth);
                                    }),
                                    (u.boundHandleButtonEnter = u.handleMouseEnter.bind(u)),
                                    (u.boundHandleMouseLeave = u.handleMouseLeave.bind(u)),
                                    (u.boundHandleMouseEnter = u.handleMouseEnter.bind(u)),
                                    (u.boundPlayClickSound = u.playClickSound.bind(u)),
                                    u.scrollbarYButtonStart.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarYButtonEnd.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarXButtonStart.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarXButtonEnd.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarXButtonStart.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarXButtonEnd.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarYButtonStart.addEventListener('mouseenter', u.boundHandleButtonEnter),
                                    u.scrollbarYButtonEnd.addEventListener('mouseenter', u.boundHandleButtonEnter),
                                    u.scrollbarYButtonStart.addEventListener('mouseleave', u.boundHandleMouseLeave),
                                    u.scrollbarYButtonEnd.addEventListener('mouseleave', u.boundHandleMouseLeave),
                                    u.scrollbarY.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarX.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarY.addEventListener('mouseleave', u.boundHandleMouseLeave),
                                    u.scrollbarY.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarX.addEventListener('mousedown', u.boundPlayClickSound),
                                    (u.lastScrollTop = Math.floor(e.scrollTop)),
                                    (u.lastScrollLeft = e.scrollLeft),
                                    (u.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (u.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    u.event.bind(u.element, 'scroll', function (e) {
                                        return u.onScroll(e);
                                    }),
                                    u.settings.enableHorizontalScroll &&
                                        u.event.bind(u.element, 'wheel', function (e) {
                                            return u.onWheel(e);
                                        }),
                                    R(u, !1, u.settings.overScrollWidth, !1);
                            });
                    };
                (H.prototype._getAnimationSettings = function (e, t, a, n) {
                    var r = this,
                        u = 0;
                    return (
                        null !== this.element &&
                            (u = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - u,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                R(r, !0, r.settings.overScrollWidth, !1), a && a(e);
                            },
                            onAnimationCompleteCallback: function () {
                                n && n();
                            },
                        }
                    );
                }),
                    (H.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (H.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (H.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (H.prototype.handleMouseLeave = function () {}),
                    (H.prototype.update = function () {
                        var e = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            a(this.scrollbarXRail, { display: 'block' }),
                            a(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                B(t(this.scrollbarXRail).marginLeft) + B(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                B(t(this.scrollbarYRail).marginTop) + B(t(this.scrollbarYRail).marginBottom)),
                            a(this.scrollbarXRail, { display: 'none' }),
                            a(this.scrollbarYRail, { display: 'none' }),
                            y().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    R(e, !1, e.settings.overScrollWidth, !1),
                                    T(e, 'top', 0, !1, !1, !0),
                                    T(e, 'left', 0, !1, !1, !0),
                                    a(e.scrollbarXRail, { display: '' }),
                                    a(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (H.prototype.setScrollLeft = function (e, t, a) {
                        P(this._getAnimationSettings(e, 'right', t, a));
                    }),
                    (H.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (H.prototype.setScrollTop = function (e, t, a) {
                        P(this._getAnimationSettings(e, 'bottom', t, a));
                    }),
                    (H.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (H.prototype.onScroll = function (e) {
                        this.isAlive && R(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (H.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (R(this, !1, this.settings.overScrollWidth, !1),
                            T(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (H.prototype.destroy = function () {
                        this.isAlive &&
                            (this.scrollbarYButtonStart.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarYButtonEnd.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonStart.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonEnd.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonStart.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarXButtonEnd.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarYButtonStart.removeEventListener('mouseenter', this.boundHandleButtonEnter),
                            this.scrollbarYButtonEnd.removeEventListener('mouseenter', this.boundHandleButtonEnter),
                            this.scrollbarYButtonStart.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarYButtonEnd.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarY.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarX.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarY.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarY.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarX.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.event.unbindAll(),
                            s(this.scrollbarX),
                            s(this.scrollbarY),
                            s(this.scrollbarXRail),
                            s(this.scrollbarYRail),
                            this.removePsClasses(),
                            (this.element = null),
                            (this.scrollbarX = null),
                            (this.scrollbarY = null),
                            (this.scrollbarXRail = null),
                            (this.scrollbarYRail = null),
                            (this.isAlive = !1));
                    }),
                    (H.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = H);
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
            3532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { mouse: () => i, onResize: () => u });
                var n = a(2472),
                    r = a(1176);
                const u = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    i = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function a() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', a))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', a))
                                : (0, r.R)(!1);
                        }
                        const u = ['down', 'up', 'move'].reduce(
                            (t, a) => (
                                (t[a] = (function (t) {
                                    return (a) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const u = `mouse${t}`,
                                            i = s[t]((e) => a([e, 'outside']));
                                        function l(e) {
                                            a([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(u, l),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(u, l),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(a)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, u, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
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
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => u,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var n = a(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => n });
            },
            2472: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => n });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var n = a(5959);
                const r = { view: a(7641), client: n };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var n = a(2472);
                const r = {
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
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => u.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => F,
                        getScale: () => b,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => D,
                        isFocused: () => A,
                        pxToRem: () => h,
                        remToPx: () => g,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    });
                var n = a(3722),
                    r = a(6112),
                    u = a(6538),
                    s = a(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function o(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: g(t.x), y: g(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : u.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => u });
                const n = ['args'],
                    r = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        u = Object.keys(e);
                                    for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, n);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((r = u),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    u = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, a) => {
                'use strict';
                let n, r;
                a.d(t, { n: () => n }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD');
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
                    })(r || (r = {}));
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                var n = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = n.O.view.addModelObserver(e, a, r);
                        return (
                            u > 0
                                ? ((this._callbacks[u] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(u) : (this._views[a] = [u])))
                                : console.error("Can't add callback for model:", e),
                            u
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const n = this._callbacks[a];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const u = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => u.Z,
                    kH: () => d,
                    B3: () => c,
                    Z5: () => s,
                    lf: () => m,
                    cy: () => i,
                    B0: () => l,
                    c9: () => A,
                    ry: () => v,
                    Sy: () => f,
                });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    a();
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
                        const a = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                const r = n;
                var u = a(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    };
                let l;
                var o;
                ((o = l || (l = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = a(5521),
                    p = a(3138);
                const b = ['args'];
                function h(e, t, a, n, r, u, s) {
                    try {
                        var i = e[u](s),
                            l = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(l) : Promise.resolve(l).then(n, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                        a = arguments;
                                    return new Promise(function (n, r) {
                                        var u = e.apply(t, a);
                                        function s(e) {
                                            h(u, n, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            h(u, n, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    A = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        u = Object.keys(e);
                                    for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, b);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, u, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, u));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    f = () => A(l.CLOSE),
                    D = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var C = a(7572);
                const F = r.instance,
                    B = {
                        DataTracker: u.Z,
                        ViewModel: C.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => A(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => A(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            A(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, r = R.invalid('resId'), u) => {
                            const s = p.O.view.getViewGlobalPosition(),
                                i = a.getBoundingClientRect(),
                                o = i.x,
                                c = i.y,
                                _ = i.width,
                                m = i.height,
                                d = {
                                    x: p.O.view.pxToRem(o) + s.x,
                                    y: p.O.view.pxToRem(c) + s.y,
                                    width: p.O.view.pxToRem(_),
                                    height: p.O.view.pxToRem(m),
                                };
                            A(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: g(d),
                                on: !0,
                                args: u,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, f);
                        },
                        handleViewEvent: A,
                        onBindingsReady: v,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < r.length; t++) a[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = B;
            },
            7193: (e, t, a) => {
                'use strict';
                var n = a(6179),
                    r = a.n(n),
                    u = a(493),
                    s = a.n(u),
                    i = a(4179);
                const l = (e = 1) => {
                        const t = new Error().stack;
                        let a,
                            n = R.invalid('resId');
                        return (
                            t &&
                                ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== a &&
                                    window.subViews[a] &&
                                    (n = window.subViews[a].id)),
                            { caller: a, stack: t, resId: n }
                        );
                    },
                    o = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                let c;
                function _(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function m(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function d(e) {
                    return e.replace(/_\w/g, (e) => e[1].toUpperCase());
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(c || (c = {}));
                const E = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    p = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    b = (e, t, a = c.left) => e.split(t).reduce(a === c.left ? E : p, []),
                    h = (() => {
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
                    g = ['zh_cn', 'zh_sg', 'zh_tw'];
                let v;
                var A;
                ((A = v || (v = {})).SHORT_DATE = 'short-date'),
                    (A.SHORT_TIME = 'short-time'),
                    (A.SHORT_DATE_TIME = 'short-date-time'),
                    (A.FULL_DATE = 'full-date'),
                    (A.FULL_DATE_TIME = 'full-date-time'),
                    (A.MONTH = 'month'),
                    (A.MONTH_DATE = 'month-date'),
                    (A.DATE_MONTH = 'date-month'),
                    (A.MONTH_YEAR = 'month-year'),
                    (A.WEEK_DAY = 'week-day'),
                    (A.WEEK_DAY_TIME = 'week-day-time'),
                    (A.YEAR = 'year'),
                    (A.DATE_YEAR = 'date-year');
                function f(e) {
                    return e.toString().padStart(2, '0');
                }
                Date.now();
                var D = a(3138);
                const C = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    F = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    B = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    w = i.Sw.instance;
                let y;
                var S;
                ((S = y || (y = {})).None = 'None'), (S.Shallow = 'Shallow'), (S.Deep = 'Deep');
                const T = (e = 'model', t = y.Deep) => {
                    const a = (0, n.useState)(0),
                        r = (a[0], a[1]),
                        u = (0, n.useMemo)(() => l(), []),
                        s = u.caller,
                        i = u.resId,
                        c = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        _ = (0, n.useState)(() =>
                            ((e) => {
                                const t = o(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return F(t) ? t.value : t;
                            })(
                                ((e) =>
                                    ((e, t) =>
                                        e.split('.').reduce((e, t) => {
                                            const a = o(`${e}.${t}`, window);
                                            return F(a) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                        }))(e))(c),
                            ),
                        ),
                        m = _[0],
                        d = _[1],
                        E = (0, n.useRef)(-1);
                    return (
                        C(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? y.Deep : y.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== y.None)
                            ) {
                                const a = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === y.Deep
                                            ? (e === m && r((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    n = ((e) => {
                                        const t = ((e) => {
                                                const t = l(),
                                                    a = t.caller,
                                                    n = t.resId,
                                                    r =
                                                        window.__feature && window.__feature !== a && a
                                                            ? `subViews.${a}`
                                                            : '';
                                                return { modelPrefix: r, modelPath: B(r, ''), resId: n };
                                            })(),
                                            a = t.modelPrefix,
                                            n = e.split('.');
                                        if (n.length > 0) {
                                            const e = [n[0]];
                                            return (
                                                n.reduce((t, n) => {
                                                    const r = o(B(a, `${t}.${n}`), window);
                                                    return F(r)
                                                        ? (e.push(r.id), `${t}.${n}.value`)
                                                        : (e.push(n), `${t}.${n}`);
                                                }),
                                                e.reduce((e, t) => e + '.' + t)
                                            );
                                        }
                                        return '';
                                    })(e);
                                E.current = w.addCallback(n, a, i, t === y.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== y.None)
                                return () => {
                                    w.removeCallback(E.current, i);
                                };
                        }, [i, t]),
                        m
                    );
                };
                function x(e) {
                    return e.displayName || e.name || 'Component';
                }
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                i.Sw.instance;
                const L = i.Sw.instance;
                function P(e, t, a) {
                    if (!t && !a) throw new Error('You should define at least one helper function');
                    return function (n) {
                        var u, s;
                        return (
                            (s = u =
                                class extends r().Component {
                                    constructor(n) {
                                        super(n), (this.modelCallbackId = void 0), (this.resId = void 0);
                                        let r = {};
                                        const u = l(),
                                            s = u.caller,
                                            i = u.resId,
                                            c = window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e,
                                            _ = o(c, window);
                                        if (
                                            (t &&
                                                ((r = Object.assign({}, r, t(_))),
                                                (this.modelCallbackId = L.addCallback(
                                                    e,
                                                    (e) => {
                                                        this.setState(t(e));
                                                    },
                                                    i,
                                                )),
                                                (this.resId = i)),
                                            a)
                                        ) {
                                            const e = a(_);
                                            for (const t in e)
                                                Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t].bind(_));
                                        }
                                        this.state = r;
                                    }
                                    componentWillUnmount() {
                                        this.modelCallbackId &&
                                            (L.removeCallback(this.modelCallbackId, this.resId),
                                            (this.modelCallbackId = void 0));
                                    }
                                    render() {
                                        return r().createElement(n, N({}, this.props, this.state));
                                    }
                                }),
                            (u.displayName = `WithModel(${x(n)})`),
                            s
                        );
                    };
                }
                const k = (e, t, a) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && a.extraLarge) ||
                              (t.largeHeight && a.large) ||
                              (t.mediumHeight && a.medium) ||
                              (t.smallHeight && a.small) ||
                              (t.extraSmallHeight && a.extraSmall)
                                ? e
                                : null
                            : e,
                    I = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var M;
                function O(e, t, a) {
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
                        })(e, a),
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
                        })(t, a),
                        u = Math.min(n, r);
                    return {
                        extraLarge: u === a.extraLarge.weight,
                        large: u === a.large.weight,
                        medium: u === a.medium.weight,
                        small: u === a.small.weight,
                        extraSmall: u === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
                    };
                }
                !(function (e) {
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
                })(M || (M = {}));
                const H = D.O.client.getSize('rem'),
                    W = H.width,
                    $ = H.height,
                    U = Object.assign({ width: W, height: $ }, O(W, $, I)),
                    X = (0, n.createContext)(U),
                    G = ['children'],
                    Y = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, G);
                        const r = (0, n.useContext)(X),
                            u = r.extraLarge,
                            s = r.large,
                            i = r.medium,
                            l = r.small,
                            o = r.extraSmall,
                            c = r.extraLargeWidth,
                            _ = r.largeWidth,
                            m = r.mediumWidth,
                            d = r.smallWidth,
                            E = r.extraSmallWidth,
                            p = r.extraLargeHeight,
                            b = r.largeHeight,
                            h = r.mediumHeight,
                            g = r.smallHeight,
                            v = r.extraSmallHeight,
                            A = { extraLarge: p, large: b, medium: h, small: g, extraSmall: v };
                        if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                            if (a.extraLarge && u) return t;
                            if (a.large && s) return t;
                            if (a.medium && i) return t;
                            if (a.small && l) return t;
                            if (a.extraSmall && o) return t;
                        } else {
                            if (a.extraLargeWidth && c) return k(t, a, A);
                            if (a.largeWidth && _) return k(t, a, A);
                            if (a.mediumWidth && m) return k(t, a, A);
                            if (a.smallWidth && d) return k(t, a, A);
                            if (a.extraSmallWidth && E) return k(t, a, A);
                            if (
                                !(
                                    a.extraLargeWidth ||
                                    a.largeWidth ||
                                    a.mediumWidth ||
                                    a.smallWidth ||
                                    a.extraSmallWidth
                                )
                            ) {
                                if (a.extraLargeHeight && p) return t;
                                if (a.largeHeight && b) return t;
                                if (a.mediumHeight && h) return t;
                                if (a.smallHeight && g) return t;
                                if (a.extraSmallHeight && v) return t;
                            }
                        }
                        return null;
                    };
                (Y.defaultProps = {
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
                }),
                    (0, n.memo)(Y);
                const j = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(X),
                        a = (0, n.useState)(t),
                        u = a[0],
                        s = a[1],
                        i = (0, n.useCallback)((e, t) => {
                            const a = D.O.view.pxToRem(e),
                                n = D.O.view.pxToRem(t);
                            s(Object.assign({ width: a, height: n }, O(a, n, I)));
                        }, []);
                    C(() => {
                        engine.on('clientResized', i);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', i), [i]);
                    const l = (0, n.useMemo)(() => Object.assign({}, u), [u]);
                    return r().createElement(X.Provider, { value: l }, e);
                });
                var q = a(6483),
                    z = a.n(q),
                    K = a(926),
                    V = a.n(K);
                let Q, Z, J;
                !(function (e) {
                    (e[(e.ExtraSmall = I.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = I.small.width)] = 'Small'),
                        (e[(e.Medium = I.medium.width)] = 'Medium'),
                        (e[(e.Large = I.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = I.extraLarge.width)] = 'ExtraLarge');
                })(Q || (Q = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = I.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = I.small.width)] = 'Small'),
                            (e[(e.Medium = I.medium.width)] = 'Medium'),
                            (e[(e.Large = I.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = I.extraLarge.width)] = 'ExtraLarge');
                    })(Z || (Z = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = I.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = I.small.height)] = 'Small'),
                            (e[(e.Medium = I.medium.height)] = 'Medium'),
                            (e[(e.Large = I.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = I.extraLarge.height)] = 'ExtraLarge');
                    })(J || (J = {}));
                const ee = () => {
                        const e = (0, n.useContext)(X),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Q.ExtraLarge;
                                    case e.large:
                                        return Q.Large;
                                    case e.medium:
                                        return Q.Medium;
                                    case e.small:
                                        return Q.Small;
                                    case e.extraSmall:
                                        return Q.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Q.ExtraSmall;
                                }
                            })(e),
                            u = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Z.ExtraLarge;
                                    case e.largeWidth:
                                        return Z.Large;
                                    case e.mediumWidth:
                                        return Z.Medium;
                                    case e.smallWidth:
                                        return Z.Small;
                                    case e.extraSmallWidth:
                                        return Z.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Z.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return J.ExtraLarge;
                                    case e.largeHeight:
                                        return J.Large;
                                    case e.mediumHeight:
                                        return J.Medium;
                                    case e.smallHeight:
                                        return J.Small;
                                    case e.extraSmallHeight:
                                        return J.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), J.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: u, mediaHeight: s, remScreenWidth: t, remScreenHeight: a };
                    },
                    te = ['children', 'className'];
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const ne = {
                        [Z.ExtraSmall]: '',
                        [Z.Small]: V().SMALL_WIDTH,
                        [Z.Medium]: `${V().SMALL_WIDTH} ${V().MEDIUM_WIDTH}`,
                        [Z.Large]: `${V().SMALL_WIDTH} ${V().MEDIUM_WIDTH} ${V().LARGE_WIDTH}`,
                        [Z.ExtraLarge]: `${V().SMALL_WIDTH} ${V().MEDIUM_WIDTH} ${V().LARGE_WIDTH} ${V().EXTRA_LARGE_WIDTH}`,
                    },
                    re = {
                        [J.ExtraSmall]: '',
                        [J.Small]: V().SMALL_HEIGHT,
                        [J.Medium]: `${V().SMALL_HEIGHT} ${V().MEDIUM_HEIGHT}`,
                        [J.Large]: `${V().SMALL_HEIGHT} ${V().MEDIUM_HEIGHT} ${V().LARGE_HEIGHT}`,
                        [J.ExtraLarge]: `${V().SMALL_HEIGHT} ${V().MEDIUM_HEIGHT} ${V().LARGE_HEIGHT} ${V().EXTRA_LARGE_HEIGHT}`,
                    },
                    ue = {
                        [Q.ExtraSmall]: '',
                        [Q.Small]: V().SMALL,
                        [Q.Medium]: `${V().SMALL} ${V().MEDIUM}`,
                        [Q.Large]: `${V().SMALL} ${V().MEDIUM} ${V().LARGE}`,
                        [Q.ExtraLarge]: `${V().SMALL} ${V().MEDIUM} ${V().LARGE} ${V().EXTRA_LARGE}`,
                    },
                    se = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, te);
                        const u = ee(),
                            s = u.mediaWidth,
                            i = u.mediaHeight,
                            l = u.mediaSize;
                        return r().createElement('div', ae({ className: z()(a, ne[s], re[i], ue[l]) }, n), t);
                    },
                    ie = ['children'],
                    le = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, ie);
                        return r().createElement(j, null, r().createElement(se, a, t));
                    };
                let oe;
                !(function (e) {
                    (e.Idle = 'Idle'),
                        (e.StartIn = 'StartIn'),
                        (e.StartOut = 'StartOut'),
                        (e.FirstIterationInDone = 'FirstIterationInDone');
                })(oe || (oe = {}));
                const ce = { state: oe.Idle, setState: (e) => {} },
                    _e = (0, n.createContext)(ce),
                    me = ({ children: e }) => {
                        const t = (0, n.useState)(
                                Object.assign({}, ce, {
                                    setState: (e) => {
                                        u(Object.assign({}, a, { state: e }));
                                    },
                                }),
                            ),
                            a = t[0],
                            u = t[1];
                        return r().createElement(_e.Provider, { value: a }, e);
                    },
                    de = _e;
                function Ee(e) {
                    engine.call('PlaySound', e);
                }
                const pe = {
                        playHighlight() {
                            Ee('highlight');
                        },
                        playClick() {
                            Ee('play');
                        },
                        playYes() {
                            Ee('yes1');
                        },
                    },
                    be = {
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
                    he = [
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
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                class ve extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Ee(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Ee(this.props.soundClick);
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
                            a = e.onClick,
                            n = e.goto,
                            u = e.side,
                            s = e.type,
                            i = e.classNames,
                            l = e.onMouseEnter,
                            o = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        u = Object.keys(e);
                                    for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(e, he)),
                            d = z()(be.base, be[`base__${s}`], be[`base__${u}`], null == i ? void 0 : i.base),
                            E = z()(be.icon, be[`icon__${s}`], be[`icon__${u}`], null == i ? void 0 : i.icon),
                            p = z()(be.glow, null == i ? void 0 : i.glow),
                            b = z()(be.caption, be[`caption__${s}`], null == i ? void 0 : i.caption),
                            h = z()(be.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
                            'div',
                            ge(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(o),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== s && r().createElement('div', { className: be.shine }),
                            r().createElement('div', { className: E }, r().createElement('div', { className: p })),
                            r().createElement('div', { className: b }, t),
                            n && r().createElement('div', { className: h }, n),
                        );
                    }
                }
                function Ae(e, t, a) {
                    const r = (0, n.useContext)(X);
                    let u = Object.entries(r).filter(([e, t]) => !0 === t && e in M);
                    return (
                        a && (u = u.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const n = u.map((e) =>
                                z()(
                                    t[((e, t) => e + '__' + t)(a, e[0])],
                                    t[
                                        ((e, t) => {
                                            return e + ((a = t)[0].toUpperCase() + a.slice(1));
                                            var a;
                                        })(a, e[0])
                                    ],
                                ),
                            );
                            return (e[a] = z()(t[a], ...n)), e;
                        }, {})
                    );
                }
                ve.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const fe = {
                        battleMap: 'MapInfo_battleMap_7d',
                        battleMap__extraSmall: 'MapInfo_battleMap__extraSmall_c6',
                        battleMap__small: 'MapInfo_battleMap__small_16',
                        battleTime: 'MapInfo_battleTime_3f',
                        battleTime__extraSmall: 'MapInfo_battleTime__extraSmall_d6',
                        battleTime__small: 'MapInfo_battleTime__small_59',
                        time: 'MapInfo_time_2c',
                        separator: 'MapInfo_separator_f6',
                    },
                    De = (0, n.memo)(({ battleType: e, arenaName: t, battleFinishTime: a }) => {
                        const n = Ae(['base', 'battleMap', 'battleTime'], fe),
                            u = R.strings.arenas.$dyn(`c_${t}`),
                            s = R.strings.postbattle_screen.detailedStats.statistics.battleFinished();
                        return r().createElement(
                            'div',
                            null,
                            r().createElement(
                                'div',
                                { className: n.battleMap },
                                e &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('span', { className: fe.cell }, e.toLocaleUpperCase()),
                                        r().createElement('span', { className: fe.separator }, '•'),
                                    ),
                                u && r().createElement('span', { className: fe.cell }, u.$dyn('name').toUpperCase()),
                            ),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: n.battleTime },
                                    s,
                                    r().createElement(
                                        'span',
                                        { className: fe.time },
                                        (function (e, t = ' ', a = 'SHORT_FORMAT', n = 'SHORT_FORMAT') {
                                            return `${i.Z5.getDateFormat(e, i.kH[a])}${t}${i.Z5.getTimeFormat(e, i.lf[n])}`;
                                        })(a),
                                    ),
                                ),
                        );
                    });
                let Ce, Fe;
                !(function (e) {
                    (e.NONE = 'none'),
                        (e.PLATOON = 'squadHeader'),
                        (e.NAME = 'playerHeader'),
                        (e.DAMAGE_DEALT = 'damageHeader'),
                        (e.KILLS = 'fragHeader'),
                        (e.EARNED_XP = 'xpHeader'),
                        (e.VEHICLE = 'tankHeader'),
                        (e.MEDAL = 'medalHeader');
                })(Ce || (Ce = {})),
                    (function (e) {
                        (e.Hunter = 'hunter'), (e.Boss = 'boss');
                    })(Fe || (Fe = {}));
                var Be = a(5521);
                const we = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ye(e = Be.n.NONE, t = we, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== Be.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (D.O.view.isEventHandled()) return;
                                D.O.view.setEventHandled(), t(n), a && n.stopPropagation();
                            }
                        }
                    }, [t, e, a]);
                }
                function Se(e, t) {
                    return function (a) {
                        return a in e ? e[a] : void 0 !== t ? t : void 0;
                    };
                }
                const Te = 'personalTab',
                    Re = 'teamTab',
                    xe = 'questsTab',
                    Ne = Se({ 0: 'tie', 1: 'win', 2: 'lose' });
                Se({
                    2: R.strings.postbattle_screen.details.premPlus(),
                    1: R.strings.postbattle_screen.details.prem(),
                    0: R.strings.postbattle_screen.details.noPrem(),
                });
                var Le = a(5659);
                const Pe = () => {
                    const e = (0, n.useContext)(X);
                    return e.extraSmall
                        ? 'extraSmall'
                        : e.small
                          ? 'small'
                          : e.medium
                            ? 'medium'
                            : e.large || e.extraLarge
                              ? 'large'
                              : void 0;
                };
                let ke;
                !(function (e) {
                    (e[(e.Victory = 1)] = 'Victory'), (e[(e.Defeat = 2)] = 'Defeat'), (e[(e.Draw = 0)] = 'Draw');
                })(ke || (ke = {}));
                const Ie = [
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
                function Me(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const Oe = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: i.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    He = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            u = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            c = e.ignoreShowDelay,
                            _ = void 0 !== c && c,
                            m = e.ignoreMouseClick,
                            d = void 0 !== m && m,
                            E = e.decoratorId,
                            p = void 0 === E ? 0 : E,
                            b = e.isEnabled,
                            h = void 0 === b || b,
                            g = e.targetId,
                            v = void 0 === g ? 0 : g,
                            A = e.onShow,
                            f = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Ie);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, n.useMemo)(() => v || l().resId, [v]),
                            B = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (Oe(a, p, { isMouseEvent: !0, on: !0, arguments: Me(r) }, F),
                                    A && A(),
                                    (C.current.isVisible = !0));
                            }, [a, p, r, F, A]),
                            w = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        Oe(a, p, { on: !1 }, F),
                                        C.current.isVisible && f && f(),
                                        (C.current.isVisible = !1);
                                }
                            }, [a, p, F, f]),
                            y = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === h && w();
                            }, [h, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            ),
                            h
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(B, _ ? 100 : 400)),
                                                          u && u(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  w(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === d && w(), null == o || o(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === d && w(), null == i || i(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          D,
                                      ),
                                  )
                                : t
                        );
                        var S;
                    },
                    We = ['children'];
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const Ue = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                u = Object.keys(e);
                            for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, We);
                    return r().createElement(
                        He,
                        $e(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
                let Xe, Ge;
                !(function (e) {
                    (e.default = 'default'), (e.big = 'big');
                })(Xe || (Xe = {})),
                    (function (e) {
                        (e.left = 'left'), (e.right = 'right');
                    })(Ge || (Ge = {}));
                const Ye = 'right',
                    je = {
                        base: 'Achievement_base_e6',
                        base__big: 'Achievement_base__big_77',
                        base__extraSmall: 'Achievement_base__extraSmall_01',
                        base__small: 'Achievement_base__small_31',
                    },
                    qe = ({ name: e, iconName: t, size: a = Xe.default }) => {
                        const u = Ae(['base'], je),
                            s = a === Xe.big,
                            i = (function (e, t, a) {
                                return 'marksOnGun' === e
                                    ? R.images.gui.maps.icons.marksOnGun.c_95x85.$dyn(t)
                                    : a
                                      ? R.images.gui.maps.icons.achievement.big.$dyn(t)
                                      : R.images.gui.maps.icons.achievement.$dyn(t);
                            })(e, t, s),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            o = z()(u.base, s && je.base__big);
                        return r().createElement('div', { className: o, style: l });
                    },
                    ze = {
                        base: 'AchievementsList_base_36',
                        base__centered: 'AchievementsList_base__centered_44',
                        base__reversed: 'AchievementsList_base__reversed_b3',
                        item: 'AchievementsList_item_72',
                        base__big: 'AchievementsList_base__big_cd',
                        ghost: 'AchievementsList_ghost_ef',
                        base__extraSmall: 'AchievementsList_base__extraSmall_55',
                        base__small: 'AchievementsList_base__small_4d',
                        achievementWrapper: 'AchievementsList_achievementWrapper_c2',
                        tooltipArea: 'AchievementsList_tooltipArea_7c',
                        epicRibbon: 'AchievementsList_epicRibbon_4c',
                        base__medium: 'AchievementsList_base__medium_21',
                        base__large: 'AchievementsList_base__large_87',
                        base__extraLarge: 'AchievementsList_base__extraLarge_08',
                    };
                function Ke() {
                    return (
                        (Ke =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ke.apply(this, arguments)
                    );
                }
                const Ve = ({ achievements: e, position: t = Ge.right, size: a = Xe.default, isCentered: u = !1 }) => {
                    const s = Ae(['base'], ze),
                        i = a === Xe.big,
                        l = z()(s.base, u && ze.base__centered, t === Ge.left && ze.base__reversed, i && ze.base__big),
                        o = (0, n.useCallback)(
                            (e) => ({
                                tooltipId: 'achievementTooltip',
                                achievementID: e.achievementID,
                                achievementName: e.name,
                                isPersonal: e.isPersonal,
                            }),
                            [],
                        );
                    return r().createElement(
                        'div',
                        { className: l },
                        e.map((e) => {
                            const t = e.value;
                            return r().createElement(
                                'div',
                                { key: t.iconName, className: ze.item },
                                t.isEpic && r().createElement('div', { className: ze.epicRibbon }),
                                r().createElement(
                                    'div',
                                    { className: ze.ghost },
                                    r().createElement(
                                        Ue,
                                        { args: o(t) },
                                        r().createElement('div', { className: ze.tooltipArea }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: ze.achievementWrapper },
                                    r().createElement(qe, Ke({}, t, { size: a })),
                                ),
                            );
                        }),
                    );
                };
                let Qe;
                !(function (e) {
                    (e.Show = 'show'),
                        (e.Hidden = 'hidden'),
                        (e.Disabled = 'disabled'),
                        (e.ShowTimer = 'showTimer'),
                        (e.ShowApplied = 'showApplied');
                })(Qe || (Qe = {}));
                const Ze = (e) => e.maxBonusCount === e.usedBonusCount,
                    Je = (e, t) =>
                        (({ isPremiumBought: e }, t) => e && t.isEnabled)(e, t)
                            ? ((e, t) =>
                                  ((e) => Ze(e) && 0 === e.restriction)(t)
                                      ? Qe.ShowTimer
                                      : ((e) => e.restriction > 1)(t)
                                        ? Ze(t)
                                            ? Qe.ShowTimer
                                            : Qe.Disabled
                                        : ((e) => 1 === e.restriction)(t)
                                          ? Qe.ShowApplied
                                          : Qe.Show)(0, t)
                            : Qe.Hidden,
                    et = ({ fill: e, total: t, reverse: a = !1, children: u }) => {
                        const s = (0, n.useCallback)((e, t) => (0, n.cloneElement)(u(t, e), { key: e }), [u]),
                            i = a ? t - e : e,
                            l = [];
                        for (let e = 0; e < t; e++) l.push(s(e, Boolean(a) !== e < i));
                        return r().createElement('div', { className: 'DiscreteProgressBar_base_fe' }, l);
                    },
                    tt = ({ isActive: e, classNameLight: t, classNameCounter: a }) => {
                        const n = z()('ExpBonusProgressDot_base_dc', e && 'ExpBonusProgressDot_base__active_a6'),
                            u = z()('ExpBonusProgressDot_bonusCounterLight_b7', t),
                            s = z()('ExpBonusProgressDot_bonusCounter_da', a);
                        return r().createElement(
                            'div',
                            { className: n },
                            r().createElement('span', { className: s }),
                            r().createElement('span', { className: u }),
                        );
                    },
                    at = {
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
                let nt, rt;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(nt || (nt = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(rt || (rt = {}));
                const ut = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: u,
                    disabled: s,
                    mixClass: i,
                    soundHover: l,
                    soundClick: o,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: d,
                    onMouseLeave: E,
                    onClick: p,
                }) => {
                    const b = (0, n.useRef)(null),
                        h = (0, n.useState)(a),
                        g = h[0],
                        v = h[1],
                        A = (0, n.useState)(!1),
                        f = A[0],
                        D = A[1],
                        C = (0, n.useState)(!1),
                        F = C[0],
                        B = C[1],
                        w = (0, n.useCallback)(() => {
                            s || (b.current && (b.current.focus(), v(!0)));
                        }, [s]),
                        y = (0, n.useCallback)(
                            (e) => {
                                g && null !== b.current && !b.current.contains(e.target) && v(!1);
                            },
                            [g],
                        ),
                        S = (0, n.useCallback)(
                            (e) => {
                                s || (p && p(e));
                            },
                            [s, p],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                s || (null !== l && Ee(l), c && c(e), B(!0));
                            },
                            [s, l, c],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                s || (d && d(e), D(!1));
                            },
                            [s, d],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                s || (null !== o && Ee(o), m && m(e), a && w(), D(!0));
                            },
                            [s, o, m, w, a],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                s || (E && E(e), D(!1));
                            },
                            [s, E],
                        ),
                        k = z()(
                            at.base,
                            at[`base__${u}`],
                            {
                                [at.base__disabled]: s,
                                [at[`base__${t}`]]: t,
                                [at.base__focus]: g,
                                [at.base__highlightActive]: f,
                                [at.base__firstHover]: F,
                            },
                            i,
                        ),
                        I = z()(at.state, at.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, n.useEffect)(() => {
                            v(a);
                        }, [a]),
                        r().createElement(
                            'div',
                            {
                                ref: b,
                                className: k,
                                onMouseEnter: T,
                                onMouseMove: x,
                                onMouseUp: N,
                                onMouseDown: L,
                                onMouseLeave: P,
                                onClick: S,
                            },
                            u !== nt.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: at.back }),
                                    r().createElement('span', { className: at.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: I },
                                r().createElement('span', { className: at.stateDisabled }),
                                r().createElement('span', { className: at.stateHighlightHover }),
                                r().createElement('span', { className: at.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: at.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ut.defaultProps = { type: nt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const st = (0, n.memo)(ut);
                class it extends r().Component {
                    constructor(e) {
                        super(e),
                            (this.tickInterval = 0),
                            (this.state = { currentTime: Date.now(), timeLeft: e.duration, timeout: 1 / 0 });
                    }
                    componentWillUnmount() {
                        this.clearTimer();
                    }
                    render() {
                        return this.updateTickInterval(), this.buildMessage();
                    }
                    buildMessage() {
                        return this.props.messageFormatter(this.state.timeLeft, this.isActive());
                    }
                    clearTimer() {
                        this.tickInterval && (clearInterval(this.tickInterval), (this.tickInterval = 0));
                    }
                    isActive() {
                        return this.tickInterval > 0;
                    }
                    updateTickInterval() {
                        const e = this.props,
                            t = e.duration,
                            a = e.timeout,
                            n = t > 0 && this.state.timeLeft > 0;
                        this.state.timeout !== a && (this.clearTimer(), this.setState({ timeout: a })),
                            this.isActive() !== n &&
                                (n
                                    ? this.isActive() ||
                                      (this.tickInterval = window.setInterval(() => {
                                          const e = Date.now(),
                                              t = Math.round(0.001 * (e - this.state.currentTime)),
                                              a = this.state.timeLeft - t;
                                          this.setState({ timeLeft: a, currentTime: e });
                                      }, 1e3 * a))
                                    : this.clearTimer());
                    }
                }
                it.defaultProps = { timeout: 1, duration: 0 };
                const lt = {
                    animationStart__enter: 'PremiumRewards_animationStart__enter_3e',
                    animationStart__done: 'PremiumRewards_animationStart__done_b0',
                    animationStart__active: 'PremiumRewards_animationStart__active_22',
                    base: 'PremiumRewards_base_c5',
                    timer: 'PremiumRewards_timer_80',
                    rewardsColumn: 'PremiumRewards_rewardsColumn_5e',
                    rewardsColumn__last: 'PremiumRewards_rewardsColumn__last_36',
                    rewardsColumn__extraSmall: 'PremiumRewards_rewardsColumn__extraSmall_08',
                    rewardsColumn__small: 'PremiumRewards_rewardsColumn__small_aa',
                    reward: 'PremiumRewards_reward_a3',
                    reward__extraSmall: 'PremiumRewards_reward__extraSmall_cc',
                    reward__small: 'PremiumRewards_reward__small_cd',
                    reward__hidden: 'PremiumRewards_reward__hidden_08',
                    bonusRewards: 'PremiumRewards_bonusRewards_6e',
                    bonus: 'PremiumRewards_bonus_31',
                    discreteProgressWrapper: 'PremiumRewards_discreteProgressWrapper_7e',
                    discreteProgressWrapper__exit: 'PremiumRewards_discreteProgressWrapper__exit_12',
                    discreteProgress: 'PremiumRewards_discreteProgress_b5',
                    discreteProgressLight__active: 'PremiumRewards_discreteProgressLight__active_9f',
                    discreteProgressCounter: 'PremiumRewards_discreteProgressCounter_61',
                    discreteProgressWrapper__enter: 'PremiumRewards_discreteProgressWrapper__enter_0f',
                    discreteProgressWrapper__active: 'PremiumRewards_discreteProgressWrapper__active_e4',
                    discreteProgressWrapper__done: 'PremiumRewards_discreteProgressWrapper__done_e7',
                    titleDiscreteProgress: 'PremiumRewards_titleDiscreteProgress_3f',
                    titleDiscreteProgressRecent: 'PremiumRewards_titleDiscreteProgressRecent_f5',
                    bonusSparks: 'PremiumRewards_bonusSparks_c6',
                    bonusSparks__exit: 'PremiumRewards_bonusSparks__exit_a0',
                    bonusSparks__enter: 'PremiumRewards_bonusSparks__enter_51',
                    bonusSparks__active: 'PremiumRewards_bonusSparks__active_36',
                    bonusSparks__done: 'PremiumRewards_bonusSparks__done_5b',
                    bonusIcon: 'PremiumRewards_bonusIcon_37',
                    bonusIcon__extraSmall: 'PremiumRewards_bonusIcon__extraSmall_a2',
                    bonusIcon__small: 'PremiumRewards_bonusIcon__small_96',
                    bonusBorder: 'PremiumRewards_bonusBorder_6c',
                    bonus__basic: 'PremiumRewards_bonus__basic_2f',
                    bonus__premium: 'PremiumRewards_bonus__premium_a9',
                    bonusButton: 'PremiumRewards_bonusButton_26',
                    buttonMix: 'PremiumRewards_buttonMix_c1',
                    bonusAppliedWrapper: 'PremiumRewards_bonusAppliedWrapper_ab',
                    bonusButtonIcon__exp: 'PremiumRewards_bonusButtonIcon__exp_cf',
                    bonusStatus: 'PremiumRewards_bonusStatus_dc',
                    bonusCounter: 'PremiumRewards_bonusCounter_db',
                    bonusCounter__active: 'PremiumRewards_bonusCounter__active_c5',
                    bonusCounterLight: 'PremiumRewards_bonusCounterLight_b0',
                    bonusLightsWrapper: 'PremiumRewards_bonusLightsWrapper_9c',
                    bonusLightsContainer: 'PremiumRewards_bonusLightsContainer_4b',
                    ignoreEventsWrapper: 'PremiumRewards_ignoreEventsWrapper_05',
                };
                function ot(e, t) {
                    return (function (e) {
                        let t = Math.trunc(e);
                        const a = t % 60;
                        t = (t - a) / 60;
                        const n = t % 60;
                        return (t = (t - n) / 60), `${f(t % 24)}:${f(n)}:${f(a)}`;
                    })(t ? e : 0);
                }
                const ct = ({ nextBonusTime: e }) =>
                        r().createElement(
                            'div',
                            { className: lt.timer },
                            r().createElement(it, { duration: e, messageFormatter: ot }),
                        ),
                    _t = (e) => e === oe.FirstIterationInDone || e === oe.StartIn || e === oe.StartOut,
                    mt = (0, n.memo)(() => {
                        const e = T('model.common.rewards'),
                            t = T('model.common.rewards.expBonus'),
                            a = e.experience,
                            u = e.isPremiumBought,
                            s = t.nextBonusTime,
                            l = t.bonusMultiplier,
                            o = Je(e, t),
                            c = Ae(['bonusIcon'], lt),
                            _ = (0, n.useContext)(de),
                            m = (0, n.useCallback)(() => {
                                _.setState(oe.FirstIterationInDone);
                            }, [_]),
                            d = (0, n.useCallback)(() => {
                                u && e.onAppliedPremiumBonus();
                            }, [u, e]),
                            E = z()(lt.bonus, lt.bonus__premium),
                            p = (0, n.useMemo)(
                                () => ({
                                    enter: lt.bonusSparks__enter,
                                    enterActive: lt.bonusSparks__active,
                                    enterDone: lt.bonusSparks__done,
                                    exit: lt.bonusSparks__exit,
                                }),
                                [],
                            ),
                            b = R.strings.postbattle_screen.button.bonus(),
                            h = o === Qe.Disabled,
                            g = `+ ${i.cy.getNumberFormat(a * (l - 1))}`,
                            v = o === Qe.Show || h;
                        return r().createElement(
                            'div',
                            { className: E },
                            r().createElement('div', { className: c.bonusIcon }),
                            r().createElement(
                                Le.Kv,
                                { in: _t(_.state), timeout: 300, onEntered: m, classNames: p },
                                r().createElement('div', { className: lt.bonusSparks }),
                            ),
                            v
                                ? r().createElement(
                                      'div',
                                      { className: lt.bonusBorder },
                                      r().createElement(
                                          He,
                                          {
                                              contentId:
                                                  R.views.white_tiger.lobby.postbattle.tooltips.ExpBonus('resId'),
                                          },
                                          r().createElement(
                                              'div',
                                              { className: lt.bonusButton },
                                              r().createElement(
                                                  st,
                                                  { type: 'main', mixClass: lt.buttonMix, onClick: d, disabled: h },
                                                  g,
                                                  r().createElement('div', { className: lt.bonusButtonIcon__exp }),
                                                  b,
                                              ),
                                          ),
                                      ),
                                  )
                                : r().createElement(
                                      He,
                                      { contentId: R.views.white_tiger.lobby.postbattle.tooltips.ExpBonus('resId') },
                                      r().createElement(
                                          'div',
                                          { className: lt.bonusBorder },
                                          r().createElement(
                                              'div',
                                              { className: lt.bonusAppliedWrapper },
                                              o === Qe.ShowTimer
                                                  ? r().createElement(ct, { nextBonusTime: s })
                                                  : r().createElement(
                                                        'div',
                                                        { className: lt.bonusStatus },
                                                        r().createElement(
                                                            'span',
                                                            null,
                                                            R.strings.postbattle_screen.bonus.status(),
                                                        ),
                                                    ),
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    dt = (e) => e !== oe.Idle,
                    Et = (0, n.memo)(() => {
                        const e = T('model.common.rewards'),
                            t = T('model.common.rewards.expBonus'),
                            a = Je(e, t),
                            u = (0, n.useContext)(de),
                            s = t.maxBonusCount - t.usedBonusCount,
                            i = R.strings.postbattle_screen.discrete.label(),
                            l = (0, n.useMemo)(
                                () => ({
                                    enter: lt.discreteProgressWrapper__enter,
                                    enterActive: lt.discreteProgressWrapper__active,
                                    enterDone: lt.discreteProgressWrapper__done,
                                    exit: lt.discreteProgressWrapper__exit,
                                }),
                                [],
                            );
                        return a === Qe.Hidden
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: lt.bonusRewards },
                                  r().createElement(mt, null),
                                  r().createElement(
                                      Le.Kv,
                                      { in: dt(u.state), timeout: 250, classNames: l },
                                      r().createElement(
                                          'div',
                                          { className: lt.discreteProgressWrapper },
                                          r().createElement(
                                              'div',
                                              { className: lt.titleDiscreteProgress },
                                              i,
                                              ': ',
                                              r().createElement(
                                                  'div',
                                                  { className: lt.titleDiscreteProgressRecent },
                                                  s,
                                              ),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: lt.discreteProgress },
                                              r().createElement(
                                                  et,
                                                  { total: t.maxBonusCount, fill: s, reverse: !0 },
                                                  (e, t) =>
                                                      r().createElement(tt, {
                                                          key: t,
                                                          isActive: e,
                                                          classNameLight: z()(
                                                              lt.discreteProgressLight,
                                                              e && lt.discreteProgressLight__active,
                                                          ),
                                                          classNameCounter: z()(
                                                              lt.discreteProgressCounter,
                                                              e && lt.discreteProgressCounter__active,
                                                          ),
                                                      }),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    }),
                    pt = (e, t = 'integral') => {
                        let a;
                        return (
                            (a = 'gold' === t ? i.B3.GOLD : i.B3.INTEGRAL),
                            void 0 === e ? '' : i.Z5.getNumberFormat(e, a)
                        );
                    },
                    bt = ({ format: e, value: t }) => {
                        const a = pt(t, e);
                        return a ? r().createElement('span', null, a) : null;
                    },
                    ht = {
                        base: 'Currency_base_67',
                        base__small: 'Currency_base__small_32',
                        base__big: 'Currency_base__big_fe',
                        base__left: 'Currency_base__left_40',
                        base__large: 'Currency_base__large_45',
                        base__negative: 'Currency_base__negative_a3',
                        base__empty: 'Currency_base__empty_df',
                        icon: 'Currency_icon_92',
                        icon__noIcon: 'Currency_icon__noIcon_07',
                        icon__small: 'Currency_icon__small_6a',
                        icon__credits: 'Currency_icon__credits_bd',
                        icon__gold: 'Currency_icon__gold_89',
                        icon__crystal: 'Currency_icon__crystal_2c',
                        icon__xp: 'Currency_icon__xp_3f',
                        icon__freeXp: 'Currency_icon__freeXp_ba',
                        icon__big: 'Currency_icon__big_9d',
                        icon__large: 'Currency_icon__large_72',
                        icon__left: 'Currency_icon__left_0b',
                    };
                let gt, vt, At;
                !(function (e) {
                    (e.LEFT = 'left'), (e.RIGHT = 'right');
                })(gt || (gt = {})),
                    (function (e) {
                        (e.NO_ICON = 'noIcon'), (e.SMALL = 'small'), (e.BIG = 'big'), (e.LARGE = 'large');
                    })(vt || (vt = {})),
                    (function (e) {
                        (e.CREDITS = 'credits'),
                            (e.GOLD = 'gold'),
                            (e.CRYSTAL = 'crystal'),
                            (e.XP = 'xp'),
                            (e.FREE_XP = 'freeXp');
                    })(At || (At = {}));
                const ft = ({ position: e, size: t, type: a, amount: n, withPlus: u, className: s }) => {
                        const i = z()(
                                ht.base,
                                s,
                                e && ht[`base__${e}`],
                                t && ht[`base__${t}`],
                                n && n < 0 && ht.base__negative,
                                0 === n && ht.base__empty,
                            ),
                            l = z()(ht.icon, e && ht[`icon__${e}`], t && ht[`icon__${t}`], ht[`icon__${a}`]);
                        return r().createElement(
                            'div',
                            { className: i },
                            u && n > 0 && r().createElement('span', null, '+'),
                            n && r().createElement(bt, { value: n }),
                            r().createElement('div', { className: l }),
                        );
                    },
                    Dt = {
                        base: 'DynamicAmount_base_2d',
                        visibleContainer: 'DynamicAmount_visibleContainer_d7',
                        visibleContainer__extraSmall: 'DynamicAmount_visibleContainer__extraSmall_1e',
                        visibleContainer__small: 'DynamicAmount_visibleContainer__small_be',
                        digitBlock: 'DynamicAmount_digitBlock_ee',
                        digitBlock__skippedValue: 'DynamicAmount_digitBlock__skippedValue_6a',
                        slideVertically: 'DynamicAmount_slideVertically_e4',
                        digitsBase: 'DynamicAmount_digitsBase_a6',
                        digits: 'DynamicAmount_digits_4b',
                        digits__slideUp: 'DynamicAmount_digits__slideUp_8a',
                        digits__slideDown: 'DynamicAmount_digits__slideDown_78',
                        digits__slideLinear: 'DynamicAmount_digits__slideLinear_fe',
                        digits__slideUpDown: 'DynamicAmount_digits__slideUpDown_d4',
                        digitItem: 'DynamicAmount_digitItem_ae',
                        digitItem__korea: 'DynamicAmount_digitItem__korea_c7',
                        digitItem__initial: 'DynamicAmount_digitItem__initial_46',
                        digitItem__hidden: 'DynamicAmount_digitItem__hidden_12',
                    },
                    Ct = ({
                        startValue: e,
                        valuesCount: t,
                        isActivated: a,
                        duration: u,
                        startDelay: s = 0,
                        onAnimationEndHandler: i,
                        hideFirstZero: l,
                        isReversed: o,
                        isKorea: c,
                    }) => {
                        const _ = (0, n.useState)(!1),
                            m = _[0],
                            d = _[1],
                            E = (0, n.useRef)(null),
                            p = (0, n.useRef)(0),
                            b = (0, n.useCallback)(() => {
                                p.current && clearTimeout(p.current), (p.current = 0);
                            }, []),
                            h = (0, n.useMemo)(() => {
                                let a = [],
                                    n = t,
                                    u = e;
                                for (; n > 0; ) {
                                    let e = St.slice(1, St.length - u);
                                    e.length > n ? ((e = e.slice(e.length - n)), (n = 0)) : ((n -= e.length), (u = 0)),
                                        (a = e.concat(a));
                                }
                                return a.map((t, n) => {
                                    const u = n === a.length - 1,
                                        s = z()(
                                            Dt.digitItem,
                                            c && Dt.digitItem__korea,
                                            u && Dt.digitItem__initial,
                                            l && u && '0' === t && Dt.digitItem__hidden,
                                        );
                                    return r().createElement('div', { key: `${e}-${n}`, className: s }, t);
                                });
                            }, [l, e, t, c]),
                            g = z()(Dt.digits, m && Dt.digits__slideUpDown);
                        let v = '';
                        v = o ? (m ? 'translateY(-100%)' : 'translateY(0)') : m ? 'translateY(0)' : 'translateY(-100%)';
                        const A = (0, n.useMemo)(
                            () => ({
                                animationDuration: `${u}ms`,
                                animationDirection: o ? 'reverse' : 'normal',
                                transform: v,
                            }),
                            [u, o, v],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                b(), a ? (s > 0 ? (p.current = window.setTimeout(() => d(!0), s)) : d(!0)) : d(!1);
                            }, [b, a, s]),
                            (0, n.useEffect)(() => {
                                if (!i) return;
                                const e = E.current;
                                return (
                                    e && e.addEventListener('animationend', i, !1),
                                    () => {
                                        e && e.removeEventListener('animationend', i, !1);
                                    }
                                );
                            }, [E, i]),
                            r().createElement(
                                'div',
                                { className: Dt.digitsBase },
                                r().createElement('div', { className: g, ref: E, style: A }, h),
                            )
                        );
                    };
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                class Bt extends r().Component {
                    constructor(...e) {
                        super(...e),
                            (this.timers = { startDelayTimer: 0, loopAnimationTimer: 0 }),
                            (this.animationElement = null),
                            (this.state = { slideUp: !1, slideDown: !1, slideLinear: !1 }),
                            (this.activateAnimation = (e = !0) => {
                                this.setState({ slideUp: e, slideLinear: !1, slideDown: !1 });
                            }),
                            (this.activateLoopAnimation = (e = !1) => {
                                this.setState({ slideUp: !1, slideLinear: e, slideDown: !e });
                            }),
                            (this.addAnimationEndListener = () => {
                                const e = this.animationElement;
                                e && e.addEventListener('animationend', this.handleAnimationEnd);
                            }),
                            (this.removeAnimationEndListener = () => {
                                const e = this.animationElement;
                                e && e.removeEventListener('animationend', this.handleAnimationEnd);
                            }),
                            (this.setAnimationRef = (e) => {
                                this.removeAnimationEndListener(),
                                    (this.animationElement = e),
                                    this.addAnimationEndListener();
                            }),
                            (this.startAnimation = () => {
                                this.clearTimers();
                                const e = this.props.startDelay;
                                e
                                    ? (this.timers.startDelayTimer = window.setTimeout(this.activateAnimation, e))
                                    : this.activateAnimation();
                            }),
                            (this.handleAnimationEnd = () => {
                                const e = this.props,
                                    t = e.onAnimationEndHandler,
                                    a = e.loopingDuration;
                                this.state.slideDown
                                    ? t && t()
                                    : (a &&
                                          (this.timers.loopAnimationTimer = window.setTimeout(
                                              this.activateLoopAnimation,
                                              a,
                                          )),
                                      this.activateLoopAnimation(!0));
                            });
                    }
                    componentDidMount() {
                        this.props.isActivated && this.startAnimation();
                    }
                    componentWillUnmount() {
                        this.clearTimers(), this.removeAnimationEndListener();
                    }
                    shouldComponentUpdate(e) {
                        const t = e.isActivated;
                        return (
                            t !== this.props.isActivated &&
                                (t
                                    ? this.startAnimation()
                                    : (this.removeAnimationEndListener(), this.activateAnimation(!1))),
                            !0
                        );
                    }
                    clearTimers() {
                        const e = this.timers,
                            t = e.startDelayTimer,
                            a = e.loopAnimationTimer;
                        t && clearTimeout(t), a && clearTimeout(a);
                    }
                    renderCurrentDigits() {
                        const e = this.props,
                            t = e.isReversed,
                            a = e.startValue,
                            n = e.endValue,
                            u = e.hideFirstZero,
                            s = e.isKorea,
                            i = this.state,
                            l = i.slideLinear,
                            o = i.slideDown;
                        let c = [];
                        if (l) c = St;
                        else {
                            const e = St.length - 1,
                                r = St.slice(1, St.length - a),
                                u = St.slice(n && e - n, e);
                            c = t ? (o ? St.concat(r) : u.concat(St)) : o ? u.concat(St) : St.concat(r);
                        }
                        const _ = t ? u && o : u && !o && !l;
                        return c.map((e, t) => {
                            const u = t === c.length - 1,
                                i = z()(
                                    Dt.digitItem,
                                    s && Dt.digitItem__korea,
                                    u && Dt.digitItem__initial,
                                    _ && u && '0' === e && Dt.digitItem__hidden,
                                );
                            return r().createElement('div', { key: `${a}-${n}-${t}`, className: i }, e);
                        });
                    }
                    getAnimationElementStyles() {
                        const e = this.props,
                            t = e.isReversed,
                            a = e.isActivated,
                            n = e.loopPhaseDuration,
                            r = e.upDownPhaseDuration,
                            u = this.state,
                            s = u.slideUp,
                            i = u.slideLinear,
                            l = u.slideDown,
                            o = t ? Dt.digits__slideDown : Dt.digits__slideUp,
                            c = t ? Dt.digits__slideUp : Dt.digits__slideDown;
                        let _;
                        return (
                            (_ = t
                                ? l
                                    ? 'translateY(-100%)'
                                    : 'translateY(0)'
                                : l
                                  ? 'translateY(0)'
                                  : 'translateY(-100%)'),
                            {
                                className: a ? z()(Dt.digits, i && Dt.digits__slideLinear, s && o, l && c) : Dt.digits,
                                style: {
                                    animationDuration: `${i ? n : r}ms`,
                                    animationDirection: t ? 'reverse' : 'normal',
                                    transform: _,
                                },
                            }
                        );
                    }
                    render() {
                        const e = this.state.slideLinear,
                            t = this.renderCurrentDigits(),
                            a = this.getAnimationElementStyles();
                        return r().createElement(
                            'div',
                            { className: Dt.digitsBase },
                            r().createElement(
                                'div',
                                Ft({ key: e ? 'slideLinear' : 'slideUpDown', ref: this.setAnimationRef }, a),
                                t,
                            ),
                        );
                    }
                }
                const wt = ['isComplexAnimation', 'skippedValue'];
                function yt() {
                    return (
                        (yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        yt.apply(this, arguments)
                    );
                }
                const St = '09876543210'.split('');
                class Tt extends r().Component {
                    static calcNextDecadeAppearanceDelay(e = 0, t) {
                        const a = Tt.maxSpeedUpRange;
                        let n, r;
                        return (
                            0 === e ? ((n = a), (r = t ? n - 10 : 0)) : ((n = t ? a - e : a - (10 - e)), (r = n % 10)),
                            Math.floor((700 * r) / n)
                        );
                    }
                    static addAnimationDurations(e, t = !1) {
                        const a = Tt.maxSimpleAnimationRange,
                            n = Tt.calcNextDecadeAppearanceDelay;
                        let r = 1600;
                        e.forEach((e) => {
                            const u = e,
                                s = u.valuesCount,
                                i = u.startValue,
                                l = u.endValue;
                            if (s && s >= a) {
                                const e = n(i, !0),
                                    a = n(l, !1);
                                (r += e),
                                    (r += a),
                                    (u.isComplexAnimation = !0),
                                    (u.startDelay = t ? a : e),
                                    (u.loopingDuration = r - 1400);
                            }
                        });
                        let u = e.length,
                            s = 0;
                        for (; u--; ) {
                            const t = e[u];
                            if (!t.valuesCount) continue;
                            const a = Number(t.startDelay);
                            (t.startDelay = s), t.isComplexAnimation && (s += a);
                        }
                    }
                    calculateBlockItems() {
                        const e = this.props,
                            t = e.fromValue,
                            a = e.toValue,
                            n = e.format,
                            r = e.isReversed,
                            u = pt(t, n).split(''),
                            s = pt(a, n).split(''),
                            i = u.length - s.length,
                            l = i > 0;
                        let o = '',
                            c = '';
                        const _ = (l ? u : s).map((e, t) => {
                            let a = 0,
                                n = 0,
                                r = 0;
                            if (St.includes(e)) {
                                if (l) (n = Number(e)), t >= i && (r = Number(s[t - i]));
                                else {
                                    r = Number(e);
                                    const a = Math.abs(i);
                                    t >= a && (n = Number(u[t - a]));
                                }
                                (o += n), (c += r), (a = Math.abs(Number(c) - Number(o)) + 1);
                            }
                            return { startValue: n, endValue: r, valuesCount: a, skippedValue: !a && e };
                        });
                        return Tt.addAnimationDurations(_, r), _;
                    }
                    renderDigitsBlocks(e) {
                        const t = 'ko' === R.strings.settings.LANGUAGE_CODE(),
                            a = this.props,
                            n = a.onAnimationEnd,
                            u = a.isActivated,
                            s = a.isReversed;
                        return e.map((a, i) => {
                            const l = a.isComplexAnimation,
                                o = a.skippedValue,
                                c = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        u = Object.keys(e);
                                    for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(a, wt),
                                _ = !1 !== o;
                            let m = null;
                            const d = `${c.endValue}-${i}`;
                            _
                                ? (m = o)
                                : (i === e.length - 1 ? (c.onAnimationEndHandler = n) : (c.hideFirstZero = !0),
                                  (m = l
                                      ? r().createElement(
                                            Bt,
                                            yt({ key: d }, c, {
                                                isActivated: u,
                                                isReversed: s,
                                                upDownPhaseDuration: 700,
                                                loopPhaseDuration: 300,
                                                isKorea: t,
                                            }),
                                        )
                                      : r().createElement(
                                            Ct,
                                            yt({ key: d }, c, {
                                                isActivated: u,
                                                isReversed: s,
                                                duration: 1600,
                                                isKorea: t,
                                            }),
                                        )));
                            const E = z()(Dt.digitBlock, _ && Dt.digitBlock__skippedValue),
                                p = ((e, t, a) => {
                                    if (!a) return;
                                    const n = e[e.length - t];
                                    if (!n) return;
                                    const r = n.loopingDuration;
                                    return r && n.isComplexAnimation ? { animationDelay: r - 300 + 'ms' } : void 0;
                                })(e, i, _);
                            return r().createElement('div', { key: i, className: E, style: p }, m);
                        });
                    }
                    render() {
                        const e = this.calculateBlockItems(),
                            t = this.renderDigitsBlocks(e),
                            a = z()(Dt.visibleContainer, Dt[`visibleContainer__${this.props.mediaSize}`]);
                        return r().createElement(
                            'div',
                            { className: Dt.base },
                            r().createElement('div', { className: a }, t),
                        );
                    }
                }
                (Tt.maxSpeedUpRange = 20), (Tt.maxSimpleAnimationRange = 2 * Tt.maxSpeedUpRange);
                const Rt = ['amount', 'withAnimation', 'isAnimationActive', 'fromAmount', 'animationEndHandler'];
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                const Nt = (e) => {
                    let t = e.amount,
                        a = e.withAnimation,
                        u = e.isAnimationActive,
                        s = void 0 === u || u,
                        i = e.fromAmount,
                        l = void 0 === i ? 0 : i,
                        o = e.animationEndHandler,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                u = Object.keys(e);
                            for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, Rt);
                    const _ = (0, n.useContext)(X),
                        m = _.small || _.extraSmall ? 'small' : '',
                        d = (0, n.useMemo)(() => {
                            if (!a || 0 === t) return null;
                            const e = t < 0;
                            return r().createElement(
                                'div',
                                { className: 'DynamicCurrency_dynamicAmount_2d' },
                                r().createElement(Tt, {
                                    isActivated: s,
                                    fromValue: l,
                                    toValue: t,
                                    isReversed: e,
                                    onAnimationEnd: o,
                                    mediaSize: m,
                                }),
                            );
                        }, [t, o, l, s, m, a]),
                        E = c.position,
                        p = c.size,
                        b = c.type,
                        h = z()(ht.icon, E && ht[`icon__${E}`], p && ht[`icon__${p}`], ht[`icon__${b}`]),
                        g = Boolean(d),
                        v = z()(
                            'DynamicCurrency_currencyContainer_f4',
                            g && 'DynamicCurrency_currencyContainer__hidden_a0',
                        );
                    return r().createElement(
                        'div',
                        { className: 'DynamicCurrency_base_01' },
                        r().createElement('div', { className: v }, r().createElement(ft, xt({}, c, { amount: t }))),
                        d,
                        g && r().createElement('div', { className: h }),
                    );
                };
                let Lt = !1;
                const Pt = ({ value: e, currencyType: t, isHidden: a = !1, isCurrent: u = !1 }) => {
                        const s = Ae(['reward'], lt),
                            i = (0, n.useState)(!0),
                            l = i[0],
                            o = i[1],
                            c = (0, n.useRef)(0);
                        (0, n.useEffect)(() => {
                            let t = null;
                            return (
                                0 !== c.current &&
                                    (o(!1),
                                    (Lt = !1),
                                    (t = window.setTimeout(() => {
                                        o(!0);
                                    }, 100))),
                                Lt && (c.current = e),
                                () => {
                                    'number' == typeof t && clearTimeout(t);
                                }
                            );
                        }, [e]);
                        const _ = (0, n.useCallback)(() => {
                                (c.current = e), (Lt = !0);
                            }, [e]),
                            m = vt.LARGE,
                            d = z()(s.reward, u && lt.reward__current, a && lt.reward__hidden),
                            E = u && !Lt;
                        return r().createElement(
                            'div',
                            { className: d },
                            u
                                ? r().createElement(Nt, {
                                      position: gt.LEFT,
                                      size: m,
                                      type: t,
                                      amount: e,
                                      withAnimation: E,
                                      fromAmount: c.current,
                                      isAnimationActive: l,
                                      animationEndHandler: _,
                                  })
                                : r().createElement(ft, { position: gt.LEFT, size: m, type: t, amount: e }),
                        );
                    },
                    kt = (0, n.memo)(({ currencyType: e, value: t, isLast: a = !1 }) => {
                        const n = Ae(['rewardsColumn'], lt),
                            u = z()(n.rewardsColumn, a && lt.rewardsColumn__last);
                        return r().createElement(
                            'div',
                            { className: u },
                            r().createElement(Pt, { isCurrent: !0, value: t, currencyType: e }),
                        );
                    }),
                    It = (0, n.memo)(({ experience: e, credits: t, crystals: a }) => {
                        const n = a > 0;
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                'div',
                                { className: lt.progressionContent },
                                r().createElement(kt, { value: e, currencyType: At.XP }),
                            ),
                            r().createElement(kt, { value: t, currencyType: At.CREDITS, isLast: !n }),
                            n && r().createElement(kt, { value: a, currencyType: At.CRYSTAL, isLast: !0 }),
                        );
                    }),
                    Mt = (0, n.memo)(() => {
                        const e = T('model.common.rewards'),
                            t = T('model.common.rewards.expBonus'),
                            a = e.experience,
                            u = e.credits,
                            s = e.crystals,
                            i = Je(e, t),
                            l = (0, n.useContext)(de),
                            o = i !== Qe.Hidden;
                        return (
                            o || (l.state === oe.StartIn && l.setState(oe.FirstIterationInDone)),
                            r().createElement(
                                'div',
                                { className: lt.base },
                                r().createElement(It, { experience: a, credits: u, crystals: s }),
                                o && r().createElement(Et, null),
                            )
                        );
                    }),
                    Ot = {
                        base: 'RewardTape_base_98',
                        base__defeat: 'RewardTape_base__defeat_24',
                        base__extraSmall: 'RewardTape_base__extraSmall_5c',
                        base__small: 'RewardTape_base__small_0f',
                        ribbon: 'RewardTape_ribbon_66',
                        base__basic: 'RewardTape_base__basic_3b',
                        ribbon__top: 'RewardTape_ribbon__top_25',
                        ribbon__bottom: 'RewardTape_ribbon__bottom_09',
                        tile: 'RewardTape_tile_0c',
                        base__premium: 'RewardTape_base__premium_02',
                        content: 'RewardTape_content_10',
                        rewards: 'RewardTape_rewards_e9',
                        achievements: 'RewardTape_achievements_43',
                    },
                    Ht = (0, n.memo)(() => {
                        const e = Ae(['base'], Ot),
                            t = T('model').accountType,
                            a = T('model.common.generalInfo'),
                            u = T('model.common.rewards.achievements'),
                            s = a.winStatus,
                            i = (0, n.useMemo)(() => u.filter((e) => 'left' === e.value.groupID), [u]),
                            l = (0, n.useMemo)(() => u.filter((e) => e.value.groupID === Ye), [u]),
                            o = ke.Defeat === s,
                            c = z()(
                                e.base,
                                Ot[`base__${((e) => (0 !== e ? 'premium' : 'basic'))(t)}`],
                                o && Ot.base__defeat,
                            ),
                            _ = z()(Ot.ribbon, Ot.ribbon__top),
                            m = z()(Ot.ribbon, Ot.ribbon__bottom);
                        return r().createElement(
                            'div',
                            { className: c },
                            r().createElement('div', { className: _ }),
                            r().createElement('div', { className: m }),
                            r().createElement('div', { className: Ot.tile }),
                            r().createElement(
                                'div',
                                { className: Ot.content },
                                r().createElement(
                                    'div',
                                    { className: Ot.achievements },
                                    r().createElement(Ve, { achievements: i, position: Ge.left, size: Xe.big }),
                                ),
                                r().createElement('div', { className: Ot.rewards }, r().createElement(Mt, null)),
                                r().createElement(
                                    'div',
                                    { className: Ot.achievements },
                                    r().createElement(Ve, { achievements: l, size: Xe.big }),
                                ),
                            ),
                        );
                    }),
                    Wt = 'received',
                    $t = {
                        base: 'Progression_base_5d',
                        reward: 'Progression_reward_0c',
                        icon: 'Progression_icon_51',
                        icon__normal: 'Progression_icon__normal_0e',
                        icon__active: 'Progression_icon__active_72',
                        icon__received: 'Progression_icon__received_d5',
                        icon__notReceived: 'Progression_icon__notReceived_57',
                        icon__opened: 'Progression_icon__opened_fa',
                        icon__notOpened: 'Progression_icon__notOpened_38',
                        icon__big: 'Progression_icon__big_36',
                        bgGlow: 'Progression_bgGlow_bd',
                        bgGlow__probMed: 'Progression_bgGlow__probMed_bd',
                        bgGlow__probMax: 'Progression_bgGlow__probMax_b9',
                        bgGlow__received: 'Progression_bgGlow__received_01',
                    };
                var Ut, Xt, Gt;
                function Yt(e, t, a) {
                    return z()($t.icon, $t[`icon__${e}`], $t[`icon__${t}`], a && $t.icon__active);
                }
                !(function (e) {
                    (e.RECEIVED = 'received'), (e.NOT_RECEIVED = 'notReceived');
                })(Ut || (Ut = {})),
                    (function (e) {
                        (e.OPENED = 'opened'), (e.NOT_OPENED = 'notOpened');
                    })(Xt || (Xt = {})),
                    (function (e) {
                        (e.NORMAL = 'normal'), (e.BIG = 'big');
                    })(Gt || (Gt = {}));
                const jt = ({ maxSteps: e, currentStep: t, currentStepState: a }) => {
                        const n = [];
                        for (let u = 0; u < e; ++u) {
                            const s = u === e - 1 ? Gt.BIG : Gt.NORMAL;
                            let i,
                                l = !1,
                                o = '';
                            u < t
                                ? (i = Ut.RECEIVED)
                                : u > t
                                  ? (i = Ut.NOT_RECEIVED)
                                  : ((l = !0),
                                    (i = a === Wt ? Xt.OPENED : Xt.NOT_OPENED),
                                    'prob_min' !== a && (o = $t[`bgGlow__${d(a)}`])),
                                n.push(
                                    r().createElement(
                                        'div',
                                        { className: $t.reward, key: u },
                                        r().createElement('div', { className: z()($t.bgGlow, o) }),
                                        r().createElement('div', { className: Yt(s, i, l) }),
                                    ),
                                );
                        }
                        return r().createElement('div', { className: $t.base }, n);
                    },
                    qt = {
                        base: 'ProgressiveReward_base_e7',
                        glow: 'ProgressiveReward_glow_c6',
                        glow__received: 'ProgressiveReward_glow__received_03',
                        lock: 'ProgressiveReward_lock_0b',
                        lock__probMin: 'ProgressiveReward_lock__probMin_16',
                        lock__probMed: 'ProgressiveReward_lock__probMed_14',
                        lock__probMax: 'ProgressiveReward_lock__probMax_35',
                        lock__received: 'ProgressiveReward_lock__received_c5',
                        progression: 'ProgressiveReward_progression_df',
                        progressionLine: 'ProgressiveReward_progressionLine_73',
                        progressionLine__left: 'ProgressiveReward_progressionLine__left_8c',
                        progressionLine__right: 'ProgressiveReward_progressionLine__right_09',
                        progressionContent: 'ProgressiveReward_progressionContent_f3',
                    },
                    zt = ({ currentStepState: e, currentStep: t, maxSteps: a }) =>
                        r().createElement(
                            'div',
                            { className: qt.base },
                            r().createElement('div', { className: z()(qt.glow, e === Wt && qt.glow__received) }),
                            r().createElement('div', { className: z()(qt.lock, qt[`lock__${d(e)}`]) }),
                            r().createElement(
                                'div',
                                { className: qt.progression },
                                r().createElement('div', {
                                    className: z()(qt.progressionLine, qt.progressionLine__left),
                                }),
                                r().createElement(
                                    He,
                                    {
                                        contentId:
                                            R.views.white_tiger.lobby.postbattle.tooltips.ProgressiveReward('resId'),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: qt.progressionContent },
                                        r().createElement(jt, { currentStep: t, maxSteps: a, currentStepState: e }),
                                    ),
                                ),
                                r().createElement('div', {
                                    className: z()(qt.progressionLine, qt.progressionLine__right),
                                }),
                            ),
                        ),
                    Kt = (e) => e.replace(':', '_').replace(/-/g, '_'),
                    Vt = R.images.white_tiger.gui.maps.icons.postbattle,
                    Qt = (0, n.memo)(({ localizedName: e, type: t }) => {
                        const a = t ? Kt(t) : null,
                            u = a && Vt.$dyn(a),
                            s = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]);
                        return r().createElement(
                            'div',
                            { className: 'VehicleTitle_base_9e' },
                            u && r().createElement('div', { className: 'VehicleTitle_type_8f', style: s }),
                            r().createElement('div', { className: 'VehicleTitle_name_e0' }, e),
                        );
                    }),
                    Zt = {
                        base: 'Header_base_19',
                        subTitle: 'Header_subTitle_6a',
                        subTitle__extraSmall: 'Header_subTitle__extraSmall_66',
                        subTitle__small: 'Header_subTitle__small_a6',
                        title: 'Header_title_86',
                        title__extraSmall: 'Header_title__extraSmall_de',
                        title__small: 'Header_title__small_d0',
                        vehicleName: 'Header_vehicleName_8b',
                    },
                    Jt = [1, 10],
                    ea = R.strings.postbattle_screen.GeneralBattleInfo,
                    ta = (0, n.memo)(
                        ({
                            winStatus: e,
                            vehicleLevel: t,
                            battleFinishReason: a,
                            isHunter: n,
                            localizedVehicleName: u,
                            vehicleType: s,
                        }) => {
                            const i = Ae(['title', 'subTitle'], Zt),
                                l = Ne(e),
                                o = ea.winStatus.$dyn(l),
                                c = ((e, t, a) => {
                                    let n = 'c_' + e;
                                    return e in Jt && (n += t), a && (n += 'hunter'), ea.finishReason.$dyn(n);
                                })(a, l, n);
                            return r().createElement(
                                'div',
                                { className: Zt.base },
                                r().createElement('div', { className: i.title }, o),
                                r().createElement('div', { className: i.subTitle }, c),
                                r().createElement(
                                    'div',
                                    { className: Zt.vehicleTitle },
                                    r().createElement(Qt, { level: t, localizedName: u, type: s }),
                                ),
                            );
                        },
                    );
                var aa = a(9887),
                    na = a.n(aa);
                const ra = ['xl', 'lg', 'md', 'sm', 'xs'],
                    ua = (e) => e.includes('_') && ((e) => ra.includes(e))(e.split('_').at(-1)),
                    sa = [Q.ExtraLarge, Q.Large, Q.Medium, Q.Small, Q.ExtraSmall],
                    ia = (e, t) =>
                        Object.keys(e).reduce((a, n) => {
                            if (n in a) return a;
                            if (ua(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in a) return a;
                                const u = sa.indexOf(t),
                                    s = (-1 !== u ? ra.slice(u) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    i = s ? e[s] : void 0;
                                return (a[r] = void 0 !== i ? i : e[r]), a;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, t) => ra.some((a) => void 0 !== t[`${e}_${a}`]))(n, e) ||
                                    (a[n] = r),
                                a
                            );
                        }, {}),
                    la = (e, t = ia) => {
                        const a = (
                            (e, t = ia) =>
                            (a) => {
                                const u = ee().mediaSize,
                                    s = (0, n.useMemo)(() => t(a, u), [a, u]);
                                return r().createElement(e, s);
                            }
                        )(e, t);
                        return r().memo((t) =>
                            Object.keys(t).some((e) => ua(e) && void 0 !== t[e])
                                ? r().createElement(a, t)
                                : r().createElement(e, t),
                        );
                    },
                    oa = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    ca = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function _a() {
                    return (
                        (_a =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        _a.apply(this, arguments)
                    );
                }
                Object.keys(na());
                const ma = {
                        XL: { mt: oa.mt__XL, mr: oa.mr__XL, mb: oa.mb__XL, ml: oa.ml__XL },
                        LG: { mt: oa.mt__LG, mr: oa.mr__LG, mb: oa.mb__LG, ml: oa.ml__LG },
                        MDp: { mt: oa.mt__MDp, mr: oa.mr__MDp, mb: oa.mb__MDp, ml: oa.ml__MDp },
                        MD: { mt: oa.mt__MD, mr: oa.mr__MD, mb: oa.mb__MD, ml: oa.ml__MD },
                        SMp: { mt: oa.mt__SMp, mr: oa.mr__SMp, mb: oa.mb__SMp, ml: oa.ml__SMp },
                        SM: { mt: oa.mt__SM, mr: oa.mr__SM, mb: oa.mb__SM, ml: oa.ml__SM },
                        XS: { mt: oa.mt__XS, mr: oa.mr__XS, mb: oa.mb__XS, ml: oa.ml__XS },
                    },
                    da = (Object.keys(ma), ['mt', 'mr', 'mb', 'ml']),
                    Ea = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    pa = la((e) => {
                        let t = e.className,
                            a = e.width,
                            u = e.height,
                            s = e.m,
                            i = e.mt,
                            l = void 0 === i ? s : i,
                            o = e.mr,
                            c = void 0 === o ? s : o,
                            _ = e.mb,
                            m = void 0 === _ ? s : _,
                            d = e.ml,
                            E = void 0 === d ? s : d,
                            p = e.column,
                            b = e.row,
                            h = e.flexDirection,
                            g = void 0 === h ? (p ? 'column' : b && 'row') || void 0 : h,
                            v = e.flexStart,
                            A = e.center,
                            f = e.flexEnd,
                            D = e.spaceBetween,
                            C = e.spaceAround,
                            F = e.justifyContent,
                            B =
                                void 0 === F
                                    ? (v ? 'flex-start' : A && 'center') ||
                                      (f && 'flex-end') ||
                                      (D && 'space-between') ||
                                      (C && 'space-around') ||
                                      void 0
                                    : F,
                            w = e.alignItems,
                            y = void 0 === w ? (v ? 'flex-start' : A && 'center') || (f && 'flex-end') || void 0 : w,
                            S = e.alignSelf,
                            T = e.wrap,
                            R = e.flexWrap,
                            x = void 0 === R ? (T ? 'wrap' : void 0) : R,
                            N = e.grow,
                            L = e.shrink,
                            P = e.flex,
                            k = void 0 === P ? (N || L ? `${N ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : P,
                            I = e.style,
                            M = e.children,
                            O = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, ca);
                        const H = (0, n.useMemo)(() => {
                                const e = { mt: l, mr: c, mb: m, ml: E },
                                    t = ((e) =>
                                        da.reduce((t, a) => {
                                            const n = e[a];
                                            return n && 'number' != typeof n ? t.concat(ma[!0 === n ? 'MD' : n][a]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        da.reduce((t, a) => {
                                            const n = e[a];
                                            return 'number' == typeof n && (t[Ea[a]] = n + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, n, {
                                        width: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        height: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        flex: k,
                                        alignSelf: S,
                                        display: g || y ? 'flex' : void 0,
                                        flexDirection: g,
                                        flexWrap: x,
                                        justifyContent: B,
                                        alignItems: y,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [a, u, l, c, m, E, I, k, S, g, x, B, y]),
                            W = H.computedStyle,
                            $ = H.computedClassNames;
                        return r().createElement('div', _a({ className: z()(oa.base, ...$, t), style: W }, O), M);
                    }),
                    ba = ({ binding: e, text: t = '', classMix: a, alignment: u = c.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  n.Fragment,
                                  null,
                                  t.split('\n').map((t, s) =>
                                      r().createElement(
                                          'div',
                                          { className: z()('FormatText_base_d0', a), key: `${t}-${s}` },
                                          ((e, t, a) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  a && e in a
                                                      ? a[e]
                                                      : ((e, t = c.left) => {
                                                            const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return g.includes(a)
                                                                ? h(e)
                                                                : ((e, t = c.left) => {
                                                                      let a = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          b(r, /( )/, t).forEach(
                                                                              (e) => (a = a.concat(b(e, n, c.left))),
                                                                          ),
                                                                          a
                                                                      );
                                                                  })(e, t);
                                                        })(e, t),
                                              ))(t, u, e).map((e, t) =>
                                              r().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var ha = a(3532),
                    ga = a.n(ha);
                const va = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    Aa = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function fa() {
                    return (
                        (fa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        fa.apply(this, arguments)
                    );
                }
                Object.keys(na());
                const Da = Object.keys(ga()),
                    Ca = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Fa = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ba = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    wa =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Ca,
                            'heading-H36': Ca,
                            'heading-H28': Fa,
                            'heading-H24': Fa,
                            'heading-H24R': Fa,
                            'heading-H22': Fa,
                            'heading-H20R': Fa,
                            'heading-H18': Fa,
                            'heading-H15': Ba,
                            'heading-H14': Ba,
                            'paragraph-P24': Fa,
                            'paragraph-P18': Fa,
                            'paragraph-P16': Fa,
                            'paragraph-P14': Ba,
                            'paragraph-P12': Ba,
                            'paragraph-P10': Ba,
                        }),
                    ya =
                        (Object.keys(wa),
                        (e) =>
                            e
                                ? ((e) => Da.includes(e))(e)
                                    ? { colorClassName: va[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Sa = la((e) => {
                        let t = e.text,
                            a = e.variant,
                            u = e.className,
                            s = e.color,
                            i = e.m,
                            l = e.mt,
                            o = void 0 === l ? i : l,
                            c = e.mr,
                            _ = void 0 === c ? i : c,
                            m = e.mb,
                            d = void 0 === m ? i : m,
                            E = e.ml,
                            p = void 0 === E ? i : E,
                            b = e.style,
                            h = e.format,
                            g = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Aa);
                        const v = (0, n.useMemo)(() => {
                                const e = ya(s),
                                    t = e.colorClassName,
                                    a = e.colorStyle,
                                    n = void 0 === a ? {} : a;
                                return { computedStyle: Object.assign({}, b, n), colorClassName: t };
                            }, [b, s]),
                            A = v.computedStyle,
                            f = v.colorClassName;
                        return r().createElement(
                            pa,
                            fa(
                                {
                                    className: z()(va.base, a && va[a], f, u),
                                    style: A,
                                    mt: !0 === o ? wa[a || 'paragraph-P16'].mt : o,
                                    mr: !0 === _ ? wa[a || 'paragraph-P16'].mr : _,
                                    mb: !0 === d ? wa[a || 'paragraph-P16'].mb : d,
                                    ml: !0 === p ? wa[a || 'paragraph-P16'].ml : p,
                                },
                                g,
                            ),
                            void 0 !== h ? r().createElement(ba, fa({}, h, { text: t })) : t,
                        );
                    }),
                    Ta = {
                        base: 'EventTask_base_94',
                        base__small: 'EventTask_base__small_80',
                        base__extraSmall: 'EventTask_base__extraSmall_32',
                        imageWrapper: 'EventTask_imageWrapper_78',
                        image: 'EventTask_image_8b',
                        image__wtBoss: 'EventTask_image__wtBoss_21',
                        image__ticket: 'EventTask_image__ticket_b1',
                        image__wtHunter: 'EventTask_image__wtHunter_d0',
                        labelWrapper: 'EventTask_labelWrapper_ad',
                        label: 'EventTask_label_4d',
                        buttonWrapper: 'EventTask_buttonWrapper_34',
                        button: 'EventTask_button_6a',
                        buttonText: 'EventTask_buttonText_35',
                        quantity: 'EventTask_quantity_7d',
                    },
                    Ra = { wt_boss: 'wtBoss', wtevent_ticket: 'ticket', wt_hunter: 'wtHunter' },
                    xa = (0, n.memo)(({ type: e, quantity: t, isActionDisabled: a, onClickHandler: u }) => {
                        const s = e.replace(/:/g, '_'),
                            i = Ra[s],
                            l = Pe(),
                            o = z()(Ta.base, Ta[`base__${l}`]),
                            c = z()(Ta.image, Ta[`image__${i}`]),
                            m = R.strings.event.postbattle,
                            d = m.label.$dyn(s),
                            E = m.button.$dyn(s),
                            p = _(m.boxAmount(), { amount: t });
                        let b = r().createElement('div', { className: c });
                        const h = (function (e) {
                                return e in Ra;
                            })(s)
                                ? Ra[s]
                                : null,
                            g = (0, n.useMemo)(() => ({ isHunterLootBox: h === Ra.wt_hunter }), [h]);
                        h === Ra.wt_boss || h === Ra.wt_hunter
                            ? (b = r().createElement(
                                  He,
                                  {
                                      contentId: R.views.white_tiger.lobby.tooltips.LootBoxTooltipView('resId'),
                                      args: g,
                                  },
                                  b,
                              ))
                            : h === Ra.wtevent_ticket &&
                              (b = r().createElement(
                                  He,
                                  { contentId: R.views.white_tiger.lobby.tooltips.TicketTooltipView('resId') },
                                  b,
                              ));
                        const v = (0, n.useCallback)(() => {
                            a || u(e);
                        }, [u, e, a]);
                        return r().createElement(
                            'div',
                            { className: o },
                            b,
                            t > 1 && r().createElement('div', { className: Ta.quantity }, p),
                            r().createElement(
                                'div',
                                { className: Ta.labelWrapper },
                                r().createElement('div', { className: Ta.label }, d),
                                r().createElement(
                                    'div',
                                    { className: Ta.buttonWrapper },
                                    r().createElement(
                                        st,
                                        {
                                            type: 'primary',
                                            size: 'small',
                                            disabled: a,
                                            mixClass: Ta.button,
                                            onClick: v,
                                        },
                                        r().createElement('span', { className: Ta.buttonText }, E),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Na = {
                        base: 'AnimationItems_base_49',
                        base__small: 'AnimationItems_base__small_38',
                        base__extraSmall: 'AnimationItems_base__extraSmall_8e',
                        itemAnimation: 'AnimationItems_itemAnimation_f8',
                        entering: 'AnimationItems_entering_3c',
                        entered: 'AnimationItems_entered_e2',
                    },
                    La = ['reveal', 'bolt', 'fog_energy'],
                    Pa = (e) => ({ appear: 900 + 240 * e, enter: 240 }),
                    ka = () => {
                        const e = Pe(),
                            t = z()(Na.base, Na[`base__${e}`]);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    La.map((e, t) => window.setTimeout(() => window.swfPlayer.play(e), 900 + 240 * t)),
                                    () => {
                                        La.forEach((e, t) => {
                                            window.swfPlayer.restart(e), window.clearTimeout(t);
                                        }, []);
                                    }
                                ),
                                [],
                            ),
                            r().createElement(
                                r().Fragment,
                                null,
                                La.map((e, a) =>
                                    r().createElement(Le.uT, { key: e, in: !0, appear: !0, timeout: Pa(a) }, (a) => {
                                        const n = z()(Na.itemAnimation, Na[a]);
                                        return r().createElement(
                                            'div',
                                            { className: n },
                                            r().createElement('img', {
                                                className: t,
                                                src: `swf://gui/flash/animations/wt_event/${e}.swf?name=${e}`,
                                            }),
                                        );
                                    }),
                                ),
                            )
                        );
                    },
                    Ia = {
                        base: 'EventTasksList_base_89',
                        EventTaskAnimation: 'EventTasksList_EventTaskAnimation_ed',
                        entering: 'EventTasksList_entering_0c',
                        entered: 'EventTasksList_entered_68',
                        wrapper: 'EventTasksList_wrapper_3f',
                        questsCompletedText: 'EventTasksList_questsCompletedText_cb',
                    };
                function Ma() {
                    return (
                        (Ma =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ma.apply(this, arguments)
                    );
                }
                const Oa = (e) => ({ appear: 800 + 100 * e, enter: 400 }),
                    Ha = R.strings.postbattle_screen.personalResultTab,
                    Wa = () => {
                        const e = T('model.widgets.widgets'),
                            t = T('model').onWidgetClick,
                            a = T('model.events'),
                            u = a.hasQuestsToShow,
                            s = a.isHunter,
                            i = (0, n.useCallback)(
                                (e) => {
                                    t({ type: e });
                                },
                                [t],
                            ),
                            l = (0, n.useCallback)((e) => ({ tooltipId: e }), []);
                        return r().createElement(
                            'div',
                            { className: Ia.base },
                            e.map(({ value: e }, t) =>
                                r().createElement(Le.uT, { key: t, in: !0, appear: !0, timeout: Oa(t) }, (a) => {
                                    const n = z()(Ia.EventTaskAnimation, Ia[a]);
                                    return r().createElement(
                                        'div',
                                        { className: Ia.wrapper },
                                        r().createElement(ka, null),
                                        r().createElement(
                                            'div',
                                            { className: n },
                                            e.name === Ra.wtevent_ticket
                                                ? r().createElement(
                                                      xa,
                                                      Ma(
                                                          {
                                                              key: t,
                                                              onClickHandler: i,
                                                              type: e.name,
                                                              quantity: Number(e.value),
                                                          },
                                                          e,
                                                      ),
                                                  )
                                                : r().createElement(
                                                      Ue,
                                                      { args: l(e.name) },
                                                      r().createElement(
                                                          xa,
                                                          Ma(
                                                              {
                                                                  key: t,
                                                                  type: e.name,
                                                                  quantity: Number(e.value),
                                                                  onClickHandler: i,
                                                              },
                                                              e,
                                                          ),
                                                      ),
                                                  ),
                                        ),
                                    );
                                }),
                            ),
                            !u &&
                                s &&
                                r().createElement(Sa, {
                                    className: Ia.questsCompletedText,
                                    text: Ha.questsCompleted.hunter(),
                                }),
                        );
                    };
                let $a;
                !(function (e) {
                    (e.DamageAssistedStun = 'damageAssistedStun'),
                        (e.Spotted = 'spotted'),
                        (e.DamageAssisted = 'damageAssisted'),
                        (e.DamageBlockedByArmor = 'damageBlockedByArmor'),
                        (e.CritsCount = 'critsCount'),
                        (e.DamageDealt = 'damageDealt'),
                        (e.Kills = 'kills');
                })($a || ($a = {}));
                const Ua = { lastArgument: null, lastResult: null },
                    Xa = {
                        base: 'StatsEfficiency_base_46',
                        item: 'StatsEfficiency_item_0c',
                        item__gold: 'StatsEfficiency_item__gold_d7',
                        item__silver: 'StatsEfficiency_item__silver_ad',
                        item__bronze: 'StatsEfficiency_item__bronze_42',
                        iconWrapper: 'StatsEfficiency_iconWrapper_0b',
                        icon: 'StatsEfficiency_icon_f7',
                        item__damageAssisted: 'StatsEfficiency_item__damageAssisted_de',
                        item__damageDealt: 'StatsEfficiency_item__damageDealt_f3',
                        item__damageBlockedByArmor: 'StatsEfficiency_item__damageBlockedByArmor_c4',
                        item__kills: 'StatsEfficiency_item__kills_1b',
                        count: 'StatsEfficiency_count_68',
                        title: 'StatsEfficiency_title_f5',
                    },
                    Ga = ['gold', 'silver', 'bronze'],
                    Ya = [$a.Kills, $a.DamageDealt, $a.DamageAssisted, $a.DamageBlockedByArmor],
                    ja = (e, t) => {
                        for (let a = 0; a < e.length; a++) {
                            const n = e[a].value,
                                r = n.paramName,
                                u = n.rank;
                            if (r === t) return u;
                        }
                        return 0;
                    },
                    qa = R.strings.postbattle_screen.common.efficiencyParameter,
                    za = (0, n.memo)(() => {
                        const e = T('model.common.detailedEfficiency.personalEfficiency'),
                            t =
                                (((a = T('model.common.detailedEfficiency.enemies')) === Ua.lastArgument &&
                                    null !== Ua.lastResult) ||
                                    ((Ua.lastArgument = a),
                                    (Ua.lastResult = ((e) =>
                                        e.reduce(
                                            (e, { value: t }) =>
                                                ((e, t) =>
                                                    t.params.reduce((e, { value: t }) => {
                                                        const a = e[t.paramName];
                                                        if (!a) return e;
                                                        const n = { value: a.value + t.detailedValue };
                                                        return Object.assign({}, e, { [t.paramName]: n });
                                                    }, e))(e, t),
                                            Object.values($a).reduce(
                                                (e, t) => Object.assign({}, e, { [t]: { value: 0 } }),
                                                {},
                                            ),
                                        ))(a))),
                                Ua.lastResult);
                        var a;
                        const u = (0, n.useMemo)(
                            () =>
                                Object.entries(t)
                                    .filter(([e]) => Ya.includes(e))
                                    .map(([t, { value: a }]) => [
                                        t,
                                        { value: a, rank: ja(e, t), tooltipArgs: { parameter: t } },
                                    ])
                                    .sort(([e], [t]) => Ya.indexOf(e) - Ya.indexOf(t)),
                            [e, t],
                        );
                        return r().createElement(
                            'div',
                            { className: Xa.base },
                            u.map(([e, { value: t, rank: a, tooltipArgs: n }]) => {
                                const u = e === $a.DamageBlockedByArmor ? qa.damageBeatenByArmor() : qa.$dyn(e),
                                    s = i.cy.getNumberFormat(t),
                                    l = z()(
                                        Xa.item,
                                        Xa[`item__${e}`],
                                        (function (e) {
                                            return e < Ga.length ? Xa[`item__${Ga[e]}`] : '';
                                        })(a),
                                    );
                                return r().createElement(
                                    He,
                                    {
                                        key: e,
                                        contentId:
                                            R.views.white_tiger.lobby.postbattle.tooltips.PersonalEfficiency('resId'),
                                        args: n,
                                    },
                                    r().createElement(
                                        'div',
                                        { className: l },
                                        r().createElement(
                                            'div',
                                            { className: Xa.iconWrapper },
                                            r().createElement('div', { className: Xa.icon }),
                                        ),
                                        r().createElement(Sa, { className: Xa.count, text: s }),
                                        r().createElement(Sa, { className: Xa.title, text: u }),
                                    ),
                                );
                            }),
                        );
                    }),
                    Ka = R.images.gui.maps.icons.postbattle.postbattle_screen.general_info,
                    Va = (0, n.memo)(({ winStatus: e, vehicleIconName: t }) => {
                        const a = Ne(e),
                            u = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.shop.vehicles.c_600x450.$dyn(t)}')`,
                                }),
                                [t],
                            ),
                            s = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${Ka.$dyn(`vehicle_background_${a}`)})` }),
                                [a],
                            ),
                            i = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${Ka.$dyn(`vehicle_foreground_${a}`)})` }),
                                [a],
                            );
                        return r().createElement(
                            'div',
                            { className: 'VehicleImage_base_62' },
                            r().createElement(
                                'div',
                                { className: 'VehicleImage_vehicleImageContainer_9c' },
                                r().createElement('div', {
                                    className: 'VehicleImage_vehicleImageBackground_93',
                                    style: s,
                                }),
                                r().createElement('div', { className: 'VehicleImage_vehicleImage_61', style: u }),
                                r().createElement('div', {
                                    className: 'VehicleImage_vehicleImageForeground_4c',
                                    style: i,
                                }),
                            ),
                            r().createElement('div', { className: 'VehicleImage_shadow_5f' }),
                            r().createElement(
                                'div',
                                { className: 'VehicleImage_footer_64' },
                                r().createElement(za, null),
                            ),
                        );
                    }),
                    Qa = {
                        base: 'PersonalResultTab_base_e8',
                        base__exit: 'PersonalResultTab_base__exit_fc',
                        rewardTapeWrapper: 'PersonalResultTab_rewardTapeWrapper_b3',
                        base__enter: 'PersonalResultTab_base__enter_91',
                        blueSun: 'PersonalResultTab_blueSun_89',
                        bottomShadingAdditional: 'PersonalResultTab_bottomShadingAdditional_5e',
                        centralAnimationWrapper: 'PersonalResultTab_centralAnimationWrapper_a1',
                        bottomShading: 'PersonalResultTab_bottomShading_c4',
                        base__done: 'PersonalResultTab_base__done_cb',
                        base__active: 'PersonalResultTab_base__active_a2',
                        darkFallow: 'PersonalResultTab_darkFallow_4c',
                        vignette: 'PersonalResultTab_vignette_dd',
                        mapInfo: 'PersonalResultTab_mapInfo_f5',
                        rewardTape: 'PersonalResultTab_rewardTape_a1',
                        progressiveReward: 'PersonalResultTab_progressiveReward_68',
                        detailsButton: 'PersonalResultTab_detailsButton_38',
                        eventTasksListWrapper: 'PersonalResultTab_eventTasksListWrapper_03',
                        base__small: 'PersonalResultTab_base__small_5f',
                        base__extraSmall: 'PersonalResultTab_base__extraSmall_e2',
                    };
                function Za() {
                    return (
                        (Za =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Za.apply(this, arguments)
                    );
                }
                const Ja = P('model.common', (e) => Object.assign({}, e))(({ generalInfo: e, rewards: t }) => {
                    const a = t.progressiveReward,
                        u = ke.Victory === e.winStatus,
                        s = (0, n.useContext)(de),
                        i = s.setState,
                        l = Pe(),
                        o = z()(Qa.base, Qa[`base__${l}`]);
                    (0, n.useEffect)(() => {
                        i(oe.Idle);
                    }, [i]),
                        (0, n.useEffect)(
                            () => () => {
                                i(oe.Idle);
                            },
                            [i],
                        );
                    const c = (0, n.useCallback)(() => {
                            s.setState(oe.Idle);
                        }, [s]),
                        _ = (0, n.useMemo)(
                            () => ({
                                enter: Qa.base__enter,
                                enterActive: Qa.base__active,
                                enterDone: Qa.base__done,
                                exit: Qa.base__exit,
                            }),
                            [],
                        ),
                        m = 'mediumTank' === e.vehicleType;
                    return r().createElement(
                        Le.Kv,
                        {
                            in: ((d = s.state), d === oe.FirstIterationInDone),
                            timeout: 700,
                            classNames: _,
                            onExited: c,
                        },
                        r().createElement(
                            'div',
                            { className: o },
                            u && r().createElement('div', { className: Qa.blueSun }),
                            r().createElement('div', { className: Qa.darkFallow }),
                            r().createElement('div', { className: Qa.vignette }),
                            r().createElement(ta, Za({ isHunter: m }, e)),
                            r().createElement(
                                'div',
                                { className: Qa.centralAnimationWrapper },
                                r().createElement(Va, { winStatus: e.winStatus, vehicleIconName: e.vehicleIconName }),
                                r().createElement(
                                    'div',
                                    { className: Qa.rewardTapeWrapper },
                                    r().createElement('div', { className: Qa.rewardTape }, r().createElement(Ht, null)),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Qa.eventTasksListWrapper },
                                    r().createElement(Wa, null),
                                ),
                            ),
                            a.isEnabled &&
                                r().createElement('div', { className: Qa.progressiveReward }, r().createElement(zt, a)),
                        ),
                    );
                    var d;
                });
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        en.apply(this, arguments)
                    );
                }
                function tn(e, t, a) {
                    if (!t && !a) throw new Error('You should define at least one helper function');
                    return function (n) {
                        var u, s;
                        return (
                            (s = u =
                                class extends r().Component {
                                    constructor(n) {
                                        super(n);
                                        let r = {};
                                        const u = l().caller,
                                            s = window.__feature && window.__feature !== u ? `subViews.${u}.${e}` : e,
                                            i = o(s, window);
                                        if ((t && (r = Object.assign({}, r, t(i))), a)) {
                                            const e = a(i);
                                            for (const t in e)
                                                Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t].bind(i));
                                        }
                                        this.state = r;
                                    }
                                    render() {
                                        return r().createElement(n, en({}, this.props, this.state));
                                    }
                                }),
                            (u.displayName = `InjectProps(${x(n)})`),
                            s
                        );
                    };
                }
                let an;
                !(function (e) {
                    (e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING');
                })(an || (an = {}));
                const nn = (e) => (t) => (a, n) => e.call(null, a, n) * t,
                    rn =
                        (...e) =>
                        (t, a) => {
                            for (let n = 0; n < e.length; n++) {
                                const r = e[n].call(null, t, a);
                                if (0 !== r) return r;
                            }
                            return 0;
                        },
                    un = (e, t) => {
                        const a = e.toUpperCase(),
                            n = t.toUpperCase();
                        return a === n ? 0 : a > n ? 1 : -1;
                    },
                    sn = ['isTeamKiller'];
                let ln;
                !(function (e) {
                    (e.Base = '#ced9d9'),
                        (e.Killed = '#8c8c7e'),
                        (e.Highlighted = '#feab34'),
                        (e.KilledHighlighted = '#b58136'),
                        (e.TeamKiller = '#09e2ff'),
                        (e.KilledTeamKiller = '#0c8fa0'),
                        (e.DetailedInfoPlayerBase = '#f2f2f7');
                })(ln || (ln = {}));
                const on = ({ isPersonal: e, isSameSquad: t, isKilled: a }) =>
                        e || t ? (a ? ln.KilledHighlighted : ln.Highlighted) : a ? ln.Killed : ln.Base,
                    cn = (e) => {
                        let t = e.isTeamKiller,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, sn);
                        return t ? (a.isKilled ? ln.KilledTeamKiller : ln.TeamKiller) : on(a);
                    },
                    _n = {
                        base: 'PlayerVehicleInfo_base_20',
                        level__rightAlign: 'PlayerVehicleInfo_level__rightAlign_16',
                        type: 'PlayerVehicleInfo_type_aa',
                    };
                let mn;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT');
                })(mn || (mn = {}));
                const dn = (0, n.memo)(
                    ({ vehicleType: e, localizedVehicleName: t, user: a, isPersonal: u = !1, isSameSquad: s = !1 }) => {
                        const i = Ae(['vehicleName'], _n),
                            l = a.isTeamKiller,
                            o = a.isKilled,
                            c = cn({ isTeamKiller: l, isKilled: o, isPersonal: u, isSameSquad: s }),
                            _ = (0, n.useMemo)(() => ({ color: c }), [c]),
                            m = (0, n.useMemo)(() => {
                                const t = Kt(e);
                                return {
                                    maskImage: `url(${R.images.white_tiger.gui.maps.icons.postbattle.$dyn(t)})`,
                                    backgroundColor: c,
                                };
                            }, [e, c]);
                        return r().createElement(
                            'div',
                            { className: _n.base, style: _ },
                            r().createElement('div', { className: _n.type, style: m }),
                            r().createElement('div', { className: i.vehicleName }, t),
                        );
                    },
                );
                let En;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(En || (En = {}));
                const pn = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function bn() {
                    return (
                        (bn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        bn.apply(this, arguments)
                    );
                }
                const hn = R.views.common.tooltip_window.simple_tooltip_content,
                    gn = (e) => {
                        let t = e.children,
                            a = e.body,
                            u = e.header,
                            s = e.note,
                            i = e.alert,
                            l = e.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, pn);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: a, header: u, note: s, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, a, u, s, l]);
                        return r().createElement(
                            He,
                            bn(
                                {
                                    contentId:
                                        ((_ = null == l ? void 0 : l.hasHtmlContent),
                                        _ ? hn.SimpleTooltipHtmlContent('resId') : hn.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                o,
                            ),
                            t,
                        );
                        var _;
                    },
                    vn = (e) => {
                        let t,
                            a = null;
                        return (
                            (a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    (a = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== a && cancelAnimationFrame(a);
                            }
                        );
                    },
                    An = ({ content: e, classMix: t }) => {
                        const a = (0, n.useRef)(null),
                            u = (0, n.useState)(!0),
                            s = u[0],
                            i = u[1];
                        return (
                            (0, n.useEffect)(() =>
                                vn(() => {
                                    const e = a.current;
                                    e && e.offsetWidth >= e.scrollWidth && i(!1);
                                }),
                            ),
                            r().createElement(
                                gn,
                                { isEnabled: s, body: e },
                                r().createElement('div', { ref: a, className: z()('TextOverflow_base_3b', t) }, e),
                            )
                        );
                    },
                    fn = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Dn = { [En.default]: 'c_24x24', [En.x48]: 'c_48x48', [En.x80]: 'c_80x80', [En.x220]: 'c_220x220' },
                    Cn = ({ badgeID: e, size: t = En.default, className: a }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(Dn[t]);
                        return r().createElement('div', {
                            className: z()(fn.base, fn[`base__${t}`], a),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Fn = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    Bn = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const t = (0, n.useMemo)(
                                () => m(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            gn,
                            { header: t, body: a },
                            r().createElement('div', { className: Fn.anonymizedIcon }),
                        );
                    });
                function wn() {
                    return (
                        (wn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        wn.apply(this, arguments)
                    );
                }
                const yn = { [En.default]: 'c_64x24', [En.x48]: 'c_68x28' },
                    Sn = { [En.default]: 'c_48x48', [En.x48]: 'c_48x48' },
                    Tn = ({
                        userName: e,
                        clanAbbrev: t = '',
                        igrType: a = 0,
                        badge: u = { badgeID: '' },
                        suffixBadge: s = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: l = !1,
                        isAnonymizerShown: o = !1,
                        hiddenUserName: c = '',
                        size: _ = En.default,
                        userNameClassName: m = '',
                        clanTagClassName: d = '',
                    }) => {
                        const E = R.images.gui.maps.icons.library.badges.strips.$dyn(yn[_]),
                            p = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${E.$dyn(`strip_${s.badgeID}`)})` }),
                                [s, E],
                            ),
                            b = R.images.gui.maps.icons.library.badges.$dyn(Sn[_]),
                            h = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${b.$dyn(`badge_${s.badgeID}`)})` }),
                                [s, b],
                            ),
                            g = t ? `[${t}]` : '',
                            v = z()(Fn.base, Fn[`base__${_}`], i && Fn.base__inverted),
                            A = z()(Fn.userName, m),
                            f = z()(Fn.clanTag, d),
                            D = e !== c,
                            C = l ? `${c}${g}` : c,
                            F = Boolean(u.badgeID) && r().createElement(Cn, wn({ size: _ }, u, { key: 'badge' })),
                            B = Date.now(),
                            w = [
                                F,
                                [
                                    r().createElement(
                                        'div',
                                        { className: A, key: 'userName' },
                                        r().createElement(An, { content: e, key: B }),
                                    ),
                                    !l && Boolean(g) && r().createElement('div', { className: f, key: 'clanTag' }, g),
                                ],
                                0 !== a && r().createElement('div', { className: Fn.igrIcon, key: 'igrType' }),
                                Boolean(s.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: Fn.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: Fn.suffixBadgeStripe, style: p }),
                                        r().createElement('div', { className: Fn.suffixBadge, style: h }),
                                    ),
                                o && D && r().createElement(Bn, { tooltipHeaderName: C, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: v }, i ? w.reverse() : w);
                    },
                    Rn = ['isTeamKiller', 'isKilled', 'isPersonal', 'isSameSquad'],
                    xn = (e) => {
                        let t = e.isTeamKiller,
                            a = e.isKilled,
                            u = e.isPersonal,
                            s = e.isSameSquad,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Rn);
                        const l = cn({ isTeamKiller: t, isKilled: a, isPersonal: u, isSameSquad: s }),
                            o = (0, n.useMemo)(() => ({ color: l }), [l]);
                        return r().createElement('div', { style: o }, r().createElement(Tn, i));
                    },
                    Nn = {
                        base: 'LifeStatus_base_a2',
                        base__extraSmall: 'LifeStatus_base__extraSmall_45',
                        base__small: 'LifeStatus_base__small_68',
                        killer: 'LifeStatus_killer_05',
                        killer__bot: 'LifeStatus_killer__bot_ff',
                    };
                function Ln() {
                    return (
                        (Ln =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ln.apply(this, arguments)
                    );
                }
                const Pn = R.strings.postbattle_screen.UserStatus.vehicleState.dead,
                    kn = ({ userName: e, attackReason: t, killer: a }) => {
                        const n = 3 === t || 5 === t || 7 === t,
                            u = a.isPersonal,
                            s = a.isSameSquad,
                            i = a.isBot,
                            l = a.user,
                            o = e === l.userName,
                            c = z()(Nn.killer, i && Nn.killer__bot);
                        return n && o
                            ? Pn.self.$num(t)
                            : r().createElement(
                                  r().Fragment,
                                  null,
                                  r().createElement('div', null, Pn.$num(t)),
                                  r().createElement(
                                      'div',
                                      { className: c },
                                      i ? null : r().createElement(xn, Ln({}, l, { isPersonal: u, isSameSquad: s })),
                                  ),
                              );
                    },
                    In = new Set([0, 1, 2, 3, 5, 7]),
                    Mn = ({ userName: e, attackReason: t, killer: a, isLeftBattle: n = !1 }) => {
                        const u = R.strings.postbattle_screen.UserStatus.vehicleState;
                        return n
                            ? u.prematureLeave()
                            : -1 === t
                              ? u.alive()
                              : In.has(t) && a
                                ? r().createElement(kn, { userName: e, attackReason: t, killer: a })
                                : u.dead.$num(t);
                    };
                function On() {
                    return (
                        (On =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        On.apply(this, arguments)
                    );
                }
                const Hn = (e) => {
                        let t = On({}, e);
                        const a = Ae(['base'], Nn);
                        return r().createElement('div', { className: a.base }, r().createElement(Mn, t));
                    },
                    Wn = ({ achievements: e }) => {
                        const t = e.filter((e) => e.value.groupID === Ye);
                        return r().createElement(
                            'div',
                            { className: 'EfficiencyAchievements_base_ec' },
                            r().createElement(Ve, { achievements: t, isCentered: !0 }),
                        );
                    },
                    $n = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            a = t.width,
                            n = t.height;
                        return 0 !== a && 0 !== n;
                    };
                var Un = a(8380),
                    Xn = a.n(Un);
                const Gn = r().forwardRef((e, t) => {
                        const a = e.offsetLeft,
                            u = void 0 === a ? 0 : a,
                            s = e.offsetTop,
                            i = void 0 === s ? 0 : s,
                            l = e.scrollSettings,
                            o = e.onUpdateActiveAxis,
                            c = e.onHorizontalScroll,
                            _ = e.onVerticalScroll,
                            m = e.onOverScrollAtBeginning,
                            d = e.onOverScrollAtEnd,
                            E = e.wrapperIndent,
                            p = e.verticalScrollbarMargin,
                            b = e.isMultipleScroll,
                            h = e.scrollAreaContainer,
                            g = e.children,
                            v = e.classMix,
                            A = e.onScrollLeftHandled,
                            f = (0, n.useState)(!1),
                            D = f[0],
                            C = f[1],
                            F = (0, n.useState)(),
                            B = F[0],
                            w = F[1],
                            y = (0, n.useState)(),
                            S = y[0],
                            T = y[1],
                            R = (0, n.useRef)(null),
                            x = (0, n.useCallback)(() => {
                                B &&
                                    o &&
                                    o({ x: B.scrollbarXActive, y: B.scrollbarYActive }, { x: B.reach.x, y: B.reach.y });
                            }, [o, B]),
                            N = (0, n.useCallback)(() => B, [B]),
                            L = (0, n.useCallback)(() => {
                                B && B.update();
                            }, [B]),
                            P = (0, n.useCallback)(
                                (e, t, a) => {
                                    B && (B.setScrollLeft(e, t, a), A && A(e, B.contentWidth - B.containerWidth));
                                },
                                [B, A],
                            ),
                            k = (0, n.useCallback)(
                                (e) => {
                                    B && (B.setScrollLeftImmediately(e), A && A(e, B.contentWidth - B.containerWidth));
                                },
                                [B, A],
                            ),
                            I = (0, n.useCallback)(
                                (e, t, a) => {
                                    B && B.setScrollTop(e, t, a);
                                },
                                [B],
                            ),
                            M = (0, n.useCallback)(
                                (e) => {
                                    B && B.setScrollTopImmediately(e);
                                },
                                [B],
                            ),
                            O = (0, n.useCallback)(() => {
                                if (S && c && B) {
                                    const e = { scrollPosition: S.scrollLeft < 0 ? 0 : S.scrollLeft, reach: B.reach.x };
                                    c(e);
                                }
                            }, [c, S, B]),
                            H = (0, n.useCallback)(() => {
                                if (S && _ && B) {
                                    const e = { scrollPosition: S.scrollTop, reach: B.reach.y };
                                    _(e);
                                }
                            }, [_, S, B]),
                            W = (0, n.useCallback)(() => {
                                m && m();
                            }, [m]),
                            $ = (0, n.useCallback)(() => {
                                d && d();
                            }, [d]),
                            U = (0, n.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), T(e);
                                },
                                [t],
                            ),
                            X = (0, n.useCallback)(() => {
                                B &&
                                    (B.update(),
                                    (R.current = vn(() => {
                                        x();
                                    })));
                            }, [B, x]),
                            G = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (B && S)
                                return (
                                    document.addEventListener('mousemove', G),
                                    window.addEventListener('resize', X),
                                    S.addEventListener('ps-scroll-x', O),
                                    S.addEventListener('ps-scroll-y', H),
                                    S.addEventListener('over-scroll-beginning', W),
                                    S.addEventListener('over-scroll-ending', $),
                                    C(!0),
                                    () => {
                                        window.removeEventListener('resize', X),
                                            document.removeEventListener('mousemove', G),
                                            S &&
                                                (S.removeEventListener('ps-scroll-x', O),
                                                S.removeEventListener('ps-scroll-y', H),
                                                S.removeEventListener('over-scroll-beginning', W),
                                                S.removeEventListener('over-scroll-ending', $));
                                    }
                                );
                        }, [G, O, W, $, X, S, B, H]);
                        const Y = (0, n.useRef)(S || null);
                        Y.current = S || null;
                        const j = ((e) => {
                            const t = (0, n.useState)($n(e ? e.current : null)),
                                a = t[0],
                                r = t[1];
                            return (
                                (0, n.useEffect)(() => {
                                    let t = 0;
                                    const a = () => {
                                        t = requestAnimationFrame(() => {
                                            $n(e ? e.current : null) ? r(!0) : a();
                                        });
                                    };
                                    return (
                                        a(),
                                        () => {
                                            cancelAnimationFrame(t);
                                        }
                                    );
                                }, [e]),
                                (0, n.useEffect)(() => () => r(!1), [e]),
                                a
                            );
                        })(Y);
                        (0, n.useEffect)(
                            () => (
                                !B && S && j && w(new (Xn())(S, Object.assign({}, l))),
                                () => {
                                    B && (B.destroy(), w(void 0));
                                }
                            ),
                            [S, j, l, B],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == R.current || R.current();
                                },
                                [],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    vn(() => {
                                        B && x();
                                    }),
                                [x, B],
                            ),
                            (0, n.useEffect)(() => {
                                u > 0 && k(u);
                            }, [u, k]),
                            (0, n.useEffect)(() => {
                                i > 0 && M(i);
                            }, [i, M]),
                            (0, n.useEffect)(() => {
                                h &&
                                    ((h.setScrollLeft = P),
                                    (h.setScrollTop = I),
                                    (h.setScrollLeftImmediately = k),
                                    (h.setScrollTopImmediately = M),
                                    (h.updateScrollArea = L),
                                    (h.getScrollbar = N));
                            }, [h, P, k, I, M, L, N]);
                        const q = z()(
                            'ScrollArea_base_47',
                            {
                                ScrollArea_base__scrollIndent_1d: E,
                                ScrollArea_base__hidden_ec: !D,
                                ScrollArea_base__verticalScrollbarMargin_50: p,
                                ScrollArea_base__multiple_44: b,
                            },
                            v,
                        );
                        return r().createElement('div', { className: q, ref: U }, g);
                    }),
                    Yn = {
                        row: 'StatisticsInfoRow_row_a6',
                        row__extraSmall: 'StatisticsInfoRow_row__extraSmall_c8',
                        row__subgroup: 'StatisticsInfoRow_row__subgroup_e4',
                        separator: 'StatisticsInfoRow_separator_29',
                        separator__small: 'StatisticsInfoRow_separator__small_2d',
                        description: 'StatisticsInfoRow_description_78',
                        icon: 'StatisticsInfoRow_icon_cc',
                    },
                    jn = R.strings.postbattle_screen.detailedStats.statistics.battleDuration('resId'),
                    qn = ({ id: e, attackReason: t, itemType: a, value: n, isSubgroup: u = !1, hasTooltip: s }) => {
                        const l = Ae(['row'], Yn),
                            o = R.strings.postbattle_screen.TeamStats.$dyn(e),
                            c = ((e, t, a) => {
                                switch (e) {
                                    case 'integer':
                                        return pt(t, 'integral');
                                    case 'mileage':
                                        return (t / 1e3).toFixed(2);
                                    case 'int_array':
                                        return t.map(({ value: e }) => e).join(' / ');
                                    case 'local_time':
                                        return i.Z5.getTimeFormat(t, i.lf.SHORT_FORMAT);
                                    case 'battle_duration':
                                        return i.cy.getTimeString(jn, t, !0);
                                    case 'lifetime':
                                        return -1 === a ? ' - ' : i.cy.getTimeString(jn, t, !0);
                                    default:
                                        return '';
                                }
                            })(a, n, t),
                            _ = z()(l.row, u && Yn.row__subgroup);
                        return r().createElement(
                            'div',
                            { className: _ },
                            s && Boolean(e)
                                ? r().createElement(
                                      gn,
                                      {
                                          header: R.strings.postbattle_screen.TeamStats.tooltip.header.$dyn(e),
                                          body: R.strings.postbattle_screen.TeamStats.tooltip.body.$dyn(e),
                                      },
                                      r().createElement(
                                          'div',
                                          { className: Yn.description },
                                          o,
                                          r().createElement('img', {
                                              src: R.images.gui.maps.icons.postbattle.team_statistics.icon_information(),
                                              className: Yn.icon,
                                              alt: '',
                                          }),
                                      ),
                                  )
                                : o,
                            r().createElement('span', { className: Yn.separator }),
                            r().createElement('span', { className: Yn.value }, c),
                        );
                    },
                    zn = { group__last: 'StatisticsInfoGroup_group__last_ce' };
                function Kn() {
                    return (
                        (Kn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Kn.apply(this, arguments)
                    );
                }
                const Vn = ({ group: e, attackReason: t }) =>
                        r().createElement(
                            'div',
                            { className: zn.group },
                            e.map((e, a) =>
                                r().createElement(qn, Kn({ key: e.id, attackReason: t, isSubgroup: a > 0 }, e)),
                            ),
                        ),
                    Qn = {
                        base: 'StatisticsInfo_base_5e',
                        base__extraSmall: 'StatisticsInfo_base__extraSmall_5f',
                        groups: 'StatisticsInfo_groups_5a',
                    },
                    Zn = ({ items: e, attackReason: t }) => {
                        const a = Ae(['base'], Qn),
                            n = e.map((e) => e.value),
                            u = [];
                        let s = [],
                            i = n[0].blockIdx;
                        for (let e = 0; e < n.length; e++)
                            n[e].blockIdx !== i && (u.push(s), (i = n[e].blockIdx), (s = [])),
                                s.push(n[e]),
                                e === n.length - 1 && u.push(s);
                        return r().createElement(
                            'div',
                            { className: a.base },
                            r().createElement(
                                Gn,
                                { key: Math.random() },
                                r().createElement(
                                    'div',
                                    { className: Qn.groups },
                                    u.map((e, a) => r().createElement(Vn, { key: a, attackReason: t, group: e })),
                                ),
                            ),
                        );
                    },
                    Jn = ['isTeamKiller', 'isKilled'],
                    er = (e) => {
                        let t = e.isTeamKiller,
                            a = e.isKilled,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Jn);
                        const s = (({ isTeamKiller: e, isKilled: t }) =>
                                e ? (t ? ln.KilledTeamKiller : ln.TeamKiller) : ln.DetailedInfoPlayerBase)({
                                isTeamKiller: t,
                                isKilled: a,
                            }),
                            i = (0, n.useMemo)(() => ({ color: s }), [s]);
                        return r().createElement('div', { style: i }, r().createElement(Tn, u));
                    },
                    tr = {
                        base: 'DetailedStats_base_56',
                        header: 'DetailedStats_header_31',
                        killedUserBackground: 'DetailedStats_killedUserBackground_60',
                        vehicleInfo: 'DetailedStats_vehicleInfo_a2',
                        vehicleName: 'DetailedStats_vehicleName_2a',
                        vehicleName__extraSmall: 'DetailedStats_vehicleName__extraSmall_81',
                        vehicleIcon: 'DetailedStats_vehicleIcon_2c',
                        vehicleIcon__extraSmall: 'DetailedStats_vehicleIcon__extraSmall_47',
                        playerSummary: 'DetailedStats_playerSummary_2e',
                        playerSummary__extraSmall: 'DetailedStats_playerSummary__extraSmall_f3',
                        close: 'DetailedStats_close_39',
                        closeText: 'DetailedStats_closeText_4e',
                        stats: 'DetailedStats_stats_fc',
                        stats__extraSmall: 'DetailedStats_stats__extraSmall_0d',
                        stats__info: 'DetailedStats_stats__info_df',
                        stats__bordered: 'DetailedStats_stats__bordered_6a',
                    };
                function ar() {
                    return (
                        (ar =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ar.apply(this, arguments)
                    );
                }
                const nr = R.images.gui.maps.icons.vehicle.c_420x307,
                    rr = (0, n.memo)(({ onClose: e, manageMainEscapeListener: t, player: a, killerPlayer: u }) => {
                        (0, n.useEffect)(() => (t ? (t(!1), () => t(!0)) : () => null), [t]), ye(Be.n.ESCAPE, e);
                        const s = a.isPersonal,
                            i = a.isSameSquad,
                            l = a.localizedVehicleName,
                            o = a.user,
                            c = a.details,
                            _ = c.achievements,
                            m = c.attackReason,
                            d = c.statistics,
                            E = a.vehicleName,
                            p = a.vehicleLevel,
                            b = a.vehicleType,
                            h = o.isKilled,
                            g = (0, n.useCallback)(() => pe.playHighlight(), []),
                            v = Ae(['vehicleIcon', 'vehicleName', 'playerSummary', 'stats'], tr),
                            A = nr.$dyn(
                                (function (e) {
                                    return e.split(':')[1].toLowerCase().replace('-', '_');
                                })(E),
                            ),
                            f = (0, n.useMemo)(() => ({ backgroundImage: `url(${A})` }), [A]),
                            D = _.length > 0,
                            C = z()(v.stats, tr.stats__info, !D && tr.stats__bordered),
                            F = s && window.model.userStatus.isLeftBattle;
                        return r().createElement(
                            'div',
                            { className: tr.base },
                            r().createElement(
                                'div',
                                { className: tr.header },
                                h && r().createElement('div', { className: tr.killedUserBackground }),
                                r().createElement('div', { className: v.vehicleIcon, style: f }),
                                r().createElement(
                                    'div',
                                    { className: tr.vehicleInfo },
                                    r().createElement(
                                        'div',
                                        { className: v.vehicleName },
                                        r().createElement(er, ar({}, o, { isAnonymizerShown: !0 })),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: v.playerSummary },
                                        r().createElement(dn, {
                                            vehicleLevel: p,
                                            vehicleType: b,
                                            localizedVehicleName: l,
                                            user: o,
                                            isPersonal: s,
                                            isSameSquad: i,
                                            alignment: mn.LEFT,
                                        }),
                                        r().createElement(Hn, {
                                            userName: o.userName,
                                            attackReason: m,
                                            killer: u,
                                            isLeftBattle: F,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: tr.close, onClick: e, onMouseEnter: g },
                                    r().createElement(
                                        'div',
                                        { className: tr.closeText },
                                        R.strings.postbattle_screen.PostbattleScreenApp.close(),
                                    ),
                                ),
                            ),
                            D && r().createElement(Wn, { achievements: _ }),
                            r().createElement(
                                'div',
                                { className: C },
                                r().createElement(Zn, { attackReason: m, items: d }),
                            ),
                        );
                    }),
                    ur = {
                        base: 'ActiveArrow_base_a0',
                        line: 'ActiveArrow_line_e7',
                        arrow: 'ActiveArrow_arrow_55',
                        arrow__top: 'ActiveArrow_arrow__top_e1',
                    },
                    sr = (0, n.memo)(({ direction: e }) => {
                        const t = z()(ur.arrow, ur[`arrow__${e}`]);
                        return r().createElement(
                            'div',
                            { className: ur.base },
                            r().createElement('div', { className: ur.line }),
                            r().createElement('div', { className: t }),
                            r().createElement('div', { className: ur.line }),
                        );
                    }),
                    ir = {
                        base: 'TeamTable_base_1f',
                        base__small: 'TeamTable_base__small_b0',
                        base__extraSmall: 'TeamTable_base__extraSmall_75',
                        base__boss: 'TeamTable_base__boss_5a',
                        base__scroll: 'TeamTable_base__scroll_ca',
                        hidden: 'TeamTable_hidden_aa',
                        head: 'TeamTable_head_52',
                        head__small: 'TeamTable_head__small_83',
                        head__extraSmall: 'TeamTable_head__extraSmall_ec',
                        body: 'TeamTable_body_c1',
                        bodyWrapper: 'TeamTable_bodyWrapper_f7',
                        headRow: 'TeamTable_headRow_8e',
                        bodyRow: 'TeamTable_bodyRow_87',
                        bodyRow__isFirst: 'TeamTable_bodyRow__isFirst_96',
                        bodyRow__isActive: 'TeamTable_bodyRow__isActive_60',
                        bodyRow__isKilled: 'TeamTable_bodyRow__isKilled_34',
                        cell: 'TeamTable_cell_5a',
                        headCell: 'TeamTable_headCell_6b',
                        cell__small: 'TeamTable_cell__small_0b',
                        cell__extraSmall: 'TeamTable_cell__extraSmall_c5',
                        headCell__small: 'TeamTable_headCell__small_fa',
                        headCell__extraSmall: 'TeamTable_headCell__extraSmall_29',
                        cell__icon: 'TeamTable_cell__icon_a9',
                        headCell__icon: 'TeamTable_headCell__icon_a6',
                        cell__smallIcon: 'TeamTable_cell__smallIcon_00',
                        headCell__smallIcon: 'TeamTable_headCell__smallIcon_d0',
                        cell__name: 'TeamTable_cell__name_89',
                        cell__vehicle: 'TeamTable_cell__vehicle_e1',
                        cell__medal: 'TeamTable_cell__medal_66',
                        cell__squad: 'TeamTable_cell__squad_0b',
                        cell__kills: 'TeamTable_cell__kills_a6',
                        cell__xp: 'TeamTable_cell__xp_a5',
                        headCell__name: 'TeamTable_headCell__name_2c',
                        headCell__vehicle: 'TeamTable_headCell__vehicle_db',
                        playerName: 'TeamTable_playerName_d9',
                        name: 'TeamTable_name_7d',
                        name__small: 'TeamTable_name__small_f7',
                        name__extraSmall: 'TeamTable_name__extraSmall_dd',
                        headHover: 'TeamTable_headHover_ee',
                        headCell__active: 'TeamTable_headCell__active_a4',
                        headIcon: 'TeamTable_headIcon_60',
                        headIcon__damageHeader: 'TeamTable_headIcon__damageHeader_c0',
                        headIcon__fragHeader: 'TeamTable_headIcon__fragHeader_5e',
                        headIcon__xpHeader: 'TeamTable_headIcon__xpHeader_23',
                        headIcon__tankHeader: 'TeamTable_headIcon__tankHeader_de',
                        headIcon__medalHeader: 'TeamTable_headIcon__medalHeader_af',
                        headIcon__squadHeader: 'TeamTable_headIcon__squadHeader_99',
                        headDivider: 'TeamTable_headDivider_9a',
                        glow: 'TeamTable_glow_1e',
                        activeArrow: 'TeamTable_activeArrow_3d',
                    },
                    lr = (0, n.memo)(
                        ({ isCurrent: e, isReverse: t, style: a, children: u, onSort: s, sortType: i, tooltip: l }) => {
                            const o = (0, n.useCallback)(() => {
                                    pe.playClick(), s(i);
                                }, [s, i]),
                                c = (0, n.useCallback)(() => pe.playHighlight(), []),
                                _ = Ae(['headCell'], ir),
                                m = z()(_.headCell, a, e && ir.headCell__active, t && ir.headCell__reverse);
                            return r().createElement(
                                gn,
                                l,
                                r().createElement(
                                    'div',
                                    { className: m, onClick: o, onMouseEnter: c },
                                    u,
                                    e &&
                                        r().createElement(
                                            'div',
                                            { className: ir.activeArrow },
                                            r().createElement(sr, { direction: t ? 'top' : 'bottom' }),
                                        ),
                                ),
                            );
                        },
                    ),
                    or = R.strings.postbattle_screen.TeamTable,
                    cr = r().memo(({ sortType: e, sortDirection: t, onSort: a, teamRole: u }) => {
                        const s = Ae(['head'], ir),
                            i = z()(ir.headCell__smallIcon),
                            l = 1 === t,
                            o = (0, n.useCallback)((e) => {
                                const t = or.$dyn(e);
                                return { header: t.$dyn('header'), body: t.$dyn('body') };
                            }, []),
                            c = u === Fe.Hunter ? or.stats.hunterTeam() : or.stats.bossTeam(),
                            _ = (0, n.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case Ce.VEHICLE:
                                            return ir.headCell__vehicle;
                                        case Ce.MEDAL:
                                        case Ce.PLATOON:
                                            return i;
                                        default:
                                            return ir.headCell__icon;
                                    }
                                },
                                [i],
                            );
                        return r().createElement(
                            'div',
                            { className: s.head },
                            r().createElement(
                                'div',
                                { className: ir.headRow },
                                Object.values(Ce).map((t, n, s) => {
                                    if (t === Ce.NONE) return null;
                                    if (t === Ce.PLATOON && u === Fe.Boss) return null;
                                    if (t === Ce.MEDAL) return null;
                                    const i = z()(ir.headIcon, ir[`headIcon__${t}`]),
                                        m = t === Ce.NAME,
                                        d = m ? ir.headCell__name : _(t);
                                    return r().createElement(
                                        lr,
                                        {
                                            key: t,
                                            style: d,
                                            isCurrent: e === t,
                                            isReverse: l,
                                            sortType: t,
                                            onSort: a,
                                            tooltip: o(t),
                                        },
                                        m
                                            ? r().createElement('span', { className: ir.playerName }, c)
                                            : r().createElement('div', { className: i }),
                                        r().createElement('div', { className: ir.headHover }),
                                        n < s.length - 2 && r().createElement('div', { className: ir.headDivider }),
                                    );
                                }),
                            ),
                        );
                    });
                let _r;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(_r || (_r = {}));
                const mr = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: u,
                        isEnabled: s = !0,
                        onMouseDown: l,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, i.c9)(i.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: u,
                                }),
                                    pe.playYes();
                            }, [u, t, a, r]),
                            c = (0, n.useCallback)(() => {
                                (0, i.c9)(i.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, r]),
                            _ = (0, n.useCallback)(
                                (e) => {
                                    l && l(e), ((e) => e.button === _r.RIGHT)(e) && o();
                                },
                                [l, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && c();
                            }, [s, c]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: _ }) : e
                        );
                    },
                    dr = ['children'];
                function Er() {
                    return (
                        (Er =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Er.apply(this, arguments)
                    );
                }
                const pr = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, dr);
                        return r().createElement(
                            mr,
                            Er({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    br = 'allies',
                    hr = {
                        base: 'TableRendererMedal_base_03',
                        medalContainer: 'TableRendererMedal_medalContainer_5e',
                        medalIcon: 'TableRendererMedal_medalIcon_80',
                        medalCount: 'TableRendererMedal_medalCount_8f',
                        medalCount__extraSmall: 'TableRendererMedal_medalCount__extraSmall_cc',
                        medalCount__small: 'TableRendererMedal_medalCount__small_70',
                    },
                    gr = (0, n.memo)(({ details: e, isPersonal: t, isSameSquad: a, user: u }) => {
                        const s = e.achievements,
                            i = u.isKilled,
                            l = s.reduce((e, t) => `${e}${R.strings.achievements.$dyn(t.value.name)}\n`, ''),
                            o = Ae(['medalCount'], hr),
                            c = on({ isPersonal: t, isSameSquad: a, isKilled: i }),
                            _ = (0, n.useMemo)(() => ({ backgroundColor: c }), [c]);
                        return r().createElement(
                            gn,
                            { body: l },
                            r().createElement(
                                'div',
                                { className: hr.base },
                                r().createElement(
                                    'div',
                                    { className: hr.medalContainer },
                                    r().createElement('div', { className: hr.medalIcon, style: _ }),
                                    s.length > 1 && r().createElement('div', { className: o.medalCount }, s.length),
                                ),
                            ),
                        );
                    }),
                    vr = {
                        base: 'TableRendererVehicleInfo_base_80',
                        base__small: 'TableRendererVehicleInfo_base__small_9d',
                        base__extraSmall: 'TableRendererVehicleInfo_base__extraSmall_7b',
                        vehicleImage: 'TableRendererVehicleInfo_vehicleImage_3c',
                        vehicleImage__small: 'TableRendererVehicleInfo_vehicleImage__small_b6',
                        vehicleImage__extraSmall: 'TableRendererVehicleInfo_vehicleImage__extraSmall_25',
                        vehicleImage__isKilled: 'TableRendererVehicleInfo_vehicleImage__isKilled_dd',
                    },
                    Ar = R.images.gui.maps.icons.vehicle,
                    fr = (0, n.memo)(
                        ({
                            vehicleName: e,
                            vehicleLevel: t,
                            vehicleType: a,
                            localizedVehicleName: u,
                            user: s,
                            isPersonal: i = !1,
                            isSameSquad: l = !1,
                        }) => {
                            const o = s.isKilled,
                                c = Ae(['vehicleImage', 'base'], vr),
                                _ = z()(c.base),
                                m = z()(c.vehicleImage, o && vr.vehicleImage__isKilled),
                                d = (0, n.useMemo)(() => {
                                    const t = Ar.$dyn(
                                        (function (e) {
                                            return e.replace(':', '_').replace('-', '_');
                                        })(e),
                                    );
                                    return { backgroundImage: `url(${t})` };
                                }, [e]);
                            return r().createElement(
                                'div',
                                { className: _ },
                                r().createElement('div', { className: m, style: d }),
                                r().createElement(dn, {
                                    vehicleLevel: t,
                                    vehicleType: a,
                                    localizedVehicleName: u,
                                    user: s,
                                    isPersonal: i,
                                    isSameSquad: l,
                                }),
                            );
                        },
                    ),
                    Dr = (0, n.memo)(({ squadIdx: e, currentSquadIdx: t }) => {
                        const a = z()(
                            'TableRendererSquad_base_cc',
                            t === e && 'TableRendererSquad_base__highlighted_b9',
                        );
                        return r().createElement('div', { className: a }, e);
                    }),
                    Cr = {
                        base: 'ActiveGlow_base_65',
                        base__active: 'ActiveGlow_base__active_df',
                        activeGlow: 'ActiveGlow_activeGlow_c3',
                        activeGlow__left: 'ActiveGlow_activeGlow__left_3c',
                        activeGlow__right: 'ActiveGlow_activeGlow__right_04',
                    };
                let Fr;
                !(function (e) {
                    (e.RIGHT = 'right'), (e.LEFT = 'left');
                })(Fr || (Fr = {}));
                const Br = (0, n.memo)(({ position: e = Fr.LEFT, isActive: t = !1 }) => {
                    const a = z()(Cr.activeGlow, Cr[`activeGlow__${e}`]),
                        n = z()(Cr.base, t && Cr.base__active);
                    return r().createElement('div', { className: n }, r().createElement('div', { className: a }));
                });
                function wr() {
                    return (
                        (wr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        wr.apply(this, arguments)
                    );
                }
                const yr = r().memo(
                        ({
                            isSelected: e,
                            onSelect: t,
                            currentSquadIdx: a,
                            alias: u,
                            player: s,
                            isFirst: i = !1,
                            teamRole: l,
                        }) => {
                            const o = s.idx,
                                c = s.dbID,
                                _ = s.isPersonal,
                                m = s.isSameSquad,
                                d = s.vehicleCD,
                                E = s.details.achievements,
                                p = s.user,
                                b = p.userName,
                                h = p.isTeamKiller,
                                g = p.clanAbbrev,
                                v = p.isKilled,
                                A = (0, n.useCallback)(() => {
                                    pe.playYes(), t(u, o, c, b);
                                }, [u, t, o, c, b]),
                                f = (0, n.useMemo)(
                                    () => ({ vehicleCD: d, dbID: c, userName: b, clanAbbrev: g }),
                                    [d, c, b, g],
                                ),
                                D = Ae(['cell', 'name'], ir),
                                C = (0, n.useCallback)(() => pe.playHighlight(), []),
                                F = z()(
                                    ir.bodyRow,
                                    e && ir.bodyRow__isActive,
                                    i && ir.bodyRow__isFirst,
                                    v && ir.bodyRow__isKilled,
                                ),
                                B = on({ isPersonal: _, isSameSquad: m, isKilled: v }),
                                w = (0, n.useMemo)(() => ({ color: B }), [B]),
                                y = z()(D.cell, ir.cell__smallIcon, ir.cell__squad),
                                S = z()(D.cell, ir.cell__name),
                                T = z()(D.cell, ir.cell__icon),
                                R = z()(D.cell, ir.cell__vehicle),
                                x = z()(D.cell, ir.cell__smallIcon, ir.cell__medal),
                                N = z()(T, ir.cell__kills),
                                L = z()(T, ir.cell__xp),
                                P = z()(D.name, ir.name);
                            return r().createElement(
                                pr,
                                { args: f },
                                r().createElement(
                                    'div',
                                    { className: F, style: w, onClick: A, onMouseEnter: C },
                                    l === Fe.Hunter &&
                                        r().createElement(
                                            'div',
                                            { className: y },
                                            s.squadIdx > 0 &&
                                                r().createElement(Dr, { squadIdx: s.squadIdx, currentSquadIdx: a }),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: S },
                                        r().createElement(
                                            'div',
                                            { className: P },
                                            r().createElement(
                                                xn,
                                                wr({}, p, {
                                                    isAnonymizerShown: _,
                                                    isTeamKiller: h,
                                                    isPersonal: _,
                                                    isSameSquad: m,
                                                    isKilled: v,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: T },
                                        r().createElement('div', { className: ir.value }, s.damageDealt),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: N },
                                        r().createElement('div', { className: ir.value }, s.kills),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: L },
                                        r().createElement('div', { className: ir.value }, s.earnedXp),
                                    ),
                                    r().createElement('div', { className: R }, r().createElement(fr, s)),
                                    r().createElement(
                                        'div',
                                        { className: x },
                                        E.length > 0 && r().createElement(gr, s),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: ir.glow },
                                        r().createElement(Br, { position: u === br ? Fr.RIGHT : Fr.LEFT, isActive: e }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Sr = ({
                        players: e,
                        squadIndex: t = -1,
                        selectedPlayerIndex: a,
                        hasScroll: n,
                        teamRole: u,
                        alias: s,
                        onSelect: i,
                    }) => {
                        const l = e.map(({ value: e }, n) =>
                                r().createElement(yr, {
                                    key: e.idx,
                                    currentSquadIdx: t,
                                    player: e,
                                    isSelected: a === e.idx,
                                    alias: s,
                                    onSelect: i,
                                    isFirst: 0 === n,
                                    teamRole: u,
                                }),
                            ),
                            o = Ae(['body'], ir),
                            c = z()(o.body, n && ir.body__scroll);
                        return r().createElement(
                            'div',
                            { className: c },
                            n
                                ? r().createElement(
                                      Gn,
                                      null,
                                      r().createElement('div', { className: ir.bodyWrapper }, l),
                                  )
                                : l,
                        );
                    },
                    Tr = ['isHidden', 'hasScroll', 'alias', 'sortType', 'sortDirection', 'onSort'];
                function Rr() {
                    return (
                        (Rr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Rr.apply(this, arguments)
                    );
                }
                const xr = (e) => {
                        let t = e.isHidden,
                            a = e.hasScroll,
                            u = e.alias,
                            s = e.sortType,
                            i = e.sortDirection,
                            l = e.onSort,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Tr);
                        const c = (0, n.useContext)(Ei),
                            _ = u === br ? c.allies : c.enemies,
                            m = Ae(['base'], ir),
                            d = z()(m.base, a && ir.base__scroll, _ === Fe.Boss && ir.base__boss);
                        return r().createElement(
                            'div',
                            { className: t ? ir.hidden : '' },
                            r().createElement(
                                'div',
                                { className: d },
                                r().createElement(cr, {
                                    isAllies: u === br,
                                    sortType: s,
                                    sortDirection: i,
                                    onSort: l,
                                    teamRole: _,
                                }),
                                r().createElement(Sr, Rr({ alias: u, hasScroll: a, teamRole: _ }, o)),
                            ),
                        );
                    },
                    Nr = (e, t) => {
                        for (let a = 0; a < t.length; a++) if (t[a].value.user.userName === e) return t[a].value;
                    },
                    Lr = ({ value: e }, { value: t }) => un(e.user.userName, t.user.userName),
                    Pr = (e) => {
                        const t = ((e) => (t, a) => {
                            const n = t[e],
                                r = a[e];
                            return 'string' == typeof n && 'string' == typeof r
                                ? un(n, r)
                                : 'number' == typeof n && 'number' == typeof r
                                  ? n - r
                                  : 0;
                        })(e);
                        return ({ value: e }, { value: a }) => t(e, a);
                    },
                    kr = {
                        [Ce.DAMAGE_DEALT]: nn(rn(Pr('damageDealt'), Lr)),
                        [Ce.KILLS]: nn(rn(Pr('kills'), Lr)),
                        [Ce.EARNED_XP]: nn(rn(Pr('earnedXp'), Lr)),
                        [Ce.PLATOON]: nn(rn(Pr('squadIdx'), Lr)),
                        [Ce.VEHICLE]: nn(Pr('idx')),
                        [Ce.NAME]: nn(Lr),
                        [Ce.MEDAL]: nn(
                            rn(
                                ({ value: e }, { value: t }) =>
                                    e.details.achievements.length - t.details.achievements.length,
                                Lr,
                            ),
                        ),
                        [Ce.NONE]: nn(() => 0),
                    },
                    Ir = (e, t, a) => (e.sort(kr[t](a)), e),
                    Mr = {
                        base: 'TeamsResultTab_base_da',
                        base__small: 'TeamsResultTab_base__small_04',
                        base__extraSmall: 'TeamsResultTab_base__extraSmall_a0',
                        teams: 'TeamsResultTab_teams_80',
                        teams__small: 'TeamsResultTab_teams__small_d7',
                        teams__extraSmall: 'TeamsResultTab_teams__extraSmall_5f',
                        teams__scroll: 'TeamsResultTab_teams__scroll_70',
                        detailsWrapper: 'TeamsResultTab_detailsWrapper_76',
                    },
                    Or = tn('model.team', (e) => Object.assign({}, e))(
                        ({ allies: e, enemies: t, manageMainEscapeListener: a }) => {
                            const u = (0, n.useState)(an.DESCENDING),
                                s = u[0],
                                i = u[1],
                                l = (0, n.useState)(Ce.EARNED_XP),
                                o = l[0],
                                c = l[1],
                                _ = (0, n.useState)(''),
                                m = _[0],
                                d = _[1],
                                E = (0, n.useState)(-1),
                                p = E[0],
                                b = E[1],
                                h = (0, n.useMemo)(() => {
                                    const e = t.slice();
                                    return Ir(e, o, s);
                                }, [t, s, o]),
                                g = (0, n.useMemo)(() => {
                                    const t = e.slice();
                                    return Ir(t, o, s);
                                }, [e, s, o]),
                                v = (0, n.useCallback)(
                                    (e, t) => {
                                        const a = t === p;
                                        d(a ? '' : e), b(a ? -1 : t);
                                    },
                                    [p],
                                ),
                                A = (0, n.useCallback)(() => {
                                    pe.playClick(), v('', -1);
                                }, [v]),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        e === o ? i(-1 * s) : (c(e), i(an.DESCENDING));
                                    },
                                    [s, o],
                                ),
                                D = g.length > 15 || h.length > 15,
                                C = m === br,
                                F = (0, n.useMemo)(() => {
                                    if (!m) return null;
                                    const n = ((C ? g : h).find(({ value: { idx: e } }) => e === p) || {}).value;
                                    if (!n) return null;
                                    const u = (function ({ allies: e, enemies: t, username: a }) {
                                        return Nr(a, t) || Nr(a, e);
                                    })({ enemies: t, allies: e, username: n.details.killer.userName });
                                    return r().createElement(
                                        'div',
                                        { className: Mr.detailsWrapper },
                                        r().createElement(rr, {
                                            onClose: A,
                                            manageMainEscapeListener: a,
                                            player: n,
                                            killerPlayer: u,
                                        }),
                                    );
                                }, [e, t, m, C, g, h, A, a, p]),
                                B = (0, n.useMemo)(() => {
                                    const e = g.find(({ value: e }) => e.isPersonal);
                                    return e && e.value ? e.value.squadIdx : void 0;
                                }, [g]),
                                w = Ae(['base', 'teams'], Mr),
                                y = z()(w.teams, D && Mr.teams__scroll);
                            return r().createElement(
                                'div',
                                { className: w.base },
                                r().createElement(
                                    'div',
                                    { className: y },
                                    r().createElement(xr, {
                                        alias: br,
                                        players: g,
                                        isHidden: Boolean(m) && !C,
                                        squadIndex: B,
                                        selectedPlayerIndex: C ? p : -1,
                                        onSelect: v,
                                        onSort: f,
                                        sortType: o,
                                        sortDirection: s,
                                        hasScroll: g.length > 15,
                                    }),
                                    F,
                                    r().createElement(xr, {
                                        alias: 'enemies',
                                        players: h,
                                        isHidden: Boolean(m) && C,
                                        selectedPlayerIndex: C ? -1 : p,
                                        onSelect: v,
                                        onSort: f,
                                        sortType: o,
                                        sortDirection: s,
                                        hasScroll: h.length > 15,
                                    }),
                                ),
                            );
                        },
                    ),
                    Hr = {
                        base: 'PremiumBenefitsSection_base_82',
                        content: 'PremiumBenefitsSection_content_e8',
                        baseGradient: 'PremiumBenefitsSection_baseGradient_dc',
                        baseBorder: 'PremiumBenefitsSection_baseBorder_e6',
                        totals: 'PremiumBenefitsSection_totals_aa',
                        totals__extraSmall: 'PremiumBenefitsSection_totals__extraSmall_af',
                        count: 'PremiumBenefitsSection_count_8d',
                        button: 'PremiumBenefitsSection_button_ca',
                        button__extraSmall: 'PremiumBenefitsSection_button__extraSmall_49',
                        currency: 'PremiumBenefitsSection_currency_4a',
                        premiumIcon: 'PremiumBenefitsSection_premiumIcon_a0',
                        premiumIcon__extraSmall: 'PremiumBenefitsSection_premiumIcon__extraSmall_b6',
                        contentText: 'PremiumBenefitsSection_contentText_77',
                        premiumLabelText: 'PremiumBenefitsSection_premiumLabelText_62',
                        premiumLabelText__extraSmall: 'PremiumBenefitsSection_premiumLabelText__extraSmall_0f',
                        currenciesWrapper: 'PremiumBenefitsSection_currenciesWrapper_bc',
                    },
                    Wr = () => {
                        const e = T('model.details.premiumBonuses'),
                            t = e.currencies,
                            a = e.onBuyPremium,
                            u = R.strings.postbattle_screen.detailsStats.buyPremiumBtn(),
                            s = R.strings.postbattle_screen.detailsStats.buyPremiumLabel(),
                            i = R.strings.postbattle_screen.detailsStats.premiumCurrency(),
                            l = R.views.white_tiger.lobby.postbattle.tooltips.PremiumPlus('resId'),
                            o = (0, n.useCallback)(() => {
                                a();
                            }, [a]),
                            c = Ae(['totals', 'premiumIcon', 'button', 'premiumLabelText'], Hr);
                        return r().createElement(
                            'div',
                            { className: Hr.base },
                            r().createElement('div', { className: Hr.baseBorder }),
                            r().createElement('div', { className: Hr.baseGradient }),
                            r().createElement(
                                'div',
                                { className: Hr.content },
                                r().createElement(
                                    'div',
                                    { className: c.totals },
                                    r().createElement(
                                        He,
                                        { contentId: l },
                                        r().createElement('div', { className: c.premiumIcon }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Hr.contentText },
                                        r().createElement(
                                            gn,
                                            { body: i },
                                            r().createElement('p', { className: c.premiumLabelText }, s),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: Hr.currenciesWrapper },
                                            t.map(({ value: e }, t) =>
                                                r().createElement(
                                                    gn,
                                                    { key: t, body: i },
                                                    r().createElement(
                                                        'div',
                                                        { className: Hr.count },
                                                        r().createElement('span', null, '+'),
                                                        r().createElement(ft, {
                                                            type: e.type,
                                                            size: vt.BIG,
                                                            amount: e.amount,
                                                            className: Hr.currency,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    He,
                                    { contentId: l },
                                    r().createElement('button', { className: c.button, onClick: o }, u),
                                ),
                            ),
                        );
                    },
                    $r = 'subgroupTotal',
                    Ur = 'total';
                let Xr, Gr, Yr;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Xr || (Xr = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Gr || (Gr = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(Yr || (Yr = {}));
                const jr = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    qr = ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: a,
                        type: n,
                        isEnough: u,
                        value: s,
                        discountValue: i,
                        showPlus: l,
                        stockBackgroundName: o = Yr.Red,
                    }) => {
                        const c = z()(jr.value, jr[`value__${n}`], !u && jr.value__notEnough),
                            _ = z()(jr.icon, jr[`icon__${n}-${a}`]),
                            m = z()(jr.stock, i && jr.stock__indent, t && jr.stock__interactive),
                            d = l && s > 0 && '+',
                            E = z()(jr.base, jr[`base__${a}`]);
                        return r().createElement(
                            'span',
                            { className: E },
                            r().createElement(
                                'span',
                                { className: c },
                                d,
                                r().createElement(bt, { value: s, format: n === Gr.gold ? 'gold' : 'integral' }),
                            ),
                            r().createElement('span', { className: _ }),
                            e &&
                                r().createElement(
                                    'span',
                                    { className: m },
                                    r().createElement('span', {
                                        className: jr.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${o})` },
                                    }),
                                    Boolean(i) && i,
                                ),
                        );
                    };
                qr.defaultProps = { isEnough: !0 };
                const zr = r().memo(qr),
                    Kr = {
                        base: 'ReportLine_base_d9',
                        base__separated: 'ReportLine_base__separated_c7',
                        mediaExtraSmall: 'ReportLine_mediaExtraSmall_ec',
                        base__subtotal: 'ReportLine_base__subtotal_b3',
                        base__total: 'ReportLine_base__total_d6',
                        base__tooltip: 'ReportLine_base__tooltip_c0',
                        separator: 'ReportLine_separator_b5',
                        label: 'ReportLine_label_75',
                        label__zero: 'ReportLine_label__zero_01',
                        factor: 'ReportLine_factor_c5',
                        factorText: 'ReportLine_factorText_f5',
                        value: 'ReportLine_value_d5',
                        value__total: 'ReportLine_value__total_69',
                        value__zero: 'ReportLine_value__zero_48',
                        wrapper: 'ReportLine_wrapper_ca',
                        wrapper__double: 'ReportLine_wrapper__double_9d',
                    },
                    Vr = ({
                        isTotal: e,
                        isSubTotal: t,
                        isSeparated: a,
                        isTooltip: n,
                        isAdditionalInfo: u,
                        text: s,
                        factor: i,
                        currency: l,
                        additionalCurrency: o,
                        showCurrencyPlus: c,
                        mediaSize: _,
                        className: m,
                    }) => {
                        const d = Ae(['base'], Kr),
                            E = z()(
                                d.base,
                                a && Kr.base__separated,
                                t && Kr.base__subtotal,
                                e && Kr.base__total,
                                n && Kr.base__tooltip,
                                _ && Kr[_],
                                m,
                            ),
                            p = z()(Kr.label, u && Kr.label__zero),
                            b = Xr.small,
                            h = o ? [o, l] : [l];
                        return r().createElement(
                            'div',
                            { className: E },
                            r().createElement(
                                'div',
                                { className: p },
                                s,
                                i &&
                                    r().createElement(
                                        'span',
                                        { className: Kr.factor },
                                        '(',
                                        r().createElement('span', { className: Kr.factorText }, i),
                                        ')',
                                    ),
                            ),
                            r().createElement('div', { className: Kr.separator }),
                            h.map((e, t) => {
                                const a = t > 0,
                                    n = a && !e,
                                    s = z()(Kr.wrapper, a && Kr.wrapper__double),
                                    i = z()(Kr.value, ((e && 0 === e.amount) || u) && Kr.value__zero);
                                if (n)
                                    return r().createElement(
                                        'div',
                                        { key: t, className: s },
                                        r().createElement('div', { className: Kr.separator }),
                                    );
                                if (e) {
                                    const n = e.amount >= 0,
                                        u = `${e.type}${e.amount}${t}`;
                                    return r().createElement(
                                        'div',
                                        { key: u, className: s },
                                        a && r().createElement('div', { className: Kr.separator }),
                                        r().createElement(
                                            'div',
                                            { className: i },
                                            r().createElement(zr, {
                                                key: u,
                                                isEnough: n,
                                                size: b,
                                                showPlus: c,
                                                type: ((l = e.type), ((e) => e in Gr)(l) ? l : Gr.credits),
                                                value: e.amount,
                                            }),
                                        ),
                                    );
                                }
                                var l;
                            }),
                        );
                    },
                    Qr = ({
                        stringID: e,
                        tooltipStringID: t,
                        tags: a,
                        currencies: u,
                        groupType: s,
                        isSeparated: i,
                        className: l,
                    }) => {
                        const o = ((e) => {
                                switch (e) {
                                    case 'creditsGroup':
                                    default:
                                        return ['credits'];
                                    case 'crystalsGroup':
                                        return ['crystal'];
                                    case 'xpGroup':
                                        return ['freeXp', 'xp'];
                                }
                            })(s),
                            c = o[0],
                            _ = o[1];
                        let m = null,
                            d = null;
                        u.forEach(({ value: e }) => {
                            e.type === c && (m = e), e.type === _ && (d = e);
                        });
                        const E = a.map((e) => e.value),
                            p = E.includes(Ur),
                            b = E.includes($r),
                            h = !p && !b && !E.includes('earned'),
                            g = E.includes('earned_record')
                                ? R.strings.postbattle_screen.detailsStats.factors.record()
                                : '',
                            v = (0, n.useContext)(X).extraSmall ? 'mediaExtraSmall' : '',
                            A = Boolean(t !== R.invalid()),
                            f = (0, n.useMemo)(() => ({ isEnabled: A, header: e, body: t }), [A, e, t]);
                        return r().createElement(
                            gn,
                            f,
                            r().createElement(
                                'div',
                                { className: l },
                                r().createElement(Vr, {
                                    text: e,
                                    factor: g,
                                    isTotal: p,
                                    isSubTotal: b,
                                    isSeparated: i,
                                    showCurrencyPlus: h,
                                    currency: m,
                                    additionalCurrency: d,
                                    mediaSize: v,
                                    className: l,
                                }),
                            ),
                        );
                    },
                    Zr = {
                        base: 'ReportSubGroup_base_64',
                        base__extraSmall: 'ReportSubGroup_base__extraSmall_c5',
                        rows: 'ReportSubGroup_rows_b1',
                        message: 'ReportSubGroup_message_e4',
                    };
                function Jr() {
                    return (
                        (Jr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Jr.apply(this, arguments)
                    );
                }
                const eu = tn('model.details', ({ arenaType: e }) => ({ arenaType: e }))(({
                    records: e,
                    type: t,
                    arenaType: a,
                    groupType: n,
                }) => {
                    const u = Ae(['base'], Zr),
                        s = [];
                    let i = null,
                        l = e.length ? e[0].value.blockIdx : 0;
                    e.forEach((e) => {
                        const t = e.value;
                        if (t.tags.map((e) => e.value).includes($r))
                            return void (i = r().createElement(Qr, Jr({ groupType: n }, t)));
                        const a = t.blockIdx > l;
                        a && (l = t.blockIdx),
                            s.push(r().createElement(Qr, Jr({ key: t.stringID, isSeparated: a, groupType: n }, t)));
                    });
                    const o =
                        2 === a
                            ? R.strings.postbattle_screen.detailsStats.noRecords.trainingBattle()
                            : R.strings.postbattle_screen.detailsStats.noRecords.$dyn(t);
                    return r().createElement(
                        'div',
                        { className: u.base },
                        s.length
                            ? r().createElement('div', { className: Zr.rows }, s)
                            : r().createElement('div', { className: Zr.message }, o),
                        i,
                    );
                });
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const au = ({ groups: e, groupType: t }) => {
                        const a = e.map((e, a) => r().createElement(eu, tu({ key: a, groupType: t }, e)));
                        return r().createElement('div', { className: 'ReportGroup_base_c9' }, a);
                    },
                    nu = {
                        title: 'ReportSection_title_f5',
                        subTitle: 'ReportSection_subTitle_e7',
                        title__extraSmall: 'ReportSection_title__extraSmall_2b',
                        totalSeparator: 'ReportSection_totalSeparator_88',
                        afterTotalSeparator: 'ReportSection_afterTotalSeparator_30',
                        afterTotalSeparator__extraSmall: 'ReportSection_afterTotalSeparator__extraSmall_ed',
                    };
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const uu = ({ records: e, type: t }) => {
                        const a = Ae(['title', 'afterTotalSeparator'], nu),
                            n = R.strings.postbattle_screen.detailsStats.sectionTitle.$dyn(t);
                        let u,
                            s = [];
                        const i = [];
                        return (
                            e.forEach(({ value: n }, l) => {
                                const o = 'record' === n.type;
                                if (!o) {
                                    const e = n;
                                    s.push(e);
                                }
                                if (
                                    ((o || l === e.length - 1) &&
                                        s.length &&
                                        (i.push(r().createElement(au, { groupType: t, groups: s, key: i.length })),
                                        (s = [])),
                                    o)
                                ) {
                                    const e = n;
                                    e.tags.some((e) => e.value === Ur) &&
                                        (i.push(
                                            r().createElement('div', { className: nu.totalSeparator, key: i.length }),
                                        ),
                                        (u = a.afterTotalSeparator)),
                                        i.push(
                                            r().createElement(
                                                Qr,
                                                ru({}, e, { groupType: t, className: u, key: i.length }),
                                            ),
                                        );
                                }
                            }),
                            r().createElement(
                                r().Fragment,
                                null,
                                i.length > 0 && r().createElement('div', { className: a.title }, n),
                                i,
                            )
                        );
                    },
                    su = {
                        base: 'FinancialReportTab_base_b4',
                        base__withoutFooter: 'FinancialReportTab_base__withoutFooter_d3',
                        base__extraSmall: 'FinancialReportTab_base__extraSmall_ba',
                        report: 'FinancialReportTab_report_2c',
                        report__extraSmall: 'FinancialReportTab_report__extraSmall_be',
                        contentContainer: 'FinancialReportTab_contentContainer_04',
                        section: 'FinancialReportTab_section_40',
                        benefits: 'FinancialReportTab_benefits_46',
                        scrollLip: 'FinancialReportTab_scrollLip_bc',
                        scrollLip__extraSmall: 'FinancialReportTab_scrollLip__extraSmall_36',
                        scrollLip__top: 'FinancialReportTab_scrollLip__top_21',
                        scrollLip__bottom: 'FinancialReportTab_scrollLip__bottom_76',
                        scrollLip__hide: 'FinancialReportTab_scrollLip__hide_cb',
                        footer: 'FinancialReportTab_footer_be',
                    },
                    iu = tn('model.details', (e) => ({ groups: e.groups, premiumBonuses: e.premiumBonuses }))(
                        ({ groups: e, premiumBonuses: t }) => {
                            const a = Ae(['base', 'report', 'scrollLip'], su),
                                u = T('model').accountType,
                                s = (0, n.useState)(!1),
                                i = s[0],
                                l = s[1],
                                o = (0, n.useState)(null),
                                c = o[0],
                                _ = o[1],
                                m = (0, n.useCallback)((e) => _(e.reach), []),
                                d = (0, n.useCallback)((e, t, a, n) => {
                                    l(t), _(n);
                                }, []),
                                E = i && 'start' !== c,
                                p = i && 'end' !== c,
                                b = z()(a.scrollLip, su.scrollLip__top, !E && su.scrollLip__hide),
                                h = z()(a.scrollLip, su.scrollLip__bottom, !p && su.scrollLip__hide),
                                g = 1 === u || 2 === u,
                                v = t.currencies.some(({ value: e }) => e.amount >= 0) && !g,
                                A = z()(a.base, { [su.base__withoutFooter]: !v });
                            return r().createElement(
                                'div',
                                { className: A },
                                r().createElement(
                                    'div',
                                    { className: su.contentContainer },
                                    r().createElement(
                                        Gn,
                                        { onVerticalScroll: m, onScrollbarUpdate: d },
                                        r().createElement(
                                            'div',
                                            { className: a.report },
                                            e.map(({ value: e }) =>
                                                r().createElement(
                                                    'div',
                                                    { key: e.type, className: su.section },
                                                    r().createElement(uu, e),
                                                ),
                                            ),
                                        ),
                                    ),
                                    r().createElement('div', { className: b }),
                                    r().createElement('div', { className: h }),
                                ),
                                v && r().createElement('div', { className: su.footer }, r().createElement(Wr, null)),
                            );
                        },
                    );
                let lu, ou, cu, _u, mu;
                !(function (e) {
                    (e[(e.DailyQuests = 0)] = 'DailyQuests'), (e[(e.PremiumQuests = 1)] = 'PremiumQuests');
                })(lu || (lu = {})),
                    lu.DailyQuests,
                    lu.PremiumQuests,
                    lu.DailyQuests,
                    lu.PremiumQuests,
                    (function (e) {
                        (e.Completed = 'done'), (e.Locked = 'notAvailable'), (e.Active = '');
                    })(ou || (ou = {})),
                    (function (e) {
                        (e.Big = 'big'), (e.Small = 'small');
                    })(cu || (cu = {})),
                    (function (e) {
                        (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(_u || (_u = {})),
                    (function (e) {
                        (e.HUGE = 'huge'), (e.BIG = 'big');
                    })(mu || (mu = {}));
                var du = a(4781);
                let Eu, pu, bu, hu, gu, vu, Au;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Currency = 'currency'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.SelectableBonus = 'selectableBonus'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.WtStamp = 'stamp'),
                        (e.WtHunter = 'wt_hunter'),
                        (e.WtHunterCollection = 'hunter_collection'),
                        (e.WtTicket = 'wtevent_ticket'),
                        (e.WtMainPrizeDiscount = 'main_prize_discount');
                })(Eu || (Eu = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement');
                    })(pu || (pu = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S48x48 = 's48x48');
                    })(bu || (bu = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(hu || (hu = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(gu || (gu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(vu || (vu = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Au || (Au = {}));
                const fu = [
                        Eu.Items,
                        Eu.Equipment,
                        Eu.Xp,
                        Eu.XpFactor,
                        Eu.Blueprints,
                        Eu.BlueprintsAny,
                        Eu.Goodies,
                        Eu.Berths,
                        Eu.Slots,
                        Eu.Tokens,
                        Eu.CrewSkins,
                        Eu.CrewBooks,
                        Eu.Customizations,
                        Eu.CreditsFactor,
                        Eu.TankmenXp,
                        Eu.TankmenXpFactor,
                        Eu.FreeXpFactor,
                        Eu.BattleToken,
                        Eu.PremiumUniversal,
                        Eu.NaturalCover,
                        Eu.BpCoin,
                        Eu.BattlePassSelectToken,
                        Eu.BattlaPassFinalAchievement,
                        Eu.BattleBadge,
                        Eu.BonusX5,
                        Eu.CrewBonusX3,
                        Eu.NewYearFillers,
                        Eu.NewYearInvoice,
                        Eu.EpicSelectToken,
                        Eu.Comp7TokenWeeklyReward,
                        Eu.Comp7TokenCouponReward,
                        Eu.BattleBoosterGift,
                        Eu.CosmicLootboxCommon,
                        Eu.CosmicLootboxSilver,
                        Eu.SelectableBonus,
                        Eu.WtStamp,
                        Eu.WtTicket,
                        Eu.WtMainPrizeDiscount,
                        Eu.WtHunter,
                        Eu.WtHunterCollection,
                    ],
                    Du = [Eu.Gold, Eu.Credits, Eu.Crystal, Eu.FreeXp],
                    Cu = [Eu.BattlePassPoints],
                    Fu = [Eu.PremiumPlus, Eu.Premium],
                    Bu = ['engravings', 'backgrounds'],
                    wu = ['engraving', 'background'],
                    yu = (e, t = bu.Small) => {
                        const a = e.name,
                            n = e.type,
                            r = e.value,
                            u = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case bu.S600x450:
                                        return 'c_600x450';
                                    case bu.S400x300:
                                        return 'c_400x300';
                                    case bu.S296x222:
                                        return 'c_296x222';
                                    case bu.S232x174:
                                        return 'c_232x174';
                                    case bu.Big:
                                        return 'c_80x80';
                                    case bu.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${u}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case bu.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case bu.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${u}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const n = Bu[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            u = r.$dyn(a);
                                        return u ? `${u}` : `${r.$dyn(wu[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, u);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${u}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${u}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${u}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    Su = (e, t, a) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            a,
                        );
                    };
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Ru = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const n = r().createElement('div', { className: a }, e);
                        if (t.header || t.body) return r().createElement(gn, t, n);
                        const u = t.contentId,
                            s = t.args,
                            i = null == s ? void 0 : s.contentId;
                        return u || i
                            ? r().createElement(He, Tu({}, t, { contentId: u || i }), n)
                            : r().createElement(Ue, t, n);
                    },
                    xu = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        timer: 'Reward_timer_d3',
                    },
                    Nu = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: n = bu.Big,
                        special: u,
                        value: s,
                        valueType: i,
                        style: l,
                        className: o,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case gu.BATTLE_BOOSTER:
                                    case gu.BATTLE_BOOSTER_REPLACE:
                                        return vu.BATTLE_BOOSTER;
                                }
                            })(u),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case gu.BATTLE_BOOSTER:
                                        return Au.BATTLE_BOOSTER;
                                    case gu.BATTLE_BOOSTER_REPLACE:
                                        return Au.BATTLE_BOOSTER_REPLACE;
                                    case gu.BUILT_IN_EQUIPMENT:
                                        return Au.BUILT_IN_EQUIPMENT;
                                    case gu.EQUIPMENT_PLUS:
                                        return Au.EQUIPMENT_PLUS;
                                    case gu.EQUIPMENT_TROPHY_BASIC:
                                        return Au.EQUIPMENT_TROPHY_BASIC;
                                    case gu.EQUIPMENT_TROPHY_UPGRADED:
                                        return Au.EQUIPMENT_TROPHY_UPGRADED;
                                    case gu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Au.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case gu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Au.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case gu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Au.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case gu.PROGRESSION_STYLE_UPGRADED_1:
                                        return Au.PROGRESSION_STYLE_UPGRADED_1;
                                    case gu.PROGRESSION_STYLE_UPGRADED_2:
                                        return Au.PROGRESSION_STYLE_UPGRADED_2;
                                    case gu.PROGRESSION_STYLE_UPGRADED_3:
                                        return Au.PROGRESSION_STYLE_UPGRADED_3;
                                    case gu.PROGRESSION_STYLE_UPGRADED_4:
                                        return Au.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(u),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case hu.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case hu.CURRENCY:
                                    case hu.NUMBER:
                                        return r().createElement(bt, { format: 'integral', value: Number(e) });
                                    case hu.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, i);
                        return r().createElement(
                            'div',
                            { className: z()(xu.base, xu[`base__${n}`], o), style: l },
                            r().createElement(
                                Ru,
                                { tooltipArgs: _, className: xu.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: z()(xu.image, null == c ? void 0 : c.image) },
                                        d &&
                                            r().createElement('div', {
                                                className: z()(xu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            r().createElement('div', {
                                                className: z()(xu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            r().createElement('div', {
                                                className: z()(xu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: z()(
                                                    xu.info,
                                                    xu[`info__${e}`],
                                                    i === hu.MULTI && xu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            p,
                                        ),
                                ),
                            ),
                            a &&
                                r().createElement(
                                    Ru,
                                    { tooltipArgs: m },
                                    r().createElement('div', {
                                        className: z()(xu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                const Pu = r().memo(
                        ({
                            data: e,
                            size: t = bu.Big,
                            isVertical: a = !1,
                            count: u,
                            classMix: s,
                            rewardItemClassMix: i,
                            boxRewardTooltip: l,
                            boxRewardValue: o,
                        }) => {
                            const c = (0, n.useMemo)(
                                    () =>
                                        u && u < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [u, e.length, t],
                                ),
                                _ =
                                    o ||
                                    m(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (u || 0),
                                    }),
                                d = z()('Rewards_base_26', a && 'Rewards_base__vertical_9f', s),
                                E = z()('Rewards_reward_7b', a && 'Rewards_reward__vertical_c6', i);
                            return r().createElement(
                                'div',
                                { className: d },
                                c
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          e
                                              .slice(0, u)
                                              .map((e, a) =>
                                                  r().createElement(
                                                      'div',
                                                      { key: a, className: E },
                                                      r().createElement(Nu, Lu({ size: t }, e)),
                                                  ),
                                              ),
                                          r().createElement(
                                              'div',
                                              { className: E },
                                              r().createElement(Nu, {
                                                  name: 'more',
                                                  image: c,
                                                  size: t,
                                                  value: _,
                                                  tooltipArgs: l,
                                              }),
                                          ),
                                      )
                                    : e.map((e, a) =>
                                          r().createElement(
                                              'div',
                                              { key: a, className: E },
                                              r().createElement(Nu, Lu({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    ku =
                        (R.images.gui.maps.icons.missions.icons,
                        {
                            base: 'BattleConditions_base_aa',
                            conditionBlockColumn: 'BattleConditions_conditionBlockColumn_14',
                            conditionBlockRow: 'BattleConditions_conditionBlockRow_69',
                            condition: 'BattleConditions_condition_c8',
                            base__reverse: 'BattleConditions_base__reverse_ac',
                            operator: 'BattleConditions_operator_2a',
                            base__big: 'BattleConditions_base__big_5f',
                            base__huge: 'BattleConditions_base__huge_90',
                            base__bolded: 'BattleConditions_base__bolded_ce',
                            title: 'BattleConditions_title_6e',
                            description: 'BattleConditions_description_82',
                            base__medium: 'BattleConditions_base__medium_f4',
                            progress: 'BattleConditions_progress_42',
                            progress__completed: 'BattleConditions_progress__completed_47',
                            progressCurrent: 'BattleConditions_progressCurrent_f7',
                            progressSeparator: 'BattleConditions_progressSeparator_d2',
                            progressTotal: 'BattleConditions_progressTotal_bb',
                            progressBarWrapper: 'BattleConditions_progressBarWrapper_4c',
                        }),
                    Iu = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Mu, Ou;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(Mu || (Mu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Ou || (Ou = {}));
                const Hu = ({ size: e = Mu.Default }) =>
                        r().createElement('div', { className: z()(Iu.background, Iu[`background__${e}`]) }),
                    Wu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    $u = ({ size: e }) => {
                        const t = z()(Wu.base, Wu[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    Uu = {
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
                    Xu = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: u, withoutBounce: s }) => {
                            const i = z()(
                                    Uu.base,
                                    Uu[`base__${e}`],
                                    a && Uu.base__disabled,
                                    u && Uu.base__finished,
                                    s && Uu.base__withoutBounce,
                                ),
                                l = !a && !u;
                            return r().createElement(
                                'div',
                                { className: i, style: n, ref: t },
                                r().createElement('div', { className: Uu.pattern }),
                                r().createElement('div', { className: Uu.gradient }),
                                l && r().createElement($u, { size: e }),
                            );
                        },
                    ),
                    Gu = ({ size: e, value: t, lineRef: a, disabled: u, onComplete: s }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                l && s && s();
                            }, [l, s]),
                            r().createElement(Xu, { size: e, disabled: u, baseStyles: i, isComplete: l, lineRef: a })
                        );
                    },
                    Yu = (e, t) => {
                        let a;
                        const n = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            'function' == typeof a && a(), clearTimeout(n);
                        };
                    };
                let ju, qu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(ju || (ju = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(qu || (qu = {}));
                const zu = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: u,
                            size: s,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: o,
                        }) => {
                            const c = i < u,
                                _ = (0, n.useState)(qu.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === qu.In,
                                p = m === qu.End,
                                b = m === qu.Idle,
                                h = (0, n.useCallback)(
                                    (e) => {
                                        d(e), o && o(e);
                                    },
                                    [o],
                                );
                            (0, n.useEffect)(() => {
                                if (b && !a)
                                    return Yu(() => {
                                        h(qu.In);
                                    }, t);
                            }, [h, a, b, t]),
                                (0, n.useEffect)(() => {
                                    if (E)
                                        return Yu(() => {
                                            l && l(), h(qu.End);
                                        }, e + t);
                                }, [h, E, l, t, e]);
                            const g = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                v = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                A = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(u - i)}%`, left: `${c ? i : u}%` }),
                                    [u, c, i],
                                );
                            return p
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: A },
                                      r().createElement(
                                          'div',
                                          { style: b ? g : v, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement($u, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    Ku = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: u,
                            disabled: s,
                            isComplete: i,
                            animationSettings: l,
                            onChangeAnimationState: o,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(Xu, {
                                    size: t,
                                    lineRef: u,
                                    disabled: s,
                                    isComplete: i,
                                    baseStyles: _,
                                }),
                                a >= 0 &&
                                    r().createElement(zu, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: o,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Vu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Qu = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Zu = (e) => ({ transitionDuration: `${e}ms` }),
                    Ju = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: u,
                            size: s,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: o,
                            className: c,
                        }) => {
                            const _ = i < u,
                                m = (0, n.useState)(ju.Idle),
                                d = m[0],
                                E = m[1],
                                p = d === ju.End,
                                b = d === ju.Idle,
                                h = d === ju.Grow,
                                g = d === ju.Shrink,
                                v = (0, n.useCallback)(
                                    (e) => {
                                        E(e), o && o(e);
                                    },
                                    [o],
                                ),
                                A = (0, n.useCallback)(
                                    (e, t) =>
                                        Yu(() => {
                                            v(e);
                                        }, t),
                                    [v],
                                );
                            (0, n.useEffect)(() => {
                                if (!a)
                                    return b
                                        ? A(ju.Grow, t)
                                        : h
                                          ? A(ju.Shrink, e)
                                          : g
                                            ? A(ju.End, e)
                                            : void (p && l && l());
                            }, [A, a, p, h, b, g, l, t, e]);
                            const f = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Zu(e), Vu(_)), [_, e]),
                                D = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Zu(e), Vu(_)), [_, e]),
                                C = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Qu(_, u), Zu(e)), [u, _, e]),
                                F = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - u)}%` }, Qu(_, u), Zu(e)),
                                    [u, _, i, e],
                                );
                            if (p) return null;
                            const B = z()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                _ && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: b ? C : F, className: B },
                                r().createElement(
                                    'div',
                                    { style: g ? D : f, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement($u, { size: s }),
                                ),
                            );
                        },
                    ),
                    es = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: u,
                            disabled: s,
                            isComplete: i,
                            animationSettings: l,
                            onEndAnimation: o,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < a,
                                m = (0, n.useState)(!1),
                                d = m[0],
                                E = m[1],
                                p = (0, n.useCallback)(
                                    (e) => {
                                        e === ju.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                b = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(Xu, {
                                    size: t,
                                    lineRef: u,
                                    disabled: s,
                                    isComplete: i,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? h : b,
                                }),
                                a >= 0 &&
                                    r().createElement(Ju, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: l.freezed,
                                        onEndAnimation: o,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    ts = ['onComplete', 'onEndAnimation'];
                function as() {
                    return (
                        (as =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        as.apply(this, arguments)
                    );
                }
                const ns = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, ts);
                        const s = (0, n.useState)(!1),
                            i = s[0],
                            l = s[1],
                            o = (0, n.useCallback)(() => {
                                const e = 100 === u.to;
                                e !== i && l(e), e && t && t(), a && a();
                            }, [i, t, a, u.to]);
                        switch (u.animationSettings.type) {
                            case Ou.Simple:
                                return r().createElement(Ku, as({}, u, { onEndAnimation: o, isComplete: i }));
                            case Ou.Growing:
                                return r().createElement(es, as({}, u, { onEndAnimation: o, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    rs = ['onEndAnimation'];
                function us() {
                    return (
                        (us =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        us.apply(this, arguments)
                    );
                }
                const ss = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                u = Object.keys(e);
                            for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, rs);
                    const u = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            (u.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof u.current.from ? u.current.from : a.from;
                    return (
                        (u.current.from = i),
                        r().createElement(ns, us({}, a, { onEndAnimation: s, key: `${i}-${a.to}`, from: i }))
                    );
                });
                function is() {
                    return (
                        (is =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        is.apply(this, arguments)
                    );
                }
                const ls = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: n,
                            deltaFrom: u,
                            animationSettings: s,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            onComplete: o,
                        }) => {
                            if (u === t)
                                return r().createElement(Gu, {
                                    key: `${u}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: n,
                                    onComplete: o,
                                });
                            const c = {
                                from: u,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: n,
                                animationSettings: s,
                                onComplete: o,
                                onEndAnimation: i,
                                onChangeAnimationState: l,
                            };
                            return s.withStack
                                ? r().createElement(ss, c)
                                : r().createElement(ns, is({ key: `${u}-${t}` }, c));
                        },
                    ),
                    os = (e) => ({
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
                    }),
                    cs = (e, t, a) => (a < e ? e : a > t ? t : a),
                    _s = (e, t, a) => ('number' == typeof a ? (cs(0, t, a) / t) * 100 : e),
                    ms = {
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
                    ds = {
                        freezed: !1,
                        withStack: !1,
                        type: Ou.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Es = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ms,
                            size: a = Mu.Default,
                            animationSettings: u = ds,
                            disabled: s = !1,
                            withoutBackground: i = !1,
                            value: l,
                            deltaFrom: o,
                            lineRef: c,
                            onChangeAnimationState: _,
                            onEndAnimation: m,
                            onComplete: d,
                        }) => {
                            const E = ((e, t, a) =>
                                (0, n.useMemo)(() => {
                                    const n = (cs(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: _s(n, t, a) };
                                }, [a, t, e]))(l, e, o);
                            return r().createElement(
                                'div',
                                { className: z()(Iu.base, Iu[`base__${a}`]), style: os(t) },
                                !i && r().createElement(Hu, { size: a }),
                                r().createElement(ls, {
                                    size: a,
                                    lineRef: c,
                                    disabled: s,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: u,
                                    onEndAnimation: m,
                                    onChangeAnimationState: _,
                                    onComplete: d,
                                }),
                            );
                        },
                    ),
                    ps = () =>
                        Object.assign({}, ds, {
                            line: { delay: 1e3, duration: 2e3 },
                            delta: { delay: 1e3, duration: 2e3 },
                        }),
                    bs = ({ conditionData: e, children: t, swapProgress: a, progressInfoStyles: n }) => {
                        const u = e.current,
                            s = e.earned,
                            i = e.total,
                            l = z()(ku.progress, { [ku.progress__completed]: u === i });
                        return r().createElement(
                            'div',
                            { className: ku.condition },
                            t,
                            i > 0 &&
                                (a
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(
                                              'div',
                                              { className: ku.progressBarWrapper },
                                              r().createElement(Es, {
                                                  size: Mu.Small,
                                                  value: u,
                                                  deltaFrom: u - s,
                                                  maxValue: i,
                                                  animationSettings: ps(),
                                              }),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: l, style: n },
                                              r().createElement('div', { className: ku.progressCurrent }, u),
                                              r().createElement('div', { className: ku.progressSeparator }, '/'),
                                              r().createElement('div', { className: ku.progressTotal }, i),
                                          ),
                                      )
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(
                                              'div',
                                              { className: l, style: n },
                                              r().createElement('div', { className: ku.progressCurrent }, u),
                                              r().createElement('div', { className: ku.progressSeparator }, '/'),
                                              r().createElement('div', { className: ku.progressTotal }, i),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: ku.progressBarWrapper },
                                              r().createElement(Es, {
                                                  size: Mu.Small,
                                                  value: u,
                                                  deltaFrom: u - s,
                                                  maxValue: i,
                                                  animationSettings: ps(),
                                              }),
                                          ),
                                      )),
                        );
                    },
                    hs = ({
                        conditions: e,
                        columns: t,
                        isUppercase: a,
                        align: u,
                        swapProgress: s,
                        textStyles: i,
                        progressInfoStyles: l,
                    }) => {
                        const o = (0, n.useMemo)(() => Object.assign({}, i, { textAlign: `${u}` }), [i, u]),
                            c = e.descrData || e.titleData;
                        return r().createElement(
                            'div',
                            { className: t ? ku.conditionBlockColumn : ku.conditionBlockRow },
                            r().createElement(
                                bs,
                                { conditionData: e, swapProgress: s, progressInfoStyles: l },
                                r().createElement(
                                    'div',
                                    { className: ku.description, style: o },
                                    ((e, t = !1) => (t ? e.toUpperCase() : e))(c, a),
                                ),
                            ),
                        );
                    };
                let gs, vs;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right'), (e.Center = 'center');
                })(gs || (gs = {})),
                    (function (e) {
                        (e.Medium = 'medium'), (e.Big = 'big'), (e.Huge = 'huge');
                    })(vs || (vs = {}));
                const As = ({
                        conditions: e,
                        columns: t = !1,
                        isUppercase: a,
                        align: n = gs.Center,
                        swapProgress: u = !1,
                        textStyles: s,
                        progressInfoStyles: i,
                        missionId: l,
                        size: o,
                        reverse: c,
                        isBold: _ = !1,
                    }) => {
                        const m = z()(ku.base, ku[`base__${o}`], c && ku.base__reverse, _ && ku.base__bolded);
                        return r().createElement(
                            'div',
                            { className: m },
                            r().createElement(hs, {
                                conditions: e,
                                columns: t,
                                isUppercase: a,
                                align: n,
                                swapProgress: u,
                                textStyles: s,
                                progressInfoStyles: i,
                                missionId: l,
                            }),
                        );
                    },
                    fs = {
                        base: 'Card_base_80',
                        completed: 'Card_completed_af',
                        border_anim_bg: 'Card_border_anim_bg_21',
                        'border-anim': 'Card_border-anim_78',
                        card_icon: 'Card_card_icon_50',
                        border_anim: 'Card_border_anim_9d',
                        decorator: 'Card_decorator_a9',
                        premium: 'Card_premium_ca',
                        locked: 'Card_locked_f9',
                        premArrow: 'Card_premArrow_67',
                        premiumLock: 'Card_premiumLock_82',
                        active: 'Card_active_3a',
                        small: 'Card_small_1a',
                        completed_final: 'Card_completed_final_a7',
                        completed_anim_bg: 'Card_completed_anim_bg_f6',
                        'bg-blink': 'Card_bg-blink_ff',
                        battle_conditions_wrapper: 'Card_battle_conditions_wrapper_83',
                        battle_conditions_inner_wrapper: 'Card_battle_conditions_inner_wrapper_1b',
                        battle_conditions_inner_wrapper__no_margin:
                            'Card_battle_conditions_inner_wrapper__no_margin_08',
                        rewards_wrapper: 'Card_rewards_wrapper_c5',
                        medium: 'Card_medium_86',
                        rewardBlock_wrapper: 'Card_rewardBlock_wrapper_92',
                        rewardsText: 'Card_rewardsText_ed',
                        reroll_btn: 'Card_reroll_btn_27',
                        reroll_btn_images: 'Card_reroll_btn_images_70',
                        reroll_img: 'Card_reroll_img_57',
                        reroll_img_hover: 'Card_reroll_img_hover_bf',
                        reroll_img_disabled: 'Card_reroll_img_disabled_3e',
                        reroll_btn__disabled: 'Card_reroll_btn__disabled_49',
                        conditionText: 'Card_conditionText_e1',
                        completedMissions: 'Card_completedMissions_c7',
                        completedMissions__current: 'Card_completedMissions__current_75',
                        'completed-icon': 'Card_completed-icon_23',
                    },
                    Ds = (e, t) => ({
                        backgroundImage: `url('${R.images.white_tiger.gui.maps.icons.postbattle[`c_${e}_${t}_silver`]()}')`,
                    }),
                    Cs = R.strings.quests,
                    Fs = R.strings.event.postbattle,
                    Bs = ({
                        bonusCondition: e,
                        bonuses: t,
                        postBattleCondition: a,
                        id: u,
                        status: s,
                        isPremium: i = !1,
                        isRerollEnabled: l,
                        canReroll: o,
                        index: c,
                        onReroll: _,
                        onMouseEnterRerollBtn: m,
                        isExiting: d,
                        missionCompletedVisited: E,
                        maxMissions: p = 0,
                        completedMissions: b = 0,
                    }) => {
                        const h = ee().mediaSize,
                            g = ((e) => (e >= Q.Large ? _u.Big : e >= Q.Small ? _u.Medium : _u.Small))(h),
                            v = h >= Q.Large ? 64 : 32,
                            A = z()(
                                fs.base,
                                fs[
                                    `${((e, t) => {
                                        switch (e) {
                                            case ou.Completed:
                                                return t ? 'completed' : 'completed_final';
                                            case ou.Locked:
                                                return 'locked';
                                            case ou.Active:
                                                return 'active';
                                            default:
                                                return '';
                                        }
                                    })(s, !E)}`
                                ],
                                i && fs.premium,
                            ),
                            f = (0, n.useMemo)(
                                () =>
                                    t.map(({ value: e }) => {
                                        return {
                                            name: e.item || e.name,
                                            image: yu({ name: e.name.replace(/:/g, '_') }, bu.Big),
                                            tooltipArgs: d
                                                ? void 0
                                                : Su(
                                                      Object.assign(
                                                          { tooltipId: `${u}:${e.index}` },
                                                          'wt_hunter' === e.name && { isHunterLootBox: !0 },
                                                      ),
                                                      Number(e.tooltipContentId),
                                                  ),
                                            value: e.value,
                                            valueType:
                                                ((t = e.name),
                                                fu.includes(t)
                                                    ? hu.MULTI
                                                    : Du.includes(t)
                                                      ? hu.CURRENCY
                                                      : Cu.includes(t)
                                                        ? hu.NUMBER
                                                        : Fu.includes(t)
                                                          ? hu.PREMIUM_PLUS
                                                          : hu.STRING),
                                        };
                                        var t;
                                    }),
                                [t, d, u],
                            ),
                            D = (0, n.useMemo)(() => (s === ou.Completed ? 'rewardReceived' : 'reward'), [s]),
                            C = 0 !== e.items.length && a.items.length < 2;
                        return r().createElement(
                            'div',
                            { className: A },
                            r().createElement('div', { className: fs.decorator }),
                            i &&
                                s === ou.Locked &&
                                r().createElement(
                                    gn,
                                    {
                                        isEnabled: !d,
                                        body: Cs.premiumQuests.tooltips.locked.body(),
                                        header: Cs.premiumQuests.tooltips.locked.header(),
                                    },
                                    r().createElement('div', { className: fs.premiumLock }),
                                ),
                            r().createElement(
                                'div',
                                { className: fs.border_anim },
                                r().createElement('div', { className: fs.border_anim_bg }),
                            ),
                            r().createElement('div', { className: z()(fs.completed_anim_bg) }),
                            i &&
                                2 !== c &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: z()(fs.border_anim, fs.border_anim_left) },
                                        r().createElement('div', { className: fs.border_anim_bg }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: z()(fs.border_anim, fs.border_anim_top_right) },
                                        r().createElement('div', { className: fs.border_anim_bg }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: z()(fs.border_anim, fs.border_anim_bottom_right) },
                                        r().createElement('div', { className: fs.border_anim_bg }),
                                    ),
                                ),
                            !i &&
                                l &&
                                r().createElement(
                                    He,
                                    {
                                        contentId: R.views.lobby.missions.RerollTooltipWithCountdown('resId'),
                                        isEnabled: !o && !d,
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: z()(fs.reroll_btn, { [fs.reroll_btn__disabled]: !o }),
                                            onClick: o ? _ : null,
                                            onMouseEnter: o ? m : null,
                                            'data-id': u,
                                        },
                                        r().createElement('p', null, Cs.dailyQuests.body.reroll()),
                                        r().createElement(
                                            'div',
                                            { className: fs.reroll_btn_images },
                                            r().createElement('div', { className: fs.reroll_img }),
                                            r().createElement('div', { className: fs.reroll_img_hover }),
                                            r().createElement('div', { className: fs.reroll_img_disabled }),
                                        ),
                                    ),
                                ),
                            r().createElement(
                                'div',
                                { className: fs.battle_conditions_wrapper },
                                C &&
                                    e.items.map(({ value: e }, t) =>
                                        r().createElement(
                                            'div',
                                            { className: fs.battle_conditions_inner_wrapper, key: t },
                                            r().createElement('div', {
                                                className: fs.card_icon,
                                                style: Ds(v, e.iconKey),
                                            }),
                                            r().createElement(As, {
                                                conditions: e,
                                                inlineOperator: !0,
                                                size: g,
                                                missionId: u,
                                                swapProgress: !0,
                                                reverse: !0,
                                                align: gs.Left,
                                            }),
                                        ),
                                    ),
                                0 !== a.items.length &&
                                    a.items.map(({ value: e }, t) =>
                                        r().createElement(
                                            'div',
                                            { className: fs.battle_conditions_inner_wrapper, key: t },
                                            r().createElement('div', {
                                                className: fs.card_icon,
                                                style: Ds(v, e.iconKey),
                                            }),
                                            r().createElement(As, {
                                                conditions: e,
                                                inlineOperator: !0,
                                                size: g,
                                                missionId: u,
                                                swapProgress: !0,
                                                reverse: !0,
                                                align: gs.Left,
                                            }),
                                        ),
                                    ),
                            ),
                            r().createElement(
                                'div',
                                { className: fs.rewards_wrapper },
                                r().createElement('div', { className: fs.rewardsText }, Fs[D]()),
                                r().createElement(
                                    'div',
                                    { className: fs.rewardBlock_wrapper },
                                    r().createElement(Pu, { size: g === cu.Small ? bu.Small : bu.Big, data: f }),
                                ),
                            ),
                            p > 1 &&
                                r().createElement(ba, {
                                    classMix: fs.completedMissions,
                                    text: Fs.status(),
                                    binding: {
                                        current: r().createElement(
                                            'span',
                                            { className: z()(b > 0 ? fs.completedMissions__current : '') },
                                            b,
                                        ),
                                        total: p,
                                    },
                                }),
                        );
                    };
                function ws() {
                    return (
                        (ws =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ws.apply(this, arguments)
                    );
                }
                const ys = (e, t) => {
                    const a = e.value.status,
                        n = t.value.status;
                    return a === n
                        ? 0
                        : a === ou.Completed && n !== ou.Completed
                          ? -1
                          : a !== ou.Completed && n === ou.Completed
                            ? 1
                            : void 0;
                };
                class Ss extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { quests: this.props.quests, changingQuests: [] }),
                            (this.timeoutRef = r().createRef()),
                            (this.getChangingCardIds = (e, t) => {
                                const a = [];
                                for (let n = 0; n < e.length; n++)
                                    if (void 0 !== e[n] && void 0 !== t[n]) {
                                        const r = e[n].value,
                                            u = t[n].value;
                                        (r.id !== u.id || (r.status === ou.Completed && u.status !== ou.Completed)) &&
                                            a.push(r.id);
                                    }
                                return a;
                            });
                    }
                    componentDidUpdate(e) {
                        const t = e.quests,
                            a = this.props.quests,
                            n = this.getChangingCardIds(t, a);
                        n.length > 0
                            ? (Ee(R.sounds.dq_screen_quest_reroll()),
                              this.setState({ changingQuests: n }),
                              (this.timeoutRef.current = setTimeout(() => {
                                  this.setState({ quests: a, changingQuests: [] });
                              }, 1500)))
                            : 0 === this.state.changingQuests.length && this.setState({ quests: a });
                    }
                    componentWillUnmount() {
                        null !== this.timeoutRef.current && clearTimeout(this.timeoutRef.current);
                    }
                    render() {
                        const e = this.state,
                            t = e.quests,
                            a = e.changingQuests,
                            n = this.props,
                            u = n.isExiting,
                            s = n.isPremium,
                            i = n.isRerollEnabled,
                            l = n.canReroll,
                            o = n.onReroll,
                            c = n.onMouseEnterRerollBtn,
                            _ = n.missionsCompletedVisited,
                            m = t.length > 0 ? t.length : 3;
                        return r().createElement(
                            'div',
                            { className: 'Cards_base_01' },
                            t
                                .slice(0, m)
                                .sort(ys)
                                .map(({ value: e }, t) => {
                                    const n = a.indexOf(e.id) > -1;
                                    return r().createElement(
                                        du.U,
                                        {
                                            key: `${e.id}-${t}`,
                                            isOut: u || n,
                                            type: 'slide',
                                            delayIn: n ? '0ms' : 400 + 100 * t + 'ms',
                                            delayOut: n ? '1000ms' : 100 * (1 + t) + 'ms',
                                        },
                                        r().createElement(
                                            Bs,
                                            ws({}, e, {
                                                isPremium: s,
                                                isRerollEnabled: i && e.status === ou.Active,
                                                canReroll: l,
                                                onReroll: o,
                                                onMouseEnterRerollBtn: c,
                                                index: t,
                                                isExiting: u,
                                                missionCompletedVisited: _ ? _[t].value : null,
                                            }),
                                        ),
                                    );
                                }),
                        );
                    }
                }
                Ss.defaultProps = { isPremium: !1, isRerollEnabled: !1, canReroll: !1 };
                const Ts = (0, n.createContext)({ width: window.innerWidth, height: window.innerHeight }),
                    Rs = 1.6,
                    xs = (e) => (t, a) =>
                        t / a >= 2.4000000000000004
                            ? e(viewEnv.remToPx(a) * Rs, viewEnv.remToPx(a), t, a)
                            : e(viewEnv.remToPx(t), 0.625 * viewEnv.remToPx(t), t, a),
                    Ns =
                        (xs((e, t, a, n) => {
                            const r = { width: viewEnv.remToPx(900) * Rs, height: viewEnv.remToPx(900) },
                                u = { width: viewEnv.remToPx(1200) * Rs, height: viewEnv.remToPx(1200) };
                            return e < r.width
                                ? r
                                : a > I.medium.width && n > I.medium.height && e < u.width
                                  ? u
                                  : { width: e, height: t };
                        }),
                        xs((e, t) => {
                            const a = { width: viewEnv.remToPx(700) * Rs, height: viewEnv.remToPx(700) };
                            return e < a.width ? a : { width: e, height: t };
                        }),
                        (e, t) => {
                            const a = (function (e = 0) {
                                    let t = e;
                                    const a = Math.trunc(t / 86400);
                                    t -= 86400 * a;
                                    const n = Math.trunc(t / 3600);
                                    t -= 3600 * n;
                                    const r = Math.trunc(t / 60);
                                    return (t -= 60 * r), { days: a, hours: n, minutes: r, seconds: t };
                                })(e),
                                n = a.days,
                                r = a.hours,
                                u = a.minutes;
                            return n >= 1
                                ? _(t.days(), { days: n, hours: r })
                                : r >= 1
                                  ? _(t.hours(), { hours: r, minutes: u })
                                  : u >= 1
                                    ? _(t.minutes(), { minutes: u })
                                    : t.lessMinute();
                        }),
                    Ls = {
                        base: 'QuestsTab_base_9d',
                        scrollWrapper: 'QuestsTab_scrollWrapper_ae',
                        contentWrapper: 'QuestsTab_contentWrapper_24',
                        content: 'QuestsTab_content_28',
                        base__small: 'QuestsTab_base__small_63',
                        base__extraSmall: 'QuestsTab_base__extraSmall_8f',
                        shadowLip: 'QuestsTab_shadowLip_1a',
                        questsCompleted: 'QuestsTab_questsCompleted_f9',
                        questsCompletedImg: 'QuestsTab_questsCompletedImg_c2',
                        questsCompletedText: 'QuestsTab_questsCompletedText_d7',
                        questsCompletedHunter: 'QuestsTab_questsCompletedHunter_22',
                        timerIcon: 'QuestsTab_timerIcon_35',
                        timeLeft: 'QuestsTab_timeLeft_37',
                    },
                    Ps = { suppressScrollX: !0 },
                    ks = R.strings.postbattle_screen.questsTab,
                    Is = () => {
                        const e = T('model.events.events'),
                            t = T('model.events'),
                            a = t.hasQuestsToShow,
                            u = t.isHunter,
                            s = t.questsUpdateTimeLeft,
                            i = Ae(['base'], Ls),
                            l = (0, n.useState)(!1),
                            o = l[0],
                            c = l[1],
                            _ = (0, n.useCallback)(({ y: e }) => {
                                c(e);
                            }, []),
                            m = (() => {
                                const e = (0, n.useState)({
                                        width: viewEnv.remToPx(window.innerWidth),
                                        height: viewEnv.remToPx(window.innerHeight),
                                    }),
                                    t = e[0],
                                    a = e[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = () => {
                                            const e = window,
                                                t = e.innerWidth,
                                                n = e.innerHeight;
                                            a({ width: viewEnv.remToPx(t), height: viewEnv.remToPx(n) });
                                        };
                                        return (
                                            e(),
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    t
                                );
                            })();
                        return r().createElement(
                            Ts.Provider,
                            { value: m },
                            r().createElement(
                                'div',
                                { className: i.base },
                                a
                                    ? r().createElement(
                                          'div',
                                          { className: Ls.scrollWrapper },
                                          r().createElement(
                                              Gn,
                                              { onUpdateActiveAxis: _, scrollSettings: Ps },
                                              r().createElement(
                                                  'div',
                                                  { className: Ls.contentWrapper },
                                                  r().createElement(
                                                      'div',
                                                      { className: Ls.content },
                                                      r().createElement(Ss, {
                                                          isExiting: !1,
                                                          quests: e,
                                                          isRerollEnabled: !1,
                                                          canReroll: !1,
                                                      }),
                                                  ),
                                              ),
                                          ),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: Ls.questsCompleted },
                                          r().createElement('div', { className: Ls.questsCompletedImg }),
                                          u
                                              ? r().createElement(
                                                    'div',
                                                    { className: Ls.questsCompletedHunter },
                                                    r().createElement(Sa, {
                                                        className: Ls.questsCompletedText,
                                                        text: ks.questsCompleted.hunter(),
                                                    }),
                                                    r().createElement('div', { className: Ls.timerIcon }),
                                                    r().createElement(Sa, {
                                                        className: Ls.timeLeft,
                                                        text: Ns(s, ks.questsUpdateTimeLeft),
                                                    }),
                                                )
                                              : r().createElement(Sa, {
                                                    className: Ls.questsCompletedText,
                                                    text: ks.questsCompleted.boss(),
                                                }),
                                      ),
                                o && r().createElement('div', { className: Ls.shadowLip }),
                            ),
                        );
                    },
                    Ms = {
                        base: 'TabsContent_base_39',
                        base__tie: 'TabsContent_base__tie_e4',
                        base__win: 'TabsContent_base__win_f9',
                        base__lose: 'TabsContent_base__lose_5a',
                        contentContainer: 'TabsContent_contentContainer_a1',
                        contentContainer__hidden: 'TabsContent_contentContainer__hidden_22',
                    },
                    Os = ({ winStatus: e, currentTab: t, onClose: a }) => {
                        const u = (0, n.useState)(!1),
                            s = u[0],
                            i = u[1],
                            l = (0, n.useState)(!0),
                            o = l[0],
                            c = l[1],
                            _ = (0, n.useCallback)(() => o && a(), [o, a]);
                        ye(Be.n.ESCAPE, _), s || t !== Re || i(!0);
                        const m = z()(Ms.contentContainer, t !== Re && Ms.contentContainer__hidden),
                            d = z()(Ms.base, Ms[`base__${Ne(e)}`]);
                        return r().createElement(
                            'div',
                            { className: d },
                            t === Te && r().createElement(Ja, null),
                            s &&
                                r().createElement(
                                    'div',
                                    { className: m },
                                    r().createElement(Or, { manageMainEscapeListener: c }),
                                ),
                            'detailsTab' === t && r().createElement(iu, null),
                            t === xe && r().createElement(Is, null),
                        );
                    };
                function Hs() {
                    return (
                        (Hs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Hs.apply(this, arguments)
                    );
                }
                const Ws = 'tabs-role';
                var $s;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })($s || ($s = {}));
                class Us extends n.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[$s.TAB]);
                                return t && t.props[$s.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = r().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Ws] === $s.LIST);
                        if (t < 0) return;
                        const a =
                            this.props.activeKey || this._getFirstTabKey(r().Children.toArray(e[t].props.children));
                        (e[t] = r().cloneElement(e[t], {
                            children: r()
                                .Children.toArray(e[t].props.children)
                                .map((e) => r().cloneElement(e, { key: e.props[$s.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(a);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const a = r().Children.toArray(this.props.children)[this.tabsListIndex],
                            n = a.props.children.reduce(
                                (e, t, a) => ((e[a] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            u =
                                ((s = this.tabsProps),
                                (i = n),
                                !(
                                    Object.keys(s).length === Object.keys(i).length &&
                                    Object.keys(s).every(
                                        (e) => Object.prototype.hasOwnProperty.call(i, e) && s[e] === i[e],
                                    )
                                ));
                        var s, i;
                        const l = z()(
                                'Tabs_wrapper_2d',
                                a.props.className,
                                this.props.isTabsCentered && 'Tabs_wrapper__centered_d8',
                                this.props.isVerticalTabs && 'Tabs_wrapper__vertical_a5',
                            ),
                            o = z()('Tabs_list_0a', this.props.isTabsCentered && 'Tabs_list__centered_dc');
                        if (t.activeKey !== this.state.activeKey || u) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Ws] === $s.CONTENT)
                                        return e.props[$s.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, a) => [this.tabsListIndex, e].includes(a)),
                                u = t[0].props.children,
                                s = u.map((e, t) =>
                                    r().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            n[t],
                                            { key: t, isActive: this.state.activeKey === e.props[$s.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === u.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const a = n[t][$s.TAB];
                                                    this.state.activeKey === a ||
                                                        (n[t].onClick && n[t].onClick(e),
                                                        this.handleSetActiveKey(a),
                                                        this.props.onClickSound && Ee(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    n[t].onMouseEnter && n[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            Ee(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = n),
                                this.setState({
                                    activeElements: [
                                        r().createElement(
                                            'div',
                                            { className: o, key: $s.LIST },
                                            r().createElement('div', Hs({}, a.props, { className: l }), s),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = z()('Tabs_base_d9', this.props.isVerticalTabs && 'Tabs_base__vertical_c0');
                        return r().createElement('div', { className: t }, e);
                    }
                }
                Us.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Xs = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function Gs() {
                    return (
                        (Gs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Gs.apply(this, arguments)
                    );
                }
                const Ys = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = e.activeKey,
                            u = e.onClickSound,
                            s = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Xs);
                        return r().createElement(
                            'div',
                            Gs({ className: a }, l),
                            r().createElement(
                                Us,
                                { activeKey: n, onClickSound: u, onMouseEnterSound: s, isTabsCentered: i },
                                t,
                            ),
                        );
                    },
                    js = {
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
                    qs = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function zs() {
                    return (
                        (zs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        zs.apply(this, arguments)
                    );
                }
                const Ks = (e) => {
                    let t = e.size,
                        a = e.value,
                        n = e.isEmpty,
                        u = e.fadeInAnimation,
                        s = e.hide,
                        i = e.maximumNumber,
                        l = e.className,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                u = Object.keys(e);
                            for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, qs);
                    const c = n ? null : a,
                        _ = 'string' == typeof c;
                    if ((c && !_ && c < 0) || 0 === c) return null;
                    const m = c && !_ && c > i,
                        d = z()(
                            js.base,
                            js[`base__${t}`],
                            u && js.base__animated,
                            s && js.base__hidden,
                            !c && js.base__pattern,
                            n && js.base__empty,
                            l,
                        );
                    return r().createElement(
                        'div',
                        zs({ className: d }, o),
                        r().createElement('div', { className: js.bg }),
                        r().createElement('div', { className: js.pattern }),
                        r().createElement(
                            'div',
                            { className: z()(js.value, _ && js.value__text) },
                            m ? i : c,
                            m && r().createElement('span', { className: js.plus }, '+'),
                        ),
                    );
                };
                Ks.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Vs = ({ children: e, component: t, props: a = {} }) =>
                        t ? r().createElement(t, a, e) : e || null,
                    Qs = 'Tab_stateBorder_64',
                    Zs = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Js() {
                    return (
                        (Js =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Js.apply(this, arguments)
                    );
                }
                const ei = (0, n.memo)((e) => {
                        let t = e.isActive,
                            a = void 0 !== t && t,
                            n = e.isFirst,
                            u = void 0 !== n && n,
                            s = e.isLast,
                            i = void 0 !== s && s,
                            l = e.isMedium,
                            o = void 0 !== l && l,
                            c = e.isNotified,
                            _ = void 0 !== c && c,
                            m = e.children,
                            d = void 0 === m ? 'Tab' : m,
                            E = e.wrapper,
                            p = void 0 === E ? {} : E,
                            b = e.counter,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Zs);
                        return r().createElement(
                            Vs,
                            p,
                            r().createElement(
                                'div',
                                Js(
                                    {
                                        className: z()(
                                            'Tab_base_dd',
                                            { Tab_base__active_5d: a },
                                            { Tab_base__first_4a: u },
                                            { Tab_base__last_96: i },
                                            { Tab_base__medium_ec: o },
                                        ),
                                    },
                                    h,
                                ),
                                r().createElement(
                                    'span',
                                    { className: 'Tab_state_6c' },
                                    r().createElement('span', { className: 'Tab_stateHighlight_1e' }),
                                    r().createElement('span', {
                                        className: z()(Qs, 'Tab_stateBorder__positionLeft_e7'),
                                    }),
                                    r().createElement('span', {
                                        className: z()(Qs, 'Tab_stateBorder__positionRight_db'),
                                    }),
                                ),
                                d,
                                !i &&
                                    !a &&
                                    r().createElement('span', {
                                        className: z()('Tab_divider_ca', 'Tab_divider__show_62'),
                                    }),
                                (Boolean(b) || _) &&
                                    r().createElement(
                                        'div',
                                        { className: 'Tab_counter_e1' },
                                        r().createElement(Ks, { value: b, isEmpty: _ }),
                                    ),
                            ),
                        );
                    }),
                    ti = ({ children: e, tooltipProps: t, tabIsDisabled: a = !1 }) =>
                        t && t.description
                            ? r().createElement(gn, { isEnabled: a, header: t.title, body: t.description }, e)
                            : e,
                    ai = { base__disabled: 'TabWrapper_base__disabled_5c' },
                    ni = ['isDisabled', 'tab', 'onChangeCurrentTab'];
                function ri() {
                    return (
                        (ri =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ri.apply(this, arguments)
                    );
                }
                const ui = {
                        [xe]: { description: R.strings.postbattle_screen.tabTooltip.questsTab.disabled.description() },
                    },
                    si = (e) => {
                        let t = e.isDisabled,
                            a = void 0 !== t && t,
                            u = e.tab,
                            s = e.onChangeCurrentTab,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    u = Object.keys(e);
                                for (n = 0; n < u.length; n++) (a = u[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, ni);
                        const l = R.strings.postbattle_screen.tabName,
                            o = (0, n.useCallback)(
                                (e) => {
                                    a || (i && i.onClick && i.onClick(e), s(u));
                                },
                                [a, s, i, u],
                            ),
                            c = z()(ai.base, a && ai.base__disabled);
                        return r().createElement(
                            ti,
                            { tooltipProps: ui[u], tabIsDisabled: a },
                            r().createElement(
                                'div',
                                { className: c },
                                r().createElement(ei, ri({}, i, { onClick: o }), l.$dyn(u)),
                            ),
                        );
                    },
                    ii = ({ currentTab: e, onChangeCurrentTab: t }) => {
                        const a = [Te, Re, xe];
                        return r().createElement(
                            'div',
                            { className: 'TabsHeader_base_db' },
                            r().createElement(
                                Ys,
                                { activeKey: e },
                                r().createElement(
                                    'div',
                                    { 'tabs-role': 'tabs-list' },
                                    a.map((e) =>
                                        r().createElement(si, { key: e, 'tab-key': e, tab: e, onChangeCurrentTab: t }),
                                    ),
                                ),
                            ),
                        );
                    },
                    li = {
                        base: 'UserStatusInfo_base_c1',
                        base__small: 'UserStatusInfo_base__small_41',
                        base__extraSmall: 'UserStatusInfo_base__extraSmall_4e',
                        base__medium: 'UserStatusInfo_base__medium_82',
                        player: 'UserStatusInfo_player_86',
                        player__extraSmall: 'UserStatusInfo_player__extraSmall_46',
                        player__small: 'UserStatusInfo_player__small_64',
                        clanTag: 'UserStatusInfo_clanTag_55',
                        userName: 'UserStatusInfo_userName_b6',
                    };
                function oi() {
                    return (
                        (oi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        oi.apply(this, arguments)
                    );
                }
                const ci = () => {
                        const e = T('model.userStatus', y.None),
                            t = e.user,
                            a = e.killer,
                            n = e.isLeftBattle,
                            u = e.attackReason,
                            s = Ae(['base', 'player'], li);
                        return r().createElement(
                            'div',
                            { className: s.base },
                            r().createElement(
                                'div',
                                { className: s.player },
                                r().createElement(
                                    Tn,
                                    oi({}, t, { userNameClassName: li.userName, clanTagClassName: li.clanTag }),
                                ),
                            ),
                            r().createElement(Hn, {
                                userName: t.userName,
                                attackReason: u,
                                killer: a,
                                isLeftBattle: n,
                            }),
                        );
                    },
                    _i = 'ScreenContent_bg_99',
                    mi = 'ScreenContent_bgInner_78',
                    di = 'ScreenContent_bgInner__blurred_35',
                    Ei = (0, n.createContext)({ allies: Fe.Hunter, enemies: Fe.Boss }),
                    pi = ({ winStatus: e, arenaName: t, onChangeCurrentTab: a, generalInfo: u }) => {
                        const s = (0, n.useContext)(de),
                            l = (0, n.useState)(Te),
                            o = l[0],
                            c = l[1],
                            _ = (0, n.useCallback)(
                                (e) => {
                                    a(e), c(e);
                                },
                                [a],
                            ),
                            m = o === Te,
                            d = o === Re,
                            E = R.images.gui.maps.icons.map.screen.$dyn(`c_${t}`),
                            p = (0, n.useMemo)(() => ({ backgroundImage: `url(${E})` }), [E]),
                            b = m && s.state === oe.FirstIterationInDone,
                            h = z()(_i, 'ScreenContent_bg__top_a3'),
                            g = z()(_i, 'ScreenContent_bg__bottom_f8'),
                            v = z()(mi, 'ScreenContent_bgInner__top_6c', (!m || s.state !== oe.Idle) && di),
                            A = z()(mi, 'ScreenContent_bgInner__bottom_c3', di),
                            f = z()(
                                'ScreenContent_filter_2e',
                                !m && 'ScreenContent_filter__shadow_3f',
                                b && 'ScreenContent_filter__shadowPersonalEfficiency_0f',
                            );
                        return r().createElement(
                            'div',
                            { className: 'ScreenContent_base_0a' },
                            r().createElement(
                                'div',
                                { className: h },
                                r().createElement('div', { className: v, style: p }),
                            ),
                            r().createElement(
                                'div',
                                { className: g },
                                r().createElement('div', { className: A, style: p }),
                            ),
                            r().createElement('div', { className: f }),
                            r().createElement(
                                'div',
                                { className: 'ScreenContent_close_bf' },
                                r().createElement(ve, {
                                    caption: R.strings.postbattle_screen.PostbattleScreenApp.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: i.Sy,
                                }),
                            ),
                            r().createElement(ii, { currentTab: o, onChangeCurrentTab: _ }),
                            r().createElement(
                                'div',
                                { className: 'ScreenContent_tabsContentWrapper_b9' },
                                r().createElement(
                                    Ei.Provider,
                                    {
                                        value:
                                            ((D = u.vehicleType),
                                            'mediumTank' === D
                                                ? { allies: Fe.Hunter, enemies: Fe.Boss }
                                                : { allies: Fe.Boss, enemies: Fe.Hunter }),
                                    },
                                    r().createElement(Os, { winStatus: e, currentTab: o, onClose: i.Sy }),
                                ),
                            ),
                            (m || d) &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: 'ScreenContent_mapInfo_93' },
                                        r().createElement(De, {
                                            arenaName: u.arenaName,
                                            battleType: u.battleType,
                                            battleFinishTime: u.battleFinishTime,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'ScreenContent_playerInfo_3a' },
                                        r().createElement(ci, null),
                                    ),
                                ),
                        );
                        var D;
                    },
                    bi = P('model', (e) => ({
                        winStatus: e.common.generalInfo.winStatus,
                        arenaName: e.common.generalInfo.arenaName,
                        generalInfo: e.common.generalInfo,
                        team: e.team,
                        onChangeCurrentTab: (t) => e.onChangeCurrentTab({ tabId: t }),
                    }))((e) => r().createElement(me, null, r().createElement(le, null, r().createElement(pi, e))));
                window.viewEnv.addPreloadTexture('gui/flash/atlases/components.dds'),
                    engine.whenReady.then(() => {
                        s().render(r().createElement(bi, null), document.getElementById('root'));
                    });
            },
            4781: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => l });
                var n = a(6179),
                    r = a.n(n),
                    u = a(6483),
                    s = a.n(u);
                const i = {
                        slideOut: 'Reveal_slideOut_6c',
                        slideIn: 'Reveal_slideIn_1f',
                        slideLeftOut: 'Reveal_slideLeftOut_45',
                        slideLeftIn: 'Reveal_slideLeftIn_69',
                        slideRightOut: 'Reveal_slideRightOut_93',
                        slideRightIn: 'Reveal_slideRightIn_69',
                        fadeOut: 'Reveal_fadeOut_8c',
                        fadeIn: 'Reveal_fadeIn_9f',
                        bg_fadeOut: 'Reveal_bg_fadeOut_5c',
                        bg_fadeIn: 'Reveal_bg_fadeIn_79',
                        fadeDownIn: 'Reveal_fadeDownIn_1c',
                        fadeInUp: 'Reveal_fadeInUp_39',
                        fadeDownOut: 'Reveal_fadeDownOut_45',
                        fadeInDown: 'Reveal_fadeInDown_64',
                    },
                    l = ({ children: e, type: t, className: a, isOut: u, delayIn: l, delayOut: o, isDisabled: c }) => {
                        const _ = (0, n.useMemo)(() => ({ animationDelay: u ? o : l }), [u, l, o]);
                        return c
                            ? r().createElement('div', { className: a }, e)
                            : r().createElement(
                                  'div',
                                  { className: s()(i[`${t}${u ? 'Out' : 'In'}`], a), style: _ },
                                  e,
                              );
                    };
                l.defaultProps = { delayIn: '0ms', delayOut: '0ms', isDisabled: !1, isOut: !1, type: 'slide' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e].call(a.exports, a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, a, n] = deferred[l], u = !0, s = 0; s < t.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), n < r && (r = n));
                    if (u) {
                        deferred.splice(l--, 1);
                        var i = a();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, a, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (() => {
            var e = { 290: 0, 713: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [u, s, i] = a,
                        l = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var o = i(__webpack_require__);
                    }
                    for (t && t(a); l < u.length; l++)
                        (r = u[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(o);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7193));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
