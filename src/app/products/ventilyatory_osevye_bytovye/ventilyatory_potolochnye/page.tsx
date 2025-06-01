import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
const { transliter, slugify, isCyrillic } = require('transliter');

const products = [
    {
        title: "Вентиляторы потолочные 100",
        type: 100
    },
    {
        title: "Вентиляторы потолочные 125",
        type: 125
    },
];

const data = products.map(({title, type}, index) => {
    return {
        "id": index,
        "title": title,
        "type": type,
        "slug": slugify(title, '_')
    }
});

export default async function Page() {
    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products/ventilyatory_osevye_bytovye">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Вентиляторы потолочные</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {data.map(({id, title, slug}: { id: number, title: string, slug: string }) => (
                            <li key={id + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/ventilyatory_osevye_bytovye/ventilyatory_potolochnye/${slug}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/ventilyatory_osevye_bytovye/ventilyatory_potolochnye/${slug}`}>Подробнее</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}