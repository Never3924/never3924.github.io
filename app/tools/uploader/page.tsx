import Base from "@/app/base";
import { File } from "@/app/ui/page/tools/uploader/file";

export default function uploader() {
    return (
        <Base title={"ファイルアップローダー"} description="">
            <File link="/わあああ.exe" title="わあああ.exe" />
            <File link="/文字認識.sb3" title="文字認識.sb3" />
            <File link="/文字認識.txt" title="文字認識.txt" />
        </Base>
    );
}
