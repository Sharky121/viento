import Image from 'next/image';
import Link from 'next/link';
import logoPic from 'public/images/logo.svg';

type HeaderType = {
    customClassName: string;
}
  
export default function Header({customClassName}: HeaderType) {
    return (
        <header className={`${customClassName} page-header`}>
            <div className="page-header__container container">
                <button className="page-header__hamburger hamburger-menu">
                    <div className="hamburger-menu__ico">
                        <span className="hamburger-menu__line"></span>
                    </div>
                    <span className="hamburger-menu__text">Меню</span>
                </button>
                <Link className="page-header__logo logo" href="/">
                    <Image src={logoPic} alt="c" width={180} height={51} unoptimized/>
                </Link>

                <nav className="page-header__nav main-nav">
                    <ul className="main-nav__list">
                        <li className="main-nav__item">
                            <Link className="main-nav__link main-nav__link--catalog" href="/products">Каталог</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link className="main-nav__link main-nav__link" href="/contract_casting">Контрактное литье</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link className="main-nav__link" href="/about">О компании</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link className="main-nav__link" href="/contacts">Контакты и реквизиты</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link className="main-nav__link" href="https://rutube.ru/channel/10012641/" target="_blank">
                                Канал Rutube
                            </Link>
                        </li>
                    </ul>
                </nav>

                <a className="btn btn--primary page-header__download" href="" target="_blank">
                    Скачать каталог
                </a>
                
                <div className="page-header__contacts header-contacts">
                    <a className="header-contacts__phone" href="tel:4912701982">
                        <svg viewBox="0 0 1200 1200" width="34" height="34" aria-hidden="true" focusable="false">
                            <use xlinkHref="#ico-phone" x="0" y="0"></use>
                        </svg>
                        <span>(4912) <b>70-19-82<small>доб. 105</small></b></span>
                    </a>
                    <a className="header-contacts__address" href="/contacts">г. Рязань, ул. Петрова, д.10, офис 201</a>
                </div>
            </div>       
        </header>
    )
}