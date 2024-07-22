import Gallery from '@/app/components/gallery/gallery';
import { v4 as uuidv4 } from 'uuid';

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/roof`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export default async function Page({ params }: any) {
    const data = await getData();

    const productData = data.find((obj: { slug: any; }) => {
        return obj.slug === params.product;
    });

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/vents/ventilyatory_potolochnye/${params.subcategories}`}>Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Вентиляторы канальные VKO</p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={productData.images} url={`/images/vents/ventilyatory_potolochnye/${params.subcategories}/${params.product}`}/>
                        </div>
                        <div className="product__description product-description">
                            <h1 className="product-description__title">{productData.title}</h1>
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
                    </div>
                </section>
            </div>
        </>
    )
}