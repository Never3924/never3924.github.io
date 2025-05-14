import styles from "@/app/base.module.css";

type Props = {
    title: string;
    description: string;
    children: React.ReactNode;
};

export default function Base({ title, description, children }: Props) {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <h1>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.children}>{children}</div>
        </div>
    );
}
