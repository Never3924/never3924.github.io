const boardSize = 4;
let board = Array(boardSize)
    .fill()
    .map((v) => Array(boardSize).fill(0));

function replacePx(text) {
    const unit = text.replace(/^\d+(\.\d+)?/, "");

    return parseFloat(text.replace(unit, ""));
}

export function draw(canvas, ctx, board) {
    ctx.fillStyle = "#000";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (!board[i][j]) continue;

            ctx.fillRect(j, i, 1, 1);
        }
    }
}

export function control() {
    const root = document.querySelector("#control > .initBoard");
    const clearBtn = document.querySelector("#control > .buttons > .clear");
    const startBtn = document.querySelector("#control > .buttons > .start");

    let width = replacePx(getComputedStyle(root).width);
    let height = replacePx(getComputedStyle(root).height);

    root.width = boardSize;
    root.height = boardSize;

    window.addEventListener("resize", () => {
        width = replacePx(getComputedStyle(root).width);
        height = replacePx(getComputedStyle(root).height);
    });

    const ctx = root.getContext("2d");

    root.addEventListener("click", (e) => {
        const x = Math.ceil(e.offsetX / (width / boardSize)) - 1;
        const y = Math.ceil(e.offsetY / (height / boardSize)) - 1;

        board[y][x] = +!board[y][x];

        draw(root, ctx, board);
    });

    clearBtn.addEventListener("click", () => {
        board = Array(boardSize)
            .fill()
            .map((v) => Array(boardSize).fill(0));

        draw(root, ctx, board);
    });

    startBtn.addEventListener("click", () => {
        startBtn.disabled = true;
        const event = new CustomEvent("StartLifeGame");

        window.dispatchEvent(event);
    });

    window.addEventListener("EndLifeGame", async (e) => {
        startBtn.disabled = false;
    });
}

export function setBoard(newBoard) {
    board = newBoard.map(row => [...row]);
}

export function getBoard() {
    return board.map(row => [...row]);
}
