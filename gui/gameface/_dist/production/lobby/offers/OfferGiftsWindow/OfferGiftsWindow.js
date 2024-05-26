(() => {
    var __webpack_modules__ = {
            380: (u) => {
                'use strict';
                function e(u) {
                    return getComputedStyle(u);
                }
                function t(u, e) {
                    for (var t in e) {
                        var n = e[t];
                        'number' == typeof n && (n += 'px'), (u.style[t] = n);
                    }
                    return u;
                }
                function n(u) {
                    var e = document.createElement('div');
                    return (e.className = u), e;
                }
                var r =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function i(u, e) {
                    if (!r) throw new Error('No element matching method supported');
                    return r.call(u, e);
                }
                function o(u) {
                    u.remove ? u.remove() : u.parentNode && u.parentNode.removeChild(u);
                }
                function a(u, e) {
                    return Array.prototype.filter.call(u.children, function (u) {
                        return i(u, e);
                    });
                }
                var l = 'ps',
                    s = {
                        thumb: function (u) {
                            return 'ps__thumb-' + u;
                        },
                        rail: function (u) {
                            return 'ps__rail-' + u;
                        },
                        buttonStart: function (u) {
                            return 'ps__button-start-' + u;
                        },
                        track: function (u) {
                            return 'ps__track_' + u;
                        },
                        buttonEnd: function (u) {
                            return 'ps__button-end-' + u;
                        },
                        consuming: 'ps__child--consume',
                    },
                    c = {
                        focus: 'ps--focus',
                        clicking: 'ps--clicking',
                        active: function (u) {
                            return 'ps--active-' + u;
                        },
                        scrolling: function (u) {
                            return 'ps--scrolling-' + u;
                        },
                    },
                    E = { x: null, y: null },
                    d = { immediately: !1 };
                function A(u, e, t) {
                    void 0 === t && (t = {});
                    var n = u.element.classList,
                        r = c.scrolling(e);
                    n.contains(r) ? clearTimeout(E[e]) : n.add(r);
                }
                function F(u, e, t) {
                    void 0 === t && (t = {});
                    Object.assign(d, t).immediately
                        ? u.isAlive && u.element.classList.remove(c.scrolling(e))
                        : (E[e] = setTimeout(function () {
                              return u.isAlive && u.element.classList.remove(c.scrolling(e));
                          }, u.settings.scrollingThreshold));
                }
                var h = function (u) {
                        (this.element = u), (this.handlers = {});
                    },
                    D = { isEmpty: { configurable: !0 } };
                (h.prototype.bind = function (u, e) {
                    void 0 === this.handlers[u] && (this.handlers[u] = []),
                        this.handlers[u].push(e),
                        this.element.addEventListener(u, e, !1);
                }),
                    (h.prototype.unbind = function (u, e) {
                        var t = this;
                        this.handlers[u] = this.handlers[u].filter(function (n) {
                            return !(!e || n === e) || (t.element.removeEventListener(u, n, !1), !1);
                        });
                    }),
                    (h.prototype.unbindAll = function () {
                        for (var u in this.handlers) this.unbind(u);
                    }),
                    (D.isEmpty.get = function () {
                        var u = this;
                        return Object.keys(this.handlers).every(function (e) {
                            return 0 === u.handlers[e].length;
                        });
                    }),
                    Object.defineProperties(h.prototype, D);
                var m = function () {
                    this.eventElements = [];
                };
                function B(u) {
                    return parseInt(u, 10) || 0;
                }
                (m.prototype.eventElement = function (u) {
                    var e = this.eventElements.filter(function (e) {
                        return e.element === u;
                    })[0];
                    return e || ((e = new h(u)), this.eventElements.push(e)), e;
                }),
                    (m.prototype.bind = function (u, e, t) {
                        this.eventElement(u).bind(e, t);
                    }),
                    (m.prototype.unbind = function (u, e, t) {
                        var n = this.eventElement(u);
                        n.unbind(e, t), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
                    }),
                    (m.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (u) {
                            return u.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (m.prototype.once = function (u, e, t) {
                        var n = this.eventElement(u);
                        n.bind(e, function u(r) {
                            n.unbind(e, u), t(r);
                        });
                    });
                var C = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function g() {
                    return new Promise(function (u) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                u();
                            });
                        });
                    });
                }
                function _(u) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(u);
                    var e = document.createEvent('CustomEvent');
                    return e.initCustomEvent(u, !1, !1, void 0), e;
                }
                var f = function (u, e, t, n, r, i) {
                    var o;
                    if ((void 0 === n && (n = !0), void 0 === r && (r = !1), void 0 === i && (i = !1), 'top' === e))
                        o = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== e) throw new Error('A proper axis should be provided');
                        o = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (u, e, t, n, r, i) {
                        var o = t[0],
                            a = t[1],
                            l = t[2],
                            s = t[3],
                            c = t[4],
                            E = t[5];
                        void 0 === n && (n = !0);
                        void 0 === r && (r = !1);
                        void 0 === i && (i = !1);
                        var d = u.element;
                        if (!u.reach) return;
                        (u.reach[s] = null), d[l] < 1 && (u.reach[s] = 'start');
                        d[l] > u[o] - u[a] - 1 && (u.reach[s] = 'end');
                        e &&
                            !r &&
                            (d.dispatchEvent(_('ps-scroll-' + s)),
                            e < 0
                                ? d.dispatchEvent(_('ps-scroll-' + c))
                                : e > 0 && d.dispatchEvent(_('ps-scroll-' + E)),
                            n &&
                                (function (u, e) {
                                    A(u, e), F(u, e);
                                })(u, s));
                        u.reach[s] && (e || i) && d.dispatchEvent(_('ps-' + s + '-reach-' + u.reach[s]));
                    })(u, t, o, n, r, i);
                };
                var v = function (u, e, n, r) {
                    void 0 === e && (e = !1), void 0 === n && (n = 0), void 0 === r && (r = !1);
                    var i = u.element;
                    if (i) {
                        if (
                            ((u.containerWidth = Math.round(i.getBoundingClientRect().width)),
                            (u.containerHeight = Math.round(i.getBoundingClientRect().height)),
                            (u.contentWidth = Math.round(i.scrollWidth) - 2 * n),
                            (u.contentHeight = Math.round(i.scrollHeight)),
                            !r)
                        ) {
                            u.contentWidth = Math.round(i.scrollWidth) - 2 * n;
                            var l = u.contentWidth - u.containerWidth + n;
                            i.scrollLeft < n ? (i.scrollLeft = n) : i.scrollLeft > l && (i.scrollLeft = l);
                        }
                        var E = Math.floor(i.scrollTop),
                            d = Math.floor(i.scrollLeft) - n,
                            A = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        i.contains(u.scrollbarXRail) ||
                            (a(i, s.rail('x')).forEach(function (u) {
                                return o(u);
                            }),
                            i.appendChild(u.scrollbarXRail)),
                            i.contains(u.scrollbarYRail) ||
                                (a(i, s.rail('y')).forEach(function (u) {
                                    return o(u);
                                }),
                                i.appendChild(u.scrollbarYRail)),
                            !u.settings.suppressScrollX &&
                            u.containerWidth + u.settings.scrollXMarginOffset < u.contentWidth
                                ? ((u.scrollbarXActive = !0),
                                  (u.railXWidth = u.containerWidth - u.railXMarginWidth * A - 15 * A),
                                  (u.railXRatio = u.containerWidth / u.railXWidth),
                                  (u.scrollbarXWidth = b(u, B((u.railXWidth * u.containerWidth) / u.contentWidth))),
                                  (u.scrollbarXLeft = B(
                                      ((u.negativeScrollAdjustment + d) * (u.railXWidth - u.scrollbarXWidth)) /
                                          (u.contentWidth - u.containerWidth),
                                  )),
                                  u.scrollbarXLeft < 0 && (u.scrollbarXLeft = 0))
                                : (u.scrollbarXActive = !1),
                            !u.settings.suppressScrollY &&
                            u.containerHeight + u.settings.scrollYMarginOffset < u.contentHeight
                                ? ((u.scrollbarYActive = !0),
                                  (u.railYHeight = u.containerHeight - u.railYMarginHeight * A - 15 * A),
                                  (u.railYRatio = u.containerHeight / u.railYHeight),
                                  (u.scrollbarYHeight = b(u, B((u.railYHeight * u.containerHeight) / u.contentHeight))),
                                  (u.scrollbarYTop = B(
                                      (E * (u.railYHeight - u.scrollbarYHeight)) /
                                          (u.contentHeight - u.containerHeight),
                                  )))
                                : (u.scrollbarYActive = !1),
                            u.scrollbarXLeft >= u.railXWidth - u.scrollbarXWidth &&
                                (u.scrollbarXLeft = u.railXWidth - u.scrollbarXWidth),
                            u.scrollbarYTop >= u.railYHeight - u.scrollbarYHeight &&
                                (u.scrollbarYTop = u.railYHeight - u.scrollbarYHeight),
                            (function (u, e, n) {
                                var r = { width: e.railXWidth },
                                    i = Math.floor(u.scrollTop);
                                e.isRtl
                                    ? (r.left =
                                          e.negativeScrollAdjustment + u.scrollLeft + e.containerWidth - e.contentWidth)
                                    : (r.left = u.scrollLeft);
                                e.isScrollbarXUsingBottom
                                    ? (r.bottom = e.scrollbarXBottom - i)
                                    : (r.top = e.scrollbarXTop + i);
                                t(e.scrollbarXRail, r);
                                var o = { top: i, height: e.railYHeight };
                                e.isScrollbarYUsingRight
                                    ? e.isRtl
                                        ? (o.right =
                                              e.contentWidth -
                                              (e.negativeScrollAdjustment + u.scrollLeft) -
                                              e.scrollbarYRight -
                                              e.scrollbarYOuterWidth)
                                        : (o.right = e.scrollbarYRight - u.scrollLeft)
                                    : e.isRtl
                                      ? (o.left =
                                            e.negativeScrollAdjustment +
                                            u.scrollLeft +
                                            2 * e.containerWidth -
                                            e.contentWidth -
                                            e.scrollbarYLeft -
                                            e.scrollbarYOuterWidth)
                                      : (o.left = e.scrollbarYLeft + u.scrollLeft);
                                t(e.scrollbarYRail, o),
                                    t(e.scrollbarX, {
                                        left: e.scrollbarXLeft,
                                        width: e.scrollbarXWidth - e.railBorderXWidth * n,
                                    }),
                                    t(e.scrollbarY, {
                                        top: e.scrollbarYTop,
                                        height: e.scrollbarYHeight - e.railBorderYWidth * n,
                                    });
                            })(i, u, A),
                            u.scrollbarXButtonStart.classList.toggle('disabled', d < 1),
                            u.scrollbarXButtonEnd.classList.toggle('disabled', d + u.containerWidth >= u.contentWidth),
                            u.scrollbarYButtonStart.classList.toggle('disabled', i.scrollTop < 1),
                            u.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                i.scrollTop + u.containerHeight >= u.contentHeight,
                            ),
                            u.scrollbarXActive
                                ? (i.classList.add(c.active('x')), f(u, 'left', d - u.lastScrollLeft, !0, e))
                                : (i.classList.remove(c.active('x')),
                                  (u.scrollbarXWidth = 0),
                                  (u.scrollbarXLeft = 0),
                                  (i.scrollLeft = 0)),
                            u.scrollbarYActive
                                ? (i.classList.add(c.active('y')), f(u, 'top', i.scrollTop - u.lastScrollTop, !0, e))
                                : (i.classList.remove(c.active('y')),
                                  (u.scrollbarYHeight = 0),
                                  (u.scrollbarYTop = 0),
                                  (i.scrollTop = 0)),
                            (u.lastScrollTop = E),
                            (u.lastScrollLeft = d),
                            (u.scrollTopPercent = i.scrollTop / i.scrollHeight),
                            (u.scrollLeftPercent = i.scrollLeft / i.scrollWidth);
                    }
                };
                function b(u, e) {
                    return (
                        u.settings.minScrollbarLength && (e = Math.max(e, u.settings.minScrollbarLength)),
                        u.settings.maxScrollbarLength && (e = Math.min(e, u.settings.maxScrollbarLength)),
                        e
                    );
                }
                var p = {
                        linear: function (u) {
                            return u;
                        },
                        easeInQuad: function (u) {
                            return u * u;
                        },
                        easeOutQuad: function (u) {
                            return u * (2 - u);
                        },
                        easeInOutQuad: function (u) {
                            return u < 0.5 ? 2 * u * u : (4 - 2 * u) * u - 1;
                        },
                        easeInCubic: function (u) {
                            return u * u * u;
                        },
                        easeOutCubic: function (u) {
                            return --u * u * u + 1;
                        },
                        easeInOutCubic: function (u) {
                            return u < 0.5 ? 4 * u * u * u : (u - 1) * (2 * u - 2) * (2 * u - 2) + 1;
                        },
                        easeInQuart: function (u) {
                            return u * u * u * u;
                        },
                        easeOutQuart: function (u) {
                            return 1 - --u * u * u * u;
                        },
                        easeInOutQuart: function (u) {
                            return u < 0.5 ? 8 * u * u * u * u : 1 - 8 * --u * u * u * u;
                        },
                        easeInQuint: function (u) {
                            return u * u * u * u * u;
                        },
                        easeOutQuint: function (u) {
                            return 1 + --u * u * u * u * u;
                        },
                        easeInOutQuint: function (u) {
                            return u < 0.5 ? 16 * u * u * u * u * u : 1 + 16 * --u * u * u * u * u;
                        },
                    },
                    w = function (u) {
                        var e,
                            t = u.percentTimeElapsed,
                            n = u.x1,
                            r = u.y1,
                            i = u.x2,
                            o = u.y2;
                        return (
                            1 -
                            (n * ((e = t), Math.pow(e, 3)) +
                                r *
                                    (function (u) {
                                        return 3 * u * u * (1 - u);
                                    })(t) +
                                i *
                                    (function (u) {
                                        return 3 * u * Math.pow(1 - u, 2);
                                    })(t) +
                                o *
                                    (function (u) {
                                        return Math.pow(1 - u, 3);
                                    })(t))
                        );
                    },
                    L = { breakBounds: !1, startBound: 0, endBound: 0 },
                    x = function (u) {
                        var e = u.scrollableDomEle,
                            t = u.onAnimationCompleteCallback,
                            n = u.direction,
                            r = u.onRefUpdateCallback,
                            i = u.duration,
                            o = u.cubicBezierPoints,
                            a = u.easingPreset,
                            l = u.scrollAmount,
                            s = u.onCheckForBreakCallback,
                            c = u.boundsInfo;
                        void 0 === c && (c = L);
                        var E = null,
                            d = null,
                            A = null,
                            F = null,
                            h = e === window,
                            D = ['left', 'right'].indexOf(n) > -1,
                            m = ['right', 'bottom'].indexOf(n) > -1;
                        D
                            ? ((d = h ? 'scrollX' : 'scrollLeft'),
                              (F = h ? 'innerWidth' : 'width'),
                              (A = 'scrollWidth'))
                            : ((d = h ? 'scrollY' : 'scrollTop'),
                              (F = h ? 'innerHeight' : 'height'),
                              (A = 'scrollHeight'));
                        var B = e[d],
                            C = (function (u) {
                                var e,
                                    t = u.isWindow,
                                    n = u.scrollableDomEle,
                                    r = u.elementLengthProp,
                                    i = u.initialScrollPosition,
                                    o = u.isHorizontalDirection,
                                    a = u.scrollLengthProp,
                                    l = u.direction;
                                if (t) {
                                    var s = document.documentElement;
                                    e = o ? s.offsetWidth : s.offsetHeight;
                                } else e = (n[a] - n.getBoundingClientRect()[r]) | 0;
                                return ['left', 'top'].includes(l) ? i : e - i;
                            })({
                                isWindow: h,
                                scrollableDomEle: e,
                                elementLengthProp: F,
                                initialScrollPosition: B,
                                isHorizontalDirection: D,
                                scrollLengthProp: A,
                                direction: n,
                            });
                        !isNaN(l) && l < C && (C = l);
                        var g = function u(n) {
                            if (!s || !s()) {
                                var l = n - E,
                                    A = (function (u) {
                                        var e = u.easingPreset,
                                            t = u.cubicBezierPoints,
                                            n = u.duration,
                                            r = u.runTime / n;
                                        if (p.hasOwnProperty(e)) return p[e](r);
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
                                    })({ easingPreset: a, cubicBezierPoints: o, runTime: l, duration: i });
                                if (!isNaN(A)) {
                                    var F = Math.round(A * C),
                                        g = m ? F + B : C - F;
                                    if (
                                        (c.breakBounds &&
                                            (g < c.startBound
                                                ? (g = c.startBound)
                                                : g > c.endBound && (g = c.endBound)),
                                        l < i)
                                    ) {
                                        if (h) {
                                            var _ = D ? g : 0,
                                                f = D ? 0 : g;
                                            window.scrollTo(_, f);
                                        } else e[d] = g;
                                        r && r(g), requestAnimationFrame(u);
                                    } else t && t();
                                }
                            }
                        };
                        requestAnimationFrame(function (u) {
                            (E = u), g(u);
                        });
                    },
                    y = function (u) {
                        var e = u.axis,
                            t = u.cursorPositionOnRail,
                            n = u.direction,
                            r = u.i,
                            i = (function (u) {
                                var e = u.axis,
                                    t = u.i,
                                    n = u.cursorPositionOnRail;
                                if ('y' === e) {
                                    var r = t.scrollbarY.offsetTop,
                                        i = r + t.scrollbarYHeight;
                                    return n >= r && n <= i;
                                }
                                var o = t.scrollbarX.offsetLeft,
                                    a = o + t.scrollbarXWidth;
                                return n >= o && n <= a;
                            })({ axis: e, i: r, cursorPositionOnRail: t });
                        return i
                            ? ((function (u) {
                                  var e = u.axis,
                                      t = u.i,
                                      n = u.cursorPositionOnRail,
                                      r = (function (u, e) {
                                          if ('y' === u) {
                                              var t = e.contentHeight - e.containerHeight;
                                              return {
                                                  rail: e.railYHeight,
                                                  content: e.contentHeight,
                                                  scrollbar: e.scrollbarYHeight,
                                                  maxScroll: t,
                                              };
                                          }
                                          var n = e.contentWidth - e.containerWidth;
                                          return {
                                              rail: e.railXWidth,
                                              content: e.contentWidth,
                                              scrollbar: e.scrollbarXWidth,
                                              maxScroll: n,
                                          };
                                      })(e, t),
                                      i = (n - r.scrollbar / 2) / r.rail,
                                      o = Math.round(Math.min(r.maxScroll, Math.max(0, r.content * i)));
                                  'y' === e ? (t.element.scrollTop = o) : (t.element.scrollLeft = o);
                              })({ axis: e, i: r, cursorPositionOnRail: t }),
                              !0)
                            : ('y' === e
                                  ? (r.element.scrollTop += n * r.containerHeight)
                                  : (r.element.scrollLeft += n * r.containerWidth),
                              !1);
                    },
                    S = function (u, e, t) {
                        return function (n) {
                            e = e.toLowerCase();
                            var r = null,
                                i = function () {
                                    if (1 === n.buttons) {
                                        if (
                                            !n.target.closest('.ps__rail-' + e) ||
                                            !n.target.closest('.ps__track_' + e)
                                        ) {
                                            var i = (function (u) {
                                                    var e = u.axis,
                                                        t = u.e,
                                                        n = u.i;
                                                    return 'y' === e
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
                                                })({ axis: e, e: n, i: u }),
                                                o = i.cursorPosition - i.windowScrolled - i.elementPosition,
                                                a = (function (u) {
                                                    var e = u.axis,
                                                        t = u.cursorPositionOnRail,
                                                        n = u.i;
                                                    return t > ('y' === e ? n.scrollbarYTop : n.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: e, cursorPositionOnRail: o, i: u });
                                            y({ axis: e, cursorPositionOnRail: o, direction: a, i: u }) &&
                                                clearTimeout(r),
                                                v(u, !1, t);
                                        }
                                        n.stopPropagation();
                                    }
                                };
                            i(),
                                (r = setInterval(i, 100)),
                                u.event.once(u.ownerDocument, 'mouseup', function () {
                                    clearTimeout(r);
                                });
                        };
                    };
                function T(u, e, t) {
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        o = t[3],
                        a = t[4],
                        l = t[5],
                        s = t[6],
                        E = t[7],
                        d = t[8],
                        h = u.element,
                        D = null,
                        m = null,
                        C = null;
                    function g(t) {
                        (h[s] = B(D + C * (t[i] - m))), A(u, E), v(u, !1, e), t.stopPropagation(), t.preventDefault();
                    }
                    function _() {
                        F(u, E), u[d].classList.remove(c.clicking), u.event.unbind(u.ownerDocument, 'mousemove', g);
                    }
                    u.event.bind(u[a], 'mousedown', function (e) {
                        1 === e.buttons &&
                            ((D = h[s]),
                            (m = e[i]),
                            (C = (u[r] - u[n]) / (u[o] - u[l])),
                            u.event.bind(u.ownerDocument, 'mousemove', g),
                            u.event.once(u.ownerDocument, 'mouseup', _),
                            u[d].classList.add(c.clicking),
                            e.stopPropagation(),
                            e.preventDefault());
                    });
                }
                var M = 1e3,
                    k = {
                        'click-rail': function (u, e) {
                            u.event.bind(u.scrollbarY, 'mousedown', function (u) {
                                return u.stopPropagation();
                            }),
                                u.event.bind(u.scrollbarYRail, 'mousedown', S(u, 'y', 0)),
                                u.event.bind(u.scrollbarX, 'mousedown', function (u) {
                                    return u.stopPropagation();
                                }),
                                u.event.bind(u.scrollbarXRail, 'mousedown', S(u, 'x', e));
                        },
                        'drag-thumb': function (u, e) {
                            T(u, e, [
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
                                T(u, e, [
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
                        keyboard: function (u, e) {
                            var t = u.element;
                            u.event.bind(u.ownerDocument, 'keydown', function (n) {
                                if (
                                    !((n.isDefaultPrevented && n.isDefaultPrevented()) || n.defaultPrevented) &&
                                    i(t, ':hover')
                                ) {
                                    var r,
                                        o = document.activeElement
                                            ? document.activeElement
                                            : u.ownerDocument.activeElement;
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
                                            a = n.metaKey ? -u.contentWidth : n.altKey ? -u.containerWidth : -30;
                                            break;
                                        case 38:
                                            l = n.metaKey ? u.contentHeight : n.altKey ? u.containerHeight : 30;
                                            break;
                                        case 39:
                                            a = n.metaKey ? u.contentWidth : n.altKey ? u.containerWidth : 30;
                                            break;
                                        case 40:
                                            l = n.metaKey ? -u.contentHeight : n.altKey ? -u.containerHeight : -30;
                                            break;
                                        case 32:
                                            l = n.shiftKey ? u.containerHeight : -u.containerHeight;
                                            break;
                                        case 33:
                                            l = u.containerHeight;
                                            break;
                                        case 34:
                                            l = -u.containerHeight;
                                            break;
                                        case 36:
                                            l = u.contentHeight;
                                            break;
                                        case 35:
                                            l = -u.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (u.settings.suppressScrollX && 0 !== a) ||
                                        (u.settings.suppressScrollY && 0 !== l) ||
                                        ((t.scrollTop -= l),
                                        (t.scrollLeft += a),
                                        v(u, !1, e),
                                        (function (e, n) {
                                            var r = Math.floor(t.scrollTop);
                                            if (0 === e) {
                                                if (!u.scrollbarYActive) return !1;
                                                if (
                                                    (0 === r && n > 0) ||
                                                    (r >= u.contentHeight - u.containerHeight && n < 0)
                                                )
                                                    return !u.settings.wheelPropagation;
                                            }
                                            var i = t.scrollLeft;
                                            if (0 === n) {
                                                if (!u.scrollbarXActive) return !1;
                                                if (
                                                    (0 === i && e < 0) ||
                                                    (i >= u.contentWidth - u.containerWidth && e > 0)
                                                )
                                                    return !u.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(a, l) && n.preventDefault());
                                }
                            });
                        },
                        wheel: function (u, t) {
                            var n = u.element;
                            function r(r) {
                                var i = (function (u) {
                                        var e = -1 * u.deltaX,
                                            t = u.deltaY;
                                        return (
                                            (void 0 !== e && void 0 !== t) ||
                                                ((e = (-1 * u.wheelDeltaX) / 6), (t = u.wheelDeltaY / 6)),
                                            u.deltaMode && 1 === u.deltaMode && ((e *= 10), (t *= 10)),
                                            e != e && t != t && ((e = 0), (t = u.wheelDelta)),
                                            u.shiftKey ? [-t, -e] : [e, t]
                                        );
                                    })(r),
                                    o = i[0],
                                    a = i[1];
                                if (
                                    !(function (u, t, r) {
                                        if (!C.isWebKit && n.querySelector('select')) return !0;
                                        if (!n.contains(u)) return !1;
                                        for (var i = u; i && i !== n; ) {
                                            if (i.classList.contains(s.consuming)) return !0;
                                            var o = e(i);
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
                                                    !((0 === i.scrollLeft && t < 0) || (i.scrollLeft === l && t > 0))
                                                )
                                                    return !0;
                                            }
                                            i = i.parentNode;
                                        }
                                        return !1;
                                    })(r.target, o, a)
                                ) {
                                    var l = !1,
                                        c = (o * u.settings.wheelSpeed) | 0,
                                        E = (a * u.settings.wheelSpeed) | 0;
                                    u.settings.useBothWheelAxes
                                        ? u.scrollbarYActive && !u.scrollbarXActive
                                            ? (a ? (n.scrollTop -= E) : (n.scrollTop += c), (l = !0))
                                            : u.scrollbarXActive &&
                                              !u.scrollbarYActive &&
                                              (o ? (n.scrollLeft += c) : (n.scrollLeft -= E), (l = !0))
                                        : ((n.scrollTop -= E), (n.scrollLeft += c)),
                                        v(u, !1, t),
                                        (l =
                                            l ||
                                            (function (e, t) {
                                                var r = Math.floor(n.scrollTop),
                                                    i = 0 === n.scrollTop,
                                                    o = r + n.offsetHeight === n.scrollHeight,
                                                    a = 0 === n.scrollLeft,
                                                    l = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                                return (
                                                    !(Math.abs(t) > Math.abs(e) ? i || o : a || l) ||
                                                    !u.settings.wheelPropagation
                                                );
                                            })(o, a)),
                                        l && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
                                }
                            }
                            u.event.bind(n, 'wheel', r),
                                void 0 !== window.onmousewheel && u.event.bind(n, 'mousewheel', r);
                        },
                        touch: function (u, t) {
                            if (C.supportsTouch || C.supportsIePointer) {
                                var n = u.element,
                                    r = {},
                                    i = 0,
                                    o = {},
                                    a = null;
                                C.supportsTouch
                                    ? (u.event.bind(n, 'touchstart', d),
                                      u.event.bind(n, 'touchmove', A),
                                      u.event.bind(n, 'touchend', F))
                                    : C.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (u.event.bind(n, 'pointerdown', d),
                                            u.event.bind(n, 'pointermove', A),
                                            u.event.bind(n, 'pointerup', F))
                                          : window.MSPointerEvent &&
                                            (u.event.bind(n, 'MSPointerDown', d),
                                            u.event.bind(n, 'MSPointerMove', A),
                                            u.event.bind(n, 'MSPointerUp', F)));
                            }
                            function l(e, r) {
                                (n.scrollTop -= r), (n.scrollLeft -= e), v(u, !1, t);
                            }
                            function c(u) {
                                return u.targetTouches ? u.targetTouches[0] : u;
                            }
                            function E(u) {
                                return (
                                    (!u.pointerType || 'pen' !== u.pointerType || 0 !== u.buttons) &&
                                    (!(!u.targetTouches || 1 !== u.targetTouches.length) ||
                                        !(
                                            !u.pointerType ||
                                            'mouse' === u.pointerType ||
                                            u.pointerType === u.MSPOINTER_TYPE_MOUSE
                                        ))
                                );
                            }
                            function d(u) {
                                if (E(u)) {
                                    var e = c(u);
                                    (r.pageX = e.pageX),
                                        (r.pageY = e.pageY),
                                        (i = new Date().getTime()),
                                        null !== a && clearInterval(a);
                                }
                            }
                            function A(t) {
                                if (E(t)) {
                                    var a = c(t),
                                        d = { pageX: a.pageX, pageY: a.pageY },
                                        A = d.pageX - r.pageX,
                                        F = d.pageY - r.pageY;
                                    if (
                                        (function (u, t, r) {
                                            if (!n.contains(u)) return !1;
                                            for (var i = u; i && i !== n; ) {
                                                if (i.classList.contains(s.consuming)) return !0;
                                                var o = e(i);
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
                                                            (0 === i.scrollLeft && t < 0) ||
                                                            (i.scrollLeft === l && t > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                i = i.parentNode;
                                            }
                                            return !1;
                                        })(t.target, A, F)
                                    )
                                        return;
                                    l(A, F), (r = d);
                                    var h = new Date().getTime(),
                                        D = h - i;
                                    D > 0 && ((o.x = A / D), (o.y = F / D), (i = h)),
                                        (function (e, t) {
                                            var r = Math.floor(n.scrollTop),
                                                i = n.scrollLeft,
                                                o = Math.abs(e),
                                                a = Math.abs(t);
                                            if (a > o) {
                                                if (
                                                    (t < 0 && r === u.contentHeight - u.containerHeight) ||
                                                    (t > 0 && 0 === r)
                                                )
                                                    return 0 === window.scrollY && t > 0 && C.isChrome;
                                            } else if (
                                                o > a &&
                                                ((e < 0 && i === u.contentWidth - u.containerWidth) ||
                                                    (e > 0 && 0 === i))
                                            )
                                                return !0;
                                            return !0;
                                        })(A, F) && t.preventDefault();
                                }
                            }
                            function F() {
                                u.settings.swipeEasing &&
                                    (clearInterval(a),
                                    (a = setInterval(function () {
                                        u.isInitialized
                                            ? clearInterval(a)
                                            : o.x || o.y
                                              ? Math.abs(o.x) < 0.01 && Math.abs(o.y) < 0.01
                                                  ? clearInterval(a)
                                                  : (l(30 * o.x, 30 * o.y), (o.x *= 0.8), (o.y *= 0.8))
                                              : clearInterval(a);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (u, e) {
                            void 0 === e && (e = 0);
                            var t = u.element,
                                n = null,
                                r = !1,
                                i = 0,
                                o = 0,
                                a = 0;
                            function l() {
                                u.onScroll();
                            }
                            function s(n, r, i, o) {
                                void 0 === i && (i = null),
                                    void 0 === o && (o = !1),
                                    x({
                                        scrollableDomEle: t,
                                        direction: 'right',
                                        onRefUpdateCallback: l,
                                        duration: r,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: n,
                                        onCheckForBreakCallback: i,
                                        boundsInfo: {
                                            breakBounds: o,
                                            startBound: e,
                                            endBound: u.contentWidth - u.containerWidth + e,
                                        },
                                    });
                            }
                            function E() {
                                if (r) return r;
                            }
                            function d() {
                                a = 0;
                            }
                            function h(r) {
                                if (u.scrollbarXActive) {
                                    var l = n - r.screenX;
                                    (t.scrollLeft += l), (n = r.screenX);
                                    var s = new Date().getTime();
                                    if (((i = (l / (s - o)) * 1e3), (o = s), u.onScroll(), e > 0)) {
                                        var c = u.contentWidth - u.containerWidth + 2 * e;
                                        0 === t.scrollLeft || t.scrollLeft === c
                                            ? 0 === a && (a = window.setTimeout(d, 250))
                                            : 0 !== a && (window.clearTimeout(a), (a = 0));
                                    }
                                    A(u, 'x'),
                                        A(u, 'dragging', { immediately: !0 }),
                                        r.stopPropagation(),
                                        r.preventDefault();
                                }
                            }
                            function D(u) {
                                (n = u.screenX),
                                    (r = !0),
                                    requestAnimationFrame(function () {
                                        r = !1;
                                    }),
                                    (o = new Date().getTime());
                            }
                            function m(n) {
                                var r = u.contentWidth - u.containerWidth + e;
                                if (t.scrollLeft < e) s(e - t.scrollLeft, M, E);
                                else if (t.scrollLeft > r) s(r - t.scrollLeft, M, E);
                                else {
                                    new Date().getTime() - o < 100 && s(i / 4, M, E, !0);
                                }
                                F(u, 'x'),
                                    F(u, 'dragging', { immediately: !0 }),
                                    u.scrollbarXRail.classList.remove(c.clicking),
                                    u.event.unbind(u.ownerDocument, 'mousemove', h);
                            }
                            function B() {
                                r = !0;
                            }
                            t.addEventListener(
                                'mousedown',
                                function (e) {
                                    1 === e.buttons &&
                                        ((n = e.screenX),
                                        u.event.bind(u.ownerDocument, 'mousemove', h),
                                        u.event.once(u.ownerDocument, 'mouseup', m),
                                        u.event.once(u.ownerDocument, 'mousedown', D),
                                        u.event.once(t, 'wheel', B),
                                        u.scrollbarXRail.classList.add(c.clicking),
                                        e.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    H = function (u, r) {
                        var i = this;
                        if (
                            (void 0 === r && (r = {}),
                            'string' == typeof u && (u = document.querySelector(u)),
                            !u || !u.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var o in ((this.element = u),
                        u.classList.add(l),
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
                            E,
                            d = function () {
                                return u.classList.add(c.focus);
                            },
                            A = function () {
                                return u.classList.remove(c.focus);
                            };
                        (this.isRtl = 'rtl' === e(u).direction),
                            (this.isNegativeScroll =
                                ((E = u.scrollLeft),
                                (u.scrollLeft = -1),
                                (a = u.scrollLeft < 0),
                                (u.scrollLeft = E),
                                a)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? u.scrollWidth - u.clientWidth : 0),
                            (this.event = new m()),
                            (this.ownerDocument = u.ownerDocument || document),
                            (this.scrollbarXRail = n(s.rail('x'))),
                            (this.scrollbarXButtonStart = n(s.buttonStart('x'))),
                            (this.scrollbarXButtonEnd = n(s.buttonEnd('x'))),
                            (this.scrollbarXTrack = n(s.track('x'))),
                            u.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = n(s.thumb('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', d),
                            this.event.bind(this.scrollbarX, 'blur', A),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = n(s.rail('y'))),
                            (this.scrollbarYButtonStart = n(s.buttonStart('y'))),
                            (this.scrollbarYButtonEnd = n(s.buttonEnd('y'))),
                            (this.scrollbarYTrack = n(s.track('y'))),
                            u.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = n(s.thumb('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', d),
                            this.event.bind(this.scrollbarY, 'blur', A),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            g().then(function () {
                                var n = e(i.scrollbarXRail);
                                (i.scrollbarXBottom = parseInt(n.bottom, 10)),
                                    isNaN(i.scrollbarXBottom)
                                        ? ((i.isScrollbarXUsingBottom = !1), (i.scrollbarXTop = B(n.top)))
                                        : (i.isScrollbarXUsingBottom = !0),
                                    (i.railBorderXWidth = B(n.borderLeftWidth) + B(n.borderRightWidth)),
                                    t(i.scrollbarXRail, { display: 'block' }),
                                    (i.railXMarginWidth = B(n.marginLeft) + B(n.marginRight)),
                                    t(i.scrollbarXRail, { display: '' }),
                                    (i.railXWidth = null),
                                    (i.railXRatio = null);
                                var r = e(i.scrollbarYRail);
                                (i.scrollbarYRight = parseInt(r.right, 10)),
                                    isNaN(i.scrollbarYRight)
                                        ? ((i.isScrollbarYUsingRight = !1), (i.scrollbarYLeft = B(r.left)))
                                        : (i.isScrollbarYUsingRight = !0),
                                    (i.scrollbarYOuterWidth = i.isRtl
                                        ? (function (u) {
                                              var t = e(u);
                                              return (
                                                  B(t.width) +
                                                  B(t.paddingLeft) +
                                                  B(t.paddingRight) +
                                                  B(t.borderLeftWidth) +
                                                  B(t.borderRightWidth)
                                              );
                                          })(i.scrollbarY)
                                        : null),
                                    (i.railBorderYWidth = B(r.borderTopWidth) + B(r.borderBottomWidth)),
                                    t(i.scrollbarYRail, { display: 'block' }),
                                    (i.railYMarginHeight = B(r.marginTop) + B(r.marginBottom)),
                                    t(i.scrollbarXRail, { display: '' }),
                                    t(i.scrollbarYRail, { display: '' }),
                                    (i.railYHeight = null),
                                    (i.railYRatio = null),
                                    (i.reach = {
                                        x:
                                            u.scrollLeft <= 0
                                                ? 'start'
                                                : u.scrollLeft >= i.contentWidth - i.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            u.scrollTop <= 0
                                                ? 'start'
                                                : u.scrollTop >= i.contentHeight - i.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (i.isAlive = !0),
                                    i.settings.handlers.forEach(function (u) {
                                        return k[u](i, i.settings.overScrollWidth);
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
                                    (i.lastScrollTop = Math.floor(u.scrollTop)),
                                    (i.lastScrollLeft = u.scrollLeft),
                                    (i.scrollTopPercent = u.scrollTop / u.scrollHeight),
                                    (i.scrollLeftPercent = u.scrollLeft / u.scrollWidth),
                                    i.event.bind(i.element, 'scroll', function (u) {
                                        return i.onScroll(u);
                                    }),
                                    i.settings.enableHorizontalScroll &&
                                        i.event.bind(i.element, 'wheel', function (u) {
                                            return i.onWheel(u);
                                        }),
                                    v(i, !1, i.settings.overScrollWidth, !1);
                            });
                    };
                (H.prototype._getAnimationSettings = function (u, e, t, n) {
                    var r = this,
                        i = 0;
                    return (
                        null !== this.element &&
                            (i = ['bottom', 'top'].includes(e) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: u - i,
                            direction: e,
                            onRefUpdateCallback: function (u) {
                                v(r, !0, r.settings.overScrollWidth, !1), t && t(u);
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
                        var u = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            t(this.scrollbarXRail, { display: 'block' }),
                            t(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                B(e(this.scrollbarXRail).marginLeft) + B(e(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                B(e(this.scrollbarYRail).marginTop) + B(e(this.scrollbarYRail).marginBottom)),
                            t(this.scrollbarXRail, { display: 'none' }),
                            t(this.scrollbarYRail, { display: 'none' }),
                            g().then(function () {
                                u.settings.isDisableScrollToLastPositionOnResize ||
                                    ((u.element.scrollTop = u.element.scrollHeight * u.scrollTopPercent),
                                    (u.element.scrollLeft = u.element.scrollWidth * u.scrollLeftPercent)),
                                    v(u, !1, u.settings.overScrollWidth, !1),
                                    f(u, 'top', 0, !1, !1, !0),
                                    f(u, 'left', 0, !1, !1, !0),
                                    t(u.scrollbarXRail, { display: '' }),
                                    t(u.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (H.prototype.setScrollLeft = function (u, e, t) {
                        x(this._getAnimationSettings(u, 'right', e, t));
                    }),
                    (H.prototype.setScrollLeftImmediately = function (u) {
                        (this.element.scrollLeft = 0 | u), this.update();
                    }),
                    (H.prototype.setScrollTop = function (u, e, t) {
                        x(this._getAnimationSettings(u, 'bottom', e, t));
                    }),
                    (H.prototype.setScrollTopImmediately = function (u) {
                        (this.element.scrollTop = 0 | u), this.update();
                    }),
                    (H.prototype.onScroll = function (u) {
                        this.isAlive && v(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (H.prototype.onWheel = function (u) {
                        this.isAlive &&
                            (v(this, !1, this.settings.overScrollWidth, !1),
                            f(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
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
                            .filter(function (u) {
                                return !u.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (u.exports = H);
            },
            926: (u) => {
                u.exports = {
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
            67: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => j });
                var n = {};
                t.r(n), t.d(n, { mouse: () => E, onResize: () => s });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => A,
                        getSize: () => d,
                        graphicsQuality: () => F,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => D, getTextureUrl: () => h });
                var o = {};
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function l(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => y,
                        addPreloadTexture: () => w,
                        children: () => i,
                        displayStatus: () => m,
                        displayStatusIs: () => U,
                        events: () => B,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => H,
                        getBrowserTexturePath: () => x,
                        getDisplayStatus: () => G,
                        getScale: () => R,
                        getSize: () => T,
                        getViewGlobalPosition: () => k,
                        isEventHandled: () => I,
                        isFocused: () => N,
                        pxToRem: () => W,
                        remToPx: () => P,
                        resize: () => M,
                        sendEvent: () => p,
                        setAnimateWindow: () => O,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => S,
                        whenTutorialReady: () => z,
                    });
                const s = a('clientResized'),
                    c = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') };
                const E = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && l(!1);
                    }
                    function t() {
                        u.enabled && l(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : l(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${e}`,
                                        o = c[e]((u) => t([u, 'outside']));
                                    function a(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, a),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(i, a),
                                                (u.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && l(!0);
                        },
                        disableOutside() {
                            u.enabled && l(!1);
                        },
                    });
                })();
                function d(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const F = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function h(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function D(u, e, t) {
                    return `url(${h(u, e, t)})`;
                }
                const m = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
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
                    C = ['args'];
                const g = 2,
                    _ = 16,
                    f = 32,
                    v = 64,
                    b = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, C);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    p = {
                        close(u) {
                            b('popover' === u ? g : f);
                        },
                        minimize() {
                            b(v);
                        },
                        move(u) {
                            b(_, { isMouseEvent: !0, on: u });
                        },
                    };
                function w(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function L(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function x(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function y(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function S(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function T(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function k(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: P(e.x), y: P(e.y) };
                }
                function H() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function R() {
                    return viewEnv.getScale();
                }
                function W(u) {
                    return viewEnv.pxToRem(u);
                }
                function P(u) {
                    return viewEnv.remToPx(u);
                }
                function O(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function N() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function I() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function G() {
                    return viewEnv.getShowingStatus();
                }
                const U = Object.keys(m).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === m[e]), u), {}),
                    $ = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    z = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : B.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    j = { view: o, client: r };
            },
            521: (u, e, t) => {
                'use strict';
                let n, r;
                t.d(e, { n: () => n }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD');
                    })(n || (n = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(r || (r = {}));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => i });
                var n = t(67);
                class r {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(u, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", u),
                            i
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            364: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => i.Z, kH: () => d, Z5: () => o, lf: () => E, ry: () => B, Eu: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                var i = t(358);
                const o = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    a = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let l;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    F = t(67);
                const h = ['args'];
                function D(u, e, t, n, r, i, o) {
                    try {
                        var a = u[i](o),
                            l = a.value;
                    } catch (u) {
                        return void t(u);
                    }
                    a.done ? e(l) : Promise.resolve(l).then(n, r);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var i = u.apply(e, t);
                                        function o(u) {
                                            D(i, n, r, o, a, 'next', u);
                                        }
                                        function a(u) {
                                            D(i, n, r, o, a, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    g = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, h);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    _ = () => g(l.CLOSE),
                    f = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var v = t(572);
                const b = r.instance,
                    p = {
                        DataTracker: i.Z,
                        ViewModel: v.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => g(l.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: _,
                        sendClosePopOverEvent: () => g(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            g(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), i) => {
                            const o = F.O.view.getViewGlobalPosition(),
                                a = t.getBoundingClientRect(),
                                s = a.x,
                                c = a.y,
                                E = a.width,
                                d = a.height,
                                A = {
                                    x: F.O.view.pxToRem(s) + o.x,
                                    y: F.O.view.pxToRem(c) + o.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(d),
                                };
                            g(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: m(A),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => f(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            f(u, _);
                        },
                        handleViewEvent: g,
                        onBindingsReady: B,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: o,
                        UserLocale: a,
                    };
                window.ViewEnvHelper = p;
            },
            647: (u, e, t) => {
                'use strict';
                var n = t(67),
                    r = t(179),
                    i = t.n(r);
                const o = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    a = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var l;
                function s(u, e, t) {
                    const n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        r = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
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
                !(function (u) {
                    (u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight');
                })(l || (l = {}));
                const c = n.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    A = Object.assign({ width: E, height: d }, s(E, d, a)),
                    F = (0, r.createContext)(A),
                    h = ['children'];
                const D = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(u);
                            for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, h);
                    const n = (0, r.useContext)(F),
                        i = n.extraLarge,
                        a = n.large,
                        l = n.medium,
                        s = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        d = n.largeWidth,
                        A = n.mediumWidth,
                        D = n.smallWidth,
                        m = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        C = n.largeHeight,
                        g = n.mediumHeight,
                        _ = n.smallHeight,
                        f = n.extraSmallHeight,
                        v = { extraLarge: B, large: C, medium: g, small: _, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && a) return e;
                        if (t.medium && l) return e;
                        if (t.small && s) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return o(e, t, v);
                        if (t.largeWidth && d) return o(e, t, v);
                        if (t.mediumWidth && A) return o(e, t, v);
                        if (t.smallWidth && D) return o(e, t, v);
                        if (t.extraSmallWidth && m) return o(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && _) return e;
                            if (t.extraSmallHeight && f) return e;
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
                (0, r.memo)(D);
                const m = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    B = (0, r.memo)(({ children: u }) => {
                        const e = (0, r.useContext)(F),
                            t = (0, r.useState)(e),
                            o = t[0],
                            l = t[1],
                            c = (0, r.useCallback)((u, e) => {
                                const t = n.O.view.pxToRem(u),
                                    r = n.O.view.pxToRem(e);
                                l(Object.assign({ width: t, height: r }, s(t, r, a)));
                            }, []);
                        m(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const E = (0, r.useMemo)(() => Object.assign({}, o), [o]);
                        return i().createElement(F.Provider, { value: E }, u);
                    });
                var C = t(483),
                    g = t.n(C),
                    _ = t(926),
                    f = t.n(_);
                let v, b, p;
                !(function (u) {
                    (u[(u.ExtraSmall = a.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = a.small.width)] = 'Small'),
                        (u[(u.Medium = a.medium.width)] = 'Medium'),
                        (u[(u.Large = a.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = a.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.small.width)] = 'Small'),
                            (u[(u.Medium = a.medium.width)] = 'Medium'),
                            (u[(u.Large = a.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = a.small.height)] = 'Small'),
                            (u[(u.Medium = a.medium.height)] = 'Medium'),
                            (u[(u.Large = a.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = a.extraLarge.height)] = 'ExtraLarge');
                    })(p || (p = {}));
                const w = () => {
                        const u = (0, r.useContext)(F),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return v.ExtraLarge;
                                    case u.large:
                                        return v.Large;
                                    case u.medium:
                                        return v.Medium;
                                    case u.small:
                                        return v.Small;
                                    case u.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case u.largeWidth:
                                        return b.Large;
                                    case u.mediumWidth:
                                        return b.Medium;
                                    case u.smallWidth:
                                        return b.Small;
                                    case u.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u),
                            o = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return p.ExtraLarge;
                                    case u.largeHeight:
                                        return p.Large;
                                    case u.mediumHeight:
                                        return p.Medium;
                                    case u.smallHeight:
                                        return p.Small;
                                    case u.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: i, mediaHeight: o, remScreenWidth: e, remScreenHeight: t };
                    },
                    L = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const y = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL_WIDTH,
                        [b.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [b.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [p.ExtraSmall]: '',
                        [p.Small]: f().SMALL_HEIGHT,
                        [p.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [p.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    M = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, L);
                        const r = w(),
                            o = r.mediaWidth,
                            a = r.mediaHeight,
                            l = r.mediaSize;
                        return i().createElement('div', x({ className: g()(t, y[o], S[a], T[l]) }, n), e);
                    },
                    k = ['children'];
                const H = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                i = Object.keys(u);
                            for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, k);
                    return i().createElement(B, null, i().createElement(M, t, e));
                };
                var W = t(493),
                    P = t.n(W);
                const O = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            n = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (n = window.subViews[t].id)),
                            { caller: t, stack: e, resId: n }
                        );
                    },
                    N = (u, e) => u.split('.').reduce((u, e) => u && u[e], e);
                var Y = t(364);
                const I = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    X = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    G = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = N(`${u}.${t}`, window);
                                return I(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    U = (u) => {
                        const e = ((u) => {
                                const e = O(),
                                    t = e.caller,
                                    n = e.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: X(r, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const r = N(X(t, `${e}.${n}`), window);
                                    return I(r) ? (u.push(r.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    $ = Y.Sw.instance;
                let z;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(z || (z = {}));
                const j = (u = 'model', e = z.Deep) => {
                    const t = (0, r.useState)(0),
                        n = (t[0], t[1]),
                        i = (0, r.useMemo)(() => O(), []),
                        o = i.caller,
                        a = i.resId,
                        l = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${u}` : u),
                            [o, u],
                        ),
                        s = (0, r.useState)(() =>
                            ((u) => {
                                const e = N(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return I(e) ? e.value : e;
                            })(G(l)),
                        ),
                        c = s[0],
                        E = s[1],
                        d = (0, r.useRef)(-1);
                    return (
                        m(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? z.Deep : z.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== z.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === z.Deep
                                            ? (u === c && n((u) => u + 1), E(u))
                                            : E(Object.assign([], u));
                                    },
                                    r = U(u);
                                d.current = $.addCallback(r, t, a, e === z.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (e !== z.None)
                                return () => {
                                    $.removeCallback(d.current, a);
                                };
                        }, [a, e]),
                        c
                    );
                };
                var K = t(521);
                const V = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(u = K.n.NONE, e = V, t = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== K.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), e(r), t && r.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                const Z = (u) => {
                        let e,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (e = u());
                                });
                            })),
                            () => {
                                'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    },
                    Q = (u) => {
                        if (!u) return !1;
                        const e = u.getBoundingClientRect(),
                            t = e.width,
                            n = e.height;
                        return 0 !== t && 0 !== n;
                    },
                    J = (u) => {
                        const e = (0, r.useState)(Q(u ? u.current : null)),
                            t = e[0],
                            n = e[1];
                        return (
                            (0, r.useEffect)(() => {
                                let e = 0;
                                const t = () => {
                                    e = requestAnimationFrame(() => {
                                        Q(u ? u.current : null) ? n(!0) : t();
                                    });
                                };
                                return (
                                    t(),
                                    () => {
                                        cancelAnimationFrame(e);
                                    }
                                );
                            }, [u]),
                            (0, r.useEffect)(() => () => n(!1), [u]),
                            t
                        );
                    };
                var uu = t(380),
                    eu = t.n(uu);
                const tu = 'ScrollArea_base_47',
                    nu = 'ScrollArea_base__scrollIndent_1d',
                    ru = 'ScrollArea_base__verticalScrollbarMargin_50',
                    iu = 'ScrollArea_base__multiple_44',
                    ou = 'ScrollArea_base__hidden_ec',
                    au = i().forwardRef((u, e) => {
                        const t = u.offsetLeft,
                            n = void 0 === t ? 0 : t,
                            o = u.offsetTop,
                            a = void 0 === o ? 0 : o,
                            l = u.scrollSettings,
                            s = u.onUpdateActiveAxis,
                            c = u.onHorizontalScroll,
                            E = u.onVerticalScroll,
                            d = u.onOverScrollAtBeginning,
                            A = u.onOverScrollAtEnd,
                            F = u.wrapperIndent,
                            h = u.verticalScrollbarMargin,
                            D = u.isMultipleScroll,
                            m = u.scrollAreaContainer,
                            B = u.children,
                            C = u.classMix,
                            _ = u.onScrollLeftHandled,
                            f = (0, r.useState)(!1),
                            v = f[0],
                            b = f[1],
                            p = (0, r.useState)(),
                            w = p[0],
                            L = p[1],
                            x = (0, r.useState)(),
                            y = x[0],
                            S = x[1],
                            T = (0, r.useRef)(null),
                            M = (0, r.useCallback)(() => {
                                w &&
                                    s &&
                                    s({ x: w.scrollbarXActive, y: w.scrollbarYActive }, { x: w.reach.x, y: w.reach.y });
                            }, [s, w]),
                            k = (0, r.useCallback)(() => w, [w]),
                            H = (0, r.useCallback)(() => {
                                w && w.update();
                            }, [w]),
                            R = (0, r.useCallback)(
                                (u, e, t) => {
                                    w && (w.setScrollLeft(u, e, t), _ && _(u, w.contentWidth - w.containerWidth));
                                },
                                [w, _],
                            ),
                            W = (0, r.useCallback)(
                                (u) => {
                                    w && (w.setScrollLeftImmediately(u), _ && _(u, w.contentWidth - w.containerWidth));
                                },
                                [w, _],
                            ),
                            P = (0, r.useCallback)(
                                (u, e, t) => {
                                    w && w.setScrollTop(u, e, t);
                                },
                                [w],
                            ),
                            O = (0, r.useCallback)(
                                (u) => {
                                    w && w.setScrollTopImmediately(u);
                                },
                                [w],
                            ),
                            N = (0, r.useCallback)(() => {
                                if (y && c && w) {
                                    const u = { scrollPosition: y.scrollLeft < 0 ? 0 : y.scrollLeft, reach: w.reach.x };
                                    c(u);
                                }
                            }, [c, y, w]),
                            Y = (0, r.useCallback)(() => {
                                if (y && E && w) {
                                    const u = { scrollPosition: y.scrollTop, reach: w.reach.y };
                                    E(u);
                                }
                            }, [E, y, w]),
                            I = (0, r.useCallback)(() => {
                                d && d();
                            }, [d]),
                            X = (0, r.useCallback)(() => {
                                A && A();
                            }, [A]),
                            G = (0, r.useCallback)(
                                (u) => {
                                    'function' == typeof e ? e(u) : null !== e && (e.current = u), S(u);
                                },
                                [e],
                            ),
                            U = (0, r.useCallback)(() => {
                                w &&
                                    (w.update(),
                                    (T.current = Z(() => {
                                        M();
                                    })));
                            }, [w, M]),
                            $ = (0, r.useCallback)((u) => {
                                0 === u.screenX &&
                                    0 === u.screenY &&
                                    (u.stopImmediatePropagation(), u.preventDefault());
                            }, []);
                        (0, r.useEffect)(() => {
                            if (w && y)
                                return (
                                    document.addEventListener('mousemove', $),
                                    window.addEventListener('resize', U),
                                    y.addEventListener('ps-scroll-x', N),
                                    y.addEventListener('ps-scroll-y', Y),
                                    y.addEventListener('over-scroll-beginning', I),
                                    y.addEventListener('over-scroll-ending', X),
                                    b(!0),
                                    () => {
                                        window.removeEventListener('resize', U),
                                            document.removeEventListener('mousemove', $),
                                            y &&
                                                (y.removeEventListener('ps-scroll-x', N),
                                                y.removeEventListener('ps-scroll-y', Y),
                                                y.removeEventListener('over-scroll-beginning', I),
                                                y.removeEventListener('over-scroll-ending', X));
                                    }
                                );
                        }, [$, N, I, X, U, y, w, Y]);
                        const z = (0, r.useRef)(y || null);
                        z.current = y || null;
                        const j = J(z);
                        (0, r.useEffect)(
                            () => (
                                !w && y && j && L(new (eu())(y, Object.assign({}, l))),
                                () => {
                                    w && (w.destroy(), L(void 0));
                                }
                            ),
                            [y, j, l, w],
                        ),
                            (0, r.useEffect)(
                                () => () => {
                                    null == T.current || T.current();
                                },
                                [],
                            ),
                            (0, r.useEffect)(
                                () =>
                                    Z(() => {
                                        w && M();
                                    }),
                                [M, w],
                            ),
                            (0, r.useEffect)(() => {
                                n > 0 && W(n);
                            }, [n, W]),
                            (0, r.useEffect)(() => {
                                a > 0 && O(a);
                            }, [a, O]),
                            (0, r.useEffect)(() => {
                                m &&
                                    ((m.setScrollLeft = R),
                                    (m.setScrollTop = P),
                                    (m.setScrollLeftImmediately = W),
                                    (m.setScrollTopImmediately = O),
                                    (m.updateScrollArea = H),
                                    (m.getScrollbar = k));
                            }, [m, R, W, P, O, H, k]);
                        const K = g()(tu, { [nu]: F, [ou]: !v, [ru]: h, [iu]: D }, C);
                        return i().createElement('div', { className: K, ref: G }, B);
                    });
                function lu(u) {
                    engine.call('PlaySound', u);
                }
                const su = {
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
                let cu, Eu;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(cu || (cu = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(Eu || (Eu = {}));
                const du = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: o,
                    mixClass: a,
                    soundHover: l,
                    soundClick: s,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: A,
                    onMouseLeave: F,
                    onClick: h,
                }) => {
                    const D = (0, r.useRef)(null),
                        m = (0, r.useState)(t),
                        B = m[0],
                        C = m[1],
                        _ = (0, r.useState)(!1),
                        f = _[0],
                        v = _[1],
                        b = (0, r.useState)(!1),
                        p = b[0],
                        w = b[1],
                        L = (0, r.useCallback)(() => {
                            o || (D.current && (D.current.focus(), C(!0)));
                        }, [o]),
                        x = (0, r.useCallback)(
                            (u) => {
                                B && null !== D.current && !D.current.contains(u.target) && C(!1);
                            },
                            [B],
                        ),
                        y = (0, r.useCallback)(
                            (u) => {
                                o || (h && h(u));
                            },
                            [o, h],
                        ),
                        S = (0, r.useCallback)(
                            (u) => {
                                o || (null !== l && lu(l), c && c(u), w(!0));
                            },
                            [o, l, c],
                        ),
                        T = (0, r.useCallback)(
                            (u) => {
                                E && E(u);
                            },
                            [E],
                        ),
                        M = (0, r.useCallback)(
                            (u) => {
                                o || (A && A(u), v(!1));
                            },
                            [o, A],
                        ),
                        k = (0, r.useCallback)(
                            (u) => {
                                o || (null !== s && lu(s), d && d(u), t && L(), v(!0));
                            },
                            [o, s, d, L, t],
                        ),
                        H = (0, r.useCallback)(
                            (u) => {
                                o || (F && F(u), v(!1));
                            },
                            [o, F],
                        ),
                        W = g()(
                            su.base,
                            su[`base__${n}`],
                            {
                                [su.base__disabled]: o,
                                [su[`base__${e}`]]: e,
                                [su.base__focus]: B,
                                [su.base__highlightActive]: f,
                                [su.base__firstHover]: p,
                            },
                            a,
                        ),
                        P = g()(su.state, su.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, r.useEffect)(() => {
                            C(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: D,
                                className: W,
                                onMouseEnter: S,
                                onMouseMove: T,
                                onMouseUp: M,
                                onMouseDown: k,
                                onMouseLeave: H,
                                onClick: y,
                            },
                            n !== cu.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: su.back }),
                                    i().createElement('span', { className: su.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: P },
                                i().createElement('span', { className: su.stateDisabled }),
                                i().createElement('span', { className: su.stateHighlightHover }),
                                i().createElement('span', { className: su.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: su.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                du.defaultProps = { type: cu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Au = (0, r.memo)(du);
                let Fu;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Fu || (Fu = {}));
                const hu = (u) => u.replace(/&nbsp;/g, ' '),
                    Du = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    mu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Bu = (u, e, t = Fu.left) => u.split(e).reduce(t === Fu.left ? Du : mu, []),
                    Cu = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    gu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _u = (u, e = Fu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return gu.includes(t)
                            ? Cu(u)
                            : ((u, e = Fu.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = hu(u);
                                  return Bu(r, /( )/, e).forEach((u) => (t = t.concat(Bu(u, n, Fu.left)))), t;
                              })(u, e);
                    },
                    fu = 'FormatText_base_d0',
                    vu = ({ binding: u, text: e = '', classMix: t, alignment: n = Fu.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, o) =>
                                      i().createElement(
                                          'div',
                                          { className: g()(fu, t), key: `${e}-${o}` },
                                          ((u, e, t) =>
                                              u
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((u) => (t && u in t ? t[u] : _u(u, e))))(e, n, u).map((u, e) =>
                                              i().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                let bu;
                !(function (u) {
                    (u.None = ''),
                        (u.Tiny = 'tiny'),
                        (u.Small = 'small'),
                        (u.Medium = 'medium'),
                        (u.Large = 'large'),
                        (u.Huge = 'huge');
                })(bu || (bu = {}));
                const pu = (u, e) => u.getBoundingClientRect().top >= e,
                    wu = (u, e) => {
                        const t = u.current;
                        if (t) {
                            const u = t.getBoundingClientRect(),
                                n = u.top + e,
                                r = Array.from(t.children);
                            if (r.length) {
                                const e = ((u, e) => {
                                    const t = u.length - 1;
                                    if (!pu(u[t], e)) return -1;
                                    let n = 0,
                                        r = t - 1,
                                        i = !1;
                                    for (; r - n > 1; ) {
                                        const t = n + Math.floor(0.5 * (r - n + 1));
                                        (i = pu(u[t], e)), i ? (r = t) : (n = t);
                                    }
                                    return i || pu(u[r], e) ? n : r;
                                })(r, n);
                                if (e > 0) {
                                    const t = r[e].getBoundingClientRect();
                                    return u.right - t.right < 16 ? e : e + 1;
                                }
                            }
                        }
                        return -1;
                    },
                    Lu = 'ShortenedText_base_fe',
                    xu = 'ShortenedText_base__shown_af',
                    yu = ({ blocks: u, linesCount: e = 2, mediaSize: t }) => {
                        const o = (0, r.useState)(u),
                            a = o[0],
                            l = o[1],
                            s = (0, r.useState)({ width: 0, height: 0 }),
                            c = s[0],
                            E = s[1],
                            d = (0, r.useRef)(null),
                            A = (0, r.useRef)({ shortened: !1 }),
                            F = (0, r.useCallback)(() => {
                                (0, Y.Eu)().then(() => {
                                    const u = ((u) => {
                                        const e = u.current;
                                        return e ? window.getComputedStyle(e).getPropertyValue('line-height') : '';
                                    })(d);
                                    if (u) {
                                        const t = Number(u.split('rem')[0]),
                                            r = d.current;
                                        if (r && isFinite(t)) {
                                            const u = n.O.view.remToPx(e * t);
                                            E({ height: u, width: r.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [e]);
                        (0, r.useEffect)(() => {
                            if (u.length) return A.current.shortened && (A.current.shortened = !1), Z(F);
                        }, [u, t, F]),
                            (0, r.useEffect)(() => {
                                if (c.height && !A.current.shortened) {
                                    const e = wu(d, c.height);
                                    if (-1 !== e) {
                                        const t = u.slice(0, e);
                                        t.push(i().createElement('span', { key: e }, '...')),
                                            l(t),
                                            (A.current.shortened = !0);
                                    }
                                }
                            }, [u, c, t]);
                        const h = (0, r.useMemo)(() => (c.height ? { maxHeight: `${c.height}rem` } : {}), [c.height]);
                        return i().createElement('div', { ref: d, className: g()(Lu, c.height && xu), style: h }, a);
                    },
                    Su = {
                        paragraph: 'TaggedText_paragraph_7f',
                        paragraph__left: 'TaggedText_paragraph__left_6f',
                        paragraph__right: 'TaggedText_paragraph__right_01',
                        paragraph__center: 'TaggedText_paragraph__center_ab',
                        neutral: 'TaggedText_neutral_f3',
                        expTag: 'TaggedText_expTag_81',
                        stats: 'TaggedText_stats_f2',
                        colorTag: 'TaggedText_colorTag_4a',
                    };
                function Tu() {
                    Tu = function (u, e) {
                        return new t(u, void 0, e);
                    };
                    var u = RegExp.prototype,
                        e = new WeakMap();
                    function t(u, n, r) {
                        var i = new RegExp(u, n);
                        return e.set(i, r || e.get(u)), ku(i, t.prototype);
                    }
                    function n(u, t) {
                        var n = e.get(t);
                        return Object.keys(n).reduce(function (e, t) {
                            return (e[t] = u[n[t]]), e;
                        }, Object.create(null));
                    }
                    return (
                        Mu(t, RegExp),
                        (t.prototype.exec = function (e) {
                            var t = u.exec.call(this, e);
                            return t && (t.groups = n(t, this)), t;
                        }),
                        (t.prototype[Symbol.replace] = function (t, r) {
                            if ('string' == typeof r) {
                                var i = e.get(this);
                                return u[Symbol.replace].call(
                                    this,
                                    t,
                                    r.replace(/\$<([^>]+)>/g, function (u, e) {
                                        return '$' + i[e];
                                    }),
                                );
                            }
                            if ('function' == typeof r) {
                                var o = this;
                                return u[Symbol.replace].call(this, t, function () {
                                    var u = arguments;
                                    return (
                                        'object' != typeof u[u.length - 1] && (u = [].slice.call(u)).push(n(u, o)),
                                        r.apply(this, u)
                                    );
                                });
                            }
                            return u[Symbol.replace].call(this, t, r);
                        }),
                        Tu.apply(this, arguments)
                    );
                }
                function Mu(u, e) {
                    if ('function' != typeof e && null !== e)
                        throw new TypeError('Super expression must either be null or a function');
                    (u.prototype = Object.create(e && e.prototype, {
                        constructor: { value: u, writable: !0, configurable: !0 },
                    })),
                        e && ku(u, e);
                }
                function ku(u, e) {
                    return (
                        (ku =
                            Object.setPrototypeOf ||
                            function (u, e) {
                                return (u.__proto__ = e), u;
                            }),
                        ku(u, e)
                    );
                }
                function Hu(u) {
                    const e = [hu(u)];
                    let t = 0;
                    for (; t < e.length; ) {
                        const u = e[t];
                        if ('string' == typeof u) {
                            const n = Tu(/\{(.*)Open\}(.*?)\{\1Close\}/, { tag: 1 }).exec(u);
                            if (n) {
                                const r = u.split(n[0]);
                                let o = 1;
                                const a = n[2]
                                    .split(' ')
                                    .map(
                                        (u, e, r) => (
                                            (u = r.length - 1 === e ? u : u + ' '),
                                            i().createElement(
                                                'span',
                                                { key: `sub${t}-${o}-${e}`, className: Su[n[1]] },
                                                u,
                                            )
                                        ),
                                    );
                                for (; o < r.length; ) r.splice(o, 0, ...a), (o += a.length + 1);
                                '' === r[0] && r.splice(0, 1), e.splice(t, 1, ...r);
                            } else if (u.substr(0, u.length - 1).includes(' ')) {
                                const n = u.split(' ').map((u, e, t) => (t.length - 1 === e ? u : u + ' '));
                                e.splice(t, 1, ...n), (t += n.length);
                            } else t++;
                        } else t++;
                    }
                    return e;
                }
                const Ru = ({ text: u, align: e, classMix: t }) => {
                    const n = g()(Su.paragraph, Su[`paragraph__${e}`]),
                        r = u.split('\n');
                    return i().createElement(
                        'div',
                        { className: t },
                        r.map((u, e) => i().createElement('div', { key: e, className: n }, Hu(u))),
                    );
                };
                Ru.defaultProps = { align: 'left' };
                const Wu = 'Alert_base_c1',
                    Pu = 'Alert_icon_80',
                    Ou = 'Alert_text_cd',
                    Nu = ({ text: u }) =>
                        i().createElement(
                            'div',
                            { className: Wu },
                            i().createElement('i', { className: Pu }),
                            i().createElement('span', { className: Ou }, u),
                        ),
                    Yu = 'InventoryInfo_base_ee',
                    Iu = 'InventoryInfo_icon_5c',
                    Xu = 'InventoryInfo_text_35',
                    Gu = ({ text: u }) =>
                        i().createElement(
                            'div',
                            { className: Yu },
                            i().createElement('i', { className: Iu }),
                            i().createElement('span', { className: Xu }, u),
                        ),
                    Uu = 'InfoBlock_price_ec',
                    $u = 'InfoBlock_price__disabled_59',
                    zu = 'InfoBlock_label_38',
                    ju = 'InfoBlock_tokenIcon_ff',
                    Ku = 'InfoBlock_inventoryInHangar_b5',
                    Vu = ({ inventoryCount: u, isDisabled: e, price: t, isNotEnoughMoney: n }) => {
                        const r = u > 0 && e,
                            o = t > 0,
                            a = g()(Uu, n && $u);
                        return i().createElement(
                            i().Fragment,
                            null,
                            r &&
                                i().createElement(
                                    'div',
                                    { className: Ku },
                                    i().createElement(Gu, { text: R.strings.offers.giftsWindow.inHangar() }),
                                ),
                            o &&
                                i().createElement(
                                    'div',
                                    { className: a },
                                    i().createElement('div', { className: zu }, t),
                                    i().createElement('i', { className: ju }),
                                ),
                        );
                    },
                    qu = 'RentInfo_base_21',
                    Zu = 'RentInfo_icon_b0',
                    Qu = 'RentInfo_text_65',
                    Ju = R.strings.offers.giftsWindow.rent,
                    ue = { time: Ju.days(), wins: Ju.wins(), battles: Ju.battles() },
                    ee = ({ amount: u, type: e }) => {
                        const t = (0, r.useMemo)(
                                () => ({ value: i().createElement('span', { key: 'value' }, u) }),
                                [u],
                            ),
                            n = (0, r.useMemo)(() => {
                                const u = ue[e];
                                return { amount: i().createElement(vu, { key: 'amount', text: u, binding: t }) };
                            }, [e, t]);
                        return i().createElement(
                            'div',
                            { className: qu },
                            i().createElement('i', { className: Zu }),
                            i().createElement(vu, {
                                classMix: Qu,
                                text: R.strings.offers.giftsWindow.rent.title(),
                                binding: n,
                            }),
                        );
                    },
                    te = 'Gift_base_94',
                    ne = 'Gift_base__disabled_20',
                    re = 'Gift_base__small_e5',
                    ie = 'Gift_overlay_36',
                    oe = 'Gift_flag_90',
                    ae = 'Gift_info_4e',
                    le = 'Gift_availableCount_74',
                    se = 'Gift_rent_28',
                    ce = 'Gift_bottomLabels_b9',
                    Ee = 'Gift_base__noAdditionalInfo_19',
                    de = 'Gift_bottomInfo_70',
                    Ae = 'Gift_bottomInfo__narrow_45',
                    Fe = 'Gift_availableCountLabel_07',
                    he = 'Gift_button_d5',
                    De = 'Gift_alert_4f',
                    me = 'Gift_title_52',
                    Be = 'Gift_titleStatic_aa',
                    Ce = 'Gift_description_6d',
                    ge = 'Gift_disabled_f4',
                    _e = 'Gift_disabledBg_7a',
                    fe = 'Gift_icon_34',
                    ve = 'Gift_icon__withCount_a6',
                    be = 'Gift_count_a4',
                    pe = 'Gift_countLabel_3c',
                    we = 'Gift_highlight_d1',
                    Le = (u) => {
                        const e = u.id,
                            t = u.title,
                            n = u.description,
                            o = u.icon,
                            a = u.nationFlag,
                            l = u.count,
                            s = u.highlight,
                            c = u.rentType,
                            E = u.rentValue,
                            d = u.inventoryCount,
                            A = u.isDisabled,
                            F = u.buttonLabel,
                            h = u.onClick,
                            D = u.price,
                            m = u.isNotEnoughMoney,
                            B = u.availableCount,
                            C = w().mediaSize <= v.Small,
                            _ = (0, r.useCallback)(() => {
                                A || h(e);
                            }, [e, A, h]),
                            f = 'no_rent' !== c,
                            b = d > 0 && A,
                            p = l > 1,
                            L = B > 0 && !b && !f,
                            x = D > 0,
                            y = (0, r.useMemo)(() => ({ backgroundImage: `url('${o}')` }), [o]),
                            S = (0, r.useMemo)(() => (a ? { backgroundImage: `url('${a}')` } : {}), [a]),
                            T = (0, r.useMemo)(
                                () =>
                                    s
                                        ? {
                                              backgroundImage: `url(R.images.gui.maps.icons.offers.card.${C ? 'small' : 'big'}.${s})`,
                                          }
                                        : {},
                                [s, C],
                            ),
                            M = (0, r.useMemo)(
                                () =>
                                    Hu(n)
                                        .filter((u) => Boolean(u))
                                        .map((u, e) =>
                                            'string' == typeof u ? i().createElement('span', { key: e }, `${u} `) : u,
                                        ),
                                [n],
                            );
                        return i().createElement(
                            'div',
                            { className: g()(te, A && ne, C && re, !(x || b || f) && Ee), onClick: _ },
                            i().createElement('div', { className: ie }),
                            i().createElement('div', { className: oe, style: S }),
                            i().createElement('div', { className: g()(fe, p && ve), style: y }),
                            i().createElement('div', { className: we, style: T }),
                            A
                                ? i().createElement(
                                      'div',
                                      { className: ge },
                                      i().createElement('div', { className: _e }),
                                      b &&
                                          !m &&
                                          i().createElement(
                                              'div',
                                              { className: De },
                                              i().createElement(Nu, {
                                                  text: R.strings.offers.giftsWindow.unavailable(),
                                              }),
                                          ),
                                  )
                                : i().createElement(
                                      'div',
                                      { className: he },
                                      i().createElement(Au, { type: cu.primary, size: Eu.small }, F),
                                  ),
                            p &&
                                i().createElement(
                                    'div',
                                    { className: be },
                                    i().createElement(vu, {
                                        classMix: pe,
                                        text: R.strings.offers.giftsWindow.multiplier(),
                                        binding: { value: i().createElement('span', { key: 'count' }, l) },
                                    }),
                                ),
                            i().createElement(
                                'div',
                                { className: ae },
                                i().createElement(Ru, { text: t, classMix: me }),
                                i().createElement(
                                    'div',
                                    { className: Ce },
                                    i().createElement(yu, {
                                        blocks: M,
                                        mediaSize: C ? bu.Small : bu.Large,
                                        linesCount: C ? 2 : 3,
                                    }),
                                ),
                                f &&
                                    i().createElement(
                                        'div',
                                        { className: se },
                                        i().createElement(ee, { amount: E, type: c }),
                                    ),
                                i().createElement(Vu, u),
                            ),
                            i().createElement(
                                'div',
                                { className: ce },
                                i().createElement(
                                    'div',
                                    { className: g()(de, L && !x && Ae) },
                                    i().createElement(Ru, { text: t, classMix: Be }),
                                    f &&
                                        i().createElement(
                                            'div',
                                            { className: se },
                                            i().createElement(ee, { amount: E, type: c }),
                                        ),
                                    i().createElement(Vu, u),
                                ),
                                L &&
                                    i().createElement(
                                        'div',
                                        { className: le },
                                        i().createElement(vu, {
                                            text: R.strings.offers.giftsWindow.availableCount(),
                                            binding: {
                                                count: i().createElement(
                                                    'span',
                                                    { className: Fe, key: 'available' },
                                                    B,
                                                ),
                                            },
                                        }),
                                    ),
                            ),
                        );
                    },
                    xe = 'Gifts_base_3f',
                    ye = 'Gifts_box_3c',
                    Se = 'Gifts_box__extrasmall_7f',
                    Te = 'Gifts_box__small_27',
                    Me = 'Gifts_lip_49',
                    ke = 'Gifts_lip__extrasmall_db',
                    He = 'Gifts_lip__small_91',
                    Re = 'Gifts_bottom_12';
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        We.apply(this, arguments)
                    );
                }
                const Pe = () => {
                        const u = j('model').gifts,
                            e = (0, r.useContext)(F),
                            t = e.extraSmallWidth,
                            n = e.smallWidth,
                            o = (0, r.useState)(!1),
                            a = o[0],
                            l = o[1],
                            s = (0, r.useState)(!0),
                            c = s[0],
                            E = s[1],
                            d = (0, r.useCallback)(
                                (e) => {
                                    u.onItemClicked({ index: e });
                                },
                                [u],
                            ),
                            A = (0, r.useCallback)((u) => {
                                l(u.y);
                            }, []),
                            h = (0, r.useCallback)((u) => {
                                E('start' === u.reach);
                            }, []),
                            D = (0, r.useMemo)(() => a && !c, [a, c]),
                            m = g()(ye, t && Se, n && Te),
                            B = g()(Me, t && ke, n && He);
                        return i().createElement(
                            'div',
                            { className: xe },
                            D && i().createElement('div', { className: B }),
                            i().createElement(
                                au,
                                { onUpdateActiveAxis: A, onVerticalScroll: h },
                                i().createElement(
                                    'div',
                                    { className: m },
                                    u.items.map(({ value: u }) =>
                                        i().createElement(Le, We({ key: u.id, onClick: d }, u)),
                                    ),
                                    i().createElement('div', { className: Re }),
                                ),
                            ),
                        );
                    },
                    Oe = {
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
                    Ne = [
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
                function Ye() {
                    return (
                        (Ye =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ye.apply(this, arguments)
                    );
                }
                class Ie extends i().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && lu(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && lu(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            n = u.goto,
                            r = u.side,
                            o = u.type,
                            a = u.classNames,
                            l = u.onMouseEnter,
                            s = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            d =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(u, Ne)),
                            A = g()(Oe.base, Oe[`base__${o}`], Oe[`base__${r}`], null == a ? void 0 : a.base),
                            F = g()(Oe.icon, Oe[`icon__${o}`], Oe[`icon__${r}`], null == a ? void 0 : a.icon),
                            h = g()(Oe.glow, null == a ? void 0 : a.glow),
                            D = g()(Oe.caption, Oe[`caption__${o}`], null == a ? void 0 : a.caption),
                            m = g()(Oe.goto, null == a ? void 0 : a.goto);
                        return i().createElement(
                            'div',
                            Ye(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(s),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== o && i().createElement('div', { className: Oe.shine }),
                            i().createElement('div', { className: F }, i().createElement('div', { className: h })),
                            i().createElement('div', { className: D }, e),
                            n && i().createElement('div', { className: m }, n),
                        );
                    }
                }
                Ie.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Xe = 'Header_base_2d',
                    Ge = 'Header_header_c7',
                    Ue = 'Header_header__small_9c',
                    $e = 'Header_title_5e',
                    ze = 'Header_title__small_e2',
                    je = 'Header_description_9b',
                    Ke = 'Header_highlight_4d',
                    Ve = 'Header_pageBack_3d',
                    qe = 'Header_token_dd',
                    Ze = 'Header_tokenLabel_5b',
                    Qe = 'Header_tokenIcon_fc',
                    Je = () => {
                        const u = j('model'),
                            e = u.onBack,
                            t = u.name,
                            n = u.tokens,
                            o = u.clicksCount,
                            a = u.expiration,
                            l = (0, r.useContext)(F),
                            s = l.extraSmallWidth || l.smallWidth,
                            c = (0, r.useCallback)(() => {
                                e();
                            }, [e]),
                            E = g()(Ge, s && Ue),
                            d = g()($e, s && ze),
                            A = (0, r.useMemo)(
                                () => ({ count: i().createElement('span', { className: Ze, key: 'tokens' }, n) }),
                                [n],
                            ),
                            h = (0, r.useMemo)(
                                () => ({ current: i().createElement('span', { className: Ke, key: 'current' }, o) }),
                                [o],
                            ),
                            D = (0, r.useMemo)(
                                () => ({
                                    date: i().createElement(
                                        'span',
                                        { className: Ke, key: 'highlight' },
                                        Y.Z5.getDateFormat(a, Y.kH.SHORT_FORMAT),
                                    ),
                                    time: i().createElement(
                                        'span',
                                        { className: Ke, key: 'highlight' },
                                        Y.Z5.getTimeFormat(a, Y.lf.SHORT_FORMAT),
                                    ),
                                }),
                                [a],
                            );
                        return i().createElement(
                            'div',
                            { className: Xe },
                            i().createElement(
                                'div',
                                { className: Ve },
                                i().createElement(Ie, {
                                    caption: R.strings.menu.viewHeader.backBtn.label(),
                                    goto: R.strings.offers.giftsWindow.backGoto(),
                                    side: 'left',
                                    type: 'back',
                                    onClick: c,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: E },
                                i().createElement('div', { className: d }, t),
                                n
                                    ? i().createElement(
                                          'div',
                                          { className: qe },
                                          i().createElement(vu, {
                                              classMix: je,
                                              text: R.strings.offers.giftsWindow.tokens(),
                                              binding: A,
                                          }),
                                          i().createElement('i', { className: Qe }),
                                      )
                                    : i().createElement(vu, {
                                          classMix: je,
                                          text: R.strings.offers.giftsWindow.giftsAvailable(),
                                          binding: h,
                                      }),
                                i().createElement(vu, {
                                    classMix: je,
                                    text: R.strings.offers.giftsWindow.expiration(),
                                    binding: D,
                                }),
                            ),
                        );
                    },
                    ut = 'App_base_55',
                    et = () => {
                        const u = j('model'),
                            e = u.background,
                            t = u.onBack;
                        var n;
                        (n = t), q(K.n.ESCAPE, n);
                        const o = (0, r.useMemo)(
                            () => ({ backgroundImage: `url('${e || 'R.images.gui.maps.icons.storage.background'}')` }),
                            [e],
                        );
                        return i().createElement(
                            B,
                            null,
                            i().createElement(
                                'div',
                                { className: ut, style: o },
                                i().createElement(Je, null),
                                i().createElement(Pe, null),
                            ),
                        );
                    },
                    tt = 'OfferGiftsWindow_base_1d';
                n.O.view.extraSize.set(0, 35),
                    engine.whenReady.then(() => {
                        P().render(
                            i().createElement(
                                H,
                                null,
                                i().createElement('div', { className: tt }, i().createElement(et, null)),
                            ),
                            document.getElementById('root'),
                        );
                    });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [e, t, n] = deferred[l], i = !0, o = 0; o < e.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var a = t();
                        void 0 !== a && (u = a);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [e, t, n];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (() => {
            var u = { 917: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [i, o, a] = t,
                        l = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (a) var s = a(__webpack_require__);
                    }
                    for (e && e(t); l < i.length; l++)
                        (r = i[l]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [809], () => __webpack_require__(647));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
