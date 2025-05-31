import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
const { slugify } = require('transliter');

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/turbodeflektory`, {
        cache: 'no-store',
        next: { revalidate: 0 }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export default async function Page() {
    
    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href="/products">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">Турбодефлекторы</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">

                    </ul>
                </section>
            </div>
        </>
    )
}