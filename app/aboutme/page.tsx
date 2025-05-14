import Base from "@/app/base";
import Image from "next/image";
import styles from "@/app/aboutme/aboutme.module.css";

export default function Home() {
    return (
        <Base title={"私について"} description="自己紹介的な。">
            <p className={styles.p}>まぁ適当につらつらと書きます。</p>
            <p className={styles.p}>
                ホームページを作り直そーと思ってはや数ヶ月、今更完成しました
                <br />
                どうかしてるね
                <br />
                まぁ完成してよかったx2
                <br />
                ではさようなら
            </p>

            <p className={styles.p}>
                リンク集
                <br />
                <a
                    href="//scratch.mit.edu/users/Never3924/"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Scratch (アカウントページ)
                </a>
                <br />
                <a
                    href="//qiita.com/Never3924"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Qiita
                </a>
                <br />
                <a
                    href="//zenn.dev/never3924"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Zenn
                </a>
            </p>
        </Base>
    );
}
