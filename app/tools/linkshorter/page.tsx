"use client";

import Base from "@/app/base";
import styles from "./linkshorter.module.css";

export default function uploader() {
    // https://zenn.dev/mizchi/articles/browser-gzip-inflate-deflate
    const encoder = new TextEncoder();

    async function compress(str: string): Promise<ArrayBuffer> {
        const cs = new CompressionStream("gzip");
        const buf = encoder.encode(str);
        const stream = new Response(buf).body!.pipeThrough(cs);
        return new Response(stream).arrayBuffer();
    }

    function validBase64(base64: string): boolean {
        // https://oboe2uran.hatenablog.com/entry/2019/03/01/212248
        const base64RegExp =
            /^data:.+\/.+;base64,([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/;

        return base64RegExp.test(base64);
    }

    async function convert(e: React.MouseEvent) {
        console.log(e.target);
        const eLongLongLink = document.getElementById("longlongLink");
        const eCompressed = document.getElementById(
            "compressed"
        ) as HTMLInputElement | null;

        if (eLongLongLink === null)
            return alert("エラーが発生しました。もう一度試してみてください。");

        if (eCompressed === null)
            return alert("エラーが発生しました。もう一度試してみてください。");

        eCompressed.value = "処理中です";

        const url = (eLongLongLink as HTMLInputElement).value;
        console.log(url);

        if (!validBase64(url)) return alert("無効なBase64です。");

        const compressArrayBuffer = await compress(url);

        // arrayBuffer to base64
        // btoaはパフォーマンス上の理由により使わないほうが良い
        const compressBuffer = Buffer.from(compressArrayBuffer);
        const compressBase64 = compressBuffer.toString("base64");

        const baseUrl = `${location.protocol}//${location.host}${location.pathname}/redirect?link=${compressBase64}`;

        eCompressed.value = baseUrl;
    }

    return (
        <Base title={"Base64短縮"} description="Base64をリンクに変換します。">
            <div className={styles.parent}>
                <span>ここにリンクを入力：</span>
                <input
                    id="longlongLink"
                    placeholder="data:text/plain;base64,なんたらかんたら"
                    className={styles.inputLink}
                ></input>
                <button className={styles.button} onClick={convert}>
                    変換する！
                </button>
                <br />
                <strong>悪意のあるコードは変換しないでください。</strong>
                <br />

                <div>
                    <p>変換結果（以下のURLをコピー）：</p>
                    <input
                        id="compressed"
                        className={styles.output}
                        readOnly
                    ></input>
                </div>
            </div>
        </Base>
    );
}
