export default class LifeGame {
    #board;
    #boardBuffer;
    #boardSize;

    #score = 0;

    constructor(boardSize = 512) {
        // 上下左右に余白を作る
        this.#board = Array(boardSize + 2)
            .fill()
            .map((v) => Array(boardSize + 2).fill(0));

        this.#boardSize = boardSize;
    }

    setBoard(array) {
        const center = {
            x: Math.floor(this.#boardSize / 2),
            y: Math.floor(this.#boardSize / 2),
        };

        const startPos = {
            x: center.x - Math.floor(array[0].length / 2),
            y: center.y - Math.floor(array.length / 2),
        };

        for (let y = 0; y < array.length; y++) {
            for (let x = 0; x < array[y].length; x++) {
                this.#board[startPos.y + y + 1][startPos.x + x + 1] =
                    array[y][x];
                //console.log(startPos.y + y, startPos.x + x, array[y][x]);
            }
        }
    }

    getBoard() {
        return this.#board
            .slice(1, this.#board.length - 1)
            .map((v) => v.slice(1, v.length - 1));
    }

    nextGeneration() {
        this.#boardBuffer = [Array(this.#boardSize + 2).fill(0)];

        for (let i = 0; i < this.#boardSize; i++) {
            const line = [0];
            for (let j = 0; j < this.#boardSize; j++) {
                let cells = -this.#board[i + 1][j + 1];

                for (let k = -1; k <= 1; k++) {
                    for (let l = -1; l <= 1; l++) {
                        cells += this.#board[i + k + 1][j + l + 1];
                    }
                }

                if (cells === 2) {
                    // 周囲のセルが2つの場合。
                    // 本来なら生存だが、死滅は死滅のまま、生存は生存のままで変更する必要がない
                    // なので何もしない
                    line.push(this.#board[i + 1][j + 1]);
                    continue;
                }

                line.push(+(cells === 3));
                if (cells === 3) this.#score++;
            }
            line.push(0);
            this.#boardBuffer.push(line);
        }

        this.#boardBuffer.push(Array(this.#boardSize + 2).fill(0));

        this.#board = this.#boardBuffer;

        this.#boardBuffer = null;
    }

    getScore() {
        return this.#score;
    }
}
