// Object to string. Returns a string representation of the object. Displays all records, not just the object's own records, unlike JSON.stringify(Object)

export function toStr(obj, short=false){
  let s="";
    for(let  i in obj) {
// If not_short version, or short with content true - show the entry
      if( !short || obj[i] ){ s += ""+i+" : "+ (obj[i]==="" ? '\"\"' : obj[i]) +",\n" }
    };
  return s;
};
