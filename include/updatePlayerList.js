function updatePlayerList(playerlist, META, HISTORY) {
    var playername = null;
    var playerteller = 0;

    playername = rankingNamen[playerteller];


    while (playername != null) {
        if (!listContains(playername, playerlist)) {
            playerlist.push(playername);
        }

        playerteller++;
        playername = rankingNamen[playerteller];
    }

    setValue(1, 1, META, playerlist.length);
    for (var r = 0; r < playerlist.length; r++) {
        setValue(0, r + 1, HISTORY, playerlist[r], 'black', 'white');
    }

    return playerlist;
}
