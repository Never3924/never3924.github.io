"use client";

import { Base } from "@/app/ui/home/base";
import Image from "next/image";
import styles from "@/app/ui/home/page.module.css";

export default function AboutMe() {
    return (
        <Base title={"About Me"} link={"/aboutme"} style={styles.aboutme}>
            <Image
                src={"/never3924Icon.png"}
                width={24}
                height={24}
                className={styles.div}
                alt="Never3924's Icon"
            />
        </Base>
    );
}
