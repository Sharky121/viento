import Gallery from "@/app/components/gallery/gallery";
const { slugify } = require('transliter');

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/vents`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

type ParamsType = {
    category: string;
    product: string;
}

export default async function Page({params}: {params: ParamsType}) {
    const data = await getData();

    const product = data
        .map((item: { title: string; }) => {
            return {
                slug: slugify(item.title, '_'),
                ...item
            }})
        .find(({slug}: {slug: string}) => slug === params.product);

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/reshetki_ventilyaczionnye/${params.category}`} id="back-page">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name"></p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={product.images} url={`/images/reshetki_ventilyaczionnye/${params.category}/${params.product}`}/>
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