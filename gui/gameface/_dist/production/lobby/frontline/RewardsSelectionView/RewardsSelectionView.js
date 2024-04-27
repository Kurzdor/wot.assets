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
                function i(e, t) {
                    if (!r) throw new Error('No element matching method supported');
                    return r.call(e, t);
                }
                function o(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function a(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return i(e, t);
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
                var D = function (e, t, u, n, r, i) {
                    var o;
                    if ((void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === i && (i = !1), 'top' === t))
                        o = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        o = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, u, n, r, i) {
                        var o = u[0],
                            a = u[1],
                            l = u[2],
                            s = u[3],
                            c = u[4],
                            d = u[5];
                        void 0 === n && (n = !0);
                        void 0 === r && (r = !1);
                        void 0 === i && (i = !1);
                        var E = e.element;
                        if (!e.reach) return;
                        (e.reach[s] = null), E[l] < 1 && (e.reach[s] = 'start');
                        E[l] > e[o] - e[a] - 1 && (e.reach[s] = 'end');
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
                        e.reach[s] && (t || i) && E.dispatchEvent(v('ps-' + s + '-reach-' + e.reach[s]));
                    })(e, u, o, n, r, i);
                };
                var f = function (e, t, n, r) {
                    void 0 === t && (t = !1), void 0 === n && (n = 0), void 0 === r && (r = !1);
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
                        var d = Math.floor(i.scrollTop),
                            E = Math.floor(i.scrollLeft) - n,
                            m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        i.contains(e.scrollbarXRail) ||
                            (a(i, s.rail('x')).forEach(function (e) {
                                return o(e);
                            }),
                            i.appendChild(e.scrollbarXRail)),
                            i.contains(e.scrollbarYRail) ||
                                (a(i, s.rail('y')).forEach(function (e) {
                                    return o(e);
                                }),
                                i.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = B(e, g((e.railXWidth * e.containerWidth) / e.contentWidth))),
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
                                  (e.scrollbarYHeight = B(e, g((e.railYHeight * e.containerHeight) / e.contentHeight))),
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
                                    i = Math.floor(e.scrollTop);
                                t.isRtl
                                    ? (r.left =
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (r.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (r.bottom = t.scrollbarXBottom - i)
                                    : (r.top = t.scrollbarXTop + i);
                                u(t.scrollbarXRail, r);
                                var o = { top: i, height: t.railYHeight };
                                t.isScrollbarYUsingRight
                                    ? t.isRtl
                                        ? (o.right =
                                              t.contentWidth -
                                              (t.negativeScrollAdjustment + e.scrollLeft) -
                                              t.scrollbarYRight -
                                              t.scrollbarYOuterWidth)
                                        : (o.right = t.scrollbarYRight - e.scrollLeft)
                                    : t.isRtl
                                      ? (o.left =
                                            t.negativeScrollAdjustment +
                                            e.scrollLeft +
                                            2 * t.containerWidth -
                                            t.contentWidth -
                                            t.scrollbarYLeft -
                                            t.scrollbarYOuterWidth)
                                      : (o.left = t.scrollbarYLeft + e.scrollLeft);
                                u(t.scrollbarYRail, o),
                                    u(t.scrollbarX, {
                                        left: t.scrollbarXLeft,
                                        width: t.scrollbarXWidth - t.railBorderXWidth * n,
                                    }),
                                    u(t.scrollbarY, {
                                        top: t.scrollbarYTop,
                                        height: t.scrollbarYHeight - t.railBorderYWidth * n,
                                    });
                            })(i, e, m),
                            e.scrollbarXButtonStart.classList.toggle('disabled', E < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', E + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', i.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                i.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (i.classList.add(c.active('x')), D(e, 'left', E - e.lastScrollLeft, !0, t))
                                : (i.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (i.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (i.classList.add(c.active('y')), D(e, 'top', i.scrollTop - e.lastScrollTop, !0, t))
                                : (i.classList.remove(c.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (i.scrollTop = 0)),
                            (e.lastScrollTop = d),
                            (e.lastScrollLeft = E),
                            (e.scrollTopPercent = i.scrollTop / i.scrollHeight),
                            (e.scrollLeftPercent = i.scrollLeft / i.scrollWidth);
                    }
                };
                function B(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
                    );
                }
                var C = {
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
                            i = e.x2,
                            o = e.y2;
                        return (
                            1 -
                            (n * ((t = u), Math.pow(t, 3)) +
                                r *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(u) +
                                i *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(u) +
                                o *
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
                            i = e.duration,
                            o = e.cubicBezierPoints,
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
                                    i = e.initialScrollPosition,
                                    o = e.isHorizontalDirection,
                                    a = e.scrollLengthProp,
                                    l = e.direction;
                                if (u) {
                                    var s = document.documentElement;
                                    t = o ? s.offsetWidth : s.offsetHeight;
                                } else t = (n[a] - n.getBoundingClientRect()[r]) | 0;
                                return ['left', 'top'].includes(l) ? i : t - i;
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
                                        if (C.hasOwnProperty(t)) return C[t](r);
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
                                    })({ easingPreset: a, cubicBezierPoints: o, runTime: l, duration: i });
                                if (!isNaN(m)) {
                                    var h = Math.round(m * p),
                                        b = F ? h + g : p - h;
                                    if (
                                        (c.breakBounds &&
                                            (b < c.startBound
                                                ? (b = c.startBound)
                                                : b > c.endBound && (b = c.endBound)),
                                        l < i)
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
                            i = (function (e) {
                                var t = e.axis,
                                    u = e.i,
                                    n = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var r = u.scrollbarY.offsetTop,
                                        i = r + u.scrollbarYHeight;
                                    return n >= r && n <= i;
                                }
                                var o = u.scrollbarX.offsetLeft,
                                    a = o + u.scrollbarXWidth;
                                return n >= o && n <= a;
                            })({ axis: t, i: r, cursorPositionOnRail: u });
                        return i
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
                                      i = (n - r.scrollbar / 2) / r.rail,
                                      o = Math.round(Math.min(r.maxScroll, Math.max(0, r.content * i)));
                                  'y' === t ? (u.element.scrollTop = o) : (u.element.scrollLeft = o);
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
                                i = function () {
                                    if (1 === n.buttons) {
                                        if (
                                            !n.target.closest('.ps__rail-' + t) ||
                                            !n.target.closest('.ps__track_' + t)
                                        ) {
                                            var i = (function (e) {
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
                                                o = i.cursorPosition - i.windowScrolled - i.elementPosition,
                                                a = (function (e) {
                                                    var t = e.axis,
                                                        u = e.cursorPositionOnRail,
                                                        n = e.i;
                                                    return u > ('y' === t ? n.scrollbarYTop : n.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: o, i: e });
                                            L({ axis: t, cursorPositionOnRail: o, direction: a, i: e }) &&
                                                clearTimeout(r),
                                                f(e, !1, u);
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
                function R(e, t, u) {
                    var n = u[0],
                        r = u[1],
                        i = u[2],
                        o = u[3],
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
                        (A[s] = g(_ + p * (u[i] - F))), m(e, d), f(e, !1, t), u.stopPropagation(), u.preventDefault();
                    }
                    function v() {
                        h(e, d), e[E].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', b);
                    }
                    e.event.bind(e[a], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((_ = A[s]),
                            (F = t[i]),
                            (p = (e[r] - e[n]) / (e[o] - e[l])),
                            e.event.bind(e.ownerDocument, 'mousemove', b),
                            e.event.once(e.ownerDocument, 'mouseup', v),
                            e[E].classList.add(c.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var k = 1e3,
                    x = {
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
                                    i(u, ':hover')
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
                                            var i = u.scrollLeft;
                                            if (0 === n) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === i && t < 0) ||
                                                    (i >= e.contentWidth - e.containerWidth && t > 0)
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
                                var i = (function (e) {
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
                                    o = i[0],
                                    a = i[1];
                                if (
                                    !(function (e, u, r) {
                                        if (!p.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(e)) return !1;
                                        for (var i = e; i && i !== n; ) {
                                            if (i.classList.contains(s.consuming)) return !0;
                                            var o = t(i);
                                            if (
                                                [o.overflow, o.overflowX, o.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var a = i.scrollHeight - i.clientHeight;
                                                if (
                                                    a > 0 &&
                                                    !((0 === i.scrollTop && r > 0) || (i.scrollTop === a && r < 0))
                                                )
                                                    return !0;
                                                var l = i.scrollWidth - i.clientWidth;
                                                if (
                                                    l > 0 &&
                                                    !((0 === i.scrollLeft && u < 0) || (i.scrollLeft === l && u > 0))
                                                )
                                                    return !0;
                                            }
                                            i = i.parentNode;
                                        }
                                        return !1;
                                    })(r.target, o, a)
                                ) {
                                    var l = !1,
                                        c = (o * e.settings.wheelSpeed) | 0,
                                        d = (a * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (a ? (n.scrollTop -= d) : (n.scrollTop += c), (l = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (o ? (n.scrollLeft += c) : (n.scrollLeft -= d), (l = !0))
                                        : ((n.scrollTop -= d), (n.scrollLeft += c)),
                                        f(e, !1, u),
                                        (l =
                                            l ||
                                            (function (t, u) {
                                                var r = Math.floor(n.scrollTop),
                                                    i = 0 === n.scrollTop,
                                                    o = r + n.offsetHeight === n.scrollHeight,
                                                    a = 0 === n.scrollLeft,
                                                    l = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                                return (
                                                    !(Math.abs(u) > Math.abs(t) ? i || o : a || l) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(o, a)),
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
                                    i = 0,
                                    o = {},
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
                                        (i = new Date().getTime()),
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
                                            for (var i = e; i && i !== n; ) {
                                                if (i.classList.contains(s.consuming)) return !0;
                                                var o = t(i);
                                                if (
                                                    [o.overflow, o.overflowX, o.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var a = i.scrollHeight - i.clientHeight;
                                                    if (
                                                        a > 0 &&
                                                        !((0 === i.scrollTop && r > 0) || (i.scrollTop === a && r < 0))
                                                    )
                                                        return !0;
                                                    var l = i.scrollLeft - i.clientWidth;
                                                    if (
                                                        l > 0 &&
                                                        !(
                                                            (0 === i.scrollLeft && u < 0) ||
                                                            (i.scrollLeft === l && u > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                i = i.parentNode;
                                            }
                                            return !1;
                                        })(u.target, m, h)
                                    )
                                        return;
                                    l(m, h), (r = E);
                                    var A = new Date().getTime(),
                                        _ = A - i;
                                    _ > 0 && ((o.x = m / _), (o.y = h / _), (i = A)),
                                        (function (t, u) {
                                            var r = Math.floor(n.scrollTop),
                                                i = n.scrollLeft,
                                                o = Math.abs(t),
                                                a = Math.abs(u);
                                            if (a > o) {
                                                if (
                                                    (u < 0 && r === e.contentHeight - e.containerHeight) ||
                                                    (u > 0 && 0 === r)
                                                )
                                                    return 0 === window.scrollY && u > 0 && p.isChrome;
                                            } else if (
                                                o > a &&
                                                ((t < 0 && i === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === i))
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
                                            : o.x || o.y
                                              ? Math.abs(o.x) < 0.01 && Math.abs(o.y) < 0.01
                                                  ? clearInterval(a)
                                                  : (l(30 * o.x, 30 * o.y), (o.x *= 0.8), (o.y *= 0.8))
                                              : clearInterval(a);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var u = e.element,
                                n = null,
                                r = !1,
                                i = 0,
                                o = 0,
                                a = 0;
                            function l() {
                                e.onScroll();
                            }
                            function s(n, r, i, o) {
                                void 0 === i && (i = null),
                                    void 0 === o && (o = !1),
                                    y({
                                        scrollableDomEle: u,
                                        direction: 'right',
                                        onRefUpdateCallback: l,
                                        duration: r,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: n,
                                        onCheckForBreakCallback: i,
                                        boundsInfo: {
                                            breakBounds: o,
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
                                    if (((i = (l / (s - o)) * 1e3), (o = s), e.onScroll(), t > 0)) {
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
                                    (o = new Date().getTime());
                            }
                            function F(n) {
                                var r = e.contentWidth - e.containerWidth + t;
                                if (u.scrollLeft < t) s(t - u.scrollLeft, k, d);
                                else if (u.scrollLeft > r) s(r - u.scrollLeft, k, d);
                                else {
                                    new Date().getTime() - o < 100 && s(i / 4, k, d, !0);
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
                        var i = this;
                        if (
                            (void 0 === r && (r = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var o in ((this.element = e),
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
                            i.settings[o] = r[o];
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
                                var n = t(i.scrollbarXRail);
                                (i.scrollbarXBottom = parseInt(n.bottom, 10)),
                                    isNaN(i.scrollbarXBottom)
                                        ? ((i.isScrollbarXUsingBottom = !1), (i.scrollbarXTop = g(n.top)))
                                        : (i.isScrollbarXUsingBottom = !0),
                                    (i.railBorderXWidth = g(n.borderLeftWidth) + g(n.borderRightWidth)),
                                    u(i.scrollbarXRail, { display: 'block' }),
                                    (i.railXMarginWidth = g(n.marginLeft) + g(n.marginRight)),
                                    u(i.scrollbarXRail, { display: '' }),
                                    (i.railXWidth = null),
                                    (i.railXRatio = null);
                                var r = t(i.scrollbarYRail);
                                (i.scrollbarYRight = parseInt(r.right, 10)),
                                    isNaN(i.scrollbarYRight)
                                        ? ((i.isScrollbarYUsingRight = !1), (i.scrollbarYLeft = g(r.left)))
                                        : (i.isScrollbarYUsingRight = !0),
                                    (i.scrollbarYOuterWidth = i.isRtl
                                        ? (function (e) {
                                              var u = t(e);
                                              return (
                                                  g(u.width) +
                                                  g(u.paddingLeft) +
                                                  g(u.paddingRight) +
                                                  g(u.borderLeftWidth) +
                                                  g(u.borderRightWidth)
                                              );
                                          })(i.scrollbarY)
                                        : null),
                                    (i.railBorderYWidth = g(r.borderTopWidth) + g(r.borderBottomWidth)),
                                    u(i.scrollbarYRail, { display: 'block' }),
                                    (i.railYMarginHeight = g(r.marginTop) + g(r.marginBottom)),
                                    u(i.scrollbarXRail, { display: '' }),
                                    u(i.scrollbarYRail, { display: '' }),
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
                                        return x[e](i, i.settings.overScrollWidth);
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
                                    f(i, !1, i.settings.overScrollWidth, !1);
                            });
                    };
                (M.prototype._getAnimationSettings = function (e, t, u, n) {
                    var r = this,
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
            67: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => $ });
                var n = {};
                u.r(n), u.d(n, { mouse: () => d, onResize: () => s });
                var r = {};
                u.r(r),
                    u.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => m,
                        getSize: () => E,
                        graphicsQuality: () => h,
                    });
                var i = {};
                u.r(i), u.d(i, { getBgUrl: () => _, getTextureUrl: () => A });
                var o = {};
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.r(o),
                    u.d(o, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => w,
                        children: () => i,
                        displayStatus: () => F,
                        displayStatusIs: () => G,
                        events: () => g,
                        extraSize: () => z,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => M,
                        getBrowserTexturePath: () => y,
                        getDisplayStatus: () => U,
                        getScale: () => P,
                        getSize: () => R,
                        getViewGlobalPosition: () => x,
                        isEventHandled: () => Y,
                        isFocused: () => W,
                        pxToRem: () => O,
                        remToPx: () => H,
                        resize: () => k,
                        sendEvent: () => C,
                        setAnimateWindow: () => N,
                        setEventHandled: () => I,
                        setInputPaddingsRem: () => S,
                        setSidePaddingsRem: () => T,
                        whenTutorialReady: () => V,
                    });
                const s = a('clientResized'),
                    c = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function u() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => u([e, 'outside']));
                                    function a(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, a),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(i, a),
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
                const h = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function A(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function _(e, t, u) {
                    return `url(${A(e, t, u)})`;
                }
                const F = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    g = {
                        onTextureFrozen: a('self.onTextureFrozen'),
                        onTextureReady: a('self.onTextureReady'),
                        onDomBuilt: a('self.onDomBuilt'),
                        onLoaded: a('self.onLoaded'),
                        onDisplayChanged: a('self.onShowingStatusChanged'),
                        onFocusUpdated: a('self.onFocusChanged'),
                        children: {
                            onAdded: a('children.onAdded'),
                            onLoaded: a('children.onLoaded'),
                            onRemoved: a('children.onRemoved'),
                            onAttached: a('children.onAttached'),
                            onTextureReady: a('children.onTextureReady'),
                            onRequestPosition: a('children.requestPosition'),
                        },
                    },
                    p = ['args'];
                const b = 2,
                    v = 16,
                    D = 32,
                    f = 64,
                    B = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, p);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    C = {
                        close(e) {
                            B('popover' === e ? b : D);
                        },
                        minimize() {
                            B(f);
                        },
                        move(e) {
                            B(v, { isMouseEvent: !0, on: e });
                        },
                    };
                function w(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function S(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function y(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function L(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function R(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function k(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function x(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: H(t.x), y: H(t.y) };
                }
                function M() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function P() {
                    return viewEnv.getScale();
                }
                function O(e) {
                    return viewEnv.pxToRem(e);
                }
                function H(e) {
                    return viewEnv.remToPx(e);
                }
                function N(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function W() {
                    return viewEnv.isFocused();
                }
                function I() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(F).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === F[t]), e), {}),
                    z = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    V = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : g.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    $ = { view: o, client: r };
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
                u.d(t, { Z: () => i });
                var n = u(67);
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
                        const i = n.O.view.addModelObserver(e, u, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(i) : (this._views[u] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = r;
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
                u.d(t, { Sw: () => i.Z, B0: () => l, ry: () => g, Eu: () => p, Sy: () => v });
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
                var i = u(358);
                const o = {
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
                    h = u(67);
                const A = ['args'];
                function _(e, t, u, n, r, i, o) {
                    try {
                        var a = e[i](o),
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
                                        var i = e.apply(t, u);
                                        function o(e) {
                                            _(i, n, r, o, a, 'next', e);
                                        }
                                        function a(e) {
                                            _(i, n, r, o, a, 'throw', e);
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
                    b = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    v = () => b(l.CLOSE),
                    D = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var f = u(572);
                const B = r.instance,
                    C = {
                        DataTracker: i.Z,
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
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), i) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                a = u.getBoundingClientRect(),
                                s = a.x,
                                c = a.y,
                                d = a.width,
                                E = a.height,
                                m = {
                                    x: h.O.view.pxToRem(s) + o.x,
                                    y: h.O.view.pxToRem(c) + o.y,
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
                                args: i,
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
                        ClickOutsideManager: B,
                        SystemLocale: o,
                        UserLocale: a,
                    };
                window.ViewEnvHelper = C;
            },
            17: (e, t, u) => {
                'use strict';
                var n = u(179),
                    r = u.n(n),
                    i = u(493),
                    o = u.n(i),
                    a = u(483),
                    l = u.n(a);
                function s(e) {
                    engine.call('PlaySound', e);
                }
                const c = {
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
                    d = [
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
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                class m extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && s(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && s(this.props.soundClick);
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
                            i = e.side,
                            o = e.type,
                            a = e.classNames,
                            s = e.onMouseEnter,
                            m = e.onMouseLeave,
                            h = e.onMouseDown,
                            A = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, d)),
                            F = l()(c.base, c[`base__${o}`], c[`base__${i}`], null == a ? void 0 : a.base),
                            g = l()(c.icon, c[`icon__${o}`], c[`icon__${i}`], null == a ? void 0 : a.icon),
                            p = l()(c.glow, null == a ? void 0 : a.glow),
                            b = l()(c.caption, c[`caption__${o}`], null == a ? void 0 : a.caption),
                            v = l()(c.goto, null == a ? void 0 : a.goto);
                        return r().createElement(
                            'div',
                            E(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(h),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== o && r().createElement('div', { className: c.shine }),
                            r().createElement('div', { className: g }, r().createElement('div', { className: p })),
                            r().createElement('div', { className: b }, t),
                            n && r().createElement('div', { className: v }, n),
                        );
                    }
                }
                m.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const h = (e) => {
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
                var A = u(67),
                    _ = u(521),
                    F = u(364);
                const g = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function p(e = _.n.NONE, t = g, u = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== _.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (A.O.view.isEventHandled()) return;
                                A.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                const b = (e = 1) => {
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
                    v = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    D = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    f = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    B = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    C = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = v(`${e}.${u}`, window);
                                return f(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    w = (e) => {
                        const t = ((e) => {
                                const t = b(),
                                    u = t.caller,
                                    n = t.resId,
                                    r = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: r, modelPath: B(r, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const r = v(B(u, `${t}.${n}`), window);
                                    return f(r) ? (e.push(r.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    S = F.Sw.instance;
                let y;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(y || (y = {}));
                const L = (e = 'model', t = y.Deep) => {
                    const u = (0, n.useState)(0),
                        r = (u[0], u[1]),
                        i = (0, n.useMemo)(() => b(), []),
                        o = i.caller,
                        a = i.resId,
                        l = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        s = (0, n.useState)(() =>
                            ((e) => {
                                const t = v(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return f(t) ? t.value : t;
                            })(C(l)),
                        ),
                        c = s[0],
                        d = s[1],
                        E = (0, n.useRef)(-1);
                    return (
                        D(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? y.Deep : y.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== y.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === y.Deep
                                            ? (e === c && r((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    n = w(e);
                                E.current = S.addCallback(n, u, a, t === y.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== y.None)
                                return () => {
                                    S.removeCallback(E.current, a);
                                };
                        }, [a, t]),
                        c
                    );
                };
                let T, k, x, M;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(T || (T = {})),
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
                    })(k || (k = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(x || (x = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(M || (M = {}));
                let P;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(P || (P = {}));
                const O = 'metrics',
                    H = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    N = (e, t) => {
                        const u = (0, n.useCallback)(
                            (u, n = M.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: u,
                                            logLevel: n,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, n) => u(e, t, n);
                    },
                    W = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var I = u(926),
                    Y = u.n(I);
                let X;
                function U(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(X || (X = {}));
                const G = (e) => e.replace(/&nbsp;/g, ' ');
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
                let z;
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
                })(z || (z = {}));
                Date.now();
                F.Sw.instance;
                const V = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var $;
                function j(e, t, u) {
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
                        i = Math.min(n, r);
                    return {
                        extraLarge: i === u.extraLarge.weight,
                        large: i === u.large.weight,
                        medium: i === u.medium.weight,
                        small: i === u.small.weight,
                        extraSmall: i === u.extraSmall.weight,
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
                })($ || ($ = {}));
                const q = A.O.client.getSize('rem'),
                    K = q.width,
                    Q = q.height,
                    Z = Object.assign({ width: K, height: Q }, j(K, Q, W)),
                    J = (0, n.createContext)(Z),
                    ee = ['children'];
                const te = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, ee);
                    const r = (0, n.useContext)(J),
                        i = r.extraLarge,
                        o = r.large,
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
                        if (u.extraLarge && i) return t;
                        if (u.large && o) return t;
                        if (u.medium && a) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && s) return t;
                    } else {
                        if (u.extraLargeWidth && c) return V(t, u, b);
                        if (u.largeWidth && d) return V(t, u, b);
                        if (u.mediumWidth && E) return V(t, u, b);
                        if (u.smallWidth && m) return V(t, u, b);
                        if (u.extraSmallWidth && h) return V(t, u, b);
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
                te.defaultProps = {
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
                (0, n.memo)(te);
                const ue = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(J),
                        u = (0, n.useState)(t),
                        i = u[0],
                        o = u[1],
                        a = (0, n.useCallback)((e, t) => {
                            const u = A.O.view.pxToRem(e),
                                n = A.O.view.pxToRem(t);
                            o(Object.assign({ width: u, height: n }, j(u, n, W)));
                        }, []);
                    D(() => {
                        engine.on('clientResized', a);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', a), [a]);
                    const l = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                    return r().createElement(J.Provider, { value: l }, e);
                });
                let ne, re, ie;
                !(function (e) {
                    (e[(e.ExtraSmall = W.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = W.small.width)] = 'Small'),
                        (e[(e.Medium = W.medium.width)] = 'Medium'),
                        (e[(e.Large = W.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = W.extraLarge.width)] = 'ExtraLarge');
                })(ne || (ne = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = W.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = W.small.width)] = 'Small'),
                            (e[(e.Medium = W.medium.width)] = 'Medium'),
                            (e[(e.Large = W.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = W.extraLarge.width)] = 'ExtraLarge');
                    })(re || (re = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = W.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = W.small.height)] = 'Small'),
                            (e[(e.Medium = W.medium.height)] = 'Medium'),
                            (e[(e.Large = W.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = W.extraLarge.height)] = 'ExtraLarge');
                    })(ie || (ie = {}));
                const oe = () => {
                        const e = (0, n.useContext)(J),
                            t = e.width,
                            u = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return ne.ExtraLarge;
                                    case e.large:
                                        return ne.Large;
                                    case e.medium:
                                        return ne.Medium;
                                    case e.small:
                                        return ne.Small;
                                    case e.extraSmall:
                                        return ne.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ne.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return re.ExtraLarge;
                                    case e.largeWidth:
                                        return re.Large;
                                    case e.mediumWidth:
                                        return re.Medium;
                                    case e.smallWidth:
                                        return re.Small;
                                    case e.extraSmallWidth:
                                        return re.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), re.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return ie.ExtraLarge;
                                    case e.largeHeight:
                                        return ie.Large;
                                    case e.mediumHeight:
                                        return ie.Medium;
                                    case e.smallHeight:
                                        return ie.Small;
                                    case e.extraSmallHeight:
                                        return ie.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ie.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: u };
                    },
                    ae = ['children', 'className'];
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
                const se = {
                        [re.ExtraSmall]: '',
                        [re.Small]: Y().SMALL_WIDTH,
                        [re.Medium]: `${Y().SMALL_WIDTH} ${Y().MEDIUM_WIDTH}`,
                        [re.Large]: `${Y().SMALL_WIDTH} ${Y().MEDIUM_WIDTH} ${Y().LARGE_WIDTH}`,
                        [re.ExtraLarge]: `${Y().SMALL_WIDTH} ${Y().MEDIUM_WIDTH} ${Y().LARGE_WIDTH} ${Y().EXTRA_LARGE_WIDTH}`,
                    },
                    ce = {
                        [ie.ExtraSmall]: '',
                        [ie.Small]: Y().SMALL_HEIGHT,
                        [ie.Medium]: `${Y().SMALL_HEIGHT} ${Y().MEDIUM_HEIGHT}`,
                        [ie.Large]: `${Y().SMALL_HEIGHT} ${Y().MEDIUM_HEIGHT} ${Y().LARGE_HEIGHT}`,
                        [ie.ExtraLarge]: `${Y().SMALL_HEIGHT} ${Y().MEDIUM_HEIGHT} ${Y().LARGE_HEIGHT} ${Y().EXTRA_LARGE_HEIGHT}`,
                    },
                    de = {
                        [ne.ExtraSmall]: '',
                        [ne.Small]: Y().SMALL,
                        [ne.Medium]: `${Y().SMALL} ${Y().MEDIUM}`,
                        [ne.Large]: `${Y().SMALL} ${Y().MEDIUM} ${Y().LARGE}`,
                        [ne.ExtraLarge]: `${Y().SMALL} ${Y().MEDIUM} ${Y().LARGE} ${Y().EXTRA_LARGE}`,
                    },
                    Ee = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, ae);
                        const i = oe(),
                            o = i.mediaWidth,
                            a = i.mediaHeight,
                            s = i.mediaSize;
                        return r().createElement('div', le({ className: l()(u, se[o], ce[a], de[s]) }, n), t);
                    },
                    me = ['children'];
                const he = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, me);
                        return r().createElement(ue, null, r().createElement(Ee, u, t));
                    },
                    Ae = (0, n.createContext)('model'),
                    _e = {
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
                let Fe, ge;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Fe || (Fe = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(ge || (ge = {}));
                const pe = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: i,
                    disabled: o,
                    mixClass: a,
                    soundHover: c,
                    soundClick: d,
                    onMouseEnter: E,
                    onMouseMove: m,
                    onMouseDown: h,
                    onMouseUp: A,
                    onMouseLeave: _,
                    onClick: F,
                }) => {
                    const g = (0, n.useRef)(null),
                        p = (0, n.useState)(u),
                        b = p[0],
                        v = p[1],
                        D = (0, n.useState)(!1),
                        f = D[0],
                        B = D[1],
                        C = (0, n.useState)(!1),
                        w = C[0],
                        S = C[1],
                        y = (0, n.useCallback)(() => {
                            o || (g.current && (g.current.focus(), v(!0)));
                        }, [o]),
                        L = (0, n.useCallback)(
                            (e) => {
                                b && null !== g.current && !g.current.contains(e.target) && v(!1);
                            },
                            [b],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                o || (F && F(e));
                            },
                            [o, F],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                o || (null !== c && s(c), E && E(e), S(!0));
                            },
                            [o, c, E],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                o || (A && A(e), B(!1));
                            },
                            [o, A],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                o || (null !== d && s(d), h && h(e), u && y(), B(!0));
                            },
                            [o, d, h, y, u],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                o || (_ && _(e), B(!1));
                            },
                            [o, _],
                        ),
                        H = l()(
                            _e.base,
                            _e[`base__${i}`],
                            {
                                [_e.base__disabled]: o,
                                [_e[`base__${t}`]]: t,
                                [_e.base__focus]: b,
                                [_e.base__highlightActive]: f,
                                [_e.base__firstHover]: w,
                            },
                            a,
                        ),
                        N = l()(_e.state, _e.state__default);
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
                            v(u);
                        }, [u]),
                        r().createElement(
                            'div',
                            {
                                ref: g,
                                className: H,
                                onMouseEnter: k,
                                onMouseMove: x,
                                onMouseUp: M,
                                onMouseDown: P,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            i !== Fe.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: _e.back }),
                                    r().createElement('span', { className: _e.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: N },
                                r().createElement('span', { className: _e.stateDisabled }),
                                r().createElement('span', { className: _e.stateHighlightHover }),
                                r().createElement('span', { className: _e.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: _e.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                pe.defaultProps = { type: Fe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const be = (0, n.memo)(pe),
                    ve = [
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
                function De(e) {
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
                const fe = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: F.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    Be = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            a = e.onMouseDown,
                            l = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            h = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            _ = void 0 === A || A,
                            F = e.targetId,
                            g = void 0 === F ? 0 : F,
                            p = e.onShow,
                            v = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, ve);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, n.useMemo)(() => g || b().resId, [g]),
                            C = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (fe(u, h, { isMouseEvent: !0, on: !0, arguments: De(r) }, B),
                                    p && p(),
                                    (f.current.isVisible = !0));
                            }, [u, h, r, B, p]),
                            w = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        fe(u, h, { on: !1 }, B),
                                        f.current.isVisible && v && v(),
                                        (f.current.isVisible = !1);
                                }
                            }, [u, h, B, v]),
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
                                !1 === _ && w();
                            }, [_, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return _
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
                                                      i && i(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              w(), null == o || o(t), null == e || e(t);
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
                    Ce = 'Footer_base_2b',
                    we = 'Footer_description_9a',
                    Se = 'Footer_selectRewards_f9',
                    ye = 'Footer_rewardsSelected_19',
                    Le = 'Footer_rewardsSelectedCount_5b',
                    Te = 'Footer_rewardsSelectedIcon_59',
                    Re = 'Footer_buttons_12',
                    ke = 'Footer_cButton_f7',
                    xe = ({ rewardsSelectedCount: e, onOkClick: t, onCloseClick: u }) => {
                        const n = e > 0,
                            i = oe().mediaSize > ne.Small ? ge.medium : ge.small;
                        return r().createElement(
                            'div',
                            { className: Ce },
                            r().createElement(
                                'div',
                                { className: we },
                                n
                                    ? r().createElement(
                                          'div',
                                          { className: ye },
                                          R.strings.selectable_reward.footer.rewardsSelected(),
                                          r().createElement('span', { className: Le }, e),
                                          r().createElement(
                                              Be,
                                              {
                                                  contentId:
                                                      R.views.lobby.common.tooltips.SelectedRewardsTooltipView('resId'),
                                              },
                                              r().createElement('div', { className: Te }),
                                          ),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: Se },
                                          R.strings.selectable_reward.footer.selectRewards(),
                                      ),
                            ),
                            r().createElement(
                                'div',
                                { className: Re },
                                r().createElement(
                                    be,
                                    { size: i, type: Fe.primary, disabled: !n, mixClass: ke, onClick: t },
                                    R.strings.selectable_reward.footer.okBtn.label(),
                                ),
                                r().createElement(
                                    be,
                                    { size: i, type: Fe.secondary, mixClass: ke, onClick: u },
                                    R.strings.selectable_reward.footer.closeBtn.label(),
                                ),
                            ),
                        );
                    },
                    Me = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            u = t.width,
                            n = t.height;
                        return 0 !== u && 0 !== n;
                    },
                    Pe = (e) => {
                        const t = (0, n.useState)(Me(e ? e.current : null)),
                            u = t[0],
                            r = t[1];
                        return (
                            (0, n.useEffect)(() => {
                                let t = 0;
                                const u = () => {
                                    t = requestAnimationFrame(() => {
                                        Me(e ? e.current : null) ? r(!0) : u();
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
                var Oe = u(380),
                    He = u.n(Oe);
                const Ne = 'ScrollArea_base_47',
                    We = 'ScrollArea_base__scrollIndent_1d',
                    Ie = 'ScrollArea_base__verticalScrollbarMargin_50',
                    Ye = 'ScrollArea_base__multiple_44',
                    Xe = 'ScrollArea_base__hidden_ec',
                    Ue = r().forwardRef((e, t) => {
                        const u = e.offsetLeft,
                            i = void 0 === u ? 0 : u,
                            o = e.offsetTop,
                            a = void 0 === o ? 0 : o,
                            s = e.scrollSettings,
                            c = e.onUpdateActiveAxis,
                            d = e.onHorizontalScroll,
                            E = e.onVerticalScroll,
                            m = e.onOverScrollAtBeginning,
                            A = e.onOverScrollAtEnd,
                            _ = e.wrapperIndent,
                            F = e.verticalScrollbarMargin,
                            g = e.isMultipleScroll,
                            p = e.scrollAreaContainer,
                            b = e.children,
                            v = e.classMix,
                            D = e.onScrollLeftHandled,
                            f = (0, n.useState)(!1),
                            B = f[0],
                            C = f[1],
                            w = (0, n.useState)(),
                            S = w[0],
                            y = w[1],
                            L = (0, n.useState)(),
                            T = L[0],
                            R = L[1],
                            k = (0, n.useRef)(null),
                            x = (0, n.useCallback)(() => {
                                S &&
                                    c &&
                                    c({ x: S.scrollbarXActive, y: S.scrollbarYActive }, { x: S.reach.x, y: S.reach.y });
                            }, [c, S]),
                            M = (0, n.useCallback)(() => S, [S]),
                            P = (0, n.useCallback)(() => {
                                S && S.update();
                            }, [S]),
                            O = (0, n.useCallback)(
                                (e, t, u) => {
                                    S && (S.setScrollLeft(e, t, u), D && D(e, S.contentWidth - S.containerWidth));
                                },
                                [S, D],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    S && (S.setScrollLeftImmediately(e), D && D(e, S.contentWidth - S.containerWidth));
                                },
                                [S, D],
                            ),
                            N = (0, n.useCallback)(
                                (e, t, u) => {
                                    S && S.setScrollTop(e, t, u);
                                },
                                [S],
                            ),
                            W = (0, n.useCallback)(
                                (e) => {
                                    S && S.setScrollTopImmediately(e);
                                },
                                [S],
                            ),
                            I = (0, n.useCallback)(() => {
                                if (T && d && S) {
                                    const e = { scrollPosition: T.scrollLeft < 0 ? 0 : T.scrollLeft, reach: S.reach.x };
                                    d(e);
                                }
                            }, [d, T, S]),
                            Y = (0, n.useCallback)(() => {
                                if (T && E && S) {
                                    const e = { scrollPosition: T.scrollTop, reach: S.reach.y };
                                    E(e);
                                }
                            }, [E, T, S]),
                            X = (0, n.useCallback)(() => {
                                m && m();
                            }, [m]),
                            U = (0, n.useCallback)(() => {
                                A && A();
                            }, [A]),
                            G = (0, n.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), R(e);
                                },
                                [t],
                            ),
                            z = (0, n.useCallback)(() => {
                                S &&
                                    (S.update(),
                                    (k.current = h(() => {
                                        x();
                                    })));
                            }, [S, x]),
                            V = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (S && T)
                                return (
                                    document.addEventListener('mousemove', V),
                                    window.addEventListener('resize', z),
                                    T.addEventListener('ps-scroll-x', I),
                                    T.addEventListener('ps-scroll-y', Y),
                                    T.addEventListener('over-scroll-beginning', X),
                                    T.addEventListener('over-scroll-ending', U),
                                    C(!0),
                                    () => {
                                        window.removeEventListener('resize', z),
                                            document.removeEventListener('mousemove', V),
                                            T &&
                                                (T.removeEventListener('ps-scroll-x', I),
                                                T.removeEventListener('ps-scroll-y', Y),
                                                T.removeEventListener('over-scroll-beginning', X),
                                                T.removeEventListener('over-scroll-ending', U));
                                    }
                                );
                        }, [V, I, X, U, z, T, S, Y]);
                        const $ = (0, n.useRef)(T || null);
                        $.current = T || null;
                        const j = Pe($);
                        (0, n.useEffect)(
                            () => (
                                !S && T && j && y(new (He())(T, Object.assign({}, s))),
                                () => {
                                    S && (S.destroy(), y(void 0));
                                }
                            ),
                            [T, j, s, S],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == k.current || k.current();
                                },
                                [],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    h(() => {
                                        S && x();
                                    }),
                                [x, S],
                            ),
                            (0, n.useEffect)(() => {
                                i > 0 && H(i);
                            }, [i, H]),
                            (0, n.useEffect)(() => {
                                a > 0 && W(a);
                            }, [a, W]),
                            (0, n.useEffect)(() => {
                                p &&
                                    ((p.setScrollLeft = O),
                                    (p.setScrollTop = N),
                                    (p.setScrollLeftImmediately = H),
                                    (p.setScrollTopImmediately = W),
                                    (p.updateScrollArea = P),
                                    (p.getScrollbar = M));
                            }, [p, O, H, N, W, P, M]);
                        const q = l()(Ne, { [We]: _, [Xe]: !B, [Ie]: F, [Ye]: g }, v);
                        return r().createElement('div', { className: q, ref: G }, b);
                    }),
                    Ge = ['children'];
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const Ve = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Ge);
                        return r().createElement(
                            Be,
                            ze(
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
                    $e = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const qe = R.views.common.tooltip_window.simple_tooltip_content,
                    Ke = (e) => {
                        let t = e.children,
                            u = e.body,
                            i = e.header,
                            o = e.note,
                            a = e.alert,
                            l = e.args,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, $e);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: i, note: o, alert: a });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [a, u, i, o, l]);
                        return r().createElement(
                            Be,
                            je(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? qe.SimpleTooltipHtmlContent('resId') : qe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            t,
                        );
                        var d;
                    },
                    Qe = 'state_normal',
                    Ze = 'state_limited',
                    Je = 'state_received';
                let et, tt, ut, nt, rt, it, ot;
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
                        (e.HBVehicleUnlock = 'hbUnlockVehicles'),
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
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.MayEntitlement100 = 'historical_battles_100'),
                        (e.HistoricalBattleDiscount25 = 'historical_battles_25'),
                        (e.HistoricalBattleDiscount50 = 'historical_battles_50'),
                        (e.HistoricalBattleDiscount75 = 'historical_battles_75');
                })(et || (et = {})),
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
                    })(tt || (tt = {})),
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
                    })(ut || (ut = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(nt || (nt = {})),
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
                    })(rt || (rt = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(it || (it = {})),
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
                    })(ot || (ot = {}));
                const at = (e, t = ut.Small) => `R.images.gui.maps.icons.quests.bonuses.${t}.${e}_gift`,
                    lt = (e, t = 's180x135', u = 'R.images.gui.maps.icons.selectableReward.reward') => `${u}.${t}.${e}`,
                    st = 'Reward_base_ae',
                    ct = 'Reward_base__selected_e6',
                    dt = 'Reward_base__stateNormal_8c',
                    Et = 'Reward_optDeviceType_87',
                    mt = 'Reward_reward_63',
                    ht = 'Reward_image_b3',
                    At = 'Reward_base__stateReceived_45',
                    _t = 'Reward_base__stateLimited_d7',
                    Ft = 'Reward_base__accepting_72',
                    gt = 'Reward_disabled_34',
                    pt = 'Reward_packSize_26',
                    bt = 'Reward_label_1e',
                    vt = 'Reward_storage_06',
                    Dt = 'Reward_storage__hidden_de',
                    ft = 'Reward_storageIcon_53',
                    Bt = 'Reward_countText_cc',
                    Ct = 'Reward_select_8f',
                    wt = 'Reward_state_8e',
                    St = 'Reward_stateText_a8',
                    yt = 'Reward_stateIcon_9b',
                    Lt = 'Reward_glow_81',
                    Tt = {
                        base: 'SelectButton_base_fd',
                        base__plus: 'SelectButton_base__plus_d3',
                        base__disabled: 'SelectButton_base__disabled_86',
                        base__minus: 'SelectButton_base__minus_0b',
                    };
                let Rt;
                !(function (e) {
                    (e.Plus = 'plus'), (e.Minus = 'minus');
                })(Rt || (Rt = {}));
                const kt = ({ type: e = Rt.Plus, isEnabled: t = !0, onClick: u }) => {
                    const i = (0, n.useCallback)(
                            (e) => {
                                e.stopPropagation(), t && u(e);
                            },
                            [t, u],
                        ),
                        o = l()(Tt.base, Tt[`base__${e}`], !t && Tt.base__disabled);
                    return r().createElement('div', { className: o, onClick: i });
                };
                var xt;
                !(function (e) {
                    (e.None = ''), (e.Trophy = 'trophy'), (e.Deluxe = 'delux');
                })(xt || (xt = {}));
                const Mt = R.strings.selectable_reward.reward;
                const Pt = ({ type: e, count: t, state: u, storageCount: i, packSize: o, onAdd: a, onReduce: c }) => {
                        const d = (0, n.useContext)(Fu),
                            E = t > 0 && u !== Je,
                            m = d === _u.Accepting && E,
                            h = (function (e) {
                                return e.startsWith(xt.Trophy)
                                    ? xt.Trophy
                                    : e.startsWith(xt.Deluxe)
                                      ? xt.Deluxe
                                      : xt.None;
                            })(e),
                            A = (0, n.useCallback)(() => {
                                u === Qe ? (s('bp_click'), a(e)) : u === Ze && s('bp_click_limit');
                            }, [a, u, e]),
                            _ = (0, n.useCallback)(() => {
                                u === Qe && (s('bp_click_plus'), a(e));
                            }, [u, e, a]),
                            F = (0, n.useCallback)(() => {
                                s('bp_click_minus'), c(e);
                            }, [e, c]),
                            g = (0, n.useCallback)(() => {
                                s('bp_highlight');
                            }, []),
                            p = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.selectableReward.reward.${h})`,
                                }),
                                [h],
                            ),
                            b = (0, n.useMemo)(() => ({ backgroundImage: `url(${lt(e)})` }), [e]),
                            v = (0, n.useMemo)(() => ({ maskImage: `url(${lt(e)})` }), [e]),
                            D = (0, n.useMemo)(
                                () =>
                                    u === Ze && 0 === t
                                        ? {
                                              header: Mt.tooltip.state_limited.header(),
                                              body: Mt.tooltip.state_limited.body(),
                                          }
                                        : { isEnabled: !1 },
                                [t, u],
                            ),
                            f = (0, n.useMemo)(() => ({ type: e }), [e]),
                            B = l()(st, E && ct, m && Ft, u === Qe && dt, u === Je && At, u === Ze && _t),
                            C = l()(vt, i <= 0 && Dt);
                        return r().createElement(
                            'div',
                            { className: B, onClick: A, onMouseEnter: g },
                            r().createElement('div', { className: C }, r().createElement('div', { className: ft }), i),
                            h !== xt.None && r().createElement('div', { className: Et, style: p }),
                            r().createElement(
                                'div',
                                { className: mt },
                                r().createElement(
                                    Ve,
                                    { args: f },
                                    r().createElement('div', { className: ht, style: b }),
                                ),
                                !E && u !== Qe && r().createElement('div', { className: gt, style: v }),
                                o > 1 &&
                                    r().createElement('div', { className: pt }, U(Mt.packSizeCount(), { packSize: o })),
                            ),
                            r().createElement(
                                'div',
                                { className: bt },
                                ((e) => {
                                    var t;
                                    const u = e.split('_')[1],
                                        n = u && R.strings.blueprints.nations.$dyn(u),
                                        r = null == (t = R.strings.artefacts.$dyn(e)) ? void 0 : t.$dyn('name');
                                    return n || (r ? G(r) : void console.error('title for reward is not provided'));
                                })(e),
                            ),
                            E || u === Qe
                                ? r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('span', { className: Bt }, t),
                                      r().createElement(
                                          'div',
                                          { className: Ct },
                                          r().createElement(kt, { type: Rt.Minus, isEnabled: E, onClick: F }),
                                          r().createElement(kt, { type: Rt.Plus, isEnabled: u === Qe, onClick: _ }),
                                      ),
                                  )
                                : r().createElement(
                                      Ke,
                                      D,
                                      r().createElement(
                                          'div',
                                          { className: wt },
                                          r().createElement('div', { className: St }, Mt.$dyn(u)),
                                          r().createElement('div', { className: yt }),
                                      ),
                                  ),
                            r().createElement('div', { className: Lt }),
                        );
                    },
                    Ot = 'ContentGrid_base_f7',
                    Ht = 'ContentGrid_scrollArea_98',
                    Nt = 'ContentGrid_scrollAreaInner_32',
                    Wt = 'ContentGrid_reward_4b',
                    It = 'ContentGrid_lip_7e',
                    Yt = 'ContentGrid_lip__top_2c',
                    Xt = 'ContentGrid_lip__bottom_70';
                function Ut() {
                    return (
                        (Ut =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ut.apply(this, arguments)
                    );
                }
                function Gt(e, t, u, n, r, i, o) {
                    try {
                        var a = e[i](o),
                            l = a.value;
                    } catch (e) {
                        return void u(e);
                    }
                    a.done ? t(l) : Promise.resolve(l).then(n, r);
                }
                const zt = { suppressScrollX: !0 },
                    Vt = () => {
                        const e = (0, n.useContext)(Ae),
                            t = L(e),
                            u = t.onRewardAdd,
                            i = t.onRewardReduce,
                            o = t.selectedTab,
                            a = L(`${e}.rewards`),
                            s = (0, n.useRef)({}),
                            c = (0, n.useState)('start'),
                            d = c[0],
                            E = c[1],
                            m = (0, n.useState)(!1),
                            A = m[0],
                            _ = m[1],
                            g = (0, n.useState)(!1),
                            p = g[0],
                            b = g[1],
                            v = (0, n.useCallback)(
                                (e) => {
                                    u({ type: e });
                                },
                                [u],
                            ),
                            D = (0, n.useCallback)(
                                (e) => {
                                    i({ type: e });
                                },
                                [i],
                            ),
                            f = (0, n.useCallback)((e) => {
                                E(e.reach);
                            }, []),
                            B = (0, n.useCallback)((e) => {
                                _(e.y);
                            }, []);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    b(!0),
                                    E('start'),
                                    null == s.current.updateScrollArea || s.current.updateScrollArea(),
                                    h(
                                        h(() => {
                                            b(!1), null == s.current.updateScrollArea || s.current.updateScrollArea();
                                        }),
                                    )
                                ),
                                [o],
                            ),
                            (0, n.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                yield (0, F.Eu)(),
                                                    yield (0, F.Eu)(),
                                                    null == s.current.updateScrollArea || s.current.updateScrollArea();
                                            }),
                                            function () {
                                                var t = this,
                                                    u = arguments;
                                                return new Promise(function (n, r) {
                                                    var i = e.apply(t, u);
                                                    function o(e) {
                                                        Gt(i, n, r, o, a, 'next', e);
                                                    }
                                                    function a(e) {
                                                        Gt(i, n, r, o, a, 'throw', e);
                                                    }
                                                    o(void 0);
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
                                { className: Ot },
                                r().createElement(
                                    Ue,
                                    {
                                        key: 'area',
                                        classMix: Ht,
                                        scrollSettings: zt,
                                        scrollAreaContainer: s.current,
                                        onVerticalScroll: f,
                                        onUpdateActiveAxis: B,
                                    },
                                    !p &&
                                        r().createElement(
                                            'div',
                                            { className: Nt },
                                            a.map(({ value: e }, t) =>
                                                r().createElement(
                                                    'div',
                                                    { key: t, className: Wt },
                                                    r().createElement(Pt, Ut({}, e, { key: t, onAdd: v, onReduce: D })),
                                                ),
                                            ),
                                        ),
                                ),
                                A && 'start' !== d && r().createElement('div', { className: l()(It, Yt) }),
                                A && 'end' !== d && r().createElement('div', { className: l()(It, Xt) }),
                            )
                        );
                    },
                    $t = 'Category_base_23',
                    jt = 'Category_base__viewReady_69',
                    qt = 'Category_glow_a9',
                    Kt = 'Category_base__selected_9e',
                    Qt = 'Category_title_54',
                    Zt = 'Category_imageContainer_e0',
                    Jt = 'Category_image_ff',
                    eu = 'Category_base__completed_0d',
                    tu = 'Category_base__accepting_c8',
                    uu = 'Category_check_6c',
                    nu = 'Category_counter_3c',
                    ru = R.strings.selectable_reward.tabs,
                    iu = ({ type: e, count: t, limit: u, isSelected: i, onClick: o }) => {
                        const a = (0, n.useContext)(Fu),
                            c = oe().mediaSize,
                            d = t === u,
                            E = a === _u.Accepting && t > 0 && !i,
                            m = c >= ne.Medium ? ut.Big : ut.Small,
                            A = (0, n.useState)(!1),
                            _ = A[0],
                            F = A[1],
                            g = (0, n.useMemo)(() => ({ backgroundImage: `url(${at(e, m)})` }), [m, e]),
                            p = (0, n.useMemo)(() => U(ru.counter(), { count: t, limit: u }), [t, u]),
                            b = (0, n.useMemo)(() => ({ type: e }), [e]),
                            v = (0, n.useCallback)(() => {
                                s('bp_click'), o(e);
                            }, [o, e]),
                            D = (0, n.useCallback)(() => {
                                s('bp_highlight');
                            }, []);
                        (0, n.useEffect)(
                            () =>
                                h(() => {
                                    F(!0);
                                }),
                            [],
                        );
                        const f = l()($t, _ && jt, d && eu, i && Kt, E && tu);
                        return r().createElement(
                            'div',
                            { className: f, onClick: v, onMouseEnter: D },
                            r().createElement('div', { className: qt }),
                            r().createElement(
                                'div',
                                { className: Qt },
                                ((e) => R.strings.selectable_reward.tabs.items.$dyn(e))(e),
                            ),
                            r().createElement(
                                Ve,
                                { args: b },
                                r().createElement(
                                    'div',
                                    { className: Zt },
                                    r().createElement('div', { className: Jt, style: g }),
                                    r().createElement('div', { className: uu }),
                                ),
                            ),
                            r().createElement('div', { className: nu }, p),
                        );
                    },
                    ou = 'Content_base_32',
                    au = 'Content_base__accepting_82',
                    lu = 'Content_heading_33',
                    su = 'Content_title_b6',
                    cu = 'Content_subTitle_77',
                    du = 'Content_wrapper_f2',
                    Eu = 'Content_categories_36',
                    mu = 'Content_footer_6a',
                    hu = 'Content_base__windowed_c5';
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                let _u;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.Accepting = 1)] = 'Accepting');
                })(_u || (_u = {}));
                const Fu = (0, n.createContext)(_u.None),
                    gu = ({ title: e, subTitle: t, isLargeWindowed: u }) => {
                        const i = (0, n.useState)(_u.None),
                            o = i[0],
                            a = i[1],
                            s = (0, n.useContext)(Ae),
                            c = L(s),
                            d = c.tabs,
                            E = c.selectedTab,
                            m = c.totalRewardCount,
                            h = c.onOkClick,
                            A = c.onCloseClick,
                            _ = c.onTabClick;
                        (0, n.useEffect)(() => {
                            if (o === _u.Accepting)
                                return ((e, t) => {
                                    let u;
                                    const n = setTimeout(() => {
                                        u = e();
                                    }, t);
                                    return () => {
                                        'function' == typeof u && u(), clearTimeout(n);
                                    };
                                })(h, 600);
                        });
                        const F = (0, n.useCallback)(() => {
                                a(_u.Accepting);
                            }, []),
                            g = (0, n.useCallback)(() => {
                                A();
                            }, [A]),
                            p = (0, n.useCallback)(
                                (e) => {
                                    _({ type: e });
                                },
                                [_],
                            ),
                            b = l()(ou, o === _u.Accepting && au, u && hu);
                        return r().createElement(
                            Fu.Provider,
                            { value: o },
                            r().createElement(
                                'div',
                                { className: b },
                                r().createElement(
                                    'div',
                                    { className: lu },
                                    r().createElement('div', { className: su }, e),
                                    r().createElement('div', { className: cu }, t),
                                ),
                                r().createElement(
                                    'div',
                                    { className: du },
                                    r().createElement(
                                        'div',
                                        { className: Eu },
                                        d.map(({ value: e }, t) =>
                                            r().createElement(
                                                iu,
                                                Au({}, e, { key: t, isSelected: E === e.type, onClick: p }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(Vt, null),
                                ),
                                r().createElement(
                                    'div',
                                    { className: mu },
                                    r().createElement(xe, { rewardsSelectedCount: m, onOkClick: F, onCloseClick: g }),
                                ),
                            ),
                        );
                    },
                    pu = 'Error_base_bc',
                    bu = 'Error_image_a5',
                    vu = 'Error_title_0e',
                    Du = 'Error_description_f4',
                    fu = 'Error_footer_63',
                    Bu = 'Error_button_81',
                    Cu = R.strings.selectable_reward.error,
                    wu = () => {
                        const e = (0, n.useContext)(Ae),
                            t = L(e).onCloseClick,
                            u = (0, n.useCallback)(() => {
                                t();
                            }, [t]);
                        return r().createElement(
                            'div',
                            { className: pu },
                            r().createElement('div', { className: bu }),
                            r().createElement('div', { className: vu }, Cu.title()),
                            r().createElement('div', { className: Du }, Cu.description()),
                            r().createElement(
                                'div',
                                { className: fu },
                                r().createElement(
                                    be,
                                    { mixClass: Bu, type: Fe.primary, size: ge.medium, onClick: u },
                                    Cu.button(),
                                ),
                            ),
                        );
                    },
                    Su = 'SelectableRewardBase_base_68';
                let yu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Error = 'error');
                })(yu || (yu = {}));
                const Lu = ({ modelPath: e = 'model', title: t, subTitle: u }) => {
                        const i = L(e).tabs.length ? yu.Normal : yu.Error,
                            o = (() => {
                                const e = A.O.view.getSize('rem'),
                                    t = (0, n.useState)({ height: e.height, width: e.width }),
                                    u = t[0],
                                    r = t[1],
                                    i = (0, n.useCallback)((e, t) => {
                                        const u = A.O.view.pxToRem(e),
                                            n = A.O.view.pxToRem(t);
                                        r({ width: u, height: n });
                                    }, []);
                                return (
                                    (0, n.useEffect)(
                                        () => (
                                            engine.on('clientResized', i),
                                            () => {
                                                engine.off('clientResized', i);
                                            }
                                        ),
                                        [i],
                                    ),
                                    u
                                );
                            })(),
                            a = o.width,
                            s = o.height,
                            c = s >= 1017 && s < W.large.height && a === W.large.width,
                            d = l()(Su, c && Y().LARGE);
                        return r().createElement(
                            Ae.Provider,
                            { value: e },
                            r().createElement(
                                he,
                                { className: d },
                                i === yu.Normal && r().createElement(gu, { title: t, subTitle: u, isLargeWindowed: c }),
                                i === yu.Error && r().createElement(wu, null),
                            ),
                        );
                    },
                    Tu = 'RewardSelectionViewApp_base_ad',
                    Ru = 'RewardSelectionViewApp_content_36',
                    ku = 'RewardSelectionViewApp_background_d9',
                    xu = 'RewardSelectionViewApp_close_8b',
                    Mu = R.strings.epic_battle.rewardSelection,
                    Pu = () => {
                        const e = L().onLoadedView,
                            t = (0, n.useState)(!1),
                            u = t[0],
                            i = t[1],
                            o = ((e) => {
                                const t = N(e, O),
                                    u = (0, n.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, H(e));
                                        },
                                        [t],
                                    );
                                return (e) => u(e);
                            })('epic_battle'),
                            a = (0, n.useCallback)(() => {
                                o({
                                    item: k.RewardsSelectionView,
                                    action: x.Close,
                                    parentScreen: T.RewardsSelectionView,
                                }),
                                    (0, F.Sy)();
                            }, [o]);
                        var l;
                        return (
                            (l = a),
                            p(_.n.ESCAPE, l),
                            (0, n.useEffect)(
                                () =>
                                    h(() => {
                                        i(!0), e();
                                    }),
                                [e],
                            ),
                            r().createElement(
                                'div',
                                { className: Tu },
                                r().createElement('div', { className: ku }),
                                u &&
                                    r().createElement(
                                        'div',
                                        { className: Ru },
                                        r().createElement(
                                            'div',
                                            { className: xu },
                                            r().createElement(m, {
                                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                                type: 'close',
                                                side: 'right',
                                                onClick: a,
                                            }),
                                        ),
                                        r().createElement(Lu, {
                                            modelPath: 'model.selectableRewardModel',
                                            title: Mu.title(),
                                            subTitle: Mu.subTitle(),
                                        }),
                                    ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    o().render(r().createElement(Pu, null), document.getElementById('root'));
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
                    for (var [t, u, n] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
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
        (() => {
            var e = { 698: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [i, o, a] = u,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (a) var s = a(__webpack_require__);
                    }
                    for (t && t(u); l < i.length; l++)
                        (r = i[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(s);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [678], () => __webpack_require__(17));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
