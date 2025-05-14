"use client";

import { Base } from "@/app/ui/home/base";
import * as Icon from "react-feather";
import styles from "@/app/ui/home/page.module.css";

export default function Home() {
    return (
        <Base title={"Home"} link={"/home"} style="">
            <Icon.Home className={styles.div} />
        </Base>
    );
}
