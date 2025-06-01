import Link from 'next/link';
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/exhaust`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export default async function Page({ params }: any) {
    const data = await getData();

    const productData = data.filter((obj: { type: string; }) => {
        return obj.type === params.subcategories;
    });

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/ventilyatory_osevye_bytovye/ventilyatory_vytyazhnye_viento`}>Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Вентиляторы вытяжные</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {productData.map(({id, title, slug}: { id: number, title: string, slug: string }) => (
                            <li key={id + uuidv4()} className="product-cards__item product-card">
                                
                                <div className="product-card__img">
                                    <Image src={`/images/ventilyatory_osevye_bytovye/ventilyatory_vytyazhnye_viento/${params.subcategories}/${slug}/index.png`} width="180" height="180" alt="Фото продукта"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/ventilyatory_osevye_bytovye/ventilyatory_vytyazhnye_viento/${params.subcategories}/${slug}`}>Подробнее</Link>
                            </li>
                        ))} 
                    </ul>
                </section>
            </div>
        </>
    )
}