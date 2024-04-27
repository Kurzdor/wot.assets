/*! For license information please see Chat.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
            8380: (e) => {
                'use strict';
                function t(e) {
                    return getComputedStyle(e);
                }
                function n(e, t) {
                    for (var n in t) {
                        var r = t[n];
                        'number' == typeof r && (r += 'px'), (e.style[n] = r);
                    }
                    return e;
                }
                function r(e) {
                    var t = document.createElement('div');
                    return (t.className = e), t;
                }
                var o =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function i(e, t) {
                    if (!o) throw new Error('No element matching method supported');
                    return o.call(e, t);
                }
                function l(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function s(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return i(e, t);
                    });
                }
                var a = function (e) {
                        return 'ps__thumb-' + e;
                    },
                    c = function (e) {
                        return 'ps__rail-' + e;
                    },
                    u = function (e) {
                        return 'ps__button-start-' + e;
                    },
                    d = function (e) {
                        return 'ps__track_' + e;
                    },
                    h = function (e) {
                        return 'ps__button-end-' + e;
                    },
                    m = 'ps__child--consume',
                    v = 'ps--focus',
                    f = 'ps--clicking',
                    b = function (e) {
                        return 'ps--active-' + e;
                    },
                    _ = function (e) {
                        return 'ps--scrolling-' + e;
                    },
                    p = { x: null, y: null },
                    g = { immediately: !1 };
                function w(e, t, n) {
                    void 0 === n && (n = {});
                    var r = e.element.classList,
                        o = _(t);
                    r.contains(o) ? clearTimeout(p[t]) : r.add(o);
                }
                function E(e, t, n) {
                    void 0 === n && (n = {}),
                        Object.assign(g, n).immediately
                            ? e.isAlive && e.element.classList.remove(_(t))
                            : (p[t] = setTimeout(function () {
                                  return e.isAlive && e.element.classList.remove(_(t));
                              }, e.settings.scrollingThreshold));
                }
                var y = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    L = { isEmpty: { configurable: !0 } };
                (y.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (y.prototype.unbind = function (e, t) {
                        var n = this;
                        this.handlers[e] = this.handlers[e].filter(function (r) {
                            return !(!t || r === t) || (n.element.removeEventListener(e, r, !1), !1);
                        });
                    }),
                    (y.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (L.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(y.prototype, L);
                var S = function () {
                    this.eventElements = [];
                };
                function T(e) {
                    return parseInt(e, 10) || 0;
                }
                (S.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new y(e)), this.eventElements.push(t)), t;
                }),
                    (S.prototype.bind = function (e, t, n) {
                        this.eventElement(e).bind(t, n);
                    }),
                    (S.prototype.unbind = function (e, t, n) {
                        var r = this.eventElement(e);
                        r.unbind(t, n), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
                    }),
                    (S.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (S.prototype.once = function (e, t, n) {
                        var r = this.eventElement(e);
                        r.bind(t, function e(o) {
                            r.unbind(t, e), n(o);
                        });
                    });
                var M = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function C() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function P(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var k = function (e, t, n, r, o, i) {
                        var l;
                        if ((void 0 === r && (r = !0), void 0 === o && (o = !1), void 0 === i && (i = !1), 'top' === t))
                            l = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                        else {
                            if ('left' !== t) throw new Error('A proper axis should be provided');
                            l = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                        }
                        !(function (e, t, n, r, o, i) {
                            var l = n[0],
                                s = n[1],
                                a = n[2],
                                c = n[3],
                                u = n[4],
                                d = n[5];
                            void 0 === r && (r = !0), void 0 === o && (o = !1), void 0 === i && (i = !1);
                            var h = e.element;
                            e.reach &&
                                ((e.reach[c] = null),
                                h[a] < 1 && (e.reach[c] = 'start'),
                                h[a] > e[l] - e[s] - 1 && (e.reach[c] = 'end'),
                                t &&
                                    !o &&
                                    (h.dispatchEvent(P('ps-scroll-' + c)),
                                    t < 0
                                        ? h.dispatchEvent(P('ps-scroll-' + u))
                                        : t > 0 && h.dispatchEvent(P('ps-scroll-' + d)),
                                    r &&
                                        (function (e, t) {
                                            w(e, t), E(e, t);
                                        })(e, c)),
                                e.reach[c] && (t || i) && h.dispatchEvent(P('ps-' + c + '-reach-' + e.reach[c])));
                        })(e, n, l, r, o, i);
                    },
                    R = function (e, t, r, o) {
                        void 0 === t && (t = !1), void 0 === r && (r = 0), void 0 === o && (o = !1);
                        var i = e.element;
                        if (i) {
                            if (
                                ((e.containerWidth = Math.round(i.getBoundingClientRect().width)),
                                (e.containerHeight = Math.round(i.getBoundingClientRect().height)),
                                (e.contentWidth = Math.round(i.scrollWidth) - 2 * r),
                                (e.contentHeight = Math.round(i.scrollHeight)),
                                !o)
                            ) {
                                e.contentWidth = Math.round(i.scrollWidth) - 2 * r;
                                var a = e.contentWidth - e.containerWidth + r;
                                i.scrollLeft < r ? (i.scrollLeft = r) : i.scrollLeft > a && (i.scrollLeft = a);
                            }
                            var u = Math.floor(i.scrollTop),
                                d = Math.floor(i.scrollLeft) - r,
                                h = parseFloat(getComputedStyle(document.documentElement).fontSize);
                            i.contains(e.scrollbarXRail) ||
                                (s(i, c('x')).forEach(function (e) {
                                    return l(e);
                                }),
                                i.appendChild(e.scrollbarXRail)),
                                i.contains(e.scrollbarYRail) ||
                                    (s(i, c('y')).forEach(function (e) {
                                        return l(e);
                                    }),
                                    i.appendChild(e.scrollbarYRail)),
                                !e.settings.suppressScrollX &&
                                e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                    ? ((e.scrollbarXActive = !0),
                                      (e.railXWidth = e.containerWidth - e.railXMarginWidth * h - 15 * h),
                                      (e.railXRatio = e.containerWidth / e.railXWidth),
                                      (e.scrollbarXWidth = O(e, T((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                      (e.scrollbarXLeft = T(
                                          ((e.negativeScrollAdjustment + d) * (e.railXWidth - e.scrollbarXWidth)) /
                                              (e.contentWidth - e.containerWidth),
                                      )),
                                      e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                    : (e.scrollbarXActive = !1),
                                !e.settings.suppressScrollY &&
                                e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                    ? ((e.scrollbarYActive = !0),
                                      (e.railYHeight = e.containerHeight - e.railYMarginHeight * h - 15 * h),
                                      (e.railYRatio = e.containerHeight / e.railYHeight),
                                      (e.scrollbarYHeight = O(
                                          e,
                                          T((e.railYHeight * e.containerHeight) / e.contentHeight),
                                      )),
                                      (e.scrollbarYTop = T(
                                          (u * (e.railYHeight - e.scrollbarYHeight)) /
                                              (e.contentHeight - e.containerHeight),
                                      )))
                                    : (e.scrollbarYActive = !1),
                                e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                    (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                                e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                    (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                                (function (e, t, r) {
                                    var o = { width: t.railXWidth },
                                        i = Math.floor(e.scrollTop);
                                    t.isRtl
                                        ? (o.left =
                                              t.negativeScrollAdjustment +
                                              e.scrollLeft +
                                              t.containerWidth -
                                              t.contentWidth)
                                        : (o.left = e.scrollLeft),
                                        t.isScrollbarXUsingBottom
                                            ? (o.bottom = t.scrollbarXBottom - i)
                                            : (o.top = t.scrollbarXTop + i),
                                        n(t.scrollbarXRail, o);
                                    var l = { top: i, height: t.railYHeight };
                                    t.isScrollbarYUsingRight
                                        ? t.isRtl
                                            ? (l.right =
                                                  t.contentWidth -
                                                  (t.negativeScrollAdjustment + e.scrollLeft) -
                                                  t.scrollbarYRight -
                                                  t.scrollbarYOuterWidth)
                                            : (l.right = t.scrollbarYRight - e.scrollLeft)
                                        : t.isRtl
                                          ? (l.left =
                                                t.negativeScrollAdjustment +
                                                e.scrollLeft +
                                                2 * t.containerWidth -
                                                t.contentWidth -
                                                t.scrollbarYLeft -
                                                t.scrollbarYOuterWidth)
                                          : (l.left = t.scrollbarYLeft + e.scrollLeft),
                                        n(t.scrollbarYRail, l),
                                        n(t.scrollbarX, {
                                            left: t.scrollbarXLeft,
                                            width: t.scrollbarXWidth - t.railBorderXWidth * r,
                                        }),
                                        n(t.scrollbarY, {
                                            top: t.scrollbarYTop,
                                            height: t.scrollbarYHeight - t.railBorderYWidth * r,
                                        });
                                })(i, e, h),
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
                                    ? (i.classList.add(b('x')), k(e, 'left', d - e.lastScrollLeft, !0, t))
                                    : (i.classList.remove(b('x')),
                                      (e.scrollbarXWidth = 0),
                                      (e.scrollbarXLeft = 0),
                                      (i.scrollLeft = 0)),
                                e.scrollbarYActive
                                    ? (i.classList.add(b('y')), k(e, 'top', i.scrollTop - e.lastScrollTop, !0, t))
                                    : (i.classList.remove(b('y')),
                                      (e.scrollbarYHeight = 0),
                                      (e.scrollbarYTop = 0),
                                      (i.scrollTop = 0)),
                                (e.lastScrollTop = u),
                                (e.lastScrollLeft = d),
                                (e.scrollTopPercent = i.scrollTop / i.scrollHeight),
                                (e.scrollLeftPercent = i.scrollLeft / i.scrollWidth);
                        }
                    };
                function O(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
                    );
                }
                var A = {
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
                    x = { breakBounds: !1, startBound: 0, endBound: 0 },
                    Y = function (e) {
                        var t = e.scrollableDomEle,
                            n = e.onAnimationCompleteCallback,
                            r = e.direction,
                            o = e.onRefUpdateCallback,
                            i = e.duration,
                            l = e.cubicBezierPoints,
                            s = e.easingPreset,
                            a = e.scrollAmount,
                            c = e.onCheckForBreakCallback,
                            u = e.boundsInfo;
                        void 0 === u && (u = x);
                        var d = null,
                            h = null,
                            m = null,
                            v = null,
                            f = t === window,
                            b = ['left', 'right'].indexOf(r) > -1,
                            _ = ['right', 'bottom'].indexOf(r) > -1;
                        b
                            ? ((h = f ? 'scrollX' : 'scrollLeft'),
                              (v = f ? 'innerWidth' : 'width'),
                              (m = 'scrollWidth'))
                            : ((h = f ? 'scrollY' : 'scrollTop'),
                              (v = f ? 'innerHeight' : 'height'),
                              (m = 'scrollHeight'));
                        var p = t[h],
                            g = (function (e) {
                                var t,
                                    n = e.scrollableDomEle,
                                    r = e.elementLengthProp,
                                    o = e.initialScrollPosition,
                                    i = e.isHorizontalDirection,
                                    l = e.scrollLengthProp,
                                    s = e.direction;
                                if (e.isWindow) {
                                    var a = document.documentElement;
                                    t = i ? a.offsetWidth : a.offsetHeight;
                                } else t = (n[l] - n.getBoundingClientRect()[r]) | 0;
                                return ['left', 'top'].includes(s) ? o : t - o;
                            })({
                                isWindow: f,
                                scrollableDomEle: t,
                                elementLengthProp: v,
                                initialScrollPosition: p,
                                isHorizontalDirection: b,
                                scrollLengthProp: m,
                                direction: r,
                            });
                        !isNaN(a) && a < g && (g = a);
                        var w = function e(r) {
                            if (!c || !c()) {
                                var a = r - d,
                                    m = (function (e) {
                                        var t = e.easingPreset,
                                            n = e.cubicBezierPoints,
                                            r = e.runTime / e.duration;
                                        if (A.hasOwnProperty(t)) return A[t](r);
                                        if (
                                            n &&
                                            !isNaN(n.x1) &&
                                            !isNaN(n.y1) &&
                                            !isNaN(n.x2) &&
                                            !isNaN(n.y2) &&
                                            n.x1 >= 0 &&
                                            n.x2 >= 0
                                        )
                                            return (function (e) {
                                                var t,
                                                    n = e.percentTimeElapsed,
                                                    r = e.x1,
                                                    o = e.y1,
                                                    i = e.x2,
                                                    l = e.y2;
                                                return (
                                                    1 -
                                                    (r * ((t = n), Math.pow(t, 3)) +
                                                        o *
                                                            (function (e) {
                                                                return 3 * e * e * (1 - e);
                                                            })(n) +
                                                        i *
                                                            (function (e) {
                                                                return 3 * e * Math.pow(1 - e, 2);
                                                            })(n) +
                                                        l *
                                                            (function (e) {
                                                                return Math.pow(1 - e, 3);
                                                            })(n))
                                                );
                                            })({ percentTimeElapsed: r, x1: n.x1, x2: n.x2, y1: n.y1, y2: n.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: s, cubicBezierPoints: l, runTime: a, duration: i });
                                if (!isNaN(m)) {
                                    var v = Math.round(m * g),
                                        w = _ ? v + p : g - v;
                                    if (
                                        (u.breakBounds &&
                                            (w < u.startBound
                                                ? (w = u.startBound)
                                                : w > u.endBound && (w = u.endBound)),
                                        a < i)
                                    ) {
                                        if (f) {
                                            var E = b ? w : 0,
                                                y = b ? 0 : w;
                                            window.scrollTo(E, y);
                                        } else t[h] = w;
                                        o && o(w), requestAnimationFrame(e);
                                    } else n && n();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (d = e), w(e);
                        });
                    },
                    W = function (e, t, n) {
                        return function (r) {
                            t = t.toLowerCase();
                            var o = null,
                                i = function () {
                                    if (1 === r.buttons) {
                                        if (
                                            !r.target.closest('.ps__rail-' + t) ||
                                            !r.target.closest('.ps__track_' + t)
                                        ) {
                                            var i = (function (e) {
                                                    var t = e.e,
                                                        n = e.i;
                                                    return 'y' === e.axis
                                                        ? {
                                                              cursorPosition: t.screenY,
                                                              windowScrolled: window.pageYOffset,
                                                              elementPosition:
                                                                  n.scrollbarYRail.getBoundingClientRect().top,
                                                          }
                                                        : {
                                                              cursorPosition: t.screenX,
                                                              windowScrolled: window.pageXOffset,
                                                              elementPosition:
                                                                  n.scrollbarXRail.getBoundingClientRect().left,
                                                          };
                                                })({ axis: t, e: r, i: e }),
                                                l = i.cursorPosition - i.windowScrolled - i.elementPosition,
                                                s = (function (e) {
                                                    var t = e.i;
                                                    return e.cursorPositionOnRail >
                                                        ('y' === e.axis ? t.scrollbarYTop : t.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: l, i: e });
                                            (function (e) {
                                                var t = e.axis,
                                                    n = e.cursorPositionOnRail,
                                                    r = e.direction,
                                                    o = e.i,
                                                    i = (function (e) {
                                                        var t = e.i,
                                                            n = e.cursorPositionOnRail;
                                                        if ('y' === e.axis) {
                                                            var r = t.scrollbarY.offsetTop,
                                                                o = r + t.scrollbarYHeight;
                                                            return n >= r && n <= o;
                                                        }
                                                        var i = t.scrollbarX.offsetLeft,
                                                            l = i + t.scrollbarXWidth;
                                                        return n >= i && n <= l;
                                                    })({ axis: t, i: o, cursorPositionOnRail: n });
                                                return i
                                                    ? ((function (e) {
                                                          var t = e.axis,
                                                              n = e.i,
                                                              r = e.cursorPositionOnRail,
                                                              o = (function (e, t) {
                                                                  if ('y' === e) {
                                                                      var n = t.contentHeight - t.containerHeight;
                                                                      return {
                                                                          rail: t.railYHeight,
                                                                          content: t.contentHeight,
                                                                          scrollbar: t.scrollbarYHeight,
                                                                          maxScroll: n,
                                                                      };
                                                                  }
                                                                  var r = t.contentWidth - t.containerWidth;
                                                                  return {
                                                                      rail: t.railXWidth,
                                                                      content: t.contentWidth,
                                                                      scrollbar: t.scrollbarXWidth,
                                                                      maxScroll: r,
                                                                  };
                                                              })(t, n),
                                                              i = (r - o.scrollbar / 2) / o.rail,
                                                              l = Math.round(
                                                                  Math.min(o.maxScroll, Math.max(0, o.content * i)),
                                                              );
                                                          'y' === t
                                                              ? (n.element.scrollTop = l)
                                                              : (n.element.scrollLeft = l);
                                                      })({ axis: t, i: o, cursorPositionOnRail: n }),
                                                      !0)
                                                    : ('y' === t
                                                          ? (o.element.scrollTop += r * o.containerHeight)
                                                          : (o.element.scrollLeft += r * o.containerWidth),
                                                      !1);
                                            })({ axis: t, cursorPositionOnRail: l, direction: s, i: e }) &&
                                                clearTimeout(o),
                                                R(e, !1, n);
                                        }
                                        r.stopPropagation();
                                    }
                                };
                            i(),
                                (o = setInterval(i, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(o);
                                });
                        };
                    };
                function H(e, t, n) {
                    var r = n[0],
                        o = n[1],
                        i = n[2],
                        l = n[3],
                        s = n[4],
                        a = n[5],
                        c = n[6],
                        u = n[7],
                        d = n[8],
                        h = e.element,
                        m = null,
                        v = null,
                        b = null;
                    function _(n) {
                        (h[c] = T(m + b * (n[i] - v))), w(e, u), R(e, !1, t), n.stopPropagation(), n.preventDefault();
                    }
                    function p() {
                        E(e, u), e[d].classList.remove(f), e.event.unbind(e.ownerDocument, 'mousemove', _);
                    }
                    e.event.bind(e[s], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((m = h[c]),
                            (v = t[i]),
                            (b = (e[o] - e[r]) / (e[l] - e[a])),
                            e.event.bind(e.ownerDocument, 'mousemove', _),
                            e.event.once(e.ownerDocument, 'mouseup', p),
                            e[d].classList.add(f),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var D = 1e3,
                    N = {
                        'click-rail': function (e, t) {
                            e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', W(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', W(e, 'x', t));
                        },
                        'drag-thumb': function (e, t) {
                            H(e, t, [
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
                                H(e, t, [
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
                            var n = e.element;
                            e.event.bind(e.ownerDocument, 'keydown', function (r) {
                                if (
                                    !((r.isDefaultPrevented && r.isDefaultPrevented()) || r.defaultPrevented) &&
                                    i(n, ':hover')
                                ) {
                                    var o,
                                        l = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (l) {
                                        if ('IFRAME' === l.tagName) l = l.contentDocument.activeElement;
                                        else for (; l.shadowRoot; ) l = l.shadowRoot.activeElement;
                                        if (
                                            i((o = l), 'input,[contenteditable]') ||
                                            i(o, 'select,[contenteditable]') ||
                                            i(o, 'textarea,[contenteditable]') ||
                                            i(o, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var s = 0,
                                        a = 0;
                                    switch (r.which) {
                                        case 37:
                                            s = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            a = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            s = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            a = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            a = r.shiftKey ? e.containerHeight : -e.containerHeight;
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
                                    (e.settings.suppressScrollX && 0 !== s) ||
                                        (e.settings.suppressScrollY && 0 !== a) ||
                                        ((n.scrollTop -= a),
                                        (n.scrollLeft += s),
                                        R(e, !1, t),
                                        (function (t, r) {
                                            var o = Math.floor(n.scrollTop);
                                            if (0 === t) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === o && r > 0) ||
                                                    (o >= e.contentHeight - e.containerHeight && r < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var i = n.scrollLeft;
                                            if (0 === r) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === i && t < 0) ||
                                                    (i >= e.contentWidth - e.containerWidth && t > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(s, a) && r.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, n) {
                            var r = e.element;
                            function o(o) {
                                var i = (function (e) {
                                        var t = -1 * e.deltaX,
                                            n = e.deltaY;
                                        return (
                                            (void 0 !== t && void 0 !== n) ||
                                                ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
                                            t != t && n != n && ((t = 0), (n = e.wheelDelta)),
                                            e.shiftKey ? [-n, -t] : [t, n]
                                        );
                                    })(o),
                                    l = i[0],
                                    s = i[1];
                                if (
                                    !(function (e, n, o) {
                                        if (!M.isWebKit && r.querySelector('select')) return !0;
                                        if (!r.contains(e)) return !1;
                                        for (var i = e; i && i !== r; ) {
                                            if (i.classList.contains(m)) return !0;
                                            var l = t(i);
                                            if (
                                                [l.overflow, l.overflowX, l.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var s = i.scrollHeight - i.clientHeight;
                                                if (
                                                    s > 0 &&
                                                    !((0 === i.scrollTop && o > 0) || (i.scrollTop === s && o < 0))
                                                )
                                                    return !0;
                                                var a = i.scrollWidth - i.clientWidth;
                                                if (
                                                    a > 0 &&
                                                    !((0 === i.scrollLeft && n < 0) || (i.scrollLeft === a && n > 0))
                                                )
                                                    return !0;
                                            }
                                            i = i.parentNode;
                                        }
                                        return !1;
                                    })(o.target, l, s)
                                ) {
                                    var a = !1,
                                        c = (l * e.settings.wheelSpeed) | 0,
                                        u = (s * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (s ? (r.scrollTop -= u) : (r.scrollTop += c), (a = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (l ? (r.scrollLeft += c) : (r.scrollLeft -= u), (a = !0))
                                        : ((r.scrollTop -= u), (r.scrollLeft += c)),
                                        R(e, !1, n),
                                        (a =
                                            a ||
                                            (function (t, n) {
                                                var o = Math.floor(r.scrollTop),
                                                    i = 0 === r.scrollTop,
                                                    l = o + r.offsetHeight === r.scrollHeight,
                                                    s = 0 === r.scrollLeft,
                                                    a = r.scrollLeft + r.offsetWidth === r.scrollWidth;
                                                return (
                                                    !(Math.abs(n) > Math.abs(t) ? i || l : s || a) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(l, s)),
                                        a && !o.ctrlKey && (o.stopPropagation(), o.preventDefault());
                                }
                            }
                            e.event.bind(r, 'wheel', o),
                                void 0 !== window.onmousewheel && e.event.bind(r, 'mousewheel', o);
                        },
                        touch: function (e, n) {
                            if (M.supportsTouch || M.supportsIePointer) {
                                var r = e.element,
                                    o = {},
                                    i = 0,
                                    l = {},
                                    s = null;
                                M.supportsTouch
                                    ? (e.event.bind(r, 'touchstart', d),
                                      e.event.bind(r, 'touchmove', h),
                                      e.event.bind(r, 'touchend', v))
                                    : M.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(r, 'pointerdown', d),
                                            e.event.bind(r, 'pointermove', h),
                                            e.event.bind(r, 'pointerup', v))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(r, 'MSPointerDown', d),
                                            e.event.bind(r, 'MSPointerMove', h),
                                            e.event.bind(r, 'MSPointerUp', v)));
                            }
                            function a(t, o) {
                                (r.scrollTop -= o), (r.scrollLeft -= t), R(e, !1, n);
                            }
                            function c(e) {
                                return e.targetTouches ? e.targetTouches[0] : e;
                            }
                            function u(e) {
                                return !(
                                    (e.pointerType && 'pen' === e.pointerType && 0 === e.buttons) ||
                                    ((!e.targetTouches || 1 !== e.targetTouches.length) &&
                                        (!e.pointerType ||
                                            'mouse' === e.pointerType ||
                                            e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                                );
                            }
                            function d(e) {
                                if (u(e)) {
                                    var t = c(e);
                                    (o.pageX = t.pageX),
                                        (o.pageY = t.pageY),
                                        (i = new Date().getTime()),
                                        null !== s && clearInterval(s);
                                }
                            }
                            function h(n) {
                                if (u(n)) {
                                    var s = c(n),
                                        d = { pageX: s.pageX, pageY: s.pageY },
                                        h = d.pageX - o.pageX,
                                        v = d.pageY - o.pageY;
                                    if (
                                        (function (e, n, o) {
                                            if (!r.contains(e)) return !1;
                                            for (var i = e; i && i !== r; ) {
                                                if (i.classList.contains(m)) return !0;
                                                var l = t(i);
                                                if (
                                                    [l.overflow, l.overflowX, l.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var s = i.scrollHeight - i.clientHeight;
                                                    if (
                                                        s > 0 &&
                                                        !((0 === i.scrollTop && o > 0) || (i.scrollTop === s && o < 0))
                                                    )
                                                        return !0;
                                                    var a = i.scrollLeft - i.clientWidth;
                                                    if (
                                                        a > 0 &&
                                                        !(
                                                            (0 === i.scrollLeft && n < 0) ||
                                                            (i.scrollLeft === a && n > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                i = i.parentNode;
                                            }
                                            return !1;
                                        })(n.target, h, v)
                                    )
                                        return;
                                    a(h, v), (o = d);
                                    var f = new Date().getTime(),
                                        b = f - i;
                                    b > 0 && ((l.x = h / b), (l.y = v / b), (i = f)),
                                        (function (t, n) {
                                            var o = Math.floor(r.scrollTop),
                                                i = r.scrollLeft,
                                                l = Math.abs(t),
                                                s = Math.abs(n);
                                            if (s > l) {
                                                if (
                                                    (n < 0 && o === e.contentHeight - e.containerHeight) ||
                                                    (n > 0 && 0 === o)
                                                )
                                                    return 0 === window.scrollY && n > 0 && M.isChrome;
                                            } else if (
                                                l > s &&
                                                ((t < 0 && i === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === i))
                                            )
                                                return !0;
                                            return !0;
                                        })(h, v) && n.preventDefault();
                                }
                            }
                            function v() {
                                e.settings.swipeEasing &&
                                    (clearInterval(s),
                                    (s = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(s)
                                            : l.x || l.y
                                              ? Math.abs(l.x) < 0.01 && Math.abs(l.y) < 0.01
                                                  ? clearInterval(s)
                                                  : (a(30 * l.x, 30 * l.y), (l.x *= 0.8), (l.y *= 0.8))
                                              : clearInterval(s);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var n = e.element,
                                r = null,
                                o = !1,
                                i = 0,
                                l = 0,
                                s = 0;
                            function a() {
                                e.onScroll();
                            }
                            function c(r, o, i, l) {
                                void 0 === i && (i = null),
                                    void 0 === l && (l = !1),
                                    Y({
                                        scrollableDomEle: n,
                                        direction: 'right',
                                        onRefUpdateCallback: a,
                                        duration: o,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: r,
                                        onCheckForBreakCallback: i,
                                        boundsInfo: {
                                            breakBounds: l,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    });
                            }
                            function u() {
                                if (o) return o;
                            }
                            function d() {
                                s = 0;
                            }
                            function h(o) {
                                if (e.scrollbarXActive) {
                                    var a = r - o.screenX;
                                    (n.scrollLeft += a), (r = o.screenX);
                                    var c = new Date().getTime();
                                    if (((i = (a / (c - l)) * 1e3), (l = c), e.onScroll(), t > 0)) {
                                        var u = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === n.scrollLeft || n.scrollLeft === u
                                            ? 0 === s && (s = window.setTimeout(d, 250))
                                            : 0 !== s && (window.clearTimeout(s), (s = 0));
                                    }
                                    w(e, 'x'),
                                        w(e, 'dragging', { immediately: !0 }),
                                        o.stopPropagation(),
                                        o.preventDefault();
                                }
                            }
                            function m(e) {
                                (r = e.screenX),
                                    (o = !0),
                                    requestAnimationFrame(function () {
                                        o = !1;
                                    }),
                                    (l = new Date().getTime());
                            }
                            function v(r) {
                                var o = e.contentWidth - e.containerWidth + t;
                                n.scrollLeft < t
                                    ? c(t - n.scrollLeft, D, u)
                                    : n.scrollLeft > o
                                      ? c(o - n.scrollLeft, D, u)
                                      : new Date().getTime() - l < 100 && c(i / 4, D, u, !0),
                                    E(e, 'x'),
                                    E(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(f),
                                    e.event.unbind(e.ownerDocument, 'mousemove', h);
                            }
                            function b() {
                                o = !0;
                            }
                            n.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((r = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', h),
                                        e.event.once(e.ownerDocument, 'mouseup', v),
                                        e.event.once(e.ownerDocument, 'mousedown', m),
                                        e.event.once(n, 'wheel', b),
                                        e.scrollbarXRail.classList.add(f),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    X = function (e, o) {
                        var i = this;
                        if (
                            (void 0 === o && (o = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var l in ((this.element = e),
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
                        o))
                            i.settings[l] = o[l];
                        (this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null);
                        var s,
                            m,
                            f = function () {
                                return e.classList.add(v);
                            },
                            b = function () {
                                return e.classList.remove(v);
                            };
                        (this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((m = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (s = e.scrollLeft < 0),
                                (e.scrollLeft = m),
                                s)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new S()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = r(c('x'))),
                            (this.scrollbarXButtonStart = r(u('x'))),
                            (this.scrollbarXButtonEnd = r(h('x'))),
                            (this.scrollbarXTrack = r(d('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = r(a('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', f),
                            this.event.bind(this.scrollbarX, 'blur', b),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = r(c('y'))),
                            (this.scrollbarYButtonStart = r(u('y'))),
                            (this.scrollbarYButtonEnd = r(h('y'))),
                            (this.scrollbarYTrack = r(d('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = r(a('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', f),
                            this.event.bind(this.scrollbarY, 'blur', b),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            C().then(function () {
                                var r = t(i.scrollbarXRail);
                                (i.scrollbarXBottom = parseInt(r.bottom, 10)),
                                    isNaN(i.scrollbarXBottom)
                                        ? ((i.isScrollbarXUsingBottom = !1), (i.scrollbarXTop = T(r.top)))
                                        : (i.isScrollbarXUsingBottom = !0),
                                    (i.railBorderXWidth = T(r.borderLeftWidth) + T(r.borderRightWidth)),
                                    n(i.scrollbarXRail, { display: 'block' }),
                                    (i.railXMarginWidth = T(r.marginLeft) + T(r.marginRight)),
                                    n(i.scrollbarXRail, { display: '' }),
                                    (i.railXWidth = null),
                                    (i.railXRatio = null);
                                var o = t(i.scrollbarYRail);
                                (i.scrollbarYRight = parseInt(o.right, 10)),
                                    isNaN(i.scrollbarYRight)
                                        ? ((i.isScrollbarYUsingRight = !1), (i.scrollbarYLeft = T(o.left)))
                                        : (i.isScrollbarYUsingRight = !0),
                                    (i.scrollbarYOuterWidth = i.isRtl
                                        ? (function (e) {
                                              var n = t(e);
                                              return (
                                                  T(n.width) +
                                                  T(n.paddingLeft) +
                                                  T(n.paddingRight) +
                                                  T(n.borderLeftWidth) +
                                                  T(n.borderRightWidth)
                                              );
                                          })(i.scrollbarY)
                                        : null),
                                    (i.railBorderYWidth = T(o.borderTopWidth) + T(o.borderBottomWidth)),
                                    n(i.scrollbarYRail, { display: 'block' }),
                                    (i.railYMarginHeight = T(o.marginTop) + T(o.marginBottom)),
                                    n(i.scrollbarXRail, { display: '' }),
                                    n(i.scrollbarYRail, { display: '' }),
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
                                        return N[e](i, i.settings.overScrollWidth);
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
                                    R(i, !1, i.settings.overScrollWidth, !1);
                            });
                    };
                (X.prototype._getAnimationSettings = function (e, t, n, r) {
                    var o = this,
                        i = 0;
                    return (
                        null !== this.element &&
                            (i = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - i,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                R(o, !0, o.settings.overScrollWidth, !1), n && n(e);
                            },
                            onAnimationCompleteCallback: function () {
                                r && r();
                            },
                        }
                    );
                }),
                    (X.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (X.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (X.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (X.prototype.handleMouseLeave = function () {}),
                    (X.prototype.update = function () {
                        var e = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            n(this.scrollbarXRail, { display: 'block' }),
                            n(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                T(t(this.scrollbarXRail).marginLeft) + T(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                T(t(this.scrollbarYRail).marginTop) + T(t(this.scrollbarYRail).marginBottom)),
                            n(this.scrollbarXRail, { display: 'none' }),
                            n(this.scrollbarYRail, { display: 'none' }),
                            C().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    R(e, !1, e.settings.overScrollWidth, !1),
                                    k(e, 'top', 0, !1, !1, !0),
                                    k(e, 'left', 0, !1, !1, !0),
                                    n(e.scrollbarXRail, { display: '' }),
                                    n(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (X.prototype.setScrollLeft = function (e, t, n) {
                        Y(this._getAnimationSettings(e, 'right', t, n));
                    }),
                    (X.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (X.prototype.setScrollTop = function (e, t, n) {
                        Y(this._getAnimationSettings(e, 'bottom', t, n));
                    }),
                    (X.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (X.prototype.onScroll = function (e) {
                        this.isAlive && R(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (X.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (R(this, !1, this.settings.overScrollWidth, !1),
                            k(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (X.prototype.destroy = function () {
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
                            l(this.scrollbarX),
                            l(this.scrollbarY),
                            l(this.scrollbarXRail),
                            l(this.scrollbarYRail),
                            this.removePsClasses(),
                            (this.element = null),
                            (this.scrollbarX = null),
                            (this.scrollbarY = null),
                            (this.scrollbarXRail = null),
                            (this.scrollbarYRail = null),
                            (this.isAlive = !1));
                    }),
                    (X.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = X);
            },
            5067: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => U });
                var r = {};
                n.r(r), n.d(r, { mouse: () => d, onResize: () => c });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => m,
                        getSize: () => h,
                        graphicsQuality: () => v,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => b, getTextureUrl: () => f });
                var l = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.r(l),
                    n.d(l, {
                        addModelObserver: () => T,
                        addPreloadTexture: () => y,
                        children: () => i,
                        displayStatus: () => _,
                        displayStatusIs: () => B,
                        events: () => p,
                        extraSize: () => I,
                        forceTriggerMouseMove: () => N,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => S,
                        getDisplayStatus: () => X,
                        getScale: () => O,
                        getSize: () => C,
                        getViewGlobalPosition: () => k,
                        isEventHandled: () => D,
                        isFocused: () => W,
                        pxToRem: () => A,
                        remToPx: () => x,
                        resize: () => P,
                        sendEvent: () => E,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => H,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => M,
                        whenTutorialReady: () => F,
                    });
                const c = s('clientResized'),
                    u = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') },
                    d = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && a(!1);
                        }
                        function n() {
                            e.enabled && a(!0);
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
                                : a(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${t}`,
                                            l = u[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            r(),
                                            () => {
                                                o &&
                                                    (l(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (o = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, o, {
                            disable() {
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
                            },
                            enableOutside() {
                                e.enabled && a(!0);
                            },
                            disableOutside() {
                                e.enabled && a(!1);
                            },
                        });
                    })();
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const v = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function f(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function b(e, t, n) {
                    return `url(${f(e, t, n)})`;
                }
                const _ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    p = {
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
                    g = ['args'],
                    w = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, g);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = o),
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
                    E = {
                        close(e) {
                            w('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            w(64);
                        },
                        move(e) {
                            w(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function y(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function S(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function T(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function P(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function k(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: x(t.x), y: x(t.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function O() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function x(e) {
                    return viewEnv.remToPx(e);
                }
                function Y(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function W() {
                    return viewEnv.isFocused();
                }
                function H() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function N() {
                    viewEnv.forceTriggerMouseMove();
                }
                function X() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(_).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === _[t]), e), {}),
                    I = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    F = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : p.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    U = { view: l, client: o };
            },
            5521: (e, t, n) => {
                'use strict';
                let r, o;
                n.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(o || (o = {}));
            },
            3368: () => {
                !(function () {
                    let e,
                        t,
                        n,
                        r,
                        o,
                        i,
                        l,
                        s = -1;
                    document.addEventListener('mousedown', (n) => {
                        document.getSelection().empty(),
                            n.target.select &&
                                -1 === s &&
                                ((e = n.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (n) => {
                            if ((-1 === s && n.target.select && n.target === e && (s = e.selectionStart), s > -1)) {
                                const r = Math.min(Math.max(n.x, t.left), t.right),
                                    o = Math.min(Math.max(n.y, t.top), t.bottom),
                                    i = document.createEvent('MouseEvent');
                                i.initMouseEvent('mousedown', !0, !0, null, 1, r, o, r, o, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(i);
                                const l = e.selectionEnd;
                                l > s ? e.setSelectionRange(s, l, 'forward') : e.setSelectionRange(l, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (s = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (n = e.target),
                                (r = e.target.value),
                                (o = n.selectionStart),
                                (i = -1 !== r.lastIndexOf(' ', o) ? r.lastIndexOf(' ', o) + 1 : 0),
                                (l = -1 !== r.indexOf(' ', o) ? r.indexOf(' ', o) : r.length),
                                n.setSelectionRange(i, l, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (t) => {
                            document.getSelection().empty(),
                                0 !== t.button ||
                                    t.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(t.x, t.y));
                        }),
                            document.addEventListener('mousemove', (t) => {
                                if (0 === t.button && !t.target.select && e) {
                                    const n = document.caretPositionFromPoint(t.x, t.y);
                                    if (!n.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, n.offsetNode, n.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var r = n(5067);
                class o {
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
                        return window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(e, n, o);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                o.__instance = void 0;
                const i = o;
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
            4179: (e, t, n) => {
                'use strict';
                n.d(t, { Sw: () => i.Z, B0: () => a, ry: () => g });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                r.__instance = void 0;
                const o = r;
                var i = n(1358);
                const l = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let a;
                var c;
                ((c = a || (a = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                    (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                    (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                    (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (c[(c.MOVE = 16)] = 'MOVE'),
                    (c[(c.CLOSE = 32)] = 'CLOSE'),
                    (c[(c.MINIMIZE = 64)] = 'MINIMIZE');
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    h = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var v = n(5521),
                    f = n(5067);
                const b = ['args'];
                function _(e, t, n, r, o, i, l) {
                    try {
                        var s = e[i](l),
                            a = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(a) : Promise.resolve(a).then(r, o);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (r, o) {
                                        var i = e.apply(t, n);
                                        function l(e) {
                                            _(i, r, o, l, s, 'next', e);
                                        }
                                        function s(e) {
                                            _(i, r, o, l, s, 'throw', e);
                                        }
                                        l(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    w = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, b);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    E = () => w(a.CLOSE),
                    y = (e, t) => {
                        e.keyCode === v.n.ESCAPE && t();
                    };
                var L = n(7572);
                const S = o.instance,
                    T = {
                        DataTracker: i.Z,
                        ViewModel: L.Z,
                        ViewEventType: a,
                        NumberFormatType: u,
                        RealFormatType: d,
                        TimeFormatType: h,
                        DateFormatType: m,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => w(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => w(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            w(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), i) => {
                            const l = f.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                c = s.x,
                                u = s.y,
                                d = s.width,
                                h = s.height,
                                m = {
                                    x: f.O.view.pxToRem(c) + l.x,
                                    y: f.O.view.pxToRem(u) + l.y,
                                    width: f.O.view.pxToRem(d),
                                    height: f.O.view.pxToRem(h),
                                };
                            w(a.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: p(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => y(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            y(e, E);
                        },
                        handleViewEvent: w,
                        onBindingsReady: g,
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
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const o = Object.prototype.toString.call(t[r]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < o.length; t++) n[r].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: l,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = T;
            },
            2350: (e, t, n) => {
                'use strict';
                n(3368);
                var r = n(6483),
                    o = n.n(r);
                function i(e) {
                    engine.call('PlaySound', e);
                }
                var l = n(6179),
                    s = n.n(l);
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
                let c, u;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(c || (c = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(u || (u = {}));
                const d = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: r,
                    disabled: u,
                    mixClass: d,
                    soundHover: h,
                    soundClick: m,
                    onMouseEnter: v,
                    onMouseMove: f,
                    onMouseDown: b,
                    onMouseUp: _,
                    onMouseLeave: p,
                    onClick: g,
                }) => {
                    const w = (0, l.useRef)(null),
                        E = (0, l.useState)(n),
                        y = E[0],
                        L = E[1],
                        S = (0, l.useState)(!1),
                        T = S[0],
                        M = S[1],
                        C = (0, l.useState)(!1),
                        P = C[0],
                        k = C[1],
                        O = (0, l.useCallback)(() => {
                            u || (w.current && (w.current.focus(), L(!0)));
                        }, [u]),
                        A = (0, l.useCallback)(
                            (e) => {
                                y && null !== w.current && !w.current.contains(e.target) && L(!1);
                            },
                            [y],
                        ),
                        x = (0, l.useCallback)(
                            (e) => {
                                u || (g && g(e));
                            },
                            [u, g],
                        ),
                        Y = (0, l.useCallback)(
                            (e) => {
                                u || (null !== h && i(h), v && v(e), k(!0));
                            },
                            [u, h, v],
                        ),
                        W = (0, l.useCallback)(
                            (e) => {
                                f && f(e);
                            },
                            [f],
                        ),
                        H = (0, l.useCallback)(
                            (e) => {
                                u || (_ && _(e), M(!1));
                            },
                            [u, _],
                        ),
                        D = (0, l.useCallback)(
                            (e) => {
                                u || (null !== m && i(m), b && b(e), n && O(), M(!0));
                            },
                            [u, m, b, O, n],
                        ),
                        N = (0, l.useCallback)(
                            (e) => {
                                u || (p && p(e), M(!1));
                            },
                            [u, p],
                        ),
                        X = o()(
                            a.base,
                            a[`base__${r}`],
                            {
                                [a.base__disabled]: u,
                                [a[`base__${t}`]]: t,
                                [a.base__focus]: y,
                                [a.base__highlightActive]: T,
                                [a.base__firstHover]: P,
                            },
                            d,
                        ),
                        B = o()(a.state, a.state__default);
                    return (
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mousedown', A),
                                () => {
                                    document.removeEventListener('mousedown', A);
                                }
                            ),
                            [A],
                        ),
                        (0, l.useEffect)(() => {
                            L(n);
                        }, [n]),
                        s().createElement(
                            'div',
                            {
                                ref: w,
                                className: X,
                                onMouseEnter: Y,
                                onMouseMove: W,
                                onMouseUp: H,
                                onMouseDown: D,
                                onMouseLeave: N,
                                onClick: x,
                            },
                            r !== c.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: a.back }),
                                    s().createElement('span', { className: a.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: B },
                                s().createElement('span', { className: a.stateDisabled }),
                                s().createElement('span', { className: a.stateHighlightHover }),
                                s().createElement('span', { className: a.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: a.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                d.defaultProps = { type: c.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const h = (0, l.memo)(d),
                    m = (e) => {
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
                    v = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            r = t.height;
                        return 0 !== n && 0 !== r;
                    };
                var f = n(8380),
                    b = n.n(f);
                const _ = s().forwardRef((e, t) => {
                        const n = e.offsetLeft,
                            r = void 0 === n ? 0 : n,
                            i = e.offsetTop,
                            a = void 0 === i ? 0 : i,
                            c = e.scrollSettings,
                            u = e.onUpdateActiveAxis,
                            d = e.onHorizontalScroll,
                            h = e.onVerticalScroll,
                            f = e.onOverScrollAtBeginning,
                            _ = e.onOverScrollAtEnd,
                            p = e.wrapperIndent,
                            g = e.verticalScrollbarMargin,
                            w = e.isMultipleScroll,
                            E = e.scrollAreaContainer,
                            y = e.children,
                            L = e.classMix,
                            S = e.onScrollLeftHandled,
                            T = (0, l.useState)(!1),
                            M = T[0],
                            C = T[1],
                            P = (0, l.useState)(),
                            k = P[0],
                            R = P[1],
                            O = (0, l.useState)(),
                            A = O[0],
                            x = O[1],
                            Y = (0, l.useRef)(null),
                            W = (0, l.useCallback)(() => {
                                k &&
                                    u &&
                                    u({ x: k.scrollbarXActive, y: k.scrollbarYActive }, { x: k.reach.x, y: k.reach.y });
                            }, [u, k]),
                            H = (0, l.useCallback)(() => k, [k]),
                            D = (0, l.useCallback)(() => {
                                k && k.update();
                            }, [k]),
                            N = (0, l.useCallback)(
                                (e, t, n) => {
                                    k && (k.setScrollLeft(e, t, n), S && S(e, k.contentWidth - k.containerWidth));
                                },
                                [k, S],
                            ),
                            X = (0, l.useCallback)(
                                (e) => {
                                    k && (k.setScrollLeftImmediately(e), S && S(e, k.contentWidth - k.containerWidth));
                                },
                                [k, S],
                            ),
                            B = (0, l.useCallback)(
                                (e, t, n) => {
                                    k && k.setScrollTop(e, t, n);
                                },
                                [k],
                            ),
                            I = (0, l.useCallback)(
                                (e) => {
                                    k && k.setScrollTopImmediately(e);
                                },
                                [k],
                            ),
                            F = (0, l.useCallback)(() => {
                                if (A && d && k) {
                                    const e = { scrollPosition: A.scrollLeft < 0 ? 0 : A.scrollLeft, reach: k.reach.x };
                                    d(e);
                                }
                            }, [d, A, k]),
                            U = (0, l.useCallback)(() => {
                                if (A && h && k) {
                                    const e = { scrollPosition: A.scrollTop, reach: k.reach.y };
                                    h(e);
                                }
                            }, [h, A, k]),
                            j = (0, l.useCallback)(() => {
                                f && f();
                            }, [f]),
                            V = (0, l.useCallback)(() => {
                                _ && _();
                            }, [_]),
                            K = (0, l.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), x(e);
                                },
                                [t],
                            ),
                            z = (0, l.useCallback)(() => {
                                k &&
                                    (k.update(),
                                    (Y.current = m(() => {
                                        W();
                                    })));
                            }, [k, W]),
                            q = (0, l.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, l.useEffect)(() => {
                            if (k && A)
                                return (
                                    document.addEventListener('mousemove', q),
                                    window.addEventListener('resize', z),
                                    A.addEventListener('ps-scroll-x', F),
                                    A.addEventListener('ps-scroll-y', U),
                                    A.addEventListener('over-scroll-beginning', j),
                                    A.addEventListener('over-scroll-ending', V),
                                    C(!0),
                                    () => {
                                        window.removeEventListener('resize', z),
                                            document.removeEventListener('mousemove', q),
                                            A &&
                                                (A.removeEventListener('ps-scroll-x', F),
                                                A.removeEventListener('ps-scroll-y', U),
                                                A.removeEventListener('over-scroll-beginning', j),
                                                A.removeEventListener('over-scroll-ending', V));
                                    }
                                );
                        }, [q, F, j, V, z, A, k, U]);
                        const G = (0, l.useRef)(A || null);
                        G.current = A || null;
                        const $ = ((e) => {
                            const t = (0, l.useState)(v(e ? e.current : null)),
                                n = t[0],
                                r = t[1];
                            return (
                                (0, l.useEffect)(() => {
                                    let t = 0;
                                    const n = () => {
                                        t = requestAnimationFrame(() => {
                                            v(e ? e.current : null) ? r(!0) : n();
                                        });
                                    };
                                    return (
                                        n(),
                                        () => {
                                            cancelAnimationFrame(t);
                                        }
                                    );
                                }, [e]),
                                (0, l.useEffect)(() => () => r(!1), [e]),
                                n
                            );
                        })(G);
                        (0, l.useEffect)(
                            () => (
                                !k && A && $ && R(new (b())(A, Object.assign({}, c))),
                                () => {
                                    k && (k.destroy(), R(void 0));
                                }
                            ),
                            [A, $, c, k],
                        ),
                            (0, l.useEffect)(
                                () => () => {
                                    null == Y.current || Y.current();
                                },
                                [],
                            ),
                            (0, l.useEffect)(
                                () =>
                                    m(() => {
                                        k && W();
                                    }),
                                [W, k],
                            ),
                            (0, l.useEffect)(() => {
                                r > 0 && X(r);
                            }, [r, X]),
                            (0, l.useEffect)(() => {
                                a > 0 && I(a);
                            }, [a, I]),
                            (0, l.useEffect)(() => {
                                E &&
                                    ((E.setScrollLeft = N),
                                    (E.setScrollTop = B),
                                    (E.setScrollLeftImmediately = X),
                                    (E.setScrollTopImmediately = I),
                                    (E.updateScrollArea = D),
                                    (E.getScrollbar = H));
                            }, [E, N, X, B, I, D, H]);
                        const Q = o()(
                            'ScrollArea_base_47',
                            {
                                ScrollArea_base__scrollIndent_1d: p,
                                ScrollArea_base__hidden_ec: !M,
                                ScrollArea_base__verticalScrollbarMargin_50: g,
                                ScrollArea_base__multiple_44: w,
                            },
                            L,
                        );
                        return s().createElement('div', { className: Q, ref: K }, y);
                    }),
                    p = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            r = R.invalid('resId');
                        return (
                            t &&
                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== n &&
                                    window.subViews[n] &&
                                    (r = window.subViews[n].id)),
                            { caller: n, stack: t, resId: r }
                        );
                    };
                var g = n(4179);
                const w = [
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
                function E(e) {
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
                const y = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: g.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    L = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            o = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            a = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            h = void 0 !== d && d,
                            m = e.decoratorId,
                            v = void 0 === m ? 0 : m,
                            f = e.isEnabled,
                            b = void 0 === f || f,
                            _ = e.targetId,
                            g = void 0 === _ ? 0 : _,
                            L = e.onShow,
                            S = e.onHide,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, w);
                        const M = (0, l.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, l.useMemo)(() => g || p().resId, [g]),
                            P = (0, l.useCallback)(() => {
                                (M.current.isVisible && M.current.timeoutId) ||
                                    (y(n, v, { isMouseEvent: !0, on: !0, arguments: E(r) }, C),
                                    L && L(),
                                    (M.current.isVisible = !0));
                            }, [n, v, r, C, L]),
                            k = (0, l.useCallback)(() => {
                                if (M.current.isVisible || M.current.timeoutId) {
                                    const e = M.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (M.current.timeoutId = 0)),
                                        y(n, v, { on: !1 }, C),
                                        M.current.isVisible && S && S(),
                                        (M.current.isVisible = !1);
                                }
                            }, [n, v, C, S]),
                            R = (0, l.useCallback)((e) => {
                                M.current.isVisible &&
                                    ((M.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (M.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(M.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        return (
                            (0, l.useEffect)(() => {
                                const e = M.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', R, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', R, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, l.useEffect)(() => {
                                !1 === b && k();
                            }, [b, k]),
                            (0, l.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            ),
                            b
                                ? (0, l.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((O = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((M.current.timeoutId = window.setTimeout(P, u ? 100 : 400)),
                                                          o && o(e),
                                                          O && O(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  k(), null == i || i(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === h && k(), null == a || a(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === h && k(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          T,
                                      ),
                                  )
                                : t
                        );
                        var O;
                    },
                    S = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const M = R.views.common.tooltip_window.simple_tooltip_content,
                    C = (e) => {
                        let t = e.children,
                            n = e.body,
                            r = e.header,
                            o = e.note,
                            i = e.alert,
                            a = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, S);
                        const u = (0, l.useMemo)(() => {
                            const e = Object.assign({}, a, { body: n, header: r, note: o, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, n, r, o, a]);
                        return s().createElement(
                            L,
                            T(
                                {
                                    contentId:
                                        ((d = null == a ? void 0 : a.hasHtmlContent),
                                        d ? M.SimpleTooltipHtmlContent('resId') : M.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                c,
                            ),
                            t,
                        );
                        var d;
                    },
                    P = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    k = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    O = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    A = g.Sw.instance;
                let x;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(x || (x = {}));
                const Y = (e = 'model', t = x.Deep) => {
                    const n = (0, l.useState)(0),
                        r = (n[0], n[1]),
                        o = (0, l.useMemo)(() => p(), []),
                        i = o.caller,
                        s = o.resId,
                        a = (0, l.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                            [i, e],
                        ),
                        c = (0, l.useState)(() =>
                            ((e) => {
                                const t = P(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return k(t) ? t.value : t;
                            })(
                                ((e) =>
                                    ((e, t) =>
                                        e.split('.').reduce((e, t) => {
                                            const n = P(`${e}.${t}`, window);
                                            return k(n) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                        }))(e))(a),
                            ),
                        ),
                        u = c[0],
                        d = c[1],
                        h = (0, l.useRef)(-1);
                    return (
                        ((e) => {
                            const t = (0, l.useRef)(!1);
                            t.current || (e(), (t.current = !0));
                        })(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? x.Deep : x.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== x.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === x.Deep
                                            ? (e === u && r((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    o = ((e) => {
                                        const t = ((e) => {
                                                const t = p(),
                                                    n = t.caller,
                                                    r = t.resId,
                                                    o =
                                                        window.__feature && window.__feature !== n && n
                                                            ? `subViews.${n}`
                                                            : '';
                                                return { modelPrefix: o, modelPath: O(o, ''), resId: r };
                                            })(),
                                            n = t.modelPrefix,
                                            r = e.split('.');
                                        if (r.length > 0) {
                                            const e = [r[0]];
                                            return (
                                                r.reduce((t, r) => {
                                                    const o = P(O(n, `${t}.${r}`), window);
                                                    return k(o)
                                                        ? (e.push(o.id), `${t}.${r}.value`)
                                                        : (e.push(r), `${t}.${r}`);
                                                }),
                                                e.reduce((e, t) => e + '.' + t)
                                            );
                                        }
                                        return '';
                                    })(e);
                                h.current = A.addCallback(o, n, s, t === x.Deep);
                            }
                        }),
                        (0, l.useEffect)(() => {
                            if (t !== x.None)
                                return () => {
                                    A.removeCallback(h.current, s);
                                };
                        }, [s, t]),
                        u
                    );
                };
                var W = n(493),
                    H = n.n(W);
                const D = 'Chat_channelNotification_1a',
                    N = (e) => `#${e}`,
                    X = ({ part: e }) => {
                        const t = (0, l.useMemo)(() => ({ color: N(e.color) }), [e]);
                        return s().createElement('div', { style: t }, e.text);
                    };
                function B(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return I(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? I(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function I(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                var F;
                !(function (e) {
                    (e[(e.text = 0)] = 'text'), (e[(e.element = 1)] = 'element');
                })(F || (F = {}));
                const U = [
                        [':)', 'smiley_happy'],
                        ['=)', 'smiley_happy'],
                        [':-)', 'smiley_happy'],
                        [':\\', 'smiley_hmm'],
                        ['=\\', 'smiley_hmm'],
                        [':-\\', 'smiley_hmm'],
                        ['=/', 'smiley_hmm'],
                        [':-/', 'smiley_hmm'],
                        ['>:|', 'smiley_mad'],
                        ['>=|', 'smiley_mad'],
                        ['>:-|', 'smiley_mad'],
                        ['>:O', 'smiley_madah'],
                        ['>=O', 'smiley_madah'],
                        ['>:-O', 'smiley_madah'],
                        ['>:o', 'smiley_madah'],
                        ['>=o', 'smiley_madah'],
                        ['>:-o', 'smiley_madah'],
                        ['>:0', 'smiley_madah'],
                        ['>=0', 'smiley_madah'],
                        ['>:-0', 'smiley_madah'],
                        [':|', 'smiley_norm'],
                        ['=|', 'smiley_norm'],
                        [':-|', 'smiley_norm'],
                        [':O', 'smiley_oh'],
                        ['=O', 'smiley_oh'],
                        [':-O', 'smiley_oh'],
                        [':o', 'smiley_oh'],
                        ['=o', 'smiley_oh'],
                        [':-o', 'smiley_oh'],
                        ['=0', 'smiley_oh'],
                        [':-0', 'smiley_oh'],
                        [':(', 'smiley_sad'],
                        ['=(', 'smiley_sad'],
                        [':-(', 'smiley_sad'],
                        [':P', 'smiley_tongue'],
                        ['=P', 'smiley_tongue'],
                        [':-P', 'smiley_tongue'],
                        [':*', 'smiley_kiss'],
                        ['=*', 'smiley_kiss'],
                        [':-*', 'smiley_kiss'],
                        [';)', 'smiley_wink'],
                        [';-)', 'smiley_wink'],
                        ['/*', 'difficulty_star'],
                    ],
                    j = (e) => R.images.gui.maps.icons.emoji.$dyn(e),
                    V = (e, [t, n]) =>
                        e.split(new RegExp(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g')).reduce((e, t, r, o) => {
                            var i;
                            return (
                                e.push({ type: F.text, content: t }),
                                o.length !== r + 1 &&
                                    e.push({
                                        type: F.element,
                                        content: s().createElement('div', {
                                            style: ((i = j(n)), { backgroundImage: `url('${i}')` }),
                                            className: 'MessageText_emoji_f1',
                                        }),
                                    }),
                                e
                            );
                        }, []),
                    K = (e, t, n) => (n % 2 ? (e[e.length - 1] += t) : e.push(t), e),
                    z = ({ text: e, color: t }) => {
                        const n = (0, l.useMemo)(
                                () =>
                                    ((e) => {
                                        let t = [{ type: F.text, content: e }];
                                        for (var n, r = B(U); !(n = r()).done; ) {
                                            const e = n.value,
                                                r = [];
                                            for (var o, i = B(t); !(o = i()).done; ) {
                                                const t = o.value;
                                                t.type === F.text ? r.push(V(t.content, e)) : r.push(t);
                                            }
                                            t = r.flat();
                                        }
                                        return t;
                                    })(e),
                                [e],
                            ),
                            r = (0, l.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const n = [];
                                        return (
                                            e.forEach((e) =>
                                                e.type === F.element
                                                    ? n.push(e.content)
                                                    : n.push(
                                                          ...((e, t) => {
                                                              const n = { color: t };
                                                              return e
                                                                  .split(
                                                                      /([ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000])/gu,
                                                                  )
                                                                  .reduce(K, [])
                                                                  .map((e, t) =>
                                                                      s().createElement('div', { style: n, key: t }, e),
                                                                  );
                                                          })(e.content, t),
                                                      ),
                                            ),
                                            n
                                        );
                                    })(n, t),
                                [t, n],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            r.map((e, t) => s().createElement(l.Fragment, { key: t }, e)),
                        );
                    },
                    q = ({ playerName: e, timeStamp: t, text: n }) => {
                        const r = (0, l.useMemo)(() => N(n.color), [n.color]);
                        return s().createElement(
                            'div',
                            { className: 'Message_base_52' },
                            s().createElement(X, { part: e }),
                            s().createElement(X, { part: t }),
                            s().createElement(z, { text: n.text, color: r }),
                            '\n',
                        );
                    };
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                const $ = () => {
                    const e = Y(),
                        t = e.onSend,
                        n = e.canClearInput,
                        r = e.onInputCleared,
                        o = Y('model.headerExtraInfo'),
                        i = o.text,
                        a = o.color,
                        d = Y('model.messages'),
                        v = (0, l.useRef)(null),
                        f = (0, l.useRef)(null),
                        b = (0, l.useRef)({}),
                        p = (0, l.useRef)(null),
                        g = (0, l.useState)(''),
                        w = g[0],
                        E = g[1],
                        y = (0, l.useCallback)(() => {
                            if (!v.current || !f.current) return;
                            const e = f.current.scrollHeight,
                                t = v.current.scrollHeight - e;
                            b.current.setScrollTop(t);
                        }, []);
                    (0, l.useEffect)(() => m(() => m(y)), [d.length, y]);
                    const L = (0, l.useCallback)(() => {
                        p.current && '' !== p.current.value && n && ((p.current.value = ''), r(), E(''));
                    }, [n, r]);
                    (0, l.useEffect)(() => L(), [n, L]);
                    const S = (0, l.useCallback)(() => {
                            t({ message: w }), L();
                        }, [L, w, t]),
                        T = (0, l.useCallback)(() => {
                            E(p.current ? p.current.value : '');
                        }, [p]),
                        M = (0, l.useCallback)(
                            (e) => {
                                'Enter' === e.key && S();
                            },
                            [S],
                        ),
                        P = d.length
                            ? s().createElement(
                                  'div',
                                  { className: 'Chat_scrollContainer_07', ref: f },
                                  s().createElement(
                                      _,
                                      { scrollAreaContainer: b.current, wrapperIndent: !0 },
                                      s().createElement(
                                          'div',
                                          { ref: v, className: 'Chat_messages_d1' },
                                          d.map((e) => s().createElement(q, G({}, e.value, { key: e.value.key }))),
                                      ),
                                  ),
                              )
                            : s().createElement(
                                  s().Fragment,
                                  null,
                                  s().createElement(
                                      'span',
                                      { className: D },
                                      R.strings.platoon.members.chat.chatName(),
                                  ),
                                  s().createElement(
                                      'div',
                                      { className: D },
                                      s().createElement(z, { text: i, color: ((k = a), `#${k}`) }),
                                  ),
                              );
                    var k;
                    return s().createElement(
                        'div',
                        { className: 'Chat_base_f8' },
                        s().createElement('div', { className: 'Chat_content_9f' }, P),
                        s().createElement(
                            'div',
                            { className: 'Chat_footer_d6' },
                            s().createElement('input', {
                                onInput: T,
                                onKeyDown: M,
                                ref: p,
                                required: !0,
                                className: 'Chat_input_fe',
                                minLength: 1,
                                maxLength: 255,
                                type: 'text',
                                id: 'name',
                                name: 'name',
                            }),
                            s().createElement(
                                C,
                                {
                                    isEnabled: !0,
                                    header: R.strings.platoon.members.chat.sendMessage.header(),
                                    body: R.strings.platoon.members.chat.sendMessage.body(),
                                },
                                s().createElement(
                                    'div',
                                    { className: 'Chat_sendButtonContainer_38' },
                                    s().createElement(
                                        h,
                                        {
                                            size: u.small,
                                            type: c.secondary,
                                            onClick: S,
                                            mixClass: 'Chat_enterButtonContainer_30',
                                        },
                                        s().createElement('div', { className: 'Chat_enterImage_f9' }),
                                    ),
                                ),
                            ),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    H().render(s().createElement($, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var o = 1 / 0;
                for (a = 0; a < deferred.length; a++) {
                    for (var [t, n, r] = deferred[a], i = !0, l = 0; l < t.length; l++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((i = !1), r < o && (o = r));
                    if (i) {
                        deferred.splice(a--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var a = deferred.length; a > 0 && deferred[a - 1][2] > r; a--) deferred[a] = deferred[a - 1];
            deferred[a] = [t, n, r];
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
        (() => {
            var e = { 710: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [i, l, s] = n,
                        a = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in l) __webpack_require__.o(l, r) && (__webpack_require__.m[r] = l[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); a < i.length; a++)
                        (o = i[a]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2350));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
