import Link from "next/link";
import Image from 'next/image';
import logoPicWhite from 'public/images/logo-white.svg';

type FooterType = {
    customClassName: string;
}

const Footer = ({customClassName}: FooterType) => {
        return (
            <footer className={`${customClassName} page-footer`}>
                <div className="page-footer__container container">
                    <div className="page-footer__left">
                        <div className="page-footer__nav footer-nav">
                            <ul className="footer-nav__list">
                                <li className="footer-nav__item">
                                    <Link className="footer-nav__link" href="/">Главная</Link>
                                </li>
                                <li className="footer-nav__item">
                                    <Link className="footer-nav__link" href="/catalog"><b>Каталог</b></Link>
                                </li>
                                <li className="footer-nav__item">
                                    <Link className="footer-nav__link" href="/about">О компании</Link>
                                </li>
                                <li className="footer-nav__item">
                                    <Link className="footer-nav__link" href="/contacts">Контакты и реквизиты</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="page-footer__contacts footer-contacts">
                            <div className="footer-contacts__col">
                                <p>
                                    <b>Юридический адрес:</b>
                                    <span>390000, Рязанская область, г. Рязань, ул. Петрова, д.10, офис 201</span>
                                </p>
                                <p>
                                    <b>E-mail:</b>
                                    <a href="mailto:info@viento.pro">info@viento.pro</a>
                                </p>
                            </div>
                            <div className="footer-contacts__col">
                                <p>
                                    <b>Адрес склада:</b>
                                    <span>390000, Рязанская область, г. Рязань, ул.Связи, 25 стр. 2</span>
                                </p>
                                <p>
                                    <b>Телефон:</b>
                                    <a href="tel:+4912701982">+7 (4912) 70-19-82 доб. 105</a>
                                </p>
                            </div>
                        </div>
                        <p className="page-footer__copyright">
                            Вся представленная на сайте информация, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437(2) Гражданского кодекса РФ.
                            Политика конфиденциальности и политика обработки персональных данных. Все права защищены и принадлежат ООО «Альянс Групп».  Сайт создан в SharkostanStudio © 2022.
                        </p>
                    </div>
                    <div className="page-footer__right">
                        <div className="page-footer__logo footer-logo">
                            <Link className="footer-logo__link" href="/">
                                <Image src={logoPicWhite} width={180} height={51} alt="Логотип Виенто"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        )
}

export default Footer;