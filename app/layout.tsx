import type { Metadata } from "next";
import "./globals.css";
import { notoSansJp } from "./ui/fonts";
import NavBar from "./ui/sideBar/nav-bar";
import styles from "@/app/mainPage.module.css";

export const metadata: Metadata = {
    title: "Never3924のホムペ",
    description: "NextJSで作ってみました。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body
                className={`${notoSansJp.className} antialiased ${styles.body}`}
            >
                <div className={styles.background}>
                    <div className={styles.nav}>
                        <NavBar />
                    </div>
                    <div className={styles.page}>{children}</div>
                </div>
            </body>
        </html>
    );
}
