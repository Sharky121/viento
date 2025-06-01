import Gallery from "@/app/components/gallery/gallery";

export default async function Page() {
    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/ventilyatory_osevye_bytovye/`}>Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Обратный клапан универсальный</p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={["image_1.png"]} url={`/images/ventilyatory_osevye_bytovye/obratnyj_klapan_universalnyj`}/>
                        </div>
                        <div className="product__description product-description">
                            <h1 className="product-description__title">Обратный клапан универсальный</h1>
                            <ul className="product-description__list">
                                <li className="product-description__item">Обратный клапан универсальный предназначен для защиты от обратной тяги вытяжных вентиляторов</li>
                                <li className="product-description__item">Подпружиненный механизм позволяет легко возвращать лепестки клапана в исходное положение и плотно перекрывать воздушный поток</li>
                                <li className="product-description__item">Универсальный клапан подходит ко всем типам вентиляторов благодаря многоступенчатой форме кольца</li>
                                <li className="product-description__item">Диаметры: 100мм, 120мм, 125мм, 150мм</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
