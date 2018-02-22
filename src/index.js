module.exports = function getLoveTrianglesCount(preferences = []) {
  var arr = preferences; 
  let count = 0;
  var len = arr.length;
    for (var i = 1; i <= len; i++){
    let a, b, c;
    a = arr[i]-1;
    b = arr[a]-1; 
    c = arr[b];
    if (arr[i] == i+1){
      continue;
    }

    if (c == i+1){ 
      count++;
      delete arr[i];
    };
  }  
  return count;
};


//   for (var i = len; i > 0; i--){
//     a = arr[i];
//     b = i + 1; 
//     c = arr.indexOf(b)+1;
//     d = arr[c-1];
//     e = arr.indexOf(c)+1;
//     f = arr[e-1];
//     if (a==e && b==d && c==f && a!=b && d!=c && f!=e && a!=d && d!=f && a!=f){ 
//       count++;
//       delete arr[b-1];
//       delete arr[c-1];
//       delete arr[e-1]
//     }
//     else {
//       delete arr[e-1];
//     };
//   }
//   return count;
// };


