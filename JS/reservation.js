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

var sejour_id = new URLSearchParams(window.location.search).get("id");
var nbrj;
var prixtot;
var nbradu;
var nbrenf;
var arriver;
var depart;

function Verifsend(){
    var phrase = document.getElementById("subject").value;
    console.log(phrase);
    if (document.getElementById("subject").value === "" ){
        alert("Vous n'avez mis aucun texte");
    }
    else {
        alert("Message envoyé, nous essayerons de vous répondre le plus rapidement possible")
        document.getElementById("subject").value=""
    }
}


 function Calculprix() {
     document.getElementById("sejourid").value = sejour_id;
    nbradu = document.forms["reserv"]["nbradu"].value;
    nbrenf = document.forms["reserv"]["nbrenf"].value;
    depart =document.forms["reserv"]["retour"].valueAsDate;
    arriver=document.forms["reserv"]["depart"].valueAsDate;
    nbrj = (depart-arriver) /86400000;
    document.getElementById("nbrJ").value = nbrj;
    let datemin=document.getElementById("depart").valueAsDate;
    let month2=datemin.getMonth()+1;
    let day=datemin.getDate()+1;
    var departstr = datemin.getFullYear() + "-" + month2 + '-' + day;
    document.getElementById('retour').setAttribute('min',departstr);
    var petitdej = document.getElementById("checkbox1").checked;

    if (arriver<depart){
        document.getElementById("nbrJ").value =nbrj;
    prixtot = (nbradu*(produits[sejour_id].prix+30*petitdej) + nbrenf*(0.4*produits[sejour_id].prix+petitdej*30))*nbrj;
    document.getElementById("prix").value = prixtot+'€';
    document.getElementById("prixtot").value = prixtot;

}}
function transfertverspanier() {
    var reservations ;
    reservations = (JSON.parse(localStorage.getItem('ReservInfo')) || []);
    reservations.push({number: reservations.length, lien: window.location, idconnected : JSON.parse(localStorage.getItem('etatConexion')).idconexion});
    localStorage.setItem('ReservInfo', JSON.stringify(reservations));
    window.location='destinations.html';
}
function start() {
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


    let sejour_id = new URLSearchParams(window.location.search).get("sejourid");
    let arriver= new URLSearchParams(window.location.search).get("depart");
    let retour= new URLSearchParams (window.location.search).get("retour");
    let nbrJ= new URLSearchParams (window.location.search).get("nbrJ");
    let prixtotal=new URLSearchParams (window.location.search).get("prixtot");
    let petitdej=new URLSearchParams (window.location.search).get("petitdej");

    let nbrEnf=new URLSearchParams (window.location.search).get("nbrenf");
    let nbradu=new URLSearchParams (window.location.search).get("nbradu");

console.log(produits[sejour_id].Pays);
    document.getElementById("Country").innerHTML = produits[sejour_id].Pays;
    document.getElementById("Town").innerHTML = produits[sejour_id].image;
    document.getElementById("NbrJour").innerHTML =nbrJ;
    document.getElementById("NbrAdu").innerHTML = nbradu;
    document.getElementById("NbrEnf").innerHTML =nbrEnf;
    document.getElementById("Date arrivee").innerHTML = arriver ;
    document.getElementById("Date depart").innerHTML = retour ;
    document.getElementById('petitdej').innerHTML='NON Inclus';
    if (petitdej==='on'){
        document.getElementById('petitdej').innerHTML='Inclus'; }
    document.getElementById("PrixTOT").innerHTML = prixtotal + "€";

    obj=JSON.parse(localStorage.getItem('ReservInfo'));
    var elementasupprimer= 'none'
    for (i in obj){
        if (obj[i]['lien']['href']===window.location){
            elementasupprimer=i

            document.getElementById('boutton1').style.display = 'none' ;
            document.getElementById('boutton3').style.visibility ='visible' ;
        }
    }
    localStorage.setItem('ReservInfo', JSON.stringify(obj));


}

function supprimer(){
        obj=JSON.parse(localStorage.getItem('ReservInfo'));
        for (i in obj){
            if (obj[i]['lien']['href']==window.location){
                elementasupprimer=i}}
        obj.splice(elementasupprimer,1);
        localStorage.setItem('ReservInfo', JSON.stringify(obj));
        window.location.replace('panier.html');
}
function sub(){
    if (localStorage.getItem('etatConexion') !=null ) {
        if (JSON.parse(localStorage.getItem('etatConexion')).etat){
            let L=[document.forms["reserv"]["nbradu"].value,
                document.forms["reserv"]["nbrenf"].value,
                document.forms["reserv"]["retour"].valueAsDate,
                document.forms["reserv"]["depart"].valueAsDate,
                document.getElementById('prix').value]
            if (L.indexOf('')===-1){
                console.log('clear');
                document.getElementById('reserv').submit();}
            else{
                window.alert('veuillez remplir les champs vides')
            }}


        if (!JSON.parse(localStorage.getItem('etatConexion')).etat){
            window.alert('veuillez vous connecter pour pouvoir reserver');
            openForm();}}


    else {
        window.alert('veuillez vous connecter pour pouvoir reserver');
        openForm();}

}