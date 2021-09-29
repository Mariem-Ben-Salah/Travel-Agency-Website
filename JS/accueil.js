var slideIndex = 0;
var slideindex = 0;

class Destination {
  constructor(continent,ville, pays, prix, prixdej, pet, parking, PetitDejCompris, Wifi, AirC,note,image,description) {
    this.prix = prix;
    this.pays = pays;
    this.pet = pet;
    this.parking = parking;
    this.wifi = Wifi;
    this.prixdej = prixdej;
    this.ville = ville;
    this.AirC = AirC;
    this.continent=continent;
    this.note=note;
    this.description=description;
    this.image=image;
  }
}

var Sydney = new Destination('Océanie',"Sydney","Australie",100,30,true,false,true,true, true,9,"../img/sydney.jpg","Sydney, capitale de la Nouvelle-Galles du Sud et l'une des plus grandes villes d'Australie, est renommée pour son opéra situé dans le port, avec son design distinctif en forme de voiles. Le vaste Darling Harbour et le plus petit port de Circular Quay sont des pôles majeurs de la vie au bord de l\'eau, à proximité du Harbour Bridge et des jardins botaniques royaux. La plate-forme extérieure de Sydney Tower, le Skywalk, offre une vue à 360 degrés sur la ville et ses banlieues.");
var Casablanca = new Destination('Afrique',"Casablanca","Maroc",90,20,true,true,true,true, true,8.7,'../img/casablanca.png',"Casablanca est une ville portuaire et un pôle commercial situé à l'ouest du Maroc, face à l'océan Atlantique. L'héritage colonial français de la ville se reflète dans l'architecture mauresque du centre-ville, alliant style mauresque et Art déco européen. Partiellement érigée sur l'eau, l'immense mosquée Hassan II est un magnifique chef d'oeuvre a voir absolument , achevée en 1993, comprend un minaret de 210 mètres de haut avec des lasers orientés vers La Mecque");
var djerba = new Destination('afrique',"djerba","tunisie",30,
    15,true,false,true,true, false,5,'../img/djerba.jpg',"Ajaccio est la capitale de la Corse, une île française en mer Méditerranée. Cité portuaire sur la sauvage côte ouest de l'île, elle est la ville qui a vu naître Napoléon Bonaparte, empereur français, en 1769. Sa demeure ancestrale, la maison Bonaparte, est à présent un musée exposant des objets de famille. La cathédrale baroque Notre-Dame, érigée au XVIe siècle, abrite des peintures de Delacroix et du Tintoret. C'est ici qu'a été baptisé Napoléon.");
var Londres = new Destination('Europe',"Londres","Angleterre",250,35,true,true,true,true, true,9,'../img/londre.jpg',"Londres, la capitale de l'Angleterre et du Royaume-Uni, est une ville moderne dont l'histoire remonte à l'époque romaine. En son centre se dressent l'imposant Parlement, l'emblématique Big Ben et l'abbaye de Westminster, lieu de couronnement des monarques britanniques. De l'autre côté de la Tamise, le London Eye, la grande roue, offre une vue panoramique sur le South Bank Center, et toute la ville.");

var catalogue =[Sydney,Casablanca,djerba,Londres];


function openForm() {
  console.log('test');
  if (document.getElementById('myForm').style.display ==='none') {
    document.getElementById('myForm').style.display = 'block';
    if (localStorage.getItem('etatConexion') != null ) {

      if (!JSON.parse(localStorage.getItem('etatConexion')).etat) {
        document.getElementById('se_déconnecter').style.display = 'none';
        l=document.getElementsByClassName('se_connecter');
        for (i in l){
          l[i].style.display='block';
        } ;
      }
      if (JSON.parse(localStorage.getItem('etatConexion')).etat) {
        l=document.getElementsByClassName('se_connecter');
        for (i in l){
          l[i].style.display='none';
        } ;
        document.getElementById('se_déconnecter').style.display = 'block';
      }
    }
  } else if (document.getElementById('myForm').style.display ==='block') {
    document.getElementById('myForm').style.display = 'none';


  }
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}





function showSlides() {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function remplissage(){
  debut()
  
  for( var i in catalogue){
    ville=catalogue[i];

    let DivIni=document.getElementById('column2');
    let currendDiv =document.createElement('div');
    currendDiv.setAttribute('class','myslides')
    let image1=document.createElement('img');
    image1.setAttribute('src',ville.image);
    image1.setAttribute('class','image');
    let description=document.createElement('p');
    description.setAttribute('class','description');
    let price=document.createElement('p');
    price.setAttribute('class','prix');
    price.textContent=ville.prix+'$';
    let titre=document.createElement('p');
    titre.setAttribute('class','ville');
    titre.textContent=ville.ville+ ' a seulement ';


    
    description.textContent=ville.description;
    console.log(description);
    currendDiv.appendChild(image1);
    currendDiv.appendChild(description);
    currendDiv.appendChild(price);
    currendDiv.append(titre);
    DivIni.appendChild(currendDiv);
  }
  showSlides()
  showslides()
}

function showslides() {
  var i;
  var slides = document.getElementsByClassName("myslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > slides.length) {slideindex = 1}
  slides[slideindex-1].style.display = "block";
  setTimeout(showslides, 3000)

}

function login(){
  email = document.getElementById('email').value ;
  pswd =    document.getElementById('psw').value ;
  Obj = JSON.parse(localStorage.getItem('utilisateurs')) || [];
  flag=false;
  cpt=0;
  nom='none'
  for (let x in Obj){
    if (Obj[x].email===email && Obj[x].pswd===pswd ){
      nom=Obj[x].Name +'  '+Obj[x].LastName ;
      flag=true;
      cpt=x;

      break
    }
  }
  if (flag){
    console.log('test')
    document.getElementById('id').innerHTML= 'Bienvenue'+' '+nom;
    openForm()
    localStorage.setItem('etatConexion',JSON.stringify({etat:true ,idconexion:cpt}));
    window.location.reload();
  }
  if (!flag){
    window.alert('Nom du compte ou mot de passe incorrect');
  }

}
function debut(){
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

}
function disconect(){
  localStorage.setItem('etatConexion',JSON.stringify({etat:false ,idconexion:null}));
  window.location.reload();
}
