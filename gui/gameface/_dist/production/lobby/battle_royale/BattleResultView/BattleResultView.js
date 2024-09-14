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
                var a =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function r(e, t) {
                    if (!a) throw new Error('No element matching method supported');
                    return a.call(e, t);
                }
                function s(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function i(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return r(e, t);
                    });
                }
                var o = 'ps',
                    l = {
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
                    m = { x: null, y: null },
                    d = { immediately: !1 };
                function _(e, t, u) {
                    void 0 === u && (u = {});
                    var n = e.element.classList,
                        a = c.scrolling(t);
                    n.contains(a) ? clearTimeout(m[t]) : n.add(a);
                }
                function E(e, t, u) {
                    void 0 === u && (u = {});
                    Object.assign(d, u).immediately
                        ? e.isAlive && e.element.classList.remove(c.scrolling(t))
                        : (m[t] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(c.scrolling(t));
                          }, e.settings.scrollingThreshold));
                }
                var h = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    b = { isEmpty: { configurable: !0 } };
                (h.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (h.prototype.unbind = function (e, t) {
                        var u = this;
                        this.handlers[e] = this.handlers[e].filter(function (n) {
                            return !(!t || n === t) || (u.element.removeEventListener(e, n, !1), !1);
                        });
                    }),
                    (h.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (b.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(h.prototype, b);
                var A = function () {
                    this.eventElements = [];
                };
                function p(e) {
                    return parseInt(e, 10) || 0;
                }
                (A.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new h(e)), this.eventElements.push(t)), t;
                }),
                    (A.prototype.bind = function (e, t, u) {
                        this.eventElement(e).bind(t, u);
                    }),
                    (A.prototype.unbind = function (e, t, u) {
                        var n = this.eventElement(e);
                        n.unbind(t, u), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
                    }),
                    (A.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (A.prototype.once = function (e, t, u) {
                        var n = this.eventElement(e);
                        n.bind(t, function e(a) {
                            n.unbind(t, e), u(a);
                        });
                    });
                var g = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function F() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function D(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var B = function (e, t, u, n, a, r) {
                    var s;
                    if ((void 0 === n && (n = !0), void 0 === a && (a = !1), void 0 === r && (r = !1), 'top' === t))
                        s = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        s = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, u, n, a, r) {
                        var s = u[0],
                            i = u[1],
                            o = u[2],
                            l = u[3],
                            c = u[4],
                            m = u[5];
                        void 0 === n && (n = !0);
                        void 0 === a && (a = !1);
                        void 0 === r && (r = !1);
                        var d = e.element;
                        if (!e.reach) return;
                        (e.reach[l] = null), d[o] < 1 && (e.reach[l] = 'start');
                        d[o] > e[s] - e[i] - 1 && (e.reach[l] = 'end');
                        t &&
                            !a &&
                            (d.dispatchEvent(D('ps-scroll-' + l)),
                            t < 0
                                ? d.dispatchEvent(D('ps-scroll-' + c))
                                : t > 0 && d.dispatchEvent(D('ps-scroll-' + m)),
                            n &&
                                (function (e, t) {
                                    _(e, t), E(e, t);
                                })(e, l));
                        e.reach[l] && (t || r) && d.dispatchEvent(D('ps-' + l + '-reach-' + e.reach[l]));
                    })(e, u, s, n, a, r);
                };
                var v = function (e, t, n, a) {
                    void 0 === t && (t = !1), void 0 === n && (n = 0), void 0 === a && (a = !1);
                    var r = e.element;
                    if (r) {
                        if (
                            ((e.containerWidth = Math.round(r.getBoundingClientRect().width)),
                            (e.containerHeight = Math.round(r.getBoundingClientRect().height)),
                            (e.contentWidth = Math.round(r.scrollWidth) - 2 * n),
                            (e.contentHeight = Math.round(r.scrollHeight)),
                            !a)
                        ) {
                            e.contentWidth = Math.round(r.scrollWidth) - 2 * n;
                            var o = e.contentWidth - e.containerWidth + n;
                            r.scrollLeft < n ? (r.scrollLeft = n) : r.scrollLeft > o && (r.scrollLeft = o);
                        }
                        var m = Math.floor(r.scrollTop),
                            d = Math.floor(r.scrollLeft) - n,
                            _ = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        r.contains(e.scrollbarXRail) ||
                            (i(r, l.rail('x')).forEach(function (e) {
                                return s(e);
                            }),
                            r.appendChild(e.scrollbarXRail)),
                            r.contains(e.scrollbarYRail) ||
                                (i(r, l.rail('y')).forEach(function (e) {
                                    return s(e);
                                }),
                                r.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * _ - 15 * _),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = C(e, p((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                  (e.scrollbarXLeft = p(
                                      ((e.negativeScrollAdjustment + d) * (e.railXWidth - e.scrollbarXWidth)) /
                                          (e.contentWidth - e.containerWidth),
                                  )),
                                  e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                : (e.scrollbarXActive = !1),
                            !e.settings.suppressScrollY &&
                            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                ? ((e.scrollbarYActive = !0),
                                  (e.railYHeight = e.containerHeight - e.railYMarginHeight * _ - 15 * _),
                                  (e.railYRatio = e.containerHeight / e.railYHeight),
                                  (e.scrollbarYHeight = C(e, p((e.railYHeight * e.containerHeight) / e.contentHeight))),
                                  (e.scrollbarYTop = p(
                                      (m * (e.railYHeight - e.scrollbarYHeight)) /
                                          (e.contentHeight - e.containerHeight),
                                  )))
                                : (e.scrollbarYActive = !1),
                            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                            (function (e, t, n) {
                                var a = { width: t.railXWidth },
                                    r = Math.floor(e.scrollTop);
                                t.isRtl
                                    ? (a.left =
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (a.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (a.bottom = t.scrollbarXBottom - r)
                                    : (a.top = t.scrollbarXTop + r);
                                u(t.scrollbarXRail, a);
                                var s = { top: r, height: t.railYHeight };
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
                                      : (s.left = t.scrollbarYLeft + e.scrollLeft);
                                u(t.scrollbarYRail, s),
                                    u(t.scrollbarX, {
                                        left: t.scrollbarXLeft,
                                        width: t.scrollbarXWidth - t.railBorderXWidth * n,
                                    }),
                                    u(t.scrollbarY, {
                                        top: t.scrollbarYTop,
                                        height: t.scrollbarYHeight - t.railBorderYWidth * n,
                                    });
                            })(r, e, _),
                            e.scrollbarXButtonStart.classList.toggle('disabled', d < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', d + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', r.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                r.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (r.classList.add(c.active('x')), B(e, 'left', d - e.lastScrollLeft, !0, t))
                                : (r.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (r.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (r.classList.add(c.active('y')), B(e, 'top', r.scrollTop - e.lastScrollTop, !0, t))
                                : (r.classList.remove(c.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (r.scrollTop = 0)),
                            (e.lastScrollTop = m),
                            (e.lastScrollLeft = d),
                            (e.scrollTopPercent = r.scrollTop / r.scrollHeight),
                            (e.scrollLeftPercent = r.scrollLeft / r.scrollWidth);
                    }
                };
                function C(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
                    );
                }
                var f = {
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
                            a = e.y1,
                            r = e.x2,
                            s = e.y2;
                        return (
                            1 -
                            (n * ((t = u), Math.pow(t, 3)) +
                                a *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(u) +
                                r *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(u) +
                                s *
                                    (function (e) {
                                        return Math.pow(1 - e, 3);
                                    })(u))
                        );
                    },
                    S = { breakBounds: !1, startBound: 0, endBound: 0 },
                    L = function (e) {
                        var t = e.scrollableDomEle,
                            u = e.onAnimationCompleteCallback,
                            n = e.direction,
                            a = e.onRefUpdateCallback,
                            r = e.duration,
                            s = e.cubicBezierPoints,
                            i = e.easingPreset,
                            o = e.scrollAmount,
                            l = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = S);
                        var m = null,
                            d = null,
                            _ = null,
                            E = null,
                            h = t === window,
                            b = ['left', 'right'].indexOf(n) > -1,
                            A = ['right', 'bottom'].indexOf(n) > -1;
                        b
                            ? ((d = h ? 'scrollX' : 'scrollLeft'),
                              (E = h ? 'innerWidth' : 'width'),
                              (_ = 'scrollWidth'))
                            : ((d = h ? 'scrollY' : 'scrollTop'),
                              (E = h ? 'innerHeight' : 'height'),
                              (_ = 'scrollHeight'));
                        var p = t[d],
                            g = (function (e) {
                                var t,
                                    u = e.isWindow,
                                    n = e.scrollableDomEle,
                                    a = e.elementLengthProp,
                                    r = e.initialScrollPosition,
                                    s = e.isHorizontalDirection,
                                    i = e.scrollLengthProp,
                                    o = e.direction;
                                if (u) {
                                    var l = document.documentElement;
                                    t = s ? l.offsetWidth : l.offsetHeight;
                                } else t = (n[i] - n.getBoundingClientRect()[a]) | 0;
                                return ['left', 'top'].includes(o) ? r : t - r;
                            })({
                                isWindow: h,
                                scrollableDomEle: t,
                                elementLengthProp: E,
                                initialScrollPosition: p,
                                isHorizontalDirection: b,
                                scrollLengthProp: _,
                                direction: n,
                            });
                        !isNaN(o) && o < g && (g = o);
                        var F = function e(n) {
                            if (!l || !l()) {
                                var o = n - m,
                                    _ = (function (e) {
                                        var t = e.easingPreset,
                                            u = e.cubicBezierPoints,
                                            n = e.duration,
                                            a = e.runTime / n;
                                        if (f.hasOwnProperty(t)) return f[t](a);
                                        if (
                                            u &&
                                            !isNaN(u.x1) &&
                                            !isNaN(u.y1) &&
                                            !isNaN(u.x2) &&
                                            !isNaN(u.y2) &&
                                            u.x1 >= 0 &&
                                            u.x2 >= 0
                                        )
                                            return w({ percentTimeElapsed: a, x1: u.x1, x2: u.x2, y1: u.y1, y2: u.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: i, cubicBezierPoints: s, runTime: o, duration: r });
                                if (!isNaN(_)) {
                                    var E = Math.round(_ * g),
                                        F = A ? E + p : g - E;
                                    if (
                                        (c.breakBounds &&
                                            (F < c.startBound
                                                ? (F = c.startBound)
                                                : F > c.endBound && (F = c.endBound)),
                                        o < r)
                                    ) {
                                        if (h) {
                                            var D = b ? F : 0,
                                                B = b ? 0 : F;
                                            window.scrollTo(D, B);
                                        } else t[d] = F;
                                        a && a(F), requestAnimationFrame(e);
                                    } else u && u();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (m = e), F(e);
                        });
                    },
                    y = function (e) {
                        var t = e.axis,
                            u = e.cursorPositionOnRail,
                            n = e.direction,
                            a = e.i,
                            r = (function (e) {
                                var t = e.axis,
                                    u = e.i,
                                    n = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var a = u.scrollbarY.offsetTop,
                                        r = a + u.scrollbarYHeight;
                                    return n >= a && n <= r;
                                }
                                var s = u.scrollbarX.offsetLeft,
                                    i = s + u.scrollbarXWidth;
                                return n >= s && n <= i;
                            })({ axis: t, i: a, cursorPositionOnRail: u });
                        return r
                            ? ((function (e) {
                                  var t = e.axis,
                                      u = e.i,
                                      n = e.cursorPositionOnRail,
                                      a = (function (e, t) {
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
                                      r = (n - a.scrollbar / 2) / a.rail,
                                      s = Math.round(Math.min(a.maxScroll, Math.max(0, a.content * r)));
                                  'y' === t ? (u.element.scrollTop = s) : (u.element.scrollLeft = s);
                              })({ axis: t, i: a, cursorPositionOnRail: u }),
                              !0)
                            : ('y' === t
                                  ? (a.element.scrollTop += n * a.containerHeight)
                                  : (a.element.scrollLeft += n * a.containerWidth),
                              !1);
                    },
                    P = function (e, t, u) {
                        return function (n) {
                            t = t.toLowerCase();
                            var a = null,
                                r = function () {
                                    if (1 === n.buttons) {
                                        if (
                                            !n.target.closest('.ps__rail-' + t) ||
                                            !n.target.closest('.ps__track_' + t)
                                        ) {
                                            var r = (function (e) {
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
                                                s = r.cursorPosition - r.windowScrolled - r.elementPosition,
                                                i = (function (e) {
                                                    var t = e.axis,
                                                        u = e.cursorPositionOnRail,
                                                        n = e.i;
                                                    return u > ('y' === t ? n.scrollbarYTop : n.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: s, i: e });
                                            y({ axis: t, cursorPositionOnRail: s, direction: i, i: e }) &&
                                                clearTimeout(a),
                                                v(e, !1, u);
                                        }
                                        n.stopPropagation();
                                    }
                                };
                            r(),
                                (a = setInterval(r, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(a);
                                });
                        };
                    };
                function T(e, t, u) {
                    var n = u[0],
                        a = u[1],
                        r = u[2],
                        s = u[3],
                        i = u[4],
                        o = u[5],
                        l = u[6],
                        m = u[7],
                        d = u[8],
                        h = e.element,
                        b = null,
                        A = null,
                        g = null;
                    function F(u) {
                        (h[l] = p(b + g * (u[r] - A))), _(e, m), v(e, !1, t), u.stopPropagation(), u.preventDefault();
                    }
                    function D() {
                        E(e, m), e[d].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', F);
                    }
                    e.event.bind(e[i], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((b = h[l]),
                            (A = t[r]),
                            (g = (e[a] - e[n]) / (e[s] - e[o])),
                            e.event.bind(e.ownerDocument, 'mousemove', F),
                            e.event.once(e.ownerDocument, 'mouseup', D),
                            e[d].classList.add(c.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var R = 1e3,
                    x = {
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
                            T(e, t, [
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
                                T(e, t, [
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
                                    r(u, ':hover')
                                ) {
                                    var a,
                                        s = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (s) {
                                        if ('IFRAME' === s.tagName) s = s.contentDocument.activeElement;
                                        else for (; s.shadowRoot; ) s = s.shadowRoot.activeElement;
                                        if (
                                            r((a = s), 'input,[contenteditable]') ||
                                            r(a, 'select,[contenteditable]') ||
                                            r(a, 'textarea,[contenteditable]') ||
                                            r(a, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var i = 0,
                                        o = 0;
                                    switch (n.which) {
                                        case 37:
                                            i = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            o = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            i = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            o = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            o = n.shiftKey ? e.containerHeight : -e.containerHeight;
                                            break;
                                        case 33:
                                            o = e.containerHeight;
                                            break;
                                        case 34:
                                            o = -e.containerHeight;
                                            break;
                                        case 36:
                                            o = e.contentHeight;
                                            break;
                                        case 35:
                                            o = -e.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.settings.suppressScrollX && 0 !== i) ||
                                        (e.settings.suppressScrollY && 0 !== o) ||
                                        ((u.scrollTop -= o),
                                        (u.scrollLeft += i),
                                        v(e, !1, t),
                                        (function (t, n) {
                                            var a = Math.floor(u.scrollTop);
                                            if (0 === t) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === a && n > 0) ||
                                                    (a >= e.contentHeight - e.containerHeight && n < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var r = u.scrollLeft;
                                            if (0 === n) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === r && t < 0) ||
                                                    (r >= e.contentWidth - e.containerWidth && t > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(i, o) && n.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, u) {
                            var n = e.element;
                            function a(a) {
                                var r = (function (e) {
                                        var t = -1 * e.deltaX,
                                            u = e.deltaY;
                                        return (
                                            (void 0 !== t && void 0 !== u) ||
                                                ((t = (-1 * e.wheelDeltaX) / 6), (u = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (u *= 10)),
                                            t != t && u != u && ((t = 0), (u = e.wheelDelta)),
                                            e.shiftKey ? [-u, -t] : [t, u]
                                        );
                                    })(a),
                                    s = r[0],
                                    i = r[1];
                                if (
                                    !(function (e, u, a) {
                                        if (!g.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(e)) return !1;
                                        for (var r = e; r && r !== n; ) {
                                            if (r.classList.contains(l.consuming)) return !0;
                                            var s = t(r);
                                            if (
                                                [s.overflow, s.overflowX, s.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var i = r.scrollHeight - r.clientHeight;
                                                if (
                                                    i > 0 &&
                                                    !((0 === r.scrollTop && a > 0) || (r.scrollTop === i && a < 0))
                                                )
                                                    return !0;
                                                var o = r.scrollWidth - r.clientWidth;
                                                if (
                                                    o > 0 &&
                                                    !((0 === r.scrollLeft && u < 0) || (r.scrollLeft === o && u > 0))
                                                )
                                                    return !0;
                                            }
                                            r = r.parentNode;
                                        }
                                        return !1;
                                    })(a.target, s, i)
                                ) {
                                    var o = !1,
                                        c = (s * e.settings.wheelSpeed) | 0,
                                        m = (i * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (i ? (n.scrollTop -= m) : (n.scrollTop += c), (o = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (s ? (n.scrollLeft += c) : (n.scrollLeft -= m), (o = !0))
                                        : ((n.scrollTop -= m), (n.scrollLeft += c)),
                                        v(e, !1, u),
                                        (o =
                                            o ||
                                            (function (t, u) {
                                                var a = Math.floor(n.scrollTop),
                                                    r = 0 === n.scrollTop,
                                                    s = a + n.offsetHeight === n.scrollHeight,
                                                    i = 0 === n.scrollLeft,
                                                    o = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                                return (
                                                    !(Math.abs(u) > Math.abs(t) ? r || s : i || o) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(s, i)),
                                        o && !a.ctrlKey && (a.stopPropagation(), a.preventDefault());
                                }
                            }
                            e.event.bind(n, 'wheel', a),
                                void 0 !== window.onmousewheel && e.event.bind(n, 'mousewheel', a);
                        },
                        touch: function (e, u) {
                            if (g.supportsTouch || g.supportsIePointer) {
                                var n = e.element,
                                    a = {},
                                    r = 0,
                                    s = {},
                                    i = null;
                                g.supportsTouch
                                    ? (e.event.bind(n, 'touchstart', d),
                                      e.event.bind(n, 'touchmove', _),
                                      e.event.bind(n, 'touchend', E))
                                    : g.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(n, 'pointerdown', d),
                                            e.event.bind(n, 'pointermove', _),
                                            e.event.bind(n, 'pointerup', E))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(n, 'MSPointerDown', d),
                                            e.event.bind(n, 'MSPointerMove', _),
                                            e.event.bind(n, 'MSPointerUp', E)));
                            }
                            function o(t, a) {
                                (n.scrollTop -= a), (n.scrollLeft -= t), v(e, !1, u);
                            }
                            function c(e) {
                                return e.targetTouches ? e.targetTouches[0] : e;
                            }
                            function m(e) {
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
                            function d(e) {
                                if (m(e)) {
                                    var t = c(e);
                                    (a.pageX = t.pageX),
                                        (a.pageY = t.pageY),
                                        (r = new Date().getTime()),
                                        null !== i && clearInterval(i);
                                }
                            }
                            function _(u) {
                                if (m(u)) {
                                    var i = c(u),
                                        d = { pageX: i.pageX, pageY: i.pageY },
                                        _ = d.pageX - a.pageX,
                                        E = d.pageY - a.pageY;
                                    if (
                                        (function (e, u, a) {
                                            if (!n.contains(e)) return !1;
                                            for (var r = e; r && r !== n; ) {
                                                if (r.classList.contains(l.consuming)) return !0;
                                                var s = t(r);
                                                if (
                                                    [s.overflow, s.overflowX, s.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var i = r.scrollHeight - r.clientHeight;
                                                    if (
                                                        i > 0 &&
                                                        !((0 === r.scrollTop && a > 0) || (r.scrollTop === i && a < 0))
                                                    )
                                                        return !0;
                                                    var o = r.scrollLeft - r.clientWidth;
                                                    if (
                                                        o > 0 &&
                                                        !(
                                                            (0 === r.scrollLeft && u < 0) ||
                                                            (r.scrollLeft === o && u > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                r = r.parentNode;
                                            }
                                            return !1;
                                        })(u.target, _, E)
                                    )
                                        return;
                                    o(_, E), (a = d);
                                    var h = new Date().getTime(),
                                        b = h - r;
                                    b > 0 && ((s.x = _ / b), (s.y = E / b), (r = h)),
                                        (function (t, u) {
                                            var a = Math.floor(n.scrollTop),
                                                r = n.scrollLeft,
                                                s = Math.abs(t),
                                                i = Math.abs(u);
                                            if (i > s) {
                                                if (
                                                    (u < 0 && a === e.contentHeight - e.containerHeight) ||
                                                    (u > 0 && 0 === a)
                                                )
                                                    return 0 === window.scrollY && u > 0 && g.isChrome;
                                            } else if (
                                                s > i &&
                                                ((t < 0 && r === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === r))
                                            )
                                                return !0;
                                            return !0;
                                        })(_, E) && u.preventDefault();
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
                                                  : (o(30 * s.x, 30 * s.y), (s.x *= 0.8), (s.y *= 0.8))
                                              : clearInterval(i);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var u = e.element,
                                n = null,
                                a = !1,
                                r = 0,
                                s = 0,
                                i = 0;
                            function o() {
                                e.onScroll();
                            }
                            function l(n, a, r, s) {
                                void 0 === r && (r = null),
                                    void 0 === s && (s = !1),
                                    L({
                                        scrollableDomEle: u,
                                        direction: 'right',
                                        onRefUpdateCallback: o,
                                        duration: a,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: n,
                                        onCheckForBreakCallback: r,
                                        boundsInfo: {
                                            breakBounds: s,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    });
                            }
                            function m() {
                                if (a) return a;
                            }
                            function d() {
                                i = 0;
                            }
                            function h(a) {
                                if (e.scrollbarXActive) {
                                    var o = n - a.screenX;
                                    (u.scrollLeft += o), (n = a.screenX);
                                    var l = new Date().getTime();
                                    if (((r = (o / (l - s)) * 1e3), (s = l), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === u.scrollLeft || u.scrollLeft === c
                                            ? 0 === i && (i = window.setTimeout(d, 250))
                                            : 0 !== i && (window.clearTimeout(i), (i = 0));
                                    }
                                    _(e, 'x'),
                                        _(e, 'dragging', { immediately: !0 }),
                                        a.stopPropagation(),
                                        a.preventDefault();
                                }
                            }
                            function b(e) {
                                (n = e.screenX),
                                    (a = !0),
                                    requestAnimationFrame(function () {
                                        a = !1;
                                    }),
                                    (s = new Date().getTime());
                            }
                            function A(n) {
                                var a = e.contentWidth - e.containerWidth + t;
                                if (u.scrollLeft < t) l(t - u.scrollLeft, R, m);
                                else if (u.scrollLeft > a) l(a - u.scrollLeft, R, m);
                                else {
                                    new Date().getTime() - s < 100 && l(r / 4, R, m, !0);
                                }
                                E(e, 'x'),
                                    E(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(c.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', h);
                            }
                            function p() {
                                a = !0;
                            }
                            u.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((n = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', h),
                                        e.event.once(e.ownerDocument, 'mouseup', A),
                                        e.event.once(e.ownerDocument, 'mousedown', b),
                                        e.event.once(u, 'wheel', p),
                                        e.scrollbarXRail.classList.add(c.clicking),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    k = function (e, a) {
                        var r = this;
                        if (
                            (void 0 === a && (a = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var s in ((this.element = e),
                        e.classList.add(o),
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
                        a))
                            r.settings[s] = a[s];
                        (this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null);
                        var i,
                            m,
                            d = function () {
                                return e.classList.add(c.focus);
                            },
                            _ = function () {
                                return e.classList.remove(c.focus);
                            };
                        (this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((m = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (i = e.scrollLeft < 0),
                                (e.scrollLeft = m),
                                i)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new A()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = n(l.rail('x'))),
                            (this.scrollbarXButtonStart = n(l.buttonStart('x'))),
                            (this.scrollbarXButtonEnd = n(l.buttonEnd('x'))),
                            (this.scrollbarXTrack = n(l.track('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = n(l.thumb('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', d),
                            this.event.bind(this.scrollbarX, 'blur', _),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = n(l.rail('y'))),
                            (this.scrollbarYButtonStart = n(l.buttonStart('y'))),
                            (this.scrollbarYButtonEnd = n(l.buttonEnd('y'))),
                            (this.scrollbarYTrack = n(l.track('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = n(l.thumb('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', d),
                            this.event.bind(this.scrollbarY, 'blur', _),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            F().then(function () {
                                var n = t(r.scrollbarXRail);
                                (r.scrollbarXBottom = parseInt(n.bottom, 10)),
                                    isNaN(r.scrollbarXBottom)
                                        ? ((r.isScrollbarXUsingBottom = !1), (r.scrollbarXTop = p(n.top)))
                                        : (r.isScrollbarXUsingBottom = !0),
                                    (r.railBorderXWidth = p(n.borderLeftWidth) + p(n.borderRightWidth)),
                                    u(r.scrollbarXRail, { display: 'block' }),
                                    (r.railXMarginWidth = p(n.marginLeft) + p(n.marginRight)),
                                    u(r.scrollbarXRail, { display: '' }),
                                    (r.railXWidth = null),
                                    (r.railXRatio = null);
                                var a = t(r.scrollbarYRail);
                                (r.scrollbarYRight = parseInt(a.right, 10)),
                                    isNaN(r.scrollbarYRight)
                                        ? ((r.isScrollbarYUsingRight = !1), (r.scrollbarYLeft = p(a.left)))
                                        : (r.isScrollbarYUsingRight = !0),
                                    (r.scrollbarYOuterWidth = r.isRtl
                                        ? (function (e) {
                                              var u = t(e);
                                              return (
                                                  p(u.width) +
                                                  p(u.paddingLeft) +
                                                  p(u.paddingRight) +
                                                  p(u.borderLeftWidth) +
                                                  p(u.borderRightWidth)
                                              );
                                          })(r.scrollbarY)
                                        : null),
                                    (r.railBorderYWidth = p(a.borderTopWidth) + p(a.borderBottomWidth)),
                                    u(r.scrollbarYRail, { display: 'block' }),
                                    (r.railYMarginHeight = p(a.marginTop) + p(a.marginBottom)),
                                    u(r.scrollbarXRail, { display: '' }),
                                    u(r.scrollbarYRail, { display: '' }),
                                    (r.railYHeight = null),
                                    (r.railYRatio = null),
                                    (r.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= r.contentWidth - r.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= r.contentHeight - r.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (r.isAlive = !0),
                                    r.settings.handlers.forEach(function (e) {
                                        return x[e](r, r.settings.overScrollWidth);
                                    }),
                                    (r.boundHandleButtonEnter = r.handleMouseEnter.bind(r)),
                                    (r.boundHandleMouseLeave = r.handleMouseLeave.bind(r)),
                                    (r.boundHandleMouseEnter = r.handleMouseEnter.bind(r)),
                                    (r.boundPlayClickSound = r.playClickSound.bind(r)),
                                    r.scrollbarYButtonStart.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarYButtonEnd.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarXButtonStart.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarXButtonEnd.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarXButtonStart.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarXButtonEnd.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarYButtonStart.addEventListener('mouseenter', r.boundHandleButtonEnter),
                                    r.scrollbarYButtonEnd.addEventListener('mouseenter', r.boundHandleButtonEnter),
                                    r.scrollbarYButtonStart.addEventListener('mouseleave', r.boundHandleMouseLeave),
                                    r.scrollbarYButtonEnd.addEventListener('mouseleave', r.boundHandleMouseLeave),
                                    r.scrollbarY.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarX.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarY.addEventListener('mouseleave', r.boundHandleMouseLeave),
                                    r.scrollbarY.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarX.addEventListener('mousedown', r.boundPlayClickSound),
                                    (r.lastScrollTop = Math.floor(e.scrollTop)),
                                    (r.lastScrollLeft = e.scrollLeft),
                                    (r.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (r.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    r.event.bind(r.element, 'scroll', function (e) {
                                        return r.onScroll(e);
                                    }),
                                    r.settings.enableHorizontalScroll &&
                                        r.event.bind(r.element, 'wheel', function (e) {
                                            return r.onWheel(e);
                                        }),
                                    v(r, !1, r.settings.overScrollWidth, !1);
                            });
                    };
                (k.prototype._getAnimationSettings = function (e, t, u, n) {
                    var a = this,
                        r = 0;
                    return (
                        null !== this.element &&
                            (r = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - r,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                v(a, !0, a.settings.overScrollWidth, !1), u && u(e);
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
                                p(t(this.scrollbarXRail).marginLeft) + p(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                p(t(this.scrollbarYRail).marginTop) + p(t(this.scrollbarYRail).marginBottom)),
                            u(this.scrollbarXRail, { display: 'none' }),
                            u(this.scrollbarYRail, { display: 'none' }),
                            F().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    v(e, !1, e.settings.overScrollWidth, !1),
                                    B(e, 'top', 0, !1, !1, !0),
                                    B(e, 'left', 0, !1, !1, !0),
                                    u(e.scrollbarXRail, { display: '' }),
                                    u(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (k.prototype.setScrollLeft = function (e, t, u) {
                        L(this._getAnimationSettings(e, 'right', t, u));
                    }),
                    (k.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (k.prototype.setScrollTop = function (e, t, u) {
                        L(this._getAnimationSettings(e, 'bottom', t, u));
                    }),
                    (k.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (k.prototype.onScroll = function (e) {
                        this.isAlive && v(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (k.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (v(this, !1, this.settings.overScrollWidth, !1),
                            B(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
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
            67: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => j });
                var n = {};
                u.r(n), u.d(n, { mouse: () => m, onResize: () => l });
                var a = {};
                u.r(a),
                    u.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => _,
                        getSize: () => d,
                        graphicsQuality: () => E,
                    });
                var r = {};
                u.r(r), u.d(r, { getBgUrl: () => b, getTextureUrl: () => h });
                var s = {};
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.r(s),
                    u.d(s, {
                        addModelObserver: () => y,
                        addPreloadTexture: () => w,
                        children: () => r,
                        displayStatus: () => A,
                        displayStatusIs: () => U,
                        events: () => p,
                        extraSize: () => G,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => k,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => $,
                        getScale: () => M,
                        getSize: () => T,
                        getViewGlobalPosition: () => x,
                        isEventHandled: () => Y,
                        isFocused: () => W,
                        pxToRem: () => N,
                        remToPx: () => I,
                        resize: () => R,
                        sendEvent: () => f,
                        setAnimateWindow: () => O,
                        setEventHandled: () => H,
                        setInputPaddingsRem: () => S,
                        setSidePaddingsRem: () => P,
                        whenTutorialReady: () => z,
                    });
                const l = i('clientResized'),
                    c = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const m = (function () {
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
                    const a = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        s = c[t]((e) => u([e, 'outside']));
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
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
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function h(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function b(e, t, u) {
                    return `url(${h(e, t, u)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    p = {
                        onTextureFrozen: i('self.onTextureFrozen'),
                        onTextureReady: i('self.onTextureReady'),
                        onDomBuilt: i('self.onDomBuilt'),
                        onLoaded: i('self.onLoaded'),
                        onDisplayChanged: i('self.onShowingStatusChanged'),
                        onFocusUpdated: i('self.onFocusChanged'),
                        children: {
                            onAdded: i('children.onAdded'),
                            onLoaded: i('children.onLoaded'),
                            onRemoved: i('children.onRemoved'),
                            onAttached: i('children.onAttached'),
                            onTextureReady: i('children.onTextureReady'),
                            onRequestPosition: i('children.requestPosition'),
                        },
                    },
                    g = ['args'];
                const F = 2,
                    D = 16,
                    B = 32,
                    v = 64,
                    C = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, g);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    f = {
                        close(e) {
                            C('popover' === e ? F : B);
                        },
                        minimize() {
                            C(v);
                        },
                        move(e) {
                            C(D, { isMouseEvent: !0, on: e });
                        },
                    };
                function w(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function S(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function L(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function y(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function P(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function R(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function x(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: I(t.x), y: I(t.y) };
                }
                function k() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function N(e) {
                    return viewEnv.pxToRem(e);
                }
                function I(e) {
                    return viewEnv.remToPx(e);
                }
                function O(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function W() {
                    return viewEnv.isFocused();
                }
                function H() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function $() {
                    return viewEnv.getShowingStatus();
                }
                const U = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    G = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : p.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    j = { view: s, client: a };
            },
            521: (e, t, u) => {
                'use strict';
                let n, a;
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
                    })(a || (a = {}));
            },
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(67);
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
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                a.__instance = void 0;
                const r = a;
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
                u.d(t, { Sw: () => r.Z, B3: () => l, Z5: () => s, B0: () => o, c9: () => g, ry: () => p, Sy: () => F });
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
                const a = n;
                var r = u(358);
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
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(521),
                    E = u(67);
                const h = ['args'];
                function b(e, t, u, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function s(e) {
                                            b(r, n, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            b(r, n, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    g = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, h);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    F = () => g(o.CLOSE),
                    D = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var B = u(572);
                const v = a.instance,
                    C = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                m = i.width,
                                d = i.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(d),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: A(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, F);
                        },
                        handleViewEvent: g,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = C;
            },
            881: (e, t, u) => {
                'use strict';
                var n = u(179),
                    a = u.n(n);
                const r = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var s = u(67);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e, t, u) {
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
                        a = (function (e, t) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
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
                })(o || (o = {}));
                const c = s.O.client.getSize('rem'),
                    m = c.width,
                    d = c.height,
                    _ = Object.assign({ width: m, height: d }, l(m, d, i)),
                    E = (0, n.createContext)(_),
                    h = ['children'];
                const b = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, h);
                    const a = (0, n.useContext)(E),
                        s = a.extraLarge,
                        i = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        m = a.extraLargeWidth,
                        d = a.largeWidth,
                        _ = a.mediumWidth,
                        b = a.smallWidth,
                        A = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        g = a.largeHeight,
                        F = a.mediumHeight,
                        D = a.smallHeight,
                        B = a.extraSmallHeight,
                        v = { extraLarge: p, large: g, medium: F, small: D, extraSmall: B };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && s) return t;
                        if (u.large && i) return t;
                        if (u.medium && o) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && m) return r(t, u, v);
                        if (u.largeWidth && d) return r(t, u, v);
                        if (u.mediumWidth && _) return r(t, u, v);
                        if (u.smallWidth && b) return r(t, u, v);
                        if (u.extraSmallWidth && A) return r(t, u, v);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && g) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && D) return t;
                            if (u.extraSmallHeight && B) return t;
                        }
                    }
                    return null;
                };
                b.defaultProps = {
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
                (0, n.memo)(b);
                const A = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    p = (0, n.memo)(({ children: e }) => {
                        const t = (0, n.useContext)(E),
                            u = (0, n.useState)(t),
                            r = u[0],
                            o = u[1],
                            c = (0, n.useCallback)((e, t) => {
                                const u = s.O.view.pxToRem(e),
                                    n = s.O.view.pxToRem(t);
                                o(Object.assign({ width: u, height: n }, l(u, n, i)));
                            }, []);
                        A(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const m = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(E.Provider, { value: m }, e);
                    });
                var g = u(483),
                    F = u.n(g),
                    D = u(926),
                    B = u.n(D);
                let v, C, f;
                !(function (e) {
                    (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(C || (C = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(f || (f = {}));
                const w = () => {
                        const e = (0, n.useContext)(E),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case e.largeHeight:
                                        return f.Large;
                                    case e.mediumHeight:
                                        return f.Medium;
                                    case e.smallHeight:
                                        return f.Small;
                                    case e.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    S = ['children', 'className'];
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const y = {
                        [C.ExtraSmall]: '',
                        [C.Small]: B().SMALL_WIDTH,
                        [C.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [C.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [C.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [f.ExtraSmall]: '',
                        [f.Small]: B().SMALL_HEIGHT,
                        [f.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [f.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: B().SMALL,
                        [v.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [v.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [v.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    x = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, S);
                        const r = w(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return a().createElement('div', L({ className: F()(u, y[s], P[i], T[o]) }, n), t);
                    },
                    k = ['children'];
                const M = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, k);
                    return a().createElement(p, null, a().createElement(x, u, t));
                };
                var N = u(493),
                    I = u.n(N);
                function O(e) {
                    engine.call('PlaySound', e);
                }
                const W = {
                        playHighlight() {
                            O('highlight');
                        },
                        playClick() {
                            O('play');
                        },
                        playYes() {
                            O('yes1');
                        },
                    },
                    H = 'Tabs_base_d9',
                    Y = 'Tabs_base__vertical_c0',
                    X = 'Tabs_list_0a',
                    $ = 'Tabs_list__centered_dc',
                    U = 'Tabs_wrapper_2d',
                    G = 'Tabs_wrapper__centered_d8',
                    z = 'Tabs_wrapper__vertical_a5';
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                }
                const V = 'tabs-role';
                var K;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(K || (K = {}));
                class q extends n.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[K.TAB]);
                                return t && t.props[K.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = a().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[V] === K.LIST);
                        if (t < 0) return;
                        const u =
                            this.props.activeKey || this._getFirstTabKey(a().Children.toArray(e[t].props.children));
                        (e[t] = a().cloneElement(e[t], {
                            children: a()
                                .Children.toArray(e[t].props.children)
                                .map((e) => a().cloneElement(e, { key: e.props[K.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(u);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const u = a().Children.toArray(this.props.children)[this.tabsListIndex],
                            n = u.props.children.reduce(
                                (e, t, u) => ((e[u] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            r =
                                ((s = this.tabsProps),
                                (i = n),
                                !(
                                    Object.keys(s).length === Object.keys(i).length &&
                                    Object.keys(s).every(
                                        (e) => Object.prototype.hasOwnProperty.call(i, e) && s[e] === i[e],
                                    )
                                ));
                        var s, i;
                        const o = F()(
                                U,
                                u.props.className,
                                this.props.isTabsCentered && G,
                                this.props.isVerticalTabs && z,
                            ),
                            l = F()(X, this.props.isTabsCentered && $);
                        if (t.activeKey !== this.state.activeKey || r) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[V] === K.CONTENT) return e.props[K.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, u) => [this.tabsListIndex, e].includes(u)),
                                r = t[0].props.children,
                                s = r.map((e, t) =>
                                    a().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            n[t],
                                            { key: t, isActive: this.state.activeKey === e.props[K.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === r.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const u = n[t][K.TAB];
                                                    this.state.activeKey === u ||
                                                        (n[t].onClick && n[t].onClick(e),
                                                        this.handleSetActiveKey(u),
                                                        this.props.onClickSound && O(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    n[t].onMouseEnter && n[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound && O(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = n),
                                this.setState({
                                    activeElements: [
                                        a().createElement(
                                            'div',
                                            { className: l, key: K.LIST },
                                            a().createElement('div', j({}, u.props, { className: o }), s),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = F()(H, this.props.isVerticalTabs && Y);
                        return a().createElement('div', { className: t }, e);
                    }
                }
                q.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Q = ['children', 'className', 'activeKey', 'onClickSound', 'onMouseEnterSound', 'isTabsCentered'];
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                const J = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = e.activeKey,
                            r = e.onClickSound,
                            s = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Q);
                        return a().createElement(
                            'div',
                            Z({ className: u }, o),
                            a().createElement(
                                q,
                                { activeKey: n, onClickSound: r, onMouseEnterSound: s, isTabsCentered: i },
                                t,
                            ),
                        );
                    },
                    ee = {
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
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const ne = (e) => {
                    let t = e.size,
                        u = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        s = e.hide,
                        i = e.maximumNumber,
                        o = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, te);
                    const c = n ? null : u,
                        m = 'string' == typeof c;
                    if ((c && !m && c < 0) || 0 === c) return null;
                    const d = c && !m && c > i,
                        _ = F()(
                            ee.base,
                            ee[`base__${t}`],
                            r && ee.base__animated,
                            s && ee.base__hidden,
                            !c && ee.base__pattern,
                            n && ee.base__empty,
                            o,
                        );
                    return a().createElement(
                        'div',
                        ue({ className: _ }, l),
                        a().createElement('div', { className: ee.bg }),
                        a().createElement('div', { className: ee.pattern }),
                        a().createElement(
                            'div',
                            { className: F()(ee.value, m && ee.value__text) },
                            d ? i : c,
                            d && a().createElement('span', { className: ee.plus }, '+'),
                        ),
                    );
                };
                ne.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const ae = ({ children: e, component: t, props: u = {} }) =>
                        t ? a().createElement(t, u, e) : e || null,
                    re = 'Tab_base_dd',
                    se = 'Tab_base__first_4a',
                    ie = 'Tab_base__last_96',
                    oe = 'Tab_base__medium_ec',
                    le = 'Tab_base__active_5d',
                    ce = 'Tab_divider_ca',
                    me = 'Tab_divider__show_62',
                    de = 'Tab_state_6c',
                    _e = 'Tab_stateHighlight_1e',
                    Ee = 'Tab_stateBorder_64',
                    he = 'Tab_stateBorder__positionLeft_e7',
                    be = 'Tab_stateBorder__positionRight_db',
                    Ae = 'Tab_counter_e1',
                    pe = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const Fe = (0, n.memo)((e) => {
                        let t = e.isActive,
                            u = void 0 !== t && t,
                            n = e.isFirst,
                            r = void 0 !== n && n,
                            s = e.isLast,
                            i = void 0 !== s && s,
                            o = e.isMedium,
                            l = void 0 !== o && o,
                            c = e.isNotified,
                            m = void 0 !== c && c,
                            d = e.children,
                            _ = void 0 === d ? 'Tab' : d,
                            E = e.wrapper,
                            h = void 0 === E ? {} : E,
                            b = e.counter,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, pe);
                        return a().createElement(
                            ae,
                            h,
                            a().createElement(
                                'div',
                                ge({ className: F()(re, { [le]: u }, { [se]: r }, { [ie]: i }, { [oe]: l }) }, A),
                                a().createElement(
                                    'span',
                                    { className: de },
                                    a().createElement('span', { className: _e }),
                                    a().createElement('span', { className: F()(Ee, he) }),
                                    a().createElement('span', { className: F()(Ee, be) }),
                                ),
                                _,
                                !i && !u && a().createElement('span', { className: F()(ce, me) }),
                                (Boolean(b) || m) &&
                                    a().createElement(
                                        'div',
                                        { className: Ae },
                                        a().createElement(ne, { value: b, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    De = {
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
                    Be = [
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
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                class Ce extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && O(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && O(this.props.soundClick);
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
                            r = e.side,
                            s = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, Be)),
                            _ = F()(De.base, De[`base__${s}`], De[`base__${r}`], null == i ? void 0 : i.base),
                            E = F()(De.icon, De[`icon__${s}`], De[`icon__${r}`], null == i ? void 0 : i.icon),
                            h = F()(De.glow, null == i ? void 0 : i.glow),
                            b = F()(De.caption, De[`caption__${s}`], null == i ? void 0 : i.caption),
                            A = F()(De.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            ve(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                d,
                            ),
                            'info' !== s && a().createElement('div', { className: De.shine }),
                            a().createElement('div', { className: E }, a().createElement('div', { className: h })),
                            a().createElement('div', { className: b }, t),
                            n && a().createElement('div', { className: A }, n),
                        );
                    }
                }
                Ce.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const fe = (e) => {
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
                var we = u(521),
                    Se = u(364);
                const Le = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ye(e = we.n.NONE, t = Le, u = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== we.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                const Pe = (e = 1) => {
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
                    Te = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Re = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    xe = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ke = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = Te(`${e}.${u}`, window);
                                return Re(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    Me = (e) => {
                        const t = ((e) => {
                                const t = Pe(),
                                    u = t.caller,
                                    n = t.resId,
                                    a = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: a, modelPath: xe(a, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const a = Te(xe(u, `${t}.${n}`), window);
                                    return Re(a) ? (e.push(a.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    Ne = Se.Sw.instance;
                let Ie;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Ie || (Ie = {}));
                const Oe = (e = 'model', t = Ie.Deep) => {
                    const u = (0, n.useState)(0),
                        a = (u[0], u[1]),
                        r = (0, n.useMemo)(() => Pe(), []),
                        s = r.caller,
                        i = r.resId,
                        o = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, n.useState)(() =>
                            ((e) => {
                                const t = Te(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return Re(t) ? t.value : t;
                            })(ke(o)),
                        ),
                        c = l[0],
                        m = l[1],
                        d = (0, n.useRef)(-1);
                    return (
                        A(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? Ie.Deep : Ie.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== Ie.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === Ie.Deep
                                            ? (e === c && a((e) => e + 1), m(e))
                                            : m(Object.assign([], e));
                                    },
                                    n = Me(e);
                                d.current = Ne.addCallback(n, u, i, t === Ie.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== Ie.None)
                                return () => {
                                    Ne.removeCallback(d.current, i);
                                };
                        }, [i, t]),
                        c
                    );
                };
                var We = u(664);
                const He = 'App_base_b9',
                    Ye = 'App_background_fd',
                    Xe = 'App_horizontalTabs_62',
                    $e = 'App_tabContent_5e',
                    Ue = 'App_tabContent__visible_dd',
                    Ge = 'App_radialShadow_01',
                    ze = 'App_shadow_c1',
                    je = 'App_background__win_2b',
                    Ve = 'App_playerVehicleStatus_e9',
                    Ke = 'App_mapName_bf',
                    qe = 'App_bottomComponents_0b',
                    Qe = 'App_closeButton_fa',
                    Ze = 'AppAnimations_baseEnterDone_7f',
                    Je = { enterActive: 'AppAnimations_baseEnterActive_88', enterDone: Ze },
                    et = { enterActive: 'AppAnimations_background_76', enterDone: Ze },
                    tt = { enterActive: 'AppAnimations_horizontalTabs_d2', enterDone: Ze },
                    ut = 'PlayerVehicleStatus_base_53',
                    nt = 'PlayerVehicleStatus_reason_52',
                    at = 'PlayerVehicleStatus_reasonText_95',
                    rt = 'PlayerVehicleStatus_nickname_97',
                    st = 'PlayerVehicleStatus_nickname__clanTag_fc',
                    it = 'PlayerVehicleStatus_killerNickname_3a',
                    ot = 'PlayerVehicleStatus_killerClanTag_f7',
                    lt = a().memo(() => {
                        const e = Oe('model.playerVehicleStatus'),
                            t = e.user,
                            u = e.reason,
                            n = e.killer,
                            r = t.clanAbbrev && `[${t.clanAbbrev}]`,
                            s = n.userName && n.userName,
                            i = n.clanAbbrev && `[${n.clanAbbrev}]`;
                        return a().createElement(
                            'div',
                            { className: ut },
                            a().createElement(
                                'div',
                                { className: rt },
                                a().createElement('span', null, t.userName),
                                r && a().createElement('span', { className: st }, r),
                            ),
                            a().createElement(
                                'div',
                                { className: nt },
                                a().createElement('span', { className: at }, u),
                                s &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('span', { className: it }, s),
                                        i && a().createElement('span', { className: ot }, i),
                                    ),
                            ),
                        );
                    });
                let ct;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(ct || (ct = {}));
                const mt = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, Se.c9)(Se.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    W.playYes();
                            }, [r, t, u, a]),
                            l = (0, n.useCallback)(() => {
                                (0, Se.c9)(Se.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === ct.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    dt = ['children'];
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                const Et = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, dt);
                    return a().createElement(
                        mt,
                        _t({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                class ht extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = Se.B3.GOLD;
                        else e = Se.B3.INTEGRAL;
                        const t = Se.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                ht.defaultProps = { format: 'integral' };
                const bt = [
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
                function At(e) {
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
                const pt = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Se.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    gt = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            d = void 0 !== m && m,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            h = e.isEnabled,
                            b = void 0 === h || h,
                            A = e.targetId,
                            p = void 0 === A ? 0 : A,
                            g = e.onShow,
                            F = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, bt);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => p || Pe().resId, [p]),
                            C = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (pt(u, E, { isMouseEvent: !0, on: !0, arguments: At(a) }, v),
                                    g && g(),
                                    (B.current.isVisible = !0));
                            }, [u, E, a, v, g]),
                            f = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        pt(u, E, { on: !1 }, v),
                                        B.current.isVisible && F && F(),
                                        (B.current.isVisible = !1);
                                }
                            }, [u, E, v, F]),
                            w = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
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
                                !1 === b && f();
                            }, [b, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return b
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                      r && r(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              f(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === d && f(), null == o || o(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === d && f(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    Ft = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const Bt = R.views.common.tooltip_window.simple_tooltip_content,
                    vt = (e) => {
                        let t = e.children,
                            u = e.body,
                            r = e.header,
                            s = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Ft);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: r, note: s, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, u, r, s, o]);
                        return a().createElement(
                            gt,
                            Dt(
                                {
                                    contentId:
                                        ((m = null == o ? void 0 : o.hasHtmlContent),
                                        m ? Bt.SimpleTooltipHtmlContent('resId') : Bt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var m;
                    },
                    Ct = 'TextOverflow_base_3b',
                    ft = ({ content: e, classMix: t }) => {
                        const u = (0, n.useRef)(null),
                            r = (0, n.useState)(!0),
                            s = r[0],
                            i = r[1];
                        return (
                            (0, n.useEffect)(() =>
                                fe(() => {
                                    const e = u.current;
                                    e && e.offsetWidth >= e.scrollWidth && i(!1);
                                }),
                            ),
                            a().createElement(
                                vt,
                                { isEnabled: s, body: e },
                                a().createElement('div', { ref: u, className: F()(Ct, t) }, e),
                            )
                        );
                    },
                    wt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    St = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Lt(e) {
                    let t = '';
                    for (let u = St.length - 1; u >= 0; u--) for (; e >= St[u]; ) (t += wt[u]), (e -= St[u]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let yt;
                function Pt(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(yt || (yt = {}));
                const Tt = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    Rt = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    xt = (e, t, u = yt.left) => e.split(t).reduce(u === yt.left ? Tt : Rt, []),
                    kt = (() => {
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
                    Mt = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Nt = (e, t = yt.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return Mt.includes(u)
                            ? kt(e)
                            : ((e, t = yt.left) => {
                                  let u = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return xt(a, /( )/, t).forEach((e) => (u = u.concat(xt(e, n, yt.left)))), u;
                              })(e, t);
                    },
                    It = {
                        base: 'Content_base_0b',
                        base__platoon: 'Content_base__platoon_e3',
                        name: 'Content_name_f9',
                        base__rowBrPlayer: 'Content_base__rowBrPlayer_3b',
                        userName: 'Content_userName_7c',
                        clanTag: 'Content_clanTag_e7',
                        anonymizer: 'Content_anonymizer_7f',
                        base__hover: 'Content_base__hover_cf',
                        vehicle: 'Content_vehicle_3e',
                        vehicleTypeIcon: 'Content_vehicleTypeIcon_5c',
                        vehicleName: 'Content_vehicleName_18',
                        level: 'Content_level_cb',
                        damage: 'Content_damage_cb',
                        kills: 'Content_kills_6c',
                    },
                    Ot = a().memo(({ isPlatoon: e, type: t, anonymizerNick: u, user: r, isRowHovered: s }) => {
                        const i = r.userName,
                            o = r.clanAbbrev,
                            l = r.vehicleName,
                            c = r.vehicleType,
                            m = r.vehicleLevel,
                            d = r.damage,
                            _ = r.kills,
                            E = r.databaseID,
                            h = r.hiddenUserName,
                            b = 'rowBrPlayer' === t || 'rowBrPlatoon' === t,
                            A = (0, n.useState)(!1),
                            p = A[0],
                            g = A[1],
                            D = F()(It.base, It[`base__${t}`], e && It.base__platoon, (b || s || p) && It.base__hover),
                            B = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(c)})`,
                                }),
                                [c],
                            ),
                            v = o ? `[${o}]` : null,
                            C = (0, n.useCallback)(() => {
                                e && g(!0);
                            }, [e]),
                            f = (0, n.useCallback)(() => {
                                e && g(!1);
                            }, [e]),
                            w = (0, n.useMemo)(() => ({ userName: i, databaseID: E, hiddenUserName: h }), [i, E, h]),
                            S =
                                'rowBrEnemy' === t
                                    ? R.strings.battle_royale.battleResult.stats.anonymizer.enemy.header()
                                    : R.strings.battle_royale.battleResult.stats.anonymizer.header();
                        return a().createElement(
                            'div',
                            { className: D, onMouseEnter: C, onMouseLeave: f },
                            a().createElement(
                                'div',
                                { className: It.name },
                                i &&
                                    a().createElement(
                                        Et,
                                        { args: w },
                                        a().createElement(
                                            'div',
                                            { className: It.userName },
                                            a().createElement(ft, { content: i }),
                                        ),
                                    ),
                                v && a().createElement('span', { className: It.clanTag }, v),
                                u &&
                                    a().createElement(
                                        vt,
                                        {
                                            isEnabled: !0,
                                            header: Pt(S, { name: u }),
                                            body: R.strings.battle_royale.battleResult.stats.anonymizer.body(),
                                        },
                                        a().createElement('div', { className: It.anonymizer }),
                                    ),
                            ),
                            a().createElement(
                                'div',
                                { className: It.vehicle },
                                a().createElement('div', { className: It.vehicleTypeIcon, style: B }),
                                a().createElement('span', { className: It.vehicleName }, l),
                            ),
                            a().createElement('span', { className: It.level }, Lt(m)),
                            a().createElement(
                                'span',
                                { className: It.damage },
                                a().createElement(ht, { value: d, format: 'integral' }),
                            ),
                            a().createElement('span', { className: It.kills }, _),
                        );
                    }),
                    Wt = 'LeaderboardRow_base_19',
                    Ht = 'LeaderboardRow_base__leader_6c',
                    Yt = 'LeaderboardRow_place_61',
                    Xt = 'LeaderboardRow_players_c7',
                    $t = 'LeaderboardRow_base__platoon_95',
                    Ut = [1, 2, 3, 4, 5];
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
                const zt = a().memo(({ place: e, isSquadMode: t, playersList: u, index: r }) => {
                        const s = (0, n.useState)(!1),
                            i = s[0],
                            o = s[1],
                            l = R.strings.battle_royale.battleResult.stats.disqualified(),
                            c = 0 === Number(e),
                            m = F()(Wt, 0 === r && !c && Ht, t && $t),
                            d = (0, n.useCallback)(() => {
                                t || o(!0);
                            }, [t]),
                            _ = (0, n.useCallback)(() => {
                                t || o(!1);
                            }, [t]);
                        return a().createElement(
                            'div',
                            { className: m, onMouseEnter: d, onMouseLeave: _ },
                            a().createElement('div', { className: Yt }, c ? l : e),
                            a().createElement(
                                'div',
                                { className: Xt },
                                u.map(({ value: e }, u) =>
                                    a().createElement(
                                        Ot,
                                        Gt({ key: `${u}_${e.user.userName}` }, e, { isPlatoon: t, isRowHovered: i }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    jt = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            u = t.width,
                            n = t.height;
                        return 0 !== u && 0 !== n;
                    },
                    Vt = (e) => {
                        const t = (0, n.useState)(jt(e ? e.current : null)),
                            u = t[0],
                            a = t[1];
                        return (
                            (0, n.useEffect)(() => {
                                let t = 0;
                                const u = () => {
                                    t = requestAnimationFrame(() => {
                                        jt(e ? e.current : null) ? a(!0) : u();
                                    });
                                };
                                return (
                                    u(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => () => a(!1), [e]),
                            u
                        );
                    };
                var Kt = u(380),
                    qt = u.n(Kt);
                const Qt = 'ScrollArea_base_47',
                    Zt = 'ScrollArea_base__scrollIndent_1d',
                    Jt = 'ScrollArea_base__verticalScrollbarMargin_50',
                    eu = 'ScrollArea_base__multiple_44',
                    tu = 'ScrollArea_base__hidden_ec',
                    uu = a().forwardRef((e, t) => {
                        const u = e.offsetLeft,
                            r = void 0 === u ? 0 : u,
                            s = e.offsetTop,
                            i = void 0 === s ? 0 : s,
                            o = e.scrollSettings,
                            l = e.onUpdateActiveAxis,
                            c = e.onHorizontalScroll,
                            m = e.onVerticalScroll,
                            d = e.onOverScrollAtBeginning,
                            _ = e.onOverScrollAtEnd,
                            E = e.wrapperIndent,
                            h = e.verticalScrollbarMargin,
                            b = e.isMultipleScroll,
                            A = e.scrollAreaContainer,
                            p = e.children,
                            g = e.classMix,
                            D = e.onScrollLeftHandled,
                            B = (0, n.useState)(!1),
                            v = B[0],
                            C = B[1],
                            f = (0, n.useState)(),
                            w = f[0],
                            S = f[1],
                            L = (0, n.useState)(),
                            y = L[0],
                            P = L[1],
                            T = (0, n.useRef)(null),
                            R = (0, n.useCallback)(() => {
                                w &&
                                    l &&
                                    l({ x: w.scrollbarXActive, y: w.scrollbarYActive }, { x: w.reach.x, y: w.reach.y });
                            }, [l, w]),
                            x = (0, n.useCallback)(() => w, [w]),
                            k = (0, n.useCallback)(() => {
                                w && w.update();
                            }, [w]),
                            M = (0, n.useCallback)(
                                (e, t, u) => {
                                    w && (w.setScrollLeft(e, t, u), D && D(e, w.contentWidth - w.containerWidth));
                                },
                                [w, D],
                            ),
                            N = (0, n.useCallback)(
                                (e) => {
                                    w && (w.setScrollLeftImmediately(e), D && D(e, w.contentWidth - w.containerWidth));
                                },
                                [w, D],
                            ),
                            I = (0, n.useCallback)(
                                (e, t, u) => {
                                    w && w.setScrollTop(e, t, u);
                                },
                                [w],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    w && w.setScrollTopImmediately(e);
                                },
                                [w],
                            ),
                            W = (0, n.useCallback)(() => {
                                if (y && c && w) {
                                    const e = { scrollPosition: y.scrollLeft < 0 ? 0 : y.scrollLeft, reach: w.reach.x };
                                    c(e);
                                }
                            }, [c, y, w]),
                            H = (0, n.useCallback)(() => {
                                if (y && m && w) {
                                    const e = { scrollPosition: y.scrollTop, reach: w.reach.y };
                                    m(e);
                                }
                            }, [m, y, w]),
                            Y = (0, n.useCallback)(() => {
                                d && d();
                            }, [d]),
                            X = (0, n.useCallback)(() => {
                                _ && _();
                            }, [_]),
                            $ = (0, n.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), P(e);
                                },
                                [t],
                            ),
                            U = (0, n.useCallback)(() => {
                                w &&
                                    (w.update(),
                                    (T.current = fe(() => {
                                        R();
                                    })));
                            }, [w, R]),
                            G = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (w && y)
                                return (
                                    document.addEventListener('mousemove', G),
                                    window.addEventListener('resize', U),
                                    y.addEventListener('ps-scroll-x', W),
                                    y.addEventListener('ps-scroll-y', H),
                                    y.addEventListener('over-scroll-beginning', Y),
                                    y.addEventListener('over-scroll-ending', X),
                                    C(!0),
                                    () => {
                                        window.removeEventListener('resize', U),
                                            document.removeEventListener('mousemove', G),
                                            y &&
                                                (y.removeEventListener('ps-scroll-x', W),
                                                y.removeEventListener('ps-scroll-y', H),
                                                y.removeEventListener('over-scroll-beginning', Y),
                                                y.removeEventListener('over-scroll-ending', X));
                                    }
                                );
                        }, [G, W, Y, X, U, y, w, H]);
                        const z = (0, n.useRef)(y || null);
                        z.current = y || null;
                        const j = Vt(z);
                        (0, n.useEffect)(
                            () => (
                                !w && y && j && S(new (qt())(y, Object.assign({}, o))),
                                () => {
                                    w && (w.destroy(), S(void 0));
                                }
                            ),
                            [y, j, o, w],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == T.current || T.current();
                                },
                                [],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    fe(() => {
                                        w && R();
                                    }),
                                [R, w],
                            ),
                            (0, n.useEffect)(() => {
                                r > 0 && N(r);
                            }, [r, N]),
                            (0, n.useEffect)(() => {
                                i > 0 && O(i);
                            }, [i, O]),
                            (0, n.useEffect)(() => {
                                A &&
                                    ((A.setScrollLeft = M),
                                    (A.setScrollTop = I),
                                    (A.setScrollLeftImmediately = N),
                                    (A.setScrollTopImmediately = O),
                                    (A.updateScrollArea = k),
                                    (A.getScrollbar = x));
                            }, [A, M, N, I, O, k, x]);
                        const V = F()(Qt, { [Zt]: E, [tu]: !v, [Jt]: h, [eu]: b }, g);
                        return a().createElement('div', { className: V, ref: $ }, p);
                    }),
                    nu = 'Leaderboard_base_49',
                    au = 'Leaderboard_middle_65',
                    ru = 'Leaderboard_base__large_73',
                    su = 'Leaderboard_scrollContent_e5',
                    iu = 'Leaderboard_legend_ec',
                    ou = 'Leaderboard_damage_80',
                    lu = 'Leaderboard_kills_66',
                    cu = 'Leaderboard_content_34';
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
                const du = a().memo(() => {
                        const e = Oe('model.leaderboardLobbyModel').placesList,
                            t = (0, n.useContext)(E),
                            u = F()(nu, (t.extraLarge || t.large) && ru);
                        return a().createElement(
                            'div',
                            { className: u },
                            a().createElement(
                                'div',
                                { className: au },
                                e &&
                                    a().createElement(
                                        'div',
                                        { className: cu },
                                        a().createElement(
                                            'div',
                                            { className: iu },
                                            a().createElement('div', { className: ou }),
                                            a().createElement('div', { className: lu }),
                                        ),
                                        a().createElement(
                                            uu,
                                            null,
                                            a().createElement(
                                                'div',
                                                { className: su },
                                                e.map(({ value: e }, t) =>
                                                    a().createElement(zt, mu({ key: t, index: t }, e)),
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    _u = 'progressionCompleted';
                let Eu;
                !(function (e) {
                    (e.Active = 'active'), (e.Paused = 'paused'), (e.Completed = 'completed');
                })(Eu || (Eu = {}));
                const hu = {
                        base: 'StatItem_base_b6',
                        wreathImage: 'StatItem_wreathImage_ee',
                        statImage: 'StatItem_statImage_97',
                        statText: 'StatItem_statText_95',
                        divider: 'StatItem_divider_44',
                        maxValue: 'StatItem_maxValue_6d',
                        titleText: 'StatItem_titleText_7c',
                    },
                    bu = a().memo(({ currentValue: e, maxValue: t, type: u }) => {
                        const r = R.strings.battle_royale.battleResult.stats.$dyn(u),
                            s = R.strings.battle_royale.battleResult.stats.disqualified(),
                            i = 'place' === u && 0 === e,
                            o = t >= 0 && !i,
                            l = (0, n.useMemo)(() => {
                                const t = Se.Z5.getNumberFormat(e, Se.B3.INTEGRAL);
                                return i ? s : t;
                            }, [e, i, s]),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.stat_list.$dyn(u)})`,
                                }),
                                [u],
                            );
                        return a().createElement(
                            vt,
                            { header: r.header(), body: r.body(), isEnabled: u.length > 0 },
                            a().createElement(
                                'div',
                                { className: hu.base },
                                a().createElement('div', { className: hu.wreathImage }),
                                a().createElement('div', { className: hu.statImage, style: c }),
                                a().createElement(
                                    'div',
                                    { className: hu.statText },
                                    a().createElement('span', { className: hu.currentValue }, l),
                                    o &&
                                        a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement('span', { className: hu.divider }, '/'),
                                            a().createElement('span', { className: hu.maxValue }, t),
                                        ),
                                ),
                                a().createElement('div', { className: hu.titleText }, r.title()),
                            ),
                        );
                    }),
                    Au = 'StatsList_base_b3',
                    pu = a().memo(
                        ({
                            statsList: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            onAnimationComplete: r,
                            transitionTimeout: s,
                            itemStartState: i,
                            itemFinishState: o,
                            isWinner: l,
                        }) => {
                            const c = (0, n.useState)(-1),
                                m = c[0],
                                d = c[1],
                                _ = e.length,
                                E = (0, n.useCallback)(() => {
                                    if (u) return;
                                    const e = m + 1;
                                    e < _ ? (O(R.sounds.BR_result_effectiveness()), d(e)) : r && r();
                                }, [_, m, r, u]);
                            return (
                                (0, n.useEffect)(() => {
                                    t && !u && (O(R.sounds.BR_result_effectiveness()), d(0));
                                }, [t, u]),
                                (0, n.useEffect)(() => {
                                    u && d(e.length);
                                }, [u, e.length]),
                                a().createElement(
                                    'div',
                                    { className: Au },
                                    e.map(({ value: e }, t) =>
                                        a().createElement(
                                            We.Z,
                                            {
                                                key: `${e.type}_${e.currentValue}`,
                                                timeout: s || 300,
                                                in: m >= t,
                                                enter: !u,
                                                onEntered: E,
                                                classNames: o,
                                            },
                                            a().createElement(
                                                'div',
                                                { className: i },
                                                !(l && 'place' === e.type) && a().createElement(bu, e),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    gu = (e, t) => {
                        let u;
                        const n = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            'function' == typeof u && u(), clearTimeout(n);
                        };
                    },
                    Fu = 'Title_base_e9',
                    Du = 'Title_titleWrapper_70',
                    Bu = 'Title_base__win_b7',
                    vu = 'Title_titleBg_b0',
                    Cu = 'Title_place_ff',
                    fu = 'Title_base__winner_7f',
                    wu = 'Title_base__firstPlace_74',
                    Su = 'Title_wreathIcon_51',
                    Lu = 'Title_titleText_bd',
                    yu = 'Title_base__lose_a0',
                    Pu = 'Title_vehicle_7f',
                    Tu = 'Title_vehicleTypeIcon_a4',
                    Ru = 'Title_vehicleName_1c',
                    xu = 'TitleAnimations_baseEnterDone_0b',
                    ku = {
                        enterActive: 'TitleAnimations_wreathIcon_9e',
                        enterDone: 'TitleAnimations_wreathIcon__enterDone_84',
                    },
                    Mu = {
                        enterActive: 'TitleAnimations_titleBg_15',
                        enterDone: 'TitleAnimations_titleBg__enterDone_87',
                    },
                    Nu = { enterActive: 'TitleAnimations_title_76', enterDone: xu },
                    Iu = { enterActive: 'TitleAnimations_place_35', enterDone: 'TitleAnimations_place__enterDone_66' },
                    Ou = { enterActive: 'TitleAnimations_vehicle_dc', enterDone: xu };
                var Wu;
                !(function (e) {
                    (e[(e.WREATH_ENTER = 0)] = 'WREATH_ENTER'),
                        (e[(e.BG_ENTER = 1)] = 'BG_ENTER'),
                        (e[(e.TITLE_ENTER = 2)] = 'TITLE_ENTER'),
                        (e[(e.VEHICLE_ENTER = 3)] = 'VEHICLE_ENTER');
                })(Wu || (Wu = {}));
                const Hu = [200, 200, 500],
                    Yu = [600, 400, 500, 300],
                    Xu = a().memo(
                        ({
                            isFirstPlace: e,
                            isWinner: t,
                            place: u,
                            finishResultLabel: r,
                            vehicleType: s,
                            vehicleName: i,
                            onAnimationComplete: o,
                            animationTrigger: l,
                            isAnimationSkipped: c,
                        }) => {
                            const m = (0, n.useState)(-1),
                                d = m[0],
                                _ = m[1],
                                E = (0, n.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(s)})`,
                                    }),
                                    [s],
                                );
                            (0, n.useEffect)(() => {
                                l && !c && _(0);
                            }, [l, c]),
                                (0, n.useEffect)(() => {
                                    c && _(Wu.VEHICLE_ENTER);
                                }, [c]),
                                (0, n.useEffect)(() => {
                                    if (!(d < Wu.WREATH_ENTER || d >= Wu.VEHICLE_ENTER || c))
                                        return gu(() => _(d + 1), Hu[d]);
                                }, [d, c]);
                            const h = (0, n.useCallback)(() => {
                                    c || (o && o());
                                }, [o, c]),
                                b = F()(Fu, t && Bu, !t && yu, t && !e && fu, e && wu);
                            return a().createElement(
                                'div',
                                { className: b },
                                t &&
                                    a().createElement(
                                        We.Z,
                                        {
                                            timeout: Yu[Wu.WREATH_ENTER],
                                            in: d >= Wu.WREATH_ENTER,
                                            enter: !c,
                                            classNames: ku,
                                        },
                                        a().createElement('div', { className: Su }),
                                    ),
                                a().createElement(
                                    'div',
                                    { className: Du },
                                    t &&
                                        a().createElement(
                                            We.Z,
                                            {
                                                timeout: Yu[Wu.TITLE_ENTER],
                                                in: d >= Wu.TITLE_ENTER,
                                                enter: !c,
                                                classNames: Iu,
                                            },
                                            a().createElement('div', { className: Cu }, u),
                                        ),
                                    e &&
                                        a().createElement(
                                            We.Z,
                                            {
                                                timeout: Yu[Wu.BG_ENTER],
                                                in: d >= Wu.BG_ENTER,
                                                enter: !c,
                                                classNames: Mu,
                                            },
                                            a().createElement('div', { className: vu }),
                                        ),
                                    a().createElement(
                                        We.Z,
                                        {
                                            timeout: Yu[Wu.TITLE_ENTER],
                                            in: d >= Wu.TITLE_ENTER,
                                            enter: !c,
                                            classNames: Nu,
                                        },
                                        a().createElement('div', { className: Lu }, r),
                                    ),
                                    a().createElement(
                                        We.Z,
                                        {
                                            timeout: Yu[Wu.VEHICLE_ENTER],
                                            in: d >= Wu.VEHICLE_ENTER,
                                            enter: !c,
                                            onEntered: h,
                                            classNames: Ou,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Pu },
                                            a().createElement('div', { className: Tu, style: E }),
                                            a().createElement('div', { className: Ru }, i),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    $u = {
                        base: 'PremiumRewardItem_base_b1',
                        image: 'PremiumRewardItem_image_37',
                        base__crystal: 'PremiumRewardItem_base__crystal_ab',
                        base__xp: 'PremiumRewardItem_base__xp_55',
                        base__credits: 'PremiumRewardItem_base__credits_33',
                        base__brcoin: 'PremiumRewardItem_base__brcoin_eb',
                        base__brProgressionToken: 'PremiumRewardItem_base__brProgressionToken_9a',
                        base__battlePassPoints: 'PremiumRewardItem_base__battlePassPoints_77',
                    },
                    Uu = a().memo(({ value: e, type: t }) => {
                        const u = Se.Z5.getNumberFormat(e, Se.B3.INTEGRAL),
                            r = F()($u.base, $u[`base__${t}`]),
                            s = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(`${t}_small`)})`,
                                }),
                                [t],
                            );
                        return a().createElement(
                            M,
                            null,
                            a().createElement(
                                vt,
                                { body: R.strings.battle_royale.battleResult.premiumRewards.tooltip() },
                                a().createElement(
                                    'div',
                                    { className: r },
                                    a().createElement('div', { className: $u.image, style: s }),
                                    a().createElement('span', null, u),
                                ),
                            ),
                        );
                    }),
                    Gu = 'PremiumRewards_base_9a',
                    zu = 'PremiumRewards_ribbonLine_ec',
                    ju = 'PremiumRewards_ribbonLine__left_6d',
                    Vu = 'PremiumRewards_ribbonLine__right_7e',
                    Ku = 'PremiumRewards_ribbonDot_1c',
                    qu = 'PremiumRewards_ribbonDot__left_fd',
                    Qu = 'PremiumRewards_ribbonDot__right_c4',
                    Zu = 'PremiumRewards_premium_33',
                    Ju = 'PremiumRewards_premiumLine_0c',
                    en = 'PremiumRewards_premiumWrapper_1f',
                    tn = 'PremiumRewards_premiumTitleWrapper_f2',
                    un = 'PremiumRewards_premiumIcon_27',
                    nn = 'PremiumRewards_premiumText_8f',
                    an = 'PremiumRewards_rewardsList_7b',
                    rn = 'PremiumRewards_rewardsItem_07',
                    sn = a().memo(({ battleRewardsList: e }) =>
                        a().createElement(
                            'div',
                            { className: Gu },
                            a().createElement(
                                'div',
                                { className: Zu },
                                a().createElement(
                                    'div',
                                    { className: Ju },
                                    a().createElement('div', { className: F()(zu, ju) }),
                                    a().createElement('div', { className: F()(Ku, qu) }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: tn },
                                    a().createElement('div', { className: un }),
                                    a().createElement(
                                        'div',
                                        { className: nn },
                                        R.strings.battle_royale.battleResult.premiumRewards.title(),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: en },
                                    a().createElement(
                                        'div',
                                        { className: an },
                                        e.map(({ value: e }) =>
                                            a().createElement(
                                                'div',
                                                { className: rn, key: `${e.type}_${e.value}` },
                                                a().createElement(Uu, e),
                                            ),
                                        ),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Ju },
                                    a().createElement('div', { className: F()(zu, Vu) }),
                                    a().createElement('div', { className: F()(Ku, Qu) }),
                                ),
                            ),
                        ),
                    ),
                    on = 'Ribbon_base_69',
                    ln = 'Ribbon_shadow_a4',
                    cn = 'Ribbon_shadow__top_c9',
                    mn = 'Ribbon_shadow__bottom_a2',
                    dn = 'Ribbon_topLine_26',
                    _n = 'Ribbon_bottomLine_04',
                    En = 'Ribbon_ribbonLine_a5',
                    hn = 'Ribbon_ribbonIcon_66',
                    bn = 'Ribbon_base__win_15',
                    An = 'Ribbon_base__prem_78',
                    pn = 'Ribbon_base__lose_9b',
                    gn = 'Ribbon_base__lose_prem_ad',
                    Fn = a().memo(({ battleRewardsListWithPremium: e, isWinner: t, hasPremium: u }) =>
                        a().createElement(
                            'div',
                            { className: F()(on, t && (u ? An : bn), !t && (u ? gn : pn)) },
                            a().createElement('div', { className: F()(ln, cn) }),
                            a().createElement('div', { className: hn }),
                            a().createElement('div', { className: dn }, a().createElement('div', { className: En })),
                            u &&
                                a().createElement(
                                    'div',
                                    { className: _n },
                                    a().createElement('div', { className: En }),
                                ),
                            !u && e.length > 0 && a().createElement(sn, { battleRewardsList: e }),
                            a().createElement('div', { className: F()(ln, mn) }),
                        ),
                    ),
                    Dn = {
                        base: 'Reward_base_07',
                        image: 'Reward_image_f5',
                        base__crystal: 'Reward_base__crystal_30',
                        base__xp: 'Reward_base__xp_c3',
                        base__credits: 'Reward_base__credits_40',
                        base__brcoin: 'Reward_base__brcoin_18',
                        base__brProgressionToken: 'Reward_base__brProgressionToken_38',
                        base__battlePassPoints: 'Reward_base__battlePassPoints_68',
                    },
                    Bn = a().memo(({ value: e, type: t }) => {
                        const u = Se.Z5.getNumberFormat(e, Se.B3.INTEGRAL),
                            r = F()(Dn.base, Dn[`base__${t}`]),
                            s = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(t)})`,
                                }),
                                [t],
                            );
                        return a().createElement(
                            'div',
                            { className: r },
                            a().createElement('div', { className: Dn.image, style: s }),
                            a().createElement('span', null, u),
                        );
                    }),
                    vn = (0, n.memo)(({ value: e, type: t, classMix: u }) => {
                        const r = (0, n.useMemo)(() => ({ currencyType: t }), [t]);
                        return a().createElement(
                            gt,
                            {
                                contentId: R.views.battle_royale.lobby.tooltips.RewardCurrencyTooltipView('resId'),
                                args: r,
                            },
                            a().createElement('div', null, a().createElement(Bn, { value: e, type: t, classMix: u })),
                        );
                    }),
                    Cn = 'BattleRewardList_base_68',
                    fn = 'BattleRewardList_title_a1',
                    wn = a().memo(
                        ({
                            battleRewardsList: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            onAnimationComplete: r,
                            transitionTimeout: s,
                            itemStartState: i,
                            itemFinishState: o,
                        }) => {
                            const l = (0, n.useState)(-1),
                                c = l[0],
                                m = l[1],
                                d = e.length,
                                _ = R.strings.battle_royale.battleResult.noReward.title(),
                                E = (0, n.useCallback)(() => {
                                    if (u) return;
                                    const e = c + 1;
                                    e < d ? (O(R.sounds.BR_result_numbers()), m(e)) : r && r();
                                }, [d, c, r, u]);
                            return (
                                (0, n.useEffect)(() => {
                                    t && !u && (O(R.sounds.BR_result_numbers()), m(0));
                                }, [t, u]),
                                (0, n.useEffect)(() => {
                                    u && m(d);
                                }, [d, u]),
                                a().createElement(
                                    M,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: Cn },
                                        e.length
                                            ? e.map(({ value: e }, t) =>
                                                  a().createElement(
                                                      We.Z,
                                                      {
                                                          key: `${e.type}_${e.value}`,
                                                          timeout: s || 300,
                                                          in: c >= t,
                                                          enter: !u,
                                                          onEntered: E,
                                                          classNames: o,
                                                      },
                                                      a().createElement(
                                                          'div',
                                                          { className: i },
                                                          a().createElement(vn, e),
                                                      ),
                                                  ),
                                              )
                                            : a().createElement(
                                                  We.Z,
                                                  { timeout: 300, in: c >= 0, classNames: o, onEntered: E },
                                                  a().createElement(
                                                      'div',
                                                      { className: i },
                                                      a().createElement('div', { className: fn }, _),
                                                  ),
                                              ),
                                    ),
                                )
                            );
                        },
                    ),
                    Sn = 'FormatText_base_d0',
                    Ln = ({ binding: e, text: t = '', classMix: u, alignment: r = yt.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  t.split('\n').map((t, s) =>
                                      a().createElement(
                                          'div',
                                          { className: F()(Sn, u), key: `${t}-${s}` },
                                          ((e, t, u) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (u && e in u ? u[e] : Nt(e, t))))(t, r, e).map((e, t) =>
                                              a().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    yn = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Pn, Tn;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(Pn || (Pn = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Tn || (Tn = {}));
                const Rn = ({ size: e = Pn.Default }) =>
                        a().createElement('div', { className: F()(yn.background, yn[`background__${e}`]) }),
                    xn = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    kn = ({ size: e }) => {
                        const t = F()(xn.base, xn[`base__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    Mn = {
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
                    Nn = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: n, isComplete: r, withoutBounce: s }) => {
                            const i = F()(
                                    Mn.base,
                                    Mn[`base__${e}`],
                                    u && Mn.base__disabled,
                                    r && Mn.base__finished,
                                    s && Mn.base__withoutBounce,
                                ),
                                o = !u && !r;
                            return a().createElement(
                                'div',
                                { className: i, style: n, ref: t },
                                a().createElement('div', { className: Mn.pattern }),
                                a().createElement('div', { className: Mn.gradient }),
                                o && a().createElement(kn, { size: e }),
                            );
                        },
                    ),
                    In = ({ size: e, value: t, lineRef: u, disabled: r, onComplete: s }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                o && s && s();
                            }, [o, s]),
                            a().createElement(Nn, { size: e, disabled: r, baseStyles: i, isComplete: o, lineRef: u })
                        );
                    };
                let On, Wn;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(On || (On = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Wn || (Wn = {}));
                const Hn = 'ProgressBarDeltaSimple_base_6c',
                    Yn = 'ProgressBarDeltaSimple_delta_99',
                    Xn = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: s,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < r,
                                m = (0, n.useState)(Wn.Idle),
                                d = m[0],
                                _ = m[1],
                                E = d === Wn.In,
                                h = d === Wn.End,
                                b = d === Wn.Idle,
                                A = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (b && !u) {
                                    return gu(() => {
                                        A(Wn.In);
                                    }, t);
                                }
                            }, [A, u, b, t]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        return gu(() => {
                                            o && o(), A(Wn.End);
                                        }, e + t);
                                    }
                                }, [A, E, o, t, e]);
                            const p = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                g = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - i)}%`, left: `${c ? i : r}%` }),
                                    [r, c, i],
                                );
                            return h
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: Hn, style: F },
                                      a().createElement(
                                          'div',
                                          { style: b ? p : g, className: Yn },
                                          a().createElement(kn, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    $n = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Nn, {
                                    size: t,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: i,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    a().createElement(Xn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Un = 'ProgressBarDeltaGrow_base_7e',
                    Gn = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    zn = 'ProgressBarDeltaGrow_glow_68',
                    jn = (e) => (e ? { left: 0 } : { right: 0 }),
                    Vn = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Kn = (e) => ({ transitionDuration: `${e}ms` }),
                    qn = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: s,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = i < r,
                                d = (0, n.useState)(On.Idle),
                                _ = d[0],
                                E = d[1],
                                h = _ === On.End,
                                b = _ === On.Idle,
                                A = _ === On.Grow,
                                p = _ === On.Shrink,
                                g = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                D = (0, n.useCallback)(
                                    (e, t) =>
                                        gu(() => {
                                            g(e);
                                        }, t),
                                    [g],
                                );
                            (0, n.useEffect)(() => {
                                if (!u)
                                    return b
                                        ? D(On.Grow, t)
                                        : A
                                          ? D(On.Shrink, e)
                                          : p
                                            ? D(On.End, e)
                                            : void (h && o && o());
                            }, [D, u, h, A, b, p, o, t, e]);
                            const B = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Kn(e), jn(m)), [m, e]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Kn(e), jn(m)), [m, e]),
                                C = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Vn(m, r), Kn(e)), [r, m, e]),
                                f = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - r)}%` }, Vn(m, r), Kn(e)),
                                    [r, m, i, e],
                                );
                            if (h) return null;
                            const w = F()(Un, c, m && 0 === i && Gn);
                            return a().createElement(
                                'div',
                                { style: b ? C : f, className: w },
                                a().createElement(
                                    'div',
                                    { style: p ? v : B, className: zn },
                                    a().createElement(kn, { size: s }),
                                ),
                            );
                        },
                    ),
                    Qn = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                d = (0, n.useState)(!1),
                                _ = d[0],
                                E = d[1],
                                h = (0, n.useCallback)(
                                    (e) => {
                                        e === On.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                b = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Nn, {
                                    size: t,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: i,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: _ ? A : b,
                                }),
                                u >= 0 &&
                                    a().createElement(qn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: h,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    Zn = ['onComplete', 'onEndAnimation'];
                function Jn() {
                    return (
                        (Jn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Jn.apply(this, arguments)
                    );
                }
                const ea = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Zn);
                        const s = (0, n.useState)(!1),
                            i = s[0],
                            o = s[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== i && o(e), e && t && t(), u && u();
                            }, [i, t, u, r.to]);
                        switch (r.animationSettings.type) {
                            case Tn.Simple:
                                return a().createElement($n, Jn({}, r, { onEndAnimation: l, isComplete: i }));
                            case Tn.Growing:
                                return a().createElement(Qn, Jn({}, r, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    ta = ['onEndAnimation'];
                function ua() {
                    return (
                        (ua =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ua.apply(this, arguments)
                    );
                }
                const na = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, ta);
                    const r = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            (r.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof r.current.from ? r.current.from : u.from;
                    return (
                        (r.current.from = i),
                        a().createElement(ea, ua({}, u, { onEndAnimation: s, key: `${i}-${u.to}`, from: i }))
                    );
                });
                function aa() {
                    return (
                        (aa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        aa.apply(this, arguments)
                    );
                }
                const ra = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: s,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return a().createElement(In, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: n,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return s.withStack
                                ? a().createElement(na, c)
                                : a().createElement(ea, aa({ key: `${r}-${t}` }, c));
                        },
                    ),
                    sa = (e) => ({
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
                    ia = (e, t, u) => (u < e ? e : u > t ? t : u),
                    oa = (e, t, u) => {
                        if ('number' == typeof u) {
                            return (ia(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    la = {
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
                    ca = {
                        freezed: !1,
                        withStack: !1,
                        type: Tn.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ma = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = la,
                            size: u = Pn.Default,
                            animationSettings: r = ca,
                            disabled: s = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: m,
                            onEndAnimation: d,
                            onComplete: _,
                        }) => {
                            const E = ((e, t, u) =>
                                (0, n.useMemo)(() => {
                                    const n = (ia(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: oa(n, t, u) };
                                }, [u, t, e]))(o, e, l);
                            return a().createElement(
                                'div',
                                { className: F()(yn.base, yn[`base__${u}`]), style: sa(t) },
                                !i && a().createElement(Rn, { size: u }),
                                a().createElement(ra, {
                                    size: u,
                                    lineRef: c,
                                    disabled: s,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: m,
                                    onComplete: _,
                                }),
                            );
                        },
                    );
                var da = u(403);
                function _a() {
                    return !1;
                }
                console.log;
                var Ea = u(174);
                function ha(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ba(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return ba(e, t);
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
                function ba(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Aa = (e) => (0 === e ? window : window.subViews.get(e));
                const pa = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: i, children: o, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    m = (u, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = Aa,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = a.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = u(t),
                                                        r = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = s.O.view.addModelObserver(o, t, !0);
                                                        return a.set(l, u), e && u(i(r)), l;
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
                                                        for (var e, u = ha(a.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            o =
                                                'real' === u
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            m = (e) => c.current.push(e),
                                            d = e({
                                                mode: u,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            a = Ea.LO.box(n, { equals: _a });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, Ea.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            a = Ea.LO.box(n, { equals: _a });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, Ea.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = Ea.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, Ea.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                s = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = Ea.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, Ea.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                s[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: m,
                                            }),
                                            _ = { mode: u, model: d, externalModel: o, cleanup: m };
                                        return {
                                            model: d,
                                            controls: 'mocks' === u && a ? a.controls(_) : t(_),
                                            externalModel: o,
                                            mode: u,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(r),
                                    E = _[0],
                                    h = _[1],
                                    b = (0, n.useState)(() => m(r, i, l)),
                                    A = b[0],
                                    p = b[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? p(m(E, i, l)) : (d.current = !0);
                                    }, [l, E, i]),
                                    (0, n.useEffect)(() => {
                                        h(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    a().createElement(u.Provider, { value: A }, o)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                root: e.object(),
                                battlePassProgress: e.object('personalResults.battlePassProgress'),
                            };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            submit: e.createCallbackNoArgs('personalResults.battlePassProgress.onSubmitClick'),
                        }),
                    ),
                    ga = pa[0],
                    Fa = pa[1];
                let Da, Ba;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(Da || (Da = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(Ba || (Ba = {}));
                Da.style, Da.tankman;
                let va, Ca, fa, wa, Sa, La, ya;
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
                        (e.CosmicLootboxCommon = 'cosmic_2024_2');
                })(va || (va = {})),
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
                    })(Ca || (Ca = {})),
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
                    })(fa || (fa = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(wa || (wa = {})),
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
                    })(Sa || (Sa = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(La || (La = {})),
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
                    })(ya || (ya = {}));
                va.Items,
                    va.Equipment,
                    va.Xp,
                    va.XpFactor,
                    va.Blueprints,
                    va.BlueprintsAny,
                    va.Goodies,
                    va.Berths,
                    va.Slots,
                    va.Tokens,
                    va.CrewSkins,
                    va.CrewBooks,
                    va.Customizations,
                    va.CreditsFactor,
                    va.TankmenXp,
                    va.TankmenXpFactor,
                    va.FreeXpFactor,
                    va.BattleToken,
                    va.PremiumUniversal,
                    va.NaturalCover,
                    va.BpCoin,
                    va.BattlePassSelectToken,
                    va.BattlaPassFinalAchievement,
                    va.BattleBadge,
                    va.BonusX5,
                    va.CrewBonusX3,
                    va.NewYearFillers,
                    va.NewYearInvoice,
                    va.EpicSelectToken,
                    va.Comp7TokenWeeklyReward,
                    va.Comp7TokenCouponReward,
                    va.BattleBoosterGift,
                    va.CosmicLootboxCommon,
                    va.CosmicLootboxSilver,
                    va.Gold,
                    va.Credits,
                    va.Crystal,
                    va.FreeXp,
                    va.BattlePassPoints,
                    va.PremiumPlus,
                    va.Premium;
                let Pa, Ta, Ra, xa, ka, Ma;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'),
                        (e.Disabled = 'disabled');
                })(Pa || (Pa = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(Ta || (Ta = {})),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(Ra || (Ra = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(xa || (xa = {})),
                    (function (e) {
                        (e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen');
                    })(ka || (ka = {})),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(Ma || (Ma = {}));
                const Na = {
                        base: 'Emblem_base_be',
                        progress: 'Emblem_progress_37',
                        progress__small: 'Emblem_progress__small_42',
                        progress__completed: 'Emblem_progress__completed_69',
                        hideProgress: 'Emblem_hideProgress_b4',
                        progress__hidden: 'Emblem_progress__hidden_6d',
                        image: 'Emblem_image_dc',
                        image__micro: 'Emblem_image__micro_aa',
                        image__small: 'Emblem_image__small_ce',
                        image__open: 'Emblem_image__open_43',
                        image__openSmall: 'Emblem_image__openSmall_5d',
                        image__openMicro: 'Emblem_image__openMicro_a9',
                        image__battlePass: 'Emblem_image__battlePass_ba',
                        image__battlePassSmall: 'Emblem_image__battlePassSmall_d5',
                        image__battlePassMicro: 'Emblem_image__battlePassMicro_6e',
                        image__battlePassOpen: 'Emblem_image__battlePassOpen_36',
                        image__battlePassSmallOpen: 'Emblem_image__battlePassSmallOpen_2f',
                        image__battlePassMicroOpen: 'Emblem_image__battlePassMicroOpen_e5',
                        image__seasonWaiting: 'Emblem_image__seasonWaiting_96',
                        image__seasonWaitingSmall: 'Emblem_image__seasonWaitingSmall_c0',
                        image__seasonWaitingMicro: 'Emblem_image__seasonWaitingMicro_86',
                        image__completedFree: 'Emblem_image__completedFree_56',
                        image__completedFreeSmall: 'Emblem_image__completedFreeSmall_a1',
                        image__completedFreeMicro: 'Emblem_image__completedFreeMicro_45',
                        image__completedFreeOpen: 'Emblem_image__completedFreeOpen_08',
                        image__completedFreeSmallOpen: 'Emblem_image__completedFreeSmallOpen_91',
                        image__completedFreeMicroOpen: 'Emblem_image__completedFreeMicroOpen_d3',
                        image__completedGolden: 'Emblem_image__completedGolden_77',
                        image__completedGoldenSmall: 'Emblem_image__completedGoldenSmall_be',
                        image__completedGoldenMicro: 'Emblem_image__completedGoldenMicro_2d',
                        marathon: 'Emblem_marathon_c6',
                        resource: 'Emblem_resource_97',
                        marathon__micro: 'Emblem_marathon__micro_61',
                        resource__micro: 'Emblem_resource__micro_67',
                        marathon__small: 'Emblem_marathon__small_0b',
                        resource__small: 'Emblem_resource__small_41',
                        hideLevel: 'Emblem_hideLevel_f2',
                        showLevel: 'Emblem_showLevel_c5',
                        hideLevelSmall: 'Emblem_hideLevelSmall_cc',
                        showLevelSmall: 'Emblem_showLevelSmall_31',
                        hideLevelMicro: 'Emblem_hideLevelMicro_15',
                        showLevelMicro: 'Emblem_showLevelMicro_bc',
                        showIcon: 'Emblem_showIcon_c2',
                        showIconSmall: 'Emblem_showIconSmall_1d',
                        showIconMicro: 'Emblem_showIconMicro_f8',
                    },
                    Ia = (e) => {
                        switch (e) {
                            case Ra.Micro:
                                return 's';
                            case Ra.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    Oa = (e, t, u = '') => {
                        const n = u.length > 0 ? `_${u}` : u,
                            a = e.$dyn(`c_${t}${n}`),
                            r = e.$dyn(`common${n}`);
                        return a || r;
                    },
                    Wa = (e, t, u) => {
                        const n = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            a = t ? 'BP' : '',
                            r = `${Ia(u)}${a}`;
                        return { backgroundImage: `url(${Oa(n, e, r)})` };
                    },
                    Ha = (e, t, u, n) => {
                        const a = R.images.gui.maps.icons.battlePass.logo,
                            r = Oa(a, e, `emblem${n ? '_BP' : ''}${u ? '_open' : ''}${t}`);
                        return r ? { backgroundImage: `url(${r})` } : void 0;
                    },
                    Ya = {
                        base: 'Label_base_85',
                        textWithBlend: 'Label_textWithBlend_07',
                        textWithBlend__show: 'Label_textWithBlend__show_fa',
                        show: 'Label_show_69',
                        textWithBlend__new: 'Label_textWithBlend__new_4a',
                        textWithBlend__hide: 'Label_textWithBlend__hide_f1',
                        hide: 'Label_hide_33',
                        textMask: 'Label_textMask_7f',
                        textMask__gold: 'Label_textMask__gold_71',
                        textMask__goldContrast: 'Label_textMask__goldContrast_05',
                        textMask__animated: 'Label_textMask__animated_38',
                        maskAppearance: 'Label_maskAppearance_26',
                        textMask__micro: 'Label_textMask__micro_37',
                        textMask__small: 'Label_textMask__small_54',
                        textMask__medium: 'Label_textMask__medium_eb',
                        textMask__large: 'Label_textMask__large_0a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_4c',
                        text: 'Label_text_67',
                        text__micro: 'Label_text__micro_a4',
                        text__small: 'Label_text__small_e0',
                        text__large: 'Label_text__large_65',
                        text__extraLarge: 'Label_text__extraLarge_22',
                        text__blended: 'Label_text__blended_67',
                        text__filtered: 'Label_text__filtered_86',
                        text__rewardScreen: 'Label_text__rewardScreen_68',
                        textAppearance: 'Label_textAppearance_31',
                        text__show: 'Label_text__show_95',
                        text__hide: 'Label_text__hide_37',
                        text__hideWithDelay: 'Label_text__hideWithDelay_53',
                        text__new: 'Label_text__new_a0',
                        hideLevel: 'Label_hideLevel_61',
                        showLevel: 'Label_showLevel_55',
                        hideLevelSmall: 'Label_hideLevelSmall_9d',
                        showLevelSmall: 'Label_showLevelSmall_96',
                        hideLevelMicro: 'Label_hideLevelMicro_9e',
                        showLevelMicro: 'Label_showLevelMicro_50',
                        showIcon: 'Label_showIcon_0f',
                        showIconSmall: 'Label_showIconSmall_96',
                        hideProgress: 'Label_hideProgress_0c',
                        showIconMicro: 'Label_showIconMicro_1e',
                    },
                    Xa = ({
                        level: e,
                        size: t,
                        isGold: u,
                        isForRewardScreen: n,
                        curState: r,
                        isFirstLevel: s,
                        showProgressionCompleted: i,
                    }) => {
                        const o = F()(Ya.base, Ya[`base__${t}`]),
                            l = F()(
                                Ya.text,
                                Ya.text__filtered,
                                Ya[`text__${t}`],
                                Ya[`text__${r}`],
                                i && Ya.text__hideWithDelay,
                                s && Ya.text__new,
                                n && Ya.text__rewardScreen,
                            ),
                            c = F()(
                                Ya.textWithBlend,
                                s && Ya.text__new,
                                i && Ya.text__hideWithDelay,
                                Ya[`textWithBlend__${r}`],
                            ),
                            m = F()(Ya.text, Ya.text__blended, Ya[`text__${t}`], n && Ya.text__rewardScreen),
                            d = F()(
                                Ya.textMask,
                                u && Ya.textMask__gold,
                                n && Ya.textMask__animated,
                                u && n && Ya.textMask__goldContrast,
                                Ya[`textMask__${t}`],
                            );
                        return a().createElement(
                            'div',
                            { className: o },
                            a().createElement('div', { className: l }, e),
                            a().createElement(
                                'div',
                                { className: c },
                                a().createElement('div', { className: m }, e),
                                a().createElement('div', { className: d }),
                            ),
                        );
                    },
                    $a = {
                        label: 'EmblemLabels_label_14',
                        label__small: 'EmblemLabels_label__small_a3',
                        label__micro: 'EmblemLabels_label__micro_4b',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_26',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_77',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_c1',
                        label__show: 'EmblemLabels_label__show_3d',
                        showLevel: 'EmblemLabels_showLevel_04',
                        label__showSmall: 'EmblemLabels_label__showSmall_7e',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_2f',
                        label__hide: 'EmblemLabels_label__hide_28',
                        hideLevel: 'EmblemLabels_hideLevel_be',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_65',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_c1',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_68',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_36',
                        label__new: 'EmblemLabels_label__new_d7',
                        label__newSmall: 'EmblemLabels_label__newSmall_c1',
                        label__disabled: 'EmblemLabels_label__disabled_b6',
                        icon: 'EmblemLabels_icon_40',
                        icon__small: 'EmblemLabels_icon__small_f3',
                        icon__micro: 'EmblemLabels_icon__micro_cf',
                        icon__animated: 'EmblemLabels_icon__animated_09',
                        showIcon: 'EmblemLabels_showIcon_d3',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_e4',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_10',
                        showIconSmall: 'EmblemLabels_showIconSmall_cb',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_65',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_ab',
                        hideProgress: 'EmblemLabels_hideProgress_7f',
                        showIconMicro: 'EmblemLabels_showIconMicro_5c',
                    },
                    Ua = (e, t) => {
                        const u = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case Ra.Small:
                                    return 'l';
                                case Ra.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${u}`;
                    },
                    Ga = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: u,
                            battlePassState: n,
                            hasProgression: r,
                            isGolden: s,
                            labelAnimation: i,
                            newLabelAnimation: o,
                            isChapterChosen: l = !1,
                            chapterID: c = 0,
                            isProgressionCompleted: m = !1,
                            hasBeenActive: d = !1,
                            isChapterSelection: _ = !1,
                            isProgression: E = !1,
                        }) => {
                            let h = '',
                                b = '';
                            u === Ra.Small
                                ? ((h = 'Small'), (b = '__small'))
                                : u === Ra.Micro && ((h = 'Micro'), (b = '__micro'));
                            const A = n === ka.SwitchedChapterRightNow,
                                p = n === ka.CompletedRightNow,
                                g = ((e, t, u, n, a) => (e || a ? t || !u : t || !n))(_, m, d, l, E),
                                D = !E && !_;
                            return a().createElement(
                                a().Fragment,
                                null,
                                g
                                    ? a().createElement('div', {
                                          className: F()($a.icon, b && $a[`icon${b}`], p && $a[`icon__animated${h}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = Ua(s, u);
                                                  if (D) {
                                                      if (m) return e.tank.$dyn(`tank_${t}`);
                                                      if (!l) return e.$dyn('not_chosen');
                                                  }
                                                  return Oa(e.chapterIcons, c, t);
                                              })()})`,
                                          },
                                      })
                                    : a().createElement(
                                          'div',
                                          {
                                              className: F()(
                                                  $a.label,
                                                  $a[`label${b}`],
                                                  A && $a.label__new,
                                                  A && $a[`label__new${h}`],
                                                  !p && m && $a.label__disabled,
                                                  $a[`label__${i}${h}`],
                                                  r && $a[`label__hasProgress${h}`],
                                                  r && $a[`label__hasProgress${h}${E ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          a().createElement(Xa, {
                                              level: t,
                                              size: u,
                                              isGold: s,
                                              isFirstLevel: A,
                                              curState: i,
                                              showProgressionCompleted: p,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    a().createElement(
                                        'div',
                                        {
                                            className: F()(
                                                $a.label,
                                                $a[`label${b}`],
                                                A && $a.label__new,
                                                A && $a[`label__new${h}`],
                                                $a[`label__${o}${h}`],
                                                r && $a[`label__hasProgress${h}`],
                                            ),
                                        },
                                        a().createElement(Xa, {
                                            level: e,
                                            size: u,
                                            isGold: s,
                                            isFirstLevel: A,
                                            curState: o,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    ),
                    za = {
                        base: 'EmblemProgressBar_base_5c',
                        base__small: 'EmblemProgressBar_base__small_6c',
                        base__completed: 'EmblemProgressBar_base__completed_6d',
                        hideProgress: 'EmblemProgressBar_hideProgress_18',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_20',
                        base__hidden: 'EmblemProgressBar_base__hidden_8b',
                        hideLevel: 'EmblemProgressBar_hideLevel_1e',
                        showLevel: 'EmblemProgressBar_showLevel_5d',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_ae',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_df',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_13',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_ae',
                        showIcon: 'EmblemProgressBar_showIcon_55',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_26',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_78',
                    },
                    ja = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: u,
                            isProgressionCompleted: n,
                            size: r,
                        }) => {
                            const s = F()(
                                za.base,
                                za[`base__${r}`],
                                u && za.base__completed,
                                !u && n && za.base__hidden,
                            );
                            return a().createElement(
                                'div',
                                { className: s },
                                a().createElement(ma, {
                                    key: e.to,
                                    size: Pn.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function Va() {
                    return (
                        (Va =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Va.apply(this, arguments)
                    );
                }
                const Ka = (0, n.memo)((e) => {
                        const t = e.progression,
                            u = e.size,
                            n = e.battlePassState,
                            r = e.hasBattlePass,
                            s = e.isChapterChosen,
                            i = e.hasBeenActive,
                            o = void 0 !== i && i,
                            l = e.isChapterSelection,
                            c = void 0 !== l && l,
                            m = e.isOpen,
                            d = void 0 !== m && m,
                            _ = e.isProgression,
                            E = void 0 !== _ && _,
                            h = e.showProgressBar,
                            b = void 0 === h || h,
                            A = e.chapterType,
                            p = e.chapterID;
                        let g = '',
                            D = '',
                            B = '';
                        u === Ra.Small
                            ? ((g = 'Small'), (D = '__small'), (B = '_small'))
                            : u === Ra.Micro && ((g = 'Micro'), (D = '__micro'), (B = '_micro'));
                        const v = d ? 'Open' : '',
                            C = n === ka.CompletedRightNow,
                            f = r || n === ka.Bought,
                            w = (n === ka.Completed || C) && f,
                            S = (n === ka.Completed || C) && !f,
                            L = w || S,
                            y = F()(
                                Na.image,
                                Na[`image${D}`],
                                d && Na[`image__open${g}`],
                                f && Na[`image__battlePass${g}${v}`],
                                n === ka.AwaitSeason && Na[`image__seasonWaiting${g}`],
                                S && Na[`image__completedFree${g}${v}`],
                            ),
                            P = F()(Na[`${A}`], Na[`${A}${D}`]),
                            T = void 0 !== t.from,
                            R = b && ((T && s) || o);
                        return a().createElement(
                            'div',
                            { className: Na.base },
                            a().createElement('div', { className: P }),
                            a().createElement(
                                'div',
                                { className: y, style: Ha(p, B, d, f) },
                                n !== ka.AwaitSeason &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            Ga,
                                            Va(
                                                {
                                                    hasProgression: T,
                                                    isGolden: f,
                                                    isProgressionCompleted: L,
                                                    isChapterChosen: s,
                                                    hasBeenActive: o,
                                                    isChapterSelection: c,
                                                    isProgression: E,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        R &&
                                            a().createElement(ja, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: C,
                                                isProgressionCompleted: L,
                                                size: u,
                                            }),
                                    ),
                            ),
                        );
                    }),
                    qa = 'BattlePassEmblem_base_65',
                    Qa = 'BattlePassEmblem_flag_0c',
                    Za = 'BattlePassEmblem_flag__isChapterChosen_08',
                    Ja = 'BattlePassEmblem_emblem_2c',
                    er = 'BattlePassEmblem_chapterLogoIcon_4d',
                    tr = 'BattlePassEmblem_freePoints_8e',
                    ur = (e, t) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.flag;
                        return { backgroundImage: `url(${Oa(u, e, t ? 's' : 'm')})` };
                    },
                    nr = (0, da.Pi)(() => {
                        const e = Fa(),
                            t = e.model,
                            u = e.controls,
                            n = t.battlePassProgress.get(),
                            r = n.freePoints,
                            s = n.chapterID,
                            i = n.currentLevel,
                            o = n.currentLevelPoints,
                            l = n.isBattlePassPurchased,
                            c = n.progressionState,
                            m = n.chapterState,
                            d = { level: i, from: o },
                            _ = c === _u,
                            E = 0 !== s && m === Eu.Active,
                            h = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(d),
                            b = h && E,
                            A = _ ? ka.Completed : b ? (l ? ka.Bought : ka.Free) : ka.ChapterNotChosen,
                            p = w().mediaSize <= v.Small,
                            g = p ? Ra.Micro : Ra.Small,
                            D = A === ka.Completed,
                            B = b && !D,
                            C = A === ka.Bought,
                            f = _ && r > 0;
                        return a().createElement(
                            'div',
                            {
                                className: qa,
                                onClick: u.submit,
                                onMouseDown: () => {
                                    W.playClick();
                                },
                                onMouseOver: () => {
                                    W.playHighlight();
                                },
                            },
                            !_ && b && a().createElement('div', { className: F()(Qa, B && Za), style: ur(s, p) }),
                            a().createElement(
                                'div',
                                { className: Ja },
                                a().createElement(Ka, {
                                    progression: d,
                                    size: g,
                                    battlePassState: A,
                                    hasBattlePass: l,
                                    isChapterChosen: E,
                                    isProgression: !1,
                                    chapterID: s,
                                    hasBeenActive: b,
                                    showProgressBar: !1,
                                    isOpen: B || f,
                                    chapterType: Ba.Default,
                                }),
                                B && a().createElement('div', { className: er, style: Wa(s, C, g) }),
                                f && a().createElement('div', { className: tr }, r),
                            ),
                        );
                    }),
                    ar = {
                        base: 'BattlePassWidget_base_99',
                        content: 'BattlePassWidget_content_f7',
                        base__progress: 'BattlePassWidget_base__progress_a5',
                        title: 'BattlePassWidget_title_b9',
                        base__progressionCompleted: 'BattlePassWidget_base__progressionCompleted_54',
                        base__chapterNotChosen: 'BattlePassWidget_base__chapterNotChosen_0e',
                        progressionContainer: 'BattlePassWidget_progressionContainer_bf',
                        progressionBar: 'BattlePassWidget_progressionBar_25',
                        achievedPoints: 'BattlePassWidget_achievedPoints_df',
                        plus: 'BattlePassWidget_plus_ef',
                        pointsStats: 'BattlePassWidget_pointsStats_f9',
                        pointsMax: 'BattlePassWidget_pointsMax_21',
                        icon: 'BattlePassWidget_icon_85',
                        progressionCompleted: 'BattlePassWidget_progressionCompleted_8b',
                        chapterNotChosen: 'BattlePassWidget_chapterNotChosen_5a',
                        notUsedPoints: 'BattlePassWidget_notUsedPoints_63',
                    },
                    rr = (0, da.Pi)(({ animationTrigger: e, isAnimationSkipped: t }) => {
                        const u = Fa().model.battlePassProgress.get(),
                            r = u.maxPoints,
                            s = u.earnedPoints,
                            i = u.currentLevelPoints,
                            o = u.progressionState,
                            l = u.chapterID,
                            c = u.chapterState,
                            m = u.freePoints,
                            d = R.strings.battle_royale.battleResult.battlePassWidget,
                            _ = (0, n.useState)(ca.delta.duration),
                            E = _[0],
                            h = _[1],
                            b = (0, n.useState)(!0),
                            A = b[0],
                            p = b[1],
                            g = Boolean(s),
                            D = o === _u,
                            B = 0 !== l && c === Eu.Active,
                            v = D
                                ? d.tooltips.progressionCompleted()
                                : B
                                  ? d.tooltips.inProgress()
                                  : d.tooltips.chapterNotChosen(),
                            C = Object.assign({}, ca, { freezed: A, delta: { duration: E, delay: 0 } });
                        (0, n.useEffect)(() => {
                            if (g && e && !t)
                                return (
                                    p(!1),
                                    O(R.sounds.bp_progress_bar_start()),
                                    gu(() => {
                                        O(R.sounds.bp_progress_bar_stop());
                                    }, ca.delta.duration)
                                );
                        }, [e, t, g]),
                            (0, n.useEffect)(() => {
                                g && t && (h(0), O(R.sounds.bp_progress_bar_stop()), e || p(!1));
                            }, [e, t, g]);
                        const f = F()(
                            ar.base,
                            ar[`base__${o}`],
                            !D && B && ar.base__progress,
                            !D && !B && ar.base__chapterNotChosen,
                        );
                        return a().createElement(
                            'div',
                            { className: f },
                            a().createElement(
                                vt,
                                { body: v },
                                a().createElement('div', null, a().createElement(nr, null)),
                            ),
                            a().createElement(
                                'div',
                                { className: ar.content },
                                a().createElement('div', { className: ar.title }, d.title()),
                                !D &&
                                    !B &&
                                    a().createElement(
                                        'div',
                                        { className: ar.chapterNotChosen },
                                        a().createElement(Ln, {
                                            classMix: ar.chapterText,
                                            text: d.chapterNotChosen(),
                                            binding: {
                                                points: a().createElement('span', { className: ar.notUsedPoints }, m),
                                                icon: a().createElement('span', { className: ar.icon }),
                                            },
                                        }),
                                    ),
                                D &&
                                    a().createElement(
                                        'div',
                                        { className: ar.progressionCompleted },
                                        d.progressionCompleted(),
                                    ),
                                !D &&
                                    B &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            'div',
                                            { className: ar.progressionContainer },
                                            a().createElement(
                                                'div',
                                                { className: ar.progressionBar },
                                                a().createElement(ma, {
                                                    deltaFrom: i - s,
                                                    value: i,
                                                    maxValue: r,
                                                    animationSettings: C,
                                                }),
                                            ),
                                            g &&
                                                a().createElement(
                                                    'div',
                                                    { className: ar.achievedPoints },
                                                    a().createElement('span', { className: ar.plus }, '+'),
                                                    s,
                                                ),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: ar.pointsStats },
                                            i,
                                            '/',
                                            a().createElement('span', { className: ar.pointsMax }, r),
                                            a().createElement('span', { className: ar.icon }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    sr = 'Result_base_41',
                    ir = 'Result_title_6a',
                    or = 'Result_base__lose_b8',
                    lr = 'Result_base__win_32',
                    cr = 'Result_content_35',
                    mr = 'Result_statItemStartState_d1',
                    dr = 'Result_ribbon_e5',
                    _r = 'Result_ribbonComponent_98',
                    Er = 'Result_battleRewardsList_b4',
                    hr = 'Result_battleRewardsItemStartState_62',
                    br = 'Result_battleRewardsItemStartStatePremium_33',
                    Ar = 'Result_widget_0b',
                    pr = 'Result_widget__battleQuests_a7',
                    gr = 'Result_widgetsContainer_4c',
                    Fr = 'ResultAnimations_baseEnterDone_b8',
                    Dr = { enterActive: 'ResultAnimations_baseEnterActive_dc', enterDone: Fr },
                    Br = { enterActive: 'ResultAnimations_itemsBase_f1', enterDone: Fr },
                    vr = { enterActive: 'ResultAnimations_ribbon_d9', enterDone: Fr },
                    Cr = { enterActive: 'ResultAnimations_battlePassWidget_10', enterDone: Fr },
                    fr = { enterActive: 'ResultAnimations_battleQuetsWidget_e0', enterDone: Fr },
                    wr = ['children'];
                function Sr() {
                    return (
                        (Sr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Sr.apply(this, arguments)
                    );
                }
                const Lr = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, wr);
                        return a().createElement(
                            gt,
                            Sr(
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
                    yr = 'BattleQuestsWidget_base_2d',
                    Pr = 'BattleQuestsWidget_content_32',
                    Tr = 'BattleQuestsWidget_emblemContainer_10',
                    Rr = 'BattleQuestsWidget_emblem_15',
                    xr = 'BattleQuestsWidget_glow_96',
                    kr = 'BattleQuestsWidget_title_0b',
                    Mr = 'BattleQuestsWidget_questsComplete_d9',
                    Nr = 'BattleQuestsWidget_questsCompleteContainer_d8',
                    Ir = (0, n.memo)(({ questCompleted: e }) => {
                        const t = (0, n.useMemo)(() => ({ tooltipId: 'QuestCompletedTooltip' }), []),
                            u = R.strings.battle_royale.battleResult.battleQuestsWidget;
                        return a().createElement(
                            M,
                            null,
                            a().createElement(
                                Lr,
                                { args: t, isEnabled: !0 },
                                a().createElement(
                                    'div',
                                    { className: yr },
                                    a().createElement(
                                        'div',
                                        { className: Tr },
                                        a().createElement('div', { className: xr }),
                                        a().createElement('div', { className: Rr }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Pr },
                                        a().createElement('div', { className: kr }, u.title()),
                                        a().createElement(
                                            'div',
                                            { className: Nr },
                                            a().createElement(
                                                'div',
                                                { className: Mr },
                                                Pt(u.questsComplete(), { count: e }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var Or;
                !(function (e) {
                    (e[(e.TitleEnter = 0)] = 'TitleEnter'),
                        (e[(e.StatsEnter = 1)] = 'StatsEnter'),
                        (e[(e.RibbonEnter = 2)] = 'RibbonEnter'),
                        (e[(e.BattleRewardsEnter = 3)] = 'BattleRewardsEnter'),
                        (e[(e.ProgressEnter = 4)] = 'ProgressEnter'),
                        (e[(e.AnimationFinished = 5)] = 'AnimationFinished');
                })(Or || (Or = {}));
                const Wr = a().memo(
                    ({
                        onAnimationComplete: e,
                        animationTrigger: t,
                        isAnimationSkipped: u,
                        isWinner: r,
                        isFirstPlace: s,
                    }) => {
                        const i = Oe('model.personalResults'),
                            o = i.finishResultLabel,
                            l = i.vehicleName,
                            c = i.vehicleType,
                            m = i.statsList,
                            d = i.place,
                            _ = i.hasPremium,
                            E = i.questCompleted,
                            h = i.battleRewardsList,
                            b = i.battleRewardsListWithPremium,
                            A = i.battlePassProgress,
                            p = 'disabled' !== A.battlePassState,
                            g = F()(sr, r && lr, !r && or),
                            D = _ ? br : hr,
                            B = (0, n.useState)(-1),
                            v = B[0],
                            C = B[1],
                            f = (0, n.useCallback)(() => {
                                if (u) return;
                                let t = v + 1;
                                switch (t) {
                                    case Or.ProgressEnter:
                                        0 === A.earnedPoints && (t += 1);
                                        break;
                                    case Or.RibbonEnter:
                                        O(R.sounds.BR_result_redtape());
                                }
                                t === Or.AnimationFinished && e && e(), C(t);
                            }, [u, v, A.earnedPoints, e]);
                        (0, n.useEffect)(() => {
                            t && !u && C(0);
                        }, [t, u]),
                            (0, n.useEffect)(() => {
                                u && C(Or.AnimationFinished);
                            }, [u]);
                        const w = F()(Ar, p && pr),
                            S = l && systemLocale.toUpperCase(l);
                        return a().createElement(
                            'div',
                            { className: g },
                            a().createElement(
                                'div',
                                { className: ir },
                                a().createElement(Xu, {
                                    finishResultLabel: o,
                                    isFirstPlace: s,
                                    place: d,
                                    isWinner: r,
                                    vehicleType: c,
                                    vehicleName: S,
                                    animationTrigger: v >= Or.TitleEnter,
                                    isAnimationSkipped: u,
                                    onAnimationComplete: f,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: cr },
                                a().createElement(pu, {
                                    statsList: m,
                                    animationTrigger: v >= Or.StatsEnter,
                                    isAnimationSkipped: u,
                                    onAnimationComplete: f,
                                    itemStartState: mr,
                                    itemFinishState: Br,
                                    transitionTimeout: 200,
                                    isWinner: r,
                                }),
                                a().createElement(
                                    'div',
                                    { className: dr },
                                    a().createElement(
                                        We.Z,
                                        {
                                            timeout: 500,
                                            in: v >= Or.RibbonEnter,
                                            enter: !u,
                                            classNames: vr,
                                            onEntered: f,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: _r },
                                            a().createElement(Fn, {
                                                battleRewardsListWithPremium: b,
                                                isWinner: r,
                                                hasPremium: _,
                                            }),
                                        ),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Er },
                                        a().createElement(wn, {
                                            battleRewardsList: h,
                                            animationTrigger: v >= Or.BattleRewardsEnter,
                                            isAnimationSkipped: u,
                                            onAnimationComplete: f,
                                            itemStartState: D,
                                            itemFinishState: Dr,
                                            transitionTimeout: 200,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: gr },
                                    p &&
                                        a().createElement(
                                            We.Z,
                                            {
                                                timeout: 500,
                                                in: v >= Or.ProgressEnter,
                                                enter: !u,
                                                classNames: Cr,
                                                onEntered: f,
                                            },
                                            a().createElement(
                                                'div',
                                                { className: Ar },
                                                a().createElement(rr, {
                                                    animationTrigger: v >= Or.AnimationFinished,
                                                    isAnimationSkipped: u,
                                                }),
                                            ),
                                        ),
                                    E > 0 &&
                                        a().createElement(
                                            M,
                                            null,
                                            a().createElement(
                                                We.Z,
                                                {
                                                    timeout: 500,
                                                    in: v >= Or.ProgressEnter,
                                                    enter: !u,
                                                    classNames: fr,
                                                    onEntered: f,
                                                },
                                                a().createElement(
                                                    'div',
                                                    { className: w },
                                                    a().createElement(Ir, { questCompleted: E }),
                                                ),
                                            ),
                                        ),
                                ),
                            ),
                        );
                    },
                );
                let Hr;
                var Yr;
                !(function (e) {
                    (e.Results = 'results'), (e.Leaderboard = 'leaderboard');
                })(Hr || (Hr = {})),
                    (function (e) {
                        (e[(e.BackgroundEnter = 0)] = 'BackgroundEnter'),
                            (e[(e.TabBarEnter = 1)] = 'TabBarEnter'),
                            (e[(e.ResultContentEnter = 2)] = 'ResultContentEnter'),
                            (e[(e.BottomComponentsEnter = 3)] = 'BottomComponentsEnter'),
                            (e[(e.AnimationFinished = 4)] = 'AnimationFinished');
                    })(Yr || (Yr = {}));
                const Xr = () => {
                    const e = Oe('model').mapName,
                        t = Oe('model.personalResults').place,
                        u = (0, n.useState)(Hr.Results),
                        r = u[0],
                        s = u[1],
                        i = (0, n.useState)({ animationStage: -1, isSkipped: !1 }),
                        o = i[0],
                        l = i[1];
                    (0, n.useEffect)(
                        () =>
                            fe(() => {
                                l({ animationStage: 0, isSkipped: !1 });
                            }),
                        [],
                    );
                    const c = (0, n.useCallback)(() => {
                            (o.animationStage = Yr.AnimationFinished), (o.isSkipped = !0), l(Object.assign({}, o));
                        }, [o]),
                        m = (0, n.useCallback)(
                            (e) => {
                                const t = e.currentTarget.getAttribute('tab-key');
                                o.isSkipped || c(), s(t);
                            },
                            [o.isSkipped, c],
                        ),
                        d = (0, n.useCallback)(() => {
                            (0, Se.Sy)();
                        }, []),
                        _ = (0, n.useCallback)(() => {
                            o.isSkipped ? d() : c();
                        }, [o.isSkipped, d, c]);
                    ye(we.n.ESCAPE, _);
                    const E = (0, n.useCallback)(() => {
                            o.isSkipped ||
                                ((o.animationStage += 1),
                                o.animationStage === Yr.AnimationFinished
                                    ? (o.isSkipped = !0)
                                    : l(Object.assign({}, o)));
                        }, [o]),
                        h = Ut.includes(t),
                        b = 1 === t;
                    return a().createElement(
                        'div',
                        { className: He },
                        a().createElement(
                            We.Z,
                            {
                                in: o.animationStage >= Yr.BackgroundEnter,
                                timeout: 500,
                                classNames: et,
                                enter: !o.isSkipped,
                                onEntered: E,
                            },
                            a().createElement(
                                'div',
                                { className: F()(Ye, h && je) },
                                a().createElement('div', { className: ze }),
                                a().createElement('div', { className: Ge }),
                            ),
                        ),
                        a().createElement(
                            'div',
                            { className: F()($e, r === Hr.Results && Ue) },
                            a().createElement(Wr, {
                                animationTrigger: o.animationStage >= Yr.ResultContentEnter,
                                isAnimationSkipped: o.isSkipped,
                                onAnimationComplete: E,
                                isWinner: h,
                                isFirstPlace: b,
                            }),
                        ),
                        a().createElement(
                            'div',
                            { className: F()($e, r === Hr.Leaderboard && Ue) },
                            a().createElement(du, null),
                        ),
                        a().createElement(
                            We.Z,
                            {
                                timeout: 500,
                                in: o.animationStage >= Yr.TabBarEnter,
                                enter: !o.isSkipped,
                                className: Xe,
                                classNames: tt,
                                onEntered: E,
                            },
                            a().createElement(
                                J,
                                { isTabsCentered: !0 },
                                a().createElement(
                                    'div',
                                    { 'tabs-role': K.LIST },
                                    a().createElement(
                                        Fe,
                                        { 'tabs-role': K.TAB, 'tab-key': Hr.Results, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.result(),
                                    ),
                                    a().createElement(
                                        Fe,
                                        { 'tabs-role': K.TAB, 'tab-key': Hr.Leaderboard, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.leaderboard(),
                                    ),
                                ),
                            ),
                        ),
                        a().createElement(
                            We.Z,
                            {
                                timeout: 500,
                                in: o.animationStage >= Yr.BottomComponentsEnter,
                                enter: !o.isSkipped,
                                classNames: Je,
                                onEntered: E,
                            },
                            a().createElement(
                                'div',
                                { className: qe },
                                a().createElement('p', { className: Ke }, e),
                                a().createElement('div', { className: Ve }, a().createElement(lt, null)),
                            ),
                        ),
                        a().createElement(
                            'div',
                            { className: Qe },
                            a().createElement(Ce, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: d,
                            }),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    I().render(
                        a().createElement(ga, null, a().createElement(M, null, a().createElement(Xr, null))),
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
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], r = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
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
        (__webpack_require__.j = 969),
        (() => {
            var e = { 969: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, s, i] = u,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [695], () => __webpack_require__(881));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
