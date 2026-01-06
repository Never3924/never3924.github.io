export function saveData(hiScore, hiScoreBoard) {
    try {
        localStorage.setItem("hiScore", hiScore);
        localStorage.setItem("hiScoreBoard", JSON.stringify(hiScoreBoard));
    } catch (e) {
        throw new Error("保存機能に対応していません");
    }
}

export function getData() {
    try {
        const hiScoreText = localStorage.getItem("hiScore");
        const hiScoreBoardText = localStorage.getItem("hiScoreBoard");

        if (hiScoreText === null && hiScoreBoardText === null) {
            return null; // 何も保存されていない
        }

        const hiScore = parseInt(hiScoreText);
        const hiScoreBoard = JSON.parse(hiScoreBoardText);

        if (Number.isNaN(hiScore))
            throw new TypeError("保存されたデータが不正です");

        return {
            hiScoreBoard,
            hiScore,
        };
    } catch (e) {
        if (e instanceof SyntaxError) {
            // JSONパースエラー
            throw new TypeError("保存されたデータが不正です");
        }
        if (e instanceof DOMException && e.name === "SecurityError") {
            throw new TypeError("保存機能に対応していません");
        }
        throw e;
    }
}
