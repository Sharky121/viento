import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
const { slugify } = require('transliter');

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/vozdukhovody-plastic`, {cache: 'no-store'});

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

type ParamsType = {
    category: string;
    subcategory: string;
}

export default async function Page({params}: {params: ParamsType}) {
    // const data = await getData();

    // const category = data.find((p: any) => p.slug === params.category);

    // const subcategory = category.items.find((p: any) => p.slug === params.subcategory);

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/sistemy_plastikovykh_vozdukhovodov/${params.category}`}>Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    {/* <p className="content-header__name">{subcategory.title}</p> */}
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {/* {subcategory.items.map(({title, slug, poster}: { title: string, slug: string, poster: string }, index: number) => (
                            <li key={index + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/products/sistemy_plastikovykh_vozdukhovodov/${params.category}/${params.subcategory}/${slugify(title, '_')}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/sistemy_plastikovykh_vozdukhovodov/${params.category}/${params.subcategory}/${slugify(title, '_')}`}>Подробнее</Link>
                            </li>
                        ))} */}
                    </ul>
                </section>
            </div>
        </>
    )
}