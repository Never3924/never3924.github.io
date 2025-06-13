import Base from "@/app/base";
import { File } from "@/app/ui/page/tools/uploader/file";

export default function uploader() {
    return (
        <Base title={"リンク短縮"} description="長いリンクを短くします">
            <span>ここにリンクを入力：</span>
            <input id="longlongLink" placeholder="https://example.com"></input>
        </Base>
    );
}
