import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
const { slugify } = require('transliter');

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/vents`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

type ParamsType = {
    category: string
}

export default async function Page({params}: {params: ParamsType}) {

    const slugToType: Record<string, string> = {
        "reshetki_ventilyaczionnye_plastikovye": "plastic",
        "reshetki_ventilyaczionnye_metallicheskie": "metal",
        "reshetki_dlya_mezhkomnatnykh_dverej": "door"
    }

    const data = await getData();

    const products = data
        .filter(({type}: {type: string}) => type === slugToType[params.category])
        .map((item: { title: string; }) => {
            return {
                slug: slugify(item.title, '_'),
                ...item
            }
        });

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products/reshetki_ventilyaczionnye">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Решетки вентиляционные</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {products.map(({title, slug}: { title: string, slug: string }, index: number) => (
                            <li key={index + uuidv4()} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={`/images/reshetki_ventilyaczionnye/${params.category}/${slug}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/reshetki_ventilyaczionnye/${params.category}/${slug}`}>Подробнее</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}