"use client";

import Image, { StaticImageData } from "next/image";
import styles from "@/app/ui/page/panel.module.css";

type Props = {
    title: string;
    image: StaticImageData;
    children: React.ReactNode;
    link: string;
};

export default function Panel({ title, image, children, link }: Props) {
    function access() {
        location.pathname = link;
    }
    return (
        <div className={styles.panel} onClick={access}>
            <Image
                src={image}
                width={150}
                height={100}
                alt={`${title}'s Image`}
                className={styles.image}
            ></Image>
            <p>{title}</p>
            {children}
        </div>
    );
}
