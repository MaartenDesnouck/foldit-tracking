function updateHistory(playerList, HISTORY, row, date, topaantal){
  var score;
  var playername;
  var index;
  
  setValue(row,0,HISTORY,date);
  
  for(var i=0;i<topaantal;i++){ 
    playername =  rankingNamen[i];
    score = rankingScores[i];
    index = getListIndex(playername,playerList);
    
    setValue(row,index+1,HISTORY,score);
  }
}