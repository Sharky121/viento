import Gallery from "@/app/components/gallery/gallery";
const { slugify } = require('transliter');

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/anemostats`, {
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export default async function Page({ params }: { params: { category: string } }) {
    const products = await getData();
    const product = products.find((p: any) => p.slug === params.category);

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products/anemostaty">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">{product.title}</p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={product.images} url={`/images/products/anemostaty/${product.slug}`}/>
                        </div>
                        <div className="product__description product-description">
                            <h1 className="product-description__title">
                                {product.title}
                            </h1>

                            <ul className="product-description__list">
                                {product.features.map((item: string, index: number) => (
                                    <li key={index} className="product-description__item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
} 