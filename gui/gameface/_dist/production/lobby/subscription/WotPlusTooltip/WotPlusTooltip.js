(() => {
    'use strict';
    var e,
        t = {
            744: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => g, off: () => v, on: () => m, onResize: () => d, onScaleUpdated: () => p });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => b,
                        getSize: () => P,
                        graphicsQuality: () => T,
                        playSound: () => f,
                        setRTPC: () => _,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => O, getTextureUrl: () => w });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => z,
                        addPreloadTexture: () => M,
                        children: () => i,
                        displayStatus: () => x,
                        displayStatusIs: () => te,
                        events: () => A,
                        extraSize: () => ne,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => ee,
                        getScale: () => Y,
                        getSize: () => j,
                        getViewGlobalPosition: () => X,
                        isEventHandled: () => J,
                        isFocused: () => $,
                        pxToRem: () => Q,
                        remToPx: () => V,
                        resize: () => q,
                        sendEvent: () => C,
                        setAnimateWindow: () => H,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => re,
                    });
                var s = n(483),
                    l = n.n(s);
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = u('clientResized'),
                    p = u('self.onScaleUpdated'),
                    m = (e, t) => engine.on(e, t),
                    v = (e, t) => engine.off(e, t),
                    E = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        a = E[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            o &&
                                                (a(),
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
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function f(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function _(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    y = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(y).reduce((e, t) => ((e[t] = () => f(y[t])), e), {}),
                    S = { play: Object.assign({}, h, { sound: f }), setRTPC: _ };
                function w(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function O(e, t, n) {
                    return `url(${w(e, t, n)})`;
                }
                const x = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
                        onTextureFrozen: u('self.onTextureFrozen'),
                        onTextureReady: u('self.onTextureReady'),
                        onDomBuilt: u('self.onDomBuilt'),
                        onLoaded: u('self.onLoaded'),
                        onDisplayChanged: u('self.onShowingStatusChanged'),
                        onFocusUpdated: u('self.onFocusChanged'),
                        children: {
                            onAdded: u('children.onAdded'),
                            onLoaded: u('children.onLoaded'),
                            onRemoved: u('children.onRemoved'),
                            onAttached: u('children.onAttached'),
                            onTextureReady: u('children.onTextureReady'),
                            onRequestPosition: u('children.requestPosition'),
                        },
                    },
                    D = ['args'];
                const B = 2,
                    U = 16,
                    k = 32,
                    I = 64,
                    N = (e, t) => {
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
                                })(t, D);
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
                    C = {
                        close(e) {
                            N('popover' === e ? B : k);
                        },
                        minimize() {
                            N(I);
                        },
                        move(e) {
                            N(U, { isMouseEvent: !0, on: e });
                        },
                    };
                function M(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function L(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function z(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function j(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function X(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: V(t.x), y: V(t.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Y() {
                    return viewEnv.getScale();
                }
                function Q(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function H(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function $() {
                    return viewEnv.isFocused();
                }
                function Z() {
                    return viewEnv.setEventHandled();
                }
                function J() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ee() {
                    return viewEnv.getShowingStatus();
                }
                const te = Object.keys(x).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === x[t]), e), {}),
                    ne = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    oe = { view: a, client: o, sound: S };
                var ie = n(179),
                    ae = n.n(ie);
                function se() {
                    const e = (0, ie.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ie.useEffect)(() => t, []),
                        (0, ie.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const le = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ue = ['children', 'className', 'theme'];
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                const de = ae().forwardRef(function (e, t) {
                    let n = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, ue);
                    const s = se(),
                        u = ae().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = u.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                oe.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                oe.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ie.useEffect)(c, []),
                        ae().createElement(
                            'div',
                            ce({}, a, {
                                className: l()(le.base, le[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            ae().createElement('div', { className: le.decorator }, n),
                        )
                    );
                });
                var pe = n(986),
                    me = n.n(pe);
                let ve, Ee, ge, fe, _e, Pe, be, Te;
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
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
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
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin');
                })(ve || (ve = {})),
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
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
                    })(Ee || (Ee = {})),
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
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48');
                    })(ge || (ge = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(fe || (fe = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(_e || (_e = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Pe || (Pe = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(be || (be = {})),
                    (function (e) {
                        (e[(e.Inactive = 0)] = 'Inactive'),
                            (e[(e.Active = 1)] = 'Active'),
                            (e[(e.Canceled = 2)] = 'Canceled');
                    })(Te || (Te = {}));
                var ye = n(515);
                function he(e) {
                    return e;
                }
                function Se() {
                    return !1;
                }
                console.log;
                var we = n(174);
                function Re(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Oe(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Oe(e, t);
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
                function Oe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const xe = (e) => (0 === e ? window : window.subViews.get(e));
                var Ae = n(946);
                const De = ((e, t) => {
                        const n = (0, ie.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const s = (0, ie.useRef)([]),
                                    l = (n, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = xe,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            l = oe.view.addModelObserver(s, t, !0);
                                                        return o.set(l, n), e && n(a(i)), l;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const n = a(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = Re(o.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === n
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            u = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : l.readByPath(e),
                                            c = (e) => s.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: u,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : u(e),
                                                            o = we.LO.box(r, { equals: Se });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, we.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : u(e),
                                                            o = we.LO.box(r, { equals: Se });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, we.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = u(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = we.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, we.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = we.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, we.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            p = { mode: n, model: d, externalModel: l, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(p) : t(p),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    u = (0, ie.useRef)(!1),
                                    c = (0, ie.useState)(r),
                                    d = c[0],
                                    p = c[1],
                                    m = (0, ie.useState)(() => l(r, o, a)),
                                    v = m[0],
                                    E = m[1];
                                return (
                                    (0, ie.useEffect)(() => {
                                        u.current ? E(l(d, o, a)) : (u.current = !0);
                                    }, [a, d, o]),
                                    (0, ie.useEffect)(() => {
                                        p(r);
                                    }, [r]),
                                    (0, ie.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    ae().createElement(n.Provider, { value: v }, i)
                                );
                            },
                            () => (0, ie.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    bonuses: e.array('bonuses', []),
                                    primitives: e.primitives(['nextCharge', 'expirationDate']),
                                },
                                n = (0, Ae.Om)(
                                    () => {
                                        return (
                                            (e = t.bonuses.get()),
                                            (n = he),
                                            Array.isArray(e)
                                                ? e.map(n)
                                                : e.map((e, t, r) => n(null == e ? void 0 : e.value, t, r))
                                        );
                                        var e, n;
                                    },
                                    { equals: Se },
                                );
                            return Object.assign({ computes: { getBonuses: n } }, t);
                        },
                        () => {},
                    ),
                    Be = De[0],
                    Ue = De[1],
                    ke = 'WotPlusTooltipApp_base_e0',
                    Ie = 'WotPlusTooltipApp_headerBlock_55',
                    Ne = 'WotPlusTooltipApp_headerTitle_8e',
                    Ce = 'WotPlusTooltipApp_headerDesc_f7',
                    Me = 'WotPlusTooltipApp_decorator_a3',
                    Ge = 'WotPlusTooltipApp_gridBase_b7',
                    Le = 'WotPlusTooltipApp_gridElement_18',
                    ze = 'WotPlusTooltipApp_bonusImg_2a',
                    Fe = 'WotPlusTooltipApp_bonusName_f0',
                    je = 'WotPlusTooltipApp_statusBlock_d8',
                    qe = 'WotPlusTooltipApp_status_e3',
                    Xe = 'WotPlusTooltipApp_status__activated_ca',
                    We = 'WotPlusTooltipApp_status__suspended_a8',
                    Ye = 'WotPlusTooltipApp_description_bd',
                    Qe = 'WotPlusTooltipApp_chargeBlock_69',
                    Ve = 'WotPlusTooltipApp_chargeText_54',
                    He = 'WotPlusTooltipApp_chargeTime_29',
                    $e = () => R.strings.subscription.subscriptionCardTooltip,
                    Ze = { [Te.Inactive]: $e().desc.available(), [Te.Canceled]: $e().desc.canceled() },
                    Je = {
                        [Te.Active]: $e().active(),
                        [Te.Inactive]: $e().available(),
                        [Te.Canceled]: $e().canceled(),
                    },
                    Ke = () => R.images.gui.maps.icons.subscription.tooltip,
                    et = (e) => {
                        const t = e.state,
                            n = e.nextCharge,
                            r = e.expirationDate;
                        return t === Te.Active && n
                            ? ae().createElement(
                                  'div',
                                  { className: Qe },
                                  ae().createElement('span', { className: Ve }, $e().chargeTime()),
                                  ae().createElement('span', { className: He }, n),
                              )
                            : [Te.Canceled, Te.Active].includes(t) && r
                              ? ae().createElement(
                                    'div',
                                    { className: Qe },
                                    ae().createElement('span', { className: Ve }, $e().activeUntil()),
                                    ae().createElement('span', { className: He }, r),
                                )
                              : null;
                    },
                    tt = (0, ye.Pi)(() => {
                        const e = Ue().model,
                            t = e.root.get().state,
                            n = e.primitives.nextCharge.get(),
                            r = e.primitives.expirationDate.get(),
                            o = l()(qe, t === Te.Active && Xe, t === Te.Canceled && We),
                            i = ((e) => e.map((e) => ({ name: e.name, value: e.label, valueType: fe.STRING })))(
                                e.computes.getBonuses(),
                            );
                        return ae().createElement(
                            'div',
                            { className: ke },
                            ae().createElement(
                                'div',
                                { className: Ie },
                                ae().createElement('span', { className: Ne }, $e().headerTitle()),
                                ae().createElement('span', { className: Ce }, $e().headerDescription()),
                            ),
                            ae().createElement(
                                'div',
                                { className: Me },
                                ae().createElement(
                                    'div',
                                    { className: Ge, style: { '--column-size': Math.ceil(i.length / 2) } },
                                    i.map(
                                        (e, t) =>
                                            e.name in Ke() &&
                                            ae().createElement(
                                                'div',
                                                { className: Le, key: t },
                                                ae().createElement('div', {
                                                    className: ze,
                                                    style: { backgroundImage: `url(${Ke()[e.name]()})` },
                                                }),
                                                ae().createElement('span', { className: Fe }, e.value),
                                            ),
                                    ),
                                ),
                            ),
                            ae().createElement(
                                'div',
                                { className: je },
                                ae().createElement('span', { className: o }, Je[t]),
                                ae().createElement(et, { state: t, nextCharge: n, expirationDate: r }),
                                t !== Te.Active && ae().createElement('span', { className: Ye }, Ze[t]),
                            ),
                        );
                    }),
                    nt = (0, ie.memo)(tt);
                engine.whenReady.then(() => {
                    me().render(
                        ae().createElement(de, null, ae().createElement(Be, null, ae().createElement(nt, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { exports: {} });
        return t[e](i, i.exports, r), i.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, i) => {
            if (!n) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, o, i] = e[c], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var u = o();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [n, o, i];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 865),
        (() => {
            var e = { 865: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, l] = n,
                        u = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var c = l(r);
                    }
                    for (t && t(n); u < a.length; u++) (i = a[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [174], () => r(744));
    o = r.O(o);
})();
