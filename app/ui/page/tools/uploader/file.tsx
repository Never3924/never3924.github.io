import Link from "next/link";
import styles from "@/app/ui/page/tools/uploader/file.module.css";

type Props = {
    link: string;
    title: string;
};

export function File({ link, title }: Props) {
    function access() {
        return "download?file=uploader/file" + link;
    }
    return (
        <a href={access()} download={true} className={styles.link}>
            {title}
        </a>
    );
}
