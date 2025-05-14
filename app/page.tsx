import { redirect } from "next/navigation";

import Base from "@/app/base";

export default function Home() {
    redirect("./home");

    return (
        <Base title={"トップページ"} description="特になにもない">
            ホームにリダイレクトします。
        </Base>
    );
}
