import Base from "@/app/base";
import Panel from "@/app/ui/page/panel";
import uploader from "@/public/panelIcons/tool/uploader.png";

export default function Home() {
    return (
        <Base title={"ツールとか"} description="作ったツール。">
            <Panel
                title="ファイルアップローダー"
                image={uploader}
                link="/tools/uploader"
            >
                <p>適当なファイルをアップロードします。</p>
            </Panel>

            {/* これから実装する <Panel
                title="リンク短縮"
                image={uploader}
                link="/tools/linkshorter"
            >
                <p>長いリンクを圧縮して短くします。</p>
            </Panel> */}
        </Base>
    );
}
