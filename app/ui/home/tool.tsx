"use client";

import { Base } from "@/app/ui/home/base";
import * as Icon from "react-feather";
import styles from "@/app/ui/home/page.module.css";

export default function Tool() {
    return (
        <Base title={"Tools"} link={"/tools"} style="">
            <Icon.Tool className={styles.div} />
        </Base>
    );
}
