import Gallery from '@/app/components/gallery/gallery';
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import styles from "./product.module.scss";

interface ISpec {
    title: string,
    value: string
}

interface IEquipment {
    term: string,
    desc: string
}

interface IProduct {
    id: number,
    title: string,
    slug: string,
    color: string,
    specifications: ISpec[],
    features: string[],
    images: string[],
    equipment?: IEquipment[]
}

const Products = [
    {
        "id": 1,
        "title": "Тип панели SFERA",
        "slug": "system_plus_100_luna_sfera",
        "color": ["белый", "серый", "слоновая кость", "красный", "золотой", "хром"],
        "specifications": [
            {
                "title": "Максимальный расход бытовых помещений воздуха, м3/ч",
                "value": "105"
            },
            {
                "title": "Уровень звукового давления, dB",
                "value": "26"
            },
            {
                "title": "Напряжение, В",
                "value": "220-240"
            },
            {
                "title": "Частота, Гц",
                "value": "50"
            },
            {
                "title": "Потребляемая мощность, Вт",
                "value": "13"
            },
            {
                "title": "Класс защиты (IP)",
                "value": "24"
            },
            {
                "title": "Масса, кг",
                "value": "0,5"
            }
        ],
        "features": [
            "Вентиляторы Виенто серии LUNA применяются для постоянной или периодической вытяжной вентиляции бытовых помещений",
            "Эстетичный дизайн",
            "Изготавливаются из ABS-пластика",
            "Двигатель на шарикоподшипнике, что обеспечивает долговечный потолочный монтаж",
            "Передняя крыльчатка с подкрученными лопастями",
            "Пониженный уровень шума",
            "Высокая производительность вентилятора",
            "Корпус вентилятора оснащен световым индикатором работы",
            "Жесткий укороченный фланец, не подверженный деформации",
            "Удобная полноцветная коробка с европодвесом и ревизионным окошком",
            "Монтаж при помощи шурупов",
            "Возможные комплектации: прямая панель, изогнутая панель, лицевая панель под плитку"
        ],
        "images": [
            "image_1.png",
            "image_2.png",
            "image_3.png"
        ]
    },
    {
        "id": 2,
        "title": "Тип панели SFERA",
        "slug": "licevye_paneli_sfera",
        "color": ["белый", "белый матовый", "черный", "черный матовый", "серый", "слоновая кость", "слоновая кость матовый", "красный", "золотой", "хром"],
        "features": [
            "Лицевые панели используются для декорирования корпуса вентилятора серии КВС",
            "Очень удобно при оформлении витрин и экономии складского пространства. Вам не нужно «плодить» множество комбинаций артикулов. Достаточно корпус с возможной опцией, плюс панель на выбор",
            "Изготавливаются из ABS-пластика",
            "Надежное крепление к корпусу вентилятора, что важно при потолочном монтаже",
            "Удобная полноцветная коробка с европодвесом и ревизионным окошком",
            "Возможные комплектации: пластик, стекло, прямая панель, изогнутая панель, лицевая панель под плитку",
        ],
        "images": [
            "image_1.png",
            "image_2.png",
            "image_3.png",
            "image_4.png",
            "image_5.png",
            "image_6.png",
            "image_7.png",
            "image_8.png",
            "image_9.png"
        ]
    },
    {
        "id": 3,
        "title": "Тип панели GORIZONT",
        "slug": "licevye_paneli_gorizont",
        "color": ["белый", "белый матовый", "черный", "черный матовый", "серый", "слоновая кость", "слоновая кость матовый", "красный", "золотой", "хром"],
        "features": [
            "Лицевые панели используются для декорирования корпуса вентилятора серии КВС",
            "Очень удобно при оформлении витрин и экономии складского пространства. Вам не нужно «плодить» множество комбинаций артикулов. Достаточно корпус с возможной опцией, плюс панель на выбор",
            "Изготавливаются из ABS-пластика",
            "Надежное крепление к корпусу вентилятора, что важно при потолочном монтаже",
            "Удобная полноцветная коробка с европодвесом и ревизионным окошком",
            "Возможные комплектации: пластик, стекло, прямая панель, изогнутая панель, лицевая панель под плитку",
        ],
        "images": [
            "image_1.png",
            "image_2.png",
            "image_3.png",
            "image_4.png",
            "image_5.png",
            "image_6.png",
            "image_7.png"
        ]
    },
    {
        "id": 4,
        "title": "Тип панели INSIDE",
        "slug": "licevye_paneli_inside",
        "color": ["под плитку"],
        "features": [
            "Лицевые панели используются для декорирования корпуса вентилятора серии КВС",
            "Очень удобно при оформлении витрин и экономии складского пространства. Вам не нужно «плодить» множество комбинаций артикулов. Достаточно корпус с возможной опцией, плюс панель на выбор",
            "Изготавливаются из ABS-пластика",
            "Надежное крепление к корпусу вентилятора, что важно при потолочном монтаже",
            "Удобная полноцветная коробка с европодвесом и ревизионным окошком",
            "Возможные комплектации: пластик, стекло, прямая панель, изогнутая панель, лицевая панель под плитку",
        ],
        "images": [
            "index.png",
            "image_1.png",
            "image_2.png"
        ]
    },
    {
        "id": 5,
        "title": "Тип панели GORIZONT",
        "slug": "system_plus_100_luna_gorizont",
        "color": ["белый", "серый", "слоновая кость", "золотой", "хром"],
        "specifications": [
            {
                "title": "Максимальный расход бытовых помещений воздуха, м3/ч",
                "value": "105"
            },
            {
                "title": "Уровень звукового давления, dB",
                "value": "26"
            },
            {
                "title": "Напряжение, В",
                "value": "220-240"
            },
            {
                "title": "Частота, Гц",
                "value": "50"
            },
            {
                "title": "Потребляемая мощность, Вт",
                "value": "13"
            },
            {
                "title": "Класс защиты (IP)",
                "value": "24"
            },
            {
                "title": "Масса, кг",
                "value": "0,5"
            }
        ],
        "features": [
            "Вентиляторы Виенто серии LUNA применяются для постоянной или периодической вытяжной вентиляции бытовых помещений",
            "Эстетичный дизайн",
            "Изготавливаются из ABS-пластика",
            "Двигатель на шарикоподшипнике, что обеспечивает долговечный потолочный монтаж",
            "Передняя крыльчатка с подкрученными лопастями",
            "Пониженный уровень шума",
            "Высокая производительность вентилятора",
            "Корпус вентилятора оснащен световым индикатором работы",
            "Жесткий укороченный фланец, не подверженный деформации",
            "Удобная полноцветная коробка с европодвесом и ревизионным окошком",
            "Монтаж при помощи шурупов"
        ],
        "images": [
            "image_1.png",
            "image_2.png",
            "image_3.png",
            "image_4.png",
            "image_5.png",
            "image_6.png",
            "image_7.png",
            "image_8.png",
            "image_9.png",
            "image_10.png",
            "image_11.png"
        ]
    },
    {
        "id": 6,
        "title": "Тип панели INSIDE",
        "slug": "system_plus_100_luna_inside",
        "color": ["под плитку"],
        "specifications": [
            {
                "title": "Максимальный расход бытовых помещений воздуха, м3/ч",
                "value": "105"
            },
            {
                "title": "Уровень звукового давления, dB",
                "value": "26"
            },
            {
                "title": "Напряжение, В",
                "value": "220-240"
            },
            {
                "title": "Частота, Гц",
                "value": "50"
            },
            {
                "title": "Потребляемая мощность, Вт",
                "value": "13"
            },
            {
                "title": "Класс защиты (IP)",
                "value": "24"
            },
            {
                "title": "Масса, кг",
                "value": "0,5"
            }
        ],
        "features": [
            "Вентиляторы Виенто серии LUNA применяются для постоянной или периодической вытяжной вентиляции бытовых помещений",
            "Эстетичный дизайн",
            "Изготавливаются из ABS-пластика",
            "Двигатель на шарикоподшипнике, что обеспечивает долговечный потолочный монтаж",
            "Передняя крыльчатка с подкрученными лопастями",
            "Пониженный уровень шума",
            "Высокая производительность вентилятора",
            "Корпус вентилятора оснащен световым индикатором работы",
            "Жесткий укороченный фланец, не подверженный деформации",
            "Удобная полноцветная коробка с европодвесом и ревизионным окошком",
            "Монтаж при помощи шурупов"
        ],
        "images": [
            "image_1.png",
            "image_2.png",
            "image_3.png"
        ]
    },
    {
        "id": 7,
        "title": "Серия КВС",
        "slug": "seria_kvs",
        "color": ["белый"],
        "specifications": [
            {
                "title": "Максимальный расход бытовых помещений воздуха, м3/ч",
                "value": "105"
            },
            {
                "title": "Уровень звукового давления, dB",
                "value": "26"
            },
            {
                "title": "Напряжение, В",
                "value": "220-240"
            },
            {
                "title": "Частота, Гц",
                "value": "50"
            },
            {
                "title": "Потребляемая мощность, Вт",
                "value": "13"
            },
            {
                "title": "Класс защиты (IP)",
                "value": "24"
            },
            {
                "title": "Масса, кг",
                "value": "0,5"
            }
        ],
        "features": [
            "Корпус вентилятора серии КВС применяются для постоянной или периодической вытяжной вентиляции бытовых помещений",
            "Корпус вентилятора не имеет лицевой панели! Покупатель вправе сам выбрать дизайн лицевой панели из ассортимента компании Виенто!",
            "Очень удобно при оформлении витрин и экономии складского пространства. Вам не нужно «плодить» множество комбинаций артикулов. Достаточно корпус с возможной опцией, плюс панель на выбор!",
            "Изготавливаются из ABS-пластика",
            "Двигатель на шарикоподшипнике, что обеспечивает долговечный потолочный монтаж",
            "Передняя крыльчатка с подкрученными лопастями",
            "Пониженный уровень шума!",
            "Высокая производительность вентилятора",
            "Корпус вентилятора оснащен световым индикатором работы",
            "Жесткий укороченный фланец, не подверженный деформации",
            "Удобная полноцветная коробка с европодвесом",
            "Монтаж при помощи шурупов",
            "Диаметр фланца – 100 мм"
        ],
        "equipment": [
            {
                "term": "C",
                "desc": "стандарт" 
            },
            {
                "term": "СК",
                "desc": "обратный клапан" 
            },
            {
                "term": "СВ",
                "desc": "тяговый выключатель" 
            },
            {
                "term": "СКВ",
                "desc": "тяговый выключатель и обратный клапан" 
            },
            {
                "term": "СТ",
                "desc": "вентилятор с таймером" 
            },
            {
                "term": "СН",
                "desc": "вентилятор с датчиком влажности" 
            },
        ],
        "images": [
            "index.png",
            "image_2.png",
            "image_3.png"
        ]
    }
]

const docs = [
    {
        "title": "Сертификат ТР ТС",
        "url": "",
    },
    {
        "title": "Декларация на соответствие ТР 037",
        "url": "",
    },
    {
        "title": "Экспертное заключение",
        "url": "",
    },
    {
        "title": "Отказное письмо по пожарной безопасности",
        "url": "",
    },
    {
        "title": "Паспорт бытовые вентиляторы AURAMAX",
        "url": "",
    },
    {
        "title": "Экспертное заключение №001043 от 13.03.2024 Бытовые вентиляторы",
        "url": "",
    },
    {
        "title": "Сертификат на бытовые вентиляторы 24.01.2023",
        "url": "",
    }
];

export default async function Page({ params }: any) {
    const productData = Products.find((obj: { slug: any; }) => {
        return obj.slug === params.product;
    });

    return (
        <>
            <div className="page-main__content main-content">
                <a className="main-content__back" href={`/products/ventilyatory_osevye_bytovye/ventilyatory_vytyazhnye_viento_system_plus/${params.subcategories}`}>Назад</a>
                
                <div className="main-content__header content-header">
                    <h2 className="content-header__title">Каталог</h2>
                    <p className="content-header__name">{productData?.title}</p>
                </div>

                <section className="main-content__product product">
                    <div className="product__container">
                        <div className="product__image">
                            <Gallery images={productData?.images} url={`/images/ventilyatory_osevye_bytovye/ventilyatory_vytyazhnye_viento_system_plus/${params.subcategories}/${params.product}`}/>
                        </div>
                        <div className={styles.description}>
                            <h1 className={styles.descriptionTitle}>{productData?.title} <br /> 
                                <span>Доступные цвета: {productData?.color.join(', ') + '.'}
                                </span>
                            </h1>
                            <ul className={styles.descriptionList}>
                                {
                                    productData?.features.map((item: string, index: number) => (
                                        <li key={index + uuidv4()} className={styles.descriptionItem}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        {productData?.specifications && (
                            <div className={styles.productSpecs}>
                                <h3 className={styles.productSpecsTitle}>Характеристики:</h3>
                                <div className={styles.productSpecsWrapper}>
                                    <ul className={styles.productSpecsList}>
                                        {
                                            productData.specifications
                                                .map(({title, value}, index: number) => (
                                                    <li key={index + uuidv4()} className={styles.productSpecsItem}>
                                                        <p className={styles.productSpecsItemValue}>{value}</p>
                                                        <h3 className={styles.productSpecsItemTitle}>{title}</h3>
                                                    </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        )}

                        <div className={styles.documents}>
                            <h3 className={styles.documentsTitle}>Документация и инструкции</h3>
                            <ul className={styles.documentsList}>
                                {
                                    docs.map(({title, url}, index) => (
                                        <li key={index} className={styles.documentsItem}>
                                            <h3 className={styles.documentsItemTitle}>{title}</h3>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}