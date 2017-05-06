function getValue(row, kolom, blad) {
    var data = blad.getDataRange().getValues();

    if (blad.getDataRange().getNumRows() < row + 1) {
        return undefined;
    } else {
        return data[row][kolom];
    }
}
