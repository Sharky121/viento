import Link from "next/link";
const { slugify } = require('transliter');

export default async function Page() {

    const slug = slugify("Решетки вентиляционные", '_');

    const pr = [
        "Системы металлических воздуховодов",
        "Воздуховоды гибкие",
        "Площадки торцевые",
        "Турбодефлекторы",
        "Лента монтажная, хомуты металлические"
    ];
    
    const slugPr = pr.map((el) => slugify(el, '_'));
 
    console.log(slugPr);

    return (
        <>
            <h1>Products</h1>
        </>
    )
}