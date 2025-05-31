'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="page-main__content main-content">
            <div className="main-content__header content-header">
                <h2 className="content-header__title">Ошибка</h2>
                <p className="content-header__name">Что-то пошло не так</p>
            </div>

            <div className="error-container">
                <p>Произошла ошибка при загрузке страницы</p>
                <button
                    className="btn btn--outline"
                    onClick={() => reset()}
                >
                    Попробовать снова
                </button>
            </div>
        </div>
    );
} 