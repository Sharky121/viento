import Gallery from '@/app/components/gallery/gallery';
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/still`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

type SizeInfoType = {
    title: string,
    src: string
}

type SizesMapType = {
    [key: string]: SizeInfoType
}

const sizesMap: SizesMapType = {
    "width": {
        "title": "Ширина",
        "src": "ico-width"
    },
    "length": {
        "title": "Длина",
        "src": "ico-height"
    },
    "depth": {
        "title": "Глубина",
        "src": "ico-depth"
    },
    "full_depth": {
        "title": "Глубина",
        "src": "ico-full-depth"
    },
    "diameter": {
        "title": "Диаметр",
        "src": "ico-diameter"
    }
}


export default async function Page({ params }: any) {
    const data = await getData();

    const productData = data.find((obj: { slug: any; }) => {
        return obj.slug === params.product;
    });

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/vents/ventilyatory_vytyazhnye_still/${params.subcategories}`}>Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Вентиляторы вытяжные STILL</p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={productData.images} url={`/images/vents/ventilyatory_vytyazhnye_still/${params.subcategories}/${params.product}`}/>
                        </div>
                        <div className="product__description product-description">
                            <h1 className="product-description__title">{productData.title} <br /> 
                                <span>Доступные цвета: {productData.color.join(', ') + '.'}
                                </span>
                            </h1>
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
                            {productData.sizes && (
                                <div className="product__sizes product-sizes">
                                    <h3 className="product-sizes__title">Размеры:</h3>
                                    <ul className="product-sizes__list">
                                        {
                                            Object
                                                .entries(productData.sizes)
                                                .map(([key, value], index: number) => (
                                                    <li key={index + uuidv4()} className="product-sizes__item product-size">
                                                        <Image src={`/images/${sizesMap[key].src}.png`} width="40" height="40" alt="Иконка"/>

                                                        <p className="product-size__value">{String(value)}</p>
                                                        <h3 className="product-size__title">{sizesMap[key].title} (мм)</h3>
                                                    </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}