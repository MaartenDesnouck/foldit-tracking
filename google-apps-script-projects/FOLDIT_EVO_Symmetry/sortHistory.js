function sortHistory(HISTORY, META, BUFFER, progstart, row){
  //bubblesort
  var totaalkolommen=getValue(1,1,META);
  var kolom=0;
  var tijd=secondDiff(progstart,new Date());
  
  while ((kolom!=totaalkolommen)&&(tijd<240)){
    kolom++;
    
    var w1isNull = false;
    var w2isNull = false;
    var beideZijnNull = false;
    
    var waarde1 = getValue(row,kolom,HISTORY);
    var waarde2 = getValue(row,kolom+1,HISTORY);
    
    if(waarde1==null){
      w1isNull = true;
      waarde1 = 0;
    } 
    if(waarde2==null){
      w2isNull = true;
      waarde2 = 0;
    }
    if(w1isNull&&w2isNull){
      beideZijnNull=true;
    }

    
    if(!beideZijnNull&&(waarde2>waarde1)){
      //switch beide kolommen en kijk kolom terug
      //getRange(row, column, numRows)
      
      var range1 = HISTORY.getRange(1,kolom+1,HISTORY.getMaxRows());
      var range2 = HISTORY.getRange(1,kolom+2,HISTORY.getMaxRows());
      var buffer = BUFFER.getRange(1,1,BUFFER.getMaxRows());
      
      //copyto ipv moveto gebruiken want anders doen de afgeleidde functies zot
      range2.copyTo(buffer);
      range1.copyTo(range2);
      buffer.copyTo(range1);
      buffer.clear();
      
      kolom = kolom-2;
    }
    tijd = secondDiff(progstart,new Date());
  }
}