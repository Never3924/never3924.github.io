"use client";

import Base from "@/app/base";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { JSX, Suspense } from "react";

export default function uploader() {
    const decoder = new TextDecoder();

    // https://zenn.dev/mizchi/articles/browser-gzip-inflate-deflate
    async function decompress(buffer: ArrayBuffer): Promise<string> {
        const ds = new DecompressionStream("gzip");
        const decompressedStream = new Blob([buffer]).stream().pipeThrough(ds);
        const buf = await new Response(decompressedStream).arrayBuffer();
        return decoder.decode(buf);
    }

    // https://stackoverflow.com/questions/21797299/how-can-i-convert-a-base64-string-to-arraybuffer
    function base64ToArrayBuffer(base64: string) {
        var binaryString = atob(base64);
        var bytes = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    async function getURL(): Promise<string | null> {
        const searchParams = useSearchParams();
        const link = searchParams.get("link");

        if (link === null) return null;

        const buffer = base64ToArrayBuffer(link);
        const decompress_link = await decompress(buffer);

        if (!decompress_link.startsWith("data:")) return null;

        return decompress_link;
    }

    async function body(): Promise<JSX.Element> {
        const url = await getURL();

        const invalidDOM = (
            <p>リンクが無効です。base64のリンクしか許可していません。</p>
        );

        if (url === null) {
            return invalidDOM;
        }

        return (
            <div>
                <p>
                    以下のサイトを開きます。
                    <strong>
                        ※移動先のリンクへは自己責任で移動してください。
                        <br />
                        何かしら被害にあっても責任は負いません。
                    </strong>
                </p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                </a>
            </div>
        );
    }

    return (
        <Suspense>
            <Base title={"外部のページへ飛びます"} description="">
                {body()}
            </Base>
        </Suspense>
    );
}
