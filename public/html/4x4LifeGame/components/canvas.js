export function drawBoard(canvas, ctx, board) {
    canvas.width = board[0].length;
    canvas.height = board.length;

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (!board[i][j]) continue;
            ctx.fillRect(j, i, 1, 1);
        }
    }
}

const numberFont = [
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
    ],
    [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
    ],
    [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
    ],
    [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ],
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
    ],
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ],
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
    ],
];

export function drawNumber(canvas, ctx, x, y, number, size = 1) {
    const arrayNumber = number.toString().split("");
    for (let i = 0; i < arrayNumber.length; i++) {
        const font = numberFont[arrayNumber[i]];

        ctx.fillStyle = "#000";
        for (let j = 0; j < font.length; j++) {
            for (let k = 0; k < font[i].length; k++) {
                if (!font[j][k]) continue;

                ctx.fillRect(
                    x + k * size + i * 4 * size,
                    y + j * size,
                    size,
                    size
                );
            }
        }
    }
}
