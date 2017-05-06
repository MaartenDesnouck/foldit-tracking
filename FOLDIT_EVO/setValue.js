function setValue(row, kolom, blad, value) {
    if (blad.rows < row + 1) {
        var rij = [];
        rij.push(value);
        blad.appendRow(rij);
    } else {
        var cell = blad.getRange('a1');
        cell.offset(row, kolom).setValue(value);
    }
}

function setValueColor(row, kolom, blad, value, backgroundcolor) {
    if (blad.rows < row + 1) {
        var rij = [];
        rij.push(value);
        blad.appendRow(rij);
    } else {
        var cell = blad.getRange('a1');
        cell.offset(row, kolom).setValue(value);
        cell.offset(row, kolom).setBackground(backgroundcolor);
    }
}

function setValueFullColor(row, kolom, blad, value, backgroundcolor, fontcolor) {
    if (blad.rows < row + 1) {
        var rij = [];
        rij.push(value);
        blad.appendRow(rij);
    } else {
        var cell = blad.getRange('a1');
        cell.offset(row, kolom).setValue(value);
        cell.offset(row, kolom).setBackground(backgroundcolor);
        cell.offset(row, kolom).setFontColor(fontcolor);
    }
}
