import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
const { slugify } = require('transliter');

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/vozdukhovody`, {cache: 'no-store'});

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}

export default async function Page() {
    const data = await getData();
    
    const products = data.filter((element: {type: string}) => element.type === 'sistemy_plastikovykh_vozdukhovodov'); 
    
    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Системы пластиковых воздуховодов</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {products.map(({title}: { title: string }, index: number) => (
                            <li key={index + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/products/sistemy_plastikovykh_vozdukhovodov/${slugify(title, '_')}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/sistemy_plastikovykh_vozdukhovodov/${slugify(title, '_')}`}>Подробнее</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}