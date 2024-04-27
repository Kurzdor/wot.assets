/*! For license information please see PreBattleView.js.LICENSE.txt */
(() => {
    'use strict';
    var __webpack_modules__ = {
            8380: (e) => {
                function t(e) {
                    return getComputedStyle(e);
                }
                function u(e, t) {
                    for (var u in t) {
                        var n = t[u];
                        'number' == typeof n && (n += 'px'), (e.style[u] = n);
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
                function o(e, t) {
                    if (!r) throw new Error('No element matching method supported');
                    return r.call(e, t);
                }
                function i(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function l(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return o(e, t);
                    });
                }
                var a = function (e) {
                        return 'ps__thumb-' + e;
                    },
                    s = function (e) {
                        return 'ps__rail-' + e;
                    },
                    c = function (e) {
                        return 'ps__button-start-' + e;
                    },
                    d = function (e) {
                        return 'ps__track_' + e;
                    },
                    m = function (e) {
                        return 'ps__button-end-' + e;
                    },
                    E = 'ps__child--consume',
                    h = 'ps--focus',
                    _ = 'ps--clicking',
                    A = function (e) {
                        return 'ps--active-' + e;
                    },
                    F = function (e) {
                        return 'ps--scrolling-' + e;
                    },
                    b = { x: null, y: null },
                    D = { immediately: !1 };
                function v(e, t, u) {
                    void 0 === u && (u = {});
                    var n = e.element.classList,
                        r = F(t);
                    n.contains(r) ? clearTimeout(b[t]) : n.add(r);
                }
                function p(e, t, u) {
                    void 0 === u && (u = {}),
                        Object.assign(D, u).immediately
                            ? e.isAlive && e.element.classList.remove(F(t))
                            : (b[t] = setTimeout(function () {
                                  return e.isAlive && e.element.classList.remove(F(t));
                              }, e.settings.scrollingThreshold));
                }
                var f = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    g = { isEmpty: { configurable: !0 } };
                (f.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (f.prototype.unbind = function (e, t) {
                        var u = this;
                        this.handlers[e] = this.handlers[e].filter(function (n) {
                            return !(!t || n === t) || (u.element.removeEventListener(e, n, !1), !1);
                        });
                    }),
                    (f.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (g.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(f.prototype, g);
                var C = function () {
                    this.eventElements = [];
                };
                function B(e) {
                    return parseInt(e, 10) || 0;
                }
                (C.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new f(e)), this.eventElements.push(t)), t;
                }),
                    (C.prototype.bind = function (e, t, u) {
                        this.eventElement(e).bind(t, u);
                    }),
                    (C.prototype.unbind = function (e, t, u) {
                        var n = this.eventElement(e);
                        n.unbind(t, u), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
                    }),
                    (C.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (C.prototype.once = function (e, t, u) {
                        var n = this.eventElement(e);
                        n.bind(t, function e(r) {
                            n.unbind(t, e), u(r);
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
                function L(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var S = function (e, t, u, n, r, o) {
                        var i;
                        if ((void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === o && (o = !1), 'top' === t))
                            i = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                        else {
                            if ('left' !== t) throw new Error('A proper axis should be provided');
                            i = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                        }
                        !(function (e, t, u, n, r, o) {
                            var i = u[0],
                                l = u[1],
                                a = u[2],
                                s = u[3],
                                c = u[4],
                                d = u[5];
                            void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === o && (o = !1);
                            var m = e.element;
                            e.reach &&
                                ((e.reach[s] = null),
                                m[a] < 1 && (e.reach[s] = 'start'),
                                m[a] > e[i] - e[l] - 1 && (e.reach[s] = 'end'),
                                t &&
                                    !r &&
                                    (m.dispatchEvent(L('ps-scroll-' + s)),
                                    t < 0
                                        ? m.dispatchEvent(L('ps-scroll-' + c))
                                        : t > 0 && m.dispatchEvent(L('ps-scroll-' + d)),
                                    n &&
                                        (function (e, t) {
                                            v(e, t), p(e, t);
                                        })(e, s)),
                                e.reach[s] && (t || o) && m.dispatchEvent(L('ps-' + s + '-reach-' + e.reach[s])));
                        })(e, u, i, n, r, o);
                    },
                    T = function (e, t, n, r) {
                        void 0 === t && (t = !1), void 0 === n && (n = 0), void 0 === r && (r = !1);
                        var o = e.element;
                        if (o) {
                            if (
                                ((e.containerWidth = Math.round(o.getBoundingClientRect().width)),
                                (e.containerHeight = Math.round(o.getBoundingClientRect().height)),
                                (e.contentWidth = Math.round(o.scrollWidth) - 2 * n),
                                (e.contentHeight = Math.round(o.scrollHeight)),
                                !r)
                            ) {
                                e.contentWidth = Math.round(o.scrollWidth) - 2 * n;
                                var a = e.contentWidth - e.containerWidth + n;
                                o.scrollLeft < n ? (o.scrollLeft = n) : o.scrollLeft > a && (o.scrollLeft = a);
                            }
                            var c = Math.floor(o.scrollTop),
                                d = Math.floor(o.scrollLeft) - n,
                                m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                            o.contains(e.scrollbarXRail) ||
                                (l(o, s('x')).forEach(function (e) {
                                    return i(e);
                                }),
                                o.appendChild(e.scrollbarXRail)),
                                o.contains(e.scrollbarYRail) ||
                                    (l(o, s('y')).forEach(function (e) {
                                        return i(e);
                                    }),
                                    o.appendChild(e.scrollbarYRail)),
                                !e.settings.suppressScrollX &&
                                e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                    ? ((e.scrollbarXActive = !0),
                                      (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                      (e.railXRatio = e.containerWidth / e.railXWidth),
                                      (e.scrollbarXWidth = k(e, B((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                      (e.scrollbarXLeft = B(
                                          ((e.negativeScrollAdjustment + d) * (e.railXWidth - e.scrollbarXWidth)) /
                                              (e.contentWidth - e.containerWidth),
                                      )),
                                      e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                    : (e.scrollbarXActive = !1),
                                !e.settings.suppressScrollY &&
                                e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                    ? ((e.scrollbarYActive = !0),
                                      (e.railYHeight = e.containerHeight - e.railYMarginHeight * m - 15 * m),
                                      (e.railYRatio = e.containerHeight / e.railYHeight),
                                      (e.scrollbarYHeight = k(
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
                                        o = Math.floor(e.scrollTop);
                                    t.isRtl
                                        ? (r.left =
                                              t.negativeScrollAdjustment +
                                              e.scrollLeft +
                                              t.containerWidth -
                                              t.contentWidth)
                                        : (r.left = e.scrollLeft),
                                        t.isScrollbarXUsingBottom
                                            ? (r.bottom = t.scrollbarXBottom - o)
                                            : (r.top = t.scrollbarXTop + o),
                                        u(t.scrollbarXRail, r);
                                    var i = { top: o, height: t.railYHeight };
                                    t.isScrollbarYUsingRight
                                        ? t.isRtl
                                            ? (i.right =
                                                  t.contentWidth -
                                                  (t.negativeScrollAdjustment + e.scrollLeft) -
                                                  t.scrollbarYRight -
                                                  t.scrollbarYOuterWidth)
                                            : (i.right = t.scrollbarYRight - e.scrollLeft)
                                        : t.isRtl
                                          ? (i.left =
                                                t.negativeScrollAdjustment +
                                                e.scrollLeft +
                                                2 * t.containerWidth -
                                                t.contentWidth -
                                                t.scrollbarYLeft -
                                                t.scrollbarYOuterWidth)
                                          : (i.left = t.scrollbarYLeft + e.scrollLeft),
                                        u(t.scrollbarYRail, i),
                                        u(t.scrollbarX, {
                                            left: t.scrollbarXLeft,
                                            width: t.scrollbarXWidth - t.railBorderXWidth * n,
                                        }),
                                        u(t.scrollbarY, {
                                            top: t.scrollbarYTop,
                                            height: t.scrollbarYHeight - t.railBorderYWidth * n,
                                        });
                                })(o, e, m),
                                e.scrollbarXButtonStart.classList.toggle('disabled', d < 1),
                                e.scrollbarXButtonEnd.classList.toggle(
                                    'disabled',
                                    d + e.containerWidth >= e.contentWidth,
                                ),
                                e.scrollbarYButtonStart.classList.toggle('disabled', o.scrollTop < 1),
                                e.scrollbarYButtonEnd.classList.toggle(
                                    'disabled',
                                    o.scrollTop + e.containerHeight >= e.contentHeight,
                                ),
                                e.scrollbarXActive
                                    ? (o.classList.add(A('x')), S(e, 'left', d - e.lastScrollLeft, !0, t))
                                    : (o.classList.remove(A('x')),
                                      (e.scrollbarXWidth = 0),
                                      (e.scrollbarXLeft = 0),
                                      (o.scrollLeft = 0)),
                                e.scrollbarYActive
                                    ? (o.classList.add(A('y')), S(e, 'top', o.scrollTop - e.lastScrollTop, !0, t))
                                    : (o.classList.remove(A('y')),
                                      (e.scrollbarYHeight = 0),
                                      (e.scrollbarYTop = 0),
                                      (o.scrollTop = 0)),
                                (e.lastScrollTop = c),
                                (e.lastScrollLeft = d),
                                (e.scrollTopPercent = o.scrollTop / o.scrollHeight),
                                (e.scrollLeftPercent = o.scrollLeft / o.scrollWidth);
                        }
                    };
                function k(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
                    );
                }
                var x = {
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
                    M = { breakBounds: !1, startBound: 0, endBound: 0 },
                    R = function (e) {
                        var t = e.scrollableDomEle,
                            u = e.onAnimationCompleteCallback,
                            n = e.direction,
                            r = e.onRefUpdateCallback,
                            o = e.duration,
                            i = e.cubicBezierPoints,
                            l = e.easingPreset,
                            a = e.scrollAmount,
                            s = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = M);
                        var d = null,
                            m = null,
                            E = null,
                            h = null,
                            _ = t === window,
                            A = ['left', 'right'].indexOf(n) > -1,
                            F = ['right', 'bottom'].indexOf(n) > -1;
                        A
                            ? ((m = _ ? 'scrollX' : 'scrollLeft'),
                              (h = _ ? 'innerWidth' : 'width'),
                              (E = 'scrollWidth'))
                            : ((m = _ ? 'scrollY' : 'scrollTop'),
                              (h = _ ? 'innerHeight' : 'height'),
                              (E = 'scrollHeight'));
                        var b = t[m],
                            D = (function (e) {
                                var t,
                                    u = e.scrollableDomEle,
                                    n = e.elementLengthProp,
                                    r = e.initialScrollPosition,
                                    o = e.isHorizontalDirection,
                                    i = e.scrollLengthProp,
                                    l = e.direction;
                                if (e.isWindow) {
                                    var a = document.documentElement;
                                    t = o ? a.offsetWidth : a.offsetHeight;
                                } else t = (u[i] - u.getBoundingClientRect()[n]) | 0;
                                return ['left', 'top'].includes(l) ? r : t - r;
                            })({
                                isWindow: _,
                                scrollableDomEle: t,
                                elementLengthProp: h,
                                initialScrollPosition: b,
                                isHorizontalDirection: A,
                                scrollLengthProp: E,
                                direction: n,
                            });
                        !isNaN(a) && a < D && (D = a);
                        var v = function e(n) {
                            if (!s || !s()) {
                                var a = n - d,
                                    E = (function (e) {
                                        var t = e.easingPreset,
                                            u = e.cubicBezierPoints,
                                            n = e.runTime / e.duration;
                                        if (x.hasOwnProperty(t)) return x[t](n);
                                        if (
                                            u &&
                                            !isNaN(u.x1) &&
                                            !isNaN(u.y1) &&
                                            !isNaN(u.x2) &&
                                            !isNaN(u.y2) &&
                                            u.x1 >= 0 &&
                                            u.x2 >= 0
                                        )
                                            return (function (e) {
                                                var t,
                                                    u = e.percentTimeElapsed,
                                                    n = e.x1,
                                                    r = e.y1,
                                                    o = e.x2,
                                                    i = e.y2;
                                                return (
                                                    1 -
                                                    (n * ((t = u), Math.pow(t, 3)) +
                                                        r *
                                                            (function (e) {
                                                                return 3 * e * e * (1 - e);
                                                            })(u) +
                                                        o *
                                                            (function (e) {
                                                                return 3 * e * Math.pow(1 - e, 2);
                                                            })(u) +
                                                        i *
                                                            (function (e) {
                                                                return Math.pow(1 - e, 3);
                                                            })(u))
                                                );
                                            })({ percentTimeElapsed: n, x1: u.x1, x2: u.x2, y1: u.y1, y2: u.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: l, cubicBezierPoints: i, runTime: a, duration: o });
                                if (!isNaN(E)) {
                                    var h = Math.round(E * D),
                                        v = F ? h + b : D - h;
                                    if (
                                        (c.breakBounds &&
                                            (v < c.startBound
                                                ? (v = c.startBound)
                                                : v > c.endBound && (v = c.endBound)),
                                        a < o)
                                    ) {
                                        if (_) {
                                            var p = A ? v : 0,
                                                f = A ? 0 : v;
                                            window.scrollTo(p, f);
                                        } else t[m] = v;
                                        r && r(v), requestAnimationFrame(e);
                                    } else u && u();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (d = e), v(e);
                        });
                    },
                    P = function (e, t, u) {
                        return function (n) {
                            t = t.toLowerCase();
                            var r = null,
                                o = function () {
                                    if (1 === n.buttons) {
                                        if (
                                            !n.target.closest('.ps__rail-' + t) ||
                                            !n.target.closest('.ps__track_' + t)
                                        ) {
                                            var o = (function (e) {
                                                    var t = e.e,
                                                        u = e.i;
                                                    return 'y' === e.axis
                                                        ? {
                                                              cursorPosition: t.screenY,
                                                              windowScrolled: window.pageYOffset,
                                                              elementPosition:
                                                                  u.scrollbarYRail.getBoundingClientRect().top,
                                                          }
                                                        : {
                                                              cursorPosition: t.screenX,
                                                              windowScrolled: window.pageXOffset,
                                                              elementPosition:
                                                                  u.scrollbarXRail.getBoundingClientRect().left,
                                                          };
                                                })({ axis: t, e: n, i: e }),
                                                i = o.cursorPosition - o.windowScrolled - o.elementPosition,
                                                l = (function (e) {
                                                    var t = e.i;
                                                    return e.cursorPositionOnRail >
                                                        ('y' === e.axis ? t.scrollbarYTop : t.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: i, i: e });
                                            (function (e) {
                                                var t = e.axis,
                                                    u = e.cursorPositionOnRail,
                                                    n = e.direction,
                                                    r = e.i,
                                                    o = (function (e) {
                                                        var t = e.i,
                                                            u = e.cursorPositionOnRail;
                                                        if ('y' === e.axis) {
                                                            var n = t.scrollbarY.offsetTop,
                                                                r = n + t.scrollbarYHeight;
                                                            return u >= n && u <= r;
                                                        }
                                                        var o = t.scrollbarX.offsetLeft,
                                                            i = o + t.scrollbarXWidth;
                                                        return u >= o && u <= i;
                                                    })({ axis: t, i: r, cursorPositionOnRail: u });
                                                return o
                                                    ? ((function (e) {
                                                          var t = e.axis,
                                                              u = e.i,
                                                              n = e.cursorPositionOnRail,
                                                              r = (function (e, t) {
                                                                  if ('y' === e) {
                                                                      var u = t.contentHeight - t.containerHeight;
                                                                      return {
                                                                          rail: t.railYHeight,
                                                                          content: t.contentHeight,
                                                                          scrollbar: t.scrollbarYHeight,
                                                                          maxScroll: u,
                                                                      };
                                                                  }
                                                                  var n = t.contentWidth - t.containerWidth;
                                                                  return {
                                                                      rail: t.railXWidth,
                                                                      content: t.contentWidth,
                                                                      scrollbar: t.scrollbarXWidth,
                                                                      maxScroll: n,
                                                                  };
                                                              })(t, u),
                                                              o = (n - r.scrollbar / 2) / r.rail,
                                                              i = Math.round(
                                                                  Math.min(r.maxScroll, Math.max(0, r.content * o)),
                                                              );
                                                          'y' === t
                                                              ? (u.element.scrollTop = i)
                                                              : (u.element.scrollLeft = i);
                                                      })({ axis: t, i: r, cursorPositionOnRail: u }),
                                                      !0)
                                                    : ('y' === t
                                                          ? (r.element.scrollTop += n * r.containerHeight)
                                                          : (r.element.scrollLeft += n * r.containerWidth),
                                                      !1);
                                            })({ axis: t, cursorPositionOnRail: i, direction: l, i: e }) &&
                                                clearTimeout(r),
                                                T(e, !1, u);
                                        }
                                        n.stopPropagation();
                                    }
                                };
                            o(),
                                (r = setInterval(o, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(r);
                                });
                        };
                    };
                function O(e, t, u) {
                    var n = u[0],
                        r = u[1],
                        o = u[2],
                        i = u[3],
                        l = u[4],
                        a = u[5],
                        s = u[6],
                        c = u[7],
                        d = u[8],
                        m = e.element,
                        E = null,
                        h = null,
                        A = null;
                    function F(u) {
                        (m[s] = B(E + A * (u[o] - h))), v(e, c), T(e, !1, t), u.stopPropagation(), u.preventDefault();
                    }
                    function b() {
                        p(e, c), e[d].classList.remove(_), e.event.unbind(e.ownerDocument, 'mousemove', F);
                    }
                    e.event.bind(e[l], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((E = m[s]),
                            (h = t[o]),
                            (A = (e[r] - e[n]) / (e[i] - e[a])),
                            e.event.bind(e.ownerDocument, 'mousemove', F),
                            e.event.once(e.ownerDocument, 'mouseup', b),
                            e[d].classList.add(_),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var H = 1e3,
                    N = {
                        'click-rail': function (e, t) {
                            e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', P(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', P(e, 'x', t));
                        },
                        'drag-thumb': function (e, t) {
                            O(e, t, [
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
                                O(e, t, [
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
                            var u = e.element;
                            e.event.bind(e.ownerDocument, 'keydown', function (n) {
                                if (
                                    !((n.isDefaultPrevented && n.isDefaultPrevented()) || n.defaultPrevented) &&
                                    o(u, ':hover')
                                ) {
                                    var r,
                                        i = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (i) {
                                        if ('IFRAME' === i.tagName) i = i.contentDocument.activeElement;
                                        else for (; i.shadowRoot; ) i = i.shadowRoot.activeElement;
                                        if (
                                            o((r = i), 'input,[contenteditable]') ||
                                            o(r, 'select,[contenteditable]') ||
                                            o(r, 'textarea,[contenteditable]') ||
                                            o(r, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var l = 0,
                                        a = 0;
                                    switch (n.which) {
                                        case 37:
                                            l = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            a = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            l = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            a = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            a = n.shiftKey ? e.containerHeight : -e.containerHeight;
                                            break;
                                        case 33:
                                            a = e.containerHeight;
                                            break;
                                        case 34:
                                            a = -e.containerHeight;
                                            break;
                                        case 36:
                                            a = e.contentHeight;
                                            break;
                                        case 35:
                                            a = -e.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.settings.suppressScrollX && 0 !== l) ||
                                        (e.settings.suppressScrollY && 0 !== a) ||
                                        ((u.scrollTop -= a),
                                        (u.scrollLeft += l),
                                        T(e, !1, t),
                                        (function (t, n) {
                                            var r = Math.floor(u.scrollTop);
                                            if (0 === t) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === r && n > 0) ||
                                                    (r >= e.contentHeight - e.containerHeight && n < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var o = u.scrollLeft;
                                            if (0 === n) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === o && t < 0) ||
                                                    (o >= e.contentWidth - e.containerWidth && t > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(l, a) && n.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, u) {
                            var n = e.element;
                            function r(r) {
                                var o = (function (e) {
                                        var t = -1 * e.deltaX,
                                            u = e.deltaY;
                                        return (
                                            (void 0 !== t && void 0 !== u) ||
                                                ((t = (-1 * e.wheelDeltaX) / 6), (u = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (u *= 10)),
                                            t != t && u != u && ((t = 0), (u = e.wheelDelta)),
                                            e.shiftKey ? [-u, -t] : [t, u]
                                        );
                                    })(r),
                                    i = o[0],
                                    l = o[1];
                                if (
                                    !(function (e, u, r) {
                                        if (!w.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(e)) return !1;
                                        for (var o = e; o && o !== n; ) {
                                            if (o.classList.contains(E)) return !0;
                                            var i = t(o);
                                            if (
                                                [i.overflow, i.overflowX, i.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var l = o.scrollHeight - o.clientHeight;
                                                if (
                                                    l > 0 &&
                                                    !((0 === o.scrollTop && r > 0) || (o.scrollTop === l && r < 0))
                                                )
                                                    return !0;
                                                var a = o.scrollWidth - o.clientWidth;
                                                if (
                                                    a > 0 &&
                                                    !((0 === o.scrollLeft && u < 0) || (o.scrollLeft === a && u > 0))
                                                )
                                                    return !0;
                                            }
                                            o = o.parentNode;
                                        }
                                        return !1;
                                    })(r.target, i, l)
                                ) {
                                    var a = !1,
                                        s = (i * e.settings.wheelSpeed) | 0,
                                        c = (l * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (l ? (n.scrollTop -= c) : (n.scrollTop += s), (a = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (i ? (n.scrollLeft += s) : (n.scrollLeft -= c), (a = !0))
                                        : ((n.scrollTop -= c), (n.scrollLeft += s)),
                                        T(e, !1, u),
                                        (a =
                                            a ||
                                            (function (t, u) {
                                                var r = Math.floor(n.scrollTop),
                                                    o = 0 === n.scrollTop,
                                                    i = r + n.offsetHeight === n.scrollHeight,
                                                    l = 0 === n.scrollLeft,
                                                    a = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                                return (
                                                    !(Math.abs(u) > Math.abs(t) ? o || i : l || a) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(i, l)),
                                        a && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
                                }
                            }
                            e.event.bind(n, 'wheel', r),
                                void 0 !== window.onmousewheel && e.event.bind(n, 'mousewheel', r);
                        },
                        touch: function (e, u) {
                            if (w.supportsTouch || w.supportsIePointer) {
                                var n = e.element,
                                    r = {},
                                    o = 0,
                                    i = {},
                                    l = null;
                                w.supportsTouch
                                    ? (e.event.bind(n, 'touchstart', d),
                                      e.event.bind(n, 'touchmove', m),
                                      e.event.bind(n, 'touchend', h))
                                    : w.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(n, 'pointerdown', d),
                                            e.event.bind(n, 'pointermove', m),
                                            e.event.bind(n, 'pointerup', h))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(n, 'MSPointerDown', d),
                                            e.event.bind(n, 'MSPointerMove', m),
                                            e.event.bind(n, 'MSPointerUp', h)));
                            }
                            function a(t, r) {
                                (n.scrollTop -= r), (n.scrollLeft -= t), T(e, !1, u);
                            }
                            function s(e) {
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
                            function d(e) {
                                if (c(e)) {
                                    var t = s(e);
                                    (r.pageX = t.pageX),
                                        (r.pageY = t.pageY),
                                        (o = new Date().getTime()),
                                        null !== l && clearInterval(l);
                                }
                            }
                            function m(u) {
                                if (c(u)) {
                                    var l = s(u),
                                        d = { pageX: l.pageX, pageY: l.pageY },
                                        m = d.pageX - r.pageX,
                                        h = d.pageY - r.pageY;
                                    if (
                                        (function (e, u, r) {
                                            if (!n.contains(e)) return !1;
                                            for (var o = e; o && o !== n; ) {
                                                if (o.classList.contains(E)) return !0;
                                                var i = t(o);
                                                if (
                                                    [i.overflow, i.overflowX, i.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var l = o.scrollHeight - o.clientHeight;
                                                    if (
                                                        l > 0 &&
                                                        !((0 === o.scrollTop && r > 0) || (o.scrollTop === l && r < 0))
                                                    )
                                                        return !0;
                                                    var a = o.scrollLeft - o.clientWidth;
                                                    if (
                                                        a > 0 &&
                                                        !(
                                                            (0 === o.scrollLeft && u < 0) ||
                                                            (o.scrollLeft === a && u > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                o = o.parentNode;
                                            }
                                            return !1;
                                        })(u.target, m, h)
                                    )
                                        return;
                                    a(m, h), (r = d);
                                    var _ = new Date().getTime(),
                                        A = _ - o;
                                    A > 0 && ((i.x = m / A), (i.y = h / A), (o = _)),
                                        (function (t, u) {
                                            var r = Math.floor(n.scrollTop),
                                                o = n.scrollLeft,
                                                i = Math.abs(t),
                                                l = Math.abs(u);
                                            if (l > i) {
                                                if (
                                                    (u < 0 && r === e.contentHeight - e.containerHeight) ||
                                                    (u > 0 && 0 === r)
                                                )
                                                    return 0 === window.scrollY && u > 0 && w.isChrome;
                                            } else if (
                                                i > l &&
                                                ((t < 0 && o === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === o))
                                            )
                                                return !0;
                                            return !0;
                                        })(m, h) && u.preventDefault();
                                }
                            }
                            function h() {
                                e.settings.swipeEasing &&
                                    (clearInterval(l),
                                    (l = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(l)
                                            : i.x || i.y
                                              ? Math.abs(i.x) < 0.01 && Math.abs(i.y) < 0.01
                                                  ? clearInterval(l)
                                                  : (a(30 * i.x, 30 * i.y), (i.x *= 0.8), (i.y *= 0.8))
                                              : clearInterval(l);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var u = e.element,
                                n = null,
                                r = !1,
                                o = 0,
                                i = 0,
                                l = 0;
                            function a() {
                                e.onScroll();
                            }
                            function s(n, r, o, i) {
                                void 0 === o && (o = null),
                                    void 0 === i && (i = !1),
                                    R({
                                        scrollableDomEle: u,
                                        direction: 'right',
                                        onRefUpdateCallback: a,
                                        duration: r,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: n,
                                        onCheckForBreakCallback: o,
                                        boundsInfo: {
                                            breakBounds: i,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    });
                            }
                            function c() {
                                if (r) return r;
                            }
                            function d() {
                                l = 0;
                            }
                            function m(r) {
                                if (e.scrollbarXActive) {
                                    var a = n - r.screenX;
                                    (u.scrollLeft += a), (n = r.screenX);
                                    var s = new Date().getTime();
                                    if (((o = (a / (s - i)) * 1e3), (i = s), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === u.scrollLeft || u.scrollLeft === c
                                            ? 0 === l && (l = window.setTimeout(d, 250))
                                            : 0 !== l && (window.clearTimeout(l), (l = 0));
                                    }
                                    v(e, 'x'),
                                        v(e, 'dragging', { immediately: !0 }),
                                        r.stopPropagation(),
                                        r.preventDefault();
                                }
                            }
                            function E(e) {
                                (n = e.screenX),
                                    (r = !0),
                                    requestAnimationFrame(function () {
                                        r = !1;
                                    }),
                                    (i = new Date().getTime());
                            }
                            function h(n) {
                                var r = e.contentWidth - e.containerWidth + t;
                                u.scrollLeft < t
                                    ? s(t - u.scrollLeft, H, c)
                                    : u.scrollLeft > r
                                      ? s(r - u.scrollLeft, H, c)
                                      : new Date().getTime() - i < 100 && s(o / 4, H, c, !0),
                                    p(e, 'x'),
                                    p(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(_),
                                    e.event.unbind(e.ownerDocument, 'mousemove', m);
                            }
                            function A() {
                                r = !0;
                            }
                            u.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((n = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', m),
                                        e.event.once(e.ownerDocument, 'mouseup', h),
                                        e.event.once(e.ownerDocument, 'mousedown', E),
                                        e.event.once(u, 'wheel', A),
                                        e.scrollbarXRail.classList.add(_),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    W = function (e, r) {
                        var o = this;
                        if (
                            (void 0 === r && (r = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var i in ((this.element = e),
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
                            o.settings[i] = r[i];
                        (this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null);
                        var l,
                            E,
                            _ = function () {
                                return e.classList.add(h);
                            },
                            A = function () {
                                return e.classList.remove(h);
                            };
                        (this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((E = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (l = e.scrollLeft < 0),
                                (e.scrollLeft = E),
                                l)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new C()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = n(s('x'))),
                            (this.scrollbarXButtonStart = n(c('x'))),
                            (this.scrollbarXButtonEnd = n(m('x'))),
                            (this.scrollbarXTrack = n(d('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = n(a('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', _),
                            this.event.bind(this.scrollbarX, 'blur', A),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = n(s('y'))),
                            (this.scrollbarYButtonStart = n(c('y'))),
                            (this.scrollbarYButtonEnd = n(m('y'))),
                            (this.scrollbarYTrack = n(d('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = n(a('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', _),
                            this.event.bind(this.scrollbarY, 'blur', A),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            y().then(function () {
                                var n = t(o.scrollbarXRail);
                                (o.scrollbarXBottom = parseInt(n.bottom, 10)),
                                    isNaN(o.scrollbarXBottom)
                                        ? ((o.isScrollbarXUsingBottom = !1), (o.scrollbarXTop = B(n.top)))
                                        : (o.isScrollbarXUsingBottom = !0),
                                    (o.railBorderXWidth = B(n.borderLeftWidth) + B(n.borderRightWidth)),
                                    u(o.scrollbarXRail, { display: 'block' }),
                                    (o.railXMarginWidth = B(n.marginLeft) + B(n.marginRight)),
                                    u(o.scrollbarXRail, { display: '' }),
                                    (o.railXWidth = null),
                                    (o.railXRatio = null);
                                var r = t(o.scrollbarYRail);
                                (o.scrollbarYRight = parseInt(r.right, 10)),
                                    isNaN(o.scrollbarYRight)
                                        ? ((o.isScrollbarYUsingRight = !1), (o.scrollbarYLeft = B(r.left)))
                                        : (o.isScrollbarYUsingRight = !0),
                                    (o.scrollbarYOuterWidth = o.isRtl
                                        ? (function (e) {
                                              var u = t(e);
                                              return (
                                                  B(u.width) +
                                                  B(u.paddingLeft) +
                                                  B(u.paddingRight) +
                                                  B(u.borderLeftWidth) +
                                                  B(u.borderRightWidth)
                                              );
                                          })(o.scrollbarY)
                                        : null),
                                    (o.railBorderYWidth = B(r.borderTopWidth) + B(r.borderBottomWidth)),
                                    u(o.scrollbarYRail, { display: 'block' }),
                                    (o.railYMarginHeight = B(r.marginTop) + B(r.marginBottom)),
                                    u(o.scrollbarXRail, { display: '' }),
                                    u(o.scrollbarYRail, { display: '' }),
                                    (o.railYHeight = null),
                                    (o.railYRatio = null),
                                    (o.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= o.contentWidth - o.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= o.contentHeight - o.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (o.isAlive = !0),
                                    o.settings.handlers.forEach(function (e) {
                                        return N[e](o, o.settings.overScrollWidth);
                                    }),
                                    (o.boundHandleButtonEnter = o.handleMouseEnter.bind(o)),
                                    (o.boundHandleMouseLeave = o.handleMouseLeave.bind(o)),
                                    (o.boundHandleMouseEnter = o.handleMouseEnter.bind(o)),
                                    (o.boundPlayClickSound = o.playClickSound.bind(o)),
                                    o.scrollbarYButtonStart.addEventListener('mousedown', o.boundPlayClickSound),
                                    o.scrollbarYButtonEnd.addEventListener('mousedown', o.boundPlayClickSound),
                                    o.scrollbarXButtonStart.addEventListener('mousedown', o.boundPlayClickSound),
                                    o.scrollbarXButtonEnd.addEventListener('mousedown', o.boundPlayClickSound),
                                    o.scrollbarXButtonStart.addEventListener('mouseenter', o.boundHandleMouseEnter),
                                    o.scrollbarXButtonEnd.addEventListener('mouseenter', o.boundHandleMouseEnter),
                                    o.scrollbarYButtonStart.addEventListener('mouseenter', o.boundHandleButtonEnter),
                                    o.scrollbarYButtonEnd.addEventListener('mouseenter', o.boundHandleButtonEnter),
                                    o.scrollbarYButtonStart.addEventListener('mouseleave', o.boundHandleMouseLeave),
                                    o.scrollbarYButtonEnd.addEventListener('mouseleave', o.boundHandleMouseLeave),
                                    o.scrollbarY.addEventListener('mouseenter', o.boundHandleMouseEnter),
                                    o.scrollbarX.addEventListener('mouseenter', o.boundHandleMouseEnter),
                                    o.scrollbarY.addEventListener('mouseleave', o.boundHandleMouseLeave),
                                    o.scrollbarY.addEventListener('mousedown', o.boundPlayClickSound),
                                    o.scrollbarX.addEventListener('mousedown', o.boundPlayClickSound),
                                    (o.lastScrollTop = Math.floor(e.scrollTop)),
                                    (o.lastScrollLeft = e.scrollLeft),
                                    (o.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (o.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    o.event.bind(o.element, 'scroll', function (e) {
                                        return o.onScroll(e);
                                    }),
                                    o.settings.enableHorizontalScroll &&
                                        o.event.bind(o.element, 'wheel', function (e) {
                                            return o.onWheel(e);
                                        }),
                                    T(o, !1, o.settings.overScrollWidth, !1);
                            });
                    };
                (W.prototype._getAnimationSettings = function (e, t, u, n) {
                    var r = this,
                        o = 0;
                    return (
                        null !== this.element &&
                            (o = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - o,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                T(r, !0, r.settings.overScrollWidth, !1), u && u(e);
                            },
                            onAnimationCompleteCallback: function () {
                                n && n();
                            },
                        }
                    );
                }),
                    (W.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (W.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (W.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (W.prototype.handleMouseLeave = function () {}),
                    (W.prototype.update = function () {
                        var e = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            u(this.scrollbarXRail, { display: 'block' }),
                            u(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                B(t(this.scrollbarXRail).marginLeft) + B(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                B(t(this.scrollbarYRail).marginTop) + B(t(this.scrollbarYRail).marginBottom)),
                            u(this.scrollbarXRail, { display: 'none' }),
                            u(this.scrollbarYRail, { display: 'none' }),
                            y().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    T(e, !1, e.settings.overScrollWidth, !1),
                                    S(e, 'top', 0, !1, !1, !0),
                                    S(e, 'left', 0, !1, !1, !0),
                                    u(e.scrollbarXRail, { display: '' }),
                                    u(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (W.prototype.setScrollLeft = function (e, t, u) {
                        R(this._getAnimationSettings(e, 'right', t, u));
                    }),
                    (W.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (W.prototype.setScrollTop = function (e, t, u) {
                        R(this._getAnimationSettings(e, 'bottom', t, u));
                    }),
                    (W.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (W.prototype.onScroll = function (e) {
                        this.isAlive && T(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (W.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (T(this, !1, this.settings.overScrollWidth, !1),
                            S(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (W.prototype.destroy = function () {
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
                            i(this.scrollbarX),
                            i(this.scrollbarY),
                            i(this.scrollbarXRail),
                            i(this.scrollbarYRail),
                            this.removePsClasses(),
                            (this.element = null),
                            (this.scrollbarX = null),
                            (this.scrollbarY = null),
                            (this.scrollbarXRail = null),
                            (this.scrollbarYRail = null),
                            (this.isAlive = !1));
                    }),
                    (W.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = W);
            },
            527: (e, t, u) => {
                u.r(t), u.d(t, { mouse: () => l, onResize: () => o });
                var n = u(2472),
                    r = u(1176);
                const o = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    l = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${t}`,
                                            l = i[t]((e) => u([e, 'outside']));
                                        function a(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, a),
                                            n(),
                                            () => {
                                                r &&
                                                    (l(),
                                                    window.removeEventListener(o, a),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, o, {
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
            5959: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    });
                var n = u(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                var n = u(5959);
                const r = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                u.d(t, { U: () => r });
                var n = u(2472);
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
            7641: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => o.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => g,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => C,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => f,
                        isFocused: () => v,
                        pxToRem: () => F,
                        remToPx: () => b,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => a,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    r = u(6112),
                    o = u(6538),
                    i = u(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function a(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function s(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function g() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
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
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                u.d(t, { qP: () => o });
                const n = ['args'],
                    r = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, n);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    o = {
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
            5521: (e, t, u) => {
                let n, r;
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
            1358: (e, t, u) => {
                u.d(t, { Z: () => o });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = n.O.view.addModelObserver(e, u, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(o) : (this._views[u] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                r.__instance = void 0;
                const o = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            4179: (e, t, u) => {
                u.d(t, { c1: () => C, Sw: () => o.Z, B0: () => a, ry: () => D });
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
                const r = n;
                var o = u(1358);
                const i = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    l = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
                let a;
                var s;
                ((s = a || (a = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var h = u(5521),
                    _ = u(3138);
                const A = ['args'];
                function F(e, t, u, n, r, o, i) {
                    try {
                        var l = e[o](i),
                            a = l.value;
                    } catch (e) {
                        return void u(e);
                    }
                    l.done ? t(a) : Promise.resolve(a).then(n, r);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (n, r) {
                                        var o = e.apply(t, u);
                                        function i(e) {
                                            F(o, n, r, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            F(o, n, r, i, l, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    p = () => v(a.CLOSE),
                    f = (e, t) => {
                        e.keyCode === h.n.ESCAPE && t();
                    };
                var g = u(7572);
                const C = r.instance,
                    B = {
                        DataTracker: o.Z,
                        ViewModel: g.Z,
                        ViewEventType: a,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: m,
                        DateFormatType: E,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => v(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => v(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            v(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), o) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                l = u.getBoundingClientRect(),
                                s = l.x,
                                c = l.y,
                                d = l.width,
                                m = l.height,
                                E = {
                                    x: _.O.view.pxToRem(s) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            v(a.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: b(E),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, p);
                        },
                        handleViewEvent: v,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: i,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = B;
            },
            2468: (e, t, u) => {
                var n = u(6179),
                    r = u.n(n),
                    o = u(493),
                    i = u.n(o);
                const l = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var a = u(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, t, u) {
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
                        })(t, u),
                        o = Math.min(n, r);
                    return {
                        extraLarge: o === u.extraLarge.weight,
                        large: o === u.large.weight,
                        medium: o === u.medium.weight,
                        small: o === u.small.weight,
                        extraSmall: o === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
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
                })(c || (c = {}));
                const m = a.O.client.getSize('rem'),
                    E = m.width,
                    h = m.height,
                    _ = Object.assign({ width: E, height: h }, d(E, h, s)),
                    A = (0, n.createContext)(_),
                    F = ['children'],
                    b = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, F);
                        const r = (0, n.useContext)(A),
                            o = r.extraLarge,
                            i = r.large,
                            a = r.medium,
                            s = r.small,
                            c = r.extraSmall,
                            d = r.extraLargeWidth,
                            m = r.largeWidth,
                            E = r.mediumWidth,
                            h = r.smallWidth,
                            _ = r.extraSmallWidth,
                            b = r.extraLargeHeight,
                            D = r.largeHeight,
                            v = r.mediumHeight,
                            p = r.smallHeight,
                            f = r.extraSmallHeight,
                            g = { extraLarge: b, large: D, medium: v, small: p, extraSmall: f };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && o) return t;
                            if (u.large && i) return t;
                            if (u.medium && a) return t;
                            if (u.small && s) return t;
                            if (u.extraSmall && c) return t;
                        } else {
                            if (u.extraLargeWidth && d) return l(t, u, g);
                            if (u.largeWidth && m) return l(t, u, g);
                            if (u.mediumWidth && E) return l(t, u, g);
                            if (u.smallWidth && h) return l(t, u, g);
                            if (u.extraSmallWidth && _) return l(t, u, g);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && b) return t;
                                if (u.largeHeight && D) return t;
                                if (u.mediumHeight && v) return t;
                                if (u.smallHeight && p) return t;
                                if (u.extraSmallHeight && f) return t;
                            }
                        }
                        return null;
                    };
                (b.defaultProps = {
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
                    (0, n.memo)(b);
                const D = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    v = (0, n.memo)(({ children: e }) => {
                        const t = (0, n.useContext)(A),
                            u = (0, n.useState)(t),
                            o = u[0],
                            i = u[1],
                            l = (0, n.useCallback)((e, t) => {
                                const u = a.O.view.pxToRem(e),
                                    n = a.O.view.pxToRem(t);
                                i(Object.assign({ width: u, height: n }, d(u, n, s)));
                            }, []);
                        D(() => {
                            engine.on('clientResized', l);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', l), [l]);
                        const c = (0, n.useMemo)(() => Object.assign({}, o), [o]);
                        return r().createElement(A.Provider, { value: c }, e);
                    });
                var p = u(6483),
                    f = u.n(p);
                let g, C;
                var B;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(g || (g = {})),
                    new RegExp(
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
                    ),
                    ((B = C || (C = {})).SHORT_DATE = 'short-date'),
                    (B.SHORT_TIME = 'short-time'),
                    (B.SHORT_DATE_TIME = 'short-date-time'),
                    (B.FULL_DATE = 'full-date'),
                    (B.FULL_DATE_TIME = 'full-date-time'),
                    (B.MONTH = 'month'),
                    (B.MONTH_DATE = 'month-date'),
                    (B.DATE_MONTH = 'date-month'),
                    (B.MONTH_YEAR = 'month-year'),
                    (B.WEEK_DAY = 'week-day'),
                    (B.WEEK_DAY_TIME = 'week-day-time'),
                    (B.YEAR = 'year'),
                    (B.DATE_YEAR = 'date-year');
                var w = u(4179);
                function y(e) {
                    engine.call('PlaySound', e);
                }
                Date.now();
                const L = (e = 1) => {
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
                    },
                    S = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    T = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    k = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    x = w.Sw.instance;
                let M;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(M || (M = {}));
                const P = (e = 'model', t = M.Deep) => {
                        const u = (0, n.useState)(0),
                            r = (u[0], u[1]),
                            o = (0, n.useMemo)(() => L(), []),
                            i = o.caller,
                            l = o.resId,
                            a = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            s = (0, n.useState)(() =>
                                ((e) => {
                                    const t = S(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return T(t) ? t.value : t;
                                })(
                                    ((e) =>
                                        ((e, t) =>
                                            e.split('.').reduce((e, t) => {
                                                const u = S(`${e}.${t}`, window);
                                                return T(u) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                            }))(e))(a),
                                ),
                            ),
                            c = s[0],
                            d = s[1],
                            m = (0, n.useRef)(-1);
                        return (
                            D(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? M.Deep : M.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== M.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === M.Deep
                                                ? (e === c && r((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        n = ((e) => {
                                            const t = ((e) => {
                                                    const t = L(),
                                                        u = t.caller,
                                                        n = t.resId,
                                                        r =
                                                            window.__feature && window.__feature !== u && u
                                                                ? `subViews.${u}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: k(r, ''), resId: n };
                                                })(),
                                                u = t.modelPrefix,
                                                n = e.split('.');
                                            if (n.length > 0) {
                                                const e = [n[0]];
                                                return (
                                                    n.reduce((t, n) => {
                                                        const r = S(k(u, `${t}.${n}`), window);
                                                        return T(r)
                                                            ? (e.push(r.id), `${t}.${n}.value`)
                                                            : (e.push(n), `${t}.${n}`);
                                                    }),
                                                    e.reduce((e, t) => e + '.' + t)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    m.current = x.addCallback(n, u, l, t === M.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== M.None)
                                    return () => {
                                        x.removeCallback(m.current, l);
                                    };
                            }, [l, t]),
                            c
                        );
                    },
                    O =
                        (w.Sw.instance,
                        (e) => {
                            const t = (0, n.useRef)();
                            return (
                                (0, n.useEffect)(() => {
                                    t.current = e;
                                }, [e]),
                                t.current
                            );
                        });
                function H(e, t, u) {
                    const r = (0, n.useContext)(A);
                    let o = Object.entries(r).filter(([e, t]) => !0 === t && e in c);
                    return (
                        u && (o = o.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = o.map((e) =>
                                f()(
                                    t[((e, t) => e + '__' + t)(u, e[0])],
                                    t[
                                        ((e, t) => {
                                            return e + ((u = t)[0].toUpperCase() + u.slice(1));
                                            var u;
                                        })(u, e[0])
                                    ],
                                ),
                            );
                            return (e[u] = f()(t[u], ...n)), e;
                        }, {})
                    );
                }
                const N = 'Title_line_0c',
                    W = (0, n.memo)(({ text: e, classMix: t }) => {
                        const u = f()('Title_base_af', t);
                        return r().createElement(
                            'div',
                            { className: u },
                            r().createElement('div', { className: N }),
                            r().createElement('div', { className: 'Title_text_99' }, e),
                            r().createElement('div', { className: N }),
                        );
                    }),
                    I = [
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
                function Y(e) {
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
                const X = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: w.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    U = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            o = e.onMouseEnter,
                            i = e.onMouseLeave,
                            l = e.onMouseDown,
                            a = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            E = e.decoratorId,
                            h = void 0 === E ? 0 : E,
                            _ = e.isEnabled,
                            A = void 0 === _ || _,
                            F = e.targetId,
                            b = void 0 === F ? 0 : F,
                            D = e.onShow,
                            v = e.onHide,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, I);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            g = (0, n.useMemo)(() => b || L().resId, [b]),
                            C = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (X(u, h, { isMouseEvent: !0, on: !0, arguments: Y(r) }, g),
                                    D && D(),
                                    (f.current.isVisible = !0));
                            }, [u, h, r, g, D]),
                            B = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        X(u, h, { on: !1 }, g),
                                        f.current.isVisible && v && v(),
                                        (f.current.isVisible = !1);
                                }
                            }, [u, h, g, v]),
                            w = (0, n.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = f.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === A && B();
                            }, [A, B]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            ),
                            A
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((f.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                          o && o(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  B(), null == i || i(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === m && B(), null == a || a(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === m && B(), null == l || l(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : t
                        );
                        var y;
                    },
                    j = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                const z = R.views.common.tooltip_window.simple_tooltip_content,
                    K = (e) => {
                        let t = e.children,
                            u = e.body,
                            o = e.header,
                            i = e.note,
                            l = e.alert,
                            a = e.args,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, j);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, a, { body: u, header: o, note: i, alert: l });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [l, u, o, i, a]);
                        return r().createElement(
                            U,
                            V(
                                {
                                    contentId:
                                        ((d = null == a ? void 0 : a.hasHtmlContent),
                                        d ? z.SimpleTooltipHtmlContent('resId') : z.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            t,
                        );
                        var d;
                    },
                    q = (e) => {
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
                    },
                    G = ({ content: e, classMix: t }) => {
                        const u = (0, n.useRef)(null),
                            o = (0, n.useState)(!0),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() =>
                                q(() => {
                                    const e = u.current;
                                    e && e.offsetWidth >= e.scrollWidth && l(!1);
                                }),
                            ),
                            r().createElement(
                                K,
                                { isEnabled: i, body: e },
                                r().createElement('div', { ref: u, className: f()('TextOverflow_base_3b', t) }, e),
                            )
                        );
                    },
                    $ = {
                        base: 'UserListItem_base_13',
                        base__empty: 'UserListItem_base__empty_b4',
                        emptySign: 'UserListItem_emptySign_ae',
                        name: 'UserListItem_name_2a',
                        name__smallHeight: 'UserListItem_name__smallHeight_40',
                        name__current: 'UserListItem_name__current_ab',
                        status: 'UserListItem_status_34',
                        status__notReady: 'UserListItem_status__notReady_ad',
                    },
                    Q = R.strings.battle_royale.preBattle,
                    Z = (0, n.memo)(({ name: e, isReady: t, isCurrentUser: u, classMix: n }) => {
                        const o = !e,
                            i = H(['name'], $),
                            l = f()($.base, n),
                            a = f()(i.name, u && $.name__current),
                            s = f()($.status, !t && $.status__notReady);
                        if (o) {
                            const e = f()($.base, o && $.base__empty, n);
                            return r().createElement(
                                'div',
                                { className: e },
                                r().createElement('div', { className: $.emptySign }),
                            );
                        }
                        return r().createElement(
                            'div',
                            { className: l },
                            r().createElement(G, { content: e || '', classMix: a }),
                            r().createElement('span', { className: s }, t ? Q.userReady() : Q.userNotReady()),
                        );
                    }),
                    J = {
                        base: 'TeamListItem_base_70',
                        base__last: 'TeamListItem_base__last_81',
                        teamNumber: 'TeamListItem_teamNumber_2c',
                        teamNumber__solo: 'TeamListItem_teamNumber__solo_d4',
                        teamNumber__current: 'TeamListItem_teamNumber__current_9e',
                        users: 'TeamListItem_users_b3',
                        users__team: 'TeamListItem_users__team_ce',
                        users__smallHeight: 'TeamListItem_users__smallHeight_ea',
                        userItem: 'TeamListItem_userItem_bd',
                        userItem__smallHeight: 'TeamListItem_userItem__smallHeight_29',
                    };
                function ee() {
                    return (
                        (ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ee.apply(this, arguments)
                    );
                }
                const te = ({ users: e, isLast: t, teamNumber: u }) => {
                        const o = e.length > 1,
                            i = (0, n.useMemo)(() => e.some(({ value: e }) => e.isCurrentUser), [e]),
                            l = H(['userItem', 'users'], J),
                            a = f()(J.base, t && J.base__last),
                            s = f()(J.teamNumber, !o && J.teamNumber__solo, i && !o && J.teamNumber__current),
                            c = f()(l.users, o && J.users__team);
                        return r().createElement(
                            'div',
                            { className: a },
                            r().createElement('div', { className: s }, u),
                            r().createElement(
                                'div',
                                { className: c },
                                e.map(({ value: t }, u) =>
                                    r().createElement(
                                        Z,
                                        ee({ key: u + t.name, classMix: o && u !== e.length - 1 ? l.userItem : '' }, t),
                                    ),
                                ),
                            ),
                        );
                    },
                    ue = 'TeamList_column_5a',
                    ne = (0, n.memo)(() => {
                        const e = P('model.teams'),
                            t = (0, n.useMemo)(
                                () =>
                                    ((e) => {
                                        const t = Math.ceil(e.length / 2);
                                        return [e.slice(0, t), e.slice(t)];
                                    })(e),
                                [e],
                            ),
                            u = t[0],
                            o = t[1];
                        return r().createElement(
                            'div',
                            { className: 'TeamList_base_91' },
                            r().createElement(
                                'div',
                                { className: ue },
                                u.map(({ value: { id: e, users: t } }, n) =>
                                    r().createElement(te, {
                                        key: e,
                                        users: t,
                                        teamNumber: n + 1,
                                        isLast: n === u.length - 1,
                                    }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: ue },
                                o.map(({ value: { id: e, users: t } }, n) =>
                                    r().createElement(te, {
                                        key: e,
                                        users: t,
                                        teamNumber: u.length + n + 1,
                                        isLast: n === o.length - 1,
                                    }),
                                ),
                            ),
                        );
                    }),
                    re = 'UserFooterItem_base_88',
                    oe = R.strings.battle_royale.preBattle,
                    ie = (0, n.memo)(
                        ({ name: e, isReady: t, vehicleType: u, isCurrentUser: o, vehicleName: i, isSingle: l }) => {
                            const a = !e,
                                s = (0, n.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(u)})`,
                                    }),
                                    [u],
                                ),
                                c = f()(re, a && 'UserFooterItem_base__empty_7d'),
                                d = f()('UserFooterItem_text_b7', o && 'UserFooterItem_text__current_ea');
                            return a
                                ? r().createElement(
                                      'div',
                                      { className: c },
                                      r().createElement('div', { className: 'UserFooterItem_emptySign_0c' }),
                                  )
                                : r().createElement(
                                      'div',
                                      { className: re },
                                      !l && r().createElement(G, { content: e, classMix: 'UserFooterItem_name_11' }),
                                      t
                                          ? r().createElement(
                                                'div',
                                                { className: 'UserFooterItem_vehicleName_24' },
                                                r().createElement('div', {
                                                    style: s,
                                                    className: 'UserFooterItem_icon_30',
                                                }),
                                                r().createElement('div', { className: d }, i),
                                            )
                                          : r().createElement(
                                                'div',
                                                { className: 'UserFooterItem_status_0b' },
                                                oe.userNotReady(),
                                            ),
                                  );
                        },
                    );
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ae = R.strings.battle_royale.preBattle,
                    se = (0, n.memo)(({ classMix: e }) => {
                        const t = P('model.currentTeam'),
                            u = f()('TeamFooter_base_ba', e);
                        return r().createElement(
                            'div',
                            { className: u },
                            r().createElement(W, { text: t.length > 1 ? ae.teamFooterTitle() : ae.userFooterTitle() }),
                            r().createElement(
                                'div',
                                { className: 'TeamFooter_team_c4' },
                                t.map(({ value: e }, u) =>
                                    r().createElement(ie, le({ key: e.name + u, isSingle: t.length <= 1 }, e)),
                                ),
                            ),
                        );
                    }),
                    ce = ['children'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const me = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, ce);
                    return r().createElement(
                        U,
                        de(
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
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const he = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(K, t, n);
                    const o = t.contentId,
                        i = t.args,
                        l = null == i ? void 0 : i.contentId;
                    return o || l
                        ? r().createElement(U, Ee({}, t, { contentId: o || l }), n)
                        : r().createElement(me, t, n);
                };
                var _e = u(5521);
                const Ae = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Fe(e = _e.n.NONE, t = Ae, u = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== _e.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                let be, De;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(be || (be = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium');
                    })(De || (De = {}));
                const ve = {
                    base: 'DropDownControl_base_46',
                    base__small: 'DropDownControl_base__small_22',
                    base__medium: 'DropDownControl_base__medium_09',
                    base__over: 'DropDownControl_base__over_e7',
                    base__down: 'DropDownControl_base__down_1c',
                    base__open: 'DropDownControl_base__open_e3',
                    base__focused: 'DropDownControl_base__focused_63',
                    base__selected: 'DropDownControl_base__selected_46',
                    base__disabled: 'DropDownControl_base__disabled_37',
                    label: 'DropDownControl_label_12',
                    label__small: 'DropDownControl_label__small_e7',
                    label__medium: 'DropDownControl_label__medium_0b',
                    label__placeholder: 'DropDownControl_label__placeholder_98',
                    button: 'DropDownControl_button_cb',
                    button__small: 'DropDownControl_button__small_b5',
                    button__medium: 'DropDownControl_button__medium_14',
                    gradient: 'DropDownControl_gradient_b5',
                    disabled: 'DropDownControl_disabled_4e',
                    arrow: 'DropDownControl_arrow_de',
                    arrow__small: 'DropDownControl_arrow__small_77',
                    arrow__medium: 'DropDownControl_arrow__medium_3d',
                    alert: 'DropDownControl_alert_75',
                    blink: 'DropDownControl_blink_68',
                };
                let pe;
                !(function (e) {
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(pe || (pe = {}));
                const fe = (0, n.memo)(
                        ({
                            parentId: e,
                            variant: t = be.Basic,
                            size: u = De.Medium,
                            isOpen: o,
                            placeholder: i = R.strings.common.dropdown.placeholder.select(),
                            label: l = '',
                            classMix: a,
                            onClick: s,
                            soundHover: c,
                            soundClick: d,
                            customControl: m,
                        }) => {
                            const E = (0, n.useState)(pe.Out),
                                h = E[0],
                                _ = E[1],
                                A = (0, n.useState)(!1),
                                F = A[0],
                                b = A[1],
                                D = t === be.Disabled,
                                v = D || t === be.Basic,
                                p = (0, n.useCallback)(() => {
                                    D || (_(pe.Over), c && y(c));
                                }, [D, c]),
                                g = (0, n.useCallback)(() => {
                                    D || (_(pe.Down), d && y(d));
                                }, [D, d]),
                                C = (0, n.useCallback)(() => {
                                    !D && _(pe.Over), !v && b(!0);
                                }, [D, v]),
                                B = (0, n.useCallback)((e) => s && s(e), [s]),
                                w = (0, n.useCallback)(() => _(pe.Out), []);
                            (0, n.useEffect)(() => {
                                v || b(!1);
                            }, [t, v]),
                                (0, n.useEffect)(() => {
                                    D && w();
                                }, [D, w]);
                            const L = f()(
                                ve.base,
                                o && ve.base__open,
                                ve[`base__${h}`],
                                (v || !F) && ve[`base__${t}`],
                                a,
                            );
                            return r().createElement(
                                'div',
                                {
                                    id: e ? `${e}_control` : void 0,
                                    className: L,
                                    onMouseEnter: p,
                                    onMouseUp: C,
                                    onMouseDown: g,
                                    onMouseLeave: w,
                                    onClick: B,
                                },
                                !F && t === be.Alert && r().createElement('div', { className: ve.alert }),
                                r().createElement(
                                    'div',
                                    { className: f()(ve.label, ve[`label__${u}`], !l && ve.label__placeholder) },
                                    m || r().createElement(G, { content: l || i }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f()(ve.button, ve[`button__${u}`]) },
                                    r().createElement('div', { className: f()(ve.arrow, ve[`arrow__${u}`]) }),
                                    h === pe.Over && r().createElement('div', { className: ve.gradient }),
                                    D && r().createElement('div', { className: ve.disabled }),
                                ),
                            );
                        },
                    ),
                    ge = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            u = t.width,
                            n = t.height;
                        return 0 !== u && 0 !== n;
                    };
                var Ce = u(8380),
                    Be = u.n(Ce);
                const we = r().forwardRef((e, t) => {
                        const u = e.offsetLeft,
                            o = void 0 === u ? 0 : u,
                            i = e.offsetTop,
                            l = void 0 === i ? 0 : i,
                            a = e.scrollSettings,
                            s = e.onUpdateActiveAxis,
                            c = e.onHorizontalScroll,
                            d = e.onVerticalScroll,
                            m = e.onOverScrollAtBeginning,
                            E = e.onOverScrollAtEnd,
                            h = e.wrapperIndent,
                            _ = e.verticalScrollbarMargin,
                            A = e.isMultipleScroll,
                            F = e.scrollAreaContainer,
                            b = e.children,
                            D = e.classMix,
                            v = e.onScrollLeftHandled,
                            p = (0, n.useState)(!1),
                            g = p[0],
                            C = p[1],
                            B = (0, n.useState)(),
                            w = B[0],
                            y = B[1],
                            L = (0, n.useState)(),
                            S = L[0],
                            T = L[1],
                            k = (0, n.useRef)(null),
                            x = (0, n.useCallback)(() => {
                                w &&
                                    s &&
                                    s({ x: w.scrollbarXActive, y: w.scrollbarYActive }, { x: w.reach.x, y: w.reach.y });
                            }, [s, w]),
                            M = (0, n.useCallback)(() => w, [w]),
                            R = (0, n.useCallback)(() => {
                                w && w.update();
                            }, [w]),
                            P = (0, n.useCallback)(
                                (e, t, u) => {
                                    w && (w.setScrollLeft(e, t, u), v && v(e, w.contentWidth - w.containerWidth));
                                },
                                [w, v],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    w && (w.setScrollLeftImmediately(e), v && v(e, w.contentWidth - w.containerWidth));
                                },
                                [w, v],
                            ),
                            H = (0, n.useCallback)(
                                (e, t, u) => {
                                    w && w.setScrollTop(e, t, u);
                                },
                                [w],
                            ),
                            N = (0, n.useCallback)(
                                (e) => {
                                    w && w.setScrollTopImmediately(e);
                                },
                                [w],
                            ),
                            W = (0, n.useCallback)(() => {
                                if (S && c && w) {
                                    const e = { scrollPosition: S.scrollLeft < 0 ? 0 : S.scrollLeft, reach: w.reach.x };
                                    c(e);
                                }
                            }, [c, S, w]),
                            I = (0, n.useCallback)(() => {
                                if (S && d && w) {
                                    const e = { scrollPosition: S.scrollTop, reach: w.reach.y };
                                    d(e);
                                }
                            }, [d, S, w]),
                            Y = (0, n.useCallback)(() => {
                                m && m();
                            }, [m]),
                            X = (0, n.useCallback)(() => {
                                E && E();
                            }, [E]),
                            U = (0, n.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), T(e);
                                },
                                [t],
                            ),
                            j = (0, n.useCallback)(() => {
                                w &&
                                    (w.update(),
                                    (k.current = q(() => {
                                        x();
                                    })));
                            }, [w, x]),
                            V = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (w && S)
                                return (
                                    document.addEventListener('mousemove', V),
                                    window.addEventListener('resize', j),
                                    S.addEventListener('ps-scroll-x', W),
                                    S.addEventListener('ps-scroll-y', I),
                                    S.addEventListener('over-scroll-beginning', Y),
                                    S.addEventListener('over-scroll-ending', X),
                                    C(!0),
                                    () => {
                                        window.removeEventListener('resize', j),
                                            document.removeEventListener('mousemove', V),
                                            S &&
                                                (S.removeEventListener('ps-scroll-x', W),
                                                S.removeEventListener('ps-scroll-y', I),
                                                S.removeEventListener('over-scroll-beginning', Y),
                                                S.removeEventListener('over-scroll-ending', X));
                                    }
                                );
                        }, [V, W, Y, X, j, S, w, I]);
                        const z = (0, n.useRef)(S || null);
                        z.current = S || null;
                        const K = ((e) => {
                            const t = (0, n.useState)(ge(e ? e.current : null)),
                                u = t[0],
                                r = t[1];
                            return (
                                (0, n.useEffect)(() => {
                                    let t = 0;
                                    const u = () => {
                                        t = requestAnimationFrame(() => {
                                            ge(e ? e.current : null) ? r(!0) : u();
                                        });
                                    };
                                    return (
                                        u(),
                                        () => {
                                            cancelAnimationFrame(t);
                                        }
                                    );
                                }, [e]),
                                (0, n.useEffect)(() => () => r(!1), [e]),
                                u
                            );
                        })(z);
                        (0, n.useEffect)(
                            () => (
                                !w && S && K && y(new (Be())(S, Object.assign({}, a))),
                                () => {
                                    w && (w.destroy(), y(void 0));
                                }
                            ),
                            [S, K, a, w],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == k.current || k.current();
                                },
                                [],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    q(() => {
                                        w && x();
                                    }),
                                [x, w],
                            ),
                            (0, n.useEffect)(() => {
                                o > 0 && O(o);
                            }, [o, O]),
                            (0, n.useEffect)(() => {
                                l > 0 && N(l);
                            }, [l, N]),
                            (0, n.useEffect)(() => {
                                F &&
                                    ((F.setScrollLeft = P),
                                    (F.setScrollTop = H),
                                    (F.setScrollLeftImmediately = O),
                                    (F.setScrollTopImmediately = N),
                                    (F.updateScrollArea = R),
                                    (F.getScrollbar = M));
                            }, [F, P, O, H, N, R, M]);
                        const G = f()(
                            'ScrollArea_base_47',
                            {
                                ScrollArea_base__scrollIndent_1d: h,
                                ScrollArea_base__hidden_ec: !g,
                                ScrollArea_base__verticalScrollbarMargin_50: _,
                                ScrollArea_base__multiple_44: A,
                            },
                            D,
                        );
                        return r().createElement('div', { className: G, ref: U }, b);
                    }),
                    ye = [
                        'children',
                        'isEnabled',
                        'selectedItemId',
                        'scrollAreaKey',
                        'withCompleteTrigger',
                        'containerClasses',
                    ];
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const Se = (e) => {
                        let t = e.children,
                            u = e.isEnabled,
                            o = void 0 === u || u,
                            i = e.selectedItemId,
                            l = e.scrollAreaKey,
                            a = void 0 === l ? 'scrollArea' : l,
                            s = e.withCompleteTrigger,
                            c = void 0 !== s && s,
                            d = e.containerClasses,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, ye);
                        const E = (0, n.useState)(!1),
                            h = E[0],
                            _ = E[1],
                            A = (0, n.useRef)({}),
                            F = (0, n.useRef)(null),
                            b = (0, n.useRef)(null),
                            D = (0, n.useRef)(null),
                            v = (0, n.useCallback)(() => {
                                _(!0);
                            }, []),
                            p = (0, n.useCallback)(() => {
                                _(!1);
                            }, []),
                            f = (0, n.useCallback)(() => {
                                const e = D.current,
                                    t = F.current,
                                    u = A.current;
                                if (e && u && t) {
                                    const n = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    u.setScrollTop(n, void 0, c ? v : void 0);
                                }
                            }, [v, c]);
                        (0, n.useEffect)(() => {
                            if (o && null !== i) return q(f);
                        }, [a, f, i, o]);
                        const g = !(!b.current || !b.current.scrollbar) && b.current.scrollbar.scrollbarYActive,
                            C = {
                                scrollContainerRef: F,
                                selectedItemRef: D,
                                selectedItemId: i,
                                isScrollComplete: h,
                                scrollbarActive: g,
                                onScrollAnimationComplete: p,
                            },
                            B = (0, n.cloneElement)(t, C);
                        return r().createElement(
                            'div',
                            { className: d, ref: F },
                            r().createElement(we, Le({ ref: b, key: a, scrollAreaContainer: A.current }, m), B),
                        );
                    },
                    Te = {
                        base: 'DropDownItem_base_5e',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    ke = ['size', 'classMix', 'onClick', 'itemRenderer'],
                    xe = (0, n.memo)((e) => {
                        let t = e.size,
                            u = e.classMix,
                            o = e.onClick,
                            i = e.itemRenderer,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, ke);
                        const a = l.id,
                            s = l.isSelected,
                            c = l.isDisabled,
                            d = l.label,
                            m = l.soundHover,
                            E = l.soundClick,
                            h = (0, n.useCallback)(
                                (e) => {
                                    c || (o && o(e, a));
                                },
                                [a, c, o],
                            ),
                            _ = (0, n.useCallback)(() => {
                                c || (m && y(m));
                            }, [c, m]),
                            A = (0, n.useCallback)(() => {
                                c || (E && y(E));
                            }, [c, E]),
                            F = f()(Te.base, t && Te[`base__${t}`], s && Te.base__selected, c && Te.base__disabled, u);
                        return r().createElement(
                            'div',
                            { className: F, onMouseEnter: _, onMouseDown: A, onClick: h },
                            i ? i(l) : d,
                        );
                    }),
                    Me = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const Pe = ({
                        size: e,
                        items: t,
                        selectedIds: u,
                        selectedItemId: n,
                        selectedItemRef: o,
                        onClick: i,
                        parentId: l,
                        soundHover: a,
                        soundClick: s,
                        itemClassMix: c,
                        itemRenderer: d,
                        scrollbarActive: m,
                    }) =>
                        r().createElement(
                            'div',
                            { className: f()(Me.base, m && Me.base__withScroll) },
                            t.map((t) => {
                                const m = `${l}_${t.id}`;
                                return r().createElement(
                                    'div',
                                    { id: l ? m : void 0, key: m, ref: t.id === n ? o : null },
                                    r().createElement(
                                        xe,
                                        Re({ size: e, soundHover: a, soundClick: s, classMix: c, itemRenderer: d }, t, {
                                            onClick: i,
                                            isSelected: u.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Oe = {
                        base: 'DropDownList_base_62',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                        scrollMix: 'DropDownList_scrollMix_45',
                    },
                    He = {
                        handlers: ['click-rail', 'keyboard', 'wheel', 'drag-thumb'],
                        wheelSpeed: 6,
                        suppressScrollX: !0,
                        animationDuration: 300,
                        minScrollbarLength: 20,
                    },
                    Ne = ({
                        parentId: e,
                        size: t = De.Medium,
                        items: u,
                        selectedIds: o,
                        isOpen: i,
                        autoScroll: l,
                        classMix: a,
                        itemClassMix: s,
                        itemRenderer: c,
                        onClick: d,
                        soundHover: m,
                        soundClick: E,
                    }) => {
                        const h = (0, n.useState)(null),
                            _ = h[0],
                            A = h[1],
                            F = O(i);
                        (0, n.useEffect)(() => {
                            if (i && !F) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const u = e.find((e) => t.includes(e.id));
                                    return u ? u.id : null;
                                })(u, o);
                                null !== e && A(e);
                            }
                            i || A(null);
                        }, [i, u, o, F]);
                        const b = e ? `${e}_list` : void 0;
                        return r().createElement(
                            'div',
                            { id: b, className: f()(Oe.base, Oe[`base__${t}`], a) },
                            r().createElement(
                                Se,
                                { selectedItemId: _, isEnabled: l, scrollSettings: He, classMix: Oe.scrollMix },
                                r().createElement(Pe, {
                                    parentId: e,
                                    items: u,
                                    size: t,
                                    selectedIds: o,
                                    onClick: d,
                                    soundHover: m,
                                    soundClick: E,
                                    itemClassMix: s,
                                    itemRenderer: c,
                                }),
                            ),
                        );
                    },
                    We = {
                        base: 'PureDropDown_base_fc',
                        base__small: 'PureDropDown_base__small_a6',
                        base__medium: 'PureDropDown_base__medium_05',
                        control__down: 'PureDropDown_control__down_18',
                        list: 'PureDropDown_list_28',
                        list__up: 'PureDropDown_list__up_a1',
                        list__down: 'PureDropDown_list__down_c4',
                        list__under: 'PureDropDown_list__under_64',
                        list__above: 'PureDropDown_list__above_c8',
                    },
                    Ie = (0, n.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: u,
                            selected: o = [],
                            variant: i = be.Basic,
                            size: l = De.Medium,
                            multiple: a = !1,
                            autoScroll: s = !0,
                            placeholder: c,
                            classMix: d,
                            controlRenderer: m,
                            itemRenderer: E,
                            open: h,
                            tooltipArgs: _,
                            onChanges: A,
                            onOpen: F,
                            onClose: b,
                            onClick: D,
                            onClickOutside: v,
                            onMouseEnter: p,
                            onMouseDown: g,
                            onMouseUp: C,
                            onMouseLeave: B,
                            soundHover: y = 'highlight',
                            soundClick: L = 'play',
                            soundItemHover: S,
                            soundItemClick: T,
                        }) => {
                            const k = (0, n.useRef)(null),
                                x = (0, n.useRef)(null),
                                M = (0, n.useRef)({ open: !1, listAbove: !1 }),
                                R = (0, n.useState)(!1),
                                P = R[0],
                                O = R[1],
                                H = (0, n.useState)(!1),
                                N = H[0],
                                W = H[1],
                                I = (0, n.useState)(window.innerHeight),
                                Y = I[0],
                                X = I[1],
                                U = ((e, t) => {
                                    const u = Array.isArray(e) ? e : [e];
                                    return !t && u.length > 1 ? u.slice(0, 1) : u;
                                })(o, a),
                                j = i !== be.Disabled,
                                V = void 0 === h,
                                z = Boolean(V ? P : h);
                            var K, G;
                            (K = () => {
                                X(window.innerHeight);
                            }),
                                (G = []),
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', K),
                                        () => window.removeEventListener('resize', K)
                                    ),
                                    G,
                                );
                            const $ = (0, n.useCallback)(() => {
                                M.current.open && ((M.current.open = !1), O(!1), b && b());
                            }, [b]);
                            Fe(z ? _e.n.ESCAPE : _e.n.NONE, $, z);
                            const Q = (0, n.useCallback)(() => {
                                v && v(), V && (O(!1), (M.current.open = !1), b && b());
                            }, [v, b, V]);
                            (0, n.useEffect)(() => {
                                const e = k.current;
                                if (e && z)
                                    return (
                                        w.c1.register(e, Q),
                                        () => {
                                            w.c1.unregister(e, Q);
                                        }
                                    );
                            }, [z, Q]),
                                (0, n.useEffect)(() => {
                                    void 0 !== h && (M.current.open = h);
                                }, [h]);
                            const Z = (0, n.useCallback)(() => {
                                if (!k.current || !x.current) return;
                                const e = t && t.current,
                                    u = e ? e.getBoundingClientRect().bottom : Y,
                                    n =
                                        k.current.getBoundingClientRect().bottom +
                                            x.current.getBoundingClientRect().height >
                                        u;
                                n !== M.current.listAbove && ((M.current.listAbove = n), W(n));
                            }, [t, Y]);
                            (0, n.useEffect)(() => q(Z), [Z, l, u.length]);
                            const J = (0, n.useCallback)(
                                    (e) => {
                                        const t = U.findIndex((t) => t === e) > -1;
                                        let u = [];
                                        (u = a ? (t ? U.filter((t) => t !== e) : [e, ...U]) : t ? [] : [e]), A && A(u);
                                    },
                                    [a, A, U],
                                ),
                                ee = (0, n.useCallback)(() => {
                                    V &&
                                        ((M.current.open = !M.current.open),
                                        O(M.current.open),
                                        M.current.open ? F && F() : b && b());
                                }, [V, F, b]),
                                te = (0, n.useCallback)(
                                    (e) => {
                                        j && ee(), D && D(e);
                                    },
                                    [j, D, ee],
                                ),
                                ue = (0, n.useCallback)(
                                    (e, t) => {
                                        D && D(e, t), J(t), !a && ee();
                                    },
                                    [D, a, ee, J],
                                ),
                                ne = (0, n.useCallback)((e) => p && p(e), [p]),
                                re = (0, n.useCallback)((e) => C && C(e), [C]),
                                oe = (0, n.useCallback)((e) => g && g(e), [g]),
                                ie = (0, n.useCallback)((e) => B && B(e), [B]),
                                le = (0, n.useMemo)(
                                    () =>
                                        u
                                            .filter((e) => U.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [u, U],
                                ),
                                ae = (0, n.useMemo)(() => u.filter((e) => U.includes(e.id)), [u, U]),
                                se = m ? m(ae) : void 0;
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: k,
                                    className: f()(We.base, We[`base__${l}`], d && d.base),
                                    onMouseEnter: ne,
                                    onMouseUp: re,
                                    onMouseDown: oe,
                                    onMouseLeave: ie,
                                },
                                r().createElement(
                                    'div',
                                    { className: f()(We.control, z && We.control__down) },
                                    r().createElement(
                                        he,
                                        { tooltipArgs: _ },
                                        r().createElement(fe, {
                                            parentId: e,
                                            size: l,
                                            variant: i,
                                            isOpen: z,
                                            placeholder: c,
                                            label: le,
                                            classMix: d && d.control,
                                            onClick: te,
                                            soundHover: y,
                                            soundClick: L,
                                            customControl: se,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        ref: x,
                                        className: f()(
                                            We.list,
                                            z ? We.list__down : We.list__up,
                                            N ? We.list__above : We.list__under,
                                        ),
                                    },
                                    r().createElement(Ne, {
                                        parentId: e,
                                        size: l,
                                        items: u,
                                        selectedIds: U,
                                        isOpen: z,
                                        autoScroll: s,
                                        classMix: d && d.list,
                                        itemClassMix: d && d.item,
                                        itemRenderer: E,
                                        onClick: ue,
                                        soundHover: S || y,
                                        soundClick: T || L,
                                    }),
                                ),
                            );
                        },
                    ),
                    Ye = {
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
                let Xe, Ue;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Xe || (Xe = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Ue || (Ue = {}));
                const je = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: o,
                    disabled: i,
                    mixClass: l,
                    soundHover: a,
                    soundClick: s,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: E,
                    onMouseLeave: h,
                    onClick: _,
                }) => {
                    const A = (0, n.useRef)(null),
                        F = (0, n.useState)(u),
                        b = F[0],
                        D = F[1],
                        v = (0, n.useState)(!1),
                        p = v[0],
                        g = v[1],
                        C = (0, n.useState)(!1),
                        B = C[0],
                        w = C[1],
                        L = (0, n.useCallback)(() => {
                            i || (A.current && (A.current.focus(), D(!0)));
                        }, [i]),
                        S = (0, n.useCallback)(
                            (e) => {
                                b && null !== A.current && !A.current.contains(e.target) && D(!1);
                            },
                            [b],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                i || (_ && _(e));
                            },
                            [i, _],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                i || (null !== a && y(a), c && c(e), w(!0));
                            },
                            [i, a, c],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                i || (E && E(e), g(!1));
                            },
                            [i, E],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                i || (null !== s && y(s), m && m(e), u && L(), g(!0));
                            },
                            [i, s, m, L, u],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                i || (h && h(e), g(!1));
                            },
                            [i, h],
                        ),
                        H = f()(
                            Ye.base,
                            Ye[`base__${o}`],
                            {
                                [Ye.base__disabled]: i,
                                [Ye[`base__${t}`]]: t,
                                [Ye.base__focus]: b,
                                [Ye.base__highlightActive]: p,
                                [Ye.base__firstHover]: B,
                            },
                            l,
                        ),
                        N = f()(Ye.state, Ye.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, n.useEffect)(() => {
                            D(u);
                        }, [u]),
                        r().createElement(
                            'div',
                            {
                                ref: A,
                                className: H,
                                onMouseEnter: k,
                                onMouseMove: x,
                                onMouseUp: M,
                                onMouseDown: P,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            o !== Xe.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Ye.back }),
                                    r().createElement('span', { className: Ye.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: N },
                                r().createElement('span', { className: Ye.stateDisabled }),
                                r().createElement('span', { className: Ye.stateHighlightHover }),
                                r().createElement('span', { className: Ye.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Ye.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                je.defaultProps = { type: Xe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ve = (0, n.memo)(je),
                    ze = {
                        base: 'SpectatorFooter_base_2f',
                        title: 'SpectatorFooter_title_bb',
                        dropDown: 'SpectatorFooter_dropDown_53',
                        button: 'SpectatorFooter_button_94',
                    },
                    Ke = R.strings.battle_royale.preBattle,
                    qe = (0, n.memo)(({ classMix: e }) => {
                        const t = P('model', M.None).onBattleClick,
                            u = P('model.maps'),
                            o = (0, n.useRef)(null),
                            i = (0, n.useMemo)(() => u.map(({ value: e }) => Object.assign({}, e)), [u]),
                            l = (0, n.useState)(i.length ? i[0].id : '0'),
                            a = l[0],
                            s = l[1],
                            c = (0, n.useCallback)(() => t({ mapId: a }), [t, a]),
                            d = (0, n.useCallback)((e) => {
                                e[0] && s(String(e[0]));
                            }, []),
                            m = f()(ze.base, e),
                            E = (0, n.useMemo)(() => ({ base: ze.dropDown, control: ze.dropDownControl }), []);
                        return r().createElement(
                            'div',
                            { className: m, ref: o },
                            r().createElement('div', { className: ze.title }, Ke.dropDownTitle()),
                            i.length &&
                                r().createElement(Ie, {
                                    selected: a,
                                    items: i,
                                    onChanges: d,
                                    classMix: E,
                                    containerRef: o,
                                }),
                            r().createElement(
                                Ve,
                                { onClick: c, type: Xe.main, size: Ue.medium, mixClass: ze.button },
                                Ke.buttonTitle(),
                            ),
                        );
                    }),
                    Ge = {
                        base: 'PreBattleViewApp_base_12',
                        base__spectator: 'PreBattleViewApp_base__spectator_70',
                        title: 'PreBattleViewApp_title_db',
                        title__smallHeight: 'PreBattleViewApp_title__smallHeight_6b',
                        title__mediumHeight: 'PreBattleViewApp_title__mediumHeight_ca',
                        bg: 'PreBattleViewApp_bg_08',
                        listTitle: 'PreBattleViewApp_listTitle_48',
                        listTitle__smallHeight: 'PreBattleViewApp_listTitle__smallHeight_78',
                        listTitle__mediumHeight: 'PreBattleViewApp_listTitle__mediumHeight_8d',
                        content: 'PreBattleViewApp_content_0d',
                        content__smallHeight: 'PreBattleViewApp_content__smallHeight_2f',
                        content__mediumHeight: 'PreBattleViewApp_content__mediumHeight_eb',
                        spectatorFooter: 'PreBattleViewApp_spectatorFooter_f0',
                        spectatorFooter__largeHeight: 'PreBattleViewApp_spectatorFooter__largeHeight_41',
                        spectatorFooter__mediumHeight: 'PreBattleViewApp_spectatorFooter__mediumHeight_5e',
                        spectatorFooter__smallHeight: 'PreBattleViewApp_spectatorFooter__smallHeight_80',
                        teamFooter: 'PreBattleViewApp_teamFooter_f2',
                        teamFooter__smallHeight: 'PreBattleViewApp_teamFooter__smallHeight_19',
                        teamFooter__mediumHeight: 'PreBattleViewApp_teamFooter__mediumHeight_e7',
                    },
                    $e = R.strings.battle_royale.preBattle,
                    Qe = ['title', 'listTitle', 'spectatorFooter', 'teamFooter', 'content'],
                    Ze = () => {
                        const e = P('model'),
                            t = e.isSpectator,
                            u = e.title,
                            n = H(Qe, Ge),
                            o = f()(Ge.base, t && Ge.base__spectator);
                        return r().createElement(
                            'div',
                            { className: o },
                            r().createElement('div', { className: Ge.bg }),
                            r().createElement('div', { className: n.title }, u),
                            r().createElement(
                                'div',
                                { className: n.content },
                                r().createElement(W, { text: $e.listTitle(), classMix: n.listTitle }),
                                r().createElement(ne, null),
                                !t && r().createElement(se, { classMix: n.teamFooter }),
                            ),
                            t && r().createElement(qe, { classMix: n.spectatorFooter }),
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        r().createElement(v, null, r().createElement(Ze, null)),
                        document.getElementById('root'),
                    );
                });
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
                var r = 1 / 0;
                for (a = 0; a < deferred.length; a++) {
                    for (var [t, u, n] = deferred[a], o = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(a--, 1);
                        var l = u();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var a = deferred.length; a > 0 && deferred[a - 1][2] > n; a--) deferred[a] = deferred[a - 1];
            deferred[a] = [t, u, n];
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
        (__webpack_require__.j = 365),
        (() => {
            var e = { 365: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [o, i, l] = u,
                        a = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (l) var s = l(__webpack_require__);
                    }
                    for (t && t(u); a < o.length; a++)
                        (r = o[a]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(s);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2468));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
