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
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { Button } from 'shared/ui/Button';
import styles from './LangSwitcher.module.scss';
export var LangSwitcher = function (_a) {
    var className = _a.className;
    var _b = useTranslation(), t = _b.t, i18n = _b.i18n;
    var toggleTranslation = function () {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (_jsx(Button, __assign({ className: classNames(styles.LangSwitcher, {}, [className]), theme: ThemeButton.CLEAR, onClick: toggleTranslation }, { children: t('Язык') }), void 0));
};
