import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

const Products = [
    {
        title: "Вентиляторы со съемной панелью в сборе Виенто SYSTEM+ серии LUNA, Ø100",
        slug: "ventilyatory_vytyazhnye_viento_system_plus_100_luna",
        subcategories: [
            {
                id: 1,
                title: "Тип панели SFERA",
                slug: "system_plus_100_luna_sfera"
            },
            {
                id: 2,
                title: "Тип панели GORIZONT",
                slug: "system_plus_100_luna_gorizont"
            },
            {
                id: 3,
                title: "Тип панели INSIDE, под плитку",
                slug: "system_plus_100_luna_inside"
            }
        ]
    },
    {
        title: "Лицевые панели для вентиляторов SYSTEM+, Ø100",
        slug: "licevye_paneli_dlya_ventilyatorov",
        subcategories: [
            {
                id: 1,
                title: "Тип панели SFERA",
                slug: "licevye_paneli_sfera"
            },
            {
                id: 2,
                title: "Тип панели GORIZONT",
                slug: "licevye_paneli_gorizont"
            },
            {
                id: 3,
                title: "Тип панели INSIDE, под плитку",
                slug: "licevye_paneli_inside"
            }
        ]
    },
    {
        title: "Корпуса вентиляторов Виенто SYSTEM+, Ø100",
        slug: "korpusa_ventilyatorov_viento_system_plus_100",
        subcategories: [
            {
                id: 1,
                title: "Серия КВС",
                slug: "seria_kvs"
            }
        ]
    }
];

export default async function Page({ params }: any) {
    const products = Products.filter((item) => item.slug === params.subcategories);

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/ventilyatory_osevye_bytovye/ventilyatory_vytyazhnye_viento_system_plus/`}>Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">{products[0].title}</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {products[0].subcategories.map(({id, title, slug}: { id: number, title: string, slug: string }) => (
                            <li key={id + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/ventilyatory_osevye_bytovye/ventilyatory_vytyazhnye_viento_system_plus/${params.subcategories}/${slug}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/ventilyatory_osevye_bytovye/ventilyatory_vytyazhnye_viento_system_plus/${params.subcategories}/${slug}`}>Подробнее</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}