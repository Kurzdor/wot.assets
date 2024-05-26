/*! For license information please see ExchangeCoinsView.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
            8380: (e) => {
                'use strict';
                function u(e) {
                    return getComputedStyle(e);
                }
                function t(e, u) {
                    for (var t in u) {
                        var n = u[t];
                        'number' == typeof n && (n += 'px'), (e.style[t] = n);
                    }
                    return e;
                }
                function n(e) {
                    var u = document.createElement('div');
                    return (u.className = e), u;
                }
                var r =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function i(e, u) {
                    if (!r) throw new Error('No element matching method supported');
                    return r.call(e, u);
                }
                function o(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function s(e, u) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return i(e, u);
                    });
                }
                var l = function (e) {
                        return 'ps__thumb-' + e;
                    },
                    a = function (e) {
                        return 'ps__rail-' + e;
                    },
                    c = function (e) {
                        return 'ps__button-start-' + e;
                    },
                    d = function (e) {
                        return 'ps__track_' + e;
                    },
                    E = function (e) {
                        return 'ps__button-end-' + e;
                    },
                    m = 'ps__child--consume',
                    A = 'ps--focus',
                    _ = 'ps--clicking',
                    h = function (e) {
                        return 'ps--active-' + e;
                    },
                    D = function (e) {
                        return 'ps--scrolling-' + e;
                    },
                    F = { x: null, y: null },
                    p = { immediately: !1 };
                function C(e, u, t) {
                    void 0 === t && (t = {});
                    var n = e.element.classList,
                        r = D(u);
                    n.contains(r) ? clearTimeout(F[u]) : n.add(r);
                }
                function b(e, u, t) {
                    void 0 === t && (t = {}),
                        Object.assign(p, t).immediately
                            ? e.isAlive && e.element.classList.remove(D(u))
                            : (F[u] = setTimeout(function () {
                                  return e.isAlive && e.element.classList.remove(D(u));
                              }, e.settings.scrollingThreshold));
                }
                var B = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    g = { isEmpty: { configurable: !0 } };
                (B.prototype.bind = function (e, u) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(u),
                        this.element.addEventListener(e, u, !1);
                }),
                    (B.prototype.unbind = function (e, u) {
                        var t = this;
                        this.handlers[e] = this.handlers[e].filter(function (n) {
                            return !(!u || n === u) || (t.element.removeEventListener(e, n, !1), !1);
                        });
                    }),
                    (B.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (g.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (u) {
                            return 0 === e.handlers[u].length;
                        });
                    }),
                    Object.defineProperties(B.prototype, g);
                var f = function () {
                    this.eventElements = [];
                };
                function v(e) {
                    return parseInt(e, 10) || 0;
                }
                (f.prototype.eventElement = function (e) {
                    var u = this.eventElements.filter(function (u) {
                        return u.element === e;
                    })[0];
                    return u || ((u = new B(e)), this.eventElements.push(u)), u;
                }),
                    (f.prototype.bind = function (e, u, t) {
                        this.eventElement(e).bind(u, t);
                    }),
                    (f.prototype.unbind = function (e, u, t) {
                        var n = this.eventElement(e);
                        n.unbind(u, t), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
                    }),
                    (f.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (f.prototype.once = function (e, u, t) {
                        var n = this.eventElement(e);
                        n.bind(u, function e(r) {
                            n.unbind(u, e), t(r);
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
                    var u = document.createEvent('CustomEvent');
                    return u.initCustomEvent(e, !1, !1, void 0), u;
                }
                var x = function (e, u, t, n, r, i) {
                        var o;
                        if ((void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === i && (i = !1), 'top' === u))
                            o = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                        else {
                            if ('left' !== u) throw new Error('A proper axis should be provided');
                            o = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                        }
                        !(function (e, u, t, n, r, i) {
                            var o = t[0],
                                s = t[1],
                                l = t[2],
                                a = t[3],
                                c = t[4],
                                d = t[5];
                            void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === i && (i = !1);
                            var E = e.element;
                            e.reach &&
                                ((e.reach[a] = null),
                                E[l] < 1 && (e.reach[a] = 'start'),
                                E[l] > e[o] - e[s] - 1 && (e.reach[a] = 'end'),
                                u &&
                                    !r &&
                                    (E.dispatchEvent(S('ps-scroll-' + a)),
                                    u < 0
                                        ? E.dispatchEvent(S('ps-scroll-' + c))
                                        : u > 0 && E.dispatchEvent(S('ps-scroll-' + d)),
                                    n &&
                                        (function (e, u) {
                                            C(e, u), b(e, u);
                                        })(e, a)),
                                e.reach[a] && (u || i) && E.dispatchEvent(S('ps-' + a + '-reach-' + e.reach[a])));
                        })(e, t, o, n, r, i);
                    },
                    L = function (e, u, n, r) {
                        void 0 === u && (u = !1), void 0 === n && (n = 0), void 0 === r && (r = !1);
                        var i = e.element;
                        if (i) {
                            if (
                                ((e.containerWidth = Math.round(i.getBoundingClientRect().width)),
                                (e.containerHeight = Math.round(i.getBoundingClientRect().height)),
                                (e.contentWidth = Math.round(i.scrollWidth) - 2 * n),
                                (e.contentHeight = Math.round(i.scrollHeight)),
                                !r)
                            ) {
                                e.contentWidth = Math.round(i.scrollWidth) - 2 * n;
                                var l = e.contentWidth - e.containerWidth + n;
                                i.scrollLeft < n ? (i.scrollLeft = n) : i.scrollLeft > l && (i.scrollLeft = l);
                            }
                            var c = Math.floor(i.scrollTop),
                                d = Math.floor(i.scrollLeft) - n,
                                E = parseFloat(getComputedStyle(document.documentElement).fontSize);
                            i.contains(e.scrollbarXRail) ||
                                (s(i, a('x')).forEach(function (e) {
                                    return o(e);
                                }),
                                i.appendChild(e.scrollbarXRail)),
                                i.contains(e.scrollbarYRail) ||
                                    (s(i, a('y')).forEach(function (e) {
                                        return o(e);
                                    }),
                                    i.appendChild(e.scrollbarYRail)),
                                !e.settings.suppressScrollX &&
                                e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                    ? ((e.scrollbarXActive = !0),
                                      (e.railXWidth = e.containerWidth - e.railXMarginWidth * E - 15 * E),
                                      (e.railXRatio = e.containerWidth / e.railXWidth),
                                      (e.scrollbarXWidth = M(e, v((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                      (e.scrollbarXLeft = v(
                                          ((e.negativeScrollAdjustment + d) * (e.railXWidth - e.scrollbarXWidth)) /
                                              (e.contentWidth - e.containerWidth),
                                      )),
                                      e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                    : (e.scrollbarXActive = !1),
                                !e.settings.suppressScrollY &&
                                e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                    ? ((e.scrollbarYActive = !0),
                                      (e.railYHeight = e.containerHeight - e.railYMarginHeight * E - 15 * E),
                                      (e.railYRatio = e.containerHeight / e.railYHeight),
                                      (e.scrollbarYHeight = M(
                                          e,
                                          v((e.railYHeight * e.containerHeight) / e.contentHeight),
                                      )),
                                      (e.scrollbarYTop = v(
                                          (c * (e.railYHeight - e.scrollbarYHeight)) /
                                              (e.contentHeight - e.containerHeight),
                                      )))
                                    : (e.scrollbarYActive = !1),
                                e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                    (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                                e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                    (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                                (function (e, u, n) {
                                    var r = { width: u.railXWidth },
                                        i = Math.floor(e.scrollTop);
                                    u.isRtl
                                        ? (r.left =
                                              u.negativeScrollAdjustment +
                                              e.scrollLeft +
                                              u.containerWidth -
                                              u.contentWidth)
                                        : (r.left = e.scrollLeft),
                                        u.isScrollbarXUsingBottom
                                            ? (r.bottom = u.scrollbarXBottom - i)
                                            : (r.top = u.scrollbarXTop + i),
                                        t(u.scrollbarXRail, r);
                                    var o = { top: i, height: u.railYHeight };
                                    u.isScrollbarYUsingRight
                                        ? u.isRtl
                                            ? (o.right =
                                                  u.contentWidth -
                                                  (u.negativeScrollAdjustment + e.scrollLeft) -
                                                  u.scrollbarYRight -
                                                  u.scrollbarYOuterWidth)
                                            : (o.right = u.scrollbarYRight - e.scrollLeft)
                                        : u.isRtl
                                          ? (o.left =
                                                u.negativeScrollAdjustment +
                                                e.scrollLeft +
                                                2 * u.containerWidth -
                                                u.contentWidth -
                                                u.scrollbarYLeft -
                                                u.scrollbarYOuterWidth)
                                          : (o.left = u.scrollbarYLeft + e.scrollLeft),
                                        t(u.scrollbarYRail, o),
                                        t(u.scrollbarX, {
                                            left: u.scrollbarXLeft,
                                            width: u.scrollbarXWidth - u.railBorderXWidth * n,
                                        }),
                                        t(u.scrollbarY, {
                                            top: u.scrollbarYTop,
                                            height: u.scrollbarYHeight - u.railBorderYWidth * n,
                                        });
                                })(i, e, E),
                                e.scrollbarXButtonStart.classList.toggle('disabled', d < 1),
                                e.scrollbarXButtonEnd.classList.toggle(
                                    'disabled',
                                    d + e.containerWidth >= e.contentWidth,
                                ),
                                e.scrollbarYButtonStart.classList.toggle('disabled', i.scrollTop < 1),
                                e.scrollbarYButtonEnd.classList.toggle(
                                    'disabled',
                                    i.scrollTop + e.containerHeight >= e.contentHeight,
                                ),
                                e.scrollbarXActive
                                    ? (i.classList.add(h('x')), x(e, 'left', d - e.lastScrollLeft, !0, u))
                                    : (i.classList.remove(h('x')),
                                      (e.scrollbarXWidth = 0),
                                      (e.scrollbarXLeft = 0),
                                      (i.scrollLeft = 0)),
                                e.scrollbarYActive
                                    ? (i.classList.add(h('y')), x(e, 'top', i.scrollTop - e.lastScrollTop, !0, u))
                                    : (i.classList.remove(h('y')),
                                      (e.scrollbarYHeight = 0),
                                      (e.scrollbarYTop = 0),
                                      (i.scrollTop = 0)),
                                (e.lastScrollTop = c),
                                (e.lastScrollLeft = d),
                                (e.scrollTopPercent = i.scrollTop / i.scrollHeight),
                                (e.scrollLeftPercent = i.scrollLeft / i.scrollWidth);
                        }
                    };
                function M(e, u) {
                    return (
                        e.settings.minScrollbarLength && (u = Math.max(u, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (u = Math.min(u, e.settings.maxScrollbarLength)),
                        u
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
                    R = { breakBounds: !1, startBound: 0, endBound: 0 },
                    T = function (e) {
                        var u = e.scrollableDomEle,
                            t = e.onAnimationCompleteCallback,
                            n = e.direction,
                            r = e.onRefUpdateCallback,
                            i = e.duration,
                            o = e.cubicBezierPoints,
                            s = e.easingPreset,
                            l = e.scrollAmount,
                            a = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = R);
                        var d = null,
                            E = null,
                            m = null,
                            A = null,
                            _ = u === window,
                            h = ['left', 'right'].indexOf(n) > -1,
                            D = ['right', 'bottom'].indexOf(n) > -1;
                        h
                            ? ((E = _ ? 'scrollX' : 'scrollLeft'),
                              (A = _ ? 'innerWidth' : 'width'),
                              (m = 'scrollWidth'))
                            : ((E = _ ? 'scrollY' : 'scrollTop'),
                              (A = _ ? 'innerHeight' : 'height'),
                              (m = 'scrollHeight'));
                        var F = u[E],
                            p = (function (e) {
                                var u,
                                    t = e.scrollableDomEle,
                                    n = e.elementLengthProp,
                                    r = e.initialScrollPosition,
                                    i = e.isHorizontalDirection,
                                    o = e.scrollLengthProp,
                                    s = e.direction;
                                if (e.isWindow) {
                                    var l = document.documentElement;
                                    u = i ? l.offsetWidth : l.offsetHeight;
                                } else u = (t[o] - t.getBoundingClientRect()[n]) | 0;
                                return ['left', 'top'].includes(s) ? r : u - r;
                            })({
                                isWindow: _,
                                scrollableDomEle: u,
                                elementLengthProp: A,
                                initialScrollPosition: F,
                                isHorizontalDirection: h,
                                scrollLengthProp: m,
                                direction: n,
                            });
                        !isNaN(l) && l < p && (p = l);
                        var C = function e(n) {
                            if (!a || !a()) {
                                var l = n - d,
                                    m = (function (e) {
                                        var u = e.easingPreset,
                                            t = e.cubicBezierPoints,
                                            n = e.runTime / e.duration;
                                        if (N.hasOwnProperty(u)) return N[u](n);
                                        if (
                                            t &&
                                            !isNaN(t.x1) &&
                                            !isNaN(t.y1) &&
                                            !isNaN(t.x2) &&
                                            !isNaN(t.y2) &&
                                            t.x1 >= 0 &&
                                            t.x2 >= 0
                                        )
                                            return (function (e) {
                                                var u,
                                                    t = e.percentTimeElapsed,
                                                    n = e.x1,
                                                    r = e.y1,
                                                    i = e.x2,
                                                    o = e.y2;
                                                return (
                                                    1 -
                                                    (n * ((u = t), Math.pow(u, 3)) +
                                                        r *
                                                            (function (e) {
                                                                return 3 * e * e * (1 - e);
                                                            })(t) +
                                                        i *
                                                            (function (e) {
                                                                return 3 * e * Math.pow(1 - e, 2);
                                                            })(t) +
                                                        o *
                                                            (function (e) {
                                                                return Math.pow(1 - e, 3);
                                                            })(t))
                                                );
                                            })({ percentTimeElapsed: n, x1: t.x1, x2: t.x2, y1: t.y1, y2: t.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: s, cubicBezierPoints: o, runTime: l, duration: i });
                                if (!isNaN(m)) {
                                    var A = Math.round(m * p),
                                        C = D ? A + F : p - A;
                                    if (
                                        (c.breakBounds &&
                                            (C < c.startBound
                                                ? (C = c.startBound)
                                                : C > c.endBound && (C = c.endBound)),
                                        l < i)
                                    ) {
                                        if (_) {
                                            var b = h ? C : 0,
                                                B = h ? 0 : C;
                                            window.scrollTo(b, B);
                                        } else u[E] = C;
                                        r && r(C), requestAnimationFrame(e);
                                    } else t && t();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (d = e), C(e);
                        });
                    },
                    k = function (e, u, t) {
                        return function (n) {
                            u = u.toLowerCase();
                            var r = null,
                                i = function () {
                                    if (1 === n.buttons) {
                                        if (
                                            !n.target.closest('.ps__rail-' + u) ||
                                            !n.target.closest('.ps__track_' + u)
                                        ) {
                                            var i = (function (e) {
                                                    var u = e.e,
                                                        t = e.i;
                                                    return 'y' === e.axis
                                                        ? {
                                                              cursorPosition: u.screenY,
                                                              windowScrolled: window.pageYOffset,
                                                              elementPosition:
                                                                  t.scrollbarYRail.getBoundingClientRect().top,
                                                          }
                                                        : {
                                                              cursorPosition: u.screenX,
                                                              windowScrolled: window.pageXOffset,
                                                              elementPosition:
                                                                  t.scrollbarXRail.getBoundingClientRect().left,
                                                          };
                                                })({ axis: u, e: n, i: e }),
                                                o = i.cursorPosition - i.windowScrolled - i.elementPosition,
                                                s = (function (e) {
                                                    var u = e.i;
                                                    return e.cursorPositionOnRail >
                                                        ('y' === e.axis ? u.scrollbarYTop : u.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: u, cursorPositionOnRail: o, i: e });
                                            (function (e) {
                                                var u = e.axis,
                                                    t = e.cursorPositionOnRail,
                                                    n = e.direction,
                                                    r = e.i,
                                                    i = (function (e) {
                                                        var u = e.i,
                                                            t = e.cursorPositionOnRail;
                                                        if ('y' === e.axis) {
                                                            var n = u.scrollbarY.offsetTop,
                                                                r = n + u.scrollbarYHeight;
                                                            return t >= n && t <= r;
                                                        }
                                                        var i = u.scrollbarX.offsetLeft,
                                                            o = i + u.scrollbarXWidth;
                                                        return t >= i && t <= o;
                                                    })({ axis: u, i: r, cursorPositionOnRail: t });
                                                return i
                                                    ? ((function (e) {
                                                          var u = e.axis,
                                                              t = e.i,
                                                              n = e.cursorPositionOnRail,
                                                              r = (function (e, u) {
                                                                  if ('y' === e) {
                                                                      var t = u.contentHeight - u.containerHeight;
                                                                      return {
                                                                          rail: u.railYHeight,
                                                                          content: u.contentHeight,
                                                                          scrollbar: u.scrollbarYHeight,
                                                                          maxScroll: t,
                                                                      };
                                                                  }
                                                                  var n = u.contentWidth - u.containerWidth;
                                                                  return {
                                                                      rail: u.railXWidth,
                                                                      content: u.contentWidth,
                                                                      scrollbar: u.scrollbarXWidth,
                                                                      maxScroll: n,
                                                                  };
                                                              })(u, t),
                                                              i = (n - r.scrollbar / 2) / r.rail,
                                                              o = Math.round(
                                                                  Math.min(r.maxScroll, Math.max(0, r.content * i)),
                                                              );
                                                          'y' === u
                                                              ? (t.element.scrollTop = o)
                                                              : (t.element.scrollLeft = o);
                                                      })({ axis: u, i: r, cursorPositionOnRail: t }),
                                                      !0)
                                                    : ('y' === u
                                                          ? (r.element.scrollTop += n * r.containerHeight)
                                                          : (r.element.scrollLeft += n * r.containerWidth),
                                                      !1);
                                            })({ axis: u, cursorPositionOnRail: o, direction: s, i: e }) &&
                                                clearTimeout(r),
                                                L(e, !1, t);
                                        }
                                        n.stopPropagation();
                                    }
                                };
                            i(),
                                (r = setInterval(i, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(r);
                                });
                        };
                    };
                function I(e, u, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        o = t[3],
                        s = t[4],
                        l = t[5],
                        a = t[6],
                        c = t[7],
                        d = t[8],
                        E = e.element,
                        m = null,
                        A = null,
                        h = null;
                    function D(t) {
                        (E[a] = v(m + h * (t[i] - A))), C(e, c), L(e, !1, u), t.stopPropagation(), t.preventDefault();
                    }
                    function F() {
                        b(e, c), e[d].classList.remove(_), e.event.unbind(e.ownerDocument, 'mousemove', D);
                    }
                    e.event.bind(e[s], 'mousedown', function (u) {
                        1 === u.buttons &&
                            ((m = E[a]),
                            (A = u[i]),
                            (h = (e[r] - e[n]) / (e[o] - e[l])),
                            e.event.bind(e.ownerDocument, 'mousemove', D),
                            e.event.once(e.ownerDocument, 'mouseup', F),
                            e[d].classList.add(_),
                            u.stopPropagation(),
                            u.preventDefault());
                    });
                }
                var P = 1e3,
                    O = {
                        'click-rail': function (e, u) {
                            e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', k(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', k(e, 'x', u));
                        },
                        'drag-thumb': function (e, u) {
                            I(e, u, [
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
                                I(e, u, [
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
                        keyboard: function (e, u) {
                            var t = e.element;
                            e.event.bind(e.ownerDocument, 'keydown', function (n) {
                                if (
                                    !((n.isDefaultPrevented && n.isDefaultPrevented()) || n.defaultPrevented) &&
                                    i(t, ':hover')
                                ) {
                                    var r,
                                        o = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (o) {
                                        if ('IFRAME' === o.tagName) o = o.contentDocument.activeElement;
                                        else for (; o.shadowRoot; ) o = o.shadowRoot.activeElement;
                                        if (
                                            i((r = o), 'input,[contenteditable]') ||
                                            i(r, 'select,[contenteditable]') ||
                                            i(r, 'textarea,[contenteditable]') ||
                                            i(r, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var s = 0,
                                        l = 0;
                                    switch (n.which) {
                                        case 37:
                                            s = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            l = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            s = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
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
                                    (e.settings.suppressScrollX && 0 !== s) ||
                                        (e.settings.suppressScrollY && 0 !== l) ||
                                        ((t.scrollTop -= l),
                                        (t.scrollLeft += s),
                                        L(e, !1, u),
                                        (function (u, n) {
                                            var r = Math.floor(t.scrollTop);
                                            if (0 === u) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === r && n > 0) ||
                                                    (r >= e.contentHeight - e.containerHeight && n < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var i = t.scrollLeft;
                                            if (0 === n) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === i && u < 0) ||
                                                    (i >= e.contentWidth - e.containerWidth && u > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(s, l) && n.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, t) {
                            var n = e.element;
                            function r(r) {
                                var i = (function (e) {
                                        var u = -1 * e.deltaX,
                                            t = e.deltaY;
                                        return (
                                            (void 0 !== u && void 0 !== t) ||
                                                ((u = (-1 * e.wheelDeltaX) / 6), (t = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((u *= 10), (t *= 10)),
                                            u != u && t != t && ((u = 0), (t = e.wheelDelta)),
                                            e.shiftKey ? [-t, -u] : [u, t]
                                        );
                                    })(r),
                                    o = i[0],
                                    s = i[1];
                                if (
                                    !(function (e, t, r) {
                                        if (!w.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(e)) return !1;
                                        for (var i = e; i && i !== n; ) {
                                            if (i.classList.contains(m)) return !0;
                                            var o = u(i);
                                            if (
                                                [o.overflow, o.overflowX, o.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var s = i.scrollHeight - i.clientHeight;
                                                if (
                                                    s > 0 &&
                                                    !((0 === i.scrollTop && r > 0) || (i.scrollTop === s && r < 0))
                                                )
                                                    return !0;
                                                var l = i.scrollWidth - i.clientWidth;
                                                if (
                                                    l > 0 &&
                                                    !((0 === i.scrollLeft && t < 0) || (i.scrollLeft === l && t > 0))
                                                )
                                                    return !0;
                                            }
                                            i = i.parentNode;
                                        }
                                        return !1;
                                    })(r.target, o, s)
                                ) {
                                    var l = !1,
                                        a = (o * e.settings.wheelSpeed) | 0,
                                        c = (s * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (s ? (n.scrollTop -= c) : (n.scrollTop += a), (l = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (o ? (n.scrollLeft += a) : (n.scrollLeft -= c), (l = !0))
                                        : ((n.scrollTop -= c), (n.scrollLeft += a)),
                                        L(e, !1, t),
                                        (l =
                                            l ||
                                            (function (u, t) {
                                                var r = Math.floor(n.scrollTop),
                                                    i = 0 === n.scrollTop,
                                                    o = r + n.offsetHeight === n.scrollHeight,
                                                    s = 0 === n.scrollLeft,
                                                    l = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                                return (
                                                    !(Math.abs(t) > Math.abs(u) ? i || o : s || l) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(o, s)),
                                        l && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
                                }
                            }
                            e.event.bind(n, 'wheel', r),
                                void 0 !== window.onmousewheel && e.event.bind(n, 'mousewheel', r);
                        },
                        touch: function (e, t) {
                            if (w.supportsTouch || w.supportsIePointer) {
                                var n = e.element,
                                    r = {},
                                    i = 0,
                                    o = {},
                                    s = null;
                                w.supportsTouch
                                    ? (e.event.bind(n, 'touchstart', d),
                                      e.event.bind(n, 'touchmove', E),
                                      e.event.bind(n, 'touchend', A))
                                    : w.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(n, 'pointerdown', d),
                                            e.event.bind(n, 'pointermove', E),
                                            e.event.bind(n, 'pointerup', A))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(n, 'MSPointerDown', d),
                                            e.event.bind(n, 'MSPointerMove', E),
                                            e.event.bind(n, 'MSPointerUp', A)));
                            }
                            function l(u, r) {
                                (n.scrollTop -= r), (n.scrollLeft -= u), L(e, !1, t);
                            }
                            function a(e) {
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
                                    var u = a(e);
                                    (r.pageX = u.pageX),
                                        (r.pageY = u.pageY),
                                        (i = new Date().getTime()),
                                        null !== s && clearInterval(s);
                                }
                            }
                            function E(t) {
                                if (c(t)) {
                                    var s = a(t),
                                        d = { pageX: s.pageX, pageY: s.pageY },
                                        E = d.pageX - r.pageX,
                                        A = d.pageY - r.pageY;
                                    if (
                                        (function (e, t, r) {
                                            if (!n.contains(e)) return !1;
                                            for (var i = e; i && i !== n; ) {
                                                if (i.classList.contains(m)) return !0;
                                                var o = u(i);
                                                if (
                                                    [o.overflow, o.overflowX, o.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var s = i.scrollHeight - i.clientHeight;
                                                    if (
                                                        s > 0 &&
                                                        !((0 === i.scrollTop && r > 0) || (i.scrollTop === s && r < 0))
                                                    )
                                                        return !0;
                                                    var l = i.scrollLeft - i.clientWidth;
                                                    if (
                                                        l > 0 &&
                                                        !(
                                                            (0 === i.scrollLeft && t < 0) ||
                                                            (i.scrollLeft === l && t > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                i = i.parentNode;
                                            }
                                            return !1;
                                        })(t.target, E, A)
                                    )
                                        return;
                                    l(E, A), (r = d);
                                    var _ = new Date().getTime(),
                                        h = _ - i;
                                    h > 0 && ((o.x = E / h), (o.y = A / h), (i = _)),
                                        (function (u, t) {
                                            var r = Math.floor(n.scrollTop),
                                                i = n.scrollLeft,
                                                o = Math.abs(u),
                                                s = Math.abs(t);
                                            if (s > o) {
                                                if (
                                                    (t < 0 && r === e.contentHeight - e.containerHeight) ||
                                                    (t > 0 && 0 === r)
                                                )
                                                    return 0 === window.scrollY && t > 0 && w.isChrome;
                                            } else if (
                                                o > s &&
                                                ((u < 0 && i === e.contentWidth - e.containerWidth) ||
                                                    (u > 0 && 0 === i))
                                            )
                                                return !0;
                                            return !0;
                                        })(E, A) && t.preventDefault();
                                }
                            }
                            function A() {
                                e.settings.swipeEasing &&
                                    (clearInterval(s),
                                    (s = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(s)
                                            : o.x || o.y
                                              ? Math.abs(o.x) < 0.01 && Math.abs(o.y) < 0.01
                                                  ? clearInterval(s)
                                                  : (l(30 * o.x, 30 * o.y), (o.x *= 0.8), (o.y *= 0.8))
                                              : clearInterval(s);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, u) {
                            void 0 === u && (u = 0);
                            var t = e.element,
                                n = null,
                                r = !1,
                                i = 0,
                                o = 0,
                                s = 0;
                            function l() {
                                e.onScroll();
                            }
                            function a(n, r, i, o) {
                                void 0 === i && (i = null),
                                    void 0 === o && (o = !1),
                                    T({
                                        scrollableDomEle: t,
                                        direction: 'right',
                                        onRefUpdateCallback: l,
                                        duration: r,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: n,
                                        onCheckForBreakCallback: i,
                                        boundsInfo: {
                                            breakBounds: o,
                                            startBound: u,
                                            endBound: e.contentWidth - e.containerWidth + u,
                                        },
                                    });
                            }
                            function c() {
                                if (r) return r;
                            }
                            function d() {
                                s = 0;
                            }
                            function E(r) {
                                if (e.scrollbarXActive) {
                                    var l = n - r.screenX;
                                    (t.scrollLeft += l), (n = r.screenX);
                                    var a = new Date().getTime();
                                    if (((i = (l / (a - o)) * 1e3), (o = a), e.onScroll(), u > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * u;
                                        0 === t.scrollLeft || t.scrollLeft === c
                                            ? 0 === s && (s = window.setTimeout(d, 250))
                                            : 0 !== s && (window.clearTimeout(s), (s = 0));
                                    }
                                    C(e, 'x'),
                                        C(e, 'dragging', { immediately: !0 }),
                                        r.stopPropagation(),
                                        r.preventDefault();
                                }
                            }
                            function m(e) {
                                (n = e.screenX),
                                    (r = !0),
                                    requestAnimationFrame(function () {
                                        r = !1;
                                    }),
                                    (o = new Date().getTime());
                            }
                            function A(n) {
                                var r = e.contentWidth - e.containerWidth + u;
                                t.scrollLeft < u
                                    ? a(u - t.scrollLeft, P, c)
                                    : t.scrollLeft > r
                                      ? a(r - t.scrollLeft, P, c)
                                      : new Date().getTime() - o < 100 && a(i / 4, P, c, !0),
                                    b(e, 'x'),
                                    b(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(_),
                                    e.event.unbind(e.ownerDocument, 'mousemove', E);
                            }
                            function h() {
                                r = !0;
                            }
                            t.addEventListener(
                                'mousedown',
                                function (u) {
                                    1 === u.buttons &&
                                        ((n = u.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', E),
                                        e.event.once(e.ownerDocument, 'mouseup', A),
                                        e.event.once(e.ownerDocument, 'mousedown', m),
                                        e.event.once(t, 'wheel', h),
                                        e.scrollbarXRail.classList.add(_),
                                        u.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    H = function (e, r) {
                        var i = this;
                        if (
                            (void 0 === r && (r = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var o in ((this.element = e),
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
                            i.settings[o] = r[o];
                        (this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null);
                        var s,
                            m,
                            _ = function () {
                                return e.classList.add(A);
                            },
                            h = function () {
                                return e.classList.remove(A);
                            };
                        (this.isRtl = 'rtl' === u(e).direction),
                            (this.isNegativeScroll =
                                ((m = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (s = e.scrollLeft < 0),
                                (e.scrollLeft = m),
                                s)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new f()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = n(a('x'))),
                            (this.scrollbarXButtonStart = n(c('x'))),
                            (this.scrollbarXButtonEnd = n(E('x'))),
                            (this.scrollbarXTrack = n(d('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = n(l('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', _),
                            this.event.bind(this.scrollbarX, 'blur', h),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = n(a('y'))),
                            (this.scrollbarYButtonStart = n(c('y'))),
                            (this.scrollbarYButtonEnd = n(E('y'))),
                            (this.scrollbarYTrack = n(d('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = n(l('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', _),
                            this.event.bind(this.scrollbarY, 'blur', h),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            y().then(function () {
                                var n = u(i.scrollbarXRail);
                                (i.scrollbarXBottom = parseInt(n.bottom, 10)),
                                    isNaN(i.scrollbarXBottom)
                                        ? ((i.isScrollbarXUsingBottom = !1), (i.scrollbarXTop = v(n.top)))
                                        : (i.isScrollbarXUsingBottom = !0),
                                    (i.railBorderXWidth = v(n.borderLeftWidth) + v(n.borderRightWidth)),
                                    t(i.scrollbarXRail, { display: 'block' }),
                                    (i.railXMarginWidth = v(n.marginLeft) + v(n.marginRight)),
                                    t(i.scrollbarXRail, { display: '' }),
                                    (i.railXWidth = null),
                                    (i.railXRatio = null);
                                var r = u(i.scrollbarYRail);
                                (i.scrollbarYRight = parseInt(r.right, 10)),
                                    isNaN(i.scrollbarYRight)
                                        ? ((i.isScrollbarYUsingRight = !1), (i.scrollbarYLeft = v(r.left)))
                                        : (i.isScrollbarYUsingRight = !0),
                                    (i.scrollbarYOuterWidth = i.isRtl
                                        ? (function (e) {
                                              var t = u(e);
                                              return (
                                                  v(t.width) +
                                                  v(t.paddingLeft) +
                                                  v(t.paddingRight) +
                                                  v(t.borderLeftWidth) +
                                                  v(t.borderRightWidth)
                                              );
                                          })(i.scrollbarY)
                                        : null),
                                    (i.railBorderYWidth = v(r.borderTopWidth) + v(r.borderBottomWidth)),
                                    t(i.scrollbarYRail, { display: 'block' }),
                                    (i.railYMarginHeight = v(r.marginTop) + v(r.marginBottom)),
                                    t(i.scrollbarXRail, { display: '' }),
                                    t(i.scrollbarYRail, { display: '' }),
                                    (i.railYHeight = null),
                                    (i.railYRatio = null),
                                    (i.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= i.contentWidth - i.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= i.contentHeight - i.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (i.isAlive = !0),
                                    i.settings.handlers.forEach(function (e) {
                                        return O[e](i, i.settings.overScrollWidth);
                                    }),
                                    (i.boundHandleButtonEnter = i.handleMouseEnter.bind(i)),
                                    (i.boundHandleMouseLeave = i.handleMouseLeave.bind(i)),
                                    (i.boundHandleMouseEnter = i.handleMouseEnter.bind(i)),
                                    (i.boundPlayClickSound = i.playClickSound.bind(i)),
                                    i.scrollbarYButtonStart.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarYButtonEnd.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarXButtonStart.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarXButtonEnd.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarXButtonStart.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarXButtonEnd.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarYButtonStart.addEventListener('mouseenter', i.boundHandleButtonEnter),
                                    i.scrollbarYButtonEnd.addEventListener('mouseenter', i.boundHandleButtonEnter),
                                    i.scrollbarYButtonStart.addEventListener('mouseleave', i.boundHandleMouseLeave),
                                    i.scrollbarYButtonEnd.addEventListener('mouseleave', i.boundHandleMouseLeave),
                                    i.scrollbarY.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarX.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarY.addEventListener('mouseleave', i.boundHandleMouseLeave),
                                    i.scrollbarY.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarX.addEventListener('mousedown', i.boundPlayClickSound),
                                    (i.lastScrollTop = Math.floor(e.scrollTop)),
                                    (i.lastScrollLeft = e.scrollLeft),
                                    (i.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (i.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    i.event.bind(i.element, 'scroll', function (e) {
                                        return i.onScroll(e);
                                    }),
                                    i.settings.enableHorizontalScroll &&
                                        i.event.bind(i.element, 'wheel', function (e) {
                                            return i.onWheel(e);
                                        }),
                                    L(i, !1, i.settings.overScrollWidth, !1);
                            });
                    };
                (H.prototype._getAnimationSettings = function (e, u, t, n) {
                    var r = this,
                        i = 0;
                    return (
                        null !== this.element &&
                            (i = ['bottom', 'top'].includes(u) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - i,
                            direction: u,
                            onRefUpdateCallback: function (e) {
                                L(r, !0, r.settings.overScrollWidth, !1), t && t(e);
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
                            t(this.scrollbarXRail, { display: 'block' }),
                            t(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                v(u(this.scrollbarXRail).marginLeft) + v(u(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                v(u(this.scrollbarYRail).marginTop) + v(u(this.scrollbarYRail).marginBottom)),
                            t(this.scrollbarXRail, { display: 'none' }),
                            t(this.scrollbarYRail, { display: 'none' }),
                            y().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    L(e, !1, e.settings.overScrollWidth, !1),
                                    x(e, 'top', 0, !1, !1, !0),
                                    x(e, 'left', 0, !1, !1, !0),
                                    t(e.scrollbarXRail, { display: '' }),
                                    t(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (H.prototype.setScrollLeft = function (e, u, t) {
                        T(this._getAnimationSettings(e, 'right', u, t));
                    }),
                    (H.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (H.prototype.setScrollTop = function (e, u, t) {
                        T(this._getAnimationSettings(e, 'bottom', u, t));
                    }),
                    (H.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (H.prototype.onScroll = function (e) {
                        this.isAlive && L(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (H.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (L(this, !1, this.settings.overScrollWidth, !1),
                            x(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
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
                            o(this.scrollbarX),
                            o(this.scrollbarY),
                            o(this.scrollbarXRail),
                            o(this.scrollbarYRail),
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
            5067: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => U });
                var n = {};
                t.r(n), t.d(n, { mouse: () => d, onResize: () => a });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => m,
                        getSize: () => E,
                        graphicsQuality: () => A,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => h, getTextureUrl: () => _ });
                var o = {};
                function s(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => v,
                        addPreloadTexture: () => B,
                        children: () => i,
                        displayStatus: () => D,
                        displayStatusIs: () => W,
                        events: () => F,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => L,
                        getBrowserTexturePath: () => f,
                        getDisplayStatus: () => H,
                        getScale: () => M,
                        getSize: () => y,
                        getViewGlobalPosition: () => x,
                        isEventHandled: () => P,
                        isFocused: () => k,
                        pxToRem: () => N,
                        remToPx: () => R,
                        resize: () => S,
                        sendEvent: () => b,
                        setAnimateWindow: () => T,
                        setEventHandled: () => I,
                        setInputPaddingsRem: () => g,
                        setSidePaddingsRem: () => w,
                        whenTutorialReady: () => X,
                    });
                const a = s('clientResized'),
                    c = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') },
                    d = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && l(!1);
                        }
                        function t() {
                            e.enabled && l(!0);
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
                                : l(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${u}`,
                                            o = c[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
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
                                e.enabled && l(!0);
                            },
                            disableOutside() {
                                e.enabled && l(!1);
                            },
                        });
                    })();
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const A = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function _(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function h(e, u, t) {
                    return `url(${_(e, u, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    F = {
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    p = ['args'],
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, p);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    b = {
                        close(e) {
                            C('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            C(64);
                        },
                        move(e) {
                            C(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function g(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function f(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function v(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function w(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function S(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function x(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: R(u.x), y: R(u.y) };
                }
                function L() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function N(e) {
                    return viewEnv.pxToRem(e);
                }
                function R(e) {
                    return viewEnv.remToPx(e);
                }
                function T(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function k() {
                    return viewEnv.isFocused();
                }
                function I() {
                    return viewEnv.setEventHandled();
                }
                function P() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function H() {
                    return viewEnv.getShowingStatus();
                }
                const W = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    Y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    X = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : F.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    U = { view: o, client: r };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
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
            3368: () => {
                !(function () {
                    let e,
                        u,
                        t,
                        n,
                        r,
                        i,
                        o,
                        s = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === s &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === s && t.target.select && t.target === e && (s = e.selectionStart), s > -1)) {
                                const n = Math.min(Math.max(t.x, u.left), u.right),
                                    r = Math.min(Math.max(t.y, u.top), u.bottom),
                                    i = document.createEvent('MouseEvent');
                                i.initMouseEvent('mousedown', !0, !0, null, 1, n, r, n, r, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(i);
                                const o = e.selectionEnd;
                                o > s ? e.setSelectionRange(s, o, 'forward') : e.setSelectionRange(o, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (s = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (n = e.target.value),
                                (r = t.selectionStart),
                                (i = -1 !== n.lastIndexOf(' ', r) ? n.lastIndexOf(' ', r) + 1 : 0),
                                (o = -1 !== n.indexOf(' ', r) ? n.indexOf(' ', r) : n.length),
                                t.setSelectionRange(i, o, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (u) => {
                            document.getSelection().empty(),
                                0 !== u.button ||
                                    u.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(u.x, u.y));
                        }),
                            document.addEventListener('mousemove', (u) => {
                                if (0 === u.button && !u.target.select && e) {
                                    const t = document.caretPositionFromPoint(u.x, u.y);
                                    if (!t.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var n = t(5067);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, t, r);
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
                r.__instance = void 0;
                const i = r;
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { c1: () => f, Sw: () => i.Z, B3: () => c, Z5: () => o, B0: () => l, ry: () => p });
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
                const r = n;
                var i = t(1358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let l;
                var a;
                ((a = l || (l = {}))[(a.UNDEFINED = 0)] = 'UNDEFINED'),
                    (a[(a.TOOLTIP = 1)] = 'TOOLTIP'),
                    (a[(a.POP_OVER = 2)] = 'POP_OVER'),
                    (a[(a.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (a[(a.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (a[(a.MOVE = 16)] = 'MOVE'),
                    (a[(a.CLOSE = 32)] = 'CLOSE'),
                    (a[(a.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    _ = t(5067);
                const h = ['args'];
                function D(e, u, t, n, r, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(l) : Promise.resolve(l).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (n, r) {
                                        var i = e.apply(u, t);
                                        function o(e) {
                                            D(i, n, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            D(i, n, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, h);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = r),
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
                    b = () => C(l.CLOSE),
                    B = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var g = t(7572);
                const f = r.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: g.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => C(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => C(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), i) => {
                            const o = _.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                a = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                m = {
                                    x: _.O.view.pxToRem(a) + o.x,
                                    y: _.O.view.pxToRem(c) + o.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            C(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, b);
                        },
                        handleViewEvent: C,
                        onBindingsReady: p,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = v;
            },
            6466: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n),
                    i = t(493),
                    o = t.n(i);
                const s = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var l = t(5067);
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
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
                        r = (function (e, u) {
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
                        i = Math.min(n, r);
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
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                const E = l.O.client.getSize('rem'),
                    m = E.width,
                    A = E.height,
                    _ = Object.assign({ width: m, height: A }, d(m, A, a)),
                    h = (0, n.createContext)(_),
                    D = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, D);
                        const r = (0, n.useContext)(h),
                            i = r.extraLarge,
                            o = r.large,
                            l = r.medium,
                            a = r.small,
                            c = r.extraSmall,
                            d = r.extraLargeWidth,
                            E = r.largeWidth,
                            m = r.mediumWidth,
                            A = r.smallWidth,
                            _ = r.extraSmallWidth,
                            F = r.extraLargeHeight,
                            p = r.largeHeight,
                            C = r.mediumHeight,
                            b = r.smallHeight,
                            B = r.extraSmallHeight,
                            g = { extraLarge: F, large: p, medium: C, small: b, extraSmall: B };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && o) return u;
                            if (t.medium && l) return u;
                            if (t.small && a) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return s(u, t, g);
                            if (t.largeWidth && E) return s(u, t, g);
                            if (t.mediumWidth && m) return s(u, t, g);
                            if (t.smallWidth && A) return s(u, t, g);
                            if (t.extraSmallWidth && _) return s(u, t, g);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && F) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && C) return u;
                                if (t.smallHeight && b) return u;
                                if (t.extraSmallHeight && B) return u;
                            }
                        }
                        return null;
                    };
                (F.defaultProps = {
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
                    (0, n.memo)(F);
                const p = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    C = (0, n.memo)(({ children: e }) => {
                        const u = (0, n.useContext)(h),
                            t = (0, n.useState)(u),
                            i = t[0],
                            o = t[1],
                            s = (0, n.useCallback)((e, u) => {
                                const t = l.O.view.pxToRem(e),
                                    n = l.O.view.pxToRem(u);
                                o(Object.assign({ width: t, height: n }, d(t, n, a)));
                            }, []);
                        p(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', s), [s]);
                        const c = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return r().createElement(h.Provider, { value: c }, e);
                    });
                var b = t(6483),
                    B = t.n(b);
                let g;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(g || (g = {}));
                const f = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    v = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    w = (e, u, t = g.left) => e.split(u).reduce(t === g.left ? f : v, []),
                    y = (() => {
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
                    S = ['zh_cn', 'zh_sg', 'zh_tw'];
                let x;
                var L;
                ((L = x || (x = {})).SHORT_DATE = 'short-date'),
                    (L.SHORT_TIME = 'short-time'),
                    (L.SHORT_DATE_TIME = 'short-date-time'),
                    (L.FULL_DATE = 'full-date'),
                    (L.FULL_DATE_TIME = 'full-date-time'),
                    (L.MONTH = 'month'),
                    (L.MONTH_DATE = 'month-date'),
                    (L.DATE_MONTH = 'date-month'),
                    (L.MONTH_YEAR = 'month-year'),
                    (L.WEEK_DAY = 'week-day'),
                    (L.WEEK_DAY_TIME = 'week-day-time'),
                    (L.YEAR = 'year'),
                    (L.DATE_YEAR = 'date-year');
                var M = t(4179);
                function N(e) {
                    engine.call('PlaySound', e);
                }
                Date.now();
                const T = (e = 1) => {
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
                    },
                    k = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    I = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    P = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    O = M.Sw.instance;
                let H;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(H || (H = {}));
                const W = (e = 'model', u = H.Deep) => {
                        const t = (0, n.useState)(0),
                            r = (t[0], t[1]),
                            i = (0, n.useMemo)(() => T(), []),
                            o = i.caller,
                            s = i.resId,
                            l = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            a = (0, n.useState)(() =>
                                ((e) => {
                                    const u = k(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return I(u) ? u.value : u;
                                })(
                                    ((e) =>
                                        ((e, u) =>
                                            e.split('.').reduce((e, u) => {
                                                const t = k(`${e}.${u}`, window);
                                                return I(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                            }))(e))(l),
                                ),
                            ),
                            c = a[0],
                            d = a[1],
                            E = (0, n.useRef)(-1);
                        return (
                            p(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? H.Deep : H.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== H.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === H.Deep
                                                ? (e === c && r((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        n = ((e) => {
                                            const u = ((e) => {
                                                    const u = T(),
                                                        t = u.caller,
                                                        n = u.resId,
                                                        r =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: P(r, ''), resId: n };
                                                })(),
                                                t = u.modelPrefix,
                                                n = e.split('.');
                                            if (n.length > 0) {
                                                const e = [n[0]];
                                                return (
                                                    n.reduce((u, n) => {
                                                        const r = k(P(t, `${u}.${n}`), window);
                                                        return I(r)
                                                            ? (e.push(r.id), `${u}.${n}.value`)
                                                            : (e.push(n), `${u}.${n}`);
                                                    }),
                                                    e.reduce((e, u) => e + '.' + u)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    E.current = O.addCallback(n, t, s, u === H.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== H.None)
                                    return () => {
                                        O.removeCallback(E.current, s);
                                    };
                            }, [s, u]),
                            c
                        );
                    },
                    Y =
                        (M.Sw.instance,
                        (e) => {
                            const u = (0, n.useRef)();
                            return (
                                (0, n.useEffect)(() => {
                                    u.current = e;
                                }, [e]),
                                u.current
                            );
                        });
                let X;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right');
                })(X || (X = {}));
                const U = 'CoinIcons_container_d4',
                    V = {
                        base: 'BigCoinIcon_base_a8',
                        icon: 'BigCoinIcon_icon_40',
                        shining: 'BigCoinIcon_shining_69',
                        pulsing: 'BigCoinIcon_pulsing_14',
                        shining__left: 'BigCoinIcon_shining__left_2d',
                        shining__right: 'BigCoinIcon_shining__right_06',
                        container: 'BigCoinIcon_container_f7',
                    },
                    $ = {
                        [X.Left]: R.images.historical_battles.gui.maps.icons.hbCoinShining.c_378x338,
                        [X.Right]: R.images.historical_battles.gui.maps.icons.hbCoinShining.c_520x464,
                    },
                    z = (0, n.memo)(({ side: e, coinName: u }) => {
                        const t = (0, n.useMemo)(() => ({ backgroundImage: `url(${$[e].$dyn(u)})` }), [u, e]),
                            i = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.hbCoin.c_134x134.$dyn(u)})`,
                                }),
                                [u],
                            ),
                            o = B()(V.shining, V[`shining__${e}`]),
                            s = B()(V.container, V[`container__${e}`]);
                        return r().createElement(
                            'div',
                            { className: V.base },
                            r().createElement(
                                'div',
                                { className: s },
                                r().createElement('div', { className: o, style: t }),
                            ),
                            r().createElement('div', { className: V.icon, style: i }),
                        );
                    }),
                    j = {
                        icon__fadeIn: 'AnimatedCoin_icon__fadeIn_5a',
                        fadeIn: 'AnimatedCoin_fadeIn_b0',
                        icon__fadeOut: 'AnimatedCoin_icon__fadeOut_c0',
                        fadeOut: 'AnimatedCoin_fadeOut_f1',
                    },
                    K = { animationDuration: '0.3s' },
                    G = (0, n.memo)(({ coinName: e, side: u }) => {
                        const t = (0, n.useState)(e),
                            i = t[0],
                            o = t[1],
                            s = i !== e;
                        (0, n.useEffect)(() => {
                            if (s) {
                                const u = setTimeout(() => {
                                    o(e);
                                }, 300);
                                return () => clearTimeout(u);
                            }
                        }, [e, s]);
                        const l = B()(j.icon, s && j.icon__fadeOut),
                            a = B()(j.icon, j.icon__fadeIn);
                        return r().createElement(
                            r().Fragment,
                            null,
                            s &&
                                r().createElement(
                                    'div',
                                    { className: a, style: K },
                                    r().createElement(z, { coinName: e, side: u }),
                                ),
                            r().createElement(
                                'div',
                                { className: l, style: K },
                                r().createElement(z, { key: i, coinName: i, side: u }),
                            ),
                        );
                    }),
                    q = (0, n.memo)(() => {
                        const e = W('model.left').coinName,
                            u = W('model.right').coinName,
                            t = B()(U, 'CoinIcons_container__left_9f'),
                            n = B()(U, 'CoinIcons_container__right_80');
                        return r().createElement(
                            'div',
                            { className: 'CoinIcons_base_8b' },
                            r().createElement(
                                'div',
                                { className: n },
                                r().createElement(G, { side: X.Right, coinName: u }),
                            ),
                            r().createElement('div', { className: 'CoinIcons_arrow_8b' }),
                            r().createElement(
                                'div',
                                { className: t },
                                r().createElement(G, { side: X.Left, coinName: e }),
                            ),
                        );
                    });
                let Z, Q, J;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Z || (Z = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Q || (Q = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(J || (J = {})),
                    t(3368);
                var ee = t(5521);
                let ue;
                !(function (e) {
                    (e[(e.ZERO = 48)] = 'ZERO'),
                        (e[(e.ONE = 49)] = 'ONE'),
                        (e[(e.TWO = 50)] = 'TWO'),
                        (e[(e.THREE = 51)] = 'THREE'),
                        (e[(e.FOUR = 52)] = 'FOUR'),
                        (e[(e.FIVE = 53)] = 'FIVE'),
                        (e[(e.SIX = 54)] = 'SIX'),
                        (e[(e.SEVEN = 55)] = 'SEVEN'),
                        (e[(e.EIGHT = 56)] = 'EIGHT'),
                        (e[(e.NINE = 57)] = 'NINE'),
                        (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                        (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                        (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                        (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                        (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                        (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                        (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                        (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                        (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                        (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9');
                })(ue || (ue = {}));
                const te = {
                    base: 'NumericStepper_base_09',
                    base__small: 'NumericStepper_base__small_46',
                    base__medium: 'NumericStepper_base__medium_7e',
                    base__large: 'NumericStepper_base__large_53',
                    base__isFocus: 'NumericStepper_base__isFocus_fd',
                    base__isDisabled: 'NumericStepper_base__isDisabled_0e',
                    inputContainer: 'NumericStepper_inputContainer_06',
                    input: 'NumericStepper_input_37',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_42',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_a0',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_a6',
                    input__disabled: 'NumericStepper_input__disabled_f6',
                    input__credits: 'NumericStepper_input__credits_d7',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_95',
                    input__gold: 'NumericStepper_input__gold_37',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_f7',
                    input__xp: 'NumericStepper_input__xp_5d',
                    input__freeXP: 'NumericStepper_input__freeXP_1f',
                    input__crystal: 'NumericStepper_input__crystal_e1',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_0e',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_c5',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_5e',
                    input__withCurrency: 'NumericStepper_input__withCurrency_ea',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_81',
                    'input__xp-large': 'NumericStepper_input__xp-large_27',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_50',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_c0',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_b8',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_a3',
                    currency: 'NumericStepper_currency_78',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_39',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_63',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_6f',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_7d',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_71',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_6c',
                    currencyIcon: 'NumericStepper_currencyIcon_5c',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_8e',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_4b',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_7e',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_6e',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_27',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_ec',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_24',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_4b',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_4e',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_06',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_56',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_53',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_35',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_ee',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_f2',
                    dummyValue: 'NumericStepper_dummyValue_15',
                    control: 'NumericStepper_control_90',
                    buttonIncrement: 'NumericStepper_buttonIncrement_5c',
                    buttonDecrement: 'NumericStepper_buttonDecrement_4b',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_0d',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_2e',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_d2',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_ce',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_67',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_de',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_07',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_a5',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_f5',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_7d',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_ec',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_c7',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_45',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_2c',
                };
                class ne extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, n.createRef)()),
                            (this.input = (0, n.createRef)()),
                            (this.state = {
                                value: this.props.value,
                                isFocused: this.props.isFocused,
                                activeDecrement: !1,
                                activeIncrement: !1,
                            }),
                            (this.setFocusOnInput = () => {
                                this.props.isDisabled ||
                                    (this.input.current &&
                                        (this.input.current.focus(), this.setState({ isFocused: !0 })));
                            }),
                            (this.blurInput = () => {
                                this.input.current && (this.input.current.blur(), this.setState({ isFocused: !1 }));
                            }),
                            (this.componentDidMount = () => {
                                this.state.isFocused &&
                                    (this.setFocusOnInput(),
                                    setTimeout(() => {
                                        const e = this.formattedValue.length;
                                        this.input.current && this.input.current.setSelectionRange(e, e);
                                    }, 0)),
                                    document.addEventListener('click', this.handleClickOutside),
                                    document.addEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.componentWillUnmount = () => {
                                this.stop(),
                                    document.removeEventListener('click', this.handleClickOutside),
                                    document.removeEventListener('mouseup', this.handleMouseUp);
                            }),
                            (this.formatValue = (e) =>
                                this.props.currencyType ? M.Z5.getNumberFormat(e, M.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const u = Math.min(this.props.maximum, Math.max(this.props.minimum, e)),
                                    t = this.props.stepSize;
                                return Math.round(u / t) * t;
                            }),
                            (this.changeValue = (e) => {
                                e !== this.state.value && (this.setState({ value: e }), this.props.onChange(e));
                            }),
                            (this.setCursorPosition = (e, u) => {
                                this.input.current && this.input.current.setSelectionRange(e, u),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(e, u);
                                    });
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (e = 0) => {
                                const u = e === ee.n.BACKSPACE,
                                    t = e === ee.n.DELETE,
                                    n = this.input.current,
                                    r = n.selectionStart || 0,
                                    i = n.selectionEnd || 0;
                                let o = n.value;
                                const s = Math.max(r, i),
                                    l = s;
                                t && (o = o.substring(0, s) + o.substring(s + 1, o.length)),
                                    u && 1 === r && 1 === o.length && (o = '0');
                                const a = Number(o.trim().replace(/\D/g, '')),
                                    c = Number.isSafeInteger(a) ? a : Number.MAX_SAFE_INTEGER,
                                    d = this.props.currencyType ? M.Z5.getNumberFormat(c, M.B3.GOLD) : c.toString();
                                n.value = d;
                                const E = new RegExp(/\d/g);
                                let m = 0;
                                for (let e = 0; e < l; e++) {
                                    const u = o[e] || '',
                                        t = d[m] || '';
                                    if (u.match(E) || u === t) {
                                        for (; u !== d[m] && m < d.length; ) m++;
                                        m++;
                                    }
                                }
                                '' === o && (m = 1),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(m, m),
                                    this.changeValue(c),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(c) !== c &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(c)),
                                            this.setCursorPosition(0, this.formatValue(c).length));
                                    }, 1e3));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === ee.n.BACKSPACE,
                                    t = e.keyCode === ee.n.DELETE,
                                    n = e.target,
                                    r = n.selectionStart,
                                    i = n.selectionEnd,
                                    o = n.value,
                                    s = r !== i,
                                    l = new RegExp(/\D/),
                                    a = u && r ? r - 1 : r || 0;
                                if (s) return;
                                let c = a;
                                const d = l.test(o[a]);
                                if (t && d) for (; l.test(o[c]) && c < o.length; ) c++;
                                if (u && d) for (; l.test(o[c]) && c > 0; ) c--;
                                if (c !== a || (u && d))
                                    return e.preventDefault(), (c = c < 0 ? 0 : c), void this.setCursorPosition(c, c);
                                ((u && 1 === r && 1 === o.length) || t) &&
                                    (e.preventDefault(), this.updateInput(e.keyCode));
                            }),
                            (this.handleClickOutside = (e) => {
                                const u = document.activeElement;
                                this.state.isFocused &&
                                    u !== this.input.current &&
                                    null !== this.numericalStepper.current &&
                                    !this.numericalStepper.current.contains(e.target) &&
                                    this.setState({ isFocused: !1 });
                            }),
                            (this.handleBlur = () => {
                                if ((this.state.isFocused && this.setState({ isFocused: !1 }), this.props.isDisabled))
                                    return;
                                const e = this.getValidValue(this.state.value);
                                e !== this.state.value && this.changeValue(e);
                            }),
                            (this.handleWheel = (e) => {
                                !this.props.isDisabled &&
                                    this.state.isFocused &&
                                    (e.preventDefault(), e.deltaY < 0 ? this.decrement() : this.increment());
                            }),
                            (this.handleMouseUp = () => {
                                this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 });
                            }),
                            (this.handleMouseLeave = () => {
                                this.stop();
                            }),
                            (this.incrementHandleMouseEnter = (e) => {
                                this.state.activeIncrement && this.incrementHandleMouseDown(e, !0),
                                    this.buttonIncrementIsDisabled || this.playHoverSound();
                            }),
                            (this.decrementHandleMouseEnter = (e) => {
                                this.state.activeDecrement && this.decrementHandleMouseDown(e, !0),
                                    this.buttonDecrementIsDisabled || this.playHoverSound();
                            }),
                            (this.handleKeyDown = (e) => {
                                if (!this.props.isDisabled) {
                                    switch (
                                        (e.keyCode in ee.n &&
                                            e.keyCode !== ee.n.BACKSPACE &&
                                            e.keyCode !== ee.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case ee.n.ARROW_UP:
                                        case ee.n.NUM_PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case ee.n.ARROW_DOWN:
                                        case ee.n.NUM_MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case ee.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case ee.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case ee.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case ee.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case ee.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case ee.n.BACKSPACE:
                                        case ee.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case ee.n.ARROW_UP:
                                        case ee.n.NUM_PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case ee.n.ARROW_DOWN:
                                        case ee.n.NUM_MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in ue || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = Math.min(
                                    this.getValidValue(this.state.value) + this.props.stepSize,
                                    this.props.maximum,
                                );
                                this.changeValue(e);
                            }),
                            (this.decrement = () => {
                                const e = Math.max(
                                    this.getValidValue(this.state.value) - this.props.stepSize,
                                    this.props.minimum,
                                );
                                this.changeValue(e);
                            }),
                            (this.incrementHandleMouseDown = (e, u = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (!u && this.playClickSound(),
                                        (0 === e.button || u) &&
                                            (this.increment(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.incrementHandleMouseDown(e, !0);
                                                },
                                                u ? 50 : 300,
                                            )),
                                            this.setState({ activeIncrement: !0 }))));
                            }),
                            (this.decrementHandleMouseDown = (e, u = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (e.preventDefault(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (!u && this.playClickSound(),
                                        (0 === e.button || u) &&
                                            (this.decrement(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.decrementHandleMouseDown(e, !0);
                                                },
                                                u ? 50 : 300,
                                            )),
                                            this.setState({ activeDecrement: !0 }))));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || N('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || N('play');
                            }),
                            (this.stop = () => {
                                this.timer && clearTimeout(this.timer), (this.timer = null);
                            });
                    }
                    componentDidUpdate(e, u) {
                        const t = this.state,
                            n = t.value,
                            r = t.isFocused;
                        if (n !== u.value && r) {
                            const e = this.formattedValue.length,
                                u = this.input.current && this.input.current.selectionStart,
                                t = this.input.current && this.input.current.selectionEnd,
                                n = u === t ? e : u || 0;
                            0 === u && t === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(n, e);
                        }
                    }
                    componentWillReceiveProps({ value: e, isFocused: u }) {
                        e !== this.props.value && this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? M.Z5.getNumberFormat(this.state.value, M.B3.GOLD)
                            : this.state.value.toString();
                    }
                    get buttonIncrementIsDisabled() {
                        return this.state.value >= this.props.maximum || this.props.isDisabled;
                    }
                    get buttonDecrementIsDisabled() {
                        return this.state.value <= this.props.minimum || this.props.isDisabled;
                    }
                    render() {
                        const e = this.props,
                            u = e.isDisabled,
                            t = e.size,
                            n = e.currencyType,
                            i = e.classMix,
                            o = B()(
                                te.base,
                                te[`base__${t}`],
                                n && te[`base__withCurrency-${t}`],
                                u && te.base__isDisabled,
                                this.state.isFocused && te.base__isFocus,
                                i && i.base,
                            ),
                            s = B()(
                                te.buttonIncrement,
                                te[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && te.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    te[`buttonIncrement__isActive-${this.props.size}`],
                                i && i.buttonIncrement,
                            ),
                            l = B()(
                                te.buttonDecrement,
                                te[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && te.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    te[`buttonDecrement__isActive-${this.props.size}`],
                                i && i.buttonDecrement,
                            ),
                            a = B()(
                                te.input,
                                u && te.input__disabled,
                                n && te.input__withCurrency,
                                n && te[`input__${n}-${t}`],
                                n && te[`input__${n}`],
                                n && u && te[`input__${n}-disabled`],
                                i && i.input,
                            ),
                            c = B()(te.currencyIcon, n && te[`currencyIcon__${n}-${t}`], i && i.currencyIcon),
                            d = B()(
                                te.currency,
                                n && te[`currency__${n}`],
                                n && te[`currency__${n}-${t}`],
                                i && i.currency,
                            );
                        return r().createElement(
                            'div',
                            {
                                className: o,
                                ref: this.numericalStepper,
                                style: ((E = this.props.width), E ? { width: `${E}rem` } : {}),
                            },
                            r().createElement(
                                'div',
                                { className: te.inputContainer },
                                n &&
                                    r().createElement(
                                        'div',
                                        { className: d },
                                        r().createElement('span', { className: te.dummyValue }, this.formattedValue),
                                        r().createElement('span', { className: c, style: i && i.currencyIconStyle }),
                                    ),
                                r().createElement('input', {
                                    ref: this.input,
                                    className: a,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: u,
                                    onWheel: this.handleWheel,
                                    onChange: this.handleChange,
                                    onKeyPress: this.allowOnlyNumbers,
                                    onKeyDown: this.handleKeyDown,
                                    onKeyUp: this.handleKeyUp,
                                    onBlur: this.handleBlur,
                                    onFocus: this.setFocusOnInput,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: te.control },
                                r().createElement('div', {
                                    className: s,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                r().createElement('div', {
                                    className: l,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                        var E;
                    }
                }
                ne.defaultProps = {
                    value: 1,
                    stepSize: 1,
                    minimum: 0,
                    maximum: 0,
                    size: 'medium',
                    isFocused: !0,
                    isDisabled: !1,
                    onChange: () => null,
                    onKeyDown: () => null,
                };
                const re = (e) => {
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
                    },
                    ie = (e) => {
                        console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                    };
                function oe(e = ee.n.NONE, u = ie, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ee.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                const se = [
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
                function le(e) {
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
                const ae = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: M.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    ce = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            a = e.ignoreShowDelay,
                            c = void 0 !== a && a,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            _ = e.isEnabled,
                            h = void 0 === _ || _,
                            D = e.targetId,
                            F = void 0 === D ? 0 : D,
                            p = e.onShow,
                            C = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, se);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            g = (0, n.useMemo)(() => F || T().resId, [F]),
                            f = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (ae(t, A, { isMouseEvent: !0, on: !0, arguments: le(r) }, g),
                                    p && p(),
                                    (B.current.isVisible = !0));
                            }, [t, A, r, g, p]),
                            v = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        ae(t, A, { on: !1 }, g),
                                        B.current.isVisible && C && C(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, A, g, C]),
                            w = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === h && v();
                            }, [h, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            h
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          i && i(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === E && v(), null == l || l(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === E && v(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    de = ['children'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const me = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, de);
                        return r().createElement(
                            ce,
                            Ee(
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
                    },
                    Ae = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function _e() {
                    return (
                        (_e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _e.apply(this, arguments)
                    );
                }
                const he = R.views.common.tooltip_window.simple_tooltip_content,
                    De = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            o = e.note,
                            s = e.alert,
                            l = e.args,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ae);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: t, header: i, note: o, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, i, o, l]);
                        return r().createElement(
                            ce,
                            _e(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? he.SimpleTooltipHtmlContent('resId') : he.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                a,
                            ),
                            u,
                        );
                        var d;
                    };
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const pe = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(De, u, n);
                    const i = u.contentId,
                        o = u.args,
                        s = null == o ? void 0 : o.contentId;
                    return i || s
                        ? r().createElement(ce, Fe({}, u, { contentId: i || s }), n)
                        : r().createElement(me, u, n);
                };
                let Ce, be;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(Ce || (Ce = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium');
                    })(be || (be = {}));
                const Be = ({ content: e, classMix: u }) => {
                        const t = (0, n.useRef)(null),
                            i = (0, n.useState)(!0),
                            o = i[0],
                            s = i[1];
                        return (
                            (0, n.useEffect)(() =>
                                re(() => {
                                    const e = t.current;
                                    e && e.offsetWidth >= e.scrollWidth && s(!1);
                                }),
                            ),
                            r().createElement(
                                De,
                                { isEnabled: o, body: e },
                                r().createElement('div', { ref: t, className: B()('TextOverflow_base_3b', u) }, e),
                            )
                        );
                    },
                    ge = {
                        base: 'DropDownControl_base_a4',
                        base__small: 'DropDownControl_base__small_e2',
                        base__medium: 'DropDownControl_base__medium_19',
                        base__over: 'DropDownControl_base__over_6b',
                        base__down: 'DropDownControl_base__down_1c',
                        base__open: 'DropDownControl_base__open_a1',
                        base__focused: 'DropDownControl_base__focused_e5',
                        base__selected: 'DropDownControl_base__selected_ba',
                        base__disabled: 'DropDownControl_base__disabled_9d',
                        label: 'DropDownControl_label_14',
                        label__small: 'DropDownControl_label__small_30',
                        label__medium: 'DropDownControl_label__medium_5f',
                        label__placeholder: 'DropDownControl_label__placeholder_ef',
                        button: 'DropDownControl_button_c9',
                        button__small: 'DropDownControl_button__small_59',
                        button__medium: 'DropDownControl_button__medium_a5',
                        gradient: 'DropDownControl_gradient_0b',
                        disabled: 'DropDownControl_disabled_1c',
                        arrow: 'DropDownControl_arrow_18',
                        arrow__small: 'DropDownControl_arrow__small_07',
                        arrow__medium: 'DropDownControl_arrow__medium_48',
                        alert: 'DropDownControl_alert_02',
                        blink: 'DropDownControl_blink_00',
                    };
                let fe;
                !(function (e) {
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(fe || (fe = {}));
                const ve = (0, n.memo)(
                        ({
                            parentId: e,
                            variant: u = Ce.Basic,
                            size: t = be.Medium,
                            isOpen: i,
                            placeholder: o = R.strings.common.dropdown.placeholder.select(),
                            label: s = '',
                            classMix: l,
                            onClick: a,
                            soundHover: c,
                            soundClick: d,
                            customRenderer: E,
                        }) => {
                            const m = (0, n.useState)(fe.Out),
                                A = m[0],
                                _ = m[1],
                                h = (0, n.useState)(!1),
                                D = h[0],
                                F = h[1],
                                p = u === Ce.Disabled,
                                C = p || u === Ce.Basic,
                                b = (0, n.useCallback)(() => {
                                    p || (_(fe.Over), c && N(c));
                                }, [p, c]),
                                g = (0, n.useCallback)(() => {
                                    p || (_(fe.Down), d && N(d));
                                }, [p, d]),
                                f = (0, n.useCallback)(() => {
                                    !p && _(fe.Over), !C && F(!0);
                                }, [p, C]),
                                v = (0, n.useCallback)((e) => a && a(e), [a]),
                                w = (0, n.useCallback)(() => _(fe.Out), []);
                            (0, n.useEffect)(() => {
                                C || F(!1);
                            }, [u, C]),
                                (0, n.useEffect)(() => {
                                    p && w();
                                }, [p, w]);
                            const y = B()(
                                    ge.base,
                                    i && ge.base__open,
                                    ge[`base__${A}`],
                                    (C || !D) && ge[`base__${u}`],
                                    l,
                                ),
                                S = B()(ge.label, ge[`label__${t}`], !s && ge.label__placeholder),
                                x = B()(ge.button, ge[`button__${t}`]),
                                L = B()(ge.arrow, ge[`arrow__${t}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e ? `${e}_control` : void 0,
                                    className: y,
                                    onMouseEnter: b,
                                    onMouseUp: f,
                                    onMouseDown: g,
                                    onMouseLeave: w,
                                    onClick: v,
                                },
                                !D && u === Ce.Alert && r().createElement('div', { className: ge.alert }),
                                E ||
                                    r().createElement(
                                        'div',
                                        { className: S },
                                        r().createElement(Be, { content: s || o }),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: x },
                                    r().createElement('div', { className: L }),
                                    A === fe.Over && r().createElement('div', { className: ge.gradient }),
                                    p && r().createElement('div', { className: ge.disabled }),
                                ),
                            );
                        },
                    ),
                    we = (e) => {
                        if (!e) return !1;
                        const u = e.getBoundingClientRect(),
                            t = u.width,
                            n = u.height;
                        return 0 !== t && 0 !== n;
                    };
                var ye = t(8380),
                    Se = t.n(ye);
                const xe = r().forwardRef((e, u) => {
                        const t = e.offsetLeft,
                            i = void 0 === t ? 0 : t,
                            o = e.offsetTop,
                            s = void 0 === o ? 0 : o,
                            l = e.scrollSettings,
                            a = e.onUpdateActiveAxis,
                            c = e.onHorizontalScroll,
                            d = e.onVerticalScroll,
                            E = e.onOverScrollAtBeginning,
                            m = e.onOverScrollAtEnd,
                            A = e.wrapperIndent,
                            _ = e.verticalScrollbarMargin,
                            h = e.isMultipleScroll,
                            D = e.scrollAreaContainer,
                            F = e.children,
                            p = e.classMix,
                            C = e.onScrollLeftHandled,
                            b = (0, n.useState)(!1),
                            g = b[0],
                            f = b[1],
                            v = (0, n.useState)(),
                            w = v[0],
                            y = v[1],
                            S = (0, n.useState)(),
                            x = S[0],
                            L = S[1],
                            M = (0, n.useRef)(null),
                            N = (0, n.useCallback)(() => {
                                w &&
                                    a &&
                                    a({ x: w.scrollbarXActive, y: w.scrollbarYActive }, { x: w.reach.x, y: w.reach.y });
                            }, [a, w]),
                            R = (0, n.useCallback)(() => w, [w]),
                            T = (0, n.useCallback)(() => {
                                w && w.update();
                            }, [w]),
                            k = (0, n.useCallback)(
                                (e, u, t) => {
                                    w && (w.setScrollLeft(e, u, t), C && C(e, w.contentWidth - w.containerWidth));
                                },
                                [w, C],
                            ),
                            I = (0, n.useCallback)(
                                (e) => {
                                    w && (w.setScrollLeftImmediately(e), C && C(e, w.contentWidth - w.containerWidth));
                                },
                                [w, C],
                            ),
                            P = (0, n.useCallback)(
                                (e, u, t) => {
                                    w && w.setScrollTop(e, u, t);
                                },
                                [w],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    w && w.setScrollTopImmediately(e);
                                },
                                [w],
                            ),
                            H = (0, n.useCallback)(() => {
                                if (x && c && w) {
                                    const e = { scrollPosition: x.scrollLeft < 0 ? 0 : x.scrollLeft, reach: w.reach.x };
                                    c(e);
                                }
                            }, [c, x, w]),
                            W = (0, n.useCallback)(() => {
                                if (x && d && w) {
                                    const e = { scrollPosition: x.scrollTop, reach: w.reach.y };
                                    d(e);
                                }
                            }, [d, x, w]),
                            Y = (0, n.useCallback)(() => {
                                E && E();
                            }, [E]),
                            X = (0, n.useCallback)(() => {
                                m && m();
                            }, [m]),
                            U = (0, n.useCallback)(
                                (e) => {
                                    'function' == typeof u ? u(e) : null !== u && (u.current = e), L(e);
                                },
                                [u],
                            ),
                            V = (0, n.useCallback)(() => {
                                w &&
                                    (w.update(),
                                    (M.current = re(() => {
                                        N();
                                    })));
                            }, [w, N]),
                            $ = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (w && x)
                                return (
                                    document.addEventListener('mousemove', $),
                                    window.addEventListener('resize', V),
                                    x.addEventListener('ps-scroll-x', H),
                                    x.addEventListener('ps-scroll-y', W),
                                    x.addEventListener('over-scroll-beginning', Y),
                                    x.addEventListener('over-scroll-ending', X),
                                    f(!0),
                                    () => {
                                        window.removeEventListener('resize', V),
                                            document.removeEventListener('mousemove', $),
                                            x &&
                                                (x.removeEventListener('ps-scroll-x', H),
                                                x.removeEventListener('ps-scroll-y', W),
                                                x.removeEventListener('over-scroll-beginning', Y),
                                                x.removeEventListener('over-scroll-ending', X));
                                    }
                                );
                        }, [$, H, Y, X, V, x, w, W]);
                        const z = (0, n.useRef)(x || null);
                        z.current = x || null;
                        const j = ((e) => {
                            const u = (0, n.useState)(we(e ? e.current : null)),
                                t = u[0],
                                r = u[1];
                            return (
                                (0, n.useEffect)(() => {
                                    let u = 0;
                                    const t = () => {
                                        u = requestAnimationFrame(() => {
                                            we(e ? e.current : null) ? r(!0) : t();
                                        });
                                    };
                                    return (
                                        t(),
                                        () => {
                                            cancelAnimationFrame(u);
                                        }
                                    );
                                }, [e]),
                                (0, n.useEffect)(() => () => r(!1), [e]),
                                t
                            );
                        })(z);
                        (0, n.useEffect)(
                            () => (
                                !w && x && j && y(new (Se())(x, Object.assign({}, l))),
                                () => {
                                    w && (w.destroy(), y(void 0));
                                }
                            ),
                            [x, j, l, w],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == M.current || M.current();
                                },
                                [],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    re(() => {
                                        w && N();
                                    }),
                                [N, w],
                            ),
                            (0, n.useEffect)(() => {
                                i > 0 && I(i);
                            }, [i, I]),
                            (0, n.useEffect)(() => {
                                s > 0 && O(s);
                            }, [s, O]),
                            (0, n.useEffect)(() => {
                                D &&
                                    ((D.setScrollLeft = k),
                                    (D.setScrollTop = P),
                                    (D.setScrollLeftImmediately = I),
                                    (D.setScrollTopImmediately = O),
                                    (D.updateScrollArea = T),
                                    (D.getScrollbar = R));
                            }, [D, k, I, P, O, T, R]);
                        const K = B()(
                            'ScrollArea_base_47',
                            {
                                ScrollArea_base__scrollIndent_1d: A,
                                ScrollArea_base__hidden_ec: !g,
                                ScrollArea_base__verticalScrollbarMargin_50: _,
                                ScrollArea_base__multiple_44: h,
                            },
                            p,
                        );
                        return r().createElement('div', { className: K, ref: U }, F);
                    }),
                    Le = [
                        'children',
                        'isEnabled',
                        'selectedItemId',
                        'scrollAreaKey',
                        'withCompleteTrigger',
                        'containerClasses',
                    ];
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const Ne = (e) => {
                        let u = e.children,
                            t = e.isEnabled,
                            i = void 0 === t || t,
                            o = e.selectedItemId,
                            s = e.scrollAreaKey,
                            l = void 0 === s ? 'scrollArea' : s,
                            a = e.withCompleteTrigger,
                            c = void 0 !== a && a,
                            d = e.containerClasses,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Le);
                        const m = (0, n.useState)(!1),
                            A = m[0],
                            _ = m[1],
                            h = (0, n.useRef)({}),
                            D = (0, n.useRef)(null),
                            F = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            C = (0, n.useCallback)(() => {
                                _(!0);
                            }, []),
                            b = (0, n.useCallback)(() => {
                                _(!1);
                            }, []),
                            B = (0, n.useCallback)(() => {
                                const e = p.current,
                                    u = D.current,
                                    t = h.current;
                                if (e && t && u) {
                                    const n = e.offsetTop + 0.5 * (e.offsetHeight - u.offsetHeight);
                                    t.setScrollTop(n, void 0, c ? C : void 0);
                                }
                            }, [C, c]);
                        (0, n.useEffect)(() => {
                            if (i && null !== o) return re(B);
                        }, [l, B, o, i]);
                        const g = !(!F.current || !F.current.scrollbar) && F.current.scrollbar.scrollbarYActive,
                            f = {
                                scrollContainerRef: D,
                                selectedItemRef: p,
                                selectedItemId: o,
                                isScrollComplete: A,
                                scrollbarActive: g,
                                onScrollAnimationComplete: b,
                            },
                            v = (0, n.cloneElement)(u, f);
                        return r().createElement(
                            'div',
                            { className: d, ref: D },
                            r().createElement(xe, Me({ ref: F, key: l, scrollAreaContainer: h.current }, E), v),
                        );
                    },
                    Re = {
                        base: 'DropDownItem_base_b0',
                        base__small: 'DropDownItem_base__small_fd',
                        base__medium: 'DropDownItem_base__medium_99',
                        base__selected: 'DropDownItem_base__selected_ac',
                        base__disabled: 'DropDownItem_base__disabled_b3',
                    },
                    Te = ['size', 'classMix', 'onClick', 'ItemRenderer'],
                    ke = (0, n.memo)((e) => {
                        let u = e.size,
                            t = e.classMix,
                            i = e.onClick,
                            o = e.ItemRenderer,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Te);
                        const l = s.id,
                            a = s.isSelected,
                            c = s.isDisabled,
                            d = s.label,
                            E = s.soundHover,
                            m = s.soundClick,
                            A = (0, n.useCallback)(
                                (e) => {
                                    c || (i && i(e, l));
                                },
                                [l, c, i],
                            ),
                            _ = (0, n.useCallback)(() => {
                                c || (E && N(E));
                            }, [c, E]),
                            h = (0, n.useCallback)(() => {
                                c || (m && N(m));
                            }, [c, m]);
                        if (o)
                            return r().createElement(
                                'div',
                                { onMouseEnter: _, onMouseDown: h, onClick: A },
                                r().createElement(o, s),
                            );
                        const D = B()(
                            Re.base,
                            u && Re[`base__${u}`],
                            a && Re.base__selected,
                            c && Re.base__disabled,
                            t,
                        );
                        return r().createElement(
                            'div',
                            { className: D, onMouseEnter: _, onMouseDown: h, onClick: A },
                            d,
                        );
                    }),
                    Ie = { base__withScroll: 'DropDownItems_base__withScroll_ec' };
                function Pe() {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                }
                const Oe = ({
                        size: e,
                        items: u,
                        selectedIds: t,
                        selectedItemId: n,
                        selectedItemRef: i,
                        onClick: o,
                        parentId: s,
                        soundHover: l,
                        soundClick: a,
                        itemClassMix: c,
                        ItemRenderer: d,
                        scrollbarActive: E,
                    }) => {
                        const m = B()(Ie.base, E && Ie.base__withScroll);
                        return r().createElement(
                            'div',
                            { className: m },
                            u.map((u) => {
                                const E = `${s}_${u.id}`;
                                return r().createElement(
                                    'div',
                                    { id: s ? E : void 0, key: E, ref: u.id === n ? i : null },
                                    r().createElement(
                                        ke,
                                        Pe({ size: e, soundHover: l, soundClick: a, classMix: c, ItemRenderer: d }, u, {
                                            onClick: o,
                                            isSelected: t.includes(u.id),
                                        }),
                                    ),
                                );
                            }),
                        );
                    },
                    He = {
                        base: 'DropDownList_base_40',
                        base__small: 'DropDownList_base__small_a9',
                        base__medium: 'DropDownList_base__medium_f3',
                        scrollMix: 'DropDownList_scrollMix_19',
                    },
                    We = {
                        handlers: ['click-rail', 'keyboard', 'wheel', 'drag-thumb'],
                        wheelSpeed: 6,
                        suppressScrollX: !0,
                        animationDuration: 300,
                        minScrollbarLength: 20,
                    },
                    Ye = ({
                        parentId: e,
                        size: u = be.Medium,
                        items: t,
                        selectedIds: i,
                        isOpen: o,
                        autoScroll: s,
                        classMix: l,
                        itemClassMix: a,
                        ItemRenderer: c,
                        onClick: d,
                        soundHover: E,
                        soundClick: m,
                    }) => {
                        const A = (0, n.useState)(null),
                            _ = A[0],
                            h = A[1],
                            D = Y(o);
                        (0, n.useEffect)(() => {
                            if (o && !D) {
                                const e = ((e, u) => {
                                    if (!u.length) return null;
                                    const t = e.find((e) => u.includes(e.id));
                                    return t ? t.id : null;
                                })(t, i);
                                null !== e && h(e);
                            }
                            o || h(null);
                        }, [o, t, i, D]);
                        const F = B()(He.base, He[`base__${u}`], l),
                            p = e ? `${e}_list` : void 0;
                        return r().createElement(
                            'div',
                            { id: p, className: F },
                            r().createElement(
                                Ne,
                                { selectedItemId: _, isEnabled: s, scrollSettings: We, classMix: He.scrollMix },
                                r().createElement(Oe, {
                                    parentId: e,
                                    items: t,
                                    size: u,
                                    selectedIds: i,
                                    onClick: d,
                                    soundHover: E,
                                    soundClick: m,
                                    itemClassMix: a,
                                    ItemRenderer: c,
                                }),
                            ),
                        );
                    },
                    Xe = {
                        base: 'PureDropDown_base_7e',
                        base__small: 'PureDropDown_base__small_98',
                        base__medium: 'PureDropDown_base__medium_5b',
                        control__down: 'PureDropDown_control__down_21',
                        list: 'PureDropDown_list_8b',
                        list__up: 'PureDropDown_list__up_83',
                        list__down: 'PureDropDown_list__down_b3',
                        list__under: 'PureDropDown_list__under_de',
                        list__above: 'PureDropDown_list__above_a1',
                    },
                    Ue = (0, n.memo)(
                        ({
                            componentId: e,
                            containerRef: u,
                            items: t,
                            selected: i = [],
                            variant: o = Ce.Basic,
                            size: s = be.Medium,
                            multiple: l = !1,
                            autoScroll: a = !0,
                            placeholder: c,
                            classMix: d,
                            ItemRenderer: E,
                            open: m,
                            tooltipArgs: A,
                            onChanges: _,
                            onOpen: h,
                            onClose: D,
                            onClick: F,
                            onClickOutside: p,
                            onMouseEnter: C,
                            onMouseDown: b,
                            onMouseUp: g,
                            onMouseLeave: f,
                            soundHover: v = 'highlight',
                            soundClick: w = 'play',
                            soundItemHover: y,
                            soundItemClick: S,
                            ControlRenderer: x,
                        }) => {
                            const L = (0, n.useRef)(null),
                                N = (0, n.useRef)(null),
                                R = (0, n.useRef)({ open: !1, listAbove: !1 }),
                                T = (0, n.useState)(!1),
                                k = T[0],
                                I = T[1],
                                P = (0, n.useState)(!1),
                                O = P[0],
                                H = P[1],
                                W = ((e, u) => {
                                    const t = Array.isArray(e) ? e : [e];
                                    return !u && t.length > 1 ? t.slice(0, 1) : t;
                                })(i, l),
                                Y = o !== Ce.Disabled,
                                X = void 0 === m,
                                U = Boolean(X ? k : m),
                                V = (0, n.useCallback)(() => {
                                    R.current.open && ((R.current.open = !1), I(!1), D && D());
                                }, [D]);
                            oe(ee.n.ESCAPE, V, U);
                            const $ = (0, n.useCallback)(() => {
                                p && p(), X && (I(!1), (R.current.open = !1), D && D());
                            }, [p, D, X]);
                            (0, n.useEffect)(() => {
                                const e = L.current;
                                if (e && U)
                                    return (
                                        M.c1.register(e, $),
                                        () => {
                                            M.c1.unregister(e, $);
                                        }
                                    );
                            }, [U, $]),
                                (0, n.useEffect)(() => {
                                    void 0 !== m && (R.current.open = m);
                                }, [m]);
                            const z = (0, n.useCallback)(() => {
                                if (!L.current || !N.current) return;
                                const e = u && u.current,
                                    t = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    n =
                                        L.current.getBoundingClientRect().bottom +
                                            N.current.getBoundingClientRect().height >
                                        t;
                                n !== R.current.listAbove && ((R.current.listAbove = n), H(n));
                            }, [u]);
                            (0, n.useEffect)(() => re(z), [z, s, t.length]);
                            const j = (0, n.useCallback)(
                                    (e) => {
                                        const u = W.findIndex((u) => u === e) > -1;
                                        let t = [];
                                        (t = l ? (u ? W.filter((u) => u !== e) : [e, ...W]) : u ? [] : [e]), _ && _(t);
                                    },
                                    [l, _, W],
                                ),
                                K = (0, n.useCallback)(() => {
                                    X &&
                                        ((R.current.open = !R.current.open),
                                        I(R.current.open),
                                        R.current.open ? h && h() : D && D());
                                }, [X, h, D]),
                                G = (0, n.useCallback)(
                                    (e) => {
                                        Y && K(), F && F(e);
                                    },
                                    [Y, F, K],
                                ),
                                q = (0, n.useCallback)(
                                    (e, u) => {
                                        F && F(e, u), j(u), !l && K();
                                    },
                                    [F, l, K, j],
                                ),
                                Z = (0, n.useCallback)((e) => C && C(e), [C]),
                                Q = (0, n.useCallback)((e) => g && g(e), [g]),
                                J = (0, n.useCallback)((e) => b && b(e), [b]),
                                ue = (0, n.useCallback)((e) => f && f(e), [f]),
                                te = (0, n.useMemo)(
                                    () =>
                                        t
                                            .filter((e) => W.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [t, W],
                                ),
                                ne = (0, n.useMemo)(() => {
                                    if (!x) return;
                                    const e = t.filter((e) => W.includes(e.id));
                                    return 0 !== e.length ? r().createElement(x, e) : void 0;
                                }, [t, W, x]),
                                ie = B()(Xe.base, Xe[`base__${s}`], d && d.base),
                                se = B()(Xe.control, U && Xe.control__down),
                                le = B()(Xe.list, U ? Xe.list__down : Xe.list__up, O ? Xe.list__above : Xe.list__under);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: L,
                                    className: ie,
                                    onMouseEnter: Z,
                                    onMouseUp: Q,
                                    onMouseDown: J,
                                    onMouseLeave: ue,
                                },
                                r().createElement(
                                    'div',
                                    { className: se },
                                    r().createElement(
                                        pe,
                                        { tooltipArgs: A },
                                        r().createElement(ve, {
                                            parentId: e,
                                            size: s,
                                            variant: o,
                                            isOpen: U,
                                            placeholder: c,
                                            label: te,
                                            classMix: d && d.control,
                                            onClick: G,
                                            soundHover: v,
                                            soundClick: w,
                                            customRenderer: ne,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { ref: N, className: le },
                                    r().createElement(Ye, {
                                        parentId: e,
                                        size: s,
                                        items: t,
                                        selectedIds: W,
                                        isOpen: U,
                                        autoScroll: a,
                                        classMix: d && d.list,
                                        itemClassMix: d && d.item,
                                        ItemRenderer: E,
                                        onClick: q,
                                        soundHover: y || v,
                                        soundClick: S || w,
                                    }),
                                ),
                            );
                        },
                    ),
                    Ve = ({ binding: e, text: u = '', classMix: t, alignment: i = g.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, o) =>
                                      r().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${o}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = g.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return S.includes(t)
                                                                ? y(e)
                                                                : ((e, u = g.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          w(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(w(e, n, g.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, i, e).map((e, u) =>
                                              r().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                let $e;
                var ze;
                ((ze = $e || ($e = {})).backport = 'backport'),
                    (ze.unbound = 'unbound'),
                    (ze.normal = 'normal'),
                    (ze.absent = 'absent');
                const je = {
                        base__defence: 'DropDownRenderer_base__defence_60',
                        base__counterattack: 'DropDownRenderer_base__counterattack_31',
                        base__offence: 'DropDownRenderer_base__offence_62',
                        base: 'DropDownRenderer_base_8a',
                        base__selected: 'DropDownRenderer_base__selected_a8',
                        base__disabled: 'DropDownRenderer_base__disabled_90',
                        content: 'DropDownRenderer_content_79',
                        icon: 'DropDownRenderer_icon_f5',
                        count__defence: 'DropDownRenderer_count__defence_8b',
                        count__counterattack: 'DropDownRenderer_count__counterattack_7c',
                        count__offence: 'DropDownRenderer_count__offence_26',
                    },
                    Ke = (0, n.memo)(({ meta: e, isSelected: u }) => {
                        const t = e,
                            i = t.index,
                            o = t.side,
                            s = W(`model.${o}.dropdownList`)[i].value,
                            l = s.amount,
                            a = s.tooltip,
                            c = s.enabled,
                            d = s.name,
                            E = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.hbCoin.c_16x16.$dyn(d)})`,
                                }),
                                [d],
                            ),
                            m = (0, n.useMemo)(() => {
                                const e = B()(je.count, je[`count__${d}`]);
                                return [
                                    {
                                        amount: r().createElement(
                                            'div',
                                            { className: e },
                                            ((u = l), M.Z5.getNumberFormat(u, M.B3.INTEGRAL)),
                                        ),
                                    },
                                    R.strings.hb_coin.name.short.$dyn(d) + ' (%(amount))',
                                ];
                                var u;
                            }, [l, d]),
                            A = m[0],
                            _ = m[1],
                            h = (0, n.useMemo)(
                                () =>
                                    ((e, u) =>
                                        ((e, u) => ({
                                            isEnabled: e !== $e.absent,
                                            args: u,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === $e.unbound
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === $e.backport,
                                            ignoreMouseClick: !0,
                                        }))(e.type, Object.assign({ id: e.id }, u || {})))(a, { name: d, side: o }),
                                [a, d, o],
                            ),
                            D = B()(je.base, u && je.base__selected, !c && je.base__disabled, je[`base__${d}`]);
                        return r().createElement(
                            ce,
                            h,
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    'div',
                                    { className: D },
                                    r().createElement(
                                        'div',
                                        { className: je.content },
                                        r().createElement('div', { className: je.icon, style: E }),
                                        r().createElement(Ve, { text: _, binding: A }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ge = {
                        base__defence: 'DropDownControlRenderer_base__defence_4b',
                        base__counterattack: 'DropDownControlRenderer_base__counterattack_79',
                        base__offence: 'DropDownControlRenderer_base__offence_8b',
                        base: 'DropDownControlRenderer_base_b5',
                        base__selected: 'DropDownControlRenderer_base__selected_3c',
                        icon: 'DropDownControlRenderer_icon_d4',
                        count: 'DropDownControlRenderer_count_02',
                        text: 'DropDownControlRenderer_text_88',
                        amount: 'DropDownControlRenderer_amount_87',
                    },
                    qe = (0, n.memo)((e) => {
                        const u = e[0].meta,
                            t = u.index,
                            i = u.name,
                            o = u.side,
                            s = B()(Ge.base, Ge[`base__${i}`]),
                            l = W(`model.${o}.dropdownList`)[t].value,
                            a = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.hbCoin.c_16x16.$dyn(i)})`,
                                }),
                                [i],
                            ),
                            c = M.Z5.getNumberFormat(l.amount, M.B3.INTEGRAL);
                        return r().createElement(
                            'div',
                            { className: s },
                            r().createElement('div', { className: Ge.icon, style: a }),
                            r().createElement(Be, { content: R.strings.hb_coin.name.short.$dyn(i), classMix: Ge.text }),
                            r().createElement(
                                'div',
                                { className: Ge.amount },
                                ' ',
                                '(',
                                r().createElement('div', { className: Ge.count }, c),
                                ')',
                            ),
                        );
                    }),
                    Ze = {
                        base: 'ExchangeSide_base_55',
                        base__disabled: 'ExchangeSide_base__disabled_6c',
                        coinIcon: 'ExchangeSide_coinIcon_69',
                        coinIcon__disabled: 'ExchangeSide_coinIcon__disabled_7e',
                        coinText__defence: 'ExchangeSide_coinText__defence_39',
                        coinText__counterattack: 'ExchangeSide_coinText__counterattack_34',
                        coinText__offence: 'ExchangeSide_coinText__offence_27',
                        coinText__disabled: 'ExchangeSide_coinText__disabled_9e',
                        ddBase: 'ExchangeSide_ddBase_5a',
                        ddList: 'ExchangeSide_ddList_81',
                    },
                    Qe = { base: Ze.ddBase, list: Ze.ddList },
                    Je = (0, n.memo)(({ side: e }) => {
                        const u = W(),
                            t = u.stepperValue,
                            i = u.stepperMinValue,
                            o = u.stepperMaxValue,
                            s = u.onStepperValueChanged,
                            l = W(`model.${e}`),
                            a = l.onDropdownItemClicked,
                            c = l.coinName,
                            d = W(`model.${e}.dropdownList`),
                            E = (0, n.useMemo)(
                                () =>
                                    ((e, u) =>
                                        e.map(({ value: e }, t) => ({
                                            id: t,
                                            label: R.strings.hb_coin.name.short.$dyn(e.name),
                                            isDisabled: !e.enabled,
                                            meta: { index: t, side: u, name: e.name },
                                        })))(d, e),
                                [d, e],
                            ),
                            m = d.filter(({ value: e }) => e.name === c)[0],
                            A = m.value,
                            _ = d.indexOf(m),
                            h = (0, n.useCallback)(
                                (e) => {
                                    if (e && e.length > 0) {
                                        const u = e[0],
                                            t = E[u].meta;
                                        a({ coinName: t.name });
                                    }
                                },
                                [a, E],
                            ),
                            D = (0, n.useCallback)(
                                (e) => {
                                    e < i || e > o || s({ value: e });
                                },
                                [s, i, o],
                            ),
                            F = !A.enabled || o === i,
                            p = (0, n.useMemo)(
                                () => ({
                                    base: F && Ze.base__disabled,
                                    currencyIcon: B()(
                                        Ze.coinIcon,
                                        F && Ze.coinIcon__disabled,
                                        Ze[`coinIcon__${A.name}`],
                                    ),
                                    currencyIconStyle: {
                                        backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.hbCoin.c_16x16.$dyn(A.name)}')`,
                                    },
                                    input: B()(Ze.coinText, F && Ze.coinText__disabled, Ze[`coinText__${A.name}`]),
                                }),
                                [A.name, F],
                            );
                        return r().createElement(
                            'div',
                            { className: Ze.base },
                            r().createElement(ne, {
                                width: 118,
                                size: 'medium',
                                minimum: i,
                                value: t,
                                maximum: o,
                                isFocused: !1,
                                currencyType: Q.credits,
                                classMix: p,
                                onChange: D,
                            }),
                            r().createElement(Ue, {
                                items: E,
                                selected: _,
                                ItemRenderer: Ke,
                                classMix: Qe,
                                ControlRenderer: qe,
                                onChanges: h,
                            }),
                        );
                    }),
                    eu = (0, n.memo)(() =>
                        r().createElement(
                            'div',
                            { className: 'ExchangeBlock_base_70' },
                            r().createElement(Je, { side: X.Left }),
                            r().createElement('div', { className: 'ExchangeBlock_arrow_53' }),
                            r().createElement(Je, { side: X.Right }),
                        ),
                    ),
                    uu = () =>
                        r().createElement(
                            'div',
                            { className: 'ExchangeCoinsViewApp_base_ba' },
                            r().createElement(q, null),
                            r().createElement(
                                'div',
                                { className: 'ExchangeCoinsViewApp_title_e0' },
                                R.strings.hb_shop.coins_exchange.title(),
                            ),
                            r().createElement(
                                'div',
                                { className: 'ExchangeCoinsViewApp_subTitle_e7' },
                                R.strings.hb_shop.coins_exchange.subTitle(),
                            ),
                            r().createElement(eu, null),
                        );
                engine.whenReady.then(() => {
                    o().render(
                        r().createElement(C, null, r().createElement(uu, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [u, t, n] = deferred[l], i = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [u, t, n];
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
        (() => {
            var e = { 334: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [i, o, s] = t,
                        l = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var a = s(__webpack_require__);
                    }
                    for (u && u(t); l < i.length; l++)
                        (r = i[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(a);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6466));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
