(() => {
    var __webpack_modules__ = {
            8380: (e) => {
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
                var b = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function p() {
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
                var f = function (e, t, u, n, r, o) {
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
                var D = function (e, t, n, r) {
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
                                ? (o.classList.add(c.active('x')), f(e, 'left', E - e.lastScrollLeft, !0, t))
                                : (o.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (o.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (o.classList.add(c.active('y')), f(e, 'top', o.scrollTop - e.lastScrollTop, !0, t))
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
                            b = (function (e) {
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
                        !isNaN(l) && l < b && (b = l);
                        var p = function e(n) {
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
                                    var h = Math.round(m * b),
                                        p = F ? h + g : b - h;
                                    if (
                                        (c.breakBounds &&
                                            (p < c.startBound
                                                ? (p = c.startBound)
                                                : p > c.endBound && (p = c.endBound)),
                                        l < o)
                                    ) {
                                        if (A) {
                                            var v = _ ? p : 0,
                                                f = _ ? 0 : p;
                                            window.scrollTo(v, f);
                                        } else t[E] = p;
                                        r && r(p), requestAnimationFrame(e);
                                    } else u && u();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (d = e), p(e);
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
                                                D(e, !1, u);
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
                        b = null;
                    function p(u) {
                        (A[s] = g(_ + b * (u[o] - F))), m(e, d), D(e, !1, t), u.stopPropagation(), u.preventDefault();
                    }
                    function v() {
                        h(e, d), e[E].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', p);
                    }
                    e.event.bind(e[a], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((_ = A[s]),
                            (F = t[o]),
                            (b = (e[r] - e[n]) / (e[i] - e[l])),
                            e.event.bind(e.ownerDocument, 'mousemove', p),
                            e.event.once(e.ownerDocument, 'mouseup', v),
                            e[E].classList.add(c.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var x = 1e3,
                    M = {
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
                                        D(e, !1, t),
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
                                        if (!b.isWebKit && n.querySelector('select')) return !0;
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
                                        D(e, !1, u),
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
                            if (b.supportsTouch || b.supportsIePointer) {
                                var n = e.element,
                                    r = {},
                                    o = 0,
                                    i = {},
                                    a = null;
                                b.supportsTouch
                                    ? (e.event.bind(n, 'touchstart', E),
                                      e.event.bind(n, 'touchmove', m),
                                      e.event.bind(n, 'touchend', h))
                                    : b.supportsIePointer &&
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
                                (n.scrollTop -= r), (n.scrollLeft -= t), D(e, !1, u);
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
                                                    return 0 === window.scrollY && u > 0 && b.isChrome;
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
                    k = function (e, r) {
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
                            p().then(function () {
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
                                        return M[e](o, o.settings.overScrollWidth);
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
                                    D(o, !1, o.settings.overScrollWidth, !1);
                            });
                    };
                (k.prototype._getAnimationSettings = function (e, t, u, n) {
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
                                D(r, !0, r.settings.overScrollWidth, !1), u && u(e);
                            },
                            onAnimationCompleteCallback: function () {
                                n && n();
                            },
                        }
                    );
                }),
                    (k.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (k.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (k.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (k.prototype.handleMouseLeave = function () {}),
                    (k.prototype.update = function () {
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
                            p().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    D(e, !1, e.settings.overScrollWidth, !1),
                                    f(e, 'top', 0, !1, !1, !0),
                                    f(e, 'left', 0, !1, !1, !0),
                                    u(e.scrollbarXRail, { display: '' }),
                                    u(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (k.prototype.setScrollLeft = function (e, t, u) {
                        y(this._getAnimationSettings(e, 'right', t, u));
                    }),
                    (k.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (k.prototype.setScrollTop = function (e, t, u) {
                        y(this._getAnimationSettings(e, 'bottom', t, u));
                    }),
                    (k.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (k.prototype.onScroll = function (e) {
                        this.isAlive && D(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (k.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (D(this, !1, this.settings.overScrollWidth, !1),
                            f(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (k.prototype.destroy = function () {
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
                    (k.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = k);
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
            527: (e, t, u) => {
                'use strict';
                u.r(t), u.d(t, { mouse: () => a, onResize: () => o });
                var n = u(2472),
                    r = u(1176);
                const o = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const a = (function () {
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
                                        a = i[t]((e) => u([e, 'outside']));
                                    function l(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, l),
                                        n(),
                                        () => {
                                            r &&
                                                (a(),
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
                'use strict';
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
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2472: (e, t, u) => {
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
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var n = u(5959);
                const r = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => a,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => o.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => C,
                        getScale: () => _,
                        getSize: () => E,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => F,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var n = u(3722),
                    r = u(6112),
                    o = u(6538),
                    i = u(8566);
                function a(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
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
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: g(t.x), y: g(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function D() {
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
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => s });
                const n = ['args'];
                const r = 2,
                    o = 16,
                    i = 32,
                    a = 64,
                    l = (e, t) => {
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
                    s = {
                        close(e) {
                            l('popover' === e ? r : i);
                        },
                        minimize() {
                            l(a);
                        },
                        move(e) {
                            l(o, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
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
            1358: (e, t, u) => {
                'use strict';
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => o.Z, B0: () => l, ry: () => g, Eu: () => b });
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
                var m = u(5521),
                    h = u(3138);
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
                    b = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    p = (e, t) => {
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
                    v = () => p(l.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var D = u(7572);
                const C = r.instance,
                    B = {
                        DataTracker: o.Z,
                        ViewModel: D.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => p(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
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
                            p(l.POP_OVER, {
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
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, v);
                        },
                        handleViewEvent: p,
                        onBindingsReady: g,
                        onLayoutReady: b,
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
            3571: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    r = u.n(n),
                    o = u(493),
                    i = u.n(o),
                    a = u(6483),
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
                            o = e.side,
                            i = e.type,
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
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, d)),
                            F = l()(c.base, c[`base__${i}`], c[`base__${o}`], null == a ? void 0 : a.base),
                            g = l()(c.icon, c[`icon__${i}`], c[`icon__${o}`], null == a ? void 0 : a.icon),
                            b = l()(c.glow, null == a ? void 0 : a.glow),
                            p = l()(c.caption, c[`caption__${i}`], null == a ? void 0 : a.caption),
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
                            'info' !== i && r().createElement('div', { className: c.shine }),
                            r().createElement('div', { className: g }, r().createElement('div', { className: b })),
                            r().createElement('div', { className: p }, t),
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
                var A = u(3138),
                    _ = u(5521),
                    F = u(4179);
                const g = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function b(e = _.n.NONE, t = g, u = !1) {
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
                var p = u(3403);
                let v, f, D, C;
                !(function (e) {
                    (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                })(v || (v = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(f || (f = {})),
                    (function (e) {
                        (e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen');
                    })(D || (D = {})),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(C || (C = {}));
                const B = (e, t, u = '') => {
                        const n = u.length > 0 ? `_${u}` : u,
                            r = e.$dyn(`c_${t}${n}`),
                            o = e.$dyn(`common${n}`);
                        return r || o;
                    },
                    w = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var S = u(926),
                    y = u.n(S);
                let L;
                function T(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(L || (L = {}));
                const x = (e) => e.replace(/&nbsp;/g, ' ');
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
                let M;
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
                })(M || (M = {}));
                Date.now();
                const k = (e = 1) => {
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
                    P = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    O = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    H = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    N = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    W = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = P(`${e}.${u}`, window);
                                return H(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    I = (e) => {
                        const t = ((e) => {
                                const t = k(),
                                    u = t.caller,
                                    n = t.resId,
                                    r = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: r, modelPath: N(r, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const r = P(N(u, `${t}.${n}`), window);
                                    return H(r) ? (e.push(r.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    Y = F.Sw.instance;
                let X;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(X || (X = {}));
                const U = (e = 'model', t = X.Deep) => {
                        const u = (0, n.useState)(0),
                            r = (u[0], u[1]),
                            o = (0, n.useMemo)(() => k(), []),
                            i = o.caller,
                            a = o.resId,
                            l = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            s = (0, n.useState)(() =>
                                ((e) => {
                                    const t = P(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return H(t) ? t.value : t;
                                })(W(l)),
                            ),
                            c = s[0],
                            d = s[1],
                            E = (0, n.useRef)(-1);
                        return (
                            O(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? X.Deep : X.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== X.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === X.Deep
                                                ? (e === c && r((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        n = I(e);
                                    E.current = Y.addCallback(n, u, a, t === X.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== X.None)
                                    return () => {
                                        Y.removeCallback(E.current, a);
                                    };
                            }, [a, t]),
                            c
                        );
                    },
                    G =
                        (F.Sw.instance,
                        (e, t, u) =>
                            t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                                ? (t.extraLargeHeight && u.extraLarge) ||
                                  (t.largeHeight && u.large) ||
                                  (t.mediumHeight && u.medium) ||
                                  (t.smallHeight && u.small) ||
                                  (t.extraSmallHeight && u.extraSmall)
                                    ? e
                                    : null
                                : e);
                var $;
                function z(e, t, u) {
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
                })($ || ($ = {}));
                const j = A.O.client.getSize('rem'),
                    q = j.width,
                    V = j.height,
                    K = Object.assign({ width: q, height: V }, z(q, V, w)),
                    Q = (0, n.createContext)(K),
                    Z = ['children'];
                const J = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, Z);
                    const r = (0, n.useContext)(Q),
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
                        b = r.extraSmallHeight,
                        p = { extraLarge: A, large: _, medium: F, small: g, extraSmall: b };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && i) return t;
                        if (u.medium && a) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && s) return t;
                    } else {
                        if (u.extraLargeWidth && c) return G(t, u, p);
                        if (u.largeWidth && d) return G(t, u, p);
                        if (u.mediumWidth && E) return G(t, u, p);
                        if (u.smallWidth && m) return G(t, u, p);
                        if (u.extraSmallWidth && h) return G(t, u, p);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && A) return t;
                            if (u.largeHeight && _) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && g) return t;
                            if (u.extraSmallHeight && b) return t;
                        }
                    }
                    return null;
                };
                J.defaultProps = {
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
                (0, n.memo)(J);
                const ee = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(Q),
                        u = (0, n.useState)(t),
                        o = u[0],
                        i = u[1],
                        a = (0, n.useCallback)((e, t) => {
                            const u = A.O.view.pxToRem(e),
                                n = A.O.view.pxToRem(t);
                            i(Object.assign({ width: u, height: n }, z(u, n, w)));
                        }, []);
                    O(() => {
                        engine.on('clientResized', a);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', a), [a]);
                    const l = (0, n.useMemo)(() => Object.assign({}, o), [o]);
                    return r().createElement(Q.Provider, { value: l }, e);
                });
                let te, ue, ne;
                !(function (e) {
                    (e[(e.ExtraSmall = w.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = w.small.width)] = 'Small'),
                        (e[(e.Medium = w.medium.width)] = 'Medium'),
                        (e[(e.Large = w.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = w.extraLarge.width)] = 'ExtraLarge');
                })(te || (te = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = w.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = w.small.width)] = 'Small'),
                            (e[(e.Medium = w.medium.width)] = 'Medium'),
                            (e[(e.Large = w.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = w.extraLarge.width)] = 'ExtraLarge');
                    })(ue || (ue = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = w.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = w.small.height)] = 'Small'),
                            (e[(e.Medium = w.medium.height)] = 'Medium'),
                            (e[(e.Large = w.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = w.extraLarge.height)] = 'ExtraLarge');
                    })(ne || (ne = {}));
                const re = () => {
                        const e = (0, n.useContext)(Q),
                            t = e.width,
                            u = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return te.ExtraLarge;
                                    case e.large:
                                        return te.Large;
                                    case e.medium:
                                        return te.Medium;
                                    case e.small:
                                        return te.Small;
                                    case e.extraSmall:
                                        return te.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), te.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return ue.ExtraLarge;
                                    case e.largeWidth:
                                        return ue.Large;
                                    case e.mediumWidth:
                                        return ue.Medium;
                                    case e.smallWidth:
                                        return ue.Small;
                                    case e.extraSmallWidth:
                                        return ue.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ue.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return ne.ExtraLarge;
                                    case e.largeHeight:
                                        return ne.Large;
                                    case e.mediumHeight:
                                        return ne.Medium;
                                    case e.smallHeight:
                                        return ne.Small;
                                    case e.extraSmallHeight:
                                        return ne.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ne.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: o, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    oe = ['children', 'className'];
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                const ae = {
                        [ue.ExtraSmall]: '',
                        [ue.Small]: y().SMALL_WIDTH,
                        [ue.Medium]: `${y().SMALL_WIDTH} ${y().MEDIUM_WIDTH}`,
                        [ue.Large]: `${y().SMALL_WIDTH} ${y().MEDIUM_WIDTH} ${y().LARGE_WIDTH}`,
                        [ue.ExtraLarge]: `${y().SMALL_WIDTH} ${y().MEDIUM_WIDTH} ${y().LARGE_WIDTH} ${y().EXTRA_LARGE_WIDTH}`,
                    },
                    le = {
                        [ne.ExtraSmall]: '',
                        [ne.Small]: y().SMALL_HEIGHT,
                        [ne.Medium]: `${y().SMALL_HEIGHT} ${y().MEDIUM_HEIGHT}`,
                        [ne.Large]: `${y().SMALL_HEIGHT} ${y().MEDIUM_HEIGHT} ${y().LARGE_HEIGHT}`,
                        [ne.ExtraLarge]: `${y().SMALL_HEIGHT} ${y().MEDIUM_HEIGHT} ${y().LARGE_HEIGHT} ${y().EXTRA_LARGE_HEIGHT}`,
                    },
                    se = {
                        [te.ExtraSmall]: '',
                        [te.Small]: y().SMALL,
                        [te.Medium]: `${y().SMALL} ${y().MEDIUM}`,
                        [te.Large]: `${y().SMALL} ${y().MEDIUM} ${y().LARGE}`,
                        [te.ExtraLarge]: `${y().SMALL} ${y().MEDIUM} ${y().LARGE} ${y().EXTRA_LARGE}`,
                    },
                    ce = (e) => {
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
                            })(e, oe);
                        const o = re(),
                            i = o.mediaWidth,
                            a = o.mediaHeight,
                            s = o.mediaSize;
                        return r().createElement('div', ie({ className: l()(u, ae[i], le[a], se[s]) }, n), t);
                    },
                    de = ['children'];
                const Ee = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, de);
                        return r().createElement(ee, null, r().createElement(ce, u, t));
                    },
                    me = (0, n.createContext)('model'),
                    he = {
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
                let Ae, _e;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ae || (Ae = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(_e || (_e = {}));
                const Fe = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: o,
                    disabled: i,
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
                        b = (0, n.useState)(u),
                        p = b[0],
                        v = b[1],
                        f = (0, n.useState)(!1),
                        D = f[0],
                        C = f[1],
                        B = (0, n.useState)(!1),
                        w = B[0],
                        S = B[1],
                        y = (0, n.useCallback)(() => {
                            i || (g.current && (g.current.focus(), v(!0)));
                        }, [i]),
                        L = (0, n.useCallback)(
                            (e) => {
                                p && null !== g.current && !g.current.contains(e.target) && v(!1);
                            },
                            [p],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                i || (F && F(e));
                            },
                            [i, F],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                i || (null !== c && s(c), E && E(e), S(!0));
                            },
                            [i, c, E],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                i || (A && A(e), C(!1));
                            },
                            [i, A],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                i || (null !== d && s(d), h && h(e), u && y(), C(!0));
                            },
                            [i, d, h, y, u],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                i || (_ && _(e), C(!1));
                            },
                            [i, _],
                        ),
                        H = l()(
                            he.base,
                            he[`base__${o}`],
                            {
                                [he.base__disabled]: i,
                                [he[`base__${t}`]]: t,
                                [he.base__focus]: p,
                                [he.base__highlightActive]: D,
                                [he.base__firstHover]: w,
                            },
                            a,
                        ),
                        N = l()(he.state, he.state__default);
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
                                onMouseEnter: x,
                                onMouseMove: M,
                                onMouseUp: k,
                                onMouseDown: P,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            o !== Ae.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: he.back }),
                                    r().createElement('span', { className: he.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: N },
                                r().createElement('span', { className: he.stateDisabled }),
                                r().createElement('span', { className: he.stateHighlightHover }),
                                r().createElement('span', { className: he.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: he.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Fe.defaultProps = { type: Ae.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ge = (0, n.memo)(Fe),
                    be = [
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
                function pe(e) {
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
                const ve = (e, t, u = {}, n = 0) => {
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
                    fe = (e) => {
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
                            m = e.decoratorId,
                            h = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            _ = void 0 === A || A,
                            F = e.targetId,
                            g = void 0 === F ? 0 : F,
                            b = e.onShow,
                            p = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, be);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, n.useMemo)(() => g || k().resId, [g]),
                            C = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (ve(u, h, { isMouseEvent: !0, on: !0, arguments: pe(r) }, D),
                                    b && b(),
                                    (f.current.isVisible = !0));
                            }, [u, h, r, D, b]),
                            B = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        ve(u, h, { on: !1 }, D),
                                        f.current.isVisible && p && p(),
                                        (f.current.isVisible = !1);
                                }
                            }, [u, h, D, p]),
                            w = (0, n.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
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
                                !1 === _ && B();
                            }, [_, B]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            );
                        return _
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                      o && o(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              B(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === E && B(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === E && B(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    De = 'Footer_base_2b',
                    Ce = 'Footer_description_9a',
                    Be = 'Footer_selectRewards_f9',
                    we = 'Footer_rewardsSelected_19',
                    Se = 'Footer_rewardsSelectedCount_5b',
                    ye = 'Footer_rewardsSelectedIcon_59',
                    Le = 'Footer_buttons_12',
                    Te = 'Footer_cButton_f7',
                    Re = ({ rewardsSelectedCount: e, onOkClick: t, onCloseClick: u }) => {
                        const n = e > 0,
                            o = re().mediaSize > te.Small ? _e.medium : _e.small;
                        return r().createElement(
                            'div',
                            { className: De },
                            r().createElement(
                                'div',
                                { className: Ce },
                                n
                                    ? r().createElement(
                                          'div',
                                          { className: we },
                                          R.strings.selectable_reward.footer.rewardsSelected(),
                                          r().createElement('span', { className: Se }, e),
                                          r().createElement(
                                              fe,
                                              {
                                                  contentId:
                                                      R.views.lobby.common.tooltips.SelectedRewardsTooltipView('resId'),
                                              },
                                              r().createElement('div', { className: ye }),
                                          ),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: Be },
                                          R.strings.selectable_reward.footer.selectRewards(),
                                      ),
                            ),
                            r().createElement(
                                'div',
                                { className: Le },
                                r().createElement(
                                    ge,
                                    { size: o, type: Ae.primary, disabled: !n, mixClass: Te, onClick: t },
                                    R.strings.selectable_reward.footer.okBtn.label(),
                                ),
                                r().createElement(
                                    ge,
                                    { size: o, type: Ae.secondary, mixClass: Te, onClick: u },
                                    R.strings.selectable_reward.footer.closeBtn.label(),
                                ),
                            ),
                        );
                    },
                    xe = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            u = t.width,
                            n = t.height;
                        return 0 !== u && 0 !== n;
                    },
                    Me = (e) => {
                        const t = (0, n.useState)(xe(e ? e.current : null)),
                            u = t[0],
                            r = t[1];
                        return (
                            (0, n.useEffect)(() => {
                                let t = 0;
                                const u = () => {
                                    t = requestAnimationFrame(() => {
                                        xe(e ? e.current : null) ? r(!0) : u();
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
                var ke = u(8380),
                    Pe = u.n(ke);
                const Oe = 'ScrollArea_base_47',
                    He = 'ScrollArea_base__scrollIndent_1d',
                    Ne = 'ScrollArea_base__verticalScrollbarMargin_50',
                    We = 'ScrollArea_base__multiple_44',
                    Ie = 'ScrollArea_base__hidden_ec',
                    Ye = r().forwardRef((e, t) => {
                        const u = e.offsetLeft,
                            o = void 0 === u ? 0 : u,
                            i = e.offsetTop,
                            a = void 0 === i ? 0 : i,
                            s = e.scrollSettings,
                            c = e.onUpdateActiveAxis,
                            d = e.onHorizontalScroll,
                            E = e.onVerticalScroll,
                            m = e.onOverScrollAtBeginning,
                            A = e.onOverScrollAtEnd,
                            _ = e.wrapperIndent,
                            F = e.verticalScrollbarMargin,
                            g = e.isMultipleScroll,
                            b = e.scrollAreaContainer,
                            p = e.children,
                            v = e.classMix,
                            f = e.onScrollLeftHandled,
                            D = (0, n.useState)(!1),
                            C = D[0],
                            B = D[1],
                            w = (0, n.useState)(),
                            S = w[0],
                            y = w[1],
                            L = (0, n.useState)(),
                            T = L[0],
                            R = L[1],
                            x = (0, n.useRef)(null),
                            M = (0, n.useCallback)(() => {
                                S &&
                                    c &&
                                    c({ x: S.scrollbarXActive, y: S.scrollbarYActive }, { x: S.reach.x, y: S.reach.y });
                            }, [c, S]),
                            k = (0, n.useCallback)(() => S, [S]),
                            P = (0, n.useCallback)(() => {
                                S && S.update();
                            }, [S]),
                            O = (0, n.useCallback)(
                                (e, t, u) => {
                                    S && (S.setScrollLeft(e, t, u), f && f(e, S.contentWidth - S.containerWidth));
                                },
                                [S, f],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    S && (S.setScrollLeftImmediately(e), f && f(e, S.contentWidth - S.containerWidth));
                                },
                                [S, f],
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
                            $ = (0, n.useCallback)(() => {
                                S &&
                                    (S.update(),
                                    (x.current = h(() => {
                                        M();
                                    })));
                            }, [S, M]),
                            z = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (S && T)
                                return (
                                    document.addEventListener('mousemove', z),
                                    window.addEventListener('resize', $),
                                    T.addEventListener('ps-scroll-x', I),
                                    T.addEventListener('ps-scroll-y', Y),
                                    T.addEventListener('over-scroll-beginning', X),
                                    T.addEventListener('over-scroll-ending', U),
                                    B(!0),
                                    () => {
                                        window.removeEventListener('resize', $),
                                            document.removeEventListener('mousemove', z),
                                            T &&
                                                (T.removeEventListener('ps-scroll-x', I),
                                                T.removeEventListener('ps-scroll-y', Y),
                                                T.removeEventListener('over-scroll-beginning', X),
                                                T.removeEventListener('over-scroll-ending', U));
                                    }
                                );
                        }, [z, I, X, U, $, T, S, Y]);
                        const j = (0, n.useRef)(T || null);
                        j.current = T || null;
                        const q = Me(j);
                        (0, n.useEffect)(
                            () => (
                                !S && T && q && y(new (Pe())(T, Object.assign({}, s))),
                                () => {
                                    S && (S.destroy(), y(void 0));
                                }
                            ),
                            [T, q, s, S],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == x.current || x.current();
                                },
                                [],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    h(() => {
                                        S && M();
                                    }),
                                [M, S],
                            ),
                            (0, n.useEffect)(() => {
                                o > 0 && H(o);
                            }, [o, H]),
                            (0, n.useEffect)(() => {
                                a > 0 && W(a);
                            }, [a, W]),
                            (0, n.useEffect)(() => {
                                b &&
                                    ((b.setScrollLeft = O),
                                    (b.setScrollTop = N),
                                    (b.setScrollLeftImmediately = H),
                                    (b.setScrollTopImmediately = W),
                                    (b.updateScrollArea = P),
                                    (b.getScrollbar = k));
                            }, [b, O, H, N, W, P, k]);
                        const V = l()(Oe, { [He]: _, [Ie]: !C, [Ne]: F, [We]: g }, v);
                        return r().createElement('div', { className: V, ref: G }, p);
                    }),
                    Xe = ['children'];
                function Ue() {
                    return (
                        (Ue =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ue.apply(this, arguments)
                    );
                }
                const Ge = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Xe);
                        return r().createElement(
                            fe,
                            Ue(
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
                const je = R.views.common.tooltip_window.simple_tooltip_content,
                    qe = (e) => {
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
                            })(e, $e);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: o, note: i, alert: a });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [a, u, o, i, l]);
                        return r().createElement(
                            fe,
                            ze(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? je.SimpleTooltipHtmlContent('resId') : je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            t,
                        );
                        var d;
                    },
                    Ve = 'state_normal',
                    Ke = 'state_limited',
                    Qe = 'state_received';
                let Ze, Je, et, tt, ut, nt, rt;
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
                })(Ze || (Ze = {})),
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
                    })(Je || (Je = {})),
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
                    })(et || (et = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(tt || (tt = {})),
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
                    })(ut || (ut = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
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
                    })(rt || (rt = {}));
                const ot = (e, t = et.Small) => `R.images.gui.maps.icons.quests.bonuses.${t}.${e}_gift`,
                    it = (e, t = 's180x135', u = 'R.images.gui.maps.icons.selectableReward.reward') => `${u}.${t}.${e}`,
                    at = 'Reward_base_ae',
                    lt = 'Reward_base__selected_e6',
                    st = 'Reward_base__stateNormal_8c',
                    ct = 'Reward_optDeviceType_87',
                    dt = 'Reward_reward_63',
                    Et = 'Reward_image_b3',
                    mt = 'Reward_base__stateReceived_45',
                    ht = 'Reward_base__stateLimited_d7',
                    At = 'Reward_base__accepting_72',
                    _t = 'Reward_disabled_34',
                    Ft = 'Reward_packSize_26',
                    gt = 'Reward_label_1e',
                    bt = 'Reward_storage_06',
                    pt = 'Reward_storage__hidden_de',
                    vt = 'Reward_storageIcon_53',
                    ft = 'Reward_countText_cc',
                    Dt = 'Reward_select_8f',
                    Ct = 'Reward_state_8e',
                    Bt = 'Reward_stateText_a8',
                    wt = 'Reward_stateIcon_9b',
                    St = 'Reward_glow_81',
                    yt = {
                        base: 'SelectButton_base_fd',
                        base__plus: 'SelectButton_base__plus_d3',
                        base__disabled: 'SelectButton_base__disabled_86',
                        base__minus: 'SelectButton_base__minus_0b',
                    };
                let Lt;
                !(function (e) {
                    (e.Plus = 'plus'), (e.Minus = 'minus');
                })(Lt || (Lt = {}));
                const Tt = ({ type: e = Lt.Plus, isEnabled: t = !0, onClick: u }) => {
                    const o = (0, n.useCallback)(
                            (e) => {
                                e.stopPropagation(), t && u(e);
                            },
                            [t, u],
                        ),
                        i = l()(yt.base, yt[`base__${e}`], !t && yt.base__disabled);
                    return r().createElement('div', { className: i, onClick: o });
                };
                var Rt;
                !(function (e) {
                    (e.None = ''), (e.Trophy = 'trophy'), (e.Deluxe = 'delux');
                })(Rt || (Rt = {}));
                const xt = R.strings.selectable_reward.reward;
                const Mt = ({ type: e, count: t, state: u, storageCount: o, packSize: i, onAdd: a, onReduce: c }) => {
                        const d = (0, n.useContext)(Au),
                            E = t > 0 && u !== Qe,
                            m = d === hu.Accepting && E,
                            h = (function (e) {
                                return e.startsWith(Rt.Trophy)
                                    ? Rt.Trophy
                                    : e.startsWith(Rt.Deluxe)
                                      ? Rt.Deluxe
                                      : Rt.None;
                            })(e),
                            A = (0, n.useCallback)(() => {
                                u === Ve ? (s('bp_click'), a(e)) : u === Ke && s('bp_click_limit');
                            }, [a, u, e]),
                            _ = (0, n.useCallback)(() => {
                                u === Ve && (s('bp_click_plus'), a(e));
                            }, [u, e, a]),
                            F = (0, n.useCallback)(() => {
                                s('bp_click_minus'), c(e);
                            }, [e, c]),
                            g = (0, n.useCallback)(() => {
                                s('bp_highlight');
                            }, []),
                            b = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.selectableReward.reward.${h})`,
                                }),
                                [h],
                            ),
                            p = (0, n.useMemo)(() => ({ backgroundImage: `url(${it(e)})` }), [e]),
                            v = (0, n.useMemo)(() => ({ maskImage: `url(${it(e)})` }), [e]),
                            f = (0, n.useMemo)(
                                () =>
                                    u === Ke && 0 === t
                                        ? {
                                              header: xt.tooltip.state_limited.header(),
                                              body: xt.tooltip.state_limited.body(),
                                          }
                                        : { isEnabled: !1 },
                                [t, u],
                            ),
                            D = (0, n.useMemo)(() => ({ type: e }), [e]),
                            C = l()(at, E && lt, m && At, u === Ve && st, u === Qe && mt, u === Ke && ht),
                            B = l()(bt, o <= 0 && pt);
                        return r().createElement(
                            'div',
                            { className: C, onClick: A, onMouseEnter: g },
                            r().createElement('div', { className: B }, r().createElement('div', { className: vt }), o),
                            h !== Rt.None && r().createElement('div', { className: ct, style: b }),
                            r().createElement(
                                'div',
                                { className: dt },
                                r().createElement(
                                    Ge,
                                    { args: D },
                                    r().createElement('div', { className: Et, style: p }),
                                ),
                                !E && u !== Ve && r().createElement('div', { className: _t, style: v }),
                                i > 1 &&
                                    r().createElement('div', { className: Ft }, T(xt.packSizeCount(), { packSize: i })),
                            ),
                            r().createElement(
                                'div',
                                { className: gt },
                                ((e) => {
                                    var t;
                                    const u = e.split('_')[1],
                                        n = u && R.strings.blueprints.nations.$dyn(u),
                                        r = null == (t = R.strings.artefacts.$dyn(e)) ? void 0 : t.$dyn('name');
                                    return n || (r ? x(r) : void console.error('title for reward is not provided'));
                                })(e),
                            ),
                            E || u === Ve
                                ? r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('span', { className: ft }, t),
                                      r().createElement(
                                          'div',
                                          { className: Dt },
                                          r().createElement(Tt, { type: Lt.Minus, isEnabled: E, onClick: F }),
                                          r().createElement(Tt, { type: Lt.Plus, isEnabled: u === Ve, onClick: _ }),
                                      ),
                                  )
                                : r().createElement(
                                      qe,
                                      f,
                                      r().createElement(
                                          'div',
                                          { className: Ct },
                                          r().createElement('div', { className: Bt }, xt.$dyn(u)),
                                          r().createElement('div', { className: wt }),
                                      ),
                                  ),
                            r().createElement('div', { className: St }),
                        );
                    },
                    kt = 'ContentGrid_base_f7',
                    Pt = 'ContentGrid_scrollArea_98',
                    Ot = 'ContentGrid_scrollAreaInner_32',
                    Ht = 'ContentGrid_reward_4b',
                    Nt = 'ContentGrid_lip_7e',
                    Wt = 'ContentGrid_lip__top_2c',
                    It = 'ContentGrid_lip__bottom_70';
                function Yt() {
                    return (
                        (Yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Yt.apply(this, arguments)
                    );
                }
                function Xt(e, t, u, n, r, o, i) {
                    try {
                        var a = e[o](i),
                            l = a.value;
                    } catch (e) {
                        return void u(e);
                    }
                    a.done ? t(l) : Promise.resolve(l).then(n, r);
                }
                const Ut = { suppressScrollX: !0 },
                    Gt = () => {
                        const e = (0, n.useContext)(me),
                            t = U(e),
                            u = t.onRewardAdd,
                            o = t.onRewardReduce,
                            i = t.selectedTab,
                            a = U(`${e}.rewards`),
                            s = (0, n.useRef)({}),
                            c = (0, n.useState)('start'),
                            d = c[0],
                            E = c[1],
                            m = (0, n.useState)(!1),
                            A = m[0],
                            _ = m[1],
                            g = (0, n.useState)(!1),
                            b = g[0],
                            p = g[1],
                            v = (0, n.useCallback)(
                                (e) => {
                                    u({ type: e });
                                },
                                [u],
                            ),
                            f = (0, n.useCallback)(
                                (e) => {
                                    o({ type: e });
                                },
                                [o],
                            ),
                            D = (0, n.useCallback)((e) => {
                                E(e.reach);
                            }, []),
                            C = (0, n.useCallback)((e) => {
                                _(e.y);
                            }, []);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    p(!0),
                                    E('start'),
                                    null == s.current.updateScrollArea || s.current.updateScrollArea(),
                                    h(
                                        h(() => {
                                            p(!1), null == s.current.updateScrollArea || s.current.updateScrollArea();
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
                                                yield (0, F.Eu)(),
                                                    yield (0, F.Eu)(),
                                                    null == s.current.updateScrollArea || s.current.updateScrollArea();
                                            }),
                                            function () {
                                                var t = this,
                                                    u = arguments;
                                                return new Promise(function (n, r) {
                                                    var o = e.apply(t, u);
                                                    function i(e) {
                                                        Xt(o, n, r, i, a, 'next', e);
                                                    }
                                                    function a(e) {
                                                        Xt(o, n, r, i, a, 'throw', e);
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
                                { className: kt },
                                r().createElement(
                                    Ye,
                                    {
                                        key: 'area',
                                        classMix: Pt,
                                        scrollSettings: Ut,
                                        scrollAreaContainer: s.current,
                                        onVerticalScroll: D,
                                        onUpdateActiveAxis: C,
                                    },
                                    !b &&
                                        r().createElement(
                                            'div',
                                            { className: Ot },
                                            a.map(({ value: e }, t) =>
                                                r().createElement(
                                                    'div',
                                                    { key: t, className: Ht },
                                                    r().createElement(Mt, Yt({}, e, { key: t, onAdd: v, onReduce: f })),
                                                ),
                                            ),
                                        ),
                                ),
                                A && 'start' !== d && r().createElement('div', { className: l()(Nt, Wt) }),
                                A && 'end' !== d && r().createElement('div', { className: l()(Nt, It) }),
                            )
                        );
                    },
                    $t = 'Category_base_23',
                    zt = 'Category_base__viewReady_69',
                    jt = 'Category_glow_a9',
                    qt = 'Category_base__selected_9e',
                    Vt = 'Category_title_54',
                    Kt = 'Category_imageContainer_e0',
                    Qt = 'Category_image_ff',
                    Zt = 'Category_base__completed_0d',
                    Jt = 'Category_base__accepting_c8',
                    eu = 'Category_check_6c',
                    tu = 'Category_counter_3c',
                    uu = R.strings.selectable_reward.tabs,
                    nu = ({ type: e, count: t, limit: u, isSelected: o, onClick: i }) => {
                        const a = (0, n.useContext)(Au),
                            c = re().mediaSize,
                            d = t === u,
                            E = a === hu.Accepting && t > 0 && !o,
                            m = c >= te.Medium ? et.Big : et.Small,
                            A = (0, n.useState)(!1),
                            _ = A[0],
                            F = A[1],
                            g = (0, n.useMemo)(() => ({ backgroundImage: `url(${ot(e, m)})` }), [m, e]),
                            b = (0, n.useMemo)(() => T(uu.counter(), { count: t, limit: u }), [t, u]),
                            p = (0, n.useMemo)(() => ({ type: e }), [e]),
                            v = (0, n.useCallback)(() => {
                                s('bp_click'), i(e);
                            }, [i, e]),
                            f = (0, n.useCallback)(() => {
                                s('bp_highlight');
                            }, []);
                        (0, n.useEffect)(
                            () =>
                                h(() => {
                                    F(!0);
                                }),
                            [],
                        );
                        const D = l()($t, _ && zt, d && Zt, o && qt, E && Jt);
                        return r().createElement(
                            'div',
                            { className: D, onClick: v, onMouseEnter: f },
                            r().createElement('div', { className: jt }),
                            r().createElement(
                                'div',
                                { className: Vt },
                                ((e) => R.strings.selectable_reward.tabs.items.$dyn(e))(e),
                            ),
                            r().createElement(
                                Ge,
                                { args: p },
                                r().createElement(
                                    'div',
                                    { className: Kt },
                                    r().createElement('div', { className: Qt, style: g }),
                                    r().createElement('div', { className: eu }),
                                ),
                            ),
                            r().createElement('div', { className: tu }, b),
                        );
                    },
                    ru = 'Content_base_32',
                    ou = 'Content_base__accepting_82',
                    iu = 'Content_heading_33',
                    au = 'Content_title_b6',
                    lu = 'Content_subTitle_77',
                    su = 'Content_wrapper_f2',
                    cu = 'Content_categories_36',
                    du = 'Content_footer_6a',
                    Eu = 'Content_base__windowed_c5';
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                let hu;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.Accepting = 1)] = 'Accepting');
                })(hu || (hu = {}));
                const Au = (0, n.createContext)(hu.None),
                    _u = ({ title: e, subTitle: t, isLargeWindowed: u }) => {
                        const o = (0, n.useState)(hu.None),
                            i = o[0],
                            a = o[1],
                            s = (0, n.useContext)(me),
                            c = U(s),
                            d = c.tabs,
                            E = c.selectedTab,
                            m = c.totalRewardCount,
                            h = c.onOkClick,
                            A = c.onCloseClick,
                            _ = c.onTabClick;
                        (0, n.useEffect)(() => {
                            if (i === hu.Accepting)
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
                                a(hu.Accepting);
                            }, []),
                            g = (0, n.useCallback)(() => {
                                A();
                            }, [A]),
                            b = (0, n.useCallback)(
                                (e) => {
                                    _({ type: e });
                                },
                                [_],
                            ),
                            p = l()(ru, i === hu.Accepting && ou, u && Eu);
                        return r().createElement(
                            Au.Provider,
                            { value: i },
                            r().createElement(
                                'div',
                                { className: p },
                                r().createElement(
                                    'div',
                                    { className: iu },
                                    r().createElement('div', { className: au }, e),
                                    r().createElement('div', { className: lu }, t),
                                ),
                                r().createElement(
                                    'div',
                                    { className: su },
                                    r().createElement(
                                        'div',
                                        { className: cu },
                                        d.map(({ value: e }, t) =>
                                            r().createElement(
                                                nu,
                                                mu({}, e, { key: t, isSelected: E === e.type, onClick: b }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(Gt, null),
                                ),
                                r().createElement(
                                    'div',
                                    { className: du },
                                    r().createElement(Re, { rewardsSelectedCount: m, onOkClick: F, onCloseClick: g }),
                                ),
                            ),
                        );
                    },
                    Fu = 'Error_base_bc',
                    gu = 'Error_image_a5',
                    bu = 'Error_title_0e',
                    pu = 'Error_description_f4',
                    vu = 'Error_footer_63',
                    fu = 'Error_button_81',
                    Du = R.strings.selectable_reward.error,
                    Cu = () => {
                        const e = (0, n.useContext)(me),
                            t = U(e).onCloseClick,
                            u = (0, n.useCallback)(() => {
                                t();
                            }, [t]);
                        return r().createElement(
                            'div',
                            { className: Fu },
                            r().createElement('div', { className: gu }),
                            r().createElement('div', { className: bu }, Du.title()),
                            r().createElement('div', { className: pu }, Du.description()),
                            r().createElement(
                                'div',
                                { className: vu },
                                r().createElement(
                                    ge,
                                    { mixClass: fu, type: Ae.primary, size: _e.medium, onClick: u },
                                    Du.button(),
                                ),
                            ),
                        );
                    },
                    Bu = 'SelectableRewardBase_base_68';
                let wu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Error = 'error');
                })(wu || (wu = {}));
                const Su = ({ modelPath: e = 'model', title: t, subTitle: u }) => {
                    const o = U(e).tabs.length ? wu.Normal : wu.Error,
                        i = (() => {
                            const e = A.O.view.getSize('rem'),
                                t = (0, n.useState)({ height: e.height, width: e.width }),
                                u = t[0],
                                r = t[1],
                                o = (0, n.useCallback)((e, t) => {
                                    const u = A.O.view.pxToRem(e),
                                        n = A.O.view.pxToRem(t);
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
                        s = i.height,
                        c = s >= 1017 && s < w.large.height && a === w.large.width,
                        d = l()(Bu, c && y().LARGE);
                    return r().createElement(
                        me.Provider,
                        { value: e },
                        r().createElement(
                            Ee,
                            { className: d },
                            o === wu.Normal && r().createElement(_u, { title: t, subTitle: u, isLargeWindowed: c }),
                            o === wu.Error && r().createElement(Cu, null),
                        ),
                    );
                };
                function yu() {
                    return !1;
                }
                console.log;
                var Lu = u(9174);
                function Tu(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ru(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Ru(e, t);
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
                function Ru(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const xu = (e) => (0 === e ? window : window.subViews.get(e));
                const Mu = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: i, children: a, mocks: l }) {
                                const s = (0, n.useRef)([]),
                                    c = (u, n, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = xu,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function o(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = r.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const r = u(t),
                                                        o = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (u, o) => {
                                                        const a = 'string' == typeof o ? `${n}.${o}` : n,
                                                            l = A.O.view.addModelObserver(a, t, !0);
                                                        return r.set(l, u), e && u(i(o)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const u = i(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = Tu(r.keys()); !(e = u()).done; ) o(e.value, t);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(n),
                                            a =
                                                'real' === u
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : a.readByPath(e),
                                            c = (e) => s.current.push(e),
                                            d = e({
                                                mode: u,
                                                readByPath: l,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = Lu.LO.box(n, { equals: yu });
                                                        return (
                                                            'real' === u &&
                                                                a.subscribe(
                                                                    (0, Lu.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = Lu.LO.box(n, { equals: yu });
                                                        return (
                                                            'real' === u &&
                                                                a.subscribe(
                                                                    (0, Lu.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = Lu.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    a.subscribe(
                                                                        (0, Lu.aD)((t) => {
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
                                                                i = o.reduce(
                                                                    (e, [t, u]) => ((e[u] = Lu.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    a.subscribe(
                                                                        (0, Lu.aD)((e) => {
                                                                            o.forEach(([t, u]) => {
                                                                                i[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            E = { mode: u, model: d, externalModel: a, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === u && r ? r.controls(E) : t(E),
                                            externalModel: a,
                                            mode: u,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    E = (0, n.useState)(o),
                                    m = E[0],
                                    h = E[1],
                                    _ = (0, n.useState)(() => c(o, i, l)),
                                    F = _[0],
                                    g = _[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? g(c(m, i, l)) : (d.current = !0);
                                    }, [l, m, i]),
                                    (0, n.useEffect)(() => {
                                        h(o);
                                    }, [o]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    r().createElement(u.Provider, { value: F }, a)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('selectableRewardModel.onCloseClick'),
                        }),
                    ),
                    ku = Mu[0],
                    Pu = Mu[1],
                    Ou = 'App_base_5a',
                    Hu = 'App_base__hide_88',
                    Nu = 'App_content_cc',
                    Wu = 'App_background_c3',
                    Iu = 'App_shadow_18',
                    Yu = 'App_close_9c',
                    Xu = R.strings.battle_pass.rewardChoice,
                    Uu = (0, p.Pi)(() => {
                        const e = Pu(),
                            t = e.model,
                            u = e.controls,
                            o = t.root.get().chapterID,
                            i = (0, n.useState)(!1),
                            a = i[0],
                            s = i[1],
                            c = (0, n.useState)(!1),
                            d = c[0],
                            E = c[1],
                            F = (0, n.useCallback)(() => {
                                if ((A.O.view.setEventHandled(), d)) return;
                                E(!0);
                                const e = setTimeout(u.close, 800);
                                return () => clearTimeout(e);
                            }, [u.close, d]);
                        var g, p;
                        (g = () => F),
                            (0, n.useEffect)(() => g, []),
                            (p = F),
                            b(_.n.ESCAPE, p),
                            (0, n.useEffect)(
                                () =>
                                    h(() => {
                                        s(!0);
                                    }),
                                [],
                            );
                        const v = {
                            backgroundImage: `url(${B(R.images.gui.maps.icons.battlePass.backgrounds.rewards, o)})`,
                        };
                        return r().createElement(
                            'div',
                            { className: l()(Ou, d && Hu), style: v },
                            r().createElement('div', { className: Wu, style: v }),
                            r().createElement('div', { className: Iu }),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: Nu },
                                    r().createElement(
                                        'div',
                                        { className: Yu },
                                        r().createElement(m, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: F,
                                        }),
                                    ),
                                    r().createElement(Su, {
                                        modelPath: 'model.selectableRewardModel',
                                        title: Xu.title(),
                                        subTitle: Xu.subTitle(),
                                    }),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        r().createElement(ku, null, r().createElement(Uu, null)),
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
        (__webpack_require__.j = 16),
        (() => {
            var e = { 16: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [519], () => __webpack_require__(3571));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
