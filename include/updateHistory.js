function updateHistory(playerList, HISTORY, row, date, topaantal) {
    var score;
    var playername;
    var index;

    setValue(row, 0, HISTORY, date);

    for (var i = 0; i < topaantal; i++) {
        playername = rankingNamen[i];
        score = rankingScores[i];
        index = getListIndex(playername, playerList);

        //Check die gwn waarde van vorige dag kopieert als de waarde null is
        if (!score || score == 0) {
            setValue(row, index + 1, HISTORY, getValue(row - 1, index + 1, HISTORY));
        } else {
            setValue(row, index + 1, HISTORY, score);
        }
    }
}
