export function help() {
    const root = document.getElementById("help");
    if (!root) throw new Error("ヘルプボタンが存在しません。");

    const icon = root.querySelector(".icon");

    const dialogBody = root.querySelector(".body");
    const dialogInner = root.querySelector(".body > .inner");

    if (!icon) throw new Error("ヘルプボタンのアイコンが存在しません。");
    if (!dialogBody) throw new Error("ヘルプダイアログが存在しません。");
    if (!dialogInner) throw new Error("ヘルプダイアログが存在しません。");

    icon.addEventListener("click", () => {
        dialogBody.showModal();
    });

    dialogInner.addEventListener("click", (e) => e.stopPropagation());
    dialogBody.addEventListener("click", () => dialogBody.close());
}
