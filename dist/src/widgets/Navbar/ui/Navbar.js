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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
export var Navbar = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsx("div", __assign({ className: classNames(styles.Navbar, {}, [className]) }, { children: _jsxs("div", __assign({ className: styles.links }, { children: [_jsx(AppLink, __assign({ to: "/", theme: AppLinkTheme.SECONDARY, className: styles.mainLink }, { children: t('Главная страница') }), void 0), _jsx(AppLink, __assign({ to: "/about", theme: AppLinkTheme.SECONDARY }, { children: t('О сайте') }), void 0)] }), void 0) }), void 0));
};
