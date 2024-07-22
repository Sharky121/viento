
import Image from 'next/image';
import Link from 'next/link';
const fs = require('fs');
import ProdPic_1 from 'public/images/prod_1.png';
import ProdPic_2 from 'public/images/prod_2.png';
import ProdPic_3 from 'public/images/prod_3.png';
import ProdPic_4 from 'public/images/prod_4.png';
import AboutPic from 'public/images/about.jpg';

export default function Page() {
    return (
        <>
            <section className="main-content__welcome welcome">
                <div className="welcome__wrapper">
                    <div className="welcome__box">
                        <h2 className="welcome__title">Вентиляционные cистемы</h2>
                        <p className="welcome__text">Современное европейское оборудование и независимая 3-х уровневая система контроля гарантирует
                            100% качество изделий</p>
                        <p className="welcome__text">Всё о разборной системе каналов 55*110 PLUS</p>
                        <a className="welcome__btn btn btn--primary" id="video">Смотреть видео</a>
                    </div>
                </div>
            </section>
            <section className="main-content__product-cards product-cards">
                <h2 className="product-cards__title">Популярные товары</h2>
                <ul className="product-cards__list">
                    <li className="product-cards__item product-card">
                        <Image className="product-card__img" height={135} src={ProdPic_1} alt=""/>
                        <h3 className="product-card__title">Люк-дверца ревизионная, нержавеющая сталь, матовый с замком, серии ДРНМЗ</h3>
                        <Link className="product-card__btn btn btn--outline" href="">Подробнее о товаре</Link>
                    </li>
                    <li className="product-cards__item product-card">
                        <Image className="product-card__img" height={135} src={ProdPic_2} alt=""/>
                        <h3 className="product-card__title">Люк-дверца ревизионная нержавеющая сталь, </h3>
                        <Link className="product-card__btn btn btn--outline" href="">Подробнее о товаре</Link>
                    </li>
                    <li className="product-cards__item product-card">
                        <Image className="product-card__img" height={135} src={ProdPic_3} alt=""/>
                        <h3 className="product-card__title">Люк-дверца ревизионная нержавеющая сталь, полированный с</h3>
                        <Link className="product-card__btn btn btn--outline" href="">Подробнее о товаре</Link>
                    </li>
                    <li className="product-cards__item product-card">
                        <Image className="product-card__img" height={135} src={ProdPic_4} alt=""/>
                        <h3 className="product-card__title">Люк-дверца ревизионная </h3>
                        <Link className="product-card__btn btn btn--outline" href="">Подробнее о товаре</Link>
                    </li>
                </ul>
            </section>
            <section className="page-main__about about">
                <div className="about__container">
                    <div className="about__left">
                        <Image width={360} height={295} src={AboutPic} alt="Чертеж вентиляции"/>
                    </div>
                    <div className="about__right">
                        <h2 className="about__title">Компания «Виенто» начала свою деятельность в 2014 году</h2>
                        <p className="about__text">Входит в состав холдинга «Альянс Групп» динамично развивается, имеет несколько направлений деятельности, одной из которой является производство систем вентиляции различного назначения.
                            Имеет собственную производственную базу и организованную логистику, связанную с широкой сетью сбыта на территории Российской Федерации, СНГ и зарубежья.</p>
                        <p className="about__text">Цель нашей компании: проектирование и изготовление качественного инновационного продукта, честные и открытые отношения со всеми перспективными партнерами, клиентами и сотрудниками.</p>
                        <Link className="about__btn btn btn--outline" href="/about">Подробнее о компании</Link>
                    </div>
                </div>
            </section>
            <section className="page-main__callback callback">
                <div className="callback__container">
                    <h2 className="callback__title">Не нашли, что искали или остались вопросы?</h2>
                    <p className="callback__subtitle">Отправьте сообщение, наш менеджер перезвонит и проконсультирует вас по любым вопросам, связанными с подбором оптимального решения.</p>
                    <form className="callback__form callback-form" id="callback-form" action="callbackForm">
                        <ul className="callback-form__list">
                            <li className="callback-form__item form-field">
                                <label className="form-field__label visually-hidden" htmlFor="name">Имя</label>
                                <input className="form-field__input" id="name" name="name" type="text" placeholder="Имя" required />
                            </li>
                            <li className="callback-form__item form-field">
                                <label className="form-field__label visually-hidden" htmlFor="phone">Ваш номер телефона</label>
                                <input className="form-field__input" id="phone" name="phone" type="tel" placeholder="Ваш номер телефона" required/>
                            </li>
                            <li className="callback-form__item">
                                <button className="callback-form__btn btn" type="submit">Отправить</button>
                            </li>
                        </ul>
                        <p className="callback-form__confirm">
                            <label className="checkbox" htmlFor="confirm-form">
                                <input className="checkbox__input" id="confirm-form" name="confirm-form" type="checkbox"/>
                                <span className="checkbox__text">нажимая кнопку «Отправить» я подтверждаю, что ознакомлен и согласен с политикой <br/> конфиденциальности и обработки персональных данных</span>
                            </label>
                        </p>
                    </form>
                </div>
            </section>
        </>
    )
}