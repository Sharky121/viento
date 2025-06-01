import Gallery from "@/app/components/gallery/gallery";
const { slugify } = require('transliter');

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/mounting-tape`, {
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export default async function Page({ params }: { params: { category: string } }) {


    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products/lenta_montazhnaya">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name"></p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                        </div>
                        <div className="product__description product-description">
                            <h1 className="product-description__title">
                               
                            </h1>

                            <ul className="product-description__list">

                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
} 