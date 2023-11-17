import Link from "next/link";

export default async function Page({ params: {subcategory} }: any) {

    return (
        <>
            <h1>Catalog {subcategory}</h1>
        </>
    )
}