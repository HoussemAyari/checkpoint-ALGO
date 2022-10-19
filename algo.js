function compt(str) {
    let x = str.length;
    let y = 1;
    let z = str.toUpperCase();
    let w = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ' ') {
        y++;
      }
      if (z[i] == 'A' || z[i] == 'E' || z[i] == 'U' || z[i] == 'I' || z[i] == 'Y' || z[i] == 'O') {
        w++;
      }
    }
        return [x,y,w]


} 