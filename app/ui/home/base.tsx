"use client";

import styles from "@/app/ui/home/page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    title: string;
    link: string;
    children: React.ReactNode;
    style: string;
};

export const Base = ({ title, link, children, style }: Props) => {
    const pathname = usePathname();

    return (
        <Link
            className={`${styles.home} ${style} ${
                pathname.slice(0, link.length) === link ? styles.active : ""
            }`}
            href={link}
        >
            {children}
            <span className={`${styles.div} ${styles.span}`}>{title}</span>
        </Link>
    );
};
