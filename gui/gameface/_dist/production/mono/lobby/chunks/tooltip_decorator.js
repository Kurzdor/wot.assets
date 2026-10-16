import { r } from './rolldown-runtime.js';
import { Cs as o, Na as e, et as a } from './lib.js';
import { i as s } from './vendor.js';
o();
var t = r(s()),
    n = 'TooltipDecorator_decorator_81525906',
    d = 'TooltipDecorator_decoratorInner_ed88e863',
    i = r(e());
function c({ children: r, classNames: o }) {
    return (0, i.jsx)(a, {
        children: (0, i.jsx)('div', {
            className: (0, t.default)(n, o?.decoratorInner),
            children: (0, i.jsx)('div', { className: (0, t.default)(d, o?.decoratorInner), children: r }),
        }),
    });
}
export { c as t };
