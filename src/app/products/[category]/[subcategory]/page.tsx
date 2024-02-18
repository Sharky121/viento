import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/categories`);

    return response.json();
}

export default async function Page({ params: {category, subcategory} }: any) {
    const categories = await getData();

    const categoryData = categories.find((obj: { slug: any; }) => {
        return obj.slug === category;
    });

    const productsList = categoryData.subcategory.find((obj: { slug: any; }) => {
        return obj.slug === subcategory;
    });

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" id="back-page">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">{productsList.title}</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {productsList.products.map(({id, title, slug, product_image}: { id: string, title: string, product_image: string, slug: string }) => (
                            <li key={id + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/${subcategory}/${product_image}`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/${category}/${subcategory}/${slug}`}>Подробнее о товаре</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}
