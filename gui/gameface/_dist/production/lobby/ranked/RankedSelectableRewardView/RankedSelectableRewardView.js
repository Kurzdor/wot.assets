(() => {
    var __webpack_modules__ = {
            380: (e) => {
                'use strict';
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
                function a(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return o(e, t);
                    });
                }
                var l = 'ps',
                    s = {
                        thumb: function (e) {
                            return 'ps__thumb-' + e;
                        },
                        rail: function (e) {
                            return 'ps__rail-' + e;
                        },
                        buttonStart: function (e) {
                            return 'ps__button-start-' + e;
                        },
                        track: function (e) {
                            return 'ps__track_' + e;
                        },
                        buttonEnd: function (e) {
                            return 'ps__button-end-' + e;
                        },
                        consuming: 'ps__child--consume',
                    },
                    c = {
                        focus: 'ps--focus',
                        clicking: 'ps--clicking',
                        active: function (e) {
                            return 'ps--active-' + e;
                        },
                        scrolling: function (e) {
                            return 'ps--scrolling-' + e;
                        },
                    },
                    d = { x: null, y: null },
                    E = { immediately: !1 };
                function m(e, t, u) {
                    void 0 === u && (u = {});
                    var n = e.element.classList,
                        r = c.scrolling(t);
                    n.contains(r) ? clearTimeout(d[t]) : n.add(r);
                }
                function h(e, t, u) {
                    void 0 === u && (u = {});
                    Object.assign(E, u).immediately
                        ? e.isAlive && e.element.classList.remove(c.scrolling(t))
                        : (d[t] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(c.scrolling(t));
                          }, e.settings.scrollingThreshold));
                }
                var A = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    _ = { isEmpty: { configurable: !0 } };
                (A.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (A.prototype.unbind = function (e, t) {
                        var u = this;
                        this.handlers[e] = this.handlers[e].filter(function (n) {
                            return !(!t || n === t) || (u.element.removeEventListener(e, n, !1), !1);
                        });
                    }),
                    (A.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (_.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(A.prototype, _);
                var F = function () {
                    this.eventElements = [];
                };
                function g(e) {
                    return parseInt(e, 10) || 0;
                }
                (F.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new A(e)), this.eventElements.push(t)), t;
                }),
                    (F.prototype.bind = function (e, t, u) {
                        this.eventElement(e).bind(t, u);
                    }),
                    (F.prototype.unbind = function (e, t, u) {
                        var n = this.eventElement(e);
                        n.unbind(t, u), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
                    }),
                    (F.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (F.prototype.once = function (e, t, u) {
                        var n = this.eventElement(e);
                        n.bind(t, function e(r) {
                            n.unbind(t, e), u(r);
                        });
                    });
                var p = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function b() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function v(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var D = function (e, t, u, n, r, o) {
                    var i;
                    if ((void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === o && (o = !1), 'top' === t))
                        i = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        i = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, u, n, r, o) {
                        var i = u[0],
                            a = u[1],
                            l = u[2],
                            s = u[3],
                            c = u[4],
                            d = u[5];
                        void 0 === n && (n = !0);
                        void 0 === r && (r = !1);
                        void 0 === o && (o = !1);
                        var E = e.element;
                        if (!e.reach) return;
                        (e.reach[s] = null), E[l] < 1 && (e.reach[s] = 'start');
                        E[l] > e[i] - e[a] - 1 && (e.reach[s] = 'end');
                        t &&
                            !r &&
                            (E.dispatchEvent(v('ps-scroll-' + s)),
                            t < 0
                                ? E.dispatchEvent(v('ps-scroll-' + c))
                                : t > 0 && E.dispatchEvent(v('ps-scroll-' + d)),
                            n &&
                                (function (e, t) {
                                    m(e, t), h(e, t);
                                })(e, s));
                        e.reach[s] && (t || o) && E.dispatchEvent(v('ps-' + s + '-reach-' + e.reach[s]));
                    })(e, u, i, n, r, o);
                };
                var f = function (e, t, n, r) {
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
                            var l = e.contentWidth - e.containerWidth + n;
                            o.scrollLeft < n ? (o.scrollLeft = n) : o.scrollLeft > l && (o.scrollLeft = l);
                        }
                        var d = Math.floor(o.scrollTop),
                            E = Math.floor(o.scrollLeft) - n,
                            m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        o.contains(e.scrollbarXRail) ||
                            (a(o, s.rail('x')).forEach(function (e) {
                                return i(e);
                            }),
                            o.appendChild(e.scrollbarXRail)),
                            o.contains(e.scrollbarYRail) ||
                                (a(o, s.rail('y')).forEach(function (e) {
                                    return i(e);
                                }),
                                o.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = C(e, g((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                  (e.scrollbarXLeft = g(
                                      ((e.negativeScrollAdjustment + E) * (e.railXWidth - e.scrollbarXWidth)) /
                                          (e.contentWidth - e.containerWidth),
                                  )),
                                  e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                : (e.scrollbarXActive = !1),
                            !e.settings.suppressScrollY &&
                            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                ? ((e.scrollbarYActive = !0),
                                  (e.railYHeight = e.containerHeight - e.railYMarginHeight * m - 15 * m),
                                  (e.railYRatio = e.containerHeight / e.railYHeight),
                                  (e.scrollbarYHeight = C(e, g((e.railYHeight * e.containerHeight) / e.contentHeight))),
                                  (e.scrollbarYTop = g(
                                      (d * (e.railYHeight - e.scrollbarYHeight)) /
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
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (r.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (r.bottom = t.scrollbarXBottom - o)
                                    : (r.top = t.scrollbarXTop + o);
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
                                      : (i.left = t.scrollbarYLeft + e.scrollLeft);
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
                            e.scrollbarXButtonStart.classList.toggle('disabled', E < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', E + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', o.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                o.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (o.classList.add(c.active('x')), D(e, 'left', E - e.lastScrollLeft, !0, t))
                                : (o.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (o.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (o.classList.add(c.active('y')), D(e, 'top', o.scrollTop - e.lastScrollTop, !0, t))
                                : (o.classList.remove(c.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (o.scrollTop = 0)),
                            (e.lastScrollTop = d),
                            (e.lastScrollLeft = E),
                            (e.scrollTopPercent = o.scrollTop / o.scrollHeight),
                            (e.scrollLeftPercent = o.scrollLeft / o.scrollWidth);
                    }
                };
                function C(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
                    );
                }
                var B = {
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
                    w = function (e) {
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
                    },
                    S = { breakBounds: !1, startBound: 0, endBound: 0 },
                    y = function (e) {
                        var t = e.scrollableDomEle,
                            u = e.onAnimationCompleteCallback,
                            n = e.direction,
                            r = e.onRefUpdateCallback,
                            o = e.duration,
                            i = e.cubicBezierPoints,
                            a = e.easingPreset,
                            l = e.scrollAmount,
                            s = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = S);
                        var d = null,
                            E = null,
                            m = null,
                            h = null,
                            A = t === window,
                            _ = ['left', 'right'].indexOf(n) > -1,
                            F = ['right', 'bottom'].indexOf(n) > -1;
                        _
                            ? ((E = A ? 'scrollX' : 'scrollLeft'),
                              (h = A ? 'innerWidth' : 'width'),
                              (m = 'scrollWidth'))
                            : ((E = A ? 'scrollY' : 'scrollTop'),
                              (h = A ? 'innerHeight' : 'height'),
                              (m = 'scrollHeight'));
                        var g = t[E],
                            p = (function (e) {
                                var t,
                                    u = e.isWindow,
                                    n = e.scrollableDomEle,
                                    r = e.elementLengthProp,
                                    o = e.initialScrollPosition,
                                    i = e.isHorizontalDirection,
                                    a = e.scrollLengthProp,
                                    l = e.direction;
                                if (u) {
                                    var s = document.documentElement;
                                    t = i ? s.offsetWidth : s.offsetHeight;
                                } else t = (n[a] - n.getBoundingClientRect()[r]) | 0;
                                return ['left', 'top'].includes(l) ? o : t - o;
                            })({
                                isWindow: A,
                                scrollableDomEle: t,
                                elementLengthProp: h,
                                initialScrollPosition: g,
                                isHorizontalDirection: _,
                                scrollLengthProp: m,
                                direction: n,
                            });
                        !isNaN(l) && l < p && (p = l);
                        var b = function e(n) {
                            if (!s || !s()) {
                                var l = n - d,
                                    m = (function (e) {
                                        var t = e.easingPreset,
                                            u = e.cubicBezierPoints,
                                            n = e.duration,
                                            r = e.runTime / n;
                                        if (B.hasOwnProperty(t)) return B[t](r);
                                        if (
                                            u &&
                                            !isNaN(u.x1) &&
                                            !isNaN(u.y1) &&
                                            !isNaN(u.x2) &&
                                            !isNaN(u.y2) &&
                                            u.x1 >= 0 &&
                                            u.x2 >= 0
                                        )
                                            return w({ percentTimeElapsed: r, x1: u.x1, x2: u.x2, y1: u.y1, y2: u.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: a, cubicBezierPoints: i, runTime: l, duration: o });
                                if (!isNaN(m)) {
                                    var h = Math.round(m * p),
                                        b = F ? h + g : p - h;
                                    if (
                                        (c.breakBounds &&
                                            (b < c.startBound
                                                ? (b = c.startBound)
                                                : b > c.endBound && (b = c.endBound)),
                                        l < o)
                                    ) {
                                        if (A) {
                                            var v = _ ? b : 0,
                                                D = _ ? 0 : b;
                                            window.scrollTo(v, D);
                                        } else t[E] = b;
                                        r && r(b), requestAnimationFrame(e);
                                    } else u && u();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (d = e), b(e);
                        });
                    },
                    L = function (e) {
                        var t = e.axis,
                            u = e.cursorPositionOnRail,
                            n = e.direction,
                            r = e.i,
                            o = (function (e) {
                                var t = e.axis,
                                    u = e.i,
                                    n = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var r = u.scrollbarY.offsetTop,
                                        o = r + u.scrollbarYHeight;
                                    return n >= r && n <= o;
                                }
                                var i = u.scrollbarX.offsetLeft,
                                    a = i + u.scrollbarXWidth;
                                return n >= i && n <= a;
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
                                      i = Math.round(Math.min(r.maxScroll, Math.max(0, r.content * o)));
                                  'y' === t ? (u.element.scrollTop = i) : (u.element.scrollLeft = i);
                              })({ axis: t, i: r, cursorPositionOnRail: u }),
                              !0)
                            : ('y' === t
                                  ? (r.element.scrollTop += n * r.containerHeight)
                                  : (r.element.scrollLeft += n * r.containerWidth),
                              !1);
                    },
                    T = function (e, t, u) {
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
                                                    var t = e.axis,
                                                        u = e.e,
                                                        n = e.i;
                                                    return 'y' === t
                                                        ? {
                                                              cursorPosition: u.screenY,
                                                              windowScrolled: window.pageYOffset,
                                                              elementPosition:
                                                                  n.scrollbarYRail.getBoundingClientRect().top,
                                                          }
                                                        : {
                                                              cursorPosition: u.screenX,
                                                              windowScrolled: window.pageXOffset,
                                                              elementPosition:
                                                                  n.scrollbarXRail.getBoundingClientRect().left,
                                                          };
                                                })({ axis: t, e: n, i: e }),
                                                i = o.cursorPosition - o.windowScrolled - o.elementPosition,
                                                a = (function (e) {
                                                    var t = e.axis,
                                                        u = e.cursorPositionOnRail,
                                                        n = e.i;
                                                    return u > ('y' === t ? n.scrollbarYTop : n.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: i, i: e });
                                            L({ axis: t, cursorPositionOnRail: i, direction: a, i: e }) &&
                                                clearTimeout(r),
                                                f(e, !1, u);
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
                function R(e, t, u) {
                    var n = u[0],
                        r = u[1],
                        o = u[2],
                        i = u[3],
                        a = u[4],
                        l = u[5],
                        s = u[6],
                        d = u[7],
                        E = u[8],
                        A = e.element,
                        _ = null,
                        F = null,
                        p = null;
                    function b(u) {
                        (A[s] = g(_ + p * (u[o] - F))), m(e, d), f(e, !1, t), u.stopPropagation(), u.preventDefault();
                    }
                    function v() {
                        h(e, d), e[E].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', b);
                    }
                    e.event.bind(e[a], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((_ = A[s]),
                            (F = t[o]),
                            (p = (e[r] - e[n]) / (e[i] - e[l])),
                            e.event.bind(e.ownerDocument, 'mousemove', b),
                            e.event.once(e.ownerDocument, 'mouseup', v),
                            e[E].classList.add(c.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var x = 1e3,
                    k = {
                        'click-rail': function (e, t) {
                            e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', T(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', T(e, 'x', t));
                        },
                        'drag-thumb': function (e, t) {
                            R(e, t, [
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
                                R(e, t, [
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
                                    var a = 0,
                                        l = 0;
                                    switch (n.which) {
                                        case 37:
                                            a = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            l = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            a = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
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
                                    (e.settings.suppressScrollX && 0 !== a) ||
                                        (e.settings.suppressScrollY && 0 !== l) ||
                                        ((u.scrollTop -= l),
                                        (u.scrollLeft += a),
                                        f(e, !1, t),
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
                                        })(a, l) && n.preventDefault());
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
                                    a = o[1];
                                if (
                                    !(function (e, u, r) {
                                        if (!p.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(e)) return !1;
                                        for (var o = e; o && o !== n; ) {
                                            if (o.classList.contains(s.consuming)) return !0;
                                            var i = t(o);
                                            if (
                                                [i.overflow, i.overflowX, i.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var a = o.scrollHeight - o.clientHeight;
                                                if (
                                                    a > 0 &&
                                                    !((0 === o.scrollTop && r > 0) || (o.scrollTop === a && r < 0))
                                                )
                                                    return !0;
                                                var l = o.scrollWidth - o.clientWidth;
                                                if (
                                                    l > 0 &&
                                                    !((0 === o.scrollLeft && u < 0) || (o.scrollLeft === l && u > 0))
                                                )
                                                    return !0;
                                            }
                                            o = o.parentNode;
                                        }
                                        return !1;
                                    })(r.target, i, a)
                                ) {
                                    var l = !1,
                                        c = (i * e.settings.wheelSpeed) | 0,
                                        d = (a * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (a ? (n.scrollTop -= d) : (n.scrollTop += c), (l = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (i ? (n.scrollLeft += c) : (n.scrollLeft -= d), (l = !0))
                                        : ((n.scrollTop -= d), (n.scrollLeft += c)),
                                        f(e, !1, u),
                                        (l =
                                            l ||
                                            (function (t, u) {
                                                var r = Math.floor(n.scrollTop),
                                                    o = 0 === n.scrollTop,
                                                    i = r + n.offsetHeight === n.scrollHeight,
                                                    a = 0 === n.scrollLeft,
                                                    l = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                                return (
                                                    !(Math.abs(u) > Math.abs(t) ? o || i : a || l) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(i, a)),
                                        l && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
                                }
                            }
                            e.event.bind(n, 'wheel', r),
                                void 0 !== window.onmousewheel && e.event.bind(n, 'mousewheel', r);
                        },
                        touch: function (e, u) {
                            if (p.supportsTouch || p.supportsIePointer) {
                                var n = e.element,
                                    r = {},
                                    o = 0,
                                    i = {},
                                    a = null;
                                p.supportsTouch
                                    ? (e.event.bind(n, 'touchstart', E),
                                      e.event.bind(n, 'touchmove', m),
                                      e.event.bind(n, 'touchend', h))
                                    : p.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(n, 'pointerdown', E),
                                            e.event.bind(n, 'pointermove', m),
                                            e.event.bind(n, 'pointerup', h))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(n, 'MSPointerDown', E),
                                            e.event.bind(n, 'MSPointerMove', m),
                                            e.event.bind(n, 'MSPointerUp', h)));
                            }
                            function l(t, r) {
                                (n.scrollTop -= r), (n.scrollLeft -= t), f(e, !1, u);
                            }
                            function c(e) {
                                return e.targetTouches ? e.targetTouches[0] : e;
                            }
                            function d(e) {
                                return (
                                    (!e.pointerType || 'pen' !== e.pointerType || 0 !== e.buttons) &&
                                    (!(!e.targetTouches || 1 !== e.targetTouches.length) ||
                                        !(
                                            !e.pointerType ||
                                            'mouse' === e.pointerType ||
                                            e.pointerType === e.MSPOINTER_TYPE_MOUSE
                                        ))
                                );
                            }
                            function E(e) {
                                if (d(e)) {
                                    var t = c(e);
                                    (r.pageX = t.pageX),
                                        (r.pageY = t.pageY),
                                        (o = new Date().getTime()),
                                        null !== a && clearInterval(a);
                                }
                            }
                            function m(u) {
                                if (d(u)) {
                                    var a = c(u),
                                        E = { pageX: a.pageX, pageY: a.pageY },
                                        m = E.pageX - r.pageX,
                                        h = E.pageY - r.pageY;
                                    if (
                                        (function (e, u, r) {
                                            if (!n.contains(e)) return !1;
                                            for (var o = e; o && o !== n; ) {
                                                if (o.classList.contains(s.consuming)) return !0;
                                                var i = t(o);
                                                if (
                                                    [i.overflow, i.overflowX, i.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var a = o.scrollHeight - o.clientHeight;
                                                    if (
                                                        a > 0 &&
                                                        !((0 === o.scrollTop && r > 0) || (o.scrollTop === a && r < 0))
                                                    )
                                                        return !0;
                                                    var l = o.scrollLeft - o.clientWidth;
                                                    if (
                                                        l > 0 &&
                                                        !(
                                                            (0 === o.scrollLeft && u < 0) ||
                                                            (o.scrollLeft === l && u > 0)
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
                                    l(m, h), (r = E);
                                    var A = new Date().getTime(),
                                        _ = A - o;
                                    _ > 0 && ((i.x = m / _), (i.y = h / _), (o = A)),
                                        (function (t, u) {
                                            var r = Math.floor(n.scrollTop),
                                                o = n.scrollLeft,
                                                i = Math.abs(t),
                                                a = Math.abs(u);
                                            if (a > i) {
                                                if (
                                                    (u < 0 && r === e.contentHeight - e.containerHeight) ||
                                                    (u > 0 && 0 === r)
                                                )
                                                    return 0 === window.scrollY && u > 0 && p.isChrome;
                                            } else if (
                                                i > a &&
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
                                    (clearInterval(a),
                                    (a = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(a)
                                            : i.x || i.y
                                              ? Math.abs(i.x) < 0.01 && Math.abs(i.y) < 0.01
                                                  ? clearInterval(a)
                                                  : (l(30 * i.x, 30 * i.y), (i.x *= 0.8), (i.y *= 0.8))
                                              : clearInterval(a);
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
                                a = 0;
                            function l() {
                                e.onScroll();
                            }
                            function s(n, r, o, i) {
                                void 0 === o && (o = null),
                                    void 0 === i && (i = !1),
                                    y({
                                        scrollableDomEle: u,
                                        direction: 'right',
                                        onRefUpdateCallback: l,
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
                            function d() {
                                if (r) return r;
                            }
                            function E() {
                                a = 0;
                            }
                            function A(r) {
                                if (e.scrollbarXActive) {
                                    var l = n - r.screenX;
                                    (u.scrollLeft += l), (n = r.screenX);
                                    var s = new Date().getTime();
                                    if (((o = (l / (s - i)) * 1e3), (i = s), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === u.scrollLeft || u.scrollLeft === c
                                            ? 0 === a && (a = window.setTimeout(E, 250))
                                            : 0 !== a && (window.clearTimeout(a), (a = 0));
                                    }
                                    m(e, 'x'),
                                        m(e, 'dragging', { immediately: !0 }),
                                        r.stopPropagation(),
                                        r.preventDefault();
                                }
                            }
                            function _(e) {
                                (n = e.screenX),
                                    (r = !0),
                                    requestAnimationFrame(function () {
                                        r = !1;
                                    }),
                                    (i = new Date().getTime());
                            }
                            function F(n) {
                                var r = e.contentWidth - e.containerWidth + t;
                                if (u.scrollLeft < t) s(t - u.scrollLeft, x, d);
                                else if (u.scrollLeft > r) s(r - u.scrollLeft, x, d);
                                else {
                                    new Date().getTime() - i < 100 && s(o / 4, x, d, !0);
                                }
                                h(e, 'x'),
                                    h(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(c.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', A);
                            }
                            function g() {
                                r = !0;
                            }
                            u.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((n = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', A),
                                        e.event.once(e.ownerDocument, 'mouseup', F),
                                        e.event.once(e.ownerDocument, 'mousedown', _),
                                        e.event.once(u, 'wheel', g),
                                        e.scrollbarXRail.classList.add(c.clicking),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    M = function (e, r) {
                        var o = this;
                        if (
                            (void 0 === r && (r = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var i in ((this.element = e),
                        e.classList.add(l),
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
                        var a,
                            d,
                            E = function () {
                                return e.classList.add(c.focus);
                            },
                            m = function () {
                                return e.classList.remove(c.focus);
                            };
                        (this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((d = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (a = e.scrollLeft < 0),
                                (e.scrollLeft = d),
                                a)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new F()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = n(s.rail('x'))),
                            (this.scrollbarXButtonStart = n(s.buttonStart('x'))),
                            (this.scrollbarXButtonEnd = n(s.buttonEnd('x'))),
                            (this.scrollbarXTrack = n(s.track('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = n(s.thumb('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', E),
                            this.event.bind(this.scrollbarX, 'blur', m),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = n(s.rail('y'))),
                            (this.scrollbarYButtonStart = n(s.buttonStart('y'))),
                            (this.scrollbarYButtonEnd = n(s.buttonEnd('y'))),
                            (this.scrollbarYTrack = n(s.track('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = n(s.thumb('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', E),
                            this.event.bind(this.scrollbarY, 'blur', m),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            b().then(function () {
                                var n = t(o.scrollbarXRail);
                                (o.scrollbarXBottom = parseInt(n.bottom, 10)),
                                    isNaN(o.scrollbarXBottom)
                                        ? ((o.isScrollbarXUsingBottom = !1), (o.scrollbarXTop = g(n.top)))
                                        : (o.isScrollbarXUsingBottom = !0),
                                    (o.railBorderXWidth = g(n.borderLeftWidth) + g(n.borderRightWidth)),
                                    u(o.scrollbarXRail, { display: 'block' }),
                                    (o.railXMarginWidth = g(n.marginLeft) + g(n.marginRight)),
                                    u(o.scrollbarXRail, { display: '' }),
                                    (o.railXWidth = null),
                                    (o.railXRatio = null);
                                var r = t(o.scrollbarYRail);
                                (o.scrollbarYRight = parseInt(r.right, 10)),
                                    isNaN(o.scrollbarYRight)
                                        ? ((o.isScrollbarYUsingRight = !1), (o.scrollbarYLeft = g(r.left)))
                                        : (o.isScrollbarYUsingRight = !0),
                                    (o.scrollbarYOuterWidth = o.isRtl
                                        ? (function (e) {
                                              var u = t(e);
                                              return (
                                                  g(u.width) +
                                                  g(u.paddingLeft) +
                                                  g(u.paddingRight) +
                                                  g(u.borderLeftWidth) +
                                                  g(u.borderRightWidth)
                                              );
                                          })(o.scrollbarY)
                                        : null),
                                    (o.railBorderYWidth = g(r.borderTopWidth) + g(r.borderBottomWidth)),
                                    u(o.scrollbarYRail, { display: 'block' }),
                                    (o.railYMarginHeight = g(r.marginTop) + g(r.marginBottom)),
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
                                        return k[e](o, o.settings.overScrollWidth);
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
                                    f(o, !1, o.settings.overScrollWidth, !1);
                            });
                    };
                (M.prototype._getAnimationSettings = function (e, t, u, n) {
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
                                f(r, !0, r.settings.overScrollWidth, !1), u && u(e);
                            },
                            onAnimationCompleteCallback: function () {
                                n && n();
                            },
                        }
                    );
                }),
                    (M.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (M.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (M.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (M.prototype.handleMouseLeave = function () {}),
                    (M.prototype.update = function () {
                        var e = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            u(this.scrollbarXRail, { display: 'block' }),
                            u(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                g(t(this.scrollbarXRail).marginLeft) + g(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                g(t(this.scrollbarYRail).marginTop) + g(t(this.scrollbarYRail).marginBottom)),
                            u(this.scrollbarXRail, { display: 'none' }),
                            u(this.scrollbarYRail, { display: 'none' }),
                            b().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    f(e, !1, e.settings.overScrollWidth, !1),
                                    D(e, 'top', 0, !1, !1, !0),
                                    D(e, 'left', 0, !1, !1, !0),
                                    u(e.scrollbarXRail, { display: '' }),
                                    u(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (M.prototype.setScrollLeft = function (e, t, u) {
                        y(this._getAnimationSettings(e, 'right', t, u));
                    }),
                    (M.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (M.prototype.setScrollTop = function (e, t, u) {
                        y(this._getAnimationSettings(e, 'bottom', t, u));
                    }),
                    (M.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (M.prototype.onScroll = function (e) {
                        this.isAlive && f(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (M.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (f(this, !1, this.settings.overScrollWidth, !1),
                            D(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (M.prototype.destroy = function () {
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
                    (M.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = M);
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
            596: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => c,
                        getSize: () => s,
                        graphicsQuality: () => d,
                    });
                var n = {};
                u.r(n), u.d(n, { mouse: () => l, onResize: () => i });
                var r = u(472);
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const i = (0, r.E)('clientResized'),
                    a = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const l = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && o(!1);
                    }
                    function u() {
                        e.enabled && o(!0);
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
                            : o(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${t}`,
                                        i = a[t]((e) => u([e, 'outside']));
                                    function l(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, l),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(o, l),
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
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && o(!0);
                        },
                        disableOutside() {
                            e.enabled && o(!1);
                        },
                    });
                })();
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function c(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const d = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            472: (e, t, u) => {
                'use strict';
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
            153: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => W });
                var n = {};
                u.r(n), u.d(n, { getBgUrl: () => a, getTextureUrl: () => i });
                var r = {};
                u.r(r),
                    u.d(r, {
                        addModelObserver: () => v,
                        addPreloadTexture: () => g,
                        children: () => n,
                        displayStatus: () => l,
                        displayStatusIs: () => O,
                        events: () => c,
                        extraSize: () => H,
                        forceTriggerMouseMove: () => M,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => b,
                        getDisplayStatus: () => P,
                        getScale: () => S,
                        getSize: () => f,
                        getViewGlobalPosition: () => B,
                        isEventHandled: () => k,
                        isFocused: () => R,
                        pxToRem: () => y,
                        remToPx: () => L,
                        resize: () => C,
                        sendEvent: () => F,
                        setAnimateWindow: () => T,
                        setEventHandled: () => x,
                        setInputPaddingsRem: () => p,
                        setSidePaddingsRem: () => D,
                        whenTutorialReady: () => N,
                    });
                var o = u(596);
                function i(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${i(e, t, u)})`;
                }
                const l = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var s = u(472);
                const c = {
                        onTextureFrozen: (0, s.E)('self.onTextureFrozen'),
                        onTextureReady: (0, s.E)('self.onTextureReady'),
                        onDomBuilt: (0, s.E)('self.onDomBuilt'),
                        onLoaded: (0, s.E)('self.onLoaded'),
                        onDisplayChanged: (0, s.E)('self.onShowingStatusChanged'),
                        onFocusUpdated: (0, s.E)('self.onFocusChanged'),
                        children: {
                            onAdded: (0, s.E)('children.onAdded'),
                            onLoaded: (0, s.E)('children.onLoaded'),
                            onRemoved: (0, s.E)('children.onRemoved'),
                            onAttached: (0, s.E)('children.onAttached'),
                            onTextureReady: (0, s.E)('children.onTextureReady'),
                            onRequestPosition: (0, s.E)('children.requestPosition'),
                        },
                    },
                    d = ['args'];
                const E = 2,
                    m = 16,
                    h = 32,
                    A = 64,
                    _ = (e, t) => {
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
                                })(t, d);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
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
                        var n;
                    },
                    F = {
                        close(e) {
                            _('popover' === e ? E : h);
                        },
                        minimize() {
                            _(A);
                        },
                        move(e) {
                            _(m, { isMouseEvent: !0, on: e });
                        },
                    };
                function g(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function p(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function b(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function v(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function C(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function B(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: L(t.x), y: L(t.y) };
                }
                function w() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function S() {
                    return viewEnv.getScale();
                }
                function y(e) {
                    return viewEnv.pxToRem(e);
                }
                function L(e) {
                    return viewEnv.remToPx(e);
                }
                function T(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function R() {
                    return viewEnv.isFocused();
                }
                function x() {
                    return viewEnv.setEventHandled();
                }
                function k() {
                    return viewEnv.isEventHandled();
                }
                function M() {
                    viewEnv.forceTriggerMouseMove();
                }
                function P() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(l).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === l[t]), e), {}),
                    H = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : c.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    W = { view: r, client: o };
            },
            521: (e, t, u) => {
                'use strict';
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
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                var n = u(153);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => o.Z, B0: () => l, ry: () => g, Eu: () => p });
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
                var o = u(358);
                const i = {
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
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(521),
                    h = u(153);
                const A = ['args'];
                function _(e, t, u, n, r, o, i) {
                    try {
                        var a = e[o](i),
                            l = a.value;
                    } catch (e) {
                        return void u(e);
                    }
                    a.done ? t(l) : Promise.resolve(l).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        u = arguments;
                                    return new Promise(function (n, r) {
                                        var o = e.apply(t, u);
                                        function i(e) {
                                            _(o, n, r, i, a, 'next', e);
                                        }
                                        function a(e) {
                                            _(o, n, r, i, a, 'throw', e);
                                        }
                                        i(void 0);
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
                    b = (e, t) => {
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
                    v = () => b(l.CLOSE),
                    D = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var f = u(572);
                const C = r.instance,
                    B = {
                        DataTracker: o.Z,
                        ViewModel: f.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => b(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => b(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            b(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), o) => {
                            const i = h.O.view.getViewGlobalPosition(),
                                a = u.getBoundingClientRect(),
                                s = a.x,
                                c = a.y,
                                d = a.width,
                                E = a.height,
                                m = {
                                    x: h.O.view.pxToRem(s) + i.x,
                                    y: h.O.view.pxToRem(c) + i.y,
                                    width: h.O.view.pxToRem(d),
                                    height: h.O.view.pxToRem(E),
                                };
                            b(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: F(m),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, v);
                        },
                        handleViewEvent: b,
                        onBindingsReady: g,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
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
                        UserLocale: a,
                    };
                window.ViewEnvHelper = B;
            },
            57: (e, t, u) => {
                'use strict';
                var n = u(179),
                    r = u.n(n),
                    o = u(493),
                    i = u.n(o);
                let a;
                function l(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' ');
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
                let c;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(c || (c = {}));
                var d = u(364);
                Date.now();
                var E = u(153);
                const m = (e = 1) => {
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
                    h = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    A = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    _ = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    F = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    g = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = h(`${e}.${u}`, window);
                                return _(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    p = (e) => {
                        const t = ((e) => {
                                const t = m(),
                                    u = t.caller,
                                    n = t.resId,
                                    r = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: r, modelPath: F(r, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const r = h(F(u, `${t}.${n}`), window);
                                    return _(r) ? (e.push(r.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    b = d.Sw.instance;
                let v;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(v || (v = {}));
                const D = (e = 'model', t = v.Deep) => {
                    const u = (0, n.useState)(0),
                        r = (u[0], u[1]),
                        o = (0, n.useMemo)(() => m(), []),
                        i = o.caller,
                        a = o.resId,
                        l = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                            [i, e],
                        ),
                        s = (0, n.useState)(() =>
                            ((e) => {
                                const t = h(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return _(t) ? t.value : t;
                            })(g(l)),
                        ),
                        c = s[0],
                        d = s[1],
                        E = (0, n.useRef)(-1);
                    return (
                        A(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? v.Deep : v.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== v.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === v.Deep
                                            ? (e === c && r((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    n = p(e);
                                E.current = b.addCallback(n, u, a, t === v.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== v.None)
                                return () => {
                                    b.removeCallback(E.current, a);
                                };
                        }, [a, t]),
                        c
                    );
                };
                d.Sw.instance;
                var f = u(521);
                const C = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function B(e = f.n.NONE, t = C, u = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== f.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (E.O.view.isEventHandled()) return;
                                E.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                var w = u(483),
                    S = u.n(w);
                function y(e) {
                    engine.call('PlaySound', e);
                }
                const L = {
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
                    T = [
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
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                class k extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && y(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && y(this.props.soundClick);
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
                            u = e.onClick,
                            n = e.goto,
                            o = e.side,
                            i = e.type,
                            a = e.classNames,
                            l = e.onMouseEnter,
                            s = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, T)),
                            m = S()(L.base, L[`base__${i}`], L[`base__${o}`], null == a ? void 0 : a.base),
                            h = S()(L.icon, L[`icon__${i}`], L[`icon__${o}`], null == a ? void 0 : a.icon),
                            A = S()(L.glow, null == a ? void 0 : a.glow),
                            _ = S()(L.caption, L[`caption__${i}`], null == a ? void 0 : a.caption),
                            F = S()(L.goto, null == a ? void 0 : a.goto);
                        return r().createElement(
                            'div',
                            x(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(s),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                E,
                            ),
                            'info' !== i && r().createElement('div', { className: L.shine }),
                            r().createElement('div', { className: h }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: _ }, t),
                            n && r().createElement('div', { className: F }, n),
                        );
                    }
                }
                k.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const M = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var P = u(926),
                    O = u.n(P);
                const H = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var N;
                function W(e, t, u) {
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
                })(N || (N = {}));
                const I = E.O.client.getSize('rem'),
                    Y = I.width,
                    X = I.height,
                    U = Object.assign({ width: Y, height: X }, W(Y, X, M)),
                    G = (0, n.createContext)(U),
                    z = ['children'];
                const $ = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, z);
                    const r = (0, n.useContext)(G),
                        o = r.extraLarge,
                        i = r.large,
                        a = r.medium,
                        l = r.small,
                        s = r.extraSmall,
                        c = r.extraLargeWidth,
                        d = r.largeWidth,
                        E = r.mediumWidth,
                        m = r.smallWidth,
                        h = r.extraSmallWidth,
                        A = r.extraLargeHeight,
                        _ = r.largeHeight,
                        F = r.mediumHeight,
                        g = r.smallHeight,
                        p = r.extraSmallHeight,
                        b = { extraLarge: A, large: _, medium: F, small: g, extraSmall: p };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && i) return t;
                        if (u.medium && a) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && s) return t;
                    } else {
                        if (u.extraLargeWidth && c) return H(t, u, b);
                        if (u.largeWidth && d) return H(t, u, b);
                        if (u.mediumWidth && E) return H(t, u, b);
                        if (u.smallWidth && m) return H(t, u, b);
                        if (u.extraSmallWidth && h) return H(t, u, b);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && A) return t;
                            if (u.largeHeight && _) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && g) return t;
                            if (u.extraSmallHeight && p) return t;
                        }
                    }
                    return null;
                };
                $.defaultProps = {
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
                (0, n.memo)($);
                const j = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(G),
                        u = (0, n.useState)(t),
                        o = u[0],
                        i = u[1],
                        a = (0, n.useCallback)((e, t) => {
                            const u = E.O.view.pxToRem(e),
                                n = E.O.view.pxToRem(t);
                            i(Object.assign({ width: u, height: n }, W(u, n, M)));
                        }, []);
                    A(() => {
                        engine.on('clientResized', a);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', a), [a]);
                    const l = (0, n.useMemo)(() => Object.assign({}, o), [o]);
                    return r().createElement(G.Provider, { value: l }, e);
                });
                let q, V, K;
                !(function (e) {
                    (e[(e.ExtraSmall = M.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = M.small.width)] = 'Small'),
                        (e[(e.Medium = M.medium.width)] = 'Medium'),
                        (e[(e.Large = M.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = M.extraLarge.width)] = 'ExtraLarge');
                })(q || (q = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = M.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = M.small.width)] = 'Small'),
                            (e[(e.Medium = M.medium.width)] = 'Medium'),
                            (e[(e.Large = M.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = M.extraLarge.width)] = 'ExtraLarge');
                    })(V || (V = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = M.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = M.small.height)] = 'Small'),
                            (e[(e.Medium = M.medium.height)] = 'Medium'),
                            (e[(e.Large = M.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = M.extraLarge.height)] = 'ExtraLarge');
                    })(K || (K = {}));
                const Q = () => {
                        const e = (0, n.useContext)(G),
                            t = e.width,
                            u = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return q.ExtraLarge;
                                    case e.large:
                                        return q.Large;
                                    case e.medium:
                                        return q.Medium;
                                    case e.small:
                                        return q.Small;
                                    case e.extraSmall:
                                        return q.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), q.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return V.ExtraLarge;
                                    case e.largeWidth:
                                        return V.Large;
                                    case e.mediumWidth:
                                        return V.Medium;
                                    case e.smallWidth:
                                        return V.Small;
                                    case e.extraSmallWidth:
                                        return V.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), V.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return K.ExtraLarge;
                                    case e.largeHeight:
                                        return K.Large;
                                    case e.mediumHeight:
                                        return K.Medium;
                                    case e.smallHeight:
                                        return K.Small;
                                    case e.extraSmallHeight:
                                        return K.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), K.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: o, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    Z = ['children', 'className'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = {
                        [V.ExtraSmall]: '',
                        [V.Small]: O().SMALL_WIDTH,
                        [V.Medium]: `${O().SMALL_WIDTH} ${O().MEDIUM_WIDTH}`,
                        [V.Large]: `${O().SMALL_WIDTH} ${O().MEDIUM_WIDTH} ${O().LARGE_WIDTH}`,
                        [V.ExtraLarge]: `${O().SMALL_WIDTH} ${O().MEDIUM_WIDTH} ${O().LARGE_WIDTH} ${O().EXTRA_LARGE_WIDTH}`,
                    },
                    te = {
                        [K.ExtraSmall]: '',
                        [K.Small]: O().SMALL_HEIGHT,
                        [K.Medium]: `${O().SMALL_HEIGHT} ${O().MEDIUM_HEIGHT}`,
                        [K.Large]: `${O().SMALL_HEIGHT} ${O().MEDIUM_HEIGHT} ${O().LARGE_HEIGHT}`,
                        [K.ExtraLarge]: `${O().SMALL_HEIGHT} ${O().MEDIUM_HEIGHT} ${O().LARGE_HEIGHT} ${O().EXTRA_LARGE_HEIGHT}`,
                    },
                    ue = {
                        [q.ExtraSmall]: '',
                        [q.Small]: O().SMALL,
                        [q.Medium]: `${O().SMALL} ${O().MEDIUM}`,
                        [q.Large]: `${O().SMALL} ${O().MEDIUM} ${O().LARGE}`,
                        [q.ExtraLarge]: `${O().SMALL} ${O().MEDIUM} ${O().LARGE} ${O().EXTRA_LARGE}`,
                    },
                    ne = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Z);
                        const o = Q(),
                            i = o.mediaWidth,
                            a = o.mediaHeight,
                            l = o.mediaSize;
                        return r().createElement('div', J({ className: S()(u, ee[i], te[a], ue[l]) }, n), t);
                    },
                    re = ['children'];
                const oe = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, re);
                        return r().createElement(j, null, r().createElement(ne, u, t));
                    },
                    ie = (0, n.createContext)('model'),
                    ae = {
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
                let le, se;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(le || (le = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(se || (se = {}));
                const ce = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: o,
                    disabled: i,
                    mixClass: a,
                    soundHover: l,
                    soundClick: s,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: A,
                }) => {
                    const _ = (0, n.useRef)(null),
                        F = (0, n.useState)(u),
                        g = F[0],
                        p = F[1],
                        b = (0, n.useState)(!1),
                        v = b[0],
                        D = b[1],
                        f = (0, n.useState)(!1),
                        C = f[0],
                        B = f[1],
                        w = (0, n.useCallback)(() => {
                            i || (_.current && (_.current.focus(), p(!0)));
                        }, [i]),
                        L = (0, n.useCallback)(
                            (e) => {
                                g && null !== _.current && !_.current.contains(e.target) && p(!1);
                            },
                            [g],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                i || (A && A(e));
                            },
                            [i, A],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                i || (null !== l && y(l), c && c(e), B(!0));
                            },
                            [i, l, c],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                i || (m && m(e), D(!1));
                            },
                            [i, m],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                i || (null !== s && y(s), E && E(e), u && w(), D(!0));
                            },
                            [i, s, E, w, u],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                i || (h && h(e), D(!1));
                            },
                            [i, h],
                        ),
                        H = S()(
                            ae.base,
                            ae[`base__${o}`],
                            {
                                [ae.base__disabled]: i,
                                [ae[`base__${t}`]]: t,
                                [ae.base__focus]: g,
                                [ae.base__highlightActive]: v,
                                [ae.base__firstHover]: C,
                            },
                            a,
                        ),
                        N = S()(ae.state, ae.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                        (0, n.useEffect)(() => {
                            p(u);
                        }, [u]),
                        r().createElement(
                            'div',
                            {
                                ref: _,
                                className: H,
                                onMouseEnter: x,
                                onMouseMove: k,
                                onMouseUp: M,
                                onMouseDown: P,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            o !== le.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: ae.back }),
                                    r().createElement('span', { className: ae.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: N },
                                r().createElement('span', { className: ae.stateDisabled }),
                                r().createElement('span', { className: ae.stateHighlightHover }),
                                r().createElement('span', { className: ae.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: ae.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ce.defaultProps = { type: le.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const de = (0, n.memo)(ce),
                    Ee = [
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
                function me(e) {
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
                const he = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: d.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    Ae = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            o = e.onMouseEnter,
                            i = e.onMouseLeave,
                            a = e.onMouseDown,
                            l = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            h = e.decoratorId,
                            A = void 0 === h ? 0 : h,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            b = e.onShow,
                            v = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Ee);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, n.useMemo)(() => p || m().resId, [p]),
                            B = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (he(u, A, { isMouseEvent: !0, on: !0, arguments: me(r) }, C),
                                    b && b(),
                                    (f.current.isVisible = !0));
                            }, [u, A, r, C, b]),
                            w = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        he(u, A, { on: !1 }, C),
                                        f.current.isVisible && v && v(),
                                        (f.current.isVisible = !1);
                                }
                            }, [u, A, C, v]),
                            S = (0, n.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && w();
                            }, [F, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return F
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                      o && o(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              w(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === E && w(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === E && w(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    _e = 'Footer_base_2b',
                    Fe = 'Footer_description_9a',
                    ge = 'Footer_selectRewards_f9',
                    pe = 'Footer_rewardsSelected_19',
                    be = 'Footer_rewardsSelectedCount_5b',
                    ve = 'Footer_rewardsSelectedIcon_59',
                    De = 'Footer_buttons_12',
                    fe = 'Footer_cButton_f7',
                    Ce = ({ rewardsSelectedCount: e, onOkClick: t, onCloseClick: u }) => {
                        const n = e > 0,
                            o = Q().mediaSize > q.Small ? se.medium : se.small;
                        return r().createElement(
                            'div',
                            { className: _e },
                            r().createElement(
                                'div',
                                { className: Fe },
                                n
                                    ? r().createElement(
                                          'div',
                                          { className: pe },
                                          R.strings.selectable_reward.footer.rewardsSelected(),
                                          r().createElement('span', { className: be }, e),
                                          r().createElement(
                                              Ae,
                                              {
                                                  contentId:
                                                      R.views.lobby.common.tooltips.SelectedRewardsTooltipView('resId'),
                                              },
                                              r().createElement('div', { className: ve }),
                                          ),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: ge },
                                          R.strings.selectable_reward.footer.selectRewards(),
                                      ),
                            ),
                            r().createElement(
                                'div',
                                { className: De },
                                r().createElement(
                                    de,
                                    { size: o, type: le.primary, disabled: !n, mixClass: fe, onClick: t },
                                    R.strings.selectable_reward.footer.okBtn.label(),
                                ),
                                r().createElement(
                                    de,
                                    { size: o, type: le.secondary, mixClass: fe, onClick: u },
                                    R.strings.selectable_reward.footer.closeBtn.label(),
                                ),
                            ),
                        );
                    },
                    Be = (e) => {
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
                    we = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            u = t.width,
                            n = t.height;
                        return 0 !== u && 0 !== n;
                    },
                    Se = (e) => {
                        const t = (0, n.useState)(we(e ? e.current : null)),
                            u = t[0],
                            r = t[1];
                        return (
                            (0, n.useEffect)(() => {
                                let t = 0;
                                const u = () => {
                                    t = requestAnimationFrame(() => {
                                        we(e ? e.current : null) ? r(!0) : u();
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
                    };
                var ye = u(380),
                    Le = u.n(ye);
                const Te = 'ScrollArea_base_47',
                    Re = 'ScrollArea_base__scrollIndent_1d',
                    xe = 'ScrollArea_base__verticalScrollbarMargin_50',
                    ke = 'ScrollArea_base__multiple_44',
                    Me = 'ScrollArea_base__hidden_ec',
                    Pe = r().forwardRef((e, t) => {
                        const u = e.offsetLeft,
                            o = void 0 === u ? 0 : u,
                            i = e.offsetTop,
                            a = void 0 === i ? 0 : i,
                            l = e.scrollSettings,
                            s = e.onUpdateActiveAxis,
                            c = e.onHorizontalScroll,
                            d = e.onVerticalScroll,
                            E = e.onOverScrollAtBeginning,
                            m = e.onOverScrollAtEnd,
                            h = e.wrapperIndent,
                            A = e.verticalScrollbarMargin,
                            _ = e.isMultipleScroll,
                            F = e.scrollAreaContainer,
                            g = e.children,
                            p = e.classMix,
                            b = e.onScrollLeftHandled,
                            v = (0, n.useState)(!1),
                            D = v[0],
                            f = v[1],
                            C = (0, n.useState)(),
                            B = C[0],
                            w = C[1],
                            y = (0, n.useState)(),
                            L = y[0],
                            T = y[1],
                            R = (0, n.useRef)(null),
                            x = (0, n.useCallback)(() => {
                                B &&
                                    s &&
                                    s({ x: B.scrollbarXActive, y: B.scrollbarYActive }, { x: B.reach.x, y: B.reach.y });
                            }, [s, B]),
                            k = (0, n.useCallback)(() => B, [B]),
                            M = (0, n.useCallback)(() => {
                                B && B.update();
                            }, [B]),
                            P = (0, n.useCallback)(
                                (e, t, u) => {
                                    B && (B.setScrollLeft(e, t, u), b && b(e, B.contentWidth - B.containerWidth));
                                },
                                [B, b],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    B && (B.setScrollLeftImmediately(e), b && b(e, B.contentWidth - B.containerWidth));
                                },
                                [B, b],
                            ),
                            H = (0, n.useCallback)(
                                (e, t, u) => {
                                    B && B.setScrollTop(e, t, u);
                                },
                                [B],
                            ),
                            N = (0, n.useCallback)(
                                (e) => {
                                    B && B.setScrollTopImmediately(e);
                                },
                                [B],
                            ),
                            W = (0, n.useCallback)(() => {
                                if (L && c && B) {
                                    const e = { scrollPosition: L.scrollLeft < 0 ? 0 : L.scrollLeft, reach: B.reach.x };
                                    c(e);
                                }
                            }, [c, L, B]),
                            I = (0, n.useCallback)(() => {
                                if (L && d && B) {
                                    const e = { scrollPosition: L.scrollTop, reach: B.reach.y };
                                    d(e);
                                }
                            }, [d, L, B]),
                            Y = (0, n.useCallback)(() => {
                                E && E();
                            }, [E]),
                            X = (0, n.useCallback)(() => {
                                m && m();
                            }, [m]),
                            U = (0, n.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), T(e);
                                },
                                [t],
                            ),
                            G = (0, n.useCallback)(() => {
                                B &&
                                    (B.update(),
                                    (R.current = Be(() => {
                                        x();
                                    })));
                            }, [B, x]),
                            z = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (B && L)
                                return (
                                    document.addEventListener('mousemove', z),
                                    window.addEventListener('resize', G),
                                    L.addEventListener('ps-scroll-x', W),
                                    L.addEventListener('ps-scroll-y', I),
                                    L.addEventListener('over-scroll-beginning', Y),
                                    L.addEventListener('over-scroll-ending', X),
                                    f(!0),
                                    () => {
                                        window.removeEventListener('resize', G),
                                            document.removeEventListener('mousemove', z),
                                            L &&
                                                (L.removeEventListener('ps-scroll-x', W),
                                                L.removeEventListener('ps-scroll-y', I),
                                                L.removeEventListener('over-scroll-beginning', Y),
                                                L.removeEventListener('over-scroll-ending', X));
                                    }
                                );
                        }, [z, W, Y, X, G, L, B, I]);
                        const $ = (0, n.useRef)(L || null);
                        $.current = L || null;
                        const j = Se($);
                        (0, n.useEffect)(
                            () => (
                                !B && L && j && w(new (Le())(L, Object.assign({}, l))),
                                () => {
                                    B && (B.destroy(), w(void 0));
                                }
                            ),
                            [L, j, l, B],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == R.current || R.current();
                                },
                                [],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    Be(() => {
                                        B && x();
                                    }),
                                [x, B],
                            ),
                            (0, n.useEffect)(() => {
                                o > 0 && O(o);
                            }, [o, O]),
                            (0, n.useEffect)(() => {
                                a > 0 && N(a);
                            }, [a, N]),
                            (0, n.useEffect)(() => {
                                F &&
                                    ((F.setScrollLeft = P),
                                    (F.setScrollTop = H),
                                    (F.setScrollLeftImmediately = O),
                                    (F.setScrollTopImmediately = N),
                                    (F.updateScrollArea = M),
                                    (F.getScrollbar = k));
                            }, [F, P, O, H, N, M, k]);
                        const q = S()(Te, { [Re]: h, [Me]: !D, [xe]: A, [ke]: _ }, p);
                        return r().createElement('div', { className: q, ref: U }, g);
                    }),
                    Oe = ['children'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Ne = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Oe);
                        return r().createElement(
                            Ae,
                            He(
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
                    },
                    We = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const Ye = R.views.common.tooltip_window.simple_tooltip_content,
                    Xe = (e) => {
                        let t = e.children,
                            u = e.body,
                            o = e.header,
                            i = e.note,
                            a = e.alert,
                            l = e.args,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, We);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: o, note: i, alert: a });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [a, u, o, i, l]);
                        return r().createElement(
                            Ae,
                            Ie(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? Ye.SimpleTooltipHtmlContent('resId') : Ye.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            t,
                        );
                        var d;
                    },
                    Ue = 'state_normal',
                    Ge = 'state_limited',
                    ze = 'state_received';
                let $e, je, qe, Ve, Ke, Qe, Ze;
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
                        (e.RacesPoint = 'races_point');
                })($e || ($e = {})),
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
                    })(je || (je = {})),
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
                    })(qe || (qe = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Ve || (Ve = {})),
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
                    })(Ke || (Ke = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Qe || (Qe = {})),
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
                    })(Ze || (Ze = {}));
                const Je = (e, t = qe.Small) => `R.images.gui.maps.icons.quests.bonuses.${t}.${e}_gift`,
                    et = (e, t = 's180x135', u = 'R.images.gui.maps.icons.selectableReward.reward') => `${u}.${t}.${e}`,
                    tt = 'Reward_base_ae',
                    ut = 'Reward_base__selected_e6',
                    nt = 'Reward_base__stateNormal_8c',
                    rt = 'Reward_optDeviceType_87',
                    ot = 'Reward_reward_63',
                    it = 'Reward_image_b3',
                    at = 'Reward_base__stateReceived_45',
                    lt = 'Reward_base__stateLimited_d7',
                    st = 'Reward_base__accepting_72',
                    ct = 'Reward_disabled_34',
                    dt = 'Reward_packSize_26',
                    Et = 'Reward_label_1e',
                    mt = 'Reward_storage_06',
                    ht = 'Reward_storage__hidden_de',
                    At = 'Reward_storageIcon_53',
                    _t = 'Reward_countText_cc',
                    Ft = 'Reward_select_8f',
                    gt = 'Reward_state_8e',
                    pt = 'Reward_stateText_a8',
                    bt = 'Reward_stateIcon_9b',
                    vt = 'Reward_glow_81',
                    Dt = {
                        base: 'SelectButton_base_fd',
                        base__plus: 'SelectButton_base__plus_d3',
                        base__disabled: 'SelectButton_base__disabled_86',
                        base__minus: 'SelectButton_base__minus_0b',
                    };
                let ft;
                !(function (e) {
                    (e.Plus = 'plus'), (e.Minus = 'minus');
                })(ft || (ft = {}));
                const Ct = ({ type: e = ft.Plus, isEnabled: t = !0, onClick: u }) => {
                    const o = (0, n.useCallback)(
                            (e) => {
                                e.stopPropagation(), t && u(e);
                            },
                            [t, u],
                        ),
                        i = S()(Dt.base, Dt[`base__${e}`], !t && Dt.base__disabled);
                    return r().createElement('div', { className: i, onClick: o });
                };
                var Bt;
                !(function (e) {
                    (e.None = ''), (e.Trophy = 'trophy'), (e.Deluxe = 'delux');
                })(Bt || (Bt = {}));
                const wt = R.strings.selectable_reward.reward;
                const St = ({ type: e, count: t, state: u, storageCount: o, packSize: i, onAdd: a, onReduce: c }) => {
                        const d = (0, n.useContext)(su),
                            E = t > 0 && u !== ze,
                            m = d === lu.Accepting && E,
                            h = (function (e) {
                                return e.startsWith(Bt.Trophy)
                                    ? Bt.Trophy
                                    : e.startsWith(Bt.Deluxe)
                                      ? Bt.Deluxe
                                      : Bt.None;
                            })(e),
                            A = (0, n.useCallback)(() => {
                                u === Ue ? (y('bp_click'), a(e)) : u === Ge && y('bp_click_limit');
                            }, [a, u, e]),
                            _ = (0, n.useCallback)(() => {
                                u === Ue && (y('bp_click_plus'), a(e));
                            }, [u, e, a]),
                            F = (0, n.useCallback)(() => {
                                y('bp_click_minus'), c(e);
                            }, [e, c]),
                            g = (0, n.useCallback)(() => {
                                y('bp_highlight');
                            }, []),
                            p = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.selectableReward.reward.${h})`,
                                }),
                                [h],
                            ),
                            b = (0, n.useMemo)(() => ({ backgroundImage: `url(${et(e)})` }), [e]),
                            v = (0, n.useMemo)(() => ({ maskImage: `url(${et(e)})` }), [e]),
                            D = (0, n.useMemo)(
                                () =>
                                    u === Ge && 0 === t
                                        ? {
                                              header: wt.tooltip.state_limited.header(),
                                              body: wt.tooltip.state_limited.body(),
                                          }
                                        : { isEnabled: !1 },
                                [t, u],
                            ),
                            f = (0, n.useMemo)(() => ({ type: e }), [e]),
                            C = S()(tt, E && ut, m && st, u === Ue && nt, u === ze && at, u === Ge && lt),
                            B = S()(mt, o <= 0 && ht);
                        return r().createElement(
                            'div',
                            { className: C, onClick: A, onMouseEnter: g },
                            r().createElement('div', { className: B }, r().createElement('div', { className: At }), o),
                            h !== Bt.None && r().createElement('div', { className: rt, style: p }),
                            r().createElement(
                                'div',
                                { className: ot },
                                r().createElement(
                                    Ne,
                                    { args: f },
                                    r().createElement('div', { className: it, style: b }),
                                ),
                                !E && u !== Ue && r().createElement('div', { className: ct, style: v }),
                                i > 1 &&
                                    r().createElement('div', { className: dt }, l(wt.packSizeCount(), { packSize: i })),
                            ),
                            r().createElement(
                                'div',
                                { className: Et },
                                ((e) => {
                                    var t;
                                    const u = e.split('_')[1],
                                        n = u && R.strings.blueprints.nations.$dyn(u),
                                        r = null == (t = R.strings.artefacts.$dyn(e)) ? void 0 : t.$dyn('name');
                                    return n || (r ? s(r) : void console.error('title for reward is not provided'));
                                })(e),
                            ),
                            E || u === Ue
                                ? r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('span', { className: _t }, t),
                                      r().createElement(
                                          'div',
                                          { className: Ft },
                                          r().createElement(Ct, { type: ft.Minus, isEnabled: E, onClick: F }),
                                          r().createElement(Ct, { type: ft.Plus, isEnabled: u === Ue, onClick: _ }),
                                      ),
                                  )
                                : r().createElement(
                                      Xe,
                                      D,
                                      r().createElement(
                                          'div',
                                          { className: gt },
                                          r().createElement('div', { className: pt }, wt.$dyn(u)),
                                          r().createElement('div', { className: bt }),
                                      ),
                                  ),
                            r().createElement('div', { className: vt }),
                        );
                    },
                    yt = 'ContentGrid_base_f7',
                    Lt = 'ContentGrid_scrollArea_98',
                    Tt = 'ContentGrid_scrollAreaInner_32',
                    Rt = 'ContentGrid_reward_4b',
                    xt = 'ContentGrid_lip_7e',
                    kt = 'ContentGrid_lip__top_2c',
                    Mt = 'ContentGrid_lip__bottom_70';
                function Pt() {
                    return (
                        (Pt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Pt.apply(this, arguments)
                    );
                }
                function Ot(e, t, u, n, r, o, i) {
                    try {
                        var a = e[o](i),
                            l = a.value;
                    } catch (e) {
                        return void u(e);
                    }
                    a.done ? t(l) : Promise.resolve(l).then(n, r);
                }
                const Ht = { suppressScrollX: !0 },
                    Nt = () => {
                        const e = (0, n.useContext)(ie),
                            t = D(e),
                            u = t.onRewardAdd,
                            o = t.onRewardReduce,
                            i = t.selectedTab,
                            a = D(`${e}.rewards`),
                            l = (0, n.useRef)({}),
                            s = (0, n.useState)('start'),
                            c = s[0],
                            E = s[1],
                            m = (0, n.useState)(!1),
                            h = m[0],
                            A = m[1],
                            _ = (0, n.useState)(!1),
                            F = _[0],
                            g = _[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    u({ type: e });
                                },
                                [u],
                            ),
                            b = (0, n.useCallback)(
                                (e) => {
                                    o({ type: e });
                                },
                                [o],
                            ),
                            v = (0, n.useCallback)((e) => {
                                E(e.reach);
                            }, []),
                            f = (0, n.useCallback)((e) => {
                                A(e.y);
                            }, []);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    g(!0),
                                    E('start'),
                                    null == l.current.updateScrollArea || l.current.updateScrollArea(),
                                    Be(
                                        Be(() => {
                                            g(!1), null == l.current.updateScrollArea || l.current.updateScrollArea();
                                        }),
                                    )
                                ),
                                [i],
                            ),
                            (0, n.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                yield (0, d.Eu)(),
                                                    yield (0, d.Eu)(),
                                                    null == l.current.updateScrollArea || l.current.updateScrollArea();
                                            }),
                                            function () {
                                                var t = this,
                                                    u = arguments;
                                                return new Promise(function (n, r) {
                                                    var o = e.apply(t, u);
                                                    function i(e) {
                                                        Ot(o, n, r, i, a, 'next', e);
                                                    }
                                                    function a(e) {
                                                        Ot(o, n, r, i, a, 'throw', e);
                                                    }
                                                    i(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            r().createElement(
                                'div',
                                { className: yt },
                                r().createElement(
                                    Pe,
                                    {
                                        key: 'area',
                                        classMix: Lt,
                                        scrollSettings: Ht,
                                        scrollAreaContainer: l.current,
                                        onVerticalScroll: v,
                                        onUpdateActiveAxis: f,
                                    },
                                    !F &&
                                        r().createElement(
                                            'div',
                                            { className: Tt },
                                            a.map(({ value: e }, t) =>
                                                r().createElement(
                                                    'div',
                                                    { key: t, className: Rt },
                                                    r().createElement(St, Pt({}, e, { key: t, onAdd: p, onReduce: b })),
                                                ),
                                            ),
                                        ),
                                ),
                                h && 'start' !== c && r().createElement('div', { className: S()(xt, kt) }),
                                h && 'end' !== c && r().createElement('div', { className: S()(xt, Mt) }),
                            )
                        );
                    },
                    Wt = 'Category_base_23',
                    It = 'Category_base__viewReady_69',
                    Yt = 'Category_glow_a9',
                    Xt = 'Category_base__selected_9e',
                    Ut = 'Category_title_54',
                    Gt = 'Category_imageContainer_e0',
                    zt = 'Category_image_ff',
                    $t = 'Category_base__completed_0d',
                    jt = 'Category_base__accepting_c8',
                    qt = 'Category_check_6c',
                    Vt = 'Category_counter_3c',
                    Kt = R.strings.selectable_reward.tabs,
                    Qt = ({ type: e, count: t, limit: u, isSelected: o, onClick: i }) => {
                        const a = (0, n.useContext)(su),
                            s = Q().mediaSize,
                            c = t === u,
                            d = a === lu.Accepting && t > 0 && !o,
                            E = s >= q.Medium ? qe.Big : qe.Small,
                            m = (0, n.useState)(!1),
                            h = m[0],
                            A = m[1],
                            _ = (0, n.useMemo)(() => ({ backgroundImage: `url(${Je(e, E)})` }), [E, e]),
                            F = (0, n.useMemo)(() => l(Kt.counter(), { count: t, limit: u }), [t, u]),
                            g = (0, n.useMemo)(() => ({ type: e }), [e]),
                            p = (0, n.useCallback)(() => {
                                y('bp_click'), i(e);
                            }, [i, e]),
                            b = (0, n.useCallback)(() => {
                                y('bp_highlight');
                            }, []);
                        (0, n.useEffect)(
                            () =>
                                Be(() => {
                                    A(!0);
                                }),
                            [],
                        );
                        const v = S()(Wt, h && It, c && $t, o && Xt, d && jt);
                        return r().createElement(
                            'div',
                            { className: v, onClick: p, onMouseEnter: b },
                            r().createElement('div', { className: Yt }),
                            r().createElement(
                                'div',
                                { className: Ut },
                                ((e) => R.strings.selectable_reward.tabs.items.$dyn(e))(e),
                            ),
                            r().createElement(
                                Ne,
                                { args: g },
                                r().createElement(
                                    'div',
                                    { className: Gt },
                                    r().createElement('div', { className: zt, style: _ }),
                                    r().createElement('div', { className: qt }),
                                ),
                            ),
                            r().createElement('div', { className: Vt }, F),
                        );
                    },
                    Zt = 'Content_base_32',
                    Jt = 'Content_base__accepting_82',
                    eu = 'Content_heading_33',
                    tu = 'Content_title_b6',
                    uu = 'Content_subTitle_77',
                    nu = 'Content_wrapper_f2',
                    ru = 'Content_categories_36',
                    ou = 'Content_footer_6a',
                    iu = 'Content_base__windowed_c5';
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        au.apply(this, arguments)
                    );
                }
                let lu;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.Accepting = 1)] = 'Accepting');
                })(lu || (lu = {}));
                const su = (0, n.createContext)(lu.None),
                    cu = ({ title: e, subTitle: t, isLargeWindowed: u }) => {
                        const o = (0, n.useState)(lu.None),
                            i = o[0],
                            a = o[1],
                            l = (0, n.useContext)(ie),
                            s = D(l),
                            c = s.tabs,
                            d = s.selectedTab,
                            E = s.totalRewardCount,
                            m = s.onOkClick,
                            h = s.onCloseClick,
                            A = s.onTabClick;
                        (0, n.useEffect)(() => {
                            if (i === lu.Accepting)
                                return ((e, t) => {
                                    let u;
                                    const n = setTimeout(() => {
                                        u = e();
                                    }, t);
                                    return () => {
                                        'function' == typeof u && u(), clearTimeout(n);
                                    };
                                })(m, 600);
                        });
                        const _ = (0, n.useCallback)(() => {
                                a(lu.Accepting);
                            }, []),
                            F = (0, n.useCallback)(() => {
                                h();
                            }, [h]),
                            g = (0, n.useCallback)(
                                (e) => {
                                    A({ type: e });
                                },
                                [A],
                            ),
                            p = S()(Zt, i === lu.Accepting && Jt, u && iu);
                        return r().createElement(
                            su.Provider,
                            { value: i },
                            r().createElement(
                                'div',
                                { className: p },
                                r().createElement(
                                    'div',
                                    { className: eu },
                                    r().createElement('div', { className: tu }, e),
                                    r().createElement('div', { className: uu }, t),
                                ),
                                r().createElement(
                                    'div',
                                    { className: nu },
                                    r().createElement(
                                        'div',
                                        { className: ru },
                                        c.map(({ value: e }, t) =>
                                            r().createElement(
                                                Qt,
                                                au({}, e, { key: t, isSelected: d === e.type, onClick: g }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(Nt, null),
                                ),
                                r().createElement(
                                    'div',
                                    { className: ou },
                                    r().createElement(Ce, { rewardsSelectedCount: E, onOkClick: _, onCloseClick: F }),
                                ),
                            ),
                        );
                    },
                    du = 'Error_base_bc',
                    Eu = 'Error_image_a5',
                    mu = 'Error_title_0e',
                    hu = 'Error_description_f4',
                    Au = 'Error_footer_63',
                    _u = 'Error_button_81',
                    Fu = R.strings.selectable_reward.error,
                    gu = () => {
                        const e = (0, n.useContext)(ie),
                            t = D(e).onCloseClick,
                            u = (0, n.useCallback)(() => {
                                t();
                            }, [t]);
                        return r().createElement(
                            'div',
                            { className: du },
                            r().createElement('div', { className: Eu }),
                            r().createElement('div', { className: mu }, Fu.title()),
                            r().createElement('div', { className: hu }, Fu.description()),
                            r().createElement(
                                'div',
                                { className: Au },
                                r().createElement(
                                    de,
                                    { mixClass: _u, type: le.primary, size: se.medium, onClick: u },
                                    Fu.button(),
                                ),
                            ),
                        );
                    },
                    pu = 'SelectableRewardBase_base_68';
                let bu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Error = 'error');
                })(bu || (bu = {}));
                const vu = ({ modelPath: e = 'model', title: t, subTitle: u }) => {
                        const o = D(e).tabs.length ? bu.Normal : bu.Error,
                            i = (() => {
                                const e = E.O.view.getSize('rem'),
                                    t = (0, n.useState)({ height: e.height, width: e.width }),
                                    u = t[0],
                                    r = t[1],
                                    o = (0, n.useCallback)((e, t) => {
                                        const u = E.O.view.pxToRem(e),
                                            n = E.O.view.pxToRem(t);
                                        r({ width: u, height: n });
                                    }, []);
                                return (
                                    (0, n.useEffect)(
                                        () => (
                                            engine.on('clientResized', o),
                                            () => {
                                                engine.off('clientResized', o);
                                            }
                                        ),
                                        [o],
                                    ),
                                    u
                                );
                            })(),
                            a = i.width,
                            l = i.height,
                            s = l >= 1017 && l < M.large.height && a === M.large.width,
                            c = S()(pu, s && O().LARGE);
                        return r().createElement(
                            ie.Provider,
                            { value: e },
                            r().createElement(
                                oe,
                                { className: c },
                                o === bu.Normal && r().createElement(cu, { title: t, subTitle: u, isLargeWindowed: s }),
                                o === bu.Error && r().createElement(gu, null),
                            ),
                        );
                    },
                    Du = 'App_base_8d',
                    fu = 'App_fill_a2',
                    Cu = 'App_close_8a',
                    Bu = 'model.selectableRewardModel',
                    wu = () => {
                        const e = D(Bu).onCloseClick,
                            t = D().rewardType,
                            u = l(R.strings.ranked_battles.selectableReward.title(), {
                                rewardName: systemLocale.toUpperCase(
                                    R.strings.ranked_battles.yearRewards.box.$dyn(t).title(),
                                ),
                            }),
                            o = (0, n.useCallback)(() => {
                                e();
                            }, [e]);
                        return (
                            B(f.n.ESCAPE, o),
                            r().createElement(
                                'div',
                                { className: Du },
                                r().createElement('div', { className: fu }),
                                r().createElement(vu, {
                                    modelPath: Bu,
                                    title: u,
                                    subTitle: R.strings.ranked_battles.selectableReward.subTitle(),
                                }),
                                r().createElement(
                                    'div',
                                    { className: Cu },
                                    r().createElement(k, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: o,
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(r().createElement(wu, null), document.getElementById('root'));
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
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, n] = deferred[l], o = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(l--, 1);
                        var a = u();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, n];
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
        (__webpack_require__.j = 44),
        (() => {
            var e = { 44: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [o, i, a] = u,
                        l = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (a) var s = a(__webpack_require__);
                    }
                    for (t && t(u); l < o.length; l++)
                        (r = o[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(s);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [976], () => __webpack_require__(57));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
