const { slugify } = require('transliter');

import Gallery from "@/app/components/gallery/gallery";

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/shkafy-kollektornye`, {
        cache: 'no-store',
        next: { revalidate: 0 }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

type ParamsType = {
    slug: string;
}

export default async function Page({params}: {params: ParamsType}) {
    const data = await getData();

    const product = data.find(({title}: {title: string}) => slugify(title, '_') === params.slug);

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/shkafy_kollektornye/`} id="back-page">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">{product.title}</p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={product.images} url={`/images/products/shkafy_kollektornye/${params.slug}`}/>
                        </div>
                        <div className="product__description product-description">
                            <h1 className="product-description__title">
                                {product.title}
                            </h1>

                            <ul className="product-description__list">
                                {
                                    product.features.map((item: string, index: string) => (
                                        <li key={index} className="product-description__item">{item}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* <div className={styles.productDesc} dangerouslySetInnerHTML={{__html: product.description}} /> */}
                    </div>
                </section>
            </div>
        </>
    )
}