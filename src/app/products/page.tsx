import Link from "next/link";
const { slugify } = require('transliter');

export default async function Page() {

    const slug = slugify("Решетки вентиляционные", '_');

    const pr = [
        "Решетки вентиляционные пластиковые",
        "Решетки вентиляционные металлические",
        "Решетки для межкомнатных дверей"
    ];
    
    const slugPr = pr.map((el) => slugify(el, '_'));
 
    console.log(slugPr);

    return (
        <>
            <h1>Products</h1>
        </>
    )
}