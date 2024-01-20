import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setAuthIsModalOpen] = useState(false);

    const handleModalToggle = useCallback(() => {
        setAuthIsModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                className={styles.links}
                onClick={handleModalToggle}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModalOpen} onClose={handleModalToggle}>
                bibaibaibiabiab iaibaibiabia ibaibaibaibaiba ibiaib iabiiab iaibaibaiab iiabiabiabib
            </Modal>
        </div>
    );
};
