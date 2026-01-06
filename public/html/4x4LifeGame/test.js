import LifeGame from "./lib/lifegame.js";
import { drawBoard, drawNumber } from "./components/canvas.js";

// パフォーマンステスト
export function performanceTest() {
    const canvas = document.getElementById("game");
    const lifegame = new LifeGame(256);

    lifegame.setBoard([
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 1],

        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],

        [1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],

        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],

        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 1],
    ]);

    let generation = 0;

    const ctx = canvas.getContext("2d");

    //console.log(lifegame.getBoard());

    function frame() {
        lifegame.nextGeneration();
        drawBoard(canvas, ctx, lifegame.getBoard());
        drawNumber(canvas, ctx, 20, 20, generation);

        generation++;
    }

    let sum = 0;
    for (let i = 0; i < 10; i++) {
        const start = performance.now();
        frame();
        const end = performance.now();

        sum += end - start;
    }

    const time = sum / 10;
    console.log(`10回の平均処理時間：${time} ms`);
}
