/** 
 * RICHIESTA EMAIL E APPARTENENZA ALLA LISTA
*/

// var utente
// var email

// // Chiedere all'utente la propria email
// utente = prompt('Inserire il proprio indirizzo email:');

// // Controllare l'appartenenza alla lista di chi può accedere
// email = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers']
// //console.table(email);

// for ( var i = 0; i < email.length; i++ ) {
//     var item = email[i];
//     //console.log(item);
    
//     if ( item == utente ) {
//         utente = true;
//     }
// }

// // Stampare messaggio inerente alla validità dell'indirizzo email
// // Console
// if ( utente == true ) {
//     message = 'Email valida';
//     console.log('Email valida');
// }
// else {
//     message = 'Email non valida';
//     console.log('Email non valida');
// }

// // Mostare a schermo
// document.getElementById('title').innerHTML = message;


/**
 * GIOCO DEI DADI
 */

 var giocatore
 var computer

 // Numeri generati casualmente
 giocatore = Math.floor(Math.random() * 6 ) + 1;
 console.log('Il tuo numero: ' + giocatore);

 computer = Math.floor(Math.random() * 6 ) + 1;
 console.log('Numero del Baanco: ' + computer);

 // Stabilire il vincitore in base al punteggio più alto
if ( giocatore > computer ) {
    message = 'Hai Vinto!';
    console.log(message);
}
else if ( giocatore < computer ) {
    message = 'Il Banco Vince!';
    console.log(message);
}
else {
    message = 'Pareggio: Prova Ancora!';
    console.log(message);
}

// // Console
// console.log('Il tuo numero: ' + giocatore);
// console.log('Numero del Baanco: ' + computer);
// console.log(message);

