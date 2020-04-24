(function () {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */

  var person = {
    name: 'Pedro Henrick',
    lastname: 'Cavalcante Souza',
    age: 20
  }

  console.log('Propriedades de "person": ' + Object.values(person));

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */


  console.log('arr', Object.keys( person ));


  /*
  Crie um array vazio chamado `books`.
  */

  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */



   books.push({name: 'A escolha', pages: 200});
   books.push({name: 'Harry Potter', pages: 300});
   books.push({name: 'O senhor dos anéis', pages: 400});


  /*
  Mostre no console todos os livros.
  */
 console.log( '\nLista de livros:', books );

 /*
 Remova o último livro, e mostre-o no console.
 */
  var last = books.pop()
  console.log( '\nLivro que está sendo removido:', last);

  /*
  Mostre no console os livros restantes.
  */
  console.log( '\nAgora sobraram somente os livros:',  books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  var str = JSON.stringify(books);

  /*
  Mostre os livros nesse formato no console:
  */
 console.log( '\nLivros em formato string:', str);


  /*
  Converta os livros novamente para objeto.
  */
  console.log( '\nAgora os livros são objetos novamente:', JSON.parse(str) );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */

  for (let i = 0; i < books.length; i++) {
     for (const prop in books[i]) {
           const element = books[i][prop];

           console.log( prop + ': ' + element);

     }
  }


  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = [];

  myName.push('P');
  myName.push('e');
  myName.push('d');
  myName.push('r');
  myName.push('o');

   console.log('\nMeu nome é:', myName.join(''));

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  // ?

   console.log('\nMeu nome invertido é:', myName.reverse().join('') );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  // ?

   console.log('\nAgora em ordem alfabética:', myName.sort() );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  // ?
})();
