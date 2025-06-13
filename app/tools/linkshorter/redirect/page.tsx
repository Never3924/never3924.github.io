"use client";

import Base from "@/app/base";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { JSX, Suspense } from "react";

export default function uploader() {
    const decoder = new TextDecoder();

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

    function getURL(): Promise<string> | null {
        const searchParams = useSearchParams();
        const link = searchParams.get("link");

        if (link === null) return null;

        const buffer = base64ToArrayBuffer(link);
        const decompress_link = decompress(buffer);

        return decompress_link;
    }

    async function body(): Promise<JSX.Element> {
        const url = await getURL();

        const invalidDOM = <p>リンクが無効です。</p>;

        if (url === null) {
            return invalidDOM;
        }

        return (
            <div>
                <p>以下のサイトを開きます。</p>
                <Link href={url}>{url}</Link>;
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
