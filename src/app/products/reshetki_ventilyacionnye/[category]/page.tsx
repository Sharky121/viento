import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
const { slugify } = require('transliter');

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/reshetki_ventilyacionnye`, {cache: 'no-store'});

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}

export default async function Page({ params }: { params: { category: string } }) {
    // const products = await getData();

    // const categories = products.find((p: any) => p.slug === params.category);

    // if (!categories) {
    //     return <div>Продукт не найден</div>;
    // }

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/${params.category}`}>Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Решетки вентиляционные</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {/* {categories.items.map(({title, slug}: { title: string, slug: string }, index: number) => (
                            <li key={index + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/products/reshetki_ventilyacionnye/${categories.slug}/${slug}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/reshetki_ventilyacionnye/${categories.slug}/${slug}`}>Подробнее</Link>
                            </li>
                        ))} */}
                    </ul>
                </section>
            </div>
        </>
    )
}