let num = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function HalfPyramid (num) {
  
    for (var i = 1; i <= num; i++) {
      var row = '';
      
    for (var j = 1; j <= (num - i); j++) {
        row += ' ';
      }
      
    for (var k = 1; k <= i; k++) {
        row += '#';
      }
      
    console.log(row);
    }
  }
  
HalfPyramid(num);