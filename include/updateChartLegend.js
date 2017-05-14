function updateChartLegend(HISTORY, META, row, topaantal) {
    var totaalkolommen = getValue(1, 1, META);
    var kolom = 0;

    while (kolom != totaalkolommen) {
        kolom++;
        var waarde = getValue(row, kolom, HISTORY);
        var naam = getValue(0, kolom, HISTORY);

        if (kolom <= topaantal) {
            setValue(1, kolom, HISTORY, '[' + kolom + '] ' + naam + ' (' + waarde + ')');
        } else {
            setValue(1, kolom, HISTORY, '');
        }
    }
}
