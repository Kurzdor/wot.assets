import { r as e } from './rolldown-runtime.js';
import { Cs as r, Lr as s, Na as a } from './lib.js';
var o = (function (e) {
        return (
            (e[(e.Base = 0)] = 'Base'),
            (e[(e.Vehicle = 1)] = 'Vehicle'),
            (e[(e.Style3d = 2)] = 'Style3d'),
            (e[(e.Reward = 3)] = 'Reward'),
            e
        );
    })({}),
    n = (function (e) {
        return (
            (e.Locked = 'locked'),
            (e.ReadyToRestore = 'readyToRestore'),
            (e.ReadyToPurchase = 'readyToPurchase'),
            (e.Purchased = 'purchased'),
            (e.InProgress = 'inProgress'),
            e
        );
    })({}),
    t = (r(), e(a())),
    c = ({ name: e, className: r }) =>
        (0, t.jsx)('span', { className: r, children: s(R.strings.comp7_ext.quotesWrapper(), { name: e }) });
export { n, o as r, c as t };
