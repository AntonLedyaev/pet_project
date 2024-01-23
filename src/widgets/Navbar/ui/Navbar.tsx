import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setAuthIsModalOpen] = useState(false);

    const handleModalClose = useCallback(() => {
        setAuthIsModalOpen(false);
    }, []);

    const handleModalOpen = useCallback(() => {
        setAuthIsModalOpen(true);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                className={styles.links}
                onClick={handleModalOpen}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal isOpen={isAuthModalOpen} onClose={handleModalClose} />
        </div>
    );
};
