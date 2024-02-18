import Image from "next/image";
import Gallery from "@/app/components/gallery/gallery";
import { v4 as uuidv4 } from 'uuid';

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/categories`);

    return response.json();
}

export default async function Page({ params: {category, subcategory, product} }: any) {
    const categories = await getData();

    const categoryData = categories.find((obj: { slug: any; }) => {
        return obj.slug === category;
    });

    const productsList = categoryData.subcategory.find((obj: { slug: any; }) => {
        return obj.slug === subcategory;
    });

    const productData = productsList.products.find((obj: { slug: any; }) => {
        return obj.slug === product;
    });

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" id="back-page">Назад</a>
                
                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={productData.images} url={`/images/${subcategory}/${product}`}/>
                        </div>
                        <div className="product__description product-description">
                            <h1 className="product-description__title">{productData.title}</h1>
                            <p className="product-description__text">{productData.description}</p>
                            <ul className="product-description__list">
                                {
                                    productData.specifications.map((item: string, index: string) => (
                                        <li key={index + uuidv4()} className="product-description__item">{item}</li>
                                    ))
                                }
                            </ul>
                            <ul className="product-description__list">
                                {
                                    productData.features.map((item: string, index: string) => (
                                        <li key={index + uuidv4()} className="product-description__item">{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="product__content">
                            <div className="product-parameters">
                                <h2 className="product-parameters__title">Технические характеристики</h2>

                                <ul className="product-parameters__list">
                                    {
                                        productData.parameters.map(({slug, title}: any, index: string) => (
                                            <li key={index + uuidv4()} className={`product-parameters__item product-parameters__item--${slug}`}>{title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}