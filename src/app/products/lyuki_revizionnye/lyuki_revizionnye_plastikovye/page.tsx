import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
const { slugify } = require('transliter');

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/ljuki`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export default async function Page() {
    const data = await getData();

    const products = data
    .filter(({type}: {type: string}) => type === 'plastic')
    .map((item: {title: string, slug: string}, index: number) => {

        return {
            "id": index,
            "title": item.title,
            "slug": item.slug
        }
    });

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products/lyuki_revizionnye">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Люки ревизионные пластиковые</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {products.map(({id, title, slug}: { id: number, title: string, slug: string }) => (
                            <li key={id + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/lyuki_revizionnye/lyuki_revizionnye_plastikovye/${slug}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/lyuki_revizionnye/lyuki_revizionnye_plastikovye/${slug}`}>Подробнее</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}