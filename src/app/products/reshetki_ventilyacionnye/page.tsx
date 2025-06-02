import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/ventilation-grilles`, {
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export default async function Page() {
    const products = await getData();

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Решетки вентиляционные</p>
                </div>

                <section className="main-content__catalog catalog">
                    <div className="catalog__container">
                        {products.map((product: any) => (
                            <div key={uuidv4()} className="catalog__item catalog-item">
                                <div className="catalog-item__image">
                                    <Image
                                        src={`/images/products/reshetki_ventilyacionnye/${product.slug}/index.png`}
                                        alt={product.title}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <h3 className="catalog-item__title">{product.title}</h3>
                                <Link href={`/products/reshetki_ventilyacionnye/${product.slug}`} className="catalog-item__link">
                                    Подробнее
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
} 