import Link from "next/link";

type SiteMenuType = {
    customClassName: string;
}

type ProductType = {
    id: string;
    title: string;
    slug: string;
}

// async function getData() {
//     const response = await fetch(`${process.env.HOST}/api/categories`);

//     return response.json();
// }

export default async function SiteMenu({customClassName}: SiteMenuType) {
    // const products = await getData();

    return (
        <div className={`${customClassName} site-menu`}>
            <h3 className="site-menu__title">Я ищу изделия в категории:</h3>

            <ul className="site-menu__list">
                {/* {products.map((product: ProductType) => (
                    <li key={product.id} className="site-menu__item menu-item">
                        <Link className="menu-item__link" href="">{product.title}</Link>
                    </li>
                ))} */}
            </ul>
        </div>
    )
}