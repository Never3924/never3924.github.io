export function toast(text, styles = {}) {
    const root = document.createElement("div");

    root.textContent = text;
    root.classList.add("toast");

    for (const key of Object.keys(styles)) {
        root.style[key] = styles[key];
    }

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "×";

    closeBtn.classList.add("toastClose");

    closeBtn.addEventListener("click", () => root.remove());

    root.appendChild(closeBtn);

    document.body.appendChild(root);
}
