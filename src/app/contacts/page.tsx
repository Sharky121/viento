import Script from 'next/dist/client/script';

export default function Page() {
    
    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" id="back-page">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Контакты</h2>
                </div>
                <div id="map"></div>
            </div>
            <Script strategy="beforeInteractive" src="https://api-maps.yandex.ru/v3/?apikey=35840616-b492-4206-8ff4-d366f778ac13&lang=ru_RU"/>
        </>
    )
}