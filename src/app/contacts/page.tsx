import Script from 'next/dist/client/script';

export default function Page() {
    
    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" id="back-page">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Контакты</h2>
                </div>
                <div className="main-content__contacts contacts">
                    <div className="contacts__col">
                        <dl className="address__list">
                            <dt className="address__term">Наименование:</dt>
                            <dd className="address__definition">ООО ТД «ВИЕНТО»</dd>

                            <dt className="address__term">Юридический адрес:</dt>
                            <dd className="address__definition">390000, Рязанская область, г. Рязань, ул. Петрова, д.10, офис 201</dd>

                            <dt className="address__term">Фактический адрес:</dt>
                            <dd className="address__definition">390000, Рязанская область, г. Рязань, ул. Петрова, д.10, офис 201</dd>

                            <dt className="address__term">Адрес склада:</dt>
                            <dd className="address__definition">390000, Рязанская область, г. Рязань, ул.Связи, 25 стр 2</dd>

                            <dt className="address__term">Почтовый адрес:</dt>
                            <dd className="address__definition">390000, РФ, г. Рязань, ул. Петрова, д.10, офис 201</dd>

                            <dt className="address__term">ИНН/КПП:</dt>
                            <dd className="address__definition">6234173828/623401001</dd>

                            <dt className="address__term">ОГРН/ОКПО:</dt>
                            <dd className="address__definition">1176234028520/20301838</dd>

                            <dt className="address__term">№ Расч.счёта:</dt>
                            <dd className="address__definition">40702810953000005029</dd>

                            <dt className="address__term">Наименование банка:</dt>
                            <dd className="address__definition">ПАО Сбербанк</dd>

                            <dt className="address__term">БИК:</dt>
                            <dd className="address__definition">046126614</dd>

                            <dt className="address__term">Корр.счёт банка</dt>
                            <dd className="address__definition">30101810500000000614</dd>

                            <dt className="address__term">Руководитель предприятия:</dt>
                            <dd className="address__definition">Директор Тамбовцев Ростислав Юрьевич</dd>

                            <dt className="address__term">Телефон/факс:</dt>
                            <dd className="address__definition">
                                <a href="tel:+74912701982">+7 (4912) 70-19-82 доб. 105</a>
                            </dd>

                            <dt className="address__term">E-mail:</dt>
                            <dd className="address__definition">
                                <a href="mailto:info@viento.pro">info@viento.pro</a>
                            </dd>
                        </dl>
                    </div>
                    <div className="contacts__col">
                        <dl className="address__list">
                            <dt className="address__term">Наименование:</dt>
                            <dd className="address__definition">ООО «БАУ-ТРЕЙД»</dd>

                            <dt className="address__term">Юридический адрес:</dt>
                            <dd className="address__definition">191011, г. Санкт-Петербург, ул. Садовая д.14/52 лит. А пом. 15-Н</dd>

                            <dt className="address__term">Фактический адрес:</dt>
                            <dd className="address__definition">196642, г. Санкт-Петербург, ул. Софийская, 125, корпус 4</dd>

                            <dt className="address__term">Адрес склада:</dt>
                            <dd className="address__definition">390000, Рязанская область, г. Рязань, ул.Связи, 25 стр 2</dd>

                            <dt className="address__term">ИНН/КПП:</dt>
                            <dd className="address__definition">7841046648/784101001</dd>

                            <dt className="address__term">ОГРН/ОКПО:</dt>
                            <dd className="address__definition">1167847384044/04835138</dd>

                            <dt className="address__term">ОКАТО:</dt>
                            <dd className="address__definition">40298561000</dd>

                            <dt className="address__term">ОКТМО:</dt>
                            <dd className="address__definition">40908000000</dd>

                            <dt className="address__term">№ Расч.счёта:</dt>
                            <dd className="address__definition">40702810155000039397</dd>

                            <dt className="address__term">Наименование банка:</dt>
                            <dd className="address__definition">Дополнительный офис № 9055/01726 ПАО «Сбербанк»</dd>

                            <dt className="address__term">БИК:</dt>
                            <dd className="address__definition">044030653</dd>

                            <dt className="address__term">Корр.счёт банка</dt>
                            <dd className="address__definition">3010181050000000065</dd>

                            <dt className="address__term">Руководитель предприятия:</dt>
                            <dd className="address__definition">Директор Тамбовцев Ростислав Юрьевич</dd>

                            <dt className="address__term">Телефон:</dt>
                            <dd className="address__definition">
                                <a href="tel:+78122130321">+7 (812) 21-303-21</a>
                            </dd>

                            <dt className="address__term">E-mail:</dt>
                            <dd className="address__definition">
                                <a href="mailto:bautrade@viento.pro">bautrade@viento.pro</a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <Script strategy="beforeInteractive" src="https://api-maps.yandex.ru/v3/?apikey=35840616-b492-4206-8ff4-d366f778ac13&lang=ru_RU"/>
        </>
    )
}