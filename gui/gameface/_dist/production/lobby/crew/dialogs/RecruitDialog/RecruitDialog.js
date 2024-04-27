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
                function o(e, u) {
                    if (!r) throw new Error('No element matching method supported');
                    return r.call(e, u);
                }
                function i(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function l(e, u) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return o(e, u);
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
                    E = { immediately: !1 };
                function m(e, u, t) {
                    void 0 === t && (t = {});
                    var n = e.element.classList,
                        r = c.scrolling(u);
                    n.contains(r) ? clearTimeout(d[u]) : n.add(r);
                }
                function _(e, u, t) {
                    void 0 === t && (t = {});
                    Object.assign(E, t).immediately
                        ? e.isAlive && e.element.classList.remove(c.scrolling(u))
                        : (d[u] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(c.scrolling(u));
                          }, e.settings.scrollingThreshold));
                }
                var A = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    D = { isEmpty: { configurable: !0 } };
                (A.prototype.bind = function (e, u) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(u),
                        this.element.addEventListener(e, u, !1);
                }),
                    (A.prototype.unbind = function (e, u) {
                        var t = this;
                        this.handlers[e] = this.handlers[e].filter(function (n) {
                            return !(!u || n === u) || (t.element.removeEventListener(e, n, !1), !1);
                        });
                    }),
                    (A.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (D.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (u) {
                            return 0 === e.handlers[u].length;
                        });
                    }),
                    Object.defineProperties(A.prototype, D);
                var h = function () {
                    this.eventElements = [];
                };
                function F(e) {
                    return parseInt(e, 10) || 0;
                }
                (h.prototype.eventElement = function (e) {
                    var u = this.eventElements.filter(function (u) {
                        return u.element === e;
                    })[0];
                    return u || ((u = new A(e)), this.eventElements.push(u)), u;
                }),
                    (h.prototype.bind = function (e, u, t) {
                        this.eventElement(e).bind(u, t);
                    }),
                    (h.prototype.unbind = function (e, u, t) {
                        var n = this.eventElement(e);
                        n.unbind(u, t), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
                    }),
                    (h.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (h.prototype.once = function (e, u, t) {
                        var n = this.eventElement(e);
                        n.bind(u, function e(r) {
                            n.unbind(u, e), t(r);
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
                function C() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function p(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var u = document.createEvent('CustomEvent');
                    return u.initCustomEvent(e, !1, !1, void 0), u;
                }
                var g = function (e, u, t, n, r, o) {
                    var i;
                    if ((void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === o && (o = !1), 'top' === u))
                        i = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== u) throw new Error('A proper axis should be provided');
                        i = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, u, t, n, r, o) {
                        var i = t[0],
                            l = t[1],
                            a = t[2],
                            s = t[3],
                            c = t[4],
                            d = t[5];
                        void 0 === n && (n = !0);
                        void 0 === r && (r = !1);
                        void 0 === o && (o = !1);
                        var E = e.element;
                        if (!e.reach) return;
                        (e.reach[s] = null), E[a] < 1 && (e.reach[s] = 'start');
                        E[a] > e[i] - e[l] - 1 && (e.reach[s] = 'end');
                        u &&
                            !r &&
                            (E.dispatchEvent(p('ps-scroll-' + s)),
                            u < 0
                                ? E.dispatchEvent(p('ps-scroll-' + c))
                                : u > 0 && E.dispatchEvent(p('ps-scroll-' + d)),
                            n &&
                                (function (e, u) {
                                    m(e, u), _(e, u);
                                })(e, s));
                        e.reach[s] && (u || o) && E.dispatchEvent(p('ps-' + s + '-reach-' + e.reach[s]));
                    })(e, t, i, n, r, o);
                };
                var B = function (e, u, n, r) {
                    void 0 === u && (u = !1), void 0 === n && (n = 0), void 0 === r && (r = !1);
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
                            E = Math.floor(o.scrollLeft) - n,
                            m = parseFloat(getComputedStyle(document.documentElement).fontSize);
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
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = f(e, F((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                  (e.scrollbarXLeft = F(
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
                                  (e.scrollbarYHeight = f(e, F((e.railYHeight * e.containerHeight) / e.contentHeight))),
                                  (e.scrollbarYTop = F(
                                      (d * (e.railYHeight - e.scrollbarYHeight)) /
                                          (e.contentHeight - e.containerHeight),
                                  )))
                                : (e.scrollbarYActive = !1),
                            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                            (function (e, u, n) {
                                var r = { width: u.railXWidth },
                                    o = Math.floor(e.scrollTop);
                                u.isRtl
                                    ? (r.left =
                                          u.negativeScrollAdjustment + e.scrollLeft + u.containerWidth - u.contentWidth)
                                    : (r.left = e.scrollLeft);
                                u.isScrollbarXUsingBottom
                                    ? (r.bottom = u.scrollbarXBottom - o)
                                    : (r.top = u.scrollbarXTop + o);
                                t(u.scrollbarXRail, r);
                                var i = { top: o, height: u.railYHeight };
                                u.isScrollbarYUsingRight
                                    ? u.isRtl
                                        ? (i.right =
                                              u.contentWidth -
                                              (u.negativeScrollAdjustment + e.scrollLeft) -
                                              u.scrollbarYRight -
                                              u.scrollbarYOuterWidth)
                                        : (i.right = u.scrollbarYRight - e.scrollLeft)
                                    : u.isRtl
                                      ? (i.left =
                                            u.negativeScrollAdjustment +
                                            e.scrollLeft +
                                            2 * u.containerWidth -
                                            u.contentWidth -
                                            u.scrollbarYLeft -
                                            u.scrollbarYOuterWidth)
                                      : (i.left = u.scrollbarYLeft + e.scrollLeft);
                                t(u.scrollbarYRail, i),
                                    t(u.scrollbarX, {
                                        left: u.scrollbarXLeft,
                                        width: u.scrollbarXWidth - u.railBorderXWidth * n,
                                    }),
                                    t(u.scrollbarY, {
                                        top: u.scrollbarYTop,
                                        height: u.scrollbarYHeight - u.railBorderYWidth * n,
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
                                ? (o.classList.add(c.active('x')), g(e, 'left', E - e.lastScrollLeft, !0, u))
                                : (o.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (o.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (o.classList.add(c.active('y')), g(e, 'top', o.scrollTop - e.lastScrollTop, !0, u))
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
                function f(e, u) {
                    return (
                        e.settings.minScrollbarLength && (u = Math.max(u, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (u = Math.min(u, e.settings.maxScrollbarLength)),
                        u
                    );
                }
                var v = {
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
                        var u,
                            t = e.percentTimeElapsed,
                            n = e.x1,
                            r = e.y1,
                            o = e.x2,
                            i = e.y2;
                        return (
                            1 -
                            (n * ((u = t), Math.pow(u, 3)) +
                                r *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(t) +
                                o *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(t) +
                                i *
                                    (function (e) {
                                        return Math.pow(1 - e, 3);
                                    })(t))
                        );
                    },
                    S = { breakBounds: !1, startBound: 0, endBound: 0 },
                    y = function (e) {
                        var u = e.scrollableDomEle,
                            t = e.onAnimationCompleteCallback,
                            n = e.direction,
                            r = e.onRefUpdateCallback,
                            o = e.duration,
                            i = e.cubicBezierPoints,
                            l = e.easingPreset,
                            a = e.scrollAmount,
                            s = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = S);
                        var d = null,
                            E = null,
                            m = null,
                            _ = null,
                            A = u === window,
                            D = ['left', 'right'].indexOf(n) > -1,
                            h = ['right', 'bottom'].indexOf(n) > -1;
                        D
                            ? ((E = A ? 'scrollX' : 'scrollLeft'),
                              (_ = A ? 'innerWidth' : 'width'),
                              (m = 'scrollWidth'))
                            : ((E = A ? 'scrollY' : 'scrollTop'),
                              (_ = A ? 'innerHeight' : 'height'),
                              (m = 'scrollHeight'));
                        var F = u[E],
                            b = (function (e) {
                                var u,
                                    t = e.isWindow,
                                    n = e.scrollableDomEle,
                                    r = e.elementLengthProp,
                                    o = e.initialScrollPosition,
                                    i = e.isHorizontalDirection,
                                    l = e.scrollLengthProp,
                                    a = e.direction;
                                if (t) {
                                    var s = document.documentElement;
                                    u = i ? s.offsetWidth : s.offsetHeight;
                                } else u = (n[l] - n.getBoundingClientRect()[r]) | 0;
                                return ['left', 'top'].includes(a) ? o : u - o;
                            })({
                                isWindow: A,
                                scrollableDomEle: u,
                                elementLengthProp: _,
                                initialScrollPosition: F,
                                isHorizontalDirection: D,
                                scrollLengthProp: m,
                                direction: n,
                            });
                        !isNaN(a) && a < b && (b = a);
                        var C = function e(n) {
                            if (!s || !s()) {
                                var a = n - d,
                                    m = (function (e) {
                                        var u = e.easingPreset,
                                            t = e.cubicBezierPoints,
                                            n = e.duration,
                                            r = e.runTime / n;
                                        if (v.hasOwnProperty(u)) return v[u](r);
                                        if (
                                            t &&
                                            !isNaN(t.x1) &&
                                            !isNaN(t.y1) &&
                                            !isNaN(t.x2) &&
                                            !isNaN(t.y2) &&
                                            t.x1 >= 0 &&
                                            t.x2 >= 0
                                        )
                                            return w({ percentTimeElapsed: r, x1: t.x1, x2: t.x2, y1: t.y1, y2: t.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: l, cubicBezierPoints: i, runTime: a, duration: o });
                                if (!isNaN(m)) {
                                    var _ = Math.round(m * b),
                                        C = h ? _ + F : b - _;
                                    if (
                                        (c.breakBounds &&
                                            (C < c.startBound
                                                ? (C = c.startBound)
                                                : C > c.endBound && (C = c.endBound)),
                                        a < o)
                                    ) {
                                        if (A) {
                                            var p = D ? C : 0,
                                                g = D ? 0 : C;
                                            window.scrollTo(p, g);
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
                    L = function (e) {
                        var u = e.axis,
                            t = e.cursorPositionOnRail,
                            n = e.direction,
                            r = e.i,
                            o = (function (e) {
                                var u = e.axis,
                                    t = e.i,
                                    n = e.cursorPositionOnRail;
                                if ('y' === u) {
                                    var r = t.scrollbarY.offsetTop,
                                        o = r + t.scrollbarYHeight;
                                    return n >= r && n <= o;
                                }
                                var i = t.scrollbarX.offsetLeft,
                                    l = i + t.scrollbarXWidth;
                                return n >= i && n <= l;
                            })({ axis: u, i: r, cursorPositionOnRail: t });
                        return o
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
                                      o = (n - r.scrollbar / 2) / r.rail,
                                      i = Math.round(Math.min(r.maxScroll, Math.max(0, r.content * o)));
                                  'y' === u ? (t.element.scrollTop = i) : (t.element.scrollLeft = i);
                              })({ axis: u, i: r, cursorPositionOnRail: t }),
                              !0)
                            : ('y' === u
                                  ? (r.element.scrollTop += n * r.containerHeight)
                                  : (r.element.scrollLeft += n * r.containerWidth),
                              !1);
                    },
                    x = function (e, u, t) {
                        return function (n) {
                            u = u.toLowerCase();
                            var r = null,
                                o = function () {
                                    if (1 === n.buttons) {
                                        if (
                                            !n.target.closest('.ps__rail-' + u) ||
                                            !n.target.closest('.ps__track_' + u)
                                        ) {
                                            var o = (function (e) {
                                                    var u = e.axis,
                                                        t = e.e,
                                                        n = e.i;
                                                    return 'y' === u
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
                                                })({ axis: u, e: n, i: e }),
                                                i = o.cursorPosition - o.windowScrolled - o.elementPosition,
                                                l = (function (e) {
                                                    var u = e.axis,
                                                        t = e.cursorPositionOnRail,
                                                        n = e.i;
                                                    return t > ('y' === u ? n.scrollbarYTop : n.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: u, cursorPositionOnRail: i, i: e });
                                            L({ axis: u, cursorPositionOnRail: i, direction: l, i: e }) &&
                                                clearTimeout(r),
                                                B(e, !1, t);
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
                function M(e, u, t) {
                    var n = t[0],
                        r = t[1],
                        o = t[2],
                        i = t[3],
                        l = t[4],
                        a = t[5],
                        s = t[6],
                        d = t[7],
                        E = t[8],
                        A = e.element,
                        D = null,
                        h = null,
                        b = null;
                    function C(t) {
                        (A[s] = F(D + b * (t[o] - h))), m(e, d), B(e, !1, u), t.stopPropagation(), t.preventDefault();
                    }
                    function p() {
                        _(e, d), e[E].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', C);
                    }
                    e.event.bind(e[l], 'mousedown', function (u) {
                        1 === u.buttons &&
                            ((D = A[s]),
                            (h = u[o]),
                            (b = (e[r] - e[n]) / (e[i] - e[a])),
                            e.event.bind(e.ownerDocument, 'mousemove', C),
                            e.event.once(e.ownerDocument, 'mouseup', p),
                            e[E].classList.add(c.clicking),
                            u.stopPropagation(),
                            u.preventDefault());
                    });
                }
                var T = 1e3,
                    R = {
                        'click-rail': function (e, u) {
                            e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', x(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', x(e, 'x', u));
                        },
                        'drag-thumb': function (e, u) {
                            M(e, u, [
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
                                M(e, u, [
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
                                    o(t, ':hover')
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
                                        ((t.scrollTop -= a),
                                        (t.scrollLeft += l),
                                        B(e, !1, u),
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
                                            var o = t.scrollLeft;
                                            if (0 === n) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === o && u < 0) ||
                                                    (o >= e.contentWidth - e.containerWidth && u > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(l, a) && n.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, t) {
                            var n = e.element;
                            function r(r) {
                                var o = (function (e) {
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
                                    i = o[0],
                                    l = o[1];
                                if (
                                    !(function (e, t, r) {
                                        if (!b.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(e)) return !1;
                                        for (var o = e; o && o !== n; ) {
                                            if (o.classList.contains(s.consuming)) return !0;
                                            var i = u(o);
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
                                                    !((0 === o.scrollLeft && t < 0) || (o.scrollLeft === a && t > 0))
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
                                        B(e, !1, t),
                                        (a =
                                            a ||
                                            (function (u, t) {
                                                var r = Math.floor(n.scrollTop),
                                                    o = 0 === n.scrollTop,
                                                    i = r + n.offsetHeight === n.scrollHeight,
                                                    l = 0 === n.scrollLeft,
                                                    a = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                                return (
                                                    !(Math.abs(t) > Math.abs(u) ? o || i : l || a) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(i, l)),
                                        a && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
                                }
                            }
                            e.event.bind(n, 'wheel', r),
                                void 0 !== window.onmousewheel && e.event.bind(n, 'mousewheel', r);
                        },
                        touch: function (e, t) {
                            if (b.supportsTouch || b.supportsIePointer) {
                                var n = e.element,
                                    r = {},
                                    o = 0,
                                    i = {},
                                    l = null;
                                b.supportsTouch
                                    ? (e.event.bind(n, 'touchstart', E),
                                      e.event.bind(n, 'touchmove', m),
                                      e.event.bind(n, 'touchend', _))
                                    : b.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(n, 'pointerdown', E),
                                            e.event.bind(n, 'pointermove', m),
                                            e.event.bind(n, 'pointerup', _))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(n, 'MSPointerDown', E),
                                            e.event.bind(n, 'MSPointerMove', m),
                                            e.event.bind(n, 'MSPointerUp', _)));
                            }
                            function a(u, r) {
                                (n.scrollTop -= r), (n.scrollLeft -= u), B(e, !1, t);
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
                                    var u = c(e);
                                    (r.pageX = u.pageX),
                                        (r.pageY = u.pageY),
                                        (o = new Date().getTime()),
                                        null !== l && clearInterval(l);
                                }
                            }
                            function m(t) {
                                if (d(t)) {
                                    var l = c(t),
                                        E = { pageX: l.pageX, pageY: l.pageY },
                                        m = E.pageX - r.pageX,
                                        _ = E.pageY - r.pageY;
                                    if (
                                        (function (e, t, r) {
                                            if (!n.contains(e)) return !1;
                                            for (var o = e; o && o !== n; ) {
                                                if (o.classList.contains(s.consuming)) return !0;
                                                var i = u(o);
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
                                                            (0 === o.scrollLeft && t < 0) ||
                                                            (o.scrollLeft === a && t > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                o = o.parentNode;
                                            }
                                            return !1;
                                        })(t.target, m, _)
                                    )
                                        return;
                                    a(m, _), (r = E);
                                    var A = new Date().getTime(),
                                        D = A - o;
                                    D > 0 && ((i.x = m / D), (i.y = _ / D), (o = A)),
                                        (function (u, t) {
                                            var r = Math.floor(n.scrollTop),
                                                o = n.scrollLeft,
                                                i = Math.abs(u),
                                                l = Math.abs(t);
                                            if (l > i) {
                                                if (
                                                    (t < 0 && r === e.contentHeight - e.containerHeight) ||
                                                    (t > 0 && 0 === r)
                                                )
                                                    return 0 === window.scrollY && t > 0 && b.isChrome;
                                            } else if (
                                                i > l &&
                                                ((u < 0 && o === e.contentWidth - e.containerWidth) ||
                                                    (u > 0 && 0 === o))
                                            )
                                                return !0;
                                            return !0;
                                        })(m, _) && t.preventDefault();
                                }
                            }
                            function _() {
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
                        'drag-move': function (e, u) {
                            void 0 === u && (u = 0);
                            var t = e.element,
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
                                        scrollableDomEle: t,
                                        direction: 'right',
                                        onRefUpdateCallback: a,
                                        duration: r,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: n,
                                        onCheckForBreakCallback: o,
                                        boundsInfo: {
                                            breakBounds: i,
                                            startBound: u,
                                            endBound: e.contentWidth - e.containerWidth + u,
                                        },
                                    });
                            }
                            function d() {
                                if (r) return r;
                            }
                            function E() {
                                l = 0;
                            }
                            function A(r) {
                                if (e.scrollbarXActive) {
                                    var a = n - r.screenX;
                                    (t.scrollLeft += a), (n = r.screenX);
                                    var s = new Date().getTime();
                                    if (((o = (a / (s - i)) * 1e3), (i = s), e.onScroll(), u > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * u;
                                        0 === t.scrollLeft || t.scrollLeft === c
                                            ? 0 === l && (l = window.setTimeout(E, 250))
                                            : 0 !== l && (window.clearTimeout(l), (l = 0));
                                    }
                                    m(e, 'x'),
                                        m(e, 'dragging', { immediately: !0 }),
                                        r.stopPropagation(),
                                        r.preventDefault();
                                }
                            }
                            function D(e) {
                                (n = e.screenX),
                                    (r = !0),
                                    requestAnimationFrame(function () {
                                        r = !1;
                                    }),
                                    (i = new Date().getTime());
                            }
                            function h(n) {
                                var r = e.contentWidth - e.containerWidth + u;
                                if (t.scrollLeft < u) s(u - t.scrollLeft, T, d);
                                else if (t.scrollLeft > r) s(r - t.scrollLeft, T, d);
                                else {
                                    new Date().getTime() - i < 100 && s(o / 4, T, d, !0);
                                }
                                _(e, 'x'),
                                    _(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(c.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', A);
                            }
                            function F() {
                                r = !0;
                            }
                            t.addEventListener(
                                'mousedown',
                                function (u) {
                                    1 === u.buttons &&
                                        ((n = u.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', A),
                                        e.event.once(e.ownerDocument, 'mouseup', h),
                                        e.event.once(e.ownerDocument, 'mousedown', D),
                                        e.event.once(t, 'wheel', F),
                                        e.scrollbarXRail.classList.add(c.clicking),
                                        u.preventDefault());
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
                            E = function () {
                                return e.classList.add(c.focus);
                            },
                            m = function () {
                                return e.classList.remove(c.focus);
                            };
                        (this.isRtl = 'rtl' === u(e).direction),
                            (this.isNegativeScroll =
                                ((d = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (l = e.scrollLeft < 0),
                                (e.scrollLeft = d),
                                l)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new h()),
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
                            C().then(function () {
                                var n = u(o.scrollbarXRail);
                                (o.scrollbarXBottom = parseInt(n.bottom, 10)),
                                    isNaN(o.scrollbarXBottom)
                                        ? ((o.isScrollbarXUsingBottom = !1), (o.scrollbarXTop = F(n.top)))
                                        : (o.isScrollbarXUsingBottom = !0),
                                    (o.railBorderXWidth = F(n.borderLeftWidth) + F(n.borderRightWidth)),
                                    t(o.scrollbarXRail, { display: 'block' }),
                                    (o.railXMarginWidth = F(n.marginLeft) + F(n.marginRight)),
                                    t(o.scrollbarXRail, { display: '' }),
                                    (o.railXWidth = null),
                                    (o.railXRatio = null);
                                var r = u(o.scrollbarYRail);
                                (o.scrollbarYRight = parseInt(r.right, 10)),
                                    isNaN(o.scrollbarYRight)
                                        ? ((o.isScrollbarYUsingRight = !1), (o.scrollbarYLeft = F(r.left)))
                                        : (o.isScrollbarYUsingRight = !0),
                                    (o.scrollbarYOuterWidth = o.isRtl
                                        ? (function (e) {
                                              var t = u(e);
                                              return (
                                                  F(t.width) +
                                                  F(t.paddingLeft) +
                                                  F(t.paddingRight) +
                                                  F(t.borderLeftWidth) +
                                                  F(t.borderRightWidth)
                                              );
                                          })(o.scrollbarY)
                                        : null),
                                    (o.railBorderYWidth = F(r.borderTopWidth) + F(r.borderBottomWidth)),
                                    t(o.scrollbarYRail, { display: 'block' }),
                                    (o.railYMarginHeight = F(r.marginTop) + F(r.marginBottom)),
                                    t(o.scrollbarXRail, { display: '' }),
                                    t(o.scrollbarYRail, { display: '' }),
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
                                        return R[e](o, o.settings.overScrollWidth);
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
                                    B(o, !1, o.settings.overScrollWidth, !1);
                            });
                    };
                (k.prototype._getAnimationSettings = function (e, u, t, n) {
                    var r = this,
                        o = 0;
                    return (
                        null !== this.element &&
                            (o = ['bottom', 'top'].includes(u) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - o,
                            direction: u,
                            onRefUpdateCallback: function (e) {
                                B(r, !0, r.settings.overScrollWidth, !1), t && t(e);
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
                            t(this.scrollbarXRail, { display: 'block' }),
                            t(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                F(u(this.scrollbarXRail).marginLeft) + F(u(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                F(u(this.scrollbarYRail).marginTop) + F(u(this.scrollbarYRail).marginBottom)),
                            t(this.scrollbarXRail, { display: 'none' }),
                            t(this.scrollbarYRail, { display: 'none' }),
                            C().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    B(e, !1, e.settings.overScrollWidth, !1),
                                    g(e, 'top', 0, !1, !1, !0),
                                    g(e, 'left', 0, !1, !1, !0),
                                    t(e.scrollbarXRail, { display: '' }),
                                    t(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (k.prototype.setScrollLeft = function (e, u, t) {
                        y(this._getAnimationSettings(e, 'right', u, t));
                    }),
                    (k.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (k.prototype.setScrollTop = function (e, u, t) {
                        y(this._getAnimationSettings(e, 'bottom', u, t));
                    }),
                    (k.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (k.prototype.onScroll = function (e) {
                        this.isAlive && B(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (k.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (B(this, !1, this.settings.overScrollWidth, !1),
                            g(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
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
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => l, onResize: () => o });
                var n = t(2472),
                    r = t(1176);
                const o = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const l = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${u}`,
                                        l = i[u]((e) => t([e, 'outside']));
                                    function a(e) {
                                        t([e, 'inside']);
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
                            })(t)),
                            u
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    });
                var n = t(527);
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
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => v,
                        events: () => o.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => f,
                        getScale: () => D,
                        getSize: () => E,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => g,
                        isFocused: () => C,
                        pxToRem: () => h,
                        remToPx: () => F,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => a,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var n = t(3722),
                    r = t(6112),
                    o = t(6538),
                    i = t(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function a(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function s(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: F(u.x), y: F(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function g() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => s });
                const n = ['args'];
                const r = 2,
                    o = 16,
                    i = 32,
                    l = 64,
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, n);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, u]) => {
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => o });
                var n = t(3138);
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
                        const o = n.O.view.addModelObserver(e, t, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { c1: () => f, Sw: () => o.Z, B0: () => a, ry: () => F, Eu: () => b });
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
                var o = t(1358);
                const i = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    l = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
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
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    _ = t(3138);
                const A = ['args'];
                function D(e, u, t, n, r, o, i) {
                    try {
                        var l = e[o](i),
                            a = l.value;
                    } catch (e) {
                        return void t(e);
                    }
                    l.done ? u(a) : Promise.resolve(a).then(n, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                        var o = e.apply(u, t);
                                        function i(e) {
                                            D(o, n, r, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            D(o, n, r, i, l, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
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
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => C(a.CLOSE),
                    g = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var B = t(7572);
                const f = r.instance,
                    v = {
                        DataTracker: o.Z,
                        ViewModel: B.Z,
                        ViewEventType: a,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => C(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), o) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                s = l.x,
                                c = l.y,
                                d = l.width,
                                E = l.height,
                                m = {
                                    x: _.O.view.pxToRem(s) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            C(a.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: h(m),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, p);
                        },
                        handleViewEvent: C,
                        onBindingsReady: F,
                        onLayoutReady: b,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
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
                        SystemLocale: i,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = v;
            },
            6248: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n);
                const o = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var a;
                function s(e, u, t) {
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
                        o = Math.min(n, r);
                    return {
                        extraLarge: o === t.extraLarge.weight,
                        large: o === t.large.weight,
                        medium: o === t.medium.weight,
                        small: o === t.small.weight,
                        extraSmall: o === t.extraSmall.weight,
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
                })(a || (a = {}));
                const c = i.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    m = Object.assign({ width: d, height: E }, s(d, E, l)),
                    _ = (0, n.createContext)(m),
                    A = ['children'];
                const D = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, A);
                    const r = (0, n.useContext)(_),
                        i = r.extraLarge,
                        l = r.large,
                        a = r.medium,
                        s = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        E = r.largeWidth,
                        m = r.mediumWidth,
                        D = r.smallWidth,
                        h = r.extraSmallWidth,
                        F = r.extraLargeHeight,
                        b = r.largeHeight,
                        C = r.mediumHeight,
                        p = r.smallHeight,
                        g = r.extraSmallHeight,
                        B = { extraLarge: F, large: b, medium: C, small: p, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && l) return u;
                        if (t.medium && a) return u;
                        if (t.small && s) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return o(u, t, B);
                        if (t.largeWidth && E) return o(u, t, B);
                        if (t.mediumWidth && m) return o(u, t, B);
                        if (t.smallWidth && D) return o(u, t, B);
                        if (t.extraSmallWidth && h) return o(u, t, B);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && F) return u;
                            if (t.largeHeight && b) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && g) return u;
                        }
                    }
                    return null;
                };
                D.defaultProps = {
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
                (0, n.memo)(D);
                const h = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    F = (0, n.memo)(({ children: e }) => {
                        const u = (0, n.useContext)(_),
                            t = (0, n.useState)(u),
                            o = t[0],
                            a = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(u);
                                a(Object.assign({ width: t, height: n }, s(t, n, l)));
                            }, []);
                        h(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const d = (0, n.useMemo)(() => Object.assign({}, o), [o]);
                        return r().createElement(_.Provider, { value: d }, e);
                    });
                var b = t(6483),
                    C = t.n(b),
                    p = t(926),
                    g = t.n(p);
                let B, f, v;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const w = () => {
                        const e = (0, n.useContext)(_),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: o, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: g().SMALL_WIDTH,
                        [f.Medium]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH}`,
                        [f.Large]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH} ${g().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: g().SMALL_HEIGHT,
                        [v.Medium]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT}`,
                        [v.Large]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT} ${g().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [B.ExtraSmall]: '',
                        [B.Small]: g().SMALL,
                        [B.Medium]: `${g().SMALL} ${g().MEDIUM}`,
                        [B.Large]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE}`,
                        [B.ExtraLarge]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE} ${g().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, S);
                        const o = w(),
                            i = o.mediaWidth,
                            l = o.mediaHeight,
                            a = o.mediaSize;
                        return r().createElement('div', y({ className: C()(t, L[i], x[l], M[a]) }, n), u);
                    },
                    k = ['children'];
                const H = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, k);
                    return r().createElement(F, null, r().createElement(T, t, u));
                };
                var O = t(493),
                    P = t.n(O);
                const I = (e) => {
                    const u = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            u.current = e;
                        }, [e]),
                        u.current
                    );
                };
                let N;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(N || (N = {}));
                const W = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    X = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Y = (e, u, t = N.left) => e.split(u).reduce(t === N.left ? W : X, []),
                    j = (() => {
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
                    G = ['zh_cn', 'zh_sg', 'zh_tw'],
                    U = (e, u = N.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return G.includes(t)
                            ? j(e)
                            : ((e, u = N.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return Y(r, /( )/, u).forEach((e) => (t = t.concat(Y(e, n, N.left)))), t;
                              })(e, u);
                    };
                let $;
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
                })($ || ($ = {}));
                var V = t(4179);
                Date.now();
                function z(e) {
                    engine.call('PlaySound', e);
                }
                const K = (e = 1) => {
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
                    q = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    Q = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Z = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    J = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = q(`${e}.${t}`, window);
                                return Q(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    ee = (e) => {
                        const u = ((e) => {
                                const u = K(),
                                    t = u.caller,
                                    n = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: Z(r, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const r = q(Z(t, `${u}.${n}`), window);
                                    return Q(r) ? (e.push(r.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    ue = V.Sw.instance;
                let te;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(te || (te = {}));
                const ne = (e = 'model', u = te.Deep) => {
                        const t = (0, n.useState)(0),
                            r = (t[0], t[1]),
                            o = (0, n.useMemo)(() => K(), []),
                            i = o.caller,
                            l = o.resId,
                            a = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            s = (0, n.useState)(() =>
                                ((e) => {
                                    const u = q(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return Q(u) ? u.value : u;
                                })(J(a)),
                            ),
                            c = s[0],
                            d = s[1],
                            E = (0, n.useRef)(-1);
                        return (
                            h(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? te.Deep : te.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== te.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === te.Deep
                                                ? (e === c && r((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        n = ee(e);
                                    E.current = ue.addCallback(n, t, l, u === te.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== te.None)
                                    return () => {
                                        ue.removeCallback(E.current, l);
                                    };
                            }, [l, u]),
                            c
                        );
                    },
                    re = (V.Sw.instance, I);
                var oe = t(5521);
                const ie = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function le(e = oe.n.NONE, u = ie, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== oe.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                const ae = /<link.*?>/g,
                    se = /\.\.\//g,
                    ce = /<script.*?>/g,
                    de = 'default.css',
                    Ee = (e) => {
                        const u = e.match(se);
                        return u && u.join('');
                    },
                    me = () => {
                        for (
                            var e = 0, u = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < u.length;
                            e++
                        ) {
                            const t = u[e];
                            if (!t.href.includes(de)) return t.href;
                        }
                        return '';
                    },
                    _e = (e) => {
                        const u = me(),
                            t = Ee(u);
                        let n,
                            r = e;
                        for (; null !== (n = ce.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = t + e[2].replace(se, '');
                                r = r.replace(e[2], u);
                            }
                        }
                        return r;
                    },
                    Ae = 'SubView_base_df',
                    De = 'subViews.onChanged',
                    he = (() => {
                        const e = [];
                        let u = !1;
                        const t = () => {
                            if (!e.length) return void (u = !1);
                            const n = e.shift();
                            n && ((u = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                e.push(n), u || t();
                            },
                        };
                    })(),
                    Fe = (0, n.memo)(({ id: e, fallback: u, onLoadCallback: t, mixClass: o }) => {
                        const i = (0, n.useState)(''),
                            l = i[0],
                            a = i[1],
                            s = (0, n.useMemo)(() => ({ __html: _e(l) }), [l]),
                            c = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, n.useState)(!1),
                            E = d[0],
                            m = d[1],
                            _ = (0, n.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(De, _), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            A = (0, n.useCallback)((e) => {
                                he.add(
                                    () =>
                                        new Promise((u) => {
                                            a(e);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), u();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        engine.on(`subView:inject->${n}`, A),
                                        (({ path: e, name: u }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, V.Eu)().then(() => {
                                                              console.info(`Sub view ${u} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${u}`,
                                                                      t.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', e),
                                                t.send();
                                        })({ name: n, path: t }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, A),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(De, _);
                        }, [_, A, e, E]),
                            (0, n.useEffect)(
                                () => () => {
                                    l &&
                                        ((e) => {
                                            const u = Ee(me());
                                            let t;
                                            for (; null !== (t = ae.exec(e)); ) {
                                                const e = t[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const t = u + e[1].replace(se, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(l);
                                },
                                [l],
                            );
                        const D = C()(Ae, o);
                        if (l) {
                            let u;
                            return (
                                (u = document.getElementById('root')) && u.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let u;
                                    const t = me(),
                                        n = Ee(t);
                                    for (; null !== (u = ae.exec(e)); ) {
                                        const e = u[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(de) && n) {
                                            const u = n + e[1].replace(se, ''),
                                                t = document.createElement('link');
                                            (t.href = u), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(l),
                                t && t(e),
                                r().createElement('div', { className: D, dangerouslySetInnerHTML: s })
                            );
                        }
                        return u ? r().createElement('div', { className: D }, r().createElement(u, null)) : null;
                    }),
                    be = {
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
                let Ce, pe;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ce || (Ce = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(pe || (pe = {}));
                const ge = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: o,
                    disabled: i,
                    mixClass: l,
                    soundHover: a,
                    soundClick: s,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: _,
                    onClick: A,
                }) => {
                    const D = (0, n.useRef)(null),
                        h = (0, n.useState)(t),
                        F = h[0],
                        b = h[1],
                        p = (0, n.useState)(!1),
                        g = p[0],
                        B = p[1],
                        f = (0, n.useState)(!1),
                        v = f[0],
                        w = f[1],
                        S = (0, n.useCallback)(() => {
                            i || (D.current && (D.current.focus(), b(!0)));
                        }, [i]),
                        y = (0, n.useCallback)(
                            (e) => {
                                F && null !== D.current && !D.current.contains(e.target) && b(!1);
                            },
                            [F],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                i || (A && A(e));
                            },
                            [i, A],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                i || (null !== a && z(a), c && c(e), w(!0));
                            },
                            [i, a, c],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                i || (m && m(e), B(!1));
                            },
                            [i, m],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                i || (null !== s && z(s), E && E(e), t && S(), B(!0));
                            },
                            [i, s, E, S, t],
                        ),
                        H = (0, n.useCallback)(
                            (e) => {
                                i || (_ && _(e), B(!1));
                            },
                            [i, _],
                        ),
                        O = C()(
                            be.base,
                            be[`base__${o}`],
                            {
                                [be.base__disabled]: i,
                                [be[`base__${u}`]]: u,
                                [be.base__focus]: F,
                                [be.base__highlightActive]: g,
                                [be.base__firstHover]: v,
                            },
                            l,
                        ),
                        P = C()(be.state, be.state__default);
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
                            b(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: D,
                                className: O,
                                onMouseEnter: x,
                                onMouseMove: M,
                                onMouseUp: T,
                                onMouseDown: k,
                                onMouseLeave: H,
                                onClick: L,
                            },
                            o !== Ce.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: be.back }),
                                    r().createElement('span', { className: be.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: P },
                                r().createElement('span', { className: be.stateDisabled }),
                                r().createElement('span', { className: be.stateHighlightHover }),
                                r().createElement('span', { className: be.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: be.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ge.defaultProps = { type: Ce.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Be = (0, n.memo)(ge),
                    fe = [
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
                function ve(e) {
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
                const we = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Se = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            o = e.onMouseEnter,
                            i = e.onMouseLeave,
                            l = e.onMouseDown,
                            a = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            D = void 0 === A || A,
                            h = e.targetId,
                            F = void 0 === h ? 0 : h,
                            b = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, fe);
                        const g = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, n.useMemo)(() => F || K().resId, [F]),
                            f = (0, n.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (we(t, _, { isMouseEvent: !0, on: !0, arguments: ve(r) }, B),
                                    b && b(),
                                    (g.current.isVisible = !0));
                            }, [t, _, r, B, b]),
                            v = (0, n.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const e = g.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (g.current.timeoutId = 0)),
                                        we(t, _, { on: !1 }, B),
                                        g.current.isVisible && C && C(),
                                        (g.current.isVisible = !1);
                                }
                            }, [t, _, B, C]),
                            w = (0, n.useCallback)((e) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(g.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = g.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === D && v();
                            }, [D, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return D
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((g.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      o && o(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && v(), null == a || a(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && v(), null == l || l(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    ye = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const xe = R.views.common.tooltip_window.simple_tooltip_content,
                    Me = (e) => {
                        let u = e.children,
                            t = e.body,
                            o = e.header,
                            i = e.note,
                            l = e.alert,
                            a = e.args,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ye);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, a, { body: t, header: o, note: i, alert: l });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [l, t, o, i, a]);
                        return r().createElement(
                            Se,
                            Le(
                                {
                                    contentId:
                                        ((d = null == a ? void 0 : a.hasHtmlContent),
                                        d ? xe.SimpleTooltipHtmlContent('resId') : xe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            u,
                        );
                        var d;
                    },
                    Te = (e) => {
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
                    Re = 'TextOverflow_base_3b',
                    ke = ({ content: e, classMix: u }) => {
                        const t = (0, n.useRef)(null),
                            o = (0, n.useState)(!0),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() =>
                                Te(() => {
                                    const e = t.current;
                                    e && e.offsetWidth >= e.scrollWidth && l(!1);
                                }),
                            ),
                            r().createElement(
                                Me,
                                { isEnabled: i, body: e },
                                r().createElement('div', { ref: t, className: C()(Re, u) }, e),
                            )
                        );
                    };
                let He;
                !(function (e) {
                    (e.backport = 'backport'), (e.unbound = 'unbound'), (e.normal = 'normal'), (e.absent = 'absent');
                })(He || (He = {}));
                const Oe = (e, u) => ({
                        isEnabled: e !== He.absent,
                        args: u,
                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                        decoratorId:
                            e === He.unbound
                                ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                : void 0,
                        ignoreShowDelay: e === He.backport,
                        ignoreMouseClick: !0,
                    }),
                    Pe = 'DialogTemplateButton_base_0b',
                    Ie = 'DialogTemplateButton_label_83',
                    Ne = 'DialogTemplateButton_label__noTooltip_14',
                    We = (0, n.memo)(
                        ({ onClick: e, isFocused: u, buttonID: t, isDisabled: o, label: i, tooltip: l, type: a }) => {
                            const s = (0, n.useCallback)(() => {
                                    e({ buttonID: t });
                                }, [e, t]),
                                c = (0, n.useCallback)(
                                    (e) => {
                                        e.altKey || !u || o || s();
                                    },
                                    [u, o, s],
                                );
                            le(oe.n.ENTER, c);
                            const d = (0, n.useMemo)(() => Oe(l.type, { buttonID: t }), [l.type, t]),
                                E = C()(Ie, l.type !== He.absent && Ne);
                            return r().createElement(
                                Se,
                                d,
                                r().createElement(
                                    'div',
                                    { className: Pe },
                                    r().createElement(
                                        Be,
                                        { size: pe.medium, type: a, disabled: o, onClick: s, isFocused: u },
                                        r().createElement(ke, { classMix: E, content: i || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Xe = 'DialogTemplateButtonList_base_8e';
                function Ye() {
                    return (
                        (Ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ye.apply(this, arguments)
                    );
                }
                const je = (0, n.memo)(() => {
                        const e = ne('model').onButtonClicked,
                            u = ne('model.focus'),
                            t = u.focusedIndex,
                            o = u.onTabPressed,
                            i = ne('model.buttons'),
                            l = (0, n.useCallback)(
                                (e) => {
                                    o({ shift: e.shiftKey });
                                },
                                [o],
                            );
                        return (
                            le(oe.n.TAB, l),
                            r().createElement(
                                'div',
                                { className: Xe },
                                i.map(({ value: u }, n) =>
                                    r().createElement(We, Ye({ key: u.buttonID, isFocused: n === t, onClick: e }, u)),
                                ),
                            )
                        );
                    }),
                    Ge = 'DialogTemplateWrapper_base_f7',
                    Ue = 'DialogTemplateWrapper_base__hidden_5f',
                    $e = 'DialogTemplateWrapper_subView_30';
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const ze = (0, n.memo)(({ Template: e }) => {
                    const u = ne('model', te.None),
                        t = u.onCloseClicked,
                        o = u.placeHolders,
                        i = u.background,
                        l = u.dimmerAlpha,
                        a = u.displayFlags;
                    (0, n.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const s = a.map(({ value: e }) => e),
                        c = (0, n.useRef)(o.map(({ value: e }) => e.resourceID)),
                        d = (0, n.useState)(0 !== c.current.length),
                        E = d[0],
                        m = d[1],
                        _ = (0, n.useCallback)(
                            (e = 'default') => {
                                t({ reason: e });
                            },
                            [t],
                        ),
                        A = (0, n.useCallback)(() => {
                            _('escape');
                        }, [_]);
                    var D;
                    (D = A), le(oe.n.ESCAPE, D);
                    const h = (0, n.useCallback)((e) => {
                            const u = c.current,
                                t = u.indexOf(e);
                            t > -1 && (u.splice(t, 1), 0 === u.length && m(!1));
                        }, []),
                        b = (0, n.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${l})` };
                            return i && (e.backgroundImage = `url(${i})`), e;
                        }, [i, l]),
                        p = (0, n.useMemo)(
                            () =>
                                o.reduce(
                                    (e, { value: u }) => (
                                        (e[u.placeHolder] = r().createElement(Fe, {
                                            key: u.placeHolder,
                                            id: u.resourceID,
                                            mixClass: $e,
                                            onLoadCallback: h,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [h, o],
                        ),
                        g = C()(Ge, E && Ue);
                    return r().createElement(
                        F,
                        null,
                        r().createElement(
                            'div',
                            { className: g, style: b },
                            r().createElement(
                                e,
                                Ve(
                                    { onClose: _, buttons: r().createElement(je, null), displayFlags: s, isShown: !E },
                                    p,
                                ),
                            ),
                        ),
                    );
                });
                var Ke = t(9887),
                    qe = t.n(Ke);
                const Qe = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Ze = (e) => e.includes('_') && ((e) => Qe.includes(e))(e.split('_').at(-1)),
                    Je = [B.ExtraLarge, B.Large, B.Medium, B.Small, B.ExtraSmall],
                    eu = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (Ze(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const o = Je.indexOf(u),
                                    i = (-1 !== o ? Qe.slice(o) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = i ? e[i] : void 0;
                                return (t[r] = void 0 !== l ? l : e[r]), t;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => Qe.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    uu = (e, u = eu) => {
                        const t = (
                            (e, u = eu) =>
                            (t) => {
                                const o = w().mediaSize,
                                    i = (0, n.useMemo)(() => u(t, o), [t, o]);
                                return r().createElement(e, i);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => Ze(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    },
                    tu = {
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
                    nu = [
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
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                Object.keys(qe());
                const ou = {
                        XL: { mt: tu.mt__XL, mr: tu.mr__XL, mb: tu.mb__XL, ml: tu.ml__XL },
                        LG: { mt: tu.mt__LG, mr: tu.mr__LG, mb: tu.mb__LG, ml: tu.ml__LG },
                        MDp: { mt: tu.mt__MDp, mr: tu.mr__MDp, mb: tu.mb__MDp, ml: tu.ml__MDp },
                        MD: { mt: tu.mt__MD, mr: tu.mr__MD, mb: tu.mb__MD, ml: tu.ml__MD },
                        SMp: { mt: tu.mt__SMp, mr: tu.mr__SMp, mb: tu.mb__SMp, ml: tu.ml__SMp },
                        SM: { mt: tu.mt__SM, mr: tu.mr__SM, mb: tu.mb__SM, ml: tu.ml__SM },
                        XS: { mt: tu.mt__XS, mr: tu.mr__XS, mb: tu.mb__XS, ml: tu.ml__XS },
                    },
                    iu = (Object.keys(ou), ['mt', 'mr', 'mb', 'ml']),
                    lu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    au = uu((e) => {
                        let u = e.className,
                            t = e.width,
                            o = e.height,
                            i = e.m,
                            l = e.mt,
                            a = void 0 === l ? i : l,
                            s = e.mr,
                            c = void 0 === s ? i : s,
                            d = e.mb,
                            E = void 0 === d ? i : d,
                            m = e.ml,
                            _ = void 0 === m ? i : m,
                            A = e.column,
                            D = e.row,
                            h = e.flexDirection,
                            F = void 0 === h ? (A ? 'column' : D && 'row') || void 0 : h,
                            b = e.flexStart,
                            p = e.center,
                            g = e.flexEnd,
                            B = e.spaceBetween,
                            f = e.spaceAround,
                            v = e.justifyContent,
                            w =
                                void 0 === v
                                    ? (b ? 'flex-start' : p && 'center') ||
                                      (g && 'flex-end') ||
                                      (B && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            S = e.alignItems,
                            y = void 0 === S ? (b ? 'flex-start' : p && 'center') || (g && 'flex-end') || void 0 : S,
                            L = e.alignSelf,
                            x = e.wrap,
                            M = e.flexWrap,
                            T = void 0 === M ? (x ? 'wrap' : void 0) : M,
                            R = e.grow,
                            k = e.shrink,
                            H = e.flex,
                            O = void 0 === H ? (R || k ? `${R ? 1 : 0} ${k ? 1 : 0} auto` : void 0) : H,
                            P = e.style,
                            I = e.children,
                            N = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, nu);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: a, mr: c, mb: E, ml: _ },
                                    u = ((e) =>
                                        iu.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(ou[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        iu.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[lu[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== o && 'number' == typeof o ? o + 'rem' : o,
                                        flex: O,
                                        alignSelf: L,
                                        display: F || y ? 'flex' : void 0,
                                        flexDirection: F,
                                        flexWrap: T,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, o, a, c, E, _, P, O, L, F, T, w, y]),
                            X = W.computedStyle,
                            Y = W.computedClassNames;
                        return r().createElement('div', ru({ className: C()(tu.base, ...Y, u), style: X }, N), I);
                    }),
                    su = 'FormatText_base_d0',
                    cu = ({ binding: e, text: u = '', classMix: t, alignment: o = N.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, i) =>
                                      r().createElement(
                                          'div',
                                          { className: C()(su, t), key: `${u}-${i}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : U(e, u))))(u, o, e).map((e, u) =>
                                              r().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var du = t(3532),
                    Eu = t.n(du);
                const mu = {
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
                    _u = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                Object.keys(qe());
                const Du = Object.keys(Eu()),
                    hu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Fu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    bu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Cu = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    pu =
                        (Object.keys(Cu),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': hu,
                            'heading-H36': hu,
                            'heading-H28': Fu,
                            'heading-H24': Fu,
                            'heading-H24R': Fu,
                            'heading-H22': Fu,
                            'heading-H20R': Fu,
                            'heading-H18': Fu,
                            'heading-H15': bu,
                            'heading-H14': bu,
                            'paragraph-P24': Fu,
                            'paragraph-P18': Fu,
                            'paragraph-P16': Fu,
                            'paragraph-P14': bu,
                            'paragraph-P12': bu,
                            'paragraph-P10': bu,
                        }),
                    gu =
                        (Object.keys(pu),
                        (e) =>
                            e
                                ? ((e) => Du.includes(e))(e)
                                    ? { colorClassName: mu[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Bu = uu((e) => {
                        let u = e.text,
                            t = e.variant,
                            o = e.className,
                            i = e.color,
                            l = e.m,
                            a = e.mt,
                            s = void 0 === a ? l : a,
                            c = e.mr,
                            d = void 0 === c ? l : c,
                            E = e.mb,
                            m = void 0 === E ? l : E,
                            _ = e.ml,
                            A = void 0 === _ ? l : _,
                            D = e.style,
                            h = e.format,
                            F = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, _u);
                        const b = (0, n.useMemo)(() => {
                                const e = gu(i),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, n), colorClassName: u };
                            }, [D, i]),
                            p = b.computedStyle,
                            g = b.colorClassName;
                        return r().createElement(
                            au,
                            Au(
                                {
                                    className: C()(mu.base, t && mu[t], g, o),
                                    style: p,
                                    mt: !0 === s ? pu[t || 'paragraph-P16'].mt : s,
                                    mr: !0 === d ? pu[t || 'paragraph-P16'].mr : d,
                                    mb: !0 === m ? pu[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? pu[t || 'paragraph-P16'].ml : A,
                                },
                                F,
                            ),
                            void 0 !== h ? r().createElement(cu, Au({}, h, { text: u })) : u,
                        );
                    });
                var fu = t(3403);
                const vu = (e, u, t, n) => {
                        let r = u.exec(e),
                            o = 0;
                        for (; r; ) o !== r.index && t(e.slice(o, r.index)), n(r), (o = u.lastIndex), (r = u.exec(e));
                        o !== e.length && t(e.slice(o));
                    },
                    wu = {
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
                    Su = [
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
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                class Lu extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && z(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && z(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            o = e.side,
                            i = e.type,
                            l = e.classNames,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, Su)),
                            m = C()(wu.base, wu[`base__${i}`], wu[`base__${o}`], null == l ? void 0 : l.base),
                            _ = C()(wu.icon, wu[`icon__${i}`], wu[`icon__${o}`], null == l ? void 0 : l.icon),
                            A = C()(wu.glow, null == l ? void 0 : l.glow),
                            D = C()(wu.caption, wu[`caption__${i}`], null == l ? void 0 : l.caption),
                            h = C()(wu.goto, null == l ? void 0 : l.goto);
                        return r().createElement(
                            'div',
                            yu(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(a),
                                    onMouseLeave: this._onMouseLeave(s),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== i && r().createElement('div', { className: wu.shine }),
                            r().createElement('div', { className: _ }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: D }, u),
                            n && r().createElement('div', { className: h }, n),
                        );
                    }
                }
                let xu;
                (Lu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.responsiveHeader = 'responsiveHeader'),
                            (e.responsiveClosePosition = 'responsiveClosePosition'),
                            (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(xu || (xu = {}));
                const Mu = {
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
                    Tu = (0, n.memo)(
                        ({
                            isShown: e = !0,
                            classMix: u,
                            onClose: t,
                            icon: o,
                            topRight: i,
                            title: l,
                            content: s,
                            buttons: c,
                            footer: d,
                            displayFlags: E,
                            classNames: m,
                        }) => {
                            const A = ((e, u) => Object.keys(u).reduce((u, t) => ((u[t] = e.includes(t)), u), {}))(
                                    E,
                                    xu,
                                ),
                                D = A.responsiveHeader,
                                h = A.responsiveClosePosition,
                                F = A.disableResponsiveContentPosition,
                                b = (function (e, u, t) {
                                    const r = (0, n.useContext)(_);
                                    let o = Object.entries(r).filter(([e, u]) => !0 === u && e in a);
                                    return (
                                        t && (o = o.filter((e) => t.includes(e[0]))),
                                        e.reduce((e, t) => {
                                            const n = o.map((e) =>
                                                C()(
                                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                                    u[
                                                        ((e, u) => {
                                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                                            var t;
                                                        })(t, e[0])
                                                    ],
                                                ),
                                            );
                                            return (e[t] = C()(u[t], ...n)), e;
                                        }, {})
                                    );
                                })(['base'], Mu),
                                p = (0, n.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                g = C()(b.base, u),
                                B = C()(
                                    Mu.center,
                                    o && Mu.center__withIcon,
                                    e && Mu.center__shown,
                                    !F && Mu.center__responsive,
                                    null == m ? void 0 : m.center,
                                ),
                                f = C()(Mu.icon, D && Mu.icon__responsive),
                                v = C()(Mu.title, D && Mu.title__responsive),
                                w = C()(Mu.closeBtn, h && Mu.closeBtn__responsive),
                                S = C()(
                                    Mu.divider,
                                    !s && Mu.divider__noContent,
                                    !d && Mu.divider__noFooter,
                                    null == m ? void 0 : m.divider,
                                );
                            return r().createElement(
                                'div',
                                { className: g },
                                r().createElement(
                                    'div',
                                    { className: Mu.topRight },
                                    i,
                                    r().createElement(
                                        'div',
                                        { className: w },
                                        r().createElement(Lu, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: p,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: B },
                                    o && r().createElement('div', { className: f }, o),
                                    l && r().createElement('div', { className: v }, l),
                                    s && r().createElement('div', { className: Mu.content }, s),
                                    r().createElement('div', { className: S }),
                                    d && r().createElement('div', { className: Mu.footer }, d),
                                    c && r().createElement('div', { className: Mu.buttons }, c),
                                ),
                            );
                        },
                    );
                function Ru() {
                    return !1;
                }
                console.log;
                var ku = t(9174);
                function Hu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Ou(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Ou(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ou(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Pu = (e) => (0 === e ? window : window.subViews.get(e));
                function Iu(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Nu(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                const Wu = '-1',
                    Xu = { id: Wu, label: R.strings.dialogs.recruitWindow.menuEmptyRow() },
                    Yu = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: l, children: a, mocks: s }) {
                                const c = (0, n.useRef)([]),
                                    d = (t, n, r) => {
                                        var o;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Pu,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function o(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const r = t(u),
                                                        o = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, o) => {
                                                        const a = 'string' == typeof o ? `${n}.${o}` : n,
                                                            s = i.O.view.addModelObserver(a, u, !0);
                                                        return r.set(s, t), e && t(l(o)), s;
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, u) => {
                                                        const t = l(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = l(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = Hu(r.keys()); !(e = t()).done; ) o(e.value, u);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(n),
                                            a =
                                                'real' === t
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : a.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: s,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : s(e),
                                                            r = ku.LO.box(n, { equals: Ru });
                                                        return (
                                                            'real' === t &&
                                                                a.subscribe(
                                                                    (0, ku.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : s(e),
                                                            r = ku.LO.box(n, { equals: Ru });
                                                        return (
                                                            'real' === t &&
                                                                a.subscribe(
                                                                    (0, ku.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = s(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = ku.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    a.subscribe(
                                                                        (0, ku.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                o = Object.entries(r),
                                                                i = o.reduce(
                                                                    (e, [u, t]) => ((e[t] = ku.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    a.subscribe(
                                                                        (0, ku.aD)((e) => {
                                                                            o.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: a, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: a,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    m = (0, n.useState)(o),
                                    _ = m[0],
                                    A = m[1],
                                    D = (0, n.useState)(() => d(o, l, s)),
                                    h = D[0],
                                    F = D[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? F(d(_, l, s)) : (E.current = !0);
                                    }, [s, _, l]),
                                    (0, n.useEffect)(() => {
                                        A(o);
                                    }, [o]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    r().createElement(t.Provider, { value: h }, a)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = Object.assign({}, e.primitives(['text']), {
                                iconModel: e.object('iconModel.icon'),
                                bgIconModel: e.object('iconModel.bgIcon'),
                                recruitContent: e.object('recruitContent'),
                                nations: e.array('recruitContent.nations'),
                                vehTypes: e.array('recruitContent.vehTypes'),
                                vehicles: e.array('recruitContent.vehicles'),
                                specializations: e.array('recruitContent.specializations'),
                            });
                            return Object.assign({}, u, {
                                computes: {
                                    prepareItems: (e, u) => {
                                        const t = [];
                                        t.push(Xu);
                                        const n = Nu(e, (e) => ({ id: e.id, label: e.label, isDisabled: u }));
                                        return t.push(...n), t;
                                    },
                                    vehicleItems: (e = !1) => {
                                        const t = [];
                                        t.push(Xu);
                                        const n = Nu(u.vehicles.get(), (u) => ({
                                            id: `${u.id}`,
                                            label: u.name,
                                            isDisabled: e,
                                            meta: { type: u.type, isElite: u.isElite, isIGR: u.isIGR },
                                        }));
                                        return t.push(...n), t;
                                    },
                                    isSelectedVehiclePremium: () => {
                                        const e = (function (e, u) {
                                            for (let t = 0; t < e.length; t++) {
                                                const n = Iu(e[t]);
                                                if (u(n, t, e)) return n;
                                            }
                                        })(
                                            u.vehicles.get(),
                                            (e) => e.id === Number(u.recruitContent.get().selectedVehicle),
                                        );
                                        return !!e && e.isElite;
                                    },
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onNationChange: e.createCallback((e) => e || {}, 'recruitContent.onNationChange'),
                            onVehTypeChange: e.createCallback((e) => e || {}, 'recruitContent.onVehTypeChange'),
                            onVehicleChange: e.createCallback((e) => e || {}, 'recruitContent.onVehicleChange'),
                            onSpecializationChange: e.createCallback(
                                (e) => e || {},
                                'recruitContent.onSpecializationChange',
                            ),
                        }),
                    ),
                    ju = Yu[0],
                    Gu = Yu[1],
                    Uu = 'Icon_base_e1',
                    $u = 'Icon_block_1d',
                    Vu = 'Icon_block__backgroundIcon_79',
                    zu = 'Icon_icon_70',
                    Ku = 'Icon_icon__standartIcon_54',
                    qu = 'Icon_separator_27',
                    Qu = 'Icon_separator__small_51',
                    Zu = (e) => (e ? { backgroundImage: `url(${e})` } : void 0),
                    Ju = () => {
                        const e = Gu().model,
                            u = e.iconModel.get().path,
                            t = e.bgIconModel.get().path;
                        return r().createElement(
                            'div',
                            { className: Uu },
                            r().createElement(
                                'div',
                                { className: C()($u, t && Vu), style: Zu(t) },
                                r().createElement('div', { className: C()(zu, t && Ku), style: Zu(u) }),
                            ),
                            r().createElement('div', { className: C()(qu, t && Qu) }),
                        );
                    },
                    et = ['children'];
                function ut() {
                    return (
                        (ut =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ut.apply(this, arguments)
                    );
                }
                const tt = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, et);
                    return r().createElement(
                        Se,
                        ut(
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
                };
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const rt = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(Me, u, n);
                    const o = u.contentId,
                        i = u.args,
                        l = null == i ? void 0 : i.contentId;
                    return o || l
                        ? r().createElement(Se, nt({}, u, { contentId: o || l }), n)
                        : r().createElement(tt, u, n);
                };
                let ot, it;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(ot || (ot = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium');
                    })(it || (it = {}));
                const lt = {
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
                let at;
                !(function (e) {
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(at || (at = {}));
                const st = (0, n.memo)(
                        ({
                            parentId: e,
                            variant: u = ot.Basic,
                            size: t = it.Medium,
                            isOpen: o,
                            placeholder: i = R.strings.common.dropdown.placeholder.select(),
                            label: l = '',
                            classMix: a,
                            onClick: s,
                            soundHover: c,
                            soundClick: d,
                            customControl: E,
                        }) => {
                            const m = (0, n.useState)(at.Out),
                                _ = m[0],
                                A = m[1],
                                D = (0, n.useState)(!1),
                                h = D[0],
                                F = D[1],
                                b = u === ot.Disabled,
                                p = b || u === ot.Basic,
                                g = (0, n.useCallback)(() => {
                                    b || (A(at.Over), c && z(c));
                                }, [b, c]),
                                B = (0, n.useCallback)(() => {
                                    b || (A(at.Down), d && z(d));
                                }, [b, d]),
                                f = (0, n.useCallback)(() => {
                                    !b && A(at.Over), !p && F(!0);
                                }, [b, p]),
                                v = (0, n.useCallback)((e) => s && s(e), [s]),
                                w = (0, n.useCallback)(() => A(at.Out), []);
                            (0, n.useEffect)(() => {
                                p || F(!1);
                            }, [u, p]),
                                (0, n.useEffect)(() => {
                                    b && w();
                                }, [b, w]);
                            const S = C()(
                                lt.base,
                                o && lt.base__open,
                                lt[`base__${_}`],
                                (p || !h) && lt[`base__${u}`],
                                a,
                            );
                            return r().createElement(
                                'div',
                                {
                                    id: e ? `${e}_control` : void 0,
                                    className: S,
                                    onMouseEnter: g,
                                    onMouseUp: f,
                                    onMouseDown: B,
                                    onMouseLeave: w,
                                    onClick: v,
                                },
                                !h && u === ot.Alert && r().createElement('div', { className: lt.alert }),
                                r().createElement(
                                    'div',
                                    { className: C()(lt.label, lt[`label__${t}`], !l && lt.label__placeholder) },
                                    E || r().createElement(ke, { content: l || i }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: C()(lt.button, lt[`button__${t}`]) },
                                    r().createElement('div', { className: C()(lt.arrow, lt[`arrow__${t}`]) }),
                                    _ === at.Over && r().createElement('div', { className: lt.gradient }),
                                    b && r().createElement('div', { className: lt.disabled }),
                                ),
                            );
                        },
                    ),
                    ct = (e) => {
                        if (!e) return !1;
                        const u = e.getBoundingClientRect(),
                            t = u.width,
                            n = u.height;
                        return 0 !== t && 0 !== n;
                    },
                    dt = (e) => {
                        const u = (0, n.useState)(ct(e ? e.current : null)),
                            t = u[0],
                            r = u[1];
                        return (
                            (0, n.useEffect)(() => {
                                let u = 0;
                                const t = () => {
                                    u = requestAnimationFrame(() => {
                                        ct(e ? e.current : null) ? r(!0) : t();
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
                    };
                var Et = t(8380),
                    mt = t.n(Et);
                const _t = 'ScrollArea_base_47',
                    At = 'ScrollArea_base__scrollIndent_1d',
                    Dt = 'ScrollArea_base__verticalScrollbarMargin_50',
                    ht = 'ScrollArea_base__multiple_44',
                    Ft = 'ScrollArea_base__hidden_ec',
                    bt = r().forwardRef((e, u) => {
                        const t = e.offsetLeft,
                            o = void 0 === t ? 0 : t,
                            i = e.offsetTop,
                            l = void 0 === i ? 0 : i,
                            a = e.scrollSettings,
                            s = e.onUpdateActiveAxis,
                            c = e.onHorizontalScroll,
                            d = e.onVerticalScroll,
                            E = e.onOverScrollAtBeginning,
                            m = e.onOverScrollAtEnd,
                            _ = e.wrapperIndent,
                            A = e.verticalScrollbarMargin,
                            D = e.isMultipleScroll,
                            h = e.scrollAreaContainer,
                            F = e.children,
                            b = e.classMix,
                            p = e.onScrollLeftHandled,
                            g = (0, n.useState)(!1),
                            B = g[0],
                            f = g[1],
                            v = (0, n.useState)(),
                            w = v[0],
                            S = v[1],
                            y = (0, n.useState)(),
                            L = y[0],
                            x = y[1],
                            M = (0, n.useRef)(null),
                            T = (0, n.useCallback)(() => {
                                w &&
                                    s &&
                                    s({ x: w.scrollbarXActive, y: w.scrollbarYActive }, { x: w.reach.x, y: w.reach.y });
                            }, [s, w]),
                            R = (0, n.useCallback)(() => w, [w]),
                            k = (0, n.useCallback)(() => {
                                w && w.update();
                            }, [w]),
                            H = (0, n.useCallback)(
                                (e, u, t) => {
                                    w && (w.setScrollLeft(e, u, t), p && p(e, w.contentWidth - w.containerWidth));
                                },
                                [w, p],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    w && (w.setScrollLeftImmediately(e), p && p(e, w.contentWidth - w.containerWidth));
                                },
                                [w, p],
                            ),
                            P = (0, n.useCallback)(
                                (e, u, t) => {
                                    w && w.setScrollTop(e, u, t);
                                },
                                [w],
                            ),
                            I = (0, n.useCallback)(
                                (e) => {
                                    w && w.setScrollTopImmediately(e);
                                },
                                [w],
                            ),
                            N = (0, n.useCallback)(() => {
                                if (L && c && w) {
                                    const e = { scrollPosition: L.scrollLeft < 0 ? 0 : L.scrollLeft, reach: w.reach.x };
                                    c(e);
                                }
                            }, [c, L, w]),
                            W = (0, n.useCallback)(() => {
                                if (L && d && w) {
                                    const e = { scrollPosition: L.scrollTop, reach: w.reach.y };
                                    d(e);
                                }
                            }, [d, L, w]),
                            X = (0, n.useCallback)(() => {
                                E && E();
                            }, [E]),
                            Y = (0, n.useCallback)(() => {
                                m && m();
                            }, [m]),
                            j = (0, n.useCallback)(
                                (e) => {
                                    'function' == typeof u ? u(e) : null !== u && (u.current = e), x(e);
                                },
                                [u],
                            ),
                            G = (0, n.useCallback)(() => {
                                w &&
                                    (w.update(),
                                    (M.current = Te(() => {
                                        T();
                                    })));
                            }, [w, T]),
                            U = (0, n.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, n.useEffect)(() => {
                            if (w && L)
                                return (
                                    document.addEventListener('mousemove', U),
                                    window.addEventListener('resize', G),
                                    L.addEventListener('ps-scroll-x', N),
                                    L.addEventListener('ps-scroll-y', W),
                                    L.addEventListener('over-scroll-beginning', X),
                                    L.addEventListener('over-scroll-ending', Y),
                                    f(!0),
                                    () => {
                                        window.removeEventListener('resize', G),
                                            document.removeEventListener('mousemove', U),
                                            L &&
                                                (L.removeEventListener('ps-scroll-x', N),
                                                L.removeEventListener('ps-scroll-y', W),
                                                L.removeEventListener('over-scroll-beginning', X),
                                                L.removeEventListener('over-scroll-ending', Y));
                                    }
                                );
                        }, [U, N, X, Y, G, L, w, W]);
                        const $ = (0, n.useRef)(L || null);
                        $.current = L || null;
                        const V = dt($);
                        (0, n.useEffect)(
                            () => (
                                !w && L && V && S(new (mt())(L, Object.assign({}, a))),
                                () => {
                                    w && (w.destroy(), S(void 0));
                                }
                            ),
                            [L, V, a, w],
                        ),
                            (0, n.useEffect)(
                                () => () => {
                                    null == M.current || M.current();
                                },
                                [],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    Te(() => {
                                        w && T();
                                    }),
                                [T, w],
                            ),
                            (0, n.useEffect)(() => {
                                o > 0 && O(o);
                            }, [o, O]),
                            (0, n.useEffect)(() => {
                                l > 0 && I(l);
                            }, [l, I]),
                            (0, n.useEffect)(() => {
                                h &&
                                    ((h.setScrollLeft = H),
                                    (h.setScrollTop = P),
                                    (h.setScrollLeftImmediately = O),
                                    (h.setScrollTopImmediately = I),
                                    (h.updateScrollArea = k),
                                    (h.getScrollbar = R));
                            }, [h, H, O, P, I, k, R]);
                        const z = C()(_t, { [At]: _, [Ft]: !B, [Dt]: A, [ht]: D }, b);
                        return r().createElement('div', { className: z, ref: j }, F);
                    }),
                    Ct = [
                        'children',
                        'isEnabled',
                        'selectedItemId',
                        'scrollAreaKey',
                        'withCompleteTrigger',
                        'containerClasses',
                    ];
                function pt() {
                    return (
                        (pt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pt.apply(this, arguments)
                    );
                }
                const gt = (e) => {
                        let u = e.children,
                            t = e.isEnabled,
                            o = void 0 === t || t,
                            i = e.selectedItemId,
                            l = e.scrollAreaKey,
                            a = void 0 === l ? 'scrollArea' : l,
                            s = e.withCompleteTrigger,
                            c = void 0 !== s && s,
                            d = e.containerClasses,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ct);
                        const m = (0, n.useState)(!1),
                            _ = m[0],
                            A = m[1],
                            D = (0, n.useRef)({}),
                            h = (0, n.useRef)(null),
                            F = (0, n.useRef)(null),
                            b = (0, n.useRef)(null),
                            C = (0, n.useCallback)(() => {
                                A(!0);
                            }, []),
                            p = (0, n.useCallback)(() => {
                                A(!1);
                            }, []),
                            g = (0, n.useCallback)(() => {
                                const e = b.current,
                                    u = h.current,
                                    t = D.current;
                                if (e && t && u) {
                                    const n = e.offsetTop + 0.5 * (e.offsetHeight - u.offsetHeight);
                                    t.setScrollTop(n, void 0, c ? C : void 0);
                                }
                            }, [C, c]);
                        (0, n.useEffect)(() => {
                            if (o && null !== i) return Te(g);
                        }, [a, g, i, o]);
                        const B = !(!F.current || !F.current.scrollbar) && F.current.scrollbar.scrollbarYActive,
                            f = {
                                scrollContainerRef: h,
                                selectedItemRef: b,
                                selectedItemId: i,
                                isScrollComplete: _,
                                scrollbarActive: B,
                                onScrollAnimationComplete: p,
                            },
                            v = (0, n.cloneElement)(u, f);
                        return r().createElement(
                            'div',
                            { className: d, ref: h },
                            r().createElement(bt, pt({ ref: F, key: a, scrollAreaContainer: D.current }, E), v),
                        );
                    },
                    Bt = {
                        base: 'DropDownItem_base_5e',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    ft = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const vt = (0, n.memo)((e) => {
                        let u = e.size,
                            t = e.classMix,
                            o = e.onClick,
                            i = e.itemRenderer,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ft);
                        const a = l.id,
                            s = l.isSelected,
                            c = l.isDisabled,
                            d = l.label,
                            E = l.soundHover,
                            m = l.soundClick,
                            _ = (0, n.useCallback)(
                                (e) => {
                                    c || (o && o(e, a));
                                },
                                [a, c, o],
                            ),
                            A = (0, n.useCallback)(() => {
                                c || (E && z(E));
                            }, [c, E]),
                            D = (0, n.useCallback)(() => {
                                c || (m && z(m));
                            }, [c, m]),
                            h = C()(Bt.base, u && Bt[`base__${u}`], s && Bt.base__selected, c && Bt.base__disabled, t);
                        return r().createElement(
                            'div',
                            { className: h, onMouseEnter: A, onMouseDown: D, onClick: _ },
                            i ? i(l) : d,
                        );
                    }),
                    wt = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const yt = ({
                        size: e,
                        items: u,
                        selectedIds: t,
                        selectedItemId: n,
                        selectedItemRef: o,
                        onClick: i,
                        parentId: l,
                        soundHover: a,
                        soundClick: s,
                        itemClassMix: c,
                        itemRenderer: d,
                        scrollbarActive: E,
                    }) =>
                        r().createElement(
                            'div',
                            { className: C()(wt.base, E && wt.base__withScroll) },
                            u.map((u) => {
                                const E = `${l}_${u.id}`;
                                return r().createElement(
                                    'div',
                                    { id: l ? E : void 0, key: E, ref: u.id === n ? o : null },
                                    r().createElement(
                                        vt,
                                        St({ size: e, soundHover: a, soundClick: s, classMix: c, itemRenderer: d }, u, {
                                            onClick: i,
                                            isSelected: t.includes(u.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Lt = {
                        base: 'DropDownList_base_62',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                        scrollMix: 'DropDownList_scrollMix_45',
                    },
                    xt = {
                        handlers: ['click-rail', 'keyboard', 'wheel', 'drag-thumb'],
                        wheelSpeed: 6,
                        suppressScrollX: !0,
                        animationDuration: 300,
                        minScrollbarLength: 20,
                    },
                    Mt = ({
                        parentId: e,
                        size: u = it.Medium,
                        items: t,
                        selectedIds: o,
                        isOpen: i,
                        autoScroll: l,
                        classMix: a,
                        itemClassMix: s,
                        itemRenderer: c,
                        onClick: d,
                        soundHover: E,
                        soundClick: m,
                    }) => {
                        const _ = (0, n.useState)(null),
                            A = _[0],
                            D = _[1],
                            h = re(i);
                        (0, n.useEffect)(() => {
                            if (i && !h) {
                                const e = ((e, u) => {
                                    if (!u.length) return null;
                                    const t = e.find((e) => u.includes(e.id));
                                    return t ? t.id : null;
                                })(t, o);
                                null !== e && D(e);
                            }
                            i || D(null);
                        }, [i, t, o, h]);
                        const F = e ? `${e}_list` : void 0;
                        return r().createElement(
                            'div',
                            { id: F, className: C()(Lt.base, Lt[`base__${u}`], a) },
                            r().createElement(
                                gt,
                                { selectedItemId: A, isEnabled: l, scrollSettings: xt, classMix: Lt.scrollMix },
                                r().createElement(yt, {
                                    parentId: e,
                                    items: t,
                                    size: u,
                                    selectedIds: o,
                                    onClick: d,
                                    soundHover: E,
                                    soundClick: m,
                                    itemClassMix: s,
                                    itemRenderer: c,
                                }),
                            ),
                        );
                    },
                    Tt = {
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
                    Rt = (0, n.memo)(
                        ({
                            componentId: e,
                            containerRef: u,
                            items: t,
                            selected: o = [],
                            variant: i = ot.Basic,
                            size: l = it.Medium,
                            multiple: a = !1,
                            autoScroll: s = !0,
                            placeholder: c,
                            classMix: d,
                            controlRenderer: E,
                            itemRenderer: m,
                            open: _,
                            tooltipArgs: A,
                            onChanges: D,
                            onOpen: h,
                            onClose: F,
                            onClick: b,
                            onClickOutside: p,
                            onMouseEnter: g,
                            onMouseDown: B,
                            onMouseUp: f,
                            onMouseLeave: v,
                            soundHover: w = 'highlight',
                            soundClick: S = 'play',
                            soundItemHover: y,
                            soundItemClick: L,
                        }) => {
                            const x = (0, n.useRef)(null),
                                M = (0, n.useRef)(null),
                                T = (0, n.useRef)({ open: !1, listAbove: !1 }),
                                R = (0, n.useState)(!1),
                                k = R[0],
                                H = R[1],
                                O = (0, n.useState)(!1),
                                P = O[0],
                                I = O[1],
                                N = (0, n.useState)(window.innerHeight),
                                W = N[0],
                                X = N[1],
                                Y = ((e, u) => {
                                    const t = Array.isArray(e) ? e : [e];
                                    return !u && t.length > 1 ? t.slice(0, 1) : t;
                                })(o, a),
                                j = i !== ot.Disabled,
                                G = void 0 === _,
                                U = Boolean(G ? k : _);
                            var $, z;
                            ($ = () => {
                                X(window.innerHeight);
                            }),
                                (z = []),
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', $),
                                        () => window.removeEventListener('resize', $)
                                    ),
                                    z,
                                );
                            const K = (0, n.useCallback)(() => {
                                T.current.open && ((T.current.open = !1), H(!1), F && F());
                            }, [F]);
                            le(U ? oe.n.ESCAPE : oe.n.NONE, K, U);
                            const q = (0, n.useCallback)(() => {
                                p && p(), G && (H(!1), (T.current.open = !1), F && F());
                            }, [p, F, G]);
                            (0, n.useEffect)(() => {
                                const e = x.current;
                                if (e && U)
                                    return (
                                        V.c1.register(e, q),
                                        () => {
                                            V.c1.unregister(e, q);
                                        }
                                    );
                            }, [U, q]),
                                (0, n.useEffect)(() => {
                                    void 0 !== _ && (T.current.open = _);
                                }, [_]);
                            const Q = (0, n.useCallback)(() => {
                                if (!x.current || !M.current) return;
                                const e = u && u.current,
                                    t = e ? e.getBoundingClientRect().bottom : W,
                                    n =
                                        x.current.getBoundingClientRect().bottom +
                                            M.current.getBoundingClientRect().height >
                                        t;
                                n !== T.current.listAbove && ((T.current.listAbove = n), I(n));
                            }, [u, W]);
                            (0, n.useEffect)(() => Te(Q), [Q, l, t.length]);
                            const Z = (0, n.useCallback)(
                                    (e) => {
                                        const u = Y.findIndex((u) => u === e) > -1;
                                        let t = [];
                                        (t = a ? (u ? Y.filter((u) => u !== e) : [e, ...Y]) : u ? [] : [e]), D && D(t);
                                    },
                                    [a, D, Y],
                                ),
                                J = (0, n.useCallback)(() => {
                                    G &&
                                        ((T.current.open = !T.current.open),
                                        H(T.current.open),
                                        T.current.open ? h && h() : F && F());
                                }, [G, h, F]),
                                ee = (0, n.useCallback)(
                                    (e) => {
                                        j && J(), b && b(e);
                                    },
                                    [j, b, J],
                                ),
                                ue = (0, n.useCallback)(
                                    (e, u) => {
                                        b && b(e, u), Z(u), !a && J();
                                    },
                                    [b, a, J, Z],
                                ),
                                te = (0, n.useCallback)((e) => g && g(e), [g]),
                                ne = (0, n.useCallback)((e) => f && f(e), [f]),
                                re = (0, n.useCallback)((e) => B && B(e), [B]),
                                ie = (0, n.useCallback)((e) => v && v(e), [v]),
                                ae = (0, n.useMemo)(
                                    () =>
                                        t
                                            .filter((e) => Y.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [t, Y],
                                ),
                                se = (0, n.useMemo)(() => t.filter((e) => Y.includes(e.id)), [t, Y]),
                                ce = E ? E(se) : void 0;
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: x,
                                    className: C()(Tt.base, Tt[`base__${l}`], d && d.base),
                                    onMouseEnter: te,
                                    onMouseUp: ne,
                                    onMouseDown: re,
                                    onMouseLeave: ie,
                                },
                                r().createElement(
                                    'div',
                                    { className: C()(Tt.control, U && Tt.control__down) },
                                    r().createElement(
                                        rt,
                                        { tooltipArgs: A },
                                        r().createElement(st, {
                                            parentId: e,
                                            size: l,
                                            variant: i,
                                            isOpen: U,
                                            placeholder: c,
                                            label: ae,
                                            classMix: d && d.control,
                                            onClick: ee,
                                            soundHover: w,
                                            soundClick: S,
                                            customControl: ce,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        ref: M,
                                        className: C()(
                                            Tt.list,
                                            U ? Tt.list__down : Tt.list__up,
                                            P ? Tt.list__above : Tt.list__under,
                                        ),
                                    },
                                    r().createElement(Mt, {
                                        parentId: e,
                                        size: l,
                                        items: t,
                                        selectedIds: Y,
                                        isOpen: U,
                                        autoScroll: s,
                                        classMix: d && d.list,
                                        itemClassMix: d && d.item,
                                        itemRenderer: m,
                                        onClick: ue,
                                        soundHover: y || w,
                                        soundClick: L || S,
                                    }),
                                ),
                            );
                        },
                    );
                let kt;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Disabled = 'disabled'), (e.Locked = 'locked');
                })(kt || (kt = {}));
                const Ht = 'WarningText_base_10',
                    Ot = 'WarningText_alertIcon_8f',
                    Pt = (0, n.memo)(({ className: e, children: u }) =>
                        r().createElement(
                            'div',
                            { className: C()(Ht, e) },
                            r().createElement('div', { className: Ot }),
                            u,
                        ),
                    ),
                    It = 'DropDownHeader_base_2c',
                    Nt = 'DropDownHeader_lock_59',
                    Wt = (0, n.memo)(({ label: e, state: u }) =>
                        r().createElement(
                            'div',
                            { className: It },
                            e,
                            u === kt.Locked && r().createElement('div', { className: Nt }),
                        ),
                    ),
                    Xt = 'NationRender_text_e6',
                    Yt = 'NationRender_base_14',
                    jt = 'NationRender_base__header_e7',
                    Gt = 'NationRender_base__disabled_07',
                    Ut = 'NationRender_icon_90',
                    $t = (e) => {
                        if (0 === e.length) return;
                        const u = e[0];
                        return Vt(u, !0);
                    },
                    Vt = ({ id: e, label: u, isDisabled: t }, o = !1) => {
                        const i = (0, n.useMemo)(
                            () => ({ backgroundImage: `url(${R.images.gui.maps.icons.filters.nations.$dyn(e)})` }),
                            [e],
                        );
                        if (e === Wu) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const l = C()(Yt, o && jt, t && Gt);
                        return r().createElement(
                            'div',
                            { className: l },
                            r().createElement('div', { className: Ut, style: i }),
                            r().createElement('div', { className: Xt }, o ? r().createElement(ke, { content: u }) : u),
                        );
                    },
                    zt = 'SpecializationRender_text_c3',
                    Kt = 'SpecializationRender_base_16',
                    qt = 'SpecializationRender_base__header_6f',
                    Qt = 'SpecializationRender_base__disabled_c7',
                    Zt = 'SpecializationRender_icon_49',
                    Jt = (e) => {
                        if (0 === e.length) return;
                        const u = e[0];
                        return en(u, !0);
                    },
                    en = ({ id: e, label: u, isDisabled: t }, o = !1) => {
                        const i = (0, n.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_24x24.$dyn(e)})`,
                            }),
                            [e],
                        );
                        if (e === Wu) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const l = C()(Kt, o && qt, t && Qt);
                        return r().createElement(
                            'div',
                            { className: l },
                            r().createElement('div', { className: Zt, style: i }),
                            r().createElement('div', { className: zt }, u),
                        );
                    },
                    un = 'VehicleRender_base_49',
                    tn = 'VehicleRender_base__header_cb',
                    nn = 'VehicleRender_base__disabled_25',
                    rn = 'VehicleRender_icon_5e',
                    on = 'VehicleRender_text_52',
                    ln = 'VehicleRender_text__default_50',
                    an = 'VehicleRender_igr_ba',
                    sn = (e) => {
                        if (0 === e.length) return;
                        const u = e[0];
                        return cn(u, !0);
                    },
                    cn = ({ id: e, label: u, isDisabled: t, meta: o }, i = !1) => {
                        const l = o ? o.type : '',
                            a = o && o.isElite,
                            s = o && o.isIGR,
                            c = e === Wu,
                            d = (0, n.useMemo)(() => {
                                if (!c)
                                    return a
                                        ? {
                                              backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.elite.$dyn(l)})`,
                                          }
                                        : {
                                              backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.c_24x24.$dyn(l)})`,
                                          };
                            }, [c, a, l]);
                        if (c) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const E = C()(on, e === Wu && ln),
                            m = C()(un, i && tn, t && nn);
                        return r().createElement(
                            'div',
                            { className: m },
                            r().createElement('div', { className: rn, style: d }),
                            s && r().createElement('div', { className: an }),
                            r().createElement('div', { className: E }, i ? r().createElement(ke, { content: u }) : u),
                        );
                    },
                    dn = 'VehTypeRender_text_a1',
                    En = 'VehTypeRender_base_ec',
                    mn = 'VehTypeRender_base__header_a0',
                    _n = 'VehTypeRender_base__disabled_b8',
                    An = 'VehTypeRender_icon_93',
                    Dn = (e) => {
                        if (0 === e.length) return;
                        const u = e[0];
                        return hn(u, !0);
                    },
                    hn = ({ id: e, label: u, isDisabled: t }, o = !1) => {
                        const i = e.toString().replace('-', '_'),
                            l = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.c_24x24_flat.$dyn(i)})`,
                                }),
                                [i],
                            );
                        if (e === Wu) return R.strings.dialogs.recruitWindow.menuEmptyRow();
                        const a = C()(En, o && mn, t && _n);
                        return r().createElement(
                            'div',
                            { className: a },
                            r().createElement('div', { className: An, style: l }),
                            r().createElement('div', { className: dn }, u),
                        );
                    },
                    Fn = 'RecruitContent_base_f3',
                    bn = 'RecruitContent_content_ab',
                    Cn = 'RecruitContent_column_28',
                    pn = 'RecruitContent_column__last_c7',
                    gn = 'RecruitContent_dropDown_dc',
                    Bn = 'RecruitContent_warning_ac',
                    fn = (0, fu.Pi)(() => {
                        const e = Gu(),
                            u = e.model,
                            t = e.controls,
                            o = u.recruitContent.get(),
                            i = o.nationState,
                            l = o.vehTypeState,
                            a = o.vehicleState,
                            s = o.specializationState,
                            c = o.selectedNation,
                            d = o.selectedVehType,
                            E = o.selectedVehicle,
                            m = o.selectedSpecialization,
                            _ = u.nations.get(),
                            A = u.vehTypes.get(),
                            D = u.specializations.get(),
                            h = t.onNationChange,
                            F = t.onVehTypeChange,
                            b = t.onVehicleChange,
                            p = t.onSpecializationChange,
                            g = i !== kt.Normal,
                            B = l !== kt.Normal,
                            f = a !== kt.Normal,
                            v = s !== kt.Normal,
                            w = (0, n.useCallback)(
                                (e) => {
                                    if (e) {
                                        const u = e[0];
                                        u && h({ id: u });
                                    }
                                },
                                [h],
                            ),
                            S = (0, n.useCallback)(
                                (e) => {
                                    if (e) {
                                        const u = e[0];
                                        u && F({ id: u });
                                    }
                                },
                                [F],
                            ),
                            y = (0, n.useCallback)(
                                (e) => {
                                    if (e) {
                                        const u = e[0];
                                        u && b({ id: u });
                                    }
                                },
                                [b],
                            ),
                            L = (0, n.useCallback)(
                                (e) => {
                                    if (e) {
                                        const u = e[0];
                                        u && p({ id: u });
                                    }
                                },
                                [p],
                            );
                        return r().createElement(
                            'div',
                            { className: Fn },
                            u.computes.isSelectedVehiclePremium() &&
                                r().createElement(
                                    Pt,
                                    { className: Bn },
                                    R.strings.dialogs.recruit.warning.premiumVehicle(),
                                ),
                            r().createElement(
                                'div',
                                { className: bn },
                                r().createElement(
                                    'div',
                                    { className: Cn },
                                    r().createElement(Wt, {
                                        label: R.strings.dialogs.recruitWindow.nation(),
                                        state: i,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: gn },
                                        r().createElement(Rt, {
                                            key: `nationDdl${c}`,
                                            items: u.computes.prepareItems(_, g),
                                            variant: g ? ot.Disabled : ot.Basic,
                                            selected: c,
                                            itemRenderer: Vt,
                                            controlRenderer: $t,
                                            onChanges: w,
                                        }),
                                    ),
                                    r().createElement(Wt, {
                                        label: R.strings.dialogs.recruitWindow.vehicleType(),
                                        state: a,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: gn },
                                        r().createElement(Rt, {
                                            key: `vehDdl${E}`,
                                            items: u.computes.vehicleItems(f),
                                            selected: E,
                                            variant: f ? ot.Disabled : ot.Basic,
                                            itemRenderer: cn,
                                            controlRenderer: sn,
                                            onChanges: y,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: C()(Cn, pn) },
                                    r().createElement(Wt, {
                                        label: R.strings.dialogs.recruitWindow.vehicleClass(),
                                        state: l,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: gn },
                                        r().createElement(Rt, {
                                            key: `vehTypeDdl${d}`,
                                            items: u.computes.prepareItems(A, B),
                                            selected: d,
                                            variant: B ? ot.Disabled : ot.Basic,
                                            itemRenderer: hn,
                                            controlRenderer: Dn,
                                            onChanges: S,
                                        }),
                                    ),
                                    r().createElement(Wt, {
                                        label: R.strings.dialogs.recruitWindow.specialization(),
                                        state: s,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: gn },
                                        r().createElement(Rt, {
                                            key: `specializationDdl${m}`,
                                            items: u.computes.prepareItems(D, v),
                                            selected: m,
                                            variant: v ? ot.Disabled : ot.Basic,
                                            itemRenderer: en,
                                            controlRenderer: Jt,
                                            onChanges: L,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    vn = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function wn() {
                    return (
                        (wn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        wn.apply(this, arguments)
                    );
                }
                const Sn = (0, fu.Pi)((e) => {
                    let u = e.onClose,
                        t = e.buttons,
                        n = e.isShown,
                        o = e.displayFlags,
                        i = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, vn);
                    const l = ((e) => {
                        let u = '';
                        return (
                            vu(
                                e,
                                /\((.*?)\)/g,
                                (e) => (u += e),
                                (e) => {
                                    u += `(${e[1].replace(/ /g, ' ')})`;
                                },
                            ),
                            u
                        );
                    })(Gu().model.text.get());
                    return r().createElement(
                        Tu,
                        wn({ onClose: u, buttons: t, displayFlags: o, isShown: n }, i, {
                            title: r().createElement(Bu, { text: l }),
                            icon: r().createElement(Ju, null),
                            content: r().createElement(fn, null),
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    P().render(
                        r().createElement(
                            ju,
                            null,
                            r().createElement(H, null, r().createElement(ze, { Template: Sn })),
                        ),
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
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (a = 0; a < deferred.length; a++) {
                    for (var [u, t, n] = deferred[a], o = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(a--, 1);
                        var l = t();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var a = deferred.length; a > 0 && deferred[a - 1][2] > n; a--) deferred[a] = deferred[a - 1];
            deferred[a] = [u, t, n];
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
        (__webpack_require__.j = 882),
        (() => {
            var e = { 882: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [o, i, l] = t,
                        a = 0;
                    if (o.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (l) var s = l(__webpack_require__);
                    }
                    for (u && u(t); a < o.length; a++)
                        (r = o[a]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(6248));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
