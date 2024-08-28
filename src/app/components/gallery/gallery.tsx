'use client'

import Image from "next/image";
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Thumbs } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import { v4 as uuidv4 } from 'uuid';

import 'swiper/css';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type GalleryType = {
    images: string[];
    url: string;
}

const Gallery = ({images, url}: GalleryType) => {
    const galleryRef = useRef(null);
    const thumbsRef = useRef(null);
    console.log(images);
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: {
              type: "classic",
            },
        });

        if (thumbsRef.current) {
            new Swiper(thumbsRef.current, {
                slidesPerView: 4,
                navigation: false,
                spaceBetween: 10,
            });
          }

        if (galleryRef.current) {
            new Swiper(galleryRef.current, {
                modules: [Thumbs],
                slidesPerView: 1,
                 navigation: false,
                spaceBetween: 0,
                thumbs: {
                    swiper: thumbsRef.current,
                },
            });
          };
    }, [])

    return (
        <>
            <div className="swiper product-swiper" ref={galleryRef}>
                <div className="swiper-wrapper product-swiper__wrapper">
                    {
                        images.map((image, index) => (
                            <div key={index + uuidv4()} className="swiper-slide product-swiper__slide">
                                <a className="product-swiper__link" href={`${url}/${image}`} data-fancybox="gallery">
                                    <Image src={`${url}/${image}`} style={{objectFit: "contain"}} width="240" height="240" alt="Фото продукта"/>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>

            {
                images.length > 1 && (
                    <div className="swiper product-thumbs" ref={thumbsRef}>
                        <div className="swiper-wrapper product-thumbs__wrapper">
                            {
                                images.map((image, index) => (
                                    <div key={index + uuidv4()} className="swiper-slide product-thumbs__slide">
                                        <Image src={`${url}/${image}`} style={{objectFit: "contain"}} width="60" height="60" alt="Фото продукта"/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Gallery;