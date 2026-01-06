import LifeGame from "./lib/lifegame.js";
import { drawBoard, drawNumber } from "./components/canvas.js";
import { performanceTest } from "./test.js";
import { control, getBoard } from "./components/control.js";

import {
    score,
    setHiScore,
    setHiScoreBoard,
    update,
} from "./components/score.js";
import { getData } from "./lib/save.js";
import { toast } from "./lib/toast.js";
import { help } from "./components/help.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//console.log(lifegame.getBoard());

function simulation(life, max) {
    return new Promise((resolve, reject) => {
        let generation = 0;

        function frame() {
            life.nextGeneration();
            drawBoard(canvas, ctx, life.getBoard());
            drawNumber(canvas, ctx, 1, 1, generation, 1);

            generation++;

            if (generation <= max) requestAnimationFrame(frame);
            else {
                resolve(life.getScore());
            }
        }

        requestAnimationFrame(frame);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        control();
        score();
        help();

        const data = getData();
        if (data === null) return;

        setHiScore(data.hiScore);
        setHiScoreBoard(data.hiScoreBoard);

        // 反映
        update();
    } catch (e) {
        toast(e.message, { backgroundColor: "red" });
    }
});

window.addEventListener("StartLifeGame", async (e) => {
    const board = getBoard();

    const life = new LifeGame(128);
    life.setBoard(board);

    const score = await simulation(life, 500);

    const event = new CustomEvent("EndLifeGame", {
        detail: { score },
    });

    window.dispatchEvent(event);
});
