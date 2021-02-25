const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// Est-ce que tous les livres ont été au moins empruntés une fois ?

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

function Rented(n) {
    return (n.rented > 0);
  }
  var result = books.some(Rented);

console.log(result);

// Quel est livre le plus emprunté ?

console.log("Quel est livre le plus emprunté ?");

let mostRented = books.reduce((max, book) => max.rented > book.rented ? max : book);
console.log(`Le livre le plus emprunté est: ${mostRented.title}`);

// Trouve le livre avec l'ID: 873495
console.log("Trouve le livre avec l'ID: 873495");

function idCheck(book) {
  return book.id == 873495;
}
var result2 = books.filter(idCheck);

console.log(`Le livre correspondant à l'id 873495 est:`);
console.table(result2);

// Supprime le livre avec l'ID: 133712 ;
console.log(`Supprime le livre avec l'ID: 133712`);
newArray = books.filter(function(book) {
    return book.id !== 133712;
  });
console.table(newArray);

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
console.log(`Trie les livres par ordre alphabétique`);

newArray.sort(function(a, b){

  var nameA = a.title, nameB = b.title
  if (nameA < nameB)
   return -1
  if (nameA > nameB)
   return 1
   return 0 
 });

console.table(newArray);

