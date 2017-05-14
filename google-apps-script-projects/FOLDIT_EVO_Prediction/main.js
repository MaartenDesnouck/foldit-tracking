var rankingNamen = [];
var rankingScores = [];

function main() {
  var DATA = '10Wtz7CCcGJtPSv6zffm0tdtjFn7EReJnZSA4STTY4iU';
  var data = SpreadsheetApp.openById(DATA);
  
  var BUFFER = data.getSheets()[0];
  var META = data.getSheets()[1];
  var HISTORY = data.getSheets()[2];
  
  var STARTDATUM = new Date("November 13, 2015 0:00:00");
  var progstart = new Date();
  var timezone = 'GMT';
  var date = Utilities.formatDate(progstart, timezone,'dd-MM-yyyy');
  var row = dayDiff(STARTDATUM,progstart)+1;
  

  var cycle = getValue(0,1,META);
  var topaantal = 15;
  
  if(cycle=='1'){
    setValue(0,1,META,'2');
    var playerList = getOldPlayerList(HISTORY);
    refreshRanking(topaantal);
    playerList = updatePlayerList(playerList, META, HISTORY);
    updateHistory(playerList, HISTORY, row, date, topaantal);
    setValue(2,1,META,Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd' at 'HH:mm:ss' ("+timezone+")'"));  
    
  }else if(cycle=='2'){
    setValue(0,1,META,'3');
    sortHistory(HISTORY, META, BUFFER, progstart, row, date);
    setValue(2,1,META,Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd' at 'HH:mm:ss' ("+timezone+")'"));   
    
  }else if(cycle=='3'){
    setValue(0,1,META,'1');
    updateChartLegend(HISTORY, META, row, topaantal);
    setValue(2,1,META,Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd' at 'HH:mm:ss' ("+timezone+")'"));
  }
}