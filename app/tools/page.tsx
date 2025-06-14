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

            <Panel
                title="Base64リンク化"
                image={uploader}
                link="/tools/linkshorter"
            >
                <p>
                    Base64をリンクにします。
                    <br />
                    ※リダイレクト時に確認が入ります。
                </p>
            </Panel>
        </Base>
    );
}
