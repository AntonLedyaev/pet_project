import { useEffect, useState } from 'react';
import { Button } from 'shared/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования ErrorBoundary
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('Выбросить ошибку')}
        </Button>
    );
};
