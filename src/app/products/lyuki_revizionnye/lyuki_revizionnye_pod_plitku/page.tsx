import Gallery from "@/app/components/gallery/gallery";
import styles from './style.module.scss';
import Tooltip from "@/app/components/tooltip/tooltip";

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/ljuki`);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}

export default async function Page() {
    const data = await getData();

    const product = data.find((element: any) => element.type === "plitka");

    const sizes: {
        article: string;
        sizes: {
            width: number;
            length: number;
        }; 
    }[] = [];

    for (let i = 10; i <= 100; i = i + 5) {
        for (let j = 10; j <= 100; j = j + 5) {
            sizes.push({
                "article": `${i}${j}`,
                 "sizes": { 
                    "width": Number(`${i}0`),
                    "length": Number(`${j}0`)
                }
            })
        }
    }

    console.log(product);

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href='/products/ljuki_revizionnye/' id="back-page">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Люки ревизионные стальные</p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={product.images} url={`/images/ljuki_revizionnye/lyuki_revizionnye_pod_plitku`}/>
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

                        {
                            product.description && (
                                <div className={styles.productDesc} dangerouslySetInnerHTML={{__html: product.description}} />
                            )
                        }

                        <div className={styles.sizes}>
                            <h3>Размеры</h3>
                            <ul className={styles.sizesList}>
                                {
                                    sizes
                                        .map(({article, sizes}: 
                                            {
                                                article: string, 
                                                sizes: {
                                                    width: number, 
                                                    length: number
                                                }
                                            }, 
                                            index: number) => (
                                        <li key={index} className={styles.sizesItem}>
                                            <Tooltip title={article} spec={sizes}/>
                                        </li>
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