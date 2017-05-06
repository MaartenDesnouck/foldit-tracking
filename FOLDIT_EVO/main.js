var rankingNamen = [];
var rankingScores = [];

function main() {
    var DATA = '1LKtnhpSPJ4E-5v4gokUeJynISEdq_n2yUh9iFg0p3KQ';
    var data = SpreadsheetApp.openById(DATA);

    var BUFFER = data.getSheets()[0];
    var EVO_META = data.getSheets()[1];
    var EVO_HISTORY = data.getSheets()[2];

    var HISTORY = EVO_HISTORY;
    var META = EVO_META;

    var STARTDATUM = new Date("April 7, 2014 0:00:00");
    var progstart = new Date();
    var timezone = 'GMT';
    var date = Utilities.formatDate(progstart, timezone, 'dd-MM-yyyy');
    var row = dayDiff(STARTDATUM, progstart) + 1;

    var cycle = getValue(0, 1, META);
    var topaantal = 15;

    if (cycle == '1') {
        var playerList = getOldPlayerList(HISTORY);
        refreshRanking(topaantal);
        playerList = updatePlayerList(playerList, META, HISTORY);
        updateHistory(playerList, HISTORY, META, row, date, topaantal);
        setValue(0, 1, META, '2');
        setValue(2, 1, META, Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd' at 'HH:mm:ss' (" + timezone + ")'"));

    } else if (cycle == '2') {
        sortHistory(HISTORY, META, BUFFER, progstart, row, date);
        setValue(0, 1, META, '3');
        setValue(2, 1, META, Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd' at 'HH:mm:ss' (" + timezone + ")'"));

    } else if (cycle == '3') {
        updateChartLegend(HISTORY, META, row, topaantal);
        setValue(0, 1, META, '1');
        setValue(2, 1, META, Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd' at 'HH:mm:ss' (" + timezone + ")'"));
    }
}
