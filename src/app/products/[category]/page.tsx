import Image from "next/image";
import Link from "next/link";
import NoPhotoPic from 'public/images/no-photo.svg';

type PageType = {
    params: {
        slug: string;
        title: string;
    }
}

type CategoryType = {
    subcategory: any;
    id: string;
    title: string;
    slug: string;
}

async function getData() {
    const response = await fetch(`${process.env.HOST}/api/categories`, {
        next: {
            revalidate: 60
        }
    });

    return response.json();
}

// export async function generateStaticParams() {
//     const categories = await fetch(`${process.env.HOST}/api/categories`).then((res) => res.json())
   
//     return categories.map((category: CategoryType) => ({
//         category: category.slug,
//         subcategory: category.subcategory,
//     }));
// }

export default async function Page({ params: {category} }: any) {
    const categories = await getData();

    const categoryData = categories.find((obj: { slug: any; }) => {
        return obj.slug === category;
    })

    const getPhotoProduct = (image: string) => {
        return image.length 
            ? `public/images/${category}/${image}` 
            : "public/images/no-photo.svg"
    }

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" id="back-page">Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">{categoryData.title}</p>
                </div>

                <section className="main-content__product-cards product-cards">
                    <ul className="product-cards__list">
                        {categoryData.subcategory.map(({id, title, slug, image}: { id: string, title: string, image: string, slug: string }) => (
                            <li key={id} className="product-cards__item product-card">
                                <div className="product-card__img">
                                    <Image src={getPhotoProduct(image)} width="70" height="70" alt="Нет фото"/>
                                </div>
                    
                                <h3 className="product-card__title">{title}</h3>
                                <Link className="product-card__btn btn btn--outline" href={`/products/${category}/${slug}`}>Подробнее о товаре</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}