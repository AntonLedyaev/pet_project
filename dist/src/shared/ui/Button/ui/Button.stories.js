var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
};
var Template = function (args) { return _jsx(Button, __assign({}, args), void 0); };
export var Default = Template.bind({});
Default.args = {};
