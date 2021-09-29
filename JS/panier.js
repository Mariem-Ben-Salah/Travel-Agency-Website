let produits = [
    {
        index :1,
        name: 'Voyage à Paris',
        tag : 'Paris',
        image: 'Paris' ,
        fuseau : 'Paris',
        continent : 'Europe',
        Pays : 'France',
        prix: 200,
        inPanier:0
    },

    {
        index :2,
        name: 'Voyage à Lyon',
        tag : 'Lyon',
        image: 'Lyon' ,
        fuseau :'Paris',
        continent : 'Europe',
        Pays : 'France',
        prix: 100,
        inPanier:0
    },

    {
        index :3,
        name: 'Voyage à Sydney',
        tag : 'Sydney',
        image: 'Sydney' ,
        fuseau : 'Sydney',
        continent : 'Australia',
        Pays : 'Australie',
        prix: 300,
        inPanier: 0
    },
{
        index :4,
        name: 'Voyage à Berlin',
        tag : 'Berlin',
        image: 'Berlin' ,
        fuseau : 'Berlin',
        continent : 'Europe',
        Pays : 'Allemagne',
        prix: 450,
        inPanier:0
    },

    {
        index :5,
        name: 'Voyage à Madrid',
        tag : 'Madrid',
        image: 'Madrid' ,
        fuseau : 'Madrid',
        continent : 'Europe',
        Pays : 'Espagne',
        prix: 230,
        inPanier:0
    },

    {
        index :6,
        name: 'Voyage à Londres',
        tag : 'Londres',
        image: 'Londres' ,
        fuseau : 'London',
        continent : 'Europe',
        Pays : 'Royaume Uni',
        prix: 500,
        inPanier: 0
    },
{
        index :7,
        name: 'Voyage à Tokyo',
        tag : 'Tokyo',
        image: 'Tokyo' ,
        fuseau : 'Tokyo',
        continent : 'Asia',
        Pays : 'Japon',
        prix: 700,
        inPanier:0
    },

    {
        index :8,
        name: 'Voyage à Djerba',
        tag : 'Djerba',
        image: 'Djerba' ,
        fuseau : 'Tunis',
        continent : 'Africa',
        Pays : 'Tunisie',
        prix: 180,
        inPanier:0
    },

    {
        index :9,
        name: 'Voyage à Lisbonne',
        tag : 'Lisbonne',
        image: 'Lisbonne' ,
        fuseau : 'Lisbon',
        continent : 'Europe',
        Pays : 'Portugal',
        prix: 320,
        inPanier: 0
}];


function Remplirpanier() {
    if (localStorage.getItem('etatConexion')!=null) {
        test = JSON.parse(localStorage.getItem('etatConexion')).etat;
        if (test) {
            All_users = JSON.parse(localStorage.getItem('utilisateurs'));
            Obj = JSON.parse(localStorage.getItem('etatConexion'));
            idconnected = JSON.parse(localStorage.getItem('etatConexion')).idconexion;
            nom = All_users[idconnected].Name + ' ' + All_users[idconnected].LastName;
            document.getElementById('id').innerHTML = 'Bienvenue' + ' ' + nom;
        }
    }

    obj = JSON.parse(localStorage.getItem('ReservInfo'));
    if (obj.length == 0) {
        document.getElementById('tableau').style.display = 'none';
    }
    if (obj.length > 0) {
        document.getElementById('message').style.display = 'none';
        idUser = JSON.parse(localStorage.getItem('etatConexion')).idconexion;
    }
    var tableau = document.getElementById("tableau");
    for (i in obj) {
        if (idUser == JSON.parse(localStorage.getItem('ReservInfo'))[i].idconnected) {
            var ligne = tableau.insertRow(-1);//on a ajouté une ligne
            var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
            colonne1.innerHTML += obj[i]['number'];
            var colonne2 = ligne.insertCell(1);//on ajoute la seconde cellule
            lien=document.createElement('a');
            lien.setAttribute('href',obj[i].lien.href);

            colonne2.appendChild(lien);
            console.log(obj[i].lien.href);
            lien.innerHTML=produits[obj[i].number].image;

        }
    }
    if (!JSON.parse(localStorage.getItem('etatConexion')).etat) {
        document.getElementById('tableau').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').innerHTML = 'Veuillez vous connecter pour voir votre panier'

    }
}
function disconect(){
    localStorage.setItem('etatConexion',JSON.stringify({etat:false ,idconexion:null}));
    window.location.reload();
}


function login(){
    email = document.getElementById('email').value ;
    pswd =    document.getElementById('psw').value ;
    Obj = JSON.parse(localStorage.getItem('utilisateurs')) || [];
    flag=false;
    cpt=0;
    for (x in Obj){
        if (Obj[x].email==email & Obj[x].pswd==pswd ){
            nom=Obj[x].Name +'  '+Obj[x].LastName ;
            flag=true;
            cpt=x;
            break
        }
    }
    if (flag){
        document.getElementById('id').innerHTML= 'Bienvenue'+' '+nom;
        document.getElementById("myForm").style.display = "none";
        localStorage.setItem('etatConexion',JSON.stringify({etat:true ,idconexion:cpt}));
        window.location.reload();
    }
    if (!flag){
        window.alert('Nom du compte ou mot de passe incorrect');
    }

}
function openForm() {
    console.log('test');
    if (document.getElementById('myForm').style.display ==='none') {
        document.getElementById('myForm').style.display = 'block';
        if (localStorage.getItem('etatConexion') !=null ) {

            if (JSON.parse(localStorage.getItem('etatConexion')).etat) {
                document.getElementById('login').style.display = 'none';
                document.getElementById('loged').style.display = 'block';
            }
            if (!JSON.parse(localStorage.getItem('etatConexion')).etat) {
                document.getElementById('loged').style.display = 'none';
                document.getElementById('login').style.display = 'block';
            }
        }
    } else if (document.getElementById('myForm').style.display ==='block') {
        document.getElementById('myForm').style.display = 'none';


    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}