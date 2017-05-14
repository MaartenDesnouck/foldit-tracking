function listContains(word,list){
  for(var it = 0;it<list.length;it++){
    if(list[it]==word){
      return true;
    }
  }
  return false;
}

function getListIndex(word,list){
  for(var it = 0;it<list.length;it++){
    if(list[it]==word){
      return it;
    }
  }
  return -1;
}