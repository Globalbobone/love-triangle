/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arr = preferences; 
  var count = 0;
    for (var i = 0; i < arr.length; i++){
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    a = arr[i];
    b = i + 1; 
    c = arr.indexOf(b)+1;
    d = arr[c-1];
    e = arr.indexOf(c)+1;
    f = arr[e-1];

    
    if (a == e && a!=b && d!=c && f!=e && a!=d && d!=f && a!=f){ 
      count++;
      delete arr[b-1];
      delete arr[c-1];
      delete arr[e-1]
    };
  }  
  return count;
};
  
 