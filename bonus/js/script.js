//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
//Stampare a schermo attraverso il for in tutte le proprietà.
//- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
//- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//Usate prima i console.log e poi provare a stampare con jQuery:
//BONUS: Provate ad utilizzare Handlebars.


$(document).ready(function() {

    //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
    var studente = {
    'nome': 'Drive',
    'cognome': 'Lovegod',
    'eta': 35
    }

    //Stampare a schermo attraverso il for in tutte le proprietà.
    for (var k in studente){
    console.log(studente[k]);
    }

    //- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
    var classe = [
        {
        'nome': 'Drive',
        'cognome': 'Lovegod',
        'eta': 35
        },
        {
        'nome': 'Albert',
        'cognome': 'Jordan',
        'eta': 18
        },
        {
        'nome': 'Angel',
        'cognome': 'King',
        'eta': 82
        },
        {
        'nome': 'Richard',
        'cognome': 'Palomba',
        'eta': 37
        }
    ];

    // for (var i = 0; i < classe.length; i++){
    //     var student = $('.template .studente').clone();
    //     student.find('.nome h2').append('Nome: ' + classe[i].nome);
    //     student.find('.cognome h4').append('Cognome: ' + classe[i].cognome);
    //     student.find('.eta h4').append('Età: ' + classe[i].eta);
    //     console.log(student);
    // // console.log(classe[i].nome);
    // // console.log(classe[i].cognome);
    //     $('.classe').append(student);
    // }

    for (var i = 0; i < classe.length; i++) {
        var source = $('#entry-template').html();
        var template = Handlebars.compile(source);


        var html = template(classe[i]);

        $('.classe').append(html);

    }




    //Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

    $("#newst").click(newStudent);

    function newStudent(){
        var newStudent= {
            'nome': '',
            'cognome': '',
            'eta': ''
            }
        newStudent.nome = prompt('inserisci il nome');
        newStudent.cognome = prompt('inserisci il cognome');
        newStudent.eta = prompt('inserisci l\'eta');
        classe.push(newStudent);

            // var student = $('.template .studente').clone();
            // student.find('.nome h2').append('Nome: ' + classe[(classe.length-1)].nome);
            // student.find('.cognome h4').append('Cognome: ' + classe[(classe.length-1)].cognome);
            // student.find('.eta h4').append('Età: ' + classe[(classe.length-1)].eta);
            // $('.classe').append(student);
            var source = $('#entry-template').html();
            var template = Handlebars.compile(source);


            var html = template(classe[classe.length-1]);

            $('.classe').append(html);

        }







});
