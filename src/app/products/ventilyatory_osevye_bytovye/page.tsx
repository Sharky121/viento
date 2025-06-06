import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        "id": "1",
        "title": "Вентиляторы вытяжные STILL",
        "slug": "ventilyatory_vytyazhnye_still"
    },
    {
        "id": "2",
        "title": "Вентиляторы вытяжные ВИЕНТО",
        "slug": "ventilyatory_vytyazhnye_viento"
    },
    {
        "id": "3",
        "title": "Вентиляторы вытяжные ВИЕНТО System+",
        "slug": "ventilyatory_vytyazhnye_viento_system_plus"
    },
    {
        "id": "4",
        "title": "Вентиляторы канальные VKO",
        "slug": "ventilyatory_kanalnye_vko"
    },
    {
        "id": "5",
        "title": "Вентиляторы потолочные",
        "slug": "ventilyatory_potolochnye"
    },
    {
        "id": "6",
        "title": "Обратный клапан универсальный",
        "slug": "obratnyj_klapan_universalnyj"
    }
]

export default async function Page() {
    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Вентиляторы осевые бытовые</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {data.map(({id, title, slug}: { id: string, title: string, slug: string }) => (
                            <li key={id + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/ventilyatory_osevye_bytovye/${slug}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/ventilyatory_osevye_bytovye/${slug}`}>Подробнее</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}