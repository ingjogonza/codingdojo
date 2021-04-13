function camelcase(str){

    if (str.length===0){
      return "";
    }else{
      var y=str.search(/-|_/);
      var separator=str[y];
  //console.log(separator);
      var arr=str.split(separator);
      var camelcase1=str.slice(0,y);
  
      for (i=1;i<arr.length;i++){
       var arr2=arr[i];
       var camelcase2=arr2[0].toUpperCase();
      for(j=1;j<arr2.length;j++){ 
        camelcase2+=arr2[j];
      }
    camelcase1+=camelcase2;
    
     }
  return camelcase1;
      
    }
  
  
  }

  /**function toCamelCase(str) {
  return str.replace(/[_-][A-Za-z]/g, function(match) {return match[1].toUpperCase();});
} */
  var b=camelcase("The-stealth-warrior");
  console.log(b);