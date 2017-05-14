function refreshRanking(topaantal){
  HTML = getWebpage('https://fold.it/portal/node/994237/soloists');
  var lijst = [];
  lijst = split(HTML, "<td class=\"view-field view-field-global-rank\">");
  var lijst2 = [];
  
  for(var i=6;i<topaantal+6;i++){ 
    //<td class="view-field view-field-global-rank"
    //>#1</td
    //><td class="view-field view-field-users-name"
    //><a href='/portal/user/352715' title=''
    //>Galaxie<span class="schl schl-ev"
    //>1</span
    //><span class="schl schl-so"
    //>4</span
    //></a
    //></td
    //><td class="view-field view-field-global-score" style="text-align: right"
    //>4332</td
    //></tr
    //><tr class="even">
    
    lijst2 = split(lijst[i],">");
    
    for(var j=0;j<lijst2.length;j++){
      var string = lijst2[j];
      
      if(j==1){
        //ranking
        string = string.substring(1,string.length-4);
      }else if(j==4){
        //naam
        string = string.substring(0,string.indexOf('<')-1);
        string = string.replace(/&nbsp;/g,' ');
        rankingNamen.push(string);
      }else if(j==11){
        //score
        string = string.substring(0,string.indexOf('<'));
        rankingScores.push(string);
      }
    }
  }
}