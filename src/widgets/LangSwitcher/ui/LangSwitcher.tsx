import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import React from 'react';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Button } from 'shared/ui/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    isShort?: boolean;
}

export const LangSwitcher = ({ className, isShort }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleTranslation = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleTranslation}
        >
            {t(isShort ? 'Короткий язык' : 'Русский')}
        </Button>
    );
};
