import { draw, getBoard, setBoard } from "./control.js";
import { saveData } from "../lib/save.js";
import { toast } from "../lib/toast.js";

let hiScore = 0;
let hiScoreBoard = null;

export function update() {
    const hiScoreElement = document.querySelector(
        "#control > .score > .hiScore > span"
    );

    if (hiScoreElement === null)
        throw new Error("ハイスコアが更新できませんでした");

    hiScoreElement.textContent = hiScore;
    document.querySelector("#control > .score > .hiScore").hidden = false;
}

export function score() {
    const hiScoreElement = document.querySelector(
        "#control > .score > .hiScore"
    );

    if (hiScoreElement !== null) {
        hiScoreElement.addEventListener("click", () => {
            if (!hiScoreBoard) return;
            setBoard(hiScoreBoard);

            const root = document.querySelector("#control > .initBoard");
            const ctx = root.getContext("2d");
            draw(root, ctx, getBoard());
        });
    }

    window.addEventListener("EndLifeGame", async (e) => {
        const score = e.detail.score;

        try {
            const scoreElement = document.querySelector(
                "#control > .score > .score > span"
            );

            if (!scoreElement) throw new Error("スコアが更新できませんでした");

            scoreElement.textContent = score;

            if (score > hiScore) {
                hiScore = score;
                hiScoreBoard = getBoard();

                update();
                saveData(hiScore, hiScoreBoard);
            }
        } catch (e) {
            toast(e.message, { backgroundColor: "red" });
        }
    });
}

export function getHiScore() {
    return hiScore;
}

export function getHiScoreBoard() {
    return hiScoreBoard.map((v) => [...v]);
}

export function setHiScore(newHiScore) {
    if (!Number.isFinite(newHiScore))
        throw new TypeError("引数newHiScoreは数字でなければなりません");

    hiScore = newHiScore;

    update();
}

export function setHiScoreBoard(newHiScoreBoard) {
    if (
        newHiScoreBoard === null ||
        newHiScoreBoard === undefined ||
        !Array.isArray(newHiScoreBoard) ||
        /* 配列形状チェック */
        !(
            newHiScoreBoard.length === 4 &&
            newHiScoreBoard.every((v) => v.length === 4)
        )
    )
        throw new TypeError(
            "引数newHiScoreBoardは4x4の二次元配列でなければなりません"
        );

    hiScoreBoard = newHiScoreBoard.map((v) => [...v]);
}
