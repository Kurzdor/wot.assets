import { D as o, E as t, O as a, St as e, T as n, ln as i } from './lib.js';
var r = 'tooltipId',
    s = (function (o) {
        return (
            (o.VEHICLE_PART = 'vehiclePart'),
            (o.OPERATION_WITH_HONORS = 'operationWithHonors'),
            (o.CAMPAIGN_WITH_HONORS = 'campaignWithHonors'),
            (o.OPERATION = 'operation'),
            o
        );
    })({}),
    l = (o, t) => {
        const a = e.find((o) => o.name === t);
        return !!a && o < a.weight;
    },
    p = (a, e) => ({
        ...a,
        size: e,
        image: n(a, e),
        valueType: o(a.name),
        special: 'overlayType' in a ? a.overlayType : void 0,
        tooltipArgs: t(
            { [r]: a.tooltipId },
            i
                .resolve('views')
                .read((o) => o.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
        ),
    }),
    c = (o, t = a.Small) => {
        const { name: e, icon: i } = o;
        switch (e) {
            case 'completionTokens':
            case 'tankwomanBonus':
                return i.replace('..', 'img://gui');
            default:
                return n(o, t);
        }
    };
export { s as a, r as i, c as n, l as r, p as t };
