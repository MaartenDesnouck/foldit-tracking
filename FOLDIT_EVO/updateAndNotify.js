function updateAndNotify(row, kolom, META, score) {
    var old = getValue(row, kolom, META);
    var diff = score - old;

    if (diff !== 0) {
        setValue(row, kolom, META, score);

        var body = 'FOLDIT EVO is now ' + score;

        if (diff > 0) {
            body += ' [+' + diff + ']';
        } else {
            body += ' [' + diff + ']';
        }

        var subject = '##IFTTTnotification';
        var recipient = 'trigger@recipe.ifttt.com';

        MailApp.sendEmail(recipient, subject, body);
    }
}
