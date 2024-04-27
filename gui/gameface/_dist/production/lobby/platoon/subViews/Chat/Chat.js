(() => {
    var __webpack_modules__ = {
            380: (e) => {
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
                function u(e, t) {
                    if (!o) throw new Error('No element matching method supported');
                    return o.call(e, t);
                }
                function i(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function l(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return u(e, t);
                    });
                }
                var s = 'ps',
                    a = {
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
                    h = { immediately: !1 };
                function m(e, t, n) {
                    void 0 === n && (n = {});
                    var r = e.element.classList,
                        o = c.scrolling(t);
                    r.contains(o) ? clearTimeout(d[t]) : r.add(o);
                }
                function v(e, t, n) {
                    void 0 === n && (n = {});
                    Object.assign(h, n).immediately
                        ? e.isAlive && e.element.classList.remove(c.scrolling(t))
                        : (d[t] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(c.scrolling(t));
                          }, e.settings.scrollingThreshold));
                }
                var f = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    E = { isEmpty: { configurable: !0 } };
                (f.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (f.prototype.unbind = function (e, t) {
                        var n = this;
                        this.handlers[e] = this.handlers[e].filter(function (r) {
                            return !(!t || r === t) || (n.element.removeEventListener(e, r, !1), !1);
                        });
                    }),
                    (f.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (E.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(f.prototype, E);
                var b = function () {
                    this.eventElements = [];
                };
                function _(e) {
                    return parseInt(e, 10) || 0;
                }
                (b.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new f(e)), this.eventElements.push(t)), t;
                }),
                    (b.prototype.bind = function (e, t, n) {
                        this.eventElement(e).bind(t, n);
                    }),
                    (b.prototype.unbind = function (e, t, n) {
                        var r = this.eventElement(e);
                        r.unbind(t, n), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
                    }),
                    (b.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (b.prototype.once = function (e, t, n) {
                        var r = this.eventElement(e);
                        r.bind(t, function e(o) {
                            r.unbind(t, e), n(o);
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
                function F() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function g(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var A = function (e, t, n, r, o, u) {
                    var i;
                    if ((void 0 === r && (r = !0), void 0 === o && (o = !1), void 0 === u && (u = !1), 'top' === t))
                        i = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        i = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, n, r, o, u) {
                        var i = n[0],
                            l = n[1],
                            s = n[2],
                            a = n[3],
                            c = n[4],
                            d = n[5];
                        void 0 === r && (r = !0);
                        void 0 === o && (o = !1);
                        void 0 === u && (u = !1);
                        var h = e.element;
                        if (!e.reach) return;
                        (e.reach[a] = null), h[s] < 1 && (e.reach[a] = 'start');
                        h[s] > e[i] - e[l] - 1 && (e.reach[a] = 'end');
                        t &&
                            !o &&
                            (h.dispatchEvent(g('ps-scroll-' + a)),
                            t < 0
                                ? h.dispatchEvent(g('ps-scroll-' + c))
                                : t > 0 && h.dispatchEvent(g('ps-scroll-' + d)),
                            r &&
                                (function (e, t) {
                                    m(e, t), v(e, t);
                                })(e, a));
                        e.reach[a] && (t || u) && h.dispatchEvent(g('ps-' + a + '-reach-' + e.reach[a]));
                    })(e, n, i, r, o, u);
                };
                var w = function (e, t, r, o) {
                    void 0 === t && (t = !1), void 0 === r && (r = 0), void 0 === o && (o = !1);
                    var u = e.element;
                    if (u) {
                        if (
                            ((e.containerWidth = Math.round(u.getBoundingClientRect().width)),
                            (e.containerHeight = Math.round(u.getBoundingClientRect().height)),
                            (e.contentWidth = Math.round(u.scrollWidth) - 2 * r),
                            (e.contentHeight = Math.round(u.scrollHeight)),
                            !o)
                        ) {
                            e.contentWidth = Math.round(u.scrollWidth) - 2 * r;
                            var s = e.contentWidth - e.containerWidth + r;
                            u.scrollLeft < r ? (u.scrollLeft = r) : u.scrollLeft > s && (u.scrollLeft = s);
                        }
                        var d = Math.floor(u.scrollTop),
                            h = Math.floor(u.scrollLeft) - r,
                            m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        u.contains(e.scrollbarXRail) ||
                            (l(u, a.rail('x')).forEach(function (e) {
                                return i(e);
                            }),
                            u.appendChild(e.scrollbarXRail)),
                            u.contains(e.scrollbarYRail) ||
                                (l(u, a.rail('y')).forEach(function (e) {
                                    return i(e);
                                }),
                                u.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = C(e, _((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                  (e.scrollbarXLeft = _(
                                      ((e.negativeScrollAdjustment + h) * (e.railXWidth - e.scrollbarXWidth)) /
                                          (e.contentWidth - e.containerWidth),
                                  )),
                                  e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                : (e.scrollbarXActive = !1),
                            !e.settings.suppressScrollY &&
                            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                ? ((e.scrollbarYActive = !0),
                                  (e.railYHeight = e.containerHeight - e.railYMarginHeight * m - 15 * m),
                                  (e.railYRatio = e.containerHeight / e.railYHeight),
                                  (e.scrollbarYHeight = C(e, _((e.railYHeight * e.containerHeight) / e.contentHeight))),
                                  (e.scrollbarYTop = _(
                                      (d * (e.railYHeight - e.scrollbarYHeight)) /
                                          (e.contentHeight - e.containerHeight),
                                  )))
                                : (e.scrollbarYActive = !1),
                            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                            (function (e, t, r) {
                                var o = { width: t.railXWidth },
                                    u = Math.floor(e.scrollTop);
                                t.isRtl
                                    ? (o.left =
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (o.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (o.bottom = t.scrollbarXBottom - u)
                                    : (o.top = t.scrollbarXTop + u);
                                n(t.scrollbarXRail, o);
                                var i = { top: u, height: t.railYHeight };
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
                                n(t.scrollbarYRail, i),
                                    n(t.scrollbarX, {
                                        left: t.scrollbarXLeft,
                                        width: t.scrollbarXWidth - t.railBorderXWidth * r,
                                    }),
                                    n(t.scrollbarY, {
                                        top: t.scrollbarYTop,
                                        height: t.scrollbarYHeight - t.railBorderYWidth * r,
                                    });
                            })(u, e, m),
                            e.scrollbarXButtonStart.classList.toggle('disabled', h < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', h + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', u.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                u.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (u.classList.add(c.active('x')), A(e, 'left', h - e.lastScrollLeft, !0, t))
                                : (u.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (u.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (u.classList.add(c.active('y')), A(e, 'top', u.scrollTop - e.lastScrollTop, !0, t))
                                : (u.classList.remove(c.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (u.scrollTop = 0)),
                            (e.lastScrollTop = d),
                            (e.lastScrollLeft = h),
                            (e.scrollTopPercent = u.scrollTop / u.scrollHeight),
                            (e.scrollLeftPercent = u.scrollLeft / u.scrollWidth);
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
                    y = function (e) {
                        var t,
                            n = e.percentTimeElapsed,
                            r = e.x1,
                            o = e.y1,
                            u = e.x2,
                            i = e.y2;
                        return (
                            1 -
                            (r * ((t = n), Math.pow(t, 3)) +
                                o *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(n) +
                                u *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(n) +
                                i *
                                    (function (e) {
                                        return Math.pow(1 - e, 3);
                                    })(n))
                        );
                    },
                    D = { breakBounds: !1, startBound: 0, endBound: 0 },
                    L = function (e) {
                        var t = e.scrollableDomEle,
                            n = e.onAnimationCompleteCallback,
                            r = e.direction,
                            o = e.onRefUpdateCallback,
                            u = e.duration,
                            i = e.cubicBezierPoints,
                            l = e.easingPreset,
                            s = e.scrollAmount,
                            a = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = D);
                        var d = null,
                            h = null,
                            m = null,
                            v = null,
                            f = t === window,
                            E = ['left', 'right'].indexOf(r) > -1,
                            b = ['right', 'bottom'].indexOf(r) > -1;
                        E
                            ? ((h = f ? 'scrollX' : 'scrollLeft'),
                              (v = f ? 'innerWidth' : 'width'),
                              (m = 'scrollWidth'))
                            : ((h = f ? 'scrollY' : 'scrollTop'),
                              (v = f ? 'innerHeight' : 'height'),
                              (m = 'scrollHeight'));
                        var _ = t[h],
                            p = (function (e) {
                                var t,
                                    n = e.isWindow,
                                    r = e.scrollableDomEle,
                                    o = e.elementLengthProp,
                                    u = e.initialScrollPosition,
                                    i = e.isHorizontalDirection,
                                    l = e.scrollLengthProp,
                                    s = e.direction;
                                if (n) {
                                    var a = document.documentElement;
                                    t = i ? a.offsetWidth : a.offsetHeight;
                                } else t = (r[l] - r.getBoundingClientRect()[o]) | 0;
                                return ['left', 'top'].includes(s) ? u : t - u;
                            })({
                                isWindow: f,
                                scrollableDomEle: t,
                                elementLengthProp: v,
                                initialScrollPosition: _,
                                isHorizontalDirection: E,
                                scrollLengthProp: m,
                                direction: r,
                            });
                        !isNaN(s) && s < p && (p = s);
                        var F = function e(r) {
                            if (!a || !a()) {
                                var s = r - d,
                                    m = (function (e) {
                                        var t = e.easingPreset,
                                            n = e.cubicBezierPoints,
                                            r = e.duration,
                                            o = e.runTime / r;
                                        if (B.hasOwnProperty(t)) return B[t](o);
                                        if (
                                            n &&
                                            !isNaN(n.x1) &&
                                            !isNaN(n.y1) &&
                                            !isNaN(n.x2) &&
                                            !isNaN(n.y2) &&
                                            n.x1 >= 0 &&
                                            n.x2 >= 0
                                        )
                                            return y({ percentTimeElapsed: o, x1: n.x1, x2: n.x2, y1: n.y1, y2: n.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: l, cubicBezierPoints: i, runTime: s, duration: u });
                                if (!isNaN(m)) {
                                    var v = Math.round(m * p),
                                        F = b ? v + _ : p - v;
                                    if (
                                        (c.breakBounds &&
                                            (F < c.startBound
                                                ? (F = c.startBound)
                                                : F > c.endBound && (F = c.endBound)),
                                        s < u)
                                    ) {
                                        if (f) {
                                            var g = E ? F : 0,
                                                A = E ? 0 : F;
                                            window.scrollTo(g, A);
                                        } else t[h] = F;
                                        o && o(F), requestAnimationFrame(e);
                                    } else n && n();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (d = e), F(e);
                        });
                    },
                    S = function (e) {
                        var t = e.axis,
                            n = e.cursorPositionOnRail,
                            r = e.direction,
                            o = e.i,
                            u = (function (e) {
                                var t = e.axis,
                                    n = e.i,
                                    r = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var o = n.scrollbarY.offsetTop,
                                        u = o + n.scrollbarYHeight;
                                    return r >= o && r <= u;
                                }
                                var i = n.scrollbarX.offsetLeft,
                                    l = i + n.scrollbarXWidth;
                                return r >= i && r <= l;
                            })({ axis: t, i: o, cursorPositionOnRail: n });
                        return u
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
                                      u = (r - o.scrollbar / 2) / o.rail,
                                      i = Math.round(Math.min(o.maxScroll, Math.max(0, o.content * u)));
                                  'y' === t ? (n.element.scrollTop = i) : (n.element.scrollLeft = i);
                              })({ axis: t, i: o, cursorPositionOnRail: n }),
                              !0)
                            : ('y' === t
                                  ? (o.element.scrollTop += r * o.containerHeight)
                                  : (o.element.scrollLeft += r * o.containerWidth),
                              !1);
                    },
                    T = function (e, t, n) {
                        return function (r) {
                            t = t.toLowerCase();
                            var o = null,
                                u = function () {
                                    if (1 === r.buttons) {
                                        if (
                                            !r.target.closest('.ps__rail-' + t) ||
                                            !r.target.closest('.ps__track_' + t)
                                        ) {
                                            var u = (function (e) {
                                                    var t = e.axis,
                                                        n = e.e,
                                                        r = e.i;
                                                    return 'y' === t
                                                        ? {
                                                              cursorPosition: n.screenY,
                                                              windowScrolled: window.pageYOffset,
                                                              elementPosition:
                                                                  r.scrollbarYRail.getBoundingClientRect().top,
                                                          }
                                                        : {
                                                              cursorPosition: n.screenX,
                                                              windowScrolled: window.pageXOffset,
                                                              elementPosition:
                                                                  r.scrollbarXRail.getBoundingClientRect().left,
                                                          };
                                                })({ axis: t, e: r, i: e }),
                                                i = u.cursorPosition - u.windowScrolled - u.elementPosition,
                                                l = (function (e) {
                                                    var t = e.axis,
                                                        n = e.cursorPositionOnRail,
                                                        r = e.i;
                                                    return n > ('y' === t ? r.scrollbarYTop : r.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: i, i: e });
                                            S({ axis: t, cursorPositionOnRail: i, direction: l, i: e }) &&
                                                clearTimeout(o),
                                                w(e, !1, n);
                                        }
                                        r.stopPropagation();
                                    }
                                };
                            u(),
                                (o = setInterval(u, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(o);
                                });
                        };
                    };
                function k(e, t, n) {
                    var r = n[0],
                        o = n[1],
                        u = n[2],
                        i = n[3],
                        l = n[4],
                        s = n[5],
                        a = n[6],
                        d = n[7],
                        h = n[8],
                        f = e.element,
                        E = null,
                        b = null,
                        p = null;
                    function F(n) {
                        (f[a] = _(E + p * (n[u] - b))), m(e, d), w(e, !1, t), n.stopPropagation(), n.preventDefault();
                    }
                    function g() {
                        v(e, d), e[h].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', F);
                    }
                    e.event.bind(e[l], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((E = f[a]),
                            (b = t[u]),
                            (p = (e[o] - e[r]) / (e[i] - e[s])),
                            e.event.bind(e.ownerDocument, 'mousemove', F),
                            e.event.once(e.ownerDocument, 'mouseup', g),
                            e[h].classList.add(c.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var M = 1e3,
                    P = {
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
                            var n = e.element;
                            e.event.bind(e.ownerDocument, 'keydown', function (r) {
                                if (
                                    !((r.isDefaultPrevented && r.isDefaultPrevented()) || r.defaultPrevented) &&
                                    u(n, ':hover')
                                ) {
                                    var o,
                                        i = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (i) {
                                        if ('IFRAME' === i.tagName) i = i.contentDocument.activeElement;
                                        else for (; i.shadowRoot; ) i = i.shadowRoot.activeElement;
                                        if (
                                            u((o = i), 'input,[contenteditable]') ||
                                            u(o, 'select,[contenteditable]') ||
                                            u(o, 'textarea,[contenteditable]') ||
                                            u(o, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var l = 0,
                                        s = 0;
                                    switch (r.which) {
                                        case 37:
                                            l = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            s = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            l = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            s = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            s = r.shiftKey ? e.containerHeight : -e.containerHeight;
                                            break;
                                        case 33:
                                            s = e.containerHeight;
                                            break;
                                        case 34:
                                            s = -e.containerHeight;
                                            break;
                                        case 36:
                                            s = e.contentHeight;
                                            break;
                                        case 35:
                                            s = -e.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.settings.suppressScrollX && 0 !== l) ||
                                        (e.settings.suppressScrollY && 0 !== s) ||
                                        ((n.scrollTop -= s),
                                        (n.scrollLeft += l),
                                        w(e, !1, t),
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
                                            var u = n.scrollLeft;
                                            if (0 === r) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === u && t < 0) ||
                                                    (u >= e.contentWidth - e.containerWidth && t > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(l, s) && r.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, n) {
                            var r = e.element;
                            function o(o) {
                                var u = (function (e) {
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
                                    i = u[0],
                                    l = u[1];
                                if (
                                    !(function (e, n, o) {
                                        if (!p.isWebKit && r.querySelector('select')) return !0;
                                        if (!r.contains(e)) return !1;
                                        for (var u = e; u && u !== r; ) {
                                            if (u.classList.contains(a.consuming)) return !0;
                                            var i = t(u);
                                            if (
                                                [i.overflow, i.overflowX, i.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var l = u.scrollHeight - u.clientHeight;
                                                if (
                                                    l > 0 &&
                                                    !((0 === u.scrollTop && o > 0) || (u.scrollTop === l && o < 0))
                                                )
                                                    return !0;
                                                var s = u.scrollWidth - u.clientWidth;
                                                if (
                                                    s > 0 &&
                                                    !((0 === u.scrollLeft && n < 0) || (u.scrollLeft === s && n > 0))
                                                )
                                                    return !0;
                                            }
                                            u = u.parentNode;
                                        }
                                        return !1;
                                    })(o.target, i, l)
                                ) {
                                    var s = !1,
                                        c = (i * e.settings.wheelSpeed) | 0,
                                        d = (l * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (l ? (r.scrollTop -= d) : (r.scrollTop += c), (s = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (i ? (r.scrollLeft += c) : (r.scrollLeft -= d), (s = !0))
                                        : ((r.scrollTop -= d), (r.scrollLeft += c)),
                                        w(e, !1, n),
                                        (s =
                                            s ||
                                            (function (t, n) {
                                                var o = Math.floor(r.scrollTop),
                                                    u = 0 === r.scrollTop,
                                                    i = o + r.offsetHeight === r.scrollHeight,
                                                    l = 0 === r.scrollLeft,
                                                    s = r.scrollLeft + r.offsetWidth === r.scrollWidth;
                                                return (
                                                    !(Math.abs(n) > Math.abs(t) ? u || i : l || s) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(i, l)),
                                        s && !o.ctrlKey && (o.stopPropagation(), o.preventDefault());
                                }
                            }
                            e.event.bind(r, 'wheel', o),
                                void 0 !== window.onmousewheel && e.event.bind(r, 'mousewheel', o);
                        },
                        touch: function (e, n) {
                            if (p.supportsTouch || p.supportsIePointer) {
                                var r = e.element,
                                    o = {},
                                    u = 0,
                                    i = {},
                                    l = null;
                                p.supportsTouch
                                    ? (e.event.bind(r, 'touchstart', h),
                                      e.event.bind(r, 'touchmove', m),
                                      e.event.bind(r, 'touchend', v))
                                    : p.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(r, 'pointerdown', h),
                                            e.event.bind(r, 'pointermove', m),
                                            e.event.bind(r, 'pointerup', v))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(r, 'MSPointerDown', h),
                                            e.event.bind(r, 'MSPointerMove', m),
                                            e.event.bind(r, 'MSPointerUp', v)));
                            }
                            function s(t, o) {
                                (r.scrollTop -= o), (r.scrollLeft -= t), w(e, !1, n);
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
                            function h(e) {
                                if (d(e)) {
                                    var t = c(e);
                                    (o.pageX = t.pageX),
                                        (o.pageY = t.pageY),
                                        (u = new Date().getTime()),
                                        null !== l && clearInterval(l);
                                }
                            }
                            function m(n) {
                                if (d(n)) {
                                    var l = c(n),
                                        h = { pageX: l.pageX, pageY: l.pageY },
                                        m = h.pageX - o.pageX,
                                        v = h.pageY - o.pageY;
                                    if (
                                        (function (e, n, o) {
                                            if (!r.contains(e)) return !1;
                                            for (var u = e; u && u !== r; ) {
                                                if (u.classList.contains(a.consuming)) return !0;
                                                var i = t(u);
                                                if (
                                                    [i.overflow, i.overflowX, i.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var l = u.scrollHeight - u.clientHeight;
                                                    if (
                                                        l > 0 &&
                                                        !((0 === u.scrollTop && o > 0) || (u.scrollTop === l && o < 0))
                                                    )
                                                        return !0;
                                                    var s = u.scrollLeft - u.clientWidth;
                                                    if (
                                                        s > 0 &&
                                                        !(
                                                            (0 === u.scrollLeft && n < 0) ||
                                                            (u.scrollLeft === s && n > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                u = u.parentNode;
                                            }
                                            return !1;
                                        })(n.target, m, v)
                                    )
                                        return;
                                    s(m, v), (o = h);
                                    var f = new Date().getTime(),
                                        E = f - u;
                                    E > 0 && ((i.x = m / E), (i.y = v / E), (u = f)),
                                        (function (t, n) {
                                            var o = Math.floor(r.scrollTop),
                                                u = r.scrollLeft,
                                                i = Math.abs(t),
                                                l = Math.abs(n);
                                            if (l > i) {
                                                if (
                                                    (n < 0 && o === e.contentHeight - e.containerHeight) ||
                                                    (n > 0 && 0 === o)
                                                )
                                                    return 0 === window.scrollY && n > 0 && p.isChrome;
                                            } else if (
                                                i > l &&
                                                ((t < 0 && u === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === u))
                                            )
                                                return !0;
                                            return !0;
                                        })(m, v) && n.preventDefault();
                                }
                            }
                            function v() {
                                e.settings.swipeEasing &&
                                    (clearInterval(l),
                                    (l = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(l)
                                            : i.x || i.y
                                              ? Math.abs(i.x) < 0.01 && Math.abs(i.y) < 0.01
                                                  ? clearInterval(l)
                                                  : (s(30 * i.x, 30 * i.y), (i.x *= 0.8), (i.y *= 0.8))
                                              : clearInterval(l);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var n = e.element,
                                r = null,
                                o = !1,
                                u = 0,
                                i = 0,
                                l = 0;
                            function s() {
                                e.onScroll();
                            }
                            function a(r, o, u, i) {
                                void 0 === u && (u = null),
                                    void 0 === i && (i = !1),
                                    L({
                                        scrollableDomEle: n,
                                        direction: 'right',
                                        onRefUpdateCallback: s,
                                        duration: o,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: r,
                                        onCheckForBreakCallback: u,
                                        boundsInfo: {
                                            breakBounds: i,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    });
                            }
                            function d() {
                                if (o) return o;
                            }
                            function h() {
                                l = 0;
                            }
                            function f(o) {
                                if (e.scrollbarXActive) {
                                    var s = r - o.screenX;
                                    (n.scrollLeft += s), (r = o.screenX);
                                    var a = new Date().getTime();
                                    if (((u = (s / (a - i)) * 1e3), (i = a), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === n.scrollLeft || n.scrollLeft === c
                                            ? 0 === l && (l = window.setTimeout(h, 250))
                                            : 0 !== l && (window.clearTimeout(l), (l = 0));
                                    }
                                    m(e, 'x'),
                                        m(e, 'dragging', { immediately: !0 }),
                                        o.stopPropagation(),
                                        o.preventDefault();
                                }
                            }
                            function E(e) {
                                (r = e.screenX),
                                    (o = !0),
                                    requestAnimationFrame(function () {
                                        o = !1;
                                    }),
                                    (i = new Date().getTime());
                            }
                            function b(r) {
                                var o = e.contentWidth - e.containerWidth + t;
                                if (n.scrollLeft < t) a(t - n.scrollLeft, M, d);
                                else if (n.scrollLeft > o) a(o - n.scrollLeft, M, d);
                                else {
                                    new Date().getTime() - i < 100 && a(u / 4, M, d, !0);
                                }
                                v(e, 'x'),
                                    v(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(c.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', f);
                            }
                            function _() {
                                o = !0;
                            }
                            n.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((r = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', f),
                                        e.event.once(e.ownerDocument, 'mouseup', b),
                                        e.event.once(e.ownerDocument, 'mousedown', E),
                                        e.event.once(n, 'wheel', _),
                                        e.scrollbarXRail.classList.add(c.clicking),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    R = function (e, o) {
                        var u = this;
                        if (
                            (void 0 === o && (o = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var i in ((this.element = e),
                        e.classList.add(s),
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
                            u.settings[i] = o[i];
                        (this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null);
                        var l,
                            d,
                            h = function () {
                                return e.classList.add(c.focus);
                            },
                            m = function () {
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
                            (this.scrollbarXRail = r(a.rail('x'))),
                            (this.scrollbarXButtonStart = r(a.buttonStart('x'))),
                            (this.scrollbarXButtonEnd = r(a.buttonEnd('x'))),
                            (this.scrollbarXTrack = r(a.track('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = r(a.thumb('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', h),
                            this.event.bind(this.scrollbarX, 'blur', m),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = r(a.rail('y'))),
                            (this.scrollbarYButtonStart = r(a.buttonStart('y'))),
                            (this.scrollbarYButtonEnd = r(a.buttonEnd('y'))),
                            (this.scrollbarYTrack = r(a.track('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = r(a.thumb('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', h),
                            this.event.bind(this.scrollbarY, 'blur', m),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            F().then(function () {
                                var r = t(u.scrollbarXRail);
                                (u.scrollbarXBottom = parseInt(r.bottom, 10)),
                                    isNaN(u.scrollbarXBottom)
                                        ? ((u.isScrollbarXUsingBottom = !1), (u.scrollbarXTop = _(r.top)))
                                        : (u.isScrollbarXUsingBottom = !0),
                                    (u.railBorderXWidth = _(r.borderLeftWidth) + _(r.borderRightWidth)),
                                    n(u.scrollbarXRail, { display: 'block' }),
                                    (u.railXMarginWidth = _(r.marginLeft) + _(r.marginRight)),
                                    n(u.scrollbarXRail, { display: '' }),
                                    (u.railXWidth = null),
                                    (u.railXRatio = null);
                                var o = t(u.scrollbarYRail);
                                (u.scrollbarYRight = parseInt(o.right, 10)),
                                    isNaN(u.scrollbarYRight)
                                        ? ((u.isScrollbarYUsingRight = !1), (u.scrollbarYLeft = _(o.left)))
                                        : (u.isScrollbarYUsingRight = !0),
                                    (u.scrollbarYOuterWidth = u.isRtl
                                        ? (function (e) {
                                              var n = t(e);
                                              return (
                                                  _(n.width) +
                                                  _(n.paddingLeft) +
                                                  _(n.paddingRight) +
                                                  _(n.borderLeftWidth) +
                                                  _(n.borderRightWidth)
                                              );
                                          })(u.scrollbarY)
                                        : null),
                                    (u.railBorderYWidth = _(o.borderTopWidth) + _(o.borderBottomWidth)),
                                    n(u.scrollbarYRail, { display: 'block' }),
                                    (u.railYMarginHeight = _(o.marginTop) + _(o.marginBottom)),
                                    n(u.scrollbarXRail, { display: '' }),
                                    n(u.scrollbarYRail, { display: '' }),
                                    (u.railYHeight = null),
                                    (u.railYRatio = null),
                                    (u.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= u.contentWidth - u.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= u.contentHeight - u.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (u.isAlive = !0),
                                    u.settings.handlers.forEach(function (e) {
                                        return P[e](u, u.settings.overScrollWidth);
                                    }),
                                    (u.boundHandleButtonEnter = u.handleMouseEnter.bind(u)),
                                    (u.boundHandleMouseLeave = u.handleMouseLeave.bind(u)),
                                    (u.boundHandleMouseEnter = u.handleMouseEnter.bind(u)),
                                    (u.boundPlayClickSound = u.playClickSound.bind(u)),
                                    u.scrollbarYButtonStart.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarYButtonEnd.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarXButtonStart.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarXButtonEnd.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarXButtonStart.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarXButtonEnd.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarYButtonStart.addEventListener('mouseenter', u.boundHandleButtonEnter),
                                    u.scrollbarYButtonEnd.addEventListener('mouseenter', u.boundHandleButtonEnter),
                                    u.scrollbarYButtonStart.addEventListener('mouseleave', u.boundHandleMouseLeave),
                                    u.scrollbarYButtonEnd.addEventListener('mouseleave', u.boundHandleMouseLeave),
                                    u.scrollbarY.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarX.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarY.addEventListener('mouseleave', u.boundHandleMouseLeave),
                                    u.scrollbarY.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarX.addEventListener('mousedown', u.boundPlayClickSound),
                                    (u.lastScrollTop = Math.floor(e.scrollTop)),
                                    (u.lastScrollLeft = e.scrollLeft),
                                    (u.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (u.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    u.event.bind(u.element, 'scroll', function (e) {
                                        return u.onScroll(e);
                                    }),
                                    u.settings.enableHorizontalScroll &&
                                        u.event.bind(u.element, 'wheel', function (e) {
                                            return u.onWheel(e);
                                        }),
                                    w(u, !1, u.settings.overScrollWidth, !1);
                            });
                    };
                (R.prototype._getAnimationSettings = function (e, t, n, r) {
                    var o = this,
                        u = 0;
                    return (
                        null !== this.element &&
                            (u = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - u,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                w(o, !0, o.settings.overScrollWidth, !1), n && n(e);
                            },
                            onAnimationCompleteCallback: function () {
                                r && r();
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
                            n(this.scrollbarXRail, { display: 'block' }),
                            n(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                _(t(this.scrollbarXRail).marginLeft) + _(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                _(t(this.scrollbarYRail).marginTop) + _(t(this.scrollbarYRail).marginBottom)),
                            n(this.scrollbarXRail, { display: 'none' }),
                            n(this.scrollbarYRail, { display: 'none' }),
                            F().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    w(e, !1, e.settings.overScrollWidth, !1),
                                    A(e, 'top', 0, !1, !1, !0),
                                    A(e, 'left', 0, !1, !1, !0),
                                    n(e.scrollbarXRail, { display: '' }),
                                    n(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (R.prototype.setScrollLeft = function (e, t, n) {
                        L(this._getAnimationSettings(e, 'right', t, n));
                    }),
                    (R.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (R.prototype.setScrollTop = function (e, t, n) {
                        L(this._getAnimationSettings(e, 'bottom', t, n));
                    }),
                    (R.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (R.prototype.onScroll = function (e) {
                        this.isAlive && w(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (R.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (w(this, !1, this.settings.overScrollWidth, !1),
                            A(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
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
            67: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => z });
                var r = {};
                n.r(r), n.d(r, { mouse: () => d, onResize: () => a });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => m,
                        getSize: () => h,
                        graphicsQuality: () => v,
                    });
                var u = {};
                n.r(u), n.d(u, { getBgUrl: () => E, getTextureUrl: () => f });
                var i = {};
                function l(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.r(i),
                    n.d(i, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => y,
                        children: () => u,
                        displayStatus: () => b,
                        displayStatusIs: () => j,
                        events: () => _,
                        extraSize: () => V,
                        forceTriggerMouseMove: () => I,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => U,
                        getScale: () => O,
                        getSize: () => k,
                        getViewGlobalPosition: () => P,
                        isEventHandled: () => X,
                        isFocused: () => H,
                        pxToRem: () => x,
                        remToPx: () => Y,
                        resize: () => M,
                        sendEvent: () => B,
                        setAnimateWindow: () => W,
                        setEventHandled: () => N,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => T,
                        whenTutorialReady: () => K,
                    });
                const a = l('clientResized'),
                    c = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && s(!1);
                    }
                    function n() {
                        e.enabled && s(!0);
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
                            : s(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const u = `mouse${t}`,
                                        i = c[t]((e) => n([e, 'outside']));
                                    function l(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, l),
                                        r(),
                                        () => {
                                            o &&
                                                (i(),
                                                window.removeEventListener(u, l),
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
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
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
                function E(e, t, n) {
                    return `url(${f(e, t, n)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    _ = {
                        onTextureFrozen: l('self.onTextureFrozen'),
                        onTextureReady: l('self.onTextureReady'),
                        onDomBuilt: l('self.onDomBuilt'),
                        onLoaded: l('self.onLoaded'),
                        onDisplayChanged: l('self.onShowingStatusChanged'),
                        onFocusUpdated: l('self.onFocusChanged'),
                        children: {
                            onAdded: l('children.onAdded'),
                            onLoaded: l('children.onLoaded'),
                            onRemoved: l('children.onRemoved'),
                            onAttached: l('children.onAttached'),
                            onTextureReady: l('children.onTextureReady'),
                            onRequestPosition: l('children.requestPosition'),
                        },
                    },
                    p = ['args'];
                const F = 2,
                    g = 16,
                    A = 32,
                    w = 64,
                    C = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        u = Object.keys(e);
                                    for (r = 0; r < u.length; r++) (n = u[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, p);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    B = {
                        close(e) {
                            C('popover' === e ? F : A);
                        },
                        minimize() {
                            C(w);
                        },
                        move(e) {
                            C(g, { isMouseEvent: !0, on: e });
                        },
                    };
                function y(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function L(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function S(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function P(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Y(t.x), y: Y(t.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function O() {
                    return viewEnv.getScale();
                }
                function x(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function W(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function N() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function I() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const j = Object.keys(b).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === b[t]), e), {}),
                    V = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    K = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : _.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    z = { view: i, client: o };
            },
            521: (e, t, n) => {
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
            368: () => {
                !(function () {
                    let e,
                        t,
                        n,
                        r,
                        o,
                        u,
                        i,
                        l = -1;
                    document.addEventListener('mousedown', (n) => {
                        document.getSelection().empty(),
                            n.target.select &&
                                -1 === l &&
                                ((e = n.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (n) => {
                            if ((-1 === l && n.target.select && n.target === e && (l = e.selectionStart), l > -1)) {
                                const r = Math.min(Math.max(n.x, t.left), t.right),
                                    o = Math.min(Math.max(n.y, t.top), t.bottom),
                                    u = document.createEvent('MouseEvent');
                                u.initMouseEvent('mousedown', !0, !0, null, 1, r, o, r, o, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(u);
                                const i = e.selectionEnd;
                                i > l ? e.setSelectionRange(l, i, 'forward') : e.setSelectionRange(i, l, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (l = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (n = e.target),
                                (r = e.target.value),
                                (o = n.selectionStart),
                                (u = -1 !== r.lastIndexOf(' ', o) ? r.lastIndexOf(' ', o) + 1 : 0),
                                (i = -1 !== r.indexOf(' ', o) ? r.indexOf(' ', o) : r.length),
                                n.setSelectionRange(u, i, 'forward'));
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
            860: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var r = n(67);
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
                        const u = r.O.view.addModelObserver(e, n, o);
                        return (
                            u > 0
                                ? ((this._callbacks[u] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(u) : (this._views[n] = [u])))
                                : console.error("Can't add callback for model:", e),
                            u
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
                const u = o;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(860),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(114);
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
            114: (e, t, n) => {
                'use strict';
                n.d(t, { Sw: () => u.Z, B0: () => s.B0, ry: () => a.ry });
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
                var u = n(860);
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
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                var s = n(251),
                    a = n(72),
                    c = n(572);
                const d = o.instance,
                    h = {
                        DataTracker: u.Z,
                        ViewModel: c.Z,
                        ViewEventType: s.B0,
                        NumberFormatType: s.B3,
                        RealFormatType: s.Gr,
                        TimeFormatType: s.lf,
                        DateFormatType: s.kH,
                        makeGlobalBoundingBox: a.Kv,
                        sendMoveEvent: a.wv,
                        sendCloseEvent: a.Sy,
                        sendClosePopOverEvent: a.SW,
                        sendShowContextMenuEvent: a.uk,
                        sendShowPopOverEvent: a.P3,
                        addEscapeListener: a.VM,
                        closeOnEsc: a.SU,
                        handleViewEvent: a.c9,
                        onBindingsReady: a.ry,
                        onLayoutReady: a.Eu,
                        isTooltipShown: a.KE,
                        isContextMenuShown: a.uM,
                        isPopOverShown: a.wU,
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
                        ClickOutsideManager: d,
                        SystemLocale: i,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = h;
            },
            251: (e, t, n) => {
                'use strict';
                let r;
                n.d(t, { B0: () => r, B3: () => o, Gr: () => u, kH: () => l, lf: () => i }),
                    (function (e) {
                        (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                            (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                            (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                            (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                            (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                            (e[(e.MOVE = 16)] = 'MOVE'),
                            (e[(e.CLOSE = 32)] = 'CLOSE'),
                            (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                    })(r || (r = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    i = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            72: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Eu: () => c,
                    KE: () => b,
                    Kv: () => s,
                    P3: () => E,
                    SU: () => g,
                    SW: () => v,
                    Sy: () => m,
                    VM: () => A,
                    c9: () => d,
                    ry: () => a,
                    uM: () => _,
                    uk: () => f,
                    wU: () => p,
                    wv: () => h,
                });
                var r = n(521),
                    o = n(67),
                    u = n(251);
                const i = ['args'];
                function l(e, t, n, r, o, u, i) {
                    try {
                        var l = e[u](i),
                            s = l.value;
                    } catch (e) {
                        return void n(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(r, o);
                }
                const s = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    a = (function () {
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
                                        var u = e.apply(t, n);
                                        function i(e) {
                                            l(u, r, o, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            l(u, r, o, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    c = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    d = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        u = Object.keys(e);
                                    for (r = 0; r < u.length; r++) (n = u[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, i);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    h = (e) => d(u.B0.MOVE, { isMouseEvent: !0, on: e }),
                    m = () => d(u.B0.CLOSE),
                    v = () => d(u.B0.POP_OVER, { on: !1 }),
                    f = (e, t, n = 0) => {
                        d(u.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                    },
                    E = (e, t, n, r, i = R.invalid('resId'), l) => {
                        const a = o.O.view.getViewGlobalPosition(),
                            c = n.getBoundingClientRect(),
                            h = c.x,
                            m = c.y,
                            v = c.width,
                            f = c.height,
                            E = {
                                x: o.O.view.pxToRem(h) + a.x,
                                y: o.O.view.pxToRem(m) + a.y,
                                width: o.O.view.pxToRem(v),
                                height: o.O.view.pxToRem(f),
                            };
                        d(u.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: r || R.invalid('resId'),
                            targetID: i,
                            direction: t,
                            bbox: s(E),
                            on: !0,
                            args: l,
                        });
                    },
                    b = () => viewEnv.isWindowShownByViewEvent(u.B0.TOOLTIP),
                    _ = () => viewEnv.isWindowShownByViewEvent(u.B0.CONTEXT_MENU),
                    p = () => viewEnv.isWindowShownByViewEvent(u.B0.POP_OVER),
                    F = (e, t) => {
                        e.keyCode === r.n.ESCAPE && t();
                    },
                    g = (e) => {
                        F(e, m);
                    },
                    A = (e) => {
                        const t = (t) => F(t, e);
                        return window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t);
                    };
            },
            440: (e, t, n) => {
                'use strict';
                var r = n(179),
                    o = n.n(r),
                    u = n(493),
                    i = n.n(u);
                n(368);
                const l = (e = 1) => {
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
                    },
                    s = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    a = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var c = n(114);
                const d = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    h = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    m = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const r = s(`${e}.${n}`, window);
                                return d(r) ? t(e, n, r) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    v = (e) => {
                        const t = ((e) => {
                                const t = l(),
                                    n = t.caller,
                                    r = t.resId,
                                    o = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: o, modelPath: h(o, e || ''), resId: r };
                            })(),
                            n = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const o = s(h(n, `${t}.${r}`), window);
                                    return d(o) ? (e.push(o.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    f = c.Sw.instance;
                let E;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(E || (E = {}));
                const b = (e = 'model', t = E.Deep) => {
                        const n = (0, r.useState)(0),
                            o = (n[0], n[1]),
                            u = (0, r.useMemo)(() => l(), []),
                            i = u.caller,
                            c = u.resId,
                            h = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            b = (0, r.useState)(() =>
                                ((e) => {
                                    const t = s(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return d(t) ? t.value : t;
                                })(m(h)),
                            ),
                            _ = b[0],
                            p = b[1],
                            F = (0, r.useRef)(-1);
                        return (
                            a(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? E.Deep : E.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== E.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === E.Deep
                                                ? (e === _ && o((e) => e + 1), p(e))
                                                : p(Object.assign([], e));
                                        },
                                        r = v(e);
                                    F.current = f.addCallback(r, n, c, t === E.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== E.None)
                                    return () => {
                                        f.removeCallback(F.current, c);
                                    };
                            }, [c, t]),
                            _
                        );
                    },
                    _ = (e) => {
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
                    };
                var p = n(483),
                    F = n.n(p);
                const g = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            r = t.height;
                        return 0 !== n && 0 !== r;
                    },
                    A = (e) => {
                        const t = (0, r.useState)(g(e ? e.current : null)),
                            n = t[0],
                            o = t[1];
                        return (
                            (0, r.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        g(e ? e.current : null) ? o(!0) : n();
                                    });
                                };
                                return (
                                    n(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => () => o(!1), [e]),
                            n
                        );
                    };
                var w = n(380),
                    C = n.n(w);
                const B = 'ScrollArea_base_47',
                    y = 'ScrollArea_base__scrollIndent_1d',
                    D = 'ScrollArea_base__verticalScrollbarMargin_50',
                    L = 'ScrollArea_base__multiple_44',
                    S = 'ScrollArea_base__hidden_ec',
                    T = o().forwardRef((e, t) => {
                        const n = e.offsetLeft,
                            u = void 0 === n ? 0 : n,
                            i = e.offsetTop,
                            l = void 0 === i ? 0 : i,
                            s = e.scrollSettings,
                            a = e.onUpdateActiveAxis,
                            c = e.onHorizontalScroll,
                            d = e.onVerticalScroll,
                            h = e.onOverScrollAtBeginning,
                            m = e.onOverScrollAtEnd,
                            v = e.wrapperIndent,
                            f = e.verticalScrollbarMargin,
                            E = e.isMultipleScroll,
                            b = e.scrollAreaContainer,
                            p = e.children,
                            g = e.classMix,
                            w = e.onScrollLeftHandled,
                            T = (0, r.useState)(!1),
                            k = T[0],
                            M = T[1],
                            P = (0, r.useState)(),
                            R = P[0],
                            O = P[1],
                            x = (0, r.useState)(),
                            Y = x[0],
                            W = x[1],
                            H = (0, r.useRef)(null),
                            N = (0, r.useCallback)(() => {
                                R &&
                                    a &&
                                    a({ x: R.scrollbarXActive, y: R.scrollbarYActive }, { x: R.reach.x, y: R.reach.y });
                            }, [a, R]),
                            X = (0, r.useCallback)(() => R, [R]),
                            I = (0, r.useCallback)(() => {
                                R && R.update();
                            }, [R]),
                            U = (0, r.useCallback)(
                                (e, t, n) => {
                                    R && (R.setScrollLeft(e, t, n), w && w(e, R.contentWidth - R.containerWidth));
                                },
                                [R, w],
                            ),
                            j = (0, r.useCallback)(
                                (e) => {
                                    R && (R.setScrollLeftImmediately(e), w && w(e, R.contentWidth - R.containerWidth));
                                },
                                [R, w],
                            ),
                            V = (0, r.useCallback)(
                                (e, t, n) => {
                                    R && R.setScrollTop(e, t, n);
                                },
                                [R],
                            ),
                            K = (0, r.useCallback)(
                                (e) => {
                                    R && R.setScrollTopImmediately(e);
                                },
                                [R],
                            ),
                            z = (0, r.useCallback)(() => {
                                if (Y && c && R) {
                                    const e = { scrollPosition: Y.scrollLeft < 0 ? 0 : Y.scrollLeft, reach: R.reach.x };
                                    c(e);
                                }
                            }, [c, Y, R]),
                            q = (0, r.useCallback)(() => {
                                if (Y && d && R) {
                                    const e = { scrollPosition: Y.scrollTop, reach: R.reach.y };
                                    d(e);
                                }
                            }, [d, Y, R]),
                            G = (0, r.useCallback)(() => {
                                h && h();
                            }, [h]),
                            $ = (0, r.useCallback)(() => {
                                m && m();
                            }, [m]),
                            Q = (0, r.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), W(e);
                                },
                                [t],
                            ),
                            Z = (0, r.useCallback)(() => {
                                R &&
                                    (R.update(),
                                    (H.current = _(() => {
                                        N();
                                    })));
                            }, [R, N]),
                            J = (0, r.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, r.useEffect)(() => {
                            if (R && Y)
                                return (
                                    document.addEventListener('mousemove', J),
                                    window.addEventListener('resize', Z),
                                    Y.addEventListener('ps-scroll-x', z),
                                    Y.addEventListener('ps-scroll-y', q),
                                    Y.addEventListener('over-scroll-beginning', G),
                                    Y.addEventListener('over-scroll-ending', $),
                                    M(!0),
                                    () => {
                                        window.removeEventListener('resize', Z),
                                            document.removeEventListener('mousemove', J),
                                            Y &&
                                                (Y.removeEventListener('ps-scroll-x', z),
                                                Y.removeEventListener('ps-scroll-y', q),
                                                Y.removeEventListener('over-scroll-beginning', G),
                                                Y.removeEventListener('over-scroll-ending', $));
                                    }
                                );
                        }, [J, z, G, $, Z, Y, R, q]);
                        const ee = (0, r.useRef)(Y || null);
                        ee.current = Y || null;
                        const te = A(ee);
                        (0, r.useEffect)(
                            () => (
                                !R && Y && te && O(new (C())(Y, Object.assign({}, s))),
                                () => {
                                    R && (R.destroy(), O(void 0));
                                }
                            ),
                            [Y, te, s, R],
                        ),
                            (0, r.useEffect)(
                                () => () => {
                                    null == H.current || H.current();
                                },
                                [],
                            ),
                            (0, r.useEffect)(
                                () =>
                                    _(() => {
                                        R && N();
                                    }),
                                [N, R],
                            ),
                            (0, r.useEffect)(() => {
                                u > 0 && j(u);
                            }, [u, j]),
                            (0, r.useEffect)(() => {
                                l > 0 && K(l);
                            }, [l, K]),
                            (0, r.useEffect)(() => {
                                b &&
                                    ((b.setScrollLeft = U),
                                    (b.setScrollTop = V),
                                    (b.setScrollLeftImmediately = j),
                                    (b.setScrollTopImmediately = K),
                                    (b.updateScrollArea = I),
                                    (b.getScrollbar = X));
                            }, [b, U, j, V, K, I, X]);
                        const ne = F()(B, { [y]: v, [S]: !k, [D]: f, [L]: E }, g);
                        return o().createElement('div', { className: ne, ref: Q }, p);
                    }),
                    k = [
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
                function M(e) {
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
                const P = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: c.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    O = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            u = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            a = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            h = e.ignoreMouseClick,
                            m = void 0 !== h && h,
                            v = e.decoratorId,
                            f = void 0 === v ? 0 : v,
                            E = e.isEnabled,
                            b = void 0 === E || E,
                            _ = e.targetId,
                            p = void 0 === _ ? 0 : _,
                            F = e.onShow,
                            g = e.onHide,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) (n = u[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, k);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, r.useMemo)(() => p || l().resId, [p]),
                            B = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (P(n, f, { isMouseEvent: !0, on: !0, arguments: M(o) }, C),
                                    F && F(),
                                    (w.current.isVisible = !0));
                            }, [n, f, o, C, F]),
                            y = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        P(n, f, { on: !1 }, C),
                                        w.current.isVisible && g && g(),
                                        (w.current.isVisible = !1);
                                }
                            }, [n, f, C, g]),
                            D = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', D, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', D, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === b && y();
                            }, [b, y]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return b
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(B, d ? 100 : 400)),
                                                      u && u(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              y(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && y(), null == a || a(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && y(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      A,
                                  ),
                              )
                            : t;
                        var L;
                    },
                    x = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                const W = R.views.common.tooltip_window.simple_tooltip_content,
                    H = (e) => {
                        let t = e.children,
                            n = e.body,
                            u = e.header,
                            i = e.note,
                            l = e.alert,
                            s = e.args,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    u = Object.keys(e);
                                for (r = 0; r < u.length; r++) (n = u[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, x);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, s, { body: n, header: u, note: i, alert: l });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [l, n, u, i, s]);
                        return o().createElement(
                            O,
                            Y(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? W.SimpleTooltipHtmlContent('resId') : W.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                a,
                            ),
                            t,
                        );
                        var d;
                    };
                function N(e) {
                    engine.call('PlaySound', e);
                }
                const X = {
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
                let I, U;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(I || (I = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(U || (U = {}));
                const j = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: u,
                    disabled: i,
                    mixClass: l,
                    soundHover: s,
                    soundClick: a,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: h,
                    onMouseUp: m,
                    onMouseLeave: v,
                    onClick: f,
                }) => {
                    const E = (0, r.useRef)(null),
                        b = (0, r.useState)(n),
                        _ = b[0],
                        p = b[1],
                        g = (0, r.useState)(!1),
                        A = g[0],
                        w = g[1],
                        C = (0, r.useState)(!1),
                        B = C[0],
                        y = C[1],
                        D = (0, r.useCallback)(() => {
                            i || (E.current && (E.current.focus(), p(!0)));
                        }, [i]),
                        L = (0, r.useCallback)(
                            (e) => {
                                _ && null !== E.current && !E.current.contains(e.target) && p(!1);
                            },
                            [_],
                        ),
                        S = (0, r.useCallback)(
                            (e) => {
                                i || (f && f(e));
                            },
                            [i, f],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                i || (null !== s && N(s), c && c(e), y(!0));
                            },
                            [i, s, c],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                i || (m && m(e), w(!1));
                            },
                            [i, m],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                i || (null !== a && N(a), h && h(e), n && D(), w(!0));
                            },
                            [i, a, h, D, n],
                        ),
                        O = (0, r.useCallback)(
                            (e) => {
                                i || (v && v(e), w(!1));
                            },
                            [i, v],
                        ),
                        x = F()(
                            X.base,
                            X[`base__${u}`],
                            {
                                [X.base__disabled]: i,
                                [X[`base__${t}`]]: t,
                                [X.base__focus]: _,
                                [X.base__highlightActive]: A,
                                [X.base__firstHover]: B,
                            },
                            l,
                        ),
                        Y = F()(X.state, X.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                        (0, r.useEffect)(() => {
                            p(n);
                        }, [n]),
                        o().createElement(
                            'div',
                            {
                                ref: E,
                                className: x,
                                onMouseEnter: T,
                                onMouseMove: k,
                                onMouseUp: M,
                                onMouseDown: P,
                                onMouseLeave: O,
                                onClick: S,
                            },
                            u !== I.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: X.back }),
                                    o().createElement('span', { className: X.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: Y },
                                o().createElement('span', { className: X.stateDisabled }),
                                o().createElement('span', { className: X.stateHighlightHover }),
                                o().createElement('span', { className: X.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: X.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                j.defaultProps = { type: I.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const V = (0, r.memo)(j),
                    K = (e) => `#${e}`,
                    z = 'MessageText_emoji_6b';
                function q(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return G(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(e, t);
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
                function G(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                var $;
                !(function (e) {
                    (e[(e.text = 0)] = 'text'), (e[(e.element = 1)] = 'element');
                })($ || ($ = {}));
                const Q = [
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
                    ],
                    Z = (e) => R.images.gui.maps.icons.emoji.$dyn(e),
                    J = (e, [t, n]) =>
                        e.split(new RegExp(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g')).reduce((e, t, r, u) => {
                            var i;
                            return (
                                e.push({ type: $.text, content: t }),
                                u.length !== r + 1 &&
                                    e.push({
                                        type: $.element,
                                        content: o().createElement('div', {
                                            style: ((i = Z(n)), { backgroundImage: `url('${i}')` }),
                                            className: z,
                                        }),
                                    }),
                                e
                            );
                        }, []),
                    ee = (e, t, n) => (n % 2 ? (e[e.length - 1] += t) : e.push(t), e),
                    te = (e, t) => {
                        const n = [];
                        return (
                            e.forEach((e) =>
                                e.type === $.element
                                    ? n.push(e.content)
                                    : n.push(
                                          ...((e, t) => {
                                              const n = { color: t };
                                              return e
                                                  .split(
                                                      /([\0-@\[-`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06F0-\u06F9\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07C9\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09EF\u09F2-\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B70\u0B72-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57-\u0D5E\u0D62-\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0EDB\u0EE0-\u0EFF\u0F01-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u1040-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16F0\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u194F\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19FF\u1A17-\u1A1F\u1A55-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BFF\u1C24-\u1C4C\u1C50-\u1C59\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u2182\u2185-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3007-\u3030\u3036-\u303A\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA620-\uA629\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6E6-\uA716\uA720\uA721\uA789\uA78A\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA802\uA806\uA80B\uA823-\uA83F\uA874-\uA881\uA8B4-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF-\uA909\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9D0-\uA9DF\uA9E5\uA9F0-\uA9F9\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF\u{1000C}\u{10027}\u{1003B}\u{1003E}\u{1004E}\u{1004F}\u{1005E}-\u{1007F}\u{100FB}-\u{1027F}\u{1029D}-\u{1029F}\u{102D1}-\u{102FF}\u{10320}-\u{1032C}\u{10341}\u{1034A}-\u{1034F}\u{10376}-\u{1037F}\u{1039E}\u{1039F}\u{103C4}-\u{103C7}\u{103D0}-\u{103FF}\u{1049E}-\u{104AF}\u{104D4}-\u{104D7}\u{104FC}-\u{104FF}\u{10528}-\u{1052F}\u{10564}-\u{1056F}\u{1057B}\u{1058B}\u{10593}\u{10596}\u{105A2}\u{105B2}\u{105BA}\u{105BD}-\u{105FF}\u{10737}-\u{1073F}\u{10756}-\u{1075F}\u{10768}-\u{1077F}\u{10786}\u{107B1}\u{107BB}-\u{107FF}\u{10806}\u{10807}\u{10809}\u{10836}\u{10839}-\u{1083B}\u{1083D}\u{1083E}\u{10856}-\u{1085F}\u{10877}-\u{1087F}\u{1089F}-\u{108DF}\u{108F3}\u{108F6}-\u{108FF}\u{10916}-\u{1091F}\u{1093A}-\u{1097F}\u{109B8}-\u{109BD}\u{109C0}-\u{109FF}\u{10A01}-\u{10A0F}\u{10A14}\u{10A18}\u{10A36}-\u{10A5F}\u{10A7D}-\u{10A7F}\u{10A9D}-\u{10ABF}\u{10AC8}\u{10AE5}-\u{10AFF}\u{10B36}-\u{10B3F}\u{10B56}-\u{10B5F}\u{10B73}-\u{10B7F}\u{10B92}-\u{10BFF}\u{10C49}-\u{10C7F}\u{10CB3}-\u{10CBF}\u{10CF3}-\u{10CFF}\u{10D24}-\u{10E7F}\u{10EAA}-\u{10EAF}\u{10EB2}-\u{10EFF}\u{10F1D}-\u{10F26}\u{10F28}-\u{10F2F}\u{10F46}-\u{10F6F}\u{10F82}-\u{10FAF}\u{10FC5}-\u{10FDF}\u{10FF7}-\u{11002}\u{11038}-\u{11070}\u{11073}\u{11074}\u{11076}-\u{11082}\u{110B0}-\u{110CF}\u{110E9}-\u{11102}\u{11127}-\u{11143}\u{11145}\u{11146}\u{11148}-\u{1114F}\u{11173}-\u{11175}\u{11177}-\u{11182}\u{111B3}-\u{111C0}\u{111C5}-\u{111D9}\u{111DB}\u{111DD}-\u{111FF}\u{11212}\u{1122C}-\u{1127F}\u{11287}\u{11289}\u{1128E}\u{1129E}\u{112A9}-\u{112AF}\u{112DF}-\u{11304}\u{1130D}\u{1130E}\u{11311}\u{11312}\u{11329}\u{11331}\u{11334}\u{1133A}-\u{1133C}\u{1133E}-\u{1134F}\u{11351}-\u{1135C}\u{11362}-\u{113FF}\u{11435}-\u{11446}\u{1144B}-\u{1145E}\u{11462}-\u{1147F}\u{114B0}-\u{114C3}\u{114C6}\u{114C8}-\u{1157F}\u{115AF}-\u{115D7}\u{115DC}-\u{115FF}\u{11630}-\u{11643}\u{11645}-\u{1167F}\u{116AB}-\u{116B7}\u{116B9}-\u{116FF}\u{1171B}-\u{1173F}\u{11747}-\u{117FF}\u{1182C}-\u{1189F}\u{118E0}-\u{118FE}\u{11907}\u{11908}\u{1190A}\u{1190B}\u{11914}\u{11917}\u{11930}-\u{1193E}\u{11940}\u{11942}-\u{1199F}\u{119A8}\u{119A9}\u{119D1}-\u{119E0}\u{119E2}\u{119E4}-\u{119FF}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A4F}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A9C}\u{11A9E}-\u{11AAF}\u{11AF9}-\u{11BFF}\u{11C09}\u{11C2F}-\u{11C3F}\u{11C41}-\u{11C71}\u{11C90}-\u{11CFF}\u{11D07}\u{11D0A}\u{11D31}-\u{11D45}\u{11D47}-\u{11D5F}\u{11D66}\u{11D69}\u{11D8A}-\u{11D97}\u{11D99}-\u{11EDF}\u{11EF3}-\u{11FAF}\u{11FB1}-\u{11FFF}\u{1239A}-\u{1247F}\u{12544}-\u{12F8F}\u{12FF1}-\u{12FFF}\u{1342F}-\u{143FF}\u{14647}-\u{167FF}\u{16A39}-\u{16A3F}\u{16A5F}-\u{16A6F}\u{16ABF}-\u{16ACF}\u{16AEE}-\u{16AFF}\u{16B30}-\u{16B3F}\u{16B44}-\u{16B62}\u{16B78}-\u{16B7C}\u{16B90}-\u{16E3F}\u{16E80}-\u{16EFF}\u{16F4B}-\u{16F4F}\u{16F51}-\u{16F92}\u{16FA0}-\u{16FDF}\u{16FE2}\u{16FE4}-\u{16FFF}\u{187F8}-\u{187FF}\u{18CD6}-\u{18CFF}\u{18D09}-\u{1AFEF}\u{1AFF4}\u{1AFFC}\u{1AFFF}\u{1B123}-\u{1B14F}\u{1B153}-\u{1B163}\u{1B168}-\u{1B16F}\u{1B2FC}-\u{1BBFF}\u{1BC6B}-\u{1BC6F}\u{1BC7D}-\u{1BC7F}\u{1BC89}-\u{1BC8F}\u{1BC9A}-\u{1D3FF}\u{1D455}\u{1D49D}\u{1D4A0}\u{1D4A1}\u{1D4A3}\u{1D4A4}\u{1D4A7}\u{1D4A8}\u{1D4AD}\u{1D4BA}\u{1D4BC}\u{1D4C4}\u{1D506}\u{1D50B}\u{1D50C}\u{1D515}\u{1D51D}\u{1D53A}\u{1D53F}\u{1D545}\u{1D547}-\u{1D549}\u{1D551}\u{1D6A6}\u{1D6A7}\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u{1D7CC}-\u{1DEFF}\u{1DF1F}-\u{1E0FF}\u{1E12D}-\u{1E136}\u{1E13E}-\u{1E14D}\u{1E14F}-\u{1E28F}\u{1E2AE}-\u{1E2BF}\u{1E2EC}-\u{1E7DF}\u{1E7E7}\u{1E7EC}\u{1E7EF}\u{1E7FF}\u{1E8C5}-\u{1E8FF}\u{1E944}-\u{1E94A}\u{1E94C}-\u{1EDFF}\u{1EE04}\u{1EE20}\u{1EE23}\u{1EE25}\u{1EE26}\u{1EE28}\u{1EE33}\u{1EE38}\u{1EE3A}\u{1EE3C}-\u{1EE41}\u{1EE43}-\u{1EE46}\u{1EE48}\u{1EE4A}\u{1EE4C}\u{1EE50}\u{1EE53}\u{1EE55}\u{1EE56}\u{1EE58}\u{1EE5A}\u{1EE5C}\u{1EE5E}\u{1EE60}\u{1EE63}\u{1EE65}\u{1EE66}\u{1EE6B}\u{1EE73}\u{1EE78}\u{1EE7D}\u{1EE7F}\u{1EE8A}\u{1EE9C}-\u{1EEA0}\u{1EEA4}\u{1EEAA}\u{1EEBC}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}])/gu,
                                                  )
                                                  .reduce(ee, [])
                                                  .map((e, t) => o().createElement('div', { style: n, key: t }, e));
                                          })(e.content, t),
                                      ),
                            ),
                            n
                        );
                    },
                    ne = ({ text: e, color: t }) => {
                        const n = (0, r.useMemo)(
                            () =>
                                ((e) => {
                                    let t = [{ type: $.text, content: e }];
                                    for (var n, r = q(Q); !(n = r()).done; ) {
                                        const e = n.value,
                                            r = [];
                                        for (var o, u = q(t); !(o = u()).done; ) {
                                            const t = o.value;
                                            t.type === $.text ? r.push(J(t.content, e)) : r.push(t);
                                        }
                                        t = r.flat();
                                    }
                                    return t;
                                })(e),
                            [e],
                        );
                        return (0, r.useMemo)(() => te(n, t), [t, n]).map((e, t) =>
                            o().createElement(r.Fragment, { key: t }, e),
                        );
                    },
                    re = ({ part: e }) => {
                        const t = (0, r.useMemo)(() => ({ color: K(e.color) }), [e]);
                        return o().createElement('div', { style: t }, e.text);
                    },
                    oe = 'Message_base_bf',
                    ue = ({ playerName: e, timeStamp: t, text: n }) => {
                        const u = (0, r.useMemo)(() => K(n.color), [n.color]);
                        return o().createElement(
                            'div',
                            { className: oe },
                            o().createElement(re, { part: e }),
                            ' ',
                            o().createElement(re, { part: t }),
                            o().createElement(ne, { text: n.text, color: u }),
                            '\n',
                        );
                    },
                    ie = 'Chat_base_61',
                    le = 'Chat_content_5c',
                    se = 'Chat_channelNotification_3b',
                    ae = 'Chat_scrollContainer_db',
                    ce = 'Chat_messages_fa',
                    de = 'Chat_footer_5c',
                    he = 'Chat_input_b4',
                    me = 'Chat_sendButtonContainer_32',
                    ve = 'Chat_enterButtonContainer_99',
                    fe = 'Chat_enterImage_97';
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const be = () => {
                    const e = b(),
                        t = e.onSend,
                        n = e.canClearInput,
                        u = e.onInputCleared,
                        i = b('model.headerExtraInfo'),
                        l = i.text,
                        s = i.color,
                        a = b('model.messages'),
                        c = (0, r.useRef)(null),
                        d = (0, r.useRef)(null),
                        h = (0, r.useRef)({}),
                        m = (0, r.useRef)(null),
                        v = (0, r.useState)(''),
                        f = v[0],
                        E = v[1],
                        p = (0, r.useCallback)(() => {
                            if (!c.current || !d.current) return;
                            const e = d.current.scrollHeight,
                                t = c.current.scrollHeight - e;
                            h.current.setScrollTop(t);
                        }, []);
                    (0, r.useEffect)(() => _(() => _(p)), [a.length, p]);
                    const F = (0, r.useCallback)(() => {
                        m.current && '' !== m.current.value && n && ((m.current.value = ''), u(), E(''));
                    }, [n, u]);
                    (0, r.useEffect)(() => F(), [n, F]);
                    const g = (0, r.useCallback)(() => {
                            t({ message: f }), F();
                        }, [F, f, t]),
                        A = (0, r.useCallback)(() => {
                            E(m.current ? m.current.value : '');
                        }, [m]),
                        w = (0, r.useCallback)(
                            (e) => {
                                'Enter' === e.key && g();
                            },
                            [g],
                        ),
                        C = a.length
                            ? o().createElement(
                                  'div',
                                  { className: ae, ref: d },
                                  o().createElement(
                                      T,
                                      { scrollAreaContainer: h.current, wrapperIndent: !0 },
                                      o().createElement(
                                          'div',
                                          { ref: c, className: ce },
                                          a.map((e) => o().createElement(ue, Ee({}, e.value, { key: e.value.key }))),
                                      ),
                                  ),
                              )
                            : o().createElement(
                                  o().Fragment,
                                  null,
                                  o().createElement(
                                      'span',
                                      { className: se },
                                      R.strings.platoon.members.chat.chatName(),
                                  ),
                                  o().createElement(
                                      'div',
                                      { className: se },
                                      o().createElement(ne, { text: l, color: K(s) }),
                                  ),
                              );
                    return o().createElement(
                        'div',
                        { className: ie },
                        o().createElement('div', { className: le }, C),
                        o().createElement(
                            'div',
                            { className: de },
                            o().createElement('input', {
                                onInput: A,
                                onKeyDown: w,
                                ref: m,
                                required: !0,
                                className: he,
                                minLength: 1,
                                maxLength: 255,
                                type: 'text',
                                id: 'name',
                                name: 'name',
                            }),
                            o().createElement(
                                H,
                                {
                                    isEnabled: !0,
                                    header: R.strings.platoon.members.chat.sendMessage.header(),
                                    body: R.strings.platoon.members.chat.sendMessage.body(),
                                },
                                o().createElement(
                                    'div',
                                    { className: me },
                                    o().createElement(
                                        V,
                                        { size: U.small, type: I.secondary, onClick: g, mixClass: ve },
                                        o().createElement('div', { className: fe }),
                                    ),
                                ),
                            ),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    i().render(o().createElement(be, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var o = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, n, r] = deferred[s], u = !0, i = 0; i < t.length; i++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((u = !1), r < o && (o = r));
                    if (u) {
                        deferred.splice(s--, 1);
                        var l = n();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, n, r];
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
            var e = { 738: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [u, i, l] = n,
                        s = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (l) var a = l(__webpack_require__);
                    }
                    for (t && t(n); s < u.length; s++)
                        (o = u[s]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(a);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(440));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
