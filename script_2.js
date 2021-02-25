// Un prompt s'affiche avec la question suivante
let num = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Utilisateur rentre un nombre (par ex 4)

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
}

// Dans la console le résultat suivant est affiché
console.log(factorialize(num));