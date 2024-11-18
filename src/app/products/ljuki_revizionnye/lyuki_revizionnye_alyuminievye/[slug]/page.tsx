import Gallery from "@/app/components/gallery/gallery";
import styles from './style.module.scss';
import Tooltip from "@/app/components/tooltip/tooltip";

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/ljuki`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export default async function Page({params}: any) {
    const data = await getData();

    const product = data.find((element: any) => element.slug ===  params.slug);

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href='/products/ljuki_revizionnye/lyuki_revizionnye_alyuminievye/' id="back-page">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Люки ревизионные алюминиевые</p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={product.images} url={`/images/ljuki_revizionnye/lyuki_revizionnye_alyuminievye/${params.slug}`}/>
                        </div>
                        <div className="product__description product-description">
                            <h1 className="product-description__title">
                                {product.title}
                            </h1>

                            <ul className={styles.featuresList}>
                                {
                                    product.features.map((item: string, index: string) => (
                                        <li key={index} className="product-description__item">{item}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className={styles.productDesc} dangerouslySetInnerHTML={{__html: product.description}} />
                    </div>
                </section>
            </div>
        </>
    )
}