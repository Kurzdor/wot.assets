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
                function l(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return o(e, t);
                    });
                }
                var a = 'ps',
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
                    m = { immediately: !1 };
                function E(e, t, u) {
                    void 0 === u && (u = {});
                    var n = e.element.classList,
                        r = c.scrolling(t);
                    n.contains(r) ? clearTimeout(d[t]) : n.add(r);
                }
                function h(e, t, u) {
                    void 0 === u && (u = {});
                    Object.assign(m, u).immediately
                        ? e.isAlive && e.element.classList.remove(c.scrolling(t))
                        : (d[t] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(c.scrolling(t));
                          }, e.settings.scrollingThreshold));
                }
                var _ = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    A = { isEmpty: { configurable: !0 } };
                (_.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (_.prototype.unbind = function (e, t) {
                        var u = this;
                        this.handlers[e] = this.handlers[e].filter(function (n) {
                            return !(!t || n === t) || (u.element.removeEventListener(e, n, !1), !1);
                        });
                    }),
                    (_.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (A.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(_.prototype, A);
                var b = function () {
                    this.eventElements = [];
                };
                function g(e) {
                    return parseInt(e, 10) || 0;
                }
                (b.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new _(e)), this.eventElements.push(t)), t;
                }),
                    (b.prototype.bind = function (e, t, u) {
                        this.eventElement(e).bind(t, u);
                    }),
                    (b.prototype.unbind = function (e, t, u) {
                        var n = this.eventElement(e);
                        n.unbind(t, u), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
                    }),
                    (b.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (b.prototype.once = function (e, t, u) {
                        var n = this.eventElement(e);
                        n.bind(t, function e(r) {
                            n.unbind(t, e), u(r);
                        });
                    });
                var f = {
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
                function F(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var v = function (e, t, u, n, r, o) {
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
                        void 0 === n && (n = !0);
                        void 0 === r && (r = !1);
                        void 0 === o && (o = !1);
                        var m = e.element;
                        if (!e.reach) return;
                        (e.reach[s] = null), m[a] < 1 && (e.reach[s] = 'start');
                        m[a] > e[i] - e[l] - 1 && (e.reach[s] = 'end');
                        t &&
                            !r &&
                            (m.dispatchEvent(F('ps-scroll-' + s)),
                            t < 0
                                ? m.dispatchEvent(F('ps-scroll-' + c))
                                : t > 0 && m.dispatchEvent(F('ps-scroll-' + d)),
                            n &&
                                (function (e, t) {
                                    E(e, t), h(e, t);
                                })(e, s));
                        e.reach[s] && (t || o) && m.dispatchEvent(F('ps-' + s + '-reach-' + e.reach[s]));
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
                            var a = e.contentWidth - e.containerWidth + n;
                            o.scrollLeft < n ? (o.scrollLeft = n) : o.scrollLeft > a && (o.scrollLeft = a);
                        }
                        var d = Math.floor(o.scrollTop),
                            m = Math.floor(o.scrollLeft) - n,
                            E = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        o.contains(e.scrollbarXRail) ||
                            (l(o, s.rail('x')).forEach(function (e) {
                                return i(e);
                            }),
                            o.appendChild(e.scrollbarXRail)),
                            o.contains(e.scrollbarYRail) ||
                                (l(o, s.rail('y')).forEach(function (e) {
                                    return i(e);
                                }),
                                o.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * E - 15 * E),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = C(e, g((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                  (e.scrollbarXLeft = g(
                                      ((e.negativeScrollAdjustment + m) * (e.railXWidth - e.scrollbarXWidth)) /
                                          (e.contentWidth - e.containerWidth),
                                  )),
                                  e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                : (e.scrollbarXActive = !1),
                            !e.settings.suppressScrollY &&
                            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                ? ((e.scrollbarYActive = !0),
                                  (e.railYHeight = e.containerHeight - e.railYMarginHeight * E - 15 * E),
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
                            })(o, e, E),
                            e.scrollbarXButtonStart.classList.toggle('disabled', m < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', m + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', o.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                o.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (o.classList.add(c.active('x')), v(e, 'left', m - e.lastScrollLeft, !0, t))
                                : (o.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (o.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (o.classList.add(c.active('y')), v(e, 'top', o.scrollTop - e.lastScrollTop, !0, t))
                                : (o.classList.remove(c.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (o.scrollTop = 0)),
                            (e.lastScrollTop = d),
                            (e.lastScrollLeft = m),
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
                var w = {
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
                    B = function (e) {
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
                    L = { breakBounds: !1, startBound: 0, endBound: 0 },
                    y = function (e) {
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
                        void 0 === c && (c = L);
                        var d = null,
                            m = null,
                            E = null,
                            h = null,
                            _ = t === window,
                            A = ['left', 'right'].indexOf(n) > -1,
                            b = ['right', 'bottom'].indexOf(n) > -1;
                        A
                            ? ((m = _ ? 'scrollX' : 'scrollLeft'),
                              (h = _ ? 'innerWidth' : 'width'),
                              (E = 'scrollWidth'))
                            : ((m = _ ? 'scrollY' : 'scrollTop'),
                              (h = _ ? 'innerHeight' : 'height'),
                              (E = 'scrollHeight'));
                        var g = t[m],
                            f = (function (e) {
                                var t,
                                    u = e.isWindow,
                                    n = e.scrollableDomEle,
                                    r = e.elementLengthProp,
                                    o = e.initialScrollPosition,
                                    i = e.isHorizontalDirection,
                                    l = e.scrollLengthProp,
                                    a = e.direction;
                                if (u) {
                                    var s = document.documentElement;
                                    t = i ? s.offsetWidth : s.offsetHeight;
                                } else t = (n[l] - n.getBoundingClientRect()[r]) | 0;
                                return ['left', 'top'].includes(a) ? o : t - o;
                            })({
                                isWindow: _,
                                scrollableDomEle: t,
                                elementLengthProp: h,
                                initialScrollPosition: g,
                                isHorizontalDirection: A,
                                scrollLengthProp: E,
                                direction: n,
                            });
                        !isNaN(a) && a < f && (f = a);
                        var p = function e(n) {
                            if (!s || !s()) {
                                var a = n - d,
                                    E = (function (e) {
                                        var t = e.easingPreset,
                                            u = e.cubicBezierPoints,
                                            n = e.duration,
                                            r = e.runTime / n;
                                        if (w.hasOwnProperty(t)) return w[t](r);
                                        if (
                                            u &&
                                            !isNaN(u.x1) &&
                                            !isNaN(u.y1) &&
                                            !isNaN(u.x2) &&
                                            !isNaN(u.y2) &&
                                            u.x1 >= 0 &&
                                            u.x2 >= 0
                                        )
                                            return B({ percentTimeElapsed: r, x1: u.x1, x2: u.x2, y1: u.y1, y2: u.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: l, cubicBezierPoints: i, runTime: a, duration: o });
                                if (!isNaN(E)) {
                                    var h = Math.round(E * f),
                                        p = b ? h + g : f - h;
                                    if (
                                        (c.breakBounds &&
                                            (p < c.startBound
                                                ? (p = c.startBound)
                                                : p > c.endBound && (p = c.endBound)),
                                        a < o)
                                    ) {
                                        if (_) {
                                            var F = A ? p : 0,
                                                v = A ? 0 : p;
                                            window.scrollTo(F, v);
                                        } else t[m] = p;
                                        r && r(p), requestAnimationFrame(e);
                                    } else u && u();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (d = e), p(e);
                        });
                    },
                    S = function (e) {
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
                                    l = i + u.scrollbarXWidth;
                                return n >= i && n <= l;
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
                                                l = (function (e) {
                                                    var t = e.axis,
                                                        u = e.cursorPositionOnRail,
                                                        n = e.i;
                                                    return u > ('y' === t ? n.scrollbarYTop : n.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: i, i: e });
                                            S({ axis: t, cursorPositionOnRail: i, direction: l, i: e }) &&
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
                function k(e, t, u) {
                    var n = u[0],
                        r = u[1],
                        o = u[2],
                        i = u[3],
                        l = u[4],
                        a = u[5],
                        s = u[6],
                        d = u[7],
                        m = u[8],
                        _ = e.element,
                        A = null,
                        b = null,
                        f = null;
                    function p(u) {
                        (_[s] = g(A + f * (u[o] - b))), E(e, d), D(e, !1, t), u.stopPropagation(), u.preventDefault();
                    }
                    function F() {
                        h(e, d), e[m].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', p);
                    }
                    e.event.bind(e[l], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((A = _[s]),
                            (b = t[o]),
                            (f = (e[r] - e[n]) / (e[i] - e[a])),
                            e.event.bind(e.ownerDocument, 'mousemove', p),
                            e.event.once(e.ownerDocument, 'mouseup', F),
                            e[m].classList.add(c.clicking),
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
                            k(e, t, [
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
                                k(e, t, [
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
                                        if (!f.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(e)) return !1;
                                        for (var o = e; o && o !== n; ) {
                                            if (o.classList.contains(s.consuming)) return !0;
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
                                        c = (i * e.settings.wheelSpeed) | 0,
                                        d = (l * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (l ? (n.scrollTop -= d) : (n.scrollTop += c), (a = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (i ? (n.scrollLeft += c) : (n.scrollLeft -= d), (a = !0))
                                        : ((n.scrollTop -= d), (n.scrollLeft += c)),
                                        D(e, !1, u),
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
                            if (f.supportsTouch || f.supportsIePointer) {
                                var n = e.element,
                                    r = {},
                                    o = 0,
                                    i = {},
                                    l = null;
                                f.supportsTouch
                                    ? (e.event.bind(n, 'touchstart', m),
                                      e.event.bind(n, 'touchmove', E),
                                      e.event.bind(n, 'touchend', h))
                                    : f.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(n, 'pointerdown', m),
                                            e.event.bind(n, 'pointermove', E),
                                            e.event.bind(n, 'pointerup', h))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(n, 'MSPointerDown', m),
                                            e.event.bind(n, 'MSPointerMove', E),
                                            e.event.bind(n, 'MSPointerUp', h)));
                            }
                            function a(t, r) {
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
                            function m(e) {
                                if (d(e)) {
                                    var t = c(e);
                                    (r.pageX = t.pageX),
                                        (r.pageY = t.pageY),
                                        (o = new Date().getTime()),
                                        null !== l && clearInterval(l);
                                }
                            }
                            function E(u) {
                                if (d(u)) {
                                    var l = c(u),
                                        m = { pageX: l.pageX, pageY: l.pageY },
                                        E = m.pageX - r.pageX,
                                        h = m.pageY - r.pageY;
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
                                        })(u.target, E, h)
                                    )
                                        return;
                                    a(E, h), (r = m);
                                    var _ = new Date().getTime(),
                                        A = _ - o;
                                    A > 0 && ((i.x = E / A), (i.y = h / A), (o = _)),
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
                                                    return 0 === window.scrollY && u > 0 && f.isChrome;
                                            } else if (
                                                i > l &&
                                                ((t < 0 && o === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === o))
                                            )
                                                return !0;
                                            return !0;
                                        })(E, h) && u.preventDefault();
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
                                    y({
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
                            function d() {
                                if (r) return r;
                            }
                            function m() {
                                l = 0;
                            }
                            function _(r) {
                                if (e.scrollbarXActive) {
                                    var a = n - r.screenX;
                                    (u.scrollLeft += a), (n = r.screenX);
                                    var s = new Date().getTime();
                                    if (((o = (a / (s - i)) * 1e3), (i = s), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === u.scrollLeft || u.scrollLeft === c
                                            ? 0 === l && (l = window.setTimeout(m, 250))
                                            : 0 !== l && (window.clearTimeout(l), (l = 0));
                                    }
                                    E(e, 'x'),
                                        E(e, 'dragging', { immediately: !0 }),
                                        r.stopPropagation(),
                                        r.preventDefault();
                                }
                            }
                            function A(e) {
                                (n = e.screenX),
                                    (r = !0),
                                    requestAnimationFrame(function () {
                                        r = !1;
                                    }),
                                    (i = new Date().getTime());
                            }
                            function b(n) {
                                var r = e.contentWidth - e.containerWidth + t;
                                if (u.scrollLeft < t) s(t - u.scrollLeft, x, d);
                                else if (u.scrollLeft > r) s(r - u.scrollLeft, x, d);
                                else {
                                    new Date().getTime() - i < 100 && s(o / 4, x, d, !0);
                                }
                                h(e, 'x'),
                                    h(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(c.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', _);
                            }
                            function g() {
                                r = !0;
                            }
                            u.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((n = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', _),
                                        e.event.once(e.ownerDocument, 'mouseup', b),
                                        e.event.once(e.ownerDocument, 'mousedown', A),
                                        e.event.once(u, 'wheel', g),
                                        e.scrollbarXRail.classList.add(c.clicking),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    R = function (e, r) {
                        var o = this;
                        if (
                            (void 0 === r && (r = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var i in ((this.element = e),
                        e.classList.add(a),
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
                            d,
                            m = function () {
                                return e.classList.add(c.focus);
                            },
                            E = function () {
                                return e.classList.remove(c.focus);
                            };
                        (this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((d = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (l = e.scrollLeft < 0),
                                (e.scrollLeft = d),
                                l)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new b()),
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
                            this.event.bind(this.scrollbarX, 'focus', m),
                            this.event.bind(this.scrollbarX, 'blur', E),
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
                            this.event.bind(this.scrollbarY, 'focus', m),
                            this.event.bind(this.scrollbarY, 'blur', E),
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
                (R.prototype._getAnimationSettings = function (e, t, u, n) {
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
                    (R.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (R.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (R.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (R.prototype.handleMouseLeave = function () {}),
                    (R.prototype.update = function () {
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
                                    v(e, 'top', 0, !1, !1, !0),
                                    v(e, 'left', 0, !1, !1, !0),
                                    u(e.scrollbarXRail, { display: '' }),
                                    u(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (R.prototype.setScrollLeft = function (e, t, u) {
                        y(this._getAnimationSettings(e, 'right', t, u));
                    }),
                    (R.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (R.prototype.setScrollTop = function (e, t, u) {
                        y(this._getAnimationSettings(e, 'bottom', t, u));
                    }),
                    (R.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (R.prototype.onScroll = function (e) {
                        this.isAlive && D(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (R.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (D(this, !1, this.settings.overScrollWidth, !1),
                            v(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (R.prototype.destroy = function () {
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
                    (R.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = R);
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
                u.r(t), u.d(t, { mouse: () => l, onResize: () => o });
                var n = u(2472),
                    r = u(1176);
                const o = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const l = (function () {
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
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => o.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => C,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => v,
                        isFocused: () => p,
                        pxToRem: () => b,
                        remToPx: () => g,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => F,
                        setInputPaddingsRem: () => a,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => L,
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
                    return 'rem' === e ? t : { x: g(t.x), y: g(t.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function F() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    B = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    L = Promise.all([
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
                    l = 64,
                    a = (e, t) => {
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
                            a('popover' === e ? r : i);
                        },
                        minimize() {
                            a(l);
                        },
                        move(e) {
                            a(o, { isMouseEvent: !0, on: e });
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
                u.d(t, { c1: () => C, Sw: () => o.Z, B0: () => a, ry: () => g, Eu: () => f });
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
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(a || (a = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    h = u(3138);
                const _ = ['args'];
                function A(e, t, u, n, r, o, i) {
                    try {
                        var l = e[o](i),
                            a = l.value;
                    } catch (e) {
                        return void u(e);
                    }
                    l.done ? t(a) : Promise.resolve(a).then(n, r);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                            A(o, n, r, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            A(o, n, r, i, l, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
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
                                })(t, _);
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
                    F = () => p(a.CLOSE),
                    v = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var D = u(7572);
                const C = r.instance,
                    w = {
                        DataTracker: o.Z,
                        ViewModel: D.Z,
                        ViewEventType: a,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => p(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: () => p(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), o) => {
                            const i = h.O.view.getViewGlobalPosition(),
                                l = u.getBoundingClientRect(),
                                s = l.x,
                                c = l.y,
                                d = l.width,
                                m = l.height,
                                E = {
                                    x: h.O.view.pxToRem(s) + i.x,
                                    y: h.O.view.pxToRem(c) + i.y,
                                    width: h.O.view.pxToRem(d),
                                    height: h.O.view.pxToRem(m),
                                };
                            p(a.POP_OVER, {
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
                            const t = (t) => v(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, F);
                        },
                        handleViewEvent: p,
                        onBindingsReady: g,
                        onLayoutReady: f,
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
                window.ViewEnvHelper = w;
            },
            2784: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    r = u.n(n);
                const o = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var i = u(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var a;
                function s(e, t, u) {
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
                })(a || (a = {}));
                const c = i.O.client.getSize('rem'),
                    d = c.width,
                    m = c.height,
                    E = Object.assign({ width: d, height: m }, s(d, m, l)),
                    h = (0, n.createContext)(E),
                    _ = ['children'];
                const A = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, _);
                    const r = (0, n.useContext)(h),
                        i = r.extraLarge,
                        l = r.large,
                        a = r.medium,
                        s = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        m = r.largeWidth,
                        E = r.mediumWidth,
                        A = r.smallWidth,
                        b = r.extraSmallWidth,
                        g = r.extraLargeHeight,
                        f = r.largeHeight,
                        p = r.mediumHeight,
                        F = r.smallHeight,
                        v = r.extraSmallHeight,
                        D = { extraLarge: g, large: f, medium: p, small: F, extraSmall: v };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && l) return t;
                        if (u.medium && a) return t;
                        if (u.small && s) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return o(t, u, D);
                        if (u.largeWidth && m) return o(t, u, D);
                        if (u.mediumWidth && E) return o(t, u, D);
                        if (u.smallWidth && A) return o(t, u, D);
                        if (u.extraSmallWidth && b) return o(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && g) return t;
                            if (u.largeHeight && f) return t;
                            if (u.mediumHeight && p) return t;
                            if (u.smallHeight && F) return t;
                            if (u.extraSmallHeight && v) return t;
                        }
                    }
                    return null;
                };
                A.defaultProps = {
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
                (0, n.memo)(A);
                const b = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    g = (0, n.memo)(({ children: e }) => {
                        const t = (0, n.useContext)(h),
                            u = (0, n.useState)(t),
                            o = u[0],
                            a = u[1],
                            c = (0, n.useCallback)((e, t) => {
                                const u = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(t);
                                a(Object.assign({ width: u, height: n }, s(u, n, l)));
                            }, []);
                        b(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const d = (0, n.useMemo)(() => Object.assign({}, o), [o]);
                        return r().createElement(h.Provider, { value: d }, e);
                    });
                var f = u(6483),
                    p = u.n(f),
                    F = u(926),
                    v = u.n(F);
                let D, C, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(D || (D = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(C || (C = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const B = () => {
                        const e = (0, n.useContext)(h),
                            t = e.width,
                            u = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return D.ExtraLarge;
                                    case e.large:
                                        return D.Large;
                                    case e.medium:
                                        return D.Medium;
                                    case e.small:
                                        return D.Small;
                                    case e.extraSmall:
                                        return D.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), D.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return C.ExtraLarge;
                                    case e.largeWidth:
                                        return C.Large;
                                    case e.mediumWidth:
                                        return C.Medium;
                                    case e.smallWidth:
                                        return C.Small;
                                    case e.extraSmallWidth:
                                        return C.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), C.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: o, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    L = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const S = {
                        [C.ExtraSmall]: '',
                        [C.Small]: v().SMALL_WIDTH,
                        [C.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [C.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [C.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_HEIGHT,
                        [w.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [w.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [D.ExtraSmall]: '',
                        [D.Small]: v().SMALL,
                        [D.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [D.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [D.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    x = (e) => {
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
                            })(e, L);
                        const o = B(),
                            i = o.mediaWidth,
                            l = o.mediaHeight,
                            a = o.mediaSize;
                        return r().createElement('div', y({ className: p()(u, S[i], T[l], k[a]) }, n), t);
                    },
                    M = ['children'];
                const H = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, M);
                    return r().createElement(g, null, r().createElement(x, u, t));
                };
                var O = u(493),
                    P = u.n(O);
                const I = (e) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            t.current = e;
                        }, [e]),
                        t.current
                    );
                };
                let W;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(W || (W = {}));
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
                let N;
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
                })(N || (N = {}));
                var Y = u(4179);
                Date.now();
                const X = (e = 1) => {
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
                    U = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    j = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    V = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    $ = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = U(`${e}.${u}`, window);
                                return j(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    G = (e) => {
                        const t = ((e) => {
                                const t = X(),
                                    u = t.caller,
                                    n = t.resId,
                                    r = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: r, modelPath: V(r, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const r = U(V(u, `${t}.${n}`), window);
                                    return j(r) ? (e.push(r.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    z = Y.Sw.instance;
                let K;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(K || (K = {}));
                const q = (e = 'model', t = K.Deep) => {
                        const u = (0, n.useState)(0),
                            r = (u[0], u[1]),
                            o = (0, n.useMemo)(() => X(), []),
                            i = o.caller,
                            l = o.resId,
                            a = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            s = (0, n.useState)(() =>
                                ((e) => {
                                    const t = U(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return j(t) ? t.value : t;
                                })($(a)),
                            ),
                            c = s[0],
                            d = s[1],
                            m = (0, n.useRef)(-1);
                        return (
                            b(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? K.Deep : K.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== K.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === K.Deep
                                                ? (e === c && r((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        n = G(e);
                                    m.current = z.addCallback(n, u, l, t === K.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== K.None)
                                    return () => {
                                        z.removeCallback(m.current, l);
                                    };
                            }, [l, t]),
                            c
                        );
                    },
                    Q = (Y.Sw.instance, I);
                var Z = u(5521);
                const J = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ee(e = Z.n.NONE, t = J, u = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== Z.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                const te = /<link.*?>/g,
                    ue = /\.\.\//g,
                    ne = /<script.*?>/g,
                    re = 'default.css',
                    oe = (e) => {
                        const t = e.match(ue);
                        return t && t.join('');
                    },
                    ie = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const u = t[e];
                            if (!u.href.includes(re)) return u.href;
                        }
                        return '';
                    },
                    le = (e) => {
                        const t = ie(),
                            u = oe(t);
                        let n,
                            r = e;
                        for (; null !== (n = ne.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = u + e[2].replace(ue, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    ae = 'SubView_base_df',
                    se = 'subViews.onChanged',
                    ce = (() => {
                        const e = [];
                        let t = !1;
                        const u = () => {
                            if (!e.length) return void (t = !1);
                            const n = e.shift();
                            n && ((t = !0), n().then(() => u()));
                        };
                        return {
                            add: (n) => {
                                e.push(n), t || u();
                            },
                        };
                    })(),
                    de = (0, n.memo)(({ id: e, fallback: t, onLoadCallback: u, mixClass: o }) => {
                        const i = (0, n.useState)(''),
                            l = i[0],
                            a = i[1],
                            s = (0, n.useMemo)(() => ({ __html: le(l) }), [l]),
                            c = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, n.useState)(!1),
                            m = d[0],
                            E = d[1],
                            h = (0, n.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (E(!0), engine.off(se, h), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            _ = (0, n.useCallback)((e) => {
                                ce.add(
                                    () =>
                                        new Promise((t) => {
                                            a(e);
                                            const u = new MutationObserver(() => {
                                                    u.disconnect(), t();
                                                }),
                                                n = document.getElementById('root');
                                            n && u.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n;
                                if ((n = u.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${n}`, _),
                                        (({ path: e, name: t }) => {
                                            const u = new XMLHttpRequest();
                                            (u.onreadystatechange = () => {
                                                4 === u.readyState &&
                                                    (200 === u.status
                                                        ? (0, Y.Eu)().then(() => {
                                                              console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      u.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${u.status} - can't get bundle`,
                                                          ));
                                            }),
                                                u.open('GET', e),
                                                u.send();
                                        })({ name: n, path: u }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, _),
                                                console.info(`Sub view ${n} is destroyed: ${u}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(se, h);
                        }, [h, _, e, m]),
                            (0, n.useEffect)(
                                () => () => {
                                    l &&
                                        ((e) => {
                                            const t = oe(ie());
                                            let u;
                                            for (; null !== (u = te.exec(e)); ) {
                                                const e = u[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const u = t + e[1].replace(ue, ''),
                                                        n = document.head.querySelector(`[href="${u}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(l);
                                },
                                [l],
                            );
                        const A = p()(ae, o);
                        if (l) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const u = ie(),
                                        n = oe(u);
                                    for (; null !== (t = te.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(re) && n) {
                                            const t = n + e[1].replace(ue, ''),
                                                u = document.createElement('link');
                                            (u.href = t), (u.rel = 'stylesheet'), document.head.appendChild(u);
                                        }
                                    }
                                })(l),
                                u && u(e),
                                r().createElement('div', { className: A, dangerouslySetInnerHTML: s })
                            );
                        }
                        return t ? r().createElement('div', { className: A }, r().createElement(t, null)) : null;
                    });
                function me(e) {
                    engine.call('PlaySound', e);
                }
                const Ee = {
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
                let he, _e;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(he || (he = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(_e || (_e = {}));
                const Ae = ({
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
                        b = (0, n.useState)(u),
                        g = b[0],
                        f = b[1],
                        F = (0, n.useState)(!1),
                        v = F[0],
                        D = F[1],
                        C = (0, n.useState)(!1),
                        w = C[0],
                        B = C[1],
                        L = (0, n.useCallback)(() => {
                            i || (A.current && (A.current.focus(), f(!0)));
                        }, [i]),
                        y = (0, n.useCallback)(
                            (e) => {
                                g && null !== A.current && !A.current.contains(e.target) && f(!1);
                            },
                            [g],
                        ),
                        S = (0, n.useCallback)(
                            (e) => {
                                i || (_ && _(e));
                            },
                            [i, _],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                i || (null !== a && me(a), c && c(e), B(!0));
                            },
                            [i, a, c],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                i || (E && E(e), D(!1));
                            },
                            [i, E],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                i || (null !== s && me(s), m && m(e), u && L(), D(!0));
                            },
                            [i, s, m, L, u],
                        ),
                        H = (0, n.useCallback)(
                            (e) => {
                                i || (h && h(e), D(!1));
                            },
                            [i, h],
                        ),
                        O = p()(
                            Ee.base,
                            Ee[`base__${o}`],
                            {
                                [Ee.base__disabled]: i,
                                [Ee[`base__${t}`]]: t,
                                [Ee.base__focus]: g,
                                [Ee.base__highlightActive]: v,
                                [Ee.base__firstHover]: w,
                            },
                            l,
                        ),
                        P = p()(Ee.state, Ee.state__default);
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
                            f(u);
                        }, [u]),
                        r().createElement(
                            'div',
                            {
                                ref: A,
                                className: O,
                                onMouseEnter: T,
                                onMouseMove: k,
                                onMouseUp: x,
                                onMouseDown: M,
                                onMouseLeave: H,
                                onClick: S,
                            },
                            o !== he.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Ee.back }),
                                    r().createElement('span', { className: Ee.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: P },
                                r().createElement('span', { className: Ee.stateDisabled }),
                                r().createElement('span', { className: Ee.stateHighlightHover }),
                                r().createElement('span', { className: Ee.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Ee.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ae.defaultProps = { type: he.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const be = (0, n.memo)(Ae),
                    ge = [
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
                function fe(e) {
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
                const pe = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    Fe = (e) => {
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
                            b = e.targetId,
                            g = void 0 === b ? 0 : b,
                            f = e.onShow,
                            p = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, ge);
                        const v = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, n.useMemo)(() => g || X().resId, [g]),
                            C = (0, n.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (pe(u, h, { isMouseEvent: !0, on: !0, arguments: fe(r) }, D),
                                    f && f(),
                                    (v.current.isVisible = !0));
                            }, [u, h, r, D, f]),
                            w = (0, n.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        pe(u, h, { on: !1 }, D),
                                        v.current.isVisible && p && p(),
                                        (v.current.isVisible = !1);
                                }
                            }, [u, h, D, p]),
                            B = (0, n.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', B, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', B, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === A && w();
                            }, [A, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return A
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                      o && o(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              w(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && w(), null == a || a(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && w(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      F,
                                  ),
                              )
                            : t;
                        var L;
                    },
                    ve = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function De() {
                    return (
                        (De =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                const Ce = R.views.common.tooltip_window.simple_tooltip_content,
                    we = (e) => {
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
                            })(e, ve);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, a, { body: u, header: o, note: i, alert: l });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [l, u, o, i, a]);
                        return r().createElement(
                            Fe,
                            De(
                                {
                                    contentId:
                                        ((d = null == a ? void 0 : a.hasHtmlContent),
                                        d ? Ce.SimpleTooltipHtmlContent('resId') : Ce.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            t,
                        );
                        var d;
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
                    Le = 'TextOverflow_base_3b',
                    ye = ({ content: e, classMix: t }) => {
                        const u = (0, n.useRef)(null),
                            o = (0, n.useState)(!0),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() =>
                                Be(() => {
                                    const e = u.current;
                                    e && e.offsetWidth >= e.scrollWidth && l(!1);
                                }),
                            ),
                            r().createElement(
                                we,
                                { isEnabled: i, body: e },
                                r().createElement('div', { ref: u, className: p()(Le, t) }, e),
                            )
                        );
                    };
                let Se;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(Se || (Se = {}));
                const Te = 'DialogTemplateButton_base_0b',
                    ke = 'DialogTemplateButton_label_83',
                    xe = 'DialogTemplateButton_label__noTooltip_14',
                    Me = (0, n.memo)(
                        ({ onClick: e, isFocused: t, buttonID: u, isDisabled: o, label: i, tooltip: l, type: a }) => {
                            const s = (0, n.useCallback)(() => {
                                    e({ buttonID: u });
                                }, [e, u]),
                                c = (0, n.useCallback)(
                                    (e) => {
                                        e.altKey || !t || o || s();
                                    },
                                    [t, o, s],
                                );
                            ee(Z.n.ENTER, c);
                            const d = (0, n.useMemo)(() => {
                                    return (
                                        (e = l.type),
                                        (t = { buttonID: u }),
                                        {
                                            isEnabled: e !== Se.absent,
                                            args: t,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === Se.normal
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === Se.backport,
                                            ignoreMouseClick: !0,
                                        }
                                    );
                                    var e, t;
                                }, [l.type, u]),
                                m = p()(ke, l.type !== Se.absent && xe);
                            return r().createElement(
                                Fe,
                                d,
                                r().createElement(
                                    'div',
                                    { className: Te },
                                    r().createElement(
                                        be,
                                        { size: _e.medium, type: a, disabled: o, onClick: s, isFocused: t },
                                        r().createElement(ye, { classMix: m, content: i || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Re = 'DialogTemplateButtonList_base_8e';
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
                const Oe = (0, n.memo)(() => {
                        const e = q('model').onButtonClicked,
                            t = q('model.focus'),
                            u = t.focusedIndex,
                            o = t.onTabPressed,
                            i = q('model.buttons'),
                            l = (0, n.useCallback)(
                                (e) => {
                                    o({ shift: e.shiftKey });
                                },
                                [o],
                            );
                        return (
                            ee(Z.n.TAB, l),
                            r().createElement(
                                'div',
                                { className: Re },
                                i.map(({ value: t }, n) =>
                                    r().createElement(Me, He({ key: t.buttonID, isFocused: n === u, onClick: e }, t)),
                                ),
                            )
                        );
                    }),
                    Pe = 'DialogTemplateWrapper_base_f7',
                    Ie = 'DialogTemplateWrapper_base__hidden_5f',
                    We = 'DialogTemplateWrapper_subView_30';
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Ye = (0, n.memo)(({ Template: e }) => {
                        const t = q('model', K.None),
                            u = t.onCloseClicked,
                            o = t.placeHolders,
                            i = t.background,
                            l = t.dimmerAlpha,
                            a = t.displayFlags;
                        (0, n.useEffect)(() => {
                            const e = document.getElementById('root');
                            e && e.setAttribute('id', 'stubDialogTemplate');
                        }, []);
                        const s = a.map(({ value: e }) => e),
                            c = (0, n.useRef)(o.map(({ value: e }) => e.resourceID)),
                            d = (0, n.useState)(0 !== c.current.length),
                            m = d[0],
                            E = d[1],
                            h = (0, n.useCallback)(
                                (e = 'default') => {
                                    u({ reason: e });
                                },
                                [u],
                            ),
                            _ = (0, n.useCallback)(() => {
                                h('escape');
                            }, [h]);
                        var A;
                        (A = _), ee(Z.n.ESCAPE, A);
                        const b = (0, n.useCallback)((e) => {
                                const t = c.current,
                                    u = t.indexOf(e);
                                u > -1 && (t.splice(u, 1), 0 === t.length && E(!1));
                            }, []),
                            f = (0, n.useMemo)(() => {
                                const e = { backgroundColor: `rgba(19, 18, 16, ${l})` };
                                return i && (e.backgroundImage = `url(${i})`), e;
                            }, [i, l]),
                            F = (0, n.useMemo)(
                                () =>
                                    o.reduce(
                                        (e, { value: t }) => (
                                            (e[t.placeHolder] = r().createElement(de, {
                                                key: t.placeHolder,
                                                id: t.resourceID,
                                                mixClass: We,
                                                onLoadCallback: b,
                                            })),
                                            e
                                        ),
                                        {},
                                    ),
                                [b, o],
                            ),
                            v = p()(Pe, m && Ie);
                        return r().createElement(
                            g,
                            null,
                            r().createElement(
                                'div',
                                { className: v, style: f },
                                r().createElement(
                                    e,
                                    Ne(
                                        {
                                            onClose: h,
                                            buttons: r().createElement(Oe, null),
                                            displayFlags: s,
                                            isShown: !m,
                                        },
                                        F,
                                    ),
                                ),
                            ),
                        );
                    }),
                    Xe = {
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
                    Ue = [
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
                class Ve extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && me(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && me(this.props.soundClick);
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
                            l = e.classNames,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
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
                                })(e, Ue)),
                            E = p()(Xe.base, Xe[`base__${i}`], Xe[`base__${o}`], null == l ? void 0 : l.base),
                            h = p()(Xe.icon, Xe[`icon__${i}`], Xe[`icon__${o}`], null == l ? void 0 : l.icon),
                            _ = p()(Xe.glow, null == l ? void 0 : l.glow),
                            A = p()(Xe.caption, Xe[`caption__${i}`], null == l ? void 0 : l.caption),
                            b = p()(Xe.goto, null == l ? void 0 : l.goto);
                        return r().createElement(
                            'div',
                            je(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(a),
                                    onMouseLeave: this._onMouseLeave(s),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                m,
                            ),
                            'info' !== i && r().createElement('div', { className: Xe.shine }),
                            r().createElement('div', { className: h }, r().createElement('div', { className: _ })),
                            r().createElement('div', { className: A }, t),
                            n && r().createElement('div', { className: b }, n),
                        );
                    }
                }
                let $e;
                (Ve.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.responsiveHeader = 'responsiveHeader'),
                            (e.responsiveClosePosition = 'responsiveClosePosition'),
                            (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })($e || ($e = {}));
                const Ge = {
                        base: 'DefaultDialogTemplate_base_d2',
                        topRight: 'DefaultDialogTemplate_topRight_eb',
                        center: 'DefaultDialogTemplate_center_b4',
                        center__shown: 'DefaultDialogTemplate_center__shown_e1',
                        windowIn: 'DefaultDialogTemplate_windowIn_3b',
                        center__withIcon: 'DefaultDialogTemplate_center__withIcon_f9',
                        base__extraSmallHeight: 'DefaultDialogTemplate_base__extraSmallHeight_f5',
                        center__responsive: 'DefaultDialogTemplate_center__responsive_21',
                        base__smallHeight: 'DefaultDialogTemplate_base__smallHeight_52',
                        icon: 'DefaultDialogTemplate_icon_36',
                        icon__responsive: 'DefaultDialogTemplate_icon__responsive_e0',
                        title: 'DefaultDialogTemplate_title_c6',
                        title__responsive: 'DefaultDialogTemplate_title__responsive_6e',
                        content: 'DefaultDialogTemplate_content_22',
                        footer: 'DefaultDialogTemplate_footer_4e',
                        buttons: 'DefaultDialogTemplate_buttons_f7',
                        divider: 'DefaultDialogTemplate_divider_d5',
                        divider__noContent: 'DefaultDialogTemplate_divider__noContent_3f',
                        divider__noFooter: 'DefaultDialogTemplate_divider__noFooter_10',
                        closeBtn: 'DefaultDialogTemplate_closeBtn_5e',
                        closeBtn__responsive: 'DefaultDialogTemplate_closeBtn__responsive_49',
                    },
                    ze = (0, n.memo)(
                        ({
                            isShown: e = !0,
                            classMix: t,
                            onClose: u,
                            icon: o,
                            topRight: i,
                            title: l,
                            content: s,
                            buttons: c,
                            footer: d,
                            displayFlags: m,
                            classNames: E,
                        }) => {
                            const _ = ((e, t) => Object.keys(t).reduce((t, u) => ((t[u] = e.includes(u)), t), {}))(
                                    m,
                                    $e,
                                ),
                                A = _.responsiveHeader,
                                b = _.responsiveClosePosition,
                                g = _.disableResponsiveContentPosition,
                                f = (function (e, t, u) {
                                    const r = (0, n.useContext)(h);
                                    let o = Object.entries(r).filter(([e, t]) => !0 === t && e in a);
                                    return (
                                        u && (o = o.filter((e) => u.includes(e[0]))),
                                        e.reduce((e, u) => {
                                            const n = o.map((e) =>
                                                p()(
                                                    t[((e, t) => e + '__' + t)(u, e[0])],
                                                    t[
                                                        ((e, t) => {
                                                            return e + ((u = t)[0].toUpperCase() + u.slice(1));
                                                            var u;
                                                        })(u, e[0])
                                                    ],
                                                ),
                                            );
                                            return (e[u] = p()(t[u], ...n)), e;
                                        }, {})
                                    );
                                })(['base'], Ge),
                                F = (0, n.useCallback)(() => {
                                    u && u();
                                }, [u]),
                                v = p()(f.base, t),
                                D = p()(
                                    Ge.center,
                                    o && Ge.center__withIcon,
                                    e && Ge.center__shown,
                                    !g && Ge.center__responsive,
                                    null == E ? void 0 : E.center,
                                ),
                                C = p()(Ge.icon, A && Ge.icon__responsive),
                                w = p()(Ge.title, A && Ge.title__responsive),
                                B = p()(Ge.closeBtn, b && Ge.closeBtn__responsive),
                                L = p()(
                                    Ge.divider,
                                    !s && Ge.divider__noContent,
                                    !d && Ge.divider__noFooter,
                                    null == E ? void 0 : E.divider,
                                );
                            return r().createElement(
                                'div',
                                { className: v },
                                r().createElement(
                                    'div',
                                    { className: Ge.topRight },
                                    i,
                                    r().createElement(
                                        'div',
                                        { className: B },
                                        r().createElement(Ve, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: F,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: D },
                                    o && r().createElement('div', { className: C }, o),
                                    l && r().createElement('div', { className: w }, l),
                                    s && r().createElement('div', { className: Ge.content }, s),
                                    r().createElement('div', { className: L }),
                                    d && r().createElement('div', { className: Ge.footer }, d),
                                    c && r().createElement('div', { className: Ge.buttons }, c),
                                ),
                            );
                        },
                    );
                var Ke = u(3403);
                let qe, Qe, Ze, Je, et, tt, ut;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(qe || (qe = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(Qe || (Qe = {})),
                    (function (e) {
                        e.DocumentChange = 'document_change_dialog';
                    })(Ze || (Ze = {})),
                    (function (e) {
                        (e.PremiumTooltip = 'personal_file_view_premium_tooltip'),
                            (e.MstlTooltip = 'personal_file_view_mstl_tooltip');
                    })(Je || (Je = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.MstlTooltip = 'crew_widget_mstl_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(et || (et = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(tt || (tt = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(ut || (ut = {}));
                R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    Qe.PersonalFile,
                    R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    Qe.PersonalData,
                    R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    Qe.ServiceRecord,
                    R.views.lobby.crew.BarracksView('resId'),
                    Qe.Barracks,
                    R.views.lobby.crew.HangarCrewWidget('resId'),
                    Qe.Hangar,
                    R.views.lobby.crew.MemberChangeView('resId'),
                    Qe.MemberChange,
                    R.views.lobby.crew.TankChangeView('resId'),
                    Qe.TankChange,
                    R.views.lobby.crew.QuickTrainingView('resId'),
                    Qe.QuickTraining;
                let nt, rt;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(nt || (nt = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(rt || (rt = {}));
                let ot;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(ot || (ot = {}));
                const it = 'metrics',
                    lt = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    at = (e, t) => {
                        const u = (0, n.useCallback)(
                            (u, n = rt.Info, r) => {
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
                    st = (e) => {
                        const t = ((e) => {
                            const t = at(e, it),
                                u = (0, n.useCallback)(
                                    (e) => {
                                        t(e.action, e.logLevel, lt(e));
                                    },
                                    [t],
                                );
                            return (e) => u(e);
                        })('crew');
                        return (u) => t({ action: qe.Click, parentScreen: e, item: u });
                    };
                function ct() {
                    return !1;
                }
                console.log;
                var dt = u(9174);
                function mt(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Et(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Et(e, t);
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
                function Et(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const ht = (e) => (0 === e ? window : window.subViews.get(e));
                function _t(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                var At = u(3946);
                const bt = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: l, children: a, mocks: s }) {
                                const c = (0, n.useRef)([]),
                                    d = (u, n, r) => {
                                        var o;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ht,
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
                                                const l = (e) => {
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
                                                            s = i.O.view.addModelObserver(a, t, !0);
                                                        return r.set(s, u), e && u(l(o)), s;
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
                                                        for (var e, u = mt(r.keys()); !(e = u()).done; ) o(e.value, t);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(n),
                                            a =
                                                'real' === u
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : a.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            r = dt.LO.box(n, { equals: ct });
                                                        return (
                                                            'real' === u &&
                                                                a.subscribe(
                                                                    (0, dt.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            r = dt.LO.box(n, { equals: ct });
                                                        return (
                                                            'real' === u &&
                                                                a.subscribe(
                                                                    (0, dt.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = dt.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    a.subscribe(
                                                                        (0, dt.aD)((t) => {
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
                                                                    (e, [t, u]) => ((e[u] = dt.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    a.subscribe(
                                                                        (0, dt.aD)((e) => {
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
                                                cleanup: d,
                                            }),
                                            E = { mode: u, model: m, externalModel: a, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === u && r ? r.controls(E) : t(E),
                                            externalModel: a,
                                            mode: u,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    E = (0, n.useState)(o),
                                    h = E[0],
                                    _ = E[1],
                                    A = (0, n.useState)(() => d(o, l, s)),
                                    b = A[0],
                                    g = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? g(d(h, l, s)) : (m.current = !0);
                                    }, [s, h, l]),
                                    (0, n.useEffect)(() => {
                                        _(o);
                                    }, [o]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    r().createElement(u.Provider, { value: b }, a)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = Object.assign({}, e.primitives(['firstNameIndex', 'lastNameIndex']), {
                                    firstNameList: e.array('firstNameList'),
                                    lastNameList: e.array('lastNameList'),
                                }),
                                u = (0, At.Om)(() => _t(t.firstNameList.get(), (e, t) => ({ id: t, label: e })), {
                                    equals: ct,
                                }),
                                n = (0, At.Om)(() => _t(t.lastNameList.get(), (e, t) => ({ id: t, label: e })), {
                                    equals: ct,
                                });
                            return Object.assign({}, t, {
                                computes: { getDropDownFirstNames: u, getDropDownLastNames: n },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onChangeFirstName: e.createCallback((e) => ({ index: e }), 'onChangeFirstName'),
                            onChangeLastName: e.createCallback((e) => ({ index: e }), 'onChangeLastName'),
                        }),
                    ),
                    gt = bt[0],
                    ft = bt[1],
                    pt = ['children'];
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const vt = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, pt);
                    return r().createElement(
                        Fe,
                        Ft(
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
                function Dt() {
                    return (
                        (Dt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Dt.apply(this, arguments)
                    );
                }
                const Ct = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(we, t, n);
                    const o = t.contentId,
                        i = t.args,
                        l = null == i ? void 0 : i.contentId;
                    return o || l
                        ? r().createElement(Fe, Dt({}, t, { contentId: o || l }), n)
                        : r().createElement(vt, t, n);
                };
                let wt, Bt;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(wt || (wt = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium');
                    })(Bt || (Bt = {}));
                const Lt = {
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
                let yt;
                !(function (e) {
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(yt || (yt = {}));
                const St = (0, n.memo)(
                        ({
                            parentId: e,
                            variant: t = wt.Basic,
                            size: u = Bt.Medium,
                            isOpen: o,
                            placeholder: i = R.strings.common.dropdown.placeholder.select(),
                            label: l = '',
                            classMix: a,
                            onClick: s,
                            soundHover: c,
                            soundClick: d,
                            customControl: m,
                        }) => {
                            const E = (0, n.useState)(yt.Out),
                                h = E[0],
                                _ = E[1],
                                A = (0, n.useState)(!1),
                                b = A[0],
                                g = A[1],
                                f = t === wt.Disabled,
                                F = f || t === wt.Basic,
                                v = (0, n.useCallback)(() => {
                                    f || (_(yt.Over), c && me(c));
                                }, [f, c]),
                                D = (0, n.useCallback)(() => {
                                    f || (_(yt.Down), d && me(d));
                                }, [f, d]),
                                C = (0, n.useCallback)(() => {
                                    !f && _(yt.Over), !F && g(!0);
                                }, [f, F]),
                                w = (0, n.useCallback)((e) => s && s(e), [s]),
                                B = (0, n.useCallback)(() => _(yt.Out), []);
                            (0, n.useEffect)(() => {
                                F || g(!1);
                            }, [t, F]),
                                (0, n.useEffect)(() => {
                                    f && B();
                                }, [f, B]);
                            const L = p()(
                                Lt.base,
                                o && Lt.base__open,
                                Lt[`base__${h}`],
                                (F || !b) && Lt[`base__${t}`],
                                a,
                            );
                            return r().createElement(
                                'div',
                                {
                                    id: e ? `${e}_control` : void 0,
                                    className: L,
                                    onMouseEnter: v,
                                    onMouseUp: C,
                                    onMouseDown: D,
                                    onMouseLeave: B,
                                    onClick: w,
                                },
                                !b && t === wt.Alert && r().createElement('div', { className: Lt.alert }),
                                r().createElement(
                                    'div',
                                    { className: p()(Lt.label, Lt[`label__${u}`], !l && Lt.label__placeholder) },
                                    m || r().createElement(ye, { content: l || i }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: p()(Lt.button, Lt[`button__${u}`]) },
                                    r().createElement('div', { className: p()(Lt.arrow, Lt[`arrow__${u}`]) }),
                                    h === yt.Over && r().createElement('div', { className: Lt.gradient }),
                                    f && r().createElement('div', { className: Lt.disabled }),
                                ),
                            );
                        },
                    ),
                    Tt = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            u = t.width,
                            n = t.height;
                        return 0 !== u && 0 !== n;
                    },
                    kt = (e) => {
                        const t = (0, n.useState)(Tt(e ? e.current : null)),
                            u = t[0],
                            r = t[1];
                        return (
                            (0, n.useEffect)(() => {
                                let t = 0;
                                const u = () => {
                                    t = requestAnimationFrame(() => {
                                        Tt(e ? e.current : null) ? r(!0) : u();
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
                var xt = u(8380),
                    Mt = u.n(xt);
                const Rt = 'ScrollArea_base_47',
                    Ht = 'ScrollArea_base__scrollIndent_1d',
                    Ot = 'ScrollArea_base__verticalScrollbarMargin_50',
                    Pt = 'ScrollArea_base__multiple_44',
                    It = 'ScrollArea_base__hidden_ec',
                    Wt = r().forwardRef((e, t) => {
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
                            b = e.scrollAreaContainer,
                            g = e.children,
                            f = e.classMix,
                            F = e.onScrollLeftHandled,
                            v = (0, n.useState)(!1),
                            D = v[0],
                            C = v[1],
                            w = (0, n.useState)(),
                            B = w[0],
                            L = w[1],
                            y = (0, n.useState)(),
                            S = y[0],
                            T = y[1],
                            k = (0, n.useRef)(null),
                            x = (0, n.useCallback)(() => {
                                B &&
                                    s &&
                                    s({ x: B.scrollbarXActive, y: B.scrollbarYActive }, { x: B.reach.x, y: B.reach.y });
                            }, [s, B]),
                            M = (0, n.useCallback)(() => B, [B]),
                            R = (0, n.useCallback)(() => {
                                B && B.update();
                            }, [B]),
                            H = (0, n.useCallback)(
                                (e, t, u) => {
                                    B && (B.setScrollLeft(e, t, u), F && F(e, B.contentWidth - B.containerWidth));
                                },
                                [B, F],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    B && (B.setScrollLeftImmediately(e), F && F(e, B.contentWidth - B.containerWidth));
                                },
                                [B, F],
                            ),
                            P = (0, n.useCallback)(
                                (e, t, u) => {
                                    B && B.setScrollTop(e, t, u);
                                },
                                [B],
                            ),
                            I = (0, n.useCallback)(
                                (e) => {
                                    B && B.setScrollTopImmediately(e);
                                },
                                [B],
                            ),
                            W = (0, n.useCallback)(() => {
                                if (S && c && B) {
                                    const e = { scrollPosition: S.scrollLeft < 0 ? 0 : S.scrollLeft, reach: B.reach.x };
                                    c(e);
                                }
                            }, [c, S, B]),
                            N = (0, n.useCallback)(() => {
                                if (S && d && B) {
                                    const e = { scrollPosition: S.scrollTop, reach: B.reach.y };
                                    d(e);
                                }
                            }, [d, S, B]),
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
                                B &&
                                    (B.update(),
                                    (k.current = Be(() => {
                                        x();
                                    })));
                            }, [B, x]),
                            V = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (B && S)
                                return (
                                    document.addEventListener('mousemove', V),
                                    window.addEventListener('resize', j),
                                    S.addEventListener('ps-scroll-x', W),
                                    S.addEventListener('ps-scroll-y', N),
                                    S.addEventListener('over-scroll-beginning', Y),
                                    S.addEventListener('over-scroll-ending', X),
                                    C(!0),
                                    () => {
                                        window.removeEventListener('resize', j),
                                            document.removeEventListener('mousemove', V),
                                            S &&
                                                (S.removeEventListener('ps-scroll-x', W),
                                                S.removeEventListener('ps-scroll-y', N),
                                                S.removeEventListener('over-scroll-beginning', Y),
                                                S.removeEventListener('over-scroll-ending', X));
                                    }
                                );
                        }, [V, W, Y, X, j, S, B, N]);
                        const $ = (0, n.useRef)(S || null);
                        $.current = S || null;
                        const G = kt($);
                        (0, n.useEffect)(
                            () => (
                                !B && S && G && L(new (Mt())(S, Object.assign({}, a))),
                                () => {
                                    B && (B.destroy(), L(void 0));
                                }
                            ),
                            [S, G, a, B],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == k.current || k.current();
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
                                l > 0 && I(l);
                            }, [l, I]),
                            (0, n.useEffect)(() => {
                                b &&
                                    ((b.setScrollLeft = H),
                                    (b.setScrollTop = P),
                                    (b.setScrollLeftImmediately = O),
                                    (b.setScrollTopImmediately = I),
                                    (b.updateScrollArea = R),
                                    (b.getScrollbar = M));
                            }, [b, H, O, P, I, R, M]);
                        const z = p()(Rt, { [Ht]: h, [It]: !D, [Ot]: _, [Pt]: A }, f);
                        return r().createElement('div', { className: z, ref: U }, g);
                    }),
                    Nt = [
                        'children',
                        'isEnabled',
                        'selectedItemId',
                        'scrollAreaKey',
                        'withCompleteTrigger',
                        'containerClasses',
                    ];
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
                const Xt = (e) => {
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
                            })(e, Nt);
                        const E = (0, n.useState)(!1),
                            h = E[0],
                            _ = E[1],
                            A = (0, n.useRef)({}),
                            b = (0, n.useRef)(null),
                            g = (0, n.useRef)(null),
                            f = (0, n.useRef)(null),
                            p = (0, n.useCallback)(() => {
                                _(!0);
                            }, []),
                            F = (0, n.useCallback)(() => {
                                _(!1);
                            }, []),
                            v = (0, n.useCallback)(() => {
                                const e = f.current,
                                    t = b.current,
                                    u = A.current;
                                if (e && u && t) {
                                    const n = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    u.setScrollTop(n, void 0, c ? p : void 0);
                                }
                            }, [p, c]);
                        (0, n.useEffect)(() => {
                            if (o && null !== i) return Be(v);
                        }, [a, v, i, o]);
                        const D = !(!g.current || !g.current.scrollbar) && g.current.scrollbar.scrollbarYActive,
                            C = {
                                scrollContainerRef: b,
                                selectedItemRef: f,
                                selectedItemId: i,
                                isScrollComplete: h,
                                scrollbarActive: D,
                                onScrollAnimationComplete: F,
                            },
                            w = (0, n.cloneElement)(t, C);
                        return r().createElement(
                            'div',
                            { className: d, ref: b },
                            r().createElement(Wt, Yt({ ref: g, key: a, scrollAreaContainer: A.current }, m), w),
                        );
                    },
                    Ut = {
                        base: 'DropDownItem_base_5e',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    jt = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const Vt = (0, n.memo)((e) => {
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
                            })(e, jt);
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
                                c || (m && me(m));
                            }, [c, m]),
                            A = (0, n.useCallback)(() => {
                                c || (E && me(E));
                            }, [c, E]),
                            b = p()(Ut.base, t && Ut[`base__${t}`], s && Ut.base__selected, c && Ut.base__disabled, u);
                        return r().createElement(
                            'div',
                            { className: b, onMouseEnter: _, onMouseDown: A, onClick: h },
                            i ? i(l) : d,
                        );
                    }),
                    $t = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function Gt() {
                    return (
                        (Gt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Gt.apply(this, arguments)
                    );
                }
                const zt = ({
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
                            { className: p()($t.base, m && $t.base__withScroll) },
                            t.map((t) => {
                                const m = `${l}_${t.id}`;
                                return r().createElement(
                                    'div',
                                    { id: l ? m : void 0, key: m, ref: t.id === n ? o : null },
                                    r().createElement(
                                        Vt,
                                        Gt({ size: e, soundHover: a, soundClick: s, classMix: c, itemRenderer: d }, t, {
                                            onClick: i,
                                            isSelected: u.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Kt = {
                        base: 'DropDownList_base_62',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                        scrollMix: 'DropDownList_scrollMix_45',
                    },
                    qt = {
                        handlers: ['click-rail', 'keyboard', 'wheel', 'drag-thumb'],
                        wheelSpeed: 6,
                        suppressScrollX: !0,
                        animationDuration: 300,
                        minScrollbarLength: 20,
                    },
                    Qt = ({
                        parentId: e,
                        size: t = Bt.Medium,
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
                            b = Q(i);
                        (0, n.useEffect)(() => {
                            if (i && !b) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const u = e.find((e) => t.includes(e.id));
                                    return u ? u.id : null;
                                })(u, o);
                                null !== e && A(e);
                            }
                            i || A(null);
                        }, [i, u, o, b]);
                        const g = e ? `${e}_list` : void 0;
                        return r().createElement(
                            'div',
                            { id: g, className: p()(Kt.base, Kt[`base__${t}`], a) },
                            r().createElement(
                                Xt,
                                { selectedItemId: _, isEnabled: l, scrollSettings: qt, classMix: Kt.scrollMix },
                                r().createElement(zt, {
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
                    Zt = {
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
                    Jt = (0, n.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: u,
                            selected: o = [],
                            variant: i = wt.Basic,
                            size: l = Bt.Medium,
                            multiple: a = !1,
                            autoScroll: s = !0,
                            placeholder: c,
                            classMix: d,
                            controlRenderer: m,
                            itemRenderer: E,
                            open: h,
                            tooltipArgs: _,
                            onChanges: A,
                            onOpen: b,
                            onClose: g,
                            onClick: f,
                            onClickOutside: F,
                            onMouseEnter: v,
                            onMouseDown: D,
                            onMouseUp: C,
                            onMouseLeave: w,
                            soundHover: B = 'highlight',
                            soundClick: L = 'play',
                            soundItemHover: y,
                            soundItemClick: S,
                        }) => {
                            const T = (0, n.useRef)(null),
                                k = (0, n.useRef)(null),
                                x = (0, n.useRef)({ open: !1, listAbove: !1 }),
                                M = (0, n.useState)(!1),
                                R = M[0],
                                H = M[1],
                                O = (0, n.useState)(!1),
                                P = O[0],
                                I = O[1],
                                W = (0, n.useState)(window.innerHeight),
                                N = W[0],
                                X = W[1],
                                U = ((e, t) => {
                                    const u = Array.isArray(e) ? e : [e];
                                    return !t && u.length > 1 ? u.slice(0, 1) : u;
                                })(o, a),
                                j = i !== wt.Disabled,
                                V = void 0 === h,
                                $ = Boolean(V ? R : h);
                            var G, z;
                            (G = () => {
                                X(window.innerHeight);
                            }),
                                (z = []),
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', G),
                                        () => window.removeEventListener('resize', G)
                                    ),
                                    z,
                                );
                            const K = (0, n.useCallback)(() => {
                                x.current.open && ((x.current.open = !1), H(!1), g && g());
                            }, [g]);
                            ee($ ? Z.n.ESCAPE : Z.n.NONE, K, $);
                            const q = (0, n.useCallback)(() => {
                                F && F(), V && (H(!1), (x.current.open = !1), g && g());
                            }, [F, g, V]);
                            (0, n.useEffect)(() => {
                                const e = T.current;
                                if (e && $)
                                    return (
                                        Y.c1.register(e, q),
                                        () => {
                                            Y.c1.unregister(e, q);
                                        }
                                    );
                            }, [$, q]),
                                (0, n.useEffect)(() => {
                                    void 0 !== h && (x.current.open = h);
                                }, [h]);
                            const Q = (0, n.useCallback)(() => {
                                if (!T.current || !k.current) return;
                                const e = t && t.current,
                                    u = e ? e.getBoundingClientRect().bottom : N,
                                    n =
                                        T.current.getBoundingClientRect().bottom +
                                            k.current.getBoundingClientRect().height >
                                        u;
                                n !== x.current.listAbove && ((x.current.listAbove = n), I(n));
                            }, [t, N]);
                            (0, n.useEffect)(() => Be(Q), [Q, l, u.length]);
                            const J = (0, n.useCallback)(
                                    (e) => {
                                        const t = U.findIndex((t) => t === e) > -1;
                                        let u = [];
                                        (u = a ? (t ? U.filter((t) => t !== e) : [e, ...U]) : t ? [] : [e]), A && A(u);
                                    },
                                    [a, A, U],
                                ),
                                te = (0, n.useCallback)(() => {
                                    V &&
                                        ((x.current.open = !x.current.open),
                                        H(x.current.open),
                                        x.current.open ? b && b() : g && g());
                                }, [V, b, g]),
                                ue = (0, n.useCallback)(
                                    (e) => {
                                        j && te(), f && f(e);
                                    },
                                    [j, f, te],
                                ),
                                ne = (0, n.useCallback)(
                                    (e, t) => {
                                        f && f(e, t), J(t), !a && te();
                                    },
                                    [f, a, te, J],
                                ),
                                re = (0, n.useCallback)((e) => v && v(e), [v]),
                                oe = (0, n.useCallback)((e) => C && C(e), [C]),
                                ie = (0, n.useCallback)((e) => D && D(e), [D]),
                                le = (0, n.useCallback)((e) => w && w(e), [w]),
                                ae = (0, n.useMemo)(
                                    () =>
                                        u
                                            .filter((e) => U.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [u, U],
                                ),
                                se = (0, n.useMemo)(() => u.filter((e) => U.includes(e.id)), [u, U]),
                                ce = m ? m(se) : void 0;
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: T,
                                    className: p()(Zt.base, Zt[`base__${l}`], d && d.base),
                                    onMouseEnter: re,
                                    onMouseUp: oe,
                                    onMouseDown: ie,
                                    onMouseLeave: le,
                                },
                                r().createElement(
                                    'div',
                                    { className: p()(Zt.control, $ && Zt.control__down) },
                                    r().createElement(
                                        Ct,
                                        { tooltipArgs: _ },
                                        r().createElement(St, {
                                            parentId: e,
                                            size: l,
                                            variant: i,
                                            isOpen: $,
                                            placeholder: c,
                                            label: ae,
                                            classMix: d && d.control,
                                            onClick: ue,
                                            soundHover: B,
                                            soundClick: L,
                                            customControl: ce,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        ref: k,
                                        className: p()(
                                            Zt.list,
                                            $ ? Zt.list__down : Zt.list__up,
                                            P ? Zt.list__above : Zt.list__under,
                                        ),
                                    },
                                    r().createElement(Qt, {
                                        parentId: e,
                                        size: l,
                                        items: u,
                                        selectedIds: U,
                                        isOpen: $,
                                        autoScroll: s,
                                        classMix: d && d.list,
                                        itemClassMix: d && d.item,
                                        itemRenderer: E,
                                        onClick: ne,
                                        soundHover: y || B,
                                        soundClick: S || L,
                                    }),
                                ),
                            );
                        },
                    ),
                    eu = 'NameDropdown_title_4b',
                    tu = 'NameDropdown_dropdownList_6e',
                    uu = ({ nameList: e, selectedIndex: t, title: u, onChange: n, onOpen: o }) =>
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement('div', { className: eu }, u),
                            r().createElement(Jt, {
                                items: e,
                                selected: t,
                                onChanges: (e) => {
                                    null != e && e.length && n(e[0]);
                                },
                                onOpen: o,
                                classMix: { list: tu },
                            }),
                        ),
                    nu = 'DocumentChangeContent_base_c6',
                    ru = 'DocumentChangeContent_firstName_18',
                    ou = 'DocumentChangeContent_lastName_0b',
                    iu = (0, Ke.Pi)(() => {
                        const e = ft(),
                            t = e.model,
                            u = e.controls,
                            n = st(Ze.DocumentChange);
                        return r().createElement(
                            'div',
                            { className: nu },
                            r().createElement(
                                'div',
                                { className: ru },
                                r().createElement(uu, {
                                    title: R.strings.dialogs.documentChangeDialog.dropdown.firstName(),
                                    nameList: t.computes.getDropDownFirstNames(),
                                    selectedIndex: t.firstNameIndex.get(),
                                    onChange: (e) => {
                                        u.onChangeFirstName(e), n(tt.FirstnameSelect);
                                    },
                                    onOpen: () => n(tt.Firstname),
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: ou },
                                r().createElement(uu, {
                                    title: R.strings.dialogs.documentChangeDialog.dropdown.lastName(),
                                    nameList: t.computes.getDropDownLastNames(),
                                    selectedIndex: t.lastNameIndex.get(),
                                    onChange: (e) => {
                                        u.onChangeLastName(e), n(tt.LastnameSelect);
                                    },
                                    onOpen: () => n(tt.Lastname),
                                }),
                            ),
                        );
                    }),
                    lu = ['onClose', 'buttons', 'isShown', 'displayFlags'];
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
                const su = (e) => {
                    let t = e.onClose,
                        u = e.buttons,
                        n = e.isShown,
                        o = e.displayFlags,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, lu);
                    return r().createElement(
                        ze,
                        au(
                            {
                                onClose: t,
                                buttons: u,
                                displayFlags: o,
                                isShown: n,
                                content: r().createElement(iu, null),
                            },
                            i,
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    P().render(
                        r().createElement(
                            gt,
                            null,
                            r().createElement(H, null, r().createElement(Ye, { Template: su })),
                        ),
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
        (__webpack_require__.j = 942),
        (() => {
            var e = { 942: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(2784));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
