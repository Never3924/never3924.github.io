import Link from "next/link";
import styles from "@/app/ui/page/tools/uploader/file.module.css";

type Props = {
    link: string;
    title: string;
};

export function File({ link, title }: Props) {
    function access() {
        return "/file" + link;
    }
    return (
        <a download className={styles.link} href={access()}>
            {title}
        </a>
    );
}
