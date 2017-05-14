//returning old player list
function getOldPlayerList(HISTORY){
  var playername = null;
  var playerlist = [];
  var playerteller = 0;
  
  playername = getValue(0,1,HISTORY);
  
  while(playername!=null){
    playerlist.push(playername);
    playerteller++;
    playername = getValue(0,playerteller+1,HISTORY);
  }
  
  return playerlist;
}