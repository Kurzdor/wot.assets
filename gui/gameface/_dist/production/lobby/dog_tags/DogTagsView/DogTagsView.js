(() => {
    'use strict';
    var __webpack_modules__ = {
            380: (e) => {
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
                function a(e, t) {
                    if (!o) throw new Error('No element matching method supported');
                    return o.call(e, t);
                }
                function i(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function s(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return a(e, t);
                    });
                }
                var l = 'ps',
                    c = {
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
                    d = {
                        focus: 'ps--focus',
                        clicking: 'ps--clicking',
                        active: function (e) {
                            return 'ps--active-' + e;
                        },
                        scrolling: function (e) {
                            return 'ps--scrolling-' + e;
                        },
                    },
                    u = { x: null, y: null },
                    m = { immediately: !1 };
                function _(e, t, n) {
                    void 0 === n && (n = {});
                    var r = e.element.classList,
                        o = d.scrolling(t);
                    r.contains(o) ? clearTimeout(u[t]) : r.add(o);
                }
                function g(e, t, n) {
                    void 0 === n && (n = {});
                    Object.assign(m, n).immediately
                        ? e.isAlive && e.element.classList.remove(d.scrolling(t))
                        : (u[t] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(d.scrolling(t));
                          }, e.settings.scrollingThreshold));
                }
                var p = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    b = { isEmpty: { configurable: !0 } };
                (p.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (p.prototype.unbind = function (e, t) {
                        var n = this;
                        this.handlers[e] = this.handlers[e].filter(function (r) {
                            return !(!t || r === t) || (n.element.removeEventListener(e, r, !1), !1);
                        });
                    }),
                    (p.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (b.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(p.prototype, b);
                var v = function () {
                    this.eventElements = [];
                };
                function h(e) {
                    return parseInt(e, 10) || 0;
                }
                (v.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new p(e)), this.eventElements.push(t)), t;
                }),
                    (v.prototype.bind = function (e, t, n) {
                        this.eventElement(e).bind(t, n);
                    }),
                    (v.prototype.unbind = function (e, t, n) {
                        var r = this.eventElement(e);
                        r.unbind(t, n), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
                    }),
                    (v.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (v.prototype.once = function (e, t, n) {
                        var r = this.eventElement(e);
                        r.bind(t, function e(o) {
                            r.unbind(t, e), n(o);
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
                function E() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function y(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var w = function (e, t, n, r, o, a) {
                    var i;
                    if ((void 0 === r && (r = !0), void 0 === o && (o = !1), void 0 === a && (a = !1), 'top' === t))
                        i = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        i = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, n, r, o, a) {
                        var i = n[0],
                            s = n[1],
                            l = n[2],
                            c = n[3],
                            d = n[4],
                            u = n[5];
                        void 0 === r && (r = !0);
                        void 0 === o && (o = !1);
                        void 0 === a && (a = !1);
                        var m = e.element;
                        if (!e.reach) return;
                        (e.reach[c] = null), m[l] < 1 && (e.reach[c] = 'start');
                        m[l] > e[i] - e[s] - 1 && (e.reach[c] = 'end');
                        t &&
                            !o &&
                            (m.dispatchEvent(y('ps-scroll-' + c)),
                            t < 0
                                ? m.dispatchEvent(y('ps-scroll-' + d))
                                : t > 0 && m.dispatchEvent(y('ps-scroll-' + u)),
                            r &&
                                (function (e, t) {
                                    _(e, t), g(e, t);
                                })(e, c));
                        e.reach[c] && (t || a) && m.dispatchEvent(y('ps-' + c + '-reach-' + e.reach[c]));
                    })(e, n, i, r, o, a);
                };
                var k = function (e, t, r, o) {
                    void 0 === t && (t = !1), void 0 === r && (r = 0), void 0 === o && (o = !1);
                    var a = e.element;
                    if (a) {
                        if (
                            ((e.containerWidth = Math.round(a.getBoundingClientRect().width)),
                            (e.containerHeight = Math.round(a.getBoundingClientRect().height)),
                            (e.contentWidth = Math.round(a.scrollWidth) - 2 * r),
                            (e.contentHeight = Math.round(a.scrollHeight)),
                            !o)
                        ) {
                            e.contentWidth = Math.round(a.scrollWidth) - 2 * r;
                            var l = e.contentWidth - e.containerWidth + r;
                            a.scrollLeft < r ? (a.scrollLeft = r) : a.scrollLeft > l && (a.scrollLeft = l);
                        }
                        var u = Math.floor(a.scrollTop),
                            m = Math.floor(a.scrollLeft) - r,
                            _ = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        a.contains(e.scrollbarXRail) ||
                            (s(a, c.rail('x')).forEach(function (e) {
                                return i(e);
                            }),
                            a.appendChild(e.scrollbarXRail)),
                            a.contains(e.scrollbarYRail) ||
                                (s(a, c.rail('y')).forEach(function (e) {
                                    return i(e);
                                }),
                                a.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * _ - 15 * _),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = C(e, h((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                  (e.scrollbarXLeft = h(
                                      ((e.negativeScrollAdjustment + m) * (e.railXWidth - e.scrollbarXWidth)) /
                                          (e.contentWidth - e.containerWidth),
                                  )),
                                  e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                : (e.scrollbarXActive = !1),
                            !e.settings.suppressScrollY &&
                            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                ? ((e.scrollbarYActive = !0),
                                  (e.railYHeight = e.containerHeight - e.railYMarginHeight * _ - 15 * _),
                                  (e.railYRatio = e.containerHeight / e.railYHeight),
                                  (e.scrollbarYHeight = C(e, h((e.railYHeight * e.containerHeight) / e.contentHeight))),
                                  (e.scrollbarYTop = h(
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
                                    a = Math.floor(e.scrollTop);
                                t.isRtl
                                    ? (o.left =
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (o.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (o.bottom = t.scrollbarXBottom - a)
                                    : (o.top = t.scrollbarXTop + a);
                                n(t.scrollbarXRail, o);
                                var i = { top: a, height: t.railYHeight };
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
                            })(a, e, _),
                            e.scrollbarXButtonStart.classList.toggle('disabled', m < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', m + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', a.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                a.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (a.classList.add(d.active('x')), w(e, 'left', m - e.lastScrollLeft, !0, t))
                                : (a.classList.remove(d.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (a.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (a.classList.add(d.active('y')), w(e, 'top', a.scrollTop - e.lastScrollTop, !0, t))
                                : (a.classList.remove(d.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (a.scrollTop = 0)),
                            (e.lastScrollTop = u),
                            (e.lastScrollLeft = m),
                            (e.scrollTopPercent = a.scrollTop / a.scrollHeight),
                            (e.scrollLeftPercent = a.scrollLeft / a.scrollWidth);
                    }
                };
                function C(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
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
                    T = function (e) {
                        var t,
                            n = e.percentTimeElapsed,
                            r = e.x1,
                            o = e.y1,
                            a = e.x2,
                            i = e.y2;
                        return (
                            1 -
                            (r * ((t = n), Math.pow(t, 3)) +
                                o *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(n) +
                                a *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(n) +
                                i *
                                    (function (e) {
                                        return Math.pow(1 - e, 3);
                                    })(n))
                        );
                    },
                    S = { breakBounds: !1, startBound: 0, endBound: 0 },
                    R = function (e) {
                        var t = e.scrollableDomEle,
                            n = e.onAnimationCompleteCallback,
                            r = e.direction,
                            o = e.onRefUpdateCallback,
                            a = e.duration,
                            i = e.cubicBezierPoints,
                            s = e.easingPreset,
                            l = e.scrollAmount,
                            c = e.onCheckForBreakCallback,
                            d = e.boundsInfo;
                        void 0 === d && (d = S);
                        var u = null,
                            m = null,
                            _ = null,
                            g = null,
                            p = t === window,
                            b = ['left', 'right'].indexOf(r) > -1,
                            v = ['right', 'bottom'].indexOf(r) > -1;
                        b
                            ? ((m = p ? 'scrollX' : 'scrollLeft'),
                              (g = p ? 'innerWidth' : 'width'),
                              (_ = 'scrollWidth'))
                            : ((m = p ? 'scrollY' : 'scrollTop'),
                              (g = p ? 'innerHeight' : 'height'),
                              (_ = 'scrollHeight'));
                        var h = t[m],
                            f = (function (e) {
                                var t,
                                    n = e.isWindow,
                                    r = e.scrollableDomEle,
                                    o = e.elementLengthProp,
                                    a = e.initialScrollPosition,
                                    i = e.isHorizontalDirection,
                                    s = e.scrollLengthProp,
                                    l = e.direction;
                                if (n) {
                                    var c = document.documentElement;
                                    t = i ? c.offsetWidth : c.offsetHeight;
                                } else t = (r[s] - r.getBoundingClientRect()[o]) | 0;
                                return ['left', 'top'].includes(l) ? a : t - a;
                            })({
                                isWindow: p,
                                scrollableDomEle: t,
                                elementLengthProp: g,
                                initialScrollPosition: h,
                                isHorizontalDirection: b,
                                scrollLengthProp: _,
                                direction: r,
                            });
                        !isNaN(l) && l < f && (f = l);
                        var E = function e(r) {
                            if (!c || !c()) {
                                var l = r - u,
                                    _ = (function (e) {
                                        var t = e.easingPreset,
                                            n = e.cubicBezierPoints,
                                            r = e.duration,
                                            o = e.runTime / r;
                                        if (N.hasOwnProperty(t)) return N[t](o);
                                        if (
                                            n &&
                                            !isNaN(n.x1) &&
                                            !isNaN(n.y1) &&
                                            !isNaN(n.x2) &&
                                            !isNaN(n.y2) &&
                                            n.x1 >= 0 &&
                                            n.x2 >= 0
                                        )
                                            return T({ percentTimeElapsed: o, x1: n.x1, x2: n.x2, y1: n.y1, y2: n.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: s, cubicBezierPoints: i, runTime: l, duration: a });
                                if (!isNaN(_)) {
                                    var g = Math.round(_ * f),
                                        E = v ? g + h : f - g;
                                    if (
                                        (d.breakBounds &&
                                            (E < d.startBound
                                                ? (E = d.startBound)
                                                : E > d.endBound && (E = d.endBound)),
                                        l < a)
                                    ) {
                                        if (p) {
                                            var y = b ? E : 0,
                                                w = b ? 0 : E;
                                            window.scrollTo(y, w);
                                        } else t[m] = E;
                                        o && o(E), requestAnimationFrame(e);
                                    } else n && n();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (u = e), E(e);
                        });
                    },
                    L = function (e) {
                        var t = e.axis,
                            n = e.cursorPositionOnRail,
                            r = e.direction,
                            o = e.i,
                            a = (function (e) {
                                var t = e.axis,
                                    n = e.i,
                                    r = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var o = n.scrollbarY.offsetTop,
                                        a = o + n.scrollbarYHeight;
                                    return r >= o && r <= a;
                                }
                                var i = n.scrollbarX.offsetLeft,
                                    s = i + n.scrollbarXWidth;
                                return r >= i && r <= s;
                            })({ axis: t, i: o, cursorPositionOnRail: n });
                        return a
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
                                      a = (r - o.scrollbar / 2) / o.rail,
                                      i = Math.round(Math.min(o.maxScroll, Math.max(0, o.content * a)));
                                  'y' === t ? (n.element.scrollTop = i) : (n.element.scrollLeft = i);
                              })({ axis: t, i: o, cursorPositionOnRail: n }),
                              !0)
                            : ('y' === t
                                  ? (o.element.scrollTop += r * o.containerHeight)
                                  : (o.element.scrollLeft += r * o.containerWidth),
                              !1);
                    },
                    O = function (e, t, n) {
                        return function (r) {
                            t = t.toLowerCase();
                            var o = null,
                                a = function () {
                                    if (1 === r.buttons) {
                                        if (
                                            !r.target.closest('.ps__rail-' + t) ||
                                            !r.target.closest('.ps__track_' + t)
                                        ) {
                                            var a = (function (e) {
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
                                                i = a.cursorPosition - a.windowScrolled - a.elementPosition,
                                                s = (function (e) {
                                                    var t = e.axis,
                                                        n = e.cursorPositionOnRail,
                                                        r = e.i;
                                                    return n > ('y' === t ? r.scrollbarYTop : r.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: i, i: e });
                                            L({ axis: t, cursorPositionOnRail: i, direction: s, i: e }) &&
                                                clearTimeout(o),
                                                k(e, !1, n);
                                        }
                                        r.stopPropagation();
                                    }
                                };
                            a(),
                                (o = setInterval(a, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(o);
                                });
                        };
                    };
                function I(e, t, n) {
                    var r = n[0],
                        o = n[1],
                        a = n[2],
                        i = n[3],
                        s = n[4],
                        l = n[5],
                        c = n[6],
                        u = n[7],
                        m = n[8],
                        p = e.element,
                        b = null,
                        v = null,
                        f = null;
                    function E(n) {
                        (p[c] = h(b + f * (n[a] - v))), _(e, u), k(e, !1, t), n.stopPropagation(), n.preventDefault();
                    }
                    function y() {
                        g(e, u), e[m].classList.remove(d.clicking), e.event.unbind(e.ownerDocument, 'mousemove', E);
                    }
                    e.event.bind(e[s], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((b = p[c]),
                            (v = t[a]),
                            (f = (e[o] - e[r]) / (e[i] - e[l])),
                            e.event.bind(e.ownerDocument, 'mousemove', E),
                            e.event.once(e.ownerDocument, 'mouseup', y),
                            e[m].classList.add(d.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var M = 1e3,
                    D = {
                        'click-rail': function (e, t) {
                            e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', O(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', O(e, 'x', t));
                        },
                        'drag-thumb': function (e, t) {
                            I(e, t, [
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
                                I(e, t, [
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
                                    a(n, ':hover')
                                ) {
                                    var o,
                                        i = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (i) {
                                        if ('IFRAME' === i.tagName) i = i.contentDocument.activeElement;
                                        else for (; i.shadowRoot; ) i = i.shadowRoot.activeElement;
                                        if (
                                            a((o = i), 'input,[contenteditable]') ||
                                            a(o, 'select,[contenteditable]') ||
                                            a(o, 'textarea,[contenteditable]') ||
                                            a(o, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var s = 0,
                                        l = 0;
                                    switch (r.which) {
                                        case 37:
                                            s = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            l = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            s = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            l = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            l = r.shiftKey ? e.containerHeight : -e.containerHeight;
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
                                        ((n.scrollTop -= l),
                                        (n.scrollLeft += s),
                                        k(e, !1, t),
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
                                            var a = n.scrollLeft;
                                            if (0 === r) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === a && t < 0) ||
                                                    (a >= e.contentWidth - e.containerWidth && t > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(s, l) && r.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, n) {
                            var r = e.element;
                            function o(o) {
                                var a = (function (e) {
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
                                    i = a[0],
                                    s = a[1];
                                if (
                                    !(function (e, n, o) {
                                        if (!f.isWebKit && r.querySelector('select')) return !0;
                                        if (!r.contains(e)) return !1;
                                        for (var a = e; a && a !== r; ) {
                                            if (a.classList.contains(c.consuming)) return !0;
                                            var i = t(a);
                                            if (
                                                [i.overflow, i.overflowX, i.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var s = a.scrollHeight - a.clientHeight;
                                                if (
                                                    s > 0 &&
                                                    !((0 === a.scrollTop && o > 0) || (a.scrollTop === s && o < 0))
                                                )
                                                    return !0;
                                                var l = a.scrollWidth - a.clientWidth;
                                                if (
                                                    l > 0 &&
                                                    !((0 === a.scrollLeft && n < 0) || (a.scrollLeft === l && n > 0))
                                                )
                                                    return !0;
                                            }
                                            a = a.parentNode;
                                        }
                                        return !1;
                                    })(o.target, i, s)
                                ) {
                                    var l = !1,
                                        d = (i * e.settings.wheelSpeed) | 0,
                                        u = (s * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (s ? (r.scrollTop -= u) : (r.scrollTop += d), (l = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (i ? (r.scrollLeft += d) : (r.scrollLeft -= u), (l = !0))
                                        : ((r.scrollTop -= u), (r.scrollLeft += d)),
                                        k(e, !1, n),
                                        (l =
                                            l ||
                                            (function (t, n) {
                                                var o = Math.floor(r.scrollTop),
                                                    a = 0 === r.scrollTop,
                                                    i = o + r.offsetHeight === r.scrollHeight,
                                                    s = 0 === r.scrollLeft,
                                                    l = r.scrollLeft + r.offsetWidth === r.scrollWidth;
                                                return (
                                                    !(Math.abs(n) > Math.abs(t) ? a || i : s || l) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(i, s)),
                                        l && !o.ctrlKey && (o.stopPropagation(), o.preventDefault());
                                }
                            }
                            e.event.bind(r, 'wheel', o),
                                void 0 !== window.onmousewheel && e.event.bind(r, 'mousewheel', o);
                        },
                        touch: function (e, n) {
                            if (f.supportsTouch || f.supportsIePointer) {
                                var r = e.element,
                                    o = {},
                                    a = 0,
                                    i = {},
                                    s = null;
                                f.supportsTouch
                                    ? (e.event.bind(r, 'touchstart', m),
                                      e.event.bind(r, 'touchmove', _),
                                      e.event.bind(r, 'touchend', g))
                                    : f.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(r, 'pointerdown', m),
                                            e.event.bind(r, 'pointermove', _),
                                            e.event.bind(r, 'pointerup', g))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(r, 'MSPointerDown', m),
                                            e.event.bind(r, 'MSPointerMove', _),
                                            e.event.bind(r, 'MSPointerUp', g)));
                            }
                            function l(t, o) {
                                (r.scrollTop -= o), (r.scrollLeft -= t), k(e, !1, n);
                            }
                            function d(e) {
                                return e.targetTouches ? e.targetTouches[0] : e;
                            }
                            function u(e) {
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
                                if (u(e)) {
                                    var t = d(e);
                                    (o.pageX = t.pageX),
                                        (o.pageY = t.pageY),
                                        (a = new Date().getTime()),
                                        null !== s && clearInterval(s);
                                }
                            }
                            function _(n) {
                                if (u(n)) {
                                    var s = d(n),
                                        m = { pageX: s.pageX, pageY: s.pageY },
                                        _ = m.pageX - o.pageX,
                                        g = m.pageY - o.pageY;
                                    if (
                                        (function (e, n, o) {
                                            if (!r.contains(e)) return !1;
                                            for (var a = e; a && a !== r; ) {
                                                if (a.classList.contains(c.consuming)) return !0;
                                                var i = t(a);
                                                if (
                                                    [i.overflow, i.overflowX, i.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var s = a.scrollHeight - a.clientHeight;
                                                    if (
                                                        s > 0 &&
                                                        !((0 === a.scrollTop && o > 0) || (a.scrollTop === s && o < 0))
                                                    )
                                                        return !0;
                                                    var l = a.scrollLeft - a.clientWidth;
                                                    if (
                                                        l > 0 &&
                                                        !(
                                                            (0 === a.scrollLeft && n < 0) ||
                                                            (a.scrollLeft === l && n > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                a = a.parentNode;
                                            }
                                            return !1;
                                        })(n.target, _, g)
                                    )
                                        return;
                                    l(_, g), (o = m);
                                    var p = new Date().getTime(),
                                        b = p - a;
                                    b > 0 && ((i.x = _ / b), (i.y = g / b), (a = p)),
                                        (function (t, n) {
                                            var o = Math.floor(r.scrollTop),
                                                a = r.scrollLeft,
                                                i = Math.abs(t),
                                                s = Math.abs(n);
                                            if (s > i) {
                                                if (
                                                    (n < 0 && o === e.contentHeight - e.containerHeight) ||
                                                    (n > 0 && 0 === o)
                                                )
                                                    return 0 === window.scrollY && n > 0 && f.isChrome;
                                            } else if (
                                                i > s &&
                                                ((t < 0 && a === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === a))
                                            )
                                                return !0;
                                            return !0;
                                        })(_, g) && n.preventDefault();
                                }
                            }
                            function g() {
                                e.settings.swipeEasing &&
                                    (clearInterval(s),
                                    (s = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(s)
                                            : i.x || i.y
                                              ? Math.abs(i.x) < 0.01 && Math.abs(i.y) < 0.01
                                                  ? clearInterval(s)
                                                  : (l(30 * i.x, 30 * i.y), (i.x *= 0.8), (i.y *= 0.8))
                                              : clearInterval(s);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var n = e.element,
                                r = null,
                                o = !1,
                                a = 0,
                                i = 0,
                                s = 0;
                            function l() {
                                e.onScroll();
                            }
                            function c(r, o, a, i) {
                                void 0 === a && (a = null),
                                    void 0 === i && (i = !1),
                                    R({
                                        scrollableDomEle: n,
                                        direction: 'right',
                                        onRefUpdateCallback: l,
                                        duration: o,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: r,
                                        onCheckForBreakCallback: a,
                                        boundsInfo: {
                                            breakBounds: i,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    });
                            }
                            function u() {
                                if (o) return o;
                            }
                            function m() {
                                s = 0;
                            }
                            function p(o) {
                                if (e.scrollbarXActive) {
                                    var l = r - o.screenX;
                                    (n.scrollLeft += l), (r = o.screenX);
                                    var c = new Date().getTime();
                                    if (((a = (l / (c - i)) * 1e3), (i = c), e.onScroll(), t > 0)) {
                                        var d = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === n.scrollLeft || n.scrollLeft === d
                                            ? 0 === s && (s = window.setTimeout(m, 250))
                                            : 0 !== s && (window.clearTimeout(s), (s = 0));
                                    }
                                    _(e, 'x'),
                                        _(e, 'dragging', { immediately: !0 }),
                                        o.stopPropagation(),
                                        o.preventDefault();
                                }
                            }
                            function b(e) {
                                (r = e.screenX),
                                    (o = !0),
                                    requestAnimationFrame(function () {
                                        o = !1;
                                    }),
                                    (i = new Date().getTime());
                            }
                            function v(r) {
                                var o = e.contentWidth - e.containerWidth + t;
                                if (n.scrollLeft < t) c(t - n.scrollLeft, M, u);
                                else if (n.scrollLeft > o) c(o - n.scrollLeft, M, u);
                                else {
                                    new Date().getTime() - i < 100 && c(a / 4, M, u, !0);
                                }
                                g(e, 'x'),
                                    g(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(d.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', p);
                            }
                            function h() {
                                o = !0;
                            }
                            n.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((r = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', p),
                                        e.event.once(e.ownerDocument, 'mouseup', v),
                                        e.event.once(e.ownerDocument, 'mousedown', b),
                                        e.event.once(n, 'wheel', h),
                                        e.scrollbarXRail.classList.add(d.clicking),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    A = function (e, o) {
                        var a = this;
                        if (
                            (void 0 === o && (o = {}),
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
                        o))
                            a.settings[i] = o[i];
                        (this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null);
                        var s,
                            u,
                            m = function () {
                                return e.classList.add(d.focus);
                            },
                            _ = function () {
                                return e.classList.remove(d.focus);
                            };
                        (this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((u = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (s = e.scrollLeft < 0),
                                (e.scrollLeft = u),
                                s)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new v()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = r(c.rail('x'))),
                            (this.scrollbarXButtonStart = r(c.buttonStart('x'))),
                            (this.scrollbarXButtonEnd = r(c.buttonEnd('x'))),
                            (this.scrollbarXTrack = r(c.track('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = r(c.thumb('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', m),
                            this.event.bind(this.scrollbarX, 'blur', _),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = r(c.rail('y'))),
                            (this.scrollbarYButtonStart = r(c.buttonStart('y'))),
                            (this.scrollbarYButtonEnd = r(c.buttonEnd('y'))),
                            (this.scrollbarYTrack = r(c.track('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = r(c.thumb('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', m),
                            this.event.bind(this.scrollbarY, 'blur', _),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            E().then(function () {
                                var r = t(a.scrollbarXRail);
                                (a.scrollbarXBottom = parseInt(r.bottom, 10)),
                                    isNaN(a.scrollbarXBottom)
                                        ? ((a.isScrollbarXUsingBottom = !1), (a.scrollbarXTop = h(r.top)))
                                        : (a.isScrollbarXUsingBottom = !0),
                                    (a.railBorderXWidth = h(r.borderLeftWidth) + h(r.borderRightWidth)),
                                    n(a.scrollbarXRail, { display: 'block' }),
                                    (a.railXMarginWidth = h(r.marginLeft) + h(r.marginRight)),
                                    n(a.scrollbarXRail, { display: '' }),
                                    (a.railXWidth = null),
                                    (a.railXRatio = null);
                                var o = t(a.scrollbarYRail);
                                (a.scrollbarYRight = parseInt(o.right, 10)),
                                    isNaN(a.scrollbarYRight)
                                        ? ((a.isScrollbarYUsingRight = !1), (a.scrollbarYLeft = h(o.left)))
                                        : (a.isScrollbarYUsingRight = !0),
                                    (a.scrollbarYOuterWidth = a.isRtl
                                        ? (function (e) {
                                              var n = t(e);
                                              return (
                                                  h(n.width) +
                                                  h(n.paddingLeft) +
                                                  h(n.paddingRight) +
                                                  h(n.borderLeftWidth) +
                                                  h(n.borderRightWidth)
                                              );
                                          })(a.scrollbarY)
                                        : null),
                                    (a.railBorderYWidth = h(o.borderTopWidth) + h(o.borderBottomWidth)),
                                    n(a.scrollbarYRail, { display: 'block' }),
                                    (a.railYMarginHeight = h(o.marginTop) + h(o.marginBottom)),
                                    n(a.scrollbarXRail, { display: '' }),
                                    n(a.scrollbarYRail, { display: '' }),
                                    (a.railYHeight = null),
                                    (a.railYRatio = null),
                                    (a.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= a.contentWidth - a.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= a.contentHeight - a.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (a.isAlive = !0),
                                    a.settings.handlers.forEach(function (e) {
                                        return D[e](a, a.settings.overScrollWidth);
                                    }),
                                    (a.boundHandleButtonEnter = a.handleMouseEnter.bind(a)),
                                    (a.boundHandleMouseLeave = a.handleMouseLeave.bind(a)),
                                    (a.boundHandleMouseEnter = a.handleMouseEnter.bind(a)),
                                    (a.boundPlayClickSound = a.playClickSound.bind(a)),
                                    a.scrollbarYButtonStart.addEventListener('mousedown', a.boundPlayClickSound),
                                    a.scrollbarYButtonEnd.addEventListener('mousedown', a.boundPlayClickSound),
                                    a.scrollbarXButtonStart.addEventListener('mousedown', a.boundPlayClickSound),
                                    a.scrollbarXButtonEnd.addEventListener('mousedown', a.boundPlayClickSound),
                                    a.scrollbarXButtonStart.addEventListener('mouseenter', a.boundHandleMouseEnter),
                                    a.scrollbarXButtonEnd.addEventListener('mouseenter', a.boundHandleMouseEnter),
                                    a.scrollbarYButtonStart.addEventListener('mouseenter', a.boundHandleButtonEnter),
                                    a.scrollbarYButtonEnd.addEventListener('mouseenter', a.boundHandleButtonEnter),
                                    a.scrollbarYButtonStart.addEventListener('mouseleave', a.boundHandleMouseLeave),
                                    a.scrollbarYButtonEnd.addEventListener('mouseleave', a.boundHandleMouseLeave),
                                    a.scrollbarY.addEventListener('mouseenter', a.boundHandleMouseEnter),
                                    a.scrollbarX.addEventListener('mouseenter', a.boundHandleMouseEnter),
                                    a.scrollbarY.addEventListener('mouseleave', a.boundHandleMouseLeave),
                                    a.scrollbarY.addEventListener('mousedown', a.boundPlayClickSound),
                                    a.scrollbarX.addEventListener('mousedown', a.boundPlayClickSound),
                                    (a.lastScrollTop = Math.floor(e.scrollTop)),
                                    (a.lastScrollLeft = e.scrollLeft),
                                    (a.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (a.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    a.event.bind(a.element, 'scroll', function (e) {
                                        return a.onScroll(e);
                                    }),
                                    a.settings.enableHorizontalScroll &&
                                        a.event.bind(a.element, 'wheel', function (e) {
                                            return a.onWheel(e);
                                        }),
                                    k(a, !1, a.settings.overScrollWidth, !1);
                            });
                    };
                (A.prototype._getAnimationSettings = function (e, t, n, r) {
                    var o = this,
                        a = 0;
                    return (
                        null !== this.element &&
                            (a = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - a,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                k(o, !0, o.settings.overScrollWidth, !1), n && n(e);
                            },
                            onAnimationCompleteCallback: function () {
                                r && r();
                            },
                        }
                    );
                }),
                    (A.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (A.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (A.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (A.prototype.handleMouseLeave = function () {}),
                    (A.prototype.update = function () {
                        var e = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            n(this.scrollbarXRail, { display: 'block' }),
                            n(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                h(t(this.scrollbarXRail).marginLeft) + h(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                h(t(this.scrollbarYRail).marginTop) + h(t(this.scrollbarYRail).marginBottom)),
                            n(this.scrollbarXRail, { display: 'none' }),
                            n(this.scrollbarYRail, { display: 'none' }),
                            E().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    k(e, !1, e.settings.overScrollWidth, !1),
                                    w(e, 'top', 0, !1, !1, !0),
                                    w(e, 'left', 0, !1, !1, !0),
                                    n(e.scrollbarXRail, { display: '' }),
                                    n(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (A.prototype.setScrollLeft = function (e, t, n) {
                        R(this._getAnimationSettings(e, 'right', t, n));
                    }),
                    (A.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (A.prototype.setScrollTop = function (e, t, n) {
                        R(this._getAnimationSettings(e, 'bottom', t, n));
                    }),
                    (A.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (A.prototype.onScroll = function (e) {
                        this.isAlive && k(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (A.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (k(this, !1, this.settings.overScrollWidth, !1),
                            w(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (A.prototype.destroy = function () {
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
                    (A.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = A);
            },
            67: (e, t, n) => {
                n.d(t, { O: () => G });
                var r = {};
                n.r(r), n.d(r, { mouse: () => u, onResize: () => c });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => m,
                        graphicsQuality: () => g,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => b, getTextureUrl: () => p });
                var i = {};
                function s(e) {
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
                n.r(i),
                    n.d(i, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => T,
                        children: () => a,
                        displayStatus: () => v,
                        displayStatusIs: () => j,
                        events: () => h,
                        extraSize: () => z,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => R,
                        getDisplayStatus: () => $,
                        getScale: () => P,
                        getSize: () => I,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => Y,
                        isFocused: () => H,
                        pxToRem: () => x,
                        remToPx: () => B,
                        resize: () => M,
                        sendEvent: () => N,
                        setAnimateWindow: () => W,
                        setEventHandled: () => F,
                        setInputPaddingsRem: () => S,
                        setSidePaddingsRem: () => O,
                        whenTutorialReady: () => U,
                    });
                const c = s('clientResized'),
                    d = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const a = `mouse${t}`,
                                        i = d[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            o &&
                                                (i(),
                                                window.removeEventListener(a, s),
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
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function p(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function b(e, t, n) {
                    return `url(${p(e, t, n)})`;
                }
                const v = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    h = {
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
                    f = ['args'];
                const E = 2,
                    y = 16,
                    w = 32,
                    k = 64,
                    C = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, f);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    N = {
                        close(e) {
                            C('popover' === e ? E : w);
                        },
                        minimize() {
                            C(k);
                        },
                        move(e) {
                            C(y, { isMouseEvent: !0, on: e });
                        },
                    };
                function T(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function S(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function R(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function L(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function I(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function D(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: B(t.x), y: B(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function P() {
                    return viewEnv.getScale();
                }
                function x(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function W(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function F() {
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
                const j = Object.keys(v).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === v[t]), e), {}),
                    z = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    U = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : h.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    G = { view: i, client: o };
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
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
                        const a = r.O.view.addModelObserver(e, n, o);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(a) : (this._views[n] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                const a = o;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
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
            596: (e, t, n) => {
                n.d(t, { Sw: () => a.Z, Gr: () => u, Z5: () => s, B0: () => c, lw: () => i, ry: () => E });
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
                var a = n(358);
                function i(e) {
                    const t = {};
                    if ('object' != typeof e) return e;
                    for (const n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            const r = Object.prototype.toString.call(e[n]);
                            if (r.startsWith('[object CoherentArrayProxy]')) {
                                const r = e[n];
                                t[n] = [];
                                for (let e = 0; e < r.length; e++) t[n].push({ value: i(r[e].value) });
                            } else r.startsWith('[object class BW::WULF::ViewModel') ? (t[n] = i(e[n])) : (t[n] = e[n]);
                        }
                    return t;
                }
                const s = {
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
                let c;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(c || (c = {}));
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let g, p;
                !(function (e) {
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
                })(g || (g = {})),
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
                    })(p || (p = {}));
                var b = n(67);
                const v = ['args'];
                function h(e, t, n, r, o, a, i) {
                    try {
                        var s = e[a](i),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, o);
                }
                const f = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
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
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            h(a, r, o, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(a, r, o, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    y = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, v);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    w = () => y(c.CLOSE),
                    k = (e, t) => {
                        e.keyCode === g.ESCAPE && t();
                    };
                var C = n(572);
                const N = o.instance,
                    T = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: c,
                        NumberFormatType: d,
                        RealFormatType: u,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: f,
                        sendMoveEvent: (e) => y(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => y(c.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            y(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), a) => {
                            const i = b.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                l = s.x,
                                d = s.y,
                                u = s.width,
                                m = s.height,
                                _ = {
                                    x: b.O.view.pxToRem(l) + i.x,
                                    y: b.O.view.pxToRem(d) + i.y,
                                    width: b.O.view.pxToRem(u),
                                    height: b.O.view.pxToRem(m),
                                };
                            y(c.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: f(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => k(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            k(e, w);
                        },
                        handleViewEvent: y,
                        onBindingsReady: E,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                        dumpViewModel: i,
                        ClickOutsideManager: N,
                        SystemLocale: s,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = T;
            },
            256: (e, t, n) => {
                var r = n(483),
                    o = n.n(r);
                function a(e) {
                    engine.call('PlaySound', e);
                }
                var i = n(179),
                    s = n.n(i);
                const l = {
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
                let c, d;
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
                    })(d || (d = {}));
                const u = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: r,
                    disabled: d,
                    mixClass: u,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: g,
                    onMouseMove: p,
                    onMouseDown: b,
                    onMouseUp: v,
                    onMouseLeave: h,
                    onClick: f,
                }) => {
                    const E = (0, i.useRef)(null),
                        y = (0, i.useState)(n),
                        w = y[0],
                        k = y[1],
                        C = (0, i.useState)(!1),
                        N = C[0],
                        T = C[1],
                        S = (0, i.useState)(!1),
                        L = S[0],
                        O = S[1],
                        I = (0, i.useCallback)(() => {
                            d || (E.current && (E.current.focus(), k(!0)));
                        }, [d]),
                        M = (0, i.useCallback)(
                            (e) => {
                                w && null !== E.current && !E.current.contains(e.target) && k(!1);
                            },
                            [w],
                        ),
                        D = (0, i.useCallback)(
                            (e) => {
                                d || (f && f(e));
                            },
                            [d, f],
                        ),
                        A = (0, i.useCallback)(
                            (e) => {
                                d || (null !== m && a(m), g && g(e), O(!0));
                            },
                            [d, m, g],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                p && p(e);
                            },
                            [p],
                        ),
                        x = (0, i.useCallback)(
                            (e) => {
                                d || (v && v(e), T(!1));
                            },
                            [d, v],
                        ),
                        B = (0, i.useCallback)(
                            (e) => {
                                d || (null !== _ && a(_), b && b(e), n && I(), T(!0));
                            },
                            [d, _, b, I, n],
                        ),
                        W = (0, i.useCallback)(
                            (e) => {
                                d || (h && h(e), T(!1));
                            },
                            [d, h],
                        ),
                        H = o()(
                            l.base,
                            l[`base__${r}`],
                            {
                                [l.base__disabled]: d,
                                [l[`base__${t}`]]: t,
                                [l.base__focus]: w,
                                [l.base__highlightActive]: N,
                                [l.base__firstHover]: L,
                            },
                            u,
                        ),
                        F = o()(l.state, l.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, i.useEffect)(() => {
                            k(n);
                        }, [n]),
                        s().createElement(
                            'div',
                            {
                                ref: E,
                                className: H,
                                onMouseEnter: A,
                                onMouseMove: P,
                                onMouseUp: x,
                                onMouseDown: B,
                                onMouseLeave: W,
                                onClick: D,
                            },
                            r !== c.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: l.back }),
                                    s().createElement('span', { className: l.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: F },
                                s().createElement('span', { className: l.stateDisabled }),
                                s().createElement('span', { className: l.stateHighlightHover }),
                                s().createElement('span', { className: l.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: l.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                u.defaultProps = { type: c.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const m = (0, i.memo)(u),
                    _ = {
                        base: 'ErrorBoundary_base_46',
                        message: 'ErrorBoundary_message_33',
                        heading: 'ErrorBoundary_heading_ba',
                        button: 'ErrorBoundary_button_74',
                        errorStack: 'ErrorBoundary_errorStack_fe',
                        errorInfo: 'ErrorBoundary_errorInfo_f1',
                    };
                class g extends s().Component {
                    constructor(e) {
                        super(e),
                            (this.clearError = () => {
                                this.setState({ error: void 0 });
                            }),
                            (this.state = { error: void 0 });
                    }
                    static getDerivedStateFromError(e) {
                        return { error: e };
                    }
                    render() {
                        const e = this.state.error,
                            t = this.props,
                            n = t.errorMessage,
                            r = void 0 === n ? R.strings.dogtags.error.message() : n,
                            o = t.retryLabel,
                            a = void 0 === o ? R.strings.dogtags.error.retry() : o;
                        return e
                            ? s().createElement(
                                  'div',
                                  { className: _.base },
                                  s().createElement(
                                      'div',
                                      { className: _.message },
                                      s().createElement('div', { className: _.heading }, r),
                                      s().createElement(m, { mixClass: _.retry, onClick: this.clearError }, a),
                                  ),
                              )
                            : this.props.children;
                    }
                }
                var p = n(493),
                    b = n.n(p);
                const v = {
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
                    h = [
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
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                class E extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && a(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && a(this.props.soundClick);
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
                            n = e.onClick,
                            r = e.goto,
                            a = e.side,
                            i = e.type,
                            l = e.classNames,
                            c = e.onMouseEnter,
                            d = e.onMouseLeave,
                            u = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(e, h)),
                            g = o()(v.base, v[`base__${i}`], v[`base__${a}`], null == l ? void 0 : l.base),
                            p = o()(v.icon, v[`icon__${i}`], v[`icon__${a}`], null == l ? void 0 : l.icon),
                            b = o()(v.glow, null == l ? void 0 : l.glow),
                            E = o()(v.caption, v[`caption__${i}`], null == l ? void 0 : l.caption),
                            y = o()(v.goto, null == l ? void 0 : l.goto);
                        return s().createElement(
                            'div',
                            f(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(c),
                                    onMouseLeave: this._onMouseLeave(d),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== i && s().createElement('div', { className: v.shine }),
                            s().createElement('div', { className: p }, s().createElement('div', { className: b })),
                            s().createElement('div', { className: E }, t),
                            r && s().createElement('div', { className: y }, r),
                        );
                    }
                }
                E.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const y = (e, t) => {
                        let n;
                        const r = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            'function' == typeof n && n(), clearTimeout(r);
                        };
                    },
                    w = (e = 1) => {
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
                    k = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    C = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var N = n(596);
                const T = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    S = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    L = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const r = k(`${e}.${n}`, window);
                                return T(r) ? t(e, n, r) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    O = (e) => {
                        const t = ((e) => {
                                const t = w(),
                                    n = t.caller,
                                    r = t.resId,
                                    o = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: o, modelPath: S(o, e || ''), resId: r };
                            })(),
                            n = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const o = k(S(n, `${t}.${r}`), window);
                                    return T(o) ? (e.push(o.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    I = N.Sw.instance;
                let M;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(M || (M = {}));
                const D = (e = 'model', t = M.Deep) => {
                    const n = (0, i.useState)(0),
                        r = (n[0], n[1]),
                        o = (0, i.useMemo)(() => w(), []),
                        a = o.caller,
                        s = o.resId,
                        l = (0, i.useMemo)(
                            () => (window.__feature && window.__feature !== a ? `subViews.${a}.${e}` : e),
                            [a, e],
                        ),
                        c = (0, i.useState)(() =>
                            ((e) => {
                                const t = k(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return T(t) ? t.value : t;
                            })(L(l)),
                        ),
                        d = c[0],
                        u = c[1],
                        m = (0, i.useRef)(-1);
                    return (
                        C(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? M.Deep : M.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== M.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === M.Deep
                                            ? (e === d && r((e) => e + 1), u(e))
                                            : u(Object.assign([], e));
                                    },
                                    o = O(e);
                                m.current = I.addCallback(o, n, s, t === M.Deep);
                            }
                        }),
                        (0, i.useEffect)(() => {
                            if (t !== M.None)
                                return () => {
                                    I.removeCallback(m.current, s);
                                };
                        }, [s, t]),
                        d
                    );
                };
                let A, P, x, B, W;
                !(function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(A || (A = {})),
                    (function (e) {
                        (e[(e.Equipped = 0)] = 'Equipped'), (e[(e.Locked = 1)] = 'Locked'), (e[(e.Open = 2)] = 'Open');
                    })(P || (P = {})),
                    (function (e) {
                        (e.Engraving = 'engraving'), (e.Background = 'background');
                    })(x || (x = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'),
                            (e.Skill = 'skill'),
                            (e.RankedSkill = 'ranked_skill'),
                            (e.Triumph = 'triumph'),
                            (e.Medal = 'triumph_medal'),
                            (e.Base = 'base');
                    })(B || (B = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'), (e.Triumph = 'triumph'), (e.Season = 'season');
                    })(W || (W = {}));
                const H = {
                        [W.Dedication]: [B.Dedication],
                        [W.Triumph]: [B.Triumph],
                        [W.Season]: [B.Skill, B.RankedSkill],
                    },
                    F = 10;
                let Y;
                function X(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return $(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(e, t);
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
                function $(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                !(function (e) {
                    (e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE');
                })(Y || (Y = {}));
                const j = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    z = (e, t) => {
                        const n = e.id;
                        return n === t.background.id || n === t.engraving.id;
                    },
                    U = R.images.gui.maps.icons.dogtags,
                    G = 'R.images.gui.maps.icons.dogtags',
                    V = R.strings.dogtags.component,
                    K = 'R.strings.dogtags.component',
                    q = (e, t, n, r = 0, o = 'big', a = U, i = V) => {
                        a &&
                            !(o in a) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${o}" does not exist in ${G}`,
                            );
                        const s = o in a ? a[o] : void 0,
                            l = `${t}s`;
                        s &&
                            !(l in s) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${l}" does not exist in ${[G, o].join('.')}`,
                            );
                        const c = s && l in s ? s[l] : void 0,
                            d = `${t}_${e}_${t === x.Engraving ? r : '0'}`;
                        c &&
                            !(d in c) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${d}" does not exist in ${[G, o, l].join('.')}`,
                            );
                        const u = c && d in c ? c[d]() : a.big.backgrounds.background_66_0();
                        i &&
                            !(t in i) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${t}" does not exist in ${K}`,
                            );
                        const m = t in i ? i[t] : void 0;
                        m &&
                            !(n in m) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${n}" does not exist in ${[K, t].join('.')}`,
                            );
                        const _ = m && n in m ? m[n] : void 0,
                            g = `c_${e}`;
                        _ &&
                            !(g in _) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${g}" does not exist in ${[K, t, n].join('.')}`,
                            );
                        return { image: u, strings: _ && g in _ ? _[g] : void 0 };
                    },
                    Q = (e) => e.filter((e) => e.value.items.length > 0),
                    Z = (e) => Object.keys(e).filter((t) => e[t]),
                    J = { [A.Engraving]: 'engravingGrid', [A.Background]: 'backgroundGrid' },
                    ee = { [A.Engraving]: 'engraving', [A.Background]: 'background' },
                    te = (e, t) => {
                        for (var n, r = X(e.values()); !(n = r()).done; ) {
                            for (var o, a = X(n.value.value.items.values()); !(o = a()).done; ) {
                                const e = o.value;
                                if (e.value.id === t) return e.value;
                            }
                        }
                    },
                    ne = (e) => e.reduce((e, t) => e + t.value.items.length, 0),
                    re = (e, t = Y.NUMBER) => {
                        const n = N.Z5.getRealFormat(e, N.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                        return t === Y.PERCENTAGE ? `${n} %` : n;
                    },
                    oe = {
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
                    ae = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                const se = (e) => {
                    let t = e.size,
                        n = e.value,
                        r = e.isEmpty,
                        a = e.fadeInAnimation,
                        i = e.hide,
                        l = e.maximumNumber,
                        c = e.className,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, ae);
                    const u = r ? null : n,
                        m = 'string' == typeof u;
                    if ((u && !m && u < 0) || 0 === u) return null;
                    const _ = u && !m && u > l,
                        g = o()(
                            oe.base,
                            oe[`base__${t}`],
                            a && oe.base__animated,
                            i && oe.base__hidden,
                            !u && oe.base__pattern,
                            r && oe.base__empty,
                            c,
                        );
                    return s().createElement(
                        'div',
                        ie({ className: g }, d),
                        s().createElement('div', { className: oe.bg }),
                        s().createElement('div', { className: oe.pattern }),
                        s().createElement(
                            'div',
                            { className: o()(oe.value, m && oe.value__text) },
                            _ ? l : u,
                            _ && s().createElement('span', { className: oe.plus }, '+'),
                        ),
                    );
                };
                se.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const le = R.images.gui.maps.icons.dogtags.big.digits,
                    ce = (e, t = le) => {
                        const n = `c_${e}`;
                        return n in t
                            ? t[n]()
                            : e in t
                              ? t[e]()
                              : void (
                                    'invalidTestDigit' !== e &&
                                    console.error(
                                        `getDigitUri error at digit: ${e}. No properties "${n}" nor "${e}" exist in R.images.gui.maps.icons.dogtags.big.digits`,
                                    )
                                );
                    },
                    de = (e) => ({ backgroundImage: `url(${e})` }),
                    ue = 'Item_base_13',
                    me = 'Item_mainWrapper_0c',
                    _e = 'Item_hoverWrapper_2e',
                    ge = 'Item_base__selected_f0',
                    pe = 'Item_slotBg_3d',
                    be = 'Item_selectedBg_7c',
                    ve = 'Item_hoverBg_8d',
                    he = 'Item_hoverInfo_05',
                    fe = 'Item_base__locked_59',
                    Ee = 'Item_componentImage_03',
                    ye = 'Item_engravingBackground_e6',
                    we = 'Item_statusIcon_69',
                    ke = 'Item_statusIcon_check_0c',
                    Ce = 'Item_statusIcon_lock_5b',
                    Ne = 'Item_levelBadge_13',
                    Te = 'Item_itemCounter_cb',
                    Se = ['selected', 'isEquipped', 'onNewComponentHover'];
                const Re = R.images.gui.maps.icons.dogtags,
                    Le = o()(Ee, ye),
                    Oe = (0, i.memo)((e) => {
                        const t = e.selected,
                            n = e.isEquipped,
                            r = e.onNewComponentHover,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, Se),
                            c = l.id,
                            d = l.type,
                            u = l.isLocked,
                            m = l.currentGrade,
                            _ = l.currentProgress,
                            g = l.progressNumberType,
                            p = l.onClick,
                            b = l.purpose,
                            v = l.isNew;
                        let h = null;
                        u ? (h = t ? Re.icons.alert() : Re.icons.lock()) : n && (h = Re.icons.equipped_slot_icon());
                        const f = h ? de(h) : {},
                            E = m,
                            y = q(c, d, b, E, 'small'),
                            w = y.image,
                            k = y.strings,
                            C = d === x.Engraving,
                            N = (0, i.useCallback)(() => {
                                a(u ? R.sounds.dt_element_locked_click() : R.sounds.dt_element_click()), p(l);
                            }, [u, p, l]),
                            T = (0, i.useCallback)(() => {
                                v && r({ compId: c });
                            }, [c, r, v]),
                            S = (0, i.useCallback)(() => {
                                a(R.sounds.highlight());
                            }, []);
                        if (!k) return console.warn(`Component ${c} is missing translation info.`), null;
                        const L = k.title(),
                            O = de(w),
                            I = o()(ue, { [ge]: t, [fe]: u }),
                            M = re(_, g),
                            D = o()(we, { [ke]: n && !u, [Ce]: !t && u }),
                            A = !u && C,
                            P = s().createElement('div', { className: Ee, style: O });
                        return s().createElement(
                            'div',
                            { className: I, onClick: N, onMouseOver: T, onMouseEnter: S, id: 'item-' + c },
                            s().createElement(
                                'div',
                                { className: me },
                                s().createElement('div', { className: pe }),
                                s().createElement('div', { className: be }),
                                E >= 0 && A && s().createElement('div', { className: Ne }, j[E]),
                                C ? s().createElement('div', { className: Le }, P) : P,
                                h && s().createElement('div', { className: D, style: f }),
                                s().createElement(
                                    'div',
                                    { className: _e },
                                    s().createElement('div', { className: ve }),
                                    s().createElement(
                                        'div',
                                        { className: he },
                                        L,
                                        A && s().createElement('span', null, M),
                                    ),
                                ),
                            ),
                            v && s().createElement('div', { className: Te }, s().createElement(se, { isEmpty: !0 })),
                        );
                    }),
                    Ie = [
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
                function Me(e) {
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
                const De = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: N.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    Ae = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            o = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            m = void 0 !== u && u,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            p = e.isEnabled,
                            b = void 0 === p || p,
                            v = e.targetId,
                            h = void 0 === v ? 0 : v,
                            f = e.onShow,
                            E = e.onHide,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, Ie);
                        const k = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, i.useMemo)(() => h || w().resId, [h]),
                            N = (0, i.useCallback)(() => {
                                (k.current.isVisible && k.current.timeoutId) ||
                                    (De(n, g, { isMouseEvent: !0, on: !0, arguments: Me(r) }, C),
                                    f && f(),
                                    (k.current.isVisible = !0));
                            }, [n, g, r, C, f]),
                            T = (0, i.useCallback)(() => {
                                if (k.current.isVisible || k.current.timeoutId) {
                                    const e = k.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (k.current.timeoutId = 0)),
                                        De(n, g, { on: !1 }, C),
                                        k.current.isVisible && E && E(),
                                        (k.current.isVisible = !1);
                                }
                            }, [n, g, C, E]),
                            S = (0, i.useCallback)((e) => {
                                k.current.isVisible &&
                                    ((k.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (k.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(k.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = k.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === b && T();
                            }, [b, T]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            );
                        return b
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((k.current.timeoutId = window.setTimeout(N, d ? 100 : 400)),
                                                      o && o(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              T(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && T(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && T(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      y,
                                  ),
                              )
                            : t;
                        var R;
                    },
                    Pe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                const Be = R.views.common.tooltip_window.simple_tooltip_content,
                    We = (e) => {
                        let t = e.children,
                            n = e.body,
                            r = e.header,
                            o = e.note,
                            a = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, Pe);
                        const d = (0, i.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: r, note: o, alert: a });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [a, n, r, o, l]);
                        return s().createElement(
                            Ae,
                            xe(
                                {
                                    contentId:
                                        ((u = null == l ? void 0 : l.hasHtmlContent),
                                        u ? Be.SimpleTooltipHtmlContent('resId') : Be.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                c,
                            ),
                            t,
                        );
                        var u;
                    },
                    He = 'Grid_base_2f',
                    Fe = 'Grid_sectionWrapper_fa',
                    Ye = 'Grid_emptyBlock_30',
                    Xe = 'Grid_sectionTitle_79',
                    $e = 'Grid_sectionTitle_text_63',
                    je = 'Grid_sectionTitle_unlockedCount_fb',
                    ze = 'Grid_sectionTitle_count_ac',
                    Ue = 'Grid_sectionTitle_infoIcon_d7';
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const Ve = (0, i.memo)(
                        ({ data: e, onItemSelect: t, onNewComponentHover: n, selectedItems: r, equippedItems: o }) =>
                            s().createElement(
                                'div',
                                { className: He },
                                e.map((e, a) => {
                                    const i = e.value.items.length,
                                        l = (3 - (i % 3)) % 3,
                                        c = Array.from(Array(l)).map((e, t) =>
                                            s().createElement('div', { key: 'emptyBlock-' + t, className: Ye }),
                                        ),
                                        d = e.value.items.reduce((e, t) => (t.value.isLocked ? e : e + 1), 0),
                                        u = e.value.title ? systemLocale.toUpperCase(e.value.title) : '';
                                    return s().createElement(
                                        'div',
                                        { key: `${e.value.title}-${a}`, className: Fe },
                                        u &&
                                            s().createElement(
                                                'div',
                                                { className: Xe },
                                                s().createElement('div', { className: $e }, u),
                                                s().createElement(
                                                    'div',
                                                    { className: ze },
                                                    '(',
                                                    s().createElement('div', { className: je }, d),
                                                    '/',
                                                    i,
                                                    ')',
                                                ),
                                                e.value.tooltipDescription &&
                                                    s().createElement(
                                                        We,
                                                        {
                                                            header: e.value.tooltipTitle || void 0,
                                                            body: e.value.tooltipDescription,
                                                        },
                                                        s().createElement('div', { className: Ue }),
                                                    ),
                                            ),
                                        e.value.items.map((e) => {
                                            const a = e.value,
                                                i = z(a, o),
                                                l = z(a, r);
                                            return s().createElement(
                                                Oe,
                                                Ge({ key: a.id }, a, {
                                                    onClick: t,
                                                    selected: l,
                                                    isEquipped: i,
                                                    onNewComponentHover: n,
                                                }),
                                            );
                                        }),
                                        c,
                                    );
                                }),
                            ),
                    ),
                    Ke = 'Tabs_base_d9',
                    qe = 'Tabs_base__vertical_c0',
                    Qe = 'Tabs_list_0a',
                    Ze = 'Tabs_list__centered_dc',
                    Je = 'Tabs_wrapper_2d',
                    et = 'Tabs_wrapper__centered_d8',
                    tt = 'Tabs_wrapper__vertical_a5';
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const rt = 'tabs-role';
                var ot;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(ot || (ot = {}));
                class at extends i.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[ot.TAB]);
                                return t && t.props[ot.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = s().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[rt] === ot.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(s().Children.toArray(e[t].props.children));
                        (e[t] = s().cloneElement(e[t], {
                            children: s()
                                .Children.toArray(e[t].props.children)
                                .map((e) => s().cloneElement(e, { key: e.props[ot.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(n);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const n = s().Children.toArray(this.props.children)[this.tabsListIndex],
                            r = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            i =
                                ((l = this.tabsProps),
                                (c = r),
                                !(
                                    Object.keys(l).length === Object.keys(c).length &&
                                    Object.keys(l).every(
                                        (e) => Object.prototype.hasOwnProperty.call(c, e) && l[e] === c[e],
                                    )
                                ));
                        var l, c;
                        const d = o()(
                                Je,
                                n.props.className,
                                this.props.isTabsCentered && et,
                                this.props.isVerticalTabs && tt,
                            ),
                            u = o()(Qe, this.props.isTabsCentered && Ze);
                        if (t.activeKey !== this.state.activeKey || i) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[rt] === ot.CONTENT)
                                        return e.props[ot.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                o = t[0].props.children,
                                i = o.map((e, t) =>
                                    s().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            r[t],
                                            { key: t, isActive: this.state.activeKey === e.props[ot.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === o.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = r[t][ot.TAB];
                                                    this.state.activeKey === n ||
                                                        (r[t].onClick && r[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && a(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    r[t].onMouseEnter && r[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound && a(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = r),
                                this.setState({
                                    activeElements: [
                                        s().createElement(
                                            'div',
                                            { className: u, key: ot.LIST },
                                            s().createElement('div', nt({}, n.props, { className: d }), i),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = o()(Ke, this.props.isVerticalTabs && qe);
                        return s().createElement('div', { className: t }, e);
                    }
                }
                at.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const it = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const lt = (e) => {
                        let t = e.children,
                            n = e.className,
                            r = e.activeKey,
                            o = e.onClickSound,
                            a = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, it);
                        return s().createElement(
                            'div',
                            st({ className: n }, l),
                            s().createElement(
                                at,
                                { activeKey: r, onClickSound: o, onMouseEnterSound: a, isTabsCentered: i },
                                t,
                            ),
                        );
                    },
                    ct = ({ children: e, component: t, props: n = {} }) => (t ? s().createElement(t, n, e) : e || null),
                    dt = 'Tab_base_dd',
                    ut = 'Tab_base__first_4a',
                    mt = 'Tab_base__last_96',
                    _t = 'Tab_base__medium_ec',
                    gt = 'Tab_base__active_5d',
                    pt = 'Tab_divider_ca',
                    bt = 'Tab_divider__show_62',
                    vt = 'Tab_state_6c',
                    ht = 'Tab_stateHighlight_1e',
                    ft = 'Tab_stateBorder_64',
                    Et = 'Tab_stateBorder__positionLeft_e7',
                    yt = 'Tab_stateBorder__positionRight_db',
                    wt = 'Tab_counter_e1',
                    kt = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                const Nt = (0, i.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            r = e.isFirst,
                            a = void 0 !== r && r,
                            i = e.isLast,
                            l = void 0 !== i && i,
                            c = e.isMedium,
                            d = void 0 !== c && c,
                            u = e.isNotified,
                            m = void 0 !== u && u,
                            _ = e.children,
                            g = void 0 === _ ? 'Tab' : _,
                            p = e.wrapper,
                            b = void 0 === p ? {} : p,
                            v = e.counter,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, kt);
                        return s().createElement(
                            ct,
                            b,
                            s().createElement(
                                'div',
                                Ct({ className: o()(dt, { [gt]: n }, { [ut]: a }, { [mt]: l }, { [_t]: d }) }, h),
                                s().createElement(
                                    'span',
                                    { className: vt },
                                    s().createElement('span', { className: ht }),
                                    s().createElement('span', { className: o()(ft, Et) }),
                                    s().createElement('span', { className: o()(ft, yt) }),
                                ),
                                g,
                                !l && !n && s().createElement('span', { className: o()(pt, bt) }),
                                (Boolean(v) || m) &&
                                    s().createElement(
                                        'div',
                                        { className: wt },
                                        s().createElement(se, { value: v, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    Tt = 'Header_base_eb',
                    St = 'Header_titleWrapper_ab',
                    Rt = 'Header_title_e8',
                    Lt = 'Header_infoButtonWrapper_e1',
                    Ot = 'Header_infoIcon_8c',
                    It = Object.keys(A)
                        .filter((e) => !isNaN(Number(e)))
                        .map((e) => Number(e)),
                    Mt = {
                        [A.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [A.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    Dt = systemLocale.toUpperCase(R.strings.dogtags.customization.mainTitle()),
                    At = R.strings.dogtags.customization.infoTooltip(),
                    Pt = {
                        width: 10 * Math.max(...It.map((e) => Mt[e].length)) + 'rem',
                        padding: '0 5rem',
                        flex: '0 0 150rem',
                        justifyContent: 'center',
                    },
                    xt = (0, i.memo)(({ onTabClick: e, onInfoClick: t }) => {
                        const n = D('model'),
                            r = n.tab,
                            o = n.newBackgroundComponentCount,
                            a = n.newEngravingComponentCount;
                        return s().createElement(
                            'div',
                            { className: Tt },
                            s().createElement(
                                'div',
                                { className: St },
                                s().createElement('p', { className: Rt }, Dt),
                                s().createElement(
                                    'div',
                                    { className: Lt },
                                    s().createElement(
                                        We,
                                        { body: At },
                                        s().createElement(
                                            m,
                                            { type: 'ghost', onClick: t },
                                            s().createElement('div', { className: Ot }),
                                        ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                lt,
                                { key: r, activeKey: String(r), onClickSound: R.sounds.dt_tab() },
                                s().createElement(
                                    'div',
                                    { 'tabs-role': ot.LIST },
                                    It.map((t) => {
                                        const n = { [A.Engraving]: a, [A.Background]: o }[t] || 0;
                                        return s().createElement(
                                            Nt,
                                            {
                                                key: String(t),
                                                'tabs-role': ot.TAB,
                                                'tab-key': String(t),
                                                onClick: e,
                                                style: Pt,
                                                counter: n,
                                            },
                                            Mt[t],
                                        );
                                    }),
                                ),
                            ),
                        );
                    }),
                    Bt = (e, t) => {
                        const n = t.split('.'),
                            r = n[0];
                        if (!e || 'object' != typeof e)
                            return console.warn(`Reference "${JSON.stringify(e, null, 2)}" is not a valid object.`), !1;
                        if (!r) return console.warn(`Invalid key "${r}" in path ${t}.`), !1;
                        if (!(r in e))
                            return (
                                console.warn(`Key "${r}" was not found in reference "${JSON.stringify(e, null, 2)}".`),
                                !1
                            );
                        const o = n.slice(1);
                        return 0 === o.length || Bt(e[r], o.join('.'));
                    },
                    Wt = [
                        'model.equippedDogTag',
                        'model.equippedDogTag.background',
                        'model.equippedDogTag.engraving',
                        'model.engravingGrid',
                        'model.backgroundGrid',
                    ];
                Wt.forEach((e) => Bt(window, e));
                const Ht = () => (
                        D(Wt[0]),
                        D(Wt[1]),
                        D(Wt[2]),
                        D(Wt[3]),
                        D(Wt[4]),
                        ((e, t = !0) => {
                            if (!Bt(window, e)) throw Error(`Path "${e}" does not exist.`);
                            const n = D(e, t ? M.Deep : M.None);
                            return 'object' == typeof n && null !== n
                                ? (0, N.lw)(n)
                                : (t &&
                                      console.warn(
                                          `Tracking of primitive value ${String(n)} in ${e} is not supported.`,
                                      ),
                                  n);
                        })('model')
                    ),
                    Ft = (e) => {
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
                    Yt = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            r = t.height;
                        return 0 !== n && 0 !== r;
                    },
                    Xt = (e) => {
                        const t = (0, i.useState)(Yt(e ? e.current : null)),
                            n = t[0],
                            r = t[1];
                        return (
                            (0, i.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        Yt(e ? e.current : null) ? r(!0) : n();
                                    });
                                };
                                return (
                                    n(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => () => r(!1), [e]),
                            n
                        );
                    };
                var $t = n(380),
                    jt = n.n($t);
                const zt = 'ScrollArea_base_47',
                    Ut = 'ScrollArea_base__scrollIndent_1d',
                    Gt = 'ScrollArea_base__verticalScrollbarMargin_50',
                    Vt = 'ScrollArea_base__multiple_44',
                    Kt = 'ScrollArea_base__hidden_ec',
                    qt = s().forwardRef((e, t) => {
                        const n = e.offsetLeft,
                            r = void 0 === n ? 0 : n,
                            a = e.offsetTop,
                            l = void 0 === a ? 0 : a,
                            c = e.scrollSettings,
                            d = e.onUpdateActiveAxis,
                            u = e.onHorizontalScroll,
                            m = e.onVerticalScroll,
                            _ = e.onOverScrollAtBeginning,
                            g = e.onOverScrollAtEnd,
                            p = e.wrapperIndent,
                            b = e.verticalScrollbarMargin,
                            v = e.isMultipleScroll,
                            h = e.scrollAreaContainer,
                            f = e.children,
                            E = e.classMix,
                            y = e.onScrollLeftHandled,
                            w = (0, i.useState)(!1),
                            k = w[0],
                            C = w[1],
                            N = (0, i.useState)(),
                            T = N[0],
                            S = N[1],
                            R = (0, i.useState)(),
                            L = R[0],
                            O = R[1],
                            I = (0, i.useRef)(null),
                            M = (0, i.useCallback)(() => {
                                T &&
                                    d &&
                                    d({ x: T.scrollbarXActive, y: T.scrollbarYActive }, { x: T.reach.x, y: T.reach.y });
                            }, [d, T]),
                            D = (0, i.useCallback)(() => T, [T]),
                            A = (0, i.useCallback)(() => {
                                T && T.update();
                            }, [T]),
                            P = (0, i.useCallback)(
                                (e, t, n) => {
                                    T && (T.setScrollLeft(e, t, n), y && y(e, T.contentWidth - T.containerWidth));
                                },
                                [T, y],
                            ),
                            x = (0, i.useCallback)(
                                (e) => {
                                    T && (T.setScrollLeftImmediately(e), y && y(e, T.contentWidth - T.containerWidth));
                                },
                                [T, y],
                            ),
                            B = (0, i.useCallback)(
                                (e, t, n) => {
                                    T && T.setScrollTop(e, t, n);
                                },
                                [T],
                            ),
                            W = (0, i.useCallback)(
                                (e) => {
                                    T && T.setScrollTopImmediately(e);
                                },
                                [T],
                            ),
                            H = (0, i.useCallback)(() => {
                                if (L && u && T) {
                                    const e = { scrollPosition: L.scrollLeft < 0 ? 0 : L.scrollLeft, reach: T.reach.x };
                                    u(e);
                                }
                            }, [u, L, T]),
                            F = (0, i.useCallback)(() => {
                                if (L && m && T) {
                                    const e = { scrollPosition: L.scrollTop, reach: T.reach.y };
                                    m(e);
                                }
                            }, [m, L, T]),
                            Y = (0, i.useCallback)(() => {
                                _ && _();
                            }, [_]),
                            X = (0, i.useCallback)(() => {
                                g && g();
                            }, [g]),
                            $ = (0, i.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), O(e);
                                },
                                [t],
                            ),
                            j = (0, i.useCallback)(() => {
                                T &&
                                    (T.update(),
                                    (I.current = Ft(() => {
                                        M();
                                    })));
                            }, [T, M]),
                            z = (0, i.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, i.useEffect)(() => {
                            if (T && L)
                                return (
                                    document.addEventListener('mousemove', z),
                                    window.addEventListener('resize', j),
                                    L.addEventListener('ps-scroll-x', H),
                                    L.addEventListener('ps-scroll-y', F),
                                    L.addEventListener('over-scroll-beginning', Y),
                                    L.addEventListener('over-scroll-ending', X),
                                    C(!0),
                                    () => {
                                        window.removeEventListener('resize', j),
                                            document.removeEventListener('mousemove', z),
                                            L &&
                                                (L.removeEventListener('ps-scroll-x', H),
                                                L.removeEventListener('ps-scroll-y', F),
                                                L.removeEventListener('over-scroll-beginning', Y),
                                                L.removeEventListener('over-scroll-ending', X));
                                    }
                                );
                        }, [z, H, Y, X, j, L, T, F]);
                        const U = (0, i.useRef)(L || null);
                        U.current = L || null;
                        const G = Xt(U);
                        (0, i.useEffect)(
                            () => (
                                !T && L && G && S(new (jt())(L, Object.assign({}, c))),
                                () => {
                                    T && (T.destroy(), S(void 0));
                                }
                            ),
                            [L, G, c, T],
                        ),
                            (0, i.useEffect)(
                                () => () => {
                                    null == I.current || I.current();
                                },
                                [],
                            ),
                            (0, i.useEffect)(
                                () =>
                                    Ft(() => {
                                        T && M();
                                    }),
                                [M, T],
                            ),
                            (0, i.useEffect)(() => {
                                r > 0 && x(r);
                            }, [r, x]),
                            (0, i.useEffect)(() => {
                                l > 0 && W(l);
                            }, [l, W]),
                            (0, i.useEffect)(() => {
                                h &&
                                    ((h.setScrollLeft = P),
                                    (h.setScrollTop = B),
                                    (h.setScrollLeftImmediately = x),
                                    (h.setScrollTopImmediately = W),
                                    (h.updateScrollArea = A),
                                    (h.getScrollbar = D));
                            }, [h, P, x, B, W, A, D]);
                        const V = o()(zt, { [Ut]: p, [Kt]: !k, [Gt]: b, [Vt]: v }, E);
                        return s().createElement('div', { className: V, ref: $ }, f);
                    }),
                    Qt = 'Router_base_17',
                    Zt = 'Router_innerWrapper_d8',
                    Jt = 'Router_gridWrapper_c2',
                    en = 'Router_infoWrapper_95',
                    tn = 'Router_dogtagsWrapper_02',
                    nn = 'Router_dogtagsInfoWrapper_b7',
                    rn = 'Router_customizationWrapper_05',
                    on = 'Router_scrollAreaWrapper_93',
                    an = 'Router_scrollAreaWrapper_bottomMask_63',
                    sn = 'Router_gridTitle_a2',
                    ln = 'Router_subNavigation_b2',
                    cn = 'Router_topDivider_23',
                    dn = 'Router_gridBottomSeparator_13',
                    un = {
                        handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel'],
                        suppressScrollX: !0,
                        wheelSpeed: 6,
                        wheelPropagation: !0,
                        useBothWheelAxes: !0,
                    },
                    mn = { dedication: !0, season: !0, triumph: !0 },
                    _n = {
                        [A.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [A.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    gn = () => {
                        const e = Ht(),
                            t = e.onEquip,
                            n = e.onNewComponentHover,
                            r = e.tab,
                            a = e.equippedDogTag,
                            l = a.playerName,
                            c = a.clanTag,
                            d = a.engraving.id,
                            u = a.background.id,
                            m = e.engravingGrid,
                            _ = e.backgroundGrid,
                            g = e.newEngravingSkillCount,
                            p = e.newEngravingDedicationCount,
                            b = e.newEngravingTriumphCount,
                            v = (0, i.useState)({ background: u, engraving: d }),
                            h = v[0],
                            f = v[1],
                            E = {
                                background: te(_, h.background) || _[0].value.items[0].value,
                                engraving: te(m, h.engraving) || m[0].value.items[0].value,
                            },
                            y = {
                                engraving: te(m, d) || m[0].value.items[0].value,
                                background: te(_, u) || _[0].value.items[0].value,
                            },
                            w = (0, i.useState)(mn),
                            k = w[0],
                            C = w[1],
                            N = (0, i.useState)(!1),
                            T = N[0],
                            S = N[1],
                            R = (0, i.useState)(!0),
                            L = R[0],
                            O = R[1],
                            I = ((e, t) => e[ee[t]])(E, r),
                            M = _n[r],
                            D = ((e, t) => e[J[t]])({ backgroundGrid: _, engravingGrid: m }, r),
                            P =
                                r === A.Engraving
                                    ? ((e, t) => {
                                          const n = Z(t).reduce((e, t) => (e.push(...H[t]), e), []);
                                          return Q(
                                              e.map((e) => ({
                                                  value: Object.assign({}, e.value, {
                                                      items: e.value.items.filter((e) => n.includes(e.value.purpose)),
                                                  }),
                                              })),
                                          );
                                      })(D, k)
                                    : D,
                            x = Q(
                                P.map((e) => ({
                                    value: Object.assign({}, e.value, {
                                        items: e.value.items.filter((e) => !e.value.isLocked),
                                    }),
                                })),
                            );
                        const Y = ne(x),
                            X =
                                r === A.Engraving
                                    ? ((e) =>
                                          [W.Dedication, W.Season, W.Triumph].filter((t) => {
                                              for (let n = 0; n < e.length; n++) {
                                                  const r = e[n].value.items[0];
                                                  if (r && H[t].includes(r.value.purpose)) return !0;
                                              }
                                              return !1;
                                          }))(D)
                                    : [],
                            $ = (0, i.useMemo)(() => ({ gridData: T ? x : P, totalItems: ne(P) }), [x, P, T]),
                            j = $.gridData,
                            z = $.totalItems,
                            U = (0, i.useCallback)(
                                (e, n) => {
                                    const r = { engraving: d, background: u };
                                    (r[e] = n), t(r);
                                },
                                [t, d, u],
                            ),
                            G = (0, i.useCallback)(
                                (e) => {
                                    f((t) => Object.assign({}, t, { [e.type]: e.id })), e.isLocked || U(e.type, e.id);
                                },
                                [U],
                            ),
                            V = (0, i.useCallback)(
                                (e) => {
                                    f((t) => Object.assign({}, t, { [e]: y[e].id }));
                                },
                                [y],
                            ),
                            K = (0, i.useCallback)((e) => {
                                O(e.y);
                            }, []),
                            q = (0, i.useCallback)((e) => {
                                O('end' !== e.reach);
                            }, []),
                            re = (0, i.useCallback)(() => {
                                C({ dedication: !0, season: !0, triumph: !0 }), S(!1);
                            }, []),
                            oe = Z(k),
                            ae = ((e) => {
                                const t = e.background,
                                    n = e.engraving,
                                    r = t.currentGrade + 1,
                                    o = n.currentGrade + 1;
                                return (n.purpose === B.Triumph && 4 === o) || o === F || r === F;
                            })(E),
                            ie = o()(on, L && an);
                        return s().createElement(
                            'div',
                            { className: Qt },
                            s().createElement(
                                'div',
                                { className: Zt },
                                s().createElement(
                                    'div',
                                    { className: Jt },
                                    s().createElement(
                                        'div',
                                        { className: ln },
                                        s().createElement('div', { className: sn }, systemLocale.toUpperCase(M)),
                                        s().createElement($o, {
                                            newEngravingSkillCount: g,
                                            newEngravingDedicationCount: p,
                                            newEngravingTriumphCount: b,
                                            availablePurposeGroups: X,
                                            setPurposeGroupFilters: C,
                                            purposeGroupFilters: k,
                                            showOnlyAvailableItems: T,
                                            setShowOnlyAvailableItems: S,
                                            availableItemsCount: Y,
                                        }),
                                        s().createElement('div', { className: cn }),
                                    ),
                                    j.length > 0
                                        ? s().createElement(
                                              'div',
                                              { className: ie },
                                              s().createElement(
                                                  qt,
                                                  {
                                                      key: `${r}-${oe.join('-')}-${String(T)}`,
                                                      scrollSettings: un,
                                                      onUpdateActiveAxis: K,
                                                      onVerticalScroll: q,
                                                      verticalScrollbarMargin: !0,
                                                  },
                                                  s().createElement(Ve, {
                                                      data: j,
                                                      count: z,
                                                      onItemSelect: G,
                                                      onNewComponentHover: n,
                                                      selectedItems: E,
                                                      equippedItems: y,
                                                  }),
                                              ),
                                          )
                                        : s().createElement(Go, { clearFilters: re }),
                                    s().createElement('div', { className: dn }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: en },
                                    s().createElement(
                                        'div',
                                        { className: tn },
                                        s().createElement(vo, {
                                            playerName: l,
                                            clanTag: c,
                                            background: E.background,
                                            engraving: E.engraving,
                                            isHighlighted: ae,
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: nn },
                                        s().createElement(
                                            qt,
                                            {
                                                key: JSON.stringify({ currentSelectedItem: I, equippedDogTag: y }),
                                                scrollSettings: un,
                                            },
                                            s().createElement(Br, { currentItem: I }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: rn },
                                        s().createElement(sa, { selectedItems: E, equippedItems: y, onItemReset: V }),
                                    ),
                                ),
                            ),
                        );
                    },
                    pn = 'DogtagsInfo_base_68',
                    bn = 'DogtagsInfo_title_02',
                    vn = 'DogtagsInfo_progressBarWrapper_48',
                    hn = 'DogtagsInfo_currentLevel_14',
                    fn = 'DogtagsInfo_nextLevel_53',
                    En = 'DogtagsInfo_valuesWrapper_ac',
                    yn = 'DogtagsInfo_valuesWrapper_inner_55',
                    wn = 'DogtagsInfo_valuesWrapper__locked_59',
                    kn = 'DogtagsInfo_currentValue_25',
                    Cn = 'DogtagsInfo_totalValue_47',
                    Nn = 'DogtagsInfo_valuesSeparator_db',
                    Tn = 'DogtagsInfo_medalInfo_0d',
                    Sn = 'DogtagsInfo_skillInfo_13',
                    Rn = 'DogtagsInfo_skillInfoIcon_f9',
                    Ln = 'DogtagsInfo_shieldLevelWrapper_fa',
                    On = 'DogtagsInfo_single_86',
                    In = 'DogtagsInfo_currentShieldWrapper_b0',
                    Mn = 'DogtagsInfo_nextShieldWrapper_7e',
                    Dn = 'DogtagsInfo_currentLevelShield_60',
                    An = 'DogtagsInfo_currentLevelValue_d5',
                    Pn = 'DogtagsInfo_nextLevelValue_d5',
                    xn = 'DogtagsInfo_arrowLock_6a',
                    Bn = 'DogtagsInfo_nextLevelShield_22',
                    Wn = 'DogtagsInfo_infoSeparator_d7',
                    Hn = 'DogtagsInfo_lockedText_9d',
                    Fn = 'DogtagsInfo_lockedIcon_04',
                    Yn = 'DogtagsInfo_skillDescriptionWrapper_dc',
                    Xn = 'DogtagsInfo_skillDescription_94',
                    $n = 'DogtagsInfo_skillInfoBorderTop_62',
                    jn = 'DogtagsInfo_skillInfoBorderBottom_50',
                    zn = (0, i.memo)(({ infoTitle: e, infoText: t, isLocked: n, unlockText: r }) =>
                        s().createElement(
                            'div',
                            { className: pn },
                            s().createElement('div', { className: bn }, e),
                            s().createElement('div', { className: Tn }, t),
                            n &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Wn }),
                                    s().createElement(
                                        'div',
                                        { className: Hn },
                                        s().createElement('div', { className: Fn }),
                                        r,
                                    ),
                                ),
                        ),
                    ),
                    Un = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Gn, Vn;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(Gn || (Gn = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Vn || (Vn = {}));
                const Kn = ({ size: e = Gn.Default }) =>
                        s().createElement('div', { className: o()(Un.background, Un[`background__${e}`]) }),
                    qn = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Qn = ({ size: e }) => {
                        const t = o()(qn.base, qn[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    Zn = {
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
                    Jn = (0, i.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: r, isComplete: a, withoutBounce: i }) => {
                            const l = o()(
                                    Zn.base,
                                    Zn[`base__${e}`],
                                    n && Zn.base__disabled,
                                    a && Zn.base__finished,
                                    i && Zn.base__withoutBounce,
                                ),
                                c = !n && !a;
                            return s().createElement(
                                'div',
                                { className: l, style: r, ref: t },
                                s().createElement('div', { className: Zn.pattern }),
                                s().createElement('div', { className: Zn.gradient }),
                                c && s().createElement(Qn, { size: e }),
                            );
                        },
                    ),
                    er = ({ size: e, value: t, lineRef: n, disabled: r, onComplete: o }) => {
                        const a = (0, i.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, i.useEffect)(() => {
                                l && o && o();
                            }, [l, o]),
                            s().createElement(Jn, { size: e, disabled: r, baseStyles: a, isComplete: l, lineRef: n })
                        );
                    };
                let tr, nr;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(tr || (tr = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(nr || (nr = {}));
                const rr = 'ProgressBarDeltaSimple_base_6c',
                    or = 'ProgressBarDeltaSimple_delta_99',
                    ar = (0, i.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: r,
                            size: o,
                            to: a,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = a < r,
                                u = (0, i.useState)(nr.Idle),
                                m = u[0],
                                _ = u[1],
                                g = m === nr.In,
                                p = m === nr.End,
                                b = m === nr.Idle,
                                v = (0, i.useCallback)(
                                    (e) => {
                                        _(e), c && c(e);
                                    },
                                    [c],
                                );
                            (0, i.useEffect)(() => {
                                if (b && !n) {
                                    return y(() => {
                                        v(nr.In);
                                    }, t);
                                }
                            }, [v, n, b, t]),
                                (0, i.useEffect)(() => {
                                    if (g) {
                                        return y(() => {
                                            l && l(), v(nr.End);
                                        }, e + t);
                                    }
                                }, [v, g, l, t, e]);
                            const h = (0, i.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                f = (0, i.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                E = (0, i.useMemo)(
                                    () => ({ width: `${Math.abs(r - a)}%`, left: `${d ? a : r}%` }),
                                    [r, d, a],
                                );
                            return p
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: rr, style: E },
                                      s().createElement(
                                          'div',
                                          { style: b ? h : f, className: or },
                                          s().createElement(Qn, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    ir = (0, i.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: r,
                            disabled: o,
                            isComplete: a,
                            animationSettings: l,
                            onChangeAnimationState: c,
                            onEndAnimation: d,
                        }) => {
                            const u = (0, i.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Jn, {
                                    size: t,
                                    lineRef: r,
                                    disabled: o,
                                    isComplete: a,
                                    baseStyles: u,
                                }),
                                n >= 0 &&
                                    s().createElement(ar, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: c,
                                        onEndAnimation: d,
                                    }),
                            );
                        },
                    ),
                    sr = 'ProgressBarDeltaGrow_base_7e',
                    lr = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    cr = 'ProgressBarDeltaGrow_glow_68',
                    dr = (e) => (e ? { left: 0 } : { right: 0 }),
                    ur = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    mr = (e) => ({ transitionDuration: `${e}ms` }),
                    _r = (0, i.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: r,
                            size: a,
                            to: l,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                            className: u,
                        }) => {
                            const m = l < r,
                                _ = (0, i.useState)(tr.Idle),
                                g = _[0],
                                p = _[1],
                                b = g === tr.End,
                                v = g === tr.Idle,
                                h = g === tr.Grow,
                                f = g === tr.Shrink,
                                E = (0, i.useCallback)(
                                    (e) => {
                                        p(e), d && d(e);
                                    },
                                    [d],
                                ),
                                w = (0, i.useCallback)(
                                    (e, t) =>
                                        y(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, i.useEffect)(() => {
                                if (!n)
                                    return v
                                        ? w(tr.Grow, t)
                                        : h
                                          ? w(tr.Shrink, e)
                                          : f
                                            ? w(tr.End, e)
                                            : void (b && c && c());
                            }, [w, n, b, h, v, f, c, t, e]);
                            const k = (0, i.useMemo)(() => Object.assign({ width: '100%' }, mr(e), dr(m)), [m, e]),
                                C = (0, i.useMemo)(() => Object.assign({ width: '0%' }, mr(e), dr(m)), [m, e]),
                                N = (0, i.useMemo)(() => Object.assign({ width: '0%' }, ur(m, r), mr(e)), [r, m, e]),
                                T = (0, i.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(l - r)}%` }, ur(m, r), mr(e)),
                                    [r, m, l, e],
                                );
                            if (b) return null;
                            const S = o()(sr, u, m && 0 === l && lr);
                            return s().createElement(
                                'div',
                                { style: v ? N : T, className: S },
                                s().createElement(
                                    'div',
                                    { style: f ? C : k, className: cr },
                                    s().createElement(Qn, { size: a }),
                                ),
                            );
                        },
                    ),
                    gr = (0, i.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: r,
                            disabled: o,
                            isComplete: a,
                            animationSettings: l,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        }) => {
                            const u = e < n,
                                m = (0, i.useState)(!1),
                                _ = m[0],
                                g = m[1],
                                p = (0, i.useCallback)(
                                    (e) => {
                                        e === tr.Shrink && g(!0), d && d(e);
                                    },
                                    [d],
                                ),
                                b = (0, i.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                v = (0, i.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Jn, {
                                    size: t,
                                    lineRef: r,
                                    disabled: o,
                                    isComplete: a,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: _ ? v : b,
                                }),
                                n >= 0 &&
                                    s().createElement(_r, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: l.freezed,
                                        onEndAnimation: c,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    pr = ['onComplete', 'onEndAnimation'];
                function br() {
                    return (
                        (br =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        br.apply(this, arguments)
                    );
                }
                const vr = (0, i.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, pr);
                        const o = (0, i.useState)(!1),
                            a = o[0],
                            l = o[1],
                            c = (0, i.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== a && l(e), e && t && t(), n && n();
                            }, [a, t, n, r.to]);
                        switch (r.animationSettings.type) {
                            case Vn.Simple:
                                return s().createElement(ir, br({}, r, { onEndAnimation: c, isComplete: a }));
                            case Vn.Growing:
                                return s().createElement(gr, br({}, r, { onEndAnimation: c, isComplete: a }));
                            default:
                                return null;
                        }
                    }),
                    hr = ['onEndAnimation'];
                function fr() {
                    return (
                        (fr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        fr.apply(this, arguments)
                    );
                }
                const Er = (0, i.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, hr);
                    const r = (0, i.useRef)({}),
                        o = (0, i.useCallback)(() => {
                            (r.current.from = void 0), t && t();
                        }, [t]),
                        a = 'number' == typeof r.current.from ? r.current.from : n.from;
                    return (
                        (r.current.from = a),
                        s().createElement(vr, fr({}, n, { onEndAnimation: o, key: `${a}-${n.to}`, from: a }))
                    );
                });
                function yr() {
                    return (
                        (yr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        yr.apply(this, arguments)
                    );
                }
                const wr = (0, i.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: r,
                            deltaFrom: o,
                            animationSettings: a,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (o === t)
                                return s().createElement(er, {
                                    key: `${o}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: r,
                                    onComplete: c,
                                });
                            const d = {
                                from: o,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: r,
                                animationSettings: a,
                                onComplete: c,
                                onEndAnimation: i,
                                onChangeAnimationState: l,
                            };
                            return a.withStack
                                ? s().createElement(Er, d)
                                : s().createElement(vr, yr({ key: `${o}-${t}` }, d));
                        },
                    ),
                    kr = (e) => ({
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
                    Cr = (e, t, n) => (n < e ? e : n > t ? t : n),
                    Nr = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (Cr(0, t, n) / t) * 100;
                        }
                        return e;
                    },
                    Tr = {
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
                    Sr = {
                        freezed: !1,
                        withStack: !1,
                        type: Vn.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Rr = (0, i.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Tr,
                            size: n = Gn.Default,
                            animationSettings: r = Sr,
                            disabled: a = !1,
                            withoutBackground: l = !1,
                            value: c,
                            deltaFrom: d,
                            lineRef: u,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                            onComplete: g,
                        }) => {
                            const p = ((e, t, n) =>
                                (0, i.useMemo)(() => {
                                    const r = (Cr(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: Nr(r, t, n) };
                                }, [n, t, e]))(c, e, d);
                            return s().createElement(
                                'div',
                                { className: o()(Un.base, Un[`base__${n}`]), style: kr(t) },
                                !l && s().createElement(Kn, { size: n }),
                                s().createElement(wr, {
                                    size: n,
                                    lineRef: u,
                                    disabled: a,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: _,
                                    onChangeAnimationState: m,
                                    onComplete: g,
                                }),
                            );
                        },
                    ),
                    Lr = R.strings.dogtags.customization,
                    Or = (0, i.memo)(
                        ({
                            id: e,
                            infoTitle: t,
                            infoText: n,
                            isLocked: r,
                            currentGrade: a,
                            currentProgress: l,
                            currentGradeValue: c,
                            nextGradeValue: d,
                            unlockText: u,
                            progressNumberType: m,
                            isExternalUnlockOnly: _,
                        }) => {
                            const g = a + 1,
                                p = (0, i.useMemo)(() => ({ componentId: e }), [e]),
                                b = _ && !r;
                            return s().createElement(
                                'div',
                                { className: pn },
                                s().createElement('div', { className: bn }, t),
                                s().createElement('div', { className: Sn }, n),
                                r &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: Wn }),
                                        s().createElement(
                                            'div',
                                            { className: Hn },
                                            s().createElement('div', { className: Fn }),
                                            u,
                                        ),
                                    ),
                                s().createElement(
                                    Ae,
                                    {
                                        contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                        isEnabled: !r,
                                        args: p,
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        (!_ || b) &&
                                            s().createElement(
                                                'div',
                                                { className: yn },
                                                s().createElement('div', { className: kn }, re(l)),
                                                g < F &&
                                                    s().createElement(
                                                        s().Fragment,
                                                        null,
                                                        s().createElement('div', { className: Nn }, '/'),
                                                        s().createElement('div', { className: Cn }, re(r ? c : d, m)),
                                                    ),
                                            ),
                                        !r &&
                                            s().createElement(
                                                'div',
                                                { className: vn },
                                                s().createElement(Rr, {
                                                    size: Gn.Big,
                                                    value: l - c,
                                                    maxValue: d - c,
                                                    animationSettings: Sr,
                                                }),
                                            ),
                                        s().createElement(
                                            'div',
                                            { className: o()(En, r && wn) },
                                            !r &&
                                                s().createElement(
                                                    'div',
                                                    { className: hn },
                                                    `${Lr.currentLevel()} ${j[a]}`,
                                                ),
                                            !r && g < F && s().createElement('div', { className: fn }, j[a + 1]),
                                            !r && g === F && s().createElement('div', { className: fn }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ir = (0, i.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: r,
                            currentGrade: a,
                            currentProgress: l,
                            nextGradeValue: c,
                            unlockText: d,
                            isDemoted: u,
                            progressNumberType: m,
                        }) => {
                            const _ = R.images.gui.maps.icons.dogtags,
                                g = a + 1,
                                p = a + 2,
                                b = _.level_shields[`Level_${g}`](),
                                v = (0, i.useMemo)(() => ({ backgroundImage: `url(${b})` }), [b]),
                                h = _.level_shields[`Level_gr_${p <= F ? p : 1}`](),
                                f = (0, i.useMemo)(() => ({ backgroundImage: `url(${h})` }), [h]),
                                E = t || u,
                                y = o()(Ln, g === F && On),
                                w = (0, i.useMemo)(() => ({ componentId: e }), [e]);
                            return s().createElement(
                                'div',
                                { className: pn },
                                s().createElement('div', { className: bn }, n),
                                s().createElement('div', { className: Sn }, r),
                                !E &&
                                    s().createElement(
                                        Ae,
                                        {
                                            contentId: R.views.lobby.dog_tags.ThreeMonthsTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: Yn },
                                            s().createElement('div', { className: $n }),
                                            s().createElement(
                                                'div',
                                                { className: Xn },
                                                R.strings.dogtags.customization.skill_info(),
                                                s().createElement('div', { className: Rn }),
                                            ),
                                            s().createElement('div', { className: jn }),
                                        ),
                                    ),
                                E &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: Wn }),
                                        s().createElement(
                                            'div',
                                            { className: Hn },
                                            s().createElement('div', { className: Fn }),
                                            d,
                                        ),
                                    ),
                                !E &&
                                    s().createElement(
                                        Ae,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: y },
                                            s().createElement(
                                                'div',
                                                { className: In },
                                                s().createElement('div', { className: Dn, style: v }),
                                                s().createElement('div', { className: An }, re(l, m)),
                                            ),
                                            g < F &&
                                                s().createElement(
                                                    s().Fragment,
                                                    null,
                                                    s().createElement('div', { className: xn }),
                                                    s().createElement(
                                                        'div',
                                                        { className: Mn },
                                                        s().createElement('div', { className: Bn, style: f }),
                                                        s().createElement('div', { className: Pn }, re(c, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Mr = R.images.gui.maps.icons.dogtags,
                    Dr = (0, i.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: r,
                            currentGrade: a,
                            currentProgress: l,
                            nextGradeValue: c,
                            unlockText: d,
                            progressNumberType: u,
                        }) => {
                            const m = a + 1,
                                _ = a + 2,
                                g = Mr.level_shields[`Level_${m}`](),
                                p = (0, i.useMemo)(() => ({ backgroundImage: `url(${g})` }), [g]),
                                b = _ < F ? Mr.level_shields[`Level_gr_${_}`]() : '',
                                v = (0, i.useMemo)(() => ({ backgroundImage: `url(${b})` }), [b]),
                                h = o()(Ln, { [On]: 4 === a }),
                                f = (0, i.useMemo)(() => ({ componentId: e }), [e]);
                            return s().createElement(
                                'div',
                                { className: pn },
                                s().createElement('div', { className: bn }, n),
                                s().createElement('div', { className: Sn }, r),
                                t &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: Wn }),
                                        s().createElement(
                                            'div',
                                            { className: Hn },
                                            s().createElement('div', { className: Fn }),
                                            d,
                                        ),
                                    ),
                                !t &&
                                    s().createElement(
                                        Ae,
                                        {
                                            contentId: R.views.lobby.dog_tags.TriumphTooltip('resId'),
                                            isEnabled: !0,
                                            args: f,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: h },
                                            s().createElement(
                                                'div',
                                                { className: In },
                                                s().createElement('div', { className: Dn, style: p }),
                                                s().createElement('div', { className: An }, re(l, u)),
                                            ),
                                            m < 4 && s().createElement('div', { className: xn }),
                                            m < 4 &&
                                                s().createElement(
                                                    'div',
                                                    { className: Mn },
                                                    s().createElement('div', { className: Bn, style: v }),
                                                    s().createElement('div', { className: Pn }, re(c, u)),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Ar = R.images.gui.maps.icons.dogtags,
                    Pr = (0, i.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: r,
                            currentGrade: a,
                            currentProgress: l,
                            nextGradeValue: c,
                            unlockText: d,
                            isDemoted: u,
                            progressNumberType: m,
                        }) => {
                            const _ = a + 1,
                                g = a + 2,
                                p = Ar.level_shields[`Level_${_}`](),
                                b = (0, i.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                                v = Ar.level_shields[`Level_gr_${g <= F ? g : 1}`](),
                                h = (0, i.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                f = t || u,
                                E = o()(Ln, _ === F && On),
                                y = (0, i.useMemo)(() => ({ componentId: e }), [e]),
                                w = _ < F;
                            return s().createElement(
                                'div',
                                { className: pn },
                                s().createElement('div', { className: bn }, n),
                                s().createElement('div', { className: Sn }, r),
                                !f &&
                                    s().createElement(
                                        Ae,
                                        {
                                            contentId: R.views.lobby.dog_tags.RankedEfficiencyTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: Yn },
                                            s().createElement('div', { className: $n }),
                                            s().createElement(
                                                'div',
                                                { className: Xn },
                                                R.strings.dogtags.customization.ranked_skill_info(),
                                                s().createElement('div', { className: Rn }),
                                            ),
                                            s().createElement('div', { className: jn }),
                                        ),
                                    ),
                                f &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: Wn }),
                                        s().createElement(
                                            'div',
                                            { className: Hn },
                                            s().createElement('div', { className: Fn }),
                                            d,
                                        ),
                                    ),
                                !f &&
                                    s().createElement(
                                        Ae,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: E },
                                            s().createElement(
                                                'div',
                                                { className: In },
                                                s().createElement('div', { className: Dn, style: b }),
                                                s().createElement('div', { className: An }, re(l, m)),
                                            ),
                                            w &&
                                                s().createElement(
                                                    s().Fragment,
                                                    null,
                                                    s().createElement('div', { className: xn }),
                                                    s().createElement(
                                                        'div',
                                                        { className: Mn },
                                                        s().createElement('div', { className: Bn, style: h }),
                                                        s().createElement('div', { className: Pn }, re(c, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    );
                function xr() {
                    return (
                        (xr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        xr.apply(this, arguments)
                    );
                }
                const Br = ({ currentItem: e }) => {
                    const t = e.id,
                        n = e.purpose,
                        r = e.currentGrade,
                        o = e.type,
                        a = e.currentGradeValue,
                        i = q(t, o, n, r).strings;
                    if (!i) return console.warn(`Component ${t} is missing translation info.`), null;
                    const l = i.description_locked(),
                        c = i.title(),
                        d = i.description(),
                        u = l.replace('{unlock_value}', String(re(a))),
                        m = {
                            [B.Dedication]: Or,
                            [B.Skill]: Ir,
                            [B.RankedSkill]: Pr,
                            [B.Triumph]: Dr,
                            [B.Medal]: zn,
                            [B.Base]: zn,
                        },
                        _ = { infoTitle: c, infoText: d, unlockText: u },
                        g = m[n];
                    return g
                        ? s().createElement(g, xr({}, e, _))
                        : (console.warn(
                              `Invalid component purpose ${n}. Available component purposes ${Object.keys(m).join(', ')}.`,
                          ),
                          null);
                };
                var Wr = n(664);
                const Hr = 'Dogtags_base_46',
                    Fr = 'Dogtags_dogtags_top_26',
                    Yr = 'Dogtags_dogtags_bottom_3d',
                    Xr = 'Dogtags_background_f8',
                    $r = 'Dogtags_playerInfoShadow_a4',
                    jr = 'Dogtags_name_95',
                    zr = 'Dogtags_clan_a3',
                    Ur = 'Dogtags_engraving_b0',
                    Gr = 'Dogtags_shadow_8c',
                    Vr = 'Dogtags_trackerInfoWrapper_fd',
                    Kr = 'Dogtags_trackerText_a4',
                    qr = 'Dogtags_trackerValue_f5',
                    Qr = 'Dogtags_trackerDigit_c0',
                    Zr = 'Dogtags_spaceDigit_86',
                    Jr = 'Dogtags_flameAnimation_a9',
                    eo = 'Dogtags_flameAnimation__appear_2a',
                    to = 'Dogtags_flameAnimation__appearActive_b3',
                    no = 'Dogtags_flameAnimation__appearDone_cb',
                    ro = 'Dogtags_flameAnimation__enter_a3',
                    oo = 'Dogtags_flameAnimation__enterActive_53',
                    ao = 'Dogtags_flameAnimation__enterDone_b7',
                    io = 'Dogtags_flameAnimation__exit_20',
                    so = 'Dogtags_flameAnimation__exitActive_0e',
                    lo = 'Dogtags_flameAnimation__exitDone_df',
                    co = 'Flame_base_90',
                    uo = 'Flame_slides_58',
                    mo = 'Flame_frame_29',
                    _o = (0, i.memo)(({ className: e }) => {
                        const t = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((t, n) => {
                                    const r = `flame_${`0${n}`.slice(-2)}`;
                                    return r in e ? e[r]() : e.flame_00();
                                });
                        })();
                        return s().createElement(
                            'div',
                            { className: o()(co, e), 'data-testid': 'Flame' },
                            s().createElement(
                                'div',
                                { className: uo },
                                t.map((e) => s().createElement('img', { key: e, src: e, className: mo })),
                            ),
                        );
                    }),
                    go = R.images.gui.maps.icons.dogtags.big.digits;
                Object.keys(Object.getPrototypeOf(go))
                    .filter((e) => '$' !== e[0])
                    .map((e) => go[e]())
                    .map((e) => {
                        new Image().src = e;
                    });
                const po = (e) => {
                        const t = e.currentTarget.width / e.currentTarget.height;
                        (e.currentTarget.style.width = 16 * t + '%'), (e.currentTarget.style.display = 'flex');
                    },
                    bo = {
                        appear: eo,
                        appearActive: to,
                        appearDone: no,
                        enter: ro,
                        enterActive: oo,
                        enterDone: ao,
                        exit: io,
                        exitActive: so,
                        exitDone: lo,
                    },
                    vo = ({ playerName: e, clanTag: t, background: n, engraving: r, isHighlighted: o }) => {
                        const l = n.currentGrade,
                            c = r.currentGrade,
                            d = q(n.id, x.Background, n.purpose || 'default', l || 0, 'big'),
                            u = q(r.id, x.Engraving, r.purpose || 'dedication', c || 0, 'big'),
                            m = r.displayableProgress.split(/\[|\]/).reduce((e, t, n) => {
                                const r = n % 2 == 1;
                                return e.push(...(r ? [t] : t.split(''))), e;
                            }, []);
                        const _ = u.strings ? u.strings.title() : null,
                            g = de(d.image),
                            p = de(u.image),
                            b = ((e) => {
                                const t = (0, i.useRef)(!1);
                                return (
                                    (0, i.useEffect)(() => {
                                        t.current = e;
                                    }),
                                    t.current
                                );
                            })(o);
                        return (
                            (0, i.useEffect)(() => {
                                o && !b ? a(R.sounds.dt_flame_start()) : b && !o && a(R.sounds.dt_flame_stop());
                            }, [o, b]),
                            s().createElement(
                                'div',
                                { className: Hr },
                                s().createElement(
                                    Wr.Z,
                                    {
                                        in: o,
                                        timeout: 400,
                                        className: Jr,
                                        classNames: bo,
                                        mountOnEnter: !0,
                                        unmountOnExit: !0,
                                        appear: !0,
                                    },
                                    s().createElement(_o, null),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Fr },
                                    s().createElement('div', { className: Xr, style: g }),
                                    s().createElement('div', { className: Gr }),
                                    s().createElement('div', { className: $r }),
                                    s().createElement('div', { className: jr }, e),
                                    s().createElement('div', { className: zr }, t),
                                    s().createElement('div', { className: Ur, style: p }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Yr },
                                    s().createElement(
                                        'div',
                                        { className: Vr },
                                        s().createElement('div', { className: Kr }, _),
                                        s().createElement(
                                            'div',
                                            { className: qr },
                                            m.map((e, t) => {
                                                if (' ' === e)
                                                    return s().createElement('div', { key: e + t, className: Zr });
                                                const n = ce(e, go);
                                                return s().createElement('img', {
                                                    key: `${n}-${t}`,
                                                    onLoad: po,
                                                    className: Qr,
                                                    src: n,
                                                });
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    ho = 'FilterBar_base_66',
                    fo = 'FilterBar_purposeGroups_85',
                    Eo = 'FilterBar_buttonWrapper_c2',
                    yo = 'FilterBar_buttonLabelSpacing_6c',
                    wo = 'FilterBar_bubbleWrapper_27',
                    ko = 'FilterBar_availableItems_4d',
                    Co = 'FilterBar_availableItemsCount_a1',
                    No = 'FilterBar_newCount_c9',
                    To = 'ToggleButton_base_66',
                    So = 'ToggleButton_content_2f',
                    Ro = 'ToggleButton_overlay_49',
                    Lo = 'ToggleButton_base__active_c6',
                    Oo = 'ToggleButton_indicator_c1',
                    Io = ['active', 'className', 'children', 'size'];
                function Mo() {
                    return (
                        (Mo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Mo.apply(this, arguments)
                    );
                }
                const Do = (0, i.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        r = e.children,
                        a = e.size,
                        i = void 0 === a ? d.small : a,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, Io);
                    const c = o()(To, n, t && Lo);
                    return s().createElement(
                        'div',
                        { className: c },
                        s().createElement(
                            m,
                            Mo({}, l, { type: 'secondary', size: i }),
                            s().createElement('span', { className: So }, r),
                        ),
                        s().createElement('div', { className: Ro }),
                        s().createElement('div', { className: Oo }),
                    );
                });
                let Ao, Po, xo, Bo;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Ao || (Ao = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(Po || (Po = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(xo || (xo = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(Bo || (Bo = {}));
                const Wo = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    Ho = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function Fo() {
                    return (
                        (Fo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Fo.apply(this, arguments)
                    );
                }
                const Yo = (e) => {
                        let t = e.id,
                            n = e.isChecked,
                            r = void 0 !== n && n,
                            l = e.isDisabled,
                            c = void 0 !== l && l,
                            d = e.isAlert,
                            u = void 0 !== d && d,
                            m = e.size,
                            _ = void 0 === m ? Po.medium : m,
                            g = e.type,
                            p = void 0 === g ? xo.primary : g,
                            b = e.soundHover,
                            v = void 0 === b ? 'highlight' : b,
                            h = e.soundClick,
                            f = void 0 === h ? 'play' : h,
                            E = e.onMouseEnter,
                            y = e.onMouseLeave,
                            w = e.onMouseUp,
                            k = e.onMouseDown,
                            C = e.onClick,
                            N = e.onChange,
                            T = e.onFocus,
                            S = e.onBlur,
                            R = e.text,
                            L = e.contentStyles,
                            O = e.children,
                            I = e.alignment,
                            M = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, Ho);
                        const D = (0, i.useState)(!1),
                            A = D[0],
                            P = D[1],
                            x = (0, i.useState)(!1),
                            B = (x[0], x[1]),
                            W = (0, i.useCallback)(
                                (e) => {
                                    c || (N && N(), C && C(e));
                                },
                                [c, N, C],
                            ),
                            H = (0, i.useCallback)(
                                (e) => {
                                    const t = e.button === Ao.LEFT;
                                    c || (t && P(!0), t && k && k(e), f && a(f));
                                },
                                [c, k, f],
                            ),
                            F = (0, i.useCallback)(
                                (e) => {
                                    c || (P(!1), w && w(e));
                                },
                                [c, w],
                            ),
                            Y = (0, i.useCallback)(
                                (e) => {
                                    c || (E && E(e), v && a(v));
                                },
                                [c, E, v],
                            ),
                            X = (0, i.useCallback)(
                                (e) => {
                                    c || (P(!1), y && y(e));
                                },
                                [c, y],
                            ),
                            $ = (0, i.useCallback)(
                                (e) => {
                                    c || (B(!0), T && T(e));
                                },
                                [c, T],
                            ),
                            j = (0, i.useCallback)(
                                (e) => {
                                    c || (B(!1), S && S(e));
                                },
                                [c, S],
                            ),
                            z = s().createElement(
                                'div',
                                { className: Wo.label },
                                s().createElement(
                                    'div',
                                    { className: o()(Wo.labelContent, 's-labelContent'), style: L },
                                    R || O,
                                ),
                            );
                        return s().createElement(
                            'div',
                            Fo(
                                {
                                    id: t,
                                    className: o()(Wo.base, Wo[`base__${_}`], Wo[`base__${p}`], {
                                        [Wo.base__checked]: r,
                                        [Wo.base__disabled]: c,
                                        [Wo.base__mouseDown]: A,
                                        [Wo.base__alert]: u,
                                        [Wo.base__center]: I === Bo.Center,
                                        [Wo.base__bottom]: I === Bo.Bottom,
                                    }),
                                    onClick: W,
                                    onMouseEnter: Y,
                                    onMouseLeave: X,
                                    onMouseDown: H,
                                    onMouseUp: F,
                                    onFocus: $,
                                    onBlur: j,
                                },
                                M,
                            ),
                            s().createElement(
                                'div',
                                { className: Wo.input },
                                s().createElement('div', { className: Wo.alertOverlay }),
                                s().createElement('div', { className: Wo.inputHoverOverlay }),
                                s().createElement('div', { className: Wo.highlight }),
                            ),
                            s().createElement('div', { className: Wo.checkmark }),
                            ((R || O) && z) || null,
                        );
                    },
                    Xo = R.strings.dogtags.component.purposeGroup,
                    $o = (0, i.memo)(
                        ({
                            availablePurposeGroups: e,
                            purposeGroupFilters: t,
                            setPurposeGroupFilters: n,
                            showOnlyAvailableItems: r,
                            setShowOnlyAvailableItems: o,
                            availableItemsCount: a,
                            newEngravingSkillCount: l = 0,
                            newEngravingDedicationCount: c = 0,
                            newEngravingTriumphCount: d = 0,
                        }) => {
                            const u = (0, i.useCallback)(
                                    (e) => () => {
                                        n((t) => Object.assign({}, t, { [e]: !t[e] }));
                                    },
                                    [n],
                                ),
                                m = (0, i.useCallback)(() => o((e) => !e), [o]),
                                _ = { [W.Dedication]: c, [W.Triumph]: d, [W.Season]: l };
                            return s().createElement(
                                'div',
                                { className: ho },
                                e.length > 0 &&
                                    s().createElement(
                                        'div',
                                        { className: fo },
                                        e.map((e) => {
                                            const n = t[e],
                                                r = e in Xo ? Xo[e]() : Xo.dedication(),
                                                o = _[e] || 0;
                                            return s().createElement(
                                                'div',
                                                { className: Eo, key: e },
                                                s().createElement(
                                                    Do,
                                                    { active: n, onClick: u(e) },
                                                    s().createElement('span', { className: yo }, r),
                                                ),
                                                o > 0 &&
                                                    s().createElement(
                                                        'div',
                                                        { className: wo },
                                                        s().createElement(
                                                            'div',
                                                            { className: No },
                                                            s().createElement(se, { value: o }),
                                                        ),
                                                    ),
                                            );
                                        }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: ko },
                                    s().createElement(Yo, {
                                        isChecked: r,
                                        size: 'medium',
                                        text: R.strings.dogtags.customization.showAvailable(),
                                        type: 'main',
                                        soundHover: 'highlight',
                                        soundClick: 'play',
                                        onChange: m,
                                    }),
                                    s().createElement('span', { className: Co }, a),
                                ),
                            );
                        },
                    ),
                    jo = 'NoResults_base_35',
                    zo = 'NoResults_message_41',
                    Uo = 'NoResults_message_icon_a4',
                    Go = ({ className: e, clearFilters: t }) => {
                        const n = o()(jo, e);
                        return s().createElement(
                            'div',
                            { className: n },
                            s().createElement(
                                'p',
                                { className: zo },
                                s().createElement('img', {
                                    src: R.images.gui.maps.icons.dogtags.icons.alert(),
                                    className: Uo,
                                }),
                                R.strings.dogtags.customization.filter.noResults(),
                            ),
                            s().createElement(
                                m,
                                { type: 'secondary', size: d.medium, onClick: t },
                                R.strings.dogtags.customization.filter.restoreFilter(),
                            ),
                        );
                    },
                    Vo = 'Customization_base_4e',
                    Ko = 'Customization_checkIcon_bf',
                    qo = 'Customization_allEquipped_ed',
                    Qo = 'Customization_alertMessage_c4',
                    Zo = 'Customization_alertIcon_ce',
                    Jo = 'Customization_selectionWrapper_e5',
                    ea = 'Customization_selection_6b',
                    ta = 'Customization_resetBtn_f7',
                    na = R.strings.dogtags.customization.allApplied(),
                    ra = R.strings.dogtags.customization.selectedNotAvailable(),
                    oa = R.strings.dogtags.customization.deprecated(),
                    aa = R.strings.dogtags.customization.pills.engraving(),
                    ia = R.strings.dogtags.customization.pills.background(),
                    sa = (0, i.memo)(({ selectedItems: e, equippedItems: t, onItemReset: n }) => {
                        const r = e.engraving.id === t.engraving.id,
                            o = e.background.id === t.background.id,
                            l = e.engraving.isLocked,
                            c = e.background.isLocked;
                        function d(e) {
                            return () => {
                                a(R.sounds.dt_locked_reset_button()), n(e);
                            };
                        }
                        const u = (0, i.useCallback)(() => {
                                a(R.sounds.highlight());
                            }, []),
                            m = [];
                        return (
                            ((!o && c) || (!r && l)) && m.push(ra),
                            (e.engraving.isDeprecated || e.background.isDeprecated) && m.push(oa),
                            s().createElement(
                                'div',
                                { className: Vo },
                                0 === m.length &&
                                    o &&
                                    r &&
                                    s().createElement(
                                        'div',
                                        { className: qo },
                                        s().createElement('div', { className: Ko }),
                                        na,
                                    ),
                                m.length > 0 &&
                                    s().createElement(
                                        'div',
                                        { className: Qo },
                                        s().createElement('div', { className: Zo }),
                                        m.map((e) => s().createElement('div', { key: e }, e)),
                                    ),
                                (!o || !r) &&
                                    s().createElement(
                                        'div',
                                        { className: Jo },
                                        !o &&
                                            s().createElement(
                                                'div',
                                                { className: ea, onClick: d(x.Background), onMouseEnter: u },
                                                ia,
                                                s().createElement('div', { className: ta }),
                                            ),
                                        !r &&
                                            s().createElement(
                                                'div',
                                                { className: ea, onClick: d(x.Engraving), onMouseEnter: u },
                                                aa,
                                                s().createElement('div', { className: ta }),
                                            ),
                                    ),
                            )
                        );
                    }),
                    la = 'Onboarding_base_f8',
                    ca = 'Onboarding_header_f2',
                    da = 'Onboarding_center_47',
                    ua = 'Onboarding_closeBtn_1a',
                    ma = 'Onboarding_body_31',
                    _a = 'Onboarding_overlayReveal_e3',
                    ga = 'Onboarding_overlay_02',
                    pa = 'Onboarding_playBtnWrapper_1d',
                    ba = 'Onboarding_playBtn_22',
                    va = 'Onboarding_footer_64',
                    ha = 'Onboarding_pagination_e5',
                    fa = 'Onboarding_paginationBtn_8d',
                    Ea = 'Onboarding_selected_d7',
                    ya = 'Onboarding_replay_81',
                    wa = 'Onboarding_replayIcon_9b',
                    ka = 'Onboarding_overlayInnerWrapper_df',
                    Ca = 'Onboarding_overlayTitle_96',
                    Na = 'Onboarding_overlayText_c2',
                    Ta = {
                        slideOut: 'Reveal_slideOut_ec',
                        slideIn: 'Reveal_slideIn_00',
                        slideLeftOut: 'Reveal_slideLeftOut_84',
                        slideLeftIn: 'Reveal_slideLeftIn_92',
                        slideRightOut: 'Reveal_slideRightOut_8b',
                        slideRightIn: 'Reveal_slideRightIn_4d',
                        fadeOut: 'Reveal_fadeOut_d6',
                        fadeIn: 'Reveal_fadeIn_38',
                        bg_fadeOut: 'Reveal_bg_fadeOut_f3',
                        fadeOutBlur: 'Reveal_fadeOutBlur_3f',
                        bg_fadeIn: 'Reveal_bg_fadeIn_a4',
                        fadeInBlur: 'Reveal_fadeInBlur_57',
                        fadeDownIn: 'Reveal_fadeDownIn_bc',
                        fadeInUp: 'Reveal_fadeInUp_1d',
                        fadeDownOut: 'Reveal_fadeDownOut_f6',
                        fadeInDown: 'Reveal_fadeInDown_7e',
                    },
                    Sa = (0, i.memo)(
                        ({
                            children: e,
                            type: t = 'slide',
                            duration: n = 200,
                            className: r,
                            isOut: a = !1,
                            delayIn: l = '0ms',
                            delayOut: c = '0ms',
                            isDisabled: d = !1,
                            onAnimationComplete: u,
                        }) => {
                            const m = (0, i.useMemo)(
                                    () => ({ animationDelay: a ? c : l, animationDuration: `${n}ms` }),
                                    [a, l, c, n],
                                ),
                                _ = o()(Ta[`${t}${a ? 'Out' : 'In'}`], r);
                            return d
                                ? s().createElement('div', { className: r }, e)
                                : s().createElement('div', { onAnimationEnd: u, className: _, style: m }, e);
                        },
                    );
                var Ra;
                !(function (e) {
                    (e[(e.First = 0)] = 'First'), (e[(e.Second = 1)] = 'Second');
                })(Ra || (Ra = {}));
                const La = R.strings.dogtags.onboarding.header.title(),
                    Oa = R.strings.dogtags.onboarding.header.close(),
                    Ia = R.strings.dogtags.onboarding.overlay.pagination.first(),
                    Ma = R.strings.dogtags.onboarding.overlay.pagination.second(),
                    Da = R.strings.dogtags.onboarding.overlay.replay(),
                    Aa = (0, i.memo)(({ onClose: e }) => {
                        const t = D('model', M.None).onPlayVideo,
                            n = (0, i.useState)(!1),
                            r = n[0],
                            l = n[1],
                            c = (0, i.useState)(!1),
                            d = c[0],
                            u = c[1],
                            _ = (0, i.useState)(Ra.First),
                            g = _[0],
                            p = _[1],
                            b = (e) => () => (a(R.sounds.play()), p(e)),
                            v = (0, i.useCallback)((t) => (g === Ra.First ? p(Ra.Second) : e(t)), [g, e]),
                            h = (0, i.useCallback)(
                                () => (
                                    a(R.sounds.play()),
                                    g === Ra.First
                                        ? (setTimeout(() => l(!0), 500), t({ urlKey: 'onboardingVideo1' }))
                                        : (setTimeout(() => u(!0), 500), t({ urlKey: 'onboardingVideo2' }))
                                ),
                                [g, t],
                            ),
                            f = (0, i.useCallback)(() => a(R.sounds.highlight()), []),
                            y = ((w = r),
                            (k = d),
                            {
                                [Ra.First]: {
                                    title: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.title(),
                                    text: w
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.next(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_1(),
                                },
                                [Ra.Second]: {
                                    title: k
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.title(),
                                    text: k
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.affirmative(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_2(),
                                },
                            })[g];
                        var w, k;
                        const C = ((e) => ({ backgroundImage: `url(${e.background})` }))(y),
                            N = o()(fa, g === Ra.First && Ea),
                            T = o()(fa, g === Ra.Second && Ea);
                        return s().createElement(
                            'div',
                            { className: la },
                            s().createElement(
                                'div',
                                { className: ca },
                                s().createElement('div', { className: da }, La),
                                s().createElement(
                                    'div',
                                    { className: ua },
                                    s().createElement(E, {
                                        caption: Oa,
                                        type: 'close',
                                        side: 'right',
                                        onClick: e,
                                        onMouseEnter: f,
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: ma, style: C },
                                s().createElement(
                                    Sa,
                                    { type: 'fade', className: _a },
                                    s().createElement(
                                        'div',
                                        { className: ga },
                                        ((!r && g === Ra.First) || (!d && g === Ra.Second)) &&
                                            s().createElement(
                                                'div',
                                                { className: pa, onClick: h, onMouseEnter: f },
                                                s().createElement('div', { className: ba }),
                                            ),
                                        s().createElement(
                                            'div',
                                            { className: ka },
                                            s().createElement('div', { className: Ca }, y.title),
                                            s().createElement('div', { className: Na }, y.text),
                                            ((g === Ra.First && r) || (g === Ra.Second && d)) &&
                                                s().createElement(
                                                    m,
                                                    { type: 'main', size: 'medium', onClick: v, onMouseEnter: f },
                                                    y.button,
                                                ),
                                        ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: va },
                                ((g === Ra.First && r) || (g === Ra.Second && d)) &&
                                    s().createElement(
                                        'div',
                                        { className: ya, onClick: h, onMouseEnter: f },
                                        s().createElement('div', { className: wa }),
                                        Da,
                                    ),
                                s().createElement(
                                    'div',
                                    { className: ha },
                                    s().createElement(
                                        'div',
                                        { className: N, onClick: b(Ra.First), onMouseEnter: f },
                                        Ia,
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: T, onClick: b(Ra.Second), onMouseEnter: f },
                                        Ma,
                                    ),
                                ),
                            ),
                        );
                    }),
                    Pa = 'DogTagsApp_outerContainer_28',
                    xa = 'DogTagsApp_outerContainer_topView_6d',
                    Ba = 'DogTagsApp_base_c2',
                    Wa = 'DogTagsApp_blur_30',
                    Ha = 'DogTagsApp_baseReveal_e4',
                    Fa = 'DogTagsApp_onboardingWrapper_b7',
                    Ya = 'DogTagsApp_infoScreenReveal_1a',
                    Xa = 'DogTagsApp_customizationWrapper_95',
                    $a = 'DogTagsApp_routerReveal_45',
                    ja = 'DogTagsApp_backBtnWrapper_85',
                    za = 'DogTagsApp_closeBtnWrapper_69',
                    Ua = 300,
                    Ga = () => {
                        const e = D('model', M.None),
                            t = e.onTabSelect,
                            n = e.onboardingEnabled,
                            r = e.onOnboardingCloseClick,
                            a = e.onInfoButtonClick,
                            l = e.isTopView,
                            c = e.onExit,
                            d = (0, i.useState)(!1),
                            u = d[0],
                            m = d[1],
                            _ = (0, i.useState)(null),
                            g = _[0],
                            p = _[1],
                            b = (0, i.useCallback)((e) => {
                                const t = Number(e.currentTarget.getAttribute('tab-key'));
                                p(t);
                            }, []);
                        (0, i.useEffect)(() => {
                            if (null !== g)
                                return y(() => {
                                    p(null), t({ newTab: g });
                                }, Ua);
                        }, [g, t]);
                        const v = (0, i.useState)(!1),
                            h = v[0],
                            f = v[1],
                            w = (0, i.useState)(!1),
                            k = w[0],
                            C = w[1],
                            N = (0, i.useState)(n),
                            T = N[0],
                            S = N[1],
                            L = (0, i.useState)(!1),
                            O = L[0],
                            I = L[1],
                            A = (0, i.useCallback)(() => {
                                f(!0);
                            }, []),
                            P = (0, i.useCallback)(() => {
                                C(!0);
                            }, []),
                            x = (0, i.useCallback)(() => {
                                I(!0);
                            }, []),
                            B = (0, i.useCallback)(
                                (e) => {
                                    27 === (e.keyCode || e.which) && (u ? m(!1) : T ? I(!0) : C(!0));
                                },
                                [u, T],
                            );
                        (0, i.useEffect)(
                            () => (
                                window.addEventListener('keydown', B), () => window.removeEventListener('keydown', B)
                            ),
                            [B],
                        );
                        const W = (0, i.useCallback)(() => {
                                k && c();
                            }, [c, k]),
                            H = (0, i.useCallback)(() => {
                                h && (f(!1), a());
                            }, [h, a]),
                            F = (0, i.useCallback)(() => {
                                O && (S(!1), r());
                            }, [r, O]),
                            Y = R.strings.dogtags.customization.button.backDashboard_glow(),
                            X = R.strings.dogtags.customization.button.backDashboard_gray(),
                            $ = R.strings.dogtags.onboarding.header.close(),
                            j = o()(Ba, T && Wa);
                        return s().createElement(
                            'div',
                            { className: o()(Pa, l && xa) },
                            s().createElement(
                                Sa,
                                { type: 'fade', isOut: k, duration: Ua, className: Ha, onAnimationComplete: W },
                                s().createElement(
                                    'div',
                                    { className: j },
                                    l &&
                                        s().createElement(
                                            'div',
                                            { className: ja },
                                            s().createElement(E, {
                                                caption: Y,
                                                type: 'back',
                                                side: 'left',
                                                onClick: P,
                                                goto: X,
                                            }),
                                        ),
                                    !l &&
                                        s().createElement(
                                            'div',
                                            { className: za },
                                            s().createElement(E, {
                                                caption: $,
                                                type: 'close',
                                                side: 'right',
                                                onClick: P,
                                            }),
                                        ),
                                    !u &&
                                        s().createElement(
                                            Sa,
                                            {
                                                className: Ya,
                                                type: 'bg_fade',
                                                isDisabled: k,
                                                isOut: h,
                                                duration: Ua,
                                                onAnimationComplete: H,
                                            },
                                            s().createElement(
                                                'div',
                                                { className: Xa },
                                                s().createElement(xt, { onTabClick: b, onInfoClick: A }),
                                                s().createElement(
                                                    Sa,
                                                    {
                                                        className: $a,
                                                        type: 'slide',
                                                        isOut: null !== g,
                                                        isDisabled: h || k,
                                                        duration: Ua,
                                                    },
                                                    s().createElement(gn, null),
                                                ),
                                            ),
                                        ),
                                ),
                            ),
                            T &&
                                s().createElement(
                                    Sa,
                                    { type: 'fade', isOut: O, className: Fa, duration: Ua, onAnimationComplete: F },
                                    s().createElement(Aa, { onClose: x }),
                                ),
                        );
                    },
                    Va = document.createElement('div');
                (window.onload = () => {
                    document.body.appendChild(Va), document.body.setAttribute('style', 'margin: 0;');
                }),
                    engine.whenReady.then(() => {
                        b().render(s().createElement(g, null, s().createElement(Ga, null)), Va);
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
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], a = !0, i = 0; i < t.length; i++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), r < o && (o = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, r];
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
            var e = { 589: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [a, i, s] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        (o = a[l]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [994], () => __webpack_require__(256));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
