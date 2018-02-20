/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arr = preferences; 
  var count = 0;
  var len = arr.length;
    for (var i = 0; i < len; i++){
    var a, b, c, d, e, f;
    a = arr[i];
    b = i + 1; 
    c = arr.indexOf(b)+1;
    d = arr[c-1];
    e = arr.indexOf(c)+1;
    f = arr[e-1];
    
    if (a==e && b==d && c==f && a!=b && d!=c && f!=e && a!=d && d!=f && a!=f){ 
      count++;
      delete arr[b-1];
      delete arr[c-1];
      delete arr[e-1]
    }
    else {
      delete arr[e-1];
    };
  }  
  for (var i = len; i > 0; i--){
    a = arr[i];
    b = i + 1; 
    c = arr.indexOf(b)+1;
    d = arr[c-1];
    e = arr.indexOf(c)+1;
    f = arr[e-1];
    
    if (a==e && b==d && c==f && a!=b && d!=c && f!=e && a!=d && d!=f && a!=f){ 
      count++;
      delete arr[b-1];
      delete arr[c-1];
      delete arr[e-1]
    }
    else {
      delete arr[e-1];
    };
  }
  for (var i = 0; i < len; i++){
    a = arr[i];
    b = i + 1; 
    c = arr.indexOf(b)+1;
    d = arr[c-1];
    e = arr.indexOf(c)+1;
    f = arr[e-1];
    
    if (a==e && b==d && c==f && a!=b && d!=c && f!=e && a!=d && d!=f && a!=f){ 
      count++;
      delete arr[b-1];
      delete arr[c-1];
      delete arr[e-1]
    }
    else {
      delete arr[c-1];
    };
  }
  for (var i = len; i > 0; i--){
    a = arr[i];
    b = i + 1; 
    c = arr.indexOf(b)+1;
    d = arr[c-1];
    e = arr.indexOf(c)+1;
    f = arr[e-1];
    
    if (a==e && b==d && c==f && a!=b && d!=c && f!=e && a!=d && d!=f && a!=f){ 
      count++;
      delete arr[b-1];
      delete arr[c-1];
      delete arr[e-1]
    }
    else {
      delete arr[e-1];
    };
  }
      
  return count;
};
  
 