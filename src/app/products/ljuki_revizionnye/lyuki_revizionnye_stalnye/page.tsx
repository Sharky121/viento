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

export default async function Page({ params }: any) {
    const data = await getData();

    const products = data
        .filter(({type}: {type: string}) => type === 'metal')
        .map((item: {title: string, slug: string}, index: number) => {

        console.log(item);

        return {
            "id": index,
            "title": item.title,
            "slug": item.slug,
            "s": slugify(item.title, '_')
        }
    });

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products/ljuki_revizionnye">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Люки ревизионные стальные</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {products.map(({id, title, slug}: { id: number, title: string, slug: string }) => (
                            <li key={id + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/ljuki_revizionnye/lyuki_revizionnye_stalnye/${slug}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/ljuki_revizionnye/lyuki_revizionnye_stalnye/${slug}`}>Подробнее</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}