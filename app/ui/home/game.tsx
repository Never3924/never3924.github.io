"use client";

import { Base } from "@/app/ui/home/base";
import * as Icon from "react-feather";
import styles from "@/app/ui/home/page.module.css";

export default function Game() {
    return (
        <Base title={"Games"} link={"/games"} style="">
            <Icon.PlayCircle className={styles.div} />
        </Base>
    );
}
